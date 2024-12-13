<template>
    <div>
        <apexchart :height="this.chartOptions.chart.height" :options="this.chartOptions" :series="this.chartData"></apexchart>
    </div>
</template>

<script>

    export default {
        props: {
            chartOptions: Object,
            chartData: Array,
        }
    }

</script>