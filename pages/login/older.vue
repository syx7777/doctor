<template>
	<view class="contanier">
		<image src="../../static/background.png" class="bg-img"></image>
		<view class="content">
			<view class="word1">
				<view class="round"></view>
				<p class="word2">欢迎您！</p>
			</view>
			<image class="img1" src="../../static/older/erWeiMa_1.png" mode="widthFix"></image>
			<p class="word3">子女端扫码进入您的APP</p>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.content {
		width: 100%;
		height: 1180rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.bg-img {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.word1 {
		display: block;
		left: 100rpx;
		width: 500rpx;
		height: 200rpx;
		opacity: 1;
	}

	.word2 {
		font-size: 50px;
		font-weight: 400;
		color: rgba(10, 32, 99, 1);
		letter-spacing: 0dp;
		line-height: 72dp;
		text-align: center;
		vertical-align: top;
	}

	.round {
		width: 8.54px;
		height: 8px;
		opacity: 1;
		border: 2px solid rgba(255, 102, 97, 1);
		border-radius: 50%;
		float: right;
	}

	.img1 {
		width: 600rpx;
		height: 600rpx;
	}

	.word3 {
		font-size: 50rpx;
		font-weight: 400;
		letter-spacing: 0rpx;
		line-height: 91.48rpx;
		color: rgba(10, 32, 99, 1);
		text-align: left;
		vertical-align: top;
	}
</style>