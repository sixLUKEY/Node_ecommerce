<template>
    <main class=" my-24">
        <h1 class=" text-7xl relative w-fit mb-12">
            Products
        </h1>
        <div class="products w-full rounded-md p-2" v-if="products">
            <Product
            v-for="product of products"
            :key="product.product_id"
            :product="product"
            />
        </div>
        <div v-else>
            Not found
        </div>
    </main>
</template>

<script>

    import Product from '@/components/Product.vue';

    export default {
        components: {
            Product
        }, 
        computed: {
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch("fetchProducts")
        }
    }

</script>

<style scoped>

    h1::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 105%;
        height: 1px;
        background-color: black;
        opacity: 0.5;
    }

    .products{
        display: grid;
        grid-template-columns: repeat( 5, 1fr );
        grid-template-rows: repeat( 1 , 1fr );
        gap: 0.5rem;
        grid-auto-rows: 1fr;
    }

</style>