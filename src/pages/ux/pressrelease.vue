<template>
    <q-page>        
        <q-layout class="press">
            <h2 style="font-weight: 50">Press release do futuro</h2>
          <form @submit.prevent="onPress">  
              <q-field
                  name="titulo"
                  id="titulo"
                  count
                  >
                  <q-input
                  style="width: 300px; height: 70px; font-weight: bold; font-size: 1.7em"
                  type="text"
                  v-model="titulo"
                  hide-underline 
                  placeholder="Título"  
                  />
              </q-field>
              <q-field
                  name="subtitulo"
                  id="subtitulo"
                  count
                  >
                  <q-input
                  style="font-weight: bold; font-size: 1.2em"
                  type="text"
                  v-model="subtitulo"
                  placeholder="Subtítulo"  
                  hide-underline 
                  />
              </q-field>
              <q-field
                  name="problema"
                  id="problema"
                  count
                  >
                  <q-input
                  type="textarea"
                  v-model="problema"
                  placeholder="problema"
                  hide-underline  
                  />
              </q-field>
              <q-field
                  name="solucao"
                  id="solucao"
                  count
                  >
                  <q-input
                  type="textarea"
                  v-model="solucao"
                  placeholder="Solução" 
                  hide-underline 
                  />
              </q-field>
              <q-field
                  name="detalhes"
                  id="detalhes"
                  count
                  >
                  <q-input
                  type="textarea"
                  v-model="detalhes"
                  placeholder="Detalhes"
                  hide-underline  
                  />
              </q-field>
              <q-field
                  name="depoimento"
                  id="depoimento"
                  count
                  >
                  <q-input
                  type="textarea"
                  v-model="depoimento"
                  placeholder="Depoimentos" 
                  style="font-style: italic"
                  hide-underline 
                  />
              </q-field>
              <q-field
                  name="canal"
                  id="canal"
                  count
                  >
                  <q-input
                  type="textarea"
                  v-model="canal"
                  placeholder="Canal" 
                  hide-underline 
                  />
              </q-field><br>
                <div class="row">
                    <div class="col"></div>
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
      name: 'PagePressRelease',
      data () {
        return {
          titulo: this.$store.getters.press[0][0],
          subtitulo: this.$store.getters.press[0][1],
          problema: this.$store.getters.press[0][2],
          solucao: this.$store.getters.press[0][3],
          detalhes: this.$store.getters.press[0][4],
          depoimento: this.$store.getters.press[0][5],
          canal: this.$store.getters.press[0][6],
        }
      },
        mounted() {
          if (this.$store.getters.myProject.key == null || this.$store.getters.myProject.key == undefined || this.$store.getters.myProject.key == '') {
          this.$router.push("/")  
          } 
        },
      methods: {
        onPress () { 
          var uid = this.user.uid
          var keyprojeto = this.myProject.key
  
          firebase.database().ref('usuarios/' + uid + '/user/projeto/' + keyprojeto + '/press/').set({
              press1: this.titulo,
              press2: this.subtitulo,
              press3: this.problema,
              press4: this.solucao,
              press5: this.detalhes,
              press6: this.depoimento,
              press7: this.canal}) 
        },
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
    }
}
</script>
  
  <style>
      .press {
          padding: 10%;
          padding-top: 0
      }
      .fabprincipal {
        margin-top: 10px;
        margin-left: 10px; 
      }
  </style>