<template>
  <div class="container-full">
    <div class="container w1200">
      <h1>表单演示</h1>

      <form action="" class="margin-top">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="text" name="password" id="password" />
        </div>
        <div class="form-group">
          <label for="password">简介</label>
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
        </div>
      </form>
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
