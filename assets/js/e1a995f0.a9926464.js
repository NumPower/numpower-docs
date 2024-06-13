"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[6131],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||y[f]||o;return n?t.createElement(d,l(l({ref:r},s),{},{components:n})):t.createElement(d,l({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89625:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={},l="NDArray::solve",i={unversionedId:"linear-algebra/ndarray-solve",id:"linear-algebra/ndarray-solve",title:"NDArray::solve",description:"Solves a linear system of equations for x, where Ax = b, and A and b are given arrays.",source:"@site/api/linear-algebra/ndarray-solve.mdx",sourceDirName:"linear-algebra",slug:"/linear-algebra/ndarray-solve",permalink:"/api/linear-algebra/ndarray-solve",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::qr",permalink:"/api/linear-algebra/ndarray-qr"},next:{title:"NDArray::svd",permalink:"/api/linear-algebra/ndarray-svd"}},p={},c=[],s={toc:c},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarraysolve"},"NDArray::solve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function solve(NDArray|array $a, NDArray|array $b): NDArray;\n")),(0,a.kt)("p",null,"Solves a linear system of equations for ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"Ax = b"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," are given arrays."))}y.isMDXComponent=!0}}]);