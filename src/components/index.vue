<template>
	<div class="Index">
		<div class="content">
			<div class="Left">
				dad
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
				background: url(../assets/IndexLeft.jpg) top left no-repeat;
				background-size:cover;
				float: left;
				position: fixed;
			}
			.Right{
				width: 74%;
				height: 2000px;
				background: palevioletred;	
				float: right;
			}
		}
	}
</style>