"use strict";(self.webpackChunkhome_page_website=self.webpackChunkhome_page_website||[]).push([[8736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),s=n,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1},i="API\u7b80\u4ecb",o={unversionedId:"Android/API",id:"Android/API",title:"API\u7b80\u4ecb",description:"EventTracing SDK \u5c01\u88c5",source:"@site/docs/Android/API.md",sourceDirName:"Android",slug:"/Android/API",permalink:"/docs/Android/API",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/Android/API.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/category/android"},next:{title:"\u58f0\u660e\u5bf9\u8c61",permalink:"/docs/Android/Object"}},p={},u=[{value:"EventTracing SDK \u5c01\u88c5",id:"eventtracing-sdk-\u5c01\u88c5",level:2},{value:"SDK\u5185\u7f6e\u7684\u4e8b\u4ef6\u5217\u8868",id:"sdk\u5185\u7f6e\u7684\u4e8b\u4ef6\u5217\u8868",level:2},{value:"\u7b80\u5355\u573a\u666f\u7684\u57cb\u70b9\u793a\u4f8b",id:"\u7b80\u5355\u573a\u666f\u7684\u57cb\u70b9\u793a\u4f8b",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api\u7b80\u4ecb"},"API\u7b80\u4ecb"),(0,n.kt)("h1",{id:"\u7b80\u5355\u7bc7\u5e45"},"\u7b80\u5355\u7bc7\u5e45"),(0,n.kt)("h2",{id:"eventtracing-sdk-\u5c01\u88c5"},"EventTracing SDK \u5c01\u88c5"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u901a\u5e38\u6765\u8bf4\uff0c\u4f60\u57fa\u672c\u4e0a\u53ea\u9700\u8981\u770b com.netease.cloudmusic.datareport.eventtracing.NodeBuilder"),(0,n.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u662f\u5bf9 com.netease.cloudmusic.datareport.operator.DataReport \u7684\u4e8c\u6b21\u5c01\u88c5"),(0,n.kt)("li",{parentName:"ol"},"\u4e3b\u8981\u662f\u5bf9 ",(0,n.kt)("strong",{parentName:"li"},"\u8282\u70b9\u5bf9\u8c61")," \u7684\u914d\u7f6e"),(0,n.kt)("li",{parentName:"ol"},"\u8fd8\u6709\u901a\u7528\u53c2\u6570(\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"s_")," \u5f00\u5934\u7684\u53c2\u6570)\u7684\u4fbf\u6377\u65b9\u6cd5\u652f\u6301"))),(0,n.kt)("h2",{id:"sdk\u5185\u7f6e\u7684\u4e8b\u4ef6\u5217\u8868"},"SDK\u5185\u7f6e\u7684\u4e8b\u4ef6\u5217\u8868"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"_ac: app\u6fc0\u6d3b\uff0capp\u51b7\u542f\u52a8"),(0,n.kt)("li",{parentName:"ol"},"_ai: app\u8fdb\u5165\u6d3b\u8dc3\u72b6\u6001\uff08app\u542f\u52a8 + \u540e\u53f0\u56de\u5230\u524d\u53f0\uff09"),(0,n.kt)("li",{parentName:"ol"},"_ao: app\u8fdb\u5165\u975e\u6d3b\u8dc3\u72b6\u6001\uff08app\u8fdb\u5165\u540e\u53f0\uff09"),(0,n.kt)("li",{parentName:"ol"},"_pv: \u9875\u9762\u8282\u70b9\u66dd\u5149\u5f00\u59cb"),(0,n.kt)("li",{parentName:"ol"},"_pd: \u9875\u9762\u8282\u70b9\u66dd\u5149\u7ed3\u675f"),(0,n.kt)("li",{parentName:"ol"},"_ev: \u5143\u7d20\u8282\u70b9\u66dd\u5149\u5f00\u59cb"),(0,n.kt)("li",{parentName:"ol"},"_ed: \u5143\u7d20\u8282\u70b9\u66dd\u5149\u7ed3\u675f\uff08\u4e91\u97f3\u4e50\u914d\u7f6e\u4e86\u6240\u6709\u5143\u7d20\u8282\u70b9\u9ed8\u8ba4\u4e0d\u6253\u66dd\u5149\u7ed3\u675f\uff0c\u5982\u679c\u67d0\u4e00\u4e2a\u8282\u70b9\u9700\u8981\u66dd\u5149\u7ed3\u675f\uff0c\u9700\u8981\u624b\u52a8\u5f00\u542f\uff09"),(0,n.kt)("li",{parentName:"ol"},"_es: \u5217\u8868\u6ed1\u52a8\u57cb\u70b9 \uff08\u9ed8\u8ba4\u4e0d\u5f00\u542f\uff0c\u5982\u679c\u9700\u8981\u5f00\u542f\uff0c\u53c2\u89c1\u540e\u9762\u7ae0\u8282 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u5f00\u542f\u5217\u8868\u6ed1\u52a8\u4e8b\u4ef6"),"\uff09"))),(0,n.kt)("h2",{id:"\u7b80\u5355\u573a\u666f\u7684\u57cb\u70b9\u793a\u4f8b"},"\u7b80\u5355\u573a\u666f\u7684\u57cb\u70b9\u793a\u4f8b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ed9\u4e00\u4e2apage/element \u8bbe\u7f6e _oid ","[pageId/elementId]")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'NodeBuilder.setPageId(Activity, "CustomEventActivity")   // \u7ed9\u4e00\u4e2aActivity\u8bbe\u7f6epageId\nNodeBuilder.getNodeBuilder(Activity).setPageId("CustomEventActivity")        // \u7b49\u4ef7\u4e8e\u524d\u4e00\u4e2a\u65b9\u5f0f\nNodeBuilder.setElementId(View, "exposureBtn")             // \u7ed9\u4e00\u4e2aUI\u5143\u7d20\u8bbe\u7f6eelementId\nNodeBuilder.getNodeBuilder(View).setElementId("exposureBtn")             // \u7b49\u4ef7\u4e8e\u524d\u4e00\u4e2a\u65b9\u5f0f\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8282\u70b9\u9700\u8981\u914d\u7f6e\u8282\u70b9\u5c5e\u6027\uff1b\u8fd9\u4e2a\u65f6\u5019\u4e5f\u53ef\u4ee5\u987a\u4fbf\u4e00\u8d77\u628a\u4e1a\u52a1\u53c2\u6570\u8bbe\u7f6e\u597d")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'NodeBuilder.getNodeBuilder(view)\n            .setVisibleMargin(10, -10, 0, 0)                        // \u8bbe\u7f6e\u8be5\u5143\u7d20\u7684\u53ef\u89c1\u6027: top\u7f29\u5c0f10, left\u6269\u592710\n            .setReportPolicy(ReportPolicy.REPORT_POLICY_EXPOSURE)   // \u8bbe\u7f6eSDK\u5185\u90e8\u4e0d\u81ea\u52a8\u505a\u70b9\u51fb\u57cb\u70b9\n            .params()                                               // \u540e\u9762\u662f\u8bbe\u7f6e\u4e1a\u52a1\u53c2\u6570\n            .putBIPosition(2)                                       // \u8bbe\u7f6e\u8be5\u5143\u7d20\u7684\u4f4d\u7f6e; (\u4ec0\u4e48\u573a\u666f\u9700\u8981\u8bbe\u7f6e\uff0c\u53c2\u89c1`position`\u7ae0\u8282)\n            .putBITitle("xxx")                                      // \u7ed9\u8be5\u8282\u70b9\u7ed1\u5b9a\u901a\u7528\u4e1a\u52a1\u53c2\u6570 s_title\n            .putBICustomParam("xxx", "xxx")                         // \u7ed9\u8be5\u8282\u70b9\u7ed1\u5b9a\u4e1a\u52a1\u81ea\u5b9a\u4e49\u53c2\u6570 xxx\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u9700\u8981\u914d\u7f6e\u8282\u70b9\u5c5e\u6027\uff0c\u76f4\u63a5\u7ed9\u8be5node\u8282\u70b9\u8bbe\u7f6e\u4e1a\u52a1\u53c2\u6570")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ParamBuilder.params(view)\n            .putBITitle("xxx")\n            .putBICustomParam("xxx", "xxx")\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u3010",(0,n.kt)("strong",{parentName:"li"},"\uff01\uff01\u63a8\u8350"),"\u3011\u4e5f\u53ef\u4ee5\u5728\u8bbe\u7f6e _oid \u7684\u540c\u65f6\u5c31\u8bbe\u7f6e\u597d\u4e00\u4e9b\u8282\u70b9\u81ea\u8eab\u7684\u8282\u70b9\u5c5e\u6027 + \u6b64\u523b\u5df2\u77e5\u7684\u53c2\u6570")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'NodeBuilder.getNodeBuilder(view).setElementId("elementId")\n            .setVisibleMargin(10, -10, 0, 0)                        \n            .setReportPolicy(ReportPolicy.REPORT_POLICY_EXPOSURE)   \n            .params()                                               \n            .putBIPosition(2)                                       \n            .putBITitle("xxx")                                      \n            .putBICustomParam("xxx", "xxx")\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff08",(0,n.kt)("strong",{parentName:"li"},"\u6240\u6709\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u90fd\u6700\u597d\u5c3d\u53ef\u80fd\u7684\u6302\u8f7d\u5230\u4e00\u4e2aUI\u8282\u70b9\u4e0b\uff0c\u8fd9\u6837\u53ef\u4ee5\u5145\u5206\u7684\u5229\u7528VTree\u7684\u5c42\u7ea7\u7ed3\u6784\u4f18\u52bf"),"\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'DataReporter\n            .clickBI()\n            .setTarget(view)\n            .setParam("xxx", "xxx")\n            .report()\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8d44\u6e90\u7684\u6807\u51c6\u79c1\u53c2 cid, ctype, ctraceid, ctrp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u7684\u5185\u7f6e\u5217\u8868\uff0c\u53c2\u89c1 ",(0,n.kt)("inlineCode",{parentName:"p"},"com.netease.cloudmusic.datareport.eventtracing.ParamBuilder"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53c2\u6570\u8bbe\u7f6e\u7684\u4e24\u79cd\u5f62\u5f0f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"s_"),"\u5f00\u5934\u7684\u53c2\u6570\uff0c\u79f0\u4e3a\u6807\u51c6\u79c1\u53c2\uff0c\u5df2\u7ecf\u63d0\u4f9b\u4e86\u4fbf\u6377\u65b9\u6cd5: putBIxxx()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u81ea\u5b9a\u4e49\u7684\u53c2\u6570: putBICustomParam")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u524d\u9762\u4e24\u79cd\u662f\u4e3b\u52a8\u585e\u53c2\u6570\uff0c\u8fd8\u6709\u4e00\u79cd\u56de\u8c03\u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u53c2\u6570\uff08\u79f0\u4e3a\u52a8\u6001\u53c2\u6570\uff09"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'        ParamBuilder.params(view)\n            .putBIId("id")\n            .putBIType("type")\n            .putBITraceId("traceId")\n            .putBITransparent("ctrp")\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u624b\u52a8\u89e6\u53d1\u865a\u62df\u6811\u91cd\u5efa")),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u5982\u679cUI\u53d1\u751f\u4e86\u4e00\u4e9b\u6539\u52a8\uff0c\u4f46\u662f\u6ca1\u6709\u5f15\u8d77\u865a\u62df\u6811\u91cd\u5efa\uff0c\u6ca1\u6709\u8fbe\u5230\u57cb\u70b9\u76ee\u7684\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u624b\u52a8\u89e6\u53d1\u4e00\u6b21\u91cd\u5efa\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ol"},"SDK\u5185\u90e8hock\u4e86\u5f88\u591aAOP\u65f6\u673a\uff0c\u5728\u8fd9\u4e9b\u65f6\u673a\u4f1a\u91cd\u65b0\u6784\u5efa\u6811"),(0,n.kt)("li",{parentName:"ol"},"\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u53bb\u770b\u770b: ",(0,n.kt)("a",{parentName:"li",href:"./"},"SDK\u5185AOP\u5217\u8868")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"EventTracing.reBuildVTree(view)\n")))}d.isMDXComponent=!0}}]);