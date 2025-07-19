<script setup lang="ts">
import { FetchError } from 'ofetch'
import type { LoginResponse } from '~/interfaces/auth.interface'
import type { SubmissionHandler } from 'vee-validate'

definePageMeta({
  name: 'login',
  middleware: ['unauthed'],
})

useSeoMeta({
  title: 'Авторизация',
  description: 'Страница авторизации пользователя',
})

const schema = {
  email: 'required|email',
  password: 'required|min:6',
}
const fields = {
  email: {
    icon: 'icon:email',
    autocomplete: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  password: {
    icon: 'icon:key',
    autocomplete: 'current-password',
    placeholder: 'Пароль',
    type: 'password',
  },
}

const { baseURL } = useConfig()
const authStore = useAuthStore()
const onSubmit: SubmissionHandler = async (values, { setErrors }) => {
  try {
    const { token, user } = await $fetch<LoginResponse>('/auth/login', {
      baseURL,
      method: 'post',
      body: values,
    })
    authStore.token = token
    authStore.user = user

    navigateTo({ name: 'home' })
  }
  catch (e) {
    if (e instanceof FetchError) {
      if (e.statusCode === 401) {
        return setErrors({ email: 'Email or password is incorrect' })
      }
    }

    alert('Something went wrong... Try again')
  }
}
</script>

<template>
  <div class="page-login">
    <h1 class="page-login__title">
      Вход на платформу
    </h1>
    <VeeForm
      v-slot="{ isSubmitting }"
      :validation-schema="schema"
      class="app-form"
      @submit="onSubmit"
    >
      <div
        v-for="(props, name) in fields"
        :key="name"
        class="app-form__field"
      >
        <AppField
          :name="name"
          v-bind="props"
        />
      </div>
      <div class="app-form__actions">
        <AppBtn
          type="submit"
          :disabled="isSubmitting"
          class="app-form__action"
        >
          Войти в аккаунт
        </AppBtn>
      </div>
    </VeeForm>
  </div>
</template>

<style>
.page-login {
  display: grid;
  align-content: center;
  gap: 27px;
  max-width: 333px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px 107px;

  &__title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
  }
}

.app-form {
  display: grid;
  gap: 18px;

  &__actions {
    margin-top: 9px;
  }

  &__action {
    width: 100%;
  }
}
</style>
