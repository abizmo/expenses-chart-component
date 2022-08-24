<script setup>
const { bars, maximum } = defineProps({
  bars: [Object],
  maximum: Number,
});
</script>

<template>
  <div class="chart" v-if="bars">
    <div class="chart--bar" v-for="{ day, amount } in bars">
      <div
        class="bar"
        :class="{ max: amount === maximum }"
        :style="{ '--bar-height': (amount / maximum) * 150 + 'px' }"
        :data-amount="'$' + amount"
      />
      <p>{{ day }}</p>
    </div>
  </div>
</template>

<style scoped>
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
