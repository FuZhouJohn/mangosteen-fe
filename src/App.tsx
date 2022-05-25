import { RouterLink, RouterView } from "vue-router";
import { Foo } from "./views/Foo";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <h1>Hello App!</h1>
        <p>
          <RouterLink to="/">Go to Foo</RouterLink>
          <br></br>
          <RouterLink to="/bar">Go to Bar</RouterLink>
        </p>
        <RouterView></RouterView>
      </>
    );
  },
});
