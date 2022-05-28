import { RouterLink, RouterView } from "vue-router";
import { Foo } from "./views/Foo";

export const App = defineComponent({
  setup() {
    return () => (
      <div class="font-mono">
        <header>
          导航
          <ul>
            <li>
              <RouterLink to="/">Foo</RouterLink>
            </li>
            <li>
              <RouterLink to="/bar">Bar</RouterLink>
            </li>
          </ul>
        </header>
        <div>
          <RouterView></RouterView>
        </div>
        <footer>页脚</footer>
      </div>
    );
  },
});
