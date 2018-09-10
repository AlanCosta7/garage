<template>
  <q-page>        
    <q-layout class="press">
      <h2 style="font-weight: 50">Pitch</h2>
      <form @submit.prevent="onPitch">  
          <q-field
              name="oportunidade"
              id="oportunidade"
              count
              >
              <q-input
              type="textarea"
              v-model="oportunidade"
              hide-underline 
              placeholder="Qual é a oportunidade?"  
              />
          </q-field>
          <q-field
              name="mercado"
              id="mercado"
              count
              >
              <q-input
              type="textarea"
              v-model="mercado"
              placeholder="O Mercado que irá atuar"  
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
              placeholder="Qual é a sua solução?" 
              hide-underline 
              />
          </q-field>
          <q-field
              name="diferenciais"
              id="diferenciais"
              count
              >
              <q-input
              type="textarea"
              v-model="diferenciais"
              placeholder="Seus diferenciais"
              hide-underline  
              />
          </q-field>
          <q-field
              name="buscando"
              id="buscando"
              count
              >
              <q-input
              type="textarea"
              v-model="buscando"
              placeholder="O que está buscando" 
              style="font-style: italic"
              hide-underline 
              />
          </q-field>
          <q-field
              name="final"
              id="final"
              count
              >
              <q-input
              type="textarea"
              v-model="final"
              placeholder="Final" 
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
export default {
  name: 'PagePitch',
  data() {
    return {
      oportunidade: this.$store.getters.pitch[0][0],
      mercado: this.$store.getters.pitch[0][1],
      solucao: this.$store.getters.pitch[0][2],
      diferenciais: this.$store.getters.pitch[0][3],
      buscando: this.$store.getters.pitch[0][4],
      final: this.$store.getters.pitch[0][5]
    }
  },
  mounted() {
    if (
      this.$store.getters.myProject.key == null ||
      this.$store.getters.myProject.key == undefined ||
      this.$store.getters.myProject.key == ''
    ) {
      this.$router.push('/')
    }
  },
  methods: {
    onPitch() {
      var uid = this.user.uid
      var keyprojeto = this.myProject.key

      this.$firebase
        .database()
        .ref('usuarios/' + uid + '/user/projeto/' + keyprojeto + '/pitch/')
        .set({
          press1: this.oportunidade,
          press2: this.mercado,
          press3: this.solucao,
          press4: this.diferenciais,
          press5: this.buscando,
          press6: this.final
        })
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    error() {
      return this.$store.getters.error
    },
    usuario() {
      return this.$store.getters.usuario
    },
    user() {
      return this.$store.getters.user
    },
    myProject() {
      return this.$store.getters.myProject
    }
  }
}
</script>
      
<style>
  .press {
    padding: 10%;
    padding-top: 0;
  }
  .fabprincipal {
    margin-top: 10px;
    margin-left: 10px;
  }
</style>