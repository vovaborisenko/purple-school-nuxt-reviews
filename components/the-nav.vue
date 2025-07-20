<script setup lang="ts">
const authStore = useAuthStore()
</script>

<template>
  <nav class="the-nav">
    <ul class="the-nav__top">
      <li class="the-nav__item">
        <NuxtLink
          :to="{ name: 'home' }"
          class="the-nav__link"
        >
          <Icon name="icon:home" />
        </NuxtLink>
      </li>
    </ul>
    <ul class="the-nav__bottom">
      <li
        v-if="authStore.isAuthed"
        class="the-nav__item"
      >
        <img
          src="/images/avatar.png"
          alt="Author's avatar"
          class="the-nav__avatar"
        >
      </li>
      <li class="the-nav__item">
        <NuxtLink
          :to="{ name: 'login' }"
          class="the-nav__link"
        >
          <Icon name="icon:door-opened" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.the-nav {
  display: grid;
  gap: 16px;
  height: 100%;
  text-align: center;
  color: var(--color-black);

  &__top {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__bottom {
    margin: auto 0 0;
    padding: 0;
    list-style: none;
  }

  &__link {
    color: inherit;

    .iconify {
      width: 24px;
      height: 24px;
    }
  }

  &__avatar {
    width: 24px;
    height: 24px;
    margin-bottom: 20px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
