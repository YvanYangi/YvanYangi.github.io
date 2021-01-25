(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{540:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(4),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"git进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" Git进阶")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://morvanzhou.github.io/tutorials/others/git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"删除本地目录下所有git控制文件-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除本地目录下所有git控制文件-git","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除本地目录下所有git控制文件(.git)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -name "),a("span",{attrs:{class:"token string"}},[t._v('".git"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -Rf\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"分支管理-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理-branch","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支管理 branch")]),t._v(" "),a("ul",[a("li",[t._v("建立分支:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch dev    "),a("span",{attrs:{class:"token comment"}},[t._v("# 建立 dev 分支")]),t._v("\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch        "),a("span",{attrs:{class:"token comment"}},[t._v("# 查看当前分支")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 输出")]),t._v("\ndev       \n* master    "),a("span",{attrs:{class:"token comment"}},[t._v("# * 代表了当前的 HEAD 所在的分支  ")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("切换分支"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 输出")]),t._v("\nSwitched to branch "),a("span",{attrs:{class:"token string"}},[t._v("'dev'")]),t._v("\n--------------------------\n$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 输出")]),t._v("\n* dev       "),a("span",{attrs:{class:"token comment"}},[t._v("# 这时 HEAD 已经被切换至 dev 分支")]),t._v("\n  master\n")])])])])])])},[],!1,null,null,null);r.options.__file="git-advanced.md";s.default=r.exports}}]);