<template>
    <div class="cart-table-area section-padding-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="checkout_details_area ">

                        <div class="cart-title">
                            <h2>Checkout</h2>
                        </div>

                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control" id="first_name" value="" placeholder="First Name" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control" id="last_name" value="" placeholder="Last Name" required>
                                </div>
                                <div class="col-12 mb-3">
                                    <input type="text" class="form-control" id="company" placeholder="Company Name" value="">
                                </div>
                                <div class="col-12 mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="Email" value="">
                                </div>
                                <div class="col-12 mb-3">
                                    <select class="w-100" id="country">
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ger">Germany</option>
                                        <option value="fra">France</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="bra">Brazil</option>
                                        <option value="cana">Canada</option>
                                    </select>
                                </div>
                                <div class="col-12 mb-3">
                                    <input type="text" class="form-control mb-3" id="street_address" placeholder="Address" value="">
                                </div>
                                <div class="col-12 mb-3">
                                    <input type="text" class="form-control" id="city" placeholder="Town" value="">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="text" class="form-control" id="zipCode" placeholder="Zip Code" value="">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input type="number" class="form-control" id="phone_number" min="0" placeholder="Phone No" value="">
                                </div>
                                <div class="col-12 mb-3">
                                    <textarea name="comment" class="form-control w-100" id="comment" cols="30" rows="10" placeholder="Leave a comment about your order"></textarea>
                                </div>

                                <div class="col-12">
                                    <div class="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2">
                                        <label class="custom-control-label" for="customCheck2">Create an accout</label>
                                    </div>
                                    <div class="custom-control custom-checkbox d-block">
                                        <input type="checkbox" class="custom-control-input" id="customCheck3">
                                        <label class="custom-control-label" for="customCheck3">Ship to a different address</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppNotFound'
    }
</script>
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
</style>