cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-calendar.Calendar",
        "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
        "pluginId": "cordova-plugin-calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "id": "cordova-plugin-calendar.tests",
        "file": "plugins/cordova-plugin-calendar/test/tests.js",
        "pluginId": "cordova-plugin-calendar"
    },
    {
        "id": "com.example.hello.hello",
        "file": "plugins/com.example.hello/www/hello.js",
        "pluginId": "com.example.hello",
        "clobbers": [
            "hello"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "android.com.videocalling": "0.1.0",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-calendar": "4.5.1",
    "com.example.hello": "0.7.0"
};
// BOTTOM OF METADATA
});