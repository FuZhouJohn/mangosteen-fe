import { Transition, VNode } from 'vue'
import {
  RouteLocationNormalizedLoaded,
  RouterLink,
  RouterView
} from 'vue-router'

const WeclomeIndex = defineComponent({
  setup() {
    const route = useRoute()
    return () => (
      <div class="h-100% flex flex-col p-5" flex="~ col">
        <header class="justify-center items-center" flex="~ shrink-0 col">
          <div class="font-xiaowei text-left w-100% text-40px">山竹记账</div>
        </header>
        <main class="flex-1">
          <RouterView>
            {({
              Component,
              route
            }: {
              Component: VNode
              route: RouteLocationNormalizedLoaded
            }) => (
              <Transition name="slide-fade">
                {h(Component, { key: 'page-' + route.params.page })}
              </Transition>
            )}
          </RouterView>
        </main>
        <Footer page={route.params.page as string}></Footer>
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
        router.replace('/')
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
          class="w-50px h-50px flex justify-center items-center bg-hex-333 rounded-1/2 active:bg-gray-500"
          onClick={toNext}
        >
          <div class="i-carbon-chevron-right text-24px color-white"></div>
        </div>
      </div>
    )
  }
})

export default WeclomeIndex
