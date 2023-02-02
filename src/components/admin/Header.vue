<template>
    <div class="admin">

    </div>
</template>

<script>
  //  import {engine} from "../engine/engine"
export default {
  name: 'AdminHeaderHeader',

    props: {
        switchFilters:{
            type: Function
        },
        action: {
            type: Function
        }
    },
    data(){
      return{
          headerExpand:false
      }
    },
    methods:{
       switchNavBar(){
           this.headerExpand = !this.headerExpand;
       }
    }
}
</script>


<style scoped>

</style>
