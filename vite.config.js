/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return {
    plugins: [react()],
    define: {
      "process": process,
    },
    resolve: {
      alias: [
        {find: "@", replacement: path.resolve(__dirname, "src")},
        {
          find: /^@\//,
          replacement: `${path.resolve(__dirname, "src")}/`,
        },
        {find: /^~/, replacement: ""},
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  }
})
