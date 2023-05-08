<template>
	<div class="u-content" ref="content">
		<div class="u-block">
			<div class="h-title">
				<div v-if="titleSlot">
					<slot name="title"></slot>
				</div>
				<div v-if="!titleSlot&&title" class="title-content">
					<div class="split-line"></div>
					<div class="t-title">{{ title }}</div>
				</div>
			</div>
			<div class="base-info-content" v-if="options.length">
				<div class="base-item" v-for="(item,index) in options" :key="index">
					<div class="item-label">{{item.label}}</div>
					<div class="item-value" :ref="`item_${index}`">
							<kevy-ellipsis
								:content="item.value"
								:font-size="size"
								:font-color="color" :rows="rows" 
								@contentClick="handleClickContent(index, item.value, item)" 
								@moreClick="handleClickMore(index, item.value, item)"
								:collapseText="collapseText" 
								:expandText="expandText" 
								:actionFontColor="actionFontColor"
							></kevy-ellipsis>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import kevyEllipsis from '@/components/kevy-ellipsis/kevy-ellipsis'
    
export default{
	name:'receiptViewCom',
	components:{kevyEllipsis},
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		options: {
			type: Array,
			default() {
				return []
			}
		},
		rows:{
			type: [String,Number],
			default: 1
		},
		color:{
			type: String,
			default:'#333333'
		},
		size:{
			type: [String,Number],
			default: 28
		},
		expandText:{
			type: String,
			default:''
		},
		collapseText:{
			type: String,
			default:''
		},
		actionFontColor:{
			type: String,
			default:'#007aff'
		},
	},
	data() {
		return {
			titleSlot:'',
		}
	},
	mounted(){
		this.titleSlot = this.$slots.title
	},
	methods:{
		handleClickContent(index, label, item){
			let option= {index, label, item}
			// console.log(option)
			this.$emit("contentClick", option)
		},
		handleClickMore(index, label, item){
			let option= {index, label, item}
			this.$emit("moreClick", option)
		},
		getIconName(item){
			if(item.receiptStatus=='4'){
				return "qdfont qd-normal"
			}else if(item.receiptStatus=='12'){
				return "qdfont qd-logoff"
			}else if(item.receiptStatus=='6'){
				return "qdfont qd-wait"
			}else if(item.receiptStatus=='7'){
				return "qdfont qd-checkmark"
			}else if(item.receiptStatus=='8'){
				return "qdfont qd-warn"
			}else if(item.receiptStatus=='9'){
				return "qdfont qd-file"
			}
		},
		getIconColor(item){
			if(item.receiptStatus=='4'){
				return "#1CB77B"
			}else if(item.receiptStatus=='12'){
				return "#E36F04"
			}else if(item.receiptStatus=='6'){
				return "#ECBD15"
			}else if(item.receiptStatus=='7'){
				return "#4686F2"
			}else if(item.receiptStatus=='8'){
				return "#FF7E7E"
			}else if(item.receiptStatus=='9'){
				return "#999999"
			}
		},
	},
}
</script>

<style lang="scss" scoped>
	.u-block{
		background-color: #ffffff;
		border-radius: 10px;
		margin: 12px 16px;
		padding: 10px;
		.h-title {
			.title-content{
				align-items: baseline;
				display: flex;
				.split-line {
					display: inline-block;
					width: 3px;
					height: 12px;
					background: $u-primary;
					margin-right: 6px;
				}
				.t-title {
					font-weight: 600;
					font-size: 16px;
					line-height: 22px;
					color: #333333;
				}
			}
		}
		.base-info-content{
			padding: 10px;
			.base-item{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding-bottom: 10px;
				.item-label{
					font-weight: 400;
					font-size: 14px;
					line-height: 20px;
					display: flex;
					align-items: baseline;
					color: #666666;
					width: 100px;
				}
				.item-value{
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 14px;
					line-height: 20px;
					display: flex;
					align-items: center;
					text-align: right;
					color: #333333;
					flex: 1;
					justify-content: flex-end;
				}
			}
		}
	}
</style>