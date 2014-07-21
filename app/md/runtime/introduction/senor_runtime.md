# 高级开发

在《Runtime集成》中我们介绍如何在应用中集成Runtime，上述为最简单的集成方法，我们还为您提供了更多高级的使用方法，您可根据自己的实际需要使用这些方法。


## Runtime初始化接口


基于《集成方案》中我们提供了三套集成方案，我们为这三种方案提供了初始化方法，方法如下：

【实例】

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


（<font color=red>**注意: 初始化操作不能在Application.onCreate里调用**</font>）

实例中的Api Key等信息如何获取将在第5章中做详细的介绍。

## 调起Runtime其他界面

在Runtime中不仅可以直接调起轻应用的运行界面，还可以直接调起轻应用设置界面。


#### 调起Runtime设置界面

	LightAppRuntime.launchSettings(Context context)；
	
参数：

* context

	context是上下文对象