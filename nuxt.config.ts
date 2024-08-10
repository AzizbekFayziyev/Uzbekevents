// https://nuxt.com/docs/api/configuration/nuxt-config
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
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
  ],
  runtimeConfig: {
    public: {
      API_URL:
        process.env.API_URL,
    },
  },
});
