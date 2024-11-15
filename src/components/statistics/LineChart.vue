<template>
    <div>
        <apexchart type="line" height="800" :options="this.chartData.options" :series="this.chartData.options.series"></apexchart>
    </div>
</template>

<script>

    export default {
        props: {
            chartData: Object
        }
    }

    // export default {
    //     data() {
    //         return {
    //             options: {
    //                 chart: {
    //                     type: 'line',
    //                     height: 350,
    //                 },
    //                 series: [
    //                     {
    //                     name: 'Data Series',
    //                     type: 'column',  // Column series for data values
    //                     data: [300, 400, 500, 600, 700], // Example data values
    //                     },
    //                     {
    //                     name: 'Percentage Series',
    //                     type: 'line', // Line series for percentage values
    //                     data: [100, 80, 60, 90, 100], // Percentage values from 0 to 100
    //                     },
    //                 ],
    //                 yaxis: [
    //                     {
    //                     title: { text: 'Data Values' },
    //                     min: 0,
    //                     max: 700, // Set this to the max of your data range
    //                     },
    //                     {
    //                     opposite: true,
    //                     title: { text: 'Percentage' },
    //                     min: 0,
    //                     max: 100, // Fixed from 0 to 100 for percentages
    //                     },
    //                 ],
    //                 tooltip: {
    //                     y: [
    //                     {
    //                         formatter: function (val) {
    //                         return val + " units"; // Customize as needed for data values
    //                         },
    //                     },
    //                     {
    //                         formatter: function (val) {
    //                         return val + "%"; // Customize as needed for percentage values
    //                         },
    //                     },
    //                     ],
    //                 },
    //             }
    //         }
    //     }
    // }

</script>