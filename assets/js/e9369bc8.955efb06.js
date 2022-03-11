"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8818],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],u={slug:"2021-12-07-dr-cloudlove",title:"Dr CloudLove, or how I learned to trust my CSP (not)",authors:["mike"],tags:["Event"]},l=void 0,c={permalink:"/resources/2021-12-07-dr-cloudlove",source:"@site/resources/2021-12-07-dr-cloudlove.md",title:"Dr CloudLove, or how I learned to trust my CSP (not)",description:"Title: Dr CloudLove, or how I learned to trust my CSP (not)",date:"2021-12-07T00:00:00.000Z",formattedDate:"December 7, 2021",tags:[{label:"Event",permalink:"/resources/tags/event"}],truncated:!1,authors:[{name:"Mike Bursell",title:"Co-founder of Enarx",url:"https://github.com/MikeCamel",imageURL:"https://github.com/MikeCamel.png",key:"mike"}],frontMatter:{slug:"2021-12-07-dr-cloudlove",title:"Dr CloudLove, or how I learned to trust my CSP (not)",authors:["mike"],tags:["Event"]},prevItem:{title:"2021-12-08 Outreach Meeting",permalink:"/resources/2021/12/08/outreach-meeting"},nextItem:{title:"2021-12-07 Outreach Meeting",permalink:"/resources/2021/12/07/outreach-meeting"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Title"),": Dr CloudLove, or how I learned to trust my CSP (not)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Author"),": Mike Bursell",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Date"),": Tuesday, December 7, 2021, 11:00 AM - 11:45 AM  "),(0,a.kt)("p",null,"The Cloud is just somebody else\u2019s computer. So when you run a workload on a\ncloud host, anyone who owns (or pwns) that system can look into it or\nchange the data or event the application itself. You have no\nconfidentiality or integrity protection from your Cloud Service\nProvider, rogue sysadmins or just anyone who compromises their machines.\nConfidential computing uses hardware-based trusted execution\nenvironment (e.g. Intel SGX, AMD SEV or Arm 9 Realms) to provide these\nprotections, but it\u2019s difficult to use and complex to understand."),(0,a.kt)("p",null,"This session will introduce the problem at a technical level, explain\nsome of the solutions, and discuss why confidential computing is on its\nway \u2013 but not an easy fix (yet). Come and be amused, horrified, and\nexcited; all in one presentation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source"),": SecurityWeekly Unlocked 2021"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link"),": ",(0,a.kt)("a",{parentName:"p",href:"https://events.securityweekly.com/unlocked2021"},"https://events.securityweekly.com/unlocked2021")))}d.isMDXComponent=!0}}]);