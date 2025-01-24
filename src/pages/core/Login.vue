<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <!-- <img src="static/highpercons-condensed-logo.png" alt="Vue Material Admin" width="180" height="180"> -->
                  <h1 class="flex my-4 primary--text">Plataforma de Mantenimiento (ALPHA)</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="userEmail"
                    :error="error"
                    :rules="[rules.required]"/>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="showResult"
        :timeout="2000"
        top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
// import { Auth } from 'aws-amplify';
  
export default {
  data() {
    return {
      loading: false,
      userEmail: 'usuario@compañía.com',
      password: 'contraseña',
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: value => !!value || 'Campo Requerido.'
      }
    }
  },

  methods: {
    // async handleLogin(){
    //   try {
    //     await Auth.signIn(this.username, this.password);
    //     this.$router.push({ name: 'camiones' }); // Redirect to home
    //   } catch (err) {
    //     this.error = err.message || 'An error occurred.';
    //   }
    // },
    login() {
      const vm = this;

      if (!vm.userEmail || !vm.password) {

        vm.result = "Email y Contraseña no pueden estar vacíos.";
        vm.showResult = true;

        return;
      }

      if (vm.userEmail === vm.$root.userEmail && vm.password === vm.$root.userPassword) {
        vm.$router.push({ name: 'camiones' });
      }
      else {
        vm.error = true;
        vm.result = "Email o Contraseña son incorrectos.";
        vm.showResult = true;
      }
    }
  }
}
</script>

<style scop    ed lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
