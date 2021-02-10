<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
  *{
    padding: 0;
    margin: 0;
    font-family: 'Rubik';    
  }
  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-track{
    background: #e5e5e5;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #5e5e5e;
    border-radius: 20px;
  }
</style>
