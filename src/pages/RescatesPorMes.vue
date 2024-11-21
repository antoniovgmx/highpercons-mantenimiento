<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="dangerous" title="11 incidentes" supTitle="Total de rescates este mes" color="#5EB761"/>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="health_and_safety " title="$1,475,000" supTitle="Suma de costo de rescates" color="#F44336"/>
      </v-flex>
      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <apex-chart :chartOptions="chartOptions" :chartData="chartData"/>
        </v-card>    
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        chartData: [{
          name: "Número de rescates",
          color: "#5EB761",
          data: [
            4, 9, 2, 11, 7, 6, 10, 6, 8, 7, 11
          ]
        },{
          name: "Costo de rescates",
          color: "#F44336",
          data: [1320000, 2400000, 2160000, 1920000, 2400000, 2540000, 1860000, 1240000, 2100000, 1080000, 2280000]
        }],
        chartOptions: {
          chart: {
            type: 'line',
            height: 350,
            scrollable: {
              enabled: true, // Allows for panning by dragging the chart
            }
          },
          colors: ["#5EB761", "#00E396"],
          stroke: {
            width: [3, 3],
          },
          markers: {
            size: 6,
            colors: "#fff",
            strokeColors: ["#4caf50", "#F44336"],
            strokeWidth: 2,
          },
          title: {
            // text: 'Mantenimiento Preventivo vs Correctivo',
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov'],
          },
          yaxis: [
            {
              title: {
                text: 'Mantenimiento Preventivo',
              },
              labels: {
                style: {
                  colors: '#5EB761',
                },
              },
            },
            {
              opposite: true,
              title: {
                text: 'Mantenimiento Correctivo',
              },
              labels: {
                style: {
                  colors: '#F44336',
                },
              },
            },
          ],
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (value) {
                return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
              }
            }
          }
        }
      }
    }
  }
</script>

<style>

</style>
