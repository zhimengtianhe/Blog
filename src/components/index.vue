<template>
	<div class="Index">
		<div class="content">
			<Left></Left>
			<div class="Right">
				<ul>
					<li @click="GoArticle()" 
						v-for="(Art,index) in Articles">
						<h2>{{Art.title}}</h2>
						<p>{{Art.text}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	//to="Article/111"
	import Left from "./common/Left.vue";
	export default{
		name: 'Index',
		components:{
    		Left
 		},
	  	data () {
	    	return {
				Articles: [
					{
						title: 'React-Native Window 搭建开发环境',
						text:'以下是环境配置问题,安装 node.js,安装Android Studio 最新版本（其实就是为了后来按 Android SDK）;以下是环境配置问题,安装 node.js,安装Android Studio 最新版本（其实就是为了后来按 Android SDK）...'
					},
					{
						title: '使用vue-cli+node+express+mysql搭建一个 个人博客',
						text:'以下是环境配置问题,安装 node.js,安装Android Studio 最新版本（其实就是为了后来按 Android SDK）;以下是环境配置问题,安装 node.js,安装Android Studio 最新版本  ...'
					},
					{
						title: '如何将个人博客发布到个人服务器    CentOS7',
						text:'以下是环境配置问题,安装 node.js,安装Android Studio 最新版本（其实就是为了后来按 Android SDK）;以下是环境配置问题,安装 node.js,安装Android Studio 最新版本（其实就是为了后来按 Android SDK）...'
					},
				],
				param:'111'
	    	}
		},
		mounted(){
       
		},
		created(){
			
		},
		methods:{
			GoArticle:function(){
				this.$router.push({path:'/Article',query:{id:1}});
			}
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
						cursor: pointer;
						margin: 50px 0px 50px 80px;
						h2{
							font-weight:normal;
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