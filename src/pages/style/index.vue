<template>
  <view class=style-index>
		<uni-nav-bar 
				title='样式'
		/>
		<view class="content">
			<swipers :list='list' />
		</view>
  </view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import Swipers from '@/components/swiper/index.vue';
  export default {
    name: 'styleIndex',
    components: {
      uniNavBar,
			Swipers
    },
		data() {
			return {
				list: [
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					},
					{
						img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					},
				]
			}
		},
    
  }
</script>

<style lang="scss" scoped>
  
</style>