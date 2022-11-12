import { defineComponent, PropType, ref } from "vue";

interface SeleType {
  id: string;
  value: string;
  total: number;
}
export default defineComponent({
  // props: {
    // Warehouse: {
    //   type: String as PropType<string>,
    //   default: null,
    // },
    // dataList: {
    //   type: Array as PropType<Array<SeleType>>,
    //   required: true,
    // },
  // },
  // emits: ["childSelect"],
  setup(props, ctx) {
    // const { emit } = ctx;
    // let val = ref();
    // const onSelet = (value: string, total: number) => {
    //   val.value = value;
    //   emit("childSelect", val.value, total);
    // };
    return () => (
      <>
       <div>123</div>
      </>
    );
  },
});
