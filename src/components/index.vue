<template>
	<div class="Index">
		<div class="content">
			<Left></Left>
		</div>
	</div>
</template>

<script>
	import Left from "./common/Left.vue";
	export default{
		name: 'Index',
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
			.Right{
				width: 74%;
				height: 2000px;
				float: right;
			}
		}
	}
</style>