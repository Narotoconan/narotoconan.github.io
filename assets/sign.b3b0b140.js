import{r as c,a as S,h as x,w as s,g as f,Q as i,an as p,u as y,R as I,S as h,L as g}from"./index.78e2b5e2.js";import{E as b}from"./overlay.aa84587d.js";import{y as C}from"./button.14e5f778.js";import{H as B}from"./index.67464e90.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";const k=o=>(I("data-v-58e75e68"),o=o(),h(),o),w=k(()=>f("div",{class:"cardImg mb-6"},null,-1)),N={class:"dialog-footer"},E=g("\u5173\u95ED"),A=g("\u786E\u8BA4"),H={__name:"sign",props:{title:{type:String,default:"\u7B7E\u5B57"},actionCardImg:{type:String,default:""},signName:{type:String,default:"\u4EBA\u5458"}},setup(o,{expose:m}){let e=c(!1);const n=c(),_=()=>{e.value=!0},u=()=>{n.value.signClear()},l=r=>{n.value.convertBase64(r)&&(e.value=!1)};return m({open:_,toSign:l}),(r,t)=>{const d=C,v=b;return S(),x(v,{modelValue:y(e),"onUpdate:modelValue":t[2]||(t[2]=a=>p(e)?e.value=a:e=a),title:o.title,width:"700px",onClose:u,center:"","destroy-on-close":""},{footer:s(()=>[f("div",N,[i(d,{onClick:t[0]||(t[0]=a=>p(e)?e.value=!1:e=!1)},{default:s(()=>[E]),_:1}),i(d,{type:"primary",onClick:t[1]||(t[1]=a=>l(o.signName))},{default:s(()=>[A]),_:1})])]),default:s(()=>[w,i(B,{ref_key:"sign",ref:n},null,512)]),_:1},8,["modelValue","title"])}}};var F=V(H,[["__scopeId","data-v-58e75e68"]]);export{F as A};
