# Runtime集成

您只需要下面几步就可以将Runtime集成到您的应用中：

1. 选择集成方案，并将集成Runtime方案对应的Jar包添加应用工程；

2. 配置AndroidManifest.xml

3. 配置资源文件

4. 配置proguard的混淆文件

5. 调用初始化接口

6. 调起直达号 Runtime GUI

7. 实现Runtime登陆接口


下面我们将详细介绍这几个步骤。

## 集成Runtime Jar包到应用工程

### 获取Runtime Jar包

首先您需要选择Runtime的两种集成方案中的一种，选择好集成方案后，
<a href="/assets/resource/Baidu-Runtime-Android-2.7.0.001035.zip">点击此处下载相应的zip文件</a>

该链接下载的是一个zip包，包括了Runtime以及插件所需要的Jar包。

### 将Runtime Jar添加到工程

根据集成方案选择相应的Jar包，下载完成后，首先打开需要集成Runtime的Android项目工程，然后将在上一步获取的Jar包拷贝到工程目录libs目录下。

动态本地：


<img src="/md/images/runtime/2.2.1.1.png" height="450px">

动态远程：


<img src="/md/images/runtime/2.2.1.2.png" height="450px">

## 配置AndroidManifest.xml 

当您已经将Runtime添加到项目工程中后，我们需要对工程AndroidManifest.xml进行配置，配置内容如下：

1. 申请权限

2. 声明Runtime

3. 声明百度Push服务

4. 根据实际需要声明Runtime组件

下面将详细介绍AndroidManifest.xml的四个步骤。

（`下面的代码可直接复制到您项目工程AndroidManifest.xml中，步骤中“必须”表示是必要步骤，不可省略`）

【实例】

    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
       package="com.baidu.lightapp.runtime.drdemotest"
       android:versionCode="1"
       android:versionName="1.0" >

    <!-- 设置Android 版本号 Runtime目前只支持Android 2.3以上版本-->
    <uses-sdk 
        android:minSdkVersion="9" 
        android:targetSdkVersion="18" />

    <!-- 申请Android权限（部分） -->
    <!-- 开发者可以根据实际需要自由的添加Runtime组件，如果您使用了这些组件就需要申请组件对应的权限，如果没有申请相应的权限会导致组件不可用（必须）   -->
    <uses-permission android:name="android.permission.INTERNET" /> 
    <uses-permission android:name="android.permission.WRITE_SETTINGS" /> 
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> 
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /> 
    <uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT" /> 
    <uses-permission android:name="android.permission.READ_PHONE_STATE" /> 
    <uses-permission android:name="android.permission.RECEGIVE_BOOT_COMPLETED" /> 
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
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />  
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" /> 
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
    <uses-permission android:name="android.permission.REORDER_TASKS" />
    <uses-permission android:name="android.permission.GET_TASKS" />
    <uses-permission android:name="com.android.launcher.permission.READ_SETTINGS" />

    <!--  在AndroidMainifest.xml中配置lightapp_apikey，必须配置到application节点下(必须) -->
    <!--温馨提示：开发者需要填入开发者中心获取的API Key，获取API Key可以参考《如何获取Api Key》-->
        <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <meta-data
            android:name="lightapp_apikey"
            android:value="aabbccddeeff" />
        <meta-data
            android:name="runtime_user_agent"
            android:value="custome_user_agent" />

        <activity
            android:name="com.baidu.lightapp.runtime.drdemotest.MainActivity"
            android:label="@string/app_name"
            android:screenOrientation="portrait" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>

      <!--  完成Android版本和申请权限配置后，接下来需要声明Runtime，完成Runtime的theme、Activity、service等配置(必须)  -->

         </activity>
         <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppPlayerActivity"
            android:configChanges="orientation|keyboardHidden|screenSize"
            android:exported="true"
            android:label="@string/app_name"
            android:launchMode="singleTask"
            android:process=":bdruntime"
            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" >
            <intent-filter>
                <action android:name="com.baidu.lightapp.runtime.start" />
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
        </activity>
        <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppActivity"
            android:label="@string/app_name"
            android:launchMode="standard"
            android:process=":bdruntime"
            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Light" >
        </activity>
        <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppConfigchangesActivity"
            android:configChanges="orientation|keyboardHidden|screenSize"
            android:label="@string/runtime_app_name"
            android:process=":bdruntime" >
        </activity>
        <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppTabActivity"
            android:label="@string/app_name"
            android:launchMode="standard"
            android:process=":bdruntime"
            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Light" >
        </activity>
        <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppPreferenceActivity"
            android:label="@string/app_name"
            android:launchMode="standard"
            android:process=":bdruntime"
            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Light" >
        </activity>
        <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppTransparentActivity"
            android:label="@string/app_name"
            android:launchMode="standard"
            android:process=":bdruntime"
            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" >
        </activity>
	
	<!--  根据推送消息来启动Runtime -->
	    <activity
            android:name="com.baidu.sumeru.lightapp.activity.LightAppEnterActivity"
            android:label="@string/app_name"
            android:launchMode="standard"
            android:process=":bdruntime"

            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Translucent" >
            
            <!-- start runtime when clouda call push's startActivity-->
            <intent-filter>
                <action android:name="com.baidu.lightapp.runtime.start" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="com.baidu.lightapp.runtime.dr_3"/>
            </intent-filter>
            
        </activity>
    <!--  如果您不希望Runtime进程影响到您应用的内存占用，可在上面声明的runtime所有activity和service中添加android:process=":bdruntime"选项  -->

        <service
            android:name="com.baidu.location.f"
            android:enabled="true"
            android:process=":remote" >
            <intent-filter>
                <action android:name="com.baidu.location.service_v2.2" >
                </action>
            </intent-filter>
        </service>
        <service
            android:name="com.baidu.sumeru.lightapp.service.PluginServiceProxy"
            android:process=":bdruntime" >
            <intent-filter>
                <action android:name="com.baidu.sumeru.lightapp.plugin.service" />
            </intent-filter>
            <meta-data
                android:name="isPluginPublic"
                android:value="true" />
          </service> 

     <!--  如果您的项目工程中已经在AndroidManifest.xml声明或者集成了百度Push，直接使用即可，但是需确保百度Push的版本是4.1或者以上。如果您的项目工程中没有集成百度Push服务，请添加以下的service（必须） -->

           <service
            android:name="com.baidu.android.pushservice.PushService"
            android:exported="true"
            android:process=":bdservice_v1" >
            <intent-filter>
                <action android:name="com.baidu.android.pushservice.action.PUSH_SERVICE" />
            </intent-filter>
        </service>

        <receiver
            android:name="com.baidu.sumeru.lightapp.sdk.PushReceiver"
            android:process=":bdruntime" >
            <intent-filter>
                <!-- 接收push消息 -->
                <action android:name="com.baidu.android.pushservice.action.SDK_MESSAGE" />
            </intent-filter>
            <!-- start runtime when clouda call push sendOrderBroadcast to host with runtime -->
            <intent-filter android:priority="2">
                <action android:name="com.baidu.lightapp.runtime.start" />
            </intent-filter>
        </receiver>
        <!-- push必须的receviver和service声明 -->
        <receiver
            android:name="com.baidu.android.pushservice.PushServiceReceiver"
            android:process=":bdservice_v1" >
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
                <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
                <action android:name="com.baidu.android.pushservice.action.notification.SHOW" />
                <action android:name="com.baidu.android.pushservice.action.media.CLICK" />
            </intent-filter>
        </receiver>
        <receiver
            android:name="com.baidu.android.pushservice.RegistrationReceiver"
            android:process=":bdservice_v1" >
            <intent-filter>
                <action android:name="com.baidu.android.pushservice.action.METHOD" />
                <action android:name="com.baidu.android.pushservice.action.BIND_SYNC" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.PACKAGE_REMOVED" />
                <data android:scheme="package" />
            </intent-filter>
        </receiver>

     <!--  Runtime中提供了很多的组件来方便调用，可以按照需求来选择调用以下组件 （可选）  -->

     <!--  社会化分享组件  -->
        <activity
            android:name="com.baidu.cloudsdk.social.oauth.SocialOAuthActivity"
            android:configChanges="keyboardHidden|orientation"
            android:exported="true"
            android:screenOrientation="portrait"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" >
        </activity>
        <activity
            android:name="com.baidu.cloudsdk.social.share.handler.LocalShareActivity"
            android:launchMode="singleTask"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" >
        </activity>
        <activity
        android:name="com.baidu.cloudsdk.social.share.handler.QQFriendShareReceiverActivity"
            android:launchMode="singleTask" >
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />

                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />

                <data android:scheme="tencent100358052" />
            </intent-filter>
        </activity>

        <!-- 用户微信回调的 activity -->
        <activity
            android:name="com.baidu.lightapp.plugin.socialshare.wxapi.WXEntryActivity"
            android:exported="true"
            android:label="@string/app_name"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" >
        </activity>

     <!--  社会化分享插件结束   -->

        <!-- 我的银行卡 -->
        <activity
            android:name="com.baidu.cards.ui.MyCardsActivity"
            android:configChanges="keyboardHidden|navigation|orientation"
            android:excludeFromRecents="true"
            android:screenOrientation="portrait"
            android:theme="@style/ebpay_Theme_Activity_Welcome"
            android:windowSoftInputMode="stateHidden" />

       </application>
    </manifest>

到此，AndroidManifest.xml配置完成。

## 配置资源文件

上面的代码开发完成后，我们需要下载GUI所需的资源，<a href="/assets/resource/DynamicRemoteRes.zip">点击下载</a>

解压压缩包，将压缩包中的资源拷贝到工程的根目录下,下载的资源文件如下：

<img src="/md/images/runtime/2.2.3.png">

## 配置proguard的混淆文件（如果需要混淆程序，那是必须的）

**注意事项**：如果您需要对工程做混淆处理，请过滤掉下面四个Package下所有的class和第三方库

    com.baidu.sumeru.lightapp
    com.baidu.sumeru.nuwa
    com.baidu.lappgui
    com.baidu.android.silentloader
    需要过滤的第三方库：
    zeus-sdk
    android.net.**
    android.webkit.**
    com.baidu.htmlNotification.**
    com.baidu.webkit.sdk.**
    frontia
    com.baidu.android.pushservice.**
    com.baidu.android.silentupdate.**
    com.baidu.frontia.**
    com.baidu.lightapp.**
    com.baidu.loctp.str.**
    galaxy
    android.content.pm.**
    com.baidu.android.common.**

## 调用初始化接口

Runtime的Jar包已经添加到项目工程并完成了AndroidManifest.xml的配置，下面我们来实现在应用调起Runtime，在调用任何Runtime接口之前，需要`先进行初始化操作`，初始化的方法需要根据您选择的集成方案来选择，**这里以动态远程方案为例**。


初始化操作很简单，

*  在AndroidMainifest.xml中配置apikey，必须配置到application节点下：

        <application android:allowBackup="true" 
        android:icon="@drawable/ic_launcher" 
        android:label="@string/app_name">

        <meta-data  android:name="lightapp_apikey" android:value="aabbccddeeff"/>

> 温馨提示：如果是开发版本，apiKey的内容默认值必须是字符，而不能是一串数字，如果是正式版就需要填入开发者中心获取的API Key，如何获取API Key可以参考[如何获取Api Key](./get_api_key)


* 在您想初始化Runtime的地方配置回调接口：

        //在AndroidMainifest.xml中配置apikey
        LightAppRuntime.initialize(getApplicationContext(),mLoadListener);
        private LoadListener mLoadListener = new LoadListener() {
            @Override
            public void onProgress(int progress) {
            }

            @Override
            public void onFinished(boolean success, String errorMessage) {
                 LightAppRuntime.launchAppStore(MainActivity.this);
            }
        };

errorMessage的列表如下：

错误代码 | 说明
------------ | ------------- 
ERROR_MESSAGE_NO_ERROR | 没有错误
ERROR_MESSAGE_NOT_INITIALIZED | 没有调用初始化接口
ERROR_MESSAGE_ALREADY_INITIALIZED | 已经调用了初始化接口
ERROR_MESSAGE_NO_SDCARD | 没有sdcard
ERROR_MESSAGE_RUNTIME_DUMP_FAILED_OR_ILLEGAL_SIGNED | 动态本地方案拷贝runtime文件出现问题,可能原因有签名失败,需要从服务器升级runtime文件
ERROR_MESSAGE_NETWORK_DISCONNECTED | 网络断开
ERROR_MESSAGE_WIFI_DISCONNECTED | wifi断开
ERROR_MESSAGE_CANCEL_UPDATE_TASK | 需求升级任务
ERROR_MESSAGE_RUNTIME_APK_LOCALVERSION_EQUAL_SERVERVERSION  | runtime文件无需下载,已经是最新版本
ERROR_MESSAGE_REQUEST_RUNTIME_APK_VERSION_FROM_SERVER_FAILED | 无法获取下载runtime文件地址
ERROR_MESSAGE_RUNTIME_APK_DOWNLOADING_OCCUR_ERROR | 下载过程中出现错误
ERROR_MESSAGE_RUNTIME_ZIP_UNZIPING_OCCUR_ERROR | 解压runtime文件出现错误

##  调起Runtime GUI

完成Runtime初始化后，我们就可以在自己应用中调起Runtime GUI，调起接口如下：

1.调起直达号商店页面

     LightAppRuntime.launchAppStore(Context context);

参数说明：

* context

	context是上下文对象

2.调起指定的URL

    LightAppRuntime.launchLightApp(Context context,String url);

参数说明：

* context

	context是上下文对象
	
* url

	string 类型，具体主页地址

3.指定调起的网页地址

    LightAppRuntime.launchLightApp(Context context,String url);

参数说明：

* context

	context是上下文对象
	
* url

	string 类型，具体主页地址

【实例】

    public class MainActivity extends Activity {

    private TextView mProgressView;
    
	  @Override
 	  protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
        mProgressView = (TextView) findViewById(R.id.progress);
		init();
	}

	private void init() {
		LightAppRuntime.initialize(getApplicationContext(),mLoadListener);
	}
	
	private LoadListener mLoadListener = new LoadListener() {
        @Override
        public void onProgress(int progress) {
            mProgressView.setText(String.valueOf(progress));
        }

        @Override
        public void onFinished(boolean success, String errorMessage) {
            if (success) {
            	showLightApp(true);
            } else {
                if (LightAppRuntime.isRuntimeAvailable(getApplicationContext())) {
                	 showLightApp(true);
                } else {
                    onLightAppStarted();
                }
            }
        }
		private void showLightApp(boolean isNewScheme) {
	            LaunchLightAppThread launchThread = new LaunchLightAppThread(
	                    isNewScheme, "http://m.baidu.com/lightapp");
	            launchThread.start();
		}
    };

    private class LaunchLightAppThread extends Thread {
        private String url = "";

        public LaunchLightAppThread(boolean aIsNewScheme, String aUrl) {
            url = aUrl;
        }

        @Override
        public void run() {
            super.run();
            if (!MainActivity.this.isFinishing()) {
                LightAppRuntime.launchLightApp(getApplicationContext(), url);
                MainActivity.this.finish();
            }
        }
    }
    
    protected void onLightAppStarted() {
        this.finish();
      }
    }

当这些操作完成后我们可以运行一下工程，如果点击Button后可以看到下面的界面，表示您已经成功调起Runtime GUI。

<img src="/md/images/runtime/1.1.3.png" height="450px">

##  实现Runtime登陆接口


当您调起了Runtime GUI后，你会发现在GUI中有的界面是与用户相关的展现，例如"我的直达号"等，当用户从菜单的设置中登陆后，“我的直达号中会保留用户之前订阅过的直达号，可以使用下面的方法实现登陆功能。

1. 编写一个登录类，实现com.baidu.sumeru.lightapp.channel.IRuntimeChannel；

	这个登陆类需要开发者自己完成开发，为了方便您开发可参考我们在Demo中提供相应的实现方法，具体的实现方法请查看Demo工程中的`LoginImpl.java`文件。

2. 在完成登陆类的开发后（例如登陆类取名为`Login`），就可在工程的`Application`中使用下面的代码来设置登陆。

        IRuntimeChannel login = new LoginImpl();

        LoginManager.getInstance().setLoginImpl(login);

到此，整个Runtime的集成就完成了。