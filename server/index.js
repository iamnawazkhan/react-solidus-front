/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

const httpProxy = require('http-proxy');
const apiPort = argv.apiPort || process.env.API_PORT || 4030;
const apiHost = argv.apiHost || process.env.API_HOST || 'localhost';
const proxy = httpProxy.createProxyServer({
  target: `http://${apiHost}:${apiPort}/api`,
});

// Proxy to API server
app.use(/\/(api|spree)/, (req, res) => {
  proxy.web(req, res);
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended port number, use port 4000 if not provided
const port = argv.port || process.env.PORT || 4000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
