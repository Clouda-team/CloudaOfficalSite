# FAQ

## 打包后打开页面为白屏，网络正常条件下
选择`URL`打包，请检查输入的地址是否有效合法，在浏览器上能否正常访问。

选择`assets`打包，请严格检查打包资源格式是否正确，`zip`包解压**第一级目录**为`www`文件夹，打开`www`文件夹，**第二级目录**中含有`index.html`。


## 打包失败，请检查填写参数

如出现下图所示的情况，说明此时应该**检查每一步骤**所填写的参数，存在不符合规范信息导致打包失败。

![](/md/images/dabao/4.1.1.png)

## 打包请求超时，服务器繁忙，请稍后打包

出现这种情况，说明目前服务器端不稳定或**服务在进行维护**，可以稍等片刻之后再进行打包，或是与我们联系。

## 目前打包服务繁忙，请稍后再打包

出现这种情况，说明目前打包服务请求量较多，进入**排队阶段**， 可以稍等片刻之后再进行打包。

## 如何进行插件签名

插件签名平台目前还未正式对外发布，仅供内部签名使用，后续会进行开放，如有需求，请与我们联系。

## 不通过打包平台，如何集成 Runtime 环境
可以使用原生的**安卓工程**方式来集成`Runtime` 环境，详见：`Runtime集成` <http://clouda.baidu.com/runtime/introduction/runtime_integration>， 集成`jar包`相关物料链接为：<https://github.com/Clouda-team/Runtime/tree/master>。


## 什么是私有插件，如何开发私有插件

轻应用插件和浏览器插件类似，是遵循一定规范的应用程序接口编写出来的程序；在标准`js`接口无法满足要求时，需要使用插件来进行扩展，从而使轻应用能够获得更多的能力。
使用请参见 <http://cloudaplus.duapp.com/runtime/introduction/plugin_inner_introduce>，其中包括`Runtime`插件介绍以及`开发Demo`等相关内容。

## 如何让 Web App 控制 WebView

`Blend`是`Clouda+`中的重要组成部分，它可以让`Javascript`能像`DOM`那样操作多`Webview`，以及在`Webview`中嵌入`Native App`组件。具体相关内容请参见 <http://cloudaplus.duapp.com/blend/introduction/introduction>。