const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CjFChryp.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CphkJNzQ.js","assets/modules/unplugin-icons-C1GgycAK.js","assets/modules/vue-DVZ14KNC.js","assets/modules/shiki-iXA-uI2D.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-T7D6sjJP.js","assets/index-G-l4HGOz.js","assets/index-CzLJdaBG.css","assets/slidev/useWakeLock-ZiX_EB1F.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-DbZov7EB.js","assets/slidev/SlideContainer-ZBzHBZ0x.js","assets/SlideContainer-3ntD6oTw.css","assets/slidev/SlideWrapper-Q-GlXeKm.js","assets/SlideWrapper-DZQqEYXC.css","assets/slidev/context-BQJxJ8C4.js","assets/useWakeLock-DYnzOIwY.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as _,a7 as M,o as t,c as u,A as e,b as v,e as l,f as P,i as S,g as i,ah as B,y as C,k as D,ai as E,a6 as H,O as h,l as m,F as z,h as I,t as L,ag as R}from"../modules/vue-DVZ14KNC.js";import{z as y,a as N,y as T,H as w,I as b,d as x,J as V,K as W,L as A,M as O,l as $,G}from"../index-G-l4HGOz.js";import{b as U,G as F,c as K,u as j,r as J,a as X,S as Y,_ as q,o as Q}from"./useWakeLock-ZiX_EB1F.js";import{S as Z}from"./SlideContainer-ZBzHBZ0x.js";import{_ as ee}from"./PrintStyle.vue_vue_type_script_setup_true_lang-BgmERyKZ.js";import{u as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-T7D6sjJP.js";import{n as oe}from"../modules/unplugin-icons-C1GgycAK.js";import"../modules/shiki-iXA-uI2D.js";import"./IconButton.vue_vue_type_script_setup_true_lang-DbZov7EB.js";import"./SlideWrapper-Q-GlXeKm.js";import"./context-BQJxJ8C4.js";const se="/enterprise-architecture-course/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=_({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:c}){const r=f,a=M(r,"modelValue",c);function n(){a.value=!1}return(p,o)=>(t(),u(B,null,[e(a)?(t(),v("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=d=>n())}),l("div",{class:S(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[P(p.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ie={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ne=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),H("dev ")])])],-1),de=_({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:c}){const a=M(f,"modelValue",c),n=C(()=>typeof y.info=="string");return(p,o)=>(t(),u(le,{modelValue:e(a),"onUpdate:modelValue":o[0]||(o[0]=d=>E(a)?a.value=d:null),class:"px-6 py-4"},{default:D(()=>[l("div",ie,[n.value?(t(),v("div",{key:0,class:"mb-4",innerHTML:e(y).info},null,8,re)):i("v-if",!0),ne])]),_:1},8,["modelValue"]))}}),ue=_({__name:"Controls",setup(f){const{isEmbedded:c}=N(),r=!y.drawings.presenterOnly&&!c.value,s=h();r&&T(()=>import("./DrawingControls-CjFChryp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(p=>s.value=p.default);const a=h(),n=h();return(p,o)=>(t(),v(z,null,[e(r)&&s.value?(t(),u(e(s),{key:0})):i("v-if",!0),m(U),m(F),a.value?(t(),u(e(a),{key:1})):i("v-if",!0),n.value?(t(),u(e(n),{key:2,modelValue:e(w),"onUpdate:modelValue":o[0]||(o[0]=d=>E(w)?w.value=d:null)},null,8,["modelValue"])):i("v-if",!0),e(y).info?(t(),u(de,{key:3,modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=d=>E(b)?b.value=d:null)},null,8,["modelValue"])):i("v-if",!0),m(K)],64))}}),ce={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},me=_({__name:"PresenterMouse",setup(f){return(c,r)=>{const s=oe;return e(x).cursor?(t(),v("div",ce,[m(s,{class:"absolute stroke-white dark:stroke-black",style:I({left:`${e(x).cursor.x}%`,top:`${e(x).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),pe=l("div",{id:"twoslash-container"},null,-1),$e=_({__name:"play",setup(f){const{next:c,prev:r,isPrintMode:s}=N(),{isDrawing:a}=te(),n=L();function p(g){var k;$.value||g.button===0&&((k=g.target)==null?void 0:k.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?c():r())}j(n),J(),X(),R(C(()=>`
vite-error-overlay {
  --width: calc(100vw - ${V.value?0:W.value}px);
  --height: calc(100vh - ${V.value?A.value:0}px);
  position: fixed;
  left: 0;
  top: 0;
  width: calc(var(--width) / var(--slidev-slide-scale));
  height: calc(var(--height) / var(--slidev-slide-scale));
  transform-origin: top left;
  transform: scale(var(--slidev-slide-scale));
}`));const o=C(()=>O.value||$.value),d=h();return(g,k)=>(t(),v(z,null,[e(s)?(t(),u(ee,{key:0})):i("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:n,class:S(["grid",e(V)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(Z,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(s)?e(G).width.value:void 0,"is-main":"",onPointerdown:p,onContextmenu:e(Q)},{default:D(()=>[m(Y,{"render-context":"slide"}),m(me)]),controls:D(()=>[e(s)?i("v-if",!0):(t(),v("div",{key:0,class:S(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[m(q,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),d.value&&e($)?(t(),u(e(d),{key:0,resize:!0})):i("v-if",!0)],2),e(s)?i("v-if",!0):(t(),u(ue,{key:1})),pe],64))}});export{$e as default};
