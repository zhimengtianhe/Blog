<template>
	  <div class="Login">
			  <div class="content">
					    <input type="text" placeholder="userName" name="username" v-model="userName"> <br>
					    <input type="text" placeholder="password" name="password" v-model="password" @keydown="submit($event)"> <br>
					    <button @click="Login('/Faith')" class="Sign_in">登录</button><br />
				  		<a href="javascript:;" @click="addUser" >注册</a>
			  </div>
	  </div>
</template>

<script>
export default {
	    name: 'Login',
	    data () {
		    return {
		      	msg: '不疯魔不成活',
		      	userName: '',
		      	password: '',
		      	aboutData:[]
		    }
	    },
	    created(){
	  	
	    },
		  
	    methods: {
	  		//注册
		    addUser() {
		    		if(this.userName==='' || this.password===''){
		    				alert('账号或密码不能为空');
		    				return false
		    		}
		    		
		      	let data = {'username':this.userName,'password':this.password};
		      	
		      	this.$http.post('/api/user/addUser',data).then((res)=>{
				        if(res.data == -1) {
				        	
				          	alert('该用户已注册');
				          	
				        }else if(res.status == 200){
				        	
				          	alert('用户注册成功');
				          	
				        }else{
				        	
				        	  alert('网络连接错误');
				        	  
				        }
		      	})
		    },
		    
		    //登录
		    Login(path){
			    	if(this.userName==='' || this.password===''){
			    			alert('账号或密码不能为空');
			    			return false
			    	}
			    	let data = {'username':this.userName,'password':this.password};
			    	this.$http.post('/api/user/selectUser',data).then((res)=>{
				        if(res.data == -1) {
				        	
				          	alert('用户为空');
				          	
				        }else if(res.data == 0){
				        	
				          	alert('密码错误');
				          	
				        }else{
				        	
				        	  alert('登录成功');
				        	  this.$router.push(path);
				        }
		      	})
			},
			submit(e){
				if(e.keyCode === 13){
					this.Login('/Faith');
				}
  			}
    	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.Login{
				position: fixed;
				width: 100%;
				height:100%;
				background: url(../assets/Login_bg.jpg) no-repeat;
				background-size: cover;
				background-position: center;
				margin:  0 auto;
				overflow: hidden;
		}
		.content{
				position: relative;
				top: 35%;
		}
		.content input{
				width:400px;
				height: 30px;
				margin-bottom: 20px;
				border-radius: 5px;
				outline: none; 
				background: rgba(000,000,000,0.7);
				color: white;
		}
		.content button {
				cursor: pointer;
				margin-top: 20px;
				outline: none;
				border: 0px;
		}
		.content a{
				color: white;
				display: inline-block;
				margin-top: 10px;
				cursor: pointer;
				font-size: 14px;
		}
		.Sign_in{
				background: rgba(247,182,103,.5);
				width: 400px;
				height: 30px;
				border-radius: 5px;
				font-size: 16px;
		}
		.Sign_in:hover{
				transition: .7s ease;	
				transition-property: all;
				background: rgba(247,182,103,.8);
		}
</style>
