import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // 主要用于alias文件路径别名
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 打包配置
  build: {
    lib: {
      entry: resolve(__dirname, 'src/build.js'),
      name: 'react-highlight-code',
      fileName: (format) => `react-highlight-code.${format}.js`
    },
    sourcemap: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})