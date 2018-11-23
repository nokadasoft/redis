const PROXY_CONFIG = {
    "/node/*": {
        target: 'http://localhost:8001',
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/node": ""
        },
        changeOrigin: true
    },
    "/core/*": {
        target: 'http://localhost:8002',
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
