<script setup lang="ts">
definePageMeta({
  name: 'post:add',
  middleware: ['authed'],
})
useSeoMeta({
  title: 'Создание поста',
  description: 'Описание создания поста',
})

const { create } = useCUDPost()
const post = ref({
  title: '',
  content: '',
})

async function onSubmit(values: Record<string, string>) {
  try {
    const { id } = await create({
      title: values.title,
      content: values.content,
    })
    navigateTo({ name: 'post', params: { id } })
  }
  catch {
    alert('Something went wrong... Try again')
  }
}
</script>

<template>
  <AppPage>
    <PostEditForm
      :title="post.title"
      :content="post.content"
      @submit="onSubmit"
    />
  </AppPage>
</template>
