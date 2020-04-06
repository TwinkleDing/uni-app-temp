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
      <view>
        <button @click="chooseImage()" type="primary">选择图片</button>
        <view>
          <view class="img-box" :key='index' v-for="(item, index) in imageList">
            <image class='img-img' :src="item"></image>
          </view>
        </view>
      </view>
      <view>
        <button @click="getSystemInfo()" type="primary">系统信息</button>
        <view :key='index' v-for="(item, index) in systemInfo">
          {{ index }} : {{ item }}
        </view>
      </view>
      <view>
        <button @click="getNetwork()" type="primary">网络状态</button>
        <view :key='index' v-for="(item, index) in network">
          {{ index }} : {{ item }}
        </view>
      </view>
      <view>
        <button @click="callPhone()" type="primary">拨打电话</button>
        <view></view>
      </view>
      <view>
        <button @click="scanCode()" type="primary">扫码</button>
        <view :key='index' v-for="(item, index) in scanCodeContent">
          {{ index }} : {{ item }}
        </view>
      </view>
      <view>
        <button @click="getClipboard()" type="primary">剪切板</button>
        <view>{{ clipboard }}</view>
      </view>
      <view>
        <button @click="setScreenLight()" type="primary">设置屏幕亮度</button>
        <slider :value="screenLight" @change="sliderChange" min="1" max="100" :step="1" show-value />
      </view>
      <view>
        <button @click="phoneVibrate('long')" type="primary">长振动</button>
        <button @click="phoneVibrate()" type="primary">短振动</button>
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
        imageList: [],
        systemInfo: {},
        network: {},
        scanCodeContent: {},
        clipboard: '',
        screenLight: ''
      };
    },
    created() {
      // #ifdef APP-PLUS
      this.getSCreenLight()
      // #endif
    },
    methods: {
      getCurrentLocation() {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: (res) => {
            this.longitude = res. longitude;
            this.latitude = res. latitude;
            const address = res.address;
            this.address = address.country + address.province + address.city + address.district + address.street + address.streetNum	
          }
        });
      },
      chooseImage() {
        uni.chooseImage({
          success: (res) => {
            this.imageList = res.tempFilePaths
          }
        })
      },
      getSystemInfo() {
        uni.getSystemInfo({
          success: res => {
            this.systemInfo = res
          }
        })
      },
      getNetwork() {
        uni.getNetworkType({
          success: res => {
            this.network = res
          }
        })
      },
      callPhone() {
        uni.makePhoneCall({
          phoneNumber: '' //仅为示例
        });
      },
      scanCode() {
        uni.scanCode({
          onlyFromCamera: true,
          scanType: ['qrCode', 'barCode', 'datamatrix'],
          success: res => {
            this.scanCodeContent = res
          }
        })
      },
      getClipboard() {
        uni.getClipboardData({
          success: res => {
            this.clipboard = res
          }
        })
      },
      getSCreenLight() {
        uni.getScreenBrightness({
          success: res => {
            this.screenLight = parseInt(res.value * 100)
          }
        });
      },
      setScreenLight() {
      },
      sliderChange(e) {
        this.screenLight =  e.detail.value
        uni.setScreenBrightness({
          value: this.screenLight / 100
        })
      },
      phoneVibrate(yes) {
       if(yes) {
          uni.vibrateLong({
          success: res => {
            console.log(res)
          }
        })
       }else {
        uni.vibrateShort({
          success: res => {
            console.log(res)
          }
        })
       }
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
      .img-box {
        height: 200px;
        width: 300px;
        .img-img {
          width: 100%;
        }
      }
    }
  }
</style>