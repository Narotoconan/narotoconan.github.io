import{ap as _e,aq as Mt,ar as tt,as as rt,at as Nt,au as Ie,av as nt,b as it,f as ce,aj as at,a3 as Rt,G as pe,r as B,v as E,d as Fe,a7 as ot,A as ee,p as st,z as lt,t as ft,ae as Oe,a as me,c as ut,e as X,n as U,u as j,V as dt,i as te,a1 as ge,o as ct,B as pt,X as Bt,Q as re,F as Ct,I as mt,s as Wt,aw as fe,w as ue,h as Vt,x as Le,j as zt,Y as Me,g as Ne,T as Dt,L as Ut,k as Re,m as Gt,q as Kt}from"./index.78e2b5e2.js";import{g as gt,u as Ae,A as Yt,_ as vt,t as Jt,o as Zt,x as Qt,B as Xt,n as Be}from"./button.14e5f778.js";import{i as ht,a as Ht,b as kt,o as er,k as yt,g as bt,s as tr,c as rr,d as nr,U as Ce,e as qe,n as ne,f as xt,h as ir,S as ar,j as or,l as sr}from"./input.0c03be6a.js";var We=Object.create,lr=function(){function r(){}return function(e){if(!_e(e))return{};if(We)return We(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),fr=lr;function ur(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function dr(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}function ie(r,e,t,n){var i=!t;t||(t={});for(var o=-1,a=e.length;++o<a;){var s=e[o],l=n?n(t[s],r[s],s,t,r):void 0;l===void 0&&(l=r[s]),i?Mt(t,s,l):tt(t,s,l)}return t}function cr(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var pr=Object.prototype,mr=pr.hasOwnProperty;function gr(r){if(!_e(r))return cr(r);var e=ht(r),t=[];for(var n in r)n=="constructor"&&(e||!mr.call(r,n))||t.push(n);return t}function je(r){return Ht(r)?kt(r,!0):gr(r)}var vr=er(Object.getPrototypeOf,Object),wt=vr;function ve(){if(!arguments.length)return[];var r=arguments[0];return rt(r)?r:[r]}function hr(r,e){return r&&ie(e,yt(e),r)}function yr(r,e){return r&&ie(e,je(e),r)}var _t=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ve=_t&&typeof module=="object"&&module&&!module.nodeType&&module,br=Ve&&Ve.exports===_t,ze=br?Nt.Buffer:void 0,De=ze?ze.allocUnsafe:void 0;function xr(r,e){if(e)return r.slice();var t=r.length,n=De?De(t):new r.constructor(t);return r.copy(n),n}function wr(r,e){return ie(r,bt(r),e)}var _r=Object.getOwnPropertySymbols,Fr=_r?function(r){for(var e=[];r;)rr(e,bt(r)),r=wt(r);return e}:tr,Ft=Fr;function Or(r,e){return ie(r,Ft(r),e)}function Ar(r){return nr(r,je,Ft)}var qr=Object.prototype,jr=qr.hasOwnProperty;function Er(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&jr.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function Ee(r){var e=new r.constructor(r.byteLength);return new Ce(e).set(new Ce(r)),e}function Tr(r,e){var t=e?Ee(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var Sr=/\w*$/;function Pr(r){var e=new r.constructor(r.source,Sr.exec(r));return e.lastIndex=r.lastIndex,e}var Ue=Ie?Ie.prototype:void 0,Ge=Ue?Ue.valueOf:void 0;function $r(r){return Ge?Object(Ge.call(r)):{}}function Ir(r,e){var t=e?Ee(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var Lr="[object Boolean]",Mr="[object Date]",Nr="[object Map]",Rr="[object Number]",Br="[object RegExp]",Cr="[object Set]",Wr="[object String]",Vr="[object Symbol]",zr="[object ArrayBuffer]",Dr="[object DataView]",Ur="[object Float32Array]",Gr="[object Float64Array]",Kr="[object Int8Array]",Yr="[object Int16Array]",Jr="[object Int32Array]",Zr="[object Uint8Array]",Qr="[object Uint8ClampedArray]",Xr="[object Uint16Array]",Hr="[object Uint32Array]";function kr(r,e,t){var n=r.constructor;switch(e){case zr:return Ee(r);case Lr:case Mr:return new n(+r);case Dr:return Tr(r,t);case Ur:case Gr:case Kr:case Yr:case Jr:case Zr:case Qr:case Xr:case Hr:return Ir(r,t);case Nr:return new n;case Rr:case Wr:return new n(r);case Br:return Pr(r);case Cr:return new n;case Vr:return $r(r)}}function en(r){return typeof r.constructor=="function"&&!ht(r)?fr(wt(r)):{}}var tn="[object Map]";function rn(r){return nt(r)&&qe(r)==tn}var Ke=ne&&ne.isMap,nn=Ke?xt(Ke):rn,an=nn,on="[object Set]";function sn(r){return nt(r)&&qe(r)==on}var Ye=ne&&ne.isSet,ln=Ye?xt(Ye):sn,fn=ln,un=1,dn=2,cn=4,Ot="[object Arguments]",pn="[object Array]",mn="[object Boolean]",gn="[object Date]",vn="[object Error]",At="[object Function]",hn="[object GeneratorFunction]",yn="[object Map]",bn="[object Number]",qt="[object Object]",xn="[object RegExp]",wn="[object Set]",_n="[object String]",Fn="[object Symbol]",On="[object WeakMap]",An="[object ArrayBuffer]",qn="[object DataView]",jn="[object Float32Array]",En="[object Float64Array]",Tn="[object Int8Array]",Sn="[object Int16Array]",Pn="[object Int32Array]",$n="[object Uint8Array]",In="[object Uint8ClampedArray]",Ln="[object Uint16Array]",Mn="[object Uint32Array]",w={};w[Ot]=w[pn]=w[An]=w[qn]=w[mn]=w[gn]=w[jn]=w[En]=w[Tn]=w[Sn]=w[Pn]=w[yn]=w[bn]=w[qt]=w[xn]=w[wn]=w[_n]=w[Fn]=w[$n]=w[In]=w[Ln]=w[Mn]=!0;w[vn]=w[At]=w[On]=!1;function H(r,e,t,n,i,o){var a,s=e&un,l=e&dn,x=e&cn;if(t&&(a=i?t(r,n,i,o):t(r)),a!==void 0)return a;if(!_e(r))return r;var c=rt(r);if(c){if(a=Er(r),!s)return ur(r,a)}else{var m=qe(r),b=m==At||m==hn;if(ir(r))return xr(r,s);if(m==qt||m==Ot||b&&!i){if(a=l||b?{}:en(r),!s)return l?Or(r,yr(a,r)):wr(r,hr(a,r))}else{if(!w[m])return i?r:{};a=kr(r,m,s)}}o||(o=new ar);var q=o.get(r);if(q)return q;o.set(r,a),fn(r)?r.forEach(function(g){a.add(H(g,e,t,g,r,o))}):an(r)&&r.forEach(function(g,f){a.set(f,H(g,e,t,f,r,o))});var A=x?l?Ar:or:l?je:yt,d=c?void 0:A(r);return dr(d||r,function(g,f){d&&(f=g,g=r[f]),tt(a,f,H(g,e,t,f,r,o))}),a}var Nn=4;function Je(r){return H(r,Nn)}const Rn=it({model:Object,rules:{type:ce(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:at},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Bn={validate:(r,e,t)=>(Rt(r)||pe(r))&&gt(e)&&pe(t)};function Cn(){const r=B([]),e=E(()=>{if(!r.value.length)return"0";const o=Math.max(...r.value);return o?`${o}px`:""});function t(o){return r.value.indexOf(o)}function n(o,a){if(o&&a){const s=t(a);r.value.splice(s,1,o)}else o&&r.value.push(o)}function i(o){const a=t(o);a>-1&&r.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const Z=(r,e)=>{const t=ve(e);return t.length>0?r.filter(n=>n.prop&&t.includes(n.prop)):r},Wn={name:"ElForm"},Vn=Fe({...Wn,props:Rn,emits:Bn,setup(r,{expose:e,emit:t}){const n=r,i=[],o=ot(),a=Ae("form"),s=E(()=>{const{labelPosition:v,inline:u}=n;return[a.b(),a.m(o.value||"default"),{[a.m(`label-${v}`)]:v,[a.m("inline")]:u}]}),l=v=>{i.push(v)},x=v=>{v.prop&&i.splice(i.indexOf(v),1)},c=(v=[])=>{!n.model||Z(i,v).forEach(u=>u.resetField())},m=(v=[])=>{Z(i,v).forEach(u=>u.clearValidate())},b=E(()=>!!n.model),q=v=>{if(i.length===0)return[];const u=Z(i,v);return u.length?u:[]},A=async v=>g(void 0,v),d=async(v=[])=>{if(!b.value)return!1;const u=q(v);if(u.length===0)return!0;let y={};for(const F of u)try{await F.validate("")}catch(O){y={...y,...O}}return Object.keys(y).length===0?!0:Promise.reject(y)},g=async(v=[],u)=>{const y=!dt(u);try{const F=await d(v);return F===!0&&(u==null||u(F)),F}catch(F){const O=F;return n.scrollToError&&f(Object.keys(O)[0]),u==null||u(!1,O),y&&Promise.reject(O)}},f=v=>{var u;const y=Z(i,v)[0];y&&((u=y.$el)==null||u.scrollIntoView())};return ee(()=>n.rules,()=>{n.validateOnRuleChange&&A().catch(v=>Yt())},{deep:!0}),st(Oe,lt({...ft(n),emit:t,resetFields:c,clearValidate:m,validateField:g,addField:l,removeField:x,...Cn()})),e({validate:A,validateField:g,resetFields:c,clearValidate:m,scrollToField:f}),(v,u)=>(me(),ut("form",{class:U(j(s))},[X(v.$slots,"default")],2))}});var zn=vt(Vn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function C(){return C=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},C.apply(this,arguments)}function Dn(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Y(r,e)}function he(r){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},he(r)}function Y(r,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Y(r,e)}function Un(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(r,e,t){return Un()?k=Reflect.construct.bind():k=function(i,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(i,s),x=new l;return a&&Y(x,a.prototype),x},k.apply(null,arguments)}function Gn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function ye(r){var e=typeof Map=="function"?new Map:void 0;return ye=function(n){if(n===null||!Gn(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e!="undefined"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return k(n,arguments,he(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Y(i,n)},ye(r)}var Kn=/%[sdj%]/g,Yn=function(){};typeof process!="undefined"&&process.env;function be(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function $(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,o=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(Kn,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return s}});return a}return r}function Jn(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function T(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||Jn(e)&&typeof r=="string"&&!r)}function Zn(r,e,t){var n=[],i=0,o=r.length;function a(s){n.push.apply(n,s||[]),i++,i===o&&t(n)}r.forEach(function(s){e(s,a)})}function Ze(r,e,t){var n=0,i=r.length;function o(a){if(a&&a.length){t(a);return}var s=n;n=n+1,s<i?e(r[s],o):t([])}o([])}function Qn(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var Qe=function(r){Dn(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(ye(Error));function Xn(r,e,t,n,i){if(e.first){var o=new Promise(function(b,q){var A=function(f){return n(f),f.length?q(new Qe(f,be(f))):b(i)},d=Qn(r);Ze(d,t,A)});return o.catch(function(b){return b}),o}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],s=Object.keys(r),l=s.length,x=0,c=[],m=new Promise(function(b,q){var A=function(g){if(c.push.apply(c,g),x++,x===l)return n(c),c.length?q(new Qe(c,be(c))):b(i)};s.length||(n(c),b(i)),s.forEach(function(d){var g=r[d];a.indexOf(d)!==-1?Ze(g,t,A):Zn(g,t,A)})});return m.catch(function(b){return b}),m}function Hn(r){return!!(r&&r.message!==void 0)}function kn(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Xe(r,e){return function(t){var n;return r.fullFields?n=kn(e,r.fullFields):n=e[t.field||r.fullField],Hn(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function He(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=C({},r[t],n):r[t]=n}}return r}var jt=function(e,t,n,i,o,a){e.required&&(!n.hasOwnProperty(e.field)||T(t,a||e.type))&&i.push($(o.messages.required,e.fullField))},ei=function(e,t,n,i,o){(/^\s+$/.test(t)||t==="")&&i.push($(o.messages.whitespace,e.fullField))},Q,ti=function(){if(Q)return Q;var r="[a-fA-F\\d:]",e=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),l=function(y){return y&&y.exact?o:new RegExp("(?:"+e(y)+t+e(y)+")|(?:"+e(y)+i+e(y)+")","g")};l.v4=function(u){return u&&u.exact?a:new RegExp(""+e(u)+t+e(u),"g")},l.v6=function(u){return u&&u.exact?s:new RegExp(""+e(u)+i+e(u),"g")};var x="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",m=l.v4().source,b=l.v6().source,q="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",A="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",g="(?::\\d{2,5})?",f='(?:[/?#][^\\s"]*)?',v="(?:"+x+"|www\\.)"+c+"(?:localhost|"+m+"|"+b+"|"+q+A+d+")"+g+f;return Q=new RegExp("(?:^"+v+"$)","i"),Q},ke={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},G={integer:function(e){return G.number(e)&&parseInt(e,10)===e},float:function(e){return G.number(e)&&!G.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!G.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(ke.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(ti())},hex:function(e){return typeof e=="string"&&!!e.match(ke.hex)}},ri=function(e,t,n,i,o){if(e.required&&t===void 0){jt(e,t,n,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?G[s](t)||i.push($(o.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&i.push($(o.messages.types[s],e.fullField,e.type))},ni=function(e,t,n,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",l=typeof e.max=="number",x=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=t,m=null,b=typeof t=="number",q=typeof t=="string",A=Array.isArray(t);if(b?m="number":q?m="string":A&&(m="array"),!m)return!1;A&&(c=t.length),q&&(c=t.replace(x,"_").length),a?c!==e.len&&i.push($(o.messages[m].len,e.fullField,e.len)):s&&!l&&c<e.min?i.push($(o.messages[m].min,e.fullField,e.min)):l&&!s&&c>e.max?i.push($(o.messages[m].max,e.fullField,e.max)):s&&l&&(c<e.min||c>e.max)&&i.push($(o.messages[m].range,e.fullField,e.min,e.max))},z="enum",ii=function(e,t,n,i,o){e[z]=Array.isArray(e[z])?e[z]:[],e[z].indexOf(t)===-1&&i.push($(o.messages[z],e.fullField,e[z].join(", ")))},ai=function(e,t,n,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push($(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push($(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},h={required:jt,whitespace:ei,type:ri,range:ni,enum:ii,pattern:ai},oi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t,"string")&&!e.required)return n();h.required(e,t,i,a,o,"string"),T(t,"string")||(h.type(e,t,i,a,o),h.range(e,t,i,a,o),h.pattern(e,t,i,a,o),e.whitespace===!0&&h.whitespace(e,t,i,a,o))}n(a)},si=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&h.type(e,t,i,a,o)}n(a)},li=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t===""&&(t=void 0),T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&(h.type(e,t,i,a,o),h.range(e,t,i,a,o))}n(a)},fi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&h.type(e,t,i,a,o)}n(a)},ui=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),T(t)||h.type(e,t,i,a,o)}n(a)},di=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&(h.type(e,t,i,a,o),h.range(e,t,i,a,o))}n(a)},ci=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&(h.type(e,t,i,a,o),h.range(e,t,i,a,o))}n(a)},pi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t==null&&!e.required)return n();h.required(e,t,i,a,o,"array"),t!=null&&(h.type(e,t,i,a,o),h.range(e,t,i,a,o))}n(a)},mi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&h.type(e,t,i,a,o)}n(a)},gi="enum",vi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o),t!==void 0&&h[gi](e,t,i,a,o)}n(a)},hi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t,"string")&&!e.required)return n();h.required(e,t,i,a,o),T(t,"string")||h.pattern(e,t,i,a,o)}n(a)},yi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t,"date")&&!e.required)return n();if(h.required(e,t,i,a,o),!T(t,"date")){var l;t instanceof Date?l=t:l=new Date(t),h.type(e,l,i,a,o),l&&h.range(e,l.getTime(),i,a,o)}}n(a)},bi=function(e,t,n,i,o){var a=[],s=Array.isArray(t)?"array":typeof t;h.required(e,t,i,a,o,s),n(a)},de=function(e,t,n,i,o){var a=e.type,s=[],l=e.required||!e.required&&i.hasOwnProperty(e.field);if(l){if(T(t,a)&&!e.required)return n();h.required(e,t,i,s,o,a),T(t,a)||h.type(e,t,i,s,o)}n(s)},xi=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(T(t)&&!e.required)return n();h.required(e,t,i,a,o)}n(a)},K={string:oi,method:si,number:li,boolean:fi,regexp:ui,integer:di,float:ci,array:pi,object:mi,enum:vi,pattern:hi,date:yi,url:de,hex:de,email:de,required:bi,any:xi};function xe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var we=xe(),J=function(){function r(t){this.rules=null,this._messages=we,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var a=n[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=He(xe(),n)),this._messages},e.validate=function(n,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=n,l=i,x=o;if(typeof l=="function"&&(x=l,l={}),!this.rules||Object.keys(this.rules).length===0)return x&&x(null,s),Promise.resolve(s);function c(d){var g=[],f={};function v(y){if(Array.isArray(y)){var F;g=(F=g).concat.apply(F,y)}else g.push(y)}for(var u=0;u<d.length;u++)v(d[u]);g.length?(f=be(g),x(g,f)):x(null,s)}if(l.messages){var m=this.messages();m===we&&(m=xe()),He(m,l.messages),l.messages=m}else l.messages=this.messages();var b={},q=l.keys||Object.keys(this.rules);q.forEach(function(d){var g=a.rules[d],f=s[d];g.forEach(function(v){var u=v;typeof u.transform=="function"&&(s===n&&(s=C({},s)),f=s[d]=u.transform(f)),typeof u=="function"?u={validator:u}:u=C({},u),u.validator=a.getValidationMethod(u),u.validator&&(u.field=d,u.fullField=u.fullField||d,u.type=a.getType(u),b[d]=b[d]||[],b[d].push({rule:u,value:f,source:s,field:d}))})});var A={};return Xn(b,l,function(d,g){var f=d.rule,v=(f.type==="object"||f.type==="array")&&(typeof f.fields=="object"||typeof f.defaultField=="object");v=v&&(f.required||!f.required&&d.value),f.field=d.field;function u(O,M){return C({},M,{fullField:f.fullField+"."+O,fullFields:f.fullFields?[].concat(f.fullFields,[O]):[O]})}function y(O){O===void 0&&(O=[]);var M=Array.isArray(O)?O:[O];!l.suppressWarning&&M.length&&r.warning("async-validator:",M),M.length&&f.message!==void 0&&(M=[].concat(f.message));var P=M.map(Xe(f,s));if(l.first&&P.length)return A[f.field]=1,g(P);if(!v)g(P);else{if(f.required&&!d.value)return f.message!==void 0?P=[].concat(f.message).map(Xe(f,s)):l.error&&(P=[l.error(f,$(l.messages.required,f.field))]),g(P);var R={};f.defaultField&&Object.keys(d.value).map(function(N){R[N]=f.defaultField}),R=C({},R,d.rule.fields);var D={};Object.keys(R).forEach(function(N){var I=R[N],ae=Array.isArray(I)?I:[I];D[N]=ae.map(u.bind(null,N))});var W=new r(D);W.messages(l.messages),d.rule.options&&(d.rule.options.messages=l.messages,d.rule.options.error=l.error),W.validate(d.value,d.rule.options||l,function(N){var I=[];P&&P.length&&I.push.apply(I,P),N&&N.length&&I.push.apply(I,N),g(I.length?I:null)})}}var F;if(f.asyncValidator)F=f.asyncValidator(f,d.value,y,d.source,l);else if(f.validator){try{F=f.validator(f,d.value,y,d.source,l)}catch(O){console.error==null||console.error(O),l.suppressValidatorError||setTimeout(function(){throw O},0),y(O.message)}F===!0?y():F===!1?y(typeof f.message=="function"?f.message(f.fullField||f.field):f.message||(f.fullField||f.field)+" fails"):F instanceof Array?y(F):F instanceof Error&&y(F.message)}F&&F.then&&F.then(function(){return y()},function(O){return y(O)})},function(d){c(d)},s)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!K.hasOwnProperty(n.type))throw new Error($("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?K.required:K[this.getType(n)]||void 0},r}();J.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");K[e]=t};J.warning=Yn;J.messages=we;J.validators=K;const wi=["","error","validating","success"],_i=it({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ce([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ce([Object,Array])},error:String,validateStatus:{type:String,values:wi},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:at}}),et="ElLabelWrap";var Fi=Fe({name:et,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(r,{slots:e}){const t=te(Oe,void 0);te(ge)||Jt(et,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Ae("form"),o=B(),a=B(0),s=()=>{var c;if((c=o.value)!=null&&c.firstElementChild){const m=window.getComputedStyle(o.value.firstElementChild).width;return Math.ceil(Number.parseFloat(m))}else return 0},l=(c="update")=>{mt(()=>{e.default&&r.isAutoWidth&&(c==="update"?a.value=s():c==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},x=()=>l("update");return ct(()=>{x()}),pt(()=>{l("remove")}),Bt(()=>x()),ee(a,(c,m)=>{r.updateAll&&(t==null||t.registerLabelWidth(c,m))}),Zt(E(()=>{var c,m;return(m=(c=o.value)==null?void 0:c.firstElementChild)!=null?m:null}),x),()=>{var c,m;if(!e)return null;const{isAutoWidth:b}=r;if(b){const q=t==null?void 0:t.autoLabelWidth,A={};if(q&&q!=="auto"){const d=Math.max(0,Number.parseInt(q,10)-a.value),g=t.labelPosition==="left"?"marginRight":"marginLeft";d&&(A[g]=`${d}px`)}return re("div",{ref:o,class:[i.be("item","label-wrap")],style:A},[(c=e.default)==null?void 0:c.call(e)])}else return re(Ct,{ref:o},[(m=e.default)==null?void 0:m.call(e)])}}});const Oi=["role","aria-labelledby"],Ai={name:"ElFormItem"},qi=Fe({...Ai,props:_i,setup(r,{expose:e}){const t=r,n=Wt(),i=te(Oe,void 0),o=te(ge,void 0),a=ot(void 0,{formItem:!1}),s=Ae("form-item"),l=Qt().value,x=B([]),c=B(""),m=Xt(c,100),b=B(""),q=B();let A,d=!1;const g=E(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=Be(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),f=E(()=>{if((i==null?void 0:i.labelPosition)==="top"||(i==null?void 0:i.inline))return{};if(!t.label&&!t.labelWidth&&R)return{};const p=Be(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return!t.label&&!n.label?{marginLeft:p}:{}}),v=E(()=>[s.b(),s.m(a.value),s.is("error",c.value==="error"),s.is("validating",c.value==="validating"),s.is("success",c.value==="success"),s.is("required",ae.value||t.required),s.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),{[s.m("feedback")]:i==null?void 0:i.statusIcon}]),u=E(()=>gt(t.inlineMessage)?t.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),y=E(()=>[s.e("error"),{[s.em("error","inline")]:u.value}]),F=E(()=>t.prop?pe(t.prop)?t.prop:t.prop.join("."):""),O=E(()=>!!(t.label||n.label)),M=E(()=>t.for||x.value.length===1?x.value[0]:void 0),P=E(()=>!M.value&&O.value),R=!!o,D=E(()=>{const p=i==null?void 0:i.model;if(!(!p||!t.prop))return fe(p,t.prop).value}),W=E(()=>{const p=t.rules?ve(t.rules):[],_=i==null?void 0:i.rules;if(_&&t.prop){const S=fe(_,t.prop).value;S&&p.push(...ve(S))}return t.required!==void 0&&p.push({required:!!t.required}),p}),N=E(()=>W.value.length>0),I=p=>W.value.filter(S=>!S.trigger||!p?!0:Array.isArray(S.trigger)?S.trigger.includes(p):S.trigger===p).map(({trigger:S,...L})=>L),ae=E(()=>W.value.some(p=>p.required===!0)),Tt=E(()=>{var p;return m.value==="error"&&t.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),Te=E(()=>`${t.label||""}${(i==null?void 0:i.labelSuffix)||""}`),V=p=>{c.value=p},St=p=>{var _,S;const{errors:L,fields:le}=p;(!L||!le)&&console.error(p),V("error"),b.value=L?(S=(_=L==null?void 0:L[0])==null?void 0:_.message)!=null?S:`${t.prop} is required`:"",i==null||i.emit("validate",t.prop,!1,b.value)},Pt=()=>{V("success"),i==null||i.emit("validate",t.prop,!0,"")},$t=async p=>{const _=F.value;return new J({[_]:p}).validate({[_]:D.value},{firstFields:!0}).then(()=>(Pt(),!0)).catch(L=>(St(L),Promise.reject(L)))},Se=async(p,_)=>{if(d)return d=!1,!1;const S=dt(_);if(!N.value)return _==null||_(!1),!1;const L=I(p);return L.length===0?(_==null||_(!0),!0):(V("validating"),$t(L).then(()=>(_==null||_(!0),!0)).catch(le=>{const{fields:$e}=le;return _==null||_(!1,$e),S?!1:Promise.reject($e)}))},oe=()=>{V(""),b.value=""},Pe=async()=>{const p=i==null?void 0:i.model;if(!p||!t.prop)return;const _=fe(p,t.prop);sr(_.value,A)||(d=!0),_.value=Je(A),await mt(),oe()},It=p=>{x.value.includes(p)||x.value.push(p)},Lt=p=>{x.value=x.value.filter(_=>_!==p)};ee(()=>t.error,p=>{b.value=p||"",V(p?"error":"")},{immediate:!0}),ee(()=>t.validateStatus,p=>V(p||""));const se=lt({...ft(t),$el:q,size:a,validateState:c,labelId:l,inputIds:x,isGroup:P,addInputId:It,removeInputId:Lt,resetField:Pe,clearValidate:oe,validate:Se});return st(ge,se),ct(()=>{t.prop&&(i==null||i.addField(se),A=Je(D.value))}),pt(()=>{i==null||i.removeField(se)}),e({size:a,validateMessage:b,validateState:c,validate:Se,clearValidate:oe,resetField:Pe}),(p,_)=>{var S;return me(),ut("div",{ref_key:"formItemRef",ref:q,class:U(j(v)),role:j(P)?"group":void 0,"aria-labelledby":j(P)?j(l):void 0},[re(j(Fi),{"is-auto-width":j(g).width==="auto","update-all":((S=j(i))==null?void 0:S.labelWidth)==="auto"},{default:ue(()=>[j(O)?(me(),Vt(zt(j(M)?"label":"div"),{key:0,id:j(l),for:j(M),class:U(j(s).e("label")),style:Le(j(g))},{default:ue(()=>[X(p.$slots,"label",{label:j(Te)},()=>[Ut(Re(j(Te)),1)])]),_:3},8,["id","for","class","style"])):Me("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),Ne("div",{class:U(j(s).e("content")),style:Le(j(f))},[X(p.$slots,"default"),re(Dt,{name:`${j(s).namespace.value}-zoom-in-top`},{default:ue(()=>[j(Tt)?X(p.$slots,"error",{key:0,error:b.value},()=>[Ne("div",{class:U(j(y))},Re(b.value),3)]):Me("v-if",!0)]),_:3},8,["name"])],6)],10,Oi)}}});var Et=vt(qi,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Si=Gt(zn,{FormItem:Et}),Pi=Kt(Et);export{Pi as E,Si as a,ve as c};
