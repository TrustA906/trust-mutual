import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import pxtovw from 'postcss-px-to-viewport';
const loder_pxtovw = pxtovw({
  viewportWidth: 750,
  viewportUnit: 'vw',
  exclude: [/node_modules/, /vant\/*.css/],
});
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  //样式表插件
  css: {
    postcss: {
      plugins: [loder_pxtovw, postcssImport, autoprefixer, tailwindcss],
    },
  },
  plugins: [vue(), vueJsx()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
