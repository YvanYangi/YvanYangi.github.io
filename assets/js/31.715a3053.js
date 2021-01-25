(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{544:function(t,e,i){"use strict";i.r(e);var v={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=i(4),_=Object(a.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[i("h1",{attrs:{id:"缓存"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),i("h3",{attrs:{id:"redis缓存穿透-缓存击穿-缓存雪崩"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存穿透-缓存击穿-缓存雪崩","aria-hidden":"true"}},[t._v("#")]),t._v(" redis缓存穿透,缓存击穿,缓存雪崩")]),t._v(" "),i("p",[t._v("缓存穿透，是指缓存和数据库中都没有的数据，而用户不断发起请求，如发起为id为“-1”的数据或id为特别大不存在的数据。这时的用户很可能是攻击者，攻击会导致数据库压力过大。")]),t._v(" "),i("p",[t._v("解决方案:")]),t._v(" "),i("ul",[i("li",[t._v("缓存空值")]),t._v(" "),i("li",[t._v("接口用户鉴权,非法参数校验等")])]),t._v(" "),i("p",[t._v("缓存击穿，是指缓存中没有但数据库中有的数据（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力")]),t._v(" "),i("p",[t._v("缓存雪崩，是指缓存中数据大批量到过期时间，而查询数据量巨大，引起数据库压力过大甚至宕机。和缓存击穿不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查数据库。")]),t._v(" "),i("p",[t._v("解决方案:")]),t._v(" "),i("ul",[i("li",[t._v("设置过期时间设置随机")]),t._v(" "),i("li",[t._v("设置热点数据永不过期")]),t._v(" "),i("li",[t._v("双缓存机制")]),t._v(" "),i("li",[t._v("互斥锁:缓存中没有数据时,获取锁并去数据库中查询数据,此时其他的线程等待一段时间再重新获取数据")])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"redis缓存预热-缓存更新-缓存降级"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存预热-缓存更新-缓存降级","aria-hidden":"true"}},[t._v("#")]),t._v(" redis缓存预热,缓存更新,缓存降级")]),t._v(" "),i("p",[t._v("缓存预热，是指系统上线后，先将数据加载到缓存系统，手动或定时刷新。")]),t._v(" "),i("p",[t._v("缓存更新，是指根据需要定期或触发清理过期或不需要的缓存。")]),t._v(" "),i("p",[t._v("如：")]),t._v(" "),i("ul",[i("li",[t._v("定时去清理过期的缓存；")]),t._v(" "),i("li",[t._v("当有用户请求过来时，再判断这个请求所用到的缓存是否过期。")])]),t._v(" "),i("p",[t._v("缓存降级，是为保证核心服务可用，使部分关键数据自动降级，同时也可避免缓存雪崩。")]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"布隆过滤器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器","aria-hidden":"true"}},[t._v("#")]),t._v(" 布隆过滤器")]),t._v(" "),i("p",[t._v("布隆过滤器 可以把它看作由二进制向量（或者说位数组）和一系列随机映射函数（哈希函数）两部分组成的数据结构。位数组中的每个元素都只占用 1 bit ，并且每个元素只能是 0 或者 1。")]),t._v(" "),i("p",[t._v("它占用空间更少并且效率更高，但是缺点是其返回的结果是概率性的。理论情况下添加到集合中的元素越多，误报的可能性就越大。并且，存放在布隆过滤器的数据不容易删除。")]),t._v(" "),i("p",[t._v("当一个元素加入布隆过滤器中的时候，会进行如下操作：")]),t._v(" "),i("ol",[i("li",[t._v("使用布隆过滤器中的哈希函数对元素值进行计算，得到哈希值（有几个哈希函数得到几个哈希值）。")]),t._v(" "),i("li",[t._v("根据得到的哈希值，在位数组中把对应下标的值置为1。")])]),t._v(" "),i("p",[t._v("当判断一个元素是否存在于布隆过滤器的时候，会进行如下操作：")]),t._v(" "),i("ol",[i("li",[t._v("对给定元素再次进行相同的哈希计算；")]),t._v(" "),i("li",[t._v("得到值之后判断位数组中的每个元素是否都为 1，如果值都为 1，那么说明这个值在布隆过滤器中，如果存在一个值不为 1，说明该元素不在布隆过滤器中。")])]),t._v(" "),i("p",[i("img",{attrs:{src:"/img/java-guide/cache/bloom.png",alt:"avatar"}})]),t._v(" "),i("blockquote",[i("p",[t._v("不同的字符串可能哈希出来的位置相同，这种情况我们可以适当增加位数组大小或者调整我们的哈希函数。")])]),t._v(" "),i("p",[t._v("综上，我们可以得出：布隆过滤器说某个元素存在，小概率会误判。布隆过滤器说某个元素不在，那么这个元素一定不在。")]),t._v(" "),i("p",[t._v("使用场景：")]),t._v(" "),i("ul",[i("li",[t._v("判断给定数据是否存在：比如判断一个数字是否存在于包含大量数字的数字集中（数字集很大，5亿以上！）、 防止缓存穿透（判断请求的数据是否有效避免直接绕过缓存请求数据库）等等、邮箱的垃圾邮件过滤、黑名单功能等等。")]),t._v(" "),i("li",[t._v("去重：比如爬给定网址的时候对已经爬取过的 URL 去重。")])]),t._v(" "),i("p",[t._v("布隆过滤器实现：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Google开源的 Guava中自带的布隆过滤器")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("#引入依赖\n<dependency>\n    <groupId>com.google.guava</groupId>\n    <artifactId>guava</artifactId>\n    <version>28.0-jre</version>\n</dependency>\n")])])]),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("// 创建布隆过滤器对象\nBloomFilter<Integer> filter = BloomFilter.create(\n        Funnels.integerFunnel(),\n        1500,   //最多存放最多1500个整数的布隆过滤器\n        0.01);  //容忍误判的概率为百分之0.01\n// 判断指定元素是否存在\nSystem.out.println(filter.mightContain(1));\nSystem.out.println(filter.mightContain(2));\n// 将元素添加进布隆过滤器\nfilter.put(1);\nfilter.put(2);\nSystem.out.println(filter.mightContain(1));\nSystem.out.println(filter.mightContain(2));\n")])])]),i("p",[t._v("当mightContain（）方法返回true时，我们可以99％确定该元素在过滤器中，当过滤器返回false时，我们可以100％确定该元素不存在于过滤器中。Guava 提供的布隆过滤器有一个重大的缺陷就是只能单机使用")])]),t._v(" "),i("li",[i("p",[t._v("Redis 中的布隆过滤器")]),t._v(" "),i("p",[t._v("Redis v4.0 之后有了Module（模块/插件）功能，Redis Modules 让 Redis 可以使用外部模块扩展其功能。")]),t._v(" "),i("p",[t._v("官网推荐了一个 RedisBloom 作为 Redis 布隆过滤器的 Module,地址：https://github.com/RedisBloom/RedisBloom.")])])])])},[],!1,null,null,null);_.options.__file="cache.md";e.default=_.exports}}]);