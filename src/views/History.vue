<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="bg-coffee w-100">
      <div class="container py-5">
        <div class="text-center text-white">
          <h2>Let's see what you have bought</h2>
          <p>Select item to delete</p>
        </div>
        <div>Select All</div>
        <div class="row">
          <div class="col-4 bg-white rounded">
            <div class="row">
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Axios from 'axios'
export default {
  components: {
    Navbar
  },
  mounted () {
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/history/${this.$store.getters['auth/getUserData'].uid}`, {
      headers: {
        'token': this.$store.getters['auth/getToken']
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.error(err)
    })
  }
}
</script>
<style scoped>
.bg-coffee {
  height: 100vh;
  width: 100%;
  background-image: url("/image/tyler-nix-jE-27l7V3NU-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
