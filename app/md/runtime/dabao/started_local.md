# 本地上传资源打包

本地上传资源打包步骤同上“在线轻应用打包”，进入“打包平台官网” <http://hybrid.baidu.com/runtime/>，下面我们将详细介绍这几个步骤。

## 填写基本信息

这里以 `醉了阅读` 为例，按照提示填写打包参数请必须依据规范填写。

![](/md/images/dabao/3.2.1.png)

## 打包方式选择

选择第二种方式打包，本地上传一个 `zip` 包。打包成功后访问页面即是 `www` 目录下资源首页的 `index.html` 文件。

![](/md/images/dabao/3.2.2-1.png)

**注意**
`zip` 包要求如下：

1、上传资源格式为 `zip`。

2、`zip` 中包含 `www` 文件夹。

3、`www` 目录下面有 `index.html` 文件。

4、更新资源包时 `versionCode` 即 **版本号** 需要递增，如下图所示。

![](/md/images/dabao/3.2.2-2.png)

`www` 目录下面必须包含 `index.html` 文件，同时可以包含 `css`，`js`，图片等资源。

![](/md/images/dabao/3.2.2-3.png)

## App Logo 图标上传

根据尺寸规格，选择 `LOGO` 图片上传，点击“上传图标”。

 ![](/md/images/dabao/3.2.3.png)

## App 启动页上传

根据尺寸规格，选择启动页图片上传，点击“上传启动页”。

![](/md/images/dabao/3.2.4.png)

## 开始打包

完成以上步骤，点击“开始打包”，打包正在进行中。打包进度显示见下图，若打包失败，则需重新打包；若打包成功，则点击“下载应用”，可直接下载 `APK`。

## 应用安装后的表现形式

安装成功之后，可以看到首页显示的就是我们所打包的 `Web App` 。

![](/md/images/dabao/3.2.6.png)

**备注**
> * 此处仅仅为展示 `Demo` ，开发者可以用 `Html5` 开发自己的轻应用，或者也可以用 `Native App` 来 **集成使用** Runtime 能力。 `runtime` 文档： <http://cloudaplus.duapp.com/runtime/introduction/introduce> 
> * `Blend API` 文档： <http://clouda.baidu.com/blend/introduction/introduction>。
> * `assets` 资源包，`Blend Demo` 下载链接为：<https://github.com/Clouda-team/BlendDemo>；打包时需要把 `BlendDemo` 文件夹改名为 `www` 再重新压缩为 `zip` 包方可正常加载。


