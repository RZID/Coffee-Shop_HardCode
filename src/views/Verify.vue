<template>
  <div>
    <div class="body">
      <div class="d-flex h-100 justify-content-center">
        <div class="align-self-center text-center">
          <h3 class="">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </h3>
          <h3>Loading...</h3>
          <p class="text-muted">Verifying your account</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import Alert from '../helper/swal'
export default {
  mixins: [Alert],
  mounted () {
    Axios.get(`${process.env.VUE_APP_BACKEND}/api/verify/${this.$route.params.token}`).then(() => {
      this.toastSuccess('Your account has been activated')
      this.$router.push('/')
    }).catch((err) => {
      this.alertDanger(err.response.data.message)
      this.$router.push('/')
    })
  }
}
</script>
<style scoped>
.body {
  height: 100vh !important;
}
</style>
