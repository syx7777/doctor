<template>
	<view class="container">

		<user></user>

		<view class="up">
			<view class="text">{{elder}}</view>
			<view class="three">
				<view class="img-wrapper">
					<image v-if="value1 == false" src="/static/young/icon/base.png" @click="change1" class="img">
					</image>
					<image v-if="value1 == true" src="/static/young/icon/selected-base.png" @click="change1"
						class="img">
					</image>
					<p>基本信息</p>
				</view>
				<view class="img-wrapper">
					<image v-if="value2 == false" src="/static/young/icon/selected-medical.png" @click="change2"
						class="img">
					</image>
					<image v-if="value2 == true" src="/static/young/icon/medical.png" @click="change2" class="img">
					</image>
					<p>病历信息</p>
				</view>
				<view class="img-wrapper">
					<image v-if="value3 == false" src="/static/young/icon/time.png" @click="change3" class="img">
					</image>
					<image v-if="value3 == true" src="/static/young/icon/selected-time.png" @click="change3"
						class="img">
					</image>
					<p>定时任务</p>
				</view>

			</view>
		</view>
		<view class="base" v-if="value1">
			<button class="btn">设为关怀</button>
		</view>
		<view class="medical" v-if="value2 == false">

		</view>
		<view class="time" v-if="value3 == true">
			<timing></timing>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	import user from '../../pages/user.vue'
	import timing from './information/timing.vue'

	const elder = ref('王云')

	const value1 = ref(false)
	const value2 = ref(false)
	const value3 = ref(false)

	const change1 = () => {
		value1.value = true
		value2.value = true
		value3.value = false
	}
	const change2 = () => {
		value1.value = false
		value2.value = false
		value3.value = false

	}
	const change3 = () => {
		value1.value = false
		value2.value = true
		value3.value = true
	}
</script>

<style scoped>
	.container {
		width: 100%;
		/* height: 100%; */
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.up {
		width: 90%;
		height: 360rpx;
		opacity: 1;
		border-radius: 90rpx 90rpx 0rpx 0rpx;
		margin: 30rpx;
		background: linear-gradient(180deg, rgba(223, 224, 251, 1) 0%, rgba(218, 233, 253, 1) 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.text {
		font-size: 46.88rpx;
		font-weight: 500;
		letter-spacing: 0rpx;
		line-height: 67.88rpx;
		color: rgba(28, 43, 66, 1);
		text-align: left;
		vertical-align: top;
	}

	.three {
		width: 95%;
		height: 200rpx;
		margin-left: 35rpx;
		margin-right: 35rpx;
		border-radius: 93.75rpx;
		background: rgba(255, 255, 255, 1);
		/* background-color: red; */
		box-shadow: 0rpx4.69rpx9.38rpxrgba(0, 0, 0, 0.25);
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.img-wrapper {
		width: 200rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.img {
		width: 120rpx;
		height: 136rpx;
		/* background-color: aqua; */
	}

	.btn {
		width: 321.09rpx;
		height: 75rpx;
		background-color: rgba(58, 136, 255, 1);
		color: #FFFFFF;
		text-align: center;
		line-height: 75rpx;
		position: fixed;
		bottom: 100rpx;
		margin-left: 30%;
	}
</style>