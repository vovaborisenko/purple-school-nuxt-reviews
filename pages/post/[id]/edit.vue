<script setup lang="ts">
definePageMeta({
  name: 'post:edit',
  middleware: ['authed'],
})

useSeoMeta({
  title: 'Редактирование',
  description: 'Редактирование поста',
})
</script>

<template>
  <h1>Post Edit</h1>
</template>

<style scoped>

</style>
