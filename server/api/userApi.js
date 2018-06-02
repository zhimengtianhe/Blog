//api/userApi.js ---- api示例
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 连接数据库
//39.106.188.169
const db = mysql.createPool({
    host:'39.106.188.169',
	user:'root',
	password:'hanchao',
	database:'vue_study',
	port:'3306'
});

// 注册
router.post('/addUser', (req, res) => {
	let $sql = {
   		user: {
	        add: 'insert into user( username, password) values ( ?, ?)',
	        select_name: 'SELECT * from user where username = ?',    
	        select_password: 'SELECT * from user where password = ?' 
    	}
	}
    let sql_name = $sql.user.select_name
    let sql = $sql.user.add;
    let params = req.body;
    console.log(params);
    db.query(sql_name,params.username,function(err,result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            db.query(sql,[params.username,params.password], function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result) {
                   	res.send(result);
                }
            })
        }else {
            res.send('-1');
        }
    })
    
});



//登录
router.post('/selectUser', (req,res) => {
	let $sql = {
   		user: {
	        add: 'insert into user( username, password) values ( ?, ?)',
	        select_name: 'SELECT * from user where username = ?',    
	        select_password: 'SELECT * from user where password = ?'     
    	}
	}
	
    let sql_name = $sql.user.select_name;
    let sql_password = $sql.user.select_password;
    let params = req.body;
    db.query(sql_name,params.username,function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            res.send('-1')    //查询不出username，data返回-1
        }else {
            db.query(sql_password,params.password, function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result[0]===undefined) {
                    res.send('0')    
                }else {
                    res.send(result);
                }
            })
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