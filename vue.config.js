// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5674',  // Ganti dengan URL backend Anda
        changeOrigin: true,               // Menghindari masalah CORS
        pathRewrite: {
          '^/api': '',  // Menghapus /api dari URL yang dikirim ke server
        },
      },
    },
  },
};
