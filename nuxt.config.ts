// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
      },
      {
        code: "ru",
      },
    ]
  },

  css: ['~/assets/main.css'],
  modules: ['@nuxt/icon', '@nuxtjs/i18n', '@nuxt/content'],

  app: {
    head: {
      title: "sudora1n.dev",
      htmlAttrs: {
        'data-theme': 'light',
      },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
      ]
    },
  },
})