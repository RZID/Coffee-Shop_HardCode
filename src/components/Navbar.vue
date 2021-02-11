<template>
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
          <router-link to="" class="navigation-content">Your Cart</router-link>
          <router-link to="" class="navigation-content">History</router-link>
        </div>
        <form class="d-flex" v-if="getToken">
          <div class="row">
            <div class="col-8">
              <div class="input-group bg-gray px-2">
                <img src="/icons/search.svg" alt="" />
                <input
                  type="text"
                  class="form-control search"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="col">
              <img src="/icons/chat.svg" class="mx-2" />
            </div>
            <div class="col">
              <img
                class="rounded-c"
                src="image/default.png"
                height="30px"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </form>
        <form class="d-flex" v-else>
          <router-link class="btn login" to="/login">Login</router-link>
          <router-link class="btn signup" to="/register">Signup</router-link>
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getToken: 'auth/getToken'
    })
  }
}
</script>

<style scoped>
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
</style>
