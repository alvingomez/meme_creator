const path = require('path');

module.exports = {
 mode: 'development',
 entry: {
  app: './src/js/memes.js',
  general: './src/js/general.js'
 },
 output: {
  path: path.join(__dirname, 'public'),
  filename: '[name].js'
 },
 module: {
  rules: [{
   loader: 'babel-loader',
   test: /\.jss$/,
   exclude: /node_modules/
  },
  {
   test:/\.css$/,
   use: [
    {
     loader: 'style-loader'
    },
    {
     loader:'css-loader',   
     options: {sourceMap: true}  
    }
   ]
  }
 ]
 }
}