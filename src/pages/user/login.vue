<template>
    <q-page>
       <q-layout class="flex items-center column"> 
            <h2 style="font-weight: 50">Seja bem vindo!</h2>
            <h5 style="font-weight: 300">Acesse agora seu ambiente criativo</h5>
            <div id="firebaseui-auth-container"></div>
      </q-layout>
    </q-page>
</template>

<script>
import * as firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
  name: 'PageLogin',
  meta: { title: 'garage thinking - login' },
  data() {
    return {}
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        uiShown: function() {
          // The widget is rendered.

          // Update text content of buttons
          updateLabels()
          function updateLabels() {
            var elGoogle = document.querySelector('.firebaseui-idp-google .firebaseui-idp-text-long')
            var elFacebook = document.querySelector('.firebaseui-idp-facebook .firebaseui-idp-text-long')
            var elEmail = document.querySelector('.firebaseui-idp-password .firebaseui-idp-text-long')
            var elementsExists = elGoogle && elFacebook && elEmail
            if (!elementsExists) {
              window.requestAnimationFrame(updateLabels)
            } else {
              elGoogle.textContent = 'Acessar com Google'
              elFacebook.textContent = 'Acessar com Facebook'
              elEmail.textContent = 'Acessar com Email'
            }
          }
        }
      }
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style>
.firebaseui-idp-button {
  max-width: 300px;
  min-height: 60px;
}

.firebaseui-idp-text {
  font-size: 18px;
}
ul {
  margin: 0;
  padding: 0;
}
h5 {
  padding: 0;
  margin: 0;
}
</style>