<template>
    <div class="row">
        <div class="col-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mt-50">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Furniture</a></li>
                    <li class="breadcrumb-item"><a href="#">Chairs</a></li>
                    <li class="breadcrumb-item active" aria-current="page">white modern chair</li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppProductNav',

        data() {
            return {
                path: []
            }
        },
        beforeMount() {
            this.path = Object.entries(this.$route.query)
        },
        watch: {
            $route() {
                this.path = Object.entries(this.$route.query)
            }
        },
    }
</script>

<style scoped>
    .breadcrumb .breadcrumb-item {
        font-weight: bold;
        text-transform: uppercase;
    }

    .breadcrumb .breadcrumb-item a {
        text-decoration: none;

        color: black;
    }

    .breadcrumb .breadcrumb-item a:hover {
        text-decoration: none;
        transition: 300ms linear;
        color: #fbb710;
    }

    .breadcrumb .breadcrumb-item + .breadcrumb-item::before {
        content: '>';
    }
</style>
