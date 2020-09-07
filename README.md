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
nrm use npm 或者 npm config set registry https://registry.npmjs.org/