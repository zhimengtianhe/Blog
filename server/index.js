//index.js----Express服务器入口文件
// node 后端服务器
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const resolve = file =>path.resolve(__dirname, file)
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/user', userApi);
app.use('/dist', express.static(resolve('../dist')))  
// 监听端口
app.get('*', function (req, res) {
  const html = fs.readFileSync(resolve('../dist/index.html'),'utf-8')
  res.send(html)
})

app.listen(8081,()=>{
	console.log('vue+express -- 不疯魔不成活')
});

