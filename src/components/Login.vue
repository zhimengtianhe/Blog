<template>
  <div class="Login">
	  <div class="content">
		    <input type="text" placeholder="userName" name="username" v-model="userName"> <br>
		    <input type="text" placeholder="password" name="password" v-model="password"> <br>
		    <button @click="Login('/Faith')" class="Sign_in">登录</button><br />
	  		<a href="javascript:;" @click="addUser">注册</a>
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
    	if(this.userName===''){
    		return false
    	}
      var name = this.userName;
      var password = this.password;
      this.$http.post('/api/user/addUser', {
        username: name,
        password: password
      },{}).then((response) => {
        console.log(response);
      })
    },
    //aboutData 获取的数据
    Login(path){
    	var name = this.userName;
    	this.$http.post('/api/user/resume',{
    		username: name,
    	}).then((response)=>{
    		if(response.body.status==-1){
    			alert('用户为空');
    		}else{
    			
    			this.$router.push(path);
    		}
				//console.log(response);
				//console.log(response.body.status);
    	},(error)=>{
    		console.log(error);
    	})
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
		background: url(../assets/1.jpg) no-repeat;
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
