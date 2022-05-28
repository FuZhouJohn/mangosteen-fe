import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <div class="font-mono">
        <header>
          导航
          <ul>
            <li>
              <RouterLink to="/foo">Foo</RouterLink>
            </li>
            <li>
              <RouterLink to="/bar">Bar</RouterLink>
            </li>
            <li>
              <RouterLink to="/welcome/1">Welcome</RouterLink>
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
