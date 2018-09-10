import firebaseui from 'firebaseui'

export default ({ Vue }) => {
    Vue.prototype.$firebaseui = new firebaseui.auth.AuthUI(Vue.prototype.$firebase.auth())
}