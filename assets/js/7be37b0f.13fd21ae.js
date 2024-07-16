"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[8434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||y[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="NDArray::copy",p={unversionedId:"manipulation/ndarray-copy",id:"manipulation/ndarray-copy",title:"NDArray::copy",description:"Create a copy of array $a.",source:"@site/api/manipulation/ndarray-copy.mdx",sourceDirName:"manipulation",slug:"/manipulation/ndarray-copy",permalink:"/api/manipulation/ndarray-copy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::concatenate",permalink:"/api/manipulation/ndarray-concatenate"},next:{title:"NDArray::dstack",permalink:"/api/manipulation/ndarray-dstack"}},c={},l=[{value:"$device options",id:"device-options",level:4},{value:"Notes",id:"notes",level:2}],u={toc:l},s="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarraycopy"},"NDArray::copy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function copy(NDArray|array|float|int $a, int $device = NULL): NDArray;\n")),(0,a.kt)("p",null,"Create a copy of array ",(0,a.kt)("inlineCode",{parentName:"p"},"$a"),"."),(0,a.kt)("h4",{id:"device-options"},"$device options"),(0,a.kt)("p",null,"Default = NULL, copy on the same device as ",(0,a.kt)("inlineCode",{parentName:"p"},"$a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"0")," - CPU copy (same as ",(0,a.kt)("inlineCode",{parentName:"li"},"$a->cpu()"),");"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1")," - GPU copy (same as ",(0,a.kt)("inlineCode",{parentName:"li"},"$a->gpu()"),");")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("h4",{parentName:"admonition",id:"gpu-supported"},"GPU SUPPORTED"),(0,a.kt)("p",{parentName:"admonition"},"This operation is supported by GPU (VRAM) and contains a custom CUDA kernel.")))}y.isMDXComponent=!0}}]);