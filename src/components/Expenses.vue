<script setup>
import Header from './Header.vue';
</script>

<template>
  <div class="container">
    <Header />
    <div>
      <h2>Spending - Last 7 days</h2>
      <div class="chart">mon tue wed thu fri sat sun</div>
      <div class="summary">
        <div class="total">Total this month $478.33</div>
        <div class="increase">+2.4% from last month</div>
      </div>
    </div>
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
