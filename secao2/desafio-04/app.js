new Vue({
	el: '#desafio',
	data: {
		alternada: 'destaque'
	},
	computed: {

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.alternada = this.alternada == 'destaque' ? 'encolher' : 'destaque'
			}, 2000)
		},
		iniciarProgresso() {

		}
	}
})
