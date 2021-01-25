(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{527:function(e,t,a){"use strict";a.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},v=a(4),s=Object(v.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"git介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" Git介绍")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/yhaing/p/8473515.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("git详解参考资料"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"分支总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支总览","aria-hidden":"true"}},[e._v("#")]),e._v(" 分支总览")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/version-control/1.png",alt:"image"}})]),e._v(" "),a("p",[e._v("各分支说明：")]),e._v(" "),a("ul",[a("li",[e._v("master: 主分支，主要用来版本发布，不能直接在该分支上开发。")]),e._v(" "),a("li",[e._v("develop：日常开发分支，该分支正常保存了开发的最新代码。所有新功能以这个分支来创建自己的开发分支，该分支只做只合并操作，不能直接在该分支上开发")]),e._v(" "),a("li",[e._v("feature：功能开发分支，在develop上创建分支，以自己开发功能模块命名(feature-alert)，功能测试正常后合并到develop分支。")]),e._v(" "),a("li",[e._v("release：release 分支可以认为是 master 分支的未测试版。比如说某一期的功能全部开发完成，那么就将 develop 分支合并到 release 分支，测试没有问题并且到了发布日期就合并到 - hotfix：线上 bug 修复分支。")]),e._v(" "),a("li",[e._v("除此之后还可以有 fast-track 等分支。")])]),e._v(" "),a("h3",{attrs:{id:"主分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 主分支")]),e._v(" "),a("p",[e._v("主分支包括 master 分支和 develop 分支。master 分支用来发布，HEAD 就是当前线上的运行代码。develop 分支就是我们的日常开发。使用这两个分支就具有了最简单的开发模式：develop 分支用来开发功能，开发完成并且测试没有问题则将 develop 分支的代码合并到 master 分支并发布。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/version-control/2.png",alt:"avatar"}})]),e._v(" "),a("p",[e._v("这引入了几个问题：")]),e._v(" "),a("ol",[a("li",[e._v("develop 分支只有发布完了才能进行下一个版本开发，开发会比较缓慢。")]),e._v(" "),a("li",[e._v("线上代码出现 bug 如何进行 bug 修复。")])]),e._v(" "),a("h3",{attrs:{id:"辅助分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 辅助分支")]),e._v(" "),a("p",[e._v("主要介绍的辅助分支如下：")]),e._v(" "),a("ul",[a("li",[e._v("feature 分支")]),e._v(" "),a("li",[e._v("release 分支")]),e._v(" "),a("li",[e._v("hotfix 分支")])]),e._v(" "),a("p",[e._v("通过这些分支，我们可以做到：团队成员之间并行开发，feature track 更加容易，开发和发布并行以及线上问题修复。")]),e._v(" "),a("h3",{attrs:{id:"feature-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-分支","aria-hidden":"true"}},[e._v("#")]),e._v(" Feature 分支")]),e._v(" "),a("p",[e._v("feature 分支用来开发具体的功能，一般 fork 自 develop 分支，最终可能会合并到 develop 分支。比如我们要在下一个版本增加功能1、功能2、功能3。那么我们就可以起三个feature 分支：feature1，feature2，feature3。（feature 分支命名最好能够自解释，这并不是一种好的命名。）随着我们开发，功能1和功能2都被完成了，而功能3因为某些原因完成不了，那么最终 feature1 和 feature2 分支将被合并到 develop 分支，而 feature3 分支将被干掉。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/version-control/3.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"release-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-分支","aria-hidden":"true"}},[e._v("#")]),e._v(" Release 分支")]),e._v(" "),a("p",[e._v("release 分支在我看来是 pre-master。release 分支从 develop 分支 fork 出来，最终会合并到 develop 分支和 master 分支。合并到 master 分支上就是可以发布的代码了。有人可能会问那为什么合并回 develop 分支呢？很简单，有了 release 分支，那么相关的代码修复就只会在 release 分支上改动了，最后必然要合并到 develop 分支。下面细说。")]),e._v(" "),a("p",[e._v("我们最初所有的开发工作都在 develop 分支上，当我们这一期的功能开发完毕的时候，我们基于 develop 分支开一个新的 release 分支。这个时候我们就可以对 release 分支做统一的测试了，另外做一些发布准备工作：比如版本号之类的。")]),e._v(" "),a("p",[e._v("如果测试工作或者发布准备工作和具体的开发工作由不同人来做，比如国内的 RD 和 QA，这个 RD 就可以继续基于 develop 分支继续开发了。再或者说公司对于发布有严格的时间控制，开发工作提前并且完美的完成了，这个时候我们就可以在 develop 分支上继续我们下一期的开发了。同时如果测试有问题的话，我们将直接在 release 分支上修改，然后将修改合并到 develop 分支上。")]),e._v(" "),a("p",[e._v("待所有的测试和准备工作做完之后，我们就可以将 release 分支合并到 master 分支上，并进行发布了。")]),e._v(" "),a("h3",{attrs:{id:"hotfix-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotfix-分支","aria-hidden":"true"}},[e._v("#")]),e._v(" Hotfix 分支")]),e._v(" "),a("p",[e._v("顾名思义，hotfix 分支用来修复线上 bug。当线上代码出现 bug 时，我们基于 master 分支开一个 hotfix 分支，修复 bug 之后再将 hotfix 分支合并到 master 分支并进行发布，同时 develop 分支作为最新最全的代码分支，hotfix 分支也需要合并到 develop 分支上去。仔细想一想，其实 hotfix 分支和 release 分支功能类似。hotfix 的好处是不打断 develop 分支正常进行，同时对于现实代码的修复貌似也没有更好的方法了（总不能直接修改 master 代码吧:D）。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/version-control/4.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"git-commit-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-信息","aria-hidden":"true"}},[e._v("#")]),e._v(" Git Commit 信息")]),e._v(" "),a("ul",[a("li",[e._v("用一个空行隔开标题和正文")]),e._v(" "),a("li",[e._v("限制标题字数在 50 个字符内")]),e._v(" "),a("li",[e._v("用大写字母写标题行")]),e._v(" "),a("li",[e._v("不要用句号结束标题行")]),e._v(" "),a("li",[e._v("在标题行使用祈使语气")]),e._v(" "),a("li",[e._v("正文在 72 个字符处换行")]),e._v(" "),a("li",[e._v("使用正文解释是什么和为什么，而不是如何做")])])])},[],!1,null,null,null);s.options.__file="git.md";t.default=s.exports}}]);