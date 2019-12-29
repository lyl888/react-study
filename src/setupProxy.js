const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: 'http://cb.ys168.com/f_ht/ajcx/lyd.aspx?cz=lyxs&n=1&dqy=0&lybh=0&zts=0&_dlmc=target&_dlmm=' ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};