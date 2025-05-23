import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import Mailbox from '../pages/Mailbox.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/core/Login.vue';
import Error from '../pages/core/Error.vue';

import Camiones from '../pages/Camiones.vue';
import NuevoCamion from '../pages/NuevoCamion.vue';
import BuscarCamion from '../pages/BuscarCamion.vue';

import InicioViaje from '../pages/InicioViaje.vue';
import FinViaje from '../pages/FinViaje.vue';
import EntradaTaller from '../pages/EntradaTaller.vue';
import SalidaTaller from '../pages/SalidaTaller.vue';
import RegistroIncidente from '../pages/RegistroIncidente.vue';

import Tablero from '../pages/Tablero.vue';

import Disponibilidad from '../pages/Disponibilidad.vue';
import PreventivoCorrectivo from '../pages/PreventivoCorrectivo.vue'
import DwellTime from '../pages/DwellTime.vue'
import CumplimientoPreventivo from '../pages/CumplimientoPreventivo.vue'

import ParetoDeFallas from '../pages/ParetoDeFallas.vue'
import CostoTallerExterno from '../pages/CostoTallerExterno.vue'
import RescatesPorMes from '../pages/RescatesPorMes.vue'
import costoMantenimiento from '../pages/CostoMantenimiento.vue'


Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [

    // Highpercons routes

    {
      path: '/camion/todos',
      name: 'camiones',
      component: Camiones,
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Camiones' }
        ]
      }
    }, 

    {
      path: '/camion/nuevo',
      name: 'nuevoCamion',
      component: NuevoCamion,
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Nuevo Camión' }
        ]
      }
    },

    {
      path: '/camion/buscar',
      name: 'buscarCamion',
      component: BuscarCamion,
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Buscar Camión' }
        ]
      }
    },

    {
      path: '/camion/viaje/inicio',
      name: 'inicioViaje',
      component: InicioViaje,
      meta: {
        requiresAuth: true,
        breadcrumb: [
          { name: 'Registrar Inicio de Viaje' }
        ]
      }
    },

    {
      path: '/camion/viaje/fin',
      name: 'finViaje',
      component: FinViaje,
      meta: {
        breadcrumb: [
          { name: 'Registrar Fin de Viaje' }
        ]
      }
    },

    {
      path: '/taller/entrada',
      name: 'entradaTaller',
      component: EntradaTaller,
      meta: {
        breadcrumb: [
          { name: 'Registrar Entrada a Taller' }
        ]
      }
    },

    {
      path: '/taller/salida',
      name: 'salidaTaller',
      component: SalidaTaller,
      meta: {
        breadcrumb: [
          { name: 'Registrar Salida de Taller' }
        ]
      }
    },

    {
      path: '/incidente',
      name: 'incidente',
      component: RegistroIncidente,
      meta: {
        breadcrumb: [
          { name: 'Registrar Incidente o Siniestro' }
        ]
      }
    },
    
    {
      path: '/tablero',
      name: 'tablero',
      component: Tablero,
      meta: {
        breadcrumb: [
          { name: 'Tablero de Métricas' }
        ]
      }
    },

    {
      path: '/disponibilidad',
      name: 'disponibilidad',
      component: Disponibilidad,
      meta: {
        breadcrumb: [
          { name: 'Disponibilidad de camiones' }
        ]
      }
    },

    {
      path: '/preventivoCorrectivo',
      name: 'preventivoCorrectivo',
      component: PreventivoCorrectivo,
      meta: {
        breadcrumb: [
          { name: 'Mantenimiento Preventivo VS Correctivo' }
        ]
      }
    },

    {
      path: '/dwellTime',
      name: 'dwellTime',
      component: DwellTime,
      meta: {
        breadcrumb: [
          { name: 'Tiempo de Estancia' }
        ]
      }
    },
    
    {
      path: '/cumplimientoPreventivo',
      name: 'cumplimientoPreventivo',
      component: CumplimientoPreventivo,
      meta: {
        breadcrumb: [
          { name: 'Cumplimiento Preventivo' }
        ]
      }
    },

    {
      path: '/paretoDeFallas',
      name: 'paretoDeFallas',
      component: ParetoDeFallas,
      meta: {
        breadcrumb: [
          { name: 'Pareto de Fallas' }
        ]
      }
    },

    {
      path: '/costoTallerExterno',
      name: 'costoTallerExterno',
      component: CostoTallerExterno,
      meta: {
        breadcrumb: [
          { name: 'Costo Taller Externo' }
        ]
      }
    },

    {
      path: '/rescatesPorMes',
      name: 'rescatesPorMes',
      component: RescatesPorMes,
      meta: {
        breadcrumb: [
          { name: 'Rescates Por Mes' }
        ]
      }
    },

    {
      path: '/costoMantenimiento',
      name: 'costoMantenimiento',
      component: costoMantenimiento,
      meta: {
        breadcrumb: [
          { name: 'Costo de Mantenimiento' }
        ]
      }
    },

    

    // Default routes
    
    {
      path: '/dev/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'dashboard' }
        ]
      }
    },
    {
      path: '/dev/mailbox',
      name: 'Mailbox',
      component: Mailbox,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'mailbox' }
        ]
      }
    },
    {
      path: '/dev/snackbar',
      name: 'Snackbar',
      component: Snackbar,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'snackbar' }
        ]
      }
    },
    {
      path: '/dev/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'calendar' }
        ]
      }
    },
    {
      path: '/dev/social',
      name: 'Social',
      component: Social,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'social' }
        ]
      }
    },
    {
      path: '/dev/media',
      name: 'Media',
      component: Media,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'media' }
        ]
      }
    },
    {
      path: '/dev/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'charts' }
        ]
      }
    },
    {
      path: '/dev/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/dev/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log("Here! " + !!localStorage.getItem('token)'));
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next(); // always allow public routes
  }
});

export default router;