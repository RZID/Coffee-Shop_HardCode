<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="background">
      <div id="user" class="container mt-5">
        <h2>User Profile</h2>
        <div class="row">
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-5 text-center mt-5">
                <img
                  class="cover"
                  :style="
                    'background-image:url(' +
                    imgUrl +
                    '),url(' +
                    getImage(userData.image) +
                    '), url(' +
                    getImage('default_photo.png') +
                    ')'
                  "
                />
                <div class="information text-center mt-2">
                  <h4>{{ userData.display_name }}</h4>
                  <p>{{ userData.email }}</p>
                </div>
                <div id="select">
                  <input
                    @input="setImage"
                    id="fileImage"
                    type="file"
                    hidden
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                  <button
                    class="btn-choose"
                    onclick="document.getElementById('fileImage').click();"
                  >
                    Choose Photo
                  </button>
                  <button
                    class="btn-remove"
                    v-if="userData.image != 'default_photo.png'"
                    @click="removePhoto()"
                  >
                    Remove Photo
                  </button>
                </div>
                <div class="mt-5">
                  <button class="btn-edit">Edit Password</button>
                </div>
                <div class="changes mt-5">Do you want to save the change?</div>
                <div id="save" class="mt-5">
                  <button class="btn-save" @click="save()">Save Change</button>
                  <button class="btn-cancel" @click="setUserData()">
                    Cancel
                  </button>
                </div>
                <div class="mt-5">
                  <button class="btn-logout">Logout</button>
                </div>
              </div>
              <div class="col-lg-7 position-relative">
                <h4>Contacts</h4>
                <div class="setData row">
                  <div class="col-md-8">
                    <p>Email address :</p>
                    <input
                      class="border-bottom form-control border-dark bg-white"
                      readonly
                      type="email"
                      v-model="userData.email"
                    />
                  </div>
                  <div class="col-md-4">
                    <p>Mobile number :</p>
                    <input
                      class="setLine border-bottom border-dark form-control"
                      type="number"
                      v-model="userData.phone"
                    />
                  </div>
                </div>
                <div class="setData row py-3">
                  <div class="col-md-8">
                    <p>Delivery address :</p>
                    <textarea
                      class="border-bottom border-dark w-100"
                      v-model="userData.address"
                    ></textarea>
                  </div>
                </div>
                <h4 class="mt-2">Details</h4>
                <div class="setData row">
                  <div class="col-md-8">
                    <p>Display Name :</p>
                    <input
                      type="text"
                      v-model="userData.display_name"
                      class="border-bottom border-dark form-control"
                    />
                  </div>
                  <div class="col-md-4">
                    <p>Birthdate</p>
                    <input
                      class="setLine border-bottom border-dark form-control"
                      type="date"
                      v-model="userData.birthdate"
                    />
                  </div>
                </div>
                <div class="setData row py-3">
                  <div class="col-md-8">
                    <p>First Name :</p>
                    <input
                      type="text"
                      class="border-bottom form-control border-dark"
                      v-model="userData.first_name"
                    />
                  </div>
                </div>
                <div class="setData row">
                  <div class="col-md-8">
                    <p>Last Name :</p>
                    <input
                      type="text"
                      class="border-bottom form-control border-dark"
                      v-model="userData.last_name"
                    />
                  </div>
                </div>
                <div class="gender text-center mt-5">
                  <button
                    :class="userData.gender == 0 ? 'active' : ''"
                    @click="setGender('0')"
                  ></button
                  >Male
                  <button
                    @click="setGender('1')"
                    :class="userData.gender == 1 ? 'active' : ''"
                  ></button
                  >Female
                </div>
                <div class="position-absolute testt w-100 row"></div>
              </div>
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
import Alert from '../helper/swal'
export default {
  mixins: [Alert],
  data: () => {
    return {
      userData: {},
      imgUrl: '',
      image: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    save () {
      console.log(this.userData)
      let data = new FormData()
      this.userData.phone ? data.append('phone', this.userData.phone) : ''
      this.userData.gender ? data.append('gender', this.userData.gender) : ''
      this.userData.birthdate ? data.append('birthdate', this.userData.birthdate) : ''
      this.userData.display_name ? data.append('display_name', this.userData.display_name) : ''
      this.userData.first_name ? data.append('first_name', this.userData.first_name) : ''
      this.userData.last_name ? data.append('last_name', this.userData.last_name) : ''
      this.userData.address ? data.append('address', this.userData.address) : ''
      if (this.image) {
        data.append('image', this.image)
      }
      Axios.patch(`${process.env.VUE_APP_BACKEND}/api/user/${this.userData.id}`, data, {
        headers: {
          'token': this.$store.getters['auth/getToken']
        }
      }).then(() => {
        this.setUserData()
        this.toastSuccess('Your profile was updated!')
      }).catch((err) => {
        this.toastDanger(err.response.message)
      })
    },
    setGender (code) {
      this.userData.gender = code
    },
    getImage (image) {
      return `${process.env.VUE_APP_BACKEND}/images/${image}`
    },
    removePhoto () {
      this.alertQuestion('Want to delete photo ?').then(() => {
        this.imgUrl = ''
        this.image = ''
        Axios.get(`${process.env.VUE_APP_BACKEND}/api/user/delete_photo/${this.userData.id}`, {
          headers: {
            'token': this.$store.getters['auth/getToken']
          }
        }).then(() => {
          this.setUserData()
          this.toastSuccess('Your profile was updated!')
        }).catch((err) => {
          console.error(err)
        })
      })
    },
    setImage (e) {
      this.image = ''
      const file = e.target.files[0]
      this.imgUrl = URL.createObjectURL(file)
      this.image = file
    },
    setUserData () {
      Axios.get(`${process.env.VUE_APP_BACKEND}/api/user/${this.$store.getters['auth/getUserData'].uid}`, {
        headers: {
          'token': this.$store.getters['auth/getToken']
        }
      }).then((res) => {
        this.userData = res.data.data[0]
      }).catch(err => console.error(err))
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.setUserData()
  }
}
</script>

<style scoped>
input::-webkit-inner-spin-button,
input::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
.active {
  background-color: #ffba33;
}
.cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
input:focus {
  box-shadow: none;
}
#user h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  color: #ffffff;
  text-shadow: 0px 6px 8px rgba(255, 255, 255, 0.26);
}
.background {
  background-image: url("../assets/backgroundProfile.png");
  position: absolute;
  width: 100%;
  height: 1500px;
  background-size: cover;
}
.col-lg-11 {
  margin-top: 40px;
  border-radius: 20px;
  width: 100%;
  /* height: 1050px; */
  height: 100%;
  padding: 20px;
  background-color: #f8f8f8;
}
.col-lg-5 img {
  width: 200px;
  height: 200px;
  border-radius: 200px;
}
#select button {
  margin: 6px;
}
.btn-choose {
  width: 207px;
  height: 44px;
  left: 239px;
  top: 594px;
  background: #ffba33;
  border-radius: 10px;
  border: none;
  color: #6a4029;
}
.btn-remove {
  width: 207px;
  height: 44px;
  left: 239px;
  top: 594px;
  background: #6a4029;
  border-radius: 10px;
  border: none;
  color: white;
}
.btn-edit {
  width: 207px;
  height: 60px;
  left: 239px;
  top: 735px;
  background: #ffffff;
  border: 1px solid #9f9f9f;
  box-sizing: border-box;
  border-radius: 20px;
  color: #6a4029;
}
.changes {
  font-size: 20px;
  color: #6a4029;
  padding: 0px 40px;
}
#save button {
  margin: 6px;
}
.btn-save {
  width: 207px;
  height: 60px;
  left: 239px;
  top: 926px;
  background: #6a4029;
  border-radius: 20px;
  border: none;
  color: white;
}
.btn-cancel {
  width: 207px;
  height: 60px;
  left: 239px;
  top: 926px;
  background: #ffba33;
  border-radius: 20px;
  border: none;
  color: #6a4029;
}
.btn-logout {
  width: 207px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #9f9f9f;
  box-sizing: border-box;
  border-radius: 20px;
  color: #6a4029;
}
.col-lg-7 {
  margin: 40px 0px 50px 0px;
  width: 100%;
  height: 925px;
  background-color: white;
  right: 30px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
}
.col-lg-7 h4 {
  font-size: 25px;
  color: #4f5665;
  padding: 20px 0px 20px 25px;
}
.setData .col-md-8 {
  padding-left: 40px;
}
.setData p {
  color: #9f9f9f;
  font-size: 20px;
}
.setData input {
  outline: 0;
  border: none;
}
.setData textarea {
  width: 80%;
  outline: 0;
  border: none;
}
.setData hr {
  width: 80%;
  border: 1px solid black;
  background-color: black;
}
.setLine {
  width: 90%;
}
.testt {
  background: #6a4029;
  box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.7);
  border-radius: 0px 0px 10px 10px;
  bottom: 0;
  height: 20px;
}
.gender button {
  border: 4px solid #9f9f9f;
  box-sizing: border-box;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 30px;
}
</style>
