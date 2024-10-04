import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        transformer: 'lightningcss',
    },
    plugins: [cssInjectedByJsPlugin()],
    build: {
        outDir: './dist/qrcode',
        lib: {
            entry: './modules/qrcode/index.js',
            name: 'qrcode',
            formats: ['iife'],
            fileName: () => 'index.js'
        },
        minify: false,
        sourcemap: false,
        emptyOutDir: true
    }
})