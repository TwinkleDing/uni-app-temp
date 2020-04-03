<template>
	<view class="main">
		<uni-nav-barss 
			title='首页'
		/>
		<view class='content'>
			<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
					<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
				</view>
			</scroll-view>
			<view >
				<view v-if="tabIndex === 0" >
					<uCharts :option='chartsOption' :width='375' :height='250' />
				</view>
				<view v-if="tabIndex === 1" >1</view>
				<view v-if="tabIndex === 2" >2</view>
				<view v-if="tabIndex === 3" >3</view>
				<view v-if="tabIndex === 4" >4</view>
				<view v-if="tabIndex === 5" >5</view>
				<view v-if="tabIndex === 6" >6</view>
				<view v-if="tabIndex === 7" >7</view>
				<view v-if="tabIndex === 8" >8</view>
				<view v-if="tabIndex === 9" >9</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';
	import uniNavBarss from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uCharts from '@/components/u-charts/index.vue';
	export default{
		name: 'Mains',
		components: {
			uniNavBarss,
			uCharts
		},
		data() {
			return {
				tabIndex: 0,
				scrollInto: "",
				tabBars: [
					{
							name: '图表',
							id: 'tubiao'
					}, {
							name: '推荐',
							id: 'tuijian'
					}, {
							name: '体育',
							id: 'tiyu'
					}, {
							name: '热点',
							id: 'redian'
					}, {
							name: '财经',
							id: 'caijing'
					}, {
							name: '娱乐',
							id: 'yule'
					}, {
							name: '军事',
							id: 'junshi'
					}, {
							name: '历史',
							id: 'lishi'
					}, {
							name: '本地',
							id: 'bendi'
					}
				],
				chartsOption: {
					type: 'column',
					fontSize: 11,
					animation: false,
					legend: {
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					categories: [],
					series: [],
					yAxis: {
						format: ''
					},
					xAxis: {
						disableGrid: true,
					},
					tips: ''
				}
			}
		},
		created() {
			this.loginOr();
			this.getServerData()
		},
		computed: {
			...mapGetters(['forcedLogin', 'hasLogin'])
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
			},
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			switchTab(index) {
				this.tabIndex = Number(index)
			},
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					data: {},
					success: (res) => {
						this.fillData(res.data);
					},
					fail: () => {
						this.option.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data) {
				this.tips = data.tips;
				this.chartsOption.categories = data.Column.categories;
				this.chartsOption.series = data.Column.series;
			},
		}
	};
</script>

<style lang="scss" scoped>
.main {
	height: calc(100vh - 50px);
	.scroll-h {
		width: 750rpx;
		height: 80rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
		box-shadow: 1px 1px #999;
		.uni-tab-item {
			/* #ifndef APP-PLUS */
			display: inline-block;
			/* #endif */
			flex-wrap: nowrap;
			padding-left: 34rpx;
			padding-right: 34rpx;
			background: #eee;
			&-title {
				color: #555;
				font-size: 30rpx;
				height: 80rpx;
				line-height: 80rpx;
				flex-wrap: nowrap;
				/* #ifndef APP-PLUS */
				white-space: nowrap;
				/* #endif */
				&-active {
						color: #007AFF;
				}
			}
		}
	}
	.content {
	}
}

</style>
