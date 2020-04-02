<template>
	<view>
		<uni-nav-bar
				background-color='#ff80ab'
				color='#fff'
				title='模态窗'
				left-icon="back"
				:shadow='false'
				:border='false'
				:fixed='true'
				@clickLeft='goBack'
		/>
		<view class='modal'>
			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 普通窗口
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="Modal">Modal</button>
				</view>
			</view>
			<view class="du-modal" :class="modalName=='Modal'?'show':''">
				<view class="du-dialog">
					<view class="du-bar bg-white justify-end">
						<view class="modal-content">Modal标题</view>
						<view class="action" @tap="hideModal">
							<uni-icons type='close' size='22' />
						</view>
					</view>
					<view class="padding-xl">
						Modal 内容。
					</view>
				</view>
			</view>

			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 底部窗口
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="bottomModal">Bottom</button>
				</view>
			</view>
			<view class="du-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
				<view class="du-dialog">
					<view class="du-bar bg-white">
						<view class="action text-green">确定</view>
						<view class="action text-blue" @tap="hideModal">取消</view>
					</view>
					<view class="padding-xl">
						Modal 内容。
					</view>
				</view>
			</view>

			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 对话窗口
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="DialogModal1">Dialog</button>
					<button class="du-btn bg-blue shadow margin-left" @tap="showModal" data-target="DialogModal2">Dialog</button>
				</view>
			</view>
			<view class="du-modal" :class="modalName=='DialogModal1'?'show':''">
				<view class="du-dialog">
					<view class="du-bar bg-white justify-end">
						<view class="modal-content">Modal标题</view>
						<view class="action" @tap="hideModal">
							<uni-icons type='close' size='22' />
						</view>
					</view>
					<view class="padding-xl">
						Modal 内容。
					</view>
					<view class="du-bar bg-white justify-end">
						<view class="action">
							<button class="du-btn line-green text-green" @tap="hideModal">取消</button>
							<button class="du-btn bg-green margin-left" @tap="hideModal">确定</button>

						</view>
					</view>
				</view>
			</view>

			<view class="du-modal" :class="modalName=='DialogModal2'?'show':''">
				<view class="du-dialog">
					<view class="du-bar bg-white justify-end">
						<view class="modal-content">Modal标题</view>
						<view class="action" @tap="hideModal">
							<uni-icons type='close' size='22' />
						</view>
					</view>
					<view class="padding-xl">
						Modal 内容。
					</view>
					<view class="du-bar bg-white">
						<view class="action margin-0 flex-sub text-green " @tap="hideModal">
							<text class="duIcon-moneybag"></text>微信支付</view>
						<view class="action margin-0 flex-sub text-green solid-left" @tap="hideModal">取消</view>
						<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">确定</view>
					</view>
				</view>
			</view>

			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 图片窗口
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="Image">Image</button>
				</view>
			</view>

			<view class="du-modal" :class="modalName=='Image'?'show':''">
				<view class="du-dialog">
					<view class="bg-img" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;background-size: 100% 100%;">
						<view class="du-bar justify-end text-white">
							<view class="action" @tap="hideModal">
								<uni-icons type='close' size='22' />
							</view>
						</view>
					</view>
					<view class="du-bar bg-white">
						<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
					</view>
				</view>
			</view>


			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 单选窗口
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="RadioModal">Radio</button>
				</view>
			</view>

			<view class="du-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
				<view class="du-dialog" @tap.stop="">
					<radio-group class="block" @change="RadioChange">
						<view class="du-list menu text-left">
							<view class="du-item" v-for="(item,index) in 5" :key="index">
								<label class="flex justify-between align-center flex-sub">
									<view class="flex-sub">Item {{index +1}}</view>
									<radio class="round" :class="radio=='radio' + index?'checked':''" :checked="radio=='radio' + index?true:false"
									:value="'radio' + index"></radio>
								</label>
							</view>
						</view>
					</radio-group>
				</view>
			</view>

			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 多选窗口
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="ChooseModal">Choose</button>
				</view>
			</view>
			<view class="du-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
				<view class="du-dialog" @tap.stop="">
					<view class="du-bar bg-white">
						<view class="action text-blue" @tap="hideModal">取消</view>
						<view class="action text-green" @tap="hideModal">确定</view>
					</view>
					<view class="grid col-3 padding-sm">
						<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
							<button class="du-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
							:data-value="item.value"> {{item.name}}
								<view class="du-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
							</button>
						</view>
					</view>
				</view>
			</view>

			<view class="du-bar bg-white margin-top">
				<view class="action">
					<text class="duIcon-title text-orange "></text> 侧边抽屉
				</view>
				<view class="action">
					<button class="du-btn bg-green shadow" @tap="showModal" data-target="DrawerModalL">Left</button>
					<button class="du-btn bg-blue shadow margin-left" @tap="showModal" data-target="DrawerModalR">Right</button>
				</view>
			</view>
			<view class="du-modal drawer-modal justify-start" :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
				<view class="du-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
					<view class="du-list menu text-left">
						<view class="du-item arrow" v-for="(item,index) in 5" :key="index">
							<view class="modal-content">
								<view>Item {{index +1}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="du-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
				<view class="du-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
					<view class="du-list menu text-left">
						<view class="du-item arrow" v-for="(item,index) in 5" :key="index">
							<view class="modal-content">
								<view>Item {{index +1}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	export default {
    name: 'modal',
    components: {
      uniIcons,
			uniNavBar
    },
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: null,
				radio: 'radio1',
				checkbox: [{
					value: 0,
					name: '10元',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '20元',
					checked: true,
					hot: false,
				}, {
					value: 2,
					name: '30元',
					checked: true,
					hot: true,
				}, {
					value: 3,
					name: '60元',
					checked: false,
					hot: true,
				}, {
					value: 4,
					name: '80元',
					checked: false,
					hot: false,
				}, {
					value: 5,
					name: '100元',
					checked: false,
					hot: false,
				}]
			};
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			showModal(e) {
        this.modalName = e.currentTarget.dataset.target
        console.log(this.modalName)
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.modal{
  width: 100%;
  .du-bar {
    display: flex;
    position: relative;
    align-items: center;
    min-height: 100upx;
    justify-content: space-between;
    .action {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      max-width: 100%;
      &:first-child {
        margin-left: 30upx;
        font-size: 30upx;
        &>uni-text[class*="duIcon-"] {
          margin-left: -0.3em;
          margin-right: 0.3em;
        }
      }
      &:last-child {
        margin-right: 30upx;
        font-size: 30upx;
      }
      .margin-left {
        margin-left: 30upx;
      }
      .duIcon-title{
        position: relative;
        padding-left: 20px;
        &:before {
          content: " ";
          width: 14upx;
          height: 14upx;
          border-radius: 50%;
          background: #f37b1d;
          position: absolute;
          left: 17upx;
          top: -6upx;
        }
      }
    }
    .modal-content {
      position: absolute;
      text-align: center;
      width: calc(100% - 340upx);
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
      height: 60upx;
      font-size: 32upx;
      line-height: 60upx;
      dursor: none;
      pointer-events: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .du-btn {
      position: relative;
      border: 0px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 0 30upx;
      font-size: 28upx;
      height: 64upx;
      line-height: 1;
      text-align: center;
      text-decoration: none;
      overflow: visible;
      margin-left: initial;
      transform: translate(0px, 0px);
      margin-right: initial;
    }
  }
  .du-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1110;
    opacity: 0;
    outline: 0;
    text-align: center;
    transform: scale(1.185);
    backface-visibility: hidden;
    perspective: 1000px;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out 0s;
    pointer-events: none;
    &:before {
      content: "\200B";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
    .du-dialog {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      margin-left: auto;
      margin-right: auto;
      width: 720upx;
      max-width: 100%;
      background-color: #f8f8f8;
      border-radius: 10upx;
      overflow: hidden;
      &>.du-bar:first-child .action {
        min-width: 100upx;
        margin-right: 0;
        min-height: 100upx;
      }
      .padding-xl {
        padding: 50upx;
      }
      .justify-end {
        justify-content: flex-end;
      }
    }
  }
  .show {
    opacity: 1;
    transition-duration: 0.3s;
    transform: scale(1);
    overflow-x: hidden;
    overflow-y: auto;
    pointer-events: auto;
  }
  .shadow[class*="-green"] {
    box-shadow: 6upx 6upx 8upx rgba(48, 156, 63, 0.2);
  }
  .bg-green {
    background-color: #39b54a;
    color: #ffffff;
  }
  .shadow[class*="-blue"] {
    box-shadow: 6upx 6upx 8upx rgba(0, 102, 204, 0.2);
  }
  .bg-blue {
    background-color: #0081ff;
    color: #ffffff;
  }
  .shadow[class*="-orange"] {
    box-shadow: 6upx 6upx 8upx rgba(217, 109, 26, 0.2);
  }
  .bg-orange {
    background-color: #f37b1d;
    color: #ffffff;
  }
  .text-orange, .line-orange, .lines-orange {
    color: #f37b1d;
  }
  .margin-top {
    margin-top: 30upx;
  }
  .bg-white {
    background-color: #ffffff;
    color: #666666;
  }
  button .du-tag {
    position: absolute;
    top: 8upx;
    right: 8upx;
  }
}
.du-modal.bottom-modal::before {
	vertical-align: bottom;
}
.du-modal.bottom-modal .du-dialog {
	width: 100%;
	border-radius: 0;
}
.du-modal.bottom-modal {
	margin-bottom: -1000upx;
}
.du-modal.bottom-modal.show {
	margin-bottom: 0;
}
.du-modal.drawer-modal {
	transform: scale(1);
  display: flex;
  .du-dialog {
    height: 100%;
    min-width: 200upx;
    border-radius: 0;
    margin: initial;
    transition-duration: 0.3s;
		.menu {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			.arrow{
				width: 100%;
				height:40upx;
				padding: 20upx;
				border-bottom: 1px solid #f37b1d;
				color: #ff80ab;
			}
		}
  }
}

.du-modal.drawer-modal.justify-start .du-dialog {
	transform: translateX(-100%);
	text-align: right;
}
.du-modal.drawer-modal.justify-end .du-dialog {
	transform: translateX(100%);
	text-align: left;
}
.du-modal.drawer-modal.show .du-dialog {
	transform: translateX(0%);
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.justify-start {
	justify-content: flex-start;
}
.justify-end {
	justify-content: flex-end;
}
.align-center {
  align-items: center;
}
.flex-sub {
  padding: 10upx 20upx;
}
.du-tag {
	font-size: 24upx;
	vertical-align: middle;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 0upx 16upx;
	height: 48upx;
	font-family: Helvetica Neue, Helvetica, sans-serif;
	white-space: nowrap;
}
.grid {
  display: flex;
  flex-wrap: wrap;
}
.grid.col-3>uni-view {
    width: 33.33%;
}
.padding-xs {
    padding: 5px;
    box-sizing: border-box;
}
uni-button .du-tag[data-v-6de97978] {
    position: absolute;
    top: 4px;
    right: 4px;
}
.du-tag.sm {
    font-size: 20upx;
    padding: 0px 12upx;
    height: 32upx;
}
.round {
    border-radius: 2500px;
}
.basis-lg {
	flex-basis: 60%;
}
</style>