<template>
    <div class="mobile-nav">
        <div class="logo-navbar-brand">
            <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
        </div>
        <div class="logo-navbar-toggler" @click="switchNavBar">
            <span></span><span></span><span></span>
        </div>
    </div>

    <header class="header-area" :class="headerExpand?'bp-xs-on':''">
        <div class="nav-close" @click="showFilters">
            <i class="fa-light fa-filter"></i>
        </div>

        <div class="nav-close" @click="switchNavBar">
            <i class="fa fa-close" aria-hidden="true"></i>
        </div>
        <div class="logo">
            <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
        </div>
        <nav class="amado-nav">
            <ul>
                <li class="active"><a @click="this.$router.push('/home')">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a @click="this.$router.push('/product')">product</a></li>
                <li><a @click="this.$router.push('/cart')">Cart</a></li>
                <li><a @click="this.$router.push('/cart')">Checkout</a></li>
                <li><a @click="this.$router.push('/auth')">You</a><a @click="logout">Get out</a></li>
            </ul>
        </nav>
        <div class="amado-btn-group mt-30 mb-100">
            <a href="#" class="btn amado-btn mb-15">%Discount%</a>
            <a href="#" class="btn amado-btn active">New this week</a>
        </div>
        <div class="cart-fav-search mb-100">
            <a href="cart.html" class="cart-nav"><img src="img/core-img/cart.png" alt=""> Cart <span>(0)</span></a>
            <a href="#" class="fav-nav"><img src="img/core-img/favorites.png" alt=""> Favourite</a>
            <a href="#" class="search-nav" @click='action'><img src="img/core-img/search.png" alt=""> Search</a>
        </div>
        <div class="social-info d-flex justify-content-between">
            <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
    </header>
</template>

<script>
    import {engine} from "../engine/engine"
export default {
  name: 'AppHeader',

    props: {
        switchFilters:{
            type: Function
        },
        action: {
            type: Function
        }
    },
    data(){
      return{
          headerExpand:false
      }
    },
    methods:{
        logout(){

            engine.clearUserData()
        },
       switchNavBar(){
           this.headerExpand = !this.headerExpand;
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .header-area {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        position: relative;
        z-index: 1;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 320px;
        flex: 0 0 320px;
        width: 320px;
        max-width: 320px;
        background-color: #fff;
        padding: 60px 75px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 280px;
            flex: 0 0 280px;
            width: 280px;
            max-width: 280px;
            padding: 50px; } }
    @media only screen and (max-width: 767px) {
        .header-area {
            -webkit-transition-duration: 500ms;
            transition-duration: 500ms;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 320px;
            flex: 0 0 320px;
            width: 320px;
            max-width: 320px;
            position: fixed;
            z-index: 4000;
            top: 0;
            left: -350px;
            height: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
            display: block; } }
    .header-area.bp-xs-on {
        left: 0; }
    .header-area .nav-close {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        right: 15px;
        background-color: red;
        text-align: center;
        color: #fff;
        line-height: 40px;
        font-size: 12px;
        cursor: pointer;
        background-color: #fbb710;
        display: none; }
    @media only screen and (max-width: 767px) {
        .header-area .nav-close {
            display: block; } }
    .header-area .nav-close:hover {
        background-color: #131212; }
    .header-area .logo {
        margin-bottom: 100px;
        display: block; }
    .header-area .amado-nav li{
        list-style: none;
    }
    .header-area .amado-nav li a {
        font-size: 14px;
        text-transform: uppercase;
        position: relative;
        z-index: 1;
        padding: 20px 0;
        display: block;
        line-height: 0.9;
        color: #131212;
        font-weight: normal; }
    .header-area .amado-nav li a::after {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        width: 30px;
        height: 3px;
        position: absolute;
        top: 50%;
        margin-top: -1.5px;
        left: -150px;
        background-color: #fbb710;
        z-index: 10;
        content: ''; }
    .header-area .amado-nav li a:hover, .header-area .amado-nav li a:focus {
        color: #fbb710; }
    .header-area .amado-nav li:hover a::after, .header-area .amado-nav li:focus a::after {
        left: -75px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area .amado-nav li:hover a::after, .header-area .amado-nav li:focus a::after {
            left: -50px; } }
    .header-area .amado-nav li.active a::after {
        left: -75px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area .amado-nav li.active a::after {
            left: -50px; } }
    .header-area .amado-btn-group .amado-btn {
        width: 160px;
        display: block; }
    .header-area .cart-fav-search a {
        display: block;
        text-transform: uppercase;
        font-size: 16px;
        padding: 15px 0;
        color: #131212;
        line-height: 1; }
    .header-area .cart-fav-search a .search-nav {
        padding-bottom: 0; }
    .header-area .cart-fav-search a span {
        color: #9e9e9e; }
    .header-area .cart-fav-search a img {
        margin-right: 10px; }
    .header-area .cart-fav-search a:hover, .header-area .cart-fav-search a:focus {
        color: #fbb710; }
    .header-area .social-info a {
        color: #b5b5b5;
        display: inline-block; }
    .header-area .social-info a i {
        font-size: 18px; }
    .header-area .social-info a:hover, .header-area .social-info a:focus {
        color: #fbb710; }
    @media only screen and (max-width: 767px) {
        .header-area .social-info {
            margin-bottom: 75px; } }
    .mobile-nav {
        position: fixed;
        width: 100%;
        height: 70px;
        background-color: #fff;
        z-index: 3000;
        top: 0;
        left: 0;
        right: 0;
        padding: 0.5em 2em;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -ms-grid-row-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.15);
        display: none; }
    @media only screen and (max-width: 767px) {
        .mobile-nav {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex; } }
    .mobile-nav .amado-navbar-brand {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70px;
        flex: 0 0 70px;
        max-width: 70px; }
    .mobile-nav .logo-navbar-toggler a {
        display: block;
        max-width: 70px; }
    .mobile-nav .logo-navbar-toggler {
        cursor: pointer; }
    .mobile-nav .logo-navbar-toggler span {
        width: 28px;
        height: 3px;
        background-color: #fbb710;
        display: block;
        margin-bottom: 5px;
        border-radius: 2px; }

    .mobile-nav .logo-navbar-toggler span:last-child {
        margin-bottom: 0; }
</style>
