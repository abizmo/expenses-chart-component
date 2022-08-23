<script></script>

<template>
  <div class="balance">
    <h1 class="balance--title">
      My balance
      <span>$<slot>0.00</slot> </span>
    </h1>
    <img class="balance--logo" src="../assets/logo.svg" alt="expenses" />
  </div>
</template>

<style scoped>
  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--sizes-500);
    background-color: var(--clr-primary-500);
    border-radius: var(--sizes-200);
  }
  .balance--title {
    display: grid;
    gap: var(--sizes-200);
    font-size: var(--fs-400);
    color: var(--clr-neutral-200);
  }
  .balance--title span {
    font-size: var(--fs-500);
    font-weight: 700;
  }
  .balance--logo {
    height: 40px;
  }
</style>
