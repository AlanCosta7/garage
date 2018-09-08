<template>
  <q-layout>
    <q-layout-header reveal>
      <q-toolbar
        color="dark"
        inverted
      >
      <q-btn flat round dense icon="menu" v-if="myProject" @click="drawerleft = !drawerleft" aria-label="Toggle menu on left side" />  

        <q-toolbar-title>
        <div class="row"><div style="font-weight: bold">garage</div> <div style="font-weight: 50">thinking</div></div>
        </q-toolbar-title>
        <div v-if="user.email">{{user.nome}}</div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      content-class="bg-dark"
      style="color: white"
      v-model="drawerleft"
    >
    <q-list-header style="color: white" >Menu</q-list-header>
      <q-item to="/duplodiamante" @click.native="drawerleft = false">
        <q-item-side icon="wb_incandescent" color="amber" />
        <q-item-main label="Double Diamond" sublabel="Ambiente criativo" style="color: white" />
      </q-item>
      <q-item to="/canvas" @click.native="drawerleft = false">
        <q-item-side icon="view_quilt" color="amber" />
        <q-item-main label="Canvas Business" sublabel="Modelo de negócio" />
      </q-item>
      <q-item to="/canvavalor" @click.native="drawerleft = false">
        <q-item-side icon="card_giftcard" color="amber" />
        <q-item-main label="Proposta de Valor" sublabel="Persona em foco" />
      </q-item>
      <q-item to="/mapausuario" @click.native="drawerleft = false">
        <q-item-side icon="favorite" color="amber" />
        <q-item-main label="Jornada do Usuário" sublabel="Mapeando o usuário" />
      </q-item>
      <q-item to="/personas" @click.native="drawerleft = false">
        <q-item-side icon="face" color="amber" />
        <q-item-main label="Personas" sublabel="Quem é seu usuário?" />
      </q-item>
      <q-item to="/press" @click.native="drawerleft = false">
        <q-item-side icon="local_parking" color="amber" />
        <q-item-main label="Press release do futuro" sublabel="Definindo uma visão" />
      </q-item>
      <q-item to="/pixar" @click.native="drawerleft = false">
        <q-item-side icon="format_quote" color="amber" />
        <q-item-main label="Pixar Storytelling" sublabel="Conte uma boa história" />
      </q-item>
      <q-item to="/pitch" @click.native="drawerleft = false">
        <q-item-side icon="record_voice_over" color="amber" />
        <q-item-main label="Pitch" sublabel="Construa um bom roteiro" />
      </q-item>
      <div class="separador"></div>
        <q-item link @click.native="home()">
          <q-item-side icon="dashboard" color="amber" />
          <q-item-main label="Projetos"/>
        </q-item>
        <q-item link @click.native="sair()">
          <q-item-side icon="close" color="amber" />
          <q-item-main label="Sair" />
        </q-item>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      drawerleft: false
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
    useremail () {
      return this.$store.getters.user[0].email            
    },
    myProject () {
      return this.$store.getters.myProject.key
    },
  },
  methods: {
    sair () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
      this.$store.dispatch('setClearState')
      this.drawerleft = false

    },
    home () {
      this.$store.dispatch('setClearState')
      this.$router.push("/")  
      this.$store.dispatch('addMyProject', '')
      this.drawerleft = false
    }
  }
}
</script>

<style>
.separador {
    width: 100%; /* coloque aqui a largura da linha */
    border-top: 1px solid rgb(114, 114, 114);
    list-style-type: none;
    padding: 5%
}
</style>
