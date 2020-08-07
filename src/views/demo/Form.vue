<template>
  <div class="container-full">
    <div class="container w1200">
      <h1>表单演示</h1>

      <form action="" class="margin-top" id="formDemo">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
            type="text"
            name="username"
            id="username"
            value="test"
            readonly
          />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            type="text"
            name="password"
            id="password"
            rule="password"
            emptyMsg="密码不能为空！"
          />
          <span class="input-tips block text-red"
            >一段辅助说明一段辅助说明一段辅助说明</span
          >
        </div>
        <div class="form-group">
          <label for="gender">性别</label>
          <select name="gender" id="gender">
            <option value="1">男</option>
            <option value="0">女</option>
          </select>
          <span class="input-tips text-gray"
            >一段辅助说明一段辅助说明一段辅助说明</span
          >
        </div>
        <div class="form-group">
          <label for="mobile">手机号码</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value="13800000000"
            disabled
          />
        </div>
        <div class="form-group">
          <label for="education">学历</label>
          <label class="radio-inline"
            ><input type="radio" value="1" name="education" id="education" />
            小学</label
          >
          <label class="radio-inline"
            ><input
              type="radio"
              value="2"
              checked
              name="education"
              id="education"
            />
            中学</label
          >
          <label class="radio-inline"
            ><input type="radio" value="3" name="education" id="education" />
            大学</label
          >
          <span class="input-tips block text-gray"
            >一段辅助说明一段辅助说明一段辅助说明</span
          >
        </div>
        <div class="form-group">
          <label for="favorite">爱好</label>
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              value="1"
              checked
              name="favorite"
              id="favorite"
            />
            体育</label
          >
          <label class="checkbox-inline"
            ><input
              type="checkbox"
              value="2"
              disabled
              name="favorite"
              id="favorite"
            />
            唱歌</label
          >
          <label class="checkbox-inline"
            ><input type="checkbox" value="3" name="favorite" id="favorite" />
            电影</label
          >
        </div>
        <div class="form-group">
          <label for="content">简介</label>
          <textarea
            name="content"
            id="content"
            rule="text"
            cols="30"
            rows="10"
          ></textarea>
          <span class="input-tips text-gray"
            >一段辅助说明一段辅助说明一段辅助说明</span
          >
        </div>
        <div class="form-group">
          <label for="verifycode">验证码</label>
          <input
            type="text"
            class="verifycode"
            name="verifycode"
            id="verifycode"
          />
          <img
            src="https://adminv4.ibicn.com/include/func/captcha.jsp?rnd=79849"
            alt="验证码"
          />
        </div>
        <div class="form-group">
          <label for="verifycode">验证短信</label>
          <input
            type="text"
            class="smsVerifycode"
            name="smsVerifycode"
            id="smsVerifycode"
          />
          <button type="button" class="btn bg-red">
            获取验证码
          </button>
        </div>
        <div class="form-group">
          <label></label>
          <label class="checkbox-inline"
            ><input type="checkbox" name="agreet" id="agreet" /> 同意协议</label
          >
        </div>
        <div class="form-group text-center">
          <button class="btn bg-orange">确认</button
          ><button type="reset" class="btn bg-black">重置</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
require("@/assets/js/bdt.js");
export default {
  data() {
    return {};
  },
  mounted() {
    $("#formDemo").validator({
      realtime: true,
      error: function(err) {
        console.log(err, "err");
      }
    });
  }
};
</script>
