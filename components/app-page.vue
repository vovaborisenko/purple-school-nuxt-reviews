<script setup lang="ts">
defineProps<{
  narrow?: boolean
}>()
</script>

<template>
  <div class="page">
    <div class="page__box">
      <div
        class="page__container"
        :class="{ 'page__container--narrow': narrow }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.page {
  padding: 0 20px;

  &__box {
    max-width: 1008px;
    margin: 42px auto;
  }

  &__container {
    max-width: 692px;

    &--narrow {
      max-width: 533px;
    }
  }
}
</style>
