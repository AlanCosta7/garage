<template>
  <q-page>
  </q-page>
</template>

<script>
export default {
  name: 'PagemyProjeto',
  data () {
    return {
    }
  },
  mounted() {
    if (this.$store.getters.myProject.key == null || this.$store.getters.myProject.key == undefined || this.$store.getters.myProject.key == '') {
      this.$router.push("/")
    }
    this.$store.dispatch('carregarUsuario')
    this.$store.dispatch('addlistaParceirosChave')
    this.$store.dispatch('addlistaAtividadeChave')
    this.$store.dispatch('addlistaCanais')
    this.$store.dispatch('addlistaEstruturadeCusto')
    this.$store.dispatch('addlistaFontedeRenda')
    this.$store.dispatch('addlistaPropostadeValor')
    this.$store.dispatch('addlistaRecursosChave')
    this.$store.dispatch('addlistaSegmento')
    this.$store.dispatch('addlistaRelacaoCliente')

    this.$store.dispatch('addlistaProdutoservico')
    this.$store.dispatch('addlistaCriadoresganho')
    this.$store.dispatch('addlistaAnalgesico')
    this.$store.dispatch('addlistaGanhos')
    this.$store.dispatch('addlistaDores')
    this.$store.dispatch('addlistaTarefas')

    this.$store.dispatch('addPixar')
    this.$store.dispatch('addPress')
    this.$store.dispatch('addPitch')
    this.$store.dispatch('addlistaPersonas')
    this.$store.dispatch('carregaPremissas')
    this.$store.dispatch('carregaEstagio')
    this.$store.dispatch('carregaOportunidade')
    this.$store.dispatch('addlistaDiamante')
    this.$store.dispatch('addlistaPrototipo')
    this.$router.push("/duplodiamante")

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
    }
  },
  methods: {
    canvasf () {
      this.$router.push("/canvas")
    },
    pixarf () {
      this.$router.push("/pixar")
    },
    pressf () {
      this.$router.push("/press")
    }
  }
}
</script>

<style>
    .btnSair {
        position: absolute;
        right: 5%;
    }
    .imgTema {
      object-fit: cover;
      width: 100%;
      height: 50em;
    }
    .avartar {
      object-fit: cover;
      border-radius: 100%;
      width: 40px;
      height: 40px;
    }
    .nome {
      padding-left: 20px
    }
    .q-layout-drawer {
      width: 100px;
    }

</style>
