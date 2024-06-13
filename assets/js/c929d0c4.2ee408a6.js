"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[2558],{3905:(r,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function o(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function i(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function d(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},o=Object.keys(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var l=t.createContext({}),s=function(r){var e=t.useContext(l),n=e;return r&&(n="function"==typeof r?r(e):i(i({},e),r)),n},c=function(r){var e=s(r.components);return t.createElement(l.Provider,{value:e},r.children)},p="mdxType",u={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,o=r.originalType,l=r.parentName,c=d(r,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(f,i(i({ref:e},c),{},{components:n})):t.createElement(f,i({ref:e},c))}));function f(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=r,d[p]="string"==typeof r?r:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33277:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={},i="NDArray::standard_normal",d={unversionedId:"random/ndarray-standard_normal",id:"random/ndarray-standard_normal",title:"NDArray::standard_normal",description:"Generates an array of random numbers from the standard normal distribution.",source:"@site/api/random/ndarray-standard_normal.mdx",sourceDirName:"random",slug:"/random/ndarray-standard_normal",permalink:"/api/random/ndarray-standard_normal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::poisson",permalink:"/api/random/ndarray-poisson"},next:{title:"NDArray::uniform",permalink:"/api/random/ndarray-uniform"}},l={},s=[],c={toc:s},p="wrapper";function u(r){let{components:e,...n}=r;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarraystandard_normal"},"NDArray::standard_normal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function standard_normal(array $size): NDArray;\n")),(0,a.kt)("p",null,"Generates an array of random numbers from the standard normal distribution.\nThe standard normal distribution is a special case of the normal distribution with mean (\u03bc) equal to\n0 and standard deviation (\u03c3) equal to 1."))}u.isMDXComponent=!0}}]);