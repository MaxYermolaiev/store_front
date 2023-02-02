<template>
    <AppLoading v-if="page_sate.loading"/>
    <div class="cart-table-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="cart-title">
                        <h2>User authorization </h2>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-30">
                            <input v-model="email" name="email" type="email" class="form-control" :class="(!email.length&&errors.email)?'':(email.length&&errors.email)?'invalid':'valid'" id="email" placeholder="Email">
                            <AppSmall v-if="email.length===0" text="Email is required"/>
                            <AppSmall v-else-if="email.length&&errors.email" :text="errors.email"
                                      stl="error"/>
                            <AppSmall v-else text="email is okey" stl="success"/>
                        </div>
                        <div class="col-12 mb-30 ">
                            <input v-model="password" name="password" :type="show_password?'text':'password'"
                                   class="form-control" :class="(!password.length&&errors.password)?'':(password.length&&errors.password)?'invalid':'valid'" id="password" placeholder="password">
                            <AppSmall v-if="password.length===0" text="Email is required"/>
                            <AppSmall v-else-if="password.length&&errors.password" :text="errors.password" stl="error"/>
                            <AppSmall v-else text="password is okey" stl="success"/>
                        </div>
                        <div class="col-12">
                            <div class="custom-control custom-checkbox d-block mb-2">
                                <input @click="show_password=!show_password" type="checkbox" class="custom-control-input" id="ShowPass">
                                <label class="custom-control-label">Show password</label>
                            </div>
                        </div>
                    <AppBox v-if="page_sate.errors"  stl="error" :text="this.page_sate.errors"/>
                    </div>
                    <div class="button-control">
                        <AppButton @action="login" :disabled='enableLogin' text="Get in" stl="active"/>
                        <AppButton @action="$router.push('/create')" text="Create user" stl="active"/>
                    </div>
                    <RouterLink to="/restore">Restore user</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppLoading from "./Loading"
     import {AppBox,AppButton,AppSmall} from "./mini_components"
      import {engine} from "@/engine/engine";

    export default {

        name: 'AppAuth',
        components:{AppButton,AppSmall,AppBox,AppLoading},
        inject: ["engine"],
        data() {
            return {
                page_sate:{loading:false,error:false},
                response:null,
                email:'',
                password:'',
                show_password:false,
                errors:{email:"Email is not suit, example@com.us",password:"Password not suit, min one capital, one lower case letter and digit"},
            }
        },
        methods: {
            login(){
                this.page_sate={...this.page_sate,loading:true};
                this.engine.request('authenticate',"POST",{},{authorization:"for_token "+engine.toBase64(`${this.email}:${this.password}`)} )
                    .then(
                        ({_id,token,permissions})=>{

                            this.page_sate={error:false,loading:false};
                            this.engine.setStorage({_id,token,permissions});
                            if(permissions){
                                this.$router.push('/home')
                            }else{
                                this.$router.push('/admin')
                            }
                        },
                        (message)=>{
                            console.log(message)
                            this.page_sate={error:message,loading:false};
                        }
                        );
            }
        },
        watch:{
            email(value) {
                    engine.testEmail(value) ?
                        this.errors = {...this.errors, email: null } :
                        this.errors = {...this.errors, email: "Email is not suit, example@com.us"};
            },
            password(value) {
                    engine.testPassword(value) ?
                        this.errors = {...this.errors, password: null } :
                        this.errors = {...this.errors, password: "Password not suit, min one capital, one lower case letter and digit"};
            }
        },
        computed: {
            enableLogin() {
                if(this.page_sate.loading){
                    return 'disabled'
                }else if(!this.email.length||!this.password.length){
                    return 'disabled'
                }else if(this.errors.email||this.errors.password){
                    return 'disabled'
                }else{
                    return null
                }
            }
        },
    beforeMount(){
            console.log(this.$route.params)
        let {_id,token} = engine.getStorageData();
        if(_id&&token){
            this.$router.push('/home');
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
    input.form-control{
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 0;
        background-color: #f5f7fa;
        padding: 20px;
        color: #6b6b6b;
        font-size: 14px;
    }
    input.invalid{
        outline: 2px solid #ff5353;
    }
    input.valid{
        outline: 2px solid #0aad00;
    }
    .cart-table-area .cart-title h2 {
        font-size: 30px;
        margin-bottom: 30px;
        color: #242424;
        text-decoration: underline;
        text-decoration-color: #fbb710;}

</style>
