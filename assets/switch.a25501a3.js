import{b as H,f as Q,G as V,d as R,ai as W,v as w,a7 as Y,r as C,A as I,o as q,I as J,b0 as x,K as D,a as i,c as o,g as S,n as s,aM as X,h as r,w as p,j as _,Y as a,k as y,F as M,Q as Z,x as A,ak as ee,m as ie}from"./index.78e2b5e2.js";import{a as F,g as k,l as T,E as le,R as te,C as ae,u as se,D as ne,n as oe,A as ce,_ as re,t as he}from"./button.14e5f778.js";import{i as de}from"./select.e1dc6300.js";import{m as E,C as N,I as z}from"./input.0c03be6a.js";const ue=H({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:F,default:""},inactiveIcon:{type:F,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Q(Function)},size:{type:String,validator:de},tabindex:{type:[String,Number]}}),we={[E]:e=>k(e)||V(e)||T(e),[N]:e=>k(e)||V(e)||T(e),[z]:e=>k(e)||V(e)||T(e)},K="ElSwitch",ve=R({name:K,components:{ElIcon:le,Loading:te},props:ue,emits:we,setup(e,{emit:l}){const{formItem:v}=ae(),g=W(w(()=>e.loading)),h=se("switch"),{inputId:B}=ne(e,{formItemContext:v}),d=Y(),f=C(e.modelValue!==!1),n=C(),$=C(),j=w(()=>[h.b(),h.m(d.value),h.is("disabled",g.value),h.is("checked",u.value)]),O=w(()=>({width:oe(e.width)}));I(()=>e.modelValue,()=>{f.value=!0}),I(()=>e.value,()=>{f.value=!1});const P=w(()=>f.value?e.modelValue:e.value),u=w(()=>P.value===e.activeValue);[e.activeValue,e.inactiveValue].includes(P.value)||(l(E,e.inactiveValue),l(N,e.inactiveValue),l(z,e.inactiveValue)),I(u,()=>{var t;n.value.checked=u.value,e.validateEvent&&((t=v==null?void 0:v.validate)==null||t.call(v,"change").catch(c=>ce()))});const b=()=>{const t=u.value?e.inactiveValue:e.activeValue;l(E,t),l(N,t),l(z,t),J(()=>{n.value.checked=u.value})},U=()=>{if(g.value)return;const{beforeChange:t}=e;if(!t){b();return}const c=t();[x(c),k(c)].some(m=>m)||he(K,"beforeChange must return type `Promise<boolean>` or `boolean`"),x(c)?c.then(m=>{m&&b()}).catch(m=>{}):c&&b()},G=w(()=>h.cssVarBlock({...e.activeColor?{"on-color":e.activeColor}:null,...e.inactiveColor?{"off-color":e.inactiveColor}:null,...e.borderColor?{"border-color":e.borderColor}:null})),L=()=>{var t,c;(c=(t=n.value)==null?void 0:t.focus)==null||c.call(t)};return q(()=>{n.value.checked=u.value}),{ns:h,input:n,inputId:B,core:$,switchDisabled:g,checked:u,switchKls:j,coreStyle:O,handleChange:b,switchValue:U,focus:L,styles:G}}}),fe=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex"],pe=["aria-hidden"],ge=["aria-hidden"],be=["aria-hidden"],me=["aria-hidden"];function _e(e,l,v,g,h,B){const d=D("el-icon"),f=D("loading");return i(),o("div",{class:s(e.switchKls),style:A(e.styles),onClick:l[2]||(l[2]=ee((...n)=>e.switchValue&&e.switchValue(...n),["prevent"]))},[S("input",{id:e.inputId,ref:"input",class:s(e.ns.e("input")),type:"checkbox",role:"switch","aria-checked":e.checked,"aria-disabled":e.switchDisabled,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.switchDisabled,tabindex:e.tabindex,onChange:l[0]||(l[0]=(...n)=>e.handleChange&&e.handleChange(...n)),onKeydown:l[1]||(l[1]=X((...n)=>e.switchValue&&e.switchValue(...n),["enter"]))},null,42,fe),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),o("span",{key:0,class:s([e.ns.e("label"),e.ns.em("label","left"),e.ns.is("active",!e.checked)])},[e.inactiveIcon?(i(),r(d,{key:0},{default:p(()=>[(i(),r(_(e.inactiveIcon)))]),_:1})):a("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),o("span",{key:1,"aria-hidden":e.checked},y(e.inactiveText),9,pe)):a("v-if",!0)],2)):a("v-if",!0),S("span",{ref:"core",class:s(e.ns.e("core")),style:A(e.coreStyle)},[e.inlinePrompt?(i(),o("div",{key:0,class:s(e.ns.e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),o(M,{key:0},[e.activeIcon?(i(),r(d,{key:0,class:s([e.ns.is("icon"),e.checked?e.ns.is("show"):e.ns.is("hide")])},{default:p(()=>[(i(),r(_(e.activeIcon)))]),_:1},8,["class"])):a("v-if",!0),e.inactiveIcon?(i(),r(d,{key:1,class:s([e.ns.is("icon"),e.checked?e.ns.is("hide"):e.ns.is("show")])},{default:p(()=>[(i(),r(_(e.inactiveIcon)))]),_:1},8,["class"])):a("v-if",!0)],64)):e.activeText||e.inactiveIcon?(i(),o(M,{key:1},[e.activeText?(i(),o("span",{key:0,class:s([e.ns.is("text"),e.checked?e.ns.is("show"):e.ns.is("hide")]),"aria-hidden":!e.checked},y(e.activeText.substring(0,3)),11,ge)):a("v-if",!0),e.inactiveText?(i(),o("span",{key:1,class:s([e.ns.is("text"),e.checked?e.ns.is("hide"):e.ns.is("show")]),"aria-hidden":e.checked},y(e.inactiveText.substring(0,3)),11,be)):a("v-if",!0)],64)):a("v-if",!0)],2)):a("v-if",!0),S("div",{class:s(e.ns.e("action"))},[e.loading?(i(),r(d,{key:0,class:s(e.ns.is("loading"))},{default:p(()=>[Z(f)]),_:1},8,["class"])):a("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),o("span",{key:1,class:s([e.ns.e("label"),e.ns.em("label","right"),e.ns.is("active",e.checked)])},[e.activeIcon?(i(),r(d,{key:0},{default:p(()=>[(i(),r(_(e.activeIcon)))]),_:1})):a("v-if",!0),!e.activeIcon&&e.activeText?(i(),o("span",{key:1,"aria-hidden":!e.checked},y(e.activeText),9,me)):a("v-if",!0)],2)):a("v-if",!0)],6)}var ye=re(ve,[["render",_e],["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Te=ie(ye);export{Te as E};
