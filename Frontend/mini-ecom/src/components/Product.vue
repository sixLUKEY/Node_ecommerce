<template>
  <div class=" product bg-white">
    <div class="pcontents flex flex-col items-center p-5 gap-2 text-center">

        <img
          src="https://i.postimg.cc/SRHzKQrX/pngwing-com-91-cutout.png"
          alt=""
          class=" "
        />
        <div class="flex flex-col gap-5">
            <div>
                <h2 class="text-3xl">{{ product.product_name }}</h2>
                <p class="text-lg">{{ product.product_disc }}</p>
            </div>
            <p class="text-4xl">R {{ product.product_price }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "product"
  ]
};
</script>

<style scoped>

img {
  max-height: 100px;
  object-fit: contain;
}

.product{
    transition: 0.2s;
}

.product:hover{
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.262) inset;
}

.pcontents{
    transition: 0.2s;
}

.product:hover .pcontents{
    transform: translateX(2px) translateY(2px) scale(0.99);
    
}

</style>
