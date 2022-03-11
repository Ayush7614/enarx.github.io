"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3286],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Design Principles",c={unversionedId:"Technical/Design",id:"Technical/Design",isDocsHomePage:!1,title:"Design Principles",description:"The Enarx project adheres and champions the following Design Principles:",source:"@site/docs/Technical/Design.md",sourceDirName:"Technical",slug:"/Technical/Design",permalink:"/docs/Technical/Design",editUrl:"https://github.com/enarx/docs/docs/Technical/Design.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Problem",permalink:"/docs/Technical/Problem"},next:{title:"Threat Model",permalink:"/docs/Technical/Threat"}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-principles"},"Design Principles"),(0,o.kt)("p",null,"The Enarx project adheres and champions the following Design Principles:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Minimal Trusted Computing Base",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Every line of code in the computing base represents a possible way for the host to attack the tenant's code and data. Care will be taken to have as few lines of code as possible inside our trusted computing base. All trusted code will be measured for the code-owner's validation."))),(0,o.kt)("li",{parentName:"ol"},"Minimum trust relationships",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Every component of the host machine on which a Keep is running is explicitly untrusted with the exception of\u2026",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u2026the CPU and its firmware. All programs must trust the processor on which they run, as this is the minimum capability required for execution."),(0,o.kt)("li",{parentName:"ol"},"\u2026the Enarx Keep platform. Enarx will deliver all additional code to enable the core application runtime."))))),(0,o.kt)("li",{parentName:"ol"},"Deployment-time portability",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Applications deployed with Enarx can be redeployed on different CPU architectures without recompilation."),(0,o.kt)("li",{parentName:"ol"},"The set of trusted CPUs is a deployment-time configuration."))),(0,o.kt)("li",{parentName:"ol"},"Network stack outside the TCB",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Network stacks are large, complex and buggy, offering opportunities for privilege escalation and compromise.  Enarx aims to provide a small, easily-auditable TCB, and as a result chooses to use Operating-System provided networking, whilst managing encryption/decryption of packets within the Keep."))),(0,o.kt)("li",{parentName:"ol"},"Security at rest, in transit and in use",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enarx encrypts all data stored or transmitted from within a Keep at rest and in transit by default."),(0,o.kt)("li",{parentName:"ol"},"Enarx is designed to enable deployment best practices, including automated, short-running Keeps."),(0,o.kt)("li",{parentName:"ol"},"Enarx aims to make redeployment of Keeps trivial. Therefore, migration of Keeps is not supported."))),(0,o.kt)("li",{parentName:"ol"},"Auditability ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Code in Enarx will be crafted to be easily auditable."),(0,o.kt)("li",{parentName:"ol"},"Enarx code will be broken into small, independent components that are easy to understand."),(0,o.kt)("li",{parentName:"ol"},"Run-time modularity of the core platform makes auditing difficult and is to be avoided."))),(0,o.kt)("li",{parentName:"ol"},"Open source",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"This guarantees people can tailor the software to their needs."),(0,o.kt)("li",{parentName:"ol"},"It is also the best way to provide auditability to all, and not just to some."),(0,o.kt)("li",{parentName:"ol"},"Enarx is published under the Apache 2.0 licence."))),(0,o.kt)("li",{parentName:"ol"},"Open standards ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enarx uses well-known, shared open standards where possible, and aims to work to bring new ones into existence where necessary."))),(0,o.kt)("li",{parentName:"ol"},"Memory safety",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Enarx uses programming languages that encourage memory safety to reduce memory corruption costs."),(0,o.kt)("li",{parentName:"ol"},"Exceptions to this policy need to be clearly justified, limited in scope and publicly documented."),(0,o.kt)("li",{parentName:"ol"},"The primary programming language of Enarx is Rust."))),(0,o.kt)("li",{parentName:"ol"},"No backdoors",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The Enarx project founders and core team take a strong view that backdoors in software, firmware or hardware are never a good idea, and pledge to resist any attempts by any parties (internal or external to the project, commercial, charitable or governmental, from whatever jurisdiction) to insert backdoors into any aspect of Enarx, or to encourage, force or cajole any such backdoors to be inserted.")))))}d.isMDXComponent=!0}}]);