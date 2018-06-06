<template>
	<div class="Article">
		<div class="content">
			<Left></Left>
			<div class="Right">
				<h1>文章页</h1>
			</div>
		</div>
	</div>
</template>

<script>
	import Left from "./common/Left.vue";
	export default{
		name: 'Article',
		components:{
    		Left
 		},
	  	data () {
	    	return {
				
	    	}
		},
		mounted(){
      		
		},
		created(){
			var param =this.$route.query.id;
			console.log(param);
		},
		methods:{
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.Article{
		overflow: hidden;
		height: 100%;
		.content{
			height: 100%;
			overflow: hidden;
			.Right{
				width: 74%;
				height: 2000px;
				float: right;
			}
		}
	}
</style>