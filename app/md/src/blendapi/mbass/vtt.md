## VTT ##

    Blend.mbaas.vtt

语音识别服务
开发轻应用前，需要先申请语音服务的ak，sk和pid，并执行初始化init方法

**方法：**

- init(ak,sk,pid)
- showDialog(options)

<h3 class="vtt">init</h3>

	init(ak,sk,pid)

**功能描述：**

初始化所申请的ak，sk，pid等参数，然后方可使用语音识别服务

**参数说明：**

- ak ：所申请的语音服务的ak
- sk ：所申请的语音服务的sk
- pid：所申请的语音服务的pid


<h3 class="vtt">showDialog</h3>

	showDialog(options)

**功能描述：**

显示语音识别对话框，实现语音输入识别

**参数说明：**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>            
            <td>识别成功，data是对象，其中voice_result 字段对应的是识别的结果，包括录音时间，是别的文字字符串等</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>识别失败，result为1表示识别失败，error_code 表明不同的错误类型。<br>
     
            </td>  
        </tr>
        <tr>
            <td>speechMode</td>
            <td>int</td>            
            <td>设置识别模式，可选，其参数如下：<br>
            - Blend.mbaas.VTT_SPEECHMODE.SEARCH ：搜索模式 （默认）<br>
            - Blend.mbaas.VTT_SPEECHMODE.INPUT  ：文本输入模式
        </td>  
        </tr>
        <tr>
            <td>filename</td>
            <td>string</td>            
            <td>语音识别保存的文件名（可选）</td>  
            </td>  
        </tr>
        <tr>
            <td>uuid</td>
            <td>string</td>            
            <td>语音识别标识的uuid（可选）</td>  
        </tr>
        <tr>
            <td>sampleRate</td>
            <td>int</td>            
            <td>语音识别录音采样率（可选），其参数如下：<br>
            - Blend.mbaas.VTT_RATE.K8 ： （采样率8k）<br>
            - Blend.mbaas.VTT_RATE.K16  ：（采样率16k）</td>  
        </tr>
    </tbody>
</table>
