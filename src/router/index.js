import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Homepage from '../views/Homepage.vue'
import Product from '../views/Product.vue'
import store from '../store/index'
import insertProduct from '../views/Insert-product.vue'
import detailProduct from '../views/Detail-product.vue'
import updateProduct from '../views/Update-product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      auth: true,
      for: 'logged'
    }
  },
  {
    path: '/new_product',
    name: 'Insert',
    component: insertProduct,
  },
  {
    path: '/detail_product/:id',
    name: 'Detail',
    component: detailProduct
  },
  {
    path: '/edit_product',
    name: 'Update',
    component: updateProduct
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.getters['auth/getToken']) {
      next()
    } else {
      router.push('/').catch(() => { })
    }
  } else if (to.meta.for === 'unlog') {
    if (store.getters['auth/getToken']) {
      router.push('/').catch(() => { })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
