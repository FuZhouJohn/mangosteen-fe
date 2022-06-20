import { RouterView } from "vue-router";

const WeclomeIndex = defineComponent({
  setup() {
    return () => (
      <div class="h-100% flex flex-col p-5 relative" flex="~ col">
        <header class="justify-center items-center" flex="~ shrink-0 col">
          <div class="font-xiaowei text-left w-100% text-40px">山竹记账</div>
        </header>
        <main class="flex-1">
          <RouterView></RouterView>
        </main>
      </div>
    );
  },
});
export default WeclomeIndex;
