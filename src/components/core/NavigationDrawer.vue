<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <!-- <router-link :to="{ name: 'Dashboard' }">
        <img src="static/highpercons-logo.png" width="36px"></img>
      </router-link> -->
      <router-link :to="{ name: 'Tablero' }" class="text">
         HIGHPERCONS
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('tablero', 1)">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Tablero de métricas</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('camiones', 2)">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Listar Camiones</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('nuevoCamion', 3)">
        <v-list-tile-action>
          <v-icon>add</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Registrar camión</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('buscarCamion', 4)">
        <v-list-tile-action>
          <v-icon>search</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Buscar/Editar camión</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('inicioViaje', 5)">
        <v-list-tile-action>
          <v-icon>north_east</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Registrar Inicio de Viaje</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('finViaje', 6)">
        <v-list-tile-action>
          <v-icon>south_west</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Registrar Fin de Viaje</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('entradaTaller', 7)">
        <v-list-tile-action>
          <v-icon>car_repair</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">Entrada a Taller</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('salidaTaller', 8)">
        <v-list-tile-action>
          <v-icon>car_repair</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 8}, 'item-title' ]">Salida de Taller</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click="changeRoute('Media', 9)">
        <v-list-tile-action>
          <v-icon>car_crash</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 9}, 'item-title' ]">Registrar Incidente</v-list-tile-title>
      </v-list-tile>
      <v-list-group
        prepend-icon="show_chart">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Métricas</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('disponibilidad', 10)">
          <v-list-tile-action>
            <v-icon>check</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 10}, 'item-title' ]">Disponibilidad</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('dwellTime', 11)">
          <v-list-tile-action>
            <v-icon>highlight_remove</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 11}, 'item-title' ]">Tiempo de Estancia</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('cumplimientoPreventivo', 12)">
          <v-list-tile-action>
            <v-icon>checklist</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 12}, 'item-title' ]">Cumplimiento Preventivo</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('preventivoCorrectivo', 13)">
          <v-list-tile-action>
            <v-icon>ssid_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 13}, 'item-title' ]">Preventivo vs Correctivo</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('paretoDeFallas', 14)">
          <v-list-tile-action>
            <v-icon>ssid_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 14}, 'item-title' ]">Pareto de Fallas</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      

      <!-- <v-list-group
        prepend-icon="local_shipping">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Camiones</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('camiones', 2)">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Listar Camiones</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('nuevoCamion', 3)">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Registrar camión</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Media', 4)">
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Editar camión</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Media', 5)">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Buscar camión</v-list-tile-title>
        </v-list-tile>
    </v-list-group> -->

      <!-- <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('overlays') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Snackbar', 6)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">{{ $t('snackbar') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group> -->

      <!-- <v-list-group
        prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('authorization') }}</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">404</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">500</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">{{ $t('login') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group> -->

      <!-- <v-list-group
      prepend-icon="account_circle">
      <v-list-tile slot="activator">
        <v-list-tile-title class="item-title">{{ $t('users') }}</v-list-tile-title>
      </v-list-tile>
        <v-list-tile  @click="">
            <v-list-tile-action>
              <v-icon v-text="'people_outline'"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="'Management'"></v-list-tile-title>
      </v-list-tile>
      <v-list-tile  @click="">
          <v-list-tile-action>
            <v-icon v-text="'settings'"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="'Settings'"></v-list-tile-title>
      </v-list-tile>
    </v-list-group> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
