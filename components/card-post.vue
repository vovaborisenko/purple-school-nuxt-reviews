<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'

const MAX_EXCERPT_LENGTH = 156

const {
  short = false,
  content = '',
} = defineProps<Post & {
  short?: boolean
  href?: string
}>()
const description = computed(() => short
  ? content.slice(0, MAX_EXCERPT_LENGTH) + (content.length > MAX_EXCERPT_LENGTH ? '...' : '')
  : content)
</script>

<template>
  <div
    class="card-post"
    :class="{ 'card-post--short': short }"
  >
    <div class="card-post__header">
      <div class="card-post__author">
        <img
          src="/images/avatar.png"
          alt="Author's avatar"
          class="card-post__avatar"
        ><span class="card-post__name">PurpleSchool</span>
      </div>
      <div class="card-post__date">
        <NuxtTime
          relative
          locale="ru-RU"
          :datetime="Date.parse(published_at)"
        />
      </div>
    </div>
    <div class="card-post__content">
      <h2 class="card-post__title">
        <component
          :is="href ? 'a' : 'span'"
          :href="href"
          class="card-post__title-link"
        >
          {{ title }}
        </component>
      </h2>
      <p class="card-post__desc">
        {{ description }}
      </p>
    </div>
    <div class="card-post__footer">
      <CardPostAction
        postfix-icon="icon:thumb-up"
        aria-label="like"
      >
        {{ likes }}
      </CardPostAction>
      <CardPostAction
        postfix-icon="icon:thumb-down"
        aria-label="dislike"
      >
        {{ dislikes }}
      </CardPostAction>
      <CardPostAction
        prefix-icon="icon:bin"
        aria-label="remove"
        class="card-post__action card-post__action--remove"
      />
      <CardPostAction
        prefix-icon="icon:pencil"
        aria-label="edit"
      >
        Изменить
      </CardPostAction>
    </div>
  </div>
</template>

<style lang="postcss">
.card-post {
  &__header {
    display: flex;
    align-items: center;
    gap: 17px;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__avatar {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--color-gray-300);
  }

  &__date {
    color: var(--color-gray-600);
  }

  &__title {
    margin: 10px 0 8px;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    color: var(--color-black);
  }

  &__title-link {
    color: inherit;
    text-decoration: none;
  }

  &__desc {
    margin: 0;
    font-weight: 300;
    line-height: 24px;
    white-space: pre-line;
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 29px;

    ^&--short & {
      margin-top: 9px;
    }
  }

  &__action--remove {
    margin-left: auto;
  }
}
</style>
