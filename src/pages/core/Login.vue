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
                <v-btn block color="primary" @click="cognitoLogin" :loading="loading">Login</v-btn>
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

import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { userPool } from '../../cognitoConfig'; // Import the Cognito User Pool configuration

import CryptoJS from 'crypto-js';
  
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
    },
    // AWS Login
    cognitoLogin() {
      this.loading = true;

      const computeSecretHash = (username, clientId, clientSecret) => {
        const message = username + clientId;
        const hmac = CryptoJS.HmacSHA256(message, clientSecret);
        return CryptoJS.enc.Base64.stringify(hmac);
      };

      const authDetails = new AuthenticationDetails({
        Username: this.userEmail,
        Password: this.password,
        SecretHash: computeSecretHash(
          this.userEmail,
          "62hanemkliqkqbadao2sauujr2",
          "dqmpjpdkbqs3np644bco80lvv8i4m37qhs95g17vb7gvsfpur58"
        ),
      });

      const cognitoUser = new CognitoUser({
        Username: this.userEmail,
        Pool: userPool,
      });

      cognitoUser.authenticateUser(authDetails, {
        onSuccess: (session) => {
          console.log("Login successful!", session);
          localStorage.setItem("token", session.getIdToken().getJwtToken());
          this.$router.push({ name: "camiones" });
        },
        onFailure: (err) => {
          console.error("Login failed:", err);
          this.errorMessage = err.message || "Authentication failed";
          this.error = true;
          this.result = "Email o Contraseña son incorrectos.";
          this.showResult = true;
        },
        newPasswordRequired: (userAttributes) => {
          console.log("New password required:", userAttributes);
          this.errorMessage = "New password required.";
        },
      });

      this.loading = false;
    },
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
