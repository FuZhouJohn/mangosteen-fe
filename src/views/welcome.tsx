import { RouterView } from "vue-router";

const WeclomeIndex = defineComponent({
  setup(props, context) {
    return () => (
      <div class="h-100% flex flex-col">
        <header class="flex-shrink-0 flex flex-col justify-center items-center  p-5">
          <div class="i-twemoji-abacus text-20vw"></div>
          <div>山竹记账</div>
        </header>
        <main class="flex-1">
          <RouterView></RouterView>
        </main>
      </div>
    );
  },
});
export default WeclomeIndex;
