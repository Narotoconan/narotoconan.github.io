import{r as l,c as f,g as m,k as v,u as h,Q as t,w as p,F as g,M as y,aL as k,K as x,a as w,L as C}from"./index.a6bf5d43.js";import{E as T,a as V}from"./tab-pane.c0fbd30a.js";import{y as E}from"./button.faf7d773.js";import{_ as B}from"./submit.e7f99569.js";import"./aria2.e9b02c40.js";import"./input.96d5573d.js";import"./overlay.397ba696.js";import"./vnode2.3859dba3.js";import"./focus-trap2.58d2497a.js";import"./refs2.2357a2e1.js";import"./scroll2.c7fc2d83.js";import"./form-item.5ed0e849.js";import"./tag.2ffce951.js";import"./select.0003dd64.js";import"./popper.f9e7652b.js";import"./scrollbar.72deccbf.js";import"./date-picker.db79d6f6.js";import"./index2.89489fff.js";const N={class:"page-title inline-block"},S=C("\u63D0\u4EA4\u6D3E\u5DE5\u5355"),W={__name:"index",setup(q){const o=y(),n=l(o.path.split("/").slice(-1)[0]),u=o.query.maintenanceId,c=s=>{k.push({name:s,query:o.query})},r=l();return(s,e)=>{const _=E,a=T,d=V,b=x("router-view");return w(),f(g,null,[m("div",null,[m("div",N,"\u5B9A\u68C0\u4EFB\u52A1 ("+v(h(u))+")",1),t(_,{type:"primary",class:"float-right",onClick:e[0]||(e[0]=i=>r.value.open())},{default:p(()=>[S]),_:1})]),t(d,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=i=>n.value=i),class:"demo-tabs",onTabChange:c},{default:p(()=>[t(a,{label:"\u5DE5\u4F5C\u8BA1\u5212",name:"taskPlan"}),t(a,{label:"\u64CD\u4F5C\u5361\u7247\u5206\u914D",name:"actionCardPush"}),t(a,{label:"\u64CD\u4F5C\u5361\u7247\u5217\u8868",name:"actionCardTask"}),t(a,{label:"\u5B9A\u68C0\u5DE5\u4F5C\u603B\u7ED3",name:"workSummary"})]),_:1},8,["modelValue"]),t(B,{ref_key:"dispatchSubmit",ref:r},null,512),t(b)],64)}}};export{W as default};
