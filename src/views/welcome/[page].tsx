import { Transition } from 'vue'
import { RouterLink } from 'vue-router'

const Welcome = defineComponent({
  setup() {
    const route = useRoute()
    return () => (
      <div class="h-100% p-5 of-hidden" flex="~ col">
        <Header />
        <main class="flex-1">
          <Transition name="slide-fade">
            <Text key={route.params.page as string}></Text>
          </Transition>
        </main>
        <Footer page={route.params.page as string}></Footer>
      </div>
    )
  }
})

const Header = defineComponent({
  setup() {
    return () => (
      <header class="justify-center items-center" flex="~ shrink-0 col">
        <div class="font-xiaowei w-100%" text="left 40px">
          山竹记账
        </div>
      </header>
    )
  }
})

const Text = defineComponent({
  setup() {
    const route = useRoute()
    const pageRef = computed(() => route.params.page)

    const textMap = [
      ['会挣钱', '还要会省钱'],
      ['每日提醒', '不会遗漏每一笔账单'],
      ['数据可视化', '收支一目了然'],
      ['云备份', '再也不怕数据丢失']
    ]

    return () => (
      <div class="flex h-100% relative">
        <div class="text-24px absolute left top-50% -translate-y-50%">
          {textMap[Number(pageRef.value) - 1]?.map((text) => (
            <div>{text}</div>
          ))}
        </div>
      </div>
    )
  }
})

const Footer = defineComponent({
  props: {
    page: {
      type: String,
      default: '1'
    }
  },
  setup(props) {
    const router = useRouter()
    const toNext = () => {
      if (Number(props.page) > 3) {
        router.replace('/welcome/1')
      } else {
        router.replace(`/welcome/${Number(props.page) + 1}`)
      }
    }
    return () => (
      <div class="flex items-end justify-between">
        <div>
          {Number(props.page) !== 4 && (
            <RouterLink replace to="/">
              跳过
            </RouterLink>
          )}
        </div>
        <div
          class="w-50px h-50px flex justify-center items-center rounded-1/2"
          bg="hex-333 active:gray-500"
          onClick={toNext}
        >
          <div class="i-carbon-chevron-right text-24px color-white"></div>
        </div>
      </div>
    )
  }
})

export default Welcome
