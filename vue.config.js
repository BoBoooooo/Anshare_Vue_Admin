/**
 * @file vue自定义配置，如果存在会被@vue/cli-service自动加载
 *       https://cli.vuejs.org/zh/config/#vue-config-js
 * @author BoBo
 * @copyright NanJing Anshare Tech .Com
 * @createDate 2018年11月13日16:49:39
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const { IgnorePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = ['js', 'css'];

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

// 系统标题统一在环境变量中配置
const PROJECT_NAME = process.env.VUE_APP_NAME;

module.exports = {
  // 为方便多项目部署，打包时使用项目名称
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  // 域名，默认可以设置/dist/
  // 以下使用./相对路径不支持HTML5 history和构建多页面应用
  publicPath: './',
  // 生产环境打包时不启用SourceMap
  productionSourceMap: false,
  // 开发阶段服务器配置
  devServer: {
    port: process.env.PORT ? +process.env.PORT : 80,
  },
  // vue-cli3内部的webpack配置通过webpack-chain维护
  // 链式操作可参考 https://cli.vuejs.org/zh/guide/webpack.html
  chainWebpack: (config) => {
    // vue inspect --rules 列出所有规则，可以看到svg是第三个
    // vue inspect module.rules.2 可以列出默认svg规则配置
    // 从默认svg规则中排除src/icons路径，因为会当做图标自动加载
    config.module.rule('svg').exclude.add(resolve('src/icons'));
    // 添加svg-sprite-loader加载器
    config.module
      .rule('svg-sprite-loader')
      .test(/.svg$/)
      .include.add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .end();
    // ============压缩图片 start============
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end();
    // ============压缩图片 end============

    // 添加开发常量PROJECT_NAME_PINGYIN
    config.plugin('define').tap((option) => {
      option[0]['process.env'].PROJECT_NAME = JSON.stringify(PROJECT_NAME);
      return option;
    });
    // 关闭自动注入，手动在index.html按需加载
    // 会导致菜单切换时请求新资源，但可提高30%首屏渲染速度
    config.plugin('html').tap((options) => {
      options[0].inject = false;
      options[0].title = PROJECT_NAME;
      return options;
    });
    // 移除fetch,提高首屏速度
    config.plugins.delete('prefetch');
    // 是否在打包时输出分析报告
    if (process.env.IS_REPORT) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ]);
    }
    // 构建时不打包公共资源，使用cdn加速
    if (process.env.VUE_APP_CDN === 'true') {
      // 编译时排除
      config.externals({
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        echarts: 'echarts',
        axios: 'axios',
        lodash: '_',
        jsoneditor: 'JSONEditor',
        gojs: 'go',
        'core-js': 'core',
      });
      // 向模板插入资源
      config.plugin('html-assets').use(HtmlWebpackIncludeAssetsPlugin, [
        {
          assets: [
            '/vue/2.6.11/vue.min.js',
            '/vuex/3.5.1/vuex.min.js',
            '/vue-router/3.4.3/vue-router.min.js',
            '/element-ui/2.13.0/index.js',
            '/element-ui/2.13.0/theme-chalk/index.css',
            '/axios/0.19.0-beta.1/axios.min.js',
            '/lodash.js/4.17.11/lodash.min.js',
            '/echarts/4.6.0/echarts.min.js',
            '/jsoneditor/7.0.5/jsoneditor.min.css',
            '/jsoneditor/7.0.5/jsoneditor.min.js',
            '/gojs/2.0.4/go.js',
            '/core-js/2.6.5/shim.min.js',
          ],
          append: false,
          publicPath: 'https://cdn.bootcss.com',
        },
      ]);
    } else {
      // 不用cdn加速时，编译favcion
      config.plugin('html').tap((options) => {
        options[0].favicon = './src/assets/favicon.ico';
        return options;
      });
    }
  },
  configureWebpack: (config) => {
    // 开启gzip压缩
    config.plugins.push(new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
      threshold: 10240,
      minRatio: 0.8,
    }));
  },
};
