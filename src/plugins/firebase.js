import firebase from 'firebase/app'
import 'firebase/firestore' // eslint-disable-line
import firebaseConfig from '../components/helpers/firebase/config.js'

export default ({ Vue }) => {
  // Initialize Firebase from settings
  firebase.initializeApp(firebaseConfig)
  // Configure Firestore
  firebase.firestore().settings({ timestampsInSnapshots: true })
  Vue.prototype.$firebase = firebase
}