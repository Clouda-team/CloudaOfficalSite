##资源离线存储的实现##

应用场景：离线存储是用来解决hybrid app资源离线加载问题,可以让应用访问已经存在的离线资源文件。大大优化应用访问速度和交互体验。已经移动网络不稳定导致的访问卡顿问题。

**1.初始加载拦截器、fs、database模块**

	Blend.lightInit({
		key:"xxx",
		module:["fs","database","in"]
	});

**2.页面中启动应用拦截器**

	Blend.device.interceptor.set({
		status:0,	//0表示关闭，1表示打开
		onsuccess:function(data){
			console.log(data);
		}
		onfail:function(err){
			console.log(err);			
		}
	});

**3.资源离线规则**

示例中只离线首页和首页中的图片资源（离线规则可以根据实际应用场景由开发者来设置）
把首页和首页中图片组件离线下载存储到本地

	var offline_list = []; //存储即将离线组件的uri
	var imgs_node; //图片组件节点
	
	offline_list.push(location.href); //添加当前页url到离线列表中
	
	var resource = document.querySelectorAll("img");
	
	for(var i in imgs_node){
		offline_list.push(imgs_node[i].getAttribute("src"));
	}

**4.按照规则离线资源文件**

	offline_list.forEach(function(data){
		Blend.device.fs.download({
			url:url,
			value:path,
			onsuccess:function(data){
				Blend.device.database.set({
					key:data.paras.url,
					value:data.paras.value,
					filedata:1,
					onsucesss:function(data){
						alert("离线完成");
					},
					onfail:function(err){
						alert("离线失败");
					}
				});
			},
			onfail:function(err){
				alert(err.errMsg);
			}
		});
	});

提示：开启拦截器的应用，下载的文件只有按照规则存储到database中,并且filedata设置为1的数据，应用再次加载资源的时候才能拦截url，并从本地读取。否则只能从远程读取。

[参考源码](http://github.com)