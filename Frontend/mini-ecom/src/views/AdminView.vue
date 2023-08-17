<template>
    <main class=" flex flex-col mt-12 mb-24 gap-12">
        <button class=" ms-auto w-fit px-5 py-3 bg-orange-500 text-white rounded-sm text-xl">
            <router-link to="/admin/add">
                Add Product
            </router-link>
        </button>
        <table class="w-full text-center">
            <thead class="border-black border-2 text-2xl">
                <tr>
                    <th class="py-5">Product ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="my-5" v-if="products">
                <AdminProduct
                    v-for="product of products"
                    :key="product.product_id"
                    :product="product"
                />
            </tbody>
            <tbody v-else>
                No data to display...
            </tbody>
        </table>
    </main>
</template>

<script>

    import AdminProduct from '@/components/AdminProduct.vue';

    export default {
        components: {
            AdminProduct
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

</style>