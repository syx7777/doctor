<template>
	<view class="search">
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @input="input">
		</uni-search-bar>
		<uni-icons type="scan" size="25"></uni-icons>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const searchValue = ref()
	const input = (res) => {
		console.log('----input:', res)
	}
</script>

<style scoped>
	.search {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>