module.exports = {
  '/cloud': {
    target: 'http://music.163.com/api/',
    pathRewrite: { '^/cloud': '/'},
    changeOrigin: true,
  },
  '/api': {
    target: 'http://127.0.0.1:5000',
    changeOrigin: true
  },
  // '/': {
  //   target: 'http://127.0.0.1:9165',
  // }
};

