<script setup lang="ts">
defineProps<{
  icon: string
  name: string
  autocomplete?: string
  placeholder?: string
  type?: string
}>()
const model = defineModel<string>()
</script>

<template>
  <label class="app-field">
    <span class="app-field__box">
      <Icon
        :name="icon"
        class="app-field__icon"
      />
      <VeeField
        v-model="model"
        :name="name"
        :autocomplete="autocomplete"
        :type="type"
        :placeholder="placeholder"
        class="app-field__input"
      />
    </span>
    <br>
    <VeeErrorMessage
      :name="name"
      class="app-field__error"
    />
  </label>
</template>

<style>
.app-field {
  &__box {
    position: relative;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 14px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &__input {
    width: 100%;
    height: 41px;
    padding-inline: 47px 14px;
    border: 1px solid var(--color-gray-200);
    border-radius: 20px;

    &::placeholder {
      color: var(--color-gray-500);
    }
  }

  &__error {
    display: inline-block;
    margin-top: 4px;
    font-size: 0.875em;
    color: orangered;
  }
}
</style>
