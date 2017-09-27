//引入http模块
var http = require("http")
//创建一个http服务
http.createServer(function (req, res) {
  console.log(req.url)
  //设置响应头
  res.writeHead(200, {'Content-Type': 'text/plain'})
  //设置body内容
  res.end('Hello World')
  //设置监听端口
}).listen(8080)
console.log('Server running at http://localhost:8080/')