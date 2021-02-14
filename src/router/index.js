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
import Cart from '../views/Cart.vue'
import userProfile from '../views/User-profile.vue'
import forgotPassword from '../views/Forgot-pass.vue'
import verif from '../views/Verify.vue'
import History from '../views/History.vue'

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
    meta: {
      auth: true,
      for: 'logged',
      restrict: true
    }
  },
  {
    path: '/detail_product/:id',
    name: 'Detail',
    component: detailProduct,
    meta: {
      auth: true,
      for: 'logged'
    }
  },
  {
    path: '/edit_product/:id',
    name: 'Update',
    component: updateProduct,
    meta: {
      auth: true,
      for: 'logged',
      restrict: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      auth: true,
      for: 'logged'
    }
  },
  {
    path: '/user_profile',
    name: 'User Profile',
    component: userProfile,
    meta: {
      auth: true,
      for: 'logged'
    }
  },
  {
    path: '/forgot_password',
    name: 'Forgot Password',
    component: forgotPassword,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/verify/:token',
    name: 'Verify',
    component: verif,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      auth: true,
      for: 'logged'
    }
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
      if (to.meta.restrict) {
        if (store.getters['auth/getUserData']['access'] == 1) {
          router.push('/').catch(() => { })
        } else {
          next()
        }
      } else {
        next()
      }
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
