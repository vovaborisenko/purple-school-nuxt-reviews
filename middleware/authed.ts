export default defineNuxtRouteMiddleware(() => {
  const auth = useCookie<{ token: string }>('auth', {
    readonly: true,
  })

  if (auth.value?.token) {
    return
  }

  return import.meta.client
    ? abortNavigation()
    : navigateTo({ name: 'home' })
})
