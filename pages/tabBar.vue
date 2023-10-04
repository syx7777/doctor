<template>
	<view class="container">
		<view class="tabBar">
			<view @click="tabBar_index" class="bar">
				<image src="../../static/young/index.png" v-if="index1 == 0" mode="widthFix" class="img"></image>
				<image src="../../static/young/index-selected.png" v-if="index1 == 1" class="img"></image>
				<view>首页</view>
			</view>
			<view @click="tabBar_record" class="bar">
				<image src="../../static/young/record.png" v-if="index2 == 0" class="img"></image>
				<image src="../../static/young/record-selected.png" v-if="index2 == 1" class="img"></image>
				<view>老人病历</view>
			</view>
			<view @click="tabBar_AI" class="bar">
				<image src="../../static/young/dialog.png" v-if="index3 == 0" class="img"></image>
				<image src="../../static/young/dialog-selected.png" v-if="index3 == 1" class="img"></image>
				<view>AI对话</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const index1 = ref(0)
	const index2 = ref(1)
	const index3 = ref(0)
	const tabBar_index = () => {
		index1.value = 0
		uni.navigateTo({
			url: '/pages/young-index/index',
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
	const tabBar_record = () => {
		index2.value = 1
		uni.navigateTo({
			url: '/pages/medical-record/record',
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
	const tabBar_AI = () => {
		index3.value = 1
		uni.navigateTo({
			url: '/pages/young-AI/AI',
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
</script>

<style scoped>
	.img {
		width: 50rpx;
		height: 50rpx;
	}

	.tabBar {
		width: 100vw;
		height: 150rpx;
		background-color: white;
		position: fixed;
		display: flex;
		justify-content: space-around;
		align-items: center;
		bottom: 0;
	}

	.bar {
		width: 150rpx;
		height: 130rpx;
		/* background-color: aquamarine; */
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
	}
</style>