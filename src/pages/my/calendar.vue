<template>
  <view class='calendar'>
    <uni-nav-bar
        title='查看日历'
        left-icon="back"
        @clickLeft='goBack'
    />
    <view>
      <uni-calendar 
        :insert="true"
        :lunar="true" 
        :start-date="'2019-3-2'"
        :end-date="'2019-5-20'"
        @change="change"
      ></uni-calendar>
    </view>
  </view>
</template>

<script>
  import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
  export default {
    name: 'calendar',
    components:{
      uniCalendar,
			uniNavBar
    },
    methods: {
			goBack() {
				uni.navigateBack()
			},
      change(e) {
        console.log(e);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .calendar{
    width: 100vw;
    height: 100vh;
  }
</style>