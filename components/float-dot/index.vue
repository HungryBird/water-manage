<template>
	<view class="dot-wrap">
		<view class="fixed-dot dot" @click="toggleFold">
			<uni-icon type="plusempty" color="#fff" size="42"></uni-icon>
		</view>
		<view class="abs-dot dot" :class="{left: unfold}">订单</view>
		<view class="abs-dot dot" :class="{'left-top': unfold}">产品</view>
		<view class="abs-dot dot" :class="{'top': unfold}">我的</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon/uni-icon.vue'
	export default{
		components:{
			uniIcon,
		},
		data() {
			return {
				unfold: false,
			}
		},
		methods:{
			toggleFold() {
				this.unfold = !this.unfold;
			}
		}
	}
</script>

<style lang="scss">
	.dot-wrap{
		position: fixed;
		right: 40upx;
		bottom:120upx;
		font-size: 28upx;
		.dot{
			color: #fff;
			border-radius: 100%;
			background: #2cb5e8;
			width: 80upx;
			height: 80upx;
			box-shadow: -1px 0px 1px 1px #fff,0px -1px 1px 1px #fff,1px 0px 1px 1px #fff,0px 1px 1px 1px #fff;
		}
		.abs-dot{
			position: absolute;
			left: 0;
			top: 0;
			display: flex;
			z-index: -1;
			align-content: center;
			justify-content: center;
			line-height: 80upx;
			transition: all .2s;
		}
		.left{
			left: -120upx;
			z-index: 999;
		}
		.left-top{
			top: -90upx;
			left: -90upx;
			z-index: 999;
		}
		.top{
			top: -120upx;
			z-index: 999;
		}
	}
</style>
