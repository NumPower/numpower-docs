"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[5616],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i="Installing NumPower",l={unversionedId:"install",id:"install",title:"Installing NumPower",description:"The NumPower library does not have a release and is in preview. This was done so that more people can test and report problems.",source:"@site/install/0-install.mdx",sourceDirName:".",slug:"/install",permalink:"/install/install",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"community",next:{title:"Docker Image",permalink:"/install/docker-install"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-numpower"},"Installing NumPower"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The NumPower library does not have a release and is in preview. This was done so that more people can test and report problems."),(0,o.kt)("p",{parentName:"admonition"},"We do not recommend using this library in production environments in its current state. Memory errors like overflow, leaks and unpredictable values \u200b\u200bcan happen."),(0,o.kt)("p",{parentName:"admonition"},"Please! Help us by reporting bugs in our official repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NumPower/numpower"},"https://github.com/NumPower/numpower"))),(0,o.kt)("p",null,"This page provides instructions for installing NumPower, a powerful numerical computing library for PHP inspired\nby the functionality of NumPy in Python. NumPower enables efficient array operations, mathematical functions, and\ntools for manipulating and analyzing numerical data in PHP."),(0,o.kt)("p",null,"NumPower is implemented as a PHP extension, which requires a compilation process to install it in your PHP environment.\nThere are two methods for installing NumPower: using a Docker image or compiling the extension\nfrom the source."))}m.isMDXComponent=!0}}]);