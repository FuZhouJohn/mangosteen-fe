const Welcome = defineComponent({
  setup(props, context) {
    return () => (
      <div class="text-24px absolute left-25px top-50% -translate-y-50%">
        会挣钱<br></br>
        还要会省钱
      </div>
    );
  },
});
export default Welcome;
