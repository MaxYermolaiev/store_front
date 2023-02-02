<template>
    <div :class="isVisible?'search-wrapper-on':'search-wrapper'" class="section-padding-100">
        <div class="search-close" @click="action">
            <i class="fa fa-close" aria-hidden="true"></i>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="search-content">
                        <form @click.prevent="" method="get">
                            <input v-model='search_field' type="search" name="search" id="search"
                                   placeholder="Type your keyword...">
                            <button type="submit" @click="this.search">
                                <img src="../plug/search.png" alt="">
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {engine} from "../engine/engine";
    export default {
        name: 'AppSearchWrapper',
        props: {
            action: {
                type: Function
            }, isVisible: {
                type: Boolean
            }
        },
        data() {
            return {
                search_field: ''
            }
        },
        watch: {
            search_field(value) {
                if (!value.length) {
                    return;
                } else {
                   engine.request('').then((data)=>{
                       console.log(data)
                   },({message})=>{
                       console.log(message)})
                }
            }
        },
        methods: {
            search() {
                this.action();
            }
        }
    }
</script>
<style scoped>

</style>