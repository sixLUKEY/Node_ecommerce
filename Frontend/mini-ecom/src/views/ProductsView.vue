<template>
    <main class=" my-24">
        <h1 class=" text-7xl relative w-fit mb-12">
            Products
        </h1>
        <div class="products w-full  rounded-md p-2">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </main>
</template>

<script>

    import Product from '@/components/Product.vue';

    export default {
        components: {
            Product
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
        grid-template-rows: repeat( 2, 1fr );
        gap: 0.5rem;
    }

</style>