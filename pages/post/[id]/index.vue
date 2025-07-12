<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'

definePageMeta({
  name: 'post',
})

const route = useRoute()
const id = computed(() => route.params.id)

const { data: post } = await useAppFetch<Post>(() => `/posts/${id.value}`)
</script>

<template>
  <div class="page">
    <div class="container">
      <CardPost
        v-if="post"
        v-bind="post"
        class="page__post"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
