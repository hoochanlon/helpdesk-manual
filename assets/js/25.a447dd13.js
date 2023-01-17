(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{295:function(t,i,a){"use strict";a.r(i);var n=a(10),r=Object(n.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"其他上网问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其他上网问题"}},[t._v("#")]),t._v(" 其他上网问题")]),t._v(" "),i("h2",{attrs:{id:"追踪ip冲突"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#追踪ip冲突"}},[t._v("#")]),t._v(" 追踪IP冲突")]),t._v(" "),i("p",[t._v("通过ping网关提示的“ping传输失败，常见故障”，在"),i("code",[t._v("ipconfig /all")]),t._v("中所显示的IP地址居然是169.254.181.73，在这地址右边括弧首选，更让人愈发莫名其妙不明所以。检查网线、网口是没问题的，把机器换到扫描仪工位启动，情况却依旧如此，可这究竟是什么问题呢？")]),t._v(" "),i("p",[t._v("就在一筹莫展之时，拔掉扫描仪主机的网线，将扫描仪主机的IP更换到我们遇到故障的当前机器上。此时使用"),i("code",[t._v("ipconfig /all")]),t._v("发现ip地址不再是169.254网段，而是我们所设置的192.168.1.xx；于是通过"),i("code",[t._v("arp -a")]),t._v("查看路由跃点找到了故障机器所设置的ip——1.99的mac地址，再ping该ip时，惊奇发现居然能ping通。由此可确定此次异常为ip冲突造成，可究竟是谁？")]),t._v(" "),i("p",[t._v("一般相当规模化的公司一般会将工位上的主机直接与姓名关联，但测试办公区域人员流动性大，测试人员因研发需求通常会自行设定ip地址，由于规定范围不是强制性措施，因此普遍自主设定ip网段数值较为随意。由于经理的IP处在测试的同网段中，IP最后的四位十进制数在随机测试IP的邻近十以内，风险性也随之增高。")]),t._v(" "),i("p",[t._v("使用飞秋输入ip地址并未查找到主机，此时1.99却能依旧ping通，于是我们使用管控端工具去锁定目标。可管控工具只能在主机在线的情况才能看到，于是打开机柜将网线插入核心交换机，将插入交换机的主机改为办公区局域网ip，"),i("code",[t._v("ping 192.168.1.99 -t")]),t._v("，逐根拔网线。")]),t._v(" "),i("p",[t._v("在此事件后，"),i("a",{attrs:{href:"https://jingyan.baidu.com/article/636f38bb82a926d6b8461081.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度经验-如何防止局域网IP冲突 检测并防止电脑IP冲突"),i("OutboundLink")],1),t._v("给了我很好的启发。")]),t._v(" "),i("ul",[i("li",[t._v("使用上网管控软件将IP- Mac绑定")]),t._v(" "),i("li",[t._v("路由器添加静态地址保留")])]),t._v(" "),i("h2",{attrs:{id:"小型服务器上网问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#小型服务器上网问题"}},[t._v("#")]),t._v(" 小型服务器上网问题")]),t._v(" "),i("p",[t._v("同事报故障为“安卓服务器上不了网”，查看IP信息为主机内网IP，另一个网卡IP不知做什么用的，通常主机内网是需要登录上网认证的，可Linux命令行是无法完成这一操作的。网线从信息点端口接入到傻瓜交换机，服务器这边有两个网口，一个连接着交换机，一个连接着路由器，而这究竟代表什么意思呢？")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2021/07/13/cMWJBoiTqLnwZXl.jpg",alt:"56A154BA-4039-4F8D-BA62-AF819A8E1D93_1_105_c.jpeg"}})]),t._v(" "),i("p",[t._v("服务器一般有2-4网卡，这里的服务器有两块网卡，一个网口连接在傻瓜交换机上，另一个接到家用路由器上。一般企业上网的主机是需要进行上网终端认证的，但安卓服务器的系统是Linux命令行界面，所以没办法使用上网认证的终端，也不能登录到网页端。")]),t._v(" "),i("p",[t._v("这个时候，从傻瓜交换机的网口中接入新加入的家用路由器，将家用路由器的ip解除登录认证限制，服务器网关设置成家用路由器的IP地址，再将网口IP设置成路由器同网段内的IP。")]),t._v(" "),i("p",[t._v("从下图中可以感受到实物与拓扑之间的差异，拓扑是条理清晰的，实体由于环境需要被重新规划部署多根网线连接到其他主机或服务器，就显得有些杂乱无章。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://i.loli.net/2021/07/13/ML7DuwlTgJCdnYz.png",alt:"截屏2021-07-13 下午4.40.39.png"}})]),t._v(" "),i("p",[t._v("关于Linux的网络配置修改可参考："),i("a",{attrs:{href:"https://www.cnblogs.com/shuaixf/archive/2011/11/29/2267863.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("shuaixf-Linux修改网络配置"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"从内网hub接入wi-fi路由器到加密客户端主机资源访问通信"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#从内网hub接入wi-fi路由器到加密客户端主机资源访问通信"}},[t._v("#")]),t._v(" 从内网Hub接入Wi-Fi路由器到加密客户端主机资源访问通信")]),t._v(" "),i("p",[t._v("因调试网页手机画面需要，内网上的生成的网页在手机上也能访问到，为了解决这一问题，在内网Hub上接入Wi-Fi路由器，再用手机访问内网主机生成的调试站点。基于这样的设想，我首先在Hub上接上Wi-Fi路由器，wan口配置内网IP，lan口则分配成其他网段，就等着手机连上去访问生成的内网主机站点了。但手机连上Wi-Fi后却访问不了内网主机生成的站点，却不知道为什么，一时半会没想明白，后来经过指点，用拓扑图一画，真是猛然间豁然开朗的感觉，啊，🤦‍♂️，原来内网主机还是得接入到路由器lan口上来访问…")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://s1.xoimg.com/i/2022/05/07/dudlcb.png",alt:"Pasted Graphic"}})]),t._v(" "),i("p",[t._v("接下来就是发生让我十分疑惑不解的现象：接上路由器lan口的主机能ping通内网生成站点的主机、加密服务器、网关，可就是用网页访问不了生成的站点…查看拦截事件找不到有关联的拦截记录，也就发现站点生成器node的拦截记录，经过主管提醒主要的是查找winsock的拦截记录，当还在忙瞎找的同时，主管再一次提起画拓扑图，于是事情也就再一次有了眉目。\n￼\n"),i("img",{attrs:{src:"https://s1.xoimg.com/i/2022/05/07/ducuyr.png",alt:"fafo"}})]),t._v(" "),i("p",[t._v("看一下拓扑的网络访问图示，我恍然察觉我并没有用另一台加密沙盒主机去访问内网生成站点的加密沙盒主机，想到这一点立即实施后惊奇地发现“可以哦”，能正常访问站点的。之后就是为什么找不到拦截记录？也就是找不到拦截记录的原因分析：")]),t._v(" "),i("ul",[i("li",[t._v("受总控影响，加密沙盒客户端拒绝向外部发送资源，只能是都装有沙盒主机相互访问文件资源")]),t._v(" "),i("li",[t._v("沙盒服务器端，由于是主控的原因，可能并不受多台沙盒主机配对一致才能访问的影响")])]),t._v(" "),i("p",[t._v("由于手机并没有沙盒客户端，所以这事也就暂时先用着仿真软件模拟实机测试网页画面了。事后细想，一开始内网IP不能ping通同级路由器下的lan口子网想不明白，其实上我对"),i("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/147990921",target:"_blank",rel:"noopener noreferrer"}},[t._v("静态路由"),i("OutboundLink")],1),t._v("的不理解，知识点也相当不扎实；在追踪拦截记录上，后来也是查阅了相关winsock的资料："),i("a",{attrs:{href:"https://wenku.baidu.com/view/9e1b09c2cad376eeaeaad1f34693daef5ef7133f.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("winsock简介"),i("OutboundLink")],1),t._v("，了解了为什么针对winsock拦截的原因；加密客户端通信机制与资源访问上，由于我缺乏基础了解该软件产品特性，逻辑推理嘛，很差…临场能力有待加强。")])])}),[],!1,null,null,null);i.default=r.exports}}]);