new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("O botão foi clicado!")
        },
        escutaKeyDown(event){
            this.valor = event.target.value
        }
    }
})