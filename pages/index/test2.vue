<template>
	<div class="page" ref="page">
		<div v-for="(item, index) in logList" :key="item.id"  class="r-item" :ref="`item_${index}`">
			<u-steps-com  :type="getIconName(item)" 
				@click="handleClick(index)"
				@svg-click="handleSvgClick(index)"
				:steps='logList.length'
				:current="index"
				:rContentHeight="rContentHeight"
				color="#ffffff"
				size="20px"
				:lineColor="getlineBg(item)"
				:contentBgColor="getContentBg(item)"
				>
			</u-steps-com>
			<!--  -->
			<div ref="rContent">
				<u-view-title title="操作">
					<template slot="t-memo">
						<div>头部说明</div>
					</template>
					<template slot="b-memo">
						<div>底部说明</div>
					</template>
					<template slot="right" style="display: flex;flex-direction: row;align-items: center;">
						<svg-icon type="checkmark-circle" size="12px" color="#1BD88F"></svg-icon>
						<div style="margin-left:4px;color:#1BD88F">正常</div>
					</template>
				</u-view-title>
				
				<u-view-com
					:options="item.formItem"
					@contentClick="handleClickContent"
					@moreClick="handleClickMore"
					expandText="更多"
					collapseText=""
					:rows="Number(2)"
					color="#333333"
					:size="Number(14)"
					actionFontColor="#007aff"
					:title="item.title"
				>
					<template slot="title">
						<span class="t-title">{{ item.title }}</span>
					</template>
				</u-view-com>
			</div>
		</div>
	</div>
</template>

<script>
	import UStepsCom from '@/components/u-steps-com/u-steps-com.vue'
	import UViewCom from '@/components/u-view-com/u-view-com.vue'
	import UViewTitle from '@/components/u-view-title/u-view-title.vue'
	export default {
		name:'index',
		components:{
			UStepsCom,
			UViewCom,
			UViewTitle
		},
		data() {
			return {
				logList:[
					{
						id:1,
						title:'基本信息',					
						status:"check",
						date:'2023-12-23 12:20:32',
						formItem:[
							{
								key:'businessType',
								label:'业务类型',
								value:'仓单合并'
							},
							{
								key:'weight',
								label:'操作重量',
								value:'12321'
							},
							{
								key:'memo',
								label:'说明',
								value:'呀哈哈哈哈哈哈以后哈哈哈哈'
							},
						]
					},
					{
						id:12,
						title:'基本信息',					
						status:"check",
						date:'2023-12-23 12:20:32',
						formItem:[
							{
								key:'businessType',
								label:'业务类型',
								value:'仓单合并'
							},
							{
								key:'weight',
								label:'操作重量',
								value:'12321'
							},
							{
								key:'memo',
								label:'说明',
								value:'呀哈哈哈哈哈哈以后哈哈哈哈呀哈哈哈哈哈哈以后哈哈哈哈'
							},
						]
					},
					{
						id:2,
						title:'冻结',
						status:"wait",
						date:'2023-12-23 12:20:32',
						formItem:[
							{
								key:'businessType',
								label:'业务类型',
								value:'仓单合并'
							},
							{
								key:'weight',
								label:'操作重量',
								value:'12321'
							},
							{
								key:'memo',
								label:'说明',
								value:'呀哈哈哈哈哈哈以后哈哈哈哈'
							},
						]
					},
					{
						id:3,
						title:'呀哈哈',
						status:"error",
						date:'2023-12-23 12:20:32',
						formItem:[
							{
								key:'businessType',
								label:'业务类型',
								value:'仓单合并'
							},
							{
								key:'weight',
								label:'操作重量',
								value:'12321'
							},
							{
								key:'memo',
								label:'说明',
								value:'呀哈哈哈哈哈哈以后哈哈哈哈'
							},
						]
					},
					{
						id:4,
						title:'呀哈哈',
						status:"check",
						date:'2023-12-23 12:20:32',
						formItem:[
							{
								key:'businessType',
								label:'业务类型',
								value:'仓单合并'
							},
							{
								key:'weight',
								label:'操作重量',
								value:'12321'
							},
							{
								key:'memo',
								label:'说明',
								value:'呀哈哈哈哈哈哈以后哈哈哈哈'
							},
						]
					}
				],
				rContentHeight:0
			}
		},
		mounted(){
			if(this.$refs['item_0']){
				this.rContentHeight = this.$refs['item_0'][0].clientHeight;
			}
		},
		methods: {
			// 点击文本
			handleClickContent(option){
				console.log("点击了文本")
				console.log(option)
			},
			// 点击更多
			handleClickMore(option){
				console.log("点击了更多")
				console.log(option)
			},
			// 点击图标
			handleClick(i){
				console.log("点击图标")
				console.log(i);
			},
			// 点击svg图标
			handleSvgClick(i){
				console.log("点击")
				console.log(i);
			},
			// 根据状态设置图标
			getIconName(item){
				if(item.status=='check'){
					return "checkmark-circle"
				}else if(item.status=='wait'){
					return "clock"
				}else if(item.status=='error'){
					return "close-circle"
				}
			},
			// 根据状态设置图标背景色
			getContentBg(item){
				if(item.status=='error'){
					return ["#FF7E7E","#E33131"]
				}else if(item.status=='check'){
					return ["#1BD88F","#0FC237"]
				}if(item.status=='wait'){
					return ["#FFB438","#F28344"]
				}
			},
			// 根据状态设置步骤条颜色
			getlineBg(item){
				for(let i=0; i < this.logList.length; i++){
					if(this.logList[i].id === item.id){
						if(this.logList[i+1]){
							let status = item.status
							if(status=='error'){
								if(this.logList[i+1].status=='check'){
									return ["#FD7878","#1AD581"]
								}else if(this.logList[i+1].status=='error'){
									return ["#FE7979","#FE7979"]
								}else if(this.logList[i+1].status=='wait'){
									return ["#FE7A7A","#FEB03A"]
								}
							}
							if(status=='wait'){
								if(this.logList[i+1].status=='check'){
									return ["#FFB139","#1AD687"]
								}else if(this.logList[i+1].status=='wait'){
									return ["#FFB139","#FFB139"]
								}else if(this.logList[i+1].status=='error'){
									return ["#FFB139","#FD7878"]
								}
							}
							if(status=='check'){
								if(this.logList[i+1].status=='check'){
									return ["#1CB77B","#1CB77B"]
								}else if(this.logList[i+1].status=='wait'){
									return ["#1CB77B","#FEAD3B"]
								}else if(this.logList[i+1].status=='error'){
									return ["#1CB77B","#FF7E7E"]
								}
							}
						}else if(!this.logList[i+1]){
							return ["",""]
						}
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		background-color: #f2f2f2;
		overflow-y: scroll;
		position: relative;
		height: 100%;
		overflow-y: scroll;
		position: relative;
		.r-item{
			display: flex;
		}
	}
</style>
