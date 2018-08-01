//api/userApi.js ---- api示例
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 连接数据库
//202.182.111.4
const db = mysql.createPool({
    host:'202.182.111.4',
	user:'root',
	password:'hanchao',
	database:'vue_study',
	port:'3306'
});


let $sql = {
    // 注册
    user: {
        add: 'insert into user( username, password) values ( ?, ?)',
        select_name: 'SELECT * from user where username = ?',    
        select_password: 'SELECT * from user where password = ?' 
    },

    //获取诗词
    poetry:{
        get_poetry:'SELECT * FROM poetry'
    },
    
    //博客列表
    Article:{
    	get_Article:'SELECT * FROM Article',
    	Article_con: 'SELECT * from Article where id = ?',    
    }
}

// 注册
router.post('/addUser', (req, res) => {
	
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
                    res.send('0')   //查询不到密码 
                }else {
                    res.send(result);
                }
            })
        }
    })
});


//获取诗词
router.post('/poetry',(req,res) => {
	let get_poetry=$sql.poetry.get_poetry;
	db.query(get_poetry,(error,data)=>{
		if(error){
			console.log(error);
		}else{
			res.send(data).end();
		}
	})
})


//文章列表
router.post('/Article',(req,res) => {
	let get_Article=$sql.Article.get_Article;
	db.query(get_Article,(error,data)=>{
		if(error){
			console.log(error);
		}else{
			res.send(data).end();
		}
	})
})

//获取文章 对应内容
router.post('/Article_con',(req,res)=>{
	let Article_con = $sql.Article.Article_con;
	let params = parseInt(req.body);
	console.log(params);
	
	db.query(Article_con,params,function(err,result) {
        if(err) {
            console.log(err)
        }else{
        	res.send(result);
        }
        
    })
})




module.exports = router;