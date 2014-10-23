### MediaPlayer ###
    clouda.mbaas.mediaplayer

播放器

**方法：**

- play(link, options)

#### play ####
    play(link, options)

**功能描述：**

播放媒体文件

**参数说明：**

- link ： 为string类型，所要播放的媒体文件链接（本地媒体文件路径或 Web URL均可）
- options：为object类型，其中包括以下参数：

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
            <td>播放成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>
