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
          <b-link class="text-white" @click="selectAll" v-else>
            Select All
          </b-link>
        </div>
        <div class="content">
          <div class="row p-0 m-0">
            <div
              class="col-12 col-md-6 col-lg-4 mb-3"
              v-for="(element, i) in historyData"
              :key="i"
            >
              <div class="card radius-20">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <img
                        :src="getImage(element.image)"
                        onerror="this.onerror=null;this.src='/image/default.jpg'"
                        alt=""
                        class="imag object-cover"
                      />
                    </div>
                    <div class="col d-flex">
                      <div class="align-self-center w-100">
                        <h5 class="m-0">{{ element.name }}</h5>
                        <p class="m-0 font-poppins text-brown">
                          IDR {{ toRupiah(element.price) }}
                        </p>
                        <div class="d-flex justify-content-between w-100">
                          <p class="m-0 font-poppins text-brown">
                            {{ element.delivery_detail }}
                          </p>
                          <div class="d-flex">
                            <input
                              class="align-self-end"
                              v-model="ids"
                              @click="select"
                              :value="element.id"
                              type="checkbox"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Axios from "axios";
import currency from "../helper/currency";
import Alert from "../helper/swal";
export default {
  mixins: [currency, Alert],
  data: () => {
    return {
      historyData: [],
      allSelected: false,
      ids: [],
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    selectAll() {
      this.ids = [];

      for (let user in this.historyData) {
        this.ids.push(this.historyData[user].id.toString());
      }
    },
    select() {
      this.allSelected = false;
    },
    deleteAll() {
      this.alertQuestion("Want to delete history?").then(() => {
        this.ids.map((id) => {
          Axios.delete(`${process.env.VUE_APP_BACKEND}/api/history/${id}`, {
            headers: {
              token: this.$store.getters["auth/getToken"],
            },
          })
            .then(() => {
              this.ids = [];
              this.toastSuccess("Success deleted!");
              this.setData();
            })
            .catch((err) => {
              console.error(err);
            });
        });
      });
    },
    setData() {
      this.historyData = [];
      Axios.get(
        `${process.env.VUE_APP_BACKEND}/api/history/${this.$store.getters["auth/getUserData"].uid}`,
        {
          headers: {
            token: this.$store.getters["auth/getToken"],
          },
        }
      )
        .then((res) => {
          this.historyData = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getImage(image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`;
    },
  },
  mounted() {
    this.setData();
  },
};
</script>
<style scoped src="../assets/css/ownstyle_rzid.css"></style>
<style scoped>
@font-face {
  font-family: "poppins-reg";
  src: url("../assets/fonts/Poppins/Poppins-Regular.ttf");
}
.object-cover {
  object-fit: cover;
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
.card-body{
  height: 150px;
}
.imag{
  width: 100px;
  height: 100px;
}
</style>
