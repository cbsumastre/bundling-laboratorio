import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import typescript from '@rollup/plugin-typescript'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => {
  return {
    plugins: [
      checker({ typescript: true }),
      react()
    ],
    build: {
      sourcemap: true,
      rollupOptions: {
        plugins: [typescript()]
      },
      modulePreload: {
        polyfill: false
      },
      cssMinify: "esbuild" // default value
    },
    server: {
      port: 5173
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger']:[]
    }
  }

});