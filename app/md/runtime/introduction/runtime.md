# 集成方案

当您集成Runtime时，我们为您提供两套集成方案：动态远程方案，动态本地方案。

## 动态远程方案

动态远程方案是宿主中只是包含`sdk`的代码，没有Runtime，当需要运行Runtime时候从服务器下载后再加载。它的优点是集成快速，和宿主没有耦合关系；缺点是需要远程下载，所以首次执行时间比较长。

## 动态本地方案

动态本地方案是宿主中保存`sdk`的`jar`包，同时在`assets`目录下存放一个Runtime文件，同时支持网络静默下载最新的Runtime文件。它的优点是集成快速，执行效率高；缺点是和静态方案一样，影响宿主包的尺寸。

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>方案</th>
            <th>是否需要向宿主加Runtime jar包和资源</th>
            <th>是否需要在assets存放Runtime apk文件</th>
            <th>执行效率</th>
            <th>集成难度</th>
            <th>占用宿主包尺寸</th>
            <th>是否消耗用户流量</th>
        </tr>
         <tr>
			<th>动态本地方案</th>
			<th>不需要</th>
			<th>需要</th>
			<th>高</th>
			<th>一般</th>
			<th>750.71 KB</th>
			<th>少量</th>
        </tr>
         <tr>
			<th>动态远程方案</th>
			<th>不需要</th>
			<th>不需要</th>
			<th>中</th>
			<th>简单</th>
			<th>144.50 KB</th>
			<th>一般（注：第一次下载需下载到本地，速度较慢）</th>
        </tr>
            
   </tbody>
</table>

以上两种方案您可根据自己的实际情况选择。