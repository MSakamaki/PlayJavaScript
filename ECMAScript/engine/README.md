# Java Script Engines

## 事前準備とか

### 事前準備/前提

以下とかインストール

 + Ubuntu OS
 + Python 
 + Ptyhon-setuptools
 + g++
 + git


## v8

### [Building](https://code.google.com/p/v8/wiki/BuildingWithGYP)

##### gpyをインストール
 
 ```
git clone https://chromium.googlesource.com/external/gyp.git gyp
cd gyp
sudo python setup.py install

 ```
 
##### v8のソースコード取得とビルド


```

svn co http://gyp.googlecode.com/svn/trunk build/gyp
cd build/gyp
make [cpu]

```

 + cpuの種類
  + i32
  + x64
  + arm

##### 実行

```
./out/x64.release/d8 [javascript file]
```

## [Nashorn]()

 + 
 
 
## [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Build_Documentation)

##### ソースコードの取得

```
git clone https://github.com/mozilla/gecko-dev.git
cd mozilla-central/js/src
```

##### ビルド

```
cd js/src
autoconf2.13

mkdir build-release
cd build-release
../configure
make
```

##### 実行

```
dist/bin/js [javascript file]
```
