import{aS as M,ap as T,at as O}from"./index.78e2b5e2.js";import{i as W,q as F}from"./button.14e5f778.js";var R=/\s/;function N(e){for(var r=e.length;r--&&R.test(e.charAt(r)););return r}var $=/^\s+/;function z(e){return e&&e.slice(0,N(e)+1).replace($,"")}var w=0/0,D=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,U=/^0o[0-7]+$/i,j=parseInt;function C(e){if(typeof e=="number")return e;if(M(e))return w;if(T(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=T(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=z(e);var t=P.test(e);return t||U.test(e)?j(e.slice(2),t?2:8):D.test(e)?w:+e}var q=function(){return O.Date.now()},_=q,V="Expected a function",X=Math.max,G=Math.min;function Q(e,r,t){var o,i,s,l,a,c,f=0,m=!1,p=!1,b=!0;if(typeof e!="function")throw new TypeError(V);r=C(r)||0,T(t)&&(m=!!t.leading,p="maxWait"in t,s=p?X(C(t.maxWait)||0,r):s,b="trailing"in t?!!t.trailing:b);function h(n){var d=o,v=i;return o=i=void 0,f=n,l=e.apply(v,d),l}function g(n){return f=n,a=setTimeout(x,r),m?h(n):l}function L(n){var d=n-c,v=n-f,k=r-d;return p?G(k,s-v):k}function E(n){var d=n-c,v=n-f;return c===void 0||d>=r||d<0||p&&v>=s}function x(){var n=_();if(E(n))return I(n);a=setTimeout(x,L(n))}function I(n){return a=void 0,b&&o?h(n):(o=i=void 0,l)}function A(){a!==void 0&&clearTimeout(a),f=0,o=c=i=a=void 0}function B(){return a===void 0?l:I(_())}function y(){var n=_(),d=E(n);if(o=arguments,i=this,c=n,d){if(a===void 0)return g(c);if(p)return clearTimeout(a),a=setTimeout(x,r),h(c)}return a===void 0&&(a=setTimeout(x,r)),l}return y.cancel=A,y.flush=B,y}const u=new Map;let S;W&&(document.addEventListener("mousedown",e=>S=e),document.addEventListener("mouseup",e=>{for(const r of u.values())for(const{documentHandler:t}of r)t(e,S)}));function H(e,r){let t=[];return Array.isArray(r.arg)?t=r.arg:F(r.arg)&&t.push(r.arg),function(o,i){const s=r.instance.popperRef,l=o.target,a=i==null?void 0:i.target,c=!r||!r.instance,f=!l||!a,m=e.contains(l)||e.contains(a),p=e===l,b=t.length&&t.some(g=>g==null?void 0:g.contains(l))||t.length&&t.includes(a),h=s&&(s.contains(l)||s.contains(a));c||f||m||p||b||h||r.value(o,i)}}const Y={beforeMount(e,r){u.has(e)||u.set(e,[]),u.get(e).push({documentHandler:H(e,r),bindingFn:r.value})},updated(e,r){u.has(e)||u.set(e,[]);const t=u.get(e),o=t.findIndex(s=>s.bindingFn===r.oldValue),i={documentHandler:H(e,r),bindingFn:r.value};o>=0?t.splice(o,1,i):t.push(i)},unmounted(e){u.delete(e)}};export{Y as C,Q as d};
