<template>
  <div>
    <div class="wallpaper" />
    <div class="register-page">
      <div class="navbar">
        <p>Coffee Shop</p>
        <h2>Sign Up</h2>
      </div>
      <div class="content-form">
        <form action="" @submit.prevent="signUp()">
          <p>Email Adress:</p>
          <input
            type="email"
            placeholder="Enter your email adress"
            v-model="form.email"
          />
          <p>Password:</p>
          <input
            type="password"
            placeholder="Enter your password"
            v-model="form.password"
          />
          <p>Phone Number:</p>
          <input
            type="number"
            placeholder="Enter your phone number"
            v-model="form.phone"
          />
          <button type="submit" class="sign">Sign Up</button>
          <button type="button" class="sign-g">
            <img
              src="../assets/icons/google-color.png"
              style="width: 25px; height: 25px"
            />
            Sign up with Google
          </button>
          <p>Already have an account?</p>
          <router-link class="btn" to="/login">Login Here</router-link>
        </form>
      </div>
      <div class="footer">Coffee Shop</div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Alert from '../helper/swal'
import { mapActions } from 'vuex'
import Footer from '../components/Footer'
export default {
  mixins: [Alert],
  data: () => {
    return {
      form: {
        email: '',
        password: '',
        phone: null,
        access: 1
      }
    }
  },
  methods: {
    ...mapActions({
      sendRegister: 'auth/signUp'
    }),
    signUp () {
      this.sendRegister(this.form).then(() => {
        this.toastSuccess('Register Success! <p><small>Check your email for verification</small></p>')
      }).catch(err => this.toastDanger(err))
    }
  },
  components: {
    Footer
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.wallpaper {
  position: absolute;
  left: 0;
  background-image: url("../assets/Login-Wp.png");
  height: 100%;
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.register-page {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
}
.navbar {
  display: flex;
  padding: 20px;
}
.navbar p {
  font-size: 20px;
}
.navbar h2 {
  position: absolute;
  right: 20px;
}
.content-form {
  width: 100%;
  height: 430px;
}
.content-form form {
  width: 80%;
  padding: 10px;
  transform: translate(15%, 0);
}
.content-form form input {
  width: 100%;
  height: 35px;
  border-radius: 10px 10px 10px 10px;
  border: 0.4px solid #000000;
}
.content-form form .sign {
  margin-top: 10px;
  width: 100%;
  height: 35px;
  border-radius: 10px 10px 10px 10px;
  border: none;
  background: #ffba33;
}
.content-form form .sign-g {
  margin-top: 10px;
  width: 100%;
  height: 35px;
  border-radius: 10px 10px 10px 10px;
  border: none;
  background: #ffffff;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}
.content-form form .btn {
  margin-top: 10px;
  width: 100%;
  height: 35px;
  border-radius: 10px 10px 10px 10px;
  border: none;
  background: #6a4029;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
  color: #ffffff;
}
.footer {
  position: absolute;
  bottom: 0;
  height: calc(100% - 520px);
  width: 100%;
  background: #f8f8f8;
}
</style>