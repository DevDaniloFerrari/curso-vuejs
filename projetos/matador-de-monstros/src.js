new Vue({
  el: "#matador-monstros",
  data: {
    vidaJogador: 100,
    vidaMonstro: 100,
    historicoAtaques: [],
    modo: "inicio",
  },
  methods: {
    salvarHistorico(ataqueJogador, ataqueMonstro) {
      this.historicoAtaques.unshift({
        atacante: "jogador",
        mensagem: `Jogador atingiu monstro com ${ataqueJogador}.`,
      });
      this.historicoAtaques.unshift({
        atacante: "monstro",
        mensagem: `Monstro atingiu jogador com ${ataqueMonstro}.`,
      });
    },
    verificarResultado() {
      if (this.vidaJogador <= 0) {
        this.vidaJogador = 0;
        this.modo = "resultado";
      }

      if (this.vidaMonstro <= 0) {
        this.vidaMonstro = 0;
        this.modo = "resultado";
      }
    },
    atacar() {
      const ataqueJogador = Math.floor(Math.random() * 10);
      const ataqueMonstro = Math.floor(Math.random() * 10 + 1);
      this.vidaJogador -= ataqueMonstro;
      this.vidaMonstro -= ataqueJogador;
      this.verificarResultado();
      this.salvarHistorico(ataqueJogador, ataqueMonstro);
    },
    atacarEspecial() {
      const ataqueJogador = Math.floor(Math.random() * 10 + 2);
      const ataqueMonstro = Math.floor(Math.random() * 10);
      this.vidaJogador -= ataqueMonstro;
      this.vidaMonstro -= ataqueJogador;

      this.verificarResultado();
      this.salvarHistorico(ataqueJogador, ataqueMonstro);
    },
    obterClasse(atacante) {
      return atacante == "jogador" ? "ataque-jogador" : "ataque-monstro";
    },
    zerarJogo() {
      this.vidaJogador = 100;
      this.vidaMonstro = 100;
      this.historicoAtaques = [];
    },
    iniciarJogo() {
      this.zerarJogo();
      this.modo = "jogando";
    },
    desistir() {
      this.zerarJogo();
      this.modo = "inicio";
    },
    curar() {
      let curaJogador = Math.floor(Math.random() * 10);
      const ataqueMonstro = Math.floor(Math.random() * 10);

      if (this.vidaJogador + curaJogador > 100) {
        const diferenca = this.vidaJogador + curaJogador - 100;
        curaJogador -= diferenca;
      }

      this.vidaJogador += curaJogador - ataqueMonstro;

      this.verificarResultado();
      this.historicoAtaques.unshift({
        atacante: "monstro",
        mensagem: `Jogador ganhou força de ${curaJogador}.`,
      });
      this.historicoAtaques.unshift({
        atacante: "jogador",
        mensagem: `Monstro atingiu jogador com ${ataqueMonstro}.`,
      });
    },
  },
  computed: {
    backgroundJogador() {
      return {
        background: this.vidaJogador < 20 ? "#dc3545" : "#198754",
        width: this.vidaJogador * 2+ "px",
        height: "15px",
      };
    },
    backgroundMonstro() {
      return {
        background: this.vidaMonstro < 20 ? "#dc3545" : "#198754",
        width: this.vidaMonstro * 2 + "px",
        height: "15px",
      };
    },
    estiloResultado() {
      return {
        color: this.vidaMonstro > this.vidaJogador ? "#dc3545" : "#198754",
      };
    },
    mensagemResultado() {
      return this.vidaMonstro > this.vidaJogador
        ? "Você perdeu :("
        : "Voce ganhou!";
    },
  },
});
