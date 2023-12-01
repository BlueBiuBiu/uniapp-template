import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import App from "./App.vue";

/**
 * 使用小程序的存储方法，不然默认的方法只在H5的浏览器中才有效
 * 官网地址：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html#storage
 * 将数据持久化到的 storage 中，必须具有
 * getItem: (key: string) => string | null 和 setItem: (key: string, value: string) => void 两个方法。

 * @returns
 */
function customStorage() {
  return createPersistedState({
    storage: {
      getItem(key: string) {
        return uni.getStorageSync(key);
      },
      setItem(key: string, value: any) {
        uni.setStorageSync(key, value);
      },
    },
  });
}

export function createApp() {
  const app = createSSRApp(App);
  const pinia = Pinia.createPinia();
  pinia.use(customStorage());
  app.use(pinia);
  return {
    app,
    pinia,
  };
}
