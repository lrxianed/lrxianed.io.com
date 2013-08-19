---
layout: post
title: "无差别浏览——Google Fonts"
date: 2013-08-19 23:01
comments: true
categories: Octopress
---
##Google Fonts
如果你想让你的网页上的字体在其他平台上看起来都是统一的、无差别的，那么你需要添加网络字体，[Google Fonts](http://www.google.com/fonts)为我们提供丰富的网络字体，总有一款适合你！定制的方法也很简单，只需要修改两个文件，添加两行代码。**注意：但<strong style="color: #e0f;">遗憾</strong>的是，此举只能应用英文字体，对于中文字体，是不起作用的。**

####/source/_includes/custom/head.html
在此文件中引入字体地址，例如：

	<link href="http://fonts.googleapis.com/css?family=Crete+Round" rel="stylesheet" type="text/css">

####/sass/custom/_style.scss
添加如下代码，用于修改博客顶部的博客名。

    body > header h1 {
      font-family: "Crete Round", serif;
      text-transform: uppercase;
      font-weight: normal;
    }
