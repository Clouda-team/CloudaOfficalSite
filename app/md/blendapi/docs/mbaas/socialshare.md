### Socialshare ###
	clouda.mbaas.socialshare

社会化分享

**方法：**

- callShare(options) 

#### callShare ####
	callShare(options)

**功能描述：**



**参数说明：**

- options：为object类型，其中包括以下参数：


参数 | 类型 | 描述
------------ | ------------- | ------------
mediaType | string | mediaType是分享平台表示串，根据不同的参数值调用不同的分享平台接口，如果为“all”，表明调用显示分享菜单，其他具体分享平台标识串见附录
title| string(可选) | 分享内容的标题，默认为“来自手机百度”
content | string | 分享内容摘要
linkUrl | string(可选) | 分享的链接地址，默认为当前页面的地址
imageUrl | string(可选) | 分享内容中网络图片的地址
appid | string或number(可选) | web版本分享菜单若想显示微信好友，朋友圈，QQ好友分享icon需要传递此参数，web版本暂不支持这些分享功能，会直接跳转百度框中打开，进行分享，appid为该轻应用的appid
onsuccess | function(msg){}  | 登录成功的回调函数
onfail | function(msg){}  | 登录失败的回调函数

##### 附录

- 参数取值列表

取值 | 含义
------------ | ------------
all | 显示分享菜单,不执行相关分享操作
batchshare | 一键分享，支持新浪微博、腾讯微博、人人网
weixin_friend | 微信好友
weixin_timeline | 微信朋友圈
qqdenglu | QQ空间
sinaweibo | 新浪微博
qqweibo | 腾讯微博
renren | 人人网
qqfriend | QQ好友
sms | 短信
email | 邮件
