### Keybord ###
     clouda.device.keybord

键盘，键盘类

**方法：**

- startListen(options)
- stopListen(options)
- open(options)
- close(options)


#### startListen ####

    startListen(options)

**功能描述：**

添加键盘事件监听


**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 当键盘打开或者关闭，返回 键盘信息对象
onfail | function(err){} | 添加监听失败，返回错误码 


**返回的键盘信息对象**

参数 | 类型 | 描述 
------------ | ------------- | ------------
show | number | 0 是隐藏， 1是显示
height | number | 键盘的高度，单位像素


#### stopListen ####

    stopListen(options)

**功能描述：**

停止键盘事件监听

**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 停止监听成功，返回 success状态码
onfail | function(err){} | 停止监听失败，返回错误码


#### open ####

    open(options)

**功能描述：**

打开键盘

**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 打开键盘成功，返回 键盘信息对象
onfail | function(err){} | 打开键盘失败，返回错误码


#### close ####

    close(options)

**功能描述：**

关闭键盘

**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 关闭键盘成功，返回 键盘信息对象
onfail | function(err){} | 关闭键盘失败，返回错误码

