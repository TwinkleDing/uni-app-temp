<template>
  <view>
		<uni-nav-bar
      title='我的卡券'
      left-icon="back"
      :fixed='true'
      @clickLeft='goBack'
		/>
    <view >
      <hm-balance-card :options="options"></hm-balance-card>
      <hm-balance-card :options="options"></hm-balance-card>
      <hm-balance-card :options="options"></hm-balance-card>
      <hm-balance-card :options="options"></hm-balance-card>
      <hm-balance-card :options="options"></hm-balance-card>
    </view>
  </view>
</template>

<script>
	import HmBalanceCard from '@/components/hm-balance-card/index.vue';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
  export default{
    name: 'Card',
    components: {
      HmBalanceCard,
      uniNavBar
    },
    data() {
      return {
				options: {
          layer:
            '/static/hm-balance-card/images/img_25821_0_0.png',
          info: '信用卡余额',
          zhanghaoguanli:
            '/static/hm-balance-card/images/img_25821_0_2.png',
          bd: '¥12929.05',
          main: '5326 5149 4497 1577',
          date: '日期',
          word: '12/24',
          cvv: 'CVV',
          num: '235',
          largeIcon:
            '/static/hm-balance-card/images/img_25821_0_1.png'
        }
      }
    },
    methods: {
			goBack() {
				uni.navigateBack()
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>