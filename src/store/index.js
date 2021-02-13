import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import product from './modules/product'
import cart from './modules/cart'
import history from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: auth,
    product: product,
    cart: cart,
    history: history
  }
})
