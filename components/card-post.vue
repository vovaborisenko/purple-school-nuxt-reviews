<script setup lang="ts">

</script>

<template>
  <div class="card-post">
    <div class="card-post__header">
      <div class="card-post__author">
        <img
          src="/images/avatar.png"
          alt="Author's avatar"
          class="card-post__avatar"
        ><span class="card-post__name">PurpleSchool</span>
      </div>
      <div class="card-post__date">
        4 дня назад
      </div>
    </div>
    <div class="card-post__content">
      <h2 class="card-post__title">
        Добавить функцию голосования
      </h2>
      <p class="card-post__desc">
        Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется...
      </p>
    </div>
    <div class="card-post__footer">
      <CardPostAction
        postfix-icon="icon:thumb-up"
        aria-label="like"
      >
        10
      </CardPostAction>
      <CardPostAction
        postfix-icon="icon:thumb-down"
        aria-label="dislike"
      >
        1
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

  &__desc {
    font-weight: 300;
    line-height: 24px;
  }

  &__footer {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 9px;
  }

  &__action--remove {
    margin-left: auto;
  }
}
</style>
