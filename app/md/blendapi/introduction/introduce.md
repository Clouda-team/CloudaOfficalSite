# Blend API介绍

## 概述

百度轻应用API是一套使用JavaScript语言提供的应用工具接口，方便快捷的实现轻应用开发。

百度轻应用API包括两类API：

	·	本地设备能力类： Blend.device

	·	云服务类： Blend.mbaas



本地设备能力是指手机设备的能力，通过统一的对外接口，封装了可以根据运行环境自动调用native提供的能力、或退化的html5能力，提高了html5接口的准确度降低失败率，支持了html5不具备的诸如设备内文件管理等能力，丰富和扩展了轻应用开发的设备能力接口。

	·	调起应用 (Activity)

	·	电池（Battery）

	·	网络连接状态(Connection)

	·	设备信息（Device）

	·	文件系统（FileSystem）

	·	系统语言信息 (Globalization)

	·	地理位置（Geolocation）

	·	本地媒体功能（Media）

	·	二维码（QRCode）



云服务类能力是指百度开放给开发者的自身云服务能力，云服务类API目前支持以下功能：

	·	帐号 (Account)
	·	轻应用（App）
	·	社会化分享（Socialshare）
	·	服务推送(Push)


## 如何使用

Blend API的使用流程可参考下图：

![](/md/images/blend_api_flow.png)

获取API Key可查看《获取API Key》文档；

申请API权限可查看《申请权限》文档；

如何使用API Key初始化API并使用Blend API可查看《快速入门》文档

关于Blend API的详细介绍可查看《API手册》





