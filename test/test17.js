/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-18 09:05:47
 * @LastEditTime: 2021-02-22 10:16:11
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test17.js
 */
// nginx服务器部署前端代码
// 下载nginx解压，在conf下有个非常重要的文件nginx.conf用来配置nginx服务器
// 找到配置server的地方
// gzip压缩，会在network中的content-encoding上看到
// 有的请求已经有了gzip，当我们点击这个gzip请求后
// 资源少于1k不会被压缩
// 压缩对于前端开发来说，将大大减少http请求的响应时间，进而影响页面的响应速度。
// cache缓存
// 如果我们不设置cache缓存，则可以看得response header中重新进入的页面会发送一个一模一样的请求。
// 设置expires，如果expires为-1s则response header为cache-Control:no-cache,当expires为正值，则cacha-Control:max-age
// 此时我们发现response header中多了两个属性，这是由nginx自动加的

// expires只对get请求设置缓存

// cache-control:no-cache

// expires只对get请求设置缓存