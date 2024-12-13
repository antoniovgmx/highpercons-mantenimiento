<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="check_circle" title="60%" subTitle="Disponibilidad este mes" supTitle="Octubre" color="#4caf50"/>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="local_shipping" title="38 camiones" subTitle="Disponibilidad hoy" supTitle="De 50 disponibles" color="#4caf50"/>
      </v-flex>
      <!-- Widgets Ends -->
      <!-- Statistics -->
      <!-- <v-flex d-flex lg4 sm6 xs12>
        <site-view-statistic/>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <location-statistic/>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <total-earnings-statistic/>
      </v-flex> -->
      <!-- Statistics Ends -->
      <!-- DataTable&TimeLine Starts -->
      <v-flex d-flex lg12 sm6 xs12>
        <data-table :tableData="tableData"/>
      </v-flex>

      <!-- <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <bar-chart :data="chartData" :library="chartOptions" :colors="colors" :download="true" />
        </v-card>
      </v-flex> -->
      
      <v-flex d-flex lg12 sm6 xs12>
        <stacked-column-chart/>
      </v-flex>

      <!-- <v-flex d-flex lg12 sm6 xs12>
        <div>
          <apexchart type="bar" height="550" :options="chartOptions" :series="series"></apexchart>
        </div>
      </v-flex> -->

      <!-- <v-flex d-flex lg4 sm6 xs12>
        <time-line />
      </v-flex> -->
      <!-- DataTable&TimeLine Ends -->
      <!-- <v-flex d-flex lg6 sm6 xs12>
        <stepper/>
      </v-flex> -->
      <!-- <v-flex d-flex lg6 sm6 xs12>
        <user-tree-view />
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        series: [
          {
          name: 'Cargando',
          data: [3, 2, 3, 2, 2, 4, 3]
          }, 
          {
            name: 'Transito',
            data: [21, 22, 18, 24, 23, 21, 16]
          }, 
          {
            name: 'Descargando',
            data: [2, 2, 2, 2, 2, 3, 2]
          }, 
          {
            name: 'Taller',
            data: [1, 2, 2, 5, 0, 4, 2]
          },
          {
            name: 'Espera',
            data: [3, 4, 2, 0, 2, 1, 2]
          }, 
          {
            name: 'Patio',
            data: [2, 1, 1, 2, 3, 1, 5]
          },
          {
            name: 'Sin Operador',
            data: [0, 0, 0, 0, 0, 0, 1]
          },
          {
            name: 'Siniestro',
            data: [0, 0, 0, 0, 12, 0, 0]
          }
        ],
        chartOptions: {
          // colors: [
          //   "#4CAF50", "#8BC34A", "#009688", // Verdes
          //   "#F44336", // Rojo
          //   "#FF5722", // Naranja
          //   "#9C27B0", "#3F51B5", "#03A9F4", // Azules
          //   "#FF9800", "#795548", // Narankas
          //    "#9E9E9E", "607D8B", "#000000" // Grises
          // ],

          colors: [
            "#4CAF50", // Cargando (Verde)
            "#009688", // Descargando (Verde)
            "#8BC34A", // Transito (Verde)
            "#FF5722", // Taller (Naranja)
            "#795548", // Espera (Café)
            "#9E9E9E", // Patio (Gris)
            "#607D8B", // Sin Operador ()
            "#000000", // Siniestro
            "#9C27B0", "#3F51B5", "#03A9F4", // Azules
            "#FF9800", "#795548", // Narankas
            "#9E9E9E", "#000000" // Grises
          ],
          
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
          },
          // plotOptions: {
          //   bar: {
          //     horizontal: true,
          //   },
          // },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          title: {
            text: 'Disponibilidad mensual de unidades'
          },
          xaxis: {
            categories: ["Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre"],
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " días"
              }
            }
          },
          fill: {
            opacity: 1
          
          },
          legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 0
          }
        },
        tableData: {
          items: [
            {
                "numero_economico": "5084982210",
                "matricula": "ZQ5RB8",
                "estado": "en ruta",
                "ultimo_cambio": "10/02/2025",
                "disponibilidad": "81%",
                "proximo_mantenimiento": "06/12/2024"
            },
            {
                "numero_economico": "5357987936",
                "matricula": "S5G95Z",
                "estado": "en ruta",
                "ultimo_cambio": "29/02/2024",
                "disponibilidad": "88%",
                "proximo_mantenimiento": "28/11/2025"
            },
            {
                "numero_economico": "8184680867",
                "matricula": "BB4JHL",
                "estado": "mantenimiento",
                "ultimo_cambio": "25/09/2024",
                "disponibilidad": "77%",
                "proximo_mantenimiento": "18/12/2024"
            },
            {
                "numero_economico": "5679676071",
                "matricula": "TW4OZ0",
                "estado": "mantenimiento",
                "ultimo_cambio": "13/11/2024",
                "disponibilidad": "84%",
                "proximo_mantenimiento": "30/07/2024"
            },
            {
                "numero_economico": "8020006628",
                "matricula": "RFOUB9",
                "estado": "mantenimiento",
                "ultimo_cambio": "30/12/2025",
                "disponibilidad": "73%",
                "proximo_mantenimiento": "24/02/2024"
            },
            {
                "numero_economico": "7779646821",
                "matricula": "ZL6FJQ",
                "estado": "en ruta",
                "ultimo_cambio": "08/11/2024",
                "disponibilidad": "83%",
                "proximo_mantenimiento": "04/06/2025"
            },
            {
                "numero_economico": "8485275965",
                "matricula": "BH1TU9",
                "estado": "mantenimiento",
                "ultimo_cambio": "27/09/2025",
                "disponibilidad": "79%",
                "proximo_mantenimiento": "14/11/2024"
            },
            {
                "numero_economico": "1843766244",
                "matricula": "9C17RJ",
                "estado": "mantenimiento",
                "ultimo_cambio": "29/12/2024",
                "disponibilidad": "75%",
                "proximo_mantenimiento": "30/07/2025"
            },
            {
                "numero_economico": "1592520563",
                "matricula": "UAV9V9",
                "estado": "mantenimiento",
                "ultimo_cambio": "09/02/2025",
                "disponibilidad": "80%",
                "proximo_mantenimiento": "09/05/2024"
            },
            {
                "numero_economico": "5424367669",
                "matricula": "6K1SRJ",
                "estado": "en ruta",
                "ultimo_cambio": "23/07/2024",
                "disponibilidad": "82%",
                "proximo_mantenimiento": "19/05/2025"
            },
            {
                "numero_economico": "6518263502",
                "matricula": "MU8NSK",
                "estado": "en ruta",
                "ultimo_cambio": "06/07/2025",
                "disponibilidad": "76%",
                "proximo_mantenimiento": "08/07/2025"
            },
            {
                "numero_economico": "4023864715",
                "matricula": "ENP8YA",
                "estado": "en ruta",
                "ultimo_cambio": "20/07/2024",
                "disponibilidad": "90%",
                "proximo_mantenimiento": "27/06/2024"
            },
            {
                "numero_economico": "4652861924",
                "matricula": "G3EPIF",
                "estado": "mantenimiento",
                "ultimo_cambio": "05/03/2025",
                "disponibilidad": "78%",
                "proximo_mantenimiento": "01/02/2025"
            },
            {
                "numero_economico": "9302033631",
                "matricula": "RM48S1",
                "estado": "mantenimiento",
                "ultimo_cambio": "20/11/2025",
                "disponibilidad": "87%",
                "proximo_mantenimiento": "15/10/2025"
            },
            {
                "numero_economico": "5801700498",
                "matricula": "WUF7PB",
                "estado": "garage",
                "ultimo_cambio": "10/09/2025",
                "disponibilidad": "85%",
                "proximo_mantenimiento": "30/09/2024"
            },
            {
                "numero_economico": "2768209635",
                "matricula": "Z0EMHJ",
                "estado": "garage",
                "ultimo_cambio": "05/09/2025",
                "disponibilidad": "81%",
                "proximo_mantenimiento": "23/06/2024"
            },
            {
                "numero_economico": "9643099613",
                "matricula": "PLGYKJ",
                "estado": "en ruta",
                "ultimo_cambio": "11/02/2025",
                "disponibilidad": "80%",
                "proximo_mantenimiento": "01/06/2025"
            },
            {
                "numero_economico": "9101422167",
                "matricula": "RRPOSV",
                "estado": "en ruta",
                "ultimo_cambio": "08/08/2024",
                "disponibilidad": "79%",
                "proximo_mantenimiento": "25/08/2025"
            },
            {
                "numero_economico": "0779301385",
                "matricula": "NCQ85I",
                "estado": "mantenimiento",
                "ultimo_cambio": "01/08/2024",
                "disponibilidad": "86%",
                "proximo_mantenimiento": "17/08/2024"
            },
            {
                "numero_economico": "4189926012",
                "matricula": "JVU8DE",
                "estado": "garage",
                "ultimo_cambio": "23/11/2025",
                "disponibilidad": "78%",
                "proximo_mantenimiento": "17/03/2024"
            },
            {
                "numero_economico": "8527145617",
                "matricula": "F4LWHK",
                "estado": "en ruta",
                "ultimo_cambio": "24/02/2025",
                "disponibilidad": "72%",
                "proximo_mantenimiento": "04/03/2025"
            },
            {
                "numero_economico": "1518342764",
                "matricula": "FHYYBQ",
                "estado": "mantenimiento",
                "ultimo_cambio": "05/12/2025",
                "disponibilidad": "88%",
                "proximo_mantenimiento": "03/12/2024"
            },
            {
                "numero_economico": "6911660302",
                "matricula": "CYN9SQ",
                "estado": "garage",
                "ultimo_cambio": "15/11/2024",
                "disponibilidad": "84%",
                "proximo_mantenimiento": "24/03/2025"
            },
            {
                "numero_economico": "4281690327",
                "matricula": "ZMT4TQ",
                "estado": "garage",
                "ultimo_cambio": "30/09/2024",
                "disponibilidad": "76%",
                "proximo_mantenimiento": "01/08/2025"
            },
            {
                "numero_economico": "8248521244",
                "matricula": "T9SL7W",
                "estado": "garage",
                "ultimo_cambio": "14/09/2025",
                "disponibilidad": "75%",
                "proximo_mantenimiento": "02/11/2025"
            },
            {
                "numero_economico": "3069731309",
                "matricula": "ELSOSP",
                "estado": "en ruta",
                "ultimo_cambio": "25/04/2024",
                "disponibilidad": "84%",
                "proximo_mantenimiento": "13/03/2024"
            },
            {
                "numero_economico": "3859380885",
                "matricula": "XRH23L",
                "estado": "garage",
                "ultimo_cambio": "29/01/2024",
                "disponibilidad": "79%",
                "proximo_mantenimiento": "13/01/2024"
            },
            {
                "numero_economico": "2822678336",
                "matricula": "PYO66E",
                "estado": "mantenimiento",
                "ultimo_cambio": "10/02/2025",
                "disponibilidad": "73%",
                "proximo_mantenimiento": "22/04/2025"
            },
            {
                "numero_economico": "4058183103",
                "matricula": "YVOMR5",
                "estado": "en ruta",
                "ultimo_cambio": "09/07/2024",
                "disponibilidad": "76%",
                "proximo_mantenimiento": "25/08/2024"
            },
            {
                "numero_economico": "1558553293",
                "matricula": "9G5YKY",
                "estado": "en ruta",
                "ultimo_cambio": "04/03/2025",
                "disponibilidad": "79%",
                "proximo_mantenimiento": "13/01/2024"
            }
          ],
          headers: [
            // {
            //   value: 'Avatar',
            //   align: 'left',
            //   sortable: false
            // },
            {
              text: 'Número económico',
              value: 'numero_economico',
              align: 'left',
              sortable: true
            },
            {
              text: 'Matrícula',
              value: 'matricula',
              align: 'left',
              sortable: true
            },
            {
              text: 'Estado',
              value: 'estado',
              align: 'left',
              sortable: true
            },
            {
              text: 'Último cambio',
              value: 'ultimo_cambio',
              align: 'left',
              sortable: true
            },
            // {
            //   text: 'Disponibilidad este mes',
            //   value: 'disponibilidad_mensual',
            //   align: 'left',
            //   sortable: true
            // },
            {
              text: 'Próximo Mantenimiento',
              value: 'proximo_mantenimiento',
              align: 'left',
              sortable: true
            },
            // {
            //   text: 'Información',
            //   value: 'informacion',
            //   align: 'left',
            //   sortable: true
            // }
          ],
          options: {
            showDetailsLink: true,
            linkType: "camion/buscar",
            rowsList: [5, 10, 25, 50]
          }
        }
      };
    }
  };
</script>

<style>

</style>
