### Cookies.set(key, value [, options])

设置Cookie, 如果没有相关key值，则创建一个key-value cookie。

#### Arguments:
*key*: {String} cookie key  
*value*: {String} cookie value  
*options*: {Object} Cookie相关参数  

#### Returns:
返回`Cookies`对象，支持链式操作。


#### `Option` 参数列表:

| key | value | 默认值 |
|:--|:--|:--|
| `expires` |  {Object} date | 浏览器差窗口关闭即过期. |
| `domain` |  {String} 在特定域名下才能收到cookie. | 当前域名 |
| `path` | {String} 为特定路径指定cookie. | 当前路径 |
| `secure` | {Boolean} 指定是否只在`https`下生效. | `false` |

#### Example usage:
```javascript
// Setting a cookie value
Cookies.set('key', 'value');

// Chaining sets together
Cookies.set('key', 'value').set('hello', 'world');

// Setting cookies with additional options
Cookies.set('key', 'value', { domain: 'www.example.com', secure: true });

// Setting cookies with expiration values
Cookies.set('key', 'value', { expires: 600 }); // Expires in 10 minutes
Cookies.set('key', 'value', { expires: '01/01/2012' });
Cookies.set('key', 'value', { expires: new Date(2012, 0, 1) });

// Using the alias
Cookies('key', 'value', { secure: true });
```




