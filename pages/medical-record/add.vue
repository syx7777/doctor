<template>
	<view class="container">
		<view class="form">
			<!-- 基础用法，不包含校验规则 -->
			<uni-forms ref="baseForm" :modelValue="baseFormData" :rules="rules">
				<uni-forms-item label="姓名" required>
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="年龄" required>
					<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
				</uni-forms-item>
				<uni-forms-item label="与账户之间的关系" required>
					<uni-data-select v-model="baseFormData.value" :localdata="range" @change="change"></uni-data-select>
				</uni-forms-item>
				<uni-forms-item label="手机号" required>
					<uni-easyinput v-model="baseFormData.number" placeholder="请输入手机号" />
				</uni-forms-item>
				<uni-forms-item label="出生年月">
					<uni-datetime-picker type="datetime" return-type="timestamp"
						v-model="baseFormData.datetimesingle" />
				</uni-forms-item>
			</uni-forms>
			<button @click="submit"
				style="background-color: #4C85F6; color: aliceblue;text-align: center; margin-top: 80rpx;">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				range: [{
						value: 0,
						text: '爷爷'
					},
					{
						value: 1,
						text: '奶奶'
					},
					{
						value: 2,
						text: '爸爸'
					},
					{
						value: 3,
						text: '妈妈'
					},
					{
						value: 4,
						text: '岳父'
					},
					{
						value: 5,
						text: '岳母'
					},
					{
						value: 6,
						text: '外公'
					},
					{
						value: 7,
						text: '外婆'
					}
				],
				baseFormData: {
					name: '',
					age: '',
					sex: 0,
					number: '',
					datetimesingle: '',
					value: 0
				},
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					},
					number: {
						rules: [{
							required: true,
							errorMessage: '手机号不能为空'
						}, {
							format: 'number',
							errorMessage: '手机号只能输入数字'
						}]
					}
				}
			}
		},
		mounted() {
			// 将 setRules 调用移到 mounted 钩子中
			this.$nextTick(() => {
				this.$refs.baseForm.setRules(this.rules);
			});
		},
		methods: {
			change(e) {
				console.log("e:", e);
			},
			submit() {
				this.$refs.baseForm.validate().then(res => {
					console.log('表单数据信息：', res);
					uni.redirectTo({
						// url: '/pages/medical-record/record'
						url: '/pages/medical-record/older-information'
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style scoped>
	.form {
		width: 86%;
		height: 100%;
		margin: 50rpx;

	}
</style>