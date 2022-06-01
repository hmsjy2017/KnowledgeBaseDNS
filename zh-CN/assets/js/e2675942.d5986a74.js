"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[107],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return N}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=u(r),N=a,m=c["".concat(i,".").concat(N)]||c[N]||s[N]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function N(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3911:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(4137)),o=["components"],d={title:"DNS \u8fc7\u6ee4",sidebar_position:1},i=void 0,u={unversionedId:"general/dns-filtering",id:"general/dns-filtering",isDocsHomePage:!1,title:"DNS \u8fc7\u6ee4",description:"\u4e3a\u4e86\u66f4\u597d\u4e86\u89e3 DNS \u8fc7\u6ee4\uff0c\u9996\u5148\u6211\u4eec\u8981\u56de\u7b54\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u201c\u4ec0\u4e48\u662f DNS\u201d\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/zh-CN/general/dns-filtering",editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",version:"current",sidebarPosition:1,frontMatter:{title:"DNS \u8fc7\u6ee4",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/zh-CN/"},next:{title:"DNS \u8fc7\u6ee4\u89c4\u5219\u8bed\u6cd5",permalink:"/KnowledgeBaseDNS/zh-CN/general/dns-filtering-syntax"}},p=[{value:"DNS \u662f\u4ec0\u4e48\uff1f",id:"dns-\u662f\u4ec0\u4e48\uff1f",children:[]},{value:"DNS \u8fc7\u6ee4\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48\uff1f",id:"dns-\u8fc7\u6ee4\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48\uff1f",children:[{value:"DNS \u670d\u52a1\u5668",id:"dns-\u670d\u52a1\u5668",children:[]},{value:"\u672c\u5730 DNS \u62e6\u622a\u5217\u8868",id:"\u672c\u5730-dns-\u62e6\u622a\u5217\u8868",children:[]}]},{value:"DNS \u8fc7\u6ee4\u4e0e\u7f51\u7edc\u5c42\u9762\u8fc7\u6ee4\u7684\u5bf9\u6bd4",id:"dns-\u8fc7\u6ee4\u4e0e\u7f51\u7edc\u5c42\u9762\u8fc7\u6ee4\u7684\u5bf9\u6bd4",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u4e86\u89e3 DNS \u8fc7\u6ee4\uff0c\u9996\u5148\u6211\u4eec\u8981\u56de\u7b54\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u201c\u4ec0\u4e48\u662f DNS\u201d\uff1f"),(0,l.kt)("h2",{id:"dns-\u662f\u4ec0\u4e48\uff1f"},"DNS \u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"DNS \u662f\u6307\u201c\u57df\u540d\u7cfb\u7edf\u201d\u3002\u5b83\u7684\u76ee\u6807\u662f\u5c06\u7f51\u7ad9\u540d\u79f0\u8f6c\u6362\u6210\u6d4f\u89c8\u5668\u80fd\u8bc6\u522b\u7684 IP \u5730\u5740\u3002 \u56e0\u6b64\uff0c\u6bcf\u6b21\u60a8\u8bbf\u95ee\u7f51\u7ad9\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u90fd\u80fd\u7ed9\u7279\u5b9a\u670d\u52a1\u5668\uff08DNS \u670d\u52a1\u5668\uff09\u53d1\u9001\u8bf7\u6c42\u3002 \u8be5\u670d\u52a1\u5668\u4f1a\u67e5\u770b\u88ab\u8bf7\u6c42\u7684\u57df\u540d\uff0c\u5e76\u4e14\u7528\u5bf9\u5e94\u7684 IP \u5730\u5740\u54cd\u5e94\u3002 Very schematically it can be represented like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"DNS \u5982\u4f55\u5de5\u4f5c"})),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u4e0d\u4ec5\u662f\u6d4f\u89c8\u5668\uff0c\u6240\u6709\u53d1\u9001\u4efb\u4f55\u7f51\u7edc\u8bf7\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u8f6f\u4ef6\u4e5f\u90fd\u662f\u5982\u6b64\u3002"),(0,l.kt)("h2",{id:"dns-\u8fc7\u6ee4\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48\uff1f"},"DNS \u8fc7\u6ee4\u5de5\u4f5c\u539f\u7406\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u5f53\u60a8\u4f7f\u7528\u67d0\u4e00\u6b3e\u652f\u6301 DNS \u8fc7\u6ee4\u7684 AdGuard \u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5b83\u4f5c\u4e3a\u60a8\u7684\u8bbe\u5907\u548c DNS \u670d\u52a1\u5668\u7684\u201c\u7f13\u51b2\u5668\u201d\u3002 \u60a8\u7684\u6d4f\u89c8\u5668\u6216\u5e94\u7528\u7a0b\u5e8f\u6240\u8981\u53d1\u9001\u7684 DNS \u8bf7\u6c42\u4f1a\u5148\u7531 AdGuard \u6765\u5904\u7406\u3002 \u5982\u60a8\u4f7f\u7528\u7684\u662f\u7531\u60a8\u7684 ISP\uff08\u4e92\u8054\u7f51\u670d\u52a1\u63d0\u4f9b\u5546\uff09\u63d0\u4f9b\u7684\u9ed8\u8ba4 DNS \u670d\u52a1\u5668\uff0c\u5f88\u53ef\u80fd\u60a8\u7684 DNS \u6d41\u91cf\u672a\u52a0\u5bc6\uff0c\u56e0\u6b64\u5bb9\u6613\u53d7\u5230\u7aa5\u63a2\u548c\u52ab\u6301\u7684\u5a01\u80c1\u3002 \u5728 DNS \u8bf7\u6c42\u4ece\u60a8\u7684\u8bbe\u5907\u53d1\u9001\u5230\u670d\u52a1\u5668\u524d\uff0cAdGuard \u4f1a\u52a0\u5bc6\u5b83\u4eec\uff0c\u56e0\u6b64\u6ca1\u6709\u574f\u4eba\u53ef\u4ee5\u518d\u8f7b\u677e\u83b7\u53d6\u8bf7\u6c42\u7684\u5185\u5bb9\u3002 \u9664\u6b64\u4e4b\u5916\uff0cAdGuard \u80fd\u591f\u8bc6\u522b\u5e7f\u544a\u3001\u8ddf\u8e2a\u5668\u548c/\u6216\u6210\u4eba\u7f51\u7ad9\u4fe1\u606f\uff0c\u5e76\u4e14\u5c06\u5b83\u4eec\u53d1\u9001\u5230\u201c\u9ed1\u6d1e\u201d\uff0c\u800c\u4e0d\u662f\u5230 DNS \u670d\u52a1\u5668\u3002 ",(0,l.kt)("a",{parentName:"p",href:"#local-dns-blocklists"},"\u4e0b\u8ff0"),"\u53ef\u4e86\u89e3\u66f4\u591a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"DNS \u8fc7\u6ee4\u5de5\u4f5c\u539f\u7406"})),(0,l.kt)("p",null,"DNS \u8fc7\u6ee4\u662f\u6548\u679c\u5f88\u5f3a\u7684\u5de5\u5177\uff0c\u5e76\u4e14\u4e3b\u8981\u7684 AdGuard \u5e94\u7528\u7a0b\u5e8f\u90fd\u652f\u6301\u5b83\uff0c\u5305\u62ec ",(0,l.kt)("a",{parentName:"p",href:"https://adguard.com/en/adguard-windows/overview.html"},"AdGuard Windows \u7248"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://adguard.com/en/adguard-mac/overview.html"},"AdGuard Mac \u7248"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://adguard.com/en/adguard-android/overview.html"},"AdGuard \u5b89\u5353\u7248"),"\u4ee5\u53ca ",(0,l.kt)("a",{parentName:"p",href:"https://adguard.com/en/adguard-ios/overview.html"},"AdGuard iOS \u7248"),"\u3002"),(0,l.kt)("p",null,"DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists."),(0,l.kt)("h3",{id:"dns-\u670d\u52a1\u5668"},"DNS \u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u4e00\u5171\u6709\u6570\u5343\u4e2a DNS \u670d\u52a1\u5668\u53ef\u9009\u3002\u5b83\u4eec\u7684\u5c5e\u6027\u4e0e\u7528\u9014\u90fd\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\u3002 \u5927\u90e8\u5206 DNS \u670d\u52a1\u5668\u53ea\u80fd\u8fd4\u56de\u88ab\u8bf7\u6c42\u7f51\u57df\u7684 IP \u5730\u5740\uff0c\u4f46\u4e5f\u6709\u4e9b DNS \u670d\u52a1\u5668\u5177\u6709\u4e00\u4e9b\u989d\u5916\u529f\u80fd\u3002\u6bd4\u5982\uff0c\u5b83\u4eec\u80fd\u5c4f\u853d\u5e7f\u544a\u3001\u8ddf\u8e2a\u5668\u3001\u5e26\u6709\u6210\u4eba\u5185\u5bb9\u7684\u7f51\u7ad9\u7b49\u7b49\u3002 \u5f53\u4eca\u5927\u90e8\u5206\u4e3b\u6d41 DNS \u670d\u52a1\u5668\u90fd\u5e94\u7528\u4e00\u4e2a\u6216\u66f4\u591a\u53ef\u9760\u7684\u52a0\u5bc6\u534f\u8bae\uff0c\u6bd4\u5982\uff1aDNS-over-HTTPS\u3001DNS-over-TLS\u3002 AdGuard also provides a ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/en/welcome.html"},"DNS service"),", and it was the world's first to offer the very new and promising ",(0,l.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/dns-over-quic.html"},"DNS-over-QUIC")," encryption protocol. AdGuard \u4e3a\u4e0d\u540c\u76ee\u7684\u63d0\u4f9b\u4e0d\u540c\u7684\u670d\u52a1\u5668\u3002 \u4e0b\u9762\u7684\u56fe\u6807\u5c55\u793a AdGuard \u62e6\u622a\u670d\u52a1\u5668\u7684\u5de5\u4f5c\u539f\u7406\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,l.kt)("p",null,"\u5176\u5b83 DNS \u63d0\u4f9b\u5546\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e5f\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff0c\u6240\u4ee5\u5728\u9009\u62e9\u67d0\u4e00\u4e2a DNS \u670d\u52a1\u5668\u524d\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u8981\u5148\u591a\u4e86\u89e3\u5b83\u4eec\u3002 ",(0,l.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/zh-CN/general/dns-providers"},"\u5728\u8fd9\u7bc7\u6587\u7ae0\u91cc"),"\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u6700\u53d7\u6b22\u8fce DNS \u63d0\u4f9b\u5546\u7684\u6e05\u5355\u3002 \u6240\u6709\u652f\u6301 DNS \u529f\u80fd\u7684 AdGuard \u5e94\u7528\u7a0b\u5e8f\u4e5f\u6709 DNS \u670d\u52a1\u5668\u6e05\u5355\u3002\u5728\u6e05\u5355\u91cc\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u60f3\u4f7f\u7528\u7684 DNS \u670d\u52a1\u5668\uff0c\u6216\u4efb\u4f55\u81ea\u5b9a\u4e49 DNS \u670d\u52a1\u5668\u3002"),(0,l.kt)("h3",{id:"\u672c\u5730-dns-\u62e6\u622a\u5217\u8868"},"\u672c\u5730 DNS \u62e6\u622a\u5217\u8868"),(0,l.kt)("p",null,"But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. \u4f46\u5982\u679c\u60a8\u4f7f\u7528 AdGuard\uff0c\u60a8\u751a\u81f3\u4e0d\u9700\u8981\u914d\u7f6e\u4efb\u4f55\u7279\u5b9a\u7684 DNS \u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u8fc7\u6ee4 DNS \u6d41\u91cf\u3002 \u6240\u6709 AdGuard \u4ea7\u54c1\u5141\u8bb8\u60a8\u5e94\u7528 DNS \u62e6\u622a\u5217\u8868\uff0c\u65e0\u8bba\u662f\u7b80\u5355\u7684 Hosts \u6587\u4ef6\u8fd8\u662f\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/zh-CN/general/dns-filtering-syntax"},"\u66f4\u590d\u6742\u8bed\u6cd5"),"\u7684\u6e05\u5355\u3002 \u5b83\u4eec\u4e0e\u4e00\u822c\u7684\u5e7f\u544a\u8fc7\u6ee4\u5668\u8fd0\u884c\u76f8\u4f3c\uff1a\u5f53 DNS \u8bf7\u6c42\u4e0e\u67d0\u4e00\u4e2a\u5c5e\u4e8e\u6fc0\u6d3b\u8fc7\u6ee4\u5668\u5217\u8868\u7684\u89c4\u5219\u76f8\u5339\u914d\u65f6\uff0c\u8be5 DNS \u8bf7\u6c42\u5c06\u4f1a\u88ab\u963b\u6b62\u3002 \u66f4\u51c6\u786e\u5730\u8bf4\uff0c\u8fd9\u4e2a DNS \u8bf7\u6c42\u5c06\u4f1a\u53d1\u9001\u5230\u201c\u9ed1\u6d1e\u201d\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728 AdGuard iOS \u7248\u4e0a\u60a8\u5148\u8981\u5728\u8bbe\u7f6e\u91cc\u542f\u7528\u300c\u9ad8\u7ea7\u6a21\u5f0f\u300d\u4ee5\u4f7f\u7528 DNS \u62e6\u622a\u3002")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6dfb\u52a0\u60a8\u6240\u8981\u7684\u62e6\u622a\u5217\u8868\u6570\u91cf\u3002 \u6bd4\u65b9\u8bf4\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS \u8fc7\u6ee4\u5668"),"\u3002 \u5b83\u786e\u5b9e\u80fd\u591f\u62e6\u622a\u6240\u6709 AdGuard DNS \u670d\u52a1\u5668\u5c4f\u853d\u7684\u5143\u7d20\uff0c\u4f46\u662f\u4f7f\u7528 AdGuard DNS \u8fc7\u6ee4\u5668\u7684\u8bdd\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5176\u5b83 DNS \u670d\u52a1\u5668\u3002 \u6b64\u5916\uff0c\u8fd9\u6837\u60a8\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u8fc7\u6ee4\u5668\u6216\u521b\u5efa\u81ea\u5b9a\u4e49\u6392\u9664\u9879\u89c4\u5219\u3002\u4e0a\u8ff0\u7684\u529f\u80fd\u90fd\u4e0d\u53ef\u80fd\u901a\u8fc7\u7b80\u5355\u7684\u300c\u4f7f\u7528\u62e6\u622a DNS \u670d\u52a1\u5668\u300d\u8bbe\u7f6e\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"\u5728\u8fd9\u91cc"),"\u627e\u5230\u51e0\u767e\u4e2a\u4e0d\u540c\u7684 DNS \u62e6\u622a\u5217\u8868\u3002")),(0,l.kt)("h2",{id:"dns-\u8fc7\u6ee4\u4e0e\u7f51\u7edc\u5c42\u9762\u8fc7\u6ee4\u7684\u5bf9\u6bd4"},"DNS \u8fc7\u6ee4\u4e0e\u7f51\u7edc\u5c42\u9762\u8fc7\u6ee4\u7684\u5bf9\u6bd4"),(0,l.kt)("p",null,'\u7f51\u7edc\u8fc7\u6ee4\u662f\u6211\u4eec\u6240\u8bf4\u7684 AdGuard \u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u5904\u7406\u7f51\u7edc\u6d41\u91cf\u7684"\u5e38\u89c4"\u65b9\u5f0f\uff0c\u56e0\u6b64\u5f97\u540d\u3002 \u60a8\u53ef\u4ee5\u9605\u8bfb',(0,l.kt)("a",{parentName:"p",href:"https://kb.adguard.com/en/general/how-ad-blocking-works"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u56de\u987e\u5f80\u671f\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u8981\u63d0\u5230\u4e00\u70b9\uff0c\u4f7f\u7528 AdGuard \u7684\u8bdd\uff0c\u60a8\u4e0d\u9700\u8981\u4e8c\u9009\u4e00\u3002 \u60a8\u53ef\u4ee5\u4e00\u8d77\u4f7f\u7528\u5e38\u89c4\u7f51\u7edc\u5c42\u9762\u8fc7\u6ee4\u548c DNS \u8fc7\u6ee4\u3002 \u4e0d\u8fc7\uff0c\u8fd8\u662f\u8981\u660e\u786e\u5206\u51fa\u5b83\u4eec\u4fe9\u7684\u533a\u522b\u3002 DNS \u8fc7\u6ee4\u4e0d\u4ec5\u6709\u5176\u72ec\u7279\u4f18\u70b9\uff0c\u4f46\u4e5f\u6709\u4e9b\u7f3a\u70b9\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DNS \u8fc7\u6ee4\u7684\u4f18\u70b9\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"On some platforms this is the only way to achieve system-wide filtering. \u6bd4\u65b9\u8bf4\uff0c\u5728 iOS \u4e0a\u53ea\u6709 Safari \u6d4f\u89c8\u5668\u652f\u6301\u5185\u5bb9\u62e6\u622a\u3002\u4e3a\u4e86\u62e6\u622a\u5176\u5b83\u5185\u5bb9\uff0c\u7528\u6237\u53ea\u53ef\u4ee5\u7528 DNS \u8fc7\u6ee4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6709\u4e9b\u8ddf\u8e2a\u65b9\u5f0f\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"li",href:"https://adguard.com/en/blog/cname-tracking.html"},"CNAME \u8ddf\u8e2a"),"\uff0c\u53ea\u53ef\u4ee5\u901a\u8fc7 DNS \u8fc7\u6ee4\u88ab\u62e6\u622a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5904\u7406 DNS \u8bf7\u6c42\u662f\u60a8\u53ef\u4ee5\u62e6\u622a\u5e7f\u544a\u6216\u8ddf\u8e2a\u5668\u7684\u6700\u65e9\u9636\u6bb5\u3002\u8fd9\u6837\u60a8\u53ef\u4ee5\u8282\u7701\u70b9\u7535\u6c60\u5bff\u547d\u53ca\u6d41\u91cf\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DNS \u8fc7\u6ee4\u7684\u7f3a\u70b9\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"DNS \u8fc7\u6ee4\u662f\u4e00\u79cd\u201c\u66b4\u529b\u8fc7\u6ee4\u6cd5\u201d\u3002\u610f\u601d\u662f DNS \u8fc7\u6ee4\u4e0d\u4f1a\u79fb\u9664\u62e6\u622a\u5e7f\u544a\u540e\u7559\u4e0b\u7684\u767d\u7a7a\uff0c\u6216\u8ba9\u60a8\u4f7f\u7528\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u65b9\u5f0f\u3002 \u901a\u8fc7 DNS \u8fc7\u6ee4\u65e0\u6cd5\u62e6\u622a\u5f88\u591a\u66f4\u590d\u6742\u7684\u5e7f\u544a\uff08\u6216\u8005\u8bf4\uff0c\u53ef\u4ee5\u62e6\u622a\uff0c\u4f46\u53ea\u80fd\u901a\u8fc7\u963b\u6b62\u88ab\u7528\u4e8e\u5176\u4ed6\u76ee\u7684\u7684\u6574\u4e2a\u57df\u540d\u6765\u5b9e\u73b0\uff09\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Example of difference"})," ",(0,l.kt)("em",{parentName:"p"},"DNS \u4e0e\u7f51\u7edc\u5c42\u9762\u8fc7\u6ee4\u7684\u533a\u522b")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u65e0\u6cd5\u77e5\u9053 DNS \u8bf7\u6c42\u7684\u6765\u6e90\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5728 DNS \u5c42\u9762\u8fc7\u6ee4\uff0c\u60a8\u65e0\u6cd5\u533a\u5206\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u3002 \u8fd9\u4e2a\u4f1a\u635f\u5bb3\u7edf\u8ba1\u6570\u636e\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u6211\u4eec\u521b\u5efa\u9488\u5bf9\u7279\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u8fc7\u6ee4\u89c4\u5219\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u5728\u7f51\u7edc\u8fc7\u6ee4\u7684\u57fa\u7840\u4e0a\u518d\u4f7f\u7528 DNS \u8fc7\u6ee4\uff0c\u800c\u4e0d\u662f\u5b8c\u5168\u4ee3\u66ff\u5b83\u3002"))}c.isMDXComponent=!0}}]);