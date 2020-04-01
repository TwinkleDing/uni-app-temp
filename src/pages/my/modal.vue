<template>
  <view class='modal'>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 普通窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="Modal">Modal</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="modal-content">Modal标题</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 底部窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="bottomModal">Bottom</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 对话窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="DialogModal1">Dialog</button>
				<button class="cu-btn bg-blue shadow margin-left" @tap="showModal" data-target="DialogModal2">Dialog</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="modal-content">Modal标题</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>

					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="modal-content">Modal标题</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub text-green " @tap="hideModal">
						<text class="cuIcon-moneybag"></text>微信支付</view>
					<view class="action margin-0 flex-sub text-green solid-left" @tap="hideModal">取消</view>
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">确定</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 图片窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="Image">Image</button>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='Image'?'show':''">
			<view class="cu-dialog">
				<view class="bg-img" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;">
					<view class="cu-bar justify-end text-white">
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close "></text>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
				</view>
			</view>
		</view>


		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 单选窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="RadioModal">Radio</button>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in 5" :key="index">
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

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 多选窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="ChooseModal">Choose</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<view class="action text-green" @tap="hideModal">确定</view>
				</view>
				<view class="grid col-3 padding-sm">
					<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
						<button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
						 :data-value="item.value"> {{item.name}}
							<view class="cu-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
						</button>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 侧边抽屉
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="DrawerModalL">Left</button>
				<button class="cu-btn bg-blue shadow margin-left" @tap="showModal" data-target="DrawerModalR">Right</button>
			</view>
		</view>
		<view class="cu-modal drawer-modal justify-start" :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 5" :key="index">
						<view class="modal-content">
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 5" :key="index">
						<view class="modal-content">
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
    name: 'modal',
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
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
}
	button .cu-tag {
		position: absolute;
		top: 8upx;
		right: 8upx;
  }
  .bg-white {
    background-color: #ffffff;
    color: #666666;
}
.margin-top {
    margin-top: 15px;
}
.cu-bar {
    display: flex;
    position: relative;
    align-items: center;
    min-height: 50px;
    justify-content: space-between;
}
.cu-modal {
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
}
.cu-bar .action:first-child {
    margin-left: 15px;
    font-size: 15px;
}
.cu-bar .action {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    max-width: 100%;
}
.cu-bar .action:last-child {
    margin-right: 15px;
}
.shadow[class*="-green"] {
    box-shadow: 3px 3px 4px rgba(48, 156, 63, 0.2);
}
.bg-green {
    background-color: #39b54a;
    color: #ffffff;
}
.shadow[class*="-blue"] {
    box-shadow: 3px 3px 4px rgba(0, 102, 204, 0.2);
}
.bg-blue {
    background-color: #0081ff;
    color: #ffffff;
}
.cu-dialog {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: 340px;
    max-width: 100%;
    background-color: #f8f8f8;
    border-radius: 5px;
    overflow: hidden;
}
.justify-end {
    justify-content: flex-end;
}
.cu-bar .modal-content {
    position: absolute;
    text-align: center;
    width: calc(100% - 170px);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    cursor: none;
    pointer-events: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.cu-modal .cu-dialog>.cu-bar:first-child .action {
    min-width: 50px;
    margin-right: 0;
    min-height: 50px;
}
.cu-btn {
    position: relative;
    border: 0px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 14px;
    height: 32px;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    overflow: visible;
    margin-left: initial;
    transform: translate(0px, 0px);
    margin-right: initial;
}
.padding-xl {
    padding: 25px;
}
.margin-left {
    margin-left: 15px;
}
.cu-bar .action:first-child>uni-text[class*="cuIcon-"] {
    margin-left: -0.3em;
    margin-right: 0.3em;
}

.cu-bar .action>uni-text[class*="cuIcon-"], .cu-bar .action>uni-view[class*="cuIcon-"] {
    font-size: 18px;
}
[class*="cuIcon-"] {
    font-family: "cuIcon";
    font-size: inherit;
    font-style: normal;
}
.text-orange, .line-orange, .lines-orange {
    color: #f37b1d;
}
.cuIcon-title{
  position: relative;
  padding-left: 20px;
}
.cuIcon-title:before {
    content: " ";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f37b1d;
    position: absolute;
    left: 7px;
    top: -3px;
}
uni-view {
    display: block;
}

.cu-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1110;
	opacity: 0;
	outline: 0;
	text-align: center;
	-ms-transform: scale(1.185);
	transform: scale(1.185);
	backface-visibility: hidden;
	perspective: 2000upx;
	background: rgba(0, 0, 0, 0.6);
	transition: all 0.3s ease-in-out 0s;
	pointer-events: none;
}

.cu-modal::before {
	content: "\200B";
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}

.cu-modal.show {
	opacity: 1;
	transition-duration: 0.3s;
	-ms-transform: scale(1);
	transform: scale(1);
	overflow-x: hidden;
	overflow-y: auto;
	pointer-events: auto;
}

.cu-dialog {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	width: 680upx;
	max-width: 100%;
	background-color: #f8f8f8;
	border-radius: 10upx;
	overflow: hidden;
}

.cu-modal.bottom-modal::before {
	vertical-align: bottom;
}

.cu-modal.bottom-modal .cu-dialog {
	width: 100%;
	border-radius: 0;
}

.cu-modal.bottom-modal {
	margin-bottom: -1000upx;
}

.cu-modal.bottom-modal.show {
	margin-bottom: 0;
}

.cu-modal.drawer-modal {
	transform: scale(1);
	display: flex;
}

.cu-modal.drawer-modal .cu-dialog {
	height: 100%;
	min-width: 200upx;
	border-radius: 0;
	margin: initial;
	transition-duration: 0.3s;
}

.cu-modal.drawer-modal.justify-start .cu-dialog {
	transform: translateX(-100%);
}

.cu-modal.drawer-modal.justify-end .cu-dialog {
	transform: translateX(100%);
}

.cu-modal.drawer-modal.show .cu-dialog {
	transform: translateX(0%);
}
.cu-modal .cu-dialog>.cu-bar:first-child .action{
  min-width: 100rpx;
  margin-right: 0;
  min-height: 100rpx;
}
</style>