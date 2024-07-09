"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[5565],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(y,o(o({ref:r},c),{},{components:t})):a.createElement(y,o({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13266:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=t(87462),n=(t(67294),t(3905)),l=t(74866),o=t(85162);const u={},i="NDArray::array",s={unversionedId:"initializers/ndarray-array",id:"initializers/ndarray-array",title:"NDArray::array",description:"Creates a new NDArray from a PHP array. It is the equivalent of new NDArray($array);",source:"@site/api/initializers/ndarray-array.mdx",sourceDirName:"initializers",slug:"/initializers/ndarray-array",permalink:"/api/initializers/ndarray-array",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"NDArray::arange",permalink:"/api/initializers/ndarray-arange"},next:{title:"NDArray::identity",permalink:"/api/initializers/ndarray-identity"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"<code>$array</code>",id:"array",level:3},{value:"Return",id:"return",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function y(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ndarrayarray"},"NDArray::array"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public static function array(array|float|int $array): NDArray;\n")),(0,n.kt)("p",null,"Creates a new NDArray from a PHP array. It is the equivalent of ",(0,n.kt)("inlineCode",{parentName:"p"},"new NDArray($array);")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"array"},(0,n.kt)("inlineCode",{parentName:"h3"},"$array")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Type")," ",(0,n.kt)("inlineCode",{parentName:"p"},"array[long|double,]")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"The PHP array to be converted to a NDArray"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return"},"Return"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Type")," - NDArray"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"A single-precision (float32) NDArray with the same shape and values of ",(0,n.kt)("inlineCode",{parentName:"li"},"$array")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Every floating point in PHP is a double precision (float64) so some precision may be lost during conversion.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"example1",label:"Example 1",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use \\NDArray as nd;\n\n$a = nd::array([[1, 2], [3, 4]]);\nprint_r($a);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"[[1, 2],\n [3, 4]]\n")))),(0,n.kt)("hr",null))}y.isMDXComponent=!0},85162:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(67294),n=t(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:r,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>N});var a=t(87462),n=t(67294),l=t(86010),o=t(12466),u=t(16550),i=t(91980),s=t(67392),c=t(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function d(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??p(t);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function y(e){let{queryString:r=!1,groupId:t}=e;const a=(0,u.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,l=d(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[i,s]=y({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:r,block:t,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),a=s[t].value;a!==u&&(p(r),i(a))},m=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r)},s.map((e=>{let{value:r,label:t,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,key:r,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":u===r})}),t??r)})))}function k(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function g(e){const r=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(h,(0,a.Z)({},e,r)),n.createElement(k,(0,a.Z)({},e,r)))}function N(e){const r=(0,b.Z)();return n.createElement(g,(0,a.Z)({key:String(r)},e))}}}]);