"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[716],{3905:(r,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>f});var a=t(7294);function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,a)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,a,n=function(r,e){if(null==r)return{};var t,a,n={},o=Object.keys(r);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}var p=a.createContext({}),c=function(r){var e=a.useContext(p),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},u=function(r){var e=c(r.components);return a.createElement(p.Provider,{value:e},r.children)},m="mdxType",s={inlineCode:"code",wrapper:function(r){var e=r.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(r,e){var t=r.components,n=r.mdxType,o=r.originalType,p=r.parentName,u=l(r,["components","mdxType","originalType","parentName"]),m=c(t),y=n,f=m["".concat(p,".").concat(y)]||m[y]||s[y]||o;return t?a.createElement(f,i(i({ref:e},u),{},{components:t})):a.createElement(f,i({ref:e},u))}));function f(r,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=r,l[m]="string"==typeof r?r:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},290:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const o={},i="NDArray::matrix_rank",l={unversionedId:"linear-algebra/ndarray-matrixrank",id:"linear-algebra/ndarray-matrixrank",title:"NDArray::matrix_rank",description:"Calculates the numerical rank of a matrix, number of singular values of the array that are greater than tol.",source:"@site/api/linear-algebra/ndarray-matrixrank.mdx",sourceDirName:"linear-algebra",slug:"/linear-algebra/ndarray-matrixrank",permalink:"/api/linear-algebra/ndarray-matrixrank",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::matmul",permalink:"/api/linear-algebra/ndarray-matmul"},next:{title:"NDArray::norm",permalink:"/api/linear-algebra/ndarray-norm"}},p={},c=[{value:"Notes",id:"notes",level:2}],u={toc:c},m="wrapper";function s(r){let{components:e,...t}=r;return(0,n.kt)(m,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ndarraymatrix_rank"},"NDArray::matrix_rank"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public static function matrix_rank(NDArray|array $a, scalar $tol = 1e-6): NDArray;\n")),(0,n.kt)("p",null,"Calculates the numerical rank of a matrix, number of singular values of the array that are greater than tol."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h4",{parentName:"admonition",id:"gpu-supported"},"GPU SUPPORTED"),(0,n.kt)("p",{parentName:"admonition"},"This operation is supported by GPU (VRAM) and contains a custom CUDA kernel.")))}s.isMDXComponent=!0}}]);