# Blog

create table user(  
	id int not null primary key auto_increment,  
	username varchar(100) not null,  
	password varchar(100) not null   
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CentOS7 + MySQL
正确的安装方法

rpm -Uvh http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
yum repolist enabled | grep "mysql.-community."  
yum -y install mysql-community-server


MySQL基础配置
systemctl enable mysqld //添加到开机启动
systemctl start mysqld //启用进程
mysql_secure_installation
systemctl status mysqld



配置远程连接
grant all privileges on *.* to 'root'@'%' identified by 'hanchao';



grant select,update,insert,delete on *.* to root@39.106.188.169 identified by "hanchao";

grant all privileges on *.* to 'itbc'@'%'identified by 'hanchao' with grant option;

flush privileges; //刷新数据库

检测是否开启3306端口

netstat -tunlp

##新建数据库

CREATE DATABASE 数据库名;

find / -name my.cnf

##新建表
CREATE TABLE table_name (column_name column_type);
例子:
create table user(  
	id int not null primary key auto_increment,  
	username varchar(100) not null,  
	password varchar(100) not null   
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

##新建表过程

use +数据库名称(vue_study);->创建

##查看表
show tables;

desc +表名(user)

##查看用户
select Host,User,Password from mysql.user;

查询防火墙状态:

service iptables status
停止防火墙:

service iptables stop
启动防火墙:

service iptables start
重启防火墙:

service iptables restart
永久关闭防火墙:

chkconfig iptables off
永久关闭后启用:

chkconfig iptables on
编辑防火墙规则

vi /etc/sysconfig/iptables

##阿里云
811976

##nginx 启动
启动
systemctl start nginx
停止
systemctl stop nginx
重启
systemctl restart nginx
修改
cd ect/nginx
vim nginx.conf


http://www.jb51.net/article/107075.htm




nginx 备份
#user root;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
	server {
        listen      80;
        server_name  你的ip;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root /www;
            index index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        
		# proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


	upstream nodeweb-server {
         server localhost:8081;
     }
     server {
        listen      8080;
        server_name 你的ip;

        location / {
            root   /;
            proxy_pass http://nodeweb-server;
            proxy_redirect off;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-NginX-Proxy true;
        }
     }

	
	
    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

	# HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}














CREATE TABLE `Article_con` (
  `Article_id` int(100) NOT NULL AUTO_INCREMENT,
  `Article_title` varchar(200) DEFAULT NULL,
  `content` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`Article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=419 DEFAULT CHARSET=utf8;


INSERT INTO `Article_con` VALUES ('1', '安装', 'npm install');
