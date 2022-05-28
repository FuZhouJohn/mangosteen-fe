import { RouterView } from "vue-router";

const Welcome = defineComponent({
  setup(props, context) {
    return () => (
      <div class="flex h-100%">
        <div class="text-24px absolute left-25px top-50% -translate-y-50%">
          会挣钱<br></br>
          还要会省钱
        </div>
        <div class="flex-1 pl-5px flex items-end justify-between">
          <div class="-mb-4px">
            <RouterView >跳过</RouterView>
          </div>
          <div class="w-50px h-50px flex justify-center items-center bg-hex-333 rounded-1/2 active:bg-gray-500">
            <div class="i-carbon-chevron-right text-24px color-white"></div>
          </div>
        </div>
      </div>
    );
  },
});
export default Welcome;
