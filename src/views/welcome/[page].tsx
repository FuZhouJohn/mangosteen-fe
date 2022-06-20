import { RouterLink } from "vue-router";

const Welcome = defineComponent({
  props: {
    page: {
      type: String,
      default: "1",
    },
  },
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();

    const pages = ["1", "2", "3"];
    const pageRef = computed(() => route.params.page);

    const notLastPage = computed(() => {
      return pages.includes(pageRef.value as string);
    });

    const textMap = [
      ["会挣钱", "还要会省钱"],
      ["每日提醒", "不会遗漏每一笔账单"],
      ["数据可视化", "收支一目了然"],
      ["会挣钱", "还要会省钱"],
    ];

    const toNext = () => {
      if (notLastPage.value) {
        router.replace(`/welcome/${Number(pageRef.value) + 1}`);
      } else {
        router.replace("/");
      }
    };

    return () => (
      <div class="flex h-100%">
        <div class="text-24px absolute left-25px top-50% -translate-y-50%">
          {textMap[Number(pageRef.value) - 1]?.map((text) => (
            <div>{text}</div>
          ))}
        </div>
        <div class="flex-1 pl-5px flex items-end justify-between">
          <div class="-mb-4px">
            {notLastPage.value && (
              <RouterLink replace to="/">
                跳过
              </RouterLink>
            )}
          </div>
          <div
            class="w-50px h-50px flex justify-center items-center bg-hex-333 rounded-1/2 active:bg-gray-500"
            onClick={toNext}
          >
            <div class="i-carbon-chevron-right text-24px color-white"></div>
          </div>
        </div>
      </div>
    );
  },
});
export default Welcome;
