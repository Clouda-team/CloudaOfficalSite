# 云服务API 

云服务类API目前支持以下功能： 

- 帐号 (Account)
- 轻支付（Pay）
- 社会化分享（Socialshare）
- 推送(Push)


## Account

    Blend.mbaas.account

帐号登录

**方法：**

- login(options)
- closeLoginDialog()

<h3 class="account">login</h3>

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
onsuccess | function(){}  | 登录成功的回调函数. onsuccess函数体中,需要开发者手动调用一次`Blend.mbaas.account.closeLoginDialog()`方法.
onfail | function(){}  | 登录失败的回调函数. onfail函数体中,需要开发者手动调用一次`Blend.mbaas.account.closeLoginDialog()`方法

<h3 class="account">closeLoginDialog </h3>

    closeLoginDialog()

**功能描述：**

关闭帐号登录的浮层

**注意点说明：**

1.  redirect_uri是登录成功后的回跳地址，不建议在redirec_rui的页面中处理太多逻辑，如果有，在百度App的轻应用环境下要实现回跳页和其他页面的数据通信，请使用localStorage或者cookie来实现。
2.  为了兼容web版的登陆功能，应该在window上注册全局的成功和失败的回调函数，window.onsuccess=function(data){Blend.mbaas.account.closeLoginDialog();};并且在回调函数中人为地关闭登录浮层，并且在redirect_uri指定的页面中调用父层的全局回调函数。



## 轻支付

    Blend.mbaas.pay
    
PAY接口提供支付功能。

**方法：**

- init(parter_id,options)
- doPay(options)

<h3 class="轻支付"> init </h3>

    init(parter_id,options)

**功能描述：**

传入parter_id ，初始化支付接口

**参数说明：**

- parter_id：为 string 类型，初始化合作方id
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="轻支付"> doPay </h3>

    doPay(options)

**功能描述：**

传入支付配置，调起支付

**参数说明：**

- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回一个对象。
onfail | function(err){} | 操作失败，返回错误码信息
hide_loading | bool | 表示是否要隐藏加载支付插件的页面
orderInfo | string | 其中参数以“key=value”形式呈现，参数之间以“&”分割，所有参数不可缺。示例如下：（具体参数说明请见参数列表）

orderInfo为订单信息, 例如:

    currency=1&extra=&goods_category=1&goods_channel=baidu&goods_channel_sp=0001&goods_desc=商品描述&goods_name=商品名称&goods_url=http://item.jd.com/736610.html&input_charset=1&order_create_time=20130508131702&order_no=1372323335119&pay_type=2&return_url=http://item.jd.com/736610.html&service_code=1&sign_method=1&sp_no=1210010002&total_amount=1&transport_amount=0&unit_amount=1&unit_count=1&sign=8bed1f925ccf534e9b6ee2d385c0c892

#### 参数列表
参数名 | 参数含义 | 格式说明 | 是否必须
---------- | ------------- | ------------ | ------------
service_code | 服务编号 | 整数，目前必须为1 | 是
sp_no | 百度钱包商户号 | 10位数字组成的字符串 | 是
order_create_time | 创建订单的时间 | YYYYMMDDHHMMSS | 是
order_no | 订单号，商户须保证订单号在商户系统内部唯一。 | 不超过20个字符 | 是
goods_category | 商品分类号。 | 取值由钱包系统分配 | 否
goods_channel_sp | 数字商品开发商 | 10位数字组成的字符串 | 否
goods_channel | 数字商品渠道 | 商户与渠道商提前约定好，字符串，字母和数字的组合，不能包含其他特殊字符,不超过20为字符串 | 否
goods_name | 商品的名称 | 允许包含中文；不超过128个字符或64个汉字 | 是
goods_desc | 商品的描述信息 | 允许包含中文；不超过255个字符或127个汉字 | 是
goods_url | 商品在商户网站上的URL。 | URL | 否
unit_amount | 商品单价，以分为单位 | 非负整数 | 否
unit_count | 商品数量 | 非负整数 | 否
transport_amount | 运费 | 非负整数 | 否
total_amount | 总金额，以分为单位 | 非负整数 | 是
currency | 币种，默认人民币 | 取值范围参见附录 | 是
buyer_sp_username | 买家在商户网站的用户名 | 允许包含中文；不超过64字符或32个汉字 | 否
return_url | 百度钱包主动通知商户支付结果的URL | 仅支持http(s)的URL。 | 是
pay_type | 支付方式 | 默认取值2 | 是
expire_time | 交易的超时时间 | YYYYMMDDHHMMSS，不得早于交易创建的时间。 | 否
input_charset | 请求参数的字符编码 | 取值范围参见附录 | 是
version | 接口的版本号 | 必须为2 | 是
sign | 签名结果 | 取决于签名方法 | 是
sign_method | 签名方法 | 取值范围参见附录 | 是
extra  | 商户自定义数据 | 不超过255个字符 | 否

#### 返回值
支付结束后返回一个对象(onsuccess的data信息)，格式如下
    
    `statecode:{状态码};order_no:{商户传入的订单号};notify:{订单签名}`
        
Statecode为状态码，表示支付结果，如下表

stateCode | 描述 
---------- | ------------- 
0 | 成功
1 | 支付中
2 | 取消
3 | 不支持此种支付方式（收银台前置的情况下才会出现）
4 | token失效（外部带登陆状态才会出现）
5 | 登陆失败

order_no为商户传入的订单号

notify为订单签名，需要通过notify以判断并确定支付结果。例如

```
notify="currency=1&extra=&order_no=1372852640712&pay_result=1&pay_time=20130703200113&pay_type=2&sign_method=1&sp_no=1210010002&total_amount=1&transport_amount=0&unit_amount=1&unit_count=1&sign=b3e35d180b747d5302d5ccbab6410c53"
```
在stateCode =0，并且验签成功的情况下，证明支付成功。如果是安全级别低的情况下可以只用stateCode =0证明支付成功。其它情况归为失败。

#### 说明： 
1. 商户通过上述参数拼成订单信息。如果只有1个商品，那么goods_desc和goods_url可以使该商品的名称和展现URL；如果包括多个商品，那么goods_desc和goods_url不可能与每个商品一一对应，具体内容由商户定义。
2. 该接口“可能包含中文”的参数包括：goods_name、goods_desc、buyer_sp_username，因此指定了input_charset参数。这三个参数值必须按input_charset编码后，才能参与签名。
3. goods_name和goods_desc同样都是商品的相关信息。区别在于，goods_name是商品名称，比较短；goods_desc是商品的描述，比较长。如果商户觉得goods_name不足以说明商品的信息，则可以使用goods_desc字段。
4. total_amount的值是必须提供的；unit_amount、unit_count和transport_amount的值或者都提供，或者都不提供。如果这4个参数都提供了，那么必须满足下面等式：
total_amount = unit_amount*unit_count+transport_amount
否则，百度支付SDK将拒绝该支付请求。
5. buyer_sp_username是买家在商户网站的用户名。如果商户需要在百度支付SDK的交易记录中保存该信息，则可以使用这个参数。
6. return_url用于后台通知。return_url的内容包括必要的文本信息即可。这个URL不应该带有参数。需要注意的是，return_url必须返回200，不能要求登录或重定向。
7. extra完全由商户自己使用，对百度支付SDK是透明的。如果提供了该参数，那么查单接口和通知接口将原样返回该参数。


#### 签名机制
于商户和百度安全支付之间的通信涉及到订单信息和支付信息，必须保证通信数据不被篡改和伪造。否则，将给商户和百度安全支付造成资金损失。

百度安全支付采用签名机制来保证通信安全。本文中的每个接口规范都包括两个参数：sign_method和sign。sign_method是摘要算法，sign是签名结果。商户或百度支付SDK向对方发送数据时，必须指定sign_method并生成相应的sign；对方接收到数据后，必须使用相同的签名算法对sign的值进行验证。如果验证不通过，则说明通信数据已经被篡改或伪造。


百度支付SDK没有使用RSA、DSA等给予非对称密钥的签名算法，而是使用了MD5、SHA-1等摘要算法。这些摘要算法本身并不能用作签名，但是结合百度支付SDK合作密钥，也可以起到签名的作用，进而达到防篡改和伪造的目的。


商户与百度支付SDK签约时，百度支付SDK会分配一个百度支付SDK合作密钥。每个
商户的密钥是唯一的，一定不能让第三方知道。如果密钥泄漏，必须及时通知百度支付SDK更换密钥。

签名机制包括拼接待签名数据和对待签名数据进行摘要两个步骤：

- 待签名数据由除sign之外的所有请求参数和百度支付SDK合作密钥按以下规则拼接而成：

    - 请求参数都按照名称字符升序排列（参数名称不允许相同 ）
    - 某些请求参数的值是允许包含中文的，为了避免中文的编码问题，我们规定所有参数的值必须按照input_charset进行编码（input_charset的含义请参见即时到帐接口规范）
    - 对于可选参数（接口规范中的非“必须”参数），如果没有使用，则无需参与拼接。这样可以增强接口参数的可扩展性。
    - 将百度支付SDK合作密钥作为最后一个参数，参数名为key，参数值就是百度支付SDK合作密钥本身
    - 将请求参数按上述顺序用&拼接起来

需要注意的是：在签名时，如果参数的值包括&、@等特殊字符或中文，这些字符需要保持原样，不要做URL编码。发送HTTP请求时，是需要进行URL编码的。

- 用指定的摘要算法对待签名数据进行摘要，生成签名数据（不区分大小写），作为附加的请求参数sign的值。

#### 下面是一个使用MD5算法进行签名的示例：

```
gn = 
MD5(currency=1&extra=&goods_category=1&goods_channel=baidu&goods_channel_sp=0001&goods_desc=商品描述 &goods_name=商品1&goods_url=http://item.jd.com/736610.html&input_charset=1&order_create_time=20130508131702&order_no=1372323335119&pay_type=2&return_url=http://item.jd.com/736610.html&service_code=1&sign_method=1&sp_no=1210010002&total_amount=1&transport_amount=0&unit_amount=1&unit_count=1&key=XXXXXXXXXXXXXXXX)
= 39375042FD5F801C2B0A128B145589C3
其中，goods_name和goods_desc的值（红字部分）应该是按照input_charset编码后的结果。
```


下面解释一下为什么签名之前，需要对中文进行特定的编码。
相同的字符串(包括中文)，如果内部编码格式不同，那么对应的字节流可能也不相同。MD5等摘要算法是对字节流进行操作的。因此，相同字符串的摘要结果未必相同，取决于内部编码。
商户和百度支付SDK必须协商好中文的编码，才能成功验签。如果商户的请求参数中可能包含中文，那么必须指定input_charset参数，并按照input_charset进行编码后，才能签名。百度支付SDK收到请求数据后，使用相同的编码进行验签。

#### 签名参数
参数名 | 参数含义 | 格式说明 | 是否必须
---------- | ------------- | ------------ | ------------
service_code | 服务编号 | 整数，目前必须为1 | 是
_no | 百度钱包商户号 | 10位数字组成的字符串 | 是
order_create_time | 创建订单的时间 | YYYYMMDDHHMMSS | 是
order_no | 订单号，商户须保证订单号在商户系统内部唯一。 | 不超过20个字符 | 是
goods_category | 商品分类号。 | 取值由钱包系统分配 | 否
goods_name | 商品的名称 | 允许包含中文；不超过128个字符或64个汉字 | 是
goods_desc | 商品的描述信息 | 允许包含中文；不超过255个字符或127个汉字 | 是
goods_url | 商品在商户网站上的URL。 | URL | 否
unit_amount | 商品单价，以分为单位 | 非负整数 | 否
unit_count | 商品数量 | 非负整数 | 否
transport_amount | 运费 | 非负整数 | 否
total_amount | 总金额，以分为单位 | 非负整数 | 是
currency | 币种，默认人民币 | 取值范围参见附录 | 是
buyer_sp_username | 买家在商户网站的用户名 | 允许包含中文；不超过64字符或32个汉字 | 否
return_url | 百度钱包主动通知商户支付结果的URL | 仅支持http(s)的URL。 | 是
pay_type | 支付方式 | 默认取值2 | 是
expire_time | 交易的超时时间 | YYYYMMDDHHMMSS，不得早于交易创建的时间。 | 否
input_charset | 请求参数的字符编码 | 取值范围参见附录 | 是
version | 接口的版本号 | 必须为2 | 是
sign_method | 签名方法 | 取值范围参见附录 | 是
extra  | 商户自定义数据 | 不超过255个字符 | 否


- 说明：上述这些参数需要参照签名机制生成sign参数。


#### 不参与签名参数


参数名 | 参数含义 | 格式说明 | 是否必须
---------- | ------------- | ------------ | ------------
goods_channel_sp | 数字商品开发商 | 10位数字组成的字符串 | 否
goods_channel | 数字商品渠道 | 商户与渠道商提前约定好，字符串，字母和数字的组合，不能包含其他特殊字符,不超过20为字符串 | 否


- 说明：这俩个参数主要用于数字产品的交易统计。

#### 附录
- 币种列表

取值 | 含义
---------- | ------------- 
1 | 人民币

- 摘要算法列表

取值 | 含义
---------- | ------------- 
1 | MD5
2 | SHA-1

- 字符编码列表

取值 | 含义
---------- | ------------- 
1 | GBK


## Socialshare ##
    Blend.mbaas.socialshare

社会化分享

**方法：**

- callShare(options) 

<h3 class="socialshare"> callShare </h3>

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

#### 附录

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



## Push ##

    Blend.mbaas.push

推送服务

**方法：**

- registerUnicast(options)
- unregisterUnicast(options)
- registerMulticast(options)
- unregisterMulticast(options)
- getUniqueId(options)
- isBind(options)


<h3 class="push"> registerUnicast </h3>

    registerUnicast(options)

**功能描述：**

轻应用单播服务订阅. Push绑定，为当前设备用户添加一个轻应用绑定关系。需要向Push服务端发起绑定，绑定成功后返回给应用pushToken，应用用它们来做单播推送。用这个接口，JS层可以给轻应用提供发帖、关注问题等推送。

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>nonce</td>
            <td>string</td>            
            <td>防范CSRF攻击的安全认证参数。在轻应用服务器端生成的随机串，长度小于32。</td>  
        </tr>
        <tr>
            <td>csrftoken</td>
            <td>string</td>            
            <td>防范CSRF攻击的安全认证参数。在轻应用服务器端按照如下规则生成：md5(nonce + 轻应用的Secret Key)</td>  
        </tr>
		<tr>
            <td>addShortcut</td>
            <td>boolean(可选)</td>            
            <td>是否将轻应用添加到手机桌面，true表示添加，默认是false，不添加到桌面</td>  
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>            
            <td>订阅成功，返回PushInfo对象</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>订阅失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

**返回的PushInfo对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>pushToken</td>
            <td>string</td>            
            <td>设备唯一标识</td>  
        </tr>
        <tr>
            <td>error</td>
            <td>number</td>          
            <td>0 - 订阅成功；1 - 内部错误:功能的处理过程中出现错误, 具体错误信息查看error_msg字段 2 - 参数错误 3 – 超时 4 Referer非法 5 – sdcard无效</td>
        </tr>
    </tbody>
</table>



<h3 class="push"> unregisterUnicast  </h3>

    unregisterUnicast(options)

**功能描述：**

轻应用单播服务取消订阅. Push解绑定，为当前设备用户解除一个轻应用绑定关系。解绑定后，订阅消息、服务订阅消息、话题订阅消息都将收不到。

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>nonce</td>
            <td>string</td>            
            <td>防范CSRF攻击的安全认证参数。在轻应用服务器端生成的随机串，长度小于32。</td>  
        </tr>
        <tr>
            <td>csrftoken</td>
            <td>string</td>            
            <td>防范CSRF攻击的安全认证参数。在轻应用服务器端按照如下规则生成：md5(nonce + 轻应用的Secret Key)</td>  
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>            
            <td>取消订阅成功，返回info对象</td>
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>取消订阅失败，返回错误码信息</td>
        </tr>
    </tbody>
</table>

**返回的info对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>error</td>
            <td>number</td>          
            <td>0 - 订阅成功；1 - 内部错误:功能的处理过程中出现错误, 具体错误信息查看error_msg字段 2 - 参数错误 3 – 超时 4 Referer非法 5 – sdcard无效</td>
        </tr>
    </tbody>
</table>


<h3 class="push"> registerMulticast </h3>

    registerMulticast(options)

**功能描述：**

轻应用组播服务订阅. 在轻应用内为用户提供相关服务订阅的支持，即给轻应用绑定TAG，如果轻应用没有绑定，Push会自行绑定轻应用。

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>nonce</td>
            <td>string</td>            
            <td>防范CSRF攻击的安全认证参数。在轻应用服务器端生成的随机串，长度小于32。</td>  
        </tr>
        <tr>
            <td>csrftoken</td>
            <td>string</td>            
            <td>防范CSRF攻击的安全认证参数。在轻应用服务器端按照如下规则生成：md5(nonce + 轻应用的Secret Key)</td>  
        </tr>   
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>
            <td>订阅成功，返回PushInfo对象</td>
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>订阅失败，返回错误码信息</td>  
        </tr>
        <tr>
            <td>tag</td>
            <td>string</td>      
            <td>tag，订阅的服务所用的tag名称</td>  
        </tr>
    </tbody>
</table>

**返回的PushInfo对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>error</td>
            <td>number</td>        
            <td>0 - 订阅成功；1 - 内部错误:功能的处理过程中出现错误, 具体错误信息查看error_msg字段 2 - 参数错误 3 – 超时 4 Referer非法 5 – sdcard无效</td>
        </tr>
        <tr>
            <td>tag</td>
            <td>string</td>
            <td>TAG信息</td>
        </tr>
    </tbody>
</table>




<h3 class="push"> unregisterMulticast </h3>

    unregisterMulticast(options)

**功能描述：**

轻应用组播服务订阅. 在轻应用内为用户提供相关服务订阅的支持，即给轻应用绑定TAG，如果轻应用没有绑定，Push会自行绑定轻应用。

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>            
            <td>取消订阅成功，返回info对象</td>
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>取消订阅失败，返回错误码信息</td>  
        </tr>
        <tr>
            <td>tag</td>
            <td>string</td>      
            <td>tag，订阅的服务所用的tag名称</td>  
        </tr>
    </tbody>
</table>

**返回的info对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>error</td>
            <td>number</td>        
            <td>0 - 订阅成功；1 - 内部错误:功能的处理过程中出现错误, 具体错误信息查看error_msg字段 2 - 参数错误 3 – 超时 4 Referer非法 5 – sdcard无效</td>
        </tr>
        <tr>
            <td>tag</td>
            <td>string</td>
            <td>TAG信息</td>
        </tr>
    </tbody>
</table>



<h3 class="push"> getUniqueId </h3>

    getUniqueId(options)

**功能描述：**

获取设备的唯一标示。

**参数说明：**
options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>            
            <td>获取设备唯一标识成功，返回data对象</td>
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>获取设备唯一标识失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

**返回的data对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>error</td>
            <td>number</td>        
            <td>0 - 订阅成功；1 - 内部错误:功能的处理过程中出现错误, 具体错误信息查看error_msg字段 2 - 参数错误 3 – 超时 4 Referer非法 5 – sdcard无效</td>
        </tr>
        <tr>
            <td>unique_id</td>
            <td>string</td>
            <td>返回的设备唯一标识</td>
        </tr>
    </tbody>
</table>



<h3 class="push"> isBind </h3>

    isBind(options)

**功能描述：**

根据api key获取某个轻应用是否绑定的状态。

**参数说明：**
options：为object类型，其中包括以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>            
            <td>判断是否绑定成功，返回data对象</td>
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>判断是否绑定失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

**返回的data对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>error</td>
            <td>number</td>        
            <td>0 - 订阅成功；1 - 内部错误:功能的处理过程中出现错误, 具体错误信息查看error_msg字段 2 - 参数错误 3 – 超时 4 Referer非法 5 – sdcard无效</td>
        </tr>
        <tr>
            <td>is_bind</td>
            <td>boolean</td>
            <td>返回true表示已经绑定，false表示未绑定</td>
        </tr>
    </tbody>
</table>


