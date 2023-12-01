<template>
  <view class="tabbar-container">
    <view
      class="tabbar-item"
      v-for="(item, index) in tabbarList"
      :class="[item.centerItem ? ' center-item' : '']"
      @click="changeItem(item)"
    >
      <view class="item-top">
        <image
          :src="currentItem === item.id ? item.selectIcon : item.icon"
        ></image>
      </view>

      <view
        class="item-bottom"
        :class="[currentItem === item.id ? 'item-active' : '']"
      >
        <text>{{ item.text }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    default: 0,
  },
});

const currentItem = ref(0);
const tabbarList = ref([
  {
    id: 0,
    path: "/pages/home/index",
    icon: "/static/tabbar/home.png",
    selectIcon: "/static/tabbar/home-active.png",
    text: "首页",
    centerItem: false,
  },
  {
    id: 1,
    path: "/pages/publish/index",
    icon: "/static/tabbar/plus.png",
    selectIcon: "/static/tabbar/plus.png",
    text: "发布活动",
    centerItem: true,
  },
  {
    id: 2,
    path: "/pages/mine/index",
    icon: "/static/tabbar/mine.png",
    selectIcon: "/static/tabbar/mine-active.png",
    text: "我的",
    centerItem: false,
  },
]);

function changeItem(item: any) {
  if (item.id === 1) {
    // 发布活动
    uni.switchTab({
      url: item.path,
    });
    return;
  }
  uni.switchTab({
    url: item.path,
  });
}

onMounted(() => {
  currentItem.value = props.currentPage;
  uni.hideTabBar();
});
</script>

<style lang="scss" scoped>
.tabbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100rpx;
  box-shadow: 0 0 5px #999;
  display: flex;
  align-items: center;
  padding: 5rpx 0;
  color: #fff;
  background-color: #292929;

  .tabbar-item {
    flex: 1;
    height: 100rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    .item-top {
      width: 50rpx;
      height: 50rpx;
      margin-bottom: 4px;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .item-bottom {
      font-size: 24rpx;
      width: 100%;
    }
  }

  .item-active {
    color: #ff8707;
  }

  .center-item {
    display: block;
    position: relative;

    .item-top {
      width: 130rpx;
      height: 130rpx;
      position: absolute;
      top: -50rpx;
      left: 50%;
      transform: translatex(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #292929;
      border-radius: 50%;

      image {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    .item-bottom {
      position: absolute;
      bottom: 5rpx;
    }
  }
}
</style>
