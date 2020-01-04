<template>
	<view class="content">
		<view class="nav-wrap">
			<view v-for="(nav, index) in navs" class="nav" :key="nav.label" @click="clickNav(index)">
				<view class="nav-text" :class="{active: activeIndex === index}">{{ nav.label }}</view>
			</view>
		</view>
		<float-dot></float-dot>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon/uni-icon.vue'
	import floatDot from '../../components/float-dot/index.vue'
	export default{
		components:{
			uniIcon,
			floatDot,
		},
		data() {
			return {
				navs: [
					{
						label: '全部'
					},
					{
						label: '待接单'
					},
					{
						label: '待配送'
					},
					{
						label: '待收货'
					},
					{
						label: '已送达'
					},
				],
				activeIndex: 0,
				unfold: false,
			}
		},
		methods:{
			clickNav(index) {
				this.activeIndex = index;
			},
			
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 0 10upx;
		.nav-wrap{
			background: #fff;
			display: flex;
			font-size: 28upx;
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
					color: #2cb5e8;
				}
			}
		}
	}
</style>
