import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <div class="h-100%">
        <RouterView></RouterView>
      </div>
    );
  },
});
