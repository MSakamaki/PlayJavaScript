# Java Script Engines

## v8

### [Building](https://code.google.com/p/v8/wiki/BuildingWithGYP)

#### 事前準備とか

##### 事前準備

以下とかインストール

 + Python 
 + Ptyhon-setuptools
 + g++
 + git

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


## [Nashorn]()

 + 
 
 
## SpiderMonkey

##### ソースコードの取得

```
git clone https://github.com/mozilla/gecko-dev.git
cd mozilla-central/js/src
```


