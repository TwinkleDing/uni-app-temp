<template>
	<view>
		<view class="content">
			<view v-if="hasLogin" class="hello">
				<view class="title">
					您好 {{userName}}，您已成功登录。
				</view>
				<view class="ul">
					<view>这是 uni-app 带登录模板的示例App首页。</view>
					<view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
				</view>
			</view>
			<view v-if="!hasLogin" class="hello">
				<view class="title">
					您好 游客。
				</view>
				<view class="ul">
					<view>这是 uni-app 带登录模板的示例App首页。</view>
					<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
				</view>
			</view>
		</view>
		<detail  type='star' />
		<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
		<hm-balance-card :options="options"></hm-balance-card>
		<m-icons type='star'></m-icons>
		<uni-iconss type="contact" size="30"></uni-iconss>
	</view>
</template>

<script lang='ts'>
	import Vue from 'vue';
	import {mapGetters, mapMutations} from 'vuex';
	import Detail from './detail.vue';
	import HmBalanceCard from '@/components/hm-balance-card/index.vue';
	import MIcons from '@/components/m-icon/m-icon.vue';
	import uniIconss from "@/components/uni-icons/uni-icons.vue";
	import MInput from "@/components/m-input.vue";
	export default Vue.extend({
		name: 'Mains',
		components: {
			Detail,
			HmBalanceCard,
			MIcons,
			uniIconss,
			MInput
		},
		data() {
			return {
				title: 'Hello',
				account:'',
				options: {
          layer:
            '/static/hm-balance-card/images/img_25821_0_0.png',
          info: '信用卡余额',
          zhanghaoguanli:
            '/static/hm-balance-card/images/img_25821_0_2.png',
          bd: '¥12929.05',
          main: '5326 5149 4497 1577',
          date: '日期',
          word: '12/24',
          cvv: 'CVV',
          num: '235',
          largeIcon:
            '/static/hm-balance-card/images/img_25821_0_1.png'
        }
			}
		},
		onLoad() {
			this.loginOr();
		},
		computed: {
			...mapGetters(['forcedLogin', 'hasLogin', 'userName'])
		},
		mounted() {
			console.log(this.userName)
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
