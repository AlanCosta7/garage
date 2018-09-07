import Vue from 'vue' 
import Vuex from 'vuex' 

import * as firebase from 'firebase'
import { Loading, QSpinnerFacebook } from 'quasar'
import { LocalStorage, SessionStorage } from 'quasar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      email: '',
      uid: ''
    },
    usuario: {
      email: '',
      uid: '',
      name: '',
      foto: '' 
    },
    myProject: {
      descricao: '',
      image: '',
      imageUrl: '',
      titulo: ''
    },
    listaProdutoservico: [],
    listaCriadoresganho: [],
    listaAnalgesico: [],
    listaGanhos: [],
    listaDores: [],
    listaTarefas: [],
    listaMyPremissas: [],
    listaEstagio: [],
    listaOportunidade: [],
    listaMyProject: [],
    listaUsuarios: [],
    listaParceirosChave: [],
    listaAtividadeChave: [],
    listaRecursosChave: [],
    listaPropostadeValor: [],
    listaRelacaoCliente: [],
    listaCanais: [],
    listaSegmento: [],
    listaEstruturadeCusto: [],
    listaFontedeRenda: [],
    listaPersonas: [],
    listaDiamante: [],
    listaPrototipo: [],
    pixar: [{
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    }],
    press: [{
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: ''
    }],
    pitch: [{
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    }],
    loading: false,
    error: null
  },
  mutations: {
    setUser (state, payload) {
        state.user = payload
      },   
    setUsuario (state, payload) {
        state.usuario = payload
      },  
    setlistaProdutoservico (state, listaProdutoservico) {
        state.listaProdutoservico.push(listaProdutoservico)
      }, 
    setlistaCriadoresganho (state, listaCriadoresganho) {
      state.listaCriadoresganho.push(listaCriadoresganho)
    },
    setlistaAnalgesico (state, listaAnalgesico) {
      state.listaAnalgesico.push(listaAnalgesico)
    },
    setlistaGanhos (state, listaGanhos) {
      state.listaGanhos.push(listaGanhos)
    },
    setlistaDores (state, listaDores) {
      state.listaDores.push(listaDores)
    },
    setlistaTarefas (state, listaTarefas) {
      state.listaTarefas.push(listaTarefas)
    },
    setlistaDiamante (state, listaDiamante) {
        state.listaDiamante.push(listaDiamante)
      }, 
    setlistaMyPremissas (state, listaMyPremissas) {
        state.listaMyPremissas.push(listaMyPremissas)
      }, 
    setlistaEstagio (state, listaEstagio) {
        state.listaEstagio.push(listaEstagio)
      }, 
    setlistaPrototipo (state, listaPrototipo) {
        state.listaPrototipo.push(listaPrototipo)
      }, 
    setlistaOportunidade (state, listaOportunidade) {
        state.listaOportunidade.push(listaOportunidade)
      }, 
    setMyProject (state, payload) {
        state.myProject = payload
      }, 
    setlistaParceirosChave (state, listaParceirosChave) {
      state.listaParceirosChave.push(listaParceirosChave)
    }, 
    setlistaPersonas (state, listaPersonas) {
      state.listaPersonas.push(listaPersonas)
    }, 
    setlistaAtividadeChave (state, listaAtividadeChave) {
      state.listaAtividadeChave.push(listaAtividadeChave)
    }, 
    setlistaRecursosChave (state, listaRecursosChave) {
      state.listaRecursosChave.push(listaRecursosChave)
    }, 
    setlistaPropostadeValor (state, listaPropostadeValor) {
      state.listaPropostadeValor.push(listaPropostadeValor)
    }, 
    setlistaRelacaoCliente (state, listaRelacaoCliente) {
      state.listaRelacaoCliente.push(listaRelacaoCliente)
    }, 
    setlistaCanais (state, listaCanais) {
      state.listaCanais.push(listaCanais)
    }, 
    setlistaSegmento (state, listaSegmento) {
      state.listaSegmento.push(listaSegmento)
    }, 
    setlistaEstruturadeCusto (state, listaEstruturadeCusto) {
      state.listaEstruturadeCusto.push(listaEstruturadeCusto)
    }, 
    setlistaFontedeRenda (state, listaFontedeRenda) {
      state.listaFontedeRenda.push(listaFontedeRenda)
    }, 
    setPixar (state, pixar) {
      state.pixar.push(pixar)
    }, 
    setPress (state, press) {
      state.press.push(press)
    }, 
    setPitch (state, pitch) {
      state.pitch.push(pitch)
    }, 
    setlistaMyProject (state, listaMyProject) {
        state.listaMyProject.push(listaMyProject)
      }, 
    setListaUsuarios (state, listaUsuarios) {
        state.listaUsuarios.push(listaUsuarios)
      },   
    setLoading (state, payload) {
        state.loading = payload
      },
    setError (state, payload) {
        state.error = payload
      },
    clearError (state) {
        state.error = null
      },
    clearState (state, payload) {
        state = payload
    }  
  },
  actions: {
    setClearState ({getters}) {
      var listaAtividadeChave = getters.listaAtividadeChave
      var listaCanais = getters.listaCanais
      var listaEstruturadeCusto = getters.listaEstruturadeCusto
      var listaFontedeRenda = getters.listaFontedeRenda
      var listaMyProject = getters.listaMyProject
      var listaParceirosChave = getters.listaParceirosChave
      var listaPropostadeValor = getters.listaPropostadeValor
      var listaRecursosChave = getters.listaRecursosChave
      var listaRelacaoCliente = getters.listaRelacaoCliente
      var listaSegmento = getters.listaSegmento
      var listaEstagio = getters.listaEstagio
      var listaMyPremissas = getters.listaMyPremissas
      var listaOportunidade = getters.listaOportunidade
      var listaDiamante = getters.listaDiamante
      var listaPrototipo = getters.listaPrototipo
      var listaPersonas = getters.listaPersonas
      var listaUsuarios= getters.listaUsuarios
      var pixar = getters.pixar
      var press = getters.press
      var pitch = getters.pitch
      var listaAnalgesico = getters.listaAnalgesico
      var listaCriadoresganho = getters.listaCriadoresganho
      var listaDores = getters.listaDores
      var listaGanhos = getters.listaGanhos
      var listaProdutoservico = getters.listaProdutoservico
      var listaTarefas = getters.listaTarefas

     listaAtividadeChave.length = 0
     listaCanais.length = 0
     listaEstruturadeCusto.length = 0
     listaFontedeRenda.length = 0
     listaMyProject.length = 0
     listaParceirosChave.length = 0
     listaPropostadeValor.length = 0
     listaRecursosChave.length = 0
     listaRelacaoCliente.length = 0
     listaSegmento.length = 0
     listaEstagio.length = 0
     listaMyPremissas.length = 0
     listaOportunidade.length = 0
     pixar.length = 0
     press.length = 0
     pitch.length = 0
     listaDiamante.length = 0
     listaPrototipo.length = 0
     listaPersonas.length = 0
     listaUsuarios.length = 0
     listaAnalgesico.length = 0
     listaCriadoresganho.length = 0
     listaDores.length = 0
     listaGanhos.length = 0
     listaProdutoservico.length = 0
     listaTarefas.length = 0

    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              email: user.user.email,
              uid: user.user.uid,
            }
            commit('setUser', newUser)
            commit('setUsuario', newUser) 
            LocalStorage.set('user', JSON.stringify({email: newUser.email, uid: newUser.uid }))
            LocalStorage.set('usuario', JSON.stringify({email: newUser.email, uid: newUser.uid }))  
  
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            var errorCode = error.code;
            var errorMessage = error.message;
            commit('setError', errorMessage)
          }
        )
    },
    signUserIn ({commit, getters}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password) 
        .then(
          user => {
            commit('setLoading', false)
            var newUser = {
              email: user.user.email,
              uid: user.user.uid,
            }
            commit('setUser', newUser)
            LocalStorage.set('user', JSON.stringify({email: newUser.email, uid: newUser.uid})) 
            var user = getters.user
            var useruid = user.uid
            var userlogado = firebase.database().ref('/usuarios/' + useruid + '/user').on('value', function(snapshot) {
            var item = snapshot.val()
            commit('setUsuario', item) 
            LocalStorage.set('usuario', JSON.stringify(item))
            })
          })  
      .catch(
        function(error){
              commit('setLoading', false)
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                commit('setError', 'Senha inválida')
              } if (errorCode === 'auth/invalid-email') {
                commit('setError', 'Email inválido')
              } if (errorCode === 'auth/user-disabled') {
                commit('setError', 'Cadastro inativo')
              } if (errorCode === 'auth/user-not-found') {
                commit('setError', 'Email e senha não correspondem')
              } if (errorCode === 'auth/argument-error') {
                commit('setError', 'Digite um email')
              }
          }
      )
    },
    setarUsuarios ({getters, commit}) {
      var user = getters.user
      var useruid = user.uid
      var userlogado = firebase.database().ref('/usuarios/' + useruid + '/user').on('value', function(snapshot) {
      var item = snapshot.val()
      commit('setUsuario', item) 
      LocalStorage.set('usuario', JSON.stringify(item))
      })
    },
    carregarUsuario ({commit}) {

      var user = firebase.auth().currentUser;
      console.log(user)

      commit('setUser', {email: user.email, nome: user.displayName, uid: user.uid})
      let valueUsuarioLocal = LocalStorage.get.item('usuario') 
      commit('setUsuario', JSON.parse(valueUsuarioLocal))

    },
    carregarMyProject ({commit}) {
      let value = LocalStorage.get.item('myProject')
      commit('setMyProject', JSON.parse(value))
    },
    carregaPremissas ({getters, commit}) {
      const listaMyPremissas = getters.listaMyPremissas
      var uid = getters.user.uid
      var key = getters.myProject.key
      firebase.database().ref('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/premissa/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaMyPremissas.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaMyPremissas', arr[j])
        }
     })
    },
    carregaEstagio ({getters, commit}) {
      const listaEstagio = getters.listaEstagio
      var uid = getters.user.uid
      var key = getters.myProject.key
      firebase.database().ref('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/estagio/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaEstagio.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaEstagio', arr[j])
        }
     })
    },
    carregaOportunidade ({getters, commit}) {
      const listaOportunidade = getters.listaOportunidade
      var uid = getters.user.uid
      var key = getters.myProject.key
      firebase.database().ref('usuarios/' + uid + '/user/projeto/' + key + '/mapausuario/oportunidade/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaOportunidade.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaOportunidade', arr[j])
        }
     })
    },
    carregaProject ({getters, commit}) {
      const listaMyProject = getters.listaMyProject
      var uid = getters.user.uid
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaMyProject.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaMyProject', arr[j])
        }
     })
    },
    carregaListaUsuario ({getters, commit}) {
      const listaUsuarios = getters.listaUsuarios
      firebase.database().ref('usuarios').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]; })
        listaUsuarios.length = 0
        for (var j = 0; j < arr.length; j++) {
          commit('setListaUsuarios', arr[j].user) 
          }
      })
    },
    addMyProject ({commit}, payload) {
      commit('setMyProject', {titulo: payload.titulo, 
                              descricao: payload.descricao,
                              key: payload.key })
     LocalStorage.set('myProject', JSON.stringify({titulo: payload.titulo, 
                                                  descricao: payload.descricao,
                                                  key: payload.key}))  

    },
    addlistaDiamante ({getters, commit}) {
      const listaDiamante = getters.listaDiamante
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/duplodiamante/descobrir/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaDiamante.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaDiamante', arr[j])
        }
     })
    },
    addlistaPrototipo ({getters, commit}) {
      const listaPrototipo = getters.listaPrototipo
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/duplodiamante/desenvolver/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaPrototipo.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaPrototipo', arr[j])
        }
     })
    },
    addlistaParceirosChave ({getters, commit}) {
      const listaParceirosChave = getters.listaParceirosChave
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaParceirosChave').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaParceirosChave.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaParceirosChave', arr[j])
        }
     })
    },
    addlistaAtividadeChave ({getters, commit}) {
      const listaAtividadeChave = getters.listaAtividadeChave
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaAtividadeChave').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaAtividadeChave.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaAtividadeChave', arr[j])
        }
     })
    },
    addlistaCanais ({getters, commit}) {
      const listaCanais = getters.listaCanais
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaCanais').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaCanais.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaCanais', arr[j])
        }
     })
    },
    addlistaEstruturadeCusto ({getters, commit}) {
      const listaEstruturadeCusto = getters.listaEstruturadeCusto
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaEstruturadeCusto').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaEstruturadeCusto.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaEstruturadeCusto', arr[j])
        }
     })
    },
    addlistaFontedeRenda ({getters, commit}) {
      const listaFontedeRenda = getters.listaFontedeRenda
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaFontedeRenda').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaFontedeRenda.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaFontedeRenda', arr[j])
        }
     })
    },
    addlistaPropostadeValor ({getters, commit}) {
      const listaPropostadeValor = getters.listaPropostadeValor
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaPropostadeValor').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaPropostadeValor.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaPropostadeValor', arr[j])
        }
     })
    },
    addlistaRecursosChave ({getters, commit}) {
      const listaRecursosChave = getters.listaRecursosChave
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaRecursosChave').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaRecursosChave.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaRecursosChave', arr[j])
        }
     })
    },
    addlistaSegmento ({getters, commit}) {
      const listaSegmento = getters.listaSegmento
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaSegmento').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaSegmento.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaSegmento', arr[j])
        }
     })
    },
    addlistaProdutoservico ({getters, commit}) {
      const listaProdutoservico = getters.listaProdutoservico
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvasvalor/listaProdutoservico').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaProdutoservico.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaProdutoservico', arr[j])
        }
     })
    }, 
    addlistaCriadoresganho ({getters, commit}) {
      const listaCriadoresganho = getters.listaCriadoresganho
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvasvalor/listaCriadoresganho').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaCriadoresganho.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaCriadoresganho', arr[j])
        }
     })
    }, 
    addlistaAnalgesico ({getters, commit}) {
      const listaAnalgesico = getters.listaAnalgesico
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvasvalor/listaAnalgesico').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaAnalgesico.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaAnalgesico', arr[j])
        }
     })
    }, 
    addlistaGanhos ({getters, commit}) {
      const listaGanhos = getters.listaGanhos
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvasvalor/listaGanhos').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaGanhos.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaGanhos', arr[j])
        }
     })
    }, 
    addlistaDores ({getters, commit}) {
      const listaDores = getters.listaDores
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvasvalor/listaDores').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaDores.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaDores', arr[j])
        }
     })
    }, 
    addlistaTarefas ({getters, commit}) {
      const listaTarefas = getters.listaTarefas
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvasvalor/listaTarefas').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaTarefas.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaTarefas', arr[j])
        }
     })
    },
    addlistaRelacaoCliente ({getters, commit}) {
      const listaRelacaoCliente = getters.listaRelacaoCliente
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/canvas/listaRelacaoCliente').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaRelacaoCliente.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaRelacaoCliente', arr[j])
        }
     })
    },
    addlistaPersonas ({getters, commit}) {
      const listaPersonas = getters.listaPersonas
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key
      firebase.database().ref('/usuarios/' + uid + '/user/projeto/' + keyprojeto + '/personas/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        listaPersonas.length = 0
        for (var j = 0; j < arr.length; j++) {
            commit('setlistaPersonas', arr[j])
        }
     })
    },
    addPixar ({getters, commit}) {
      const pixar = getters.pixar
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key

      firebase.database().ref('usuarios/' + uid + '/user/projeto/' + keyprojeto + '/pixar/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        pixar.length = 0
            commit('setPixar', arr)
     })
    },
    addPress ({getters, commit}) {
      const press = getters.press
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key

      firebase.database().ref('usuarios/' + uid + '/user/projeto/' + keyprojeto + '/press/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        press.length = 0
            commit('setPress', arr)
     })
    },
    addPitch ({getters, commit}) {
      const pitch = getters.pitch
      var uid = getters.user.uid
      var keyprojeto = getters.myProject.key

      firebase.database().ref('usuarios/' + uid + '/user/projeto/' + keyprojeto + '/pitch/').on('value', function(snapshot) {
        var item = snapshot.val()
        var arr = Object.keys(item).map(function (key) { return item[key]})
        pitch.length = 0
            commit('setPitch', arr)
     })
    },
    logout ({commit}) {
        commit('setUser', '')
        commit('setUsuario', '')
        commit('setMyProject', '')         
        LocalStorage.remove('user')
        LocalStorage.remove('usuario')
        LocalStorage.remove('myProject') 
        LocalStorage.remove('firebaseui::rememberedAccounts') 
        firebase.auth().signOut()
        
    }, 
    clearError ({commit}) {
          commit('clearError')
    }
  },
  getters: {
      user (state) {
        return state.user
      },
      usuario (state) {
        return state.usuario
      },
      myProject (state) {
        return state.myProject
      },
      listaPersonas (state) {
        return state.listaPersonas
      },
      listaAtividadeChave (state) {
        return state.listaAtividadeChave
      },
      listaCanais (state) {
        return state.listaCanais
      },
      listaEstruturadeCusto (state) {
        return state.listaEstruturadeCusto
      },
      listaFontedeRenda (state) {
        return state.listaFontedeRenda
      },
      listaParceirosChave (state) {
        return state.listaParceirosChave
      },
      listaPropostadeValor (state) {
        return state.listaPropostadeValor
      },
      listaRecursosChave (state) {
        return state.listaRecursosChave
      },
      listaRelacaoCliente (state) {
        return state.listaRelacaoCliente
      },
      listaSegmento (state) {
        return state.listaSegmento
      },
      listaProdutoservico (state) {
        return state.listaProdutoservico
      },
      listaCriadoresganho (state) {
        return state.listaCriadoresganho
      },
      listaAnalgesico (state) {
        return state.listaAnalgesico
      },
      listaGanhos (state) {
        return state.listaGanhos
      },
      listaDores (state) {
        return state.listaDores
      },
      listaTarefas (state) {
        return state.listaTarefas
      },
      pixar (state) {
        return state.pixar
      },
      press (state) {
        return state.press
      },
      pitch (state) {
        return state.pitch
      },
      listaEstagio (state) {
        return state.listaEstagio
      },
      listaPrototipo (state) {
        return state.listaPrototipo
      },
      listaOportunidade (state) {
        return state.listaOportunidade
      },
      listaMyPremissas (state) {
        return state.listaMyPremissas
      },
      listaMyProject (state) {
        return state.listaMyProject
      },
      listaUsuarios (state) {
        return state.listaUsuarios
      },
      loading (state) {
        return state.loading
      },
      listaDiamante (state) {
        return state.listaDiamante
      },
      error (state) {
        return state.error
      }
  }
})
