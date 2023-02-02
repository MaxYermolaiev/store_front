<template>
  <AppLoading v-if="page_sate.loading"/>
  <div class="cart-table-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
            <div class="cart-title">
              <h2>Create user</h2>
            </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <input v-model="firstname" name="first" type="text" class="form-control capital" :class="(!firstname.length&&errors.firstname)?'':(firstname.length&&errors.firstname)?'invalid':'valid'" id="first_name" placeholder="First Name" required>
                  <AppSmall v-if="firstname.length===0" text="First name is required,should contain minimum 3 letters"/>
                  <AppSmall v-else-if="firstname.length&&errors.firstname" :text="errors.firstname" stl="error"/>
                  <AppSmall v-else text="Ok" stl="success"/>
                </div>
                <div class="col-md-6 mb-3">
                  <input v-model="lastname" name="last" type="text" class="form-control capital" :class="(!lastname.length&&errors.lastname)?'':(lastname.length&&errors.lastname)?'invalid':'valid'" id="last_name" placeholder="Last Name" required>
                  <AppSmall v-if="lastname.length===0" text="Last name is required,should contain minimum 3 letters"/>
                  <AppSmall v-else-if="lastname.length&&errors.lastname" :text="errors.lastname" stl="error"/>
                  <AppSmall v-else text="Ok" stl="success"/>
                </div>
                <div class="col-md-6 mb-3">
                  <input v-model="email" name="email" type="email" class="form-control" :class="(!email.length&&errors.email)?'':(email.length&&errors.email)?'invalid':'valid'" id="email" placeholder="Email">
                  <AppSmall v-if="email.length===0" text="Email is required"/>
                  <AppSmall v-else-if="email.length&&errors.email" :text="errors.email" stl="error"/>
                  <AppSmall v-else text="Ok" stl="success"/>
                </div>
                <div class="col-md-6 mb-3">
                  <input v-model="phone" @focus="select_phone" name="phone" type="text" class="form-control" :class="(!phone.length&&errors.phone)?'':(phone.length&&errors.phone)?'invalid':'valid'" placeholder="+380" id="phone" required>
                  <AppSmall v-if="phone.length===0" text="Last name is required,should contain minimum 3 letters"/>
                  <AppSmall v-else-if="phone.length&&errors.phone" :text="errors.phone" stl="error"/>
                  <AppSmall v-else text="Ok" stl="success"/>
                </div>
                <div class="col-12 mb-3 ">
                  <input v-model="password" name="password" :type="show_pass?'text':'password'" class="form-control" :class="(!password.length&&errors.password)?'':(password.length&&errors.password)?'invalid':'valid'" id="password" placeholder="Password" >
                  <AppSmall v-if="password.length===0" text="Password is required"/>
                  <AppSmall v-else-if="password.length&&errors.password" :text="errors.password" stl="error"/>
                  <AppSmall v-else text="ok" stl="success"/>
                </div>
                <div class="col-12">
                  <div class="custom-control custom-checkbox d-block mb-2">
                    <input @click="show_pass=!show_pass" type="checkbox" class="custom-control-input" id="ShowPass">
                    <label class="custom-control-label" for="ShowPass">Show password</label>
                  </div>
                </div>

              </div>
       <div class="button-control">
         <AppButton @action="btn_action" :disabled='enableCreate' :text="page_sate.loading?'Creating user':'Create'" stl="active"/>
         <AppButton @click="$router.push('/auth')" text="Get in" stl="active"/>
       </div>
          <RouterLink to="/restore">Restore user</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {AppSmall,AppButton,} from "./mini_components"
  import AppLoading from "./Loading"
  import {engine} from "@/engine/engine";

  export default {

    name: 'AppAuthentificate',
    inject: ["engine"],
    components: {AppButton, AppSmall,AppLoading},
    data() {
      return {
        page_sate:{loading:false},
        show_all_errors: false,
        show_pass: false,
        errors: {firstname: true, lastname: true, email: true, password: true, phone: true},
        //input fields
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        city: '',
        phone: '',
        is_admin_route:false
      }
    },
    methods: {
      select_phone(){
        console.log("select")
                if(this.phone.length===0){
                  this.phone='+380'
                }
  },
      btn_action() {
          this.page_sate.loading = true
          this.engine.request('admin/create-user',"POST",{firstname:this.firstname, lastname:this.lastname, email:this.email, password:this.password, phone:this.phone,},{})
                  .then(
                          (data)=>{
                            console.log( data)
                            this.$router.push('auth')
                          //  this.engine.setStorage({token,_id})
                          },
                          ({message})=>{
                             console.log(message)
                          },
                  )
      },
    },
    computed: {
      enableCreate() {
        if(this.page_sate.loading){
          return 'disabled'
        }else if(Object.entries(this.errors).some(itm=>itm[1]!==false)){
           return 'disabled'
        }else{
          return null
        }
      }
    },
    watch: {
      firstname(value){
        this.firstname = value.trim();
        engine.testString(this.firstname)?this.errors.firstname =false:this.errors.firstname = "First name should be longer 3 letters";
      },
      lastname(value){
        this.lastname = value.trim();
        engine.testString(this.lastname)?this.errors.lastname =false:this.errors.lastname = "Last name should be longer 3 letters";
      },
      email(value){
        this.email = value.trim();
        engine.testEmail(this.email)?this.errors.email =false:this.errors.email = " Email not suit, example@com.us";
      },
      password(value){
        console.log(value)
        engine.testPassword(value)?this.errors.password =false:this.errors.password = " Password not suit, min one capital, one lower case letter and digit and length 8 or more symbols";
      },
      phone(value){
        engine.testPhone(value)?this.errors.phone =false:this.errors.phone = "Phone is not valid, example +380991122999";
      }
    },

    beforeMount() {
      let {_id,token} = engine.getStorageData();
      if(_id&&token){
        this.$router.push('/');
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
    max-width: calc(95% - 320px); }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .cart-table-area {
      padding-top: 100px;
      padding-bottom: 100px;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 320px);
      flex: 0 0 calc(100% - 320px);
      width: calc(100% - 320px);
      max-width: calc(100% - 320px); } }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .cart-table-area {
      padding-top: 100px;
      padding-bottom: 100px;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 280px);
      flex: 0 0 calc(100% - 280px);
      width: calc(100% - 280px);
      max-width: calc(100% - 280px); } }
  @media only screen and (max-width: 767px) {
    .cart-table-area {
      padding-top: 100px;
      padding-bottom: 100px;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      width: 100%;
      max-width: 100%;
      padding-top: 0; } }
  .cart-table-area .cart-title h2 {
    font-size: 30px;
    margin-bottom: 30px;
    color: #242424;
    text-decoration: underline;
    text-decoration-color: #fbb710;}
  .info_red{
    color:red
  }

  input.capital{
    text-transform: capitalize;
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
</style>
