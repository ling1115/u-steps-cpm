<template>
	<view>
		<!-- uni-icons -->
		<view>uni-icon</view>
		<svg-icon 
			:type="uniIconType"
			size="48rpx" 
			index='0'
			stop="true"
			@click="handleClick"
		></svg-icon>
		<!-- 自定义icon -->
		<view>自定义icon</view>
		<svg-icon
			:type="qdIconType"
			size="48rpx" 
			color="#CC1317"
			index='1'
			stop="true"
			@click="handleClick"
		></svg-icon>
		<!-- svg -->
		<view>svg图片</view>
		<svg-icon 
			:type="svgType"
			size="64rpx"
			index='2'
			stop="true"
			@svg-click="handleClick"
		></svg-icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uniIconType:'checkmark-circle',
				qdIconType:'qdfont qd-delivery',
				svgType:'/static/register.svg',
			}
		},
		methods: {
			handleClick(index){
				console.log(`点击了第${index}个图标`)
			},
			handleSvgClick(index){
				console.log(`点击了第${index}个svg图标`)
			}
		}
	}
</script>

<style>

</style>
