<template>
    <q-page style="min-height: 20px">
        <div class="fabprincipal flex flex-center">
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="duplodiamante()" icon="wb_incandescent" />
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="canvasf()" icon="view_quilt" />
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="canvavalorf()" icon="card_giftcard" />
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="mapausuariof()" icon="favorite" />
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="personasf()" icon="face" />
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="pixarf()" icon="format_quote" />
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="pressf()" icon="local_parking" />  
          <q-btn round class="btnprincipal" color="white" text-color="black" @click.native="pitchf()" icon="record_voice_over" />  
        </div>
    </q-page>
</template>

<script>

export default {
    name: 'pageBtn',
      data () {
        return {
        }
      },
      methods: {
        canvasf () {
          this.$router.push("/canvas")
        },
        canvavalorf () {
          this.$router.push("/canvavalor")
        },
        pixarf () {
          this.$router.push("/pixar")
        },
        pressf () {
          this.$router.push("/press")
        },
        pitchf () {
          this.$router.push("/pitch")
        },
        personasf () {
          this.$router.push("/personas")          
        },
        mapausuariof (){
          this.$router.push("/mapausuario")
        },
        duplodiamante () {
          this.$router.push("/duplodiamante")          
        }
      }
    }
</script>
    
<style>
    .fabprincipal {
      margin-top: 10px;
      margin-left: 10px;
    } 
    .btnprincipal {
      margin-right: 5px;
    }
</style>