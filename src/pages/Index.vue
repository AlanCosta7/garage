<template>
  <q-page class="flex itemn-center column">
      <q-modal style="background-color: rgba(0,0,0,.75); overflow: hidden" v-model="addprojeto">
          <q-page padding class="justify-center" style="background-color: white">
              <form @submit.prevent="onAddProjeto">
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
                    @click="addprojeto = false"
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
      <div class="inicio">
        <h3 v-if="listaMyProject.length == 0" style="font-weight: 50">Qual problema você quer resolver?</h3>
        <h5 v-if="listaMyProject.length == 0">Inicie seu processo criativo descrevendo seu problema</h5>
   <q-list class="flex-center row items-start">
        <q-item v-for='item in listaMyProject' link @click.native="entrarProjeto(item)" :key='item.id' >
          <q-card inline class="bigger q-ma-sm ecard" >
              <q-card-title class="relative-position">         
                  <p class="titulo">{{item.titulo}}</p>
              </q-card-title>
              <p class="textdescr">
                  {{item.descricao}}
              </p>
          </q-card>
        </q-item>
      </q-list>
      <q-btn class="btn-add" v-if="listaMyProject.length == 0" round color='blue-4' icon='add' @click.native='addprojeto = true'></q-btn>
    </div> 

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  meta: {
    title: 'garage thinking'
  },
  data() {
    return {
      addprojeto: false,
      titulo: '',
      descricao: ''
    }
  },
  mounted() {
    this.$firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push('/')
        this.$store.dispatch('carregarUsuario')
        this.$store.dispatch('carregaProject')
      } else {
        this.$router.push('/login')
      }
    })
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
    listaMyProject() {
      return this.$store.getters.listaMyProject
    }
  },
  methods: {
    entrarProjeto(item) {
      this.editedIndex = this.listaMyProject.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.$store.dispatch('addMyProject', item)
      this.$router.push('/myprojeto')
    },
    onAddProjeto() {
      var userData = {
        titulo: this.titulo,
        descricao: this.descricao
      }

      var newPostKey = this.$firebase
        .database()
        .ref()
        .child('posts')
        .push().key
      var updates = {}
      var uid = this.user.uid
      updates['/usuarios/' + uid + '/user/projeto/' + newPostKey] = userData
      this.addprojeto = false
      var key = newPostKey
      return this.$firebase
        .database()
        .ref()
        .update(updates)
        .then(data => {
          const key = newPostKey
          var uid = this.user.uid
          this.$firebase
            .database()
            .ref('/usuarios/' + uid + '/user/projeto/' + key)
            .update({ key: key })
        })
        .catch(function(error) {
          // [START onfailure]
          console.error('Upload failed:', error)
          // [END onfailure]
        })
    },
    sair() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
      //this.$store.dispatch('setClearState')
    }
  }
}
</script>

<style>

.titulo {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
.textdescr {
  text-align: justify;
  padding: 10px;
  font-size: 0.75em;
  color: white;
}
.inicio {
  padding: 10%;
  text-align: center;
}
</style>