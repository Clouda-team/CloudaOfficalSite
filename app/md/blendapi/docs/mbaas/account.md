### Account ###
    clouda.mbaas.account

帐号登录

**方法：**

- login(options)
- closeLoginDialog()

#### login ####
    login(options)

**功能描述：**

调起帐号登录的浮层，成功返回登录用户信息

**参数说明：**

- options：为 object 类型，其中包括以下参数：


参数 | 类型 | 描述
------------ | ------------- | ------------
redirect_uri | string | redirect_uri是第三方轻应用提供的授权后回跳地址，其值必须在开发者中心的安全设置中注册。[了解注册相关流程](http://developer.baidu.com/wiki/index.php?title=docs/oauth/redirect)
scope | string(可选), 默认"basic"  | 权限以空格分隔，例子：获取个人云权限"basic netdisk" [更多权限](http://developer.baidu.com/wiki/index.php?title=docs/oauth#.E6.8E.88.E6.9D.83.E6.9D.83.E9.99.90.E5.88.97.E8.A1.A8)
login_mode | number(可选), 默认为0   | login_mode表示登录策略，为0时，表示使用默认策略，即用户如果已登录，则直接使用该用户身份完成登录、授权操作；为1表示需要用户确认下是否用当前登录用户身份来授权，并提供切换账号的入口；为2表示无论如何都要用户重新用百度账号登录一遍。
login_type | string(可选)  | login_type表示OAuth授权页面是否展示为手机号快捷登陆页，login_type=sms展示手机号快捷登陆,login_type=mobile展示移动快捷登录。默认不传展示为正常页面。
mobile | string(可选) | 在login_type 选择sms时，可以设置该参数，用于登录时预填手机号码。
state | string(可选) | 用于保持请求和回调的状态，授权服务器在回调时（重定向用户浏览器到“redirect_uri”时），会在Query Parameter中原样回传该参数。OAuth2.0标准协议建议，利用state参数来防止CSRF攻击
disable_third_login | number(可选),默认为1 | 当 disable_third_login = 1 时, 隐藏通过新浪,QQ等三方登录帐号区域. 当 disable_third_login = 0 时, 显示三方帐号登录区域.
onsuccess | function(){}  | 登录成功的回调函数. onsuccess函数体中,需要开发者手动调用一次`clouda.mbaas.account.closeLoginDialog()`方法.
onfail | function(){}  | 登录失败的回调函数. onfail函数体中,需要开发者手动调用一次`clouda.mbaas.account.closeLoginDialog()`方法

#### closeLoginDialog ####
    closeLoginDialog()

**功能描述：**

关闭帐号登录的浮层


**注意点说明：**

1.	redirect_uri是登录成功后的回跳地址，不建议在redirec_rui的页面中处理太多逻辑，如果有，在百度App的轻应用环境下要实现回跳页和其他页面的数据通信，请使用localStorage或者cookie来实现。
2.	为了兼容web版的登陆功能，应该在window上注册全局的成功和失败的回调函数，window.onsuccess=function(data){clouda.mbaas.account.closeLoginDialog();};并且在回调函数中人为地关闭登录浮层，并且在redirect_uri指定的页面中调用父层的全局回调函数。


