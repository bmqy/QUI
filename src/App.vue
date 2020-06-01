<template>
  <div id="app">
    <div class="container-full bg-red">
      <div class="container w1200 bg-re">
        <div id="nav" class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/text">文本</router-link>
          <router-link to="/button">按钮</router-link>
          <router-link to="/list">列表</router-link>
          <router-link to="/grid">宫格</router-link>
          <router-link to="/form">表单</router-link>
          <router-link to="/panel">面板</router-link>
          <router-link to="/docs">文档</router-link>
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
