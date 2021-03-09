<template :key="$route.params.id">
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <p class="navbar-brand">
          <img src="../assets/icons/coffee 1.png" /><span>Coffee Shop</span>
        </p>
        <div class="navigation">
          <router-link to="/" class="navigation-content">Home</router-link>
          <router-link to="/product" class="navigation-content"
            >Product</router-link
          >
          <router-link to="/cart" class="navigation-content"
            >Your Cart</router-link
          >
          <router-link to="/history" class="navigation-content"
            >History</router-link
          >
        </div>
        <div class="right-content">
          <form class="d-flex src" v-if="getToken" @submit.prevent="">
            <div class="row">
              <div class="col-8">
                <div class="input-group bg-gray">
                  <span class="d-flex" v-if="!searching">
                    <i class="fa fa-search align-self-center"></i>
                  </span>
                  <span class="d-flex" v-else>
                    <b-link
                      class="text-dark align-self-center"
                      @click="closeSearch()"
                    >
                      <i class="fa fa-times"></i>
                    </b-link>
                  </span>
                  <input
                    type="text"
                    class="form-control search"
                    placeholder="Search"
                    v-model="searchVal"
                    @input="search()"
                  />
                </div>
                <div
                  class="position-absolute rounded bg-white"
                  v-if="searching"
                >
                  <div class="for-search maxHeight">
                    <div v-if="isLoading" class="text-center py-3">
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <h6>Searching...</h6>
                    </div>
                    <div
                      class="px-2"
                      v-else
                      v-for="(element, i) in searchData"
                      :key="i"
                    >
                      <b-link
                        class="text-dark text-decoration-none"
                        @click="
                          $router
                            .push('/detail_product/' + element.id)
                            .catch(() => {})
                        "
                      >
                        <div class="">
                          <div class="border-bottom" style="min-height: 75px">
                            <div class="row no-gutters d-flex py-2 h-100">
                              <div class="col-4 align-self-center">
                                <div
                                  style="min-height: 75px"
                                  class="image"
                                  :style="
                                    'background-image:url(' +
                                      getImage(element.image) +
                                      '), url(/image/default.jpg) !important'
                                  "
                                  alt=""
                                  srcset=""
                                ></div>
                              </div>
                              <div class="ml-2 col align-self-center">
                                {{ "(" + element.size + ") - " + element.name }}
                                <p class="reg-font m-0">
                                  IDR {{ toRupiah(element.price) }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <img src="/icons/chat.svg" />
              </div>
              <b-dropdown
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
                class="position-static"
              >
                <template #button-content>
                  <img
                    class="rounded-c"
                    src="/image/default.png"
                    height="30px"
                    alt=""
                    srcset=""
                  />
                </template>
                <b-dropdown-item @click="$router.push('/user_profile')"
                  >Profile</b-dropdown-item
                >
                <b-dropdown-item @click="toLogOut()">Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </form>
          <form class="d-flex" v-else>
            <router-link class="btn login" to="/login">Login</router-link>
            <router-link class="btn signup" to="/register">Signup</router-link>
          </form>
        </div>
        <div @click="openRes()" class="button-toggler btn border">
          <b-icon icon="menu-up" font-scale="2"></b-icon>
        </div>
      </div>
      <div v-if="resNav === true" class="navigation-res">
        <div>
          <div class="res-content">
            <router-link to="/">Home</router-link>
          </div>
          <div class="res-content">
            <router-link to="/product">Product</router-link>
          </div>
          <div class="res-content">
            <router-link to="/cart">Your Cart</router-link>
          </div>
          <div class="res-content">
            <router-link to="/history">History</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Axios from "axios";
import Alert from "../helper/swal";
import currency from "../helper/currency";
export default {
  mixins: [Alert, currency],
  data: () => {
    return {
      searchVal: "",
      searching: false,
      isLoading: false,
      searchData: [],
      resNav: false,
    };
  },
  computed: {
    ...mapGetters({
      getToken: "auth/getToken",
    }),
  },
  methods: {
    ...mapActions({
      logOut: "auth/logOut",
    }),
    toLogOut() {
      this.alertQuestion("Your session will be removed").then(() => {
        this.logOut().then(() => this.$router.push("/"));
      });
    },
    getImage(image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`;
    },
    search() {
      this.searchData = [];
      if (this.searchVal) {
        this.searching = true;
        this.isLoading = true;
        Axios.get(
          `${process.env.VUE_APP_BACKEND}/api/products?search=${this.searchVal}`,
          {
            headers: {
              token: this.$store.getters["auth/getToken"],
            },
          }
        )
          .then((res) => (this.searchData = res.data.data))
          .catch((err) => console.error(err))
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        this.searching = false;
      }
    },
    closeSearch() {
      this.searching = false;
      this.searchVal = "";
      this.isLoading = true;
    },
    openRes() {
      this.resNav = !this.resNav;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@font-face {
  font-family: "poppins-reg";
  src: url("../assets/fonts/Poppins/Poppins-Regular.ttf");
}
.reg-font {
  font-family: "poppins-reg" !important;
}
.image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.maxHeight {
  max-height: 50vh;
  overflow-y: auto;
}
.for-search {
  width: 20vw;
}
.rounded-c {
  border-radius: 30px !important;
}
.bg-gray {
  background-color: #efeeee;
  border-radius: 10px;
}
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: none;
  box-shadow: none;
  background: none;
}
.search {
  background: none;
  border: none;
}
.navbar {
  background: #ffffff !important;
  border-bottom: 0.5px solid #5e5e5e;
}
.navbar-brand {
  margin-top: 15px;
}
.navbar-brand span {
  padding: 20px;
}
.navigation .navigation-content {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  color: #000000;
  margin-right: 30px;
  text-decoration: none;
}
.navigation .navigation-content:hover {
  font-weight: 900;
  color: #6a4029;
}
.login {
  margin-right: 10px;
  margin-top: 10px;
  width: 120px;
  height: 35px;
  border-radius: 25px 25px 25px 25px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  background: #ffffff !important;
}
.signup {
  margin-top: 10px;
  width: 120px;
  height: 35px;
  border-radius: 25px 25px 25px 25px;
  border: none;
  background: #ffba33 !important;
}
.button-toggler {
  display: none;
}
.navigation-res {
  display: none;
}

@media (max-width: 992px) {
  .navigation {
    display: none;
  }
  .right-content {
    display: none;
  }
  .button-toggler {
    display: flex;
  }
  .navigation-res {
    display: flex;
    line-height: 3;
    width: 100%;
    height: calc(100vh - 91px);
    background: white;
  }
}
</style>
