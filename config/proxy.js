module.exports = {
  '/api': {
    target: 'http://192.168.1.2:8080',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  }
}

