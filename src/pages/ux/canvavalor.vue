<template>
        <q-page>
            <q-resize-observable @resize="onResize" />
          <q-layout class="canvas">
    
            <h2 style="font-weight: 50">Canvas da Proposta de Valor</h2>
          <!-- *** Painel *** -->
          <div class="row-xl flex flex-center" id="canvas" >
                <div class="row titulovalor flex flex-center"><p class="col-6">Proposta de Valor</p><p class="col-auto">Segmento de Mercado</p></div>

              <div class="row">
                    <div class="col-auto bg" id="pca">
                      <div class="row cab"> 
                        <h6 class="col"><q-icon name="room_service" size="20px"/> Produtos e Serviços</h6>
                        <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitpca = true"></q-btn>
                      </div>
                            <q-scroll-area style="width: 100%; max-width: 85vw; height: 265px; max-height: 70vh;">
                              <q-list>
                                <q-item class="item" v-for="item in listaProdutoservico" :key="item.id">
                                  <q-card :color=item.color class="postitext row">                              
                                    <p class="col">{{item.produtoservico}}</p>
                                    <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititempca(item)"></q-btn>
                                  </q-card>
                                </q-item>
                              </q-list>
                            </q-scroll-area>
                    </div>
    
                    <div class="col-auto">
                     <div class="bg" id="aca">
                      <div class="row cab"> 
                        <h6 class="col"><q-icon name="trending_up" size="20px"/> Criadores de Ganhos</h6>
                        <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitaca = true"></q-btn>
                      </div>
                          <q-scroll-area style="width: 100%; max-width: 85vw; height: 120px; max-height: 70vh;">
                            <q-list>
                              <q-item class="item" v-for="item in listaCriadoresganho" :key="item.id">
                                <q-card :color=item.color class="postitext row">                              
                                  <p class="col">{{item.criadoresganho}}</p>
                                  <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemaca(item)"></q-btn>
                                </q-card>
                              </q-item>
                            </q-list>
                          </q-scroll-area>
                     </div>
                    
                     <div class="bg" id="rca">
                        <div class="row cab"> 
                          <h6 class="col"><q-icon name="local_hospital" size="20px"/> Analgésicos</h6>
                          <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitrca = true"></q-btn>
                        </div>
                            <q-scroll-area style="width: 100%; max-width: 85vw; height: 120px; max-height: 70vh;">
                              <q-list>
                                <q-item class="item" v-for="item in listaAnalgesico" :key="item.id">
                                  <q-card :color=item.color class="postitext row">                              
                                    <p class="col">{{item.analgesico}}</p>
                                    <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemrca(item)"></q-btn>
                                  </q-card>
                                </q-item>
                              </q-list>
                            </q-scroll-area>
                     </div>
                    </div>
    
                    <div class="col-auto">
                     <div class="bg" id="reca">
                      <div class="row cab"> 
                        <h6 class="col"><q-icon name="sentiment_satisfied_alt" size="20px"/> Ganhos do Cliente</h6>
                        <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitreca = true"></q-btn>
                      </div>
                          <q-scroll-area style="width: 100%; max-width: 85vw; height: 120px; max-height: 70vh;">
                            <q-list>
                              <q-item class="item" v-for="item in listaGanhos" :key="item.id">
                                <q-card :color=item.color class="postitext row">                              
                                  <p class="col">{{item.ganhos}}</p>
                                  <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemreca(item)"></q-btn>
                                </q-card>
                              </q-item>
                            </q-list>
                          </q-scroll-area>
                     </div>
                    
                     <div class="bg" id="caa">
                        <div class="row cab"> 
                          <h6 class="col"><q-icon name="sentiment_very_dissatisfied" size="20px"/> Dores do Cliente</h6>
                          <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitcaa = true"></q-btn>
                        </div>
                            <q-scroll-area style="width: 100%; max-width: 85vw; height: 120px; max-height: 70vh;">
                              <q-list>
                                <q-item class="item" v-for="item in listaDores" :key="item.id">
                                  <q-card :color=item.color class="postitext row">                              
                                    <p class="col">{{item.dores}}</p>
                                    <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemcaa(item)"></q-btn>
                                  </q-card>
                                </q-item>
                              </q-list>
                            </q-scroll-area>
                     </div>
                    </div> 
                    
                    <div class="col-auto bg" id="sma">
                        <div class="row cab"> 
                          <h6 class="col"><q-icon name="playlist_add_check" size="20px"/> Tarefas do Cliente</h6>
                          <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitsma = true"></q-btn>
                        </div>
                              <q-scroll-area style="width: 100%; max-width: 85vw; height: 265px; max-height: 70vh;">
                                <q-list>
                                  <q-item class="item" v-for="item in listaTarefas" :key="item.id">
                                    <q-card :color=item.color class="postitext row">                              
                                      <p class="col">{{item.tarefas}}</p>
                                      <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemsma(item)"></q-btn>
                                    </q-card>
                                  </q-item>
                                </q-list>
                              </q-scroll-area>
                    </div>
              </div> 
    
              </div>
          </div> 
    
          <!-- *** Post-it PC *** -->
          <q-modal v-model="postitpca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
              <q-modal-layout>
                <br><br>
                <q-card :color='color' class="card">
                  <q-input v-model="produtoservico" type="textarea"/>
                </q-card>
              </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkpca()"></q-btn>
              </div>
          </q-modal>
          
          <!-- *** Post-it AC *** -->
          <q-modal v-model="postitaca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
              <q-modal-layout>
                <br><br>
                <q-card :color='color' class="card">
                  <q-input v-model="criadoresganho" type="textarea"/>
                </q-card>
              </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkaca()"></q-btn>
              </div>
          </q-modal>
    
          <!-- *** Post-it RC *** -->
          <q-modal v-model="postitrca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
              <q-modal-layout>
                <br><br>
                <q-card :color='color' class="card">
                  <q-input v-model="analgesico" type="textarea"/>
                </q-card>
              </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkrca()"></q-btn>
              </div>
          </q-modal>
    
          <!-- *** Post-it REC *** -->
          <q-modal v-model="postitreca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
              <q-modal-layout>
                <br><br>
                <q-card :color='color' class="card">
                  <q-input v-model="ganhos" type="textarea"/>
                </q-card>
              </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkreca()"></q-btn>
              </div>
          </q-modal>
    
          <!-- *** Post-it CA *** -->
          <q-modal v-model="postitcaa" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
              <q-modal-layout>
                <br><br>
                <q-card :color='color' class="card">
                  <q-input v-model="dores" type="textarea"/>
                </q-card>
              </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkcaa()"></q-btn>
              </div>
          </q-modal>
    
          <!-- *** Post-it SM *** -->
          <q-modal v-model="postitsma" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
              <q-modal-layout>
                <br><br>
                <q-card :color='color' class="card">
                  <q-input v-model="tarefas" type="textarea"/>
                </q-card>
              </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOksma()"></q-btn>
              </div>
          </q-modal>
    
    
          <!-- *** Post-it edit PC *** -->
          <q-modal v-model="postiteditpca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
                <br><br>
                <q-card :color='editedItem.color' class="card">
                  <q-input v-model="editedItem.produtoservico" type="textarea"/>
                </q-card>
            </q-modal-layout>
                  <div class="botoes row flex flex-center">
                    <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                    <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitempca(item)"></q-btn>
                    <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savepca()"></q-btn>
                  </div>
          </q-modal>
          
          <!-- *** Post-it edit AC*** -->
          <q-modal v-model="postiteditaca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
                <br><br>
                <q-card :color='editedItem.color' class="card">
                  <q-input v-model="editedItem.criadoresganho" type="textarea"/>
                </q-card>
            </q-modal-layout>
                  <div class="botoes row flex flex-center">
                    <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                    <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemaca(item)"></q-btn>
                    <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saveaca()"></q-btn>
                  </div>
          </q-modal>
    
          <!-- *** Post-it edit RC *** -->
          <q-modal v-model="postiteditrca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
                <br><br>
                <q-card :color='editedItem.color' class="card">
                  <q-input v-model="editedItem.analgesico" type="textarea"/>
                </q-card>
            </q-modal-layout>
                  <div class="botoes row flex flex-center">
                    <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                    <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemrca(item)"></q-btn>
                    <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saverca()"></q-btn>
                  </div>
          </q-modal>
          
          <!-- *** Post-it edit REC *** -->
          <q-modal v-model="postiteditreca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
                <br><br>
                <q-card :color='editedItem.color' class="card">
                  <q-input v-model="editedItem.ganhos" type="textarea"/>
                </q-card>
            </q-modal-layout>
                  <div class="botoes row flex flex-center">
                    <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                    <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemreca(item)"></q-btn>
                    <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savereca()"></q-btn>
                  </div>
          </q-modal>
          
          <!-- *** Post-it edit CA *** -->
          <q-modal v-model="postiteditcaa" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
                <br><br>
                <q-card :color='editedItem.color' class="card">
                  <q-input v-model="editedItem.dores" type="textarea"/>
                </q-card>
            </q-modal-layout>
                  <div class="botoes row flex flex-center">
                    <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                    <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemcaa(item)"></q-btn>
                    <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savecaa()"></q-btn>
                  </div>
          </q-modal>
          
          <!-- *** Post-it edit SM *** -->
          <q-modal v-model="postiteditsma" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
                <br><br>
                <q-card :color='editedItem.color' class="card">
                  <q-input v-model="editedItem.tarefas" type="textarea"/>
                </q-card>
            </q-modal-layout>
                  <div class="botoes row flex flex-center">
                    <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                    <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                    <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemsma(item)"></q-btn>
                    <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savesma()"></q-btn>
                  </div>
          </q-modal>
          
        </q-layout>
        </q-page>
      </template>
    
      <script>
      import * as firebase from 'firebase'
      
      export default {
        name: 'PageCanvavalor',
        data () {
          return {
            postitpca: false,
            postitaca: false,
            postitrca: false,
            postitreca: false,
            postitcaa: false,
            postitsma: false,
            postiteditpca: false,
            postiteditaca: false,
            postiteditrca: false,
            postiteditreca: false,
            postiteditcaa: false,
            postiteditsma: false,
            editedIndex: -1,
            editedItem: {},
            item: '',
            user: this.$store.getters.user,
            usuario: this.$store.getters.usuario,
            myProject: this.$store.getters.myProject,
            produtoservico: '',
            criadoresganho: '',
            analgesico: '',
            ganhos: '',
            dores: '',
            tarefas: '',
            color: 'orange'
          }
        },
        mounted() {
          if (this.$store.getters.myProject.key == null || this.$store.getters.myProject.key == undefined || this.$store.getters.myProject.key == '') {
          this.$router.push("/")  
          }
        },
        computed: {
          listaProdutoservico () {
            return this.$store.getters.listaProdutoservico
          },
          listaCriadoresganho () {
            return this.$store.getters.listaCriadoresganho
          },
          listaAnalgesico () {
            return this.$store.getters.listaAnalgesico
          },
          listaGanhos () {
            return this.$store.getters.listaGanhos
          },
          listaDores () {
            return this.$store.getters.listaDores
          },
          listaTarefas () {
            return this.$store.getters.listaTarefas
          },
        }, 
        methods: {
          canvasf () {
            this.$router.push("/canvas")
          },
          pixarf () {
            this.$router.push("/pixar")
          },
          onResize (size) {
          var a = size.width
          var b = size.height
          document.getElementById('pca').style.width = a/5 + 'px'
          document.getElementById('pca').style.height = b/2 + 'px'
    
          document.getElementById('aca').style.width = a/5 + 'px'
          document.getElementById('aca').style.height = b/3 + 'px'
    
          document.getElementById('rca').style.width = a/5 + 'px'
          document.getElementById('rca').style.height = b/3 + 'px'
    
          document.getElementById('reca').style.width = a/5 + 'px'
          document.getElementById('reca').style.height = b/3 + 'px'
    
          document.getElementById('caa').style.width = a/5 + 'px'
          document.getElementById('caa').style.height = b/3 + 'px'
    
          document.getElementById('sma').style.width = a/5 + 'px'
          document.getElementById('sma').style.height = b/2 + 'px'
          
          },
          onOkpca () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
              produtoservico: this.produtoservico, 
              color: this.color
            }
            var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaProdutoservico/').push().key    
            var updates = {}    
                var uid = this.user.uid
                var key = this.myProject.key
                updates['usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaProdutoservico/' + newCanvaKey] = userData
                this.produtoservico = ''
                this.postitpca = false
                return firebase.database().ref().update(updates)
          },
          onOkaca () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
              criadoresganho: this.criadoresganho, 
              color: this.color
            }
            var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaCriadoresganho/').push().key    
            var updates = {}    
                var uid = this.user.uid
                var key = this.myProject.key
                updates['usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaCriadoresganho/' + newCanvaKey] = userData
                this.criadoresganho = ''
                this.postitaca = false
                return firebase.database().ref().update(updates)
          },
          onOkrca () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
              analgesico: this.analgesico, 
              color: this.color
            }
            var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaAnalgesico/').push().key    
            var updates = {}    
                var uid = this.user.uid
                var key = this.myProject.key
                updates['usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaAnalgesico/' + newCanvaKey] = userData
                this.analgesico = ''
                this.postitrca = false
                return firebase.database().ref().update(updates)
          },
          onOkreca () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
              ganhos: this.ganhos, 
              color: this.color
            }
            var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaGanhos/').push().key    
            var updates = {}    
                var uid = this.user.uid
                var key = this.myProject.key
                updates['usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaGanhos/' + newCanvaKey] = userData
                this.ganhos = ''
                this.postitreca = false
                return firebase.database().ref().update(updates)
          },
          onOkcaa () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
              dores: this.dores, 
              color: this.color
            }
            var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaDores/').push().key    
            var updates = {}    
                var uid = this.user.uid
                var key = this.myProject.key
                updates['usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaDores/' + newCanvaKey] = userData
                this.dores = ''
                this.postitcaa = false
                return firebase.database().ref().update(updates)
          },
          onOksma () {
            var key = this.myProject.key
            var uid = this.user.uid
            var userData = {
              tarefas: this.tarefas, 
              color: this.color
            }
            var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaTarefas/').push().key    
            var updates = {}    
                var uid = this.user.uid
                var key = this.myProject.key
                updates['usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaTarefas/' + newCanvaKey] = userData
                this.tarefas = ''
                this.postitsma = false
                return firebase.database().ref().update(updates)
          },
          deleteitempca (item) {
            this.savepca()
            var keyitem = this.editedIndex
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaProdutoservico.length > 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaProdutoservico/' + keyitem).remove()
              this.postiteditpca = false
            } else if (this.listaProdutoservico.length == 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/').update({listaProdutoservico: ""})
              this.postiteditpca = false
            }
          },
          deleteitemaca (item) {
            this.saveaca()
            var keyitem = this.editedIndex
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaCriadoresganho.length > 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaCriadoresganho/' + keyitem).remove()
              this.postiteditaca = false
            } else if (this.listaCriadoresganho.length == 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/').update({listaCriadoresganho: ""})
              this.postiteditaca = false
            }
          },
          deleteitemrca (item) {
            this.saverca()
            var keyitem = this.editedIndex
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaAnalgesico.length > 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaAnalgesico/' + keyitem).remove()
              this.postiteditrca = false
            } else if (this.listaAnalgesico.length == 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/').update({listaAnalgesico: ""})
              this.postiteditrca = false
            }
          },
          deleteitemreca (item) {
            this.savereca()
            var keyitem = this.editedIndex
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaGanhos.length > 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaGanhos/' + keyitem).remove()
              this.postiteditreca = false
            } else if (this.listaGanhos.length == 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/').update({listaGanhos: ""})
              this.postiteditreca = false
            }
          },
          deleteitemcaa (item) {
            this.savecaa()
            var keyitem = this.editedIndex
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaDores.length > 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaDores/' + keyitem).remove()
              this.postiteditcaa = false
            } else if (this.listaDores.length == 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/').update({listaDores: ""})
              this.postiteditcaa = false
            }
          },
          deleteitemsma (item) {
            this.savesma()
            var keyitem = this.editedIndex
            var uid = this.user.uid
            var key = this.myProject.key
            if (this.listaTarefas.length > 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaTarefas/' + keyitem).remove()
              this.postiteditsma = false
            } else if (this.listaTarefas.length == 1) {
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/').update({listaTarefas: ""})
              this.postiteditsma = false
            }
          },
          edititempca (item) {
            this.editedIndex = this.listaProdutoservico.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.postiteditpca = true
          },
          edititemaca (item) {
            this.editedIndex = this.listaCriadoresganho.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.postiteditaca = true
          },
          edititemrca (item) {
            this.editedIndex = this.listaAnalgesico.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.postiteditrca = true
          },
          edititemreca (item) {
            this.editedIndex = this.listaGanhos.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.postiteditreca = true
          },
          edititemcaa (item) {
            this.editedIndex = this.listaDores.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.postiteditcaa = true
          },
          edititemsma (item) {
            this.editedIndex = this.listaTarefas.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.postiteditsma = true
          },
          savepca () {
            if (this.editedIndex > -1) {
    
              var listaProdutoservico = this.listaProdutoservico
              Object.assign(listaProdutoservico[this.editedIndex], this.editedItem)
              listaProdutoservico[this.editedIndex].color = this.color
              var uid = this.user.uid
              var key = this.myProject.key
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaProdutoservico/').set(listaProdutoservico)
              this.postiteditpca = false
            }
          },
          saveaca () {
            if (this.editedIndex > -1) {
    
              var listaCriadoresganho = this.listaCriadoresganho
              Object.assign(listaCriadoresganho[this.editedIndex], this.editedItem)
              listaCriadoresganho[this.editedIndex].color = this.color
              var uid = this.user.uid
              var key = this.myProject.key
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaCriadoresganho/').set(listaCriadoresganho)
              this.postiteditaca = false
            }
          },
          saverca () {
            if (this.editedIndex > -1) {
    
              var listaAnalgesico = this.listaAnalgesico
              Object.assign(listaAnalgesico[this.editedIndex], this.editedItem)
              listaAnalgesico[this.editedIndex].color = this.color
              var uid = this.user.uid
              var key = this.myProject.key
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaAnalgesico/').set(listaAnalgesico)
              this.postiteditrca = false
            }
          },
          savereca () {
            if (this.editedIndex > -1) {
    
              var listaGanhos = this.listaGanhos
              Object.assign(listaGanhos[this.editedIndex], this.editedItem)
              listaGanhos[this.editedIndex].color = this.color
              var uid = this.user.uid
              var key = this.myProject.key
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaGanhos/').set(listaGanhos)
              this.postiteditreca = false
            }
          },
          savecaa () {
            if (this.editedIndex > -1) {
    
              var listaDores = this.listaDores
              Object.assign(listaDores[this.editedIndex], this.editedItem)
              listaDores[this.editedIndex].color = this.color
              var uid = this.user.uid
              var key = this.myProject.key
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalor/listaDores/').set(listaDores)
              this.postiteditcaa = false
            }
          },
          savesma () {
            if (this.editedIndex > -1) {
    
              var listaTarefas = this.listaTarefas
              Object.assign(listaTarefas[this.editedIndex], this.editedItem)
              listaTarefas[this.editedIndex].color = this.color
              var uid = this.user.uid
              var key = this.myProject.key
              firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvasvalorvalor/listaTarefas/').set(listaTarefas)
              this.postiteditsma = false
            }
          },
          blueitem (editedItem) {
            this.color = 'light-blue-13'
            editedItem.color = 'light-blue-13'
          },
          greenitem (editedItem) {
            this.color = 'light-green'
            editedItem.color = 'light-green'
          },
          reditem (editedItem) {
            this.color = 'red-6'
            editedItem.color = 'red-6'
          },
          amberitem (editedItem) {
            this.color = 'orange'
            editedItem.color = 'orange'
          }
        }
      }
        
      </script>
      
      <style>
        .blue {
          background: #00b0ff
        }
        .red {
          background: #f44336
        }
        .green {
          background: #8bc34a
        }
        .amber {
          background: rgb(255, 152, 0)
        }
        #corpo {
          background-color: rgb(255, 152, 0);
          padding: 15%;
          border-radius: 10px     
        }
        .botoes {
          background-color: transparent
        }
        .btncolor {
          margin: 2%
        }
        h6 {
          font-size: 0.75em;
          color: gray
        }
        .bg {
          background-color: rgb(232, 234, 246)
        }
        .btn-postit {
          margin-top: 15px
        }
          #pca, #sma {
              margin: 5px;
              margin-top: 0;
              margin-left: 0;
              padding: 0.5%;
              padding-top: 0;
              color: black
          }
          #aca, #rca, #reca, #caa {
            padding: 5%;
            margin-bottom: 5px;
            margin-right: 5px;
            padding-top: 0;
            color: black
          }
          #aca, #rca {
            margin-right: 25px;              
          }
          .postitext {
            min-width: 100%;
            padding-top: 5px;
            padding-bottom: 0px;
            padding-left: 10px;
            padding-right: 10px;
            display:inline-flex;
            font-family: 'Arial Narrow', Arial, sans-serif
          }
          .modal-content,
          .q-modal-layout {
            padding: 2%;
          }
          .card {
            padding: 8%;
            border-radius: 10px
          }
          .modal:not(.maximized) {
          background: rgba(0,0,0,0.7);
          }
          .cab {
            height: 45px;
          }
          .item {
            padding-top: 0px;
            padding-bottom: 5px;
          }
          .canvas {
            padding: 5%;
            padding-top: 0;
        }
        .titulovalor {
            width: 100%;
        }
      </style>