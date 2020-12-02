module.exports = {
  '/cloud': {
    target: 'http://music.163.com/api/',
    pathRewrite: { '^/cloud': '/'},
    changeOrigin: true,
  },
  // '/api': {
  //   target: 'http://192.168.1.2:8080',
  //   pathRewrite: { '^/api': '/' },
  //   changeOrigin: true
  // },

};

