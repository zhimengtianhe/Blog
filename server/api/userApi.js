//api/userApi.js ---- api示例
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 连接数据库
const db = mysql.createPool({
    host:'localhost',
	user:'root',
	password:'hanchao',
	database:'test',
	port:'3306'
});

// 添加用户
router.post('/addUser', (req, res) => {
    const sql='insert into user(id, name, password) values (0, ?, ?)';
    let params = req.body;
    console.log(params);
    db.query(sql, [params.username, params.password], function(error, data) {
        if (error) {
            console.log(error)
        }else{
        	console.log(data);
        }
        
    })
});

//获取用户
router.post('/resume', (req, res) => {
	//`SELECT name FROM user`
	//let name = req.body.username;
	let name = req.body.username;
	let mObj = {};
    for (let obj in req.body.username) {
        mObj = JSON.parse(obj);
        console.log(mObj);
    }
	const selectUser = `SELECT * FROM user where name='${name}'`;
    db.query(selectUser,(error, data)=> {
        "use strict";
        if(error){
            console.log(error);
        }else{
        	if(data.length==0){
        		res.send({ 'msg': '该用户不存在', 'status': -1 }).end();
        	}else{
        		res.send(data).end();
        	} 
        }
        
    })
});

//获取诗词
router.post('/poetry',(req,res) => {
	let sql='SELECT * FROM poetry';
	db.query(sql,(error,data)=>{
		if(error){
			console.log(error);
		}else{
			res.send(data).end();
		}
	})
})


module.exports = router;