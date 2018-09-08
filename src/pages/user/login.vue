<template>
    <q-page>
       <q-layout class="flex items-center column"> 
            <h2 style="font-weight: 50">Seja bem vindo!</h2>
            <h5 style="font-weight: 300">aqui é seu ambiente criativo</h5>
                <q-card class="login">entrar</q-card>
                <div id="firebaseui-auth-container"></div>
      </q-layout>
    </q-page>
</template>

<script>
import * as firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
    name: 'PageLogin',
        data () {
            return {  
            }
        },
    mounted() {
        var uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                ]
            };
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
            },
    }  
</script>

<style>
    .firebaseui-list-item {
        position: relative;
        list-style: none;
        margin: 10px

    }
    .firebaseui-idp-icon {
        width: 100px;
        height: 30px;
    }
    .firebaseui-idp-text {
        display:none
    }
    .firebaseui-idp-button {
        background-color: transparent;
        border: none;
    }
    .firebaseui-idp-google {
        background-color: rgb(228, 225, 225);
        height: 60px;
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
        border: 2px;
        border-color: black
    }
    .firebaseui-idp-google:hover {
        background-color: rgb(219, 214, 214);
        cursor:pointer;
    }
    .firebaseui-idp-facebook {
        background-color: steelblue;
        height: 60px;
        border-radius: 10px;
        width: 100%;
        max-width: 300px;
    }
    .firebaseui-idp-facebook:hover {
        background-color:rgb(63, 113, 155);
        cursor:pointer; 
    }
    #firebaseui-auth-container {
        text-align: center;
        width: 100%;
    }
    .firebaseui-idp-password {
        background-color: crimson;
        height: 60px;
        border-radius: 10px;
        width: 100%;
        max-width: 300px;
    }
    .firebaseui-idp-password:hover {
        background-color: rgb(175, 17, 48);
        cursor:pointer; 
    }
    .firebaseui-idp-list {
        display: inline;
    }
    .firebaseui-title {
        display: none
    }
    .firebaseui-info-bar-message {
        display: none        
    }
    ul {
        margin: 0;
        padding: 0
    }
    h5 {
        padding: 0;
        margin: 0
    }
    .login {
        margin-top: 10%;
        margin-bottom: 1%;
        padding: 1%;
        width: 300px;
        text-align: center;
        background-color: orange;
        font-weight: bold
    }
</style>