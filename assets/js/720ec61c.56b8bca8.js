"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[7561],{3905:(r,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>y});var t=n(7294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function o(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function i(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function l(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},o=Object.keys(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var c=t.createContext({}),p=function(r){var e=t.useContext(c),n=e;return r&&(n="function"==typeof r?r(e):i(i({},e),r)),n},s=function(r){var e=p(r.components);return t.createElement(c.Provider,{value:e},r.children)},u="mdxType",m={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,o=r.originalType,c=r.parentName,s=l(r,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(y,i(i({ref:e},s),{},{components:n})):t.createElement(y,i({ref:e},s))}));function y(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=r,l[u]="string"==typeof r?r:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7378:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(7462),a=(n(7294),n(3905));const o={},i="NDArray::normal",l={unversionedId:"random/ndarray-normal",id:"random/ndarray-normal",title:"NDArray::normal",description:"Generates an array of random numbers from a normal distribution. The normal distribution, also",source:"@site/api/random/ndarray-normal.mdx",sourceDirName:"random",slug:"/random/ndarray-normal",permalink:"/api/random/ndarray-normal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Random",permalink:"/api/category/random"},next:{title:"NDArray::poisson",permalink:"/api/random/ndarray-poisson"}},c={},p=[],s={toc:p},u="wrapper";function m(r){let{components:e,...n}=r;return(0,a.kt)(u,(0,t.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarraynormal"},"NDArray::normal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function normal(array $size, scalar $loc = 0.0, scalar $scale = 1.0): NDArray;\n")),(0,a.kt)("p",null,"Generates an array of random numbers from a normal distribution. The normal distribution, also\nknown as the Gaussian distribution, is a continuous probability distribution that is symmetric and bell-shaped"))}m.isMDXComponent=!0}}]);