<template>
	<view class="pwd">
		<uni-nav-bar 
				left-icon="back"
				title='忘记密码'
				@clickLeft='goBack'
		/>
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
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import mInput from '@/components/m-input.vue';
	import service from '@/service.js';
	
	export default{
		components: {
			mInput,
      uniNavBar
		},
		data() {
			return {
				account: 'admin',
				password: 'admin',
				email: '123@123.com'
			}
		},
		methods: {
      ...mapMutations(['LOGIN']),
			goBack() {
				uni.navigateBack()
			},
			findPwd() {
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
					service.addUser(user);
					console.log(this)
					this.toMain(user.account);
				}else {
					uni.showToast({
						icon: 'none',
						title: '账号和邮箱不统一'
					});
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
		}
	}
</script>

<style>
	@import "@/style/login.css";

</style>
