<template>
  <view class="uni-padding-wrap">
    <swiper class="swiper"
      :indicator-dots="indicatorDots"
      :indicator-active-color='activeColor'
      :autoplay="autoplay"
      :interval="interval"
      :acceleration="true"
      :circular="true"
      :duration="duration">
        <swiper-item :key="key" v-for="(item, key) in list">
            <view class="swiper-item">
              <img :src="item.img" />
            </view>
        </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      activeColor: '#FF80AB',
    }
  }
}
</script>

<style lang="scss" scoped>
.uni-padding-wrap{
  width: 100%;
  .swiper{
    width: 100%;
    .swiper-item{
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>