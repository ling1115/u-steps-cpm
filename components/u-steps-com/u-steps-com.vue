<template>
	<div class="step-content" 
		:style="{'--height': contentHeight, 
			'--fcolor':lineFirstColor,
			'--lcolor':lineLastColor,
			'--line':current==steps-1?'none':'solid'
			}" 
		>
		<div class="icon-gb-nomal" 
			:style="{'--contentbglastcolor':contentBgLastColor,
				'--contentbgfirstcolor':contentBgFirstColor}">
			<div>
				<svg-icon slot="icon" :type="type" 
					:size="size" :width="svgWidth" :height="svgHeight" :fill="svgFill"
					:color="svgFill"
					@click="handleClick(event)"
					@svg-click="handleClick(event)"
				></svg-icon>
			</div>
		</div>
	</div>
</template>

<script>
	import SvgIcon from '@/components/svg-icon/svg-icon.vue'
	export default {
		name:'stepsCom',
		components:{
			SvgIcon
		},
		props: {
			type: {
				type:String,
				default:'checkmark-circle'
			},
			size: {
				type: String,
				default: '24px'
			},
			width: {
				type: String
			},
			height: {
				type: String
			},
			color: {
				type:String,
				default:'#3c9cff'
			},
			fill: {
				type:String,
				default:'#3c9cff'
			},
			steps:{type: Number},
			current:{type: Number},
			rContentHeight:{type:Number},
			lineColor:{
				type:Array,
				default(){
					return ["#3c9cff","#3c9cff"]
				}
			},
			contentBgColor:{
				type:Array,
				default(){
					return []
				}
			},
		},
		data() {
			return {
				clientHeight:''
			}
		},
		computed: {
			svgWidth() {
				return this.width || this.size
			},
			svgHeight() {
				return this.height || this.size
			},
			svgFill() {
				return this.fill || this.color
			},
			iconName() {
				return this.type.split(' ')
			},
			contentHeight(){
				return this.rContentHeight?(Number(this.rContentHeight)*0.7) + 'px' :this.clientHeight/this.steps/2+'px'
			},
			lineFirstColor(){// 步骤条渐变第一个颜色
				return this.lineColor[0]
			}, 
			lineLastColor(){// 步骤条渐变最后颜色
				return this.lineColor[1]
			}, 
			contentBgFirstColor(){// 图标背景颜色
				return this.contentBgColor.length?this.contentBgColor[0]:''
			},
			contentBgLastColor(){// 图标背景颜色
				return this.contentBgColor.length?this.contentBgColor[1]:''
			},
		},
		mounted() {
			this.$nextTick(()=>{
				let getWindowInfo = uni.getWindowInfo()
				this.clientHeight=getWindowInfo.screenHeight//屏幕高度
			})
		},
		methods: {
			handleClick(event) {
				this.$emit('svg-click', event)
				this.$emit('click', event)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.step-content{
		margin: 12px 0 12px 16px;
		width: 36px;
		height: 36px;
	}
	.step-content::after{
		content: '';
		border-style: var(--line);
		border-left: 1px;
		position: absolute;
		height: var(--height);
		left: 31px;
		margin-top: 16px;
		border-image: linear-gradient(to bottom, var(--fcolor), var(--lcolor)) 1;
	}
	// #E30412
	.step-content-null::after{
		content: '';
		border-style: none;
		border-left: none;
		border-image:none !important;
		z-index: 10;
	}
	.icon-gb-nomal{
		text-align: center;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		line-height: 36px;
		background: linear-gradient(137.2deg, var(--contentbgfirstcolor) 15.89%, var(--contentbglastcolor) 88.22%);
	}
</style>