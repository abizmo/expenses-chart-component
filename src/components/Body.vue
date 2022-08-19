<script setup>
  import { computed, ref, watchEffect } from "vue";
  import getData from "../services/getData";

  const bars = ref(null);

  watchEffect(async () => {
    bars.value = await getData();
  });

  const maxAmount = computed(() =>
    Math.max(...bars.value.map(({ amount }) => amount))
  );
</script>
<template>
  <div class="details">
    <h2 class="details--header">Spending - Last 7 days</h2>
    <div class="chart">
      <div class="chart--bar" v-for="{ day, amount } in bars">
        <div
          class="bar"
          :class="{ max: amount === maxAmount }"
          :style="{ '--bar-height': (amount / maxAmount) * 150 + 'px' }"
          :data-amount="'$' + amount"
        />
        <p>{{ day }}</p>
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
    align-items: flex-end;
    gap: var(--sizes-300);
    height: 13rem;
  }

  .chart--bar {
    flex: 1;
    text-align: center;
  }

  .bar {
    background-color: var(--clr-primary-500);
    border-radius: var(--sizes-100);
    height: var(--bar-height, 0px);
    margin-bottom: var(--sizes-200);
    position: relative;
    max-width: 55px;
    margin-inline: auto;
  }

  .max {
    background-color: var(--clr-secondary-500);
  }

  .bar:hover {
    cursor: pointer;
    filter: brightness(1.2);
    z-index: var(--on-top);
  }

  .bar:hover::after {
    content: attr(data-amount);
    background-color: var(--clr-neutral-800);
    padding: var(--sizes-300) var(--sizes-200);
    position: absolute;
    border-radius: var(--sizes-100);
    font-size: var(--fs-450);
    color: var(--clr-neutral-200);
    letter-spacing: 0.03em;
    top: -55px;
    right: 50%;
    transform: translateX(50%);
    z-index: var(--on-top);
  }
</style>
