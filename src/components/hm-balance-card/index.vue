<template>
  <view class="hm-balance-card">
    <view class="box">
      <image class="layer" :src="options.layer" />
      <view class="hd">
        <text class="info">{{ options.info }}</text>
        <view class="wrap">
          <view class="empty" />
          <image class="zhanghaoguanli" :src="options.zhanghaoguanli" />
        </view>
      </view>
      <text class="bd">{{ options.bd }}</text>
      <text class="main">{{ options.main }}</text>
      <view class="ft">
        <view class="block">
          <text class="date">{{ options.date }}</text>
          <text class="word">{{ options.word }}</text>
        </view>
        <view class="group">
          <text class="cvv">{{ options.cvv }}</text>
          <text class="num">{{ options.num }}</text>
        </view>
        <image class="largeIcon" :src="options.largeIcon" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'HmBalanceCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-balance-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          layer:
            './images/img_25821_0_0.png',
          info: '信用卡余额',
          zhanghaoguanli:
            './images/img_25821_0_2.png',
          bd: '¥12929.05',
          main: '5326 5149 4497 1577',
          date: '日期',
          word: '12/24',
          cvv: 'CVV',
          num: '235',
          largeIcon:
            './images/img_25821_0_1.png'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
</style>
