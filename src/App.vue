<template>
	<div class="menu-firts">
		<img src="/img/dibujo.svg" class="img-menu-firts">
		<ul class="navs-a-ul">
			<router-link to="/" class="link-menu-firts">
				Home
			</router-link>
			<router-link to="/About" class="link-menu-firts">
				About
			</router-link>
			<router-link to="/login" class="link-menu-firts">
				Login
			</router-link>
		</ul>
	</div>

	<div class="content">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<keep-alive>
					<component :is="Component"/>
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<style scoped>
	@import './index.css';
	.fade-enter-active,
	.fade-leave-active {
	  transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
	  opacity: 0;
	}

	.content{
		position: relative;
	    top: 100px;
	}
	.menu-firts{
		display: block;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0;
	}
	.img-menu-firts{
		width: 100%;
		display: flex;
	}
	.navs-a-ul{
		display: flex;
	    position: absolute;
	    top: 6px;
	    left: -15px;
	}
	.link-menu-firts{
		text-decoration: blink;
	    color: #fff;
	    font-size: 20px;
	    font-weight: 600;
	    margin: 0 10px;
	}
	a.router-link-active {
		color: #f5f5f5;
		border-left-style: dashed;
		padding-left: 4px;
	}

</style>
