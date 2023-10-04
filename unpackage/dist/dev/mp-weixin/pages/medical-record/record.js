"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (searchbar + tabBar1)();
}
const searchbar = () => "../search.js";
const tabBar1 = () => "../tabBar.js";
const _sfc_main = {
  __name: "record",
  setup(__props) {
    const cardInformation = common_vendor.ref({
      call: "妈妈",
      name: "王云",
      symptom: ["患有高血压", "劲椎病", "腰间盘突出"]
    });
    common_vendor.ref([
      {
        id: 1,
        call: "岳父",
        name: "张强"
      },
      {
        id: 2,
        call: "岳母",
        name: "赵丽"
      },
      {
        id: 3,
        call: "爸爸",
        name: "刘飞"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(cardInformation.value.call),
        b: common_vendor.t(cardInformation.value.name),
        c: common_vendor.f(cardInformation.value.symptom, (symptom, k0, i0) => {
          return {
            a: common_vendor.t(symptom)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-54383971"], ["__file", "D:/uni-app/eldoctor/pages/medical-record/record.vue"]]);
wx.createPage(MiniProgramPage);
