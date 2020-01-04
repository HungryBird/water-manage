<template>
	<view class="content">
		<view class="top-wrap">
			<view class="title">当前余额【元】</view>
			<view class="yue">{{ yue }}</view>
			<button class="tixian-btn">提现</button>
		</view>
		<view class="sub-class">
			赏金明细
		</view>
		<view class="nav-wrap">
			<view v-for="(nav, index) in navs" class="nav" :key="nav.label" @click="clickNav(index)">
				<view class="nav-text" :class="{active: activeIndex === index}">{{ nav.label }}</view>
			</view>
		</view>
		<view class="bottom">
			<view v-if="list.length === 0" class="tip">
				您的日志是空的
			</view>
		</view>
		<view class="footer">
			已经见底了哟(＾Ｕ＾)ノ~ＹＯ
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				yue: 0,
				list: [],
				navs: [
					{
						label: '全部'
					},
					{
						label: '交易'
					},
					{
						label: '提现'
					},
					{
						label: '店铺'
					},
				],
				activeIndex: 0,
			}
		},
		methods:{
			clickNav(index) {
				this.activeIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	.content{
		dispaly: flex;
		padding: 0 10upx;
		background: rgb(248, 248, 248);
		.top-wrap{
			flex: 1;
			text-align: center;
			padding: 80upx 0;
			background-image: linear-gradient(141deg,#1fc8db 0%,#2cb5e8 51%,#1fc8db 75%);
			color:#fff;
			.title{
				font-size: 24upx;
				margin-bottom: 20upx;
			}
			.yue{
				font-size: 48upx;
				margin-bottom: 40upx;
				font-weight: bold;
			}
			.tixian-btn{
				width: 240upx;
				margin: 0 auto;
				font-size: 28upx;
				color: #2cb5e8;
				border-top-left-radius: 60upx;
				border-top-right-radius: 60upx;
				border-bottom-left-radius: 60upx;
				border-bottom-right-radius: 60upx;
			}
		}
		.sub-class{
			text-align: center;
			color: #C0C0C0;
			font-size: 24upx;
			padding: 20upx;
			&:before{
				content: '··';
				padding: 0 20upx;
			}
			&:after{
				content: '··';
				padding: 0 20upx;
			}
		}
		.nav-wrap{
			background: #fff;
			display: flex;
			font-size: 28upx;
			padding: 30upx;
			.nav{
				flex: 1;
				text-align: center;
				.nav-text{
					box-sizing: border-box;
					display: inline-block;
					width: auto;
					padding: 10upx 0;
				}
				.nav-text.active{
					border-bottom: 3px solid #2cb5e8;
				}
			}
		}
		.tip{
			color: #333;
			text-align: center;
			font-size: 28upx;
		}
		.footer{
			padding: 40upx;
			color: #999999;
			text-align: center;
			font-size: 28upx;
		}
	}
</style>
