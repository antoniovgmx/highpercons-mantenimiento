<template>
    <div>
        <apexchart height="800" :options="this.chartOptions" :series="this.chartData"></apexchart>
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