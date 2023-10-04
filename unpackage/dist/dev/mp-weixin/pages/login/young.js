"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 表单数据
      formData: {
        username: "",
        password: ""
      },
      rules: {
        // 对username字段进行必填验证
        username: {
          rules: [
            {
              required: true,
              errorMessage: "请输入用户名"
            },
            {
              minLength: 1,
              maxLength: 8,
              errorMessage: "用户名长度在 {minLength} 到 {maxLength} 个字符"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value == "Hcorex") {
                  return true;
                } else {
                  onmessageerror("用户名错误");
                }
              }
            }
          ]
        },
        // 对password字段进行必填验证
        password: {
          rules: [
            {
              required: true,
              errorMessage: "请输入密码"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value == "123456") {
                  return true;
                } else {
                  onmessageerror("密码错误");
                }
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.form.setRules(this.rules);
    });
  },
  methods: {
    // 触发提交表单
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息：", res);
        common_vendor.index.redirectTo({
          // url: '/pages/medical-record/record'
          url: "/pages/index/index"
        });
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_card2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.username = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入用户名",
      modelValue: $data.formData.username
    }),
    c: common_vendor.p({
      label: "用户名",
      name: "username"
    }),
    d: common_vendor.o(($event) => $data.formData.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.formData.password
    }),
    f: common_vendor.p({
      label: "密码",
      name: "password"
    }),
    g: common_vendor.sr("form", "762c8eb8-1,762c8eb8-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    j: common_vendor.p({
      title: "欢迎来到智慧医疗"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uni-app/eldoctor/pages/login/young.vue"]]);
wx.createPage(MiniProgramPage);
