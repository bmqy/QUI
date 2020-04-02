<template>
  <div class="container-full">
    <div class="container w1200">
      <h1 class="margin-top">
        按钮演示
        <label for="radius"
          ><input
            type="checkbox"
            name="radius"
            id="radius"
            v-model="isRadius"
          />圆角</label
        >
      </h1>
      <div class="margin-top-sm">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          class="btn"
          :class="[`bg-${item.name}`, { radius: isRadius }]"
          >{{ `${item.title}按钮` }}</a
        >
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theSizes"
          :key="index"
          href="javascript:;"
          class="btn"
          :class="[
            item.name ? `btn-${item.name}` : '',
            `bg-${theColors[index].name}`,
            { radius: isRadius }
          ]"
          >{{ `${item.title}按钮` }}
        </a>
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          class="btn btn-block margin-top"
          :class="[`bg-${item.name}`, { radius: isRadius }]"
          >块状按钮</a
        >
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          class="btn"
          :class="[`line-${item.name}`, { radius: isRadius }]"
          >线框按钮</a
        >
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theSizes"
          :key="index"
          href="javascript:;"
          class="btn"
          :class="[
            item.name ? `btn-${item.name}` : '',
            `line-${theColors[index].name}`,
            { radius: isRadius }
          ]"
          >{{ `${item.title}按钮` }}
        </a>
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          class="btn btn-block margin-top"
          :class="[`line-${item.name}`, { radius: isRadius }]"
          >块状按钮</a
        >
      </div>

      <h1 class="margin-top">按钮组演示</h1>
      <div class="margin-top-sm text-justify">
        <a href="javascript:;" class="btn btn-sm line-gray">按钮</a>
        <a href="javascript:;" class="btn btn-sm line-black radius">按钮</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRadius: false
    };
  },
  computed: {
    theColors: function() {
      let arr = [];
      this.colors.map(function(e, i) {
        if (i > 0) {
          arr.push(e);
        }
      });
      return arr;
    },
    theSizes: function() {
      let arr = [];
      let vm = this;
      vm.sizes.map(function(e, i) {
        if (i > 0 && i < vm.sizes.length) {
          arr.push(e);
        }
      });
      return arr;
    }
  }
};
</script>
