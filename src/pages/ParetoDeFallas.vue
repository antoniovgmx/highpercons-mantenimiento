<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="local_shipping" title="50 Camiones" subTitle="Flota" supTitle="Total de camiones en la flota"
          color="#4caf50" />
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <widget icon="health_and_safety " title="7 Mantenimientos Programados" subTitle="Mantenimiento Preventivo"
          supTitle="14% Flota" color="#4caf50" />
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
            name: "Costo",
            data: [3200000, 1700000, 950000, 510000, 250000, 134000, 54000, 22000],
            type: "bar"
          },{
            name: "Porcentaje",
            data: [46.92, 71.85, 85.78, 93.26, 96.92, 98.89, 99.68, 100.0],
            type: "line"
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line'
            },
            colors: ['#FF5733', '#1ABC9C'],
            plotOptions: {
              bar: {
                columnWidth: '45%',
              }
            },
            stroke: {
              width: [0, 4] // Removes stroke on bars, keeps it for the line
            },
            title: {
              text: 'Pareto de fallas'
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true
            },
            xaxis: {
              categories: [
                "Categoría 1",
                "Categoría 2",
                "Categoría 3",
                "Categoría 4",
                "Categoría 5",
                "Categoría 6",
                "Categoría 7",
                "Categoría 8",
              ],
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
              seriesName: 'Porcentaje',
              opposite: true,
              title: {
                text: "Porcentaje",
              },
              max: 100
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
      }
    }
  }  
</script>


<style>

</style>