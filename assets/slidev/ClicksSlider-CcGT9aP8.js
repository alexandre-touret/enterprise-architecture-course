import{m as C}from"../modules/unplugin-icons-Bif6ZZq9.js";import{d as g,y as i,o as u,b as c,e as a,l as S,A as w,F as f,x as v,ad as B,aa as I,ab as z,i as d,h as x,p as M,a as F}from"../modules/vue-BncFKEYv.js";import{q as V,r as $,C as A,_ as D}from"../index-AJR12H0n.js";const y=n=>(M("data-v-addb756e"),n=n(),F(),n),L=["title"],N={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},T=y(()=>a("div",{"flex-auto":""},null,-1)),j={"text-primary":""},q=y(()=>a("span",{op25:"","text-sm":""},"/",-1)),E={op50:"","text-sm":""},K={key:1,op50:"","flex-auto":"",pl1:""},R={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},U=["min","max"],X=g({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(n){const s=n,t=i(()=>s.clicksContext.total),m=i(()=>V(0,s.clicksContext.clicksStart,t.value)),r=i(()=>t.value-m.value+1),o=i({get(){return s.clicksContext.current>t.value?-1:s.clicksContext.current},set(l){s.clicksContext.current=l}}),h=i(()=>$(m.value,t.value+1));function b(){s.readonly||(o.value<0||o.value>t.value)&&(o.value=0)}return(l,p)=>{const k=C;return u(),c("div",{class:d(["flex gap-1 items-center select-none",r.value&&s.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[a("div",N,[S(k,{"text-sm":"",op50:""}),o.value>=0&&o.value!==w(A)&&l.active?(u(),c(f,{key:0},[T,a("span",j,v(o.value),1),q,a("span",E,v(t.value),1)],64)):(u(),c("div",K,v(t.value),1))]),a("div",R,[(u(!0),c(f,null,B(h.value,e=>(u(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===t.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[a("div",{absolute:"","inset-0":"",class:d(e<=o.value&&l.active?"bg-primary op15":"")},null,2),a("div",{class:d([+e==+o.value&&l.active?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},v(e),3)],6))),128)),I(a("input",{"onUpdate:modelValue":p[0]||(p[0]=e=>o.value=e),class:d(["range",l.readonly?"pointer-events-none":""]),type:"range",min:m.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:b,onFocus:p[1]||(p[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,46,U),[[z,o.value]])])],10,L)}}}),O=D(X,[["__scopeId","data-v-addb756e"]]);export{O as C};
