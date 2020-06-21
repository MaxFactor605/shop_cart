import Vue from 'vue'
import Vuex from 'vuex'
import cartModule from './modules/cart/index'
import productModule from './modules/product/index'


Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        cartModule,
        productModule
    }
})