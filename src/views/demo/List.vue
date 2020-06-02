<template>
  <div class="container-full">
    <div class="container w1200">
      <h1>列表演示</h1>
      <div class="grid">
        <div class="grid-item">
          <ul class="list list-style-disc">
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容1
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容2
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容3
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容4
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容5
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容6
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容7
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容8
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容9
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容10
            </li>
          </ul>
        </div>
        <div class="grid-item">
          <ul class="list list-style-square">
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容1
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容2
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容3
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容4
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容5
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容6
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容7
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容8
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容9
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容10
            </li>
          </ul>
        </div>
        <div class="grid-item">
          <ul class="list list-style-circle">
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容1
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容2
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容3
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容4
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容5
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容6
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容7
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容8
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容9
            </li>
            <li class=" text-ellipsis">
              列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容10
            </li>
          </ul>
        </div>
      </div>

      <div class="grid">
        <div class="grid-item">
          <ul class="list-thumbnail-center">
            <li class="list-thumbnail-item">
              <a href="#" class="thumbnail">
                <img src="http://iph.href.lu/600x400?text=缩略图" alt="" />
              </a>
              <div class="content">
                <a href="#" class="title">这个是标题</a>
                <div class="desc">
                  这是一段简短的摘要内容,到此结束。这是一段简短的摘要内容,到此结束
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scope>
.list-thumbnail-left {
  .thumbnail {
    width: 180px;
    height: 120px;
  }
  .content {
    width: 205px;
  }
}
.list-thumbnail-center {
  .thumbnail {
    width: 400px;
    height: 266px;
  }
  .content {
    width: 400px;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>
