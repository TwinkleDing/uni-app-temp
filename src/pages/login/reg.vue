<template>
	<view class="reg">
		<uni-nav-bar 
				title='注册'
				left-icon="back"
				@clickLeft='goBack'
		/>
		<view class="content">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">账号：</text>
					<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
				</view>
				<view class="input-row border">
					<text class="title">密码：</text>
					<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
				</view>
				<view class="input-row">
					<text class="title">邮箱：</text>
					<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
				</view>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="register">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import mInput from '@/components/m-input.vue';
	import service from '@/service.ts';
	import "@/style/login.css";

	export default{
		components: {
			mInput,
      uniNavBar
		},
		data() {
			return {
				account: '',
				password: '',
				email: ''
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 5 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					account: this.account,
					password: this.password,
					email: this.email
				}
				service.addUser(data);
				uni.showToast({
					title: '注册成功'
				});
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
