const path = require('path')

const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils'),
    pages: path.resolve(__dirname, './src/pages'),
    '@': path.resolve(__dirname, './src')
  })
)