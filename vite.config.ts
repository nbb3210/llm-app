import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: 'src/renderer', // 渲染进程代码路径
  build: {
    outDir: '../../dist/renderer', // 构建输出路径
    rollupOptions: {
      external: ['electron'], // 确保 Electron 模块不被打包
      output: {
        format: 'cjs',
      },
    },
  },
})
