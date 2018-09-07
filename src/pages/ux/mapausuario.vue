<template>
    <q-page>
        <q-layout class="mapausuario">
          <h2 style="font-weight: 50">Mapa da Jornada do Usuário</h2>
                      
            <!-- *** Modal para criar Premissa  *** -->
            
            <q-modal v-model="addpremissa">
                <form @submit.prevent="onAddPremissa">  
                    <q-field
                    color="white"
                    >
                    Princípios de uso<br><br>
                    <q-input
                    color="orange"
                    inverted-light	
                        type="text"
                        v-model="premissa"
                    />
                    </q-field><br><br>
                    <q-btn color="green" 
                        type="submit" 
                        :disabled="loading" 
                        :loading="loading" 
                        label="OK">
                        <span slot="loader" class="custom-loader">
                        <q-icon name="cached"/>
                        </span>
                    </q-btn>
                    
                    <q-btn
                        class="btnSair"
                        color="red"
                        @click="addpremissa = false"
                        label="Cancelar"
                    />
                </form>
            </q-modal>
                        
            <!-- *** Modal para deletar Premissa  *** -->

            <q-modal v-model="deletarpremissa"><br>
                <div class="flex flex-center">
                    <div>    
                        <p>Tem certeza que quer excluir essa premissa?</p>
                        <div class="row"> 
                        <q-btn label="Cancelar" class="col" color="red" @click.native="deletarpremissa = false"/>
                        <q-btn label="Ok" class="col" color="green" @click="onOkpremissa"/>
                        </div>
                    </div>
                </div>
            </q-modal>
            
            <!-- *** Modal para criar Estágio  *** -->

            <q-modal v-model="addestagio">
                    <form @submit.prevent="onAddestagio">  
                            Estágio<br><br>
                        <q-field
                            name="estagio"
                            id="estagio"
                            color="orange"
                            icon="label_important"
                        >
                        <q-input    
                            color="orange"
                            inverted-light
                            type="text"
                            v-model="estagio"
                        />
                        </q-field><br><br>
                        <q-btn 
                            color="green" 
                            type="submit" 
                            :disabled="loading" 
                            :loading="loading" 
                            label="OK">
                            <span slot="loader" class="custom-loader">
                            <q-icon name="cached"/>
                            </span>
                        </q-btn>
                        
                        <q-btn
                            class="btnSair"
                            color="red"
                            @click="addestagio = false"
                            label="Cancelar"
                        />
                </form>
            </q-modal>
                                         
            <!-- *** Modal para criar Oportunidade  *** -->

            <q-modal v-model="addoportinidades">
                <form @submit.prevent="onAddoportunidade"> 
                        Oportunidade <br><br> 
                    <q-field
                    name="oportunidade"
                    id="oportunidade"
                    icon="label_important"
                    >
                    <q-input
                        color="orange"
                        inverted-light
                        type="textarea"
                        v-model="oportunidade"
                    />
                    </q-field><br><br>
                    <q-btn color="green" 
                        type="submit" 
                        :disabled="loading" 
                        :loading="loading" 
                        label="OK">
                        <span slot="loader" class="custom-loader">
                        <q-icon name="cached"/>
                        </span>
                    </q-btn>
                    
                    <q-btn
                        class="btnSair"
                        color="red"
                        @click="addoportinidades = false"
                        label="Cancelar"
                    />
                </form>
            </q-modal>
 
            <!-- *** Modal para deletar Oportunidade  *** -->
      
            <q-modal v-model="deletaroportunidade"><br>
                <div class="flex flex-center">
                    <div>    
                        <p>Tem certeza que quer excluir essa oportunidade?</p>
                        <div class="row"> 
                        <q-btn label="Cancelar" class="col" color="red" @click.native="deletaroportunidade = false"/>
                        <q-btn label="Ok" class="col" color="green" @click="onOkoportunidade"/>
                        </div>
                    </div>
                </div>
            </q-modal>

            <!-- *** Lista Premissa  *** -->

            <div class="row items-center">
                <q-list class="flex-center row items-start">
                        <h6>Princípios de uso</h6>
                    <q-item v-for='item in listaMyPremissas' :key='item.id' >
                    <div class="premissa row"><p>{{item.premissa}}</p><q-btn class="deleteprem" round color="red" flat size="xs" icon="close" @click.native="delpremissa(item)"/>
                    </div>
                    </q-item>
                </q-list>
                <q-btn class="btnadd" round color='blue-4' icon='add' @click.native='addpremissa = true'>  
                    <q-tooltip>
                    Criar premissa
                    </q-tooltip>
                </q-btn>
            </div>
                        
            <!-- *** Lista Estágios  *** -->

            <div>
                <div class="row flex items-center">
                    <h6>Estágios</h6>                    

                    <q-btn class="btnadd" round color='blue-4' icon='add' @click.native='addestagio = true'>  
                        <q-tooltip>
                            Criar estágio
                        </q-tooltip>
                    </q-btn>
                </div>
              <div id="container">    
                <q-list class="flex-center row no-wrap inline items-start ">
                    <q-item v-for='item in listaEstagio' :key='item.id'>
                    <div class="column inline no-wrap">
                        <div class="premissa column"><p>{{item.estagio}}</p><q-btn class="deleteprem" round color="red" flat size="xs" icon="close" @click.native="delestagio(item)"/>
                        </div><br>
                        <q-item-main>
                          <q-scroll-area style="width: 100%; height: 90px; max-height: 70vh;">
                            <q-input v-model="item.textfazendo" :before="[{icon: 'hourglass_full'}]" inverted type="textarea" float-label="Fazendo" />
                          </q-scroll-area>
                        </q-item-main><br>
                        <q-item-main>
                          <q-scroll-area style="width: 100%; height: 90px; max-height: 70vh;">
                            <q-input v-model="item.textpensando" :before="[{icon: 'sms'}]" inverted type="textarea" float-label="Pensando" />
                          </q-scroll-area>
                        </q-item-main><br>
                        <q-item-main>
                          <q-scroll-area style="width: 100%; height: 90px; max-height: 70vh;">
                            <q-input v-model="item.textsentindo" :before="[{icon: 'favorite_border'}]" inverted type="textarea" float-label="Sentindo" />
                          </q-scroll-area>
                        </q-item-main><br>
                        <q-item-main>
                            <p class="caption">
                                Aproveitamento
                            </p>
                            <q-slider
                                v-model="item.aproveitamento"
                                :min="0"
                                :max="10"
                                label
                                label-always
                                snap
                            />
                        </q-item-main>
                        <q-item-main>    
                            <p class="caption">
                                Relevancia
                            </p>
                            <q-slider
                                v-model="item.relevancia"
                                :min="0"
                                :max="10"
                                label
                                label-always
                                snap
                            />
                        </q-item-main>
                        <q-item-main>    
                            <p class="caption">
                                Utilidade
                            </p>
                            <q-slider
                                v-model="item.utilidade"
                                :min="0"
                                :max="10"
                                label
                                label-always
                                snap
                            />
                        </q-item-main>
                    </div>
                    </q-item>
                </q-list>
              </div>

              <div class="row flex items-center">
                <h6>Oportunidades</h6>    
                <q-btn class="btnadd" round color='blue-4' icon='add' @click.native='addoportinidades = true'>  
                    <q-tooltip>
                        Criar oportunidades
                    </q-tooltip>
                </q-btn>                
              </div>
              <q-list class="flex-center row no-wrap inline items-start ">
                <q-item v-for='item in listaOportunidade' :key='item.id' class="scrollmenu">
                    <div class="column inline no-wrap">
                        <div class="premissa column"><p>{{item.oportunidade}}</p><q-btn class="deleteprem" round color="red" flat size="xs" icon="close" @click.native="deloportunidade(item)"/>
                        </div><br>
                    </div>
                </q-item> 
              </q-list>   
            </div>
        </q-layout>
    </q-page>
</template>

<script>
  import * as firebase from 'firebase'
  
  export default {
    name: 'PageMapaUsuario',
    data () {
      return {
        item: '',
        premissa: '',
        estagio: '',
        textfazendo: '',
        oportunidade: '',
        addpremissa: false,
        deletarpremissa: false,
        addestagio: false,
        addoportinidades: false,
        deletarestagio: false,
        deletaroportunidade: false,
      }
    },
    mounted() {
      if (this.$store.getters.myProject.key == null || this.$store.getters.myProject.key == undefined || this.$store.getters.myProject.key == '') {
      this.$router.push("/")  
      } 
    },
    updated () {
        var key = this.myProject.key
        var uid = this.user.uid
                firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/').update(
                    {estagio: this.listaEstagio}
                )
        },
    methods: {
        onAddPremissa () { 
                var key = this.myProject.key
                var uid = this.user.uid
                var userData = {
                    premissa: this.premissa,
                    }

                var newPostKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/premissa/').push().key    
                var updates = {}    
                var key = this.myProject.key
                var uid = this.user.uid
                updates['usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/premissa/' + newPostKey] = userData
                this.addpremissa = false
                var keyPremissa = newPostKey
                this.premissa = []
                return firebase.database().ref().update(updates)
                .then(
                    firebase.database().ref('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/premissa/' + keyPremissa).update({key: keyPremissa})
                    )
                    .catch(function(error) {
                        // [START onfailure]
                        console.error('Upload failed:', error);
                        // [END onfailure]
                    })
        },
        delpremissa (item) {
            this.editedIndex = this.listaMyPremissas.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.deletarpremissa = true
        },
        onOkpremissa () {
            var keyitem = this.editedItem.key
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaMyPremissas.length > 1) {
            firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/premissa/' + keyitem).remove()    
                this.deletarpremissa = false
              } else if (this.listaMyPremissas.length == 1) {
            firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/').update({premissa: ""})
                this.deletarpremissa = false
            }
        },
        onAddoportunidade () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
                oportunidade: this.oportunidade,
            }

            var newPostKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/oportunidade').push().key    
            var updates = {}    
            var key = this.myProject.key
            var uid = this.user.uid
            updates['usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/oportunidade/' + newPostKey] = userData
            this.addoportinidades = false
            var keyOportunidade = newPostKey
            this.oportunidade = ''
            return firebase.database().ref().update(updates)
                .then(
                    firebase.database().ref('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/oportunidade/' + keyOportunidade).update({key: keyOportunidade})
                )
                .catch(function(error) {
                    // [START onfailure]
                    console.error('Upload failed:', error);
                    // [END onfailure]
                })
        },
        onAddestagio () { 
                var key = this.myProject.key
                var uid = this.user.uid
                var userData = {
                    estagio: this.estagio,
                    textfazendo: '',
                    textpensando: '',
                    textsentindo: '',
                    aproveitamento: '',
                    relevancia: '',
                    utilidade: ''
                    }

                var newPostKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/estagio').push().key    
                var updates = {}    
                var key = this.myProject.key
                var uid = this.user.uid
                updates['usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/estagio/' + newPostKey] = userData
                this.addestagio = false
                var keyEstagio = newPostKey
                this.estagio = ''
                return firebase.database().ref().update(updates)
                .then(
                    firebase.database().ref('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/estagio/' + keyEstagio).update({key: keyEstagio})
                    )
                    .catch(function(error) {
                        // [START onfailure]
                        console.error('Upload failed:', error);
                        // [END onfailure]
                    })
        },
        delestagio (item) {
            this.editedIndex = this.listaEstagio.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.deletarestagio = true
        },
        deloportunidade (item) {
            this.editedIndex = this.listaOportunidade.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.deletaroportunidade = true
        },
        onOkestagio () {
            var keyitem = this.editedItem.key
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaEstagio.length > 1) {
            firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/estagio/' + keyitem).remove()    
                this.deletarestagio = false
              } else if (this.listaEstagio.length == 1) {
            firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/').update({estagio: ""})
                this.deletarestagio = false
            }
        },
        onOkoportunidade () {
            var keyitem = this.editedItem.key
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaOportunidade.length > 1) {
            firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/oportunidade/' + keyitem).remove()    
                this.deletaroportunidade = false
              } else if (this.listaOportunidade.length == 1) {
            firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/').update({oportunidade: ""})
                this.deletaroportunidade = false
            }

        }
    },
    computed: {
        listaMyPremissas () {
            return this.$store.getters.listaMyPremissas
        },  
        listaEstagio () {
            return this.$store.getters.listaEstagio
        },  
        listaOportunidade () {
            return this.$store.getters.listaOportunidade
        },  
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
    .premissa {
        background-color: orange;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 10px;
        width: 200px;
        font-size: 1.25em;
        font-weight: bold;
        text-align: center 
    }
    .mapausuario {
        padding: 10%;
        padding-top: 0;
    }
    .deleteprem {
        position: absolute;
        top: 9px;
        right: 15px;
    }
    .modal-content,
      .q-modal-layout {
        padding: 2%;
      }
</style>