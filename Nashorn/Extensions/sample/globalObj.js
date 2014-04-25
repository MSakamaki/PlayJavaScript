// githubからソースを取得するのにSSL通信しないといけないので、以下のように-Dオプション指定
// jjs -Dhttps.protocols="TLSv1,SSLv3,SSLv2Hello" globalObj.js

print('__FILE__', __FILE__)
print('__LINE__', __LINE__)
print('__DIR__ ', __DIR__)

print("load local  file");
load("hello.js");
print("load server file");
load('https://raw.githubusercontent.com/MSakamaki/PlayJavaScript/master/Nashorn/Extensions/sample/hello.js');

load({ script: "print('load myscript hello')", name: "mysc.js"});
// nashorn, javaFXモジュールは「nashorn:」「fx:」のように擬似urlスキームから読み込むことができます。
// loadできたりするもの
// http://hg.openjdk.java.net/nashorn/jdk8/nashorn/file/18edd7a1b166/src/jdk/nashorn/internal/runtime/resources
load("nashorn:parser.js");
load("nashorn:mozilla_compat.js");



