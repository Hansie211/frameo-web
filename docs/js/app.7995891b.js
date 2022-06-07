(()=>{"use strict";var e={5654:(e,t,r)=>{var n=r(1957),o=r(6437),i=r(499),a=r(9835);function s(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var d=r(1644);function u(e,t){window["MediaStore"]={addItems:e,removeItems:t}}const l=(0,a.aZ)({name:"App",created(){u(this.fnAddItems,this.fnRemoveItems)},methods:{fnAddItems(e){const t=(0,d.Z)();t.addItems(e)},fnRemoveItems(e){const t=(0,d.Z)();t.removeItems(e)}}});var c=r(1639);const m=(0,c.Z)(l,[["render",s]]),f=m;var h=r(3340),p=r(7363);const v=(0,h.h)((()=>{const e=(0,p.WB)();return(0,d.Z)(e),e}));var g=r(8910);r(702);const b=[{path:"/",component:()=>Promise.all([r.e(736),r.e(247)]).then(r.bind(r,9247)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(654)]).then(r.bind(r,654))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],y=b,I=(0,h.BC)((function(){const e=g.r5,t=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:y,history:e("")});return t}));async function w(e,t){const r=e(f);r.use(o.Z,t);const n="function"===typeof v?await v({}):v;r.use(n);const a=(0,i.Xl)("function"===typeof I?await I({store:n}):I);return n.use((({store:e})=>{e.router=a})),{app:r,store:n,router:a}}const O={config:{}};async function E({app:e,router:t,store:r}){e.use(t),e.mount("#q-app")}w(n.ri,O).then(E)},1644:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7363);function o(e,t){for(var r=t.length-1;r>-1;r--){const n=t[r];if(n.date<e.date)return r}return 0}const i=(0,n.Q_)("MediaStore",{state:()=>({mediaItems:[]}),getters:{count(){return this.mediaItems.length}},actions:{updateItem(e,t){e.url=t.url},addItem(e){if(!e)return void console.error("Error: item is null");if(!e.id)return void console.error(`Error: item.id is null (${JSON.stringify(e)})`);if(!e.url)return void console.error(`Error: item.id url null (${JSON.stringify(e)})`);const t=this.mediaItems.findIndex((t=>t.id===e.id));if(t>=0)return this.updateItem(this.mediaItems[t],e),!1;const r=o(e,this.mediaItems);return this.mediaItems.splice(r,0,e),!0},addItems(e){e.forEach((e=>{this.addItem(e)}))},removeItem(e){this.mediaItems.splice(e,1)},removeItems(e){e.forEach((e=>{const t=this.mediaItems.findIndex((t=>t.id===e));if(t<0)return!1;this.removeItem(t)}))}}})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],s=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{247:"258b7817",654:"8dc96509",862:"7053e189"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"e826e42d",654:"a7da3efe",736:"81e88f7f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="frameo-web:";r.l=(n,o,i,a)=>{if(e[n])e[n].push(o);else{var s,d;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var c=u[l];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+i){s=c;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var m=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,o.parentNode.removeChild(o),n(d)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],i=o.getAttribute("data-href");if(i===e||i===t)return o}},n=n=>new Promise(((o,i)=>{var a=r.miniCssF(n),s=r.p+a;if(t(a,s))return o();e(n,s,o,i)})),o={143:0};r.f.miniCss=(e,t)=>{var r={654:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=i);var a=r.p+r.u(t),s=new Error,d=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};r.l(a,d,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,d]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var l=d(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkframeo_web"]=self["webpackChunkframeo_web"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(5654)));n=r.O(n)})();