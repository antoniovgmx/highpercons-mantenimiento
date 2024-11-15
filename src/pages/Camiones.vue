<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Widgets-->
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="check_circle" title="60%" subTitle="Disponibilidad actual" supTitle="64% promedio este mes" color="#4caf50"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="local_shipping" title="21" subTitle="Camiones en ruta" supTitle="De 31 disponibles" color="#dc3545"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="home_filled" title="10" subTitle="Camiones en garage"  supTitle="Disponibles para salir a ruta" color="#0866C6"/>
      </v-flex>
      <v-flex d-flex lg3 sm6 xs12>
        <widget icon="car_repair" title="19" subTitle="Camiones en mantenimiento" supTitle="38% del total" color="#1D2939"/>
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
      <v-flex d-flex lg12 sm6 xs12>
        <data-table/>
      </v-flex>
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
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    }
  }
}
</script>

<style>

</style>
