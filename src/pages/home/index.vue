<template>
  <view class="content">
    <h2>{{ homeStore.counter }}</h2>
    <button @click="addOne">+1</button>
    <custom-tabbar :current-page="0" />
  </view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { testGet, testPost } from "@/service/modules/home";
import { useHomeStore } from "@/store/index";

/**
 * 测试封装的pinia
 */
const homeStore = useHomeStore();
const addOne = () => {
  homeStore.counter++;
};

/**
 * 测试封装的请求方法
 */
const testGetM = async () => {
  const res = await testGet();
  console.log("get_res:", res);
};

const testPostM = async () => {
  const res = await testPost();
  console.log("post_res:", res);
};

onMounted(() => {
  testGetM();
  testPostM();
});
</script>

<style lang="scss">
.content {
}
</style>
