# 常见问题

## 关于startActivity
 
如果您想在插件的非Activity里启动Activity，可以使用NuwaInterface提供的 startActivity接口。

NuwaInterface提供了2个接口，带Class参数的是用来打开插件里定义的Activity，另一个用来打开系统、其他 App 里定义的Activity。

  - 在插件的 Activity 里启动 Activity，直接使用父类提供的带 IPlugin 参数的 startActivity 接口
  - 插件里实现 Acitivty，必须从 runtime-framework 提供的基类继承下来，包括:
  
    - com.baidu.sumeru.lightapp.activity.PluginActivityBase (Activity)
    - com.baidu.sumeru.lightapp.activity.PluginPreferenceActivityBase (PreferenceActivity) 
    - com.baidu.sumeru.lightapp.activity.PluginTransparentActivityBase (透明背景色Activity)
    - com.baidu.sumeru.lightapp.activity.PluginConfigChangesActivityBase (横竖屏切换Activity)

  - 插件里只能访问com.baidu.sumeru.nuwa.api这个pkg下的类
    
    - Plugin
    
    - PluginResult
    
  - 插件里实现Receiver,必须继承BroadcastReceiverBase类
    
    	

<font color=red>注意：插件中布局中请使用R方式设置，且布局文件中不得出现自定义类。</font>

## 关于startActivityForResult 

1. 若需要在插件中调起 activity 并获取返回结果，可采用如下语句：

	    Intent intent = new Intent();
	    intent.set***   //设置intent参数	    
	    //nuwa为Plugin抽象父类中定义的变量，类型为NuwaInterface。可以通过nuwa.getActivity()来获取插件运行时的Context
	    nuwa.startActivityForResult(this, intent, REQUET_CODE);

	然后重写 Plugin 父类中定义的方法，采用异步回调将返回结果传回 JS
 
	    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
	    	//……
	    }

2. 若需要在 Plugin 开发中使用 Handler，须首先调用 Looper.prepare 。