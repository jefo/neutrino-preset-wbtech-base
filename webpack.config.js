const path = require('path');
module.exports = {

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve('middlewares/svg/img/*'),
        output: {
          filename: 'middlewares/svg/img'
        }, 
        options: {
          extract: true,
          spriteFilename: 'sprite.svg'
        }
      }
    ]
  }
}