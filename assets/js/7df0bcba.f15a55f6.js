"use strict";(self.webpackChunkhome_page_website=self.webpackChunkhome_page_website||[]).push([[7572],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(v,a(a({ref:r},p),{},{components:t})):n.createElement(v,a({ref:r},p))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5351:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:300},a="\u4e00\u4e9b\u6709\u7528\u7684\u65b9\u6cd5",l={unversionedId:"iOS/UsefullFuns",id:"iOS/UsefullFuns",title:"\u4e00\u4e9b\u6709\u7528\u7684\u65b9\u6cd5",description:"\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5",source:"@site/docs/iOS/UsefullFuns.md",sourceDirName:"iOS",slug:"/iOS/UsefullFuns",permalink:"/docs/iOS/UsefullFuns",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/iOS/UsefullFuns.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Alert\u6269\u5c55",permalink:"/docs/iOS/Alert"},next:{title:"\u5de5\u5177",permalink:"/docs/iOS/debug_tools"}},s={},c=[{value:"\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5",id:"\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5",level:2},{value:"\u8282\u70b9\u66dd\u5149\u5f00\u59cb/\u7ed3\u675f\u7684 Observer",id:"\u8282\u70b9\u66dd\u5149\u5f00\u59cb\u7ed3\u675f\u7684-observer",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e00\u4e9b\u6709\u7528\u7684\u65b9\u6cd5"},"\u4e00\u4e9b\u6709\u7528\u7684\u65b9\u6cd5"),(0,i.kt)("h2",{id:"\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5"},"\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u4e1a\u52a1\u7684\u5c01\u88c5\u539f\u56e0\uff0c\u6709\u65f6\u5019\u4f1a\u51fa\u73b0\u9700\u8981\u5728\u67d0\u4e2a\u4f4d\u7f6e\u5199\u57cb\u70b9\u4ee3\u7801\uff0c\u4f46\u662f _oid \u5bf9\u5e94\u7684view\u5374\u662f\u7236view\uff0c\u5b50view\u5185\u4e00\u822c\u90fd\u6ca1\u6709\u7236view\u7684\u5f15\u7528"),(0,i.kt)("li",{parentName:"ol"},"\u3010\u63a8\u8350\u3011\u5927\u5bb6\u53ea\u4f7f\u7528\u5b50view\u5411\u4e0a\u627e\u7236\u8282\u70b9\u7684API\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u6700\u5feb")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"  // \u5411\u4e0a\u67e5\u8be2\u8282\u70b9\n  UIView *ET_FindAncestorNodeViewAt(UIView *view, NSString *oid);\n\n  // \u5411\u4e0b\u67e5\u627e\u8282\u70b9\n  UIView *ET_FindAncestorNodeViewAt(UIView *view);\n  UIView *ET_FindSubNodeViewAt(UIView *view, NSString *oid);\n  UIView *ET_FindNodeViewGlobally(NSString *oid);\n")),(0,i.kt)("admonition",{title:"\u5411\u4e0b\u67e5\u627e\u8282\u70b9 \u6027\u80fd\u4e0d\u4f73",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u5411\u4e0b\u67e5\u627e\u8282\u70b9 \u7684\u4e09\u4e2aAPI\u5c11\u7528\uff0c\u67e5\u627e\u6027\u80fd\u4e0d\u4f73\uff0c\u9700\u8981\u5411\u4e0b\u9012\u5f52\u904d\u5386")),(0,i.kt)("h2",{id:"\u8282\u70b9\u66dd\u5149\u5f00\u59cb\u7ed3\u675f\u7684-observer"},"\u8282\u70b9\u66dd\u5149\u5f00\u59cb/\u7ed3\u675f\u7684 Observer"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8282\u70b9\u5f00\u59cb\u66dd\u5149\u548c\u7ed3\u675f\u66dd\u5149\u7684\u65f6\u5019\uff0c\u4e1a\u52a1\u65b9\u662f\u53ef\u4ee5\u5728UIView\u7c92\u5ea6\u8fdb\u884c\u76d1\u63a7\u7684"),(0,i.kt)("li",{parentName:"ol"},"\u76d1\u63a7\u65b9\u9700\u8981\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"EventTracingVTreeNodeImpressObserver")," \u534f\u8bae"),(0,i.kt)("li",{parentName:"ol"},"\u53ca\u65f6\u8be5\u8282\u70b9\u8bbe\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"ETNodeBuildinEventLogDisableStrategyImpress"),", \u53ea\u4e0d\u8fc7SDK\u5185\u90e8\u4e0d\u4f1a\u81ea\u52a8\u6253\u66dd\u5149\u57cb\u70b9\u800c\u5df2\uff0c\u4f46\u662f\u76d1\u63a7\u56de\u8c03\u4e00\u6837\u53ef\u4ee5\u88ab\u6b63\u5e38\u76d1\u63a7")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"@interface UIView (EventTracingVTreeObserver)\n@property(nonatomic, strong, readonly) NSArray<id<EventTracingVTreeNodeImpressObserver>> *et_impressObservers;\n\n- (void)et_addImpressObserver:(id<EventTracingVTreeNodeImpressObserver>)observer;\n- (void)et_removeImpressObserver:(id<EventTracingVTreeNodeImpressObserver>)observer;\n- (void)et_removeallImpressObservers;\n@end\n")))}u.isMDXComponent=!0}}]);