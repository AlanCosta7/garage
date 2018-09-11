<template>
  <q-page padding>
    <div class="flex-center row">
      <h1 class="q-display-2">Seus projetos</h1>
    </div>
    <div class="flex-center row items-start project-list" v-if="loading">
      <blockquote>Carregando projetos...</blockquote>
    </div>
    <q-list class="flex-center row items-start project-list" v-if="!loading && projects">
      <q-item :id="item['.key']" v-for="item in projects" link @click.native="onSelectProject(item)" :key="item['.key']" >
        <q-card inline class="bigger q-ma-sm ecard" >
          <q-card-title class="relative-position">         
            <p class="titulo">{{ item.titulo }}</p>
          </q-card-title>
          <p class="textdescr">{{ item.descricao }}</p>
        </q-card>
      </q-item>
    </q-list>
    <div class="flex-center row" v-if="!loading">
      <q-btn class="btn-add" round color='blue-4' icon='add' @click.native='onShowAddModal()'> </q-btn>
    </div>
    <q-modal style="background-color: rgba(0,0,0,.75); overflow: hidden" v-model="showAddModal">
          <q-page padding class="justify-center" style="background-color: white">
              <form @submit.prevent="onAddProject">
                <q-field
                  helper="Palavra chave"
                >  
                  <q-input
                    type="text"
                    v-model="titulo"
                    placeholder="Título"
                  />
                </q-field><br><br>
                <q-field
                  helper="Qual problema você precisa resolver?"
                >  
                  <q-input
                    type="text"
                    v-model="descricao"
                    placeholder="Descrição"
                  />
                </q-field>

                  <br><br>
                <div class="row">
                  <q-btn
                    class="btnSair col"
                    color="red"
                    @click="onCloseModal()"
                    flat
                    label="Cancelar"
                  />
                  <q-btn 
                    color="green" 
                    type="submit" 
                    flat
                    :disabled="loading" 
                    :loading="loading" 
                    label="OK">
                    <span slot="loader" class="custom-loader">
                    <q-icon name="cached"/>
                    </span>
                  </q-btn>
                </div>
              </form>
          </q-page>      
      </q-modal>
  </q-page>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'Projects',
  data() {
    return {
      showAddModal: false,
      titulo: '',
      descricao: ''
    }
  },
  created() {
    const uid = this.$store.state.user.uid
    const path = `/usuarios/${uid}/user/projeto`
    const ref = this.$db.ref(path)
    this.projectsRef = ref
    this.$store.dispatch('projects/setProjectsRef', { ref })
  },
  computed: Vuex.mapGetters({
    loading: 'projects/loading',
    projects: 'projects/projects'
  }),
  methods: {
    clearForm() {
      this.titulo = ''
      this.descricao = ''
    },
    onShowAddModal(){
      this.showAddModal = true;
    },
    onCloseModal(){
      this.showAddModal = false;
    },
    onAddProject() {
      const titulo = this.titulo.trim()
      const descricao = this.descricao.trim()
      this.$store.dispatch('projects/addProject', { titulo, descricao }).then(()=>{
        this.clearForm()
        this.onCloseModal()
      })
    },
    onSelectProject(item) {
      const id = item['.key']
      this.$router.push(`/projects/${id}`)
    }
  }
}
</script>

<style>
</style>
