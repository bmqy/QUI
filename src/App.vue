<template>
  <div id="app">
    <div class="container-full">
      <div class="container w1200">
        <div id="nav">
          <router-link to="/">首页</router-link> |
          <router-link to="/text">文本</router-link> |
          <router-link to="/button">按钮</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Footer
  }
};
</script>

<style lang="less">
@import url(./less/public.less);
</style>
