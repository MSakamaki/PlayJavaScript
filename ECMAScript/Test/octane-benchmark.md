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
Richards: 298
DeltaBlue: 35.9
Crypto: 55.0
RayTrace: 109
EarleyBoyer: 343
RegExp: 36.3
Splay: java.lang.OutOfMemoryError: Java heap space

eException in thread "main" java.lang.OutOfMemoryError: Java heap space
        at java.lang.invoke.MethodType$ConcurrentWeakInternSet.get(MethodType.java:1074)
        at java.lang.invoke.MethodType.makeImpl(MethodType.java:301)
        at java.lang.invoke.MethodType.methodType(MethodType.java:206)
        at java.lang.invoke.LambdaForm.signatureType(LambdaForm.java:363)
        at java.lang.invoke.LambdaForm.getPreparedForm(LambdaForm.java:524)
        at java.lang.invoke.LambdaForm.prepare(LambdaForm.java:441)
        at java.lang.invoke.MethodHandle.<init>(MethodHandle.java:463)
        at java.lang.invoke.SimpleMethodHandle.<init>(SimpleMethodHandle.java:39)
        at java.lang.invoke.SimpleMethodHandle.make(SimpleMethodHandle.java:43)
        at java.lang.invoke.MethodHandleImpl.makeGuardWithTest(MethodHandleImpl.java:620)
        at java.lang.invoke.MethodHandles.guardWithTest(MethodHandles.java:2758)
        at java.lang.invoke.SwitchPoint.guardWithTest(SwitchPoint.java:173)
        at jdk.internal.dynalink.linker.GuardedInvocation.compose(GuardedInvocation.java:306)
        at jdk.internal.dynalink.ChainedCallSite.relinkInternal(ChainedCallSite.java:168)
        at jdk.internal.dynalink.ChainedCallSite.relink(ChainedCallSite.java:130)
        at jdk.nashorn.internal.runtime.linker.LinkerCallSite.relink(LinkerCallSite.java:112)
        at jdk.internal.dynalink.DynamicLinker.relink(DynamicLinker.java:259)
        at java.lang.invoke.LambdaForm$DMH/985655350.invokeSpecial_LLIL_L(LambdaForm$DMH)
        at java.lang.invoke.LambdaForm$BMH/1881129850.reinvoke(LambdaForm$BMH)
        at java.lang.invoke.LambdaForm$NamedFunction.invoke_L_L(LambdaForm.java:1103)
        at java.lang.invoke.LambdaForm$DMH/930990596.invokeStatic_LL_L(LambdaForm$DMH)
        at java.lang.invoke.LambdaForm$NamedFunction.invokeWithArguments(LambdaForm.java:1147)
        at java.lang.invoke.LambdaForm.interpretName(LambdaForm.java:625)
        at java.lang.invoke.LambdaForm.interpretWithArguments(LambdaForm.java:604)
        at java.lang.invoke.LambdaForm$LFI/485815673.interpret_L(LambdaForm$LFI)
        at java.lang.invoke.LambdaForm$NamedFunction.invoke_L_L(LambdaForm.java:1103)
        at java.lang.invoke.LambdaForm$DMH/930990596.invokeStatic_LL_L(LambdaForm$DMH)
        at java.lang.invoke.LambdaForm$NamedFunction.invokeWithArguments(LambdaForm.java:1147)
        at java.lang.invoke.LambdaForm.interpretName(LambdaForm.java:625)
        at java.lang.invoke.LambdaForm.interpretWithArguments(LambdaForm.java:604)
        at java.lang.invoke.LambdaForm$LFI/485815673.interpret_L(LambdaForm$LFI)
        at java.lang.invoke.LambdaForm$MH/399534175.linkToCallSite(LambdaForm$MH)
```

・・・・

### Rhino run.js

```
js run.js
js: "pdfjs.js", line 1317: Property "data" already defined in this object literal.
js:     },
js: ....^
Richards: 419
DeltaBlue: 317
Crypto: 400
RayTrace: 570
EarleyBoyer: 597
RegExp: 118
Splay: 752
SplayLatency: 540
NavierStokes: 445
Gameboy: TypedArrayUnsupported
CodeLoad: 1226
Box2D: 453
zlib: ReferenceError: "read" is not defined.
Typescript: 1632
```

##### pddfjs.jsとzlib、Gameboyで計測できないのでコメントアウト

```
js run.js 
Richards: 425
DeltaBlue: 372
Crypto: 407
RayTrace: 648
EarleyBoyer: 604
RegExp: 125
Splay: 565
SplayLatency: 649
NavierStokes: 505
CodeLoad: 2828
Box2D: 573
Typescript: 1686
----
Score (version 9): 584
```

