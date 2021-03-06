<template>
  <div>
    <div class="payment-method">
      <Navbar />
      <div class="container">
        <h1 class="check">Check out your item now!</h1>
        <div class="row">
          <div class="col-lg-5 cart">
            <div v-if="!getCart.length > 0" class="text-center">
              <div class="container">
                <img src="/image/nodata.png" class="w-75" alt="" />
                <h5>Your cart is empty!</h5>
                <p class="text-muted">
                  Please add at least 1 product to cart before checkout
                </p>
              </div>
            </div>
            <div v-else>
              <div class="text">
                <h3>Order Summary</h3>
              </div>
              <div class="product">
                <div v-for="(element, i) in getCart" :key="i">
                  <hr />
                  <div class="row py-3">
                    <div class="col-lg-3">
                      <img
                        :style="
                          'background-image:url(' +
                          getImage(element.image) +
                          '),url(/image/default.jpg)'
                        "
                        alt=""
                      />
                    </div>
                    <div class="col-lg-5 d-flex h-100">
                      <div class="align-self-center">
                        <p class="m-0">{{ element.name }}</p>
                        <p class="m-0">x{{ element.qty }}</p>
                        <p class="m-0">{{ element.size }}</p>
                      </div>
                    </div>
                    <div class="col-lg-4 d-flex">
                      <div class="align-self-center">
                        <p>IDR {{ toRupiah(element.price * element.qty) }}</p>
                        <div class="d-flex justify-content-end">
                          <router-link :to="'/detail_product/' + element.id">
                            <span class="badge badge-pill badge-info">
                              <i class="fas fa-pen"></i>
                            </span>
                          </router-link>
                          <b-link
                            class="text-decoration-none"
                            @click="deleteCart(element.id)"
                          >
                            <span class="badge badge-pill badge-danger">
                              <i class="fas fa-times"></i>
                            </span>
                          </b-link>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>

              <hr />
              <div class="information px-2">
                <div class="row">
                  <div class="col-lg reg-font">SUBTOTAL</div>
                  <div class="col-lg reg-font text-right">
                    IDR
                    {{
                      toRupiah(
                        getCart
                          .map((el) => el.price * el.qty)
                          .reduce((a, b) => a + b)
                      )
                    }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg reg-font">TAX & FEES</div>
                  <div class="col-lg reg-font text-right">
                    IDR
                    {{
                      toRupiah(
                        getCart
                          .map((el) => el.price * el.qty)
                          .reduce((a, b) => a + b) / 20
                      )
                    }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg reg-font">SHIPPING</div>
                  <div class="col-lg reg-font text-right">IDR 10.000</div>
                </div>
                <div class="row mt-4">
                  <div class="col-lg-4 reg-font"><h3>TOTAL</h3></div>
                  <div class="col-lg-8 text-right reg-font">
                    <h3>
                      IDR
                      {{
                        toRupiah(
                          getCart
                            .map((el) => el.price * el.qty)
                            .reduce((a, b) => a + b) +
                            getCart
                              .map((el) => el.price * el.qty)
                              .reduce((a, b) => a + b) /
                              20 +
                            10000
                        )
                      }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 payment" v-if="getCart.length > 0">
            <div class="header-adress">
              <h4>Address details</h4>
              <button @click="editAddr()">
                <span v-if="edit">Edit</span><span v-else>Apply</span>
              </button>
            </div>
            <div class="adress-card">
              <textarea
                class="border-0 form-control"
                :readonly="edit ? true : false"
                placeholder="Recipent *"
                v-model="detailDeliv.addr1"
              >
              </textarea>
              <hr />
              <textarea
                class="border-0 form-control"
                :readonly="edit ? true : false"
                placeholder="Address Detail *"
                v-model="detailDeliv.addr2"
              >
              </textarea>
              <hr />
              <input
                type="number"
                placeholder="Phone *"
                class="form-control border-0"
                v-model="detailDeliv.phone"
                :readonly="edit ? true : false"
              />
            </div>
            <h4 class="method-header">Payment method</h4>
            <div class="payment-methods px-3">
              <div class="row">
                <div class="col-lg-2">
                  <input
                    id="card"
                    type="radio"
                    name="payment"
                    v-model="detailDeliv.payment"
                    value="1"
                  />
                </div>
                <div class="col-lg-10">
                  <label class="m-0" for="card">
                    <b-icon-credit-card /> Card
                  </label>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-lg-2">
                  <input
                    id="bank"
                    type="radio"
                    name="payment"
                    v-model="detailDeliv.payment"
                    value="2"
                  />
                </div>
                <div class="col-lg-10">
                  <label for="bank" class="m-0">
                    <b-icon-wallet2 /> Bank account
                  </label>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-lg-2">
                  <input
                    id="cod"
                    type="radio"
                    name="payment"
                    v-model="detailDeliv.payment"
                    value="3"
                  />
                </div>
                <div class="col-lg-10">
                  <label for="cod" class="m-0">
                    <b-icon-box-seam /> Cash on delivery</label
                  >
                </div>
              </div>
            </div>
            <button type="button" class="confirm" @click="send()">
              Confirm and Pay
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapActions, mapGetters } from 'vuex'
import currency from '../helper/currency'
import Alert from '../helper/swal'
import Axios from 'axios'

export default {
  mixins: [currency, Alert],
  data: () => {
    return {
      edit: true,
      detailDeliv: {
        addr1: '',
        addr2: '',
        phone: '',
        payment: null
      }
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      getCart: 'cart/getCart'
    })
  },
  methods: {
    ...mapActions({
      deleteCartItem: 'cart/deleteItemCart',
      removeCart: 'cart/removeCart',
      addHistory: 'history/addHistory'
    }),
    send () {
      const detail = this.detailDeliv
      if (!detail.addr1 || !detail.addr2 || !detail.phone || !detail.payment) {
        this.alertDanger('Please fill all input!')
      } else {
        const data = this.getCart.map(el => {
          return {
            id_product: el.id,
            qty: el.qty,
            delivery_detail: 'Order in process',
            status: '0',
            id_user: this.$store.getters['auth/getUserData'].uid,
            address: `${detail.addr1} ${detail.addr2}`,
            phone: detail.phone,
            payment: detail.payment
          }
        })
        this.addHistory(data).then(() => {
          this.removeCart()
          this.toastSuccess('OK!, Your order will be process!')
        }).catch(err => console.error(err))
      }
    },
    getImage (img) {
      return `${process.env.VUE_APP_BACKEND}/images/${img}`
    },
    editAddr () {
      this.edit = !this.edit
    },
    deleteCart (id) {
      this.alertQuestion(`Delete this item from cart?`).then(() => {
        this.deleteCartItem(id)
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/user/${this.$store.getters['auth/getUserData'].uid}`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => {
      const dataUser = res.data.data[0]
      this.detailDeliv.addr1 = `${dataUser.first_name ? dataUser.first_name + ' ' : ''}${dataUser.last_name ? dataUser.last_name + ' ' : ''}${dataUser.display_name ? '(' + dataUser.display_name + ')' : ''}'s House`
      this.detailDeliv.addr2 = dataUser.address
      this.detailDeliv.phone = dataUser.phone
    }).catch(err => console.error(err))
  }
}
</script>

<style scoped>
@font-face {
  font-family: "poppins-reg";
  src: url("../assets/fonts/Poppins/Poppins-Regular.ttf");
}
.reg-font {
  font-family: "poppins-reg" !important;
}
input:read-only,
textarea:read-only {
  background-color: rgb(243, 255, 235);
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
input:focus,
textarea:focus {
  box-shadow: none;
}
.payment-method {
  background-image: url("../assets/nathan-dumlao-zTZRZV86GhE-unsplash 1.png");
  background-size: cover;
  width: 100%;
  height: 900px;
}
.check {
  margin-top: 40px;
  width: 300px;
  color: white;
}
.cart {
  margin-top: 40px;
  width: 100%;
  height: 500px;
  background: white;
  border-radius: 25px;
}
.cart .text {
  padding: 25px;
  display: flex;
  justify-content: center;
}
.cart img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
.cart .product {
  width: 100%;
  height: 230px;
  overflow: auto;
  overflow-x: hidden;
}
.payment {
  margin-left: 200px;
}
.payment .header-adress {
  display: flex;
  color: white;
}
.payment .header-adress button {
  position: absolute;
  right: 20px;
  border: none;
  color: white;
  background: transparent;
}
.payment .adress-card {
  background: white;
  padding: 10px;
  line-height: 1;
  border-radius: 20px;
}
.payment .method-header {
  color: white;
  margin-top: 40px;
}
.payment .payment-methods {
  background: white;
  height: 180px;
  line-height: 2;
  padding: 10px 10px 0 10px;
  border-radius: 20px;
}
.confirm {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  background: #6A4029;
  box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
  border-radius: 15px;
}
</style>
