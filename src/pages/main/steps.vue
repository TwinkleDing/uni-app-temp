<template>
	<view>
		<uni-section title="基本用法" type="line"></uni-section>
		<view class="example-body">
			<uni-steps :options="list1" active-color="#007AFF" :active="active" />
		</view>
		<uni-section title="纵向排列" type="line"></uni-section>
		<view class="example-body">
			<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
		</view>
		<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="change"><text class="word-btn-white">改变状态</text></view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		components: {
			uniSection,
			uniSteps
		},
		data() {
			return {
				active: 1,
				list1: [{
					title: '事件一'
				}, {
					title: '事件二'
				}, {
					title: '事件三'
				}, {
					title: '事件四'
				}],
				list2: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-12'
				}, {
					title: '买家签收',
					desc: '2018-11-13'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
		flex-direction: column;
		padding: 15px;
		padding: 15px;
	}
	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}
	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}
	.word-btn--hover {
		background-color: #4ca2ff;
	}
</style>