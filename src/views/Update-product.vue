<template>
  <div>
    <Navbar class="sticky-top" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-5">
          <img src="../assets/Login-Wp.png" alt="" /><button class="trash">
            <b-icon icon="trash"></b-icon>
          </button>
          <div class="info">
            <p>Delivery only on Monday to friday at 1 - 7 pm</p>
          </div>
        </div>
        <div class="col-lg-7">
          <h3>COLD BREW</h3>
          <hr />
          <h5>IDR 30.000</h5>
          <hr />
          <div class="info-product">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              beatae voluptatum, repudiandae natus laborum facilis inventore,
              quae aliquid voluptatibus suscipit quo nobis. Quod aliquid
              veritatis, repudiandae asperiores ab repellat vel aliquam! Sint,
              cum. Esse a repellat laborum delectus nihil reprehenderit? Illum
              ullam ipsa nemo blanditiis assumenda sed sequi doloribus quibusdam
              facere commodi inventore non, tempora doloremque incidunt libero
              excepturi, praesentium porro aliquid distinctio et impedit omnis
              alias. Ab eum quidem recusandae odit fugiat quibusdam beatae sequi
              vel vitae eligendi? Corporis magnam harum dolorem nihil aliquam,
              sunt qui voluptatibus dolore illo maxime blanditiis perferendis
              nostrum fugiat repudiandae vitae nisi sint aliquid.
            </p>
          </div>
          <hr />
          <select name="" id="">
            <option value="">Select Size</option>
          </select>
          <select name="" id="">
            <option value="">Select Delivery Methods</option>
          </select>
          <div class="confirm">
            <div class="auto-text">
              <button
                style="
                  border-top-left-radius: 10px;
                  border-bottom-left-radius: 10px;
                "
              >
                +
              </button>
              <p>0</p>
              <button
                style="
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                -
              </button>
            </div>
            <button class="add">Add to chart</button>
          </div>
          <button class="save">Save change</button>
        </div>
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
    }
}
</script>

<style scoped>
.col-lg-5 img {
  width: 400px;
  height: 500px;
}
.col-lg-5 p {
  width: 250px;
  margin-top: 50px;
}
.col-lg-5 .trash {
  position: absolute;
  background: #fff;
  width: 40px;
  height: 40px;
  border: 5px solid #ffba33;
  border-radius: 20px 20px;
  transform: translate(-140%, 40%);
}
.col-lg-7 .info-product {
  width: 100%;
  height: 200px;
  font-size: 12px;
}
.col-lg-7 select {
  margin-top: 10px;
  width: 100%;
  height: 50px;
}
.col-lg-7 .confirm {
  display: flex;
}
.col-lg-7 .auto-text {
  margin-top: 20px;
  display: flex;
  border: 1px solid black;
  width: 200px;
  height: 50px;
  border-radius: 10px 10px;
}
.col-lg-7 .auto-text p {
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-lg-7 .auto-text button {
  border: none;
  width: 70px;
}
.col-lg-7 .confirm .add {
  margin-top: 20px;
  margin-left: 20px;
  width: 65%;
  height: 50px;
  border: none;
  border-radius: 10px 10px;
}
.col-lg-7 .save {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px 10px;
}
</style>
