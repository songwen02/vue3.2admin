import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {},
  actions: {
    inChang() {
      this.count++;
    },
  },
});

export default useCounterStore;
