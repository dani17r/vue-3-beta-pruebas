<template>
	<h1>Inicio</h1>
		<!-- <img src="img/logo.png" alt="logo-dr" class="dr-logo"> -->
	<span>{{ form.username }}</span>
</template>

<script>
import { ref, reactive } from 'vue'
import { Login } from './Login.vue'

export default {
  name: 'Home',
  	setup() {
		let { form } = Login()

    	return {
			form,
	 	}
  	},

}
</script>

<style scoped>
	.dr-logo{
		width: 35%;
		height: auto;
	}
</style>
