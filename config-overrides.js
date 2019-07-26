const path = require('path')

const { override, addWebpackAlias, fixBabelImports } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    components: path.resolve(__dirname, './src/components'),
    utils: path.resolve(__dirname, './src/utils'),
    store: path.resolve(__dirname, './src/store'),
    pages: path.resolve(__dirname, './src/pages'),
    pages: path.resolve(__dirname, './src/pages'),
    '@': path.resolve(__dirname, './src')
  }),
  fixBabelImports('import',
    {
      libraryName: 'antd-mobile',
      style: 'css',
    })
)