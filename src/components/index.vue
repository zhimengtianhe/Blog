<template>
	<div class="index">
		<h1>{{msg}}</h1>
		<p contenteditable="true">设置为 true 是可编辑的</p>
	</div>
</template>

<script>
	export default{
		name: 'Login',
	  	data () {
	    	return {
	      	msg: '首页',
	    	}
	  	},
	}
</script>

<style>
</style>