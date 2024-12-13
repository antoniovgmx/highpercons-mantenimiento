<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex d-flex lg12 sm6 xs12>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1">Detalles del camión</v-stepper-step>
      
            <v-divider></v-divider>
      
            <v-stepper-step :complete="step > 2" step="2">Detalles del mantenimiento</v-stepper-step>
      
            <v-divider></v-divider>
      
            <v-stepper-step :complete="step > 3" step="3">Próximo mantenimiento</v-stepper-step>

            <v-divider></v-divider>
      
            <v-stepper-step step="4">Finalizar registro</v-stepper-step>
          </v-stepper-header>
      
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-form ref="form" v-model="valid" lazy-validation>
                <h2> Detalles del camión </h2>

                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="numero_economico"
                      label="Número económico"
                      hint="XXXXXXXXXX"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="placa"
                      label="Placa"
                      hint="XX-XX-XX"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="marca"
                      :counter="10"
                      label="Marca"
                      hint="Ej. Volvo"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="modelo"
                      :counter="10"
                      label="Modelo"
                      hint="Ej. 2015"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="año"
                      label="Año"
                      hint="Ej. 2015"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="kilometraje"
                      label="Kilometraje"
                      hint="Ej. 350000"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="propietario"
                      label="Propietario"
                      hint="No modificable"
                      persistent-hint
                      disabled
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="NIV"
                      :counter="17"
                      label="Número de identificación vehicular"
                      hint="XX-XXX-XXX"
                      persistent-hint
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>
      
                <v-btn :disabled="!valid"
                  @click="submit">
                  Siguiente
                </v-btn>
                <v-btn @click.native="clear">Reiniciar</v-btn>
              </v-form>
            </v-stepper-content>
      
            <v-stepper-content step="2">
              <v-form>
                <h2> Detalles del mantenimiento </h2>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="fecha_entrada"
                      label="Fecha de entrada a taller"
                      hint="DD/MM/AAAA"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="fecha_salida"
                      label="Fecha de salida del taller"
                      hint="DD/MM/AAAA"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                </v-layout>
  
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="tipo_taller"
                      :items="tipos_taller"
                      label="Tipo de taller"
                      required
                    />
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="nombre_taller"
                      label="Nombre del taller"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
  
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="nombre_responsable"
                      label="Nombre del responsable"
                    ></v-text-field>
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="contacto_responsable"
                      label="Contacto del responsable"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
  
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="tipo_mantenimiento"
                      :items="tipos_mantenimiento"
                      label="Tipo de mantenimiento"
                      required
                    />
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-select
                      v-model="categoria_mantenimiento"
                      :items="categorias_mantenimiento"
                      label="Categoría de mantenimiento"
                      required
                    />
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="descripción_mantenimiento"
                      label="Costo total de las refacciones"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="costo_mantenimiento"
                      label="Costo total de la mano de obra"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12 md12>
                    <v-textarea
                      v-model="comentarios_mantenimiento"
                      label="Comentarios adicionales"
                      hint="Comentarios adicionales de la reparación o mantenimiento"
                      :counter="1000"
                      persistent-hint
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-btn :disabled="!valid"
                  @click="step=3">
                  Siguiente
                </v-btn>
                <v-btn @click.native="step=1">Volver</v-btn>
              </v-form>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-form>
                <h2> Próximo mantenimiento </h2>
                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="fecha_proximo_mantenimiento"
                      label="Fecha del próximo mantenimiento"
                      hint="DD/MM/AAAA"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-text-field
                      v-model="kilometraje_proximo_mantenimiento"
                      label="Kilometraje del próximo mantenimiento"
                      hint="Ej. 350000"
                      persistent-hint
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="tipo_proximo_mantenimiento"
                      :items="tipos_mantenimiento"
                      label="Tipo de mantenimiento"
                      required
                    />
                  </v-flex>
  
                  <v-flex xs12 md6>
                    <v-select
                      v-model="categoria_proximo_mantenimiento"
                      :items="categorias_mantenimiento"
                      label="Categoría de mantenimiento"
                      required
                    />
                  </v-flex>
                </v-layout>
  
                <v-layout row wrap>
                  <v-flex xs12 md12>
                    <v-textarea
                      v-model="comentarios_proximo_mantenimiento"
                      label="Comentarios adicionales"
                      hint="Comentarios adicionales del próximo mantenimiento"
                      :counter="1000"
                      persistent-hint
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-btn :disabled="!valid"
                  @click="step=4">
                  Siguiente
                </v-btn>
                <v-btn @click.native="step=2">Volver</v-btn>
              </v-form>
            </v-stepper-content>
      
            <v-stepper-content step="4">
              <h2> Finalizar registro </h2>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="NIV"
                    :counter="17"
                    label="Número de identificación vehicular"
                    hint="XX-XXX-XXX"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="placa"
                    label="Placa"
                    hint="XX-XX-XX"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="marca"
                    :counter="10"
                    label="Marca"
                    hint="Ej. Volvo"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="modelo"
                    :counter="10"
                    label="Modelo"
                    hint="Ej. 2015"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="año"
                    label="Año"
                    hint="Ej. 2015"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="kilometraje"
                    label="Kilometraje"
                    hint="Ej. 350000"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="propietario"
                    label="Propietario"
                    hint="No modificable"
                    persistent-hint
                    disabled
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="numero_economico"
                    label="Número económico"
                    hint="XXXXXXXXXX"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-divider style="border-width: 2px; border-color: #1976d2; margin: 40px 0;"></v-divider>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="fecha_entrada"
                    label="Fecha de entrada a taller"
                    hint="DD/MM/AAAA"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="fecha_salida"
                    label="Fecha de salida del taller"
                    hint="DD/MM/AAAA"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-select
                    v-model="tipo_taller"
                    :items="tipos_taller"
                    label="Tipo de taller"
                    required
                  />
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="nombre_taller"
                    label="Nombre del taller"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="nombre_responsable"
                    label="Nombre del responsable"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="contacto_responsable"
                    label="Contacto del responsable"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-select
                    v-model="tipo_mantenimiento"
                    :items="tipos_mantenimiento"
                    label="Tipo de mantenimiento"
                    required
                  />
                </v-flex>

                <v-flex xs12 md6>
                  <v-select
                    v-model="categoria_mantenimiento"
                    :items="categorias_mantenimiento"
                    label="Categoría de mantenimiento"
                    required
                  />
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="descripción_mantenimiento"
                    label="Costo total de las refacciones"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="costo_mantenimiento"
                    label="Costo total de la mano de obra"
                    persistent-hint
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

              <v-divider style="border-width: 2px; border-color: #1976d2; margin: 40px 0;"></v-divider>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="fecha_proximo_mantenimiento"
                    label="Fecha del próximo mantenimiento"
                    hint="DD/MM/AAAA"
                    persistent-hint
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    v-model="kilometraje_proximo_mantenimiento"
                    label="Kilometraje del próximo mantenimiento"
                    hint="Ej. 350000"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-select
                    v-model="tipo_mantenimiento"
                    :items="tipos_mantenimiento"
                    label="Tipo de mantenimiento"
                    required
                  />
                </v-flex>

                <v-flex xs12 md6>
                  <v-select
                    v-model="categoria_mantenimiento"
                    :items="categorias_mantenimiento"
                    label="Categoría de mantenimiento"
                    required
                  />
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12 md12>
                  <v-textarea
                    v-model="costo_mantenimiento"
                    label="Comentarios adicionales"
                    hint="Comentarios adicionales del próximo mantenimiento"
                    :counter="1000"
                    persistent-hint
                  ></v-textarea>
                </v-flex>
              </v-layout>

              <v-btn @click="step=1">Finalizar Registro</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        step: 0,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        campoRequerido: [v => !!v || 'Este campo es requerido'],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false,
        date: new Date().toISOString().substr(0, 10),
        tipos_taller: ["Interno", "Externo"],
        tipos_mantenimiento: ["Preventivo", "Correctivo"],
        categorias_mantenimiento: ["Motor", "Transmisión", "Suspensión", "Frenos", "Dirección", "Hay Necesidad de completar"]
      }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {

        }

        this.step = 2;
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
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

