import{d,y as p,o as l,b as m,e as r,f,h as _,c as h,k as v,q as g,s as k,A as n}from"../modules/vue-DVZ14KNC.js";import{u,p as x,f as y}from"./context-BQJxJ8C4.js";import{ab as c}from"../index-G-l4HGOz.js";import"../modules/shiki-iXA-uI2D.js";function i(e){return e.startsWith("/")?"/enterprise-architecture-course"+e.slice(1):e}function b(e,s=!1){const t=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const B={class:"my-auto w-full"},P=d({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,t=p(()=>b(s.background,!0));return(o,a)=>(l(),m("div",{class:"slidev-layout cover text-center",style:_(t.value)},[r("div",B,[f(o.$slots,"default")])],4))}}),$=r("h1",null,"Enterprise Architecture & Business Processes management introduction course",-1),C=r("p",null,"lorem ipsum",-1),E={__name:"1",setup(e){return x(c),u(),(s,t)=>(l(),h(P,g(k(n(y)(n(c),0))),{default:v(()=>[$,C]),_:1},16))}};export{E as default};