<template>
	<text :style="{ color: color, 'font-size': size  }" class="uni-icons" @click="_onClick">{{icons[`uicon-${type}`]}}</text>
</template>

<script>
	import icons from './icons.js';
	// #ifdef APP-NVUE
	// nvue通过weex的dom模块引入字体，相关文档地址如下：
	// https://weex.apache.org/zh/docs/modules/dom.html#addrule
	const fontUrl = 'https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf'
	const domModule = weex.requireModule('dom')
	domModule.addRule('fontFace', {
		'fontFamily': "uicon-iconfont",
		'src': `url('${fontUrl}')`
	})
	// #endif
	
	export default {
		name: 'UniIcons',
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: String,
				default: '16px'
			}
		},
		data() {
			return {
				icons: icons
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	// 非nvue下加载字体
	@font-face {
		font-family: 'uicon-iconfont';
		src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
	}
	
	/* #endif */
	
	.uni-icons {
		font-family: uicon-iconfont;
		text-decoration: none;
		text-align: center;
	}
</style>