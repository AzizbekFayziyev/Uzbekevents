import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        hoverColor: "#00D4C5",
        primary: "#692B58",
        secondary: "#F9BF41",
      },
    },
  },
  plugins: [],
};
