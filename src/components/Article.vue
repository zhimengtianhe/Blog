<template>
	<div class="Article">
		<div class="content">
			<Left></Left>
			<div class="Right" v-html="con">
				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Left from "./common/Left.vue";
	export default{
		name: 'Article',
		components:{
    		Left
 		},
	  	data () {
	    	return {
				msg:[
		            
            	],
            	con:''
	    	}
		},
		mounted(){
      		
		},
		created(){
			let param =this.$route.query.id;
			this.msg.push(param);
			
			this.Apost();
		},
		methods:{
			Apost:function(){
				axios.post('/api/user/Article_con',this.msg)
				.then((response)=>{
                    console.log(response.data);
                    this.con=response.data[0].content;
                })
                .catch((error)=>{
                    console.log('error');
                    alert('服务器没有链接成功')
                })
			}
		}
		
	}
</script>

<style lang="scss">
	.Article{
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