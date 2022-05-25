export const App = defineComponent({
  setup() {
    const count = ref(0);
    return () => (
      <>
        <div>{count.value}</div>
        <div>
          <button onClick={() => (count.value += 1)}>+1</button>
        </div>
      </>
    );
  },
});
