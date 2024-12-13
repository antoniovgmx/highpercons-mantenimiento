<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search"
      append-icon="search"
      class="mb-3"
      variant="outlined"
    ></v-text-field>
    <!-- <v-data-table
      class="table"
      :headers="headers"
      :items="users"
      :rows-per-page-items="[10, 25]"
      :search="search">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.firstname }}</td>
        <td class="text-xs-left">{{ props.item.login.username }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.phone }}</td>
        <td class="text-xs-left">{{ props.item.company.name }}</td>
        <td class="text-xs-left">Ver más...</td>
      </template>
    </v-data-table> -->
    <!-- <v-data-table
      class="table"
      :headers="tableData.headers"
      :items="tableData.items"
      :rows-per-page-items="tableData.options.rowsList"
      :search="search">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.numero_economico }}</td>
        <td class="text-xs-left">{{ props.item.matricula }}</td>
        <td class="text-xs-left">{{ props.item.estado }}</td>
        <td class="text-xs-left">{{ props.item.ultimo_cambio }}</td>
        <td class="text-xs-left">{{ props.item.disponibilidad }}</td>
        <td class="text-xs-left">{{ props.item.proximo_mantenimiento }}</td>
        <td class="text-xs-left">
          <router-link :to="`/camion/${props.item.numero_economico}`">
            Ver más...
          </router-link>
        </td>
      </template>
    </v-data-table> -->


    <v-data-table
      class="table"
      :headers="tableData.headers"
      :items="tableData.items"
      :rows-per-page-items="tableData.options.rowsList"
      :search="search"
    >
      <!-- Dynamically create table cells -->
      <template slot="items" slot-scope="props">
        <td class="text-xs-left" v-for="(header, index) in tableData.headers" :key="index">
          <!-- Access the property dynamically using the header's value -->
          {{ props.item[header.value] }}
        </td>
        <!-- Example for dynamic navigation -->
        <td v-if="tableData.options.showDetailsLink" class="text-xs-left">
          <router-link :to="`/${tableData.options.linkType}/${props.item.numero_economico}`">
            Ver más...
          </router-link>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>

  export default {
    props: {
      tableData: Object
    }
  }

</script>

<style>
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
