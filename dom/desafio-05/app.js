new Vue({
  el: "#desafio",
  data: {
    alternancia: true,
    classes: "",
    classe: "",
    aplicarClasseExtra: "false",
	cor: 'black',
	progresso: 0
  },
  computed: {
    classeExtra() {
      if (this.aplicarClasseExtra === "true") return 'classe-extra';
      if (this.aplicarClasseExtra === "false") return '';
      return '';
    },
	barraProgresso(){
		return {
			'background-color': 'green',
			'width': this.progresso * 3 + 'px',
			'height': '30px'
		}
	}
  },
  methods: {
    iniciarEfeito() {
      setTimeout(() => {
        this.alternancia = !this.alternancia;
        this.iniciarEfeito();
      }, 1000);
    },
    iniciarProgresso() {
		setTimeout(() => {
			if(this.progresso < 100){
				this.progresso++;
				this.iniciarProgresso()
			}
		}, 10)
	},
  },
});
