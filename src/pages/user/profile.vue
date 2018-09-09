<template>
        <q-page padding>
            <h4>Perfil</h4>
            <form @submit.prevent="onPerfil"> 
                <q-field
                    name="nome"
                    id="nome"
                    icon="person"
                    label="Nome:">
                  <q-input
                    type="text"
                    v-model="nome"
                  />
                </q-field><br><br>
               
                <q-field
                    icon="account_circle"
                    label="Foto perfil"
                >
                <img :src="imageUrl" height="150"><br> 
                <q-btn push color="primary" label="Upload" @click="onPickFile"></q-btn>
                <input type="file" 
                       style="display: none" 
                       ref="fileInput" 
                       accept="image/*"
                       @change="onFilePicked"
                ></input>
                </q-field>
                <div class="btnmodal z-top">
                        <q-btn
                               class="btnSair"
                               color="red"
                               to="/index"
                               push
                               label="Cancelar"
                        />
                        <q-btn color="green" 
                               type="submit" 
                               push
                               :disabled="loading" 
                               :loading="loading" 
                               class="justify-center btnSalvar"
                               label="Enviar">
                            <span slot="loader" class="custom-loader">
                                <q-icon name="cached"/>
                            </span>
                        </q-btn>
                </div>
            </form>
        </q-page>
    </template>
    
    <script>
import * as firebase from 'firebase'

export default {
  meta: { title: 'garage thinking - perfil' },
  data() {
    return {
      listaUsuarios: this.$store.getters.listaUsuarios,
      image: null,
      imageUrl: '../../assets/perfil.jpg',
      uid: this.$store.getters.user.uid,
      nome: ''
    }
  },
  created() {
    this.$store.dispatch('carregarUsuario')
  },
  destroyed() {
    this.$store.dispatch('setarUsuarios')
  },
  methods: {
    onPerfil() {
      if (!this.image) {
        return
      }
      var userData = {
        email: this.user.email,
        uid: this.user.uid,
        nome: this.nome,
        image: this.image,
        label: this.nome,
        sublabel: this.user.email,
        value: this.user.uid
      }
      var updates = {}
      var uid = this.user.uid
      updates['/usuarios/' + uid + '/user'] = userData

      return firebase
        .database()
        .ref()
        .update(updates)
        .then(uid => {
          var uid = this.user.uid
          const filename = this.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          firebase
            .storage()
            .ref('user/' + uid + ext)
            .put(this.image)
            .then(function(snapshot) {
              console.log('Uploaded', snapshot.totalBytes, 'bytes.')
              snapshot.ref.getDownloadURL().then(function(url) {
                console.log('File available at', url)
                firebase
                  .database()
                  .ref('/usuarios/' + uid + '/user')
                  .update({ imageUrl: url, image: url })
              })
            })
            .catch(function(error) {
              // [START onfailure]
              console.error('Upload failed:', error)
              // [END onfailure]
            })
          this.$router.push('/')
        })
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Adicione uma imagem válida!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    error() {
      return this.$store.getters.error
    },
    usuario() {
      return this.$store.getters.usuario
    },
    user() {
      return this.$store.getters.user
    }
  }
}
</script>
    
    <style>
.btnmodal {
  position: absolute;
  bottom: 100px;
  width: 100%;
}
form {
  height: 400px;
}
</style>