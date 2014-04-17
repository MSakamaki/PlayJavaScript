# CommonJS

[CommonJS Wiki](http://wiki.commonjs.org/wiki/CommonJS)

## CommonJSを取り巻く環境のメモ

### サーバサイドJavaScriptの関係者たち

|名前|層|基盤|ソース|概要|
|:---|:---|:---|:---|:---|
|[SpiderMonkey](http://www.mozilla-japan.org/js/spidermonkey/) |engine|c|[src](http://lxr.mozilla.org/mozilla/source/js/src/)|世界初のＪＳエンジン|
|[google v8](http://code.google.com/p/v8/)|engine|c++|[src](http://code.google.com/p/v8/source/browse)||
|[Rhino](https://developer.mozilla.org/ja/docs/Rhino)|engine|Java|[src](http://lxr.mozilla.org/mozilla/source/js/rhino/)|J2SE6のデフォルトJavaScript Engine|
|[Nashorn](http://openjdk.java.net/projects/nashorn/)|engine|Java|[src](http://hg.openjdk.java.net/nashorn/jdk8/nashorn/file/)|J2SE8からのデフォルトJavaScript Engine|
|[Node.js](http://nodejs.org/)|FrameWork|C++(google V8)|[src](https://github.com/joyent/node)||
|[RingoJS](http://ringojs.org/)|FrameWork|JVM(Rhino)|[src](https://github.com/ringo/ringojs)||
|[Vert.x](http://vertx.io/)|FrameWork|JVM(Rhino)|[src](https://github.com/eclipse/vert.x)||

 + さらに詳しい情報は[wiki](http://en.wikipedia.org/wiki/Comparison_of_server-side_JavaScript_solutions)にあったり
 + [vert.xのnashornについて](https://groups.google.com/forum/#!searchin/vertx/nashorn/vertx/Ikv8YJNL21o/HD9dxFaYAMgJ)は[こちらのモジュール](https://github.com/vert-x/mod-lang-nashorn)が担当、coffeeScriptが動作したりする。

## CommonJS Spec

### [Modules](http://wiki.commonjs.org/wiki/Modules)

|モジュール|概要|
|:--|:--|
|binary|Binary Data Objects (byte arrays and/or strings) (proposals, discussion, early implementations)|
|encodings|Encodings and character sets (proposals, discussion, early implementations)|
|io|I/O Streams (proposals, discussion)|
|fs, fs-base|Filesystem (proposals, discussion, early implementations)|
|system|System Interface (stdin, stdout, stderr, &c) (1.0, amendments proposed)|
|assert, test|Unit Testing (1.0, amendment proposals pending)|
|sockets|Socket I/O TCP/IP sockets (early proposals)|
|event-queue|Reactor Reactor/Event Queue (early proposals)|
|worker|Worker Worker (concurrent shared nothing process/thread) (proposal)|
|console|console (proposal) |


### Packages (1.0)
### Package Mappings (proposal)
### Web Server Gateway Interface (JSGI) (proposals, discussion, early implementations)
### Promises (proposal) 

