interface Product {
  id: string; 
}

async function getProductsRoutes(): Promise<string[]> {
  try {
    const response = await fetch("https://admin.uzbekbusinessconnect.com/api");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Product[] = await response.json();

    return data.map((product) => `/products/${product.id}`);
  } catch (error) {
    console.error("Error fetching product routes:", error);

    return [];
  }
}

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  generate: { routes: ["/", "/davron_khusanov"] },
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
      API_URL: process.env.API_URL,
    },
  },
});
