new Vue({
    el: '#desafio',
    data: {
        pessoa: {
            nome: 'Danilo',
            idade: 23
        },
        imgUrl: 'https://vuejsbr-docs-next.netlify.app/logo.png'
    },
    methods: {
        numeroAleatorio() {
            return Math.random()
        }
    }
})