# FAQ

## 打包失败, 参数填写不正确

如出现下图所示的情况，说明此时应该检查每一步骤所填写的参数，存在不符合规范信息导致打包失败。

![](/md/images/dabao/4.1.1.png)

## 打包请求超时，服务器繁忙，请稍后打包

如果出现这种情况，说明目前服务器端不稳定或服务在进行维护，可以稍等片刻之后再进行打包。

## 打包服务繁忙，请稍后再打包

如果出现这种情况， 说明目前打包服务请求量较多，进入等待阶段， 可以稍等片刻之后再进行打包。

## 如何进行插件签名

插件签名平台目前还未正式对外发布，仅供内部签名使用，后续会进行开放。

## 什么是私有插件，如何开发私有插件

轻应用插件和浏览器插件类似，是遵循一定规范的应用程序接口编写出来的程序；在标准js接口无法满足要求时，需要使用插件来进行扩展，从而使轻应用能够获得更多的能力。可通过Clouda+ 官网进入 Runtime，请参见<http://cloudaplus.duapp.com/runtime/introduction/plugin_inner_introduce>，其中包括Runtime 插件介绍以及开发Demo等相关内容。

## 如何让Web App控制WebView

BlendUI是Clouda+中的重要组成部分，它可以让Javascript能像DOM那样操作多个Webview，以及在Webview中嵌入Native App组件。具体相关内容请参见<http://cloudaplus.duapp.com/blend/introduction/introduction>