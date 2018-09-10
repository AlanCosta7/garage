import firebase from 'firebase/app'
import 'firebase/auth' // eslint-disable-line
import 'firebase/database' // eslint-disable-line
import 'firebase/firestore' // eslint-disable-line

const firebaseConfig = {
  apiKey: 'AIzaSyCbGZsj0q982KwHTCFWZq3Q6Xe3r_41C08',
  authDomain: 'uxapp-design.firebaseapp.com',
  databaseURL: 'https://uxapp-design.firebaseio.com',
  messagingSenderId: '176229324272',
  projectId: 'uxapp-design',
  storageBucket: 'uxapp-design.appspot.com'
}

// Initialize Firebase from settings
export const fireApp = firebase.initializeApp(firebaseConfig)

// Initialize Auth
export const AUTH = fireApp.auth()

// Configure Firestore
firebase.firestore().settings({ timestampsInSnapshots: true })

export default ({ Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$firebase = firebase
}
