<template>
  <div id="app">
    <app-usuario-tabela :pessoas="pessoas" :selecionarPessoa="selecionarPessoa"/>
    <app-usuario-painel :pessoa="pessoaSelecionada" />
  </div>
</template>

<script>
import AppUsuarioTabela from '@/components/UsuarioTabela.vue'
import AppUsuarioPainel from '@/components/UsuarioPainel.vue'

export default {
  name: 'App',
  components: {
    AppUsuarioTabela, AppUsuarioPainel
  },
  data() {
    return {
      pessoas: [{
        id: 1,
        nome: 'Danilo',
        idade: 24
      }, {
        id: 2,
        nome: 'Ester',
        idade: 23
      }],
      pessoaSelecionada: null
    }
  },
  methods: {
    selecionarPessoa(pessoa) {
      this.pessoaSelecionada = pessoa
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
