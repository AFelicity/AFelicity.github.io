import { defineConfig, loadEnv } from "vite"
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, "./")
  return {
    plugins: [react()],
    // 配置Scss
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "./src/styles/sassConfig";`,
        },
      },
    },
    // 配置路径别名
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    // 配置跨域
    server: {
      port: 8888,
      host: "192.168.31.207",
      proxy: {
        "/api": {
          target: config.VITE_TARGET,  // 会自动判断当前环境，对应上述三个文件中的target
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  }

})
