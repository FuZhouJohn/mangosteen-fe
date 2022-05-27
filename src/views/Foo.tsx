export const Foo = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value += 1;
    };
    return () => (
      <>
        <div class="btn">Foo: {refCount.value} </div>
        <div
          class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
          text="60px"
        ></div>
        <div>
          <button onClick={onClick}>+1</button>
        </div>
      </>
    );
  },
});
