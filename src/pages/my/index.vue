<template>
	<view class="center">
		<view class="logo" @click="bindLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{hasLogin ? userName : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">收藏图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">收藏图集</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">管理图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">上传图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">账号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
  import Vue from 'vue';
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	export default Vue.extend({
		data() {
			return {
				login: false,
				avatarUrl: '/static/img/people.png',
				uerInfo: {}
			}
		},
		computed: mapGetters(['hasLogin', 'forcedLogin', 'userName']),
		methods: {
			...mapMutations(['LOGOUT']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/index',
				});
			},
			bindLogout() {
				this.LOGOUT();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/index',
					});
				}
			},
			goAbout() {
			}
		}
	})
</script>

<style>
  @import '@/common/common.css';

</style>
