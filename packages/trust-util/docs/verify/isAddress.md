# isAddressCn

校验中文地址

## 使用示例

```javascript
import { verify } from trust-util;
const address = verify.isAddressCn('北京市朝阳区百子湾')
console.log(address) // output:true
```

# isAddressEn

校验英文地址

## 使用示例

```javascript
import { verify } from trust-util;
const address = verify.isAddressEn('china')
console.log(address) // output:true
```