<template>
    <main>
        <div
      class="flex flex-col mb-[2.5rem]"
      v-if="product"
    >
      <label>Product Name</label>
      <input type="text" autocomplete="off" required name="product_name" v-model="product.product_name" :placeholder="product.product_name"/>
      <label>Product Description</label>
      <input type="text" autocomplete="off" required name="product_disc" v-model="product.product_disc" :placeholder="product.product_disc"/>
      <label>Product Price</label>
      <input type="number" autocomplete="off" required name="product_price" v-model="product.product_price" :placeholder="product.product_price"/>
      <label>Product URL</label>
      <input type="text" autocomplete="off" required name="product_url" v-model="product.product_url" :placeholder="product.product_url"/>
      <button @click="updateProduct" 
        class="mt-8 ms-auto px-10 py-2 bg-red-500 text-white text-center w-fit rounded-sm text-lg"
      >
        Submit
      </button>
    </div>
    </main>
</template>

<script>

    import axios from 'axios'

    export default {
        data(){
            return {
                product_name: '',
                product_disc: '',
                product_price: '',
                product_url: ''
            }
        },
        methods: {
            async updateProduct(){
                try {
                    await axios.put(
                        `https://e-com-db.onrender.com/products/${this.$route.params.id}`,
                        {
                            product_name: this.product.product_name,
                            product_disc: this.product.product_disc,
                            product_price: this.product.product_price,
                            product_url: this.product.product_url
                        }
                    )
                    this.product_name = ''
                    this.product_disc = ''
                    this.product_price = ''
                    this.product_url = ''
                    this.$router.push('/admin')
                } catch ( err ){
                    alert( err )
                }
            }
        },
        props: [
            "id"
        ],
        computed: {
            product(){
                return this.$store.state.product
            }
        },
        mounted(){
            
            this.$store.dispatch("fetchProduct", this.id),
            this.$store.dispatch("fetchProducts")
        }

    }
</script>

<style scoped>

label {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}

</style>