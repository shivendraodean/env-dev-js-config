# Javascript Development Environment

### Project Structure

```
|-- project
    |-- buildScripts
        |-- startMessage.js
    |-- src
        |-- index.html
        |-- index.js
    |-- .server.js - Express JS server used to host the application.
    |-- .babelrc - Babel uses this configuration file by convention. Babel is used to invoke the application in the package.json file.
    |-- .webpack.config.dev.js - This configuration file is used by Webpack in the server.js file.

```

### NPM Scripts
* start - Runs the security check and run:src sub-scripts *in parallel.*
* pre-start - NPM detects this as a pre-hook script and automatically runs it before *start*.
* run:src - Uses babel-node rather than just node to execute the server.js root file.

### Webpack
Webpack is setup by instantiating Webpack with our configuration. We then inject webpack as express middleware.

```
    import webpack from 'webpack';

    var compiler = webpack(config);
    const options = { noInfo: true, publicPath: config.output.publicPath };

    app.use(require('webpack-dev-middleware')(compiler, options));
```