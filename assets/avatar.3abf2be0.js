import{l as f,a as y,u as S,n as x,E as k,_ as E}from"./button.14e5f778.js";import{b as w,aj as _,f as C,d as j,r as A,v as n,G as B,A as P,a as l,c as p,x as u,u as o,h as d,w as N,j as q,e as I,n as L,m as T}from"./index.78e2b5e2.js";const D=w({size:{type:[Number,String],values:_,default:"",validator:e=>f(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:y},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:C(String),default:"cover"}}),F={error:e=>e instanceof Event},G=["src","alt","srcset"],U={name:"ElAvatar"},V=j({...U,props:D,emits:F,setup(e,{emit:m}){const t=e,r=S("avatar"),i=A(!1),z=n(()=>{const{size:a,icon:c,shape:v}=t,s=[r.b()];return B(a)&&s.push(r.m(a)),c&&s.push(r.m("icon")),v&&s.push(r.m(v)),s}),h=n(()=>{const{size:a}=t;return f(a)?r.cssVarBlock({size:x(a)||""}):void 0}),b=n(()=>({objectFit:t.fit}));P(()=>t.src,()=>i.value=!1);function g(a){i.value=!0,m("error",a)}return(a,c)=>(l(),p("span",{class:L(o(z)),style:u(o(h))},[(a.src||a.srcSet)&&!i.value?(l(),p("img",{key:0,src:a.src,alt:a.alt,srcset:a.srcSet,style:u(o(b)),onError:g},null,44,G)):a.icon?(l(),d(o(k),{key:1},{default:N(()=>[(l(),d(q(a.icon)))]),_:1})):I(a.$slots,"default",{key:2})],6))}});var $=E(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const K=T($);export{K as E};
