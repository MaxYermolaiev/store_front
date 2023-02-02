<template>
    <div class="wrapper">
        <AppProductNav/>
        <div class="row">
            <div class="col-12 col-lg-7">
                Product photo
            <img>
            <ol>

            </ol>
            </div>
            <div class="col-12 col-lg-5">
                <h4>Some cool product</h4>
                <div class="rate">
                    <i v-for="(itm) in 5" :key="itm" class="fa fa-star" :class="rate>=itm?'active':''"></i>
                </div>
                <div class="avaibility">
                    <i class="fa fa-circle" :class="(available===0)?'absence':(available>0&&available<10)?'low':''"></i>
                    {{(available>0&&available<10)?"Low stock":(available===0)?"Out of stock":"In stock"}}</div>
                <h6>Product description</h6>
                <div>{{description}}</div>sa
                <div class="col control">
                    <div class="cart_btn d-flex">
                        <p @click="btn_quantity_change('-')">-</p>
                        <input name="quantity" type="number" v-model="quantity">
                        <p @click="btn_quantity_change('+')">+</p>
                    </div>

                    <AppButton @action="add_to_card" text="Add to card"/>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {AppProductNav, AppButton} from "./mini_components"

    export default {
        name: 'AppProduct',
        components: {AppProductNav, AppButton},
        inject:["basketMethods"],
        data(){
            return {
                quantity:1,
                available:10,
                rate:Math.round(3.65),
                description:"Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.Если вы не создавали этот пароль для приложения \"MailRestore\", возможно, вашим аккаунтом пользуется кто-то ещё. Проверьте и защитите свой аккаунт прямо сейчас.",
                imgs:[]
            }
        },
        methods:{
            add_to_card(){
                this.basketMethods.add_to_basket()
            },
            btn_quantity_change(method){
                if(method==='-'){
                     if(this.quantity>=2){
                         this.quantity-=1;
                     }
                }else if(method==='+'){
                    if(this.quantity<this.available){
                        this.quantity+=1;
                    }
                }
            }
        },
        watch:{
            quantity(value){
                let numeric = +parseInt(value)
                if(typeof numeric==='number'){
                    if(value>this.available){
                        this.quantity=this.available;
                    }else{
                        this.quantity=value;
                    }
                }else{
                    this.quantity=1
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .rate .active{
         color: #fbb710;
     }
    .avaibility {
        margin-bottom: 0;
        font-size: 12px;
        color: #6b6b6b;
        line-height: 1; }
     .avaibility i {
        color: #20d34a;
        font-size: 12px; }
     .avaibility .absence {
         color: #bbbbbb;
         font-size: 12px; }
     .avaibility .low {
         color: #f6a400;
         font-size: 12px; }
      .quantity {
         position: relative;
         z-index: 1; }
     .wrapper .quantity input[name='quantity'] {
         text-align: center;
         background-color: #f5f7fa;
         height: 40px;
         width: 100px;
         border: none;
         -moz-appearance: textfield;
         -webkit-appearance: textfield;
         appearance: textfield;
         color: #959595; }

    .cart_btn{
        margin-bottom: 0;
        line-height: 40px;
    }
     .cart_btn p{
         margin-bottom: 0;
         width:30px;
         text-align: center;
         line-height: 40px;
         font-weight: 800;
         cursor:pointer;
         background-color: #f5f7fa;
     }
     .cart_btn p:hover{
         transition: 0.2s;
         background-color: #959595;
     }
      .cart_btn input {
         text-align: center;
         background-color: #f5f7fa;
         height: 40px;
         width: 70px;
         border: none;
         -moz-appearance: textfield;
         -webkit-appearance: textfield;
         appearance: textfield;
         color: #383838; }
      /*hide buttons control css*/
     .cart_btn input::-webkit-outer-spin-button,
     .cart_btn input::-webkit-inner-spin-button {
         -webkit-appearance: none;
         margin: 0;
     }
     .cart_btn input[type=number] {
         -moz-appearance: textfield;
     }
</style>
