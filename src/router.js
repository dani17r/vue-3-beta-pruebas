import { createRouter, createWebHistory } from 'vue-router'

import Home from './template/views/Home.vue'

const webHistory = createWebHistory()
const router = createRouter({
 history: webHistory,
 routes: [
       {
        	path: "/",
	 		props : true,
        	component: Home,
       },
       {
        	path: "/about",
	  		props : true,
        	component: () => import('./template/views/About.vue'),
       },
       {
        	path: "/login",
			props : true,
        	component: () => import('./template/views/Login.vue'),
       },
   ],
})

export default router
