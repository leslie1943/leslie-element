import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    // dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compilerTemplate: true
  }),

  json(),
  nodeResolve(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true
    // 把 css 放到和 js 同一目录
    extract: true
  })
]

// 如果不是开发环境,开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // 过滤,只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map(item => {
    // 找到每一个包中的package.json文件
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main), // 打包 cjs
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.module), // 打包 es
          format: 'es'
        }
      ],
      plugins: plugins
    }
  })