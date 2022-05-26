"use strict";(self["webpackChunkframeo_web"]=self["webpackChunkframeo_web"]||[]).push([[43],{3043:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var o=i(9835),a=i(6970);const n={id:"content-pane"},s={id:"media-box"},d={class:"media"},r={id:"date"};function c(e,t,i,c,u,l){const m=(0,o.up)("image-display"),h=(0,o.up)("video-display"),p=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(p,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o._)("div",s,[(0,o._)("div",d,[(0,o.Wm)(m,{class:(0,a.C_)({fade:!0,"fade-in":e.displayImage}),ref:"imageDisplay",onLoad:e.onMediaLoad},null,8,["class","onLoad"]),(0,o.Wm)(h,{class:(0,a.C_)({fade:!0,"fade-in":!e.displayImage}),ref:"videoDisplay",onLoad:e.onMediaLoad},null,8,["class","onLoad"]),(0,o._)("div",r,(0,a.zw)(e.currentDate),1)])])])])),_:1})}const u={id:"container"},l=["src"];function m(e,t,i,n,s,d){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("img",{id:"image-main",src:e.currentSource,class:(0,a.C_)({fade:!0,"fade-out":e.doTransition})},null,10,l)])}const h=(0,o.aZ)({name:"ImageDisplay",emits:["load"],data(){return{currentSource:"",nextSource:"",transitionSource:"",doTransition:!1}},methods:{onImageLoad(){this.$emit("load"),this.transitionSource=this.nextSource,this.doTransition=!0,setTimeout(this.onAfterEnter,100)},onAfterEnter(){const e=this.currentSource;this.currentSource=this.transitionSource,this.transitionSource=e,this.doTransition=!1},stop(){console.log("Stop image display"),this.currentSource=null},start(e){console.log(`Start load image ${e}`);const t=new Image;t.onload=this.onImageLoad,t.onerror=null,t.src=this.nextSource=e}}});var p=i(1639);const v=(0,p.Z)(h,[["render",m],["__scopeId","data-v-27ec2ecc"]]),g=v;i(702);const f={id:"container"},y=["src"];function _(e,t,i,a,n,s){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("video",{id:"video",ref:"video",muted:"",autoplay:"",loop:"",onLoadeddata:t[0]||(t[0]=(...t)=>e.onVideoLoad&&e.onVideoLoad(...t))},[(0,o._)("source",{src:e.source,type:"video/mp4"},null,8,y)],544)])}const S=(0,o.aZ)({name:"VideoDisplay",emits:["load"],data(){return{source:null}},computed:{video(){return this.$refs.video}},methods:{onVideoLoad(){this.$emit("load"),this.video.currentTime=0,this.video.play()},stop(){console.log("Stop video display"),this.video.pause()},start(e){console.log(`Start load video ${e}`),this.source=e,this.video.load()}},watch:{source(){}}}),I=(0,p.Z)(S,[["render",_],["__scopeId","data-v-15ad37e3"]]),x=I;var D=i(7149);const L=(0,o.aZ)({components:{ImageDisplay:g,VideoDisplay:x},name:"IndexPage",data(){return{displayImage:!0,mounted:!1}},computed:{mediaStore(){return(0,D.Z)()},media(){return this.mediaStore.media},currentIndex(){return this.mounted?this.mediaStore.currentIndex:-1},currentMedia(){return this.media[this.currentIndex]},currentDate(){const e=this.currentMedia;if(void 0===e)return;const t={weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},i=new Date(e.date),o=i.toLocaleDateString("nl-NL",t).toString();return o.charAt(0).toUpperCase()+o.slice(1)}},mounted(){this.mounted=!0},watch:{media:{handler(e){},deep:!0},currentIndex:{handler(e,t){var i,o;if(console.log(`Current Index changed from ${t} -> ${e}`),e<0)return;const a=this.media[e];if(void 0===a)return;const n=this.media[t],s=void 0===n||n.is_video!==a.is_video;var d;(console.log(`Media changed from ${JSON.stringify(n)} -> ${JSON.stringify(a)}`),s&&a.is_video&&(null===(i=this.$refs.videoDisplay)||void 0===i||i.stop()),s&&!a.is_video&&(null===(o=this.$refs.imageDisplay)||void 0===o||o.stop()),this.displayImage=!a.is_video,console.log(`Is video: ${a.is_video}`),this.displayImage)?this.$refs.imageDisplay.start(a.url):null===(d=this.$refs.videoDisplay)||void 0===d||d.start(a.url)}}},methods:{nextMedia(){this.mediaStore.nextIndex()},onMediaLoad(){this.timer=setTimeout((()=>this.nextMedia()),4e3)}}});var w=i(9885),$=i(9984),M=i.n($);const Z=(0,p.Z)(L,[["render",c],["__scopeId","data-v-419b1ba0"]]),b=Z;M()(L,"components",{QPage:w.Z})}}]);