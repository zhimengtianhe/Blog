<template>
	<div class="Index">
		<div class="content">
			<div class="Left">
				<div class="Nav">
					<div class="NavText">
						<router-link v-for="(nav,index) in navList" :key="index" :to="nav.path">{{nav.text}}</router-link>
					</div>
				</div>
			</div>
			<div class="Right">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Index',
	  	data () {
	    	return {
	      		msg: '首页',
				navList: [
					{
						path: 'Personal',
						text: '自我介绍'
					},
					{
						path: 'TimeAxis',
						text: '时光轴'
					},
					{
						path: 'Index',
						text: '博客'
					},
				]
	    	}
		},
		mounted(){
       
		},
		created(){

		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.Index{
		overflow: hidden;
		height: 100%;
		.content{
			height: 100%;
			overflow: hidden;
			.Left{
				max-width: 465px;
    			width: 26%;
				height: 100%;
				background: url(../assets/IndexLeft.jpg) top  no-repeat;
				background-size:cover;
				float: left;
				position: fixed;
				color: #fff;
				.NavText{
					float: right;
					a{
						width: 39px;
						float: left;
						display: block;
						font-size: 20px;
						font-weight: 800;
						color: #fff;
					}
					a:hover{
						color: purple;
					}
				}
				
			}
			.Right{
				width: 74%;
				height: 2000px;
				float: right;
			}
		}
	}
</style>