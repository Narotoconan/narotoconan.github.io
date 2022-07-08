import{m as J,t as W,u as K,o as ee,_ as te,a2 as ve,a3 as fe,E as M,M as he,d as pe,z as ue,l as me,a4 as ge,a5 as G}from"./button.faf7d773.js";import{b as j,f as F,d as q,i as X,r as T,A as C,I as ae,a_ as R,a as le,c as se,n as re,u as E,x as xe,l as Y,Z as Q,v as D,o as oe,X as we,Q as d,G as ye,z as ie,p as Ne,e as ne,s as Te,af as Pe,D as ke,E as ze,Y as Ee,m as Ce,q as Se}from"./index.a6bf5d43.js";import{E as V}from"./aria2.e9b02c40.js";import{m as be}from"./input.96d5573d.js";const U=Symbol("tabsRootContextKey"),$e=j({tabs:{type:F(Array),default:()=>J([])}}),Be={name:"ElTabBar"},Re=q({...Be,props:$e,setup(e,{expose:b}){const k=e,g="ElTabBar",a=Y(),h=X(U);h||W(g,"<el-tabs><el-tab-bar /></el-tabs>");const P=K("tabs"),r=T(),x=T(),v=()=>{let i=0,w=0;const t=["top","bottom"].includes(h.props.tabPosition)?"width":"height",o=t==="width"?"x":"y";return k.tabs.every(_=>{var z,O,I,L;const S=(O=(z=a.parent)==null?void 0:z.refs)==null?void 0:O[`tab-${_.paneName}`];if(!S)return!1;if(!_.active)return!0;w=S[`client${R(t)}`];const A=o==="x"?"left":"top";i=S.getBoundingClientRect()[A]-((L=(I=S.parentElement)==null?void 0:I.getBoundingClientRect()[A])!=null?L:0);const $=window.getComputedStyle(S);return t==="width"&&(k.tabs.length>1&&(w-=Number.parseFloat($.paddingLeft)+Number.parseFloat($.paddingRight)),i+=Number.parseFloat($.paddingLeft)),!1}),{[t]:`${w}px`,transform:`translate${R(o)}(${i}px)`}},c=()=>x.value=v();return C(()=>k.tabs,async()=>{await ae(),c()},{immediate:!0}),ee(r,()=>c()),b({ref:r,update:c}),(i,w)=>(le(),se("div",{ref_key:"barRef",ref:r,class:re([E(P).e("active-bar"),E(P).is(E(h).props.tabPosition)]),style:xe(x.value)},null,6))}});var Oe=te(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ie=j({panes:{type:F(Array),default:()=>J([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:F(Function),default:Q},onTabRemove:{type:F(Function),default:Q},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Z="ElTabNav",Le=q({name:Z,props:Ie,setup(e,{expose:b}){const k=Y(),g=X(U);g||W(Z,"<el-tabs><tab-nav /></el-tabs>");const a=K("tabs"),h=ve(),P=fe(),r=T(),x=T(),v=T(),c=T(!1),i=T(0),w=T(!1),t=T(!0),o=D(()=>["top","bottom"].includes(g.props.tabPosition)?"width":"height"),_=D(()=>({transform:`translate${o.value==="width"?"X":"Y"}(-${i.value}px)`})),z=()=>{if(!r.value)return;const l=r.value[`offset${R(o.value)}`],n=i.value;if(!n)return;const s=n>l?n-l:0;i.value=s},O=()=>{if(!r.value||!x.value)return;const l=x.value[`offset${R(o.value)}`],n=r.value[`offset${R(o.value)}`],s=i.value;if(l-s<=n)return;const y=l-s>n*2?s+n:l-n;i.value=y},I=async()=>{const l=x.value;if(!c.value||!v.value||!r.value||!l)return;await ae();const n=v.value.querySelector(".is-active");if(!n)return;const s=r.value,y=["top","bottom"].includes(g.props.tabPosition),u=n.getBoundingClientRect(),p=s.getBoundingClientRect(),N=y?l.offsetWidth-p.width:l.offsetHeight-p.height,m=i.value;let f=m;y?(u.left<p.left&&(f=m-(p.left-u.left)),u.right>p.right&&(f=m+u.right-p.right)):(u.top<p.top&&(f=m-(p.top-u.top)),u.bottom>p.bottom&&(f=m+(u.bottom-p.bottom))),f=Math.max(f,0),i.value=Math.min(f,N)},L=()=>{if(!x.value||!r.value)return;const l=x.value[`offset${R(o.value)}`],n=r.value[`offset${R(o.value)}`],s=i.value;if(n<l){const y=i.value;c.value=c.value||{},c.value.prev=y,c.value.next=y+n<l,l-y<n&&(i.value=l-n)}else c.value=!1,s>0&&(i.value=0)},S=l=>{const n=l.code,{up:s,down:y,left:u,right:p}=V;if(![s,y,u,p].includes(n))return;const N=Array.from(l.currentTarget.querySelectorAll("[role=tab]")),m=N.indexOf(l.target);let f;n===u||n===s?m===0?f=N.length-1:f=m-1:m<N.length-1?f=m+1:f=0,N[f].focus(),N[f].click(),A()},A=()=>{t.value&&(w.value=!0)},$=()=>w.value=!1;return C(h,l=>{l==="hidden"?t.value=!1:l==="visible"&&setTimeout(()=>t.value=!0,50)}),C(P,l=>{l?setTimeout(()=>t.value=!0,50):t.value=!1}),ee(v,L),oe(()=>setTimeout(()=>I(),0)),we(()=>L()),b({scrollToActiveTab:I,removeFocus:$}),C(()=>e.panes,()=>k.update(),{flush:"post"}),()=>{const l=c.value?[d("span",{class:[a.e("nav-prev"),a.is("disabled",!c.value.prev)],onClick:z},[d(M,null,{default:()=>[d(he,null,null)]})]),d("span",{class:[a.e("nav-next"),a.is("disabled",!c.value.next)],onClick:O},[d(M,null,{default:()=>[d(pe,null,null)]})])]:null,n=e.panes.map((s,y)=>{var u,p;const N=s.props.name||s.index||`${y}`,m=s.isClosable||e.editable;s.index=`${y}`;const f=m?d(M,{class:"is-icon-close",onClick:B=>e.onTabRemove(s,B)},{default:()=>[d(ue,null,null)]}):null,ce=((p=(u=s.slots).label)==null?void 0:p.call(u))||s.props.label,_e=s.active?0:-1;return d("div",{ref:`tab-${N}`,class:[a.e("item"),a.is(g.props.tabPosition),a.is("active",s.active),a.is("disabled",s.props.disabled),a.is("closable",m),a.is("focus",w.value)],id:`tab-${N}`,key:`tab-${N}`,"aria-controls":`pane-${N}`,role:"tab","aria-selected":s.active,tabindex:_e,onFocus:()=>A(),onBlur:()=>$(),onClick:B=>{$(),e.onTabClick(s,N,B)},onKeydown:B=>{m&&(B.code===V.delete||B.code===V.backspace)&&e.onTabRemove(s,B)}},[ce,f])});return d("div",{ref:v,class:[a.e("nav-wrap"),a.is("scrollable",!!c.value),a.is(g.props.tabPosition)]},[l,d("div",{class:a.e("nav-scroll"),ref:r},[d("div",{class:[a.e("nav"),a.is(g.props.tabPosition),a.is("stretch",e.stretch&&["top","bottom"].includes(g.props.tabPosition))],ref:x,style:_.value,role:"tablist",onKeydown:S},[e.type?null:d(Oe,{tabs:[...e.panes]},null),n])])])}}}),Ae=j({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number],default:""},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:F(Function),default:()=>!0},stretch:Boolean}),H=e=>ye(e)||me(e),Fe={[be]:e=>H(e),"tab-click":(e,b)=>b instanceof Event,"tab-change":e=>H(e),edit:(e,b)=>["remove","add"].includes(b),"tab-remove":e=>H(e),"tab-add":()=>!0};var Me=q({name:"ElTabs",props:Ae,emits:Fe,setup(e,{emit:b,slots:k,expose:g}){const a=K("tabs"),h=T(),P=ie({}),r=T(e.modelValue||e.activeName||"0"),x=t=>{r.value=t,b(be,t),b("tab-change",t)},v=async t=>{var o,_,z;if(r.value!==t)try{await((o=e.beforeLeave)==null?void 0:o.call(e,t,r.value))!==!1&&(x(t),(z=(_=h.value)==null?void 0:_.removeFocus)==null||z.call(_))}catch{}},c=(t,o,_)=>{t.props.disabled||(v(o),b("tab-click",t,_))},i=(t,o)=>{t.props.disabled||(o.stopPropagation(),b("edit",t.props.name,"remove"),b("tab-remove",t.props.name))},w=()=>{b("edit",void 0,"add"),b("tab-add")};return C(()=>e.activeName,t=>v(t)),C(()=>e.modelValue,t=>v(t)),C(r,async()=>{var t;(t=h.value)==null||t.scrollToActiveTab()}),Ne(U,{props:e,currentName:r,registerPane:_=>P[_.uid]=_,unregisterPane:_=>delete P[_]}),g({currentName:r}),()=>{const t=e.editable||e.addable?d("span",{class:a.e("new-tab"),tabindex:"0",onClick:w,onKeydown:z=>{z.code===V.enter&&w()}},[d(M,{class:a.is("icon-plus")},{default:()=>[d(ge,null,null)]})]):null,o=d("div",{class:[a.e("header"),a.is(e.tabPosition)]},[t,d(Le,{ref:h,currentName:r.value,editable:e.editable,type:e.type,panes:Object.values(P),stretch:e.stretch,onTabClick:c,onTabRemove:i},null)]),_=d("div",{class:a.e("content")},[ne(k,"default")]);return d("div",{class:[a.b(),a.m(e.tabPosition),{[a.m("card")]:e.type==="card",[a.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[o,_]:[_,o]])}}});const Ve=j({label:{type:String,default:""},name:{type:[String,Number],default:""},closable:Boolean,disabled:Boolean,lazy:Boolean}),De=["id","aria-hidden","aria-labelledby"],Ke={name:"ElTabPane"},je=q({...Ke,props:Ve,setup(e){const b=e,k="ElTabPane",g=Y(),a=Te(),h=X(U);h||W(k,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const P=K("tab-pane"),r=T(),x=D(()=>b.closable||h.props.closable),v=G(()=>h.currentName.value===(b.name||r.value)),c=T(v.value),i=D(()=>b.name||r.value),w=G(()=>!b.lazy||c.value||v.value);C(v,o=>{o&&(c.value=!0)});const t=ie({uid:g.uid,slots:a,props:b,paneName:i,active:v,index:r,isClosable:x});return oe(()=>{h.registerPane(t)}),Pe(()=>{h.unregisterPane(t.uid)}),(o,_)=>E(w)?ke((le(),se("div",{key:0,id:`pane-${E(i)}`,class:re(E(P).b()),role:"tabpanel","aria-hidden":!E(v),"aria-labelledby":`tab-${E(i)}`},[ne(o.$slots,"default")],10,De)),[[ze,E(v)]]):Ee("v-if",!0)}});var de=te(je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const Xe=Ce(Me,{TabPane:de}),Ye=Se(de);export{Ye as E,Xe as a};
