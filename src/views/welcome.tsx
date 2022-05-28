import { RouterView } from "vue-router";

const WeclomeIndex = defineComponent({
  setup() {
    return () => (
      <div class="h-100% flex flex-col p-5 bg-gray-500/10 color-hex-333 relative">
        <header class="flex-shrink-0 flex flex-col justify-center items-center pt-15">
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
