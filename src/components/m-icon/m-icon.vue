<template>
	<view class="m-icon" :class="['m-icon-'+type]" @click="onClick()"></view>
</template>

<script lang='ts'>
	import Vue from 'vue';
	export default Vue.extend({
		name: 'mIcons',
		props: {
			/**
			 * 图标类型
			 */
			type: String
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	});
</script>

