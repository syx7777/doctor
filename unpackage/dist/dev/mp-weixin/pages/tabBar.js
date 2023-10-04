"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "tabBar",
  setup(__props) {
    const index1 = common_vendor.ref(0);
    const index2 = common_vendor.ref(1);
    const index3 = common_vendor.ref(0);
    const tabBar_index = () => {
      index1.value = 0;
      common_vendor.index.navigateTo({
        url: "/pages/young-index/index",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const tabBar_record = () => {
      index2.value = 1;
      common_vendor.index.navigateTo({
        url: "/pages/medical-record/record",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const tabBar_AI = () => {
      index3.value = 1;
      common_vendor.index.navigateTo({
        url: "/pages/young-AI/AI",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: index1.value == 0
      }, index1.value == 0 ? {} : {}, {
        b: index1.value == 1
      }, index1.value == 1 ? {} : {}, {
        c: common_vendor.o(tabBar_index),
        d: index2.value == 0
      }, index2.value == 0 ? {} : {}, {
        e: index2.value == 1
      }, index2.value == 1 ? {} : {}, {
        f: common_vendor.o(tabBar_record),
        g: index3.value == 0
      }, index3.value == 0 ? {} : {}, {
        h: index3.value == 1
      }, index3.value == 1 ? {} : {}, {
        i: common_vendor.o(tabBar_AI)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d18195fd"], ["__file", "D:/uni-app/eldoctor/pages/tabBar.vue"]]);
wx.createComponent(Component);
