<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- <v-flex d-flex lg12 sm6 xs12>
        <p class="paragraph">Pareto de fallas por costo</p>
      </v-flex> -->
      <!-- Widgets-->
      <v-flex d-flex lg4 sm6 xs12>
        <widget icon="local_shipping" title="50 Camiones" subTitle="Total de camiones en la flota"
          color="#4caf50" />
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <widget icon="health_and_safety" title="7 Eventos" subTitle="Fallas este mes" color="#4caf50" />
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <widget icon="health_and_safety" title="$6,870,000" subTitle="Gastos" supTitle="" color="#4caf50" />
      </v-flex>

      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <apex-chart :chartOptions="paretoPorCosto.chartOptions" :chartData="paretoPorCosto.chartData" />
        </v-card>
      </v-flex>

      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <apex-chart :chartOptions="paretoPorEvento.chartOptions" :chartData="paretoPorEvento.chartData" />
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        paretoPorCosto:{
          chartData: [{
            name: "Costo",
            data: [3200000, 1600000, 1066666, 800000, 640000, 533333, 457142, 400000, 355555, 320000, 290909, 266666, 246153, 228571, 213333, 200000, 188235, 177777, 168421, 160000],
            type: "bar",
            color: "#4caf50",
          },{
            name: "Porcentaje Acumulado",
            data: [27, 41, 50, 57, 62, 67, 71, 74, 77, 80, 82, 85, 87, 89, 91, 92, 94, 95, 97, 100],
            type: "line",
            color: "#ff7a51",
          }],
          chartOptions: {
            chart: {
              height: 500,
            },
            plotOptions: {
              bar: {
                columnWidth: '45%',
              }
            },
            stroke: {
              width: [0, 4] // Removes stroke on bars, keeps it for the line
            },
            title: {
              text: 'Pareto de fallas por costo'
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true
            },
            xaxis: {
              labels: {
                rotate: -45
              },
              categories: [
                "Chasis y Largueros de Chasis",
                "Eje delantero",
                "Suspensión delantera",
                "Sistema de frenos",
                "Sistema de dirección",
                "Flechas cardán e interejes",
                "Sistema de escape",
                "Sistema eléctrico",
                "Cofre y parrilla",
                "Miscelaneos de chasis (5ta Rueda)",
                "Embrague y motor",
                "Motor y radiador",
                "Transmisión",
                "Ejes y suspensiones traseras",
                "Sistema de combustible y tanques",
                "Cabina y accesorios",
                "Rin de refacción",
                "Rines delanteros",
                "Rines traseros",
                "Miscelaneos de Rines y Llantas"
              ]
            },
            yaxis: [{
              seriesName: 'Costo',
              title: {
                text: "Costo",
              },
              labels: {
                show: true,
                formatter: (value) => { return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }) },
            },
            },{
              seriesName: 'Porcentaje Acumulado',
              opposite: true,
              title: {
                text: "Porcentaje Acumulado",
              },
              max: 100,
              min: 0
            }],
            tooltip: {
              y: {
                formatter: function (value, { series, seriesIndex, dataPointIndex }) {
                  if(seriesIndex === 1){
                    // return value
                    return value + "%"
                  } else {
                    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
                  }
                },
              }
            },
          },
        },
        paretoPorEvento: {
          chartData: [{
            name: "Eventos",
            data: [72, 32, 17, 10, 7, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            type: "bar",
            color: "#3F51B5",
          },{
            name: "Porcentaje Acumulado",
            data: [43, 63, 73, 79, 83, 86, 89, 91, 92, 93, 94, 95, 96, 97, 97, 98, 98, 99, 99, 100],
            type: "line",
            color: "#F44336",
          }],
          chartOptions: {
            chart: {
              height: 500,
            },
            plotOptions: {
              bar: {
                columnWidth: '45%',
              }
            },
            stroke: {
              width: [0, 4] // Removes stroke on bars, keeps it for the line
            },
            title: {
              text: 'Pareto de fallas por evento'
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true
            },
            xaxis: {
              labels: {
                rotate: -45
              },
              categories: [
                "Suspensión delantera",
                "Sistema de frenos",
                "Sistema de dirección",
                "Eje delantero",
                "Ejes y suspensiones traseras",
                "Flechas cardán e interejes",
                "Motor y radiador",
                "Sistema eléctrico",
                "Embrague y motor",
                "Sistema de combustible y tanques",
                "Transmisión",
                "Chasis y largueros de chasis",
                "Cofre y parrilla",
                "Miscelaneos de chasis (5ta Rueda)",
                "Cabina y accesorios",
                "Rin de refacción",
                "Rines delanteros",
                "Rines traseros",
                "Miscelaneos de Rines y Llantas",
                "Sistema de escape" 
              ]
            },
            yaxis: [{
              seriesName: 'Costo',
              title: {
                text: "Costo",
              },
              labels: {
                show: true,
                formatter: (value) => { return value},
              },
            },{
              seriesName: 'Porcentaje Acumulado',
              opposite: true,
              title: {
                text: "Porcentaje Acumulado",
              },
              max: 100,
              min: 0
            }],
            tooltip: {
              y: {
                formatter: function (value, { series, seriesIndex, dataPointIndex }) {
                  if(seriesIndex === 1){
                    // return value
                    return value + "%"
                  } else {
                    return value + " eventos"
                  }
                },
              }
            },
          },
        }
      }
    }
  }  
</script>


<style>
  /* .title {
    text-decoration: none;
    color: #737373;
    font-weight: bold;
    font-size: 24px !important;
    font-family: Sans-Serif;
    letter-spacing: -1px !important;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    padding: 18px;
    padding-left: 10px  Antonio
  } */
  .title {
    text-decoration: none;
    color: #737373;
    font: bold 24px Sans-Serif !important;
    letter-spacing: -1px;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    padding-left: 10px  /* Antonio */
  }
  .paragraph {
    text-decoration: none;
    color: #737373;
    font-size: 18px !important;
    font-family: Sans-Serif;
    letter-spacing: -1px !important;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    /* padding: 18px; */
    /* padding-left: 10px  Antonio */
  }
</style>