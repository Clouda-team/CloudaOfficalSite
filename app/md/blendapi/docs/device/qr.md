### QRCode ###
     clouda.device.qr

二维码、条形码类

**方法：**

- startCapture(options)

#### startCapture ####

    startCapture(options)

**功能描述：**

启动二维码或条形码扫描与识别

**扫描对象类型：**

- clouda.device.QR_TYPE.QRCODE  ：二维码
- clouda.device.QR_TYPE.BARCODE  ： 条形码

**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 扫描成功，返回二维码内容字符串
onfail | function(err){} | 二维码扫描失败，返回错误码 
type | number | 扫描对象类型 


