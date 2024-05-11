"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,y=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="NDArray::correlate2d",l={unversionedId:"signal-processing/ndarray-correlate2d",id:"signal-processing/ndarray-correlate2d",title:"NDArray::correlate2d",description:"Convolve two 2-dimensional arrays.",source:"@site/api/signal-processing/ndarray-correlate2d.mdx",sourceDirName:"signal-processing",slug:"/signal-processing/ndarray-correlate2d",permalink:"/api/signal-processing/ndarray-correlate2d",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::convolve2d",permalink:"/api/signal-processing/ndarray-convolve2d"},next:{title:"Statistics",permalink:"/api/category/statistics"}},p={},d=[{value:"$mode options",id:"mode-options",level:4},{value:"$boundary options",id:"boundary-options",level:4},{value:"Parameters",id:"parameters",level:2},{value:"<code>$a</code> <code>$b</code>",id:"a-b",level:3},{value:"<code>$mode</code>",id:"mode",level:3},{value:"<code>$boundary</code>",id:"boundary",level:3},{value:"Notes",id:"notes",level:2}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ndarraycorrelate2d"},"NDArray::correlate2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public static function convolve2d(NDArray|array|GdImage $a, NDArray|array|GdImage $b, string $mode, string $boundary, scalar $fill_value = 0.0f): NDArray;\n")),(0,a.kt)("p",null,"Convolve two 2-dimensional arrays."),(0,a.kt)("p",null,"Convolve ",(0,a.kt)("inlineCode",{parentName:"p"},"$a")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$b")," with output size determined by ",(0,a.kt)("inlineCode",{parentName:"p"},"$mode"),", and boundary conditions determined by ",(0,a.kt)("inlineCode",{parentName:"p"},"$boundary")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$fill_value"),"."),(0,a.kt)("h4",{id:"mode-options"},"$mode options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"full")," - Full discrete linear convolution of the inputs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"valid")," - The output consists only of those elements that do not rely on the zero-padding. In \u2018valid\u2019 mode, either ",(0,a.kt)("inlineCode",{parentName:"li"},"$a")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"$b")," must be at least as large as the other in every dimension."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"same")," - The output is the same size as ",(0,a.kt)("inlineCode",{parentName:"li"},"$a"),", centered with respect to the \u2018full\u2019 output.")),(0,a.kt)("h4",{id:"boundary-options"},"$boundary options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fill")," - Pad input arrays with ",(0,a.kt)("inlineCode",{parentName:"li"},"$fill_value")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"wrap")," - Circular boundary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"symm")," - Symmetrical boundary")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"a-b"},(0,a.kt)("inlineCode",{parentName:"h3"},"$a")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"$b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type")," - NDArray | array | GdImage"),(0,a.kt)("li",{parentName:"ul"},"The arrays to perform the convolution.")),(0,a.kt)("h3",{id:"mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"$mode")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type")," - string"),(0,a.kt)("li",{parentName:"ul"},"The size of the output. Can be: ",(0,a.kt)("inlineCode",{parentName:"li"},"full"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"valid")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"same"))),(0,a.kt)("h3",{id:"boundary"},(0,a.kt)("inlineCode",{parentName:"h3"},"$boundary")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type")," - string"),(0,a.kt)("li",{parentName:"ul"},"A flag indicating how to handle boundaries. Can be: ",(0,a.kt)("inlineCode",{parentName:"li"},"fill"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"wrap")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"symm"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("h4",{parentName:"admonition",id:"gpu-supported"},"GPU SUPPORTED"),(0,a.kt)("p",{parentName:"admonition"},"This operation is supported by GPU (VRAM) and contains a custom CUDA kernel.")))}m.isMDXComponent=!0}}]);