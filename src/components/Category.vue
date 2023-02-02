<template>

        <div class="products-catagories-area">
            <AppCategoryCard v-for="(item,idx) in category" :key="idx" :data="item"/>
    </div>
</template>

<script>
    import {AppCategoryCard} from "./mini_components"
    export default {
        name: 'AppCategory',
        components: {AppCategoryCard},
        inject: ["appState"],
        data() {
            return {category: this.appState.category}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
     .products-catagories-area {
        display: flex;
         flex-wrap: wrap;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(100% - 320px);
        flex: 0 0 calc(100% - 320px);
        width: calc(100% - 320px);
        max-width: calc(100% - 320px);
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
         .products-catagories-area {
             position: relative;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 280px);
            flex: 0 0 calc(100% - 280px);
            width: calc(100% - 280px);
            max-width: calc(100% - 280px);
        }
    }
    @media only screen and (max-width: 767px) {
         .products-catagories-area {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            width: 100%;
            max-width: 100%;
        }
    }
</style>
