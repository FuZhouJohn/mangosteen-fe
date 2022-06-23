const All = defineComponent({
  props: ['all'],
  setup(props, context) {
    return () => <div>是不是走错了？{props.all}</div>
  }
})

export default All
