import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/* 修改 src 别名 */
import path from 'path'
/* Unocss 样式库 */
import Unocss from 'unocss/vite'
/* tsx */
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue(),
    Unocss({}),
    VueJsx(),
  ]
})
