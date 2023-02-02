<template>
    <div class="cart-table-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="cart-title">
                        <h2>Restore user</h2>
                    </div>
                        <div class="row" v-if="step===1">
                            <div class="col-12 mb-3">
                                <input v-model="email" name="email" type="email" class="form-control" id="email" placeholder="Email">
                                <small class="info_red" v-if="errors.email&&email.length">{{(typeof this.errors.email!=="boolean")?this.errors.email:'Email does not suit requirements'}}</small>
                            </div>
                        </div>
                    <div class="row" v-if="step===2">
                        <div class="col-12 mb-3">
                            We sent confirmation code in Your email, check and type lower
                            <input @keydown="form_action($event)" name="text" type="text" class="form-control" id="text" placeholder="Confirmation code" value="">
                        </div>

                    </div>
                    <div class="row" v-if="step===3">
                        <div class="col-12 mb-3">
                            <input @keydown="form_action($event)" name="password" type="password" class="form-control"
                                   id="password" placeholder="New password" value="">
                            <small class="info_red" v-if="errors.email&&data.email.length">Email does not suit
                                requirements</small>
                        </div>
                        <div class="col-12 mb-3 ">
                            <input @keydown="form_action($event)" name="restore_text" type="email"
                                   class="form-control" id="password" placeholder="password" value="">
                            <small v-if="errors.password&&data.password!==undefined">Password does not suit
                                requirements</small>
                        </div>
                    </div>
                    <div class="button-control">
                        <AppButton @action="btn_action('restore')" :disabled="isDisabledRestore" :text="step===1?'Restore':step===2?'Verify code':'Set new password'" btn_style="active"/>
                        <AppButton @action="$router.go(-1)" text="Get back" btn_style="secondary"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {AppButton} from "./mini_components"
    import {engine} from "@/engine/engine";

    export default {

        name: 'AppRestore',
        inject: ["engine"],
        components: {AppButton},
        data() {
            return {
                step: 1,
                errors:{},
                code:'',
                email: '',
                password:''
            }
        },
        watch:{
          email(){
              console.log(engine.testEmail(this.email))
              if(engine.testEmail(this.email)) {
                  delete  this.errors.email;
              }else{
                  this.errors.email=true;
              }
          }
        },
        methods: {
            btn_action() {
                if(this.step===1){
                    this.engine.request('restore',"POST",{email:this.email})
                        .then(
                        (data)=>{
                            this.step=2;
                            console.log(data)
                        },
                        ({message})=>{
                            this.errors.email=message;



                        })
                }

                if(this.step===2){
                    return false
                }
                if(this.step===3){
                    return false
                }
            },

        },
        computed: {
            isDisabledRestore() {
                if (this.step === 1) {
                    return (this.email.length&&!this.errors.email)?null:'disabled'
                } else if (this.step === 2) {
                    return 'disabled'
                } else {
                    return null
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cart-table-area {
        padding-top: 100px;
        padding-bottom: 100px;
        position: relative;
        z-index: 1;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(95% - 320px);
        flex: 0 0 calc(95% - 320px);
        width: calc(95% - 320px);
        max-width: calc(95% - 320px);
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .cart-table-area {
            padding-top: 100px;
            padding-bottom: 100px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 320px);
            flex: 0 0 calc(100% - 320px);
            width: calc(100% - 320px);
            max-width: calc(100% - 320px);
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .cart-table-area {
            padding-top: 100px;
            padding-bottom: 100px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 280px);
            flex: 0 0 calc(100% - 280px);
            width: calc(100% - 280px);
            max-width: calc(100% - 280px);
        }
    }

    @media only screen and (max-width: 767px) {
        .cart-table-area {
            padding-top: 100px;
            padding-bottom: 100px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            width: 100%;
            max-width: 100%;
            padding-top: 0;
        }
    }

    .cart-table-area .cart-title h2 {
        font-size: 30px;
        margin-bottom: 30px;
        color: #242424;
    }

    .info_red {
        color: red
    }
    .info_yellow{
        color: #00840f
    }
</style>
