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
        <data-table/>
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
        }
      };
    }
  };
</script>

<style>

</style>
