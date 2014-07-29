# Runtime简介

## 概述

### Runtime

Runtime为轻应用在移动终端上可以安全、稳定、高效的运行提供运行环境，在该运行环境中提供了一套方便快捷的插件机制，可以快速地让轻应用获得与Native应用一样的能力，并提供权限管理，生命周期管理等APP管理功能。

### Runtime GUI

#### Runtime入口

当您想在应用中集成Runtime时，需要在您的应用中提供用户进入Runtime的入口，入口的方式您可以根据应用实际情况来设计（任意方式都可以），下面是几种入口的展现方式（仅供参考）:

<img src="/md/images/pic1.png" height="400px">

#### Runtime GUI

Runtime是轻应用运行的一个容器，Runtime不仅仅支持加载和显示轻应用，还支持轻应用组件的加载和管理，并为用户提供了可视化的界面（GUI默认，目前不可更改）方便用户操作和选择自己需要的轻应用，GUI的组成如下图：

<img src="/md/images/RuntimeGUI.jpeg" height="400px">