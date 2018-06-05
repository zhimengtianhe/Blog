<template>
	<div class="Left">
		<div class="Nav">
			<div class="NavText">
				<router-link  v-for="(nav,index) in navList" :key="index" :to="nav.path">{{nav.text}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Left',
	  	data () {
	    	return {
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
	.Left{
		max-width: 465px;
    	width: 26%;
		height: 100%;
		background: url(../../assets/IndexLeft.jpg) top  no-repeat;
		background-size:cover;
		float: left;
		position: fixed;
		color: #fff;
		font-family: Georgia,"Times New Roman",Times,Kai,"Kaiti SC",KaiTi,BiauKai,FontAwesome,serif;
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
</style>