"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const timeList = common_vendor.ref([
      {
        id: 1,
        time: "09:00",
        text: "上午"
      },
      {
        id: 2,
        time: "10:00",
        text: "上午"
      },
      {
        id: 3,
        time: "11:00",
        text: "上午"
      },
      {
        id: 4,
        time: "12:00",
        text: "下午"
      },
      {
        id: 5,
        time: "01:00",
        text: "下午"
      },
      {
        id: 6,
        time: "02:00",
        text: "下午"
      },
      {
        id: 7,
        time: "03:00",
        text: "下午"
      },
      {
        id: 8,
        time: "04:00",
        text: "下午"
      },
      {
        id: 9,
        time: "05:00",
        text: "下午"
      },
      {
        id: 10,
        time: "06:00",
        text: "晚上"
      },
      {
        id: 11,
        time: "07:00",
        text: "晚上"
      },
      {
        id: 12,
        time: "08:00",
        text: "晚上"
      },
      {
        id: 13,
        time: "09:00",
        text: "晚上"
      },
      {
        id: 14,
        time: "10:00",
        text: "晚上"
      },
      {
        id: 15,
        time: "11:00",
        text: "晚上"
      }
    ]);
    const cardList = common_vendor.ref([
      {
        id: 1,
        text: "早餐吃药",
        time: "09:00 - 10:30",
        url: "../../static/older/icon1.png",
        distance: "321 W 16th",
        person: "女儿"
      },
      {
        id: 2,
        text: "中午的药分饭前和饭后吃",
        time: "11:00 - 12:30",
        url: "../../static/older/icon2.png",
        distance: "5325 W 30th",
        person: "陶医生"
      },
      {
        id: 3,
        text: "复诊",
        time: "01:00 - 02:30",
        url: "../../static/older/icon3.png",
        distance: "5325 W 30th",
        person: "病历"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(timeList.value, (time, k0, i0) => {
          return {
            a: common_vendor.t(time.time),
            b: common_vendor.t(time.text),
            c: time.id
          };
        }),
        b: common_vendor.f(cardList.value, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.text),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.person),
            e: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/uni-app/eldoctor/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
