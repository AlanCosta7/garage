import { firebaseAction } from 'vuexfire'

export default {
  namespaced: true,
  state: {
    loading: true,
    projects: [],
    _projectsRef: null,
    currentProject: null,
    _currentProjectRef: null
  },
  getters: {
    loading: state => state.loading,
    projects: state => state.projects,
    currentProject: state => state.currentProject
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_PROJECTS_REF(state, payload) {
      state._projectsRef = payload
    },
    SET_CURRENT_PROJECT_REF(state, payload) {
      state._currentProjectRef = payload
    }
  },
  actions: {
    setProjectsRef: firebaseAction(({ commit, bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('projects', ref, {
        readyCallback() {
          commit('SET_LOADING', false)
        }
      })
      commit('SET_PROJECTS_REF', ref)
    }),
    setCurrentProjectRef: firebaseAction(({ commit, bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('currentProject', ref, {
        readyCallback() {
          commit('SET_LOADING', false)
        }
      })
      commit('SET_CURRENT_PROJECT_REF', ref)
    }),
    addProject: ({ state }, { titulo, descricao }) => {
      return new Promise(resolve => {
        if (titulo) {
          state._projectsRef.push({
            titulo,
            descricao
          })
        }
        resolve()
      })
    },
    removeProject: ({ state }, project) => {
      return new Promise(resolve => {
        state._projectsRef.child(project['.key']).remove()
      })
    },
    updateCurrentProject: ({ state }, payload) => {
      state._currentProjectRef.set(payload)
    }
  }
}
