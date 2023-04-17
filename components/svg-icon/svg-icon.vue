<template>
	<div class='icon-content'>
		<uni-icons :type="iconName[0]" v-if="iconName.length == 1" style="line-height:36px;" :color="svgFill" :size="svgWidth" @click="svgClick"></uni-icons>
		<text v-else :class="[iconName[0], iconName[1], 'default-color']" :style="{ color: svgFill, fontSize: svgWidth }" @click="svgClick"></text>
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
			default: '24px'
		},
		width: {
			type: String
		},
		height: {
			type: String
		},
		color: String,
		fill: {
			type: String
		}
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
		svgClick(event) {
			this.$emit('svg-click', event)
			this.$emit('click', event)
		}
	}
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