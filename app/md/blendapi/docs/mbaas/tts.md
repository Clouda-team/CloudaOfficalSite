### TTS ###
    clouda.mbaas.tts

文本发音类

**方法：**

- say(word, options)

#### say ####
    say(word, options)

**功能描述：**

启动文本语音功能

**参数说明：**

- word： string类型，文本信息
- options： object类型，其中包括以下参数：

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
            <td>操作成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(data){}</td>            
            <td>操作失败，返回错误码信息</td>  
        </tr>
        <tr>
            <td>type</td>
            <td>number</td>            
            <td>朗读文本的语音类型：<br>
            - clouda.mbaas.tts.TYPE_DICT_US ： 美式英语发音<br>
            - clouda.mbaas.tts.TYPE_DICT_UK ： 英式英语发音<br>
            - clouda.mbaas.tts.TYPE_DICT_ZH ： 中文发音<br>
        </td>  
        </tr>
    </tbody>
</table>