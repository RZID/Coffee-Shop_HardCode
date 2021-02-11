<template>
    <div>
        <Navbar class="sticky-top"/>
        <div class="container-fluid">
            <div class="row p-0">
                <div class="col-lg-5 p-0">
                    <div class="picture">
                        <img class="image" src="../assets/TM.png" alt="default-image">
                    </div>
                    <div class="confirm">
                        <button class="take">Take a picture</button>
                        <button class="choose">Choose from gallery</button>
                    </div>
                    <div class="delivery">
                        <h4>Delivery Hour:</h4>
                        <select name="" id="">
                            <option value="">Select start hour</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select end hour</option>
                        </select>
                    </div>
                    <div class="stock">
                        <h4>Input stock:</h4>
                        <select name="" id="">
                            <option value="">Input Stock</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-7 p-5">
                    <div class="form">
                        <h4>Name:</h4>
                        <input type="text" placeholder="Type product name">
                        <h4>Price:</h4>
                        <input type="text" placeholder="Type the price">
                        <h4>Description:</h4>
                        <input type="text" placeholder="Describe your product">
                        <div class="size-selection">
                            <h4>Input product size:</h4>
                            <p>Click size you want to use this product</p>
                            <div class="size">
                                <button>R</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>250 gr</button>
                                <button>300 gr</button>
                                <button>500 gr</button>
                            </div>
                        </div>
                        <div class="delivery-selection">
                            <h4>Input delivery methods:</h4>
                            <p>click methods you want to use for this product</p>
                            <div class="delivery">
                                <button>Home Delivery</button>
                                <button>Dine in</button>
                                <button>Take away</button>
                            </div>
                            <button class="save">Save Product</button>
                            <button class="cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        height: 2200px;
    }
    .col-lg-5{
        position: relative;
        width: 100%;
        height: 400px;
    }
    .col-lg-5 .picture{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        width: 35%;
        height: 200px;
    }
    .col-lg-5 .image{
        width: 200px;
        height: 200px;
        border: 1px solid black;
        border-radius: 100px 100px 100px 100px;
    }
    .col-lg-5 .confirm{
        transform: translateX(20%);
    }
    .col-lg-5 .confirm .take{
        margin-top: 20px;
        width: 60%;
        height: 60px;
        border: none;
        border-radius: 15px 15px 15px 15px;
        background: #0B132A;
        color: #FFF;
    }
    .col-lg-5 .confirm .choose{
        margin-top: 20px;
        width: 60%;
        height: 60px;
         border: none;
        border-radius: 15px 15px 15px 15px;
        background: #ffba33;
    }
    .col-lg-5 .delivery{
        margin-top: 100px;
        transform: translateX(10%);
    }
    .col-lg-5 .delivery select{
        margin-top: 20px;
        width: 80%;
        height: 60px;
    }
    .col-lg-5 .stock{
        margin-top: 50px;
        transform: translateX(10%);
    }
    .col-lg-5 .stock select{
        margin-top: 20px;
        width: 80%;
        height: 60px;
    }
    .col-lg-7{
        position: relative;
        border-left: 1px solid #000;
    }
    .col-lg-7 .form{
        line-height: 1.2;
    }
    .col-lg-7 .form input{
        width: 80%;
        height: 50px;
        margin-bottom: 20px;
    }
    .col-lg-7 .form .size-selection{
        margin-top: 40px;
    }
    .col-lg-7 .form .size-selection .size button{
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 25px 25px 25px 25px;
        border: none;
    }
    .col-lg-7 .form .delivery-selection{
        margin-top: 20px;
    }
    .col-lg-7 .form .delivery-selection .delivery{
        display: flex;
    }
    .col-lg-7 .form .delivery-selection .delivery button{
        width: 200px;
        height: 60px;
        border: none;
        border-radius: 15px 15px;
        margin-right: 20px;
    }
    .col-lg-7 .form .save{
        margin-top: 20px;
        width: 100%;
        height: 80px;
        border: none;
        border-radius: 15px 15px;
        margin-right: 20px;
    }
    .col-lg-7 .form .cancel{
        margin-top: 20px;
        width: 100%;
        height: 80px;
        border: none;
        border-radius: 15px 15px;
        margin-right: 20px;
    }
</style>
