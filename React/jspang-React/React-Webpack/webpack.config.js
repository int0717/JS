const path = require('path');
module.exports = {
  entry:'./app/index.js',
  output: {
    filename:'index.js',
    path:path.resolve(_dirname,'dist')
  }
}