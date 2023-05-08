# u-steps-com

uni-app 步骤条组件，配合右侧显示内容`u-view-com`组件一起使用
支持自定义icon，自定义图标背景色，自定义步骤条颜色(支持渐变)


## 1. 使用

参考[github中pagse/](https://github.com/ling1115/u-steps-cpm/tree/dev-master)


## 2. u-steps-com 

### 1. Props


| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| type | string | 图标，支持uView所有icon, 所配置自定义图标需以空格分割，如：'iconfont icon-wait' | checkmark-circle, 可以查看uni-icons组件支持的icons字体 |
| size | string | 图标大小 | 24px |
| width | 	String | type为图片路径时图片的宽度，单位默认px | - |
| height | String | type为图片路径时图片的高度，单位默认px | - |
| color | string | 图标颜色 | #3c9cff |
| fill | string | svg其轮廓内的形状的颜色 | #3c9cff |
| steps | Number | 步骤数，必填 | - |
| lineColor | Array | 步骤条颜色，为数组，支持渐变 | ["#3c9cff","#3c9cff"] |
| contentBgColor | Array | 步骤条颜色，为数组，支持渐变 | - |
| rContentHeight | Number | 右侧内容高度，必填 | - |
| current | Number | 当前索引值，必填 | - |

### 2. Event

| 事件名	| 说明	| 回调参数	|
| --- | --- | --- |
| click	| 点击图标时触发 |  |
| svg-click	| 点击svg图标时触发 | 	|


## 3. u-view-com 
uni app 查看表单信息组件，支持展示/收起更多操作

### 1. Props
| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| options | Array | 右侧内容遍历配置数组，必填 | - |
| title | string | 头部标题，非必填 | - |
| rows | Number | 头部标题，非必填 | 2 |
| color | string | label字体颜色 | #333333 |
| size | Number | label字体大小，单位px | 14 |
| collapseText	| String | 	收起操作的文案，无收起操作文案，点击更多时不会展开 | 目前微信小程序不支持，默认展示全部内容 | 
| expandText	| String	| 展开操作的文案| 目前微信小程序不支持，默认展示全部内容 | 
| actionFontColor	| String	| 收起、展开操作文字颜色| '#007aff' |

* option配置项

| 名称 | 说明 |
| --- | --- |
| value | 左侧显示内容 |
| label | 右侧显示内容 |



### 2. Event

| 事件名	| 说明	| 回调参数	|
| --- | --- | --- |
| contentClick	| 右侧内容点击文本的事件函数| 返回option, 包含当前索引index, 当前右侧表单显示值label，当前遍历对象item |
| moreClick	| 右侧内容显示更多时，点击更多的事件函数| 返回option, 包含当前索引index, 当前右侧表单显示值label，当前遍历对象item |

### 3. Solt

| name	| 说明	| 
| --- | --- |
| title	| 支持自定义首部信息 |

## 4. u-view-title
可配合 `u-view-title` 新增额外头部信息

### 1. Props
| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| title | string | 头部内容 | - |

### 2. Solt

| name	| 说明	| 
| --- | --- |
| t-memo | 支持title上方说明信息 |
| b-memo | 支持title下方说明信息 |
| right | 支持title右侧说明信息 |


## 例子
```html
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
```

## 5. svg-icon
基于字体的图标集，支持uni-icon字体库，支持自定义icon，支持svg

### 1. Props
| 参数	| 说明	| 类型	| 默认值	| 是否必填 | 
| -- | -- | -- | -- | -- | 
type |	图标名称，支持uni-icon字体库，支持自定义icon，支持svg，如名称带有/，会被认为是图片图标 |	String |	- |	是 |
color |	图标颜色 |	String |	#3c9cff |	- |
size |	图标字体大小，单位默认rpx |	String / Number	 | 48rpx |	-
bold |	是否显示粗体 |	Boolean |	false |	- |
index |	一个用于区分多个图标的值，点击图标时通过click事件传出 |	String / Number |	- |	- |
width |	name为图片路径时图片的宽度，单位默认rpx |	String / Number |	- |	- |
height | name为图片路径时图片的高度，单位默认rpx |	String / Number	 |-	 |- |
stop |	是否阻止事件传播，仅支持自定义图标和图片图标 |	Boolean |	false |	- |

### 2. Event

| 事件名	| 说明	| 回调参数	|
| --- | --- | --- |
| svg-click	| 点击图片图标 | 返回当前图标索引index，若未传index, 则返回undefined |
| click	| 点击icon图标 | 返回当前图标索引index，若未传index, 则返回undefined |