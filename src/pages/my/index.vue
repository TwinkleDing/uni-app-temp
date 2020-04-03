<template>
	<view class='my'>
		<uni-nav-bar
			title='我的'
		/>
		<view class="center">
			<view class="logo" @click="bindLogin" :hover-class="!login ? 'logo-hover' : ''">
				<image class="logo-img" :src="avatarUrl"></image>
				<view class="logo-title">
					<text class="uer-name">Hi，{{hasLogin ? userName : '您未登录'}}</text>
					<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item border-bottom" @click="goCollection">
					<text class="list-icon">&#xe60c;</text>
					<text class="list-text">收藏图片</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item border-bottom" @click="goCard">
					<text class="list-icon">&#xe603;</text>
					<text class="list-text">我的卡券</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item border-bottom" @click="goAddressBook">
					<text class="list-icon">&#xe603;</text>
					<text class="list-text">通讯录</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item border-bottom" @click="goModalBook">
					<text class="list-icon">&#xe603;</text>
					<text class="list-text">模态窗</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item border-bottom" @click="goIcon">
					<text class="list-icon">&#xe603;</text>
					<text class="list-text">Icon</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item border-bottom" @click="goCalendar">
					<text class="list-icon">&#xe603;</text>
					<text class="list-text">日历信息</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item" @click="accountSet">
					<text class="list-icon">&#xe609;</text>
					<text class="list-text">账号管理</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
		</view>
		<account-set :showModal='showModal' @hideModal='hideModal' />
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import accountSet from './accountSet.vue'
	import { mapGetters,	mapMutations } from 'vuex'
	export default{
		name: 'my',
		components: {
			uniNavBar,
			accountSet
		},
		data() {
			return {
				login: false,
				avatarUrl: '/static/img/people.png',
				uerInfo: {},
				showModal: false
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
			goCard() {
				uni.navigateTo({
					url: './card',
				});
			},
			goCalendar() {
				uni.navigateTo({
					url: './calendar',
				});
			},
			goCollection() {
				uni.navigateTo({
					url: './collection',
				});
			},
			goAddressBook() {
				uni.navigateTo({
					url: './addressBook',
				});
			},
			goModalBook() {
				uni.navigateTo({
					url: './modal',
				});
			},
			goIcon() {
				uni.navigateTo({
					url: './icon',
				});
			},
			accountSet() {
				this.showModal = true
			},
			hideModal() {
				this.showModal = false
				console.log(this.showModal)
			}
		}
	}
</script>

<style>
  @import '@/common/common.css';

</style>
