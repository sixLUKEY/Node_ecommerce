<template>
  <main class="home">
    <Landing/>
    <Featured/>
  </main>
</template>

<script>

import Landing from '@/components/Landing.vue'
import Featured from '@/components/Featured.vue';

export default {
 components: {
  Landing,
  Featured
 }
}
</script>
