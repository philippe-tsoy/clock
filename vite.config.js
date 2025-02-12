import { defineConfig } from 'vite';

export default defineConfig({
    base: '/valentine/',
    publicDir: 'public',
    root: './',
    build: {
        outDir: 'dist',
        minify: true,
        cssMinify: true,
    },
});