const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/prompt',
        createProxyMiddleware({
                target: 'https://clipdrop-api.co/text-to-image/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            })),
    app.use(
        '/upload',
        createProxyMiddleware({
            target: 'https://www.imgurl.org/api/v2/upload',
            changeOrigin: true,
            pathRewrite: {
                '^/upload': '',
            }
        }))
};

// module.exports = function(app) {
//     app.use(
//         createProxyMiddleware(
//             '/prompt',
//             {target: 'https://clipdrop-api.co/text-to-image/v1',
//             changeOrigin: true,
//             pathRewrite: (path) => path.replace(/^\/prompt/, '') }));
//     app.use(
//
//         createProxyMiddleware('/upload',
//             {target: 'https://www.imgurl.org/api/v2/upload',
//             changeOrigin: true ,
//             pathRewrite: (path) => path.replace(/^\/upload/, '') }));
// };