<template>
  <tr class="text-lg border-black/10 border-b-2">
    <th class="py-8">{{ product.product_id }}</th>
    <td>{{ product.product_name }}</td>
    <td class="max-w-[100px]">
      {{ product.product_disc }}
    </td>
    <td>R {{ product.product_price }}</td>
    <td class="gap-5 items-center">
      <div class="flex justify-center gap-5">
        <button class="px-5 py-1 bg-green-500 text-white rounded-sm"
        >
          <router-link :to="{ name: 'admin edit', params: { id: product_id} }">
            Edit
          </router-link>
        </button>
        <button class="px-5 py-1 bg-red-500 text-white rounded-sm"
        @click="deleteProduct( product.product_id )"
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script>

import axios from 'axios'

export default {
    props: [
        "product"
    ],
    methods: {
        async deleteProduct( id ){
            try{
                await axios.delete(`https://e-com-db.onrender.com/products/${id}`)
                this.$store.dispatch("fetchProducts")
            } catch ( err ){
                alert( err )
            }
        }
    }
};
</script>

<style scoped>
</style>
