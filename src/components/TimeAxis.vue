<template>
	<div class="TimeAxis">
		<div class="content">
			<Left></Left>
			<div class="Right">
				<div class="RightCon">
					<h4>伪全栈 学习之路<em> 2018 / 6 / 25</em></h4>
					<h1>vue-cli +Node.js + Express + MySQL 本地开发搭建</h1>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">vue-cli + Node.js 安装</h3>
						<div class="TechnicalAreaCon">
							<p>vue-cli安装使用 : npm install vue-cli -g;</p>
							<p>在随意文件夹下运行 vue init webpack blog (你的项目名称);</p>
							<p>npm install vue-resource --save-dev (当然安装 axios 也行  我这就用resource 示范了);</p>
							<img src="../assets/vuecli.png" alt="" />
							<p>运行项目 : npm run dev;</p>
							<p>Node.js安装  : 我前面文章有讲解  , 这里不做过多介绍了;</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">使用  Express 做服务器</h3>
						<div class="TechnicalAreaCon">
							<p>vue-cli安装使用 : npm install vue-cli -g;</p>
						</div>
					</div>
					
					
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Left from "./common/Left.vue";
	export default{
		name: 'TimeAxis',
	  	data () {
	    	return {
	      		
	    	}
		},
		mounted(){
       
		},
		created(){

		},
		methods:{
			
		},
		components:{
			Left
		}
	}
</script>

<style lang="scss" scoped>
	.TimeAxis{
		overflow: hidden;
		height: 100%;
		.content{
			height: 100%;
			overflow: hidden;
			.Right{
				width: 55%;
				margin-left: 27%;
				overflow: hidden;
				padding-bottom: 50px;
				.RightCon{
					h4{
						color: #c7c7c7;
						em{
							font-size: 12px;
						}
					}
					.TechnicalAreaTitle{
						color: #6f8fd2;
					}
					.TechnicalAreaCon{
						background: #f2f8ff;
						color: #666;
						font-size: 14px;
						padding:20px;
						-moz-user-select:text;
					  	-webkit-user-select: text;
					  	-ms-user-select: text;
					  	-khtml-user-select: text;
					  	user-select: text;
						p{
							margin: 0;
							margin-bottom: 5px;
						}
					}
				}
				
			}
		}
	}
</style>