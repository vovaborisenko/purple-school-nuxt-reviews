<script setup lang="ts">
import type { FetchPostsResponse, Post } from '~/interfaces/post.interface'

definePageMeta({
  name: 'home',
})
useSeoMeta({
  title: 'Главная',
  description: 'Здесь вы можете просмотреть все записи',
})

const route = useRoute()
const query = computed(() => ({
  sort: route.query.sort ?? undefined,
  page: route.query.page ?? undefined,
}))
const tabs = computed(() => [{
  id: 'date',
  label: 'По дате',
}, {
  id: 'rating',
  label: 'По рейтингу',
}])
const activeTabId = computed(() => route.query.sort || 'date')

const { data } = useAppFetch<FetchPostsResponse>('/posts', {
  query,
})

function updatePost(newPost: Post): void {
  const idx = data.value?.posts.findIndex(({ id }) => id === newPost.id)

  if (idx > -1) {
    data.value.posts.splice(idx, 1, newPost)
  }
}
</script>

<template>
  <AppPage class="page-home">
    <div class="page-home__header">
      <ul class="tabs">
        <li
          v-for="{ id, label } in tabs"
          :key="id"
          class="tabs__item"
        >
          <NuxtLink
            :to="{
              query: {
                ...route.query,
                sort: id,
              },
            }"
            replace
            class="tabs__link"
            :class="{ 'tabs__link--active': id === activeTabId }"
          >{{ label }}</NuxtLink>
        </li>
      </ul>
    </div>
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
            @update:post="updatePost"
          />
        </NuxtLink>
      </li>
    </ul>
    <div
      v-if="data?.total_pages > 1"
      class="page-home__pagination"
    >
      <AppPagination
        :page="data.page"
        :total-pages="data.total_pages"
      />
    </div>
  </AppPage>
</template>

<style>
.page-home {
  &__header {
    margin: 42px 0 38px;
    padding: 0 0 16px;
    border-bottom: 1px solid var(--color-gray-200);
  }

  &__pagination {
    margin-top: 58px;
  }
}

.posts {
  margin: 0;
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

.tabs {
  display: flex;
  align-items: center;
  gap: 42px;
  margin: 0;
  padding: 0;
  list-style: none;

  &__link {
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    color: var(--color-gray-600);
    text-decoration: none;

    &--active,
    &:hover {
      font-weight: 400;
      color: var(--color-gray-800);
    }
  }
}
</style>
