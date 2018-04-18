var path = require('path');
var config = {
   entry: './server.js', // entry point
   output: {
         path : path.join(__dirname, './'),
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080,
         historyApiFallback: true, // development port server
      },
   module: {
         rules: [
            {
               test: /\.jsx?$/, // search for js files 
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         }
      ]
   }
}
module.exports = config;