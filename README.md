# u-steps-com

uni-app 步骤条组件，配合右侧显示内容`u-view-com`组件一起使用
支持自定义icon，自定义图标背景色，自定义步骤条颜色(支持渐变)


## 1. 使用
参考[github中pagse/index/index.vue](https://github.com/ling1115/u-steps-cpm/tree/dev-master)

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
| title	| 支持自定义右侧首部信息 |

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


