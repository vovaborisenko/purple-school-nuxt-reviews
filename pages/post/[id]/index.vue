<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'

definePageMeta({
  name: 'post',
})

const route = useRoute()
const id = computed(() => route.params.id)

const { data: post } = await useAppFetch<Post>(() => `/posts/${id.value}`)

useSeoMeta({
  title: post.value?.title,
  description: post.value?.content.slice(0, 30),
})

function updatePost(newPost: Post) {
  post.value = newPost
}
</script>

<template>
  <AppPage narrow>
    <CardPost
      v-if="post"
      v-bind="post"
      @update:post="updatePost"
    />
  </AppPage>
</template>
