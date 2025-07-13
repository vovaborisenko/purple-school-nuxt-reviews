<script setup lang="ts">
const { active } = defineProps<{
  active?: boolean
  ariaLabel?: string
  prefixIcon?: string
  postfixIcon?: string
}>()

const emits = defineEmits<{
  activate: []
}>()

function onClick() {
  if (active) {
    return
  }

  emits('activate')
}
</script>

<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    class="card-post-btn"
    :class="{ 'card-post-btn--active': active }"
    @click="onClick"
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

  &--active {
    cursor: default;
  }

  &.card-post-btn--active svg path {
    fill: currentColor;
  }

  &__ic {
    width: 18px;
    height: 18px;
    color: var(--color-gray-500);

    .card-post-btn:not(.card-post-btn--active):hover & {
      color: inherit;
      transition: color .2s;
    }
  }
}
</style>
