// 添加模块
const path = require("path");

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    // 确定icons所在的目录，定义为dir（也就是director目录的意思）
    const dir = path.resolve(__dirname, "src/assets/icons");

    config.module
      .rule("svg-sprite")
      .test(/\.svg$/) // 如果匹配上这个正则，就用这个规则
      .include.add(dir) // 只在dir目录下的svg走这个规则
      .end() // 只包含 icons 目录
      .use("svg-sprite-loader") // 使用哪些loader
      .loader("svg-sprite-loader")
      .options({ extract: false }) // 不要把它解析出文件
      .end()
      // 使用svgo-loader，批量删除svg里面的fill属性
      .use("svgo-loader")
      .loader("svgo-loader")
      .tap((options) => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: "fill" } }],
      }))
      .end();
    config
      // 配置插件
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 排除 icons 目录
  },
};
