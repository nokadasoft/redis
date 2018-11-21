const proxy = require('http-proxy-middleware')

//https://stackoverflow.com/questions/52644522/add-multiple-proxy-in-package-json
//https://www.npmjs.com/package/http-proxy-middleware
//https://stackoverflow.com/questions/10435407/proxy-with-express-js
module.exports = function(app) {
  app.use(proxy('/vnode', { target: 'http://backend_nodejs_service:8001/', pathRewrite: {'^/vnode/':'/'} }));
  app.use(proxy('/vcore', { target: 'http://backend_corecs_service:8002/', pathRewrite: {'^/vcore/':'/'} }));
}
