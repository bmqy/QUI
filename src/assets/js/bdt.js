/*
 * @Author: bmqy
 * @Date: 2020-07-09 11:07:17
 * @LastEditTime: 2020-07-15 08:58:33
 * @LastEditors: bmqy
 * @Description: js工具库
 */
import $ from "jquery";
const jQuery = $;
(function(window, $) {
  var Validator = function(forms, opt) {
    var defaultOpt = {
      groupElement: ".form-group", //包裹input和label的父元素
      labelElement: "label", //展示input标签的元素
      errorElement: ".input-tips" //展示错误信息的元素
    };
    var option = jQuery.extend({}, defaultOpt, opt);
    //console.log(forms, option);

    //遍历多个表单
    forms.each(function() {
      var $form = $(this);
      //设置每个表单的自定义配置
      $form.option = $.extend({}, option);

      //监听表单提交事件;
      $form.on("submit", function() {
        console.log("submit false.");
        var result = Validator.util.submit.call($form, $form.option);
        return result;
      });
    });
  };

  Validator.util = {
    //默认数据校验规则
    rules: {
      text: /[\w\W]+/, //任意文本
      number: /^\d+$/, //纯数字
      letter: /^[a-z]+$/i, //纯字母
      password: /^\w+$/, //密码只能出现英文、数字、下划线
      mobile: /^1\d{10}$/, //手机号
      phone: /^[0-9\-\\(\\)]{8,}$/, //固话
      email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, //邮箱
      IDCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, //身份证号码
      postCode: /^[1-9]\d{5}(?!\d)$/, //邮编
      url: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i, //网址链接
      date: /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/, //日期
      chinese: /^[\u4e00-\u9fa5]+$/ //中文
    },

    //成功
    aSuccess: [],
    aError: [],

    //根据规则校验数据
    check: function(el, val, rule) {
      var result = false;
      var reg = RegExp(rule, "");
      console.log(reg.test(val), "valid");
      result = reg.test(val);
      if (result) {
        Validator.util.aSuccess.push({
          el: el,
          msg: "success"
        });
      } else {
        Validator.util.aError.push({
          el: el,
          msg: "error"
        });
      }
      Validator.util.showMessage(el, result);
      return result;
    },

    //显示错误提示信息
    showMessage: function(el, result) {
      var $parent = el.parents(".form-group");
      var $label = $parent.children("label");
      var msg = $label.text();
      if (result) {
        msg += "通过认证！";
      } else {
        msg += "未通过认证！";
      }
      console.log($parent, msg);
    },

    //获取表单元素值
    getValue: function(el) {
      return el.val();
    },

    //获取表单元素指定规则
    getRule: function(el) {
      var ruleKey = Validator.util._checkRuleKey(el.attr("rule"));
      var ruleVal = Validator.util.rules[ruleKey]
        ? Validator.util.rules[ruleKey]
        : "";
      return ruleVal;
    },

    //检测表单元素指定规则是否有效
    _checkRuleKey: function(key) {
      if (key in Validator.util.rules) {
        return key;
      }
      return "";
    },

    //自定义表单提交函数
    submit: function(opt) {
      var $form = $(this);
      var result = false;
      console.log(opt, "opt");
      //遍历检测所有指定rule的表单元素
      $form.find("[rule]").each(function(i, e) {
        var $this = $(e);
        var theRule = Validator.util.getRule($this);
        var theVal = Validator.util.getValue($this);
        Validator.util.check($this, theVal, theRule);
        //console.log(e, i);
      });

      if (
        opt.error &&
        Object.prototype.toString.call(opt.error) === "[object Function]"
      ) {
        opt.error(Validator.util.aError);
        return false;
      }
      return result;
    }
  };

  $.fn.validator = function(opt) {
    return new Validator(this, opt);
  };

  window.checkTextLength = function(input) {
    console.log(input.length);
  };
})(window, jQuery);
