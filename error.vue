<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error?: NuxtError
}>()

const description = computed(() => {
  return error?.statusCode === 404
    ? 'Страница не найдена, вернитесь на главную страницу'
    : 'Что-то пошло не так'
})
</script>

<template>
  <div class="error-page">
    <h1 class="error-page__title">
      {{ error?.statusCode }}
    </h1>
    <p class="error-page__desc">
      {{ description }}
    </p>
    <AppBtn
      :to="{ name: 'home' }"
      class="error-page__action"
    >
      На главную
    </AppBtn>
  </div>
</template>

<style>
.error-page {
  display: grid;
  align-content: center;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px 50px;
  text-align: center;

  &__title {
    margin-bottom: 0;
    font-size: 120px;
    font-weight: 500;
    line-height: 141px;
    color: var(--color-gray-800);
  }

  &__desc {
    margin: 0;
    font-weight: 300;
    line-height: 24px;
  }

  &__action {
    width: 100%;
    max-width: 301px;
    margin: 24px auto 0;
  }
}
</style>
