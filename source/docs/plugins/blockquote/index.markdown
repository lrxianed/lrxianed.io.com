---
layout: page
title: "Blockquote 插入引文"
date: 2013-08-24 18:33
footer: false
---
Markdown 原生的标记引文，使用的是 `>` 作为引用标记，在每一段（或每一行）的最前面加上`>`.看起来是这样的：

```
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae.
```
使用的效果如下

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae.

Octopress为我们提供了一个更加强大的Blockquote插件，它可以为引文添加作者、出处、网页链接的功能，很讨人喜欢。语法其实和其他插件的语法相差无几。

##语法

    {% raw %}
    {% blockquote 作者, 出处 链接 链接标题 %}
    Quote string
    {% endblockquote %}
    {% endraw %}


###例子

{% blockquote 九把刀 http://www.tduanzi.com/tweets/40334.html 微博段子@风雨法师 %}
我一直觉得，小孩儿可以不了解大人，因为他们没有当过大人。但是大人不可以不了解小孩儿，因为每个大人都当过小孩儿。
{% endblockquote %}

话休絮烦，语法很简单，就不多讲了。官网还告诉我们，如果你不写链接标题的时候，链接自身就是标题，但是不会将整条长链接都显示出来，它会智能地截断。