<template>
	<view class="content">
		<view class="top">
			<view class="img-wrap">
				<view v-if="!imgSrc" class="img-add" @click="uploadImg">
					<uni-icon type="plusempty" size="36"></uni-icon>
					<view>上传图片</view>
				</view>
				<image mode="aspectFit" v-else></image>
			</view>
			<button class="add-btn" @click="add">从产品库同步资料</button>
		</view>
		<form @submit="formSubmit" @reset="formReset" class="form">
			<view class="uni-form-item uni-column border">
				<view class="title">产品名称</view>
				<input class="uni-input" name="input" placeholder="请填写产品名称,限20字以内" maxlength="20" v-model="form.name" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">单位</view>
				<input class="uni-input" name="input" placeholder="请填写单位[瓶,桶,包,袋,KG]" v-model="form.unit" />
			</view>
			<view class="uni-form-item uni-column border">
				<view class="title">售价</view>
				<input class="uni-input" name="input" placeholder="请填写平均送达时间"  v-model="form.price"/>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">产品描述</view>
				<textarea class="uni-input" name="input" placeholder="请简述产品特点"  v-model="form.descript"/>
			</view>
		</form>
		<button class="save-btn">保存</button>
		<!-- 弹出 -->
		<view class="model" :class="{show: model.visible, hide: !model.visible}">
			<view class="top">
				<view>请选择产品同步资料</view>
				<uni-icon type="closeempty"></uni-icon>
			</view>
			<view class="search-wrap">
				<input class="search-input" placeholder="请输入搜索关键字" v-model="model.search"  />
				<button>搜索</button>
			</view>
			<scroll-view scroll-y="true" @scrolltolower="scrolltolower">
				<view class="goods-wrap">
					<view v-for="(gl, index) in goodsList" :key="'gl' + index" class="inner">
						<image mode="aspectFit" :src="gl.img"></image>
						<view class="name">{{ gl.name }}</view>
					</view>
				</view>
			</scroll-view>
		</view>
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
				imgSrc: '',
				form: {
					name: '',
					unit: '',
					price: '',
					descript: '',
				},
				model: {
					visible: false,
					search: '',
				},
				goodsList: [],
			}
		},
		methods:{
			uploadImg() {
				uni.chooseImage({
					count: 1,
					success: (tempFilePaths) => {
						// 
					}
				})
			},
			add() {
				this.model.visible = true;
			},
			scrolltolower() {
				console.log('开始加载')
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		flex-direction: column;
		background: rgb(248, 248, 248);
		.top{
			flex: 1;
			background: #fff;
			padding-bottom: 40upx; 
			.img-wrap{
				width: 460upx;
				margin: 0 auto;
				.img-add{
					text-align: center;
					margin: 30upx 0;
					padding: 20upx 0 40upx 0;
					background: #eee;
					border: 1px dashed #B5B8C2;
					border-radius: 10upx;
					uni-image{
						width: 100%;
					}
				}
				
			}
		}
		.form{
			margin: 20upx 0;
			padding: 60upx 30upx;
			background: #fff;
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
	.add-btn{
		width: 400upx;
		background: #1fc8db;
		color: #fff;
		border-top-left-radius: 60upx;
		border-top-right-radius: 60upx;
		border-bottom-left-radius: 60upx;
		border-bottom-right-radius: 60upx;
	}
	.model{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 60upx 30upx;
		background: #fff;
		transition: all .5s;
		.top{
			display: flex;
			justify-content: space-between;
			font-size: 30upx;
			font-weight: bold;
			.uni-icon{
				font-size: 64upx;
			}
		}
		.search-wrap{
			display: flex;
			font-size: 26upx;
			.search-input{
				flex: 1;
				font-size: 26upx;
				height: 33px;
				text-indent: 2em;
				border: 1px solid #eee;
				border-top-left-radius: 60upx;
				border-top-right-radius: 60upx;
				border-bottom-left-radius: 60upx;
				border-bottom-right-radius: 60upx;
			}
			uni-button{
				width: 180upx;
				font-size: 26upx;
				background: #4CD964;
				margin-left: 40upx;
				color: #fff;
				border-top-left-radius: 60upx;
				border-top-right-radius: 60upx;
				border-bottom-left-radius: 60upx;
				border-bottom-right-radius: 60upx;
			}
		}
	}
	.model.hide{
		top: 100%;
	}
	.model.show{
		top: 44px;
	}
</style>
