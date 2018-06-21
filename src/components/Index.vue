<template>
	<div class="Index">
		<div class="content">
			<Left></Left>
			<div class="Right">
				<ul>
					<li v-for="(Art,index) in Articles[0]">
						<h2><router-link :to="{ path:'Article', query:{id: Art.id}}">{{Art.title}}</router-link></h2>
						<p>{{Art.text}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Left from "./common/Left.vue";
	export default{
		name: 'Index',
		components:{
    		Left
 		},
	  	data () {
	    	return {
				Articles: [
				
				],
	    	}
		},
		mounted(){
       
		},
		created(){
			this.Article();
		},
		methods:{
			Article:function(){
				axios.post('/api/user/Article')
				.then(response=>{
					this.Articles.push(response.data);
					console.log(response.data);
				})
				.catch(error=>{
					console.log(error);
					alert('破电脑砸了吧');
				})	  
			},
		},
		destroyed(){

       	},
	}
</script>

<style lang="scss" scoped>
	.Index{
		overflow: hidden;
		height: 100%;
		.content{
			height: 100%;
			overflow: hidden;
			.Right{
				width: 70%;
				height: 2000px;
				margin-left: 27%;
				ul{
					li{
						list-style: none;
						margin: 50px 0px 50px 80px;
						h2{
							font-weight:normal;
							a{
								color: #000;
								text-decoration: none;
							}
						}
						p{
						    font-size: 14px;
						    color: #999;
						    margin: -10px 0 0 20px;
						    width: 70%;
						}
					}
				}
			}
		}
	}
</style>
