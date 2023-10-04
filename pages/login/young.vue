<template>
	<view class="container">
		<view class="up">
			<image src="../../static/young/login.png" mode="" class="img1"></image>
		</view>
		<view class="center">
			<uni-card title="欢迎来到智慧医疗" class="content">
				<uni-forms :modelValue="formData" :rules="rules" ref="form">
					<uni-forms-item label="用户名" name="username">
						<uni-easyinput type="text" v-model="formData.username" placeholder="请输入用户名" />
					</uni-forms-item>
					<uni-forms-item label="密码" name="password">
						<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
					</uni-forms-item>
				</uni-forms>
				<button @click="submit" style="background-color: #042259; color: aliceblue;">
					登录
				</button>
				<view><a class="word">忘记密码</a></view>
			</uni-card>
		</view>
		<view class="bottom">
			<a class="word">创建您的账号</a>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 表单数据
				formData: {
					username: '',
					password: ''
				},
				rules: {
					// 对username字段进行必填验证
					username: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名',
							},
							{
								minLength: 1,
								maxLength: 8,
								errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符',
							}, {
								validateFunction: function(rule, value, data, callback) {
									if (value == 'Hcorex') {
										return true
									} else {
										onmessageerror('用户名错误')
									}
								}
							}
						]
					},
					// 对password字段进行必填验证
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value == '123456') {
										return true
									} else {
										onmessageerror('密码错误')
									}
								}
							}
						]
					}
				}
			}
		},
		mounted() {
			// 将 setRules 调用移到 mounted 钩子中
			this.$nextTick(() => {
				this.$refs.form.setRules(this.rules);
			});
		},
		methods: {
			// 触发提交表单
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					uni.redirectTo({
						// url: '/pages/medical-record/record'
						url: '/pages/index/index'
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.up {
		width: 100vw;
	}

	.img1 {
		width: 100%;
		height: 300rpx;
	}

	.word {
		font-size: 32.81rpx;
		font-weight: 400;
		letter-spacing: 0rpx;
		line-height: 36.59rpx;
		text-decoration-line: underline;
		color: rgba(64, 73, 124, 1);
		text-align: center;
		vertical-align: top;
		margin-top: 20rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.bottom {
		position: absolute;
		bottom: 50rpx;
	}
</style>