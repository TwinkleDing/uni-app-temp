<template>
	<view class='collection'>
		<uni-nav-bar
			title='我的收藏'
			left-icon="back"
			@clickLeft='goBack'
		/>
		<view v-if="collections.length" class="index">
			<swiper @change="swpierChange" :style="{height:screenHeight + 'px'}">
				<swiper-item v-for="(value,index) in data" :key="index" @click="preImg(index)">
					<image :src="value" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view v-else>暂无收藏</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	export default{
		name: 'collections',
		components: {
			uniNavBar
		},
		data() {
			return {
				imgShow: false,
				index: 0,
				showBtn: false,
				screenHeight: 0,
				imgLength: 0,
				providerList: [],
				data: [],
				detailDec: ""
			}
		},
		onLoad(e) {
			this.screenHeight = uni.getSystemInfoSync().windowHeight
      this.data = this.data.concat(this.collections)
      this.imgLength = this.data.length
      uni.setNavigationBarTitle({
				title: "1/" + this.imgLength
			});
			console.log(uni)
		},
		computed: {
			...mapGetters(['hasCollection', 'collections'])
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			download() {
				uni.downloadFile({
					url: this.data[this.index],
					success: (e) => {
						uni.saveImageToPhotosAlbum({
							filePath: e.tempFilePath,
							success: () => {
								uni.showToast({
									icon: 'none',
									title: '已保存到手机相册'
								})
							},
							fail: () => {
								uni.showToast({
									icon: 'none',
									title: '保存到手机相册失败'
								})
							}
						});
					},
					fail: (e) => {
						uni.showModal({
							content: '下载失败，' + e.errMsg,
							showCancel: false
						})
					}
				})
			},
			//#ifdef APP-PLUS
			setting() {
				uni.showToast({
					icon: 'none',
					title: '正在设为壁纸'
				})
				setTimeout(() => {
					var WallpaperManager = plus.android.importClass('android.app.WallpaperManager');
					var Main = plus.android.runtimeMainActivity();
					var wallpaperManager = WallpaperManager.getInstance(Main);
					plus.android.importClass(wallpaperManager);
					var BitmapFactory = plus.android.importClass('android.graphics.BitmapFactory');
					uni.downloadFile({
						url: this.data[this.index],
						success: (e) => {
							var filePath = plus.io.convertLocalFileSystemURL(e.tempFilePath);
							var bitmap = BitmapFactory.decodeFile(filePath);
							try {
								wallpaperManager.setBitmap(bitmap);
								uni.showToast({
									icon: 'none',
									title: '壁纸设置成功'
								})
							} catch (e) {
								uni.showToast({
									icon: 'none',
									title: '壁纸设置失败'
								})
							}
						},
						fail: () => {
							uni.showToast({
								icon: 'none',
								title: '壁纸设置失败'
							})
						}
					})
				}, 100)
			},
			//#endif
			swpierChange(e) {
				this.index = e.detail.current;
				this.$store.commit('CHECK_COLLECTION', this.data[this.index])
				uni.setNavigationBarTitle({
					title: e.detail.current + 1 + '/' + this.imgLength
				})
			},
			preImg(index) {
				if (this.imgShow) { //防止点击过快导致重复调用 
					return;
				}
				this.imgShow = true;
				setTimeout(() => {
					this.imgShow = false;
				}, 1000)
				setTimeout(() => {
					uni.previewImage({
						current: this.data[index],
						urls: this.data
					})
				}, 150)
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	swiper {
		flex: 1;
		width: 750upx;
		background-color: #000;
		display: flex;
		flex-direction: column;
	}

	swiper-item {
		display: flex;
		align-items: center;
	}

	image {
		width: 750upx;
		height: 1125upx;
	}
</style>
