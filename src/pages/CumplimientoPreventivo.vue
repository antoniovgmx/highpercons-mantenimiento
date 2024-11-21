<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="local_shipping" title="50 Camiones" subTitle="Flota" supTitle="Total de camiones en la flota" color="#4caf50"/>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="health_and_safety " title="7 Mantenimientos Programados" subTitle="Mantenimiento Preventivo" supTitle="14% Flota" color="#4caf50"/>
      </v-flex>
      
      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <apex-chart :chartOptions="chartOptions" :chartData="chartData" />
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
          name: "Mantenimientos Agendados",
          type: 'column',
          color: "#4caf50",
          // data: [59, 65, 63, 77, 83, 91, 63, 90, 64, 70, 86, 97, 72, 85, 111, 83, 77, 101, 98, 78, 105, 100, 71, 68, 99, 81, 76, 79, 69, 88, 74, 59, 103, 63, 80, 100, 95, 65, 82, 100, 103, 64, 102, 86, 74]
          data: [8, 9, 8, 10, 11, 12, 8, 12, 8, 9, 11, 13, 9, 11, 14, 11, 10, 13, 13, 10, 14, 13, 9, 9, 13, 11, 10, 10, 9, 11, 10, 8, 13, 8, 10, 13, 12, 9, 11, 13, 13, 8, 13, 11, 10]
        },
        {  
          name: "Mantenimientos Cumplidos",
          type: "line",
          color: "#ff7a51",
          // data: [54, 60, 58, 72, 78, 86, 58, 85, 59, 65, 81, 92, 67, 80, 106, 78, 72, 96, 93, 73, 100, 95, 66, 63, 94, 76, 71, 74, 64, 83, 69, 54, 98, 58, 75, 95, 90, 60, 77, 95, 98, 59, 97, 81, 69],
          data: [7, 8, 7, 9, 10, 11, 7, 11, 7, 8, 10, 12, 8, 10, 13, 10, 9, 12, 12, 9, 13, 12, 8, 8, 12, 10, 9, 9, 8, 10, 9, 7, 12, 7, 9, 12, 11, 8, 10, 12, 12, 7, 12, 10, 9]
        }],
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [
              "2024-W1", "2024-W2", "2024-W3", "2024-W4", "2024-W5", "2024-W6",
              "2024-W7", "2024-W8", "2024-W9", "2024-W10", "2024-W11", "2024-W12",
              "2024-W13", "2024-W14", "2024-W15", "2024-W16", "2024-W17", "2024-W18",
              "2024-W19", "2024-W20", "2024-W21", "2024-W22", "2024-W23", "2024-W24",
              "2024-W25", "2024-W26", "2024-W27", "2024-W28", "2024-W29", "2024-W30",
              "2024-W31", "2024-W32", "2024-W33", "2024-W34", "2024-W35", "2024-W36",
              "2024-W37", "2024-W38", "2024-W39", "2024-W40", "2024-W41", "2024-W42",
              "2024-W43", "2024-W44", "2024-W45", 
              // "2024-W46", "2024-W47", "2024-W48", "2024-W49", "2024-W50", "2024-W51", "2024-W52"
            ]
          },
          tooltip: {
            y: {
              formatter: function (value, { series, seriesIndex, dataPointIndex }) {
                if(seriesIndex === 1){
                  // return value
                  return value + " (" + Math.round((series[seriesIndex][dataPointIndex] / series[seriesIndex - 1][dataPointIndex]) * 100) + "%)"
                  // return Math.round((series[seriesIndex][dataPointIndex] / series[seriesIndex + 1][dataPointIndex]) * 100) + "% (" + value + " mantenimientos)"
                } else {
                  // return value + " (" + Math.round((series[seriesIndex][dataPointIndex] / series[seriesIndex + 1][dataPointIndex]) * 100) + "%)"
                  return value
                }
                // Format based on series index (0 is the first, 1 is the second, etc.)
                // return seriesIndex === 0 ? `${value}%` : `${value}`;
              },
            }
          },
          markers: {
            size: 5,
            colors: "#fff",
            strokeColors: ["#4caf50", "#ff7a51"],
            strokeWidth: 2,
          },
          stroke: {
            width: [0, 4] // Removes stroke on bars, keeps it for the line
          },
          yaxis: [
            {
              title: {
                text: 'Mantenimientos Agendados',
              }
            }, 
          ],
        }
      }
    }
  }
</script>

<style>

</style>
