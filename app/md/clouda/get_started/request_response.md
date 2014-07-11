# Request流程



请求到达时，将根据配置依次通过`fiterChain`与`actionChain`两条执行链，每个请求根据配置（路由）的URL完整的经过`fiterChain`中配置的所有`filter`并到达`actionChain`，在`actionChain`的执行中，在任意配置的action被执行时，将停止继续执行下一个。如果所有都不配置，则执行**`defaultAction`**，默认返回`404`错误给客户端。

![](/md/images/request_flow.png)




