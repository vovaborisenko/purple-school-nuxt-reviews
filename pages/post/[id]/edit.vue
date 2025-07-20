<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'
import PostEditForm from '~/components/post-edit-form.vue'

definePageMeta({
  name: 'post:edit',
  middleware: ['authed'],
})

useSeoMeta({
  title: 'Редактирование',
  description: 'Редактирование поста',
})

const { update } = useCUDPost()
const route = useRoute()
const id = computed<string>(() => route.params.id as string)

async function onSubmit(values: Record<string, string>) {
  try {
    await update(id.value, {
      title: values.title,
      content: values.content,
    })
    navigateTo({ name: 'post', params: { id: id.value } })
  }
  catch {
    alert('Something went wrong... Try again')
  }
}

const { data: post, error } = await useAppFetch<Post | null>(() => `/posts/${id.value}`)

if (error.value?.statusCode === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}
</script>

<template>
  <AppPage>
    <PostEditForm
      :title="post?.title"
      :content="post?.content"
      @submit="onSubmit"
    />
  </AppPage>
</template>
