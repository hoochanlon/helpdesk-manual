(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{311:function(t,e,r){"use strict";r.r(e);var a=r(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"存储知识储备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储知识储备"}},[t._v("#")]),t._v(" 存储知识储备")]),t._v(" "),e("h2",{attrs:{id:"磁盘类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘类型"}},[t._v("#")]),t._v(" 磁盘类型")]),t._v(" "),e("p",[t._v("计算机从硬盘读取数据，数据再转入内存，cpu往内存条中取数据进行运算，硬盘速度决定了平台的启动速度。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://post.smzdm.com/p/aoow85z7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("西部数据硬盘 篇一：绿盘、红盘、蓝盘、紫盘、黑盘和金盘的区别"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://m.lotpc.com/yjzs/3954.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("西部数据绿盘、蓝盘、黑盘、红盘和紫盘的区别"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("概括：外观就跟我们平时在自己台式主机看到的机械硬盘一样，只是颜色不一样（颜色有功能应用区分）。还不明白的话淘宝上图问问卖硬盘的客服就相当具体了。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/267340678/answer/1286482914",target:"_blank",rel:"noopener noreferrer"}},[t._v("固态硬盘跟机械硬盘有什么区别？ - 牛鸽的回答 - 知乎 "),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("要点梳理：固态也不用担心写入数据限制，每天写入上百来TB都可以用近3年，由于实现机制不同固态数据恢复比机械数据恢复麻烦。灰尘若是透过空气过滤器进入机械硬盘内部，导致磁盘产生坏道，坏道严重的就报废了。")]),t._v(" "),e("h2",{attrs:{id:"动态磁盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态磁盘"}},[t._v("#")]),t._v(" 动态磁盘")]),t._v(" "),e("p",[e("strong",[t._v("⚠️动态磁盘转换成基本磁盘，由于动态盘的卷在物理内存上可能不连续，因此直接将动态盘转为基本盘时数据会被清空，特别是企业加密硬盘可能依赖于分区表凭据解密，因此这是我们扩容禁用此选项的红线。")])]),t._v(" "),e("p",[t._v("跨分区合并分区就要用到动态磁盘功能")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/5I6Tloc7Gy2AsgQ.png",alt:"image-20210316150606566.png"}})]),t._v(" "),e("h2",{attrs:{id:"磁盘阵列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘阵列"}},[t._v("#")]),t._v(" 磁盘阵列")]),t._v(" "),e("h3",{attrs:{id:"软件raid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件raid"}},[t._v("#")]),t._v(" 软件RAID")]),t._v(" "),e("blockquote",[e("p",[t._v("摘录 "),e("a",{attrs:{href:"http://www.winwin7.com/jc/anzhuang-21458.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("win7系统之家-AHCI和RAID有什么区别？AHCI和RAID哪个好"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("ahci本身在接入多只硬盘时，所有盘都独立工作，而raid在接入多只硬盘时，可以让多只盘联合工作以实现对性能的叠加提升整体性能。RAID只有在多硬盘，如一个固态+一个机械以提升总体性能。如果只有一个硬盘，那也就直接使用AHCI就可以了。")])]),t._v(" "),e("p",[t._v("使用RAID1目的是为做镜像硬盘，适用于：金融、数据库等；RAID5是为了多块硬盘的数据恢复（奇偶校验重构恢复数据），适用于：文件服务器、应用服务器。")]),t._v(" "),e("ul",[e("li",[t._v("RAID0：用于数据彻底丢失风险，速度快，但可用于图像视频编辑与带宽传输")]),t._v(" "),e("li",[t._v("RAID3：用于视频、图像生成与编辑验证，相对较快，每次只读写一次I/O，如在线wps")])]),t._v(" "),e("blockquote",[e("p",[t._v("参考："),e("a",{attrs:{href:"https://wenku.baidu.com/view/4966c40226fff705cd170a12.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-华为-存储和相关基础知识"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("将多块非系统盘的物理磁盘转换为动态磁盘创建RAID卷，即是软件的RAID实现。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/IZf86FNPEgs4i7r.png",alt:"image-20210316180220247.png"}})]),t._v(" "),e("h3",{attrs:{id:"硬件raid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件raid"}},[t._v("#")]),t._v(" 硬件RAID")]),t._v(" "),e("p",[t._v("由于硬件属于偏向实操操作建议翻阅文档再来观看视频了解，这里推荐如下几个链接：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wenku.baidu.com/view/40ecca401eb91a37f1115cde.html?rec_flag=default",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-RAID卡培训1113"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wenku.baidu.com/view/2919cf18842458fb770bf78a6529647d26283472.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-磁盘阵列的安装方法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1Bx411e76F",target:"_blank",rel:"noopener noreferrer"}},[t._v("bilibili-EP5 - 为DL380 G6安装内存 CPU与配置磁盘阵列"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("摘自 "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/149145016",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎-软件RAID与硬件RAID的优缺点"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("软件RAID与硬件RAID：应选择哪一个？")])]),t._v(" "),e("p",[t._v("在软件RAID和硬件RAID之间进行选择取决于你需要做什么和成本。")]),t._v(" "),e("p",[t._v("如果预算紧张，并且使用的是RAID 0或RAID 1，则软件RAID和硬件RAID不会有太大区别。如果在使用计算密集型RAID 5和RAID 6时需要最高的性能，则应选择硬件RAID，因为软件RAID确实会损害性能。此外，软件RAID通常不支持深奥的RAID级别，例如RAID 10。在这种情况下，需要硬件RAID。")])]),t._v(" "),e("h2",{attrs:{id:"网络存储拓扑结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络存储拓扑结构"}},[t._v("#")]),t._v(" 网络存储拓扑结构")]),t._v(" "),e("p",[t._v("DAS/NAS/SAN比较")]),t._v(" "),e("blockquote",[e("p",[t._v("图组自 "),e("a",{attrs:{href:"https://wenku.baidu.com/view/83fb4ac6bb4cf7ec4afed0ce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-磁盘阵列详解"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://wenku.baidu.com/view/800fef13541252d380eb6294dd88d0d232d43c0e.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.网络存储技术及应用"),e("OutboundLink")],1),t._v(" "),e("img",{attrs:{src:"https://i.loli.net/2021/03/17/m1h7owH3ePEIcXk.png",alt:"image-20210317221932892.png"}})])]),t._v(" "),e("blockquote",[e("p",[t._v("图摘自 "),e("a",{attrs:{href:"https://wenku.baidu.com/view/e817433ba65177232f60ddccda38376baf1fe0de.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-第四章 存储网络技术与应用"),e("OutboundLink")],1),t._v(" （注意阅读全文文档了解存储硬件组件知识）")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/64sRkQKI1atvGPX.png",alt:"image-20210317222910546.png"}})]),t._v(" "),e("p",[t._v("🔦 如果朝这再往深究成了服务器硬件工程师方向发展，其实我们桌维网管而言，更偏向于自身所处环境的技能职业发展，如果所在企业侧重于ERP、MES就朝着此类方向发展也没错，其他堡垒机、Linux数据库（腰部运维）的安全运营方向也是如此，视环境情况而定。")]),t._v(" "),e("h2",{attrs:{id:"灾备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#灾备"}},[t._v("#")]),t._v(" 灾备")]),t._v(" "),e("blockquote",[e("p",[t._v("以下图引用 "),e("a",{attrs:{href:"https://wenku.baidu.com/view/296cbbde0b4e767f5acfceef.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-存储基础知识应知应会"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("备份方式举例说明：完全备份时每天都做全备份；而增量备份和差异备份策略是：周日做一次全备份，一周7天为1个备份周期。如遇突发断电导致数据库结构内容异常，此备份可即时还原修复。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/fuo94nx7Q3OE6Xv.png",alt:"image-20210316193513646.png"}})]),t._v(" "),e("p",[t._v("容灾备份层次略览")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/yjphWSGk1LUFzi2.png",alt:"image-20210316194305562.png"}})]),t._v(" "),e("p",[t._v("cad、computer Aided Manufacturing、Computer Aided Process Planning，再加上额外的信息管理系统。从图中的建设成本应该是具备一定规模化的资源集成环境的企业实施的，建设成本应该是不低的。这里牵涉到的存储知识是关于产品资料管理方面的，PDM。")]),t._v(" "),e("blockquote",[e("p",[t._v("引用 "),e("a",{attrs:{href:"https://www.sohu.com/a/259032684_100193655",target:"_blank",rel:"noopener noreferrer"}},[t._v("sohu-PDM技术概述 "),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/VL3CzTcj48ukP6m.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"公司部门员工备份实际情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公司部门员工备份实际情况"}},[t._v("#")]),t._v(" 公司部门员工备份实际情况")]),t._v(" "),e("p",[t._v("公司各部门间其实也是有备份机制的，只是对于我们而言又是透明的。因为我们并不清楚公司其他部门各个职位工作流程，平时工作的大多数时间都是主机硬件、软件维护，不涉及到文职业务型数据、开发源代码数据，自然不了解其还有文件服务器用于版本控制、协同更新。")]),t._v(" "),e("p",[t._v("一些相关规定可参考如下链接，或者咨询公司各部门同事，做一个全面了解。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wenku.baidu.com/view/f73de79a824d2b160b4e767f5acfa1c7aa00828a.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-公司数据备份管理规定"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wenku.baidu.com/view/661faa1054270722192e453610661ed9ad515570.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-公司各部门上报信息时间节点"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wenku.baidu.com/view/55832393a78da0116c175f0e7cd184254b351ba4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度文库-数据备份与恢复管理制度"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("为规范备份管理工作，合理存储历史数据及保证数据的安全性，防止因硬件故障、意外断电、病毒等因素造成数据的丢失，保障公司正常的知识产权利益和技术资料的储备，许多公司都会建立相应的数据上传到公司部门文件服务器的制度。严格的还有上传时间强制性要求。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/SQ8vth692sRfdOa.png",alt:"截屏2021-03-17 上午11.46.27.png"}})]),t._v(" "),e("h2",{attrs:{id:"个人了解风险及预防并分析压力源的意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#个人了解风险及预防并分析压力源的意义"}},[t._v("#")]),t._v(" 个人了解风险及预防并分析压力源的意义")]),t._v(" "),e("p",[t._v("存储知识储备主要在于数据的风险防范与应对，以及工作过失抗压能力，至少要了解自己心态失衡的各方面压力来源的原因，也只有做好准备才能积极应对。为此需要对存储介质的特殊概念知识应用需要做好一定了解。")]),t._v(" "),e("p",[t._v("在了解了这些后，我们不会因突发数据异常而一时间没有储备措施以及解决办法，惊慌失措导致心态崩溃丧失了应对能力。其实压力是由多方面形成的，并不是单一项的任务完成不完成的问题，所以我们要尽可能地从多个人和事还有时间地点进行详细分析。")]),t._v(" "),e("p",[t._v("事件压力源模型图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/03/17/fqCc9WxX5K7Uy8P.png",alt:"image-20210317170148707.png"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);