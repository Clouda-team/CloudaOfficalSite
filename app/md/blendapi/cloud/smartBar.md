### smartBar ###
    clouda.lego.smartBar

服务导航配置开放接口，可以通过api控制服务导航的显示，隐藏以及设置评论页面的背景、字体色

#### 以下几种情况，不建议使用该组件 

- 不建议使用该组件登录页面； 
- 不建议使用该组件登录页面支付页面； 
- 不建议使用该组件登录页面支付页面涉及用户隐私的页面，如聊天页面，邮件页面等。 

#### 以下几种情况，需要开发者自行调整方可使用 

- 需要开发者自行调整方可使用单页面Webapp，当页面内容变化时，可能需要开发者调用相关的接口，修改组件内容。 
- 修改组件内容使用fixed 定位布局的页面，需要开发者调整服务导航和自身fixed 定位元素之间的关系，服务导航高度45px固定于页面底部。组件默认使用z-index:500；用户可以使用 css . baiduServiceBottomBa{z-index:xxx;} 进行修改。 
 

**方法：** 

- show()
- hide()
- setTheme(bgColor,wdColor)

#### show #### 

  show()

**功能描述：** 

显示服务导航

**参数说明：** 

- 无

#### hide #### 

  hide()

**功能描述：** 

隐藏服务导航

**参数说明：** 

- 无



#### setTheme #### 

  setTheme(bgColor,wdColor)

**功能描述：** 

设置评论页面的字体颜色和背景色

**参数说明：** 

- bgColor 16进制数字，背景颜色
- wdColor 16进制数字，文字颜色 

