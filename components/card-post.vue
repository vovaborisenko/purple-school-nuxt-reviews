<script setup lang="ts">
import type { Post } from '~/interfaces/post.interface'
import { Action, useReactionsStore } from '~/stores/reactions.store'

const reactionsStore = useReactionsStore()

const MAX_EXCERPT_LENGTH = 156

const {
  id,
  short = false,
  content = '',
} = defineProps<Post & {
  short?: boolean
  href?: string
}>()
const emits = defineEmits<{
  'update:post': [post: Post]
}>()

const description = computed(() => short
  ? content.slice(0, MAX_EXCERPT_LENGTH) + (content.length > MAX_EXCERPT_LENGTH ? '...' : '')
  : content)
const reaction = computed(() => reactionsStore.getPostReaction(id))

async function setReaction(action: Action) {
  try {
    const post = await reactionsStore.setReaction(id, action)

    emits('update:post', post)
  }
  catch {
    console.warn(`Can't set reaction ${action} for post id: ${id}`)
  }
}
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
        :active="reaction === Action.Liked"
        postfix-icon="icon:thumb-up"
        aria-label="like"
        @click.stop
        @activate="setReaction(Action.Liked)"
      >
        {{ likes }}
      </CardPostAction>
      <CardPostAction
        :active="reaction === Action.Disliked"
        postfix-icon="icon:thumb-down"
        aria-label="dislike"
        @click.stop
        @activate="setReaction(Action.Disliked)"
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

<style>
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

    .card-post--short & {
      margin-top: 9px;
    }
  }

  &__action--remove {
    margin-left: auto;
  }
}
</style>
