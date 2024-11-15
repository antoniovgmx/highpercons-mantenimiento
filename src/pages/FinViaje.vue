<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex d-flex lg12 sm6 xs12>
        <v-card class="elevation-2" style="max-width: none;" flat>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <!-- <h2>Registro</h2>
              <p>Nostrud exercitation commodo consequat.</p> -->

              <!-- Wrap inputs in v-layout and v-flex for grid layout -->
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="NIV"
                    :rules="campoRequerido"
                    :counter="17"
                    label="Número de identificación vehicular"
                    hint="XX-XXX-XXX"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="placa"
                    :rules="campoRequerido"
                    label="Placa"
                    hint="XX-XX-XX"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="marca"
                    :rules="campoRequerido"
                    :counter="10"
                    label="Marca"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="modelo"
                    :rules="campoRequerido"
                    :counter="10"
                    label="Modelo"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="año"
                    :rules="campoRequerido"
                    label="Año"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="kilometraje"
                    :rules="campoRequerido"
                    label="Kilometraje"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <!-- <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="propietario"
                    :rules="campoRequerido"
                    label="Propietario"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="numero_economico"
                    :rules="campoRequerido"
                    label="Número económico"
                    hint="XXXXXXXXXX"
                    required
                    disabled
                  ></v-text-field>
                </v-flex>
              </v-layout> -->

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="fecha_salida"
                    label="Fecha de salida"
                    hint="DD/MM/AAAA"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="destino"
                    label="Destino"
                    hint="Ej. Ciudad de México, MX"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="nombre_operador"
                    label="Nombre del operador"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="contacto_operador"
                    label="Contacto del operador"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md12>
                  <v-textarea
                    v-model="costo_mantenimiento"
                    label="Comentarios adicionales"
                    hint="Comentarios adicionales de la reparación o mantenimiento"
                    :counter="1000"
                    persistent-hint
                  ></v-textarea>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-btn :disabled="!valid" @click="submit" class="mr-4" color="primary">
                    Registrar
                  </v-btn>
                  <v-btn @click.native="clear" color="grey lighten-1">Limpiar</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      select: null,
      checkbox: false,
      nameRules: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'],
      emailRules: [v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid'],
      campoRequerido: [v => !!v || 'Este campo es requerido'],
      items: ['Item 1', 'Item 2', 'Item 3'],
      estados: ['Garage', 'Ruta', 'Mantenimiento', 'Reparación', 'Chocado', 'Robado']
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Submit form logic here
        console.log("Form submitted!");
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.v-card {
  margin: auto;
  padding: 24px;
  max-width: 800px;
  border-radius: 8px;
}

.v-btn {
  margin-top: 20px;
}
</style>

