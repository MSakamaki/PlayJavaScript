
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
} else{
	var files = `ls -l`;

	print(file);
	var lines = files.split("\n");
	 
	// print only the directories
	for (var l in lines) {
	    var line = lines[l];
	    if (line.startsWith("d")) // directory
	        print(line)
	}
}

```






