<template>
  <view class="du-modal drawer-modal"
        :class="showModal ? 'show':''"
        @tap="hideModal">
    <view class="du-dialog" @tap.stop="stopTap">
      <view class="du-list menu">
        <view class="du-item arrow"
        @click="itemClick(item.url)"
        v-for="(item,index) in menuList" :key="index">
          <view class="modal-content">
            <view>{{item.label}}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'accountSet',
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modalName: null,
      menuList: [
        {
          id: 0,
          label: '退出登录',
          url: '../login/index'
        }
      ]
    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal')
    },
    stopTap() {
      console.log(1)
    },
    itemClick(url) {
      uni.reLaunch({
        url
      });
    }
  }
}
</script>

<style lang="scss" scoped>
    
  .du-modal {
		/* #ifdef APP-PLUS */
    height: calc(100vh -44px - var(--status-bar-height));
    top: calc(44px + var(--status-bar-height));
		/* #endif */
		/* #ifdef H5 */
		height: calc(100vh -44px);
    top: 44px;
		/* #endif */
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1110;
    opacity: 0;
    outline: 0;
    backface-visibility: hidden;
    perspective: 1000px;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out 0s;
    pointer-events: none;
    transform: scale(1);
    display: flex;
    justify-content: flex-end;
    &:before {
      content: "\200B";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
    .du-dialog {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 720upx;
      max-width: 100%;
      background-color: #f8f8f8;
      overflow: hidden;
      height: 100%;
      min-width: 200upx;
      border-radius: 0;
      margin: initial;
      transition-duration: 0.3s;
      flex-basis: 60%;
      transform: translateX(100%);
      text-align: left;
      &>.du-bar:first-child .action {
        min-width: 100upx;
        margin-right: 0;
        min-height: 100upx;
      }
      .menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        .arrow{
          width: 100%;
          height:40upx;
          padding: 20upx;
          border-bottom: 1px solid #f37b1d;
          color: #ff80ab;
        }
      }
    }
  }
  .show {
    opacity: 1;
    transition-duration: 0.3s;
    transform: scale(1);
    overflow-x: hidden;
    overflow-y: auto;
    pointer-events: auto;
    .du-dialog {
      transform: translateX(0%);
    }
  }
</style>