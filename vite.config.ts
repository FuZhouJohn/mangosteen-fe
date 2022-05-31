import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
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
      dts: true,
    }),
    Unocss(),
    Pages({
      dirs: "src/views",
      extensions: ["tsx"],
      exclude: ["**/components/*.tsx"],
    }),
  ],
});
