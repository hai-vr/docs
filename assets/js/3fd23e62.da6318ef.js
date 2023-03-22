"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[9479],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Quest Pro",l={unversionedId:"hardware/quest_pro",id:"hardware/quest_pro",title:"Quest Pro",description:"Introduction",source:"@site/docs/hardware/quest_pro.mdx",sourceDirName:"hardware",slug:"/hardware/quest_pro",permalink:"/docs/hardware/quest_pro",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/quest_pro.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vive Wireless + Eye & Face Tracking",permalink:"/docs/hardware/VIVE/wireless"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why is this setup required?",id:"why-is-this-setup-required",level:3},{value:"Setup",id:"setup",level:2},{value:"Enabling Developer Mode on the Headset",id:"enabling-developer-mode-on-the-headset",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quest-pro"},"Quest Pro"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Meta Quest Pro provides eye gaze tracking, detailed eye expression tracking, and face tracking.\nAll eye and face tracking hardware is internal to the device (no additional hardware setup required).\nAll eye and face tracking data is accessed via Meta\u2019s Face and Eye OpenXR extensions."),(0,o.kt)("h3",{id:"why-is-this-setup-required"},"Why is this setup required?"),(0,o.kt)("p",null,"The Quest Pro provides developers with both eye and face tracking data from a single, contained device, making it easy for native Quest developers to incorporate.\nHowever, having it only accessible through Meta\u2019s Oculus OpenXR extensions means there must be an OpenXR application using the Oculus runtime running somewhere.\nThere is currently no way for VRCFT to provide eye and face tracking to the Quest version of VRChat, the following solutions are only for PCVR."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The Quest Pro currently has 2 different face-tracking compatible ways to connect to the PC:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Oculus Link (or Airlink)"),(0,o.kt)("li",{parentName:"ul"},"ALVR")),(0,o.kt)("p",null,"The user is free to choose whatever method they prefer more. ALVR is an open-source project and thus has many for features and customizability in the PCVR connection as compared to Airlink, but also has more bugs or quirks.\nOculus Link/Airlink is Meta\u2019s own PCVR streaming solution, and is generally more straight-forward to set up and network stable, but also is limited in customization."),(0,o.kt)("p",null,"In both cases the user is expected to have the VR PC and the Quest Pro on the same network, with the PC ideally connected to the network via ethernet cable."),(0,o.kt)("h3",{id:"enabling-developer-mode-on-the-headset"},"Enabling Developer Mode on the Headset"),(0,o.kt)("p",null,"Instructions originally from ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/sideloading-on-oculus-quest/enable-developer-mode"},"https://learn.adafruit.com/sideloading-on-oculus-quest/enable-developer-mode")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developer.oculus.com/sign-up/"},"Set up a Meta Oculus developer account"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'A developer account is necessary (for now) as the eye and face OpenXR extensions are currently considered \u201cdeveloper features\u201d.\nIt is rather trivial to apply for and there is no check for being a "real organization".'))),(0,o.kt)("li",{parentName:"ol"},"Install the Oculus (\u201cMeta Quest\u201d) app on mobile device (if it isn\u2019t already) and login with your (developer) Oculus account. Register your headset in the app."),(0,o.kt)("li",{parentName:"ol"},"In the Oculus mobile App, tap Menu at the bottom right, then Devices. Select your Quest Pro, then go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings -> Developer Mode")," and set the Developer Mode switch to enabled.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Reboot the headset after enabling Developer Mode.")))))}d.isMDXComponent=!0}}]);