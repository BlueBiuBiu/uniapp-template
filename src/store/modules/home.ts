import { defineStore } from "pinia";

interface IHome {
  counter: number;
}

export const useHomeStore = defineStore("homeAction", {
  state: (): IHome => ({
    counter: 0,
  }),
  actions: {
    addCounter(payload: number) {
      this.counter += payload;
    },
  },
  persist: {
    storage: localStorage,
  },
});
