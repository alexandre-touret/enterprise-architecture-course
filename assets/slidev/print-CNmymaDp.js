import{d as p,ag as u,y as h,o as s,b as n,e as t,x as a,A as r,F as f,ad as g,a6 as v,l as x,g as b}from"../modules/vue-DVZ14KNC.js";import{a as y,u as N,z as m}from"../index-G-l4HGOz.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-DFOEZQur.js";import"../modules/shiki-iXA-uI2D.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},z={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},E=p({__name:"print",setup(D){const{slides:_,total:d}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const c=h(()=>_.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(s(),n("div",w,[t("div",L,[t("div",T,[t("h1",V,a(r(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(c.value,(e,i)=>(s(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",z,a(e==null?void 0:e.no)+"/"+a(r(d)),1),v(" "+a(e==null?void 0:e.title)+" ",1),A])]),x(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),n("hr",C)):b("v-if",!0)]))),128))])]))}});export{E as default};