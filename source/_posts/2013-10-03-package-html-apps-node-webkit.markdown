---
layout: post
title: "打包Html应用"
date: 2013-10-03 23:08
comments: true
categories: html
---
前段时间关注impress.js（注：impress.js是超炫的幻灯片演示工具），而且用它做了两个幻灯片。实质上，这两个幻灯片是网页来的，需要使用超级浏览器（Chrome 、Safari、Firefox等）才能看到绚丽的效果。假如到一个没有超级浏览器的电脑上演示，那怎么办，那不得先下个浏览器。如果能够将webkit和网页文件一起封装就好了。

仔细谷歌之后，果真有这项技术。这个项目名字叫做**node-webkit**。下面是该项目的GitHub页面。

GitHub：[https://github.com/rogerwang/node-webkit](https://github.com/rogerwang/node-webkit)

##node-webkit

node-webkit能够让你的网页应用运行起来更像一款程序，而不是一个网页。这正是我想要的效果，而且创建起来非常简单。现在就去下载吧！[GitHub | node-webkit](https://github.com/rogerwang/node-webkit)

##创建基本程序

首先要创建你的网页，首页以``index.html``命名（不这样命名也行，你喜欢，``package.json``里改就是了）。例如：

```html index.html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>
```
然后是创建``package.json``:
```html package.json
    {
      "name": "Hello World!", 
      "main": "index.html",
      "description" : "Hello world!",
      "version": "1.0 beta",
      "window":{
        "icon": "icon.png",
        "frame": true,
        "fullscreen": false,
        "toolbar": false
      },
      "webkit": {
        "plugin": true
      }
    }
```

###多余的解释:

* name: 应用的名字；
* main: 应用首页；
* description: 应用的描述，会出现在窗口标题旁边哦！
* icon: 应用的图标，不设置会用默认的图标（只显示在标题）；
* toolbar: 是否显示工具栏；
* version: 版本号；
* fullscreen: 是否全屏模式打开；

###注意事项:

* 最后一项后面不用逗号，能理解不？看看示例是怎么写的。
* 其实还有很多参数，可以参考这里的介绍：[Manifest format](https://github.com/rogerwang/node-webkit/wiki/Manifest-format)

##app.nw

下一步就是把所有的文件压缩，压缩时使用zip的压缩格式，还要把后缀改成``.nw``。

###需要注意

不是把``index.html``和``package.json``放到一个文件夹里压缩，这是不对的。正确的操作是：选中所有文件，然后右键压缩，选择``zip``的压缩格式，修改后缀名为``.nw``，最后点击``确定``。

那么，我们已经打包好了一个网页了：``app.nw``。

试运行一下，将``app.nw``拖放到``nw.exe``上，网页应用就打开了。

##App.exe

到此，我们已经打包好我们的网页了，可是，这还不是我想要的形式，我需要的是打包成一个独立的运行程序``App.exe``

那么，我们需要用到CMD命令行。

在CMD中进入到node-webkit工作的文件夹，然后输入``copy /b nw.exe+app.nw app.exe``
很好理解，替换一下app的名字就可以。

现在确实是``.exe``格式了，可以双击运行了。可是，依然不够完美。不完美的原因是，当它走出node-webkit的工作文件夹，它就没法运行了。所以接下来还有一步要走。

###Enigma Virtual Box
官方网站的wiki中介绍了这么一个软件：**Enigma Virtual Box**，用来将``nw.pak``和其他``.dll``文件一同打包进一个``.exe``文件。

具体操作方法如下：

1. 下载[Enigma Virtual Box](http://enigmaprotector.com/assets/files/enigmavb.exe)安装。
2. 打开**Enigma Virtual Box**，在``Enter Input File Name``项选择``app.exe``。
3. 在下方多标签窗口的``Files``窗口，添加文件：所有的``.dll``文件和``nw.pak``（共5个文件）；确认添加文件后会弹出一个窗口，默认选项``%DEFAULT FOLDER``就可以了，直接点击**OK**。
4. 点击**Files Options**，把``Compress Files``勾选上，点击OK。
5. 大大力按下**Process**。
6. 大功告成，生成的可执行文件默认在``app.exe``的同一目录下。

现在，不管你把它放到哪里，它都可以独立运行。只不过，它变大了。由原来的5Mb的网页变成了50Mb的可执行文件。而且我的impress.js幻灯片中的音频是失效的，暂时没弄懂是什么原因。

**time: 2013-10-04 1:40**

问题得到解决，原来在官方的wiki中早有提到关于mp3的问题，既然不支持mp3，那可以改OGG。另外，想要修改app的图标，wiki里面也有教程，讲解很详细，学习了！