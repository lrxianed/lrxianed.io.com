---
layout: page
title: "include code 嵌入代码文件"
date: 2013-08-24 01:05
footer: false
---
原来Octopress还可以在文章中直接嵌入代码文件的，好强大的样子。

##语法
    
    {% raw %}
    {% include_code 标题 [lang:language] 文件路径 %}
    {% endraw %}

##一个例子讲解
    
    {% raw %}
    {% include_code 我的第一JavaScript游戏 lang:js game.js %}
    {% endraw %}

{% include_code 我的第一JavaScript游戏 lang:js game.js %}

###注意
* 默认的代码文件默认的存放文件夹（也就是代码的根目录）是```source/downloads/code```，如果没有你可以自己创建；如果你想修改默认的存放路径，可用在``_config.yml``中修改。
* ```[lang:language]```不是必要的，此插件会自动识别代码的语言分类，但不是所有语言种类都能识别，写上就不会错的啦！