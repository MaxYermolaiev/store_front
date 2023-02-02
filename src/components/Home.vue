<template>
    <div class="home">
        <div class="control">
            <div class="ctrl_btn" @click="change_slide(-1)" change_slide>back</div>
            <div class="ctrl_btn" @click="change_slide(1)"><i class="bi bi-skip-forward-circle-fill"></i></div>
        </div>
        <div :class="active_slide===itm?'active_slide':'slide'" v-for="itm in 5" :key="itm">
            <img src="../plug/1.jpg"/>
        </div>
        <div class="slide_nav">
            <div v-for="itm in 5" :key="itm" class="chld">{{itm}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AppHome',
        components: {},
        data() {
            return {
                active_slide: 1
            }
        },
        methods:{
            change_slide(val){
                val>0?this.active_slide+=1:this.active_slide-=1
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        position: relative;
        background: green;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 100px;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(95% - 320px);
        flex: 0 0 calc(95% - 320px);
        width: calc(95% - 320px);
        max-width: calc(95% - 320px);
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .home {
            background: green;
            justify-content: center;
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
        .home {
            background: green;
            justify-content: center;
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
        .home {
            background: green;
            padding-top: 100px;
            padding-bottom: 100px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            width: 100%;
            max-width: 100%;
            align-items: stretch;
        }
    }

    @media only screen and (max-width: 767px) {
        .home {
            width: 100%;
            background: green;
            justify-content: center;
            padding-top: 100px;
            padding-bottom: 100px;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
        }
    }

    .home .active_slide {
        transition: 0.8s;
        opacity: 1;
        width: 100%
    }

    .home .slide {
        display: none
    }

    .home .active_slide > img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .home .control{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .home .control .ctrl_btn{
       cursor: pointer;
        margin:15px
    }
    img:hover {
        transition: 0.8s;
        opacity: 1;
    }

    .home .container .slide {
        display: none;
    }

    .home .container .active_slide {
        display: block;
        width: 100%;
        box-sizing: content-box;
    }
    .home .slide_nav {
        position:absolute;
        bottom: 0px;
        display: flex;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        justify-content: center;
        width: 100%;
        box-sizing: content-box;
        background: black;
    }
</style>
