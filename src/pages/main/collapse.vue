<template>
  <view class='collapse'>
    <uni-collapse ref="add" class="warp" @change="change">
      <uni-collapse-item v-for="(sub, key) in Collapses.data" :key="key"
        :open="sub.open"
        :show-animation="sub.showAnimation"
        :disabled="sub.disabled"
        :title="sub.subName">
        <text class="content">{{ sub.content }}</text>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
  export default {
		components: {
			uniCollapse,
			uniCollapseItem
    },
    data() {
      return {
				Collapses: {
					name: '基础用法',
					data: [{
							type: false,
							subName: '默认开启',
							open: true,
              showAnimation: true,
              content: '折叠内容主体，可自定义内容及样式'
						},
						{
							type: false,
							subName: '折叠内容',
              showAnimation: true,
							content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: false,
							subName: '禁用状态',
							disabled: true,
              showAnimation: true,
							content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						}
					]
				}
      }
    },
    methods: {
      change(e) {

      }
    }
    
  }
</script>

<style lang="scss" scoped>
.collapse{
  .content{
    padding: 10px;
  }
}
</style>