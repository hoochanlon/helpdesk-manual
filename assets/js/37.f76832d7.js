(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{311:function(t,e,a){"use strict";a.r(e);var s=a(10),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"初体验阿里云服务器及被攻击后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初体验阿里云服务器及被攻击后"}},[t._v("#")]),t._v(" 初体验阿里云服务器及被攻击后")]),t._v(" "),e("p",[t._v("阿里云发给我短信，检测到了网上的恶意脚本攻击。扫描到我云主机，并用脚本恶意破坏系统与Ddos攻击的“黑客”。据查为： https://github.com/Tremblae/Tremble 。其实，早在发我短信前，他们安全团队实际上老早知道并分析过这个事了…")]),t._v(" "),e("h2",{attrs:{id:"初步操作连接、配置、上传与下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初步操作连接、配置、上传与下载"}},[t._v("#")]),t._v(" 初步操作连接、配置、上传与下载")]),t._v(" "),e("p",[t._v("连接主机输入主机密码，设置主机名。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 连接主机\nssh root@公网IP\n# 设置主机名\nhostnamectl set-hostname xiaohong\n# 正常设置主机名需要重启，执行bash刷新\nbash\n")])])]),e("p",[t._v("现象：由于ssh的加密性质，电脑重装之后，远程输入密码就登陆不上了。解决办法：电脑设置一次VNC，此时需要删除ssh的hnown_hosts。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("rm -rf ~/.ssh/known_hosts && rm -rf ~/.ssh/known_hosts.old\n")])])]),e("p",[t._v("从Linux下载文件到本地，先安装lrzsz")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum install lrzsz\n")])])]),e("ul",[e("li",[e("code",[t._v("sz 对应的文件名")]),t._v(" 即下载。")]),t._v(" "),e("li",[e("code",[t._v("lz 对应的文件名")]),t._v(" 即上传。")])]),t._v(" "),e("h2",{attrs:{id:"网上的恶意脚本攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网上的恶意脚本攻击"}},[t._v("#")]),t._v(" 网上的恶意脚本攻击")]),t._v(" "),e("p",[t._v("扫描到我云主机，并用脚本恶意破坏系统与Ddos攻击的“黑客”。据查为： https://github.com/Tremblae/Tremble 。")]),t._v(" "),e("ul",[e("li",[t._v("写好正则的手法去扫描检测公网云主机")]),t._v(" "),e("li",[t._v("通过常用的开放端口，不断用数据字典暴力破解密码，或是其他后门绕开密码，植入脚本")]),t._v(" "),e("li",[t._v("用脚本或打包好的二进制程序，卸载系统组件，乱改文件造成系统不稳定，并开放主机其他端口Ddos别人")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/hoochanlon/Free-NTFS-for-Mac/shashin/zei.png",alt:""}})]),t._v(" "),e("p",[t._v("处理办法：")]),t._v(" "),e("p",[t._v('关闭自己不用的桌面系统远程端口，如Windows，3389。“0.0.0.0/0”是任何人都能访问的，自己可临时百度IP，用公网IP登录。设置在“云服务器ECS” -> "ECS安全组"，编辑即可。')]),t._v(" "),e("p",[t._v("阿里云技术支持的推荐")]),t._v(" "),e("ul",[e("li",[t._v("操作系统加固：https://help.aliyun.com/knowledge_list/60787.html")]),t._v(" "),e("li",[t._v("web应用加固：https://help.aliyun.com/knowledge_list/60792.html")])]),t._v(" "),e("h3",{attrs:{id:"linux那奇葩的防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux那奇葩的防火墙"}},[t._v("#")]),t._v(" Linux那奇葩的防火墙")]),t._v(" "),e("p",[t._v("Linux的逻辑和我们平常见到的图形操作系统Windows、macOS不太一样，指定一个某某程序，禁止它们联网。在Windows、macOS很容易做到，但在Linux却不是很好办...防火墙主要针对于web、ftp等这类资源访问服务器的。而且呢，这类不少的软件产品也是要钱的。看来正版Windows贵，使用起来也为广大人民群众所接受的产品，这也是有道理的。Linux难用但免费，不过是企业省钱，加之术业有专攻罢了。")]),t._v(" "),e("p",[t._v("阿里云客服给我找来了"),e("a",{attrs:{href:"https://www.zhihu.com/question/419420632",target:"_blank",rel:"noopener noreferrer"}},[t._v("“创建新用户，限制新用户联网”的解决方案"),e("OutboundLink")],1),t._v("，着实脑洞新奇。也确实，一个软件可能存在此相关的多个进程联网；而且还要一一知晓每个软件的联网进程名，这太反人类了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hoochanlon/ihs-simple/AQUICK/catzhihufwlinux.png",alt:""}})]),t._v(" "),e("p",[t._v("现在的Linux，通过web访问，也有图形化的配置界面了，安装软件什么的，也如同Windows一样简单。就比如说"),e("a",{attrs:{href:"https://github.com/midoks/mdserver-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdserver-web"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.bt.cn/new/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("宝塔面板"),e("OutboundLink")],1),t._v("，也难怪这么多卖防火墙的，像深信服、山石都是的，以及阿里搞什么加钱购买的云盾防火墙，就是这个理。")]),t._v(" "),e("p",[t._v("根据这情况那就备些防火墙相关的常用命令吧，把GitHub及对其加速CDN，一块ban了吧。等需要时，再来解禁一下这些主机IP。这个嘛，倒是可以做个一键脚本。")]),t._v(" "),e("h4",{attrs:{id:"firewall-cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#firewall-cmd"}},[t._v("#")]),t._v(" firewall-cmd")]),t._v(" "),e("p",[t._v("使用firewall-cmd，需将系统的防火墙服务打开。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl start firewalld\n")])])]),e("p",[t._v("禁止192.168.128.137访问主机，如果要取消的话，将"),e("code",[t._v("--add")]),t._v("换成"),e("code",[t._v("--remove")]),t._v("就好。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' firewall-cmd --permanent --add-rich-rule=\'rule family="ipv4" source address="192.168.128.137" drop\'\n')])])]),e("p",[t._v("重载并查看规则条目")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("firewall-cmd --reload  && firewall-cmd --list-rich-rules\n")])])]),e("p",[t._v("细致到禁用对方主机具体访问端口的话，复制如下命令。参数：filter，本地数据限制；-s源地址，-d目的地址，-p协议，--dport端口，-j行为/REJECT拒绝/ACCEPT同意/DROP丢弃。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("firewall-cmd --direct  -add -rule ipv4 filter INPUT  1 -s  172.25.254.50  -p  tcp   -dport  22 -j  REJECT\n")])])]),e("p",[t._v("参考："),e("a",{attrs:{href:"https://www.cnblogs.com/diantong/p/9713915.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园-Linux命令之firewall-cmd"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://blog.csdn.net/weixin_43780179/article/details/125046304",target:"_blank",rel:"noopener noreferrer"}},[t._v("csdn-Linux系统上的防火墙命令"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.likecs.com/show-203862572.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("爱码网-linux下防火墙的管理工具firewall-cmd"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);