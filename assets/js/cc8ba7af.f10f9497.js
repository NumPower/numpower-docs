"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),y=a,m=l["".concat(s,".").concat(y)]||l[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="GPU Support",p={unversionedId:"tutorial-basics/gpu",id:"tutorial-basics/gpu",title:"GPU Support",description:"When available through an NVIDIA card with CUDA support, NumPower can store and perform operations on the graphics",source:"@site/docs/tutorial-basics/4-gpu.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/gpu",permalink:"/docs/tutorial-basics/gpu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/4-gpu.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Broadcast",permalink:"/docs/tutorial-basics/broadcast"}},s={},u=[{value:"Copy NDArray to GPU",id:"copy-ndarray-to-gpu",level:2},{value:"Copy NDArray to CPU",id:"copy-ndarray-to-cpu",level:2},{value:"GPU and CPU operations",id:"gpu-and-cpu-operations",level:2}],c={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gpu-support"},"GPU Support"),(0,a.kt)("p",null,"When available through an NVIDIA card with CUDA support, NumPower can store and perform operations on the graphics\ncard, this is especially interesting for linear algebra operations on large tensors."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GPU operations on many occasions can be considerably slower than CPU operations, especially in simple\noperations. There is a cost to using VRAM.")),(0,a.kt)("h2",{id:"copy-ndarray-to-gpu"},"Copy NDArray to GPU"),(0,a.kt)("p",null,"To copy an ",(0,a.kt)("inlineCode",{parentName:"p"},"NDArray")," to your video card, just use the ",(0,a.kt)("inlineCode",{parentName:"p"},"gpu()")," method. This method will return a new NDArray with\nthe data copied to your VRAM."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse \\NDArray as nd;\n\n$a = nd::ones([10, 10]);\n\n$a_gpu = $a->gpu();\n")),(0,a.kt)("p",null,"In this example we create an NDArray with format (10, 10) full of one. Then we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"gpu()")," method to create\na ",(0,a.kt)("strong",{parentName:"p"},"copy")," of this NDArray on the GPU."),(0,a.kt)("h2",{id:"copy-ndarray-to-cpu"},"Copy NDArray to CPU"),(0,a.kt)("p",null,"In most cases, you will want your NDArray stored in your RAM. To copy an NDArray that is stored in your VRAM (GPU)\nto your RAM (CPU), just use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cpu()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse \\NDArray as nd;\n\n$a = nd::ones([10, 10]);\n\n$a_gpu = $a->gpu();\n\n// OPERATIONS\n\n$result = $a_gpu->cpu();\n\n")),(0,a.kt)("h2",{id:"gpu-and-cpu-operations"},"GPU and CPU operations"),(0,a.kt)("p",null,"In operations involving more than one tensor, like ",(0,a.kt)("inlineCode",{parentName:"p"},"NDArray::add"),", both tensors involved must be on the same device.\nOperations between arrays on different devices will raise an exception."),(0,a.kt)("p",null,"In this first version of NumPower, we want the user to explicitly say where they want to store their data, so\nautomatic copies between GPU and CPU are not available."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Some GPU-incompatible operations may raise an exception. In these cases the user must copy the tensor to\nthe CPU manually using the appropriate method.")))}d.isMDXComponent=!0}}]);