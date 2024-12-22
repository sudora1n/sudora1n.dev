// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
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
    ],
  },

  css: ["~/assets/main.css"],
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@nuxtjs/mdc",
  ],

  app: {
    head: {
      title: "sudora1n.dev",
      htmlAttrs: {
        "data-theme": "light",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono",
        },
      ],
    },
  },
});
