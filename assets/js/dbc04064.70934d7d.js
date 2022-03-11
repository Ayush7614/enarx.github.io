"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7982],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=g(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return g},assets:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={slug:"2021-11-16-logging-debugging",title:"Confidential Computing: logging and debugging",authors:["mike"],tags:["Enarx's Blog"]},l=void 0,g={permalink:"/resources/2021-11-16-logging-debugging",source:"@site/resources/2021-11-16-logging-debugging.md",title:"Confidential Computing: logging and debugging",description:"Log entries and other error messages can be very useful, but they can also provide information to other parties - sometimes information which you\u2019d prefer they didn\u2019t have.  This is particularly true when you are thinking about Confidential Computing: running applications or workloads in environments where you really want to protect the confidentiality and integrity of your application and its data.",date:"2021-11-16T00:00:00.000Z",formattedDate:"November 16, 2021",tags:[{label:"Enarx's Blog",permalink:"/resources/tags/enarxs-blog"}],truncated:!1,authors:[{name:"Mike Bursell",title:"Co-founder of Enarx",url:"https://github.com/MikeCamel",imageURL:"https://github.com/MikeCamel.png",key:"mike"}],frontMatter:{slug:"2021-11-16-logging-debugging",title:"Confidential Computing: logging and debugging",authors:["mike"],tags:["Enarx's Blog"]},prevItem:{title:"2021-11-17 Outreach Meeting",permalink:"/resources/2021/11/17/outreach-meeting"},nextItem:{title:"2021-11-09 Outreach Meeting",permalink:"/resources/2021/11/09/outreach-meeting"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Log entries and other error messages can be very useful, but they can also provide information to other parties - sometimes information which you\u2019d prefer they didn\u2019t have.  This is particularly true when you are thinking about Confidential Computing: running applications or workloads in environments where you really want to protect the confidentiality and integrity of your application and its data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source"),": Enarx's Blog"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://blog.enarx.dev/confidential-computing-logging-and-debugging/"},"https://blog.enarx.dev/confidential-computing-logging-and-debugging/")))}f.isMDXComponent=!0}}]);