import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <div class="h-100% bg-gray-500/10">
        <RouterView></RouterView>
      </div>
    );
  },
});
