<template>
  <small :class="stl">{{text}}</small>
</template>

<script>
export default {
  name: 'AppSmall',
  props: {
    text:{type:String,default:"Some error"},
    stl: {type:String,default:""}
  },
  mounted(){
    console.log(this.text,this.stl)
  }
}
</script>

<style scoped>
  .error {
    color: #ff0a0a;
  }
  .success {
    color: #59c61d;
  }

</style>
sas