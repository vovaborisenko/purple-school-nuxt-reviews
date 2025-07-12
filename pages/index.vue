<script setup lang="ts">
import type { FetchPostsResponse } from '~/interfaces/post.interface'

definePageMeta({
  name: 'home',
})

const { data } = await useAppFetch<FetchPostsResponse>('/posts')
</script>

<template>
  <div class="page">
    <div class="container">
      <h1>Index</h1>
      <ul class="posts">
        <li
          v-for="post in data?.posts"
          :key="post.id"
          class="posts__item"
        >
          <NuxtLink
            v-slot="{ href, navigate }"
            :to="{
              name: 'post',
              params: { id: post.id },
            }"
            custom
          >
            <CardPost
              v-bind="post"
              :href="href"
              short
              class="posts__card"
              @click="navigate"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.posts {
  max-width: 692px;
  margin: 38px 0;
  padding: 0;
  list-style: none;

  &__item {
    & + & {
      margin-top: 36px;
      padding-top: 36px;
      border-top: 1px solid var(--color-gray-200);
    }
  }

  &__card {
    max-width: 533px;
  }
}
</style>
