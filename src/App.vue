<template>
    <AppLoading v-if="appState.loading"/>
    <!--app-->
    <div v-if="!appState.error&&!appState.loading">
        <AppSearchWrapper :action="this.handleSearchAction" :isVisible="isVisibleSearch"/>
        <div class="main-content-wrapper d-flex">
            <AppHeader :switchFilters="switchFilters" :action="handleSearchAction"/>
            <AppSideBar v-if="isVisibleFilters"/>
            <div class="content">
                <router-view v-if="!appState.error&&!appState.loading"></router-view>
            </div>
        </div>
    </div>


</template>

<script>
    import { AppSideBar, AppSearchWrapper, AppHeader, AppLoading,} from './components'
    import {engine} from "@/engine/engine";

    export default {
        name: 'App',
        components: { AppSideBar, AppHeader, AppLoading, AppSearchWrapper},
        provide() {
            return {
                userState: () => this.userState,
                appState: this.appState,
                basketMethods: () => {
                    return {
                        user_state: this.user_state,
                        add_to_basket: this.add_to_basket,
                        remove_good_from_basket: this.remove_good_from_basket,
                        minus_to_basket: this.minus_to_basket
                    }
                },
                engine: engine
            }
        },
        data() {
            return {
                isVisibleFilters: false,
                isVisibleSearch: false,//search state
                user_state: {basket: [], user_data: {}},
                appState: {loading: true, error: false, success: false},
                category: [
                    //example only origin data will fetched from server
                    {
                        title: "Modern Chair",
                        start_from: "From $180",
                        id: 1,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Minimalistic Plant Pot",
                        start_from: "From $180",
                        id: 2,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Modern Chair",
                        start_from: "From $180",
                        id: 3,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Night Stand",
                        start_from: "From $180",
                        id: 4,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Plant Pot",
                        start_from: "From $180",
                        id: 5,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Small Table",
                        start_from: "From $180",
                        id: 6,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Metallic Chair",
                        start_from: "From $180",
                        id: 7,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    },
                    {
                        title: "Modern Rocking Chair",
                        start_from: "From $180",
                        id: 8,
                        url: "https://cdn.jetphotos.com/400/6/97621_1643277460.jpg?v=0"
                    }
                ]
            }
        },
        mounted() {
            //initial data retrieving and user check
            Promise.all([this.getCategories,this.getUserState])
            this.get_initial_state();
            this.appState = {...this.appState, loading: false}
            this.$router.push('/create')
        },
        methods: {
            getCategories(){

            },


            getUserState(){
               return engine.request('check-user', "GET", null, {})
            },
            getCategoriesState(){
                return engine.request('category', "GET", null, {})
            },
            switchFilters() {
                console.log("toogle")
            },
            handleSearchAction() {
                this.isVisibleSearch = !this.isVisibleSearch
            },
            handleHeaderAction() {
                this.isVisibleSearch = !this.isVisibleSearch
            },
            findIndex() {

            },
            //basket methods
            add_to_basket() {
                console.log("added")
            },
            remove_good_from_basket() {
                console.log("remove ll")
            },
            minus_to_basket() {
                console.log("minus")
            },
            searchClick() {
                this.isVisibleSearch = !this.isVisibleSearch
            }
        },

        watch: {
            $route() {
                let {catagories} = this.$route.params;
                if (catagories) {
                    this.isVisibleFilters = true;
                } else {
                    this.isVisibleFilters = false;
                }
            }
        }
    }
</script>

<style>
    .search-wrapper-on {
        top: 0;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 260px;
        z-index: 5000;
        left: 0;
        background-color: #f5f7fa;
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
    }

    .search-wrapper {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 260px;
        z-index: 5000;
        top: -260px;
        left: 0;
        background-color: #f5f7fa;
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
    }

    .main-content-wrapper {
        position: relative;
        z-index: 1;
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 767px) {
        .main-content-wrapper {
            margin-top: 70px;
            z-index: 100;
        }
    }

    .search-wrapper-on .main-content-wrapper {
        margin-top: 260px;
    }

    .search-wrapper-on .main-content-wrapper {
        margin-top: 0px;
    }

    .search-wrapper-on .search-content form {
        position: relative;
        z-index: 1;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.075);
    }

    .search-wrapper-on .search-content form input {
        width: 100%;
        height: 60px;
        border: none;
        padding-left: 50px;
        font-size: 14px;
        color: #6b6b6b;
    }

    .search-wrapper-on .search-content form button {
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        width: 50px;
        height: 60px;
        z-index: 10;
        cursor: pointer;
        background-color: transparent;
        text-align: center;
    }

    .search-wrapper-on .search-close {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        right: 0;
        background-color: red;
        text-align: center;
        color: #fff;
        line-height: 40px;
        font-size: 12px;
        cursor: pointer;
        background-color: #fbb710;
    }

    .search-wrapper-on .search-close:hover {
        background-color: #131212;
    }

    .cart-title input {
        height: 60px;
        border: none;
        border-radius: 0;
        background-color: #f5f7fa;
        padding: 30px;
        color: #6b6b6b;
        font-size: 14px;
    }

    .main-content-wrapper .content {
        position: relative;
        z-index: 1;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(95% - 320px);
        flex: 0 0 calc(95% - 320px);
        width: calc(95% - 320px);
        max-width: calc(95% - 320px);
    }

    /*content sizing*/
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .main-content-wrapper .content {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 320px);
            flex: 0 0 calc(100% - 320px);
            width: calc(100% - 320px);
            max-width: calc(100% - 320px);
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .main-content-wrapper .content {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 calc(100% - 280px);
            flex: 0 0 calc(100% - 280px);
            width: calc(100% - 280px);
            max-width: calc(100% - 280px);
        }
    }

    @media only screen and (max-width: 767px) {
        .main-content-wrapper .content {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            width: 100%;
            max-width: 100%;
            padding-top: 0;
        }
    }

    .main-content-wrapper .content .wrapper {
        padding: 0;
        margin: 0;
    }
</style>
