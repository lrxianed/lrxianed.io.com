---
layout: page
title: "Theme & Customization 自定义"
date: 2013-08-25 10:26
footer: false
---
Octopress 2.0 release 添加了``source/_includes/custom``文件夹，如果你没有这个文件夹，你有必要更新你的Octopress了，因为它更加讨人喜爱。

	_includes/    # Main layout partials
	custom/       # <- 自定义网页的 head, header, navigation, footer, and sidebar等文件;
	asides/       # Theme sidebar partials
	post/         # 文章的元数据储存在这, sharing & comment partials
	_layouts/     # 页面、文章、文章目录的模板样式；


##登陆页面 VS 博客首页

默认的，在你的网站根目录下发布文章，Octopress会在博客首页显示文章。如果你想发布你测博客首页在其他文件夹例如：blog/index.html ，那么你可以在终端里输入以下代码：

	1.mv source/index.html source/blog/index.html
	2.rake new_page[index.html]

下一步你需要更新你的“Rakefile”文件，确保你在更新Octopress的时候不会改变博客首页的位置。

	1.blog_index_dir = 'source/blog'

记得更新你网站的主导航栏，因为当前的博客是链接到根目录“/”下的。请跳转到“changing navigation”查看修改教程，此处我们可以添加一条链接“home”，让它链接到“/blog/”。

最后，source/index.html就会成为博客的首页。

##改变```<head>```

如果你想在<head>中添加代码，那么你可以查看/source/_includes/custom/head.html
	
	1.<!--Fonts from Google"s Web font directory at http://google.com/webfonts -->
	2.<link href="http://fonts.googleapis.com/css?family=PT+Serif:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css">
	3.<link href="http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css">

这里你可以轻松地添加或删除[Google Webfonts](http://google.com/webfonts)的网络字体，你只需要插入一行javascripts代码。

##修改边栏

Octopress集成了一些第三方服务插件小工具，例如Twitter，Pinboard和Delicious，你可以将这些服务添加到你博客的边栏。修改_config.yml，你可以重新排列这些小工具，为每个模板自定义边栏，或者加入你自己的边栏小工具。


	1.default_asides:   [asides/recent_posts.html, asides/twitter.html, asides/delicious.html, asides/pinboard.html]
	2.# blog_index_asides:
	3.# post_asides:
	4.# page_asides:

如果你想为你的边栏添加小工具，先在source/_includes/custom/asides/创建插件文件。许多人都想添加一个关于自己的小工具，此插件已经在about.html中，等着你添加到边栏中。以下是about.html的代码：

	1.<section>
	2.  <h1>About Me</h1>
	3.  <p>A little something about me.</p>
	4.</section>

你添加的插件代码，应该参照以上来写。所有代码都应该写在<section></section>内，然后用<h1></h1>来标记插件的标题。如果你想把插件添加到边栏，需要修改_config.yml，将它添加到asides边栏列表中。

	1. default_asides: [asides/recent_posts.html, asides/twitter.html, asides/delicious.html, asides/pinboard.html]
	2. blog_index_asides: [custom/asides/about.html, asides/recent_posts.html, asides/twitter.html, asides/delicious.html, asides/pinboard.html]
	3. post_asides: [custom/asides/about.html, asides/recent_posts.html, asides/twitter.html, asides/delicious.html, asides/pinboard.html]
	4.# page_asides:

在上面的代码中，我将“关于我”小插件添加到了博客首页和文章页面。但是Page_asides（页面）没有被设置，它会继承默认的边栏。

##改变```Header``` ```Navigation```和```Footer```

网站的各个部分都是可以被定制的。你可以通过编辑/source/_includes/custom/ 下的文件定制你的主题，更新之后你主题就会被保存下来。

###修改```Header```

_config.yml可以修改博客的标题和副标题，如果你想做更多的修改，你可以去编辑/source/_includes/custom/header.html，它看起来是这样的：

	<hgroup>
	  <h1><a href="{{ root_url }}/">{{ site.title }}</a></h1>
	  {% if site.subtitle %}
	    <h2>{{ site.subtitle }}</h2>
	  {% endif %}
	</hgroup>

###修改导航栏```Navigation```

需要在导航栏修改或添加链接，你可以编辑/source/_includes/custom/navigation.html，它看起来就是这样的：

	<ul class="main-navigation">
	  <li><a href="{{ root_url }}/">Blog</a></li>
	  <li><a href="{{ root_url }}/archives">Archives</a></li>
	</ul>

每个href都是以{{ root_url }}开始的（如果你的博客部署在一个子目录，Octopress在写链接的时候不同于其他博客）。如果你将你的网站部署在一个子目录,例如：yoursite.com/octopress，你需要将在每条链接前添加{{ root_url }}。

###修改页脚```Footer```

在source/_includes/custom/footer.html中，你可以自定义你的页脚，它看起来是这样的：

	<p>
	  Copyright &copy; {{ site.time | date: "%Y" }} - {{ site.author }} -
	  <span class="credit">Powered by <a href="http://octopress.org">Octopress</a></span>
	</p>

你想怎么修改就怎么修改吧，但是请保留Octopress的链接，这是对开发者的尊重。