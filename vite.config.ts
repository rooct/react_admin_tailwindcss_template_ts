import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: 
      {
        '@': join(__dirname, 'src')
      },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
