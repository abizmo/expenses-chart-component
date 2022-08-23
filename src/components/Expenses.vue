<script setup>
  import Balance from "./Balance.vue";
  import Body from "./Body.vue";
</script>

<template>
  <div class="container grid expenses-container">
    <Balance>921.48</Balance>
    <Body />
  </div>
</template>

<style scoped>
  .expenses-container {
    --gap: var(--sizes-400);
    margin-bottom: 5rem;
  }
</style>
