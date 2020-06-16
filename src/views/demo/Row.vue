<template>
  <div class="container-full">
    <div class="container w1200">
      <h1>宮格演示</h1>
      <div class="row border">
        <div v-for="(item, index) in 12" :key="index" :class="[`col-1`]">
          <div class="bg-gray padding-mini">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="row row-gap margin-top">
        <div v-for="(item, index) in 12" :key="index" :class="[`col-1`]">
          <div class="bg-gray">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="row row-gap">
        <div v-for="(item, index) in 12" :key="index" :class="[`col-${item}`]">
          <div class="bg-gray">
            {{ item }}
          </div>
        </div>
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
