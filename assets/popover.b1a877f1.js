import{S,a as P,U as E,u as N,E as I,y as v,_ as V}from"./button.faf7d773.js";import{d as g,E as $}from"./popper.f9e7652b.js";import{b as j,f as y,d as A,r as D,v as h,a,h as i,w as l,g as s,n,u as o,x as F,j as L,Y as x,L as c,k as f,Q as b,e as R,m as q}from"./index.a6bf5d43.js";import{a as Q}from"./focus-trap2.58d2497a.js";const T=[...S,"text"],U=j({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:T,default:"primary"},cancelButtonType:{type:String,values:T,default:"text"},icon:{type:P,default:E},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},onConfirm:{type:y(Function)},onCancel:{type:y(Function)},teleported:g.teleported,persistent:g.persistent}),Y={name:"ElPopconfirm"},G=A({...Y,props:U,setup(B){const r=B,{t:d}=Q(),p=N("popconfirm"),u=D(),_=()=>{var e,t;(t=(e=u.value)==null?void 0:e.onClose)==null||t.call(e)},m=()=>{_()},C=e=>{var t;(t=r.onConfirm)==null||t.call(r,e),m()},k=e=>{var t;(t=r.onCancel)==null||t.call(r,e),m()},z=h(()=>r.confirmButtonText||d("el.popconfirm.confirmButtonText")),w=h(()=>r.cancelButtonText||d("el.popconfirm.cancelButtonText"));return(e,t)=>(a(),i(o($),{ref_key:"tooltipRef",ref:u,trigger:"click",effect:"light","popper-class":`${o(p).namespace.value}-popover`,teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent},{content:l(()=>[s("div",{class:n(o(p).b())},[s("div",{class:n(o(p).e("main"))},[!e.hideIcon&&e.icon?(a(),i(o(I),{key:0,class:n(o(p).e("icon")),style:F({color:e.iconColor})},{default:l(()=>[(a(),i(L(e.icon)))]),_:1},8,["class","style"])):x("v-if",!0),c(" "+f(e.title),1)],2),s("div",{class:n(o(p).e("action"))},[b(o(v),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:k},{default:l(()=>[c(f(o(w)),1)]),_:1},8,["type","text"]),b(o(v),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:C},{default:l(()=>[c(f(o(z)),1)]),_:1},8,["type","text"])],2)],2)]),default:l(()=>[e.$slots.reference?R(e.$slots,"reference",{key:0}):x("v-if",!0)]),_:3},8,["popper-class","teleported","hide-after","persistent"]))}});var H=V(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const W=q(H);export{W as E};
