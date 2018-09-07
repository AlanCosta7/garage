<template>
  <q-page>    
      <q-layout class="pixar">
          <h2 style="font-weight: 50">Pixar Storytelling</h2>
        <form @submit.prevent="onPixar" class="form">  
            <q-field
                name="pixar1"
                id="pixar1"
                count
                >
                <q-input
                type="textarea"
                v-model="pixar1"
                prefix='Era uma vez' 
                hide-underline 
                class="form"
                />
            </q-field>
            <q-field
                name="pixar2"
                id="pixar2"
                count
                >
                <q-input
                type="textarea"
                v-model="pixar2"
                prefix='Todos os dias' 
                hide-underline 
                class="form"
                />
            </q-field>
            <q-field
                name="pixar"
                id="pixar3"
                count
                >
                <q-input
                type="textarea"
                v-model="pixar3"
                prefix='Certo dia' 
                hide-underline 
                class="form"
                />
            </q-field>
            <q-field
                name="pixar4"
                id="pixar4"
                count
                >
                <q-input
                type="textarea"
                v-model="pixar4"
                prefix='Por causa disso'
                hide-underline  
                class="form"
                />
            </q-field>
            <q-field
                name="pixar5"
                id="pixar5"
                count
                >
                <q-input
                type="textarea"
                v-model="pixar5"
                prefix='Por causa disso' 
                hide-underline  
                class="form"
                />
            </q-field>
            <q-field
                name="pixar6"
                id="pixar6"
                count
                >
                <q-input
                type="textarea"
                v-model="pixar6"
                prefix='Até que finalmente' 
                hide-underline  
                class="form"
                />
            </q-field><br>
            <div class="row">
                <q-icon name="format_quote" size="50px" class="col format_quote"/>
                <q-btn color="positive" type="submit" round icon="done">
                    <span slot="loader" class="custom-loader">
                        <q-icon name="cached"/>
                    </span>
                </q-btn>
            </div>
        </form>
      </q-layout>
  </q-page>  
</template>

<script>
  import * as firebase from 'firebase'
  
  export default {
    name: 'PagePixar',
    data () {
      return {
        pixar1: this.$store.getters.pixar[0][0],
        pixar2: this.$store.getters.pixar[0][1],
        pixar3: this.$store.getters.pixar[0][2],
        pixar4: this.$store.getters.pixar[0][3],
        pixar5: this.$store.getters.pixar[0][4],
        pixar6: this.$store.getters.pixar[0][5],
      }
    },
    methods: {
      onPixar () { 
        var uid = this.user.uid
        var keyprojeto = this.myProject.key

        firebase.database().ref('usuarios/' + uid + '/user/projeto/' + keyprojeto + '/pixar/').set({
            pixar1: this.pixar1,
            pixar2: this.pixar2,
            pixar3: this.pixar3,
            pixar4: this.pixar4,
            pixar5: this.pixar5,
            pixar6: this.pixar6}) 
            
      }
    },
      mounted() {
        if (this.$store.getters.myProject.key == null || this.$store.getters.myProject.key == undefined || this.$store.getters.myProject.key == '') {
        this.$router.push("/")  
        }
      },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      error () {
        return this.$store.getters.error 
      },
      usuario () {
        return this.$store.getters.usuario
      },
      user() {
        return this.$store.getters.user      
      },
      myProject () {
        return this.$store.getters.myProject
      },
    },
  }
</script>

<style>
    .pixar {
        padding: 10%;
        padding-top: 0;
    }
    .fabprincipal {
      margin-top: 10px;
      margin-left: 10px;
    }
    .form {
      font-size: 1.1em
    }
</style>