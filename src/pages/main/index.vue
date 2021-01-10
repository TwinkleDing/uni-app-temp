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
			<view class='tab-content'>
				<view v-if="tabIndex === 0" >
					<uCharts :option='chartsOption' :width='375' :height='250' />
				</view>
				<view v-if="tabIndex === 1" >
					<collapse />
				</view>
				<view v-if="tabIndex === 2" >
					<goods />
				</view>
				<view v-if="tabIndex === 3" >
					<grid />
				</view>
				<view v-if="tabIndex === 4" >
					<swipers />
				</view>
				<view v-if="tabIndex === 5" >
					<swiper-action />
				</view>
				<view v-if="tabIndex === 6" >
					<steps />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';
	import uniNavBarss from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uCharts from '@/components/u-charts/index.vue';
	import collapse from './collapse.vue';
	import goods from './goods.vue';
	import grid from './grid.vue';
	import swipers from './swiper.vue';
	import swiperAction from './swiperAction.vue';
	import steps from './steps.vue';
	export default{
		name: 'Mains',
		components: {
			uniNavBarss,
			uCharts,
			collapse,
			goods,
			grid,
			swipers,
			swiperAction,
			steps
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
							name: '折叠面板',
							id: 'collapse'
					}, {
							name: '购物',
							id: 'goods'
					}, {
							name: 'grid',
							id: 'grid'
					}, {
							name: 'swiper',
							id: 'swiper'
					}, {
							name: '滑动操作',
							id: 'swipe'
					}, {
							name: '步骤条',
							id: 'junshi'
					}
				],
				chartsOption: {
					type: 'column',
					tips: '',
					fontSize: 11,
					animation: false,
					legend: {
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					yAxis: {
						format: ''
					},
					xAxis: {
						disableGrid: true,
					},
					categories: [],
					series: [],
					extra: {
						column: {
							type:'group',
							width: 20
						}
					}
				},
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
						this.option.tips = "网络错误";
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
			change(e) {}
		}
	};
</script>

<style lang="scss" scoped>
.main {
	/* #ifdef APP-PLUS */
	height: calc(100vh - var(--status-bar-height));
	/* #endif */
	/* #ifdef H5 */
	height: calc(100vh - 50px);
	/* #endif */
	.content {
		.tab-content{
			height: calc(100% - 43px);
			overflow: hidden;
			overflow-y: auto;
		}
	}
	.scroll-h {
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		flex-direction: row;
		white-space: nowrap;
		flex-wrap: nowrap;
		border-bottom: 1px solid #ccc;
		.uni-tab-item {
			flex-wrap: nowrap;
			padding-left: 34rpx;
			padding-right: 34rpx;
			background: #eee;
			display: inline-block;
			&-title {
				display: inline-block;
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
}

</style>
