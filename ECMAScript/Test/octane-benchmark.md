# Octane benchmark

### v8 run.js

```
Richards: 20931
DeltaBlue: 27049
Crypto: 16520
RayTrace: 28313
EarleyBoyer: 23154
RegExp: 2637
Splay: 7058
SplayLatency: 14050
NavierStokes: 18235
PdfJS: 8882
Mandreel: 14794
MandreelLatency: 10814
Gameboy: 25498
CodeLoad: 11568
Box2D: 19307
zlib: 28898
Typescript: 13426
----
Score (version 9): 14937
```

### SpiderMonkey run.js

```
Richards: 14446
DeltaBlue: 17098
Crypto: 15937
RayTrace: 44429
EarleyBoyer: 18254
RegExp: 1455
Splay: 6747
SplayLatency: 5031
NavierStokes: 18310
PdfJS: 7310
Mandreel: 9564
MandreelLatency: 10562
Gameboy: 23310
CodeLoad: 8693
Box2D: 11066
zlib: 44256
Typescript: 11994
----
Score (version 9): 12095
```

### Nashorn run.js

```
js-Nashorn  run.js
Richards: 227
DeltaBlue: 31.9
Crypto: 46.0
RayTrace: 125
EarleyBoyer: 328
RegExp: 31.6
Exception in thread "main" java.lang.OutOfMemoryError: Java heap space

Exception: java.lang.OutOfMemoryError thrown from the UncaughtExceptionHandler in thread "main"
```

oops...

##### ``OutOfMemoryError``が起きないよう、オプションをつけて再度実行してみる。

```
jjs -J-XX:-UseGCOverheadLimit -J-Xmx512m run.js
```


### Rhino run.js


