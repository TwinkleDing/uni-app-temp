<template>
  <view class='grid'>
    <uni-section title="默认样式（3列）" type="line"></uni-section>
		<view class="example-body">
			<uni-grid :column="3" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
			<uni-grid :column="3" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<uni-section title="动态加载" type="line"></uni-section>
		<view class="example-body">
			<view v-if="dynamicList.length!==0" class="grid-dynamic-box">
				<uni-grid :column="3" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in dynamicList" :index="index" :key="index">
						<view class="grid-item-box" :style="{'backgroundColor':item.color}">
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<button type="primary" @click="add">点击添加一个宫格</button>
			<button v-if="dynamicList.length !== 0" type="primary" style="margin-top: 15px;" @click="del">点击删除一个宫格</button>
		</view>
  </view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue';
	import uniGrid from '@/components/uni-grid/uni-grid.vue';
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
  export default {
    name: 'grid',
    components: {
      uniSection,
			uniGrid,
			uniGridItem,
    },
    data() {
      return {
				dynamicList: [],
				list: [{
						text: 'Grid 1',
						badge: '0',
						type: "primary"
					},
					{
						text: 'Grid 2',
						badge: '1',
						type: "success"
					},
					{
						text: 'Grid 3',
						badge: '99',
						type: "warning"
					},
					{
						text: 'Grid 4',
						badge: '2',
						type: "error"
					},
					{
						text: 'Grid 5'
					},
					{
						text: 'Grid 6'
					},
					{
						text: 'Grid 7'
					},
					{
						text: 'Grid 8'
					},
					{
						text: 'Grid 9'
					}
				]
      }
    },
    methods: {
			add() {
				if (this.dynamicList.length < 90) {
					this.dynamicList.push({
						url: `/static/c${this.dynamicList.length+1}.png`,
						text: `Grid ${this.dynamicList.length+1}`,
						color: this.dynamicList.length % 2 === 0 ? '#f5f5f5' : "#fff"
					})
				} else {
					uni.showToast({
						title: '最多添加9个',
						icon: 'none'
					});
				}
			},
			del() {
				this.dynamicList.splice(this.dynamicList.length - 1, 1)
			},
			change(e) {
				console.log(e)
			}
    }
  }
</script>

<style lang="scss" scoped>
  
</style>