import{z as E,a as u,h as w,w as t,Q as e,L as a,c as b,F as h}from"./index.78e2b5e2.js";import{E as x}from"./divider.75a33ed0.js";import{E as y,a as v}from"./form-item.92696cfe.js";import{y as g}from"./button.14e5f778.js";import{E as F,a as V}from"./radio-button.5c419c3e.js";import{E as k}from"./input.0c03be6a.js";import{E as N}from"./pagination.127ba76d.js";import{E as z}from"./tag.56ed4b13.js";import"./select.e1dc6300.js";import"./scrollbar.101586e3.js";import"./popper.96535230.js";import{E as j,a as B}from"./table-column.ba485113.js";/* empty css                */import{E as I}from"./popover.5b19ca5c.js";import{E as T}from"./image-viewer.3f36917f.js";import"./focus-trap2.e64b94b1.js";import"./aria2.e9b02c40.js";import"./scroll2.45ea5b41.js";const $=a("\u5168\u90E8"),C=a("\u673A\u68B0\u4E13\u4E1A"),A=a("\u7279\u8BBE\u4E13\u4E1A"),D=a("\u822A\u7535\u4E13\u4E1A"),P=a("\u67E5\u8BE2"),R={__name:"search",setup(f){const l=E({aircraftNumber:null,subject:"0"});return(i,o)=>{const r=k,m=y,n=F,_=V,c=g,d=v;return u(),w(d,{inline:!0,model:l,class:"demo-form-inline mt-6"},{default:t(()=>[e(m,{label:"\u98DE\u673A\u53F7"},{default:t(()=>[e(r,{modelValue:l.aircraftNumber,"onUpdate:modelValue":o[0]||(o[0]=p=>l.aircraftNumber=p),placeholder:"\u8F93\u5165\u98DE\u673A\u53F7"},null,8,["modelValue"])]),_:1}),e(m,{label:"\u4E13\u4E1A"},{default:t(()=>[e(_,{modelValue:l.subject,"onUpdate:modelValue":o[1]||(o[1]=p=>l.subject=p)},{default:t(()=>[e(n,{label:"0",size:"large",border:""},{default:t(()=>[$]),_:1}),e(n,{label:"1",size:"large",border:""},{default:t(()=>[C]),_:1}),e(n,{label:"2",size:"large",border:""},{default:t(()=>[A]),_:1}),e(n,{label:"3",size:"large",border:""},{default:t(()=>[D]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(c,{type:"primary"},{default:t(()=>[P]),_:1})]),_:1})]),_:1},8,["model"])}}},U=a("\u673A\u68B0"),G=a("\u5220\u9664"),L={__name:"table",setup(f){const l=()=>{let i=Array();for(let o=0;o<6;o++)i.push({photoId:o+1,aircraftNumber:"aircraft-001",position:"\u90E8\u4F4D\u90E8\u4F4D\u90E8\u4F4D\u90E8\u4F4D",moment:"\u65F6\u673A\u65F6\u673A",photographer:"\u7167\u76F8\u4EBA",staff:"\u5DE5\u4F5C\u4EBA",reviewer:"\u5BA1\u6838\u4EBA",photo:"https://picsum.photos/1280/720?random=6"});return i};return(i,o)=>{const r=j,m=z,n=T,_=g,c=I,d=B,p=N;return u(),b(h,null,[e(d,{data:l(),border:"","header-cell-style":{background:"#F5F7FA",color:"#303133","text-align":"center"},"cell-style":{"text-align":"center",height:"50px"},style:{width:"100%"}},{default:t(()=>[e(r,{label:"\u98DE\u673A\u53F7",prop:"aircraftNumber",fixed:"","min-width":"200"}),e(r,{label:"\u4E13\u4E1A",prop:"subject","min-width":"150"},{default:t(s=>[e(m,null,{default:t(()=>[U]),_:1})]),_:1}),e(r,{label:"\u7167\u76F8\u90E8\u4F4D",prop:"position","min-width":"180"}),e(r,{label:"\u7167\u76F8\u65F6\u673A",prop:"moment","min-width":"180"}),e(r,{label:"\u7167\u76F8\u4EBA",prop:"photographer","min-width":"150"}),e(r,{label:"\u5DE5\u4F5C\u4EBA",prop:"staff","min-width":"150"}),e(r,{label:"\u5BA1\u6838\u4EBA",prop:"reviewer","min-width":"150"}),e(r,{label:"\u7167\u7247",prop:"photo","min-width":"180"},{default:t(s=>[e(n,{style:{width:"initial",height:"100px"},src:s.row.photo,"preview-teleported":!0,"preview-src-list":[s.row.photo]},null,8,["src","preview-src-list"])]),_:1}),e(r,{label:"\u64CD\u4F5C","min-width":"150"},{default:t(s=>[e(c,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u7167\u76F8\uFF1F"},{reference:t(()=>[e(_,{type:"danger",link:"",onClick:o[0]||(o[0]=()=>{})},{default:t(()=>[G]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),e(p,{"page-size":"15",background:"",layout:"prev, pager, next, jumper",class:"mt-12 float-right",total:100})],64)}}},ne={__name:"index",setup(f){return(l,i)=>{const o=x;return u(),b(h,null,[e(R),e(o),e(L)],64)}}};export{ne as default};
