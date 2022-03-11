"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7744],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,y=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(y,u(u({ref:t},l),{},{components:r})):n.createElement(y,u({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4844:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),u=["components"],s={slug:"2021-02-05-rust-webassembly-and-open-source",title:"Rust, WebAssembly and open source",authors:["mike","nathaniel"],tags:["Event"]},i=void 0,c={permalink:"/resources/2021-02-05-rust-webassembly-and-open-source",source:"@site/resources/2021-02-05-rust-webassembly-and-open-source.md",title:"Rust, WebAssembly and open source",description:"If you\u2019re designing a project where security is uppermost, but you want to make it easy to use and compatible with multiple platforms (existing and future), what principles should you follow, and how do they translate into an architecture and actual code. We\u2019ll present the 10 security design principles of the Enarx project, and discuss why they led us to where we are today: a Rust-based open source project with a WebAssembly run-time.",date:"2021-02-05T00:00:00.000Z",formattedDate:"February 5, 2021",tags:[{label:"Event",permalink:"/resources/tags/event"}],truncated:!1,authors:[{name:"Mike Bursell",title:"Co-founder of Enarx",url:"https://github.com/MikeCamel",imageURL:"https://github.com/MikeCamel.png",key:"mike"},{name:"Nathaniel McCallum",title:"Co-founder of Enarx",url:"https://github.com/npmccallum",imageURL:"https://github.com/npmccallum.png",key:"nathaniel"}],frontMatter:{slug:"2021-02-05-rust-webassembly-and-open-source",title:"Rust, WebAssembly and open source",authors:["mike","nathaniel"],tags:["Event"]},prevItem:{title:"2021-03-02 Outreach Meeting",permalink:"/resources/2021/03/02/outreach-meeting"},nextItem:{title:"Confidential Computing: a Pulse Survey on the Future of Security Technology",permalink:"/resources/2021-02-03-confidential-computing-a-pulse-survey-on-the-future-of-security-technology"}},l={authorsImageUrls:[void 0,void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you\u2019re designing a project where security is uppermost, but you want to make it easy to use and compatible with multiple platforms (existing and future), what principles should you follow, and how do they translate into an architecture and actual code. We\u2019ll present the 10 security design principles of the Enarx project, and discuss why they led us to where we are today: a Rust-based open source project with a WebAssembly run-time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source"),": FOSDEM 2021"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link"),": ",(0,a.kt)("a",{parentName:"p",href:"https://fosdem.org/2021/schedule/event/tee_enarx/"},"https://fosdem.org/2021/schedule/event/tee_enarx/")))}f.isMDXComponent=!0}}]);