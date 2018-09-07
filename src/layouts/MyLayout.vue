<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar
        color="dark"
        inverted
      >
        <q-toolbar-title>
        <div class="row"><div style="font-weight: bold">garage</div> <div style="font-weight: 50">thinking</div></div>
        </q-toolbar-title>
        <div v-if="user.email">{{user.nome}}</div>
        <q-btn
          @click.native="home"
          flat
          round
          dense
          icon="dashboard"
          v-if="user.email"
        />
        <q-btn flat round dense icon="build" v-if="user.email"> 
          <q-popover
        >
          <q-list link style="min-width: 100px">
            <q-item v-close-overlay>

              <q-item-main label="Sair" @click.native="sair()"/>
            </q-item>
          </q-list>
        </q-popover>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <fabbotao v-if="myProject"></fabbotao>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import fabbotao from '../pages/btn.vue'

export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  components: {
    fabbotao
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

    },
    home () {
      this.$store.dispatch('setClearState')
      this.$router.push("/")  
      this.$store.dispatch('addMyProject', '')
    }
  }
}
</script>

<style>

</style>
