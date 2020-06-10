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
        <label for="round"
          ><input
            type="checkbox"
            name="round"
            id="round"
            v-model="isRound"
          />圆弧</label
        >
        <label for="noDisabled"
          ><input
            type="radio"
            name="disabled"
            id="noDisabled"
            value=""
            v-model="isDisabled"
          />不禁用</label
        >
        <label for="cssDisabled"
          ><input
            type="radio"
            name="disabled"
            id="cssDisabled"
            value="0"
            v-model="isDisabled"
          />属性禁用</label
        >
        <label for="attrDisabled"
          ><input
            type="radio"
            name="disabled"
            id="attrDisabled"
            value="1"
            v-model="isDisabled"
          />样式禁用</label
        >
      </h1>
      <div class="margin-top-sm">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          :disabled="isDisabled === '0'"
          class="btn"
          :class="[
            `bg-${item.name}`,
            { radius: isRadius },
            { round: isRound },
            { disabled: isDisabled === '1' }
          ]"
          >{{ `${item.title}按钮` }}</a
        >
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theSizes"
          :key="index"
          href="javascript:;"
          :disabled="isDisabled === '0'"
          class="btn"
          :class="[
            item.name ? `${item.name}` : '',
            `bg-${theColors[index].name}`,
            { radius: isRadius },
            { round: isRound },
            { disabled: isDisabled === '1' }
          ]"
          >{{ `${item.title}按钮` }}
        </a>
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          :disabled="isDisabled === '0'"
          class="btn btn-block margin-top"
          :class="[
            `bg-${item.name}`,
            { radius: isRadius },
            { round: isRound },
            { disabled: isDisabled === '1' }
          ]"
          >块状按钮</a
        >
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          :disabled="isDisabled === '0'"
          class="btn"
          :class="[
            `line-${item.name}`,
            { radius: isRadius },
            { round: isRound },
            { disabled: isDisabled === '1' }
          ]"
          >线框按钮</a
        >
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theSizes"
          :key="index"
          href="javascript:;"
          :disabled="isDisabled === '0'"
          class="btn"
          :class="[
            item.name ? `${item.name}` : '',
            `line-${theColors[index].name}`,
            { radius: isRadius },
            { round: isRound },
            { disabled: isDisabled === '1' }
          ]"
          >{{ `${item.title}按钮` }}
        </a>
      </div>
      <div class="margin-top">
        <a
          v-for="(item, index) in theColors"
          :key="index"
          href="javascript:;"
          :disabled="isDisabled === '0'"
          class="btn btn-block margin-top"
          :class="[
            `line-${item.name}`,
            { radius: isRadius },
            { round: isRound },
            { disabled: isDisabled === '1' }
          ]"
          >块状按钮</a
        >
      </div>

      <h1 class="margin-top">按钮组演示</h1>
      <div class="margin-top-sm text-justify">
        <a href="javascript:;" class="btn small line-gray">按钮</a>
        <a href="javascript:;" class="btn small line-black radius">按钮</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRadius: false,
      isRound: false,
      isDisabled: ""
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
  },
  watch: {
    isRadius(val, oldVal) {
      console.log(oldVal);
      if (this.isRound) {
        this.isRound = !val;
      }
    },
    isRound(val, oldVal) {
      console.log(oldVal);
      if (this.isRadius) {
        this.isRadius = !val;
      }
    }
  }
};
</script>
