(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2155:function(e,t,n){Promise.resolve().then(n.bind(n,107)),Promise.resolve().then(n.t.bind(n,1983,23))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return a}});let r=n(9920),i=n(497),l=n(8173),s=r._(n(1241));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/solidpulse.github.io/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=l.Image},5112:function(e,t,n){"use strict";n.r(t),n.d(t,{FadeIn:function(){return c},FadeInStagger:function(){return d}});var r=n(7437),i=n(2265),l=n(4501),s=n(9995);let a=(0,i.createContext)(!1),o={once:!0,margin:"0px 0px -200px"};function c(e){let t=(0,l.J)(),n=(0,i.useContext)(a);return(0,r.jsx)(s.E.div,{variants:{hidden:{opacity:0,y:t?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...n?{}:{initial:"hidden",whileInView:"visible",viewport:o},...e})}function d(e){let{faster:t=!1,...n}=e;return(0,r.jsx)(a.Provider,{value:!0,children:(0,r.jsx)(s.E.div,{initial:"hidden",whileInView:"visible",viewport:o,transition:{staggerChildren:t?.12:.2},...n})})}},9342:function(e,t,n){"use strict";n.r(t),n.d(t,{GridPattern:function(){return a}});var r=n(7437),i=n(2265),l=n(9995);function s(e){let{x:t,y:n,...i}=e;return(0,r.jsx)(l.E.path,{transform:`translate(${-32*n+96*t} ${160*n})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...i})}function a(e){let{yOffset:t=0,interactive:n=!1,...l}=e,a=(0,i.useId)(),o=(0,i.useRef)(null),c=(0,i.useRef)(),d=(0,i.useRef)(0),[u,h]=(0,i.useState)([]);return(0,i.useEffect)(()=>{if(n)return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)};function e(e){if(!o.current)return;let n=o.current.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top;!(r<0)&&!(i<0)&&!(r>n.width)&&!(i>n.height)&&(r=r-n.width/2-32,i-=t,r+=Math.tan(.2)*i,r=Math.floor(r/96),i=Math.floor(i/160),(c.current?.[0]!==r||c.current?.[1]!==i)&&(c.current=[r,i],h(e=>{let t=d.current++;return[...e,[r,i,t]].filter(e=>!(e[0]===r&&e[1]===i&&e[2]!==t))})))}},[t,n]),(0,r.jsxs)("svg",{ref:o,"aria-hidden":"true",...l,children:[(0,r.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${a})`,strokeWidth:"0"}),(0,r.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(e=>(0,r.jsx)(s,{x:e[0],y:e[1]},`${e}`)),u.map(e=>(0,r.jsx)(s,{x:e[0],y:e[1],fill:"rgba(0, 0, 0, 0.08)",animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{h(t=>t.filter(t=>t[2]!==e[2]))}},e[2]))]}),(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:a,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,r.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},107:function(e,t,n){"use strict";n.d(t,{RootLayout:function(){return Z}});var r=n(7437),i=n(2265),l=n(231),s=n.n(l),a=n(1169),o=n(6648),c=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(n=0;n<l;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r)}else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(r&&(r+=" "),r+=t);return r},d=n(4501),u=n(9791),h=n(2367),f=n(458);function x({children:e,isValidProp:t,...n}){t&&(0,h.K)(t),(n={...(0,i.useContext)(u._),...n}).isStatic=(0,f.h)(()=>n.isStatic);let r=(0,i.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return i.createElement(u._.Provider,{value:r},e)}var m=n(9995);function v(e){let{invert:t=!1,className:n,children:i,...l}=e;n=c(n,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",t?"bg-white text-neutral-950 hover:bg-neutral-200":"bg-neutral-950 text-white hover:bg-neutral-800");let a=(0,r.jsx)("span",{className:"relative top-px",children:i});return void 0===l.href?(0,r.jsx)("button",{className:n,...l,children:a}):(0,r.jsx)(s(),{className:n,...l,children:a})}function g(e){let{as:t,className:n,children:i}=e;return(0,r.jsx)(t??"div",{className:c("mx-auto max-w-7xl px-6 lg:px-8",n),children:(0,r.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-none",children:i})})}var p=n(5112);let j=[{title:"Facebook",href:"https://facebook.com",icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"})})}},{title:"Instagram",href:"https://instagram.com",icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"})})}},{title:"GitHub",href:"https://github.com",icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"})})}},{title:"Dribbble",href:"https://dribbble.com",icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"})})}}];function b(e){let{className:t,invert:n=!1}=e;return(0,r.jsx)("ul",{role:"list",className:c("flex gap-x-10",n?"text-white":"text-neutral-950",t),children:j.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:e.href,"aria-label":e.title,className:c("transition",n?"hover:text-neutral-200":"hover:text-neutral-700"),children:(0,r.jsx)(e.icon,{className:"h-6 w-6 fill-current"})})},e.title))})}var w={src:"/solidpulse.github.io/_next/static/media/logoLight.789b4b21.svg",height:2e3,width:5006,blurWidth:0,blurHeight:0};function N(){return(0,r.jsx)(g,{as:"footer",className:"mt-24 w-full sm:mt-32 lg:mt-40",children:(0,r.jsx)(p.FadeIn,{children:(0,r.jsxs)("div",{className:"mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",children:[(0,r.jsx)(s(),{href:"/","aria-label":"Home",children:(0,r.jsx)(o.default,{src:w,alt:"My Company Logo",width:100,height:50,className:"h-24 w-auto transition-all duration-300"})}),(0,r.jsxs)("p",{className:"text-sm text-neutral-700",children:["\xa9 SolidPulse Software UG (haftungsbeschr\xe4nkt) ",new Date().getFullYear()]})]})})})}r.Fragment;var y=n(9342);function M(e){let{name:t,children:n,invert:i=!1}=e;return(0,r.jsxs)("address",{className:c("text-sm not-italic",i?"text-neutral-300":"text-neutral-600"),children:[(0,r.jsx)("strong",{className:i?"text-white":"text-neutral-950",children:t}),(0,r.jsx)("br",{}),n]})}function R(e){let{invert:t=!1,...n}=e;return(0,r.jsx)("ul",{role:"list",...n,children:(0,r.jsx)("li",{children:(0,r.jsxs)(M,{name:"Gr\xfcnwald",invert:t,children:["Robert-Koch-Stra\xdfe 16b",(0,r.jsx)("br",{}),"82031, Gr\xfcnwald, Deutschland"]})})})}var A={src:"/solidpulse.github.io/_next/static/media/logoDark.82810e03.svg",height:2e3,width:5006,blurWidth:0,blurHeight:0};let C=(0,i.createContext)(null);function S(e){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:[(0,r.jsx)("path",{d:"m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"}),(0,r.jsx)("path",{d:"M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"})]})}function k(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:(0,r.jsx)("path",{d:"M2 6h20v2H2zM2 16h20v2H2z"})})}function E(e){let{panelId:t,icon:n,expanded:l,onToggle:a,toggleRef:d,invert:u=!1}=e,{logoHovered:h,setLogoHovered:f}=(0,i.useContext)(C);return(0,r.jsx)(g,{children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(s(),{href:"/","aria-label":"Home",children:(0,r.jsx)(o.default,{src:u?A:w,alt:"My Company Logo",width:100,height:50,className:"h-24 w-auto transition-all duration-300"})}),(0,r.jsxs)("div",{className:"flex items-center gap-x-8",children:[(0,r.jsx)(v,{href:"/contact",invert:u,children:"Kontaktieren Sie uns"}),(0,r.jsx)("button",{ref:d,type:"button",onClick:a,"aria-expanded":l?"true":"false","aria-controls":t,className:c("group -m-2.5 rounded-full p-2.5 transition",u?"hover:bg-white/10":"hover:bg-neutral-950/10"),"aria-label":"Toggle navigation",children:(0,r.jsx)(n,{className:c("h-6 w-6",u?"fill-white group-hover:fill-neutral-200":"fill-neutral-950 group-hover:fill-neutral-700")})})]})]})})}function _(e){let{children:t}=e;return(0,r.jsx)("div",{className:"even:mt-px sm:bg-neutral-950",children:(0,r.jsx)(g,{children:(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:t})})})}function H(e){let{href:t,children:n}=e;return(0,r.jsxs)(s(),{href:t,className:"group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",children:[n,(0,r.jsx)("span",{className:"absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"})]})}function L(){return(0,r.jsxs)("nav",{className:"mt-px font-display text-5xl font-medium tracking-tight text-white",children:[(0,r.jsxs)(_,{children:[(0,r.jsx)(H,{href:"/work",children:"Unsere Leistungen"}),(0,r.jsx)(H,{href:"/about",children:"\xdcber uns"})]}),(0,r.jsxs)(_,{children:[(0,r.jsx)(H,{href:"/process",children:"Unser Weg"}),(0,r.jsx)(H,{href:"/blog",children:"Blog"})]})]})}function P(e){let{children:t}=e,n=(0,i.useId)(),[l,s]=(0,i.useState)(!1),a=(0,i.useRef)(null),o=(0,i.useRef)(null),c=(0,i.useRef)(null),u=(0,d.J)();return(0,i.useEffect)(()=>{function e(e){e.target instanceof HTMLElement&&e.target.closest("a")?.href===window.location.href&&s(!1)}return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[]),(0,r.jsxs)(x,{transition:u?{duration:0}:void 0,children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"absolute top-2 right-0 left-0 z-40 pt-14","aria-hidden":l?"true":void 0,inert:l?"":void 0,children:(0,r.jsx)(E,{panelId:n,icon:k,toggleRef:a,expanded:l,onToggle:()=>{s(e=>!e),window.setTimeout(()=>o.current?.focus({preventScroll:!0}))}})}),(0,r.jsx)(m.E.div,{layout:!0,id:n,style:{height:l?"auto":"0.5rem"},className:"relative z-50 overflow-hidden bg-neutral-950 pt-2","aria-hidden":l?void 0:"true",inert:l?void 0:"",children:(0,r.jsxs)(m.E.div,{layout:!0,className:"bg-neutral-800",children:[(0,r.jsx)("div",{ref:c,className:"bg-neutral-950 pt-14 pb-16",children:(0,r.jsx)(E,{invert:!0,panelId:n,icon:S,toggleRef:o,expanded:l,onToggle:()=>{s(e=>!e),window.setTimeout(()=>a.current?.focus({preventScroll:!0}))}})}),(0,r.jsx)(L,{}),(0,r.jsx)("div",{className:"relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",children:(0,r.jsx)(g,{children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"font-display text-base font-semibold text-white",children:"Unser B\xfcro"}),(0,r.jsx)(R,{invert:!0,className:"mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"})]}),(0,r.jsxs)("div",{className:"sm:border-l sm:border-transparent sm:pl-16",children:[(0,r.jsx)("h2",{className:"font-display text-base font-semibold text-white",children:"Follow us"}),(0,r.jsx)(b,{className:"mt-6",invert:!0})]})]})})})]})})]}),(0,r.jsx)(m.E.div,{layout:!0,style:{borderTopLeftRadius:40,borderTopRightRadius:40},className:"relative flex flex-auto overflow-hidden bg-white pt-14",children:(0,r.jsxs)(m.E.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:[(0,r.jsx)(y.GridPattern,{className:"absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),(0,r.jsx)("main",{className:"w-full flex-auto",children:t}),(0,r.jsx)(N,{})]})})]})}function Z(e){let{children:t}=e,n=(0,a.usePathname)(),[l,s]=(0,i.useState)(!1);return(0,r.jsx)(C.Provider,{value:{logoHovered:l,setLogoHovered:s},children:(0,r.jsx)(P,{children:t},n)})}},1983:function(){}},function(e){e.O(0,[242,106,173,971,23,744],function(){return e(e.s=2155)}),_N_E=e.O()}]);