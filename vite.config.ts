import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const folders = ['js', 'css'];
      for (const folder of folders) {
        const src = path.resolve(__dirname, folder);
        const dest = path.resolve(distDir, folder);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [copyStaticAssets()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          exam: path.resolve(__dirname, 'exam.html'),
          admin: path.resolve(__dirname, 'admin.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

