<template>
	<view class="content">
		<view class="top-wrap">
			<view class="top">
				<view class="left icon-wrap">
					<uni-icon type="redo" color="#fff" size="50"></uni-icon>
				</view>
				<view class="center">
					<image src="../../static/logo.png" mode="aspectFit"></image>
				</view>
				<view class="right icon-wrap">
					<uni-icon type="gear-filled" color="#fff" size="50" @click="edit"></uni-icon>
				</view>
			</view>
			<view class="middle">
				<view>打印机</view>
				<view>动力水</view>
			</view>
			<view class="bottom">
				<rate class="rate" value="3" disabled="true" color="#fff" active-color="#f00" size="12"></rate>
				<view class="num">3</view>
			</view>
		</view>
		<view class="sales-wrap">
			<view class="sale">
				<view>
					1
				</view>
				<view>
					收款数
				</view>
			</view>
			<view class="sale">
				<view>
					0
				</view>
				<view>
					累计销量
				</view>
			</view>
			<view class="sale">
				<view>
					1
				</view>
				<view>
					在售商品数
				</view>
			</view>
		</view>
		<view class="yue">
			<uni-icon type="arrowright" color="#333"></uni-icon>
			<view class="num">余额<strong>0</strong>元</view>
		</view>
		<view class="block-wrap">
			<view class="block">
				<view class="block-inner">
					<view class="top">待接订单</view>
					<view class="num">
						<strong>0</strong>
					</view>
					<view class="bottom">带配送 0</view>
				</view>
			</view>
			<view class="block">
				<view class="block-inner">
					<view class="top">今日订单数</view>
					<view class="num">
						<strong>0</strong>
					</view>
					<view class="bottom">昨日订单数 0</view>
				</view>
			</view>
			<view class="block">
				<view class="block-inner">
					<view class="top">本月营业额</view>
					<view class="num">
						<strong>0</strong>
					</view>
					<view class="bottom">带配送 0</view>
				</view>
			</view>
			<view class="block">
				<view class="block-inner">
					<view class="top">今日营业额</view>
					<view class="num">
						<strong>0</strong>
					</view>
					<view class="bottom">昨日 0</view>
				</view>
			</view>
			<view class="block">
				<view class="block-inner">
					<view class="top">水票订单</view>
					<view class="num">
						<strong>0</strong>
						<uni-icon type="arrowright" color="#333"></uni-icon>
					</view>
				</view>
			</view>
			<view class="block">
				<view class="block-inner">
					<view class="top">我的客户</view>
					<view class="num">
						<strong>0</strong>人
					</view>
				</view>
			</view>
			<view class="block">
				<view class="block-inner">
					<view class="left">
						<view class="title">营业中</view>
						<view class="sub-title">店铺显示并接收订单</view>
					</view>
					<view class="right">
						<switch></switch>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="ft">
				<view class="top">历史交易总金额</view>
				<view class="bottom">0</view>
			</view>
			<view class="ft">
				<view class="top">历史交易总订单数</view>
				<view class="bottom">0</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon/uni-icon.vue'
	import rate from '../../components/uni-rate/uni-rate.vue'
	export default {
		components:{
			uniIcon,
			rate,
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			edit() {
				// 
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 100upx 40upx;
		background-color: #1fc8db;
		background-image: linear-gradient(141deg,#1fc8db 0%,#2cb5e8 51%,#1fc8db 75%);
		color: #fff;
	}
	
	.top-wrap{
		display: flex;
		flex-direction: column;
		width: 100%;
		.top{
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			.left,.right{
				flex: 1;
				display: flex;
				justify-content: center;
			}
			.center{
				width: 180upx;
				height: 180upx;
				overflow: hidden;
				border-radius: 100%;
				uni-image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.middle{
			display: flex;
			flex-direction: row-reverse;
			font-size: 32upx;
			margin: 16upx 0;
			view{
				margin: 10upx 60upx;
			}
		}
		.bottom{
			display: flex;
			justify-content: center;
			align-content: center;
			margin-top: 20upx;
			.rate{
				margin-top: 16upx;
			}
			.num{
				margin-left: 20upx;
				font-size: 24upx;
			}
		}
	}
	
	.sales-wrap{
		display: flex;
		width: 100%;
		margin: 60upx 0;
		.sale{
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 26upx;
			text-align: center;
			&:nth-child(2){
				border-left: 1px solid #fff;
				border-right: 1px solid #fff;
			}
		}
	}
	
	.yue{
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		padding: 32upx 0;
		font-size: 24upx;
		background: url(../../static/money-page.png) no-repeat 10% 50%;
		background-color: #fff;
		color: #333;
		.num{
			margin-right: 20upx;
		}
	}

	.block-wrap{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 60upx;
		color: #C0C0C0;
		.block{
			width: 50%;
			margin-bottom: 6upx;
			.block-inner{
				padding: 32upx 40upx;
				flex: 1;
				background:#fff;
				.top{
					font-size: 28upx;
				}
				.num{
					display: flex;
					flex: 1;
					justify-content: space-between;
					color: #333;
					font-size: 28upx;
				}
				.bottom{
					margin-top: 10upx;
					font-size: 24upx;
				}
			}
			&:nth-child(odd) {
				.block-inner{
					margin-right: 6upx;
				}
			}
			&:nth-child(even) {
				.block-inner{
					
				}
			}
			&:last-child{
				flex: 1;
				.block-inner{
					display: flex;
					margin: 0;
					justify-content: space-between;
					.title{
						font-weight: bold;
						color: #333;
					}
					.sub-title{
						font-size: 28upx;
					}
				}
			}
		}
	}
	
	.footer{
		display: flex;
		width: 100%;
		margin-top: 60upx;
		font-size: 28upx;
		text-align: center;
		.ft{
			padding: 6upx;
			flex: 1;
			&:first-child{
				border-right: 1px solid #fff;
			}
		}
	}
</style>
<style>
	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
