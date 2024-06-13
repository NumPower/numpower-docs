"use strict";(self.webpackChunknumpower=self.webpackChunknumpower||[]).push([[1646],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(i),d=r,m=l["".concat(u,".").concat(d)]||l[d]||f[d]||o;return i?n.createElement(m,a(a({ref:t},p),{},{components:i})):n.createElement(m,a({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},66742:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={},a="What is Automatic Differentiation (Autograd)?",s={unversionedId:"intro/autograd-intro",id:"intro/autograd-intro",title:"What is Automatic Differentiation (Autograd)?",description:"Automatic differentiation, often referred to as autograd, is a technique used to evaluate the derivatives of functions specified by computer programs. Unlike numerical differentiation, which approximates derivatives using finite differences, or symbolic differentiation, which manipulates mathematical expressions directly, automatic differentiation computes exact derivatives efficiently through a process of program transformation.",source:"@site/tensor/intro/1-autograd-intro.md",sourceDirName:"intro",slug:"/intro/autograd-intro",permalink:"/tensor/intro/autograd-intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"apiSidebar",previous:{title:"NumPower Autograd",permalink:"/tensor/category/numpower-autograd"},next:{title:"Installing Autograd",permalink:"/tensor/intro/installing"}},u={},c=[{value:"Uses of Autograd",id:"uses-of-autograd",level:2}],p={toc:c},l="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(l,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-automatic-differentiation-autograd"},"What is Automatic Differentiation (Autograd)?"),(0,r.kt)("p",null,"Automatic differentiation, often referred to as autograd, is a technique used to evaluate the derivatives of functions specified by computer programs. Unlike numerical differentiation, which approximates derivatives using finite differences, or symbolic differentiation, which manipulates mathematical expressions directly, automatic differentiation computes exact derivatives efficiently through a process of program transformation."),(0,r.kt)("p",null,"Autograd works by breaking down functions into elementary operations, for which the derivatives are known, and then applying the chain rule of calculus to systematically compute the derivatives of complex functions."),(0,r.kt)("p",null,"NumPower Tensor specifically uses reverse mode automatic differentiation. This mode is particularly well-suited for functions with many outputs and fewer inputs, such as in the case of neural networks. Reverse mode calculates the partial derivatives of the outputs with respect to each input by applying the chain rule from the output layer back through the network to the input layer."),(0,r.kt)("h2",{id:"uses-of-autograd"},"Uses of Autograd"),(0,r.kt)("p",null,"Automatic differentiation has a broad spectrum of uses across various fields:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Machine Learning:")," Autograd is essential in training neural networks. During backpropagation, autograd computes the gradients of the loss function with respect to the model parameters, enabling the optimization algorithms to update the weights effectively."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optimization:")," In optimization problems, gradients provide crucial information about the direction in which a function increases or decreases. Autograd helps in finding the optimal points of complex, high-dimensional functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scientific Computing:")," Many scientific simulations require the computation of derivatives to understand sensitivities and to perform tasks like solving differential equations. Autograd simplifies these computations and enhances accuracy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Physics and Engineering:")," Autograd is used in physics-based simulations and engineering applications to compute forces, velocities, and other derivative-dependent properties."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Economics and Finance:")," In quantitative finance, autograd aids in computing sensitivities of financial models (like Greeks in option pricing) and in optimizing economic models."))}f.isMDXComponent=!0}}]);