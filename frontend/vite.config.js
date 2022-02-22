import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import * as path from 'path'

const resolve = (dir) => path.join(__dirname, dir)

export default defineConfig({
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        quasar({
            sassVariables: 'src/theme/quasar-variables.sass'
        }),
    ],
    resolve: {
        alias: {
            '/@': resolve('./src'),
        },
        extensions: ['.ts', '.js', '.vue', '.json'],
    },

    build: {
        outDir: 'dist',
        minify: 'esbuild',
        sourcemap: false,
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].${new Date().getTime()}.js`,
                chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
                assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset') {
                                atRule.remove();
                            }
                        },
                    },
                },
            ],
        },
    },
})
