<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="health_and_safety " title="$1,200,000" subTitle="Mantenimiento Preventivo" supTitle="14 Eventos" color="#5EB761"/>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="dangerous" title="$540,000" subTitle="Mantenimiento Correctivo" supTitle="4 Eventos" color="#F44336"/>
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
        chartData: [
          {
            name: 'Mantenimiento Preventivo',
            type: 'line',
            color: "#5EB761",
            data: [271247, 402740, 430162, 633420, 885178, 1250170, 1344168, 1387252, 1681069, 1847309, 1957397],
          },
          {
            name: 'Mantenimiento Correctivo',
            type: 'line',
            color: "#F44336",
            data: [2592647, 2537761, 2211817, 1930566, 1884709, 1860801, 1734904, 1417245, 1075159, 958753, 898753],
          }
        ],
        chartOptions: {
          chart: {
            type: 'line',
            height: 800,
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
                formatter: function (value) {
                  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
                }
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
                formatter: function (value) {
                  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
                }
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
      };
    }
  };
</script>

<style>

</style>
