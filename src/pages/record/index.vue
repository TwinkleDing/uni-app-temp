<template>
  <view>
		<uni-nav-bar
			title='记录'
			:fixed='false'
		/>
    <view class='content'>
      <view>
        <view v-for='(itemDate, index) in list' :key='index'>
          {{itemDate[0]}}
          <view v-for='item in itemDate[1]' :key='item.label'>
            <uni-list>
              <uni-list-item
                :show-switch='true'
                :switchChecked='item.do'
                :title='item.label'
                @switchChange='switchChange($event, itemDate[0], item.label)'></uni-list-item>
            </uni-list>
          </view>
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
        list: new Map(),
        addShow: false,
        newRecord: ''
      };
    },
    created() {
      if(!getStorage('record')) {
        this.list.set(this.formatDate(new Date()), this.options);
      }else {
        this.list = getStorage('record');
      }
    },
    methods: {
      switchChange(e, date, label) {
        let data = this.list.get(date)
        data.map(item => {
          if(item.label === label) {
            item.do = e.value;
          }
        })
        this.list.set(date, data)
			  setStorage('record', this.list);
      },
      showAdd() {
        this.addShow = true
      },
      formatDate(date) {
        let myyear = date.getFullYear();
        let mymonth = date.getMonth() + 1;
        let myweekday = date.getDate();
    
        if (mymonth < 10) {
          mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
          myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth + "-" + myweekday);//想要什么格式都可以随便自己拼
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