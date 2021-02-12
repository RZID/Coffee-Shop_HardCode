<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="container-fluid">
      <div class="row p-0">
        <div class="col-lg-5 p-0">
          <div class="picture">
            <img class="image" :src="imgUrl" alt="default-image" />
          </div>
          <div class="confirm">
            <input
              @input="setImage"
              type="file"
              id="selectedFile"
              style="display: none"
            />
            <button class="take">Take a picture</button>
            <button
              class="choose"
              onclick="document.getElementById('selectedFile').click();"
            >
              Choose from gallery
            </button>
          </div>
          <div class="stock">
            <h4>Category:</h4>
            <select name="" id="" v-model="form.category">
              <option selected>Category</option>
              <option
                v-for="(element, i) in category"
                :key="i"
                :value="element.id"
              >
                {{ element.name }}
              </option>
            </select>
          </div>
          <div class="delivery">
            <h4>Delivery Hour:</h4>
            <select name="" id="">
              <option value="">Select start hour</option>
            </select>
            <select name="" id="">
              <option value="">Select end hour</option>
            </select>
          </div>
          <div class="stock">
            <h4>Input stock:</h4>
            <select name="" id="" v-model="form.stock">
              <option value="">Input Stock</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div class="col-lg-7 p-5">
          <div class="form">
            <h4>Name:</h4>
            <input
              type="text"
              placeholder="Type product name"
              v-model="form.name"
            />
            <h4>Price:</h4>
            <input
              type="text"
              placeholder="Type the price"
              v-model="form.price"
            />
            <h4>Description:</h4>
            <input
              type="text"
              placeholder="Describe your product"
              v-model="form.desc"
            />
            <div class="size-selection">
              <h4>Input product size:</h4>
              <p>Click size you want to use this product</p>
              <div class="size">
                <button
                  @click="size(1)"
                  :class="form.productSize === 1 ? 'bg-choco' : ''"
                >
                  R
                </button>
                <button
                  @click="size(2)"
                  :class="form.productSize === 2 ? 'bg-choco' : ''"
                >
                  L
                </button>
                <button
                  @click="size(3)"
                  :class="form.productSize === 3 ? 'bg-choco' : ''"
                >
                  XL
                </button>
                <button
                  @click="size(4)"
                  :class="form.productSize === 4 ? 'bg-choco' : ''"
                >
                  250 gr
                </button>
                <button
                  @click="size(5)"
                  :class="form.productSize === 5 ? 'bg-choco' : ''"
                >
                  300 gr
                </button>
                <button
                  @click="size(6)"
                  :class="form.productSize === 6 ? 'bg-choco' : ''"
                >
                  500 gr
                </button>
              </div>
            </div>
            <div class="delivery-selection">
              <h4>Input delivery methods:</h4>
              <p>click methods you want to use for this product</p>
              <div class="delivery">
                <button
                  @click="deliv(1)"
                  :class="form.deliv === 1 ? 'bg-choco' : ''"
                >
                  Home Delivery
                </button>
                <button
                  @click="deliv(2)"
                  :class="form.deliv === 2 ? 'bg-choco' : ''"
                >
                  Dine in
                </button>
                <button
                  @click="deliv(3)"
                  :class="form.deliv === 3 ? 'bg-choco' : ''"
                >
                  Take away
                </button>
              </div>
              <button class="save" @click="save()">Save Product</button>
              <button class="cancel">Cancel</button>
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
import Footer from '../components/Footer'
import Alert from '../helper/swal'
import Axios from 'axios'
import { mapActions } from 'vuex'

export default {
  mixins: [Alert],
  data: () => {
    return {
      category: [],
      imgUrl: '',
      form: {
        image: '',
        name: '',
        price: null,
        desc: '',
        productSize: '',
        deliv: '',
        stock: '',
        category: ''
      }
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    ...mapActions({
      insertData: 'product/insertData'
    }),
    save () {
      console.log(this.form)
      if (!this.form.name || !this.form.price || !this.form.desc || !this.form.productSize || !this.form.deliv) {
        this.alertDanger('You must fill all of input!')
      } else {
        this.insertData(this.form).then(res => {
          console.log(res)
        }).catch(err => {
          console.error(err)
        })
      }
    },
    size (el) {
      return this.form.productSize = el
    },
    deliv (el) {
      return this.form.deliv = el
    },
    setImage (e) {
      this.form.image = ''
      const file = e.target.files[0]
      this.imgUrl = URL.createObjectURL(file)
      this.form.image = file
    }
  },
  mounted () {
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/category`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => {
      this.category = res.data.data
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style scoped>
.bg-choco {
  background: chocolate;
  color: white;
}
.row {
  height: 2200px;
}
.col-lg-5 {
  position: relative;
  width: 100%;
  height: 400px;
}
.col-lg-5 .picture {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 35%;
  height: 200px;
}
.col-lg-5 .image {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100px 100px 100px 100px;
}
.col-lg-5 .confirm {
  transform: translateX(20%);
}
.col-lg-5 .confirm .take {
  margin-top: 20px;
  width: 60%;
  height: 60px;
  border: none;
  border-radius: 15px 15px 15px 15px;
  background: #0b132a;
  color: #fff;
}
.col-lg-5 .confirm .choose {
  margin-top: 20px;
  width: 60%;
  height: 60px;
  border: none;
  border-radius: 15px 15px 15px 15px;
  background: #ffba33;
}
.col-lg-5 .delivery {
  margin-top: 100px;
  transform: translateX(10%);
}
.col-lg-5 .delivery select {
  margin-top: 20px;
  width: 80%;
  height: 60px;
}
.col-lg-5 .stock {
  margin-top: 50px;
  transform: translateX(10%);
}
.col-lg-5 .stock select {
  margin-top: 20px;
  width: 80%;
  height: 60px;
}
.col-lg-7 {
  position: relative;
  border-left: 1px solid #000;
}
.col-lg-7 .form {
  line-height: 1.2;
}
.col-lg-7 .form input {
  width: 80%;
  height: 50px;
  margin-bottom: 20px;
}
.col-lg-7 .form .size-selection {
  margin-top: 40px;
}
.col-lg-7 .form .size-selection .size button {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 25px 25px 25px 25px;
  border: none;
}
.col-lg-7 .form .delivery-selection {
  margin-top: 20px;
}
.col-lg-7 .form .delivery-selection .delivery {
  display: flex;
}
.col-lg-7 .form .delivery-selection .delivery button {
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 15px 15px;
  margin-right: 20px;
}
.col-lg-7 .form .save {
  margin-top: 20px;
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 15px 15px;
  margin-right: 20px;
}
.col-lg-7 .form .cancel {
  margin-top: 20px;
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 15px 15px;
  margin-right: 20px;
}
</style>
