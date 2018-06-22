<template>
	<div class="Faith" v-bind:style="{backgroundImage:'url('+motto.Image+')'}">
		<div class="content">
			<!--left-->
			<div class="Left">
				<div class="left_log"></div>
				<h2>韶华白首 , 不过转瞬！</h2>
				<div class="motto">
					<h4>{{motto.cn}}</h4>
					<h5><em>{{motto.en}}</em></h5>
					<h3>——{{motto.author}}</h3>
				</div>
			</div>
			<!--left end-->
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		name: 'Faith',
	  	data () {
	    	return {
	      		Time:'3',
	      		motto:{
	      			cn:'',
	      			en:'',
	      			author:'',
	      			Image:''
	      		}
	    	}
	  	},
	  	mounted(){
	  	},
	  	created(){
	  		//获取诗词Callback
			this.poetry();
	  	},
	  	methods:{
			//获取诗词
			poetry:function(){
				axios.post('/api/user/poetry')
				.then(response=>{
					let leng=response.data.length;
					let num=Math.ceil(Math.random()*leng-1);
					/*console.log(response.data[num]);*/
					this.motto.cn=response.data[num].cn;
					this.motto.en=response.data[num].en;
					this.motto.author=response.data[num].author;
					this.motto.Image=response.data[num].image;

					new Promise((reslove, reject) => {
						let img = new Image();
						img.src = response.data[num].image;
						console.log(img.src);
						img.onload=()=>{
							reslove();
						}
					}).then(reslove=>{
						//路由跳转Callback
						this.Router();
					}).catch(reject=>{
					
					});

				})
				.catch(error=>{
					console.log(error);
					alert('破电脑砸了吧');
				})	  
			},
			//路由跳转
			Router:function(){
				this.timer=setInterval(()=>{
					this.Time--;
					if(this.Time===0){
						clearInterval(this.timer);
						this.$router.push({path:'/Index'})
						
					}
				},1000);
			}
		},
		destroyed(){
			clearInterval(this.timer);
       	},
	}
</script>

<style lang="scss" scoped>
.Faith{
	position: fixed;
	width: 100%;
	height:100%;
	background:no-repeat;
	background-size:cover;
	background-position: center;	
	.content{
		position: relative;
		width: 1200px;
		margin: 0 auto;
		top: 18%; 
		overflow: hidden;
		.Left{
			width: 50%;
			height: 100%;
			float: left;
			.left_log{
				width: 150px;
				height: 150px;
				background:url(../assets/LeftLog.png);
				background-size: cover;
			}
			.motto{
				color:purple;
				margin-top: 150px;
				h3{
					text-align: right;
					margin-right: 50px;
				}
				h4{
					text-align: left;
				}
				h5{
					margin-top: 20px;
					width: 75%;
					text-align: left;
				}
			}
			
		}
	}
}
</style>