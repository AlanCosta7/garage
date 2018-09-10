<template>
    <q-page>
       <q-layout class="flex items-center column"> 
            <h1>Seja bem vindo!</h1>
            <h2>Acesse agora seu ambiente criativo</h2>
            <div id="firebaseui-auth-container"></div>
      </q-layout>
    </q-page>
</template>

<script>
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
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
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
    this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
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

h1 {
  font-size: 56px;
  font-weight: 200;
}

h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 10vw;
  }
  h2 {
    font-size: 5vw;
  }
}

</style>