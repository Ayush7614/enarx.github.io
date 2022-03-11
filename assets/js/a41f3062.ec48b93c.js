"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[170],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={},c="Enarx",l={unversionedId:"Start/Enarx",id:"Start/Enarx",title:"Enarx",description:"Enarx is a framework for running applications in TEE instances \u2013 which we refer to as \u201cKeeps\u201d\u2013without the need to trust lots of dependencies, without the need to rewrite the application, and without the need to implement attestation separately.",source:"@site/docs/Start/Enarx.md",sourceDirName:"Start",slug:"/Start/Enarx",permalink:"/docs/Start/Enarx",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Start/Enarx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TEE",permalink:"/docs/Start/TEE"},next:{title:"Conclusion",permalink:"/docs/Start/Conclusion"}},p={},u=[],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enarx"},"Enarx"),(0,o.kt)("p",null,"Enarx is a framework for running applications in TEE instances \u2013 which we refer to as \u201cKeeps\u201d\u2013without the need to trust lots of dependencies, without the need to rewrite the application, and without the need to implement attestation separately."),(0,o.kt)("p",null,"Enarx aims to minimize the trust relationships required when executing applications, meaning that the only components which need to be trusted are: the CPU and associated firmware, the workload itself, and the Enarx middleware, which is fully open source and auditable. Applications run without any of the layers in the stack (e.g. hypervisor, kernel, user-space) being able to look into or alter the Keep or its contents."),(0,o.kt)("p",null,"It provides a WebAssembly runtime, based on wasmtime, offering developers a wide range of language choices for implementation, including Rust, C, C++, C#, Go, Java, Python and Haskell. It is designed to work across silicon architectures transparently to the user so that the application can run equally simple on Intel platforms (SGX or the recently-announced TDX), AMD platforms (SEV) or forthcoming platforms such as Arms\u2019 Realms and IBM\u2019s PEF - all without having to recompile the application code."),(0,o.kt)("p",null,"Enarx is CPU-architecture independent, enabling the same application code to be deployed across multiple targets, abstracting issues such as cross-compilation and differing attestation mechanisms between hardware vendors."),(0,o.kt)("p",null,"Enarx provides attestation, packaging and provisioning of the application to take place in a way which is transparent to the user. Every instance of an application goes through three steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attestation: Enarx checks that the host to which you\u2019re planning to deploy is a genuine TEE instance."),(0,o.kt)("li",{parentName:"ul"},"Packaging: Once the attestation is complete and the TEE instance verified, the Enarx management component encrypts the application, along with any required data."),(0,o.kt)("li",{parentName:"ul"},"Provisioning: Enarx then sends the application and data along to the host for execution in the Enarx Keep.")),(0,o.kt)("p",null,"At no point is the host system able to look inside or change the code or data within a Keep. Thus, Enarx allows organizations with sensitive code or data to run their applications with strong integrity and confidentiality protections."))}d.isMDXComponent=!0}}]);