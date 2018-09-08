<template>
 <q-page>
     <q-layout class="personas">
       <div class="row flex flex-center">
        <h2 class="col" style="font-weight: 50">Double Diamond</h2>
        <q-btn round color="primary" @click.native="helpe">?</q-btn>
       </div> 
        <q-card class="flex flex-center problema" color="dark">
          <h5>Problema: {{myProject.descricao}}</h5>
        </q-card>


        <div class="col-auto bg duplodiam">
                <div class="row cab"> 
                  <h6 class="col"><q-icon name="wb_incandescent" size="20px"/> Descobrir</h6>
                  <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitpc = true"></q-btn>
                </div>
                      <q-scroll-area style="width: 100%; height: 400px">
                        <q-list>
                          <q-item class="item row inline" v-for="item in listaDiamante" :key="item.id">
                            <q-card :color=item.color class="postitextdd row"> 
                              <p>{{item.ideia}}</p>
                              <div class="row" style="width: 100%"><br>                               
                                <q-rating class="col" icon="star" v-model="item.valor" :max="5" />
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititempc(item)"></q-btn>
                              </div>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
        </div>

        <div class="col-auto bg duplodiam">
                <div class="row cab btn-postit"> 
                  <h6 class="col"><q-icon name="favorite" size="20px"/> Definir</h6>
                </div>
                      <q-scroll-area style="width: 100%; height: 200px">
                        <q-list>
                          <q-item class="item row inline" v-for="item in diamante" :key="item.id">
                            <q-card :color=item.color class="postitextdd row"> 
                              <p>{{item.ideia}}</p>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
        </div>

        <q-card class="flex flex-center problema" color="dark"><h5>Como? Quando? Onde? Porque?</h5></q-card>
             
        
        <div class="col-auto bg duplodiam">
                <div class="row cab"> 
                  <h6 class="col"><q-icon name="settings" size="20px"/> Desenvolver</h6>
                  <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitproto = true"></q-btn>
                </div>
                      <q-scroll-area style="width: 100%; height: 400px">
                        <q-list>
                          <q-item class="item row inline" v-for="item in listaPrototipo" :key="item.id">
                            <q-card :color=item.color class="postitextdd row"> 
                              <p>{{item.prototipo}}</p>
                              <div class="row" style="width: 100%"><br>                               
                                <q-rating class="col" icon="star" v-model="item.valor" :max="5" />
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemproto(item)"></q-btn>
                              </div>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
        </div>

        <div class="col-auto bg duplodiam">
                <div class="row cab btn-postit"> 
                  <h6 class="col"><q-icon name="redeem" size="20px"/> Entregar</h6>
                </div>
                      <q-scroll-area style="width: 100%; height: 200px">
                        <q-list>
                          <q-item class="item row inline" v-for="item in entrega" :key="item.id">
                            <q-card :color=item.color class="postitextdd row"> 
                              <p>{{item.prototipo}}</p>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
        </div>

        <!-- *** Post-it ideia *** -->
        <q-modal v-model="postitproto" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
            <q-modal-layout>
              <q-card :color='color' class="card">
                <q-input v-model="prototipo" type="textarea"/>
              </q-card>
            </q-modal-layout>
            <div class="botoes row flex flex-center">
              <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
              <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
              <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
              <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
              <q-btn icon="done" flat label="OK" class="no-shadow btncolor" size="xl" @click="onOkproto()"></q-btn>
            </div>
        </q-modal>

        <q-modal v-model="postiteditpc" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
                <q-modal-layout>
                    <br><br>
                    <q-card :color='editedItem.color' class="card">
                      <q-input v-model="editedItem.ideia" type="textarea"/>
                    </q-card>
                </q-modal-layout>
                      <div class="botoes row flex flex-center">
                        <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                        <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                        <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                        <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                        <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitempc(item)"></q-btn>
                        <q-btn icon="done" label="OK" flat class="no-shadow btncolor" size="xl" @click="savepc()"></q-btn>
                      </div>
        </q-modal>

        <!-- *** Post-it Descobrir *** -->
        <q-modal v-model="postitpc" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
                <q-modal-layout>
                  <q-card :color='color' class="card">
                    <q-input v-model="ideia" type="textarea"/>
                  </q-card>
                </q-modal-layout>
                <div class="botoes row flex flex-center">
                  <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
                  <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
                  <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
                  <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
                  <q-btn icon="done" flat label="OK" class="no-shadow btncolor" size="xl" @click="onOkpc()"></q-btn>
                </div>
            </q-modal>
    
    
            <q-modal v-model="postiteditproto" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
                    <q-modal-layout>
                        <br><br>
                        <q-card :color='editedItem.color' class="card">
                          <q-input v-model="editedItem.prototipo" type="textarea"/>
                        </q-card>
                    </q-modal-layout>
                          <div class="botoes row flex flex-center">
                            <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                            <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                            <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                            <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                            <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemproto(item)"></q-btn>
                            <q-btn icon="done" label="OK" flat class="no-shadow btncolor" size="xl" @click="saveproto()"></q-btn>
                          </div>
                  </q-modal>
     </q-layout>
 </q-page>   
</template>

<script>
import * as firebase from 'firebase'

export default {
    name: 'pageBtn',
      data () {
        return {
            ideia: '',
            prototipo: '',
            postitpc: false,
            postiteditpc: false,
            postiteditproto: false,
            postitproto: false,
            color: 'orange',
            editedIndex: -1,
            editedItem: {},
            item: '',
            lista: [],
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
                firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/').update(
                    {descobrir: this.listaDiamante}
                )
        },
    methods : {   
      helpe () {
        this.$q.dialog({
          title: 'Como usar?',
          message: 'O Double Diamond é dividido em 4 etapas. Na primeira, você e sua equipe devem criar o maior número de ideias, das mais óbvias até as mais loucas. Você pode editar sempre que necessário. Use as cores para organizar as ideias em categorias e avalie as ideias. Aquelas que vocês definirem como fundamentais para a solução avaliem com 5 estrelas para que fiquem registradas na definição. Com as ideias definidas inicie o processo de desenvolvimento, mais uma oportunidade de expandir possibilidades. Use o mesmo recurso da avaliação para definir o que será entregue ao seu usuário'
        })
      },
      onOkpc () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          ideia: this.ideia, 
          color: this.color
        }
        var newIdeiaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/descobrir/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/descobrir/' + newIdeiaKey] = userData
            this.ideia = ''
            this.postitpc = false
            return firebase.database().ref().update(updates)
      },
      onOkproto () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          prototipo: this.prototipo, 
          color: this.color
        }
        var newProtoKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/desenvolver/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/desenvolver/' + newProtoKey] = userData
            this.prototipo = ''
            this.postitproto = false
            return firebase.database().ref().update(updates)
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
      },
      edititempc (item) {
        this.editedIndex = this.listaDiamante.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.postiteditpc = true
      },
      edititemproto (item) {
        this.editedIndex = this.listaPrototipo.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.postiteditproto = true
      },
      deleteitempc (item) {
        this.savepc()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaDiamante.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/descobrir/' + keyitem).remove()
          this.postiteditpc = false
        } else if (this.listaDiamante.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/').update({descobrir: ""})
          this.postiteditpc = false
        }
      },
      deleteitemproto (item) {
        this.saveproto()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaPrototipo.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/desenvolver/' + keyitem).remove()
          this.postiteditproto = false
        } else if (this.listaPrototipo.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/').update({desenvolver: ""})
          this.postiteditproto = false
        }
      },
      savepc () {
        if (this.editedIndex > -1) {

          var listaDiamante = this.listaDiamante
          Object.assign(listaDiamante[this.editedIndex], this.editedItem)
          listaDiamante[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/descobrir/').set(listaDiamante)
          this.postiteditpc = false
        }
      },
      saveproto () {
        if (this.editedIndex > -1) {
          var listaPrototipo = this.listaPrototipo
          Object.assign(listaPrototipo[this.editedIndex], this.editedItem)
          listaPrototipo[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/duplodiamante/desenvolver/').set(listaPrototipo)
          this.postiteditproto = false
        }
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
        myProject () {
          return this.$store.getters.myProject
        },
        listaDiamante () {
            return this.$store.getters.listaDiamante            
        },
        listaPrototipo () {
            return this.$store.getters.listaPrototipo            
        },
        diamante () {
          var listaDiamante = this.listaDiamante  
          var diamante = []
            for (var i = 0; i < listaDiamante.length; i++) {
                if (listaDiamante[i].valor == 5 )  {
                diamante.push(listaDiamante[i])
                }
            }
            return diamante
        },
        entrega () {
          var listaPrototipo = this.listaPrototipo  
          var entrega = []
            for (var i = 0; i < listaPrototipo.length; i++) {
                if (listaPrototipo[i].valor == 5 )  {
                    entrega.push(listaPrototipo[i])
                }
            }
            return entrega
        }
        
  },
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
      background-color: rgb(232, 234, 246);
    }
    .btn-postit {
      margin-top: 15px
    }
      .duplodiam {
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          padding: 2%;
          padding-top: 0;
          color: black
      }
      .postitextdd {
        min-width: 100px;
        max-width: 300px;
        min-height: 100px;
        max-height: 300px;
        padding: 10px;
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
        padding-top: 10px;
      }
      .canvas {
        padding: 5%;
        padding-top: 0;
    }
    .personas {
        padding: 10%;
        padding-top: 0;
    }
    .problema {
      padding: 2%
    }
</style>