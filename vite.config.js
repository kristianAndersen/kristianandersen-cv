const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  
  server: {
    port: 8080,
    hot: true
  },
  build: {
    // output dir for production build
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: true,

    // esbuild target
    target: 'ES6',

    // our entry
    rollupOptions: {
     input: '/src/js/main.js'
    }
  },

}