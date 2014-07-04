# Clouda-httpserver

> Clouda-httpserver is a plug-in for Clouda+ framework.


##Depends
clouda-log : 用来打日志;


##概念
###Extension
用来实现http的功能包装，如session, cookie, fileupload, form等，每个extension使用固定的一个接口型式，接收request与response，并返回一个处理包装对像。一般来说,extension的不包含业务功能只是扩展http行为能力的一种包装,所以使用方式相对简单没有复杂配置,所有配置接写在http.conf对像下即可,无独立配置.

###Filter
每个filter可作用于每个http访问的请求过程中，用来处理一些通用业务，如安全认证的过滤，日志打印，统计等任务，多个Filter采用链式调用，全部通过则执行最终的action，在执行过程中可以中断执行（如认证检查失失败等）。

###Action
每组Filter的未端使用一个Action，用来实现最终的业务功能。

##LifeCircle
###启动

1. httpserver在被require时,将自动向clouda.plugin进行注册.
2. httpserver在被require时,将进行clouda.config.watch("clouda-server"),用于发现自动配置的存在.
3. 如果找到配置,根据autoStart=true的配置进行自动调用httpserver.start(),否则放弃启动.并等待手动执行httpserver.start(conf)方法.
4. 当autoStart=false或未提供配置信息时,可利用httpserver.start(conf)启动server. (如果存在配置,这里将提供一个替换默认配置的机会,两次配置不会进行合并,而是完全进行覆盖).

###运行
1. server启动后,直接监听配置端口(默认为8080),并开始接收请求.
2. 在请求到达时,将根据配置依次通过fiterChain与actionChain两条执行链,每个请求根据配置的url会完整经过所有配置的filter链并到达action链,在actionChain的执行中,在任意配置的action被执行时,将停止继续执行下一个.如果所有都不配置,则执行defaultAction,默认返回404错误给客户端.
3. 在处理请求的过程中,如果根据配置,需要处理请求的action或filter尚未载入(这种情况多发生在启动过程中,或受业务影响需要延迟提供的action与filter情况下.),系统将停止继续处理本次请求,并返回400或500错误.如果下次同样请求到来时,缺失的action与filter存在,则会正常派发处理.


##Configure

###autoStart
Boolean , true时依据配置自行启动，false时，需要通过httpd.start启动.

###port
Number, default 8080, httpd的运行端口。

###loading_dir
[string,string...]， 每项内容为一个目录的名称，启动时将载入目录下所有.js文件。每个文件用来定义action,extension,filter等内容。

###mapping
[object,object....] 用于配置url与action的映射关系及filter的执行. 每个object为一个配置对像。结构如下：

	{
		// 目标url，可以为一个正则对像，或一个包含*号的字符串对像.
		url:"",
		
		// 所执行的action名称或handle，
		doAction:"actionName" || function(){},
		
		// 执行当前action的配置参数.
		params:{....},
		
		// ------- 以下为一些预制的action, 用于替代doAction简化配置
	
		// 返回一个http状态，等价于 doAction:"http_status",
		http_status:{code:number, msg:"xxxx", body:"xxxxxx"}
		
		// 返回静态资源， value可以为一个目录直接是一个文件名， 等价于doAction:"resource", 
		resource:"/index.html"
		
		// 返回重定向. 等价于doAction:"redirect"
		redirect: "url"
	}
	
###filter
[object,oject,....] filter链，每一项表示一个被执行的过滤器对像,过滤器对像的配置与mapping的doAction配置类似,以减少对配置的理解成本.

	{
		// url限制,仅在匹配的情况下执行过滤器,如果需要配置非(not)操作,请使用正则对像.
		url:"/*",
		
		// 将值行filter的名称;
		doFilter:"name",
		
		// 执行时的配置参数,便于对一些相同过滤器不同参数不同行为的情况
		params:{
			key1:value1,
			.....
		}
	}
###