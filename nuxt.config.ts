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
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "https://apiqrwebevents.pythonanywhere.com/api",
    },
  },
});
