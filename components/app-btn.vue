<script setup lang="ts">
import { NuxtLink } from '#components'
import type { RouteLocationRaw } from '#vue-router'

const { type = 'button', to } = defineProps<{
  type?: 'button' | 'submit'
  to?: RouteLocationRaw
}>()

const component = computed(() => to ? NuxtLink : 'button')
const componentProps = computed(() => to ? { to } : { type })
</script>

<template>
  <component
    :is="component"
    v-bind="componentProps"
    class="app-btn"
  >
    <slot />
  </component>
</template>

<style>
.app-btn {
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid var(--color-black);
  border-radius: 20px;
  background: var(--color-black);
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  transition: opacity .2s;

  &[disabled] {
    opacity: 0.8;
  }
}
</style>
