"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2715],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||r;return t?o.createElement(d,i(i({ref:n},u),{},{components:t})):o.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},648:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return g}});var o=t(3117),a=t(102),r=(t(7294),t(3905)),i=["components"],l={},s="WebAssembly with Golang",c={unversionedId:"WebAssembly/Golang",id:"WebAssembly/Golang",title:"WebAssembly with Golang",description:"Golang Webassembly",source:"@site/docs/WebAssembly/Golang.md",sourceDirName:"WebAssembly",slug:"/WebAssembly/Golang",permalink:"/docs/WebAssembly/Golang",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/WebAssembly/Golang.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly with Rust",permalink:"/docs/WebAssembly/Rust"},next:{title:"Introduction",permalink:"/docs/Contributing/Introduction"}},u={},m=[{value:"Environment setup",id:"environment-setup",level:2},{value:"Golang",id:"golang",level:3},{value:"Tinygo",id:"tinygo",level:3},{value:"Wasmtime",id:"wasmtime",level:3},{value:"Go Code",id:"go-code",level:2},{value:"Compiling Go code",id:"compiling-go-code",level:2}],p={toc:m};function g(e){var n=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webassembly-with-golang"},"WebAssembly with Golang"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Golang Webassembly",src:t(2303).Z,width:"1280",height:"710"})),(0,r.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,r.kt)("p",null,"To compile this demo, you must install the following:"),(0,r.kt)("h3",{id:"golang"},"Golang"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"go.dev")," and follow the instructions."),(0,r.kt)("h3",{id:"tinygo"},"Tinygo"),(0,r.kt)("p",null,"A Go compiler intended for use in small places such as microcontrollers, WebAssembly (Wasm), and command-line tools"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://tinygo.org/getting-started/install/"},"tinygo.org")," and follow the instructions."),(0,r.kt)("p",null,"please note: Tinygo requires golang version 1.15 through 1.17"),(0,r.kt)("h3",{id:"wasmtime"},"Wasmtime"),(0,r.kt)("p",null,"You will find wasmtime at ",(0,r.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"wasmtime.dev")),(0,r.kt)("h2",{id:"go-code"},"Go Code"),(0,r.kt)("p",null,"we would create a simple Go program that calculates caculates the fibonacci sequence of an integer input."),(0,r.kt)("p",null,'create a folder with a name of your choice, i would be using "Golang-to-WASI" as the name of my folder.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd Golang-to-WASI\ngo mod init Golang-to-WASI\n")),(0,r.kt)("p",null,"create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"main.go"),", add following code into your main.go file and save the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Simple Program to calculate fibonacci of input\n\npackage main\n\nimport "fmt"\nfunc FibonacciRecursion(n int) int {\n    if n <= 1 {\n        return n\n    }\n    return FibonacciRecursion(n-1) + FibonacciRecursion(n-2)\n}\n\nfunc main(){\n    fmt.Print("Enter number : ")\n    var n int\n    fmt.Scanln(&n)\n    \n    fmt.Println("Fibonacci of", n , "is", FibonacciRecursion(n));\n}\n\n')),(0,r.kt)("h2",{id:"compiling-go-code"},"Compiling Go code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compile using ",(0,r.kt)("inlineCode",{parentName:"li"},"go")," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Golang Screenshot1",src:t(7508).Z,width:"744",height:"58"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"compile to WASM using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tinygo build -wasm-abi=generic -target=wasi -o main.wasm main.go\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The wasm file created in the folder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"file main.wasm\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"wasm runtime")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmtime main.wasm\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Golang Screenshot2",src:t(741).Z,width:"785",height:"58"})))}g.isMDXComponent=!0},7508:function(e,n,t){n.Z=t.p+"assets/images/golangRunScreenshot-734c6dfe46fa31c602be92385654a08d.png"},2303:function(e,n,t){n.Z=t.p+"assets/images/golangWasi-073889e105ecdc9f10e9e28314d88512.jpg"},741:function(e,n,t){n.Z=t.p+"assets/images/golangWasmScreenshot-f3169d0eac4de28eba1f0ea46f8aa2bc.png"}}]);