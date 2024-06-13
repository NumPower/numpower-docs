"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[4651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,u(u({ref:t},c),{},{components:a})):r.createElement(f,u({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),u=a(85162);const o={},i="NDArray::add",s={unversionedId:"mathematical-functions/arithmetic/ndarray-add",id:"mathematical-functions/arithmetic/ndarray-add",title:"NDArray::add",description:"Add arguments element-wise",source:"@site/api/mathematical-functions/arithmetic/ndarray-add.mdx",sourceDirName:"mathematical-functions/arithmetic",slug:"/mathematical-functions/arithmetic/ndarray-add",permalink:"/api/mathematical-functions/arithmetic/ndarray-add",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Arithmetics",permalink:"/api/category/arithmetics"},next:{title:"NDArray::divide",permalink:"/api/mathematical-functions/arithmetic/ndarray-divide"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"<code>$a</code> <code>$b</code>",id:"a-b",level:4},{value:"Return",id:"return",level:2},{value:"<code>NDArray</code>",id:"ndarray",level:4},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ndarrayadd"},"NDArray::add"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public static function add(NDArray|array|scalar $a, NDArray|array|scalar $b): NDArray|scalar;\n")),(0,n.kt)("p",null,"Add arguments element-wise"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h4",{id:"a-b"},(0,n.kt)("inlineCode",{parentName:"h4"},"$a")," ",(0,n.kt)("inlineCode",{parentName:"h4"},"$b")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type")," - NDArray | array | scalar"),(0,n.kt)("li",{parentName:"ul"},"The arrays to be added, ",(0,n.kt)("inlineCode",{parentName:"li"},"$a")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"$b")," must be of the same shape.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return"},"Return"),(0,n.kt)("h4",{id:"ndarray"},(0,n.kt)("inlineCode",{parentName:"h4"},"NDArray")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The sum of ",(0,n.kt)("inlineCode",{parentName:"li"},"$a")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"$b"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("h4",{parentName:"admonition",id:"gpu-supported"},"GPU SUPPORTED"),(0,n.kt)("p",{parentName:"admonition"},"This operation is supported by GPU (VRAM) and contains a custom CUDA kernel.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"example1",label:"Example 1",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n$a = new nd([[2, -2], [1, -1]]);\n$b = new nd([[3, -3], [2, -1]]);\n\n$c = $a + $b;\n\nprint_r($c);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"[[5, -5],\n [3, -2]]\n"))),(0,n.kt)(u.Z,{value:"example2",label:"Example 2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n$a = new nd([[2, -2], [1, -1]]);\n$b = new nd([[3, -3], [2, -1]]);\n\n$c = nd::add($a, $b);\n\nprint_r($c);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"[[5, -5],\n [3, -2]]\n"))),(0,n.kt)(u.Z,{value:"example3",label:"Example 3",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n$c = nd::add([5, 2, -3], [4, 3, 2]);\n\nprint_r($c);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"[9, 5, -1]\n")))))}f.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),u=a(12466),o=a(16550),i=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var h=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==o&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",y.tabItem,u?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}}}]);