<template>
    <div class="cart-table-area section-padding-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="cart-title mt-50">
                        <h2>Shopping Cart</h2>
                    </div>

                    <div class="cart-table clearfix">
                        <table class="table table-responsive">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="cart_product_img">
                                    <a href="#"><img src="img/bg-img/cart1.jpg" alt="Product"></a>
                                </td>
                                <td class="cart_product_desc">
                                    <h5>White Modern Chair</h5>
                                </td>
                                <td class="price">
                                    <span>$130</span>
                                </td>
                                <td class="qty">
                                    <div class="qty-btn d-flex">
                                        <p>Qty</p>
                                        <div class="quantity">
                                            <span class="qty-minus"
                                                  onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
                                                    class="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" class="qty-text" id="qty" step="1" min="1" max="300"
                                                   name="quantity" value="1">
                                            <span class="qty-plus"
                                                  onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
                                                    class="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="cart_product_img">
                                    <a href="#"><img src="img/bg-img/cart2.jpg" alt="Product"></a>
                                </td>
                                <td class="cart_product_desc">
                                    <h5>Minimal Plant Pot</h5>
                                </td>
                                <td class="price">
                                    <span>$10</span>
                                </td>
                                <td class="qty">
                                    <div class="qty-btn d-flex">
                                        <p>Qty</p>
                                        <div class="quantity">
                                            <span class="qty-minus"
                                                  onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
                                                    class="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" class="qty-text" id="qty2" step="1" min="1" max="300"
                                                   name="quantity" value="1">
                                            <span class="qty-plus"
                                                  onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
                                                    class="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="cart_product_img">
                                    <a href="#"><img src="img/bg-img/cart3.jpg" alt="Product"></a>
                                </td>
                                <td class="cart_product_desc">
                                    <h5>Minimal Plant Pot</h5>
                                </td>
                                <td class="price">
                                    <span>$10</span>
                                </td>
                                <td class="qty">
                                    <div class="qty-btn d-flex">
                                        <p>Qty</p>
                                        <div class="quantity">
                                            <span class="qty-minus"
                                                  onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
                                                    class="fa fa-minus" aria-hidden="true"></i></span>
                                            <input @click="basketMethods.basketAddOne" type="number" class="qty-text" id="qty3" step="1" min="1" max="300"
                                                   name="quantity" value="1">
                                            <span class="qty-plus"
                                                  onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
                                                    class="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <AppCardTotal/>
            </div>
        </div>

    </div>

</template>

<script>
    import {AppCardTotal} from "./mini_components"

    export default {
        name: 'AppBasket',
        components: {AppCardTotal},
        inject:["basketMethods"],
        props: {
            msg: String
        },
        methods:{
            searchClick(){
                console.log("click")
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cart-table-area {
        position: relative;
        z-index: 1;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(95% - 320px);
        flex: 0 0 calc(95% - 320px);
        width: calc(95% - 320px);
        max-width: calc(95% - 320px); }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .cart-table-area {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 320px);
            flex: 0 0 calc(100% - 320px);
            width: calc(100% - 320px);
            max-width: calc(100% - 320px); } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
         .cart-table-area {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 280px);
            flex: 0 0 calc(100% - 280px);
            width: calc(100% - 280px);
            max-width: calc(100% - 280px); } }
    @media only screen and (max-width: 767px) {
         .cart-table-area {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            width: 100%;
            max-width: 100%;
            padding-top: 0; } }
     .cart-table-area .cart-title h2 {
        font-size: 30px;
        margin-bottom: 30px;
        color: #242424; }
     .cart-table-area table thead {
        width: 100%;
        display: block; }
     .cart-table-area table thead tr {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 40px;
        background-color: #f5f7fa; }
     .cart-table-area table thead tr th {
        border-top: none;
        border-bottom: none;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        width: 25%;
        max-width: 25%;
        font-size: 12px;
        color: #242424;
        text-transform: capitalize;
        font-weight: 400; }
     .cart-table-area table tbody {
        width: 100%;
        display: block; }
     .cart-table-area table tbody tr {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -ms-grid-row-align: center;
        align-items: center;
        width: 100%; }
    .cart-table-area table tbody tr td {
        border: none;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        width: 25%;
        max-width: 25%; }
     .cart-table-area table tbody tr td h5 {
        font-size: 16px;
        color: #252525; }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
         .cart-table-area table tbody tr td h5 {
            font-size: 14px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
         .cart-table-area table tbody tr td h5 {
            font-size: 14px; } }
    @media only screen and (max-width: 767px) {
         .cart-table-area table tbody tr td h5 {
            font-size: 12px; } }
     .cart-table-area table tbody tr td .qty-btn p {
        margin-bottom: 0;
        line-height: 40px;
        height: 40px;
        padding: 0 15px;
        background-color: #f5f7fa;
        color: #242424;
        font-size: 14px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
         .cart-table-area table tbody tr td .qty-btn p {
            padding: 0 10px; } }
     .cart-table-area table tbody tr td .qty-btn .quantity {
        position: relative;
        z-index: 1; }
     .cart-table-area table tbody tr td .qty-btn .quantity input {
        text-align: center;
        background-color: #f5f7fa;
        height: 40px;
        width: 60px;
        border: none;
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        appearance: textfield;
        color: #242424;
        font-size: 14px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
         .cart-table-area table tbody tr td .qty-btn .quantity input {
            width: 45px; } }
     .cart-table-area table tbody tr td .qty-btn .quantity .qty-plus {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 40px;
        width: 20px;
        text-align: center;
        height: 40px;
        cursor: pointer;
        color: #242424;
        font-size: 10px; }
     .cart-table-area table tbody tr td .qty-btn .quantity .qty-minus {
        position: absolute;
        top: 0;
        right: 40px;
        line-height: 40px;
        width: 20px;
        height: 40px;
        text-align: center;
        cursor: pointer;
        color: #242424;
        font-size: 10px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
         .cart-table-area table tbody tr td .qty-btn .quantity .qty-minus {
            right: 30px; } }

</style>
