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


### 型指定された配列




### Object.bindProperties

### Extensions of Error objects, Error.prototype and Error constructor

### String.prototype extensions

### Function.prototype.toSource


### Extension properties, functions in global object


#### __FILE__ , __LINE__, __DIR__

#### print function

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





