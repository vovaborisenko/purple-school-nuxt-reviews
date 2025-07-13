<script setup lang="ts">
const route = useRoute()
const { page, totalPages } = defineProps<{
  page: number
  totalPages: number
}>()

const items = computed<Array<string | number>>(() => {
  const first = 0
  const last = totalPages - 1
  const current = page < 1
    ? first
    : page > totalPages ? last : page - 1
  const start = current < first + 4
    ? first
    : current > last - 1 ? current - 3 : current - 2
  const end = current > last - 4
    ? last
    : current < first + 1 ? current + 3 : current + 2

  return Array
    .from({ length: totalPages })
    .flatMap((_, index) => {
      if (
        last < 7
        || [first, last].includes(index)
        || (index > start && index < end)
      ) {
        return index + 1
      }

      if ([start, end].includes(index)) {
        return '...'
      }

      return []
    })
})
</script>

<template>
  <ul class="app-pagination">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="app-pagination__item"
      :class="{ 'app-pagination__item--active': item === page }"
    >
      <NuxtLink
        v-if="typeof item === 'number'"
        :to="{ query: { ...route.query, page: item } }"
        replace
      >{{ item }}</NuxtLink>
      <span v-else>{{ item }}</span>
    </li>
  </ul>
</template>

<style>
.app-pagination {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    min-height: 22px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: var(--color-gray-500);

    &--active {
      color: var(--color-gray-800);
    }

    & + & {
      border-left: 1px solid var(--color-gray-200);
    }

    a {
      padding: 0 15px;
      font: inherit;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--color-gray-600);
      }
    }

    span {
      padding: 0 25px;
      pointer-events: none;
    }
  }
}
</style>
