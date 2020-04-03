<template>
	<view class="qiun-columns">
		<view class="qiun-padding" style="font-size: 32rpx;">
			<text>{{option.tips}}</text>
		</view>
    <view class="qiun-title-bar" style="background-color: #E5FDC3;">
      <view class="qiun-title-dot-light">柱状图</view>
    </view>
    <view class="qiun-charts" style="background-color: #E5FDC3;">
      <!--#ifdef MP-ALIPAY -->
      <canvas :canvas-id="id" :id="id" class="charts" style="background-color: #E5FDC3;" :width="width*pixelRatio" :height="height*pixelRatio" :style="{'width':width+'px','height':height+'px'}" @touchstart="touchIt($event, id)"></canvas>
      <!--#endif-->
      <!--#ifndef MP-ALIPAY -->
      <canvas :canvas-id="id" :id="id" class="charts" style="background-color: #E5FDC3;" @touchstart="touchIt($event, id)"></canvas>
      <!--#endif-->
    </view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};

	export default {
		props: {
			id: {
				type: String,
				default: 'chart'
			},
			option: {
				type: Object,
				default() {
					return {}
				}
			},
			height: {
				type: Number,
				default: 0
			},
			width: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				pixelRatio: 1,
				lengend: {
					show:true,
					padding:5,
					lineHeight:11,
					margin:0,
				}
			}
		},
		mounted() {
			_self = this;
			setTimeout(()=>{
				_self.show()
			},1)
		},
		watch: {
			option: {
				handler() {
					_self.show()
				},
				deep: true
			},
		},
		methods: {
			show() {
				canvasObj[_self.id] = new uCharts({
					$this:_self,
					canvasId: _self.id,
					type: _self.option.type || 'column',
					padding:[15,15,0,15],
					legend: _self.option.lengend || _self.lengend,
					fontSize: _self.option.fontSize || 11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: _self.option.animation || false,
					categories: _self.option.categories,
					series: _self.option.series,
					xAxis: _self.xAxis,
					yAxis: {
						format: _self.option.yAxis.format || (val => val)
					},
					dataLabel: true,
					width: _self.width*_self.pixelRatio,
					height: _self.height*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.width*_self.pixelRatio*0.45/_self.option.categories.length
						}
					  }
				});
			},
			touchIt(e,id) {
        canvasObj[id].touchLegend(e, {
        	animation : false
        });
				canvasObj[id].showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
			},
		}
	}
</script>

<style>
	page {
		background: #F2F2F2;
		width: 750rpx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10rpx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10rpx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10rpx solid #0ea391;
		padding-left: 10rpx;
		font-size: 32rpx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}

	/* 横屏样式 */
	.qiun-charts-rotate {
		width: 700rpx;
		height: 1100rpx;
		background-color: #FFFFFF;
		padding: 25rpx;
	}

	.charts-rotate {
		width: 700rpx;
		height: 1100rpx;
		background-color: #FFFFFF;
	}

	/* 圆弧进度样式 */
	.qiun-charts3 {
		width: 750rpx;
		height: 250rpx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250rpx;
		height: 250rpx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		overflow: hidden;
		padding: 15rpx;
		height: 30rpx;
		line-height: 30rpx;
		margin: 10rpx;
		background: #ff9933;
		font-size: 30rpx;
		border-radius: 8rpx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
</style>
