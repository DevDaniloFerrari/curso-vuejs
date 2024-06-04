new Vue({
  el: "#matador-monstros",
  data: {
    vidaJogador: 100,
    vidaMonstro: 100,
  },
  methods: {
    atacar(){
        this.vidaJogador -= (Math.random() * 10) + 1;
        this.vidaMonstro -= (Math.random() * 10);
    }
  },
  computed: {
    backgroundJogador() {
      return { background: "green", width: this.vidaJogador+"px", height: '10px' };
    },
    backgroundMonstro() {
        return { background: "green", width: this.vidaMonstro+"px", height: '10px' };
      },
  },
});
