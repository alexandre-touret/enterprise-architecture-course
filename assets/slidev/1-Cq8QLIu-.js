import{d,y as p,o as i,b as m,e as n,f,h as _,c as h,k as v,q as $,s as g,A as a}from"../modules/vue-BncFKEYv.js";import{u as l,f as k}from"./context-OQJi8m-c.js";import"../index-Di1Z1Fwb.js";import"../modules/shiki-Ba3wDb7a.js";function c(e){return e.startsWith("/")?"/"+e.slice(1):e}function x(e,s=!1){const t=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const y={class:"my-auto w-full"},B=d({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){l();const s=e,t=p(()=>x(s.background,!0));return(o,r)=>(i(),m("div",{class:"slidev-layout cover text-center",style:_(t.value)},[n("div",y,[f(o.$slots,"default")])],4))}}),C=n("h1",null,"Enterprise Architecture & Business Processes management introduction course",-1),b=n("p",null,"lorem ipsum",-1),I={__name:"1",setup(e){const{$slidev:s,$nav:t,$clicksContext:o,$clicks:r,$page:P,$renderContext:S,$frontmatter:u}=l();return(w,z)=>(i(),h(B,$(g(a(k)(a(u),0))),{default:v(()=>[C,b]),_:1},16))}};export{I as default};
