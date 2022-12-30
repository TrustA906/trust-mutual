# isCardID

校验证件类型

## isAll

校验是否为证件类型

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isAll('4324242')
console.log(cardId) // output:false
```

## isBornCertificatePass

校验是否为出生证

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isBornCertificatePass('4324242')
console.log(cardId) // output:false
```

## isForeigner

校验是否为外国人永久居留证

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isForeigner('4324242')
console.log(cardId) // output:false
```

## isHKMacaoIdCard

校验是否为港澳居民居住证

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isHKMacaoIdCard('4324242')
console.log(cardId) // output:false
```

## isHKMacaoPass

校验是否为港澳居民来往大陆通行证

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isHKMacaoPass('4324242')
console.log(cardId) // output:false
```

## isIdCard

校验是否为身份证/户口本

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isIdCard('4324242')
console.log(cardId) // output:false
```

## isPassport

校验是否为护照

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isPassport('4324242')
console.log(cardId) // output:false
```

## isTWIdCard

校验是否为台湾居民居住证

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isTWIdCard('4324242')
console.log(cardId) // output:false
```

## isTWPass

校验是否为台湾居民来往大陆通行证

## 使用示例

```javascript
import { verify } from trust-util;
const { isCardID } = verify
const cardId = isCardID.isTWPass('4324242')
console.log(cardId) // output:false
```