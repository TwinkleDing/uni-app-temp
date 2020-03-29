<template>
	<view class="index">
		<uni-nav-bar 
				background-color='#000'
				color='#fff'
				:shadow='false'
				:border='false'
				left-icon="back" 
				@clickLeft='goBack'
				@clickRight='collect'
				:right-icon="hasCollection? 'star-filled':'star'" 
				:title='index+1+"/"+imgLength'
		></uni-nav-bar>
		<swiper @change="swpierChange" :style="{height:screenHeight + 'px'}">
			<swiper-item v-for="(value,index) in data" :key="value" @click="preImg(index)">
				<image :src="value" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { mapGetters, mapMutations, mapActions } from 'vuex';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	export default{
		name: 'pictureDetail',
		components: {
			uniNavBar,
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
				detailDec: "",
			}
		},
		onLoad(e) {
			// #ifdef APP-PLUS
			if (plus.os.name === 'Android') {
				this.showBtn = true;
			}
			// #endif
			this.screenHeight = uni.getSystemInfoSync().windowHeight-44;
			this.detailDec = e.data;
			let data = JSON.parse(decodeURIComponent(e.data));
			this.imgLength = data.img_num;
			this.data.push(data.img_src);
			this.getData(data.id);
			this.$store.commit('CHECK_COLLECTION', this.data[this.index])
			// 获取分享通道
			uni.getProvider({
				service: "share",
				success: (e) => {
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								})
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								})
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: (e) => {
					console.log("获取登录通道失败", e);
				}
			});
		},
		onShareAppMessage() {
			return {
				title: '欢迎使用uni-app看图模板',
				path: '/pages/detail/detail?data=' + this.detailDec,
				imageUrl: this.data[this.index]
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				// #ifdef APP-PLUS
				if (this.providerList.length === 0) {
					uni.showModal({
						title: '当前环境无分享渠道!',
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function(value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
								'WXSenceTimeline' : 'WXSceneSession',
							type: 0,
							title: 'uni-app模版',
							summary: '欢迎使用uni-app模版',
							imageUrl: this.data[this.index],
							href: 'https://uniapp.dcloud.io',
							success: (res) => {
								console.log('success:' + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel: false
								})
							}
						});
					}
				});
				// #endif
				// #ifdef H5
				this.collect();
				// #endif
			}
		},
		computed: {
			...mapGetters(['hasCollection'])
		},
		methods: {
			...mapMutations(['ADD_COLLECTION', 'CHECK_COLLECTION']),
			...mapActions(['removeCollection']),
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
			collect() {
				if(this.hasCollection) {
					this.removeCollection(this.data[this.index])
				}else {
					this.ADD_COLLECTION(this.data[this.index])
				}
				this.CHECK_COLLECTION(this.data[this.index])
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
			},
			getData(e) {
				uni.request({
					url: this.$serverUrl + '/api/picture/detail.php?id=' + e,
					success: (res) => {
						if (res.data.code !== 0) {
							uni.showModal({
								content: '请求失败，失败原因：' + res.data.msg,
								showCancel: false
							})
							return;
						}

						this.data = this.data.concat(res.data.data);
					},
					fail: () => {
						uni.showModal({
							content: '请求失败，请重试!',
							showCancel: false
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #000;
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
