<template>
  <div id="app">
    <transition name="fade" mode="out-in">
  		<router-view ></router-view>
		</transition>
		<!--http://up.mcyt.net/md5/53/NTAyNzg1_Qq4329912.mp3-->
		<!-- <audio class="success"
        src="./src/assets/huimeng.mp3" autoplay loop>
		</audio> -->
  </div>
</template>

<script>
export default {
  name: 'app',
	data(){
		return {
			
		}
	}
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  list-style: none;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
