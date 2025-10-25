import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Sae301/",
  build: {
    rollupOptions: {
      input: {
        accueil: resolve(__dirname, "index.html"),
        paiment: resolve(__dirname, "pages/paiment.html"),
        produit: resolve(__dirname, "pages/produit.html"),
        panier: resolve(__dirname, "pages/panier.html"),
      },
    },
  },
});
