## 1. u-view-com 
uni app 查看表单信息组件，支持展示/收起更多操作

### 1. Props
| 名称 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| options | Array | 右侧内容遍历配置数组，必填 | - |
| title | string | 头部标题，非必填 | - |
| rows | Number | 头部标题，非必填 | 2 |
| color | string | label字体颜色 | #333333 |
| size | Number | label字体大小，单位px | 14 |
| weight | Number,string | font-weight | 400 |
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
