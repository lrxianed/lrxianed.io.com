---
layout: page
title: "Backtick Code Blocks 代码高亮"
date: 2013-08-24 00:21
footer: false
---
有了此插件，你可以在文章中随意地插入代码，你还可以附带上代码标题以及下载链接。规则很简单，一看就懂。

##代码

    ``` 语言种类 标题 下载链接 下载链接的标题
        代码区
    ``` 
 
##一个例子讲解

    ``` ruby Discover if a number is prime http://www.noulakaz.net 源码下载
    class Fixnum
      def prime?
        ('1' * self) !~ /^1?$|^(11+?)\1+$/
      end
    end
    ```
    
``` ruby Discover if a number is prime http://www.noulakaz.net 源码下载
class Fixnum
  def prime?
    ('1' * self) !~ /^1?$|^(11+?)\1+$/
  end
end
```

###注意：
* 所有参数都是不必要的。不填就没有代码标题、代码高亮等效果；
* ruby    #先写明语言种类；
* Discover if a number is prime    #代码区块的标题；
* http://www.noulakaz.net    #代码的下载链接地址；
* 源码下载    #下载链接的标题；