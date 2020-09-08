import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es' // ECMAScript module
      }
    ],
    plugins: [
      vue({
        // dynamically inject css as a <style> tag
        css: true,
        // Explicitly convert template to render function
        compilerTemplate: true
      }),
      terser()
    ]
  }
]