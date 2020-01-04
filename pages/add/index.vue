<template>
	<view class="content">
		<view class="top">
			<view class="img-wrap">
				<view v-if="!imgSrc" class="img-add" @click="uploadImg">
					<uni-icon type="plusempty" size="36"></uni-icon>
					<view>上传图片</view>
				</view>
				<image class="show-img" mode="aspectFit" :src="imgSrc" v-else></image>
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
		<form class="form no-margin">
			<view class="uni-form-item uni-column">
				<view class="title">产品详情</view>
				<textarea class="uni-input" name="input" placeholder="请详细描述产品"  v-model="form.detail"/>
			</view>
		</form>
		<button class="save-btn">发布</button>
		<!-- 弹出 -->
		<view class="model" :class="{show: model.visible, hide: !model.visible}">
			<view class="top model-top">
				<view>请选择产品同步资料</view>
				<uni-icon type="closeempty"></uni-icon>
			</view>
			<view class="search-wrap">
				<input class="search-input" placeholder="请输入搜索关键字" v-model="model.search"  />
				<button>搜索</button>
			</view>
			<scroll-view scroll-y="true" @scrolltolower="scrolltolower" class="scroll" :style="{height: scrollHeight + 'px'}">
				<view class="goods-wrap">
					<view v-for="(gl, index) in goodsList" :key="'gl' + index" class="inner" @click="choiceGood(gl)">
						<view class="inner-margin">
							<!-- <image mode="aspectFit" :src="gl.img"></image> -->
							<view class="img-wrap">
								<img :src="gl.img" />
							</view>
							<view class="name">{{ gl.name }}</view>
						</view>
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
		mounted(){
			this.calcuHeight();
			const self = this;
			window.addEventListener('resize', () => {
				self.calcuHeight();
			})
		},
		onLoad() {
			this.getList();
		},
 		data() {
			return {
				imgSrc: '',
				form: {
					name: '',
					unit: '',
					price: '',
					descript: '',
					detail: '',
				},
				model: {
					visible: false,
					search: '',
				},
				goodsList: [],
				scrollHeight: 0,
			}
		},
		methods:{
			// 加载产品
			getList() {
				this.$api('goodsList').then(res => {
					this.goodsList = this.goodsList.concat(res);
				})
			},
			// 切换frame
			toggleFrame() {
				this.model.visible = !this.model.visible;
			},
			// 选中产品
			choiceGood(item) {
				Object.assign(this.form, item);
				this.imgSrc = item.img;
				console.log('imgSrc: ', this.imgSrc);
				this.toggleFrame();
			},
			// 计算高度
			calcuHeight() {
				const self = this;
				uni.getSystemInfo({
					success(data) {
						self.scrollHeight = data.windowHeight - (44 + 32 + 42 + 35 + 10);
					}
				});
			},
			// 上传图片
			uploadImg() {
				uni.chooseImage({
					count: 1,
					success: (tempFilePaths) => {
						// 
					}
				})
			},
			// 点击添加产品
			add() {
				this.toggleFrame();
			},
			// 懒加载
			scrolltolower() {
				this.getList();
			}
		}
	}
</script>

<style lang="scss">
	.show-img{
		width: 100%;
	}
	.content{
		display: flex;
		flex-direction: column;
		background: rgb(248, 248, 248);
		padding: 0 10upx;
		.top{
			flex: 1;
			background: #fff;
			padding-bottom: 40upx; 
			.img-wrap{
				width: 400upx;
				margin: 0 auto;
				.img-add{
					text-align: center;
					margin: 30upx 0;
					padding: 20upx 0 40upx 0;
					background: #eee;
					border: 1px dashed #B5B8C2;
					border-radius: 10upx;
					.img-wrap{
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
		.no-margin{
			margin-top: 0;
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
			margin-bottom: 10px;
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
		.scroll{
			.goods-wrap{
				display: flex;
				flex-wrap: wrap;
				.inner{
					width: 50%;
					text-align: center;
					font-size: 24upx;
					margin-bottom: 40upx;
					.inner-margin{
						box-sizing: border-box;
						border: 1px solid #F8F8F8;
						border-radius: 10upx;
						padding: 16upx;
						.img-wrap{
							width: 100%;
							margin: 0 auto;
							img{
								width: 100%;
								object-fit: cover;
							}
						}
					}
					&:nth-child(odd) {
						.inner-margin{
							margin-right: 10upx;
						}
					}
					&:nth-child(even) {
						.inner-margin{
							margin-left: 10upx;
						}
					}
				}
			}
		}
	}
	.model.hide{
		top: 100%;
	}
	.model.show{
		top: 44px;
	}
	.save-btn{
		width: 100%;
		background: #1fc8db;
		margin: 40upx 0;
		color: #fff;
		border-top-left-radius: 60upx;
		border-top-right-radius: 60upx;
		border-bottom-left-radius: 60upx;
		border-bottom-right-radius: 60upx;
	}
</style>
