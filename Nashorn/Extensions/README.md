## Nashorn がECMAScript5.1から追加した機能

[ECMAScript5.1 Spec](http://www.ecma-international.org/ecma-262/5.1/)

[独自拡張内容(英語)](https://wiki.openjdk.java.net/display/Nashorn/Nashorn+extensions)

### 条件付きchatch文

```javascript
  catch (e if e instanceof TypeError)
```


### 関数式クロージャ(JavaScript 1.8)

```javascript
  var fnc = function(x) x+x
  print(fnc(10));
```


[JavaScript1.8](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8)

[JavaScript1.8日本語](https://developer.mozilla.org/ja/docs/Web/JavaScript/New_in_JavaScript/1.8)

MozillaのJavaScript1.8拡張もNashornでサポートされています。

※  でも安易ジェネレータ式はサポートされてない、そもそも1.7サポートされてない・・・（だから安易ジェネレータ式未サポート？）


### for each(JavaScript 1.6)

JavaScript 1.6拡張の[for each式](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for_each...in)が使えます。


### 最後の引数の")"の後に当たらしい式を定義できる。

Objectの定義とともに新しく中身を作れたりする。
主に匿名クラスっぽいものを作るために使えたりする。

```javascript
var obj = new Object(){
    run: function(){ console.log("run"); }
};
obj.run();
```

### 無名関数

```javascript
function(){
    print("hello");
}
```

使い方は以下のような感じ、Nashornでは実行できる。
ブラウザでは落ちる。

```javascript
var script = "function(){ print('Allo'); }";
var fnc = eval(script);
fnc();
```


 + javaからした場合どうやって呼び出すか調査中・・・

### 複数行記述(-scriptingモードのみ)

```javascript
var str = <<EOF

 This is a string that contains multiple lines
 hello
 world
 That's all!

EOF

print(str)
```

実行する際は「-scripting」オプションが必要

```javascript
jjs -scripting xxx.js
```

### 変数での文字列補完(-scriptingモードのみ)

 + 文字列リテラル中には``${expression}``のような式を指定することができます。
 + 文字列中の``${expression}``を変数で置き換えます。


```javascript


var x = 'world';
print ('hello ${x}'); //--> hello ${x}

var msg = "hello ${x}"; //--> hello world
print (msg);

var msg = "hello ${ x }"; //--> hello world
print (msg);

// 計算式は評価されない。
var i = 10,
	j = 5;

print('calc : ${i+j}'); //--> calc : ${i+j}
var calc = 'calc : ${i+j}';//--> calc : ${i+j}
print (calc);

```

### バッククォート(`)を用いた評価式の実行(-scriptingモードのみ)

 + NashornはUnixShellのようにバッククォート式をサポートしています。
 + バッククォートに囲まれた式は``exec``プログラムにより評価されます。

```javascript


var System  = Java.type("java.lang.System")
if ('windows' === System.getProperty('sun.desktop')) {
	print('windowsだと動かんぜよ');
} else {
	var files = `ls -l`;

	print(files);
	var lines = files.split("\n");
	 
	// print only the directories
	for (var l in lines) {
	    var line = lines[l];
	    if (line.startsWith("d")) // directory
	        print(line)
	}
}

```

### シェルスクリプト形式のコメント(-scriptingモードのみ)

Nashornはshell scriptのコメント形式(``#``)をサポートしています。

```javascript


# コメント
print('hello');

```

また、Nashornはshebangモードも対応しており、shebangモードの場合は自動的に``-scripting``が有効になります。


```javascript


#!/usr/bin/jjs
# 
# chmod 775 [ScriptFile]
# ./[ScriptFile]
#

# check script mode
var x = "World"
var str = "Hello, ${x}"
 
print(str) 


# check back quate
var System  = Java.type("java.lang.System")
if ('windows' === System.getProperty('sun.desktop')) {
	print('windowsだと動かんぜよ');
} else {
	var files = `ls -l`;

	print(files);
	var lines = files.split("\n");
	 
	// print only the directories
	for (var l in lines) {
	    var line = lines[l];
	    if (line.startsWith("d")) // directory
	        print(line)
	}
}


```

### 構文拡張機能の無効化

Nashorn特有の構文拡張機能は``-no-syntax-extensions ``(短縮形で``-nse``)をオプションに設定することですべて無効化することができます。

構文拡張機能をOffにした状態だと、ECMAScript5.1標準の構文のみサポートされるようになります。

``-nse``モードは``-scripting``モードが自動的にoffになることにも注意して下さい。い

Also note that API extensions are still enabled even nse is specified.


## Nashorn script API extensions(Nashorn API拡張)

### ``__proto__``プロパティーのサポート

Nashornは他のECMAScriptエンジン(V8とかRhino)と同様に、指定されたオプジェクトのプロトタイプを読み書きするmutableプロパティー「``__proto__``」をサポートしています。

#### _``__proto__``の使用は推奨されていません、代わりに``Object.getPrototypeOf``もしくは``Object.setPrototypeOf``を使用してください。_

### Object.setPrototypeOf(obj, newProto)

``Object.getPrototypeOf(obj)``は[ECMAScript5の仕様にある、Objectのプロトタイプを取得する機能](http://es5.github.io/#x15.2.3.2)です。

このObject.setPrototypeOf(obj, newProto)は、Nashorn独自の拡張機能で、オブジェクトに``newProto``を設定することができます。

この機能は[ECMAScript6に提案](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)されている拡張機能の一つです。


### 型付き配列

これはJavaScriptでバイナリデータのアクセスを可能にするための機能です。

クロノスの[spec](https://www.khronos.org/registry/typedarray/specs/latest/)にある、Typed array(型付き配列)をNashornは実装します。

詳しくは[tutorial presentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)をチェックして下さい。

(この中にはStringViewなど、Nashornに実装されていない物もあります。)

DataViewはまだ未実装であり、jdk8u20で実装を期待されている。

#### 型付き配列の仕組み

型付き配列は「buffer」と「View」に分離されており、bufferにてデータの塊です。

bufferはそのままでは操作できず、アクセスする為にはViewを用います。

##### bufferの定義

以下の方法で16byteのbufferを定義します。

```javascript
var buffer = new ArrayBuffer(16);
```

##### viewでのアクセス

配列を値 0, 2, 4, 6 の 4つのエントリ (4 つのエントリが各 4 バイトで、合計 16 バイト) で埋めるサンプル

```javascript
var int32View = new Int32Array(buffer);
for (var i=0; i<int32View.length; i++) {
  int32View[i] = i*2;
}
```

### Object.bindProperties

オブジェクト同士をバインドします。

バインドするオブジェクトはjavascriptオブジェクトである必要はなく、通常のjavaオブジェクトともバインドが加能です。


```javascript


print("prev bind obj :",obj.foo);  // undefined
print("prev bund obj2:",obj2.foo); // 344

// objobj2をバインドする。
Object.bindProperties(obj, obj2);

print("after bind obj :",obj.foo);  // 344
print("after bund obj2:",obj2.foo); // 344
obj.foo = "hello"
print("set obj.foo 'hello' bind obj :",obj.foo);  // hello
print("set obj.foo 'hello' bund obj2:",obj2.foo); // hello

// グローバル領域にバインド
Object.bindProperties(this, obj2);

print("global bind this:",foo);      // hello
print("global bind obj :",obj.foo);  // hello
print("global bund obj2:",obj2.foo); // hello
foo = 42; 
print("set global foo='42' this:",foo);      // 42
print("set global foo='42' obj :",obj.foo);  // 42
print("set global foo='42' obj2:",obj2.foo); // 42

```

以下はJavaオブジェクトをbindするサンプルです。
実効は「jjs -cp ./ ファイル名」のようにクラスパスを通します。

javascriptソース

```javascript

var myclass = Java.type("nashorn.bindJavaJS")
   ,bjj = new myclass()
   ,obj ={};

print("show init");
bjj.show();
bjj.add(10);
bjj.show();
print("show bjj private : ",bjj.count);

print("show bjj memory : ", bjj);
print("show obj memory : ", obj);

print("bjj binding obj");
Object.bindProperties(obj, bjj);

print("show bjj memory : ", bjj);
print("show obj memory : ", obj);

print("before obj add");
obj.show();
bjj.show();

obj.add(10);
print("after obj add");
obj.show();
bjj.show();


print("before bjj add");
obj.show();
bjj.show();

obj.add(10);
print("after bjj add");
obj.show();
bjj.show();


print("show obj private : ", obj.count);

```

Java側ソース


```java
package nashorn;

public class bindJavaJS {
    
    private int count = 0;
    
    public void show(){
        System.out.println("count:" + this.count);
    }
    public void add(int cnt){
        this.count += cnt;
    }
}
```


### Errorのオブジェクト、prototype、constructor拡張 (Extensions of Error objects, Error.prototype and Error constructor)

NashornはECMAScriptに定義されているErrorオブジェクト(またはサブタイプ)を拡張しています。

|properties|説明|
|:---|:---|
|lineNumber  |エラー元の行番号|
|columnNumber|エラー元の列番号|
|fileName    |エラー元のファイル名|
|stack       |スタックトレース文字列|


|prototype|説明|
|:---|:---|
|.printStackTrace()|エラーが発生した場所からの完全なスタックトレース(Java含む)|
|.getStackTrace()  |ECMAScriptフレームのスタックとレースをjava.lang.StackTraceElement型の配列で返します。|
|.dumpStack()      |just like java.lang.Thread.dumpStack()のような動作をします。|


+ サンプル

```javascript

function func() {
    throw new Error()
}
 
function f() {
    func()
}
 
try {
    f()
} catch (e) {
    print('stack       :', e.stack)
    print('lineNumber  :', e.lineNumber)
    print('columnNumber:', e.columnNumber)
    print('fileName    :', e.fileName)

    print('printStackTrace', e.printStackTrace());
    print('getStackTrace', e.getStackTrace());
}
```


### String.prototype extensions

|機能|説明|
|:---|:---|
|String.prototype.trimLeft |文字列の左端から空白とタブを除去します。|
|String.prototype.trimRight|文字列の右端から空白とタブを除去します。|

```javascript
var fnc = function(args){
    print('args         [' + args + ']');
    print('argsTrim     [' + args.trim() + ']');
    print('argsTrimLeft [' + args.trimLeft() + ']');
    print('argsTrimRight[' + args.trimRight() + ']');
}

fnc(" A ");
fnc("　あ　");
fnc("	TAB	");
```


### Function.prototype.toSource

functionのソースを表示します。
Nativeの場合は表示されません。
JavaTypeに対して行った場合は例外が発生します。

```javascript
// bindJavaJSを使いまわす。
var bjjType= Java.type("nashorn.bindJavaJS")
   ,bjj = new bjjType()
   ,myFnc= function(){ print('hello'); };

bjj.show()

print('my function : ', myFnc.toSource());
print('native function : ', print.toSource());

try{
    bjj.show();
    print("java functionは呼べる");
    print('java function : ', bjj.show.toSource());
} catch(e) {
    print('JavaではToSource()できない');
    e.printStackTrace();
}
```

### 拡張されたグローバルオブジェクト（ファンクション、プロパティ）(Extension properties, functions in global object)


|機能|タイプ|概要|
|:---|:---|:---|
|``__FILE__``|properties|実効ファイル名を取得します|
|``__LINE__``|properties|実行された現在の行数を取得します|
|``__DIR__`` |properties|実行されたファイルの絶対パスを返します|
|``print()`` |function  |標準出力ストリームに引数の文字を書き出す。|
|``load()``  |function  |ファイル、urlからscriptをロードします。|
|````|||
|````|||
|````|||
|````|||
|````|||
|````|||

 + load functionnのサンプル

```javascript
// githubからソースを取得するのにSSL通信しないといけないので、以下のように-Dオプション指定
// jjs -Dhttps.protocols="TLSv1,SSLv3,SSLv2Hello" globalObj.js
print("load local  file");
load("hello.js");
print("load server file");
load('https://raw.githubusercontent.com/MSakamaki/PlayJavaScript/master/Nashorn/Extensions/sample/hello.js');

load({ script: "print('load myscript hello')", name: "mysc.js"});
// nashorn, javaFXモジュールは「nashorn:」「fx:」のように擬似urlスキームから読み込むことができます。
load("nashorn:parser.js");
load("nashorn:mozilla_compat.js");
```

 + [擬似URLスキームからloadできたりするもの一覧](http://hg.openjdk.java.net/nashorn/jdk8/nashorn/file/18edd7a1b166/src/jdk/nashorn/internal/runtime/resources)

|scheme|file|概要|
|:---|:---|:---|
|nashorn|Messages.properties|エラー時のメッセージテンプレートがつまってる。|
|nashorn|Options.properties||
|nashorn|mozilla_compat.js|Raino互換用|
|nashorn|parser.js||
|fx     |base.js||
|fx     |bootstrap.js||
|fx     |controls.js||
|fx     |fxml.js||
|fx     |graphics.js||
|fx     |media.js||
|fx     |swing.js||
|fx     |swt.js||
|fx     |web.js||






#### load function

#### loadWithNewGlobal function

#### exit and quit functions

#### Packages, java, javax, javafx, com, edu, org

#### JavaImporter constructor



### Java object

"Java" global property is a script object that defines useful functions for script-to-Java interface.

#### Java.type function

#### Java.extend function

#### Java.from function

#### Java.to function

#### Java.super function


## Special treatment of objects of specific Java classes

### Java Map keys as properties

### Java List element access/update via array index access/update syntax

### Lambdas, SAM types and Script functions

#### Every function is a lambda and a SAM type object

#### Every lambda is a script function

### Script Proxy implementation


### Plugging-in your own JSObject


### JSAdapter constructor

### Scripting mode extension objects and functions

#### $ARG (-scripting mode only)

#### echo (-scripting mode only)

#### $ENV (-scripting mode only)

#### $EXEC (-scripting mode only)

#### $OUT (-scripting mode only)

#### $ERR (-scripting mode only)

#### $EXIT (-scripting mode only)

#### $OPTIONS (-scripting mode only)

#### readFully (-scripting mode only)

#### readLine (-scripting mode only)





