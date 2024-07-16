"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[2184],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),y=n,h=c["".concat(l,".").concat(y)]||c[y]||m[y]||o;return t?a.createElement(h,p(p({ref:r},s),{},{components:t})):a.createElement(h,p({ref:r},s))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var u=2;u<o;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},53623:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const o={},p="NDArray::reshape",i={unversionedId:"manipulation/ndarray-reshape",id:"manipulation/ndarray-reshape",title:"NDArray::reshape",description:"Changes the shape of the NDArray.",source:"@site/api/manipulation/ndarray-reshape.mdx",sourceDirName:"manipulation",slug:"/manipulation/ndarray-reshape",permalink:"/api/manipulation/ndarray-reshape",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::moveaxis",permalink:"/api/manipulation/ndarray-moveaxis"},next:{title:"NDArray::rollaxis",permalink:"/api/manipulation/ndarray-rollaxis"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"<code>$shape</code>",id:"shape",level:3},{value:"Return",id:"return",level:2}],s={toc:u},c="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ndarrayreshape"},"NDArray::reshape"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public static function reshape(NDArray|array|float|int $target, array $shape): NDArray|float|int;\n")),(0,n.kt)("p",null,"Changes the shape of the NDArray."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"shape"},(0,n.kt)("inlineCode",{parentName:"h3"},"$shape")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Type")," ",(0,n.kt)("inlineCode",{parentName:"p"},"array")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"The new shape of the NDArray."))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return"},"Return"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Type")," - NDArray"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Return a view of the array with shape ",(0,n.kt)("inlineCode",{parentName:"li"},"$shape"),". To be compatible, the new shape must have the same amount of\nelements as the old one."))))}m.isMDXComponent=!0}}]);