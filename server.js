import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config.dev';

var port = 3000;
var app = express();
var compiler = webpack(config);
const options = { noInfo: true, publicPath: config.output.publicPath };
app.use(require('webpack-dev-middleware')(compiler, options));

app.get('/', function(req, res) {
  res.sendFile(join(__dirname, 'src/index.html'));
});

app.listen(port, function(err) {
  open('http://localhost:' + port);
});
