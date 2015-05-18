#常见问题

##脚本冲突

blendui内部默认采用zepto.js，如原有页面有zepto或者jQuery且不去除可采用$.noConflict避免冲突

     <script type="text/javascript" src="http://apps.bdimg.com/libs/blendui/2.0-alpha/blendui.min.js"></script>
     <script type="text/javascript">
         window.$zepto = $.noConflict(true);
     </script>


##兼容性

对webkit手机浏览器进行上下兼容，如有问题可[反馈](/blend2/start/feedback)












