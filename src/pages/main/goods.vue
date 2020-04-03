<template>
	<view class='goods'>
		<uni-section title="基础用法" type="line"></uni-section>
		<view class="example-body">
			<uni-goods-nav @click="onClick" />
		</view>
		<uni-section title="自定义用法" type="line"></uni-section>
		<view class="example-body">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
    name: 'goods',
		components: {
			uniSection,
			uniGoodsNav
		},
		data() {
			return {
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺'
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ffa200 ',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				]
			}
		},
		onLoad() {},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang='scss' scoped>
.goods{
  font-size: 14px;
  line-height: inherit;
  .example-body {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    padding: 0;
    font-size: 14px;
    background-color: #ffffff;
  }
  .goods-carts {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 50px;
  }
}


	

</style>