import{d as C,r as E,A as _,o as e,c as w,k as R,f as P,b as t,t as I,D as j,ay as G,F as u,ad as y,x as h,g as c,e as S,a6 as $,l as V,aa as J,q as K,s as O}from"./modules/vue-pvELL8Tm.js";import{a as Q,aR as H}from"./index-DDni1NGV.js";import{c as n}from"./CiteEngine-D54wYLKn.js";import{u as M,p as U,f as W}from"./slidev/context-D6MbIvM0.js";import"./modules/shiki-CYf7qYFp.js";import"./modules/file-saver-CFSks1X-.js";const X=["href","innerHTML"],Y=["href"],Z=C({__name:"Link",props:{to:{},title:{}},setup(m){const{isPrintMode:i}=Q();return(s,o)=>{const v=E("RouterLink");return!_(i)&&s.title?(e(),w(v,{key:0,to:String(s.to),onClick:o[0]||(o[0]=p=>p.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!_(i)&&!s.title?(e(),w(v,{key:1,to:String(s.to),onClick:o[1]||(o[1]=p=>p.target.blur())},{default:R(()=>[P(s.$slots,"default")]),_:3},8,["to"])):_(i)&&s.title?(e(),t("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,X)):(e(),t("a",{key:3,href:`#${s.to}`},[P(s.$slots,"default")],8,Y))}}}),x={class:"biblio_graphy"},ee={key:0,class:"biblio_list"},te={class:"biblio_line"},se={key:0,class:"biblio_id"},oe={class:"biblio_fullref"},ie={key:1,class:"biblio_pageref"},ne={key:0},le=C({__name:"BiblioList",props:{showFullBib:{type:Boolean,default:!1},itemPerPage:{type:Number,default:void 0}},setup(m){var T;const{$slidev:i,$route:s,$frontmatter:o}=M(),v=s.no,p=m,a=I([]);let l={...n.default_config,...(T=i.configs)==null?void 0:T.biblio,...o==null?void 0:o.biblio};const A=p.itemPerPage??l.item_per_page,B=p.showFullBib||l.show_full_bib,q=l.show_id||(B||l.numerical_ref)&&(l.show_id??!0);function N(){if(!n.state.is_init)return;const r=B?n.get_all_ids():n.get_know_ids();let b=A??(l==null?void 0:l.item_per_page)??r.length,L=Math.ceil(((r==null?void 0:r.length)??0)/b);a.value=[];for(let d=0;d<L;++d){let g=d*b,k=(d+1)*b;a.value.push(r.slice(g,k).map(f=>n.get(f)))}}return j(n.state.version,(r,b)=>{N()}),n.add("bib",v),B&&n.process_all(),n.init().then(r=>{N()}),(r,b)=>{const L=Z,d=G("click");return e(),t("div",x,[(e(!0),t(u,null,y(a.value,(g,k)=>(e(),t(u,null,[_(i).nav.clicks==k?(e(),t("ul",ee,[(e(!0),t(u,null,y(g,f=>{var F;return e(),t("li",te,[_(q)?(e(),t("span",se,"["+h(f.id)+"] ",1)):c("v-if",!0),S("span",oe,h(f.full_bib),1),(F=f.pages)!=null&&F.length?(e(),t("span",ie,[$(" ("),(e(!0),t(u,null,y(f.pages,(D,z)=>(e(),t(u,null,[z!=0?(e(),t(u,{key:0},[$(", ")],64)):c("v-if",!0),V(L,{to:D},{default:R(()=>[$(h(D),1)]),_:2},1032,["to"])],64))),256)),$(") ")])):c("v-if",!0)])}),256)),a.value.length>1?(e(),t("p",ne,"page "+h(k+1)+" / "+h(a.value.length),1)):c("v-if",!0)])):c("v-if",!0)],64))),256)),c(" hack to have correct number of click "),a.value.length>1?(e(!0),t(u,{key:0},y(Array(a.value.length-1).keys(),g=>J((e(),t("div",null,null,512)),[[d]])),256)):c("v-if",!0)])}}}),re={class:"slidev-layout biblio"},ae=S("h1",{class:"text-center"},"Bibliography",-1),ue=C({__name:"biblio",props:{},setup(m){return M(),(i,s)=>{const o=le;return e(),t("div",re,[P(i.$slots,"default",{},()=>[ae]),V(o)])}}}),he={__name:"34",setup(m){return U(H),M(),(i,s)=>(e(),w(ue,K(O(_(W)(_(H),33))),null,16))}};export{he as default};
