import { createStore, createLogger } from 'vuex'
import products from './modules/products.js'

export default createStore({
 modules: {
   products
 },
})
