<template>
    <section class="mb-24">
        <h1 class="text-7xl relative w-fit">
            Featured Products
        </h1>
        <div class="featured w-full mt-12 bg-white flex p-5 gap-10 rounded-md">
            <div class="flex-1 flex">
                <img src="https://i.postimg.cc/TPBBkdyQ/dogecoin-og-logo-cutout.png" alt="doge" class="flex-[4]">
                <div class="flex-1 flex flex-col justify-between text-center">
                    <div>
                        <h2 class=" text-4xl">
                        Dogecoin
                    </h2>
                    <p class="text-lg">
                        Doggy time!
                    </p>
                    </div>
                    <p class="text-5xl text-blue-400">
                        R 599
                    </p>
                </div>
            </div>
            <div class=" w-[1px] h-24 my-auto bg-black/30">
                
            </div>
            <div class="flex-1 flex">
                <img src="https://i.postimg.cc/Jzzn8qpv/6250754-cutout.png" alt="ethereum" class="flex-[4]">
                <div class="flex-1 flex flex-col justify-between text-center">
                    <div>
                        <h2 class=" text-4xl">
                            Etherium
                        </h2>
                        <p class=" text-lg">
                            Lorem ipsum dolor
                        </p>
                    </div>
                    <p class=" text-5xl text-blue-400">
                        R 1299
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
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

    img{
        max-width: 50%;
        max-height: 200px;
        object-fit: contain;
    }

</style>