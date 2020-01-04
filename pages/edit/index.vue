<template>
	<view class="content">
		<view class="top-wrap">
			<view class="top" @click="chooseImage">
				<image src="../../static/logo.png" mode="aspectFit"></image>
				<view class="text">更换头像</view>
			</view>
		</view>
		<form @submit="formSubmit" @reset="formReset" class="form">
			<view class="inline-form-item-wrap">
				<view class="uni-form-item uni-column lf border">
					<view class="title">店铺名称</view>
					<input class="uni-input" name="input" placeholder="请输入店铺名称" />
				</view>
				<view class="uni-form-item uni-column right">
					<view class="title">自动接单</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">店铺客服电话</view>
				<input class="uni-input" name="input" placeholder="请输入店铺客服电话" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">店铺营业时间</view>
				<view class='date-wrap'>
					<picker mode="time" :value="startTime" start="00:00" end="23:59" @change="bindTimeChange($event, 'startTime')" class="time-picker">
						<view class="uni-input">{{startTime}}</view>
					</picker>
					<view>至</view>
					<picker mode="time" :value="endTime" start="00:00" end="23:59" @change="bindTimeChange($event, 'endTime')" class="time-picker">
						<view class="uni-input">{{endTime}}</view>
					</picker>
				</view>
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">店铺地址</view>
				<input class="uni-input" name="input" placeholder="请选择店铺地址" v-model="address" @click="openMap" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">店铺详细地址</view>
				<input class="uni-input" name="input" v-model="detailAddress" placeholder="请输入店铺详细地址" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">配送范围【千米】</view>
				<input class="uni-input" name="input" placeholder="请填写配送范围距离" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">平均送达时间【分钟】</view>
				<input class="uni-input" name="input" placeholder="请填写平均送达时间" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">公告信息</view>
				<input class="uni-input" name="input" placeholder="请填写公告信息(可留空)" />
			</view>
		</form>
		<button class="save-btn">保存</button>
	</view>
</template>

<script>
	export default{
		components:{
			// 
		},
		data() {
			return {
				startTime: '09:00',
				endTime: '18:00',
				address: '',
				detailAddress: '',
			}
		},
		onLoad() {
			// this.setTimeRange();
		},
		methods:{
			// 点击时间
			bindTimeChange(e, target) {
				this[target] = e.detail.value;
			},
			// 打开地图
			openMap() {
				uni.chooseLocation({
					success: (data)=> {
						this.address = data.name;
						this.detailAddress = data.address;
					}
				})
			},
			// 点击头像
			chooseImage() {
				uni.chooseImage({
					count: 1,
					success: (tempFilePaths) => {
						// 
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		.top-wrap{
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			margin: 40upx;
			.top{
				position: relative;
				width: 180upx;
				height: 180upx;
				overflow: hidden;
				border-radius: 100%;
				uni-image{
					width: 100%;
					height: 100%;
				}
				.text{
					position: absolute;
					left: 50%;
					bottom: 30upx;
					transform: translateX(-50%);
					color: #fff;
					font-size: 24upx;
					text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;
				}
			}
		}
		.form{
			margin: 60upx 0;
			.title{
				font-size: 26upx;
				color: #999999;
				margin-bottom: 20upx;
			}
			.uni-form-item{
				margin-bottom: 60upx;
			}
			.uni-form-item.border{
				border-bottom: 1px solid #ddd;
			}
			.date-wrap{
				display: flex;
				font-size: 32upx;
				.time-picker{
					min-width: 150upx;
					padding: 6upx 4upx;
					background: #B5B8C2;
					color: #333;
				}
			}
		}
	}
	.inline-form-item-wrap{
		display: flex;
		width: 100%;
		justify-content: space-between;
		.lf{
			flex: 1;
		}
		.lr{
			// 
		}
	}
	.save-btn{
		width: 100%;
		background: #4CD964;
		color: #fff;
		border-top-left-radius: 60upx;
		border-top-right-radius: 60upx;
		border-bottom-left-radius: 60upx;
		border-bottom-right-radius: 60upx;
	}
</style>
