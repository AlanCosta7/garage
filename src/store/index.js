import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { firebaseMutations } from 'vuexfire'
// import { Loading, QSpinnerFacebook } from 'quasar'
import { LocalStorage /* , SessionStorage */ } from 'quasar'

Vue.use(Vuex)

import projects from './projects'

export default new Vuex.Store({
  modules: {
    projects
  },
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
    pixar: [
      {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: ''
      }
    ],
    press: [
      {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
      }
    ],
    pitch: [
      {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: ''
      }
    ],
    loading: false,
    error: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      LocalStorage.set('user', JSON.stringify(payload))
    },
    setUsuario(state, payload) {
      state.usuario = payload
      LocalStorage.set('usuario', JSON.stringify(payload))
    },
    setlistaProdutoservico(state, listaProdutoservico) {
      state.listaProdutoservico = listaProdutoservico
    },
    setlistaCriadoresganho(state, listaCriadoresganho) {
      state.listaCriadoresganho = listaCriadoresganho
    },
    setlistaAnalgesico(state, listaAnalgesico) {
      state.listaAnalgesico = listaAnalgesico
    },
    setlistaGanhos(state, listaGanhos) {
      state.listaGanhos = listaGanhos
    },
    setlistaDores(state, listaDores) {
      state.listaDores = listaDores
    },
    setlistaTarefas(state, listaTarefas) {
      state.listaTarefas = listaTarefas
    },
    setlistaDiamante(state, listaDiamante) {
      state.listaDiamante = listaDiamante
    },
    setlistaMyPremissas(state, listaMyPremissas) {
      state.listaMyPremissas = listaMyPremissas
    },
    setlistaEstagio(state, listaEstagio) {
      state.listaEstagio = listaEstagio
    },
    setlistaPrototipo(state, listaPrototipo) {
      state.listaPrototipo = listaPrototipo
    },
    setlistaOportunidade(state, listaOportunidade) {
      state.listaOportunidade = listaOportunidade
    },
    setMyProject(state, payload) {
      state.myProject = payload
    },
    setlistaParceirosChave(state, listaParceirosChave) {
      state.listaParceirosChave = listaParceirosChave
    },
    setlistaPersonas(state, listaPersonas) {
      state.listaPersonas = listaPersonas
    },
    setlistaAtividadeChave(state, listaAtividadeChave) {
      state.listaAtividadeChave = listaAtividadeChave
    },
    setlistaRecursosChave(state, listaRecursosChave) {
      state.listaRecursosChave = listaRecursosChave
    },
    setlistaPropostadeValor(state, listaPropostadeValor) {
      state.listaPropostadeValor = listaPropostadeValor
    },
    setlistaRelacaoCliente(state, listaRelacaoCliente) {
      state.listaRelacaoCliente = listaRelacaoCliente
    },
    setlistaCanais(state, listaCanais) {
      state.listaCanais = listaCanais
    },
    setlistaSegmento(state, listaSegmento) {
      state.listaSegmento = listaSegmento
    },
    setlistaEstruturadeCusto(state, listaEstruturadeCusto) {
      state.listaEstruturadeCusto = listaEstruturadeCusto
    },
    setlistaFontedeRenda(state, listaFontedeRenda) {
      state.listaFontedeRenda = listaFontedeRenda
    },
    setPixar(state, pixar) {
      state.pixar = pixar
    },
    setPress(state, press) {
      state.press = press
    },
    setPitch(state, pitch) {
      state.pitch = pitch
    },
    setlistaMyProject(state, listaMyProject) {
      state.listaMyProject = listaMyProject
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    clearState(state, payload) {
      state = payload
    },
    ...firebaseMutations
  },
  actions: {
    APP_INIT({ commit }) {
      const localUser = JSON.parse(LocalStorage.get.item('user') || '{}');
      commit('setUser', localUser)
    },
    setClearState({ commit }) {
      commit('setlistaAtividadeChave', [])
      commit('setlistaCanais', [])
      commit('setlistaEstruturadeCusto', [])
      commit('setlistaFontedeRenda', [])
      commit('setlistaMyProject', [])
      commit('setlistaParceirosChave', [])
      commit('setlistaPropostadeValor', [])
      commit('setlistaRecursosChave', [])
      commit('setlistaRelacaoCliente', [])
      commit('setlistaSegmento', [])
      commit('setlistaEstagio', [])
      commit('setlistaMyPremissas', [])
      commit('setlistaOportunidade', [])
      commit('setlistaDiamante', [])
      commit('setlistaPrototipo', [])
      commit('setlistaPersonas', [])
      commit('setPixar', [])
      commit('setPress', [])
      commit('setPitch', [])
      commit('setlistaAnalgesico', [])
      commit('setlistaCriadoresganho', [])
      commit('setlistaDores', [])
      commit('setlistaGanhos', [])
      commit('setlistaProdutoservico', [])
      commit('setlistaTarefas', [])
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            email: user.user.email,
            uid: user.user.uid
          }
          commit('setUser', newUser)
          commit('setUsuario', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          var errorCode = error.code
          var errorMessage = error.message
          commit('setError', errorMessage)
        })
    },
    signUserIn({ commit, getters }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          var newUser = {
            email: user.user.email,
            uid: user.user.uid
          }
          commit('setUser', newUser)
          var user = getters.user
          var useruid = user.uid
          var userlogado = firebase
            .database()
            .ref('/usuarios/' + useruid + '/user')
            .on('value', function(snapshot) {
              var item = snapshot.val()
              commit('setUsuario', item)
            })
        })
        .catch(function(error) {
          commit('setLoading', false)
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/wrong-password') {
            commit('setError', 'Senha inválida')
          }
          if (errorCode === 'auth/invalid-email') {
            commit('setError', 'Email inválido')
          }
          if (errorCode === 'auth/user-disabled') {
            commit('setError', 'Cadastro inativo')
          }
          if (errorCode === 'auth/user-not-found') {
            commit('setError', 'Email e senha não correspondem')
          }
          if (errorCode === 'auth/argument-error') {
            commit('setError', 'Digite um email')
          }
        })
    },
    setarUsuarios({ state, commit }) {
      const user = state.user
      const useruid = user.uid
      const path = `/usuarios/${useruid}/user`
      firebase
        .database()
        .ref(path)
        .on('value', function(snapshot) {
          const item = snapshot.val()
          commit('setUsuario', item)
        })
    },
    carregarUsuario({ commit }) {
      const user = firebase.auth().currentUser
      commit('setUser', { email: user.email, nome: user.displayName, uid: user.uid })
      const valueUsuarioLocal = LocalStorage.get.item('usuario')
      commit('setUsuario', JSON.parse(valueUsuarioLocal))
    },
    carregarMyProject({ commit }) {
      let value = LocalStorage.get.item('myProject')
      commit('setMyProject', JSON.parse(value))
    },
    carregaProject({ state, commit }) {
      const uid = state.user.uid
      const refPath = `usuarios/${uid}/user/projeto`
      const commitKey = 'setlistaMyProject'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addMyProject({ commit }, payload) {
      commit('setMyProject', {
        titulo: payload.titulo,
        descricao: payload.descricao,
        key: payload.key
      })
      LocalStorage.set(
        'myProject',
        JSON.stringify({
          titulo: payload.titulo,
          descricao: payload.descricao,
          key: payload.key
        })
      )
    },
    carregaPremissas({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/mapausuario/premissa`
      const commitKey = 'setlistaMyPremissas'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    carregaEstagio({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/mapausuario/estagio`
      const commitKey = 'setlistaEstagio'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    carregaOportunidade({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/mapausuario/oportunidade`
      const commitKey = 'setlistaOportunidade'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaDiamante({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/duplodiamante/descobrir`
      const commitKey = 'setlistaDiamante'
      // firebaseUpdateHelper(firebase, refPath, commit, commitKey)
      firebase
        .database()
        .ref(refPath)
        .on('value', function(snapshot) {
          const item = snapshot.val()
          commit(commitKey, item)
        })
    },
    addlistaPrototipo({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/duplodiamante/desenvolver`
      const commitKey = 'setlistaPrototipo'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
      // firebase
      //   .database()
      //   .ref(refPath)
      //   .on('value', function(snapshot) {
      //     const item = snapshot.val()
      //     commit(commitKey, item)
      //   })
    },
    addlistaParceirosChave({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaParceirosChave`
      const commitKey = 'setlistaParceirosChave'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaAtividadeChave({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaAtividadeChave`
      const commitKey = 'setlistaAtividadeChave'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaCanais({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaCanais`
      const commitKey = 'setlistaCanais'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaEstruturadeCusto({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaEstruturadeCusto`
      const commitKey = 'setlistaEstruturadeCusto'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaFontedeRenda({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaFontedeRenda`
      const commitKey = 'setlistaFontedeRenda'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaPropostadeValor({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaPropostadeValor`
      const commitKey = 'setlistaPropostadeValor'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaRecursosChave({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaRecursosChave`
      const commitKey = 'setlistaRecursosChave'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaSegmento({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaSegmento`
      const commitKey = 'setlistaSegmento'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaProdutoservico({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvasvalor/listaProdutoservico`
      const commitKey = 'setlistaProdutoservico'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaCriadoresganho({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvasvalor/listaCriadoresganho`
      const commitKey = 'setlistaCriadoresganho'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaAnalgesico({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvasvalor/listaAnalgesico`
      const commitKey = 'setlistaAnalgesico'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaGanhos({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvasvalor/listaGanhos`
      const commitKey = 'setlistaGanhos'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaDores({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvasvalor/listaDores`
      const commitKey = 'setlistaDores'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaTarefas({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvasvalor/listaTarefas`
      const commitKey = 'setlistaTarefas'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaRelacaoCliente({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/canvas/listaRelacaoCliente`
      const commitKey = 'setlistaRelacaoCliente'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addlistaPersonas({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/personas/`
      const commitKey = 'setlistaPersonas'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addPixar({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/pixar/`
      const commitKey = 'setPixar'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addPress({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/press/`
      const commitKey = 'setPress'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    addPitch({ state, commit }) {
      const uid = state.user.uid
      const key = state.myProject.key
      const refPath = `usuarios/${uid}/user/projeto/${key}/pitch/`
      const commitKey = 'setPitch'
      firebaseUpdateHelper(firebase, refPath, commit, commitKey)
    },
    logout({ commit }) {
      commit('setUser', '')
      commit('setUsuario', '')
      commit('setMyProject', '')
      LocalStorage.remove('user')
      LocalStorage.remove('usuario')
      LocalStorage.remove('myProject')
      LocalStorage.remove('firebaseui::rememberedAccounts')
      firebase.auth().signOut()
    },
    clearError({ commit }) {
      commit('clearError')
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    usuario(state) {
      return state.usuario
    },
    myProject(state) {
      return state.myProject
    },
    listaPersonas(state) {
      return state.listaPersonas
    },
    listaAtividadeChave(state) {
      return state.listaAtividadeChave
    },
    listaCanais(state) {
      return state.listaCanais
    },
    listaEstruturadeCusto(state) {
      return state.listaEstruturadeCusto
    },
    listaFontedeRenda(state) {
      return state.listaFontedeRenda
    },
    listaParceirosChave(state) {
      return state.listaParceirosChave
    },
    listaPropostadeValor(state) {
      return state.listaPropostadeValor
    },
    listaRecursosChave(state) {
      return state.listaRecursosChave
    },
    listaRelacaoCliente(state) {
      return state.listaRelacaoCliente
    },
    listaSegmento(state) {
      return state.listaSegmento
    },
    listaProdutoservico(state) {
      return state.listaProdutoservico
    },
    listaCriadoresganho(state) {
      return state.listaCriadoresganho
    },
    listaAnalgesico(state) {
      return state.listaAnalgesico
    },
    listaGanhos(state) {
      return state.listaGanhos
    },
    listaDores(state) {
      return state.listaDores
    },
    listaTarefas(state) {
      return state.listaTarefas
    },
    pixar(state) {
      return state.pixar
    },
    press(state) {
      return state.press
    },
    pitch(state) {
      return state.pitch
    },
    listaEstagio(state) {
      return state.listaEstagio
    },
    listaPrototipo(state) {
      return state.listaPrototipo
    },
    listaOportunidade(state) {
      return state.listaOportunidade
    },
    listaMyPremissas(state) {
      return state.listaMyPremissas
    },
    listaMyProject(state) {
      return state.listaMyProject
    },
    loading(state) {
      return state.loading
    },
    listaDiamante(state) {
      return state.listaDiamante
    },
    error(state) {
      return state.error
    }
  }
})

function firebaseUpdateHelper(firebaseInstance, refPath, commit, commitKey) {
  return new Promise((resolve, reject) => {
    firebaseInstance
      .database()
      .ref(refPath)
      .on('value', function(snapshot) {
        const item = snapshot.val()
        if (!item) {
          commit(commitKey, [])
        } else {
          const arr = Object.keys(item).map(function(key) {
            return item[key]
          })
          commit(commitKey, arr)
        }
      })
  })
}
