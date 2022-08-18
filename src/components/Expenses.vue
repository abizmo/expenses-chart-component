<script setup>
  import Header from "./Header.vue";
  import Body from "./Body.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Body />
  </div>
</template>

<style scoped>
  .container {
    width: min(100% - 2rem, 34rem);
    margin-inline: auto;
    display: grid;
    gap: var(--sizes-400);
    margin-bottom: 5rem;
  }
</style>
