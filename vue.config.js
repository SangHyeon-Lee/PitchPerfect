module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/PitchPerfect/" : "/",
  outputDir: "docs",
  chainWebpack: config => {
    config.module.rules.delete('eslint');
},
};
