<template>
  <view>
		<hm-balance-card :options="options"></hm-balance-card>
		<hm-balance-card :options="options"></hm-balance-card>
		<hm-balance-card :options="options"></hm-balance-card>
		<hm-balance-card :options="options"></hm-balance-card>
		<hm-balance-card :options="options"></hm-balance-card>
  </view>
</template>

<script lang='ts'>
  import Vue from 'vue';
	import HmBalanceCard from '@/components/hm-balance-card/index.vue';
  export default Vue.extend({
    name: 'Card',
    components: {
      HmBalanceCard
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
    }
  })
</script>

<style lang="scss">
  
</style>