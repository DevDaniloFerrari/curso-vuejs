<template>
  <v-app>
    <app-menu />

    <app-topbar />

    <app-conteudo />

    <app-footer />
  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu.vue'
import TopBar from '@/components/template/TopBar.vue'
import Conteudo from '@/Conteudo.vue'
import Footer from '@/components/template/Footer.vue'

export default {
  components: {
    "app-menu": Menu,
    "app-topbar": TopBar,
    "app-conteudo": Conteudo,
    "app-footer": Footer
  }
}
</script>
