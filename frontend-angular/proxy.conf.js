const PROXY_CONFIG = {
    "/node/*": {
        target: 'http://' + process.env.DOMAIN_BACKEND_NODEJS + ':' + process.env.PORT_BACKEND_NODEJS,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/node": ""
        },
        changeOrigin: true
    },
    "/core/*": {
        target: 'http://' + process.env.DOMAIN_BACKEND_CORECS + ':' + process.env.PORT_BACKEND_CORECS,
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/core": ""
        },
        changeOrigin: true
    }
};

module.exports = PROXY_CONFIG;
