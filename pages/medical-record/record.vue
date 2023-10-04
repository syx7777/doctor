<template>
	<view class="container">
		<view class="up">
			<view class="fontE">Welcome back</view>
			<view class="olderListText">老人列表</view>
			<view class="card-wrapper">
				<view class="card" @click="enter">
					<view class="text">
						<p class="card-word1">{{cardInformation.call}}</p>
						<p class="card-word2">{{cardInformation.name}}</p>
						<view class="tag-wrapper">
							<p class="card-tag" v-for="symptom in cardInformation.symptom">
								{{symptom}}
							</p>
						</view>
					</view>
					<view class="card-round">
						<view class="card-round-mini"></view>
					</view>
				</view>
				<button class="button" @click="add">+</button>
			</view>
		</view>
		<view class="center">
			<p class="other-olders">其他老人</p>
			<view class="other-cards" v-for="(item,index) in information" @click="enter">
				<p class="card-word1">{{item.name}}</p>
				<p class="card-word3">{{item.symptom}}</p>
			</view>
		</view>
		<tab-bar1></tab-bar1>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import tabBar1 from '../tabBar.vue'

	const cardInformation = ref({
		call: '妈妈',
		name: '王云',
		symptom: ['高血压', '劲椎病', '腰间盘突出']
	})

	const information = ref([{
			id: 1,
			call: '岳父',
			name: '张强',
			symptom: '患有羊癫疯'
		},
		{
			id: 2,
			call: '岳母',
			name: '赵丽',
			symptom: '患有糖尿病'
		},
		{
			id: 3,
			call: '爸爸',
			name: '刘飞',
			symptom: '患有白内障'
		}
	])

	const enter = () => {
		uni.navigateTo({
			url: '/pages/medical-record/older-information',
			animationType: 'pop-in',
			animationDuration: 200
		})
	}

	const add = () => {
		uni.navigateTo({
			url: '/pages/medical-record/add',
			animationType: 'pop-in',
			animationDuration: 200
		})
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
	}

	.up {
		width: 100%;
		height: 660rpx;
		background: linear-gradient(180deg, rgba(219, 230, 253, 1) 0%, rgba(204, 204, 204, 0) 100%);
	}

	.fontE {
		padding-left: 60rpx;
		padding-top: 30rpx;
		/** 文本1 */
		font-size: 37.5rpx;
		font-weight: 500;
		letter-spacing: 0rpx;
		line-height: 56.25rpx;
		color: rgba(181, 189, 199, 1);
		text-align: left;
		vertical-align: top;
	}

	.olderListText {
		font-size: 56.25rpx;
		font-weight: 700;
		letter-spacing: 0rpx;
		line-height: 39.84rpx;
		color: rgba(81, 164, 173, 1);
		text-align: left;
		vertical-align: top;
		margin-top: 30rpx;
		margin-left: 60rpx;
	}

	.card-wrapper {
		/* width: 80%;
		height: 50%; */
		width: 98%;
		height: 420rpx;
		display: flex;
		align-items: center;
		margin: 10rpx;
		justify-content: space-around;
	}

	.card {
		width: 76%;
		height: 420rpx;
		border-radius: 46.88rpx;
		background: radial-gradient(101.39% 101.07%, rgba(58, 219, 222, 1) 0%, rgba(199, 223, 253, 1) 100%);
		margin-top: 30rpx;
		margin-left: 40rpx;
		display: flex;
		/* flex-wrap: nowrap; */
		justify-content: space-between;
		align-items: center;
	}


	.card-word1 {
		font-size: 35rpx;
		font-weight: 300;
		letter-spacing: 0rpx;
		line-height: 39.84rpx;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;
		margin-left: 40rpx;
		padding-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.card-word2 {
		font-size: 63.28rpx;
		font-weight: 500;
		letter-spacing: 0rpx;
		line-height: 79.1rpx;
		color: rgba(29, 32, 39, 1);
		text-align: left;
		margin-left: 40rpx;
	}

	.tag-wrapper {
		width: 300rpx;
		display: flex;
		flex-direction: column;
	}

	.card-tag {
		color: #FFFFFF;
		font-weight: 300;
		width: 170rpx;
		height: 60.94rpx;
		border-radius: 46.88rpx;
		background: radial-gradient(101.39% 101.07%, rgba(19, 201, 62, 1) 0%, rgba(173, 228, 70, 1) 100%);
		;
		;
		margin-left: 30rpx;
		margin-top: 20rpx;
		text-align: center;
		line-height: 60.94rpx;
		/* line-height: 10rpx; */

	}

	.card-round {
		width: 200rpx;
		height: 330rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 190rpx 0 0 190rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.card-round-mini {
		width: 110rpx;
		height: 166rpx;
		opacity: 1;
		background: radial-gradient(101.39% 101.07%, rgba(58, 219, 222, 1) 0%, rgba(199, 223, 253, 1) 100%);
		border-radius: 160rpx 0 0 160rpx;
		box-shadow: 0rpx 14.06rpx 28.13rpx rgba(123, 123, 123, 0.2);
	}

	.button {
		color: #FFFFFF;
		background-color: black;
		width: 80rpx;
		height: 400rpx;
		text-align: center;
		line-height: 400rpx;
		border-radius: 25rpx;
		margin-top: 20rpx;
	}

	.other-olders {
		font-size: 56.25rpx;
		font-weight: 500;
		letter-spacing: 0rpx;
		line-height: 46.88rpx;
		color: rgba(81, 164, 173, 1);
		text-align: left;
		vertical-align: top;
		margin-left: 60rpx;
		margin-bottom: 20rpx;
	}

	.card-word3 {
		font-size: 28.13rpx;
		font-weight: 500;
		letter-spacing: 0rpx;
		line-height: 42.19rpx;
		color: rgba(152, 152, 152, 1);
		text-align: left;
		vertical-align: top;
	}

	.other-cards {
		background-color: #EFF1F3;
		margin-left: 60rpx;
		margin-bottom: 20rpx;
		border-radius: 30rpx;
		width: 80%;
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	.card-word3 {
		margin-left: 30rpx;
	}
</style>