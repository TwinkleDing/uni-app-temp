<template>
	<view>
		<view class="content">
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
		</view>
	</view>
</template>

<script lang='ts'>
	import Vue from 'vue';
	import {mapGetters, mapMutations} from 'vuex';
	import Detail from './detail.vue';
	export default Vue.extend({
		name: 'Mains',
		components: {
			Detail,
		},
		data() {
			return {
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

<style>
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
