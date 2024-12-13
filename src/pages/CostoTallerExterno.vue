<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="local_shipping" title="$740,000" subTitle="Costo total de talleres externos" color="#4caf50" />
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="health_and_safety " title="7 Incidentes" subTitle="Total de incidentes" color="#4caf50" />
      </v-flex>

      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <apex-chart :chartOptions="costoPorCategoria.chartOptions" :chartData="costoPorCategoria.chartData" />
        </v-card>
      </v-flex>

      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <apex-chart :chartOptions="eventosPorCategoria.chartOptions" :chartData="eventosPorCategoria.chartData" />
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        costoPorCategoria: {
          chartData: [{
          name: "Costo",
            data: [3200000, 1700000, 950000, 510000, 250000, 134000, 54000, 22000],
            // type: "bar",
            color: "#4caf50",
          }],
          chartOptions: {
            chart: {
              height: 500,
              type: 'bar'
            },
            // colors: ["#F44336", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#FFEB3B", "#FF9800", "#607D8B"],
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            title: {
              text: 'Costo de Taller Externo por Categoría'
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true
            },
            xaxis: {
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
            yaxis: {
              seriesName: 'Costo',
              title: {
                text: "Costo",
              },
              labels: {
                show: true,
                formatter: (value) => { return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }) },
              },
            },
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
        eventosPorCategoria: {
          chartData: [{
            name: "Eventos",
            data: [22, 15, 8, 4, 4, 2, 2, 1],
            // type: "bar",
            color: "#4caf50",
          }],
          chartOptions: {
            chart: {
              height: 500,
              type: 'bar'
            },
            // colors: ["#F44336", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#FFEB3B", "#FF9800", "#607D8B"],
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            title: {
              text: 'Eventos de Taller Externo por Categoría'
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true
            },
            xaxis: {
              categories: [
                "Sistema de escape",
                "Suspensión delantera",
                "Sistema de dirección",
                "Sistema de frenos",
                "Eje delantero",
                "Flechas cardán e interejes",
                "Sistema eléctrico",
                "Chasis y Largueros de Chasis",
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
              ],
            },
            yaxis: {
              seriesName: 'Eventos',
              title: {
                text: "Eventos",
              },
              labels: {
                show: true,
              },
            },
          },
        }
      }
    }
  }  
</script>


<style>

</style>