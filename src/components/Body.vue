<script setup>
  import { ref, watchEffect } from "vue";
  import getData from "../services/getData";

  const bars = ref(null);

  watchEffect(async () => {
    bars.value = await getData();
    console.log(bars);
  });
</script>
<template>
  <div class="details">
    <h2 class="details--header">Spending - Last 7 days</h2>
    <div class="chart">
      <div class="chart--bar" v-for="{ day, amount } in bars">
        {{ day }}
      </div>
    </div>
    <div class="details--summary">
      <p>Total this month <span class="details--total">$478.33</span></p>
      <p class="details--diff">+2.4% <span>from last month</span></p>
    </div>
  </div>
</template>
<style scoped>
  .details {
    background-color: var(--clr-neutral-200);
    border-radius: var(--sizes-300);
    padding: var(--sizes-500);
    display: grid;
    gap: var(--sizes-500);
  }

  .details--header {
    letter-spacing: 0.018em;
    font-size: var(--fs-500);
    font-weight: 700;
  }
  .details--summary {
    border-top: 2px solid var(--clr-neutral-300);
    padding-top: var(--sizes-500);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: var(--fs-400);
    letter-spacing: -0.02em;
  }
  .details--summary p {
    display: grid;
    gap: var(--gap, var(--sizes-200));
  }
  .details--total {
    font-size: var(--fs-600);
    font-weight: 700;
  }
  .details--diff {
    --gap: --sizes-100;
    text-align: right;
  }
  .chart {
    display: flex;
    gap: var(--sizes-300);
  }

  .chart--bar {
    flex: 1;
    text-align: center;
  }
</style>
