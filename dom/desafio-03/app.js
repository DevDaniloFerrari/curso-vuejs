new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return this.valor == 37 ? "Valor Igual" : "Valor Diferente";
    },
  },
  watch: {
    valor() {
      setTimeout(() => {
        console.log("oi");
        this.valor = 0;
      }, 5000);
    },
  },
});
