<template>
	<view class="content">
		<view class="position">
			<view class="who-share">
				<view class="left">
					<img src="../../static/logo.png" />
				</view>
				<view class="right">
					<view>动力水</view>
					<view class="sub">分享了此页面</view>
				</view>
			</view>
			<view class="code-wrap">
				<view class="top">
					<img src="../../static/code.png" />
					<view class="sub">长按识别二维码</view>
				</view>
				<view class="bottom">订水·上邕团</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.content{
		position: fixed;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 0;
		background: url(../../static/heshui.jpg);
		background-size: cover;
		background-position: 50% 0;
		.position{
			position: absolute;
			right: 60upx;
			bottom: 300upx;
			display: flex;
			flex-direction: column;
			.who-share{
				display: flex;
				height: 100upx;
				background: rgba(255,255,255,.7);
				border-top-left-radius: 60upx;
				border-top-right-radius: 60upx;
				border-bottom-left-radius: 60upx;
				border-bottom-right-radius: 60upx;
				.left{
					overflow: hidden;
					border-radius: 100%;
					height: 100upx;
					width: 100upx;
					img{
						display: block;
						width: 100%;
						object-fit: cover;
					}
				}
				.right{
					padding: 0 20upx;
					font-size: 24upx;
					display: flex;
					flex-direction: column;
					uni-view{
						flex: 1;
						&:first-child{
							padding-top: 10upx;
						}
					}
				}
			}
			.code-wrap{
				margin-top: 20upx;
				border-radius: 20upx;
				overflow: hidden;
				background: rgba(255,255,255,.7);
				.top{
					padding: 20upx;
				}
				img{
					width: 100%;
					object-fit: cover;
				}
				.bottom{
					background-image: linear-gradient(141deg,orange 0%,#2cb5e8 51%,#1fc8db 75%);
					font-size: 28upx;
					text-align: center;
					color: #fff;
					padding: 10upx 0;
				}
			}
		}
		.sub{
			text-align: center;
			color: #8F8F94;
			font-size: 24upx;
		}
	}
</style>
