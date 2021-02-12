<template>
  <div class="footer">
    <div class="container pt-5 mx-5 row">
      <div class="col-8">
        <div class="mb-4">
          <img src="../assets/icons/coffee 1.png" alt="coffe" /><span
            >Coffee Shop</span
          >
        </div>
        <div class="list">
          <h5>Team:</h5>
          <ul>
            <li>Ramadhanu (Project Owner || Frontend)</li>
            <li>Rizaldi (Developer || Frontend)</li>
            <li>Fadella (Developer || Backend)</li>
            <li>Ferdy (Developer || Backend)</li>
          </ul>
        </div>
        <div class="d-flex">
          <b-icon-twitter class="icon mr-3"></b-icon-twitter>
          <b-icon-instagram class="icon mr-3"></b-icon-instagram>
          <b-icon-facebook class="icon mr-3"></b-icon-facebook>
        </div>
        <div style="color: lightgrey" class="mt-2">&copy;Hard_Code Team</div>
      </div>
      <div class="col-2">
        <h5 class="mb-4">Product</h5>
        <ul>
          <li class="mb-2">Download</li>
          <li class="mb-2">Pricing</li>
          <li class="mb-2">Locations</li>
          <li class="mb-2">Countries</li>
          <li class="mb-2">Blog</li>
        </ul>
      </div>
      <div class="col-2">
        <h5 class="mb-4">Engage</h5>
        <ul>
          <li class="mb-2">Coffe Shop?</li>
          <li class="mb-2">FAQ</li>
          <li class="mb-2">About Us</li>
          <li class="mb-2">Privacy Policy</li>
          <li class="mb-2">Term of Service</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scope>
.footer {
  background-color: #FFF !important;
  height: 400px;
  padding: 50px 50px 50px 50px;
}
li {
  list-style: none;
  font-size: 12px;
  font-weight: 100;
}
.icon {
  background-color: #ffba33;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 7px;
}
.col-2 li {
  color: #bdbbbb;
}
span {
  font-size: 20px;
  margin-left: 15px;
}
</style>