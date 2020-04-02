<template>
  <div class="container-full">
    <div class="container w1200">
      <h1>文本演示</h1>
      <div class="margin-top">
        <p
          v-for="(item, index) in colors"
          :key="index"
          class="text-sm"
          :class="`text-${item.name}`"
        >
          我是一段{{ item.title }}的文字
        </p>
      </div>
      <div class="margin-top">
        <p class="text-gray text-sm">我是一段灰色的文字</p>
        <p class="text-black text-sm">这是演示文字</p>
        <p class="text-red text-sm">这是演示文字</p>
        <p class="text-blue text-sm">这是演示文字</p>
        <p class="text-orange text-sm">这是演示文字</p>
        <p class="bg-orange text-sm">这是演示文字</p>
      </div>
      <div class="margin-top">
        <p class="bg-white text-xs">这是演示文字</p>
        <p class="text-gray text-sm">这是演示文字</p>
        <p class="text-black">这是演示文字</p>
        <p class="text-red text-lg">这是演示文字</p>
        <p class="text-blue text-xl bold">这是演示文字</p>
        <p class="text-orange bold text-lg">这是演示文字</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
