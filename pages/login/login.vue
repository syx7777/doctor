<template>
	<view class="container">
		<image src="../../static/background.png" class="bg-img"></image>
		<view class="content">
			<view class="bigtitle">
				<p>请选择您的身份信息！</p>
			</view>
			<view class="older_card" @click="change1()">
				<image class="img_old" src=" ../../static/older.png" mode="widthFix"></image>
				<view class="word1">
					<view class="round1"></view>
					<p>长辈模式</p>
				</view>
				<!-- <view class="round1"></view> -->
			</view>
			<view class="young_card" @click="change2()">
				<view class="word2">
					<view class="round2"></view>
					<p>子女模式</p>
				</view>
				<image class="img_young" src="../../static/young.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	const change1 = () => {
		uni.navigateTo({
			url: './older',
			animationType: 'pop-in',
			animationDuration: 200
		});
	}
	const change2 = () => {
		uni.navigateTo({
			url: './young',
			animationType: 'pop-in',
			animationDuration: 200
		});
	}
</script>

<style scoped>
	.content {
		display: flex;
		justify-content: center;
	}

	.bigtitle {
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* top: 150rpx; */
		padding-top: 20rpx;
		font-size: 40rpx;
		font-weight: 500;
	}

	.bg-img {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.older_card {
		width: 320px;
		height: 200px;
		margin-left: 20px;
		margin-right: 20px;
		margin-top: 70px;
		opacity: 1;
		border-radius: 35px;
		background: rgba(255, 238, 241, 0.5);
		box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
		position: absolute;
	}

	.img_old {
		width: 120px;
		height: 120px;
		opacity: 1;
		position: relative;
		top: 8%;
		margin: 20px;
	}

	.word1 {
		width: 220rpx;
		height: 30rpx;
		text-align: center;
		position: absolute;
		left: 60%;
		top: 50%;
		font-size: 48rpx;
		font-weight: 800;
		color: rgba(27, 27, 33, 1);
	}

	.round1 {
		width: 4.54px;
		height: 4px;
		opacity: 1;
		border: 2px solid rgba(255, 102, 97, 1);
		border-radius: 50%;
		float: right;
	}

	.young_card {
		position: absolute;
		width: 320px;
		height: 200px;
		top: 250px;
		margin-left: 20px;
		margin-right: 20px;
		margin-top: 130px;
		opacity: 1;
		border-radius: 35px;
		background: rgba(255, 238, 241, 0.5);
		box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
	}

	.img_young {
		/* left: 50%; */
		width: 140px;
		height: 140px;
		opacity: 1;
		position: relative;
		left: 50%;
		top: 22%;
	}

	.word2 {
		width: 220rpx;
		height: 30rpx;
		text-align: center;
		position: absolute;
		right: 60%;
		top: 50%;
		font-size: 48rpx;
		font-weight: 800;
		color: rgba(27, 27, 33, 1);
	}

	.round2 {
		width: 4.54px;
		height: 4px;
		opacity: 1;
		border: 2px solid rgba(255, 102, 97, 1);
		border-radius: 50%;
		float: left;
	}
</style>