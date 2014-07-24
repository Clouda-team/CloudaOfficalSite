# Runtime集成

您只需要下面五步就可以将Runtime集成到您的应用中：

1. 选择集成方案，并将集成Runtime方案对应的Jar包添加应用工程；

2. 配置AndroidManifest.xml

3. 调用初始化接口

4. 调起轻应用 Runtime GUI

5. 实现Runtime登陆接口


下面我们将详细介绍这四个步骤。

## 集成Runtime Jar包到应用工程

### 获取Runtime Jar包

首先您需要选择Runtime的集成方案，Native和Remote中的一种，选择好集成方案后下载相应的Jar包，现在地址如下：

<http://sdk.baidu.com/service/view/42>

该链接下载的是一个zip包，包括了Runtime以及插件所需要的Jar包，结构如下：
	
![](/md/images/jarpkg.png)

### 将Runtime Jar添加到工程

根据集成方案选择相应的Jar包，下载完成后，首先打开需要集成Runtime的Android项目工程，然后将在上一步获取的Jar包拷贝到工程目录`libs`目录下。

Jar中的`libext.Jar`是Runtime依赖的`zeus-sdk`、`frontia`、`galaxy`这三个库的集合，在添加libext.Jar时需要注意一下事项：

* 如果您的工程中已经有`zeus-sdk`、`frontia`、`galaxy`这三个库，则不需要添加libext.Jar到您的工程中

* 如果您的工程完全没有这个三个库，则直接将libext.Jar添加您的工程目录`libs`目录下

* 如果您的工程中只包括这三个库中的部分库

	* 使用`libext.Jar`替换独立的库，并将独立的库从工程中删除

	* 单独下载缺少的库
	
		* 动态本地
		
		<img src="/md/images/dynamic_local.png" height="450px">		
	
		* 动态远程
		
		<img src="/md/images/dynamic_remote.png" height="300px">
			
		* 静态方案
		
		<img src="/md/images/static.png" height="300px">


## 配置AndroidManifest.xml 

当您已经将Runtime添加到项目工程中后，我们需要对工程AndroidManifest.xml进行配置，配置内容如下：

1. 申请权限

2. 声明Runtime

3. 声明百度Push服务

4. 根据实际需要声明Runtime组件

下面将详细介绍AndroidManifest.xml的四个步骤。

（`下面的代码可直接复制到您项目工程AndroidManifest.xml中，下面步骤中“必须”表示是必要步骤，不可省略`）


### 申请权限(必须)

Runtime**目前只支持Android 2.3以上版本**，请您再申请权限之前确保Android的版本在2.3或者以上版本。

开发者可以根据实际需要自由的添加Runtime组件，如果您使用了这些组件就需要申请组件对应的权限，如果没有申请相应的权限会导致组件不可用。

【实例】

	<!-- 设置Android 版本号 Runtime目前只支持Android 2.3以上版本-->
	<uses-sdk 
    	android:minSdkVersion="9" 
    	android:targetSdkVersion="18" />
	
	<!-- 申请Android权限（部分） -->
	<uses-permission android:name="android.permission.INTERNET" /> 
	<uses-permission android:name="android.permission.WRITE_SETTINGS" /> 
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /> 
	<uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT" /> 
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" /> 
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 
	<uses-permission android:name="android.permission.WRITE_SETTINGS" /> 
	<uses-permission android:name="android.permission.READ_PHONE_STATE" /> 
	<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" /> 
	<uses-permission android:name="android.permission.VIBRATE" /> 
	<uses-permission android:name="android.permission.ACCESS_DOWNLOAD_MANAGER" /> 
	<uses-permission android:name="android.permission.DOWNLOAD_WITHOUT_NOTIFICATION" /> 
	<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" /> 
	<uses-permission android:name="android.permission.DISABLE_KEYGUARD" /> 
	<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" /> 
	<uses-permission android:name="android.permission.RECORD_AUDIO" /> 
	<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS" /> 
	<uses-permission android:name="android.hardware.sensor.accelerometer" /> 
	<uses-permission android:name="android.permission.CAMERA" /> 
	<uses-permission android:name="android.permission.READ_CONTACTS" /> 
	<uses-permission android:name="android.permission.WRITE_CONTACTS" /> 
	<uses-permission android:name="android.permission.GET_ACCOUNTS" />  
	<uses-permission android:name="android.permission.WAKE_LOCK" />  
	<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" /> 
	<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
	<uses-permission android:name="android.permission.REORDER_TASKS" />
	

###  声明Runtime（必须）

完成Android版本和申请权限配置后，接下来需要声明Runtime，完成Runtime的theme、Activity、service等配置。

【实例】

	<application 
    	android:allowBackup="true" android:icon="@drawable/ic_launcher" android:label="@string/app_name" >
    	<activity android:name="com.baidu.sumeru.lightapp.activity.LightAppPlayerActivity"
        	android:exported="true"
        	android:launchMode="singleTask"
        	android:theme="@android:style/Theme.Light" >
    	</activity>
    	<activity android:name="com.baidu.sumeru.lightapp.activity.LightAppActivity"
        	android:launchMode="standard"
        	android:theme="@android:style/Theme.Light" > 
    	</activity> 
    	<activity android:name="com.baidu.sumeru.lightapp.activity.LightAppTabActivity"
        	android:launchMode="standard"
        	android:theme="@android:style/Theme.Light" > 
    	</activity> 
    	<activity android:name="com.baidu.sumeru.lightapp.activity.LightAppPreferenceActivity"
        	android:launchMode="standard"
        	android:theme="@android:style/Theme.Light" > 
    	</activity>
    	<activity android:name="com.baidu.sumeru.lightapp.activity.LightAppTransparentActivity"
        	android:launchMode="standard"
        	android:theme="@android:style/Theme.Light" > 
    	</activity>
    	<activity       android:name="com.baidu.sumeru.lightapp.activity.LightAppConfigchangesActivity"
        	android:screenOrientation="portrait"
        	android:configChanges="orientation|keyboardHidden|screenSize"
        	android:theme="@android:style/Theme.Light">
    	</activity>
    	<activity
        	android:name="com.baidu.lappgui.LappHostActivity"
        	android:screenOrientation="portrait" 
        	android:theme="@android:style/Theme.Light">
    	</activity>

    	<service android:name="com.baidu.sumeru.lightapp.service.PluginServiceProxy">
        	<intent-filter>
            	<action android:name="com.baidu.sumeru.lightapp.plugin.service" />
        	</intent-filter>
        	<meta-data android:name="verCode" android:value="1" /> 
    	</service> 
    	
如果您不希望Runtime进程影响到您应用的内存占用，可在上面声明的runtime所有activity和service中添加android:process=":bdruntime"选项。


### 声明Push（如果需要支持push服务，那么是必须）

如果您的项目工程中已经在AndroidManifest.xml声明或者集成了百度Push，直接使用即可，但是需确保百度Push的版本是`4.1`或者以上。

如果您的项目工程中没有集成百度Push服务，请按照下面的方法修改AndroidManifest.xml：

		<service android:name="com.baidu.android.pushservice.PushService"
        	android:exported="false"
        	android:process=":bdservice_v1"/> 
    	<receiver android:name="com.baidu.sumeru.lightapp.sdk.PushReceiver">
        	<intent-filter>
        	<!-- 接收push消息 -->
            	<action android:name="com.baidu.android.pushservice.action.SDK_MESSAGE" />
            	<action android:name="com.baidu.android.pushservice.action.LAPP_MESSAGE" />
            	<!-- 接收bind、setTags等method的返回结果 -->
            	<action android:name="com.baidu.android.pushservice.action.sdk.RECEIVE" />
            	<action android:name="com.baidu.android.pushservice.action.lapp.RECEIVE" />
            	<!-- 可选。接受通知点击事件，和通知自定义内容 -->
            	<action
            android:name="com.baidu.android.pushservice.action.notification.CLICK" />
        	</intent-filter>
        	<intent-filter>
            	<action android:name="android.intent.action.PACKAGE_REMOVED"/>
            	<data android:scheme="package" />
        	</intent-filter>
    	</receiver>
    	<receiver android:name="com.baidu.android.pushservice.PushServiceReceiver"
        android:process=":bdservice_v1">
        	<intent-filter>
            	<action android:name="android.intent.action.BOOT_COMPLETED" />
            	<action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
            	<action android:name="com.baidu.android.pushservice.action.notification.SHOW" />
            	<action android:name="com.baidu.android.pushservice.action.media.CLICK" />
        	</intent-filter>
    	</receiver>
    	<receiver android:name="com.baidu.android.pushservice.RegistrationReceiver"
        	android:process=":bdservice_v1">
        	<intent-filter>
            	<action android:name="com.baidu.android.pushservice.action.METHOD" />
            	<action android:name="com.baidu.android.pushservice.action.BIND_SYNC" />
        	</intent-filter>
        	<intent-filter>
            	<action android:name="android.intent.action.PACKAGE_REMOVED"/>
            	<data android:scheme="package" />
        	</intent-filter>
    	</receiver>
    	
    	<!-- 社会化登陆 -->
		<activity android:name="com.baidu.cloudsdk.social.oauth.SocialOAuthActivity" 
    		android:exported="true" 
    		android:screenOrientation="portrait" 
    		android:configChanges="keyboardHidden|orientation" 
    		android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"> 
		</activity> 
	</application>

### 声明组件（可选）

在Runtime中还提供了很多的组件来方便开发者调用，您可以按照下面的方法来调用这些组件（您可以根据应用的实际需要选择添加下面的组件Activity）：

	<!-- 分享 --> 
	<activity android:name="com.baidu.cloudsdk.social.share.handler.LocalShareActivity" 
    	android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" 
    	android:launchMode="singleTask"> 
	</activity> 
	<!-- QQ好友分享 -->
	<activity 	android:name="com.baidu.cloudsdk.social.share.handler.QQFriendShareReceiverActivity" 
    android:launchMode="singleTask"> 
    	<intent-filter> 
        	<action android:name="android.intent.action.VIEW" />
        	<category android:name="android.intent.category.DEFAULT" /> 
        	<category android:name="android.intent.category.BROWSABLE" /> 
        	<data android:scheme="tencent100358052" /> 
    	</intent-filter> 
	</activity> 
	<!-- 用户微信回调的 activity --> 
	<activity android:name="com.baidu.lightapp.plugin.socialshare.wxapi.WXEntryActivity" 
    	android:label="@string/app_name"   
    	android:exported="true" 
    	android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"> 
	</activity>
	<!-- 我的银行卡 -->
	<activity
    	android:name="com.baidu.cards.ui.MyCardsActivity"
    	android:configChanges="keyboardHidden|navigation|orientation"
    	android:excludeFromRecents="true"
    	android:screenOrientation="portrait"
    	android:theme="@style/ebpay_Theme_Activity_Welcome"
    	android:windowSoftInputMode="stateHidden" /> 
	<service     
		android:name="com.baidu.location.f" 
    	android:enabled="true" 
    	android:process=":remote"> 
    	<intent-filter> 
        	<action android:name="com.baidu.location.service_v2.2" > </action> 
    	</intent-filter> 
	</service>

到此，AndroidManifest.xml配置完成。


## 调用初始化接口

Runtime的Jar包已经添加到项目工程并完成了AndroidManifest.xml的配置，下面我们来实现在应用调起Runtime，在调用任何Runtime接口之前，需要`先进行初始化操作`，初始化的方法需要根据您选择的集成方案来选择，**这里以静态方案为例**。

初始化操作很简单，

1. 在AndroidMainifest.xml中配置apikey，必须配置到application节点下：

	
		<application android:allowBackup="true" 
			android:icon="@drawable/ic_launcher" 
			android:label="@string/app_name">
			
			<meta-data  android:name="lightapp_apikey" android:value="aabbccddeeff"/>
			
> 温馨提示：如果是开发版本，apiKey的内容默认值必须是字符，而不能是一串数字，如果是正式版就需要填入开发者中心获取的API Key，如何获取API Key可以参考[如何获取Api Key](./get_api_key)

2. 在您想初始化Runtime的地方加入以下代码：

		//在AndroidMainifest.xml中配置apikey
 		LightAppRuntime.initialize(getApplicationContext(), apiKey, mLoadListener);
		private LoadListener mLoadListener = new LoadListener() {
   			@Override
   			public void onProgress(int progress) {
   			}

   			@Override
   			public void onFinished(boolean success, String errorMessage) {
            	startLightApp(getIntent());
   			}
		};


errorMessage的列表如下：

错误代码 | 说明
------------ | ------------- 
ERROR_MESSAGE_NO_ERROR | 没有错误
ERROR_MESSAGE_NOT_INITIALIZED | 没有调用初始化接口
ERROR_MESSAGE_ALREADY_INITIALIZED | 已经调用了初始化接口
ERROR_MESSAGE_NO_SDCARD | 没有sdcard
ERROR_MESSAGE_APIKEY_EMPTY | apiKey为空,需要在AndroidManifest.xml中注册
ERROR_MESSAGE_RUNTIME_DUMP_FAILED_OR_ILLEGAL_SIGNED | 动态本地方案拷贝runtime文件出现问题,可能原因有签名失败,需要从服务器升级runtime文件
ERROR_MESSAGE_NETWORK_DISCONNECTED | 网络断开
ERROR_MESSAGE_WIFI_DISCONNECTED | wifi断开
ERROR_MESSAGE_CANCEL_UPDATE_TASK | 需求升级任务
ERROR_MESSAGE_RUNTIME_APK_LOCALVERSION_EQUAL_SERVERVERSION  | runtime文件无需下载,已经是最新版本
ERROR_MESSAGE_REQUEST_RUNTIME_APK_VERSION_FROM_SERVER_FAILED | 无法获取下载runtime文件地址
ERROR_MESSAGE_RUNTIME_APK_DOWNLOADING_OCCUR_ERROR | 下载过程中出现错误
ERROR_MESSAGE_RUNTIME_ZIP_UNZIPING_OCCUR_ERROR | 解压runtime文件出现错误

<font color=red>**注意: 初始化操作不能在Application.onCreate里调用**</font>

## 调起Runtime GUI

完成Runtime初始化后，我们就可以在自己应用中调起Runtime GUI，调起接口如下：

	LightAppRuntime.launchLightApp(Context context, String url);
	
参数说明：

* context

	context是上下文对象
	
* url

	string 类型，具体主页地址
	

【实例】

	public class MainActivity extends Activity {
    	@Override
    	protected void onCreate(Bundle savedInstanceState) {
        	super.onCreate(savedInstanceState);
        	setContentView(R.layout.activity_main);
        	init();                           
    	}
    	private void init(){
        	LightAppRuntime.initialize(getApplicationContext(), apiKey, mLoadListener);
    	}

    	private LoadListener mLoadListener = new LoadListener() {
            @Override
            public void onProgress(int progress) {
            }
               
            @Override
            public void onFinished(boolean success, String errorMessage) {                   
                 LightAppRuntime.launchLightApp(MainActivity.this, "http://m.baidu.com");
            }
    	};
	}

上面的代码开发完成后，我们可以运行一下工程，如果点击Button后可以看到下面的界面，表示您已经成功调起Runtime GUI。

<img src="/md/images/RuntimeGUI.jpeg" height="400px">	

##  实现Runtime登陆接口

当您调起了Runtime GUI后，你会发现在GUI中有的界面是与用户相关的展现，例如"我的轻应用"等，为了方便用户登陆并使轻应用与您的应用登陆状态一致，可以使用下面的方法实现登陆功能。

1. 编写一个登录类，实现com.baidu.sumeru.lightapp.channel.IRuntimeChannel；

	这个登陆类需要开发者自己完成开发，为了方便您开发可参考我们在Demo中提供相应的实现方法，具体的实现方法请查看Demo工程中的`LoginImpl.java`和`LightAppAutjDialog.java`两个文件。
	
	文件下载地址：
	
	<http://sdk.baidu.com/service/view/42>

2. 在完成登陆类的开发后（例如登陆类取名为`Login`），就可在工程的`Application`中使用下面的代码来设置登陆。

		IRuntimeChannel login = new Login();
		
		LoginManager.getInstance().setLoginImpl(login);
	
	
到此，整个Runtime的集成就完成了。


<font color=red>**注意事项：如果您需要对工程做混淆处理，请过滤掉下面四个Package下所有的class和第三方库**</font>

* com.baidu.sumeru.lightapp
* com.baidu.sumeru.nuwa
* com.baidu.lappgui
* com.baidu.android.silentloader

需要过滤的第三方库：

- zeus-sdk
	* android.net.**
	* android.webkit.**
	* com.baidu.htmlNotification.**
	* com.baidu.webkit.sdk.**
- frontia
	* com.baidu.android.pushservice.**
	* com.baidu.android.silentupdate.**
	* com.baidu.frontia.**
	* com.baidu.lightapp.**
	* com.baidu.loctp.str.**
- galaxy
	* android.content.pm.**
	* com.baidu.android.common.**