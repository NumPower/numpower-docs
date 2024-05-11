"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[1195],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,g=s["".concat(c,".").concat(f)]||s[f]||y[f]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4852:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={},o="NDArray::eig",l={unversionedId:"linear-algebra/ndarray-eig",id:"linear-algebra/ndarray-eig",title:"NDArray::eig",description:"Computes the eigenvalues and eigenvectors of a square array.",source:"@site/api/linear-algebra/ndarray-eig.mdx",sourceDirName:"linear-algebra",slug:"/linear-algebra/ndarray-eig",permalink:"/api/linear-algebra/ndarray-eig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::dot",permalink:"/api/linear-algebra/ndarray-dot"},next:{title:"NDArray::inner",permalink:"/api/linear-algebra/ndarray-inner"}},c={},p=[],u={toc:p},s="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarrayeig"},"NDArray::eig"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function eig(NDArray|array $a): array;\n")),(0,a.kt)("p",null,"Computes the eigenvalues and eigenvectors of a square array."))}y.isMDXComponent=!0}}]);