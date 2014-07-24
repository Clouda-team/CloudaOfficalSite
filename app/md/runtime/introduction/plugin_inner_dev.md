# 插件开发指南

开发轻应用插件可按下面四步进行：

1. 轻应用插件Java端开发

2. 轻应用插件浏览器端JS开发

3. 轻应用插件打包

4. 轻应用插件测试

为了更好的介绍如何开发轻应用插件，本文档以**获取手机当前亮度值的轻应用插件**为例详细的介绍开发轻应用插件的四个步骤。

## 插件Java端开发

1. 准备Android开发环境，并新建一个Android Application Project；

2. 下载开发轻应用插件所需Jar包，下载地址：

	<http://sdk.baidu.com/service/view/42>
	
	该链接下载的是一个zip包，包括了轻应用Runtime以及插件所需要的Jar包，结构如下：
	
	![](./images/jarpkg.png)
	
	下载完zip包后，找到“插件开发”，通过**“右键 -> Properties -> Java Build Path -> Libraries -> Add External Jars” **的方式引入Jar包。

	<font color=red>**注意：不能将Jar文件放到项目工程/libs目录下。**</font>
	
3. 新建一个Class（例如Class名为`PluginDemo`）并继承自Plugin，在该类中实现插件Java端的功能，该功能主要实现JS-to-Java的关键方法`execute`，实例如下：

		import com.baidu.sumeru.nuwa.api.Plugin；
		import com.baidu.sumeru.nuwa.api.PluginResult；
		
		public class PluginDemo extends Plugin{	
			public PluginResult execute(String action, JSONArray args, String callbackId) {
			
			}
		}
		
	参数说明：
	
	* **action**
	
		String，该参数在JS端文件中定义，来标识需要Java端完成具体的功能
		
	* **args**
	
		JSONArray，从JS端将Java需要的参数传入
		
	* **callbackId**
	
		String，返回给JS的回调ID
		
	* **return**
		
		PluginResult对象，Java端可以通过PluginResult对象将执行的结果信息反馈到JS端，目前我们提供同步（sync）和异步（async）的方法返回结果信息
	
		**PluginResult**的详细说明如下：
		
		- public PluginResult(Status status)
		- public PluginResult(Status status, String message)
		- public PluginResult(Status status, JSONArray message)
		- public PluginResult(Status status, JSONObject message)
		- public PluginResult(Status status, int i)
		- public PluginResult(Status status, float f)
		- public PluginResult(Status status, boolean b)
		
		**Status定义如下**：
		
			public enum Status {
				NO_RESULT,
				OK,
				CLASS_NOT_FOUND_EXCEPTION,
				ILLEGAL_ACCESS_EXCEPTION,
				INSTANTIATION_EXCEPTION,
				MALFORMED_URL_EXCEPTION,
				IO_EXCEPTION,
				INVALID_ACTION,
				JSON_EXCEPTION,
				ERROR
			}
	
	【实例】

	获取手机当前亮度值的轻应用插件Java端示例如下（实例中以同步方式（sync）反馈信息）：

		import com.baidu.sumeru.nuwa.api.Plugin；
		import com.baidu.sumeru.nuwa.api.PluginResult；
		
		public class PluginDemo extends Plugin{
			public PluginResult execute(String action, JSONArray args, String callbackId) {
    			try {
         			if (action.equals("getBrightness")){
         				//getScreenBrightness()为获取手机当前亮度的函数
             			int brightness = getScreenBrightness();
             			if (brightness != -1){
                 			return new PluginResult(PluginResult.Status.OK, brightness);
						}else{
                 			return new PluginResult(PluginResult.Status.ERROR);
                 		}
         			}
     			}catch(Exception e) {
         			Log.i("SyncPlugin", "Exception: ");
         			e.printStackTrace();
         			return new PluginResult(PluginResult.Status.ERROR, e.getMessage());
     			}
     			return new PluginResult(PluginResult.Status.ERROR, "err unknown");
 			}
 		}
 		
 	如何使用args和callbackId的示例如下：
 	
 		import com.baidu.sumeru.nuwa.api.Plugin；
		import com.baidu.sumeru.nuwa.api.PluginResult；
 		 
 		public class PluginDemo extends Plugin{
			public PluginResult execute(String action, JSONArray args, String callbackId) {
    			try {
					if (action.equals("getBrightness")){
						//getScreenBrightness()为获取手机当前亮度的函数
						int brightness = getScreenBrightness();
						if (brightness != -1){
							PluginResult result = new PluginResult(PluginResult.Status.OK, "");
							result.setKeepCallback(true);
							this.success(result, callbackId);

							PluginResult returnResult = new PluginResult(PluginResult.Status.NO_RESULT);
							returnResult.setKeepCallback(true);
							return returnResult;
						}else{
							return new PluginResult(PluginResult.Status.ERROR, "err");
						}
					}
				}catch(Exception e) {
					Log.i("SyncPlugin", "Exception: ");
					e.printStackTrace();
					return new PluginResult(PluginResult.Status.ERROR, e.getMessage());
				}
		}
 	}	
 
 4. 运行工程，导出生成的.apk文件并重命名（文件位于项目工程`/bin`目录下），示例中插件名为pluginDemo.apk。
 
 	<font color=red>注意：如果插件中用到了native库，请不要将其打包在生成的apk中，而要将其放入插件的libs目录中。</font>

## 插件浏览器端JS开发

创建一个JS文件来实现Plugin在浏览器端的代码。

	//必须首先声明如下语句
	var exec = require('nuwa/exec');
	
	//定义Plugin object
	var pluginDemo = {};
	var pluginDemo2 = {};

	/* 定义Plugin object提供的函数，其中每个函数至少要包含两个参数：sucessCallback和 errorCallback。
	 * 当java端执行成功时，将调用sucessCallback，并将执行结果作为parameter传递给sucessCallback;
	 * 当java端执行失败时，将调用errorCallback，并将错误作为parameter传递给errorCallback
	*/	
	pluginDemo.getBrightness = function(sucessCallback, errorCallback){
		 /*	函数中必须实现exec(successCallback, errorCallback, pluginID, functionName，args)
		  *	@param pluginID: 为插件名实例中为pluginDemo
		  *	@param functionName：为功能action名
		  *	@param args：传入Java端参数
		 */
		 exec(sucessCallback, errorCallback, "pluginDemo", "getBrightness", []);		 
	}
	
	//如果您想从这里传入参数参数到Java端，可使用下面格式
	pluginDemo2.getBrightness = function(sucessCallback, errorCallback){
		exec(sucessCallback, errorCallback, "pluginDemo", "getBrightness", [arg1,ag2]);	 
	}
	
## 插件打包


### 轻应用插件打包工具

轻应用插件打包工具有两种：

- Eclipse 插件形式的GUI打包工具： BaiduRuntimeAutoPackage.jar
- 命令行打包工具：	package.jar

了解轻应用插件打包工具的具体操作，请参考[《轻应用插件打包工具使用手册.docx》](http://s3.bae.baidu.com/clouda/%C7%E1%D3%A6%D3%C3%B2%E5%BC%FE%B4%F2%B0%FC%B9%A4%BE%DF%D3%C3%BB%A7%CA%D6%B2%E120140220.html?sign=MBO:kNSQZNseBHQbLShBl4GbYEYIoKCWqX:p%2FLkEnZKtHvIMGi5YqUnS94NzZk%3D)。

#### 2.3.2 轻应用插件命名规范

轻应用插件由唯一的ID来进行标识，该ID为string类型，其命名规则如下：

- 变量名应由26个大小写字母（A..Z,a..z），10个数字（0..9），和_（下划线）组成。避免使用国际化字符（如中文）。
- 采用首字母小写，其它单词首字母大写的驼峰式命名，如userName，arrayIndex。


## 插件测试

将轻应用插件打包完成后，我们就可以来测试开发的插件，测试方法如下：

1. 按照2.3节的方法完成插件打包（例如打包插件名为：pluginDemo.plg）

2. 从SD卡下载开发的插件

	（1）往/sdcard/debug_plugin_folder目录下push本地插件（以pluginDemo.plg为例）
	
		adb push pluginDemo.plg /sdcard/debug_plugin_folder/

	（2）往/sdcard/debug_plugin_folder/debug_plugin.conf中写入要调试的插件信息
	
		adb shell
		cd /sdcard/debug_plugin_folder
		echo “pluginDemo\n” > debug_plugin.conf  (一个插件对应一行记录)
		
3. 编写插件的测试页面并将测试页面存放在服务器或者本地的SD卡中，插件测试页面的编写方法如下：

	（1）在html页面加入如下监听器实现动态加载插件
	
		<script type="text/javascript">
  			document.addEventListener('runtimeready', function(){
    			nuwa.pm.bindAk('abc');
    			nuwa.pm.absorb("pluginDemo", function (inst){
        			inst.on('error', function(err){
        		});
        
        		inst.on('progress', function(percentage){
        		});
        
        		inst.on('complete', function(){
            
        		});
     		});


	absorb函数的第一个参数为插件的名称，本例中的插件名称为’pluginDemo’，开发者需要指定为自己的插件名称。

	（2）编写消息响应函数
	
		function startDemo() {
  			var successCallback = function(resultText) {
	  		console.log("startDemo successCallback");
	  		console.log("resultText = " + resultText);
  		};
  		var cancelCallback  = function() {
	  		console.log("startDemo cancelCallback ");
  		};
  		var errorCallback  = function(code) {
	  		console.log("startDemo errorCallback ");
	  		console.log("code = " + code);
  		};
  		var plgDemo = nuwa.require('plgDemo');
  	    	plgDemo.start(successCallback, cancelCallback , errorCallback );
  		}
  		
  	（3）在html中添加按钮来触发startDemo函数
  		<body>
			……
  			<button onclick="startDemo()">start demo</button>
    		……
		</body>
4. 通过下面链接获取插件调试的demo

	<http://sdk.baidu.com/service/view/42>
	
	该链接下载的是一个zip包，解压zip包找到下图中红色标注的apk。
	
	![](./images/plugindemo.png)
	
5. 用第4步中的demo加载第三步的测试页面的url（如果测试页面放在服务器上）或者sd卡本地路径，来测试插件是否可以正常使用。