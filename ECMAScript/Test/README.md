# ECMAScript Test

## Spec

 + TC39(ECMA-262)

 + [Console Test](http://wiki.ecmascript.org/doku.php?id=test262:command)
 

## Benchmark


####  [Sunspider](https://code.google.com/p/sunspider-mod/)
 
 + Webkit base

##### Get Code
 
```
svn checkout http://sunspider-mod.googlecode.com/svn/trunk/ sunspider
```

##### exec

```
perl sunspider/sunspider --shell=[javascript engine]
```

#### [Octane](https://code.google.com/p/octane-benchmark/)

+ Google
 
##### Get Code

```
svn checkout http://octane-benchmark.googlecode.com/svn/trunk/ octane
```

##### exec

```
[javascript Engine] ./octane/run.js
```

#### [kraken](https://wiki.mozilla.org/Kraken)

 + Mozilla

##### Get Code

```
hg clone http://hg.mozilla.org/projects/kraken/
```

##### exec

```
cd kraken
perl ./sunspider --shell=[javascript engine]
```

