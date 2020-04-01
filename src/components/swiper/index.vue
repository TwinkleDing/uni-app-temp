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
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      activeColor: '#FF80AB',
      list: [
        {
          img: '/static/lol/big25011.jpg'
        },
        {
          img: '/static/lol/big37006.jpg'
        },
        {
          img: '/static/lol/big39000.jpg'
        },
        {
          img: '/static/lol/big84000.jpg'
        },
      ]
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