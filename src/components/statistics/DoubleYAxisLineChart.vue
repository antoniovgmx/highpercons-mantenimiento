<template>
    <div>
        <apexchart type="line" height="550" :options="chartData.options" :series="chartData.series"></apexchart>
    </div>
</template>

<script>

    export default {
        props: {
            chartData: Object
        }
    }

</script>