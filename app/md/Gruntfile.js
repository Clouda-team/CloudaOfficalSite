module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: {
          // seprater: "\n\n"
          separator:"\n\n"
        },
        "device":{
          files: [{
            src: [
              "<%=pkg.device%>intro-runtime.md",              
              "<%=pkg.device%>accelerometer.md", 
              "<%=pkg.device%>activity.md", 
              "<%=pkg.device%>battery.md",
              "<%=pkg.device%>compass.md",
              "<%=pkg.device%>connection.md ",
              "<%=pkg.device%>contact.md",
              "<%=pkg.device%>device.md",
              "<%=pkg.device%>filesystem.md",
              "<%=pkg.device%>geolocation.md",
              "<%=pkg.device%>globalization.md",
              "<%=pkg.device%>gyroscope.md",
              // "<%=pkg.device%>keybord.md",
              "<%=pkg.device%>media.md",
              "<%=pkg.device%>notification.md",
              "<%=pkg.device%>qr.md",
              "<%=pkg.device%>screen.md",
              "<%=pkg.device%>database.md",
              "<%=pkg.device%>interceptor.md",
              // "<%=pkg.device%>cache.md"
            ],
            dest: 'blendapi/local/api_runtime.md'
          }]
        },
        "mbass":{
          files: [{
            src: [
              "<%=pkg.mbass%>intro-runtime.md",
              "<%=pkg.mbass%>account.md",
              "<%=pkg.mbass%>pay.md",
              "<%=pkg.mbass%>socialshare.md",
              "<%=pkg.mbass%>push.md",
              "<%=pkg.mbass%>app.md",
              "<%=pkg.mbass%>face.md",
              "<%=pkg.mbass%>pcs.md",
              "<%=pkg.mbass%>player.md",
              "<%=pkg.mbass%>tts.md",
              "<%=pkg.mbass%>vtt.md",
            ],
            dest: 'blendapi/cloud/api_runtime.md'
          }] 
        },
        "device-kuang":{
          files: [{
            src: [
              "<%=pkg.device%>intro-kuang.md",              
              "<%=pkg.device%>activity.md", 
              "<%=pkg.device%>battery.md",
              "<%=pkg.device%>connection.md",
              "<%=pkg.device%>device.md",
              "<%=pkg.device%>filesystem.md",
              "<%=pkg.device%>geolocation.md",
              "<%=pkg.device%>globalization.md",
              "<%=pkg.device%>media.md",              
              "<%=pkg.device%>qr.md",
              "<%=pkg.device%>keybord.md"
            ],
            dest: 'blendapi/local/api_kuang.md'
          }]          
        },
        "mbass-kuang":{
          files: [{
            src: [
              "<%=pkg.mbass%>intro-kuang.md",
              "<%=pkg.mbass%>account.md",
              "<%=pkg.mbass%>pay.md",
              "<%=pkg.mbass%>socialshare.md",
              "<%=pkg.mbass%>push.md"
            ],
            dest: 'blendapi/cloud/api_kuang.md'
          }]          
        }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat']);

};
