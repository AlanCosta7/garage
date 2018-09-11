<template>
  <q-page padding>
    <div class="flex-center row">
      <h1 class="q-display-2">Projeto {{ currentProject.titulo }}</h1>
    </div>
  </q-page>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'project',
  // data() {
  //   return {}
  // },
  created() {
    const projectId = this.$route.params.id
    const uid = this.$store.state.user.uid
    const path = `/usuarios/${uid}/user/projeto/${projectId}`
    const ref = this.$db.ref(path)
    this.currentProjectRef = ref
    this.$store.dispatch('projects/setCurrentProjectRef', { ref })
  },
  computed: Vuex.mapGetters({
    loading: 'projects/loading',
    currentProject: 'projects/currentProject'
  })
}
</script>

<style>
</style>
