new Vue({
  el: "#matador-monstros",
  data: {
    vidaJogador: 100,
    vidaMonstro: 100,
    historicoAtaques: [],
    modo: "inicio"
  },
  methods: {
    atacar() {
      const ataqueJogador = Math.floor(Math.random() * 10);
      const ataqueMonstro = Math.floor(Math.random() * 10 + 1);
      this.vidaJogador -= ataqueMonstro;
      this.vidaMonstro -= ataqueJogador;
      this.historicoAtaques.push({
        atacante: "jogador",
        mensagem: `Jogador atingiu monstro com ${ataqueJogador}.`,
      });
      this.historicoAtaques.push({
        atacante: "monstro",
        mensagem: `Monstro atingiu jogador com ${ataqueMonstro}.`,
      });
    },
    obterClasse(atacante){
        return atacante == 'jogador' ? 'ataque-jogador' : 'ataque-monstro'
    },
    iniciarJog(){
        this.vidaJogador = 100
        this.vidaMonstro = 100
        this.historicoAtaques = []
        this.modo = 'jogando'
    }
  },
  computed: {
    backgroundJogador() {
      return {
        background: "green",
        width: this.vidaJogador + "px",
        height: "10px",
      };
    },
    backgroundMonstro() {
      return {
        background: "green",
        width: this.vidaMonstro + "px",
        height: "10px",
      };
    },
  },
});
