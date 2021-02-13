<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Rubik";
}
.btn:focus {
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
  -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
  -o-box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0) !important;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #e5e5e5;
}
::-webkit-scrollbar-thumb {
  background-color: #5e5e5e;
  border-radius: 20px;
}
</style>
