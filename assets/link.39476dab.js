import{a as f,u,E as h,_ as p}from"./button.faf7d773.js";import{b as g,d as m,a as o,c as t,h as a,w as x,j as b,u as l,Y as i,n as c,e as s,m as y}from"./index.a6bf5d43.js";const w=g({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:f,default:""}}),E={click:n=>n instanceof MouseEvent},C=["href"],z={name:"ElLink"},B=m({...z,props:w,emits:E,setup(n,{emit:k}){const d=n,r=u("link");function v(e){d.disabled||k("click",e)}return(e,$)=>(o(),t("a",{class:c([l(r).b(),l(r).m(e.type),l(r).is("disabled",e.disabled),l(r).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:v},[e.icon?(o(),a(l(h),{key:0},{default:x(()=>[(o(),a(b(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(o(),t("span",{key:1,class:c(l(r).e("inner"))},[s(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?s(e.$slots,"icon",{key:2}):i("v-if",!0)],10,C))}});var _=p(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const P=y(_);export{P as E};
