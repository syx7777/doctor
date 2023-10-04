"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  tabBar1();
}
const tabBar1 = () => "../tabBar.js";
const _sfc_main = {
  __name: "AI",
  setup(__props) {
    const log = common_vendor.ref([
      {
        id: 1,
        prompt: "请问番茄和鸡蛋可以一起吃吗？",
        reply: `当然可以一起吃番茄和鸡蛋，它们是常见的食材，可以制作各种美味的菜肴。以下是一些常见的番茄和鸡蛋组合：
	
	1. 番茄炒鸡蛋：这是一道非常常见的中国家常菜，将切好的番茄和鸡蛋一起炒制，通常会加入一些调味料和酱汁，制作出酸甜可口的菜肴。
	
	2. 番茄蛋汤：这是一道简单而营养丰富的汤，将切碎的番茄和打散的鸡蛋一起煮制，可以加入一些洋葱、香菜等调味料。
	
	3. 番茄鸡蛋三明治：将炒好的番茄和鸡蛋夹在面包片中，可以加入生菜、奶酪或其他配料，制作出美味的三明治。
	
	4. 番茄鸡蛋意大利面：将炒好的番茄和鸡蛋混合在煮熟的意大利面上，加入一些橄榄油、大蒜、香草和奶酪，制作出意式美食。
	
	总的来说，番茄和鸡蛋是非常兼容的食材，可以根据个人口味和食材的可用性制作各种不同的美食。无论是炒、煮、夹在三明治里还是混合在面食中，这两者的组合都可以提供丰富的风味和营养。`
      },
      {
        id: 2,
        prompt: "谢谢你",
        reply: "我将持续为您的健康保驾护航"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(log.value, (word, k0, i0) => {
          return {
            a: common_vendor.t(word.prompt),
            b: common_vendor.t(word.reply),
            c: word.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5064934a"], ["__file", "D:/uni-app/eldoctor/pages/young-AI/AI.vue"]]);
wx.createPage(MiniProgramPage);
