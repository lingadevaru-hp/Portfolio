import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/index.html',
        about: '/about.html',
        contact: '/contact.html',
        projects: '/projects.html',
        techStack: '/tech-stack.html',
        blog: '/blog/index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
}); 