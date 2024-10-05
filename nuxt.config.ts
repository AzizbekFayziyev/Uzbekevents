export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo.png",
        },
      ],
    }
  },
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "@vueuse/nuxt",
  ],
  i18n: {
    locales: ["uz", "ru", "en"],
    defaultLocale: "ru",
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'https://admin.uzbekbusinessconnect.com/api'  ,
      apiBaseUrl: process.env.API_BASE_URL || "https://verel-auto.uz/api",
    },
  },
});