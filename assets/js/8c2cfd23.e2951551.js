"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[5184],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,y=s["".concat(p,".").concat(f)]||s[f]||m[f]||a;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39326:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={},i="norm",l={unversionedId:"api/linalg/norm",id:"api/linalg/norm",title:"norm",description:"",source:"@site/tensor/api/linalg/5-norm.mdx",sourceDirName:"api/linalg",slug:"/api/linalg/norm",permalink:"/tensor/api/linalg/norm",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"apiSidebar",previous:{title:"matrix_rank",permalink:"/tensor/api/linalg/matrix_rank"},next:{title:"outer",permalink:"/tensor/api/linalg/outer"}},p={},c=[],u={toc:c},s="wrapper";function m(e){let{components:r,...n}=e;return(0,o.kt)(s,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"norm"},"norm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function norm(string $name = ''): Tensor\n")))}m.isMDXComponent=!0}}]);