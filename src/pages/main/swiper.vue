<template>
  <view class=style-index>
    <!-- <swipers :list='list' /> -->
		111
  </view>
</template>

<script>
	import Swipers from '@/components/swiper/index.vue';
  export default {
    name: 'styleIndex',
    components: {
			Swipers
    },
		data() {
			return {
				list: [
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