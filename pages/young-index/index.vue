<template>
	<view class="container">
		<view class="up">
			<view class="segmented-control">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
					class="classification" activeColor="rgba(108, 197, 208, 1)">
				</uni-segmented-control>
			</view>
		</view>
		<view class="card">
			<image src="../../static/young/hospital1.png" mode="widthFix" class='img1'></image>
		</view>
		<view class="list-wrapper">
			<view class="list1">
				<uni-section title="地址信息" type="line">
					<uni-group mode="card">
						<view> 医院电话：{{phone}} </view>
						<view> 医院地址：{{location}}</view>
						<view>
							<image src="../../static/young/map.png" mode="widthFix" class='img'></image>
						</view>
					</uni-group>

				</uni-section>
			</view>
			<view class="list2">
				<uni-section title="医生信息" type="line">
					<uni-list>
						<uni-list :border="true">
							<!-- 显示圆形头像 -->
							<uni-list-chat :avatar-circle="true" title="uni-app"
								avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
								note="您收到一条新的消息" time="2020-02-02 20:20"></uni-list-chat>
							<!-- 右侧带角标 -->
							<uni-list-chat title="uni-app"
								avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
								note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
							<!-- 头像显示圆点 -->
							<uni-list-chat title="uni-app"
								avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
								note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left"
								badge-text="dot"></uni-list-chat>
							<!-- 头像显示角标 -->
							<uni-list-chat title="uni-app"
								avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
								note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left"
								badge-text="99"></uni-list-chat>
							<!-- 显示多头像 -->
							<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息"
								time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
							<!-- 自定义右侧内容 -->
							<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息"
								time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
								<view class="chat-custom-right">
									<text class="chat-custom-text">刚刚</text>
									<!-- 需要使用 uni-icons 请自行引入 -->
									<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
								</view>
							</uni-list-chat>
						</uni-list>
					</uni-list>
				</uni-section>
			</view>
		</view>
		<view class="rule">
			<span>预约规则</span>
		</view>
		<view class="down">
			<tab-bar1></tab-bar1>
		</view>
	</view>
</template>

<script setup>
	import tabBar1 from '../tabBar.vue'
	import {
		ref
	} from 'vue'

	const items = ref(['综合', '距离', '好评'])
	const current = ref(0)
	const colorIndex = 0
	const phone = ref('010-2348909')
	const location = ref('北京市朝阳区樱花园东街2号')

	const onClickItem = (e) => {
		if (current.value !== e.currentIndex) {
			current.value = e.currentIndex
		}
	}
</script>


<style scoped>
	.img1 {
		width: 100vw;
		height: 200rpx;
	}

	.img {
		width: 600rpx;
		height: 1000rpx;
	}
</style>