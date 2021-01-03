<template>
  <view>
		<uni-nav-bar
			title='记录'
			:fixed='false'
		/>
    <view class='content'>
      <view>
        <view v-for='item in list' :key='item.label'>
          <uni-list>
            <uni-list-item
              :show-switch='true'
              :switchChecked='item.do'
              :title='item.label'
              @switchChange='switchChange($event, item.label)'></uni-list-item>
          </uni-list>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import mInput from '@/components/m-input.vue';
  import {setStorage, getStorage} from '@/util/store';

  export default {
    name: 'recordIndex',
		components: {
			mInput
		},
    data() {
      return {
        options: [
          {
            label: '早点睡',
            do: false
          },
          {
            label: '少花钱',
            do: false
          },
          {
            label: '少吃点',
            do: false
          },
          {
            label: '多动动',
            do: false
          },
          {
            label: '学学习',
            do: false
          }
        ],
        list: [],
        addShow: false,
        newRecord: ''
      };
    },
    created() {
      if(!getStorage('record')) {
        this.list = this.options;
      }else {
        this.list = getStorage('record');
      }
    },
    methods: {
      switchChange(e, label) {
        this.list.map(item => {
          if(item.label === label) {
            item.do = e.value;
          }
        })
			  setStorage('record', this.list);
      },
      showAdd() {
        this.addShow = true
      }
    }
  }
</script>

<style lang="scss">
.finish {
  background: #ff80ad;
  color: #fff;
}
</style>