import { Transition } from 'vue'
import { RouterLink } from 'vue-router'

const Welcome = defineComponent({
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
      <div class="flex h-100%">
        <div class="text-24px absolute left-5 top-50% -translate-y-50%">
          {textMap[Number(pageRef.value) - 1]?.map((text) => (
            <div>{text}</div>
          ))}
        </div>
      </div>
    )
  }
})
export default Welcome
