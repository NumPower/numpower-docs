"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[5613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},o="NumPower API",s={unversionedId:"intro",id:"intro",title:"NumPower API",description:"Welcome to the API Documentation for NumPower, a pioneering",source:"@site/api/0-intro.md",sourceDirName:".",slug:"/intro",permalink:"/api/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"apiSidebar",next:{title:"Devices Functions",permalink:"/api/category/devices-functions"}},l={},u=[{value:"How This API Documentation is Organized",id:"how-this-api-documentation-is-organized",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"numpower-api"},"NumPower API"),(0,i.kt)("p",null,"Welcome to the API Documentation for NumPower, a pioneering\nlibrary for numerical computing in PHP. NumPower provides an\nextensive array of mathematical\nfunctions, random number capabilities, tools for integrating\nwith other languages, and robust capabilities for manipulating\nand operating on arrays. Importantly, it supports CUDA for\nmost operations and uses AVX2, CBLAS, and LAPACKE, making\nit a versatile tool in the landscape of numerical computing\nlibraries."),(0,i.kt)("p",null,"This documentation will serve as your comprehensive guide to\nunderstanding and utilizing the NumPower library, offering an\nin-depth exploration of its numerous functions."),(0,i.kt)("h2",{id:"how-this-api-documentation-is-organized"},"How This API Documentation is Organized"),(0,i.kt)("p",null,"This API documentation is divided into various categories to help you find the information you need effectively:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Math"),": This section encompasses all mathematical functions provided by NumPower, including arithmetic and trigonometric operations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Initializers"),": Learn about the multiple ways to initialize arrays in NumPower, with functions to create arrays from existing data or initialize arrays with preset values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Linear Algebra"),": Dive into the functions associated with linear algebra operations, such as matrix multiplication, determinants, solving linear equations, among others.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Logic Functions"),": This category includes functions for evaluating logical statements, including logical AND, OR, NOT operations, and comparison operations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Manipulation"),": Understand more about the functions that allow you to alter the shape, size, and structure of NumPower arrays.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Random"),": Explore the functions provided by NumPower for generating arrays of random numbers, drawn from various probability distributions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Statistics"),": This part houses statistical functions for operations such as averages, medians and variances.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Low-level Debug"),": This section includes functions and methods to assist in debugging."))),(0,i.kt)("p",null,"Whether you're a beginner embarking on your journey in\nnumerical computing, a developer eager to incorporate\nnumerical computing into your AI projects, or an ML\nenthusiast keen on leveraging PHP, this documentation\nwill help you navigate NumPower effectively. "),(0,i.kt)("p",null,"As the NumPower\ncommunity grows and the library evolves, we remain\ncommitted to keeping this documentation comprehensive,\nup-to-date, and user-friendly."))}m.isMDXComponent=!0}}]);