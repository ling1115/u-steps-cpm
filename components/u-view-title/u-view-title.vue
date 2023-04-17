<template>
	<view class="u-block">
		<div class="b-item-content">
			<div class="b-item">
				<div class="b-title">
					<slot name="t-memo"></slot>
				</div>
				<div class="b-value b-no">{{ title }}</div>
				<div class="b-title">
					<slot name="b-memo"></slot>
				</div>
			</div>
			<div class="b-item b-item-icon">
				<slot name="right"></slot>
			</div>
		</div>
	</view>
</template>

<script>
export default{
	name:'receiptViewTitle',
	props: {
		title: {type:String}
	},
	data() {
		return {
			
		}
	},
	methods:{
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
		.b-item-content{
			display: flex;
			justify-content: space-between;
			.b-item {
				display: flex;
				flex-direction: column;
				margin-bottom: 6px;
				flex: 1;
				.b-no{
					font-weight: 500;
					font-size: 16px !important;
					line-height: 22px;
					color: #333333;
				}
				.b-value {
					padding: 4px 0;
					font-size: 14px;
					flex: 1;
					text-align: left;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.b-title {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 10px;
					line-height: 14px;
					display: flex;
					align-items: center;
					color: #999999;
				}
			}
			.b-item-icon{
				justify-content: center;
				flex: inherit;
				font-size: 12px;
				line-height: 17px;
				text-align: end;
				display: flex;
				flex-direction: row;
				align-items: center;
				span:nth-child(2){
					font-weight: 600;
				}
			}
		}
	}
	
	
</style>