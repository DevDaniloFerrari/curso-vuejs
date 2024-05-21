new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        armazenarValor(event){
            this.valor = event.target.value
        },
        exibirAlerta() {
            alert('botão clicado!')
        }
    }
})