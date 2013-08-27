---
layout: page
title: "Bloging Basics 发表文章"
date: 2013-08-25 19:13
footer: false
---
Octopress提供了一些 rake 命令来创建文章和页面，并且预先载入一些元数据，文件命名遵循Jekyll的规则。它也将为你的博客创建了分类（你可以在atom.xml和blog/categories/<category>/atom.xml中找到它们）。

##发布博客

博客的文章会储存在source/_posts目录下，文件命名遵循了Jekyll规则：YYYY-MM-DD-post-title.markdown。这样命名有很多好处。文件名将会作为文章的链接，而标注日期可以帮助你管理文章。

Octopress提供了rake命令，它将按照命名规则创建文件，并且它将智能地为你添加一些元数据。

语法：

	rake new_post["title"]

new_post 创建文件名的时候用—连接你敲打的每个单词。默认的文件扩展后缀为markdown，但是你也可以在Rakefile修改默认的文件后缀。

例子：

	rake new_post["Zombie Ninjas Attack: A survivor's retrospective"]
	# Creates source/_posts/2011-07-03-zombie-ninjas-attack-a-survivors-retrospective.markdown

博客的文件名将决定了你的文章地址。默认的固定链接看起来就像这样：
```http://site.com/blog/2011/07/03/zombie-ninjas-attack-a-survivors-retrospective/index.html```

用编辑器打开一篇文章你将会看到一块[yaml front matter](https://github.com/mojombo/jekyll/wiki/yaml-front-matter)语句，它将告诉jekyll如何处理文章或页面。

	---
	layout: post
	title: "Zombie Ninjas Attack: A survivor's retrospective"
	date: 2011-07-03 5:59
	comments: true
	external-url:
	categories:
	---

在这里你可以开启或关闭评论功能，或者为文章添加分类。如果你的博客有多个作者，你可以添加```author: Your Name```属性，为每片文章添加作者。如果你想将文章保存为草稿，你可以添加```published: false```属性，当你生产你博客的时候他就不会被发布出去。如果你想发布

你可以添加单条分类或多条分类：
	# One category
	categories: Sass
	
	# Multiple categories example 1
	categories: [CSS3, Sass, Media Queries]
	
	# Multiple categories example 2
	categories:
	- CSS3
	- Sass
	- Media Queries

##创建页面

你可以在网站的source目录下任意位置创建页面，它们会通过Jekyll解析出来。页面所在的文件路径就是页面的网址。那么about.markdown对应的网页地址为site.com/about.html。如果你更喜欢 site.com/about/ 这种格式的网址，你可以创建这样的路径及文件：about/index.markdowm 。通过一个rake 命令，Octopress很容易就可以创建一个新的页面。

	rake new_page[super-awesome]
	# creates /source/super-awesome/index.markdown
	
	rake new_page[super-awesome/page.html]
	# creates /source/super-awesome/page.html

就如创建新文章的命令一样，默认的文件后缀为markdown,你同样可以在Rakefile中设置你喜欢的文件后缀。新生成的页面看起来是这样的：

	---
	layout: page
	title: "Super Awesome"
	date: 2011-07-03 5:59
	comments: true
	sharing: true
	footer: true
	---

默认的标题是使用命令创建时的标题，你可以将其修改。这和创建文章时产生的yaml语句一样，但是去除了categories（分类）项，你还可以是否开启分享（sharing）和评论（comments），或者将页脚（footer）全部移除。如果你不想在页面上显示时间，你同样可以将其移除。

##内容

在网站的configuration文件中有配置。此外，你也可以使用jekyll文档[liquid template features ](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)中描述的


通过在你的文章中插入```<!-- more -->```解析语句，可以让你的文章在博客首页只显示解析语句以上的内容，然后有一枚按钮“Continue →”链接文章的全部内容。


##生成（Generate）及预览（preview）

	rake generate   # Generates posts and pages into the public directory
	rake watch      # Watches source/ and sass/ for changes and regenerates
	rake preview    # Watches, and mounts a webserver at http://localhost:4000

如果你想保存为草稿，你需要在头部的YAML语句中添加```published: false```。你可以通过```rake preveiw```在本地预览你的博客，预览前是不需要通过```rake generate```生成的。

使用rake preview 来预览非常棒，但是如果你是POW的使用者，你可以这样设置你的Octopress网站：
	
	cd ~/.pow
	ln -s /path/to/octopress octopress
	cd -

当你设置好了POW，你只需使用rake watch ，然后通过http://octopress.dev查看。