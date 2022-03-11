"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6662:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={},l="AMD SEV Remote Attestation Protocol",c={unversionedId:"Technical/AMD-SEV-Attestation",id:"Technical/AMD-SEV-Attestation",title:"AMD SEV Remote Attestation Protocol",description:"Summary",source:"@site/docs/Technical/AMD-SEV-Attestation.md",sourceDirName:"Technical",slug:"/Technical/AMD-SEV-Attestation",permalink:"/docs/Technical/AMD-SEV-Attestation",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Technical/AMD-SEV-Attestation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AMD SEV",permalink:"/docs/Technical/AMD-SEV"},next:{title:"AMD-SNP",permalink:"/docs/Technical/AMD-SNP"}},p={},u=[{value:"Summary",id:"summary",level:2},{value:"Goal",id:"goal",level:2},{value:"Theory of Operation",id:"theory-of-operation",level:2},{value:"Message Formats",id:"message-formats",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Naples Certificate Chain",id:"naples-certificate-chain",level:4},{value:"Rome Certificate Chain",id:"rome-certificate-chain",level:4},{value:"Launch Start",id:"launch-start",level:3},{value:"Measurement",id:"measurement",level:3},{value:"Secret",id:"secret",level:3},{value:"Finish",id:"finish",level:3},{value:"Interior Data Structure CBOR",id:"interior-data-structure-cbor",level:4},{value:"Message Sequence Diagram",id:"message-sequence-diagram",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amd-sev-remote-attestation-protocol"},"AMD SEV Remote Attestation Protocol"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"A tenant may choose to deploy their workload into an AMD SEV-based Enarx Keep.\nThis document describes a client-server protocol to allow a tenant to perform\nattestation with a remote AMD SEV Enarx Keep."),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"This protocol allows a tenant to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify the platform certificate chain belonging to the remote host where\nthe Enarx Keep is constructed"),(0,i.kt)("li",{parentName:"ol"},"Establish a secure channel with the AMD Secure Processor (AMD SP) on the\nremote host"),(0,i.kt)("li",{parentName:"ol"},"Compare its own measurement of the guest's initial state with the AMD SP's\nmeasurement from the untrusted host"),(0,i.kt)("li",{parentName:"ol"},"Safely deliver its workload to the AMD SP")),(0,i.kt)("h2",{id:"theory-of-operation"},"Theory of Operation"),(0,i.kt)("p",null,"This protocol maps the regular SEV launch procedure onto a simple client-server\nmodel (client sends request to server; server sends its response to client).\nIn fact, the message formats are comprised of data structures defined in the\nAMD SEV specification."),(0,i.kt)("p",null,"It is a short, serialized exchange. More importantly, however, it is meant to\nbe an \u201catomic\u201d transaction. What this means is that the client and the backend\ncomplete attestation successfully in this exchange or they don\u2019t. There are no\n\u201cin-between\u201d end conditions. Therefore, neither party should have any\nexpectation of \u201cretrying\u201d a previous step. It is always forward progress or\nnone at all. As the orchestrator, it is the Keep Manager\u2019s responsibility to\nknow if the keep becomes defunct during attestation, launch, or normal\noperation. It is expected that the Keep Manager will inform the client of an\nappropriate error condition and tear down the defunct Keep if necessary."),(0,i.kt)("p",null,"A complete demonstration of this protocol in action is described in a Message\nSequence Diagram later on."),(0,i.kt)("h2",{id:"message-formats"},"Message Formats"),(0,i.kt)("p",null,"The data structures defined in the SEV specification form the substrate for this\nprotocol. As a result, message payloads are binary structures. The messages for\nthis protocol are ",(0,i.kt)("a",{parentName:"p",href:"http://cbor.io/"},"CBOR-encoded"),". They will be represented here\nin ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc8610"},"Concise Data Definition Language (CDDL)"),"."),(0,i.kt)("p",null,"The MIME-types for messages in this protocol will adhere to the MIME-type\nconvention, and will be arranged like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"application/vnd.enarx.att.sev+cbor; msg=$MESSAGE\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"$MESSAGE")," is the message type described in the corresponding message\nformats below."),(0,i.kt)("p",null,"The CBOR representation for a message is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message = {\n      certificate-chain-naples //\n      certificate-chain-rome //\n      launch-start //\n      measurement //\n      secret //\n      finish\n}\n")),(0,i.kt)("p",null,"where the key for these structures are the corresponding string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"certificate-chain-naples" /\n"certificate-chain-rome" /\n"launch-start" /\n"measurement" /\n"secret" /\n"finish"\n')),(0,i.kt)("p",null,"A message's ",(0,i.kt)("inlineCode",{parentName:"p"},"mimetype")," MUST correspond to its CBOR representation."),(0,i.kt)("h3",{id:"certificate-chain"},"Certificate Chain"),(0,i.kt)("p",null,"The certificate chain varies depending on the processor hardware\ngeneration."),(0,i.kt)("h4",{id:"naples-certificate-chain"},"Naples Certificate Chain"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MIME type"),": certificate-chain-naples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'certificate-chain-naples = (\n      "ark": certificate-ca-small,\n      "ask": certificate-ca-small,\n      "pdh": certificate-sev,\n      "pek": certificate-sev,\n      "oca": certificate-sev,\n      "cek": certificate-sev,\n)\n')),(0,i.kt)("h4",{id:"rome-certificate-chain"},"Rome Certificate Chain"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MIME type"),": certificate-chain-rome"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'certificate-chain-rome = (\n      "ark": certificate-ca-large,\n      "ask": certificate-ca-large,\n      "pdh": certificate-sev,\n      "pek": certificate-sev,\n      "oca": certificate-sev,\n      "cek": certificate-sev,\n)\n')),(0,i.kt)("h3",{id:"launch-start"},"Launch Start"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MIME type"),": launch-start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'launch-start = (\n      "policy": policy,\n      "pdh": certificate-sev,\n      "session": session,\n)\n')),(0,i.kt)("h3",{id:"measurement"},"Measurement"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MIME type"),": measurement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'measurement = (\n      "build": build,\n      "measurement": bytes .size 32,\n      "nonce": bytes .size 16,\n)\n')),(0,i.kt)("h3",{id:"secret"},"Secret"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MIME type"),": secret"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'secret = (\n      "header": {\n            "iv": bytes .size 16,\n            "mac": bytes .size 32,\n      },\n      "ciphertext": bytes,\n)\n')),(0,i.kt)("h3",{id:"finish"},"Finish"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MIME type"),": finish"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/* TODO */\n")),(0,i.kt)("h4",{id:"interior-data-structure-cbor"},"Interior Data Structure CBOR"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"version")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'version = (\n      "major": uint .size 1,\n      "minor": uint .size 1,\n)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"build")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'build = (\n      "version": version,\n      "build": uint .size 1,\n)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"policy")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'policy = (\n      "flags": uint .size 2,\n      "minfw": version,\n)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"certificate-sev")),(0,i.kt)("p",null,"This is an opaque, binary structure. See Appendix C in the AMD SEV specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"certificate-ca-large")),(0,i.kt)("p",null,"This is an opaque, binary structure. See Appendix B in the AMD SEV specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"certificate-ca-small")),(0,i.kt)("p",null,"This is an opaque, binary structure. See Appendix B in the AMD SEV specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"session")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'session = (\n      "nonce": bytes .size 16,\n      "wrap_tk": bytes .size 32,\n      "wrap_iv": bytes .size 16,\n      "wrap_mac": bytes .size 32,\n      "policy_mac": bytes .size 32,\n)\n')),(0,i.kt)("h2",{id:"message-sequence-diagram"},"Message Sequence Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wiki/enarx/enarx/images/amd-sev-remote-attestation.svg",alt:"message sequence diagram"})),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"v4:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All messages are CBOR-encoded"),(0,i.kt)("li",{parentName:"ul"},"Add message/container-type representations"),(0,i.kt)("li",{parentName:"ul"},"Certificates are opaque binary structures now, so remove the CBOR representations")),(0,i.kt)("p",null,"v3:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update all types to be cbor-encoded with CDDL descriptions"),(0,i.kt)("li",{parentName:"ul"},"Separate types for Rome and Naples certificate chains"),(0,i.kt)("li",{parentName:"ul"},"Add a configuration complete message")),(0,i.kt)("p",null,"v2:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only allow for 1 secret packet to be sent (changed from accommodating\npotentially many secrets)"),(0,i.kt)("li",{parentName:"ul"},"Add a message header to describe a packet's MIME type & the payload\nlength"),(0,i.kt)("li",{parentName:"ul"},'Disambiguate term "peer" -- it represented both the Keep Manager and\nthe tenant (by proxy)')))}h.isMDXComponent=!0}}]);