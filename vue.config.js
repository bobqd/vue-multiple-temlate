const glob = require('glob')

//配置pages多页面获取当前文件夹下的html和js
const titleList = {
  'index': '首页',
  'login': '登录页'
}
function getEntry(globPath) {
  let entries = {}, tmp;

  // 读取src/pages/**/底下所有的js文件
  glob.sync(globPath+'js').forEach(function(entry) {
      tmp = entry.split('/').splice(-3);
      entries[tmp[1]] = {
          entry,
          template: './public/index.html',
          title: titleList[tmp[1]]?titleList[tmp[1]]:'',
          filename:tmp[1] + '.html'   //  以文件夹名称.html作为访问地址
      };
  });
  console.log(entries)
  return entries;
}
let pages = getEntry('./src/pages/**/*.');

module.exports = {
  // 基本路径
  publicPath: '/hc/public/static/dist',
  pages,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3333",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
