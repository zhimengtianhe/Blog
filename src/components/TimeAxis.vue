<template>
	<div class="TimeAxis">
		<div class="content">
			<Left></Left>
			<div class="Right">
				<div class="RightCon">
					<h4>伪全栈 学习之路<em> 2018 / 6 / 21</em></h4>
					<h1>CentOS7 + Node + Express + Nginx + MySQL搭建</h1>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">阿里云购买服务器 (爱去哪买去哪买)</h3>
						<div class="TechnicalAreaCon">
							<p>购买服务器 选择 操作系统  CentOS7</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装 Xshell 5</h3>
						<div class="TechnicalAreaCon">
							<p>Xshell 5下载地址 : http://www.downza.cn/soft/235505.html (能用就行去哪下载无所谓);</p>
							<p>安装 Xshell 5 会让你操作 服务器的过程 更加开心;</p>
							<p>打开 Xshell 5 点击新建  协议一栏 选择 SSH 在 主机 那一栏 添上个人 主机地址  点击确定;</p>
							<p>点击连接 输入你的 用户名 (一般是  root) 点击确定 输入密码  在点击确定 连接成功;</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">Node 安装方法</h3>
						<div class="TechnicalAreaCon">
							<p>cd /usr/local/src/ (一般软件都放在这);</p>
							<p>wget https://nodejs.org/dist/v7.10.0/node-v7.10.0.tar.gz (个人安装的7.10.0版本);</p>
							<p>解压 : tar zxvf node-v7.10.0.tar.gz;</p>
							<p>提示系统中没有安装C编译器，接下来先安装C编译器: yum install gcc , yum install gcc-c++ , yum install gcc-gfortran;</p>
							<p>cd node-v7.10.0;</p>
							<p>./configure (执行 Node.js 安装包自带的脚本，修改相关的系统配置文件);</p>
							<p>make (编译 C源代码为 可执行的 Linux程序--->可能会贼慢不要急 睡一觉);</p>
							<p>上面跑完之后 sudo make install (安装文件);</p>
							<p>node –version (查看安装node的版本) npm -v (查看npm的版本);</p>
							<p>如果上面 执行成功 则下面 简单的 玩一下 Express;</p>
						</div>
					</div>
			
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装 Express 玩一玩</h3>
						<div class="TechnicalAreaCon">
							<p>npm安装Express middleware 和 forever(一个用来确保应用程序启动并且在需要时重启的非常有用的模块);</p>
							<p>npm install -gd express-generator forever;</p>
							<p>
								在/home 下分别执行(在哪都行) : </br>
								&nbsp;&nbsp;&nbsp;&nbsp;express testapp , cd testapp , npm install;
							</p>
							<p>接着使用 forever 使用们的程序一直运行 : forever start ./bin/www;</p>
							<p>
								forever list (查看forever运行的程序);</br>
								forever stop 0 (0代表前面[0],这是当前进程的ID);</br>
								forever stopall (停止所有);
							</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装Nginx (这是重点 拿小本本记下来)</h3>
						<div class="TechnicalAreaCon">
							<p>添加Nginx仓库 : yum install epel-release;</p>
							<p>下载Nginx : yum install nginx;</p>
							<p>启用Nginx服务 : service nginx start;</p>
							<p>添加开机启动 : systemctl enable nginx;</p>
							<p>修改Nginx配置文件 : vim /etc/nginx/nginx.conf;</p>
							<p>配置 : </p>
							<pre>upstream nodeweb-server{<br />&nbsp;&nbsp;server localhost:8081;<br />}<br />server {<br />&nbsp;&nbsp;listen       80 default_server;<br />&nbsp;&nbsp;listen       [::]:80 default_server;<br />&nbsp;&nbsp;server_name  你的域名或服务器ip;<br />&nbsp;&nbsp;root         /www;<br />&nbsp;&nbsp;# Load configuration files for the default server block.<br />&nbsp;&nbsp;include /etc/nginx/default.d/*.conf;<br /><br />&nbsp;&nbsp;location / {<br />&nbsp;&nbsp;&nbsp;&nbsp;root     /;<br />&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass http://nodeweb-server;<br />&nbsp;&nbsp;&nbsp;&nbsp;proxy_redirect off;<br />&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header Host $http_host;<br />&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header X-Real-IP $remote_addr;<br />&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<br />&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header X-NginX-Proxy true;<br />&nbsp;&nbsp;}<br />}<br /></pre>                                                 
							<p>测试配置文件是否能够正确运行 : nginx -t;</p>
							<p>重启nginx : service nginx restart;</p>
							<p>在浏览器中 输入 你的 服务器 ip Express 页面 即 大功告成;</p>
						</div>
					</div>
					
					<div class="TechnicalArea">
						<h3 class="TechnicalAreaTitle">安装 MySQL(阿里云服务器 一定要 在安全组 设置一下 3306 端口)</h3>
						<div class="TechnicalAreaCon">
							<p>查看可用版本 : yum list | grep mysql;</p>
							<p>在centOS 7 安装 MySQL : rpm -Uvh http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm;</p>
							<p>查看当前可用资源 : yum repolist enabled | grep "mysql.-community.";</p>
							<p>安装 : yum -y install mysql-community-server;</p>
							<p>MySQL基础配置 : <br />systemctl enable mysqld(添加到开机启动);<br />  systemctl start mysqld(启用进程); <br />mysql_secure_installation(配置密码之类的);</p>
							<p><img src="../assets/MySQL.png"/></p>
							<p>配置远程连接 : grant all privileges on *.* to 'root'@'%' identified by '密码';</p>
							<p>刷新数据库 : flush privileges;</p>
							<p>检测是否开启3306端口 : netstat -tunlp</p>
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
						em{
							font-size: 12px;
						}
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