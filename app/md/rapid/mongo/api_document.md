# rapid-simple-mongo

## 概述

用于rapid框架的mongodb插件，由于在公共集群中的持久链接会造成集群资源的额外开销，多数公共数据库都有连接数及空闲时间限制，所以在直接使用mongodb driver并复用db对像时driver的自动重连逻辑稳定性较差(特别是在需要认证的情况下)，基于以上情况，这里提供一个简易包装处理，以短链方式操作db，用于完成一般性的数据操作任务，目前只提供常用的find,findOne,insert,remove,update,save,count等几个方法

## API

<h3 class="api">simpleMongo.getAgent</h3>

	simpleMongo.getAgent(dburl,opts);

创建一个由dburl指定的db的连接对像. 返回ClientAgent

参数说明：

* dburl 

String，mongodb的connect string。具体请参照[MongoDB Connection URI](http://docs.mongodb.org/manual/reference/connection-string/)

* opts

object，配置信息, 基于MongoClient.connect(dbur,opts)的opts对像。具有connect的opts的全部属性,并增加用于限制空闲时间的`idle`属性(单位为毫秒,默认为30秒)。

<h3 class="api">simpleMongo.connect</h3>

	simpleMongo.connect(dburl,cb);

将直接调用原始的mongoClient.connect(dburl,cb);


<h3 class="api">simpleMongo.getMongodb</h3>

	simpleMongo.getMongodb();

直接返回require("mongodb")的原始对像。


<h3 class="api">ClientAgent.find</h3>

	ClientAgent.findOne(collectionName,selector,[opts],callback);

返回结果集中的第一条数据

<h3 class="api">ClientAgent.update</h3>

	ClientAgent.update(collectionName,selector,[opts],opts,callback);

更新符合条件的记录

<h3 class="api">ClientAgent.remove</h3>

	ClientAgent.remove(collectionName,selector,[opts],callback);

移除符合条件的记录


<h3 class="api">ClientAgent.save</h3>

	ClientAgent.save(collectionName,doc,[opts],callback);

如果doc不存在则插入，存在时更新


<h3 class="api">ClientAgent.count</h3>

	ClientAgent.count(collectionName,doc,[opts],callback);

返回集合中doc的数量





