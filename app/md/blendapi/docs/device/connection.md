### Connection ###

     clouda.device.connection
    
网络连接

**方法：**

- get(options)

#### get ####

    get(options)

**功能描述：**

获取当前网络状态

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
            <td>操作成功，data是返回的当前网络的字符串</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
    </tbody>
</table>

**返回的网络类型字符串**

网络连接状态类型可能的取值：

    clouda.device.CONNECTION_STATUS.UNKNOWN // 未知状态
    clouda.device.CONNECTION_STATUS.NONE // 断开状态
    clouda.device.CONNECTION_STATUS.WIFI // WIFI连通状态
    clouda.device.CONNECTION_STATUS.CELL_2G // 移动数据2G连通状态
    clouda.device.CONNECTION_STATUS.CELL_3G // 移动数据3G连通状态
    clouda.device.CONNECTION_STATUS.CELL_4G // 移动数据4G连通状态
    clouda.device.CONNECTION_STATUS.CELL // 移动数据通连通状态
    clouda.device.CONNECTION_STATUS.ETHERNET // 以太网连通状态


