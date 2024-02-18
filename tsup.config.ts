import {defineConfig} from 'tsup';

export default defineConfig({
  name: 'vite-plugin-git-commit-hash',
  entry: ['./src/index.ts'],
  outDir: './dist',
  sourcemap: false,
  clean: true,
  target: 'esnext',
  treeshake: true,
  minify: true,
  format: ['esm', 'cjs'],
  dts: true
})
