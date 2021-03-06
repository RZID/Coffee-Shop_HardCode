<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="bg-coffee w-100">
      <div class="container py-5">
        <div class="text-center text-white">
          <h2>Let's see what you have bought</h2>
          <p>Select item to delete</p>
        </div>
        <div class="text-right">
          <b-link class="text-white" v-if="ids.length > 0" @click="deleteAll()">
            Delete
          </b-link>
          <b-link class="text-white" @click="selectAll" v-else
            >Select All</b-link
          >
        </div>
        <div class="content">
          <div class="row p-0 m-0">
            <div class="col-lg-3" v-for="(element, i) in historyData" :key="i">
              <div class="row">
                <div class="col-lg-4">
                  <img src="../assets/image 43.png" alt="" />
                </div>
                <div class="col-lg-8">
                  <div class="product-name">
                    <p style="font-size: 15px" class="m-0">
                      {{ element.name }}
                    </p>
                  </div>
                  <hr />
                  <div class="information">
                    <p class="reg-font m-0" style="font-size: 14px">
                      IDR {{ toRupiah(element.price) }}
                    </p>
                    <p style="font-size: 12px" class="m-0">
                      {{ element.delivery_detail }}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    v-model="ids"
                    @click="select"
                    :value="element.id"
                  />
                </div>
              </div>
            </div>
            <!-- Hapus -->

            <!-- Selesai -->
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
export default {
  mixins: [currency, Alert],
  data: () => {
    return {
      historyData: [],
      allSelected: false,
      ids: []
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    selectAll: function () {
      this.ids = [];

      for (let user in this.historyData) {
        this.ids.push(this.historyData[user].id.toString());
      }
    },
    select: function () {
      this.allSelected = false;
    },
    deleteAll () {
      this.alertQuestion('Want to delete history?').then(() => {
        this.ids.map(id => {
          Axios.delete(`${process.env.VUE_APP_BACKEND}/api/history/${id}`, {
            headers: {
              'token': this.$store.getters['auth/getToken']
            }
          }).then(() => {
            this.ids = []
            this.toastSuccess('Success deleted!')
            this.setData()
          }).catch((err) => {
            console.error(err)
          })
        })
      })
    },
    setData () {
      this.historyData = []
      Axios.get(`${process.env.VUE_APP_BACKEND}/api/history/${this.$store.getters['auth/getUserData'].uid}`, {
        headers: {
          'token': this.$store.getters['auth/getToken']
        }
      }).then((res) => {
        this.historyData = res.data.data
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mounted () {
    this.setData()
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
.bg-coffee {
  height: 900px;
  width: 100%;
  background-image: url("/image/tyler-nix-jE-27l7V3NU-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content {
  width: 100%;
  height: 700px;
  overflow: auto;
}
.content .row .col-lg-3 {
  margin-top: 20px;
}
.content .row .col-lg-3 .row {
  width: 100%;
  border-radius: 25px;
  background: white;
}
.content .row .col-lg-4 img {
  width: 70px;
  height: 125px;
}
.content .row .col-lg-8 .information {
  width: 100%;
  height: 50px;
  overflow: auto;
}
.content .row .col-lg-8 .product-name {
  width: 100%;
  overflow: auto;
  margin-top: 10px;
}
.content .row .col-lg-8 input {
  position: relative;
  right: -80%;
}
</style>
