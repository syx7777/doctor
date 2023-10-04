"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
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
    const types = common_vendor.ref(true);
    const change = () => {
      types.value = !types.value;
    };
    const data = common_vendor.reactive({
      //用于存储创建的语音对象
      recorder: null,
      formData: null,
      // 控制录音动画的显示隐藏
      showAnima: false,
      mation: true,
      isHistory: true,
      // 录音时长
      duration: 0,
      submit() {
        data.recorder.pause();
        data.timer = null;
        console.log("上传录音");
        var formData = new FormData();
        var blob = data.recorder.getWAVBlob();
        var newbolb = new Blob([blob], {
          type: "audio/wav"
        });
        var fileOfBlob = new File([newbolb], (/* @__PURE__ */ new Date()).getTime() + ".wav");
        formData.append("file", fileOfBlob);
        data.duration = Math.ceil((/* @__PURE__ */ new Date() - data.duration) / 1e3);
        console.log(data.duration);
        sendAudio(formData).then((res) => {
          console.log(res);
        });
      },
      // 录音按钮的点击事件
      voice() {
        data.recorder = new common_vendor.Recorder({
          sampleBits: 16,
          // 采样位数，支持 8 或 16，默认是16
          sampleRate: 16e3,
          // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
          numChannels: 1
          // 声道，支持 1 或 2， 默认是1
        });
        data.duration = /* @__PURE__ */ new Date();
        common_vendor.Recorder.getPermission().then(() => {
          console.log("开始录音");
          data.recorder.start();
        }, (error) => {
          console.log(`${error.name} : ${error.message}`);
        });
      },
      handleStop() {
        console.log("停止录音");
        data.recorder.stop();
        data.mation = false;
      },
      handlePlay() {
        console.log("播放录音");
        data.recorder.play();
      },
      handleDestroy() {
        console.log("销毁实例");
        if (data.recorder) {
          data.recorder.destroy();
        }
      }
    });
    common_vendor.toRefs(data);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(log.value, (word, k0, i0) => {
          return {
            a: common_vendor.t(word.prompt),
            b: common_vendor.t(word.reply),
            c: word.id
          };
        }),
        b: types.value == false
      }, types.value == false ? {
        c: common_vendor.o(change),
        d: common_vendor.o(($event) => _ctx.value = $event),
        e: common_vendor.p({
          modelValue: _ctx.value
        })
      } : {}, {
        f: types.value == true
      }, types.value == true ? {
        g: common_vendor.o(change),
        h: common_vendor.o((...args) => _ctx.voice && _ctx.voice(...args)),
        i: _ctx.isRecording
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e2f8c5c5"], ["__file", "D:/uni-app/eldoctor/pages/AI/AI.vue"]]);
wx.createPage(MiniProgramPage);
