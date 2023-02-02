<template>
  <div class="col-12 col-lg-4">
    <div class="cart-summary">
      <h5>Cart Total</h5>
      <ul class="summary-table">
        <li><span>subtotal:</span> <span>$140.00</span></li>
        <li><span>delivery:</span> <span>Free</span></li>
        <li><span>total:</span> <span>$140.00</span></li>
      </ul>
      <div class="cart-btn mt-100">
        <a href="cart.html" class="btn amado-btn w-100">Checkout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppScroll',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart-summary {
    background-color: #f5f7fa;
    margin-top: 118px;
    position: relative;
    z-index: 1;
    padding: 30px 20px; }
  .cart-summary h5 {
    font-size: 18px;
    margin-bottom: 0; }
  .cart-summary .summary-table {
    margin-top: 30px; }
  .cart-summary .summary-table li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 30px;
    text-transform: capitalize; }
   .cart-summary .summary-table li span {
    color: #6b6b6b;
    font-size: 14px; }
   .cart-summary .payment-method label {
    font-size: 14px;
    color: #6b6b6b;
    font-weight: 400;
    margin-bottom: 15px; }
</style>
