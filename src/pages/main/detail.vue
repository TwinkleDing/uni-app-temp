<template>
  <view>
    <!-- <web-view :webview-styles="webviewStyles" 
      src="http://localhost:8082"></web-view> -->
  </view>
</template>

<script>
	import Icons from "@/components/uni-icons/uni-icons.vue";
  import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default{
    name: 'detail',
    components:{
      Icons
    },
    data() {
      return {
        webviewStyles: {
            progress: {
                color: '#FF3333'
            }
        }
      }
    },
    methods: {
    }
  }

</script>

<style lang="scss" scoped>
  
</style>