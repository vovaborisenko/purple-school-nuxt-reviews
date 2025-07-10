<script setup lang="ts">

</script>

<template>
  <div class="layout">
    <div class="layout__nav">
      <TheNav />
    </div>
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: 80px 1fr;

  &__nav {
    position: sticky;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    max-height: 100vh;
    padding: 42px 24px 21px;
    border-right: 1px solid var(--color-gray-200);
  }
}
</style>
