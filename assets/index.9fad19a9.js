import{b as N,f as S,d as j,r as z,A as re,p as ne,a as o,c as m,e as P,n as I,u as h,i as ie,v as se,g as u,aM as de,ak as ce,L as v,k as _,Q as e,w as l,D as ue,E as pe,m as me,q as _e,z as Y,h as g,Y as E,F as x,N as $,R,S as q,M as be,aL as ve}from"./index.78e2b5e2.js";import{E as fe,a as he}from"./tab-pane.5b109da1.js";import{c as A,E as F,a as H}from"./form-item.92696cfe.js";import{E as O}from"./date-picker.22f5de94.js";import{m as K,C as B,E as G}from"./input.0c03be6a.js";import"./scrollbar.101586e3.js";import{g as Q}from"./popper.96535230.js";import{m as ge,l as xe,u as J,_ as X,d as ye,E as ke,y as W}from"./button.14e5f778.js";import{E as U}from"./tag.56ed4b13.js";import{_ as we}from"./index2.09de5997.js";import{E as Ve,a as Ce}from"./select.e1dc6300.js";import{E as $e}from"./divider.75a33ed0.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import{E as ee,a as le}from"./descriptions-item.b8608af6.js";import{E as Ee,a as ze,b as De}from"./radio-button.5c419c3e.js";import{u as Ye}from"./index.64cbe9fe.js";import{E as Ie}from"./pagination.127ba76d.js";import{E as Te,a as Le}from"./table-column.ba485113.js";/* empty css                */import{E as Ue}from"./link.fecfa423.js";import{_ as Pe}from"./paramView.bd18e302.js";import"./aria2.e9b02c40.js";import"./focus-trap2.e64b94b1.js";import"./index2.113dc758.js";import"./scroll2.45ea5b41.js";import"./vnode2.cc0c3fa0.js";import"./overlay.aa84587d.js";import"./refs2.a4d84910.js";const ae=Symbol("collapseContextKey"),M=f=>typeof xe(f),Ae=N({accordion:Boolean,modelValue:{type:S([Array,String,Number]),default:()=>ge([])}}),Me={[K]:M,[B]:M},Ne={name:"ElCollapse"},Se=j({...Ne,props:Ae,emits:Me,setup(f,{expose:b,emit:r}){const p=f,a=J("collapse"),t=z(A(p.modelValue)),s=d=>{t.value=d;const i=p.accordion?t.value[0]:t.value;r(K,i),r(B,i)},n=d=>{if(p.accordion)s([(t.value[0]||t.value[0]===0)&&t.value[0]===d?"":d]);else{const i=[...t.value],C=i.indexOf(d);C>-1?i.splice(C,1):i.push(d),s(i)}};return re(()=>p.modelValue,()=>t.value=A(p.modelValue),{deep:!0}),ne(ae,{activeNames:t,handleItemClick:n}),b({activeNames:t,setActiveNames:s}),(d,i)=>(o(),m("div",{class:I(h(a).b()),role:"tablist","aria-multiselectable":"true"},[P(d.$slots,"default")],2))}});var je=X(Se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const Re=N({title:{type:String,default:""},name:{type:S([String,Number]),default:()=>Q()},disabled:Boolean}),qe=["aria-expanded","aria-controls","aria-describedby"],Fe=["id","tabindex","onKeypress"],He=["id","aria-hidden","aria-labelledby"],Oe={name:"ElCollapseItem"},Ke=j({...Oe,props:Re,setup(f,{expose:b}){const r=f,p=ie(ae),a=J("collapse"),t=z(!1),s=z(!1),n=z(Q()),d=se(()=>p==null?void 0:p.activeNames.value.includes(r.name)),i=()=>{setTimeout(()=>{s.value?s.value=!1:t.value=!0},50)},C=()=>{r.disabled||(p==null||p.handleItemClick(r.name),t.value=!1,s.value=!0)},V=()=>{p==null||p.handleItemClick(r.name)};return b({isActive:d}),(w,y)=>(o(),m("div",{class:I([h(a).b("item"),h(a).is("active",h(d)),h(a).is("disabled",w.disabled)])},[u("div",{role:"tab","aria-expanded":h(d),"aria-controls":h(a).b(`content-${n.value}`),"aria-describedby":h(a).b(`content-${n.value}`)},[u("div",{id:h(a).b(`head-${n.value}`),class:I([h(a).be("item","header"),h(a).is("active",h(d)),{focusing:t.value&&!w.disabled}]),role:"button",tabindex:w.disabled?-1:0,onClick:C,onKeypress:de(ce(V,["stop","prevent"]),["space","enter"]),onFocus:i,onBlur:y[0]||(y[0]=L=>t.value=!1)},[P(w.$slots,"title",{},()=>[v(_(w.title),1)]),e(h(ke),{class:I([h(a).be("item","arrow"),h(a).is("active",h(d))])},{default:l(()=>[e(h(ye))]),_:1},8,["class"])],42,Fe)],8,qe),e(h(we),null,{default:l(()=>[ue(u("div",{id:h(a).b(`content-${n.value}`),class:I(h(a).be("item","wrap")),role:"tabpanel","aria-hidden":!h(d),"aria-labelledby":h(a).b(`head-${n.value}`)},[u("div",{class:I(h(a).be("item","content"))},[P(w.$slots,"default")],2)],10,He),[[pe,h(d)]])]),_:3})],2))}});var oe=X(Ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const Be=me(je,{CollapseItem:oe}),Ge=_e(oe);const Qe={class:"text-xl font-semibold text-center mt-3 mb-6"},Je={key:0},Xe={key:1},We={class:"float-right"},Ze=v("\u7F16\u8F91\u4FEE\u6539"),el=v("\u786E\u8BA4\u4FEE\u6539"),ll=u("div",null,"112233",-1),al=v("2A"),ol={key:1},tl=u("div",{class:"font-semibold text-center mb-6"},"\u4EA4\u63A5\u60C5\u51B5\u767B\u8BB0",-1),rl=u("div",{class:"h-3/5 mr-2",style:{width:"6px","background-color":"var(--el-color-primary)"}},null,-1),nl={class:"font-semibold"},te={__name:"checkIn",props:{isEnterPage:{required:!0,default:!0}},setup(f){const b=Y([{name:"mechanical",title:"\u673A\u68B0\u4E13\u4E1A",form:{complete:"mechanicalComplete",keyCheck:"mechanicalKeyCheck",transferor:"mechanicalTransferor",receiver:"mechanicalReceiver"}},{name:"adHoc",title:"\u7279\u8BBE\u4E13\u4E1A",form:{complete:"adHocComplete",keyCheck:"adHocKeyCheck",transferor:"adHocTransferor",receiver:"adHocReceiver"}},{name:"avionics",title:"\u822A\u7535\u4E13\u4E1A",form:{complete:"avionicsComplete",keyCheck:"avionicsKeyCheck",transferor:"avionicsTransferor",receiver:"avionicsReceiver"}}]),r=z("mechanical"),p=z(!0),a=()=>{p.value=!0},t=Y({enterNo:null,enterDate:null,outDate:null,mechanicalComplete:null,mechanicalKeyCheck:null,mechanicalTransferor:null,mechanicalReceiver:null,adHocComplete:null,adHocKeyCheck:null,adHocTransferor:null,adHocReceiver:null,avionicsComplete:null,avionicsKeyCheck:null,avionicsTransferor:null,avionicsReceiver:null});return(s,n)=>{const d=W,i=F,C=U,V=G,w=O,y=H,L=Ge,c=Be;return o(),m(x,null,[u("div",Qe,[f.isEnterPage?(o(),m("span",Je,"\u98DE\u673A\u8FDB\u5382\u4EA4\u63A5\u767B\u8BB0")):(o(),m("span",Xe,"\u98DE\u673A\u51FA\u573A\u4EA4\u63A5\u767B\u8BB0")),u("div",We,[p.value?(o(),g(d,{key:0,type:"primary",onClick:n[0]||(n[0]=k=>p.value=!p.value)},{default:l(()=>[Ze]),_:1})):E("",!0),p.value?E("",!0):(o(),g(d,{key:1,type:"primary",plain:"",onClick:a},{default:l(()=>[el]),_:1}))])]),e(y,{"label-position":"right","label-width":"100px",model:t,inline:!0,disabled:p.value,class:"w-full text-center mb-6"},{default:l(()=>[e(i,{label:"\u98DE\u673A\u53F7"},{default:l(()=>[ll]),_:1}),e(i,{label:"\u5DE5\u4F5C\u7C7B\u578B"},{default:l(()=>[e(C,null,{default:l(()=>[al]),_:1})]),_:1}),e(i,{label:"\u51FA\u5382\u7F16\u53F7"},{default:l(()=>[f.isEnterPage?(o(),g(V,{key:0,modelValue:t.enterNo,"onUpdate:modelValue":n[1]||(n[1]=k=>t.enterNo=k)},null,8,["modelValue"])):(o(),m("div",ol,_(t.enterNo)+"112233",1))]),_:1}),f.isEnterPage?(o(),g(i,{key:0,label:"\u8FDB\u573A\u65E5\u671F"},{default:l(()=>[e(w,{modelValue:t.enterDate,"onUpdate:modelValue":n[2]||(n[2]=k=>t.enterDate=k),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u8FDB\u573A\u65E5\u671F",clearable:""},null,8,["modelValue"])]),_:1})):(o(),g(i,{key:1,label:"\u51FA\u5382\u65E5\u671F"},{default:l(()=>[e(w,{modelValue:t.outDate,"onUpdate:modelValue":n[3]||(n[3]=k=>t.outDate=k),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u51FA\u5382\u65E5\u671F",clearable:""},null,8,["modelValue"])]),_:1}))]),_:1},8,["model","disabled"]),tl,e(c,{modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=k=>r.value=k)},{default:l(()=>[(o(!0),m(x,null,$(b,k=>(o(),g(L,{name:k.name},{title:l(()=>[rl,u("div",nl,_(k.title),1)]),default:l(()=>[e(y,{"label-position":"top","label-width":"200px",disabled:p.value,class:"mt-3"},{default:l(()=>[e(i,{label:"\u672C\u4E13\u4E1A\u673A\u8F7D\u90E8\uFF08\u9644\uFF09\u4EF6\u662F\u5426\u9F50\u5168\uFF1F"},{default:l(()=>[e(V,{modelValue:t[k.form.complete],"onUpdate:modelValue":D=>t[k.form.complete]=D,autosize:{minRows:4,maxRows:8},type:"textarea",placeholder:"\u7531\u63A5\u6536\u4EBA\u5458\u8D1F\u8D23\u586B\u5199"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"\u673A\u7EC4\u8981\u6C42\u91CD\u70B9\u68C0\u67E5\u7684\u5185\u5BB9\uFF1F"},{default:l(()=>[e(V,{modelValue:t[k.form.keyCheck],"onUpdate:modelValue":D=>t[k.form.keyCheck]=D,autosize:{minRows:4,maxRows:8},type:"textarea",placeholder:"\u7531\u63A5\u6536\u4EBA\u5458\u8D1F\u8D23\u586B\u5199"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"\u79FB\u4EA4\u4EBA"},{default:l(()=>[e(V,{modelValue:t[k.form.transferor],"onUpdate:modelValue":D=>t[k.form.transferor]=D,placeholder:"\u8BF7\u8F93\u5165\u79FB\u4EA4\u4EBA",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"\u63A5\u6536\u4EBA"},{default:l(()=>[e(V,{modelValue:t[k.form.receiver],"onUpdate:modelValue":D=>t[k.form.receiver]=D,placeholder:"\u8BF7\u8F93\u5165\u63A5\u6536\u4EBA",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["disabled"])]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])],64)}}},il={__name:"enter",setup(f){return(b,r)=>(o(),g(te,{isEnterPage:!0}))}};const T=f=>(R("data-v-d5d2525a"),f=f(),q(),f),sl={class:"mb-6 mt-3"},dl=T(()=>u("span",{class:"text-lg font-semibold"},"20042\u98DE\u673A7A\u5B9A\u68C0\u5DE5\u4F5C\u8BA1\u5212",-1)),cl={class:"float-right"},ul=v("\u7F16\u8F91\u4FEE\u6539"),pl=v("\u786E\u8BA4\u4FEE\u6539"),ml=T(()=>u("div",{class:"moduleTitle"},"\u5B9A\u68C0\u65F6\u9650",-1)),_l={class:"grid grid-cols-2"},bl=T(()=>u("div",{class:"moduleTitle mt-6"},"\u4EBA\u5458\u5B89\u6392",-1)),vl=v("\u503C\u73ED\u4EBA\u5458\u5B89\u6392"),fl={class:"grid grid-cols-2"},hl=v("\u4E13\u4E1A\u8D1F\u8D23\u4EBA"),gl={class:"grid grid-cols-3"},xl=T(()=>u("div",{class:"moduleTitle"},"\u5B9A\u68C0\u5185\u5BB9",-1)),yl=T(()=>u("div",{class:"grid grid-cols-1 planContent"},[u("div",null,"\u4E00\u6392\uFF1A\u673A\u68B0\u4E13\u4E1A7A\u68C0\u6307\u4EE4\u5361\u7247"),u("div",null,"\u4E8C\u6392\uFF1A\u7279\u8BBE\u4E13\u4E1A7A\u68C0\u6307\u4EE4\u5361\u7247"),u("div",null,"\u4E09\u6392\uFF1A\u7535\u5B50\u4E13\u4E1A7A\u68C0\u6307\u4EE4\u5361\u7247"),u("div",null,"\u56DB\u6392\uFF1A\u6309\u9700\u5B8C\u6210\u65E0\u635F\u63A2\u4F24\u548C\u6CB9\u6DB2\u5316\u9A8C\u5DE5\u4F5C"),u("div",null,"\u4E94\u6392\uFF1A\u5B8C\u6210\u968F\u673A\u6027\u5404\u7C7B\u4FEE\u7406\u5DE5\u4F5C")],-1)),kl=T(()=>u("div",{class:"moduleTitle"},"\u8981\u6C42",-1)),wl={__name:"maintenancePlan",setup(f){const b=z(!0),r=Y({inspectionStart:"2022-05-01",inspectionEnd:"2022-05-10",brigadeLeader:"\u7518\u98CE\u529B",securityOfficer:"\u79E6\u6811\u742A",dutyOfficer:"\u9F99\u7ECD\u7131",informationOfficer:"\u7AE0\u5B66\u5171",platoonLeader1:1,platoonLeader2:2,platoonLeader3:3,requirements:null}),p=()=>{b.value=!0},a=Y([{label:"\u5218\u6F58\u5CF0",value:1},{label:"\u66F9\u6C38\u5FD7",value:2},{label:"\u5F20\u535A",value:3},{label:"\u738B\u7EAA\u65B0",value:4},{label:"\u5434\u677E\u6D9B",value:5}]);return(t,s)=>{const n=W,d=O,i=F,C=$e,V=G,w=Ve,y=Ce,L=H;return o(),m(x,null,[u("div",sl,[dl,u("div",cl,[b.value?(o(),g(n,{key:0,type:"primary",onClick:s[0]||(s[0]=c=>b.value=!b.value)},{default:l(()=>[ul]),_:1})):E("",!0),b.value?E("",!0):(o(),g(n,{key:1,type:"primary",plain:"",onClick:p},{default:l(()=>[pl]),_:1}))])]),e(L,{"label-position":"top","label-width":"100px",model:r,class:"mt-3",disabled:b.value},{default:l(()=>[ml,u("div",_l,[e(i,{label:"\u8BA1\u5212\u5F00\u59CB"},{default:l(()=>[e(d,{modelValue:r.inspectionStart,"onUpdate:modelValue":s[1]||(s[1]=c=>r.inspectionStart=c),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u5F00\u59CB\u65E5\u671F",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"\u8BA1\u5212\u7ED3\u675F"},{default:l(()=>[e(d,{modelValue:r.inspectionEnd,"onUpdate:modelValue":s[2]||(s[2]=c=>r.inspectionEnd=c),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9\u8BA1\u5212\u7ED3\u675F\u65E5\u671F",clearable:""},null,8,["modelValue"])]),_:1})]),bl,e(C,{"content-position":"left"},{default:l(()=>[vl]),_:1}),u("div",fl,[e(i,{label:"\u5927\u961F\u8D1F\u8D23\u4EBA"},{default:l(()=>[e(V,{modelValue:r.brigadeLeader,"onUpdate:modelValue":s[3]||(s[3]=c=>r.brigadeLeader=c),placeholder:"\u8BF7\u8F93\u5165\u5927\u961F\u8D1F\u8D23\u4EBA",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"\u5B9A\u68C0\u603B\u503C\u73ED\u5458"},{default:l(()=>[e(V,{modelValue:r.dutyOfficer,"onUpdate:modelValue":s[4]||(s[4]=c=>r.dutyOfficer=c),placeholder:"\u8BF7\u8F93\u5165\u5B9A\u68C0\u603B\u503C\u73ED\u5458",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"\u5B89\u5168\u503C\u73ED\u5458"},{default:l(()=>[e(V,{modelValue:r.securityOfficer,"onUpdate:modelValue":s[5]||(s[5]=c=>r.securityOfficer=c),placeholder:"\u8BF7\u8F93\u5165\u5B89\u5168\u503C\u73ED\u5458",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"\u4FE1\u606F\u5458"},{default:l(()=>[e(V,{modelValue:r.informationOfficer,"onUpdate:modelValue":s[6]||(s[6]=c=>r.informationOfficer=c),placeholder:"\u8BF7\u8F93\u5165\u4FE1\u606F\u5458",clearable:""},null,8,["modelValue"])]),_:1})]),e(C,{"content-position":"left"},{default:l(()=>[hl]),_:1}),u("div",gl,[e(i,{label:"\u4E00\u6392"},{default:l(()=>[e(y,{modelValue:r.platoonLeader1,"onUpdate:modelValue":s[7]||(s[7]=c=>r.platoonLeader1=c),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u4E00\u6392\u8D1F\u8D23\u4EBA",clearable:""},{default:l(()=>[(o(!0),m(x,null,$(a,c=>(o(),g(w,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u4E8C\u6392"},{default:l(()=>[e(y,{modelValue:r.platoonLeader2,"onUpdate:modelValue":s[8]||(s[8]=c=>r.platoonLeader2=c),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u4E8C\u6392\u8D1F\u8D23\u4EBA",clearable:""},{default:l(()=>[(o(!0),m(x,null,$(a,c=>(o(),g(w,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u4E09\u6392"},{default:l(()=>[e(y,{modelValue:r.platoonLeader3,"onUpdate:modelValue":s[9]||(s[9]=c=>r.platoonLeader3=c),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u4E09\u6392\u8D1F\u8D23\u4EBA",clearable:""},{default:l(()=>[(o(!0),m(x,null,$(a,c=>(o(),g(w,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u56DB\u6392"},{default:l(()=>[e(y,{modelValue:r.platoonLeader4,"onUpdate:modelValue":s[10]||(s[10]=c=>r.platoonLeader4=c),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u56DB\u6392\u8D1F\u8D23\u4EBA",clearable:""},{default:l(()=>[(o(!0),m(x,null,$(a,c=>(o(),g(w,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"\u4E94\u6392"},{default:l(()=>[e(y,{modelValue:r.platoonLeader5,"onUpdate:modelValue":s[11]||(s[11]=c=>r.platoonLeader5=c),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u4E94\u6392\u8D1F\u8D23\u4EBA",clearable:""},{default:l(()=>[(o(!0),m(x,null,$(a,c=>(o(),g(w,{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),xl,yl,kl,e(V,{modelValue:r.requirements,"onUpdate:modelValue":s[12]||(s[12]=c=>r.requirements=c),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8981\u6C42",autosize:{minRows:8,maxRows:14}},null,8,["modelValue"])]),_:1},8,["model","disabled"])],64)}}};var Vl=Z(wl,[["__scopeId","data-v-d5d2525a"]]);const Cl=u("div",{class:"mb-6 mt-3"},[u("span",{class:"text-lg font-semibold"},"\u4E13\u4E1A\u5DE5\u4F5C\u8BA1\u5212")],-1),$l={class:"moduleTitle mt-8"},El={class:"leading-10"},zl={class:"ml-3"},Dl={class:"leading-8"},Yl={class:"leading-8"},Il={__name:"subjectPlan",setup(f){const b=Y([{subject:"\u673A\u68B0",workContent:"\u673A\u68B0\u5DE5\u4F5C\u5185\u5BB9",groups:[{groupLeader:"\u4E01\u51AC\u82B9",member:"\u738B\u94F6\u559C\uFF0C\u8D3E\u98DE\u4E16\uFF0C\u8463\u4E09\u5973"},{groupLeader:"\u4E01\u51AC\u82B92",member:"\u738B\u94F6\u559C2\uFF0C\u8D3E\u98DE\u4E162\uFF0C\u8463\u4E09\u59732"}],teachings:[{teacher:"\u9A6C\u679C\u6811",student:"\u8D3E\u71B9"},{teacher:"\u9A6C\u679C\u68112",student:"\u8D3E\u71B92"}],note:`1.\u5DE5\u4F5C\u4E2D\u5FC5\u987B\u8981\u6709\u8D23\u4EFB\u5FC3\u3002\u8BE5\u662F\u81EA\u5DF1\u7684\u8D23\u4EFB\u7EDD\u4E0D\u80FD\u63A8\u8131\u3002\u8FD9\u5C31\u9700\u8981\u4F60\u6709\u62C5\u5F53,\u6709\u8D23\u4EFB\u5FC3\u3002\u540C\u65F6,\u6709\u8D23\u4EFB\u5FC3\u7684\u4EBA\u4E5F\u66F4\u5BB9\u6613\u83B7\u5F97\u4E0A\u53F8\u7684\u9752\u7750\u3002
2.\u8981\u5BF9\u81EA\u5DF1\u7684\u5DE5\u4F5C\u4FDD\u6301\u4E00\u5B9A\u7684\u6FC0\u60C5\u3002\u65F6\u523B\u4FDD\u6301\u5BF9\u4EBA\u5BF9\u4E8B\u7684\u6FC0\u60C5,\u53EF\u4EE5\u5F88\u5BB9\u6613\u5F97\u5230\u540C\u4E8B\u3001\u670B\u53CB\u7684\u8BA4\u53EF,\u8BA9\u81EA\u5DF1\u7684\u4EA4\u9645\u5708\u4E0D\u65AD\u5730\u58EE\u5927\u3002`,leader:"\u5EB7\u6C38\u6E05",date:"2022-05-01"},{subject:"\u7279\u8BBE",workContent:"\u7279\u8BBE\u5DE5\u4F5C\u5185\u5BB9",groups:[{groupLeader:"\u4E01\u51AC\u82B9",member:"\u738B\u94F6\u559C\uFF0C\u8D3E\u98DE\u4E16\uFF0C\u8463\u4E09\u5973"},{groupLeader:"\u4E01\u51AC\u82B92",member:"\u738B\u94F6\u559C2\uFF0C\u8D3E\u98DE\u4E162\uFF0C\u8463\u4E09\u59732"}],teachings:[{teacher:"\u9A6C\u679C\u6811",student:"\u8D3E\u71B9"},{teacher:"\u9A6C\u679C\u68112",student:"\u8D3E\u71B92"}],note:`1.\u5DE5\u4F5C\u4E2D\u5FC5\u987B\u8981\u6709\u8D23\u4EFB\u5FC3\u3002\u8BE5\u662F\u81EA\u5DF1\u7684\u8D23\u4EFB\u7EDD\u4E0D\u80FD\u63A8\u8131\u3002\u8FD9\u5C31\u9700\u8981\u4F60\u6709\u62C5\u5F53,\u6709\u8D23\u4EFB\u5FC3\u3002\u540C\u65F6,\u6709\u8D23\u4EFB\u5FC3\u7684\u4EBA\u4E5F\u66F4\u5BB9\u6613\u83B7\u5F97\u4E0A\u53F8\u7684\u9752\u7750\u3002
2.\u8981\u5BF9\u81EA\u5DF1\u7684\u5DE5\u4F5C\u4FDD\u6301\u4E00\u5B9A\u7684\u6FC0\u60C5\u3002\u65F6\u523B\u4FDD\u6301\u5BF9\u4EBA\u5BF9\u4E8B\u7684\u6FC0\u60C5,\u53EF\u4EE5\u5F88\u5BB9\u6613\u5F97\u5230\u540C\u4E8B\u3001\u670B\u53CB\u7684\u8BA4\u53EF,\u8BA9\u81EA\u5DF1\u7684\u4EA4\u9645\u5708\u4E0D\u65AD\u5730\u58EE\u5927\u3002`,leader:"\u5EB7\u6C38\u6E05",date:"2022-05-01"},{subject:"\u822A\u7535",workContent:"\u822A\u7535\u5DE5\u4F5C\u5185\u5BB9",groups:[{groupLeader:"\u4E01\u51AC\u82B9",member:"\u738B\u94F6\u559C\uFF0C\u8D3E\u98DE\u4E16\uFF0C\u8463\u4E09\u5973"},{groupLeader:"\u4E01\u51AC\u82B92",member:"\u738B\u94F6\u559C2\uFF0C\u8D3E\u98DE\u4E162\uFF0C\u8463\u4E09\u59732"}],teachings:[{teacher:"\u9A6C\u679C\u6811",student:"\u8D3E\u71B9"},{teacher:"\u9A6C\u679C\u68112",student:"\u8D3E\u71B92"}],note:`1.\u5DE5\u4F5C\u4E2D\u5FC5\u987B\u8981\u6709\u8D23\u4EFB\u5FC3\u3002\u8BE5\u662F\u81EA\u5DF1\u7684\u8D23\u4EFB\u7EDD\u4E0D\u80FD\u63A8\u8131\u3002\u8FD9\u5C31\u9700\u8981\u4F60\u6709\u62C5\u5F53,\u6709\u8D23\u4EFB\u5FC3\u3002\u540C\u65F6,\u6709\u8D23\u4EFB\u5FC3\u7684\u4EBA\u4E5F\u66F4\u5BB9\u6613\u83B7\u5F97\u4E0A\u53F8\u7684\u9752\u7750\u3002
2.\u8981\u5BF9\u81EA\u5DF1\u7684\u5DE5\u4F5C\u4FDD\u6301\u4E00\u5B9A\u7684\u6FC0\u60C5\u3002\u65F6\u523B\u4FDD\u6301\u5BF9\u4EBA\u5BF9\u4E8B\u7684\u6FC0\u60C5,\u53EF\u4EE5\u5F88\u5BB9\u6613\u5F97\u5230\u540C\u4E8B\u3001\u670B\u53CB\u7684\u8BA4\u53EF,\u8BA9\u81EA\u5DF1\u7684\u4EA4\u9645\u5708\u4E0D\u65AD\u5730\u58EE\u5927\u3002`,leader:"\u5EB7\u6C38\u6E05",date:"2022-05-01"}]);return(r,p)=>{const a=ee,t=U,s=le;return o(),m(x,null,[Cl,(o(!0),m(x,null,$(b,n=>(o(),m(x,null,[u("div",$l,_(n.subject)+"\u5DE5\u4F5C\u8BA1\u5212",1),e(s,{border:"",column:3},{default:l(()=>[e(a,{label:"\u5DE5\u4F5C\u5185\u5BB9",width:"250px",span:3},{default:l(()=>[v(_(n.workContent),1)]),_:2},1024),e(a,{label:"\u4EBA\u5458\u5206\u5DE5",span:3},{default:l(()=>[(o(!0),m(x,null,$(n.groups,(d,i)=>(o(),m("div",El,[e(t,{class:"ml-2",type:"info"},{default:l(()=>[v(_(i+1)+" \u7EC4",1)]),_:2},1024),u("span",zl,"\u961F\u957F\uFF1A"+_(d.groupLeader)+"\uFF0C\u961F\u5458\uFF1A"+_(d.member),1)]))),256))]),_:2},1024),e(a,{label:"\u5E26\u6559\u5B89\u6392",span:3},{default:l(()=>[(o(!0),m(x,null,$(n.teachings,d=>(o(),m("div",Dl,"\u6559\u5458\uFF1A"+_(d.teacher)+"\uFF0C\u5B66\u5458\uFF1A"+_(d.student),1))),256))]),_:2},1024),e(a,{label:"\u5DE5\u4F5C\u4E2D\u9700\u8981\u91CD\u70B9\u6CE8\u610F\u7684\u4E8B\u9879",span:3},{default:l(()=>[u("div",Yl,[(o(!0),m(x,null,$(n.note.split(`
`),d=>(o(),m("div",null,_(d),1))),256))])]),_:2},1024),e(a,{label:"\u4E13\u4E1A",span:1},{default:l(()=>[e(t,null,{default:l(()=>[v(_(n.subject),1)]),_:2},1024)]),_:2},1024),e(a,{label:"\u8D1F\u8D23\u4EBA",width:"200px",span:1},{default:l(()=>[v(_(n.leader),1)]),_:2},1024),e(a,{label:"\u65E5\u671F",width:"200px",span:1},{default:l(()=>[v(_(n.date),1)]),_:2},1024)]),_:2},1024)],64))),256))],64)}}},Tl={__name:"out",setup(f){return(b,r)=>(o(),g(te,{isEnterPage:!1}))}},Ll=u("div",{class:"mb-6 mt-3"},[u("span",{class:"text-lg font-semibold"},"\u4E13\u4E1A\u5DE5\u4F5C\u603B\u7ED3")],-1),Ul={class:"moduleTitle mt-8"},Pl={class:"leading-8"},Al={__name:"workSummary",setup(f){const b=Y([{subject:"\u673A\u68B0",completion:"\u673A\u68B0\u5DE5\u4F5C\u5B8C\u6210\u60C5\u51B5",fault:"\u53D1\u73B0\u6545\u969C\u53CA\u6392\u9664\u60C5\u51B5",goodAspect:"\u597D\u7684\u65B9\u9762",short:"\u5B58\u5728\u4E0D\u8DB3",improve:`\u8FD9\u5C31\u9700\u8981\u4F60\u6709\u62C5\u5F53,\u6709\u8D23\u4EFB\u5FC3\u3002\u540C\u65F6,\u6709\u8D23\u4EFB\u5FC3\u7684\u4EBA\u4E5F\u66F4\u5BB9\u6613\u83B7\u5F97\u4E0A\u53F8\u7684\u9752\u7750\u3002
\u65F6\u523B\u4FDD\u6301\u5BF9\u4EBA\u5BF9\u4E8B\u7684\u6FC0\u60C5,\u53EF\u4EE5\u5F88\u5BB9\u6613\u5F97\u5230\u540C\u4E8B\u3001\u670B\u53CB\u7684\u8BA4\u53EF,\u8BA9\u81EA\u5DF1\u7684\u4EA4\u9645\u5708\u4E0D\u65AD\u5730\u58EE\u5927\u3002`,leader:"\u5EB7\u6C38\u6E05",date:"2022-05-01"},{subject:"\u7279\u8BBE",completion:"\u7279\u8BBE\u5DE5\u4F5C\u5B8C\u6210\u60C5\u51B5",fault:"\u53D1\u73B0\u6545\u969C\u53CA\u6392\u9664\u60C5\u51B5",goodAspect:"\u597D\u7684\u65B9\u9762",short:"\u5B58\u5728\u4E0D\u8DB3",improve:`\u8FD9\u5C31\u9700\u8981\u4F60\u6709\u62C5\u5F53,\u6709\u8D23\u4EFB\u5FC3\u3002\u540C\u65F6,\u6709\u8D23\u4EFB\u5FC3\u7684\u4EBA\u4E5F\u66F4\u5BB9\u6613\u83B7\u5F97\u4E0A\u53F8\u7684\u9752\u7750\u3002
\u65F6\u523B\u4FDD\u6301\u5BF9\u4EBA\u5BF9\u4E8B\u7684\u6FC0\u60C5,\u53EF\u4EE5\u5F88\u5BB9\u6613\u5F97\u5230\u540C\u4E8B\u3001\u670B\u53CB\u7684\u8BA4\u53EF,\u8BA9\u81EA\u5DF1\u7684\u4EA4\u9645\u5708\u4E0D\u65AD\u5730\u58EE\u5927\u3002`,leader:"\u5EB7\u6C38\u6E05",date:"2022-05-01"},{subject:"\u822A\u7535",completion:"\u822A\u7535\u5DE5\u4F5C\u5B8C\u6210\u60C5\u51B5",fault:"\u53D1\u73B0\u6545\u969C\u53CA\u6392\u9664\u60C5\u51B5",goodAspect:"\u597D\u7684\u65B9\u9762",short:"\u5B58\u5728\u4E0D\u8DB3",improve:`\u8FD9\u5C31\u9700\u8981\u4F60\u6709\u62C5\u5F53,\u6709\u8D23\u4EFB\u5FC3\u3002\u540C\u65F6,\u6709\u8D23\u4EFB\u5FC3\u7684\u4EBA\u4E5F\u66F4\u5BB9\u6613\u83B7\u5F97\u4E0A\u53F8\u7684\u9752\u7750\u3002
\u65F6\u523B\u4FDD\u6301\u5BF9\u4EBA\u5BF9\u4E8B\u7684\u6FC0\u60C5,\u53EF\u4EE5\u5F88\u5BB9\u6613\u5F97\u5230\u540C\u4E8B\u3001\u670B\u53CB\u7684\u8BA4\u53EF,\u8BA9\u81EA\u5DF1\u7684\u4EA4\u9645\u5708\u4E0D\u65AD\u5730\u58EE\u5927\u3002`,leader:"\u5EB7\u6C38\u6E05",date:"2022-05-01"}]);return(r,p)=>{const a=ee,t=U,s=le;return o(),m(x,null,[Ll,(o(!0),m(x,null,$(b,n=>(o(),m(x,null,[u("div",Ul,_(n.subject)+"\u5DE5\u4F5C\u603B\u7ED3",1),e(s,{border:"",column:3},{default:l(()=>[e(a,{label:"\u5DE5\u4F5C\u5B8C\u6210\u60C5\u51B5",width:"250px",span:3},{default:l(()=>[v(_(n.completion),1)]),_:2},1024),e(a,{label:"\u53D1\u73B0\u6545\u969C\u53CA\u6392\u9664\u60C5\u51B5",span:3},{default:l(()=>[v(_(n.fault),1)]),_:2},1024),e(a,{label:"\u597D\u7684\u65B9\u9762",span:3},{default:l(()=>[v(_(n.goodAspect),1)]),_:2},1024),e(a,{label:"\u5B58\u5728\u4E0D\u8DB3",span:3},{default:l(()=>[v(_(n.short),1)]),_:2},1024),e(a,{label:"\u6539\u8FDB\u63AA\u65BD",span:3},{default:l(()=>[u("div",Pl,[(o(!0),m(x,null,$(n.improve.split(`
`),d=>(o(),m("div",null,_(d),1))),256))])]),_:2},1024),e(a,{label:"\u4E13\u4E1A",span:1},{default:l(()=>[e(t,null,{default:l(()=>[v(_(n.subject),1)]),_:2},1024)]),_:2},1024),e(a,{label:"\u8D1F\u8D23\u4EBA",width:"200px",span:1},{default:l(()=>[v(_(n.leader),1)]),_:2},1024),e(a,{label:"\u65E5\u671F",width:"200px",span:1},{default:l(()=>[v(_(n.date),1)]),_:2},1024)]),_:2},1024)],64))),256))],64)}}};const Ml={key:0,class:"mr-1"},Nl={key:0},Sl=v("\u53C2\u6570"),jl={__name:"instructionTable",setup(f){const b=()=>{let p=Array();for(let a=0;a<=7;a++)p.push({workContent:{name:"\u6E05\u6D17\u518D\u5FAA\u73AF\u98CE\u6247\u6EE4\u7F51",code:"Y20-A-05-33-21-01A-ABCD"},qualityInspector:"",completion:"\u5DE5\u4F5C\u5B8C\u6210\u60C5\u51B5",worker:"\u848B\u8FDB\u5982",reviewer:"\u8C22\u96C4\u6C11",startDate:"2022-05-01",endDate:"2022-05-14",remark:"aabbccdddee"});return p},r=z();return(p,a)=>{const t=Te,s=Ue,n=Le,d=Ie;return o(),m(x,null,[e(n,{data:b(),border:"","header-cell-style":{background:"#F5F7FA",color:"#303133","text-align":"center"},"cell-style":{"text-align":"center",height:"50px"},style:{width:"100%"}},{default:l(()=>[e(t,{prop:"workContent",label:"\u5DE5\u4F5C\u5185\u5BB9",fixed:"","min-width":"250"},{default:l(i=>[u("div",null,[i.row.qualityInspector!=null?(o(),m("span",Ml,"\u2605")):E("",!0),v(_(i.row.workContent.name),1)]),u("div",null,_(i.row.workContent.code),1),i.row.qualityInspector!=null?(o(),m("div",Nl,"\u8D28\u68C0\u5458\uFF1A"+_(i.row.qualityInspector),1)):E("",!0)]),_:1}),e(t,{prop:"completion",label:"\u5B8C\u6210\u60C5\u51B5","min-width":"180"}),e(t,{prop:"worker",label:"\u5DE5\u4F5C\u8005","min-width":"150"}),e(t,{prop:"reviewer",label:"\u590D\u67E5\u8005","min-width":"150"}),e(t,{prop:"startDate",label:"\u5F00\u59CB\u65F6\u95F4","min-width":"150"}),e(t,{prop:"endDate",label:"\u7ED3\u675F\u65F6\u95F4","min-width":"150"}),e(t,{prop:"remark",label:"\u5907\u6CE8","min-width":"200","show-overflow-tooltip":""}),e(t,{label:"\u64CD\u4F5C",width:"100"},{default:l(()=>[e(s,{type:"primary",onClick:a[0]||(a[0]=i=>r.value.open())},{default:l(()=>[Sl]),_:1})]),_:1})]),_:1},8,["data"]),e(d,{"page-size":"15",background:"",layout:"prev, pager, next, jumper",class:"mt-12 float-right",total:50}),e(Pe,{ref_key:"actionParamView",ref:r},null,512)],64)}}};const Rl=f=>(R("data-v-480329d5"),f=f(),q(),f),ql=Rl(()=>u("div",{class:"mb-6 mt-3"},[u("span",{class:"text-lg font-semibold"},"\u8FD0-20\u98DE\u673A 22001 7A\u68C0\u6307\u4EE4\u5361\u7247")],-1)),Fl=v("\u673A\u68B0\u4E13\u4E1A"),Hl=v("\u7279\u8BBE\u4E13\u4E1A"),Ol=v("\u822A\u7535\u4E13\u4E1A"),Kl=v("\u6D3E\u5DE5\u5355\u53F7\uFF1A21DJ001"),Bl={class:"cardDate mt-8 mb-8"},Gl={__name:"instructionCard",setup(f){const b=Ye(),r=z(1),p=Y({mechanical:["2022-04-01","2022-04-02","2022-04-03","2022-04-04"],adHoc:["2022-05-01","2022-05-02","2022-05-03","2022-05-04"],avionics:["2022-06-01","2022-06-02","2022-06-03","2022-06-04"]}),a=z(p.mechanical),t=z(p.mechanical[0]),s=n=>{a.value=p[b.subjectTransform("code",n,"en")],t.value=a.value[0]};return(n,d)=>{const i=Ee,C=ze,V=U,w=De;return o(),m(x,null,[ql,u("div",null,[e(C,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=y=>r.value=y),onChange:s},{default:l(()=>[e(i,{label:1,size:"large",border:""},{default:l(()=>[Fl]),_:1}),e(i,{label:2,size:"large",border:""},{default:l(()=>[Hl]),_:1}),e(i,{label:3,size:"large",border:""},{default:l(()=>[Ol]),_:1})]),_:1},8,["modelValue"]),e(V,{size:"large",class:"align-text-top float-right"},{default:l(()=>[Kl]),_:1})]),u("div",Bl,[e(C,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=y=>t.value=y)},{default:l(()=>[(o(!0),m(x,null,$(a.value,y=>(o(),g(w,{key:y,label:y,size:"small",border:"",class:"mt-2 mb-2"},{default:l(()=>[v(_(y),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),e(jl)],64)}}};var Ql=Z(Gl,[["__scopeId","data-v-480329d5"]]);const Jl={class:"page-title"},Ca={__name:"index",setup(f){const b=be(),r=b.query.maintenanceId,p=b.query.activeTab||"maintenancePlan",a=z(p),t=s=>{ve.push({path:b.path,query:{maintenanceId:b.query.maintenanceId,activeTab:s}})};return(s,n)=>{const d=fe,i=he;return o(),m(x,null,[u("div",Jl,"\u5B9A\u68C0\u8BE6\u60C5 ("+_(h(r))+")",1),e(i,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=C=>a.value=C),onTabChange:t},{default:l(()=>[e(d,{label:"\u5B9A\u68C0\u8BA1\u5212",name:"maintenancePlan"},{default:l(()=>[a.value==="maintenancePlan"?(o(),g(Vl,{key:0})):E("",!0)]),_:1}),e(d,{label:"\u4E13\u4E1A\u5DE5\u4F5C\u8BA1\u5212",name:"subjectPlan"},{default:l(()=>[a.value==="subjectPlan"?(o(),g(Il,{key:0})):E("",!0)]),_:1}),e(d,{label:"\u7EC4\u7EC7\u8FDB\u573A",name:"enter"},{default:l(()=>[a.value==="enter"?(o(),g(il,{key:0})):E("",!0)]),_:1}),e(d,{label:"\u6307\u4EE4\u5361\u7247",name:"instruction"},{default:l(()=>[a.value==="instruction"?(o(),g(Ql,{key:0})):E("",!0)]),_:1}),e(d,{label:"\u7EC4\u7EC7\u51FA\u573A",name:"out"},{default:l(()=>[a.value==="out"?(o(),g(Tl,{key:0})):E("",!0)]),_:1}),e(d,{label:"\u5DE5\u4F5C\u603B\u7ED3",name:"workSummary"},{default:l(()=>[a.value==="workSummary"?(o(),g(Al,{key:0})):E("",!0)]),_:1})]),_:1},8,["modelValue"])],64)}}};export{Ca as default};
