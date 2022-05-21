const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  outputDir: '../dist',
  transpileDependencies: [
    'vuetify'
  ],
  assetsDir: 'static',
  devServer: {
    port: 8080,
    host: '0.0.0.0'
  }
})
