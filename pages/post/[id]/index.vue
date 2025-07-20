<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'

definePageMeta({
  name: 'post',
})

const authStore = useAuthStore()
const { remove } = useCUDPost()
const route = useRoute()
const id = computed(() => route.params.id as string)

const { data: post } = await useAppFetch<Post>(() => `/posts/${id.value}`)

useSeoMeta({
  title: post.value?.title,
  description: post.value?.content.slice(0, 30),
})

function updatePost(newPost: Post) {
  post.value = newPost
}

async function onClickRemove() {
  try {
    await remove(id.value)
    navigateTo({ name: 'home' })
  }
  catch {
    alert('Something went wrong... Try again')
  }
}
</script>

<template>
  <AppPage narrow>
    <CardPost
      v-if="post"
      v-bind="post"
      :deletable="authStore.isAuthed"
      :editable="authStore.isAuthed"
      @update:post="updatePost"
      @click:remove="onClickRemove"
    />
  </AppPage>
</template>
