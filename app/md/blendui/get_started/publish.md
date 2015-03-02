# BlendUI应用发布

使用BlendUI开发的应用针对不同平台可以采用不同的发布方式。

## Android

当使用BlendUI开发完成应用后，可使用平台提供的打包平台将应用进行打包，打包地址如下：



<http://hybrid.baidu.com/beta>

打包完成后会生成一个apk文件，开发者可将应用提交应用商店或者其他渠道下发即可。

## iOS

如果您将BlendUI开发完成应用发布到iOS，可采用以下步骤完成：

（1）下载BlendUI Xcode工程，下载地址如下：

<http://pan.baidu.com/s/1jGrAdLk>

（2）下载完成后将工程导入Xcode，在工程目录下建立一个应用的目录，例如目录名为“hello”，并将BlendUI开发的工程文件拷贝到“hello”目录下，并在工程`BlendUISDK`目录下找到`BlendUI.m`文件，在文件中找到下面的代码

	- (void)loadAppHomePage
	{
    	[self loadUrlString: @"http://www.baidu.com/"];
	}

将上面的代码替换成

	- (void)loadAppHomePage
	{
    	[self loadUrlString: @"http://www.baidu.com/+dev+/hello/index.html"];
	}
	
说明：

	服务端域名+dev+本地存放应用目录名+首页html
	
* 服务端域名

	应用远程服务器的域名，例如：http://www.baidu.com/
	
* dev

	固定值，表示设备
	
（3）使用Xcode编译完成后，提交应用商店
	
* 本地目录

	工程中用于存放BlendUI项目的目录名，例如“hello”
	
* 首页地址

	应用的入口文件

## Web

将BlendUI开发的应用存放在服务器上，使用`服务器域名+应用入口文件`即可访问。