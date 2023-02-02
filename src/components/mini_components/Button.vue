<template>
  <button class="btn" :class="stl" type="submit" @click='this.$emit("action")'><img src="./search.png" alt="">{{text}}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    img: String,
    text:{type:String,default:""},
    stl: {type:String,default:""}
  },
  emit:["action"]
}
</script>

<style scoped>
  .btn {
    border: 2px solid black;
    background-color: #fbb710;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3ms;
  }
  btn:hover{
    color: white;
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
