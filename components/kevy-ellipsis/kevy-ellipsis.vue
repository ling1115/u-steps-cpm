<template>
	<view class="t-wrap" :style="{'--width': contentWidth}">
		<view class="t-txt-hide" :id="hid" v-if="!isCompute" :style="[computeStyle(0)]">
			{{testContent?testContent:content}}{{showSymbol?'...':''}}
			<text v-if="(expandText || collapseText)&&rows>0"
				class="t-button">
				{{expandText}}
			</text>
		</view>
		<view class="t-ellipsis" :id="id" :style="[!isCompute?computeStyle(1):computeStyle(2)]" @click="contentClick">
			{{((!isCompute || expand)&&rows>0)?content:(actualContent+(showSymbol?'...':''))}}<text
				v-if="(expandText || collapseText) && showSymbol" class="t-button" @click.stop="changeCollapse"
				:style="{'color':actionFontColor,'float':'right'}">{{!expand?expandText:collapseText}}</text>
		</view>
		<view v-if="!isCompute && rows>0" class="t-skeleton">
			<view class="skeletons" v-for="(item,index) in rows">
				<view class="empty"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		init,
		computeStyle,
		compute
	} from './kevy-ellipsis.min.js'
	export default {
		name: "kevy-ellipsis",
		props: {
			/**
			 * 文本内容，默认''
			 */
			content: {
				type: String,
				default: ''
			},
			/**
			 * 字体大小，单位rpx，默认28
			 */
			fontSize: {
				type: Number,
				default: '28'
			},
			/**
			 * 字体颜色，默认#666666
			 */
			fontColor: {
				color: String,
				default: '#666666'
			},
			/**
			 * 收起操作的文案，默认''
			 */
			collapseText: {
				type: String,
				default: ''
			},
			/**
			 * 展开操作的文案，默认''
			 */
			expandText: {
				type: String,
				default: ''
			},
			/**
			 * 收起、展开操作文字颜色，默认'#007aff'
			 */
			actionFontColor: {
				color: String,
				default: '#007aff'
			},
			/**
			 * 展示行数，默认1
			 */
			rows: {
				type: Number,
				default: 1
			},
			contentWidth:{
				type: String,
				default: ''
			}
		},
		data() {
			return {
				//是否展开
				expand: false,
				//是否已计算
				isCompute: false,
				//内容高度
				h: undefined,
				//内容宽度
				w: undefined,
				//实际显示内容
				actualContent: '',
				//高度探测内容
				testContent: undefined,
				//是否显示省略号
				showSymbol: false,
				//hid和id,唯一标识符
				hid: 'hid' + Math.random().toString(36).substr(2),
				id: 'id' + Math.random().toString(36).substr(2),
			};
		},
		created() {
			if (this.content?.length > 0) {
				// #ifdef H5
				this.$nextTick(() => {
					init(this, () => {
						compute(this);
					})
				})
				// #endif	
				// #ifdef MP-ALIPAY
				init(this, () => {
					compute(this, true);
				}, true)
				// #endif
				// #ifndef MP-ALIPAY || H5
				init(this, () => {
					compute(this);
				})
				// #endif
			}
		},
		computed: {
			computeStyle
		},
		methods: {
			//收起展开状态切换
			changeCollapse() {
				this.$emit('moreClick')
				if(!this.collapseText) return;
				this.expand = !this.expand;
			},
			//文本点击事件
			contentClick() {
				this.$emit('contentClick');
			},
		}
	}
</script>

<style lang="scss" scoped>
	.t-wrap {
		// width: var(--width);
		width:100%;
		box-sizing: border-box;
		position: relative;
	}

	.t-txt-hide {
		word-break: break-word;
		position: absolute;
		top: 999999px;
		left: 999999px;
		z-index: -1000;
		top: 0rpx;
		width: 100%;
		margin: 0rpx;
		text-align: justify;

	}

	.t-ellipsis {
		text-align: end;
		box-sizing: border-box;
		width: 100%;
		word-break: break-word;
		position: relative;
		left: 99999px;
	}
	.t-skeleton{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 0rpx;
		left: 0rpx;
	}
	.skeletons:first-child{
		margin-top: 0rpx !important;
	}
	.skeletons {
		position: relative;
		display: block;
		overflow: hidden;
		width: 100%;
		height: 32rpx;
		margin-top: 12rpx;
		background-color: rgba(0, 0, 0, 0.06);
		box-sizing: border-box;
	}

	.skeletons .empty {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
		background: linear-gradient(90deg, transparent, rgba(216, 216, 216, 0.753), transparent);
		-webkit-animation: loading .8s infinite;
		animation: loading .8s infinite;
	}



	@keyframes loading {
		100% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
	}
</style>