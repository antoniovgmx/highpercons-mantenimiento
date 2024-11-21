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
            // type: "bar",
            color: "#4caf50",
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar'
            },
            colors: ["#F44336", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#FFEB3B", "#FF9800", "#607D8B"],
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
      }
    }
  }  
</script>


<style>

</style>