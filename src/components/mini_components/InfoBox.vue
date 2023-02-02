<template>
  <div :class="stl">
    error box
  </div>
</template>

<script>
export default {
  name: 'AppBox',
  props: {
    text:{type:String,default:""},
    stl: {type:String,default:""},
    nav: {type:Boolean,default:true}
  },
}
</script>

<style scoped>
  .btn {
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
  }
  .secondary {
    border-color: #04AA6D;
    color: green;
  }

  .secondary:hover {
    background-color: #04AA6D;
    color: white;
  }
  .secondary {
    border-color: #04AA6D;
    color: green;
  }

  .success:hover {
    background-color: #04AA6D;
    color: white;
  }
</style>
