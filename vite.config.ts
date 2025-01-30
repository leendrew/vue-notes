import { resolve, join } from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(mode);

  return defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, join('.', 'src')),
      },
    },
    server: {
      port: parseInt(process.env.VITE_PORT || '3001', 10),
    },
  });
};
