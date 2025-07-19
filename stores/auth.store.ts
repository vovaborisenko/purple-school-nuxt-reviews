import type { User } from '~/interfaces/user.interface'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>('')
  const user = ref<User | null>(null)

  return { token, user }
}, { persist: true })
