<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-5">
          <img v-if="imgUrl" :src="imgUrl" alt="" />
          <img
            v-else
            :src="getImage(dataProduct.image)"
            @error="setDefaultImage"
            alt=""
          />
          <input
            type="file"
            id="selectedFile"
            style="display: none"
            @input="changeImg"
          />
          <button
            class="trash"
            onclick="document.getElementById('selectedFile').click();"
          >
            <b-icon icon="trash"></b-icon>
          </button>
          <div class="info">
            <p>Delivery only on Monday to friday at 1 - 7 pm</p>
          </div>
        </div>
        <div class="col-lg-7">
          <input
            type="text"
            v-model="dataProduct.name"
            class="border-0 p-0 form-control form-control-lg"
          />
          <hr />
          <div class="form-inline form-control-lg p-0">
            <div class="form-group mr-2">IDR</div>
            <div class="form-group">
              <input
                type="number"
                class="border-0 p-0 form-control form-control-lg"
                v-model="dataProduct.price"
              />
            </div>
          </div>
          <hr />
          <div class="info-product">
            <textarea
              class="border-0 p-0 form-control form-control-sm"
              v-model="dataProduct.description"
            />
          </div>
          <hr />
          <select name="" id="" v-model="dataProduct.productSize">
            <option v-for="(element, i) in size" :key="i" :value="element.id">
              {{ element.size }}
            </option>
          </select>
          <select name="" id="" v-model="dataProduct.productDelivery">
            <option
              v-for="(element, i) in delivery"
              :key="i"
              :value="element.id"
            >
              {{ element.name }}
            </option>
          </select>
          <div class="confirm">
            <button class="save" @click="update()">Save change</button>
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
import Axios from 'axios'
import currency from '../helper/currency'
import Alert from '../helper/swal'
import { mapActions } from 'vuex'
export default {
  mixins: [Alert, currency],
  data: () => {
    return {
      dataProduct: {},
      size: [],
      delivery: [],
      image: '',
      imgUrl: ''
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    ...mapActions({
      updateData: 'product/updateData'
    }),
    update () {
      const data = {
        id: this.dataProduct.id,
        name: this.dataProduct.name,
        productSize: this.dataProduct.productSize,
        category: this.dataProduct.productCategory,
        price: this.dataProduct.price,
        desc: this.dataProduct.description,
        stock: this.dataProduct.stock,
        deliv: this.dataProduct.productDelivery,
        image: this.image ? this.image : false
      }
      this.updateData(data).then((res) => {
        if (res) {
          this.toastSuccess('Success update product!')
        }
      }).catch(err =>
        this.dangerSuccess(err.response.message))
    },
    getImage (image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`
    },
    setDefaultImage (e) {
      e.target.src = "/image/default.jpg"
    },
    changeImg (e) {
      this.image = ''
      const file = e.target.files[0]
      this.imgUrl = URL.createObjectURL(file)
      this.image = file
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/product/${this.$route.params.id}`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => {
      this.dataProduct = res.data.data[0]
    }).catch(err => {
      console.error(err)
    })

    Axios.get(`${process.env.VUE_APP_BACKEND}/api/productsize/`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => {
      this.size = res.data.data
    }).catch(err => {
      console.error(err)
    })

    Axios.get(`${process.env.VUE_APP_BACKEND}/api/delivery/`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => {
      this.delivery = res.data.data
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style scoped>
textarea.form-control {
  resize: none;
  height: 100%;
}
input:focus,
textarea:focus {
  box-shadow: none;
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
.col-lg-5 img {
  object-fit: cover;
  width: 400px;
  height: 500px;
}
.col-lg-5 p {
  width: 250px;
  margin-top: 50px;
}
.col-lg-5 .trash {
  position: absolute;
  background: #fff;
  width: 40px;
  height: 40px;
  border: 5px solid #ffba33;
  border-radius: 20px 20px;
  transform: translate(-140%, 40%);
}
.col-lg-7 .info-product {
  width: 100%;
  height: 200px;
  font-size: 12px;
}
.col-lg-7 select {
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border: 1px solid #9F9F9F;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
}
.col-lg-7 .confirm {
  display: flex;
}
.col-lg-7 .auto-text {
  margin-top: 20px;
  display: flex;
  border: 1px solid black;
  width: 200px;
  height: 50px;
  border-radius: 10px 10px;
}
.col-lg-7 .auto-text p {
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-lg-7 .auto-text button {
  border: none;
  width: 70px;
}
.col-lg-7 .confirm .add {
  margin-top: 20px;
  margin-left: 20px;
  width: 65%;
  height: 50px;
  border: none;
  border-radius: 10px 10px;
}
.col-lg-7 .save {
  margin-top: 20px;
  width: 100%;
  height: 70px;
  border: none;
  background: #6A4029;
  border-radius: 10px;
  color: white;
  font-size: 20px;
}
</style>
