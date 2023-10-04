"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_group2 = common_vendor.resolveComponent("uni-group");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_segmented_control2 + _easycom_uni_group2 + _easycom_uni_section2 + _easycom_uni_list_chat2 + _easycom_uni_icons2 + _easycom_uni_list2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_group = () => "../../uni_modules/uni-group/components/uni-group/uni-group.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_list_chat = () => "../../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_group + _easycom_uni_section + _easycom_uni_list_chat + _easycom_uni_icons + _easycom_uni_list + tabBar1)();
}
const tabBar1 = () => "../tabBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const items = common_vendor.ref(["综合", "距离", "好评"]);
    const current = common_vendor.ref(0);
    const phone = common_vendor.ref("010-2348909");
    const location = common_vendor.ref("北京市朝阳区樱花园东街2号");
    const onClickItem = (e) => {
      if (current.value !== e.currentIndex) {
        current.value = e.currentIndex;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: current.value,
          values: items.value,
          styleType: "button",
          activeColor: "rgba(108, 197, 208, 1)"
        }),
        c: common_vendor.t(phone.value),
        d: common_vendor.t(location.value),
        e: common_vendor.p({
          mode: "card"
        }),
        f: common_vendor.p({
          title: "地址信息",
          type: "line"
        }),
        g: common_vendor.p({
          ["avatar-circle"]: true,
          title: "uni-app",
          avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20"
        }),
        h: common_vendor.p({
          title: "uni-app",
          avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-text"]: "12"
        }),
        i: common_vendor.p({
          title: "uni-app",
          avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        j: common_vendor.p({
          title: "uni-app",
          avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "99"
        }),
        k: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        l: common_vendor.p({
          type: "star-filled",
          color: "#999",
          size: "18"
        }),
        m: common_vendor.p({
          title: "uni-app",
          ["avatar-list"]: _ctx.avatarList,
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        }),
        n: common_vendor.p({
          border: true
        }),
        o: common_vendor.p({
          title: "医生信息",
          type: "line"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8735e056"], ["__file", "D:/uni-app/eldoctor/pages/young-index/index.vue"]]);
wx.createPage(MiniProgramPage);
