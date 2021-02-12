<template>
    <div>
        <div class="container-fluid">
            <div class="row p-0">
                <div class="col-lg-6 p-0">
                    <div class="bg"></div>
                </div>
                <div class="col-lg-6">
                    <div class="header">
                        <img src="../assets/icons/coffee 1.png" alt="">
                        <p>Coffee Shop</p>
                    </div>
                    <div class="body">
                        <h2>Forgot your password?</h2>
                        <p>Don't worry, we got your back</p>
                        <form action="">
                            <input type="text" placeholder="Enter your email adress to get link">
                            <button class="send">Send</button>
                        </form>
                        <p class="mt-3">Click here if you didn't receive any link in 2 minutes</p>
                        <div class="timers">
                            <button class="timer">01:52</button>
                        </div>
                        <button class="resend">Resend Link</button>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    components: {
        Footer
    }
}
</script>

<style scoped>
    .bg{
        position: absolute;
        left: 0;
        background-image: url("../assets/nani-williams-6PpLqUlCA0s-unsplash 1.png");
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .header{
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
        padding: 50px;
        margin-bottom: 50px;
    }
    .header img{
        width: 40px;
        height: 40px;
    }
    .header p{
        font-size: 20px;
        margin-left: 20px;
    }
    .body h2{
        display: flex;
        justify-content: center;
    }
    .body p{
        display: flex;
        justify-content: center;
    }
    .body input{
        width: 100%;
        height: 60px;
        border-radius: 20px;
    }
    .body .send{
        margin-top: 20px;
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 20px;
        background: #FFBA33;
    }
    .body .timers{
        display: flex;
        justify-content: center;
    }
    .body .timer{
        width: 80px;
        border: none;
        background: transparent;
    }
    .body .resend{
        margin-top: 20px;
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 20px;
        background: #6A4029;
        color: white;
    }
</style>
