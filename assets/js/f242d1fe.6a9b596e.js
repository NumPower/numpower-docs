"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,g=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="Installing Autograd",l={unversionedId:"intro/installing",id:"intro/installing",title:"Installing Autograd",description:"NumPower Autograd is available through composer and uses the NumPower extension and",source:"@site/tensor/intro/2-installing.mdx",sourceDirName:"intro",slug:"/intro/installing",permalink:"/tensor/intro/installing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"apiSidebar",previous:{title:"What is Automatic Differentiation (Autograd)?",permalink:"/tensor/intro/autograd-intro"},next:{title:"Basic usage",permalink:"/tensor/intro/basic-usage"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installing",id:"installing",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-autograd"},"Installing Autograd"),(0,o.kt)("p",null,"NumPower Autograd is available through composer and uses the NumPower extension and\nits powerful NDArray object as an engine for mathematical operations.\nYou must first compile and install the extension in your environment before installing Autograd."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NumPower Extension >= 0.5.0 (",(0,o.kt)("a",{parentName:"li",href:"https://www.numpower.org/install/from-source"},"https://www.numpower.org/install/from-source"),")"),(0,o.kt)("li",{parentName:"ul"},"PHP >= 8.3"),(0,o.kt)("li",{parentName:"ul"},"Composer")),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ composer require numpower/autograd\n")))}m.isMDXComponent=!0}}]);