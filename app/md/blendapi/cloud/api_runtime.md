# 云服务API（Runtime）

云服务类API目前支持以下功能： 

- 帐号 (Account)
- 轻支付（Pay）
- 社会化分享（Socialshare）
- 推送(Push)
- 应用订阅 (App)
- 脸部识别（Face）
- 个人云存储（Pcs）
- 播放器 (Player)
- 文本转语音 (TTS)
- 语音识别 (VTT)


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


## App ##
    Blend.mbaas.app

轻应用订阅相关接口
订阅及检测是否已订阅

**方法：** 

- followSite(appid,options)
- checkFollow(appid,options)

<!--#### addShortcut #### 
  addShortcut(appid,options)

**功能描述：** 

创建轻应用的快捷方式到桌面

**参数说明：** 

- appid：为 string 类型，该轻应用的appid
- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息 -->


<h3 class="app">followSite</h3>

	followSite(appid,options)

**功能描述：** 

关注轻应用，同时添加轻应用到桌面

**参数说明：** 

- appid：为 string 类型，该轻应用的appid
- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="app">checkFollow</h3>

	checkFollow(appid,options)

**功能描述：** 

检查是否已关注轻应用

**参数说明：** 

- appid：为 string 类型，该轻应用的appid
- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(stateCode){} | 操作成功，返回关注信息状态码
onfail | function(err){} | 操作失败，返回错误码信息 

**返回的关注信息状态码：**
stateCode表示是否关注轻应用的状态码，如下表

stateCode | 描述 
---------- | ------------- 
0 | 未添加
1 | 已添加
2 | 添加中





## Face ##

    Blend.mbaas.face

人脸识别

**方法：**

- register(uid, options)
- verify(uid, options)
- checkBlink(uid, options)
- authorizeDevice(uid, options)
- listDevice(uid, options)

<h3 class="face">register</h3>

    register(uid, options)

**功能描述：**

注册人脸识别服务，启动摄像功能获取人脸信息，并与UID建立绑定关系

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为 object 类型，其中包括以下参数：

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
            <td>注册成功，返回SUCCESS状态码1</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>


<h3 class="face">verify</h3>

	verify(uid, options)

**功能描述：**

启动摄像功能获取人脸信息，并与register接口中已注册的人脸信息进行验证

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>验证成功，返回SUCCESS状态码1</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>


<h3 class="face">checkBlink</h3>

	checkBlink(uid, options)

**功能描述：**

检查眨眼情况，用于活体检测或者通过眼睛活动状态进行远程控制操作

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>操作成功，返回SUCCESS状态码1，存在眨眼情况</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回系统错误码信息</td>  
        </tr>
    </tbody>
</table>


<h3 class="face">authorizeDevice</h3>

	authorizeDevice(uid, options)

**功能描述：**

绑定设备，认证该用户可使用人脸识别服务的具体采集设备

**参数说明：**

- uid ： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>绑定成功，返回SUCCESS状态码1</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>绑定失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>


<h3 class="face">listDevice</h3>

	listDevice(uid, options)

**功能描述：**

查看该用户使用人脸服务所认证的设备列表信息

**参数说明：**

- uid ： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>获取成功，data 返回 string 类型设备UUID信息，以逗号分隔</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>获取失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>


## 个人云存储 ##

	Blend.mbaas.pcs

使用PCS接口实现文件上传，文件操作，文件下载，离线下载等功能，步骤如下：

- 用户登录授权得到密钥（token）
- 使用密钥（token）执行初始化函数init

**方法：**

- init(token,options)
- mkdir(path,options)
- getQuota(options)
- uploadFile(localpath,serverpath,options)
- downloadFile(serverpath,localpath,options)
- deleteFiles(patharr,options)
- getMeta(path,options)
- getList(path,options)
- getListByCategory(mediaType,options)
- getStreamingURL(serverpath,codeType,options)
- search(serverpath,key,recursive,options)
- thumbnail(serverpath,options)
- move(patharr,options)
- rename(patharr,options)
- copy(patharr,options)
- createFileLink(path,options)
- deleteFileLink(path,options)
- cloudMatch(localpath,serverpath,options)
- cloudMatchAndUploadFile(localpath,serverpath,options)
- listRecycle(options)
- restore(filesukarr,options)
- cleanRecycle(options)
- cloudDownload(url,serverpath,options)
- cancelCloudDownload(path,options)
- cloudDownloadTaskList(options)
- queryCloudDownloadTaskProgress(filesukarr,options)
- queryCloudDownloadTaskStatus(filesukarr,options)
- diff(cursor,options)


<h3 class="个人云存储">init</h3>

	init(token,options)

**功能描述：**

通过帐号登录（Account）获得的token，初始化PCS

**参数说明：**
- token：为 string 类型，

- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回登录用户信息
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="个人云存储">mkdir</h3>

	mkdir(path,options)

**功能描述：**

创建文件夹，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="个人云存储">getQuota</h3>

	getQuota(options)

**功能描述：**

返回pcs空间使用情况，单位字节

**参数说明：**
- options：为 object 类型，其中包括以下参数：


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回空间使用情况Quota对象
onfail | function(err){} | 操作失败，返回错误码信息

**返回的Quota对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
used | int | 已使用空间，单位字节
total | int | 空间总大小，单位字节


<h3 class="个人云存储">uploadFile</h3>

	uploadFile(localpath,serverpath,options)

**功能描述：**

上传文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- localpath：为 string 类型，位于手机文件系统的绝对路径
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息
onprogress | function(status){} | 返回上传进度Progress对象

**返回的Progress对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
progress | int | 已上传的大小，单位字节
total | int | 空间总大小，单位字节


<h3 class="个人云存储">downloadFile</h3>

	downloadFile(serverpath,localpath,options)

**功能描述：**
下载文件到本地，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- serverpath：为 string或Array 类型，位于个人云存储的绝对路径，若是Array类型，则自动打包下载
- localpath：为 string 类型，位于本地的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息
onprogress | function(status){} | 返回上传进度Progress对象
asStream | boolean | 可选参数，默认是false
codecType | string | 可选参数，默认为空，可选值如下：
- clouda.mbaas.CODEC_TYPE.M320
- clouda.mbaas.CODEC_TYPE.M480224
- clouda.mbaas.CODEC_TYPE.M480360
- clouda.mbaas.CODEC_TYPE.M640
- clouda.mbaas.CODEC_TYPE.M854


<h3 class="个人云存储">deleteFiles</h3>

	deleteFiles(patharr,options)

**功能描述：**

批量删除文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由个人云存储上文件或文件夹的绝对路径组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回登录用户信息
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="个人云存储">getMeta</h3>

	getMeta(path,options)


**功能描述：**

获取文件信息，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回meta对象
onfail | function(err){} | 操作失败，返回错误码信息

**返回的Meta对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
hasSubFolder | booleanen | 是否有子文件夹
blockList | string | md5值
path | string | 绝对路径
isDir | booleanen | 是否是文件夹
fsId | string | 文件的唯一id
mTime | string | 修改时间戳
mediaType | int | 媒体类型
cTime | string | 创建时间戳
size | int | 文件大小，单位字节

<h3 class="个人云存储">getList</h3>
	
	getList(path,options)


**功能描述：**

获取文件夹下的信息，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数： 

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息
order | string | 可选参数asc,desc
by | string | 可选参数time,size


<h3 class="个人云存储">getListByCategory</h3>
	getListByCategory(mediaType,options)

**功能描述：**

分类浏览，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- mediaType：为 string 类型，位于个人云存储的绝对路径,其值如下：
         - clouda.mbaas.MEDIA_TYPE.IMG
         - clouda.mbaas.MEDIA_TYPE.AUD
         - clouda.mbaas.MEDIA_TYPE.VID
         - clouda.mbaas.MEDIA_TYPE.DOC 
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="个人云存储">getStreamingURL</h3>
	
	getStreamingURL(serverpath,codeType,options)


**功能描述：**

获得文件播放流，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- serverpath： string 类型，位于个人云存储的绝对路径
- codeType：播放流类型，其值如下：
         - clouda.mbaas.VIDEO_STREAM.P360(默认)
         - clouda.mbaas.VIDEO_STREAM.P480  
        
- options： object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件流信息
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">search</h3>
	
	search(serverpath,key,recursive,options)

**功能描述：**

搜索文件夹，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- key：为 string 类型，搜索关键字
- recursive：为 boolean 类型，是否递归查询
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">thumbnail</h3>

	thumbnail(serverpath,options)

**功能描述：**

缩略图，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回图片base64
onfail | function(err){} | 操作失败，返回错误码信息
quality | int | 0-100 缩略图品质
width | int | 缩略图宽度，单位像素
height | int | 缩略图高度，单位像素

<h3 class="个人云存储">move</h3>
	
	move(patharr,options)

**功能描述：**

移动文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由**Path**对象组成:


参数 | 类型 | 描述
------------ | ------------- | ------------
from | string | 源文件的绝对路径
to | string | 目标地址的绝对路径


- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">rename</h3>
	
	rename(patharr,options)

**功能描述：**

重命名文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由**PathRename**对象组成:

参数 | 类型 | 描述
------------ | ------------- | ------------
oldName | string | 源文件的绝对路径
newName | string | 新文件名


- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">copy</h3>
	
	copy(patharr,options)

**功能描述：**

移动文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由**Path**对象组成:

参数 | 类型 | 描述
------------ | ------------- | ------------
from | string | 源文件的绝对路径
to | string | 目标地址的绝对路径


- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息



<h3 class="个人云存储">createFileLink</h3>
	
	createFileLink(path,options)

**功能描述：**

创建文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">deleteFileLink</h3>
	
	deleteFileLink(path,options)

**功能描述：**

删除文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息



<h3 class="个人云存储">cloudMatch</h3>
	
	cloudMatch(localpath,serverpath,options)

**功能描述：**

云端匹配，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- localpath：为 string 类型，位于本地的绝对路径
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回是否匹配
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">cloudMatchAndUploadFile</h3>
	
	cloudMatchAndUploadFile(localpath,serverpath,options)

**功能描述：**

云端匹配文件并上传，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- localpath：为 string 类型，位于本地的绝对路径
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回操作成功状态码
onfail | function(err){} | 操作失败，返回错误码信息
onprogress | function(status){} | 返回上传进度Progress对象

**返回的Progress对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
progress | int | 已上传的大小，单位字节
total | int | 空间总大小，单位字节

<h3 class="个人云存储">listRecycle</h3>
	
	listRecycle(options)

**功能描述：**
列出回收站的文件列表
**参数说明：**
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">restore</h3>
	
	restore(filesukarr,options)
    
**功能描述：**
回收站还原文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- filesukarr：为 Array 类型，由fsId字符串组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">cleanRecycle</h3>
	
	cleanRecycle(options)

**功能描述：**
清空回收站，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息



<h3 class="个人云存储">cloudDownload</h3>
	
	cloudDownload(url,serverpath,options)

**功能描述：**
启动离线下载任务，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- url：为 string 类型，外网地址
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">cancelCloudDownload</h3>
	
	cancelCloudDownload(serverpath,options)

**功能描述：**
取消离线下载任务，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

<h3 class="个人云存储">cloudDownloadTaskList</h3>
	
	cloudDownloadTaskList(options)
	
**功能描述：**
获取离线下载任务列表，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回cloudDownloadList对象
onfail | function(err){} | 操作失败，返回错误码信息
order | string | 可选asc,desc
start | int | 列表查找句柄的开始位置
limit | int | 列表查找句柄的个数限制
needTaskInfo | boolean | 是否需要文件详细信息，默认true
status | int | 0-10

<h3 class="个人云存储">queryCloudDownloadTaskStatus</h3>
	
	queryCloudDownloadTaskStatus(filesukarr,options)

**功能描述：**
查询给定文件的离线下载状态，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- filesukarr：为 Array 类型，由下载任务id组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回所查询任务的状态
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="个人云存储">queryCloudDownloadTaskProgress</h3>
	
	queryCloudDownloadTaskProgress(filesukarr,options)

**功能描述：**
查询给定文件的离线下载进度，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- filesukarr：为 Array 类型，由下载任务id组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，所查询任务的进度
onfail | function(err){} | 操作失败，返回错误码信息


<h3 class="个人云存储">diff</h3>
	
	diff(cursor,options)

**功能描述：**
历史版本库变更的查询管理
功能第一次调用时，传入的参数为null。后续调用，需要使用前一次调用返回的data.cursor作为参数传入
查询，两次diff调用之间，有哪些操作被执行了
**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回Diff对象
onfail | function(err){} | 操作失败，返回错误码信息

**返回的Diff对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
list | Array | 由Meta对象组成
cursor | string | 供函数diff对比的句柄

**Meta对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
hasSubFolder | booleanen | 是否有子文件夹
blockList | string | md5值
path | string | 绝对路径
isDir | booleanen | 是否是文件夹
fsId | string | 文件的唯一id
mTime | string | 修改时间戳
mediaType | int | 媒体类型
cTime | string | 创建时间戳
size | int | 文件大小，单位字节


## Player ##

	Blend.mbaas.player

播放器

**方法：**

- play(link, options)

<h3 class="player">play</h3>
	
	play(link, options)

**功能描述：**

播放媒体文件

**参数说明：**

- link ： 为string类型，所要播放的媒体文件链接（本地媒体文件路径或 Web URL均可）
- options：为object类型，其中包括以下参数：

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
            <td>播放成功，返回SUCCESS状态码1</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>



## TTS ##

	Blend.mbaas.tts

文本发音类

**方法：**

- say(word, options)

<h3 class="tts">say</h3>
	
	say(word, options)

**功能描述:**

启动文本语音功能


**参数说明:**

- word: string类型，文本信息
- options: object类型，其中包括以下参数：


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
            <td>操作成功，data为"OK"，表明朗读成功。</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(data){}</td>            
            <td>操作失败，返回错误码信息</td>  
        </tr>
        <tr>
            <td>type</td>
            <td>number</td>            
            <td>朗读文本的语音类型：<br>
            - Blend.mbaas.tts.TYPE_DICT_US ： 美式英语发音<br>
            - Blend.mbaas.tts.TYPE_DICT_UK ： 英式英语发音<br>
            - Blend.mbaas.tts.TYPE_DICT_ZH ： 中文发音<br>
        </td>  
        </tr>
    </tbody>
</table>




## VTT ##

    Blend.mbaas.vtt

语音识别服务
开发轻应用前，需要先申请语音服务的ak，sk和pid，并执行初始化init方法

**方法：**

- init(ak,sk,pid)
- showDialog(options)

<h3 class="vtt">init</h3>

	init(ak,sk,pid)

**功能描述：**

初始化所申请的ak，sk，pid等参数，然后方可使用语音识别服务

**参数说明：**

- ak ：所申请的语音服务的ak
- sk ：所申请的语音服务的sk
- pid：所申请的语音服务的pid


<h3 class="vtt">showDialog</h3>

	showDialog(options)

**功能描述：**

显示语音识别对话框，实现语音输入识别

**参数说明：**

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
            <td>识别成功，data是对象，其中voice_result 字段对应的是识别的结果，包括录音时间，是别的文字字符串等</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>识别失败，result为1表示识别失败，error_code 表明不同的错误类型。<br>
     
            </td>  
        </tr>
        <tr>
            <td>speechMode</td>
            <td>int</td>            
            <td>设置识别模式，可选，其参数如下：<br>
            - Blend.mbaas.VTT_SPEECHMODE.SEARCH ：搜索模式 （默认）<br>
            - Blend.mbaas.VTT_SPEECHMODE.INPUT  ：文本输入模式
        </td>  
        </tr>
        <tr>
            <td>filename</td>
            <td>string</td>            
            <td>语音识别保存的文件名（可选）</td>  
            </td>  
        </tr>
        <tr>
            <td>uuid</td>
            <td>string</td>            
            <td>语音识别标识的uuid（可选）</td>  
        </tr>
        <tr>
            <td>sampleRate</td>
            <td>int</td>            
            <td>语音识别录音采样率（可选），其参数如下：<br>
            - Blend.mbaas.VTT_RATE.K8 ： （采样率8k）<br>
            - Blend.mbaas.VTT_RATE.K16  ：（采样率16k）</td>  
        </tr>
    </tbody>
</table>
