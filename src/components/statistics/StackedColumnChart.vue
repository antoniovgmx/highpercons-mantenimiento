<template>
    <div>
        <apexchart type="bar" height="550" :options="chartOptions" :series="series"></apexchart>
    </div>
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


