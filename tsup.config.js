import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['index.tsx'],
  cjsInterop: true,
  format: ['cjs', 'esm'],
  keepNames: true,
  minify: false,
  shims: true,
  splitting: false,
  sourcemap: true
  // target: 'node20'
});
