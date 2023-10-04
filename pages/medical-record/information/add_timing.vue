<template>
	<view class="container">
		<uni-card :is-shadow="false" class="title-wrapper">
			<uni-easyinput v-model="value" placeholder="标题" @input="input" class="title" prefix-icon="calendar-filled">
			</uni-easyinput>
		</uni-card>
		<uni-card :is-shadow="false" class="time-wrapper">
			<view class="example-body">
				<uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
			</view>
		</uni-card>
		<button class="btn">保存</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const value = ref('')

	const datetimerange = ref([])

	const input = (e) => {
		console.log('输入内容：', e);
	}
</script>

<style lang="scss" scoped>
	.title-wrapper {
		width: 85%;
		// height: 160rpx;
		// display: flex;
		// align-items: center;

		.iconfont {
			display: inline-block;
			vertical-align: middle;
		}

		.title {
			// width: 50%;
			// height: 60rpx;
			display: inline-block;
			vertical-align: middle;
		}
	}

	.btn {
		width: 80%;
		height: 75rpx;
		background-color: rgba(58, 136, 255, 1);
		color: #FFFFFF;
		text-align: center;
		line-height: 75rpx;
	}
</style>