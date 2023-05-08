<template>
	<div class='icon-content'>
		<text v-if="iconName.length > 1" :class="[iconName[0], iconName[1], 'default-color']" :style="{ color: svgFill, fontSize: svgWidth }" @click="svgClick"></text>
		<image v-else-if="iconName.length == 1 && iconName[0].includes('/')" :src="iconName[0]" mode="" :style="{ height: svgHeight, width: svgWidth }"  @click="svgClick"></image>
		<uni-icons v-else :type="iconName[0]" style="line-height:72rpx;" :color="svgFill" :size="svgWidth" @click="svgClick"></uni-icons>
	</div>
	
</template>

<script>
import UniIcons from '@/components/uni-icons/uni-icons.vue';
export default {
	name: 'SvgIcon',
	components:{UniIcons},
	props: {
		type: String,
		size: {
			type: [String, Number],
			default: '48rpx'
		},
		index: [String, Number],
		width: {
			type: String
		},
		height: {
			type: String
		},
		color: {
			type: String,
			default: '#3c9cff'
		},
		fill: {
			type: String
		},
		stop: [String, Boolean],
	},
	data() {
		return {
			fontFamily: ''
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
		}
	},
	methods: {
		svgClick(e) {
			this.$emit('svg-click', this.index)
			this.$emit('click', this.index)
			this.stop && e && e.stopPropagation();
		}
	},
}
</script>

<style lang="scss" scoped>
	.icon-content{
		/deep/ .u-icon--right{
			flex-direction: column;
		}
		/deep/ .u-icon__icon{
			line-height: 36px !important;
		}
	}
</style>