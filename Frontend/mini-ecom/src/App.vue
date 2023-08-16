<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>

  import Navbar from '@/components/Navbar.vue'
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#app {
  font-family: 'Bebas Neue', sans-serif;
  background-color: #f6f1eb;
}

main {
  margin: 0 12rem;
}

::-webkit-scrollbar{
  display: none;
}

</style>
