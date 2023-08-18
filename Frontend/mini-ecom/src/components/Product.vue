<template>
  <div class=" product bg-white overflow-hidden" @click="displayModal( product.product_id )">
    <div class="pcontents flex flex-col h-full items-center p-5 gap-2 text-center">

        <img
          :src="product.product_url"
          :alt="product.product_name"
        />
        <div class="flex flex-col gap-5 justify-between h-full">
            <div>
                <h2 class="text-3xl">{{ product.product_name }}</h2>
                <!-- <p class="text-lg">{{ product.product_disc }}</p> -->
            </div>
            <p class="text-2xl ">R {{ product.product_price }}</p>
        </div>
    </div>
  </div>
  <div class="absolute modal bg-[#f6f1eb] p-4 w-1/4 rounded-md text-black z-40 flex flex-col gap-5" id="modal">
    <button class="ms-auto text-xl rounded-md bg-blue-500 text-white px-5 py-1" @click="displayModal">
      X
    </button>
    <h1 class="text-5xl text-center" id="modalHeading">
      {{ product.product_name }}
    </h1>
    <p class="text-xl " id="modalDesc">
      {{ product.product_disc }}
    </p>
  </div>
  <div class="backdrop absolute w-[100vw] h-[150vh] bg-black" id="backdrop">

  </div>
</template>

<script>
export default {
  props: [
    "product"
  ],
  methods: {
    displayModal( id ){
      if ( id = this.product.product_id ){
        const modal = document.getElementById('modal')
        const modalDesc = document.getElementById('modalDesc')
        const modalHeading = document.getElementById('modalHeading')
        const backdrop = document.getElementById('backdrop')
        backdrop.classList.toggle('show')
        modalDesc.innerText = this.product.product_disc
        modalHeading.innerText = this.product.product_name
        modal.classList.toggle('appear')
      }
    }
  }
};
</script>

<style scoped>

img {
  max-height: 200px;
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

.modal{
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-500%) ;
  transition: 0.2s;
  filter: drop-shadow(0px 0px 5px #000);
}

.appear{
  transform: translateX(-50%) translateY(50%);

}

.backdrop{
  left: 0;
  top: 0;
  opacity: 0.3;
  display: none;
  z-index: 20;
}

.show{
  display: block;
}

</style>
