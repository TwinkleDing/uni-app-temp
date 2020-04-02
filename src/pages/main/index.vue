<template>
	<view class="main">
		<uni-nav-barss 
				background-color='#ff80ab'
				color='#fff'
				title='首页'
				:shadow='false'
				:border='false'
		/>
		<view class="content">
			<swipers :list='list' />
			<view v-if="hasLogin" class="hello">
				<view class="title">
					您好 {{userName}}，您已成功登录。
				</view>
			</view>
			<view v-if="!hasLogin" class="hello">
				<view class="title">
					您好 游客。
				</view>
			</view>
			<detail />
		</view>
	</view>
</template>

<script lang='ts'>
	import Vue from 'vue';
	import {mapGetters, mapMutations} from 'vuex';
	import uniNavBarss from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import Detail from './detail.vue';
	import Swipers from '@/components/swiper/index.vue';
	export default Vue.extend({
		name: 'Mains',
		components: {
			Detail,
			Swipers,
			uniNavBarss
		},
		data() {
			return {
				list: [
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					},
				]
			}
		},
		onLoad() {
			this.loginOr();
		},
		computed: {
			...mapGetters(['forcedLogin', 'hasLogin', 'userName'])
		},
		methods: {
			loginOr() {
				if(!this.hasLogin) {
					uni.showModal({
						title: '未登录',
						content: '未登录，请登录后继续',
						showCancel: !this.forcedLogin,
						success: (res) => {
							if(this.forcedLogin) {
								uni.reLaunch({url: '../login/index'});
							}else {
								// uni.navigateTo({url: '../main/index'});
							};
						}
					})
				};
			}
		}
	});
</script>

<style lang="scss" scoped>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
</style>
