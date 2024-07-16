"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||y[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="NDArray::hstack",p={unversionedId:"manipulation/ndarray-hstack",id:"manipulation/ndarray-hstack",title:"NDArray::hstack",description:"Stack arrays in sequence horizontally (column wise).",source:"@site/api/manipulation/ndarray-hstack.mdx",sourceDirName:"manipulation",slug:"/manipulation/ndarray-hstack",permalink:"/api/manipulation/ndarray-hstack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::flatten",permalink:"/api/manipulation/ndarray-flat"},next:{title:"NDArray::moveaxis",permalink:"/api/manipulation/ndarray-moveaxis"}},c={},l=[{value:"Notes",id:"notes",level:2}],u={toc:l},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarrayhstack"},"NDArray::hstack"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function hstack(array $arrays): NDArray;\n")),(0,a.kt)("p",null,"Stack arrays in sequence horizontally (column wise)."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("h4",{parentName:"admonition",id:"gpu-supported"},"GPU SUPPORTED"),(0,a.kt)("p",{parentName:"admonition"},"This operation is supported by GPU (VRAM).")))}y.isMDXComponent=!0}}]);