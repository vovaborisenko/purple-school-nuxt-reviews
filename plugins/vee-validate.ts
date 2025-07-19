import { defineRule, configure } from 'vee-validate'
import { setLocale } from '@vee-validate/i18n'
import { required, email, min } from '@vee-validate/rules'

export default defineNuxtPlugin(() => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)

  configure({
    validateOnInput: true,
  })

  setLocale('ru')
})
