
# trust-util工具库集成规范

易维护是我们的追求，易使用是我们的底线


## 命名

- 组件命名采用驼峰式命名，首字母小写，尽量语义化，如：

  ```
  isEmail
    index.ts
  ```

- 组件文档命名，组件名.md，如：

  ```
  docs
    isEmail.md
  ```
- 测试用例命名，组件名.test.js，如：

  ```
  tests
    isEmail.test.js
  ```

## ts类型导出
组件内声明的类型或外部引入的类型都需要导出，如：

```typescript
export interface setting {
  method?: any;
  headers?: any;
  credentials?: any;
  body: any;
  mode?: any;
  redirect?: any;
  cache?: any;
  dataType?: any;
  data?: any;
}
```

## 其他
- 所有组件都需要配套的md文档和测试用例
- md文档放置于根路径docs下
- 测试用例放置于根路径tests下


