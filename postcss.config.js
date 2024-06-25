import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tailwind } from "tailwindcss";
import autoprefixer from "autoprefixer";
import purgecss from "@fullhuman/postcss-purgecss";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    autoprefixer(),
    purgecss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    cssnano({ preset: "default" }),
  ],
});
