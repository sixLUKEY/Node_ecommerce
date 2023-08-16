<template>
  <nav class="w-full bg-blue-400 flex justify-between px-48 py-5 items-center">
    <div class="logo text-5xl"><router-link to="/">SOMELOGO</router-link></div>
    <div class="links text-2xl flex gap-5">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
  </nav>
</template>

<script></script>

<style scoped>

nav a {
  font-weight: bold;
  color: rgb(0, 0, 0);
  transition: 0.2s;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
