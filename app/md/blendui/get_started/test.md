# BlendUI调试

## 下载运行环境

下载blendui.apk并安装到Android移动端上，下载地址如下：


<img src="/md/images/ios_runtime.png" class="download-pic">



## Android



### 搭建线下调试环境

通过下面的链接下载Android开发工具：

<http://developer.android.com/sdk/index.html>

安装完成后将SDK包中的platform-tools adb工具添加到系统的环境变量中以便在下一步中配置URL到APK中。

### 配置URL到APK

将Android的端连接到`adb`,并使用下面的命令将URL配置到blend.apk中

	//例如应用的本地地址为“http://192.168.0.100/index.html”
	
	adb shell "echo "http://192.168.0.100/index.html" > /sdcard/blend/url.conf"
	
> 温馨提示：请确保移动端已连接到adb并与服务器处于一个网段

### 运行和调试应用 

#### 运行

配置完成后，重新启动安装的blendui app（通过安装blend.apk的应用）即可看到上一步配置的URL应用。

#### 调试

我们可以通过log方法来调试BlendUI应用方法如下：

打开所下载的`eclipse`并切换到`logcat`面板查看日志，在js中使用`console.log`，`console.error`来打印log，这些log会显示在`eclipse`的`logcat`面板中。

## iOS

### 下载iOS Project

iOS需要下载一个Xcode的工程，在工程中调试BlendUI应用，Xcode工程下载地址如下：



### 配置URl

将工程导入Xcode并在工程`BlendUISDK`目录下找到`BlendUI.m`文件，并在找到下面的代码

	- (void)loadAppHomePage
	{
    	[self loadUrlString: @"http://www.baidu.com/"];
	}
	
将自己应用的首页地址替换`@"http://www.baidu.com/"`即可

## 手机调试工具-weinre

移动端对于轻应用的调试可以使用weinre来调试手机的页面，步骤如下：

（1）首先在需要调试的页面加入以下代码

	<script src="http://weinre123.duapp.com/target/target-script-min.js"></script>

（2）使用浏览器访问`http://weinre123.duapp.com/`，填入你本机的IP并点击`调试一下`，保持页面

（3）使用移动端访问需要调试的页面

（4）回到`http://weinre123.duapp.com/`即可看到下面的页面

![](/md/images/weinre.png)






