# getLabelByValue

根据身份证获取性别

## 使用示例

```javascript
import { getLabelByValue } from trust-util;
const options = [{label:'aa',value:11}]
const label = getLabelByValue(11,options)
console.log(label) // output:aa
const options2 = [{name:'bb',value:22}]
const label2 = getLabelByValue(11,options2,'name')
console.log(label2) // output:bb
```
