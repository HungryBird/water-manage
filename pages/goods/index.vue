<template>
	<view class="content">
		<view class="tab-nav-wrap">
			<view class="tab" :class="{active: activeIndex === index}" v-for="(tab, index) in tabs" :key="'tab' + index" @click="clickTab(tab, index)">
				<uni-icon type="plus" v-if="tab.value === 'add'" :color="activeIndex === index ? '#fff' : 'rgb(51, 51, 51)'"></uni-icon>{{ tab.label }}
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon/uni-icon.vue'
	export default{
		components: {
			uniIcon,
		},
		data() {
			return {
				activeIndex: 0,
				tabs: [
					{
						label: '在售商品',
						value: 'on'
					},
					{
						label: '下架商品',
						value: 'off'
					},
					{
						label: '添加商品',
						value: 'add'
					},
				]
			}
		},
		methods:{
			clickTab(tab, index) {
				this.activeIndex = index;
				if(tab.value === 'add') {
					uni.navigateTo({
						url: '../add/index'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background: rgb(248, 248, 248);
	}
	.tab-nav-wrap{
		display: flex;
		flex: 1;
		background:#fff;
		.tab{
			width: 33.3%;
			padding: 30upx;
			font-size: 30upx;
			text-align: center;
		}
		.tab.active{
			background: #1fc8db;
			color: #fff;
		}
		.text-active{
			color: #fff;
		}
	}
</style>
