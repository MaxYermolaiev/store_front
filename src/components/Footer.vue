<template>
  <footer class="footer_area clearfix">
    <div class="container">
      <div class="row align-items-center">
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-4">
          <div class="single_widget_area">
            <!-- Logo -->
            <div class="footer-logo mr-50">
              <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
            </div>
            <!-- Copywrite Text -->
            <p class="copywrite">
              Copyright &copy;
              {{ fullYear }}
              All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by
              The Craft</p>
          </div>
        </div>
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-8">
          <div class="single_widget_area">
            <!-- Footer Menu -->
            <div class="footer_menu">
              <nav class="navbar navbar-expand-lg justify-content-end">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                <div class="collapse navbar-collapse" id="footerNavContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="shop.html">Shop</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="product-details.html">Product</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="cart.html">Cart</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String
  },
  computed:{
    fullYear(){
      return new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer_area {
    position: relative;
    z-index: 1;
    background-color: #252525;
    padding: 80px 0; }
  .footer_area .single_widget_area .copywrite {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 10px; }
  .footer_area .single_widget_area .copywrite a {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4); }
  .footer_area .single_widget_area .copywrite a:hover {
    color: #fff; }
  .footer_area .single_widget_area .footer_menu {
    position: relative;
    z-index: 1;
    margin-left: auto; }
  .footer_area .single_widget_area .footer_menu .navbar {
    padding: 0; }
  .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item .nav-link {
    padding: 10px 30px;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px; }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item .nav-link {
      padding: 10px 0; } }
  @media only screen and (max-width: 767px) {
    .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item .nav-link {
      padding: 10px 0; } }
  .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item .nav-link:hover, .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item .nav-link:focus {
    color: #fbb710; }
  .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item.active .nav-link {
    color: #fbb710; }
  .footer_area .single_widget_area .footer_menu .navbar-nav .nav-item:last-child .nav-link {
    padding-right: 0; }
</style>
