<template>
  <div id="app">
    <div class="container-full">
      <div class="container w1200 padding-tb clearfix">
        <div class="pull-left"></div>
        <div class="pull-right">
          <form action="" class="search-bar bg-gray border">
            <select name="" id="" class="search-bar-select">
              <option value="">请选择</option>
              <option value="1">北京</option>
              <option value="2">上海</option>
              <option value="3">广州</option>
            </select>
            <input
              type="text"
              name="keyword"
              class="search-bar-input"
              value=""
              id="keyword"
            />
            <button class="btn bg-red">搜索</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container-full bg-red">
      <div class="container w1200 bg-red">
        <div id="nav" class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/text">文本</router-link>
          <router-link to="/button">按钮</router-link>
          <router-link to="/row">栅格</router-link>
          <router-link to="/list">列表</router-link>
          <router-link to="/grid">宫格</router-link>
          <router-link to="/form">表单</router-link>
          <router-link to="/table">表格</router-link>
          <router-link to="/panel">面板</router-link>
          <router-link to="/tab">tab</router-link>
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
@import url(//at.alicdn.com/t/font_1929927_27rcf2y9pjf.css);
</style>
