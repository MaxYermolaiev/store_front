<template>
    <div class="single-products-catagory clearfix">
        <a href="shop.html">
            <img src="../../plug/2.jpg" alt="Category image">
            <!-- Hover Content -->
            <div class="hover-content">
                <div class="line"></div>
                <p>{{data.start_from}}</p>
                <h4>{{data.title}}</h4>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'AppCategoryCard',
        props: {
            data: {
                type: Object
            }
        },
        mounted() {
            console.log(this.data)

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .single-products-catagory {
        position: relative;
        z-index: 1;
        width: 33.33333%;
        top: 0;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .single-products-catagory {
            width: 50%;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .single-products-catagory {
            width: 100%;
        }
    }

    @media only screen and (max-width: 767px) {
        .single-products-catagory {
            width: 100%;
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .single-products-catagory {
            width: 50%;
        }
    }
    .single-products-catagory a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 10;
    }

    .single-products-catagory a::after {
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background-color: rgba(60, 60, 60, 0.7);
        z-index: 1;
        opacity: 0;
        visibility: visible;
    }

    .single-products-catagory a img {
        width: 100%;
    }

    .single-products-catagory .hover-content {
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 10;
    }

    @media only screen and (max-width: 767px) {
        .single-products-catagory .hover-content {
            top: 30px;
            left: 30px;
        }
    }

    .single-products-catagory .hover-content .line {
        width: 80px;
        height: 3px;
        background-color: #fbb710;
        display: block;
        margin-bottom: 15px;
    }

    .single-products-catagory .hover-content p {
        font-size: 16px;
        color: #6d6d6d;
        line-height: 1;
        margin-bottom: 5px;
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms;
    }

    .single-products-catagory .hover-content h4 {
        margin-bottom: 0;
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms;
    }

    .single-products-catagory:hover a::after, .single-products-catagory:focus a::after {
        opacity: 1;
        visibility: visible;
    }

    .single-products-catagory:hover .hover-content p,
    .single-products-catagory:hover .hover-content h4, .single-products-catagory:focus .hover-content p,
    .single-products-catagory:focus .hover-content h4 {
        color: #fff;
    }
</style>
