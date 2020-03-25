<template>
	<view class="content">
		<view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
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
			}
		},
		computed: mapGetters(['hasLogin', 'forcedLogin']),
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
			}
			
		}
	})
</script>

<style>

</style>
