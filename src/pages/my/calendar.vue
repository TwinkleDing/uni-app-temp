<template>
  <view class='calendar'>
    <uni-calendar 
      :insert="true"
      :lunar="true" 
      :start-date="'2019-3-2'"
      :end-date="'2019-5-20'"
      @change="change"
     ></uni-calendar>
  </view>
</template>

<script>
  import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
  export default {
    name: 'calendar',
    components:{
      uniCalendar
    },
    methods: {
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