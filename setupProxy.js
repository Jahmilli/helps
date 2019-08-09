
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    const proxyPaths = [
        '/api'
    ];
    app.use(proxy(proxyPaths, { target: 'http://localhost:8882/' }));
//     "proxy": "http://localhost:8882", # For testing with stubby
//   "proxy": "http://localhost:3001", # For testing with our backend server
}