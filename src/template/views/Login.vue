<template>
	<div>
		<div class="input-username">
			<input type="text" placeholder="username"
			v-model="form.username">
		</div>
		<div class="input-password">
			<input type="password" placeholder="password"
			v-model="form.pass">
		</div>
		<div class="">
			<button @click="LoginStart()">Aceptar</button>
		</div>
	</div>
	<div class="">
		<h2>Products count</h2>
		<button @click="products.UpdMaxCount()">++</button>
		{{products}}
	</div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
import { useStore } from 'vuex'

export const Login = () => {
	let locStUsername = localStorage.getItem('username')
	let compLocStUsername = locStUsername ? locStUsername : ''

	let form = reactive({
		username: compLocStUsername,
		pass:null
	})
	const LoginStart = () => {
		console.log(form)
		localStorage.setItem('username', form.username)
	}
	return { form, LoginStart }
}

export const Products = () => {

	const store = useStore()
	const state = store.state.products
	const UpdMaxCount = () =>  store.commit('products/maxCount')

	return {
		UpdMaxCount,
		state,
	}
}

export default {

	name: 'login',
	setup(){
		const products = Products()

		const { form, LoginStart } = Login()

		return {
			form, LoginStart, products
		}
	},

}
</script>
