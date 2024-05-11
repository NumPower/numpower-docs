"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[8189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},l="Broadcast",s={unversionedId:"tutorial-basics/broadcast",id:"tutorial-basics/broadcast",title:"Broadcast",description:"We are working to support broadcast, which means that arithmetic operations between NDArrays of different dimensions",source:"@site/docs/tutorial-basics/3-broadcast.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/broadcast",permalink:"/docs/tutorial-basics/broadcast",draft:!1,editUrl:"https://github.com/NumPower/numpower-docs/docs/tutorial-basics/3-broadcast.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iterating",permalink:"/docs/tutorial-basics/iterating-ndarray"},next:{title:"GPU Support",permalink:"/docs/tutorial-basics/gpu"}},i={},c=[{value:"Scalar Broadcast",id:"scalar-broadcast",level:2},{value:"General Broadcast",id:"general-broadcast",level:2},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"broadcast"},"Broadcast"),(0,n.kt)("p",null,"We are working to support broadcast, which means that arithmetic operations between NDArrays of different dimensions\ncan be used."),(0,n.kt)("p",null,"There are some rules for this to be valid, below we will only deal with the cases currently implemented, but remember\nthat this is a preview and will be updated to support several different shapes."),(0,n.kt)("h2",{id:"scalar-broadcast"},"Scalar Broadcast"),(0,n.kt)("p",null,'Arithmetic operations involving an NDArray and a scalar value are always valid. In this case, the scalar\nwill be "expanded" to the same dimensions as the NDArray.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n// Create a matrix\n$array = nd::array([[1, 2], [3, 4]]);\n\n$result = $array * 2; // same as nd::multiply($array, 2);\n\n// Element-wise multiplication of $array * 2\n// Same as nd:multiply($array, [[2, 2], [2, 2]]);\nprint_r($result);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'@title="Output"',"@title":'"Output"'},"[[2, 4],\n [6, 8]]\n")),(0,n.kt)("h2",{id:"general-broadcast"},"General Broadcast"),(0,n.kt)("p",null,"In some cases, when the format of matrices is aligned, it is also possible to perform\narithmetic operations with matrices of different formats and dimensionality."),(0,n.kt)("h4",{id:"example-1"},"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n$a = nd::array(\n    [[1, 2, 3],\n     [4, 5, 6],\n     [7, 8, 9]]\n);\n\n$result = $a * [1, 2, 3];\n\necho $result;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'@title="Output"',"@title":'"Output"'},"[[1, 4, 9]\n [4, 10, 18]\n [7, 16, 27]]\n")),(0,n.kt)("h4",{id:"example-2"},"Example 2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n$a = nd::array(\n    [[1, 2, 3],\n     [4, 5, 6],\n     [7, 8, 9]]\n);\n\n$result = $a * [[1], [2], [3]];\n\necho $result;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php",metastring:'@title="Output"',"@title":'"Output"'},"[[1, 2, 3]\n [8, 10, 12]\n [21, 24, 27]]\n")))}d.isMDXComponent=!0}}]);