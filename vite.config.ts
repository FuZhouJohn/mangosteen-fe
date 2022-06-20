import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || "/",
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    AutoImport({
      imports: ["vue", "vue/macros", "vue-router", "@vueuse/core"],
    }),
    Unocss(),
  ],
});
