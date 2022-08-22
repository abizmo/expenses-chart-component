<script setup></script>
<template>
  <footer>
    <div class="container flex justify-content-between">
      <div>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >
      </div>
      <div class="align-right">
        Coded by <a href="https://www.abizmo.dev">Abián Izquierdo</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-size: var(--fs-200);
  background-color: var(--clr-neutral-800);
  position: fixed;
  inset: auto 0 0;
  color: var(--clr-neutral-200);
  padding-block: var(--sizes-600);
}

a {
  display: block;
  color: var(--clr-secondary-500);
  text-decoration: none;
  text-transform: uppercase;
  margin-top: var(--sizes-200);
}

a:hover {
  text-decoration: underline;
  filter: brightness(1.2);
}
</style>
