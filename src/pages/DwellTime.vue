<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="health_and_safety " title="34 Días" subTitle="Días de estancia" supTitle="Este mes" color="#4caf50"/>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="dangerous" title="4.9 Días" subTitle="Estancia promedio" supTitle="Este mes" color="#4caf50"/>
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
      <!-- <v-flex d-flex lg12 sm6 xs12>
        <data-table/>
      </v-flex> -->

      <!-- <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <bar-chart :data="chartData" :library="chartOptions" :colors="colors" :download="true" />
        </v-card>
      </v-flex> -->
      
      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <line-chart :chartData="chartData"/>
        </v-card>    
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
        chartData: {
          options: {
            chart: {
              id: 'vuechart-example'
            },
            xaxis: {
              categories: [
                'Ago-01', 'Ago-02', 'Ago-03', 'Ago-04', 'Ago-05', 'Ago-06', 'Ago-07', 'Ago-08', 'Ago-09',
                'Ago-10', 'Ago-11', 'Ago-12', 'Ago-13', 'Ago-14', 'Ago-15', 'Ago-16', 'Ago-17', 'Ago-18', 'Ago-19',
                'Ago-20', 'Ago-21', 'Ago-22', 'Ago-23', 'Ago-24', 'Ago-25', 'Ago-26', 'Ago-27', 'Ago-28', 'Ago-29',
                'Ago-30', 'Ago-31', 'Sep-01', 'Sep-02', 'Sep-03', 'Sep-04', 'Sep-05', 'Sep-06', 'Sep-07', 'Sep-08',
                'Sep-09', 'Sep-10', 'Sep-11', 'Sep-12', 'Sep-13', 'Sep-14', 'Sep-15', 'Sep-16', 'Sep-17', 'Sep-18',
                'Sep-19', 'Sep-20', 'Sep-21', 'Sep-22', 'Sep-23', 'Sep-24', 'Sep-25', 'Sep-26', 'Sep-27', 'Sep-28',
                'Sep-29', 'Sep-30', 'Oct-01', 'Oct-02', 'Oct-03', 'Oct-04', 'Oct-05', 'Oct-06', 'Oct-07', 'Oct-08',
                'Oct-09', 'Oct-10', 'Oct-11', 'Oct-12', 'Oct-13', 'Oct-14', 'Oct-15', 'Oct-16', 'Oct-17', 'Oct-18',
                'Oct-19', 'Oct-20', 'Oct-21', 'Oct-22', 'Oct-23', 'Oct-24', 'Oct-25', 'Oct-26', 'Oct-27', 'Oct-28',
                'Oct-29', 'Oct-30', 'Oct-31'
              ]
            },
            yaxis: [
              {
                title: {
                  text: 'Tiempo de estancia (días)',
                }
              }, 
            ],
            tooltip: {
              y: {
                formatter: function (value) {
                  return value + ' días';
                }
              }
            },
            // colors: ["#00E396"]
            markers: {
              size: 5,
              colors: "#fff",
              strokeColors: "#ff7a51",
              strokeWidth: 2,
            },
            series: [{
              name: "Estancia Promedio",
              color: "#ff7a51",
              data: [
                5.8, 6.0, 6.1, 6.3, 6.2, 6.4, 6.5, 6.6, 6.7, 6.9,
                6.9, 6.7, 6.6, 6.4, 6.3, 6.2, 6.0, 6.1, 5.9, 5.1,
                5.0, 4.9, 4.7, 4.8, 4.6, 4.2, 4.5, 4.3, 4.1, 5.6,
                5.4, 5.2, 5.3, 5.1, 5.0, 4.9, 4.7, 4.5, 4.6, 4.7,
                4.9, 4.2, 3.9, 3.8, 3.7, 3.5, 3.1, 3.0, 3.1, 3.2,
                3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.2, 4.1,
                4.3, 4.4, 4.5, 4.6, 4.7, 4.9, 4.6, 4.5, 4.4, 4.3,
                4.8, 4.7, 4.0, 4.2, 4.7, 4.6, 4.8, 4.5, 4.2, 4.1,
                4.3, 4.4, 4.5, 4.6, 4.7, 4.9, 4.6, 4.5, 4.4, 4.3,
                4.6, 4.5


                // 5.3, 5.2, 5.4, 5.6, 5.5, 5.7, 5.8, 5.9, 6.1, 6.0,  // Upward trend with slight variation
                // 6.2, 6.3, 6.5, 6.4, 6.6, 6.7, 6.9, 6.8, 7.0, 7.2,  // Upward trend with slight variation
                // 7.1, 7.3, 7.5, 7.4, 7.6, 7.7, 7.8, 7.9, 8.0, 7.9,  // Upward trend ending near 8
                
                // 7.8, 7.6, 7.7, 7.5, 7.4, 7.3, 7.2, 7.1, 7.0, 6.8,  // Downward trend with slight variation
                // 6.9, 6.7, 6.6, 6.5, 6.4, 6.2, 6.3, 6.1, 6.0, 5.8,  // Downward trend with slight variation
                // 5.9, 5.7, 5.6, 5.5, 5.3, 5.4, 5.2, 5.1, 5.0, 4.8,  // Downward trend with slight variation
                // 4.9, 4.7, 4.6, 4.5, 4.4, 4.3, 4.1, 4.2, 4.0, 3.8,  // Downward trend with slight variation
                // 3.9, 3.7, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 3.1   // Downward trend ending near 3
              ]

            }]
          },
        }
      }
    }
  }
</script>

<style>

</style>
