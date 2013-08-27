---
layout: page
title: "Render Partial 把文章切块"
date: 2013-08-24 16:13
footer: false
---
之前给大家介绍了在文章直接插入代码文件的一款插件：**include code** 现在有一款插件，可以在文章中插入另一篇文章。有了这插件，我可以很容易将相关的文章都汇集在一篇文章中（例如写一篇教程）。就像把一篇长篇大论分割成一小块一小块，这使得编辑的时候，更舒心，排版也更加方便了。所以有必要介绍一下这款如此奇特的插件——**Render Partial**。

##语法

    {% raw %}
    {% render_partial 文件路径 %}
    {% endraw %}

###注意:

* 根目录默认为``source``;
* 只有一个参数，就是文章的路径。例如：添加路径 ``/source/doc/1.markdown``的文章到一篇文章中，你可以这样写`{% raw %}{% render_partial doc/1.markdown %}{% endraw %}`
* 如果想访问``source``的上级，可以这样写：``../README.markdown``

**对一篇文章进行区块化，这真是Octopress 的一大特色。**
