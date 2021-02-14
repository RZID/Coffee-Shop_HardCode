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
            <div class="btn coupons" style="background:#88B788">
                <div class="row">
                  <div class="col-lg-3">
                  <img src="../assets/image 46.png" alt="">
                  </div>
                  <div class="col-lg-9">
                    <div class="context">
                      <h4>HAPPY MOTHER'S DAY!</h4>
                      <p>Get one of our favorite menu for free!</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="btn coupons" style="background:#F5C361">
              <div class="row">
                  <div class="col-lg-3">
                  <img src="../assets/image 43.png" alt="">
                  </div>
                  <div class="col-lg-9">
                    <div class="context">
                      <h4>Get a cup of coffee for free on sunday morning</h4>
                      <p>Only at 7 to 9 AM</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="btn coupons" style="background:#88B788">
              <div class="row">
                  <div class="col-lg-3">
                  <img src="../assets/image 46.png" alt="">
                  </div>
                  <div class="col-lg-9">
                    <div class="context">
                      <h4>HAPPY MOTHER'S DAY!</h4>
                      <p>Get one of our favorite menu for free!</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="btn coupons" style="background:#C59378">
              <div class="row">
                  <div class="col-lg-3">
                  <img src="../assets/image 45.png" alt="">
                  </div>
                  <div class="col-lg-9">
                    <div class="context">
                      <h4>HAPPY HALLOWEN!</h4>
                      <p>Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                    </div>
                  </div>
                </div>
            </div>
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
          <div class="navbar">
            <div
              class="col text-center"
              v-for="(element, i) in category"
              :key="i"
            >
              <b-link
                @click="categoryBind(element.id) || productSet()"
                :class="
                  categoryProduct == element.id ? 'text-white' : 'text-dark'
                "
              >
                {{ element.name }}
              </b-link>
            </div>
          </div>
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
              <div v-else-if="isError" class="text-black text-center">
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
                    <b-link @click="goToDetail(element.id)" class="text-dark">
                      <img
                        :style="
                          'background-image:url(' +
                          getImage(element.image) +
                          ')' +
                          ',url(/image/default.jpg)'
                        "
                        class="image-cover"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          ({{ element.size }}) - {{ element.name }}
                        </h5>
                        <p class="card-text">
                          IDR {{ toRupiah(element.price) }}
                        </p>
                      </div>
                    </b-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex w-100 py-2">
              <div class="col-3 d-flex">
                <b-pagination
                  class="align-self-center m-0"
                  v-model="currentPage"
                  :total-rows="pagination.totalData"
                  :per-page="12"
                  aria-controls="my-table"
                  size="sm"
                  @input="changePage()"
                ></b-pagination>
              </div>
              <div class="col">
                <div v-if="$store.getters['auth/getUserData'].access == '0'">
                  <button
                    class="btn btn-light btn-block btn-lg"
                    @click="toAdd()"
                  >
                    Add new product
                  </button>
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
import Axios from 'axios'
import { mapActions } from 'vuex'
export default {
  mixins: [currency],
  data: () => {
    return {
      currentPage: 1,
      product: [],
      category: [],
      isLoading: false,
      isError: false,
      errorMsg: '',
      categoryProduct: 1,
      pagination: []
    }
  },
  methods: {
    ...mapActions({
      setProduct: 'product/setProduct'
    }),
    changePage () {
      this.productSet(this.currentPage)
    },
    categoryBind (id) {
      this.categoryProduct = id
    },
    toAdd () {
      this.$router.push('/new_product')
    },
    goToDetail (id) {
      this.$router.push(`/detail_product/${id}`)
    },
    setAltImg (event) {
      event.target.src = "/image/default.jpg"
    },
    getImage (image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`
    },
    productSet (page) {
      this.product = []
      this.isLoading = true
      this.isError = false
      this.errorMsg = ''
      const data = {
        category: this.categoryProduct,
        page: page ? page : 1
      }
      this.setProduct(data).then(res => {
        this.product = res.data.data
        this.pagination = res.data.pagination
      }).catch(err => {
        this.isError = true
        this.errorMsg = err.response.data.message
      }).finally(() => {
        this.isLoading = false
      })
    }
  },
  computed: {
  },
  mounted () {
    window.scrollTo(0, 0)
    this.productSet()
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/category`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then(res => this.category = res.data.data).catch(err => console.error(err))
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.col-lg-4{
  border-right: 1px solid #5E5E5E;
}
.col-lg-4 .head {
  text-align: center;
}
.col-lg-4 .head p {
  line-height: 0;
}
.col-lg-4 .content-coupons .coupons {
  width: 100%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
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
  width: 100%;
  height: 70px;
}
.col-lg-8 .menu .product {
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
  object-fit: cover;
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
