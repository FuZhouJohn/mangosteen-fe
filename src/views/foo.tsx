const Foo = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value += 1;
    };
    return () => (
      <>
        <div>Foo: {refCount.value} </div>
        <div>
          <button type="button" class="btn" onClick={onClick}>
            +1
          </button>
        </div>
      </>
    );
  },
});
export default Foo;
