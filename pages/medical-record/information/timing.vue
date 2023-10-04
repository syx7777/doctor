<template>
	<view class="container">
		<uni-card :title="item.title" :extra="item.extra" @click="edit" v-for="item in timeList">
			<text class="uni-body">{{item.content}}</text>
		</uni-card>
		<uni-fab ref="fab" :pattern="pattern" :horizontal="horizontal" :vertical="vertical" :direction="direction"
			@click="add" />
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const horizontal = 'right'
	const vertical = 'bottom'
	const direction = 'horizontal'
	const pattern = {
		color: '#7A7E83',
		backgroundColor: '#fff',
		selectedColor: '#007AFF',
		buttonColor: '#007AFF',
		iconColor: '#fff'
	}

	const timeList = ref([{
			id: 0,
			title: '2023-10-4 00:00 至 2023-10-10 12：00',
			extra: '来自女儿',
			content: '吃药提醒'
		},
		{
			id: 1,
			title: '2023-10-4 00:00 至 2023-10-10 12：00',
			extra: '来自儿子',
			content: '复诊提醒'
		}
	])

	const add = () => {
		uni.navigateTo({
			url: '/pages/medical-record/information/add_timing'
		})

	}

	const edit = () => {
		uni.navigateTo({
			url: '/pages/medical-record/information/add_timing'
		})
	}
</script>

<style>
</style>