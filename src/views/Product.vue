<template>
    <div>
        <Navbar class="sticky-top"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="head mb-5">
                        <br>
                        <h4 class="mt-1">Promo Today</h4>
                        <p class="mt-4">Coupons will be updated every weeks.</p>
                        <p>Check them out!</p>
                    </div>
                    <div class="content-coupons">
                        <div class="btn coupons"></div>
                        <div class="btn coupons"></div>
                        <div class="btn coupons"></div>
                        <div class="btn coupons"></div>
                    </div>
                    <button class="btn apply">Apply Coupons</button>
                    <div class="information">
                        <p>Terms and Condition</p>
                        <p>1. You can only apply 1 coupon per day</p>
                        <p>2. It only for dine in</p>
                        <p>3. Buy 1 get 1 only for new user</p>
                        <p>4. Should make member card to apply coupon</p>
                    </div>
                </div>
                <div class="col-lg-8 p-0">
                    <div class="navbar"></div>
                    <div class="menu">
                        <div class="product">
                            <div class="row">
                                <div class="col-lg-3 card p-0">
                                    <img src="../assets/TM.png" alt="">
                                    <div class="card-body">
                                    <h5 class="card-title">Nasi Goreng Bumbu Pedas</h5>
                                    <p class="card-text">IDR 27,000</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
    .row{
        width: 100%;
        height: 900px;
    }
    .col-lg-4{
        border-right: 1px solid #000;
    }
    .col-lg-4 .head{
        text-align: center;
    }
    .col-lg-4 .head p{
        line-height: 0;
    }
    .col-lg-4 .content-coupons .coupons{
        width: 100%;
        height: 100px;
        background: pink;
        border-radius: 25px 25px 25px 25px;
        margin-top: 10px;
    }
    .col-lg-4 .apply{
        margin-top: 70px;
        width: 100%;
        height: 50px;
        border-radius: 25px 25px 25px 25px;
        background: chocolate;
        color: #FFFFFF;
    }
    .col-lg-4 .information{
        margin-top: 50px;
        line-height: 0.7;
    }
    .col-lg-8{
        width: 100%;
        height: 800px;
    }
    .col-lg-8 .navbar{
        background: pink;
        width: 100%;
        height: 70px;
    }
    .col-lg-8 .menu .product{
        background: gray;
        width: 100%;
        height: 830px;
        padding: 40px;
    }
    .col-lg-8 .menu .product .row{
        margin-left: 0;
        height: 300px;
    }
    .col-lg-8 .menu .product .row .col-lg-3{
        position: relative;
        width: 40px !important;
        height: 220px;
        margin-top: 30px;
        border-radius: 40px 40px 40px 40px;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.4);
    }
    .col-lg-8 .menu .product .row .col-lg-3 img{
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 75px 75px 75px 75px;
        transform: translate(15%,-30%);
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.4);
    }
    .col-lg-8 .menu .product .row .col-lg-3 .card-body{
        text-align: center;
        position: absolute;
        bottom: 0;
    }
    .footer{
        background: #EEEFF2;
        width: 100%;
        height: 300px;
    }
</style>
