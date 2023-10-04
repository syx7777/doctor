"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchValue = common_vendor.ref();
    const input = (res) => {
      console.log("----input:", res);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.search),
        b: common_vendor.o(input),
        c: common_vendor.o(($event) => searchValue.value = $event),
        d: common_vendor.p({
          focus: true,
          modelValue: searchValue.value
        }),
        e: common_vendor.p({
          type: "scan",
          size: "25"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-254a34d2"], ["__file", "D:/uni-app/eldoctor/pages/search.vue"]]);
wx.createComponent(Component);
