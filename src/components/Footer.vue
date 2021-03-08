<template>
  <div class="footer shadow-lg">
    <div
      class="container-md justify-content-start text-center pt-5 mx-md-5 mx-2 row"
    >
      <div class="col-md-8 d-flex flex-md-column flex-row">
        <div
          class="mb-md-4 mb-0 d-flex justify-content-center justify-content-md-start align-items-center align-self-start flex-md-row flex-column"
        >
          <img
            class="ml-2"
            width="35px"
            height="40px"
            src="../assets/icons/coffee 1.png"
            alt="coffe"
          /><span>Coffee Shop</span>
        </div>
        <div class="list text-left text-sm-center text-md-left ml-4 ml-md-0">
          <div>
            <h5>Team:</h5>
            <ul>
              <li
                class="d-flex justify-content-start justify-content-sm-center justify-content-md-start"
              >
                Ramadhanu
                <div class="d-none d-sm-block ml-1">
                  (Project Owner || Frontend)
                </div>
              </li>
              <li
                class="d-flex justify-content-start justify-content-sm-center justify-content-md-start"
              >
                Rizaldi
                <div class="d-none d-sm-block ml-1">
                  (Developer || Frontend)
                </div>
              </li>
              <li
                class="d-flex justify-content-start justify-content-sm-center justify-content-md-start"
              >
                Fadella
                <div class="d-none d-sm-block ml-1">(Developer || Backend)</div>
              </li>
              <li
                class="d-flex justify-content-start justify-content-sm-center justify-content-md-start"
              >
                Ferdy
                <div class="d-none d-sm-block ml-1">(Developer || Backend)</div>
              </li>
            </ul>
          </div>
          <div
            class="d-flex justify-content-end justify-content-sm-center justify-content-md-start"
          >
            <b-icon-twitter class="icon mr-3"></b-icon-twitter>
            <b-icon-instagram class="icon mr-3"></b-icon-instagram>
            <b-icon-facebook class="icon mr-3"></b-icon-facebook>
          </div>
          <div
            style="color: lightgrey"
            class="mt-2 d-flex justify-content-center justify-content-md-start"
          >
            &copy;Hard_Code Team
          </div>
        </div>
      </div>
      <div class="col-2 d-none d-md-block">
        <h5 class="mb-4">Product</h5>
        <ul>
          <li class="mb-2">Download</li>
          <li class="mb-2">Pricing</li>
          <li class="mb-2">Locations</li>
          <li class="mb-2">Countries</li>
          <li class="mb-2">Blog</li>
        </ul>
      </div>
      <div class="col-2 d-none d-md-block">
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
  background-color: #fff !important;
  height: 300px;
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
@media (min-width: 768px) {
  .footer {
    height: 400px;
  }
}
</style>