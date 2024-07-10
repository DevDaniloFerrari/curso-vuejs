<template>
  <v-app>
    <app-menu />

    <app-topbar />

    <app-conteudo />

    <app-footer />
  </v-app>
</template>

<script>
import Menu from './Menu.vue'
import TopBar from './TopBar.vue'
import Conteudo from './Conteudo.vue'
import Footer from './Footer.vue'

export default {
  components: {
    "app-menu": Menu,
    "app-topbar": TopBar,
    "app-conteudo": Conteudo,
    "app-footer": Footer
  }
}
</script>
