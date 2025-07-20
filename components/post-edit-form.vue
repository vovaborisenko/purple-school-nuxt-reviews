<script setup lang="ts">
import type { SubmissionHandler } from 'vee-validate'

const title = defineModel<string>('title')
const content = defineModel<string>('content')
const emits = defineEmits<{
  submit: Parameters<SubmissionHandler>
}>()

const validationSchema = {
  title: 'required|min:8',
  content: 'required|min:30',
}

const onSubmit: SubmissionHandler = (...args) => {
  emits('submit', ...args)
}
</script>

<template>
  <VeeForm
    v-slot="{ isSubmitting, meta }"
    :validation-schema="validationSchema"
    class="post-edit-form"
    @submit="onSubmit"
  >
    <div class="post-edit-form__header">
      <span class="post-edit-form__icon">+</span>
      <VeeField
        v-model="title"
        name="title"
        placeholder="Тема"
        class="post-edit-form__title"
      />
      <VeeErrorMessage
        name="title"
        class="post-edit-form__error"
      />
    </div>
    <VeeField
      v-model="content"
      name="content"
      as="textarea"
      class="post-edit-form__content"
      placeholder="Текс..."
    />
    <VeeErrorMessage
      name="content"
      class="post-edit-form__error"
    />
    <div class="post-edit-form__footer">
      <AppBtn
        type="submit"
        :disabled="isSubmitting || !meta.dirty"
        class="post-edit-form__action"
      >
        Сохранить
      </AppBtn>
    </div>
  </VeeForm>
</template>

<style>
.post-edit-form {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
    width: 1px;
    background-color: var(--color-gray-200);
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__icon {
    position: relative;
    display: block;
    flex: none;
    width: 34px;
    height: 34px;
    text-align: center;
    font-size: 21px;
    line-height: 34px;
    border-radius: 50%;
    background-color: var(--color-gray-100);
  }

  &__title {
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
  }

  &__content {
    width: calc(100% - 24px);
    min-height: 50vh;
    resize: vertical;
    padding: 0;
    outline: none;
    margin: 21px 0 20px 42px;
    border: none;
    font-weight: 300;
  }

  &__footer {
    text-align: right;
  }
}
</style>
