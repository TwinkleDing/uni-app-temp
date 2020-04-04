<template>
  <view class=style-index>
    <swiperss :list='list' />
  </view>
</template>

<script>
	import Swiperss from '@/components/swiper/index.vue';
  export default {
    name: 'styleIndex',
    components: {
			Swiperss
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