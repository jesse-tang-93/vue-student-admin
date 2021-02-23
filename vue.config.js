module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "简易学生名单管理系统";
      return args;
    });
  },
};
