<template>
	<view class="container">
		<view class="suspend">
			<view class="profile">
				<image v-if="profile_url" :src="profile_url" style="border-radius: 50%;width: 150rpx;height: 150rpx;">
				</image>
				<image v-if="!profile_url" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="text-wrapper">
				<view class="username">
					{{username}}
				</view>
				<view class="oldername">
					关怀老人：{{older}}
				</view>
			</view>
			<image src="/static/young/icon_manage.png" style="width: 120rpx;height: 120rpx;margin-top: 20rpx;"
				@click="confirm"></image>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	const profile_url = ref(
		'https://ts1.cn.mm.bing.net/th/id/R-C.87e31573ecc8c23b96ae0d063a2d80f5?rik=0%2bIS%2b1ui2xO7rA&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2020%2f10%2f15%2f3bdbe46bb0fb42df9caca6d9df2a8c97.jpg&ehk=pPf%2bq9nVtQDoNE8M4n2OGd5i1oVEWQ6M1lBYSyN2IRI%3d&risl=&pid=ImgRaw&r=0'
	)

	const username = ref('李雅春')
	const older = ref('王云')
	const confirm = () => {
		uni.navigateTo({
			url: '/pages/medical-record/confirm'
		})
	}
</script>

<style scoped>
	.suspend {
		width: 100%;
		height: 210rpx;
		background-image: url('/static/young/user.png');
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.profile {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin: 30rpx;
	}

	.text-wrapper {
		width: 60%;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
	}

	.username {
		font-size: 46.88rpx;
		font-weight: 400;
		letter-spacing: 0rpx;
		line-height: 54.94rpx;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;
	}

	.oldername {
		font-size: 32.81rpx;
		font-weight: 400;
		letter-spacing: 0rpx;
		line-height: 38.46rpx;
		color: rgba(166, 166, 166, 1);
		text-align: left;
		vertical-align: top;
	}
</style>