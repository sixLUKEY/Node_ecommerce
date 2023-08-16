<template>
    <section class=" my-12 flex">
        <div class="left flex-1 flex flex-col gap-5">
            <h1 class="text-7xl">
                Shop the world 
            </h1>
            <p class="text-lg w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ex magni, rerum, voluptatem molestiae voluptates possimus libero consequuntur natus placeat porro molestias consequatur nostrum magnam ab exercitationem autem incidunt ipsam quia aspernatur! Illo ex odit quod similique tempore distinctio architecto commodi iusto impedit, rerum facilis, iure voluptas modi laboriosam ducimus.
            </p>
            <div class="buttons flex gap-5">
                <button class="px-5 py-3  rounded-sm bg-black text-white">
                    Shop Now
                </button>
                <button class="px-5 py-3 rounded-sm bg-white ">
                    Explore Crypto
                </button>
            </div>
        </div>
        <div class="right flex-1 flex justify-center">
            <img src="https://i.postimg.cc/bY7Ybj99/d21574a8-73ba-4cb8-a7d6-6b4d20ce61b4.png" alt="crypto" class="w-[80%]">
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
    .right img {
        animation: float 2s infinite linear;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50%{
            transform: translateY(15px);
        }
        100%{
            transform: translateY(0);
        }
    }
</style>