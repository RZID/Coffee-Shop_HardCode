<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="jumbotron">
      <div class="container">
        <h1>Start Your Day with</h1>
        <h1>Coffee and Good Meals</h1>
        <p class="more-information">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you, Start your day with us for a bigger smile!
        </p>
        <button class="started">Get Started</button>
      </div>
    </div>
    <div class="container">
      <div class="fyi">
        <div class="staff">
          <b-icon class="pi" icon="person-fill" />
          <h4>90+</h4>
          <p>Staff</p>
        </div>
        <div class="store">
          <b-icon class="pi" icon="geo-alt-fill" />
          <h4>30+</h4>
          <p>Stores</p>
        </div>
        <div class="customer">
          <b-icon class="pi" icon="heart" />
          <h4>800+</h4>
          <p>Customers</p>
        </div>
      </div>
      <div class="content">
        <div class="map">
          <img src="../assets/TM.png" alt="Team Work" />
        </div>
        <div class="parag">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          suscipit illum porro aliquid tenetur vitae voluptatum et. Pariatur
          omnis similique, quae voluptatibus porro corporis magnam tempore.
          Repellendus porro odit a expedita temporibus esse odio et, ut, dolore
          minus libero doloribus suscipit aspernatur earum sunt nemo ducimus
          quibusdam inventore maxime totam dolorem natus? Iure, quaerat enim
          asperiores ipsum dolore ea autem porro pariatur quisquam earum
          nesciunt est libero cum culpa natus quas error quia, facere voluptates
          itaque alias iste qui. Mollitia ea, accusamus quas inventore, soluta
          explicabo cupiditate neque dignissimos et minima cum. Nobis, corporis
          pariatur modi veritatis similique corrupti dolorem?
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container sec-container">
        <div class="head">
          <br />
          <h2 class="mt-5">Here is People's Favorite</h2>
          <p>
            Let's choose and have a bit taste of people's favorite. It might be
            yours too!
          </p>
        </div>
        <div class="content2"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.jumbotron {
  background-image: url("../assets/jumbotron.png");
  width: 100%;
  height: 500px;
  background-size: cover;
}
.container h1 {
  color: #ffffff;
}
.more-information {
  color: #ffffff;
  width: 400px;
}
.started {
  background: #ffba33 !important;
  border-radius: 10px 10px 10px 10px;
  border: none;
  width: 200px;
  height: 40px;
  color: #6a4029;
}
.fyi {
  position: relative;
  z-index: 100;
  border-radius: 15px 15px 15px 15px;
  width: 100%;
  height: 170px;
  box-shadow: -10px 10px 50px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  transform: translate(0, -120px);
  display: flex;
  padding: 20px;
}
.fyi .staff {
  width: 30%;
  overflow: hidden;
  border-right: 3px solid #eeeff2;
  margin-right: 5%;
}
.fyi .staff .pi {
  padding: 10px;
  background: #ffba33;
  width: 50px;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
}
.fyi .store {
  width: 30%;
  overflow: hidden;
  border-right: 3px solid #eeeff2;
  margin-right: 5%;
}
.fyi .store .pi {
  padding: 10px;
  background: #ffba33;
  width: 50px;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
}
.fyi .customer {
  width: 30%;
  overflow: hidden;
}
.fyi .customer .pi {
  padding: 10px;
  background: #ffba33;
  width: 50px;
  height: 50px;
  border-radius: 25px 25px 25px 25px;
}
.content {
  position: relative;
  height: 500px;
}
.content .map {
  position: absolute;
  width: 50%;
  left: 0;
}
.content .parag {
  position: absolute;
  width: 50%;
  height: 450px;
  right: 0;
  background: #ffba33;
  padding: 20px;
}
.container-fluid {
  position: relative;
  width: 100%;
  background: #eeeff2;
}
.content2 {
  width: 100%;
  height: 500px;
}
.sec-container .head {
  text-align: center;
}
</style>
