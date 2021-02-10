<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <p class="navbar-brand"><img src="../assets/icons/coffee 1.png"><span>Coffe Shop</span></p>
                <div class="navigation">
                    <router-link to="/" class="navigation-content">Home</router-link>
                    <router-link to="/product" class="navigation-content">Product</router-link>
                    <router-link to="" class="navigation-content">Your Cart</router-link>
                    <router-link to="" class="navigation-content">History</router-link>
                </div>
                <form class="d-flex">
                <router-link class="btn login" to="/login">Login</router-link>
                <router-link class="btn signup" to="/register">Signup</router-link>
                </form>
            </div>
         </nav>
    </div>
</template>

<style scoped>
    .navbar{
        background: #FFFFFF !important;
        border-bottom: 0.5px solid #5E5E5E;
    }
    .navbar-brand{
        margin-top: 15px;
    }
    .navbar-brand span{
        padding: 20px;
    }
    .navigation .navigation-content{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15px;
        color: #000000;
        margin-right: 30px;
        text-decoration: none;
    }
    .navigation .navigation-content:hover{
        font-weight: 900;
        color: #6A4029;
    }
    .login {
        margin-right: 10px;
        margin-top: 10px;
        width: 120px;
        height: 35px;
        border-radius: 25px 25px 25px 25px;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.3);
        background: #FFFFFF !important;
    }
    .signup{
        margin-top: 10px;
        width: 120px;
        height: 35px;
        border-radius: 25px 25px 25px 25px;
        border: none;
        background: #ffba33 !important;
    }
</style>
