import type { User } from '~/interfaces/user.interface'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>('')
  const user = ref<User | null>(null)

  const isAuthed = computed<boolean>(() => isTokenValid(token.value))

  return { token, user, isAuthed }
}, { persist: true })
