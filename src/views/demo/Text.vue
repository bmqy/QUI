<template>
  <div class="container-full">
    <div class="container w1200">
      <h1>文本演示</h1>
      <div class="margin-top">
        <p
          v-for="(item, index) in theColors"
          :key="index"
          :class="`text-${item.name}`"
        >
          我是一段{{ item.title }}的文字
        </p>
      </div>
      <div class="margin-top">
        <p
          v-for="(item, index) in theColors"
          :key="index"
          :class="`bg-${item.name}`"
        >
          {{ `我是一段${item.title}背景的文字` }}
        </p>
      </div>
      <div class="margin-top">
        <p
          v-for="(item, index) in sizes"
          :key="index"
          :class="[`text-${item.name}`, `bg-${theColors[index].name}`]"
        >
          {{ `这是${item.title}演示文字` }}
        </p>
      </div>
      <div class="margin-top">
        <p
          v-for="(item, index) in theColors"
          :key="index"
          class="text-ellipsis"
          style="width:235px;"
          :class="`bg-${item.name}`"
        >
          {{
            "我是一段单行文本超出隐藏的文字我是一段单行文本超出隐藏的文字我是一段单行文本超出隐藏的文字"
          }}
        </p>
      </div>
      <div class="margin-top">
        <p
          v-for="(item, index) in capital"
          :key="index"
          :class="`text-${item.name}`"
        >
          {{ `${item.title}: Where there is love, there are always wishes.` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      capital: [
        {
          title: "全大写",
          name: "ABC"
        },
        {
          title: "全小写",
          name: "abc"
        },
        {
          title: "首字母大写",
          name: "Abc"
        }
      ]
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
    }
  }
};
</script>
