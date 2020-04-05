<template>
  <view class='and'>
		<uni-nav-barss 
			title='原生'
		/>
    <view class='content'>
      <view>
        <button @click="getCurrentLocation()" type="primary">获取当前位置</button>
        <view>
          <view>当前位置：{{ address }}</view>
          <view>当前位置的经度：{{ longitude }}</view>
          <view>当前位置的纬度：{{ latitude }}</view>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
	import uniNavBarss from "@/components/uni-nav-bar/uni-nav-bar.vue";
  export default {
    name: '',
    components: {
      uniNavBarss
    },
    data() {
      return {
        address: '',
        longitude: '',
        latitude: '',
      };
    },
    created() {
    },
    methods: {
      getCurrentLocation() {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: (res) => {
            console.log(this)
            console.log(res)
            this.longitude = res. longitude;
            this.latitude = res. latitude;
            const address = res.address;
            this.address = address.country + address.province + address.city + address.district + address.street + address.streetNum	
          }
        });
      }
    }

  }
</script>

<style lang="scss" scoped>
  .and {
    /* #ifdef APP-PLUS */
    height: calc(100vh - var(--status-bar-height));
    /* #endif */
    /* #ifdef H5 */
    height: calc(100vh - 50px);
    /* #endif */
    .content {
    }
  }
</style>