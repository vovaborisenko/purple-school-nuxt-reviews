<script setup lang="ts">
defineProps<{
  ariaLabel?: string
  prefixIcon?: string
  postfixIcon?: string
}>()
</script>

<template>
  <button
    :aria-label="ariaLabel"
    class="card-post-btn"
  >
    <Icon
      v-if="prefixIcon"
      :name="prefixIcon"
      class="card-post-btn__ic"
    />
    <span
      v-if="$slots.default"
      class="card-post-btn__text"
    ><slot /></span>
    <Icon
      v-if="postfixIcon"
      :name="postfixIcon"
      class="card-post-btn__ic"
    />
  </button>
</template>

<style>
.card-post-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-gray-800);
  border: none;
  background: transparent;

  &__ic {
    width: 18px;
    height: 18px;
    color: var(--color-gray-500);
  }
}
</style>
