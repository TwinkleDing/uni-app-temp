<template>
  <view>
		<uni-nav-bar
			title='记录'
			:fixed='false'
		/>
    <view class='content'>
      <view v-for="item in options" :key="item.prop">
        <uni-list>
          <uni-list-item :title="item.label"  :show-switch="true"  @switchChange="switchChange(item)" ></uni-list-item>
        </uni-list>
      </view>
    </view>
  </view>
</template>

<script>
  import mInput from '@/components/m-input.vue';
  
  export default {
    name: 'recordIndex',
		components: {
			mInput
		},
    data() {
      return {
        options: [
          {
            label: '早点睡'
          },
          {
            label: '少花钱'
          },
          {
            label: '少吃点'
          },
          {
            label: '多动动'
          },
          {
            label: '学学习'
          }
        ],
        list: [],
        addShow: false,
        newRecord: ''
      };
    },
    methods: {
      switchChange(e) {
        console.log(e);
      },
      showAdd() {
        this.addShow = true
      }
    }
  }
</script>

<style>
</style>