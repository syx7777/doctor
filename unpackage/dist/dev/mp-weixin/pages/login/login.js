"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const change1 = () => {
      common_vendor.index.navigateTo({
        url: "./older",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const change2 = () => {
      common_vendor.index.navigateTo({
        url: "./young",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => change1()),
        b: common_vendor.o(($event) => change2())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/uni-app/eldoctor/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
