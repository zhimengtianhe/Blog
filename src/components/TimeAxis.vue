<template>
	<div class="TimeAxis">
		<div class="content">
			<Left></Left>
			<div class="Right">
				<div class="RightCon">
					<h4>React-Native 学习之路</h4>
					<h1>React-Native 开发环境搭建技巧</h1>
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装Node</h3>
						<div class="TechnicalAreaCon">
							<p>Node下载地址 : https://nodejs.org/en/ (个人安装的是 7.10.0版本);</p>
							<p>安装之后 打开cmd 输入 node -v 查看版本号 , 若显示 , 则安装成功;</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装Python 2</h3>
						<div class="TechnicalAreaCon">
							<p>Python 2下载地址 : https://www.python.org/ (不支持Python 3);</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装Android Studio</h3>
						<div class="TechnicalAreaCon">
							<p>Android Studio下载地址 : http://www.android-studio.org/ (安装最新版本即可);</p>
							<p>安装Android Studio 过程: 默认安装就行 ->Custom->Configure ->SDK Manager;</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装JDK</h3>
						<div class="TechnicalAreaCon">
							<p>JDK下载地址 : http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html(需要1.8版本)</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">Android SDK 详细问题</h3>
						<div class="TechnicalAreaCon">
							<p>1 . 在 Android SDK Location 选择一个自己创建 sdk 文件夹(这里可能会安装一些东西 直接安装就好)->apply->ok;</p>
							<p>2 . 在 SDK Platforms 窗口中 选择Show Package Details 然后在Android 6.0 (Marshmallow)中勾选Android SDK Platform 23;</p>
							<p>3 . 在SDK Tools窗口中，选择Show Package Details 然后在Android SDK Build Tools中勾选Android SDK Build-Tools 23.0.1;</p>
							<p>4 . 点击ok;</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">环境变量配置</h3>
						<div class="TechnicalAreaCon">
							<p>1 . 打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量 -> 新建;</p>
							<p>2 . 添加的第一个环境变量: 变量名->ANDROID_HOME;  变量值:你的 sdk 所在位置 (根目录);</p>
							<p>3 . 添加的第二个环境变量: 点击path 在原有的 一大串变量后面 加上 ;F:\sdk\tools  (这里的分号一定要有,路径就是你sdk文件夹下的 tools文件夹);</p>
							<p>4 . 添加的第三个环境变量: 点击path 在原有的 一大串变量后面 加上 ;F:\sdk\platform-tools  (这里的分号一定要有,路径就是你sdk文件夹下的 platform-tools文件夹);</p>
						</div>
					</div>
				
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">模拟器安装 (个人使用夜神模拟器)</h3>
						<div class="TechnicalAreaCon">
							<p>模拟器下载地址 : https://www.yeshen.com/;</p>
							<p>打开夜神模拟器后,在 cmd 输入 adb devices 如果没有设备信息, 则输入 : adb connect 127.0.0.1:6200;</p>
						</div>
					</div>
				
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">react-native 安装</h3>
						<div class="TechnicalAreaCon">
							<p>cmd输入  : npm install -g yarn react-native-cli;</p>
							<p>cmd输入  : react-native init AwesomeProject (初始化一个项目 记住 不要带中文 路径也不要有中文);</p>
							<p>cmd输入  : cd AwesomeProject (切换到项目目录)</p>
							<p>cmd输入  : react-native run-android (编译工程 也是就是开启项目 注意:这时候 要把你那个安卓模拟器打开 方便看效果);</p>
							<p>上边的编译过程 可能会 很慢 也可以 睡一觉</p>
							<p>注意: 夜神模拟器会在 编译之后 会红屏报错 , 这里需要在 Dev Settings->Debug server host 设置ip 格式 : ip:8081,如(192.168.1.1:8081);</p>
							<p>重新打开App 如果 安卓模拟器 上显示了 react-native 的欢迎页面说明咱们成功了</p>
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