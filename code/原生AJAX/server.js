// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规划
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => { // 客户端浏览器在向服务端发送请求时，如果url的路径，请求行的第二段内容路径是 /server 的话，就会执行回调函数内的代码，并由response做出相应
  // 设置相应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*'); // 响应头的名字和值*

  // 设置响应体
  response.send('HELLO AJAX');
})

// 4. 监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动，8000端口监听中...');
})