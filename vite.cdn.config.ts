import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * CDN build config — produces a single self-contained IIFE bundle
 * that inlines lit and registers all custom elements.
 */
export default defineConfig({
  build: {
    outDir: 'dist-cdn',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/define.ts'),
      formats: ['iife'],
      name: 'SfxUploader',
      fileName: () => 'sfx-uploader.min.js',
    },
    rollupOptions: {
      external: [],
    },
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
