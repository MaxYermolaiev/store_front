<template>
    <div class="search_box">

    </div>

</template>

<script>
export default {
  name: 'AppSearch',
  props: {
  data(){

  }
  },
    methods:{

    },
    computed:{

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
