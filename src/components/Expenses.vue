<script setup>
import Header from './Header.vue';
import Body from './Body.vue';
</script>

<template>
  <div class="container expenses grid">
    <Header balance="921.48" />
    <Body />
  </div>
</template>

<style scoped>
.expenses {
  --gap: var(--sizes-400);
  margin-bottom: 5rem;
}
</style>
