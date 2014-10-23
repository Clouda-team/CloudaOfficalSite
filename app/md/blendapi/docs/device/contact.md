### Contact ###
    clouda.device.contact

联系人类。

**方法：**

- find(field, options)
- count(options)    
- getCursor(field, cursorOffset, length， options)    
- insert(data, options)
- update(contact, data, options)
- remove(contact, options)

#### find ####
    find(field, options)

**功能描述：**

查找并选择联系人

**参数说明：**

- field: 为array类型, 其中的元素是“Contact对象”中的“参数”字段组合。表示查找条件。
        
   举例：

   1.全选：可用`["*"]`

   2.自定义选择：
    ["displayName", "phoneNumbers", "emails"]

- options: 为object，其中包括以下参数：

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
            <td>操作成功，data是返回的是“Contact对象”组成的数组</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
        <tr>
            <td>filter</td>
            <td>string</td>          
            <td>筛选条件，可选参数，默认为空</td>  
        </tr>
        <tr>
            <td>multiple</td>
            <td>boolean</td>          
            <td>是否返回多个返回联系人信息，默认：flase</td>  
        </tr>
    <tbody>
</table>

**Contact对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>id</td>
            <td>string</td>           
            <td>联系人ID，全局唯一标识符，标识通讯录中的一个联系人</td>  
        </tr>
        <tr>
            <td>displayName</td>
            <td>string</td>           
            <td>姓名</td>  
        </tr>
        <tr>
            <td>nickname</td>
            <td>string</td>           
            <td>昵称</td>  
        </tr>
        <tr>
            <td>phoneNumbers</td>
            <td>array</td>           
            <td>电话（座机、手机等相同），详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>addresses</td>
            <td>array</td>           
            <td>联系地址，详细说明参考“ContactAddress”对象</td>  
        </tr>
        <tr>
            <td>emails</td>
            <td>array</td>           
            <td>电子邮件地址，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>organizations</td>
            <td>array</td>           
            <td>组织，详细说明参考“ContactOrg”对象</td>  
        </tr>   
        <tr>
            <td>birthday</td>
            <td>string</td>           
            <td>生日</td>  
        </tr>
        <tr>
            <td>photos</td>
            <td>array</td>           
            <td>头像，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>ims</td>
            <td>array</td>           
            <td>IM信息，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>urls</td>
            <td>array</td>           
            <td>相关网页，如博客，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>note</td>
            <td>string</td>           
            <td>备注</td>  
        </tr>
        <tr>
            <td>categories</td>
            <td>array</td>           
            <td>自定义类别，详细说明参考“ContactField”对象</td>  
        </tr>
    </tbody>
</table>

**ContactField对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>type</td>
            <td>string</td>           
            <td>字段类型，如“住宅”、“单位”等</td>  
        </tr>
        <tr>
            <td>value</td>
            <td>string</td>           
            <td>字段值（电话号码或email）</td>  
        </tr>
        <tr>
            <td>pref</td>
            <td>boolean</td>           
            <td>用户是否设置为首选项，true：设置为首选项</td>  
        </tr>
    </tbody>
</table>

**ContactAddress对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>type</td>
            <td>string</td>           
            <td>字段类型，如“住宅”、“单位”等</td>  
        </tr>
        <tr>
            <td>pref</td>
            <td>boolean</td>           
            <td>用户是否设置为首选项，true：设置为首选项</td>  
        </tr>
        <tr>
            <td>formatted</td>
            <td>string</td>           
            <td>完整地址显示格式</td>  
        </tr>
        <tr>
            <td>streeAddress</td>
            <td>string</td>           
            <td>完整街道地址</td>  
        </tr>
        <tr>
            <td>locality</td>
            <td>string</td>           
            <td>城市或地区</td>  
        </tr>
        <tr>
            <td>region</td>
            <td>string</td>           
            <td>省</td>  
        </tr>
        <tr>
            <td>country</td>
            <td>string</td>           
            <td>国家</td>  
        </tr>
        <tr>
            <td>postalCode</td>
            <td>string</td>           
            <td>邮编</td>  
        </tr>

    </tbody>
</table>

**ContactOrg对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>type</td>
            <td>string</td>           
            <td>字段类型，如“住宅”、“单位”等</td>  
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>           
            <td>组织名称</td>  
        </tr>
        <tr>
            <td>pref</td>
            <td>boolean</td>           
            <td>用户是否设置为首选项，true：设置为首选项</td>  
        </tr>
        <tr>
            <td>department</td>
            <td>string</td>           
            <td>部门</td>  
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>           
            <td>职务</td>  
        </tr>
    </tbody>
</table>

#### count ####
    count(options)

**功能描述：**

获取通讯录中的条目总数。

**参数说明：**

options: 为object，参数说明同find(field, options)中的options说明。

#### getCursor ####
    getCursor(field, cursorOffset, length， options)

**功能描述：**

读取联系人信息

**参数说明：**

- field : 同 find(field, options)中的field说明
- cursorOffset：为 int 类型， 指定位移的联系人，表示从第几个开始
- length : 为 int 类型，设置查询个数
- options：
   参数说明同find(field, options)中的options说明。

#### insert ####
    insert(data, options)

**功能描述：**

新增一个联系人条目

**参数说明：**

- data： find(field, options)接口中返回的“Contact对象”中的data信息。
- options：参数说明同clouda.device.contact.find(field, options)中的options说明。

#### update ####
    update(contact, data, options)

**功能描述：**

保存一个联系人条目

**参数说明：**

- contact： 为 array 类型，即 find(field, options)接口中所返回的Contact对象中的参数所组成的数组
- data： find(field, options)接口中返回的Contact对象中的data信息。
- options：参数说明同clouda.device.contact.find(field, options)中的options说明。

#### remove ####
    remove(contact, options)

**功能描述：**

删除一个联系人条目

**参数说明：**

- contact： 为 array 类型，即 find(field, options)接口中所返回的Contact对象中的参数所组成的数组
- options：参数说明同find(field, options)中的options说明。
