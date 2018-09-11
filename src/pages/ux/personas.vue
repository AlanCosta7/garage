<template>
    <q-page>
        <q-layout class="personas">
            <h2 style="font-weight: 50">Personas</h2>
          <div>
            <div class="row flex flex-center">
              <form @submit.prevent="onPersonas">

                <!-- *** primeiro quadrante *** -->
                    <div class="row">
                        <div class="quadrante">
                            <q-field
                                name="fotoperfil"
                            >
                            <img :src="imageUrl" class="imageUrl"><br>
                            </q-field>

                            <q-field
                                name="nome"
                                id="nome">
                            <q-input
                                style="width: 350px"
                                type="text"
                                v-model="nome"
                                float-label="Nome"
                            />
                            </q-field>

                            <q-field
                                name="funcao"
                                id="funcao">
                            <q-input
                                style="width: 350px"
                                type="text"
                                v-model="funcao"
                                float-label="Função"
                            />
                            </q-field>

                            <q-field
                                name="frase"
                                id="frase">
                            <q-input
                                style="width: 350px; font-style: italic"
                                type="textarea"
                                v-model="frase"
                                float-label="Pensamento"
                                prefix='"'
                                suffix='"'
                            />
                            </q-field>
                        </div>

                        <!-- *** segundo quadrante *** -->

                        <div class="quadrante">
                            <q-field
                                name="idade"
                                id="idade">
                            <q-input
                                style="width: 100px"
                                type="number"
                                v-model="idade"
                                float-label="Idade"
                            />
                            </q-field><br>

                            <q-field
                                name="demografia"
                                id="demografia">
                            <q-input
                                style="width: 350px"
                                type="text"
                                v-model="demografia"
                                float-label="Demografia"
                            />
                            </q-field><br>

                            <q-field
                                name="comportamento"
                                id="comportamento">
                            <q-input
                                style="width: 350px"
                                type="textarea"
                                v-model="comportamento"
                                float-label="Comportamento"
                            />
                            </q-field><br>
                        </div>
                    </div>

                <!-- *** terceiro quadrante *** -->

                <div class="row">
                    <div class="quadrante">
                        <q-field
                            name="dores"
                            id="dores">
                        <q-input
                            style="min-height: 100px"
                            type="textarea"
                            v-model="dores"
                            float-label="Dores e Necessidades"
                        />
                        </q-field><br><br>
                    </div>

                <!-- *** quarto quadrante *** -->

                    <div class="quadrante">
                        <q-field
                            name="solucoes"
                            id="solucoes">
                        <q-input
                            style="min-height: 100px"
                            type="textarea"
                            v-model="solucoes"
                            float-label="Porenciais soluções"
                        />
                        </q-field><br><br>
                    </div>

                </div><br>
              </form>

                  <div class="listper">
                      Lista dos Personas
                    <q-scroll-area style="width: 100%; max-width: 85vw; height: 490px;">
                        <q-list>
                            <q-item v-for="item in listaPersonas" class="row" :key="item.id">
                                <img :src=item.imageUrl alt="foto do persona" class="imagempersona">
                                <h6 class="col colh6"> {{item.nome}} </h6>
                                <q-btn round class="btnp" icon="visibility" size="md" color="primary" @click="veritem(item)"></q-btn>
                                <q-btn round class="btnp" icon="delete" size="md" color="red" @click="del(item)"></q-btn>
                            </q-item>
                        </q-list>
                    </q-scroll-area>
                  </div>
                </div>
                <div class="row flex flex-center">
                    <div class="col-6">
                        <q-btn color="green"
                            type="submit"
                            round
                            :disabled="loading"
                            :loading="loading"
                            class="justify-center btnSalvar"
                            icon="done">
                        <span slot="loader" class="custom-loader">
                            <q-icon name="cached"/>
                        </span>
                        </q-btn>
                    </div>
                    <div class="col-auto">
                        <q-btn color="amber"
                            @click="clearPersona()"
                            :disabled="loading"
                            :loading="loading"
                            class="justify-center btnSalvar"
                            rounded
                            label="Limpar">
                        <span slot="loader" class="custom-loader">
                            <q-icon name="cached"/>
                        </span>
                        </q-btn>
                    </div>
                </div>
            </div>
            <q-modal
                v-model="deletar"><br>
                <div class="flex flex-center">
                    <div>
                        <p>Tem certeza que quer excluir {{editedItem.nome}}?</p>
                        <div class="row">
                        <q-btn label="Cancelar" class="col" color="red" @click="onCancel"/>
                        <q-btn label="Ok" class="col" color="green" @click="onOk"/>
                        </div>
                    </div>
                </div>
            </q-modal>


        </q-layout>
    </q-page>
</template>

<script>
export default {
  name: 'PagePersonas',
  data() {
    return {
      deletar: false,
      editedIndex: -1,
      editedItem: {},
      item: '',
      image: null,
      imageUrl: '../../statics/perfil.jpg',
      uid: this.$store.getters.user.uid,
      nome: '',
      funcao: '',
      frase: '',
      idade: '',
      demografia: '',
      comportamento: '',
      dores: '',
      solucoes: ''
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
    onPersonas() {
      var key = this.myProject.key
      var uid = this.user.uid
      var userData = {
        nome: this.nome,
        imageUrl: '../../statics/perfil.jpg',
        funcao: this.funcao,
        frase: this.frase,
        idade: this.idade,
        demografia: this.demografia,
        comportamento: this.comportamento,
        dores: this.dores,
        solucoes: this.solucoes
      }
      var newPersonaKey = this.$firebase
        .database()
        .ref()
        .child('usuarios/' + uid + '/user/projeto/' + key + '/personas/')
        .push().key
      var updates = {}
      var uid = this.user.uid
      var key = this.myProject.key
      updates['usuarios/' + uid + '/user/projeto/' + key + '/personas/' + newPersonaKey] = userData
      this.nome = ''
      ;(this.imageUrl = '../../assets/perfil.jpg'), (this.funcao = '')
      this.frase = ''
      this.idade = ''
      this.demografia = ''
      this.comportamento = ''
      this.dores = ''
      this.solucoes = ''

      var keyPersona = newPersonaKey
      return this.$firebase
        .database()
        .ref()
        .update(updates)
        .then(
          this.$firebase
            .database()
            .ref('usuarios/' + uid + '/user/projeto/' + key + '/personas/' + keyPersona)
            .update({ key: keyPersona })
        )
        .catch(function(error) {
          // [START onfailure]
          console.error('Upload failed:', error)
          // [END onfailure]
        })
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    },
    clearPersona() {
      this.nome = ''
      ;(this.imageUrl = '../../assets/perfil.jpg'), (this.funcao = '')
      this.frase = ''
      this.idade = ''
      this.demografia = ''
      this.comportamento = ''
      this.dores = ''
      this.solucoes = ''
    },
    veritem(item) {
      this.nome = item.nome
      this.funcao = item.funcao
      this.frase = item.frase
      this.idade = item.idade
      this.demografia = item.demografia
      this.comportamento = item.comportamento
      this.dores = item.dores
      this.solucoes = item.solucoes
    },
    del(item) {
      this.editedIndex = this.listaPersonas.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.deletar = true
    },
    onOk() {
      this.save()
      var keyitem = this.editedIndex
      var uid = this.user.uid
      var key = this.myProject.key
      if (this.listaPersonas.length > 1) {
        this.$firebase
          .database()
          .ref()
          .child('usuarios/' + uid + '/user/projeto/' + key + '/personas/' + keyitem)
          .remove()
        this.nome = ''
        ;(this.imageUrl = '../../assets/perfil.jpg'), (this.funcao = '')
        this.frase = ''
        this.idade = ''
        this.demografia = ''
        this.comportamento = ''
        this.dores = ''
        this.solucoes = ''
        this.deletar = false
      } else if (this.listaPersonas.length == 1) {
        this.$firebase
          .database()
          .ref()
          .child('usuarios/' + uid + '/user/projeto/' + key)
          .update({ personas: '' })
        this.nome = ''
        ;(this.imageUrl = '../../assets/perfil.jpg'), (this.funcao = '')
        this.frase = ''
        this.idade = ''
        this.demografia = ''
        this.comportamento = ''
        this.dores = ''
        this.solucoes = ''
        this.deletar = false
      }
    },
    onCancel() {
      this.deletar = false
    },
    save() {
      if (this.editedIndex > -1) {
        var keyitem = this.editedIndex
        var listaPersonas = this.listaPersonas
        Object.assign(listaPersonas[this.editedIndex], this.editedItem)
        var uid = this.user.uid
        var key = this.myProject.key
        this.$firebase
          .database()
          .ref()
          .child('usuarios/' + uid + '/user/projeto/' + key + '/personas/')
          .set(listaPersonas)
      }
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
    },
    listaPersonas() {
      return this.$store.getters.listaPersonas
    }
  }
}
</script>

<style>
.personas {
  padding: 10%;
  padding-top: 0;
}
.quadrante {
  width: 270px;
  padding: 10px;
  margin: 5px;
  background-color: rgb(232, 234, 246);
}
.listper {
  width: 270px;
  padding: 10px;
  margin: 5px;
  margin-top: 0;
  background-color: rgb(232, 234, 246);
}
.imageUrl {
  object-fit: cover;
  width: 150px;
  height: 150px;
}
.imagempersona {
  object-fit: cover;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-left: 2%;
  margin-right: 2%;
}
.colh6 {
  margin-top: 0;
  margin-bottom: 5px;
}
.btnp {
  margin-right: 10px;
}
.per {
  width: 100%;
  margin-top: 30%;
}
</style>
