<template>
	<view class="container">
		<view v-for="word in log" :key="word.id" class="word">
			<view class="white">
				{{word.prompt}}
			</view>
			<view class="blue">
				{{word.reply}}
			</view>
		</view>
		<view class="input">
			<view class="keyboard" v-if="types == false">
				<i class="iconfont" @click=change style="font-size: 80rpx;">&#xe661;</i>
				<uni-easyinput v-model="value" style="margin-left: 20rpx;"></uni-easyinput>
			</view>
			<view class="audio" v-if="types == true">
				<i class="iconfont" @click=change style="font-size: 80rpx;">&#xe888;</i>
				<button @click="voice" :disabled="isRecording" style="width: 80%;">请按住说话</button>
				<!-- <div class="audio-animation" :class="{ active: isRecording }"></div> -->
			</view>
		</view>
	</view>
</template>

<script setup>
	import Recorder from 'js-audio-recorder'
	// import audio from './audio.vue'
	import {
		toRefs,
		reactive
	} from 'vue'
	import {
		ref
	} from "vue";

	const log = ref([{
			id: 1,
			prompt: '请问番茄和鸡蛋可以一起吃吗？',
			reply: `当然可以一起吃番茄和鸡蛋，它们是常见的食材，可以制作各种美味的菜肴。以下是一些常见的番茄和鸡蛋组合：

	1. 番茄炒鸡蛋：这是一道非常常见的中国家常菜，将切好的番茄和鸡蛋一起炒制，通常会加入一些调味料和酱汁，制作出酸甜可口的菜肴。

	2. 番茄蛋汤：这是一道简单而营养丰富的汤，将切碎的番茄和打散的鸡蛋一起煮制，可以加入一些洋葱、香菜等调味料。

	3. 番茄鸡蛋三明治：将炒好的番茄和鸡蛋夹在面包片中，可以加入生菜、奶酪或其他配料，制作出美味的三明治。

	4. 番茄鸡蛋意大利面：将炒好的番茄和鸡蛋混合在煮熟的意大利面上，加入一些橄榄油、大蒜、香草和奶酪，制作出意式美食。

	总的来说，番茄和鸡蛋是非常兼容的食材，可以根据个人口味和食材的可用性制作各种不同的美食。无论是炒、煮、夹在三明治里还是混合在面食中，这两者的组合都可以提供丰富的风味和营养。`
		},
		{
			id: 2,
			prompt: '谢谢你',
			reply: '我将持续为您的健康保驾护航'
		}
	])

	const types = ref(true)
	const change = () => {
		types.value = !types.value
	}

	const data = reactive({
		//用于存储创建的语音对象
		recorder: null,
		formData: null,
		// 控制录音动画的显示隐藏
		showAnima: false,
		mation: true,
		isHistory: true,
		// 录音时长
		duration: 0,
		submit() { // 发送语音的方法
			data.recorder.pause() // 暂停录音
			data.timer = null
			console.log('上传录音') // 上传录音
			var formData = new FormData()
			var blob = data.recorder.getWAVBlob() //获取wav格式音频数据
			//此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为		  file塞入formData
			var newbolb = new Blob([blob], {
				type: 'audio/wav'
			})
			var fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
			//formData是传给后端的对象,
			formData.append('file', fileOfBlob)
			//计算出录音时长
			data.duration = Math.ceil((new Date() - data.duration) / 1000);
			console.log(data.duration);
			//发送给后端的方法
			sendAudio(formData).then(res => {
				console.log(res);
			})
		},
		// 录音按钮的点击事件
		voice() {
			//实例化语音对象
			data.recorder = new Recorder({
				sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
				sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
				numChannels: 1 // 声道，支持 1 或 2， 默认是1
			})
			//记录开始录音的时间
			data.duration = new Date();
			Recorder.getPermission().then(() => {
				console.log('开始录音')
				data.recorder.start() // 开始录音
			}, (error) => {
				console.log(`${error.name} : ${error.message}`)
			})
		},
		handleStop() {
			console.log('停止录音')
			data.recorder.stop() // 停止录音
			data.mation = false;
		},
		handlePlay() {
			console.log('播放录音')
			data.recorder.play() // 播放录音
		},
		handleDestroy() {
			console.log('销毁实例')
			if (data.recorder) {
				data.recorder.destroy() // 毁实例
			}
		},
	})
	const dataRefs = toRefs(data);
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.white {
		left: 53.75rpx;
		top: 517.97rpx;
		width: 400rpx;
		/* height: 180.47rpx; */
		opacity: 1;
		border-radius: 0rpx 23.44rpx 23.44rpx 23.44rpx;
		background: rgba(28, 43, 66, 0.03);
		display: flex;
		/* justify-content: center; */
		align-items: center;
		padding: 28.13rpx 60.94rpx 28.13rpx 60.94rpx;
		float: left;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.blue {
		left: 362.81rpx;
		top: 1103.91rpx;
		width: 400rpx;
		color: #FFFFFF;
		/* height: 119.53rpx; */
		opacity: 1;
		border-radius: 23.44rpx 0rpx 23.44rpx 23.44rpx;
		background: rgba(33, 122, 255, 1);
		display: flex;
		/* justify-content: center; */
		align-items: center;
		padding: 28.13rpx 60.94rpx 28.13rpx 60.94rpx;
		float: right;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.word {
		padding-bottom: 200rpx;
	}

	.input {
		position: fixed;
		bottom: 0rpx;
		width: 90%;
		height: 100rpx;
		margin: 20rpx;
	}

	.keyboard {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.audio {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.audio-animation {
		/* 样式用于表示录音时的动画效果 */
		width: 100px;
		height: 100px;
		background-color: #6CC5D0;
		border-radius: 50%;
		transition: background-color 0.3s ease;
	}
</style>