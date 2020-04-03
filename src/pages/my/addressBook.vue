<template>
	<view class="address-book">
		<uni-nav-bar
				title='通讯录'
				left-icon="back"
				@clickLeft='goBack'
		/>
		<view class="uni-scroll-view">
			<view class="input-row border">
				<m-input class="m-input" type="text" clearable focus v-model="search" placeholder="输入搜索"></m-input>
				<button class="btn">搜索</button>
			</view>
			<scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-'+ listCurID" :style="[{height:'calc(100vh - '+ CustomBar + 'px - 50px)'}]"
			:scroll-with-animation="true" :enable-back-to-top="true">
				<block v-for="(item,index) in list" :key="index">
					<view :class="'indexItem-' + item.name" :id="'indexes-' + item.name" :data-index="item.name">
						<view class="padding">{{item.name}}</view>
						<view class="cu-list menu-avatar no-padding">
							<view class="cu-item" v-for="(items,sub) in 2" :key="sub">
								<view class="cu-avatar round lg">{{item.name}}</view>
								<view class="content">
									<view class="text-grey">{{item.name}}<text class="text-abc">{{list[sub].name}}</text>君</view>
									<view class="text-gray text-sm">
										有{{sub+2}}个主子需要伺候
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<view class="indexBar" :style="[{height:'calc(100vh - ' + CustomBar + 'px - 50px)'}]">
				<view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove.stop="tMove">
					<view class="indexBar-item" v-for="(item,index) in list" :key="index" :id="index" @touchstart="getCur" @touchend="setCur"> {{item.name}}</view>
				</view>
			</view>
			<!--选择显示-->
			<view v-show="!hidden" class="indexToast">
				{{listCur}}
			</view>
		</view>
	</view>
</template>

<script>
  import mInput from '@/components/m-input.vue';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	export default {
    components: {
      mInput,
			uniNavBar
    },
		data() {
			return {
        search: '',
				CustomBar: 40,
				hidden: true,
				listCurID: '',
				list: [],
				listCur: '',
			};
		},
		onLoad() {
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
			}
			this.list = list;
			this.listCur = list[0];
		},
		onReady() {
			let that = this;
			uni.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
				that.boxTop = res.top
			}).exec();
			uni.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
				that.barTop = res.top
			}).exec()
    },
    watch: {
      search(data) {
				setTimeout(() => {
					this.listCur = data.toUpperCase()
					this.listCurID= this.listCur
				}, 200);
			}
    },
		methods: {
			goBack() {
				uni.navigateBack()
			},
			//获取文字信息
			getCur(e) {
        this.hidden = false;
				this.listCur = this.list[e.target.id].name;
			},
			setCur(e) {
        this.hidden = true;
				this.listCur = this.listCur
			},
			//滑动选择Item
			tMove(e) {
				let y = e.touches[0].clientY,
					offsettop = this.boxTop,
					that = this;
				//判断选择区域,只有在选择区才会生效
				if (y > offsettop) {
					let num = parseInt((y - offsettop) / 17);
					this.listCur = that.list[num].name
				};
			},

			//触发全部开始选择
			tStart() {
				console.log(1)
				this.hidden = false
			},

			//触发结束选择
			tEnd() {
				this.hidden = true;
				this.listCurID = this.listCur
			},
			indexSelect(e) {
				let that = this;
				let barHeight = this.barHeight;
				let list = this.list;
				let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
				for (let i = 0; i < list.length; i++) {
					if (scrollY < i + 1) {
						that.listCur = list[i].name;
						that.movableY = i * 20
						return false
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import "@/style/login.css";
	.address-book{

	}
  .uni-scroll-view{
    position: relative;
    width: 100%;
    height: 100%;
    max-height: inherit;
    background-color: #ffffff;
		.indexes {
			position: relative;
			.padding{
				color: #ff80ab;
				padding: 15px;
			}
		}
  }
  .cu-list.menu-avatar {
    overflow: hidden;
		.cu-item {
			position: relative;
			display: flex;
			padding-right: 5px;
			height: 70px;
			background-color: #ffffff;
			justify-content: flex-end;
			align-items: center;
			&:after {
				position: absolute;
				top: 0;
				left: 0;
				box-sizing: border-box;
				width: 200%;
				height: 200%;
				border-bottom: 0.5px solid #ddd;
				border-radius: inherit;
				content: " ";
				-webkit-transform: scale(.5);
				transform: scale(.5);
				-webkit-transform-origin: 0 0;
				transform-origin: 0 0;
				pointer-events: none;
			}
			.cu-avatar {
				font-variant: small-caps;
				margin: 0;
				padding: 0;
				display: inline-flex;
				text-align: center;
				justify-content: center;
				align-items: center;
				background-color: #ff80ab;
				color: #ffffff;
				white-space: nowrap;
				background-size: cover;
				background-position: center;
				vertical-align: middle;
				border-radius: 50%;
				position: absolute;
				left: 15px;
			}
			.lg {
				width: 48px;
				height: 48px;
				font-size: 2em;
			}
			.content{
				position: absolute;
				left: 73px;
				width: calc(100% - 48px - 30px - 60px - 10px);
				line-height: 1.6em;
				background-color: #ffffff;
				.text-grey{
					color: #ff80ab;
				}
				.text-gray{
					color: #aaaaaa;
				}	
			}
		}
  }
  .indexBar {
    position: fixed;
    right: 0px;
    bottom: 0px;
		padding: 20upx 20upx 20upx 60upx;
    display: flex;
    align-items: center;
		&-box {
			width: 40upx;
			height: auto;
			background: #fff;
			display: flex;
			flex-direction: column;
			box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
			border-radius: 10upx;
		}
		&-item {
			flex: 1;
			width: 40upx;
			height: 40upx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24upx;
			color: #888;
		}
  }
	.indexToast {
		position: fixed;
		top: 0;
		right: 80upx;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
		margin: auto;
		color: #fff;
		line-height: 100upx;
		text-align: center;
		font-size: 48upx;
  }
	.input-row{
		.btn{
			background: #ff80ab;
			width: 90px;    
			margin: 4px;
			height: 38px;
			line-height: 38px;
			color: #fff;
		}
	}
</style>
