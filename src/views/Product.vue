<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 border-right d-none d-lg-block">
          <div class="py-5 text-center">
            <h4 class="mb-3 text-brown">Promo Today</h4>
            <small class="font-poppins">
              Coupons will be updated every weeks. <br />
              Check them out!
            </small>
          </div>
          <div class="py-3 px-4">
            <!-- Coupon 1 -->
            <div class="card mb-3 border-0 radius-20 bg-green">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col-4">
                    <img
                      class="image-coupons"
                      src="../assets/image 43.png"
                      alt=""
                    />
                  </div>
                  <div class="col d-flex">
                    <div class="align-self-center">
                      <p class="m-0">HAPPY MOTHER'S DAY!</p>
                      <small class="m-0 font-poppins">
                        Get one of our favourite <br />
                        menu for free!
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Of Coupon 1 -->

            <!-- Coupon 2 -->
            <div class="card mb-3 border-0 radius-20 bg-cream">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col-4">
                    <img
                      class="image-coupons"
                      src="../assets/image 46.png"
                      alt=""
                    />
                  </div>
                  <div class="col d-flex">
                    <div class="align-self-center">
                      <p class="m-0">
                        Get a cup of coffee for free on sunday morning
                      </p>
                      <small class="m-0 font-poppins">
                        Only at 7 to 9 AM
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Of Coupon 2 -->

            <!-- Coupon 3 -->
            <div class="card mb-3 border-0 radius-20 bg-green">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col-4">
                    <img
                      class="image-coupons"
                      src="../assets/image 43.png"
                      alt=""
                    />
                  </div>
                  <div class="col d-flex">
                    <div class="align-self-center">
                      <p class="m-0">HAPPY MOTHER'S DAY!</p>
                      <small class="m-0 font-poppins">
                        Get one of our favourite <br />
                        menu for free!
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Of Coupon 3 -->

            <!-- Coupon 4 -->
            <div class="card mb-3 border-0 radius-20 bg-browny-pink">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col-4">
                    <img
                      class="image-coupons"
                      src="../assets/image 45.png"
                      alt=""
                    />
                  </div>
                  <div class="col d-flex">
                    <div class="align-self-center">
                      <p class="m-0">HAPPY HALLOWEEN!</p>
                      <small class="m-0 font-poppins">
                        Do you like chicken wings? Get 1 <br />
                        free only if you buy pinky promise
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Of Coupon 4 -->

            <div class="py-5">
              <button class="btn btn-brown btn-block btn-lg radius-20 p-3">
                Apply Coupon
              </button>
            </div>
            <p class="text-muted m-0">Terms and Condition</p>
            <p class="text-muted m-0">
              <small class="font-poppins">
                1. You can only apply 1 coupon per day
              </small>
            </p>
            <p class="text-muted m-0">
              <small class="font-poppins"> 2. It only for dine in </small>
            </p>
            <p class="text-muted m-0">
              <small class="font-poppins">
                3. Buy 1 get 1 only for new user
              </small>
            </p>
            <p class="text-muted m-0">
              <small class="font-poppins">
                4. Should make member card to apply coupon
              </small>
            </p>
          </div>
        </div>
        <div class="col">
          <div class="py-3">
            <div class="row overflow-x">
              <div
                class="col text-center"
                v-for="(element, i) in category"
                :key="i"
              >
                <b-link
                  @click="categoryBind(element.id) || productSet()"
                  class="text-decoration-none"
                  :class="
                    categoryProduct == element.id
                      ? 'text-brown'
                      : 'text-secondary'
                  "
                >
                  <h5>
                    <small
                      class="pb-2"
                      :class="
                        categoryProduct != element.id
                          ? 'font-poppins'
                          : 'active-bar'
                      "
                    >
                      {{ element.name }}
                    </small>
                  </h5>
                </b-link>
              </div>
            </div>
            <div class="container min-vh-100">
              <div class="row py-5">
                <div
                  class="col-lg-3 col-md-6 col-12 mb-3 text-center"
                  v-for="(element, i) in product"
                  :key="i"
                >
                  <b-link
                    @click="goToDetail(element.id)"
                    class="text-dark text-decoration-none"
                  >
                    <div class="card shadow border-0 radius-40 card-product">
                      <img
                        :src="getImage(element.image)"
                        :onerror="'this.onerror=null;this.src=`/image/default.jpg`'"
                        class="image-cover image-product shadow card-img-top"
                      />
                      <div class="card-body">
                        <h4>({{ element.size }}) - {{ element.name }}</h4>
                        <h6 class="font-poppins font-weight-bold text-brown">
                          IDR {{ toRupiah(element.price) }}
                        </h6>
                      </div>
                    </div>
                  </b-link>
                </div>
              </div>
              <p class="text-brown font-poppins">
                *the price has been cutted by discount appears
              </p>
              <div class="container">
                Sort By
                <div class="input-group">
                  <select
                    class="custom-select"
                    @change="productSet()"
                    v-model="order"
                  >
                    <option value="id">id</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="changeSort()"
                    >
                      <i
                        v-if="orderMethod == 'asc'"
                        class="fas fa-sort-alpha-up"
                      ></i>
                      <i v-else class="fas fa-sort-alpha-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="d-flex w-100 py-2">
                <div class="col-3 d-flex">
                  <b-pagination
                    class="align-self-center m-0"
                    v-model="currentPage"
                    :total-rows="pagination.totalData"
                    :per-page="12"
                    aria-controls="my-table"
                    size="sm"
                    variant="info"
                    @input="changePage()"
                  >
                  </b-pagination>
                </div>
                <div class="col">
                  <div v-if="$store.getters['auth/getUserData'].access == '0'">
                    <button
                      class="btn btn-light btn-block btn-lg btnAdd btn-brown"
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
    </div>
    <div class="d-block">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import currency from "../helper/currency";
import Footer from "../components/Footer";
import Axios from "axios";
import { mapActions } from "vuex";
export default {
  mixins: [currency],
  data: () => {
    return {
      order: "id",
      currentPage: 1,
      orderMethod: "asc",
      product: [],
      category: [],
      isLoading: false,
      isError: false,
      errorMsg: "",
      categoryProduct: 1,
      pagination: [],
    };
  },
  methods: {
    ...mapActions({
      setProduct: "product/setProduct",
    }),
    changeSort() {
      this.orderMethod = this.orderMethod == "asc" ? "desc" : "asc";
      this.productSet(1);
    },
    changePage() {
      this.productSet(this.currentPage);
    },
    categoryBind(id) {
      this.categoryProduct = id;
    },
    toAdd() {
      this.$router.push("/new_product");
    },
    goToDetail(id) {
      this.$router.push(`/detail_product/${id}`);
    },
    setAltImg(event) {
      event.target.src = "/image/default.jpg";
    },
    getImage(image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`;
    },
    productSet(page) {
      this.currentPage = page;
      this.product = [];
      this.isLoading = true;
      this.isError = false;
      this.errorMsg = "";
      const data = {
        category: this.categoryProduct,
        page: page ? page : 1,
        order: this.order,
        orderMethod: this.orderMethod,
      };
      this.setProduct(data)
        .then((res) => {
          console.log(res);
          this.product = res.data.data;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.isError = true;
          this.errorMsg = err.response.data.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {},
  mounted() {
    window.scrollTo(0, 0);
    this.productSet();
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/category`, {
      headers: {
        token: this.$store.getters["auth/getToken"],
      },
    })
      .then((res) => (this.category = res.data.data))
      .catch((err) => console.error(err));
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style src="../assets/css/style.css"></style>
<style scoped>
.image-coupons {
  height: 100% !important;
}
.card-img-top {
  position: absolute;
  top: -75px;
  left: 50%;
  margin-left: -75px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
}
.card-product {
  margin-top: 75px;
  padding-top: 75px;
}
</style>
<style scoped src="../assets/css/ownstyle_rzid.css"></style>
