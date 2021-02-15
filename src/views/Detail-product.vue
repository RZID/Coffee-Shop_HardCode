<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-5">
          <img
            v-if="dataProduct.image"
            :src="getImage(dataProduct.image)"
            @error="setAltImg"
            :alt="'Image of ' + dataProduct.name"
          />
          <button
            v-if="$store.getters['auth/getUserData']['access'] == 0"
            class="trash"
            @click="deleteProduct()"
          >
            <b-icon icon="trash"></b-icon>
          </button>
        </div>
        <div class="col-lg-7">
          <h1 class="text-capitalize">{{ dataProduct.name }}</h1>
          <p class="infos">
            {{ dataProduct.description }}
          </p>
          <div class="info">
            <p>Delivery only on Monday to friday at 1 - 7 pm</p>
          </div>
          <div class="price">
            <div class="auto-text">
              <button
                style="
                  border-top-left-radius: 10px;
                  border-bottom-left-radius: 10px;
                "
                @click="decrementQty()"
              >
                -
              </button>
              <p>{{ qty }}</p>
              <button
                style="
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
                @click="incrementQty()"
              >
                +
              </button>
            </div>
            <h4>IDR {{ toRupiah(dataProduct.price * qty) }}</h4>
          </div>
          <button class="add" @click="addToCart()">
            {{
              this.getCart.filter((el) => el.id == this.$route.params.id)
                .length > 0
                ? "Update Quantity"
                : "Add to cart"
            }}
          </button>
          <button
            class="edit"
            v-if="$store.getters['auth/getUserData'].access != '1'"
            @click="toEdit(dataProduct.id)"
          >
            Edit product
          </button>
        </div>
      </div>
    </div>
    <div class="container sec-con">
      <div class="pb-3">
        <div class="thisCheckout px-4">
          <img src="../assets/TM.png" alt="" />
          <div class="more-information d-flex m-0">
            <span class="align-self-center">
              <h3 class="m-0">{{ dataProduct.name }}</h3>
            </span>
          </div>
          <div class="co">
            <h3>Checkout</h3>
            <button @click="$router.push('/cart')">
              <b-icon icon="arrow-right" font-scale="3"></b-icon>
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
import Axios from 'axios'
import currency from '../helper/currency'
import Alert from '../helper/swal'
import Footer from '../components/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getCart: 'cart/getCart'
    })
  },
  mounted () {
    if (this.getCart.filter(el => el.id == this.$route.params.id).length > 0) {
      this.qty = this.getCart.filter(el => el.id == this.$route.params.id)[0].qty
    }
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/product/${this.$route.params.id}`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => this.dataProduct = res.data.data[0]).catch(err => console.error(err))
  },
  mixins: [currency, Alert],
  data: () => {
    return {
      dataProduct: {},
      qty: 1,
      now: true
    }
  },
  methods: {
    ...mapActions({
      sendCart: 'cart/addToCart'
    }),
    setNow (val) {
      this.now = val
    },
    addToCart () {
      const data = {
        id: this.dataProduct.id,
        name: this.dataProduct.name,
        qty: this.qty,
        image: this.dataProduct.image,
        price: this.dataProduct.price,
        size: this.dataProduct.size
      }
      this.sendCart(data)
      this.toastSuccess('Sent to cart')
    },
    decrementQty () {
      if (this.qty > 1) {
        this.qty = this.qty - 1
      }
    },
    incrementQty () {
      this.qty = this.qty + 1
    },
    getImage (image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`
    },
    setAltImg (event) {
      event.target.src = "/image/default.jpg"
    },
    toEdit (id) {
      this.$router.push(`/edit_product/${id}`).catch(() => { })
    },
    deleteProduct () {
      this.alertQuestion('Delete this product?').then(() => {
        Axios.delete(`${process.env.VUE_APP_BACKEND}/api/products/${this.dataProduct.id}`, {
          headers: {
            'token': this.$store.getters['auth/getToken']
          }
        }).then((res) => {
          if (res) {
            this.toastSuccess('Success delete this product')
            this.$router.push('/').catch(() => { })
          }
        }).catch(err => {
          this.toastDanger(err.response.statusText)
        })
      })
    }
  },
  components: {
    Navbar,
    Footer
  }
}

</script>

<style scoped>
.bg-choco {
  background: chocolate;
}
.col-lg-5 .trash {
  position: absolute;
  z-index: 2;
  transform: translate(20%, 470%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  color: white;
  background: chocolate;
}
.col-lg-5 img {
  object-fit: cover;
  width: 300px;
  height: 300px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
  border-radius: 200px;
  transform: translateX(25%);
}
.col-lg-5 .information {
  margin-top: 60px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  width: 100%;
  height: 270px;
  padding: 20px;
}
.col-lg-5 .information .delivery-type {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.col-lg-5 .information .delivery-type button {
  margin-right: 20px;
  padding: 10px;
  height: 40px;
  border: none;
  border-radius: 10px;
}
.col-lg-5 .information .now {
  display: flex;
  margin-top: 20px;
}
.col-lg-5 .information .now p {
  transform: translateY(30%);
}
.col-lg-5 .information .now button {
  margin-left: 20px;
  width: 100px;
  border: none;
  border-radius: 10px;
}
.col-lg-5 .information .time {
  display: flex;
  margin-top: 20px;
}
.col-lg-5 .information .time p {
  transform: translateY(40%);
}
.col-lg-5 .information .time input {
  margin-left: 20px;
  border-radius: 10px;
  width: 75%;
}
.col-lg-7 .price {
  display: flex;
}
.col-lg-7 .infos {
  width: 100%;
  height: 250px;
  overflow: auto;
}
.col-lg-7 .info {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 200px;
}
.col-lg-7 .price .auto-text {
  display: flex;
  width: 120px;
  height: 50px;
  border: 1px solid #9F9F9F;
  box-sizing: border-box;
  border-radius: 10px;
  color: #6A4029;
  font-size: 20px;
}
.col-lg-7 .price .auto-text p {
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-lg-7 .price .auto-text button {
  border: none;
  width: 70px;
  color: #6A4029;
}
.col-lg-7 .price h4 {
  position: absolute;
  right: 0;
  margin-top: 10px;
}
.col-lg-7 .add {
  margin-top: 40px;
  width: 100%;
  height: 70px;
  border: none;
  background: #6A4029;
  border-radius: 20px;
  color: white;
  font-size: 20px;
}
.col-lg-7 .edit {
  margin-top: 20px;
  width: 100%;
  height: 70px;
  border: none;
  background: #FFBA33;
  border-radius: 20px;
  color: #6A4029;
  font-size: 20px;
}
.sec-con .col-lg-3 {
  margin-right: 70px;
  height: 150px;
  transform: translateY(50%);
  z-index: 1;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}
.sec-con .col-lg-3 .size {
  margin-top: 20px;
}
.sec-con .col-lg-3 .size button {
  width: 25%;
  margin-right: 20px;
  height: 60px;
  border: none;
  border-radius: 30px;
}
.sec-con .thisCheckout {
  height: 150px;
  display: flex;
  transform: translateY(50%);
  z-index: 1;
  background: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}
.sec-con .thisCheckout img {
  width: 120px;
  height: 120px;
  margin-top: 15px;
  border-radius: 60px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}
.sec-con .thisCheckout .more-information {
  display: inline-block;
  margin-top: 20px;
  margin-left: 20px;
}
.sec-con .thisCheckout .more-information .items {
  width: 100%;
  height: 80px;
  overflow: auto;
}
.sec-con .thisCheckout .co {
  display: flex;
  position: absolute;
  right: 30px;
}
.sec-con .thisCheckout .co h3 {
  transform: translateY(140%);
  margin-right: 50px;
}
.sec-con .thisCheckout .co button {
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 25px;
  transform: translateY(100%);
}
.footer {
  width: 100%;
  background: gray;
  height: 400px;
}
</style>
