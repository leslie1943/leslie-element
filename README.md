#### 工作区
- 给工作区根目录安装开发依赖 `yarn add jest -D -W`
- 给指定工作区安装依赖 `yarn workspace lg-button add lodash@4` `lg-button`不是文件夹的名字,是模块文件夹内部的`package.json`里的写法
- `yarn workspace lg-button add lodash@4`
- 给所有工作区安装依赖 `yarn install`

#### package.json
- `private:true`: 根目录的内容不会发布

#### Lerna介绍
命令行登录npm stack的时候需要切换镜像源到 npmjs
nrm ls
yarn config set registry http://registry.npmjs.org/
```bash
# nrm use npm 或者 
# npm config set registry https://registry.npmjs.org/
```

#### 单元测试
- `Vue Test Utils`
- `Jest`
- `vue-jest`
- `babel-jest`
- `yarn add jest @vue/test-utils vue-jest babel-jest -D -W`


#### jest.config
```js
module.exports = {
  "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
  "moduleFileExtensions": [
    "js",
    "json",
    // 告诉 jest 处理 .vue文件
    "vue"
  ],
  "transform": {
    // 用 `vue-jest` 处理 `*.vue`文件
    ".*\\.(vue)$": "vue-jest",
    // 用 `babel-jest`处理 js
    ".*\\.(js)$": "babel-jest"
  }
}
```

#### babel 桥接
- `yarn add babel-core@bridge -D -W`

#### delete snapshot
- `yarn test -u`

#### 打包 根目录
- `rollup`
- `rollup-plugin-terser`  压缩代码
- `rollup-plugin-vue@5.1.9` 单文件组件编译成JS代码. 指定版本(5.1.9 支持 vue2.x) 最新版本(vue3.x)
- `vue-template-compiler`

#### 打包指定工作区
- `yarn workspace leslie-button-suzhen run build ` 打包指定工作区


#### 打包全部工作区
- `yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W`

#### 设置环境变量
- 安装跨平台的 `cross-env` `yarn add cross-env -D -W`
- 修改 `package.json`
``` bash
# dev
"build:dev": "cross-env NODE_ENV=development rollup -c",
# prod
"build:prod": "cross-env NODE_ENV=production rollup -c"
```

#### 清理 node_modules
- `package.json`中配置 `"clean":"lerna clean"`

#### 清理 dist
- `yarn add rimraf -D -W`
- 每个工作区修改 `package.json`中增加 `scripts` 的 `"del": "rimraf dist"`
- `yarn workspaces run del`


#### 组件模板
- `yarn add plop -D -W`
- 在 `plop-template\component`下设置模板内容
- 根目录 `package.json`中增加 `scripts` 的 `"plop": "plop"`