"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[6200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Indexing & Slicing",l={unversionedId:"tutorial-basics/ndarray-indexing",id:"tutorial-basics/ndarray-indexing",title:"Indexing & Slicing",description:"Indexing",source:"@site/docs/tutorial-basics/1-ndarray-indexing.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/ndarray-indexing",permalink:"/docs/tutorial-basics/ndarray-indexing",draft:!1,editUrl:"https://github.com/NumPower/numpower-docs/docs/tutorial-basics/1-ndarray-indexing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NDArray Creation",permalink:"/docs/tutorial-basics/ndarray-creation"},next:{title:"Iterating",permalink:"/docs/tutorial-basics/iterating-ndarray"}},s={},p=[{value:"Indexing",id:"indexing",level:2},{value:"Slicing",id:"slicing",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"indexing--slicing"},"Indexing & Slicing"),(0,a.kt)("h2",{id:"indexing"},"Indexing"),(0,a.kt)("p",null,"Indexing on the NDArray can be treated exactly like a standard array, with a few extras that we'll see next. The simplest way to set\nand return a value from an NDArray is through the standard PHP indexer."),(0,a.kt)("p",null,"NDArray implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayAcess")," PHP interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'<?php\nuse \\NDArray as nd;\n\n$a = nd::zeros([10, 10]);   // Initialize NDArray of shape (10, 10) full of zeros\n\n\necho $a[0][0];      // Get\necho "\\n";\n\n$a[0][0] = 1;       // Set\necho $a[0][0];      // Get\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'@title="Output"',"@title":'"Output"'},"0\n1\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"__offsetGet()")," method will return a slice of the root ",(0,a.kt)("inlineCode",{parentName:"p"},"NDArray"),",\na memory copy will only be made if the slice in question is changed.")),(0,a.kt)("h2",{id:"slicing"},"Slicing"),(0,a.kt)("p",null,"Python-inspired slicing can be used with NDArrays by calling the slice() method of any NDArray object."),(0,a.kt)("p",null,"The slice is applied per dimension, and each tuple used as an argument represents the slice of a dimension."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse \\NDArray as nd;\n\n// Create a matrix\n$array = nd::array([[1, 2], [3, 4]]);\n\n// Slice the second column of $array\n//\n// The first tuple [] represents ALL rows\n// The second tuple [1, 2] represents start: 1, stop: 2 and step: 1 (default)\n$second_column = $array->slice([], [1, 2]);\n\nprint_r($second_column);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'@title="Output"',"@title":'"Output"'},"[[2],\n [4]]\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Negative values \u200b\u200bfor start, stop and step are\nnot supported yet, but are in the roadmap.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Although ",(0,a.kt)("inlineCode",{parentName:"p"},"print_r")," works with the NDArray object, other PHP standard library array\nmethods like ",(0,a.kt)("inlineCode",{parentName:"p"},"array_column")," are not compatible with NDArrays.")))}u.isMDXComponent=!0}}]);