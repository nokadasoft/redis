const proxy = require('http-proxy-middleware')

//https://stackoverflow.com/questions/52644522/add-multiple-proxy-in-package-json
//https://www.npmjs.com/package/http-proxy-middleware
//https://stackoverflow.com/questions/10435407/proxy-with-express-js
module.exports = function(app) {
  app.use(proxy('/vnode', { target: 'http://' + process.env.REACT_APP_DOMAIN_BACKEND_NODEJS + ':' + process.env.REACT_APP_PORT_BACKEND_NODEJS + '/', pathRewrite: {'^/vnode/':'/'} }));
  app.use(proxy('/vcore', { target: 'http://' + process.env.REACT_APP_DOMAIN_BACKEND_CORECS + ':' + process.env.REACT_APP_PORT_BACKEND_CORECS + '/', pathRewrite: {'^/vcore/':'/'} }));
}
