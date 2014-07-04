##API Document

###全局属性和方法

> clouda在全局范围内创建了几个属性和方法用于改善调用复杂度,一般情况下,使用这些方法就能很好的使用clouda-core.

####ROOT_DIR
指向启动文件所在的目录. 一般认为这个目录应该是应用的根目录.

####USER_DIR
用户文件的目录. 默认为: ROOT_DIR/app/

####CONF_DIR
存放配置文件的目录,默认为: ROOT_DIR/conf/, 系统将自动监测这个目录并载入下面的js文件

####define(map)
clouda.define()的快捷方式

####watch(key1,key2,key3...keyN,callback);
clouda.watch()的快捷方式

#### ***use(key);***
同步返回key所表示的资源内容.如果不存在则返回undefined, 

***这个方法在被requireDir所载入的文件中被使用时. 将被框架监测其中key所指资源是否存在,做为一种依赖的声明. 只有在资源存在时才真正载入这个文件.从而使use方法返回正确的值. ***

*** !!! 需要注意的是,当文件中存在循环依赖时,可能导至一个或多个文件永远不能被载入,所以使用时应当小心这种情况 ***


###对像

####Watcher
一个可监测自身变改的名称空间对像. 提供define,watch,remove,unwatch.四个方法.

#####define(name,value)
用于定义或改变当前空间的下属资源.

#####remove(name)
用于删除一个已定义的资源

#####watch(name,handle,once)
用于监视一资源的变化,无论对应资源是否存在.

#####unwatch(name,handle)
删除对一个资源的一个监视方法.


### 属性
####clouda.resource
一个watcher对像, 用于存放在全局范围内运行时会改变的一类资源.

####clouda.config
一个watcher对像, 用于存放在全局范围内运行时不会改变或很少改变的一类配置资源

####clouda.plugin
一个watcher对像, 用于存放在在全局范内被公开访问的可执行的插件资源
	
###方法

####clouda.define(obj);
提供一个简单的方式来定义多个资源.方法接收一个map,其key为使用 "."分隔的资源名称的表示,前半部份应该为resource,config.plugin三者之一.

####clouda.watch(key1,key2,key3...keyN,callback);
提供一个简单的方式同时监测多个资源是否存在. 当所有资源都存在时,执行一个回调.并以相同的顺序将所需的资源传入callback中. 其key应为使用"."分隔的资源名称的表示,前半部份应该为resource,config.plugin三者之一.

####clouda.requireDir(path,limit,isAbsPath);
用于载入一个目录下的js文件.

path {string}: 目标路径.

limit {RegExp}: 用于限制载入文件的一个正则对像,只载入名称相配置的文件,而忽略其它的.

isAbsPath {Boolean}: 用于标识path所表示的是否为绝对路径.当值为isAbsPath不明确为true时,当path以 "/" 开头, 将会在自动在前面补充 ROOT_DIR + path 进行访问


####clouda.createWatcher();
取得一个watcher对像的工厂方法