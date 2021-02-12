<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="head mb-5">
            <br />
            <h4 class="mt-1">Promo Today</h4>
            <p class="mt-4">Coupons will be updated every weeks.</p>
            <p>Check them out!</p>
          </div>
          <div class="content-coupons">
            <div class="btn coupons"></div>
            <div class="btn coupons"></div>
            <div class="btn coupons"></div>
            <div class="btn coupons"></div>
          </div>
          <button class="btn apply">Apply Coupons</button>
          <div class="information">
            <p>Terms and Condition</p>
            <p>1. You can only apply 1 coupon per day</p>
            <p>2. It only for dine in</p>
            <p>3. Buy 1 get 1 only for new user</p>
            <p>4. Should make member card to apply coupon</p>
          </div>
        </div>
        <div class="col-lg-8 p-0">
          <div class="navbar"></div>
          <div class="menu">
            <div class="product">
              <div v-if="isLoading">
                <div class="container text-center text-light">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <h5>Please wait...</h5>
                </div>
              </div>
              <div v-else-if="isError" class="text-white text-center">
                <h4>Oops...</h4>
                <p class="text-light">{{ errorMsg }}</p>
              </div>
              <div v-else>
                <div class="row">
                  <div
                    v-for="(element, i) in product"
                    :key="i"
                    class="col-lg-3 card p-0"
                  >
                    <!-- Buat nanti langsung ke detail product -->
                    <b-link @click="goToDetail(element.id)" class="text-dark">
                      <img
                        :src="getImage(element.image)"
                        @error="setAltImg"
                        :alt="'Image of ' + element.name"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{{ element.name }}</h5>
                        <p class="card-text">
                          IDR {{ toRupiah(element.price) }}
                        </p>
                      </div>
                    </b-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import currency from '../helper/currency'
import Footer from '../components/Footer'
import { mapActions } from 'vuex'
export default {
  mixins: [currency],
  data: () => {
    return {
      product: [],
      isLoading: false,
      isError: false,
      errorMsg: ''
    }
  },
  methods: {
    ...mapActions({
      setProduct: 'product/setProduct'
    }),
    goToDetail (id) {
      this.$router.push(`/detail_product/${id}`)
    },
    setAltImg (event) {
      event.target.src = "/image/default.jpg"
    },
    getImage (image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`
    },
    productSet () {
      this.product = []
      this.isLoading = true
      this.isError = false
      this.errorMsg = ''
      this.setProduct().then(res => {
        this.product = res.data.data
      }).catch(err => {
        this.isError = true
        this.errorMsg = err.response.data.message
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  computed: {
    // ...mapGetters({
    //   getProduct: 'product/getProduct'
    // })
  },
  mounted () {
    this.productSet()
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.row {
  height: 900px;
}
.col-lg-4 {
  border-right: 1px solid #000;
}
.col-lg-4 .head {
  text-align: center;
}
.col-lg-4 .head p {
  line-height: 0;
}
.col-lg-4 .content-coupons .coupons {
  width: 100%;
  height: 100px;
  background: pink;
  border-radius: 25px 25px 25px 25px;
  margin-top: 10px;
}
.col-lg-4 .apply {
  margin-top: 70px;
  width: 100%;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
  background: chocolate;
  color: #ffffff;
}
.col-lg-4 .information {
  margin-top: 50px;
  line-height: 0.7;
}
.col-lg-8 {
  width: 100%;
  height: 800px;
}
.col-lg-8 .navbar {
  background: pink;
  width: 100%;
  height: 70px;
}
.col-lg-8 .menu .product {
  background: gray;
  width: 100%;
  height: 830px;
  padding: 40px;
}
.col-lg-8 .menu .product .row {
  margin-left: 0;
  height: 300px;
}
.col-lg-8 .menu .product .row .col-lg-3 {
  position: relative;
  width: 40px !important;
  height: 220px;
  margin-top: 30px;
  border-radius: 40px 40px 40px 40px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}
.col-lg-8 .menu .product .row .col-lg-3 img {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 75px 75px 75px 75px;
  transform: translate(15%, -30%);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}
.col-lg-8 .menu .product .row .col-lg-3 .card-body {
  text-align: center;
  position: absolute;
  bottom: 0;
}
</style>
