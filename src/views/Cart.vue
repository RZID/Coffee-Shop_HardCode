<template>
    <div>
        <div class="payment-method">
            <Navbar/>
            <div class="container">
            <h1 class="check">Check out your item now!</h1>
                <div class="row">
                    <div class="col-lg-5 cart">
                        <div class="text">
                            <h3>Order Sumarry</h3>
                        </div>
                        <div class="product">
                            <div class="row mt-3">
                                <div class="col-lg-3">
                                    <img src="../assets/TM.png" alt="">
                                </div>
                                <div class="col-lg-5">
                                    <p>Hazelnut latte</p>
                                    <p>x1</p>
                                    <p>Regular</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-3">
                                    <img src="../assets/TM.png" alt="">
                                </div>
                                <div class="col-lg-5">
                                    <p>Hazelnut latte</p>
                                    <p>x1</p>
                                    <p>Regular</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-3">
                                    <img src="../assets/TM.png" alt="">
                                </div>
                                <div class="col-lg-5">
                                    <p>Hazelnut latte</p>
                                    <p>x1</p>
                                    <p>Regular</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-3">
                                    <img src="../assets/TM.png" alt="">
                                </div>
                                <div class="col-lg-5">
                                    <p>Hazelnut latte</p>
                                    <p>x1</p>
                                    <p>Regular</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-3">
                                    <img src="../assets/TM.png" alt="">
                                </div>
                                <div class="col-lg-5">
                                    <p>Hazelnut latte</p>
                                    <p>x1</p>
                                    <p>Regular</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-3">
                                    <img src="../assets/TM.png" alt="">
                                </div>
                                <div class="col-lg-5">
                                    <p>Hazelnut latte</p>
                                    <p>x1</p>
                                    <p>Regular</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>IDR 24.0</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="information">
                            <div class="row">
                                <div class="col-lg-6">SUBTOTAL</div>
                                <div class="col-lg-6">IDR 120.000</div>
                                <div class="col-lg-6">TAX & FEES</div>
                                <div class="col-lg-6">IDR 20.000</div>
                                <div class="col-lg-6">SHIPPING</div>
                                <div class="col-lg-6">IDR 10.000</div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-lg-4"><h2>TOTAL</h2></div>
                                <div class="col-lg-8"><h2>IDR 150.000</h2></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 payment">
                        <div class="header-adress">
                        <h4>Adress details</h4>
                        <button>edit</button>
                        </div>
                        <div class="adress-card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id!</p>
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat.</p>
                            <hr>
                            <p>0992907907230</p>
                        </div>
                        <h4 class="method-header">Payment method</h4>
                        <div class="payment-methods">
                            <div class="row">
                                <div class="col-lg-2">
                                    <input type="checkbox">
                                </div>
                                <div class="col-lg-10"><b-icon-credit-card/> Card</div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-lg-2">
                                    <input type="checkbox">
                                </div>
                                <div class="col-lg-10"><b-icon-wallet2/> Bank account</div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-lg-2">
                                    <input type="checkbox">
                                </div>
                                <div class="col-lg-10"><b-icon-box-seam/> Cash on delivery</div>
                            </div>
                        </div>
                        <button class="confirm">Confirm and Pay</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
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
    .payment-method{
        background-image: url('../assets/nathan-dumlao-zTZRZV86GhE-unsplash 1.png') ;
        background-size: cover;
        width: 100%;
        height: 900px;
    }
    .check{
        margin-top: 40px;
        width: 300px;
        color: white;
    }
    .cart{
        margin-top: 40px;
        width: 100%;
        height: 500px;
        background: white;
        border-radius: 25px;
    }
    .cart .text{
        padding: 25px;
        display: flex;
        justify-content: center;
    }
    .cart img{
        width: 100%;
    }
    .cart .product{
        line-height: 0.2;
        width: 100%;
        height: 230px;
        overflow: auto;
        overflow-x: hidden;
    }
    .payment{
        margin-left: 200px;
    }
    .payment .header-adress{
        display: flex;
        color: white;
    }
    .payment .header-adress button{
        position: absolute;
        right: 20px;
        border: none;
        color: white;
        background: transparent;
    }
    .payment .adress-card{
        background: white;
        padding: 10px;
        line-height: 1;
        border-radius: 20px;
    }
    .payment .method-header{
        color: white;
        margin-top: 40px;
    }
    .payment .payment-methods{
        background: white;
        height: 180px;
        line-height: 2;
        padding: 10px 10px 0 10px;
        border-radius: 20px;
    }
    .confirm {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 15px;
        color: white;
        background: chocolate;
    }
</style>
