## 自制前端脚手架,实现公司内部前端工程化

###   安装
#### mac安装
>sudo npm i create-trust-app -g


#### windows安装
>npm i create-trust-app -g
### 模块
#### 初始化
> xmt init 目录名

创建完成后结构如下：
```
demo(vue3)
├─.browserslistrc
├─.env
├─.env.pre
├─.env.prod
├─.env.sit
├─.env.uat
├─.eslintrc.js
├─.eslintignore
├─babel.config.js
├─jest.config.js
├─package.json
├─vue.config.js
├─README.md
├─tsconfig.json
├─public
    ├─img
    ├─index.html
    ├─service-worker.js
├─src
|  ├─assets
|  ├─components
|  ├─contanst
|  |   └api.ts
|  |   └global.ts
|  ├─directives
|  ├─hooks
|  ├─plugins
|  ├─router
|  |   ├─index.ts
|  ├─store
|  |   └index.ts
|  |   └action.ts
|  |   └mutations.ts
|  |   └types.ts
|  ├─types
|  |    ├─extension.d.ts
|  |    ├─type.d.ts
|  ├─utils
|  |     ├─request.ts
|  ├─views
|  ├─App.vue
|  ├─main.ts
```
```
demo(react)
├─.eslintrc.js
├─.gitignore
├─.gitmoudules
├─debug.log
├─package.json
├─dll.config.js
├─README.md
├─config
 /   ├─jest
 /   ├─env.js
 /   ├─paths.js
 /    ├─polyfills.js
 /   ├─webpack.config.dev.js
 /   ├─webpack.config.prod.js
 /   ├─webpackDevServer.config.js
├─scripts
 /   ├─build.js
 /   ├─start.js
  /  ├─test.js
├─public
 /   ├─lib
 /   ├─index.html
├─src
|  ├─components
|  ├─contanst
|  ├─containers
|  ├─hooks
|  ├─images
|  ├─router
|  |   ├─index.ts
|  ├─redux
|  ├─utils
|  |     ├─request
|  ├─index.css
|  ├─index.js
```
#### 进入当前项目
> cd 目录名
#### 安装依赖包
> npm i
### 文档：


