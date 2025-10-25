import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Sae301/",
  build: {
    rollupOptions: {
      input: {
        accueil: resolve(__dirname, "index.html"),
        paiement: resolve(__dirname, "pages/paiement.html"),
        panier: resolve(__dirname, "pages/panier.html"),
        produit: resolve(__dirname, "pages/produit.html"),
      },
    },
  },
});
