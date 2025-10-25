import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Sae301/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        produit: resolve(__dirname, "pages/produit.html"),
        panier: resolve(__dirname, "pages/panier.html"),
        paiement: resolve(__dirname, "pages/paiement.html"),
      },
    },
  },
});
