# Blend API简介

## 概述

Blend API能将移动设备的本地能力和百度的云服务融合（Blend）到webapp中，开发者可以使用熟悉的web API来顺畅地使用这些能力。

Webapp的一大困境在于可供web调用的API远不如Native的完善。比如手机是3G还是wifi网络，电量情况，通讯录读取等，这些局限给手机web开发者带来了功能完备性的障碍。而Blend API弥补了这一鸿沟，它能让webapp的API更完备，让API的性能速度得到提升，暴露给开发者的都是通过统一、标准化的web API。

更为重要的是，Blend API内置于拥有极大装机量的百度搜索app，使得轻应用开发者能在数亿用户的手机上直接使用这些本地能力，并且拥有破壳检索、自动升级免安装等优势功能。

百度轻应用API包括两类：

* 本地设备能力类： Blend.device
* 云服务类： Blend.mbaas

本地设备能力通过统一的对外接口，封装了Native提供的能力，在Native环境不可用时，会退化到HTML5能力，不仅提供了HTML5不具备的能力，还能提高接口的性能和准确度，如Android下的Blend API地理位置获取速度是HTML5原生API的十余倍。

云服务类能力是指将百度强大的云服务作为接口提供出来，供轻应用开发者直接调用。


## 如何使用

Blend API的使用流程可参考下图：

![](/md/images/blend_api_flow.png)

获取API Key可查看《获取API Key》文档；

申请API权限可查看《申请权限》文档；

如何使用API Key初始化API并使用Blend API可查看《快速入门》文档

关于Blend API的详细介绍可查看《API手册》





