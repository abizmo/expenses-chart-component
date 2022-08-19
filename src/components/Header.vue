<script>
export default {
  props: {
    balance: Number,
  },
};
</script>

<template>
  <div class="header">
    <h1 class="header--title">
      My balance <span>${{ balance }}</span>
    </h1>
    <img class="header--logo" src="../assets/logo.svg" alt="expenses" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--sizes-500);
  background-color: var(--clr-primary-500);
  border-radius: var(--sizes-200);
}
.header--title {
  display: grid;
  gap: var(--sizes-200);
  font-size: var(--fs-400);
  color: var(--clr-neutral-200);
}

.header--title span {
  font-size: var(--fs-500);
  font-weight: 700;
}
.header--logo {
  height: 40px;
}
</style>
