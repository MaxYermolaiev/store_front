<template>
  <section class="newsletter-area section-padding-100-0">
    <div class="container">
      <div class="row align-items-center">
        <!-- Newsletter Text -->
        <div class="col-12 col-lg-6 col-xl-7">
          <div class="newsletter-text mb-100">
            <h2>Subscribe for a <span>25% Discount</span></h2>
            <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
          </div>
        </div>
        <!-- Newsletter Form -->
        <div class="col-12 col-lg-6 col-xl-5">
          <div class="newsletter-form mb-100">
            <form action="#" method="post">
              <input type="email" name="email" class="nl-email" placeholder="Your E-mail">
              <input type="submit" value="Subscribe">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppSubscribe',
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
  .newsletter-area {
    position: relative;
    z-index: 1;
    background-color: #3c3c3c; }
  .newsletter-area .newsletter-text {
    position: relative;
    z-index: 1; }
  .newsletter-area .newsletter-text h2 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #fff; }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .newsletter-area .newsletter-text h2 {
      font-size: 30px; } }
  @media only screen and (max-width: 767px) {
    .newsletter-area .newsletter-text h2 {
      font-size: 30px; } }
  .newsletter-area .newsletter-text h2 span {
    color: #fbb710; }
  .newsletter-area .newsletter-text p {
    color: #b3b1b1;
    margin-bottom: 0; }
  .newsletter-area .newsletter-form form {
    position: relative;
    z-index: 1; }
  .newsletter-area .newsletter-form form input[type="email"] {
    width: 100%;
    height: 50px;
    background-color: #fff;
    color: #afafaf;
    font-size: 14px;
    font-style: italic;
    border: none;
    padding: 0 30px; }
  .newsletter-area .newsletter-form form input[type="submit"] {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    height: 50px;
    background-color: #fbb710;
    color: #fff;
    font-size: 14px;
    padding: 0 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    border: none; }
  .newsletter-area .newsletter-form form input[type="submit"]:hover, .newsletter-area .newsletter-form form input[type="submit"]:focus {
    background-color: #fbb710;
    color: #fff; }

</style>
