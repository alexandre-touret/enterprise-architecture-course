import{d,y as p,o as i,b as f,e as r,f as m,h as _,c as h,k as v,q as g,s as k,A as a}from"../modules/vue-DcTTO6IU.js";import{u,p as x,f as y}from"./context-D6ekYMBI.js";import{ab as c}from"../index-CMrnHKMI.js";import"../modules/shiki-mbmPdciS.js";function l(e){return e.startsWith("/")?"/enterprise-architecture-course/"+e.slice(1):e}function b(e,s=!1){const t=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const B={class:"my-auto w-full"},C=d({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,t=p(()=>b(s.background,!0));return(o,n)=>(i(),f("div",{class:"slidev-layout cover text-center",style:_(t.value)},[r("div",B,[m(o.$slots,"default")])],4))}}),$=r("h1",null,"Modélisation des processus et fonctionnalités",-1),P=r("h2",null,"Cours Bases de données",-1),S=r("h3",null,"Alexandre Touret",-1),T={__name:"1",setup(e){return x(c),u(),(s,t)=>(i(),h(C,g(k(a(y)(a(c),0))),{default:v(()=>[$,P,S]),_:1},16))}};export{T as default};
