# 快速上手

### 介绍

通过本章节你可以了解到 Trust-mobile 的安装方法和基本使用姿势。

## 安装

trust-mobile依赖于vant，请务必先安装vant

```bash
npm i vant@3
```

### 通过 npm 安装

在现有项目中使用 trust-mobile 时，可以通过 `npm` 进行安装：

```bash
npm i trust-mobile
```

## 引入组件

### 方式一. 通过 babel 插件按需引入组件

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中添加配置：

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

接着你可以在代码中直接引入 trust-mobile 组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { TButton } from 'trust-mobile';

```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 方式二. 在 Vite 项目中按需引入组件

对于 vite 项目，可以使用 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 实现按需引入, 原理和 `babel-plugin-import` 类似。

```bash
# 安装插件
npm i vite-plugin-style-import -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
};
```
因vite基于rollup构建，rollup对于路径不做额外处理。故vite中还需安装@rollup/plugin-alias插件

```
npm i @rollup/plugin-alias -D
```
```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias'
import styleImport from 'vite-plugin-style-import';

export default {
  plugins: [
    alias(),
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "vant/es": path.resolve(__dirname,"./node_modules/vant/es"),
    }
  },
};
```