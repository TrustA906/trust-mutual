# isName

校验名称

## 使用示例

```javascript
import { verify } from trust-util;
const name = verify.isName('基督教')
console.log(name) // output:true
```

# isNameCh

校验中文名称

## 使用示例

```javascript
import { verify } from trust-util;
const name = verify.isNameCh('基督教')
console.log(name) // output:true
```

# isNameEn

校验英文名称

## 使用示例

```javascript
import { verify } from trust-util;
const name = verify.isNameEn('基督教')
console.log(name) // output:false
```
