<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="check_circle" title="$1,200,000" subTitle="Mantenimiento Preventivo" supTitle="36 eventos" color="#4caf50"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="dangerous" title="$722,550" subTitle="Mantenimiento Correctivo" supTitle="11 Eventos" color="#dc3545"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="health_and_safety" title="$0" subTitle="Recuperaciones / Siniestros"  supTitle="0 Eventos" color="#0866C6"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="car_repair" title="6" subTitle="Camiones en mantenimiento" supTitle="38% del total" color="#1D2939"/>
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
      tableData: {
        items: [
          {
            "numero_economico": "1234567890",
            "matricula": "AB3CD5",
            "mantenimientos_preventivos": 2,
            "gastos_preventivos": "$45,000",
            "mantenimientos_correctivos": 1,
            "gastos_correctivos": "$25,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 3,
            "total_de_gastos": "$70,000"
          },
          {
            "numero_economico": "2345678901",
            "matricula": "EF7GH2",
            "mantenimientos_preventivos": 4,
            "gastos_preventivos": "$62,000",
            "mantenimientos_correctivos": 0,
            "gastos_correctivos": "$0",
            "eventos_de_siniestro": 2,
            "gastos_de_siniestro": "$280,000",
            "total_de_eventos": 6,
            "total_de_gastos": "$342,000"
          },
          {
            "numero_economico": "3456789012",
            "matricula": "IJ9KL4",
            "mantenimientos_preventivos": 1,
            "gastos_preventivos": "$18,000",
            "mantenimientos_correctivos": 2,
            "gastos_correctivos": "$35,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 3,
            "total_de_gastos": "$53,000"
          },
          {
            "numero_economico": "4567890123",
            "matricula": "MN5PQ7",
            "mantenimientos_preventivos": 3,
            "gastos_preventivos": "$55,000",
            "mantenimientos_correctivos": 1,
            "gastos_correctivos": "$20,000",
            "eventos_de_siniestro": 1,
            "gastos_de_siniestro": "$160,000",
            "total_de_eventos": 5,
            "total_de_gastos": "$235,000"
          },
          {
            "numero_economico": "5678901234",
            "matricula": "RS6TU8",
            "mantenimientos_preventivos": 2,
            "gastos_preventivos": "$38,000",
            "mantenimientos_correctivos": 0,
            "gastos_correctivos": "$0",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 2,
            "total_de_gastos": "$38,000"
          },
          {
            "numero_economico": "6789012345",
            "matricula": "WX9YZ1",
            "mantenimientos_preventivos": 1,
            "gastos_preventivos": "$22,000",
            "mantenimientos_correctivos": 3,
            "gastos_correctivos": "$45,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 4,
            "total_de_gastos": "$67,000"
          },
          {
            "numero_economico": "7890123456",
            "matricula": "CD2EF6",
            "mantenimientos_preventivos": 4,
            "gastos_preventivos": "$75,000",
            "mantenimientos_correctivos": 2,
            "gastos_correctivos": "$30,000",
            "eventos_de_siniestro": 1,
            "gastos_de_siniestro": "$120,000",
            "total_de_eventos": 7,
            "total_de_gastos": "$225,000"
          },
          {
            "numero_economico": "8901234567",
            "matricula": "GH5IJ3",
            "mantenimientos_preventivos": 2,
            "gastos_preventivos": "$40,000",
            "mantenimientos_correctivos": 1,
            "gastos_correctivos": "$15,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 3,
            "total_de_gastos": "$55,000"
          },
          {
            "numero_economico": "9012345678",
            "matricula": "KL7MN9",
            "mantenimientos_preventivos": 3,
            "gastos_preventivos": "$58,000",
            "mantenimientos_correctivos": 0,
            "gastos_correctivos": "$0",
            "eventos_de_siniestro": 2,
            "gastos_de_siniestro": "$240,000",
            "total_de_eventos": 5,
            "total_de_gastos": "$298,000"
          },
          {
            "numero_economico": "0123456789",
            "matricula": "PQ4RS2",
            "mantenimientos_preventivos": 1,
            "gastos_preventivos": "$25,000",
            "mantenimientos_correctivos": 2,
            "gastos_correctivos": "$40,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 3,
            "total_de_gastos": "$65,000"
          },

          {
            "numero_economico": "1122334455",
            "matricula": "LM3NP6",
            "mantenimientos_preventivos": 3,
            "gastos_preventivos": "$65,000",
            "mantenimientos_correctivos": 2,
            "gastos_correctivos": "$40,000",
            "eventos_de_siniestro": 1,
            "gastos_de_siniestro": "$190,000",
            "total_de_eventos": 6,
            "total_de_gastos": "$295,000"
          },
          {
            "numero_economico": "2233445566",
            "matricula": "QR7ST9",
            "mantenimientos_preventivos": 1,
            "gastos_preventivos": "$25,000",
            "mantenimientos_correctivos": 0,
            "gastos_correctivos": "$0",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 1,
            "total_de_gastos": "$25,000"
          },
          {
            "numero_economico": "3344556677",
            "matricula": "UV2WX5",
            "mantenimientos_preventivos": 4,
            "gastos_preventivos": "$80,000",
            "mantenimientos_correctivos": 3,
            "gastos_correctivos": "$55,000",
            "eventos_de_siniestro": 2,
            "gastos_de_siniestro": "$230,000",
            "total_de_eventos": 9,
            "total_de_gastos": "$365,000"
          },
          {
            "numero_economico": "4455667788",
            "matricula": "YZ6AB3",
            "mantenimientos_preventivos": 2,
            "gastos_preventivos": "$45,000",
            "mantenimientos_correctivos": 1,
            "gastos_correctivos": "$20,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 3,
            "total_de_gastos": "$65,000"
          },
          {
            "numero_economico": "5566778899",
            "matricula": "CD9EF1",
            "mantenimientos_preventivos": 3,
            "gastos_preventivos": "$60,000",
            "mantenimientos_correctivos": 2,
            "gastos_correctivos": "$35,000",
            "eventos_de_siniestro": 1,
            "gastos_de_siniestro": "$170,000",
            "total_de_eventos": 6,
            "total_de_gastos": "$265,000"
          },
          {
            "numero_economico": "6677889900",
            "matricula": "GH4IJ7",
            "mantenimientos_preventivos": 1,
            "gastos_preventivos": "$30,000",
            "mantenimientos_correctivos": 3,
            "gastos_correctivos": "$50,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 4,
            "total_de_gastos": "$80,000"
          },
          {
            "numero_economico": "7788990011",
            "matricula": "KL5MN8",
            "mantenimientos_preventivos": 2,
            "gastos_preventivos": "$40,000",
            "mantenimientos_correctivos": 1,
            "gastos_correctivos": "$25,000",
            "eventos_de_siniestro": 2,
            "gastos_de_siniestro": "$260,000",
            "total_de_eventos": 5,
            "total_de_gastos": "$325,000"
          },
          {
            "numero_economico": "8899001122",
            "matricula": "PQ7RS3",
            "mantenimientos_preventivos": 4,
            "gastos_preventivos": "$75,000",
            "mantenimientos_correctivos": 0,
            "gastos_correctivos": "$0",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 4,
            "total_de_gastos": "$75,000"
          },
          {
            "numero_economico": "9900112233",
            "matricula": "TU2VW6",
            "mantenimientos_preventivos": 1,
            "gastos_preventivos": "$22,000",
            "mantenimientos_correctivos": 2,
            "gastos_correctivos": "$40,000",
            "eventos_de_siniestro": 1,
            "gastos_de_siniestro": "$180,000",
            "total_de_eventos": 4,
            "total_de_gastos": "$242,000"
          },
          {
            "numero_economico": "0011223344",
            "matricula": "XY8ZA4",
            "mantenimientos_preventivos": 3,
            "gastos_preventivos": "$55,000",
            "mantenimientos_correctivos": 1,
            "gastos_correctivos": "$15,000",
            "eventos_de_siniestro": 0,
            "gastos_de_siniestro": "$0",
            "total_de_eventos": 4,
            "total_de_gastos": "$70,000"
          },
        

          {
            "numero_economico": "1558553293",
            "matricula": "9G5YKY",
            "mantenimientos_preventivos": "2",
            "gastos_preventivos": "$60,000",
            "mantenimientos_correctivos": "0",
            "gastos_correctivos": "$0",
            "eventos_de_siniestro": "0",
            "gastos_de_siniestro": "$0",
            "total_de_eventos": "2",
            "total_de_gastos": "$60,000",
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
            text: 'Mantenimientos Preventivos',
            value: 'mantenimientos_preventivos',
            align: 'left',
            sortable: true
          },
          {
            text: 'Gastos Preventivos',
            value: 'gastos_preventivos',
            align: 'left',
            sortable: true
          },
          {
            text: 'Mantenimientos Correctivos',
            value: 'mantenimientos_correctivos',
            align: 'left',
            sortable: true
          },
          {
            text: 'Gastos Correctivos',
            value: 'gastos_correctivos',
            align: 'left',
            sortable: true
          },
          {
            text: 'Eventos de Siniestros',
            value: 'eventos_de_siniestro',
            align: 'left',
            sortable: true
          },
          {
            text: 'Gastos de Siniestro/Recuperación',
            value: 'gastos_de_siniestro',
            align: 'left',
            sortable: true
          },
          {
            text: 'Total de Eventos',
            value: 'total_de_eventos',
            align: 'left',
            sortable: true
          },
          {
            text: 'Total de Gastos',
            value: 'total_de_gastos',
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
          rowsList: [10, 25, 50]
        }
      }
    }
  }
}
</script>

<style>

</style>
