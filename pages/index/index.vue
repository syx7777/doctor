<template>
	<view class="container">
		<view class="center">
			<view class="timeflex">
				<view class="time-wrapper" v-for='time in timeList' :key="time.id">
					<view class="time">
						<p class="word4">{{time.time}}</p>
						<p class="word5">{{time.text}}</p>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="uni-card-wrapper" v-for="item in cardList" :key="item.id">
					<view class="card-up">
						<view>
							<image :src='item.url' mode="widthFix" class="card-img"></image>
						</view>
						<view class="textwrapper">
							<view class="text1">
								{{item.text}}
							</view>
							<!-- <view class="text2">
								{{item.time}}
							</view> -->
						</view>
					</view>
					<view class="linewrapper">
						<view class="line"></view>
					</view>
					<view class="card-down">
						<!-- <view class="distance">
							<uni-icons class="icon" color="#FFFFFF" type="location" size="50rpx"></uni-icons>
							{{item.distance}}
						</view> -->
						<view class="text2">
							{{item.time}}
						</view>
						<view class="person">
							{{item.person}}
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const timeList = ref([{
			id: 1,
			time: '09:00',
			text: '上午'
		},
		{
			id: 2,
			time: '10:00',
			text: '上午'
		},
		{
			id: 3,
			time: '11:00',
			text: '上午'
		},
		{
			id: 4,
			time: '12:00',
			text: '下午'
		},
		{
			id: 5,
			time: '01:00',
			text: '下午'
		},
		{
			id: 6,
			time: '02:00',
			text: '下午'
		},
		{
			id: 7,
			time: '03:00',
			text: '下午'
		},
		{
			id: 8,
			time: '04:00',
			text: '下午'
		},
		{
			id: 9,
			time: '05:00',
			text: '下午'
		},
		{
			id: 10,
			time: '06:00',
			text: '晚上'
		},
		{
			id: 11,
			time: '07:00',
			text: '晚上'
		},
		{
			id: 12,
			time: '08:00',
			text: '晚上'
		},
		{
			id: 13,
			time: '09:00',
			text: '晚上'
		},
		{
			id: 14,
			time: '10:00',
			text: '晚上'
		},
		{
			id: 15,
			time: '11:00',
			text: '晚上'
		}
	])
	const cardList = ref([{
			id: 1,
			text: '早餐吃药',
			time: '09:00 - 10:30',
			url: "../../static/older/icon1.png",
			distance: '321 W 16th',
			person: '女儿'
		},
		{
			id: 2,
			text: '中午的药分饭前和饭后吃',
			time: '11:00 - 12:30',
			url: "../../static/older/icon2.png",
			distance: '5325 W 30th',
			person: '陶医生'
		},
		{
			id: 3,
			text: '复诊',
			time: '01:00 - 02:30',
			url: "../../static/older/icon3.png",
			distance: '5325 W 30th',
			person: '病历'
		},
	])
</script>


<style scoped>
	.container {
		width: 100%;
		height: 200%;
		background-color: white;
	}

	.center {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		margin: 20rpx;

	}

	.item {
		width: 78%;
	}

	.timeflex {
		width: 16%;
		display: flex;
		flex-direction: column;
	}


	.time {
		margin-top: 20rpx;
		margin-bottom: 50rpx;
		margin-left: 10rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.word4 {
		font-size: 32.81rpx;
		font-weight: 400;
		letter-spacing: 2.34rpx;
		line-height: 36.59rpx;
		color: rgba(47, 51, 52, 1);
		text-align: left;
		vertical-align: top;
	}

	.word5 {
		font-size: 28.13rpx;
		font-weight: 400;
		letter-spacing: 2.34rpx;
		line-height: 31.36rpx;
		color: rgba(165, 172, 173, 1);
		text-align: left;
		vertical-align: top;
	}

	.uni-card-wrapper {
		width: 95%;
		height: 290.63rpx;
		opacity: 1;
		border-radius: 32.81rpx;
		background: rgba(108, 197, 208, 1);
		margin: 20rpx;
	}

	.card-up {
		display: flex;
	}

	.textwrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card-img {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
	}

	.text1 {
		font-size: 48rpx;
		font-weight: 400;
		letter-spacing: 2.34rpx;
		line-height: 52.27rpx;
		color: rgba(255, 255, 255, 1);
		text-align: left;
		vertical-align: top;
	}

	.text2 {
		font-size: 48rpx;
		font-weight: 400;
		letter-spacing: 2.34rpx;
		line-height: 31.36rpx;
		color: rgba(240, 253, 254, 1);
		text-align: left;
		vertical-align: top;
		margin-top: 10rpx;
		margin-left: 20rpx;
	}

	.linewrapper {
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.line {
		width: 95%;
		height: 10rpx;
		border-bottom: rgba(129, 211, 222, 1) solid 3rpx;
	}

	.icon {
		margin-left: 20rpx;
	}

	.card-down {
		display: flex;
		justify-content: space-between;
		color: #FFFFFF;
		margin-top: 30rpx;
	}

	.person {
		font-size: 48rpx;
		margin-right: 20rpx;
		line-height: 31.36rpx;
		text-align: right;
		vertical-align: top;
		margin-top: 10rpx;
	}
</style>