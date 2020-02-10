new Vue({
    el: '#desafio',
    data: {
        nome:  'Eric',
        idade:  44,
        imagem: "https://pngimage.net/wp-content/uploads/2018/05/brasil-png-10.png",
    },
    methods: {
        aleatorio:  function(){
            return Math.random()
        }
    }
})