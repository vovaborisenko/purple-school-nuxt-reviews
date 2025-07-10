// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],
  devtools: { enabled: true },
  css: ['normalize.css', '~/assets/styles/main.css'],
  compatibilityDate: '2025-05-15',
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    mode: 'svg',
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
      },
    ],
  },
})
