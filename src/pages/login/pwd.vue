<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row">
				<text class="title">邮箱：</text>
				<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">新密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="findPwd">找回密码</button>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue';
	import {mapGetters, mapMutations} from 'vuex';
	import mInput from '@/components/m-input.vue';
	import service from '@/service.ts';
	import "@/style/login.css";
	
	export default Vue.extend({
		components: {
			mInput
		},
		data() {
			return {
				account: 'admin',
				password: 'admin',
				email: '123@123.com'
			}
		},
		methods: {
			findPwd() {
				console.log(this.email)
				console.log(this.account)
				console.log(this.password)
				if (this.account.lenght < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.lenght < 5) {
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
				const user =  {
					account: this.account,
					password: this.password,
					email: this.email
				}
				const validUser = service.getUsers().filter(item => {
					return item.account === user.account && item.email === user.email;
				})
				if(validUser.length > 0) {
					service.addUser(data);
					this.toMain(user.account);
				}else {
					uni.showToast({
						icon: 'none',
						title: '账号和邮箱不统一'
					});
				}
			}
		},
		toMain(userName) {
			this.LOGIN(userName);
			/**
			 * 强制登录时使用reLaunch方式跳转过来
			 * 返回首页也使用reLaunch方式
			 */
			if (this.forcedLogin) {
				uni.reLaunch({
					url: '../main/index',
				});
			} else {
				uni.navigateBack();
			}
		}
	})
</script>

<style>

</style>
