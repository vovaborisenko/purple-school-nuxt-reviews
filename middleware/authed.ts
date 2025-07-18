export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (isTokenValid(authStore.token)) {
    return
  }

  return import.meta.client
    ? abortNavigation()
    : navigateTo({ name: 'home' })
})
