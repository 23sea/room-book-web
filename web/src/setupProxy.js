const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4200', // Replace with your API server URL
      changeOrigin: true,
    })
  );
};
