# Runtime集成指南

当您集成Runtime时，我们为您提供三套集成方案：静态方案、动态远程方案、动态本地方案。

## 静态方案

静态方案会将**Runtime的java文件和资源合并到宿主工程对应目录中**。这它的优点是执行效率高，缺点是集成难度比较大，因为要修改宿主的工程代码，同时也占用宿主包的尺寸	
	
## 动态远程方案 

动态远程方案是宿主中只是包含sdk的代码，没有runtime，当需要运行runtime时候从服务器下载后再加载。它的优点是集成快速，和宿主没有耦合关系；缺点是需要远程下载，所以首次执行时间比较长

## 动态本地方案

动态本地方案是宿主中保存sdk的jar包，同时在assets目录下存放一个runtime文件，同时支持网络静默下载最新的runtime文件。它的优点是集成快速，执行效率高；缺点是和静态方案一样，影响宿主包的尺寸


<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>方案</th>
            <th>是否需要向宿主加runtime jar包和资源</th>
            <th>是否需要在assets存放runtime apk文件</th>
            <th>执行效率</th>
            <th>集成难度</th>
            <th>占用宿主包尺寸</th>
            <th>是否消耗用户流量</th>
        </tr>
        <tr>
			<th>静态方案</th>
			<th>需要</th>
			<th>不需要</th>
			<th>高</th>
			<th>难</th>
			<th>798.80 KB</th>
			<th>无</th>
        </tr>
         <tr>
			<th>动态远程方案</th>
			<th>不需要</th>
			<th>不需要</th>
			<th>低</th>
			<th>简单</th>
			<th>144.50 KB</th>
			<th>有</th>
        </tr>
         <tr>
			<th>动态本方案</th>
			<th>不需要</th>
			<th>需要</th>
			<th>中</th>
			<th>一般</th>
			<th>750.71 KB</th>
			<th>一般</th>
        </tr>
            
   </tbody>
</table>

以上三种方案您可根据自己的实际情况选择。
