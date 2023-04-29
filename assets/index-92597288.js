var CE=Object.defineProperty;var SE=(t,e,n)=>e in t?CE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ws=(t,e,n)=>(SE(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Qu(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Yu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=He(s)?NE(s):Yu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(He(t))return t;if(De(t))return t}}const bE=/;(?![^(]*\))/g,AE=/:([^]+)/,RE=/\/\*.*?\*\//gs;function NE(t){const e={};return t.replace(RE,"").split(bE).forEach(n=>{if(n){const s=n.split(AE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Xu(t){let e="";if(He(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=Xu(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",DE=Qu(kE);function Xg(t){return!!t||t===""}const Ya=t=>He(t)?t:t==null?"":Q(t)||De(t)&&(t.toString===tm||!X(t.toString))?JSON.stringify(t,Jg,2):String(t),Jg=(t,e)=>e&&e.__v_isRef?Jg(t,e.value):ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Zg(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Q(e)&&!nm(e)?String(e):e,Se={},ii=[],Yt=()=>{},OE=()=>!1,xE=/^on[^a-z]/,Xa=t=>xE.test(t),Ju=t=>t.startsWith("onUpdate:"),yt=Object.assign,Zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},PE=Object.prototype.hasOwnProperty,ce=(t,e)=>PE.call(t,e),Q=Array.isArray,ri=t=>Ja(t)==="[object Map]",Zg=t=>Ja(t)==="[object Set]",X=t=>typeof t=="function",He=t=>typeof t=="string",eh=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",em=t=>De(t)&&X(t.then)&&X(t.catch),tm=Object.prototype.toString,Ja=t=>tm.call(t),ME=t=>Ja(t).slice(8,-1),nm=t=>Ja(t)==="[object Object]",th=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xo=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Za=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},LE=/-(\w)/g,_n=Za(t=>t.replace(LE,(e,n)=>n?n.toUpperCase():"")),FE=/\B([A-Z])/g,Mi=Za(t=>t.replace(FE,"-$1").toLowerCase()),ec=Za(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qc=Za(t=>t?`on${ec(t)}`:""),Dr=(t,e)=>!Object.is(t,e),Jo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},aa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ml=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let td;const UE=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class sm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function im(t){return new sm(t)}function $E(t,e=Nt){e&&e.active&&e.effects.push(t)}function rm(){return Nt}function VE(t){Nt&&Nt.cleanups.push(t)}const nh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},om=t=>(t.w&es)>0,am=t=>(t.n&es)>0,BE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=es},jE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];om(i)&&!am(i)?i.delete(t):e[n++]=i,i.w&=~es,i.n&=~es}e.length=n}},ca=new WeakMap;let ar=0,es=1;const Ll=30;let zt;const Is=Symbol(""),Fl=Symbol("");class sh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$E(this,s)}run(){if(!this.active)return this.fn();let e=zt,n=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zt,zt=this,Gn=!0,es=1<<++ar,ar<=Ll?BE(this):nd(this),this.fn()}finally{ar<=Ll&&jE(this),es=1<<--ar,zt=this.parent,Gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zt===this?this.deferStop=!0:this.active&&(nd(this),this.onStop&&this.onStop(),this.active=!1)}}function nd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gn=!0;const cm=[];function Li(){cm.push(Gn),Gn=!1}function Fi(){const t=cm.pop();Gn=t===void 0?!0:t}function bt(t,e,n){if(Gn&&zt){let s=ca.get(t);s||ca.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=nh()),lm(i)}}function lm(t,e){let n=!1;ar<=Ll?am(t)||(t.n|=es,n=!om(t)):n=!t.has(zt),n&&(t.add(zt),zt.deps.push(t))}function On(t,e,n,s,i,r){const o=ca.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?th(n)&&a.push(o.get("length")):(a.push(o.get(Is)),ri(t)&&a.push(o.get(Fl)));break;case"delete":Q(t)||(a.push(o.get(Is)),ri(t)&&a.push(o.get(Fl)));break;case"set":ri(t)&&a.push(o.get(Is));break}if(a.length===1)a[0]&&Ul(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ul(nh(c))}}function Ul(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&sd(s);for(const s of n)s.computed||sd(s)}function sd(t,e){(t!==zt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function HE(t,e){var n;return(n=ca.get(t))===null||n===void 0?void 0:n.get(e)}const KE=Qu("__proto__,__v_isRef,__isVue"),um=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(eh)),zE=ih(),qE=ih(!1,!0),WE=ih(!0),id=GE();function GE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)bt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Li();const s=ue(this)[e].apply(this,n);return Fi(),s}}),t}function QE(t){const e=ue(this);return bt(e,"has",t),e.hasOwnProperty(t)}function ih(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?h0:gm:e?pm:dm).get(s))return s;const o=Q(s);if(!t){if(o&&ce(id,i))return Reflect.get(id,i,r);if(i==="hasOwnProperty")return QE}const a=Reflect.get(s,i,r);return(eh(i)?um.has(i):KE(i))||(t||bt(s,"get",i),e)?a:Ge(a)?o&&th(i)?a:a.value:De(a)?t?mm(a):eo(a):a}}const YE=hm(),XE=hm(!0);function hm(t=!1){return function(n,s,i,r){let o=n[s];if(_i(o)&&Ge(o)&&!Ge(i))return!1;if(!t&&(!la(i)&&!_i(i)&&(o=ue(o),i=ue(i)),!Q(n)&&Ge(o)&&!Ge(i)))return o.value=i,!0;const a=Q(n)&&th(s)?Number(s)<n.length:ce(n,s),c=Reflect.set(n,s,i,r);return n===ue(r)&&(a?Dr(i,o)&&On(n,"set",s,i):On(n,"add",s,i)),c}}function JE(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&On(t,"delete",e,void 0),s}function ZE(t,e){const n=Reflect.has(t,e);return(!eh(e)||!um.has(e))&&bt(t,"has",e),n}function e0(t){return bt(t,"iterate",Q(t)?"length":Is),Reflect.ownKeys(t)}const fm={get:zE,set:YE,deleteProperty:JE,has:ZE,ownKeys:e0},t0={get:WE,set(t,e){return!0},deleteProperty(t,e){return!0}},n0=yt({},fm,{get:qE,set:XE}),rh=t=>t,tc=t=>Reflect.getPrototypeOf(t);function ko(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&bt(i,"get",e),bt(i,"get",r));const{has:o}=tc(i),a=s?rh:n?ch:Or;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Do(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&bt(s,"has",t),bt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Oo(t,e=!1){return t=t.__v_raw,!e&&bt(ue(t),"iterate",Is),Reflect.get(t,"size",t)}function rd(t){t=ue(t);const e=ue(this);return tc(e).has.call(e,t)||(e.add(t),On(e,"add",t,t)),this}function od(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=tc(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Dr(e,o)&&On(n,"set",t,e):On(n,"add",t,e),this}function ad(t){const e=ue(this),{has:n,get:s}=tc(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&On(e,"delete",t,void 0),r}function cd(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&On(t,"clear",void 0,void 0),n}function xo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),c=e?rh:t?ch:Or;return!t&&bt(a,"iterate",Is),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Po(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=ri(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?rh:e?ch:Or;return!e&&bt(r,"iterate",c?Fl:Is),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){return t==="delete"?!1:this}}function s0(){const t={get(r){return ko(this,r)},get size(){return Oo(this)},has:Do,add:rd,set:od,delete:ad,clear:cd,forEach:xo(!1,!1)},e={get(r){return ko(this,r,!1,!0)},get size(){return Oo(this)},has:Do,add:rd,set:od,delete:ad,clear:cd,forEach:xo(!1,!0)},n={get(r){return ko(this,r,!0)},get size(){return Oo(this,!0)},has(r){return Do.call(this,r,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:xo(!0,!1)},s={get(r){return ko(this,r,!0,!0)},get size(){return Oo(this,!0)},has(r){return Do.call(this,r,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Po(r,!1,!1),n[r]=Po(r,!0,!1),e[r]=Po(r,!1,!0),s[r]=Po(r,!0,!0)}),[t,n,e,s]}const[i0,r0,o0,a0]=s0();function oh(t,e){const n=e?t?a0:o0:t?r0:i0;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const c0={get:oh(!1,!1)},l0={get:oh(!1,!0)},u0={get:oh(!0,!1)},dm=new WeakMap,pm=new WeakMap,gm=new WeakMap,h0=new WeakMap;function f0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d0(t){return t.__v_skip||!Object.isExtensible(t)?0:f0(ME(t))}function eo(t){return _i(t)?t:ah(t,!1,fm,c0,dm)}function p0(t){return ah(t,!1,n0,l0,pm)}function mm(t){return ah(t,!0,t0,u0,gm)}function ah(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=d0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function oi(t){return _i(t)?oi(t.__v_raw):!!(t&&t.__v_isReactive)}function _i(t){return!!(t&&t.__v_isReadonly)}function la(t){return!!(t&&t.__v_isShallow)}function _m(t){return oi(t)||_i(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function ym(t){return aa(t,"__v_skip",!0),t}const Or=t=>De(t)?eo(t):t,ch=t=>De(t)?mm(t):t;function vm(t){Gn&&zt&&(t=ue(t),lm(t.dep||(t.dep=nh())))}function wm(t,e){t=ue(t);const n=t.dep;n&&Ul(n)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function pr(t){return Tm(t,!1)}function Em(t){return Tm(t,!0)}function Tm(t,e){return Ge(t)?t:new g0(t,e)}class g0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Or(e)}get value(){return vm(this),this._value}set value(e){const n=this.__v_isShallow||la(e)||_i(e);e=n?e:ue(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Or(e),wm(this))}}function pt(t){return Ge(t)?t.value:t}const m0={get:(t,e,n)=>pt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Im(t){return oi(t)?t:new Proxy(t,m0)}class _0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return HE(ue(this._object),this._key)}}function y0(t,e,n){const s=t[e];return Ge(s)?s:new _0(t,e,n)}var Cm;class v0{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Cm]=!1,this._dirty=!0,this.effect=new sh(e,()=>{this._dirty||(this._dirty=!0,wm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return vm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Cm="__v_isReadonly";function w0(t,e,n=!1){let s,i;const r=X(t);return r?(s=t,i=Yt):(s=t.get,i=t.set),new v0(s,i,r||!i,n)}function Qn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){nc(r,e,n)}return i}function Xt(t,e,n,s){if(X(t)){const r=Qn(t,e,n,s);return r&&em(r)&&r.catch(o=>{nc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Xt(t[r],e,n,s));return i}function nc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Qn(c,null,10,[t,o,a]);return}}E0(t,n,i,s)}function E0(t,e,n,s=!0){console.error(t)}let xr=!1,$l=!1;const ot=[];let un=0;const ai=[];let bn=null,gs=0;const Sm=Promise.resolve();let lh=null;function bm(t){const e=lh||Sm;return t?e.then(this?t.bind(this):t):e}function T0(t){let e=un+1,n=ot.length;for(;e<n;){const s=e+n>>>1;Pr(ot[s])<t?e=s+1:n=s}return e}function uh(t){(!ot.length||!ot.includes(t,xr&&t.allowRecurse?un+1:un))&&(t.id==null?ot.push(t):ot.splice(T0(t.id),0,t),Am())}function Am(){!xr&&!$l&&($l=!0,lh=Sm.then(Nm))}function I0(t){const e=ot.indexOf(t);e>un&&ot.splice(e,1)}function C0(t){Q(t)?ai.push(...t):(!bn||!bn.includes(t,t.allowRecurse?gs+1:gs))&&ai.push(t),Am()}function ld(t,e=xr?un+1:0){for(;e<ot.length;e++){const n=ot[e];n&&n.pre&&(ot.splice(e,1),e--,n())}}function Rm(t){if(ai.length){const e=[...new Set(ai)];if(ai.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((n,s)=>Pr(n)-Pr(s)),gs=0;gs<bn.length;gs++)bn[gs]();bn=null,gs=0}}const Pr=t=>t.id==null?1/0:t.id,S0=(t,e)=>{const n=Pr(t)-Pr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nm(t){$l=!1,xr=!0,ot.sort(S0);const e=Yt;try{for(un=0;un<ot.length;un++){const n=ot[un];n&&n.active!==!1&&Qn(n,null,14)}}finally{un=0,ot.length=0,Rm(),xr=!1,lh=null,(ot.length||ai.length)&&Nm()}}function b0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(i=n.map(p=>He(p)?p.trim():p)),h&&(i=n.map(Ml))}let a,c=s[a=Qc(e)]||s[a=Qc(_n(e))];!c&&r&&(c=s[a=Qc(Mi(e))]),c&&Xt(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(l,t,6,i)}}function km(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=km(l,e,!0);u&&(a=!0,yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(De(t)&&s.set(t,null),null):(Q(r)?r.forEach(c=>o[c]=null):yt(o,r),De(t)&&s.set(t,o),o)}function sc(t,e){return!t||!Xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Mi(e))||ce(t,e))}let kt=null,ic=null;function ua(t){const e=kt;return kt=t,ic=t&&t.type.__scopeId||null,e}function to(t){ic=t}function no(){ic=null}function Cs(t,e=kt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yd(-1);const r=ua(e);let o;try{o=t(...i)}finally{ua(r),s._d&&yd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Yc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,T;const N=ua(t);try{if(n.shapeFlag&4){const M=i||s;v=ln(u.call(M,M,h,r,p,f,m)),T=c}else{const M=e;v=ln(M.length>1?M(r,{attrs:c,slots:a,emit:l}):M(r,null)),T=e.props?c:A0(c)}}catch(M){_r.length=0,nc(M,t,1),v=we(Mr)}let E=v;if(T&&_!==!1){const M=Object.keys(T),{shapeFlag:J}=E;M.length&&J&7&&(o&&M.some(Ju)&&(T=R0(T,o)),E=yi(E,T))}return n.dirs&&(E=yi(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,ua(N),v}const A0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xa(n))&&((e||(e={}))[n]=t[n]);return e},R0=(t,e)=>{const n={};for(const s in t)(!Ju(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function N0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ud(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!sc(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ud(s,o,l):!0:!!o;return!1}function ud(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!sc(n,r))return!0}return!1}function k0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const D0=t=>t.__isSuspense;function O0(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):C0(t)}function Zo(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Jt(t,e,n=!1){const s=Me||kt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const Mo={};function gr(t,e,n){return Dm(t,e,n)}function Dm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=rm()===(Me==null?void 0:Me.scope)?Me:null;let c,l=!1,u=!1;if(Ge(t)?(c=()=>t.value,l=la(t)):oi(t)?(c=()=>t,s=!0):Q(t)?(u=!0,l=t.some(E=>oi(E)||la(E)),c=()=>t.map(E=>{if(Ge(E))return E.value;if(oi(E))return _s(E);if(X(E))return Qn(E,a,2)})):X(t)?e?c=()=>Qn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Xt(t,a,3,[f])}:c=Yt,e&&s){const E=c;c=()=>_s(E())}let h,f=E=>{h=T.onStop=()=>{Qn(E,a,4)}},p;if(Fr)if(f=Yt,e?n&&Xt(e,a,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const E=bT();p=E.__watcherHandles||(E.__watcherHandles=[])}else return Yt;let m=u?new Array(t.length).fill(Mo):Mo;const _=()=>{if(T.active)if(e){const E=T.run();(s||l||(u?E.some((M,J)=>Dr(M,m[J])):Dr(E,m)))&&(h&&h(),Xt(e,a,3,[E,m===Mo?void 0:u&&m[0]===Mo?[]:m,f]),m=E)}else T.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>Et(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>uh(_));const T=new sh(c,v);e?n?_():m=T.run():i==="post"?Et(T.run.bind(T),a&&a.suspense):T.run();const N=()=>{T.stop(),a&&a.scope&&Zu(a.scope.effects,T)};return p&&p.push(N),N}function x0(t,e,n){const s=this.proxy,i=He(t)?t.includes(".")?Om(s,t):()=>s[t]:t.bind(s,s);let r;X(e)?r=e:(r=e.handler,n=e);const o=Me;vi(this);const a=Dm(i,r.bind(s),n);return o?vi(o):Ss(),a}function Om(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function _s(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))_s(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)_s(t[n],e);else if(Zg(t)||ri(t))t.forEach(n=>{_s(n,e)});else if(nm(t))for(const n in t)_s(t[n],e);return t}function sn(t){return X(t)?{setup:t,name:t.name}:t}const ea=t=>!!t.type.__asyncLoader,xm=t=>t.type.__isKeepAlive;function P0(t,e){Pm(t,"a",e)}function M0(t,e){Pm(t,"da",e)}function Pm(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(rc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)xm(i.parent.vnode)&&L0(s,e,n,i),i=i.parent}}function L0(t,e,n,s){const i=rc(e,t,s,!0);Mm(()=>{Zu(s[e],i)},n)}function rc(t,e,n=Me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Li(),vi(n);const a=Xt(e,n,t,o);return Ss(),Fi(),a});return s?i.unshift(r):i.push(r),r}}const Fn=t=>(e,n=Me)=>(!Fr||t==="sp")&&rc(t,(...s)=>e(...s),n),F0=Fn("bm"),U0=Fn("m"),$0=Fn("bu"),V0=Fn("u"),B0=Fn("bum"),Mm=Fn("um"),Lm=Fn("sp"),j0=Fn("rtg"),H0=Fn("rtc");function K0(t,e=Me){rc("ec",t,e)}function z0(t,e){const n=kt;if(n===null)return t;const s=cc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=Se]=e[r];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&_s(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function us(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Li(),Xt(c,n,8,[t.el,a,t,e]),Fi())}}const Fm="components";function Ct(t,e){return W0(Fm,t,!0,e)||t}const q0=Symbol();function W0(t,e,n=!0,s=!1){const i=kt||Me;if(i){const r=i.type;if(t===Fm){const a=CT(r,!1);if(a&&(a===e||a===_n(e)||a===ec(_n(e))))return r}const o=hd(i[t]||r[t],e)||hd(i.appContext[t],e);return!o&&s?r:o}}function hd(t,e){return t&&(t[e]||t[_n(e)]||t[ec(_n(e))])}function G0(t,e,n,s){let i;const r=n&&n[s];if(Q(t)||He(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Vl=t=>t?Gm(t)?cc(t)||t.proxy:Vl(t.parent):null,mr=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vl(t.parent),$root:t=>Vl(t.root),$emit:t=>t.emit,$options:t=>hh(t),$forceUpdate:t=>t.f||(t.f=()=>uh(t.update)),$nextTick:t=>t.n||(t.n=bm.bind(t.proxy)),$watch:t=>x0.bind(t)}),Xc=(t,e)=>t!==Se&&!t.__isScriptSetup&&ce(t,e),Q0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xc(s,e))return o[e]=1,s[e];if(i!==Se&&ce(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,r[e];if(n!==Se&&ce(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=mr[e];let h,f;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ce(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xc(i,e)?(i[e]=n,!0):s!==Se&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&ce(t,o)||Xc(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(mr,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Bl=!0;function Y0(t){const e=hh(t),n=t.proxy,s=t.ctx;Bl=!1,e.beforeCreate&&fd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:T,beforeUnmount:N,destroyed:E,unmounted:M,render:J,renderTracked:oe,renderTriggered:Ee,errorCaptured:ve,serverPrefetch:Mt,expose:vt,inheritAttrs:Vn,components:on,directives:Ks,filters:cs}=e;if(l&&X0(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const me=o[Te];X(me)&&(s[Te]=me.bind(n))}if(i){const Te=i.call(n,n);De(Te)&&(t.data=eo(Te))}if(Bl=!0,r)for(const Te in r){const me=r[Te],jt=X(me)?me.bind(n,n):X(me.get)?me.get.bind(n,n):Yt,ls=!X(me)&&X(me.set)?me.set.bind(n):Yt,Ht=Ft({get:jt,set:ls});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:wt=>Ht.value=wt})}if(a)for(const Te in a)Um(a[Te],s,n,Te);if(c){const Te=X(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(me=>{Zo(me,Te[me])})}u&&fd(u,t,"c");function Le(Te,me){Q(me)?me.forEach(jt=>Te(jt.bind(n))):me&&Te(me.bind(n))}if(Le(F0,h),Le(U0,f),Le($0,p),Le(V0,m),Le(P0,_),Le(M0,v),Le(K0,ve),Le(H0,oe),Le(j0,Ee),Le(B0,N),Le(Mm,M),Le(Lm,Mt),Q(vt))if(vt.length){const Te=t.exposed||(t.exposed={});vt.forEach(me=>{Object.defineProperty(Te,me,{get:()=>n[me],set:jt=>n[me]=jt})})}else t.exposed||(t.exposed={});J&&t.render===Yt&&(t.render=J),Vn!=null&&(t.inheritAttrs=Vn),on&&(t.components=on),Ks&&(t.directives=Ks)}function X0(t,e,n=Yt,s=!1){Q(t)&&(t=jl(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=Jt(r.from||i,r.default,!0):o=Jt(r.from||i):o=Jt(r),Ge(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function fd(t,e,n){Xt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Um(t,e,n,s){const i=s.includes(".")?Om(n,s):()=>n[s];if(He(t)){const r=e[t];X(r)&&gr(i,r)}else if(X(t))gr(i,t.bind(n));else if(De(t))if(Q(t))t.forEach(r=>Um(r,e,n,s));else{const r=X(t.handler)?t.handler.bind(n):e[t.handler];X(r)&&gr(i,r,t)}}function hh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>ha(c,l,o,!0)),ha(c,e,o)),De(e)&&r.set(e,c),c}function ha(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ha(t,r,n,!0),i&&i.forEach(o=>ha(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=J0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const J0={data:dd,props:fs,emits:fs,methods:fs,computed:fs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:fs,directives:fs,watch:eT,provide:dd,inject:Z0};function dd(t,e){return e?t?function(){return yt(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Z0(t,e){return fs(jl(t),jl(e))}function jl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function fs(t,e){return t?yt(yt(Object.create(null),t),e):e}function eT(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function tT(t,e,n,s=!1){const i={},r={};aa(r,ac,1),t.propsDefaults=Object.create(null),$m(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:p0(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function nT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(sc(t.emitsOptions,f))continue;const p=e[f];if(c)if(ce(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const m=_n(f);i[m]=Hl(c,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{$m(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=Mi(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hl(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ce(e,h))&&(delete r[h],l=!0)}l&&On(t,"set","$attrs")}function $m(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xo(c))continue;const l=e[c];let u;i&&ce(i,u=_n(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:sc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ue(n),l=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Hl(i,c,h,l[h],t,!ce(l,h))}}return o}function Hl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(vi(i),s=l[n]=c.call(null,e),Ss())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Mi(n))&&(s=!0))}return s}function Vm(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,p]=Vm(h,e,!0);yt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return De(t)&&s.set(t,ii),ii;if(Q(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);pd(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=_n(u);if(pd(h)){const f=r[u],p=o[h]=Q(f)||X(f)?{type:f}:Object.assign({},f);if(p){const m=_d(Boolean,p.type),_=_d(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||ce(p,"default"))&&a.push(h)}}}const l=[o,a];return De(t)&&s.set(t,l),l}function pd(t){return t[0]!=="$"}function gd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function md(t,e){return gd(t)===gd(e)}function _d(t,e){return Q(e)?e.findIndex(n=>md(n,t)):X(e)&&md(e,t)?0:-1}const Bm=t=>t[0]==="_"||t==="$stable",fh=t=>Q(t)?t.map(ln):[ln(t)],sT=(t,e,n)=>{if(e._n)return e;const s=Cs((...i)=>fh(e(...i)),n);return s._c=!1,s},jm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Bm(i))continue;const r=t[i];if(X(r))e[i]=sT(i,r,s);else if(r!=null){const o=fh(r);e[i]=()=>o}}},Hm=(t,e)=>{const n=fh(e);t.slots.default=()=>n},iT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),aa(e,"_",n)):jm(e,t.slots={})}else t.slots={},e&&Hm(t,e);aa(t.slots,ac,1)},rT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(yt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,jm(e,i)),o=e}else e&&(Hm(t,e),o={default:1});if(r)for(const a in i)!Bm(a)&&!(a in o)&&delete i[a]};function Km(){return{app:null,config:{isNativeTag:OE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oT=0;function aT(t,e){return function(s,i=null){X(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=Km(),o=new Set;let a=!1;const c=r.app={_uid:oT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:AT,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=we(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,cc(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c}};return c}}function Kl(t,e,n,s,i=!1){if(Q(t)){t.forEach((f,p)=>Kl(f,e&&(Q(e)?e[p]:e),n,s,i));return}if(ea(s)&&!i)return;const r=s.shapeFlag&4?cc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),X(c))Qn(c,a,12,[o,u]);else{const f=He(c),p=Ge(c);if(f||p){const m=()=>{if(t.f){const _=f?ce(h,c)?h[c]:u[c]:c.value;i?Q(_)&&Zu(_,r):Q(_)?_.includes(r)||_.push(r):f?(u[c]=[r],ce(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ce(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Et(m,n)):m()}}}const Et=O0;function cT(t){return lT(t)}function lT(t,e){const n=UE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Yt,insertStaticContent:m}=t,_=(d,g,y,w=null,C=null,k=null,L=!1,R=null,D=!!g.dynamicChildren)=>{if(d===g)return;d&&!Ji(d,g)&&(w=x(d),wt(d,C,k,!0),d=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:b,ref:B,shapeFlag:U}=g;switch(b){case oc:v(d,g,y,w);break;case Mr:T(d,g,y,w);break;case Jc:d==null&&N(g,y,w,L);break;case Lt:on(d,g,y,w,C,k,L,R,D);break;default:U&1?J(d,g,y,w,C,k,L,R,D):U&6?Ks(d,g,y,w,C,k,L,R,D):(U&64||U&128)&&b.process(d,g,y,w,C,k,L,R,D,ae)}B!=null&&C&&Kl(B,d&&d.ref,k,g||d,!g)},v=(d,g,y,w)=>{if(d==null)s(g.el=a(g.children),y,w);else{const C=g.el=d.el;g.children!==d.children&&l(C,g.children)}},T=(d,g,y,w)=>{d==null?s(g.el=c(g.children||""),y,w):g.el=d.el},N=(d,g,y,w)=>{[d.el,d.anchor]=m(d.children,g,y,w,d.el,d.anchor)},E=({el:d,anchor:g},y,w)=>{let C;for(;d&&d!==g;)C=f(d),s(d,y,w),d=C;s(g,y,w)},M=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),i(d),d=y;i(g)},J=(d,g,y,w,C,k,L,R,D)=>{L=L||g.type==="svg",d==null?oe(g,y,w,C,k,L,R,D):Mt(d,g,C,k,L,R,D)},oe=(d,g,y,w,C,k,L,R)=>{let D,b;const{type:B,props:U,shapeFlag:j,transition:W,dirs:ee}=d;if(D=d.el=o(d.type,k,U&&U.is,U),j&8?u(D,d.children):j&16&&ve(d.children,D,null,w,C,k&&B!=="foreignObject",L,R),ee&&us(d,null,w,"created"),Ee(D,d,d.scopeId,L,w),U){for(const _e in U)_e!=="value"&&!Xo(_e)&&r(D,_e,null,U[_e],k,d.children,w,C,F);"value"in U&&r(D,"value",null,U.value),(b=U.onVnodeBeforeMount)&&cn(b,w,d)}ee&&us(d,null,w,"beforeMount");const Ie=(!C||C&&!C.pendingBranch)&&W&&!W.persisted;Ie&&W.beforeEnter(D),s(D,g,y),((b=U&&U.onVnodeMounted)||Ie||ee)&&Et(()=>{b&&cn(b,w,d),Ie&&W.enter(D),ee&&us(d,null,w,"mounted")},C)},Ee=(d,g,y,w,C)=>{if(y&&p(d,y),w)for(let k=0;k<w.length;k++)p(d,w[k]);if(C){let k=C.subTree;if(g===k){const L=C.vnode;Ee(d,L,L.scopeId,L.slotScopeIds,C.parent)}}},ve=(d,g,y,w,C,k,L,R,D=0)=>{for(let b=D;b<d.length;b++){const B=d[b]=R?Kn(d[b]):ln(d[b]);_(null,B,g,y,w,C,k,L,R)}},Mt=(d,g,y,w,C,k,L)=>{const R=g.el=d.el;let{patchFlag:D,dynamicChildren:b,dirs:B}=g;D|=d.patchFlag&16;const U=d.props||Se,j=g.props||Se;let W;y&&hs(y,!1),(W=j.onVnodeBeforeUpdate)&&cn(W,y,g,d),B&&us(g,d,y,"beforeUpdate"),y&&hs(y,!0);const ee=C&&g.type!=="foreignObject";if(b?vt(d.dynamicChildren,b,R,y,w,ee,k):L||me(d,g,R,null,y,w,ee,k,!1),D>0){if(D&16)Vn(R,g,U,j,y,w,C);else if(D&2&&U.class!==j.class&&r(R,"class",null,j.class,C),D&4&&r(R,"style",U.style,j.style,C),D&8){const Ie=g.dynamicProps;for(let _e=0;_e<Ie.length;_e++){const Fe=Ie[_e],Kt=U[Fe],qs=j[Fe];(qs!==Kt||Fe==="value")&&r(R,Fe,Kt,qs,C,d.children,y,w,F)}}D&1&&d.children!==g.children&&u(R,g.children)}else!L&&b==null&&Vn(R,g,U,j,y,w,C);((W=j.onVnodeUpdated)||B)&&Et(()=>{W&&cn(W,y,g,d),B&&us(g,d,y,"updated")},w)},vt=(d,g,y,w,C,k,L)=>{for(let R=0;R<g.length;R++){const D=d[R],b=g[R],B=D.el&&(D.type===Lt||!Ji(D,b)||D.shapeFlag&70)?h(D.el):y;_(D,b,B,null,w,C,k,L,!0)}},Vn=(d,g,y,w,C,k,L)=>{if(y!==w){if(y!==Se)for(const R in y)!Xo(R)&&!(R in w)&&r(d,R,y[R],null,L,g.children,C,k,F);for(const R in w){if(Xo(R))continue;const D=w[R],b=y[R];D!==b&&R!=="value"&&r(d,R,b,D,L,g.children,C,k,F)}"value"in w&&r(d,"value",y.value,w.value)}},on=(d,g,y,w,C,k,L,R,D)=>{const b=g.el=d?d.el:a(""),B=g.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:W}=g;W&&(R=R?R.concat(W):W),d==null?(s(b,y,w),s(B,y,w),ve(g.children,y,B,C,k,L,R,D)):U>0&&U&64&&j&&d.dynamicChildren?(vt(d.dynamicChildren,j,y,C,k,L,R),(g.key!=null||C&&g===C.subTree)&&zm(d,g,!0)):me(d,g,y,B,C,k,L,R,D)},Ks=(d,g,y,w,C,k,L,R,D)=>{g.slotScopeIds=R,d==null?g.shapeFlag&512?C.ctx.activate(g,y,w,L,D):cs(g,y,w,C,k,L,D):Yi(d,g,D)},cs=(d,g,y,w,C,k,L)=>{const R=d.component=vT(d,w,C);if(xm(d)&&(R.ctx.renderer=ae),wT(R),R.asyncDep){if(C&&C.registerDep(R,Le),!d.el){const D=R.subTree=we(Mr);T(null,D,g,y)}return}Le(R,d,g,y,C,k,L)},Yi=(d,g,y)=>{const w=g.component=d.component;if(N0(d,g,y))if(w.asyncDep&&!w.asyncResolved){Te(w,g,y);return}else w.next=g,I0(w.update),w.update();else g.el=d.el,w.vnode=g},Le=(d,g,y,w,C,k,L)=>{const R=()=>{if(d.isMounted){let{next:B,bu:U,u:j,parent:W,vnode:ee}=d,Ie=B,_e;hs(d,!1),B?(B.el=ee.el,Te(d,B,L)):B=ee,U&&Jo(U),(_e=B.props&&B.props.onVnodeBeforeUpdate)&&cn(_e,W,B,ee),hs(d,!0);const Fe=Yc(d),Kt=d.subTree;d.subTree=Fe,_(Kt,Fe,h(Kt.el),x(Kt),d,C,k),B.el=Fe.el,Ie===null&&k0(d,Fe.el),j&&Et(j,C),(_e=B.props&&B.props.onVnodeUpdated)&&Et(()=>cn(_e,W,B,ee),C)}else{let B;const{el:U,props:j}=g,{bm:W,m:ee,parent:Ie}=d,_e=ea(g);if(hs(d,!1),W&&Jo(W),!_e&&(B=j&&j.onVnodeBeforeMount)&&cn(B,Ie,g),hs(d,!0),U&&Z){const Fe=()=>{d.subTree=Yc(d),Z(U,d.subTree,d,C,null)};_e?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Fe()):Fe()}else{const Fe=d.subTree=Yc(d);_(null,Fe,y,w,d,C,k),g.el=Fe.el}if(ee&&Et(ee,C),!_e&&(B=j&&j.onVnodeMounted)){const Fe=g;Et(()=>cn(B,Ie,Fe),C)}(g.shapeFlag&256||Ie&&ea(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&d.a&&Et(d.a,C),d.isMounted=!0,g=y=w=null}},D=d.effect=new sh(R,()=>uh(b),d.scope),b=d.update=()=>D.run();b.id=d.uid,hs(d,!0),b()},Te=(d,g,y)=>{g.component=d;const w=d.vnode.props;d.vnode=g,d.next=null,nT(d,g.props,w,y),rT(d,g.children,y),Li(),ld(),Fi()},me=(d,g,y,w,C,k,L,R,D=!1)=>{const b=d&&d.children,B=d?d.shapeFlag:0,U=g.children,{patchFlag:j,shapeFlag:W}=g;if(j>0){if(j&128){ls(b,U,y,w,C,k,L,R,D);return}else if(j&256){jt(b,U,y,w,C,k,L,R,D);return}}W&8?(B&16&&F(b,C,k),U!==b&&u(y,U)):B&16?W&16?ls(b,U,y,w,C,k,L,R,D):F(b,C,k,!0):(B&8&&u(y,""),W&16&&ve(U,y,w,C,k,L,R,D))},jt=(d,g,y,w,C,k,L,R,D)=>{d=d||ii,g=g||ii;const b=d.length,B=g.length,U=Math.min(b,B);let j;for(j=0;j<U;j++){const W=g[j]=D?Kn(g[j]):ln(g[j]);_(d[j],W,y,null,C,k,L,R,D)}b>B?F(d,C,k,!0,!1,U):ve(g,y,w,C,k,L,R,D,U)},ls=(d,g,y,w,C,k,L,R,D)=>{let b=0;const B=g.length;let U=d.length-1,j=B-1;for(;b<=U&&b<=j;){const W=d[b],ee=g[b]=D?Kn(g[b]):ln(g[b]);if(Ji(W,ee))_(W,ee,y,null,C,k,L,R,D);else break;b++}for(;b<=U&&b<=j;){const W=d[U],ee=g[j]=D?Kn(g[j]):ln(g[j]);if(Ji(W,ee))_(W,ee,y,null,C,k,L,R,D);else break;U--,j--}if(b>U){if(b<=j){const W=j+1,ee=W<B?g[W].el:w;for(;b<=j;)_(null,g[b]=D?Kn(g[b]):ln(g[b]),y,ee,C,k,L,R,D),b++}}else if(b>j)for(;b<=U;)wt(d[b],C,k,!0),b++;else{const W=b,ee=b,Ie=new Map;for(b=ee;b<=j;b++){const Rt=g[b]=D?Kn(g[b]):ln(g[b]);Rt.key!=null&&Ie.set(Rt.key,b)}let _e,Fe=0;const Kt=j-ee+1;let qs=!1,Jf=0;const Xi=new Array(Kt);for(b=0;b<Kt;b++)Xi[b]=0;for(b=W;b<=U;b++){const Rt=d[b];if(Fe>=Kt){wt(Rt,C,k,!0);continue}let an;if(Rt.key!=null)an=Ie.get(Rt.key);else for(_e=ee;_e<=j;_e++)if(Xi[_e-ee]===0&&Ji(Rt,g[_e])){an=_e;break}an===void 0?wt(Rt,C,k,!0):(Xi[an-ee]=b+1,an>=Jf?Jf=an:qs=!0,_(Rt,g[an],y,null,C,k,L,R,D),Fe++)}const Zf=qs?uT(Xi):ii;for(_e=Zf.length-1,b=Kt-1;b>=0;b--){const Rt=ee+b,an=g[Rt],ed=Rt+1<B?g[Rt+1].el:w;Xi[b]===0?_(null,an,y,ed,C,k,L,R,D):qs&&(_e<0||b!==Zf[_e]?Ht(an,y,ed,2):_e--)}}},Ht=(d,g,y,w,C=null)=>{const{el:k,type:L,transition:R,children:D,shapeFlag:b}=d;if(b&6){Ht(d.component.subTree,g,y,w);return}if(b&128){d.suspense.move(g,y,w);return}if(b&64){L.move(d,g,y,ae);return}if(L===Lt){s(k,g,y);for(let U=0;U<D.length;U++)Ht(D[U],g,y,w);s(d.anchor,g,y);return}if(L===Jc){E(d,g,y);return}if(w!==2&&b&1&&R)if(w===0)R.beforeEnter(k),s(k,g,y),Et(()=>R.enter(k),C);else{const{leave:U,delayLeave:j,afterLeave:W}=R,ee=()=>s(k,g,y),Ie=()=>{U(k,()=>{ee(),W&&W()})};j?j(k,ee,Ie):Ie()}else s(k,g,y)},wt=(d,g,y,w=!1,C=!1)=>{const{type:k,props:L,ref:R,children:D,dynamicChildren:b,shapeFlag:B,patchFlag:U,dirs:j}=d;if(R!=null&&Kl(R,null,y,d,!0),B&256){g.ctx.deactivate(d);return}const W=B&1&&j,ee=!ea(d);let Ie;if(ee&&(Ie=L&&L.onVnodeBeforeUnmount)&&cn(Ie,g,d),B&6)I(d.component,y,w);else{if(B&128){d.suspense.unmount(y,w);return}W&&us(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,y,C,ae,w):b&&(k!==Lt||U>0&&U&64)?F(b,g,y,!1,!0):(k===Lt&&U&384||!C&&B&16)&&F(D,g,y),w&&zs(d)}(ee&&(Ie=L&&L.onVnodeUnmounted)||W)&&Et(()=>{Ie&&cn(Ie,g,d),W&&us(d,null,g,"unmounted")},y)},zs=d=>{const{type:g,el:y,anchor:w,transition:C}=d;if(g===Lt){No(y,w);return}if(g===Jc){M(d);return}const k=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(d.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:R}=C,D=()=>L(y,k);R?R(d.el,k,D):D()}else k()},No=(d,g)=>{let y;for(;d!==g;)y=f(d),i(d),d=y;i(g)},I=(d,g,y)=>{const{bum:w,scope:C,update:k,subTree:L,um:R}=d;w&&Jo(w),C.stop(),k&&(k.active=!1,wt(L,d,g,y)),R&&Et(R,g),Et(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(d,g,y,w=!1,C=!1,k=0)=>{for(let L=k;L<d.length;L++)wt(d[L],g,y,w,C)},x=d=>d.shapeFlag&6?x(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,g,y)=>{d==null?g._vnode&&wt(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),ld(),Rm(),g._vnode=d},ae={p:_,um:wt,m:Ht,r:zs,mt:cs,mc:ve,pc:me,pbc:vt,n:x,o:t};let Oe,Z;return e&&([Oe,Z]=e(ae)),{render:V,hydrate:Oe,createApp:aT(V,Oe)}}function hs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zm(t,e,n=!1){const s=t.children,i=e.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kn(i[r]),a.el=o.el),n||zm(o,a)),a.type===oc&&(a.el=o.el)}}function uT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const hT=t=>t.__isTeleport,Lt=Symbol(void 0),oc=Symbol(void 0),Mr=Symbol(void 0),Jc=Symbol(void 0),_r=[];let Wt=null;function mt(t=!1){_r.push(Wt=t?null:[])}function fT(){_r.pop(),Wt=_r[_r.length-1]||null}let Lr=1;function yd(t){Lr+=t}function qm(t){return t.dynamicChildren=Lr>0?Wt||ii:null,fT(),Lr>0&&Wt&&Wt.push(t),t}function St(t,e,n,s,i,r){return qm(Be(t,e,n,s,i,r,!0))}function dT(t,e,n,s,i){return qm(we(t,e,n,s,i,!0))}function zl(t){return t?t.__v_isVNode===!0:!1}function Ji(t,e){return t.type===e.type&&t.key===e.key}const ac="__vInternal",Wm=({key:t})=>t??null,ta=({ref:t,ref_key:e,ref_for:n})=>t!=null?He(t)||Ge(t)||X(t)?{i:kt,r:t,k:e,f:!!n}:t:null;function Be(t,e=null,n=null,s=0,i=null,r=t===Lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wm(e),ref:e&&ta(e),scopeId:ic,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return a?(dh(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Lr>0&&!o&&Wt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Wt.push(c),c}const we=pT;function pT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===q0)&&(t=Mr),zl(t)){const a=yi(t,e,!0);return n&&dh(a,n),Lr>0&&!r&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(ST(t)&&(t=t.__vccOpts),e){e=gT(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Xu(a)),De(c)&&(_m(c)&&!Q(c)&&(c=yt({},c)),e.style=Yu(c))}const o=He(t)?1:D0(t)?128:hT(t)?64:De(t)?4:X(t)?2:0;return Be(t,e,n,s,i,o,r,!0)}function gT(t){return t?_m(t)||ac in t?yt({},t):t:null}function yi(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?mT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wm(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(ta(e)):[i,ta(e)]:ta(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yi(t.ssContent),ssFallback:t.ssFallback&&yi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ci(t=" ",e=0){return we(oc,null,t,e)}function ln(t){return t==null||typeof t=="boolean"?we(Mr):Q(t)?we(Lt,null,t.slice()):typeof t=="object"?Kn(t):we(oc,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yi(t)}function dh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),dh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ac in e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),s&64?(n=16,e=[ci(e)]):n=8);t.children=e,t.shapeFlag|=n}function mT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Xu([e.class,s.class]));else if(i==="style")e.style=Yu([e.style,s.style]);else if(Xa(i)){const r=e[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function cn(t,e,n,s=null){Xt(t,e,7,[n,s])}const _T=Km();let yT=0;function vT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||_T,r={uid:yT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vm(s,i),emitsOptions:km(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=b0.bind(null,r),t.ce&&t.ce(r),r}let Me=null;const ph=()=>Me||kt,vi=t=>{Me=t,t.scope.on()},Ss=()=>{Me&&Me.scope.off(),Me=null};function Gm(t){return t.vnode.shapeFlag&4}let Fr=!1;function wT(t,e=!1){Fr=e;const{props:n,children:s}=t.vnode,i=Gm(t);tT(t,n,i,e),iT(t,s);const r=i?ET(t,e):void 0;return Fr=!1,r}function ET(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ym(new Proxy(t.ctx,Q0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?IT(t):null;vi(t),Li();const r=Qn(s,t,0,[t.props,i]);if(Fi(),Ss(),em(r)){if(r.then(Ss,Ss),e)return r.then(o=>{vd(t,o,e)}).catch(o=>{nc(o,t,0)});t.asyncDep=r}else vd(t,r,e)}else Qm(t,e)}function vd(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Im(e)),Qm(t,n)}let wd;function Qm(t,e,n){const s=t.type;if(!t.render){if(!e&&wd&&!s.render){const i=s.template||hh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=yt(yt({isCustomElement:r,delimiters:a},o),c);s.render=wd(i,l)}}t.render=s.render||Yt}vi(t),Li(),Y0(t),Fi(),Ss()}function TT(t){return new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}})}function IT(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=TT(t))},slots:t.slots,emit:t.emit,expose:e}}function cc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Im(ym(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mr)return mr[n](t)},has(e,n){return n in e||n in mr}}))}function CT(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function ST(t){return X(t)&&"__vccOpts"in t}const Ft=(t,e)=>w0(t,e,Fr);function Ym(t,e,n){const s=arguments.length;return s===2?De(e)&&!Q(e)?zl(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zl(n)&&(n=[n]),we(t,e,n))}const Xm=Symbol(""),bT=()=>Jt(Xm),AT="3.2.47",RT="http://www.w3.org/2000/svg",ms=typeof document<"u"?document:null,Ed=ms&&ms.createElement("template"),NT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?ms.createElementNS(RT,t):ms.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ms.createTextNode(t),createComment:t=>ms.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ms.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ed.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ed.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function DT(t,e,n){const s=t.style,i=He(n);if(n&&!i){if(e&&!He(e))for(const r in e)n[r]==null&&ql(s,r,"");for(const r in n)ql(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Td=/\s*!important$/;function ql(t,e,n){if(Q(n))n.forEach(s=>ql(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=OT(t,e);Td.test(n)?t.setProperty(Mi(s),n.replace(Td,""),"important"):t[s]=n}}const Id=["Webkit","Moz","ms"],Zc={};function OT(t,e){const n=Zc[e];if(n)return n;let s=_n(e);if(s!=="filter"&&s in t)return Zc[e]=s;s=ec(s);for(let i=0;i<Id.length;i++){const r=Id[i]+s;if(r in t)return Zc[e]=r}return e}const Cd="http://www.w3.org/1999/xlink";function xT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Cd,e.slice(6,e.length)):t.setAttributeNS(Cd,e,n);else{const r=DE(e);n==null||r&&!Xg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function PT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Xs(t,e,n,s){t.addEventListener(e,n,s)}function MT(t,e,n,s){t.removeEventListener(e,n,s)}function LT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=FT(e);if(s){const l=r[e]=VT(s,i);Xs(t,a,l,c)}else o&&(MT(t,a,o,c),r[e]=void 0)}}const Sd=/(?:Once|Passive|Capture)$/;function FT(t){let e;if(Sd.test(t)){e={};let s;for(;s=t.match(Sd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mi(t.slice(2)),e]}let el=0;const UT=Promise.resolve(),$T=()=>el||(UT.then(()=>el=0),el=Date.now());function VT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(BT(s,n.value),e,5,[s])};return n.value=t,n.attached=$T(),n}function BT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bd=/^on[a-z]/,jT=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?kT(t,s,i):e==="style"?DT(t,n,s):Xa(e)?Ju(e)||LT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HT(t,e,s,i))?PT(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xT(t,e,s,i))};function HT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&bd.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bd.test(e)&&He(n)?!1:e in t}const Ad=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Jo(e,n):e};function KT(t){t.target.composing=!0}function Rd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zT={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ad(i);const r=s||i.props&&i.props.type==="number";Xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ml(a)),t._assign(a)}),n&&Xs(t,"change",()=>{t.value=t.value.trim()}),e||(Xs(t,"compositionstart",KT),Xs(t,"compositionend",Rd),Xs(t,"change",Rd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ad(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ml(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qT=yt({patchProp:jT},NT);let Nd;function WT(){return Nd||(Nd=cT(qT))}const GT=(...t)=>{const e=WT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=QT(s);if(!i)return;const r=e._component;!X(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function QT(t){return He(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Js=typeof window<"u";function YT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function tl(t,e){const n={};for(const s in e){const i=e[s];n[s]=en(i)?i.map(t):t(i)}return n}const yr=()=>{},en=Array.isArray,XT=/\/$/,JT=t=>t.replace(XT,"");function nl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=nI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function ZT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&wi(e.matched[s],n.matched[i])&&Jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tI(t[n],e[n]))return!1;return!0}function tI(t,e){return en(t)?Dd(t,e):en(e)?Dd(e,t):t===e}function Dd(t,e){return en(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function nI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vr||(vr={}));function sI(t){if(!t)if(Js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JT(t)}const iI=/^[^#]+#/;function rI(t,e){return t.replace(iI,"#")+e}function oI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const lc=()=>({left:window.pageXOffset,top:window.pageYOffset});function aI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=oI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Od(t,e){return(history.state?history.state.position-e:-1)+t}const Wl=new Map;function cI(t,e){Wl.set(t,e)}function lI(t){const e=Wl.get(t);return Wl.delete(t),e}let uI=()=>location.protocol+"//"+location.host;function Zm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),kd(c,"")}return kd(n,t)+s+i}function hI(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=Zm(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);i.forEach(T=>{T(n.value,m,{delta:v,type:Ur.pop,direction:v?v>0?vr.forward:vr.back:vr.unknown})})};function c(){o=n.value}function l(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:lc()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function xd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?lc():null}}function fI(t){const{history:e,location:n}=window,s={value:Zm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:uI()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,xd(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=pe({},i.value,e.state,{forward:c,scroll:lc()});r(u.current,u,!0);const h=pe({},xd(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function dI(t){t=sI(t);const e=fI(t),n=hI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:rI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function pI(t){return typeof t=="string"||t&&typeof t=="object"}function e_(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},t_=Symbol("");var Pd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pd||(Pd={}));function Ei(t,e){return pe(new Error,{type:t,[t_]:!0},e)}function Sn(t,e){return t instanceof Error&&t_ in t&&(e==null||!!(t.type&e))}const Md="[^/]+?",gI={sensitive:!1,strict:!1,start:!0,end:!0},mI=/[.+*?^${}()[\]/\\]/g;function _I(t,e){const n=pe({},gI,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(mI,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:T}=f;r.push({name:m,repeatable:_,optional:v});const N=T||Md;if(N!==Md){p+=10;try{new RegExp(`(${N})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+M.message)}}let E=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(E=v&&l.length<2?`(?:/${E})`:"/"+E),v&&(E+="?"),i+=E,p+=20,v&&(p+=-8),_&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,T=m in l?l[m]:"";if(en(T)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=en(T)?T.join("/"):T;if(!N)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function yI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=yI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ld(s))return 1;if(Ld(i))return-1}return i.length-s.length}function Ld(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wI={type:0,value:""},EI=/[a-zA-Z0-9_]/;function TI(t){if(!t)return[[]];if(t==="/")return[[wI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:EI.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function II(t,e,n){const s=_I(TI(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function CI(t,e){const n=[],s=new Map;e=$d({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,m=SI(u);m.aliasOf=f&&f.record;const _=$d(e,u),v=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of E)v.push(pe({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let T,N;for(const E of v){const{path:M}=E;if(h&&M[0]!=="/"){const J=h.record.path,oe=J[J.length-1]==="/"?"":"/";E.path=h.record.path+(M&&oe+M)}if(T=II(E,h,_),f?f.alias.push(T):(N=N||T,N!==T&&N.alias.push(T),p&&u.name&&!Ud(T)&&o(u.name)),m.children){const J=m.children;for(let oe=0;oe<J.length;oe++)r(J[oe],T,f&&f.children[oe])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return N?()=>{o(N)}:yr}function o(u){if(e_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&vI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!n_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ud(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ei(1,{location:u});_=f.record.name,p=pe(Fd(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Fd(u.params,f.keys.map(N=>N.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(N=>N.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw Ei(1,{location:u,currentLocation:h});_=f.record.name,p=pe({},h.params,u.params),m=f.stringify(p)}const v=[];let T=f;for(;T;)v.unshift(T.record),T=T.parent;return{name:_,path:m,params:p,matched:v,meta:AI(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Fd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function SI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ud(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AI(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function $d(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function n_(t,e){return e.children.some(n=>n===t||n_(t,n))}const s_=/#/g,RI=/&/g,NI=/\//g,kI=/=/g,DI=/\?/g,i_=/\+/g,OI=/%5B/g,xI=/%5D/g,r_=/%5E/g,PI=/%60/g,o_=/%7B/g,MI=/%7C/g,a_=/%7D/g,LI=/%20/g;function gh(t){return encodeURI(""+t).replace(MI,"|").replace(OI,"[").replace(xI,"]")}function FI(t){return gh(t).replace(o_,"{").replace(a_,"}").replace(r_,"^")}function Gl(t){return gh(t).replace(i_,"%2B").replace(LI,"+").replace(s_,"%23").replace(RI,"%26").replace(PI,"`").replace(o_,"{").replace(a_,"}").replace(r_,"^")}function UI(t){return Gl(t).replace(kI,"%3D")}function $I(t){return gh(t).replace(s_,"%23").replace(DI,"%3F")}function VI(t){return t==null?"":$I(t).replace(NI,"%2F")}function fa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function BI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(i_," "),o=r.indexOf("="),a=fa(o<0?r:r.slice(0,o)),c=o<0?null:fa(r.slice(o+1));if(a in e){let l=e[a];en(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Vd(t){let e="";for(let n in t){const s=t[n];if(n=UI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(s)?s.map(r=>r&&Gl(r)):[s&&Gl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function jI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=en(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const HI=Symbol(""),Bd=Symbol(""),mh=Symbol(""),c_=Symbol(""),Ql=Symbol("");function Zi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function zn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ei(4,{from:n,to:e})):h instanceof Error?a(h):pI(h)?a(Ei(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function sl(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(KI(a)){const l=(a.__vccOpts||a)[e];l&&i.push(zn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=YT(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&zn(f,n,s,r,o)()}))}}return i}function KI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jd(t){const e=Jt(mh),n=Jt(c_),s=Ft(()=>e.resolve(pt(t.to))),i=Ft(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(wi.bind(null,u));if(f>-1)return f;const p=Hd(c[l-2]);return l>1&&Hd(u)===p&&h[h.length-1].path!==p?h.findIndex(wi.bind(null,c[l-2])):f}),r=Ft(()=>i.value>-1&&GI(n.params,s.value.params)),o=Ft(()=>i.value>-1&&i.value===n.matched.length-1&&Jm(n.params,s.value.params));function a(c={}){return WI(c)?e[pt(t.replace)?"replace":"push"](pt(t.to)).catch(yr):Promise.resolve()}return{route:s,href:Ft(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const zI=sn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jd,setup(t,{slots:e}){const n=eo(jd(t)),{options:s}=Jt(mh),i=Ft(()=>({[Kd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Kd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ym("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),qI=zI;function WI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!en(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kd=(t,e,n)=>t??e??n,QI=sn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Jt(Ql),i=Ft(()=>t.route||s.value),r=Jt(Bd,0),o=Ft(()=>{let l=pt(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ft(()=>i.value.matched[o.value]);Zo(Bd,Ft(()=>o.value+1)),Zo(HI,a),Zo(Ql,i);const c=pr();return gr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!wi(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return zd(n.default,{Component:f,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,v=Ym(f,pe({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return zd(n.default,{Component:v,route:l})||v}}});function zd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YI=QI;function XI(t){const e=CI(t.routes,t),n=t.parseQuery||BI,s=t.stringifyQuery||Vd,i=t.history,r=Zi(),o=Zi(),a=Zi(),c=Em(jn);let l=jn;Js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,I=>""+I),h=tl.bind(null,VI),f=tl.bind(null,fa);function p(I,F){let x,V;return e_(I)?(x=e.getRecordMatcher(I),V=F):V=I,e.addRoute(V,x)}function m(I){const F=e.getRecordMatcher(I);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function T(I,F){if(F=pe({},F||c.value),typeof I=="string"){const d=nl(n,I,F.path),g=e.resolve({path:d.path},F),y=i.createHref(d.fullPath);return pe(d,g,{params:f(g.params),hash:fa(d.hash),redirectedFrom:void 0,href:y})}let x;if("path"in I)x=pe({},I,{path:nl(n,I.path,F.path).path});else{const d=pe({},I.params);for(const g in d)d[g]==null&&delete d[g];x=pe({},I,{params:h(I.params)}),F.params=h(F.params)}const V=e.resolve(x,F),ae=I.hash||"";V.params=u(f(V.params));const Oe=ZT(s,pe({},I,{hash:FI(ae),path:V.path})),Z=i.createHref(Oe);return pe({fullPath:Oe,hash:ae,query:s===Vd?jI(I.query):I.query||{}},V,{redirectedFrom:void 0,href:Z})}function N(I){return typeof I=="string"?nl(n,I,c.value.path):pe({},I)}function E(I,F){if(l!==I)return Ei(8,{from:F,to:I})}function M(I){return Ee(I)}function J(I){return M(pe(N(I),{replace:!0}))}function oe(I){const F=I.matched[I.matched.length-1];if(F&&F.redirect){const{redirect:x}=F;let V=typeof x=="function"?x(I):x;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=N(V):{path:V},V.params={}),pe({query:I.query,hash:I.hash,params:"path"in V?{}:I.params},V)}}function Ee(I,F){const x=l=T(I),V=c.value,ae=I.state,Oe=I.force,Z=I.replace===!0,d=oe(x);if(d)return Ee(pe(N(d),{state:typeof d=="object"?pe({},ae,d.state):ae,force:Oe,replace:Z}),F||x);const g=x;g.redirectedFrom=F;let y;return!Oe&&eI(s,V,x)&&(y=Ei(16,{to:g,from:V}),ls(V,V,!0,!1)),(y?Promise.resolve(y):Mt(g,V)).catch(w=>Sn(w)?Sn(w,2)?w:jt(w):Te(w,g,V)).then(w=>{if(w){if(Sn(w,2))return Ee(pe({replace:Z},N(w.to),{state:typeof w.to=="object"?pe({},ae,w.to.state):ae,force:Oe}),F||g)}else w=Vn(g,V,!0,Z,ae);return vt(g,V,w),w})}function ve(I,F){const x=E(I,F);return x?Promise.reject(x):Promise.resolve()}function Mt(I,F){let x;const[V,ae,Oe]=JI(I,F);x=sl(V.reverse(),"beforeRouteLeave",I,F);for(const d of V)d.leaveGuards.forEach(g=>{x.push(zn(g,I,F))});const Z=ve.bind(null,I,F);return x.push(Z),Gs(x).then(()=>{x=[];for(const d of r.list())x.push(zn(d,I,F));return x.push(Z),Gs(x)}).then(()=>{x=sl(ae,"beforeRouteUpdate",I,F);for(const d of ae)d.updateGuards.forEach(g=>{x.push(zn(g,I,F))});return x.push(Z),Gs(x)}).then(()=>{x=[];for(const d of I.matched)if(d.beforeEnter&&!F.matched.includes(d))if(en(d.beforeEnter))for(const g of d.beforeEnter)x.push(zn(g,I,F));else x.push(zn(d.beforeEnter,I,F));return x.push(Z),Gs(x)}).then(()=>(I.matched.forEach(d=>d.enterCallbacks={}),x=sl(Oe,"beforeRouteEnter",I,F),x.push(Z),Gs(x))).then(()=>{x=[];for(const d of o.list())x.push(zn(d,I,F));return x.push(Z),Gs(x)}).catch(d=>Sn(d,8)?d:Promise.reject(d))}function vt(I,F,x){for(const V of a.list())V(I,F,x)}function Vn(I,F,x,V,ae){const Oe=E(I,F);if(Oe)return Oe;const Z=F===jn,d=Js?history.state:{};x&&(V||Z?i.replace(I.fullPath,pe({scroll:Z&&d&&d.scroll},ae)):i.push(I.fullPath,ae)),c.value=I,ls(I,F,x,Z),jt()}let on;function Ks(){on||(on=i.listen((I,F,x)=>{if(!No.listening)return;const V=T(I),ae=oe(V);if(ae){Ee(pe(ae,{replace:!0}),V).catch(yr);return}l=V;const Oe=c.value;Js&&cI(Od(Oe.fullPath,x.delta),lc()),Mt(V,Oe).catch(Z=>Sn(Z,12)?Z:Sn(Z,2)?(Ee(Z.to,V).then(d=>{Sn(d,20)&&!x.delta&&x.type===Ur.pop&&i.go(-1,!1)}).catch(yr),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Te(Z,V,Oe))).then(Z=>{Z=Z||Vn(V,Oe,!1),Z&&(x.delta&&!Sn(Z,8)?i.go(-x.delta,!1):x.type===Ur.pop&&Sn(Z,20)&&i.go(-1,!1)),vt(V,Oe,Z)}).catch(yr)}))}let cs=Zi(),Yi=Zi(),Le;function Te(I,F,x){jt(I);const V=Yi.list();return V.length?V.forEach(ae=>ae(I,F,x)):console.error(I),Promise.reject(I)}function me(){return Le&&c.value!==jn?Promise.resolve():new Promise((I,F)=>{cs.add([I,F])})}function jt(I){return Le||(Le=!I,Ks(),cs.list().forEach(([F,x])=>I?x(I):F()),cs.reset()),I}function ls(I,F,x,V){const{scrollBehavior:ae}=t;if(!Js||!ae)return Promise.resolve();const Oe=!x&&lI(Od(I.fullPath,0))||(V||!x)&&history.state&&history.state.scroll||null;return bm().then(()=>ae(I,F,Oe)).then(Z=>Z&&aI(Z)).catch(Z=>Te(Z,I,F))}const Ht=I=>i.go(I);let wt;const zs=new Set,No={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:T,options:t,push:M,replace:J,go:Ht,back:()=>Ht(-1),forward:()=>Ht(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Yi.add,isReady:me,install(I){const F=this;I.component("RouterLink",qI),I.component("RouterView",YI),I.config.globalProperties.$router=F,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(c)}),Js&&!wt&&c.value===jn&&(wt=!0,M(i.location).catch(ae=>{}));const x={};for(const ae in jn)x[ae]=Ft(()=>c.value[ae]);I.provide(mh,F),I.provide(c_,eo(x)),I.provide(Ql,c);const V=I.unmount;zs.add(I),I.unmount=function(){zs.delete(I),zs.size<1&&(l=jn,on&&on(),on=null,c.value=jn,wt=!1,Le=!1),V()}}};return No}function Gs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function JI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>wi(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>wi(l,c))||i.push(c))}return[n,s,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw Ui(e)},Ui=function(t){return new Error("Firebase Database ("+l_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new eC;const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h_=function(t){const e=u_(t);return uc.encodeByteArray(e,!0)},da=function(t){return h_(t).replace(/\./g,"")},pa=function(t){try{return uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return f_(void 0,t)}function f_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nC(n)||(t[n]=f_(t[n],e[n]));return t}function nC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=()=>sC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pa(t[1]);return e&&JSON.parse(e)},_h=()=>{try{return iC()||rC()||oC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aC=t=>{var e,n;return(n=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cC=t=>{const e=aC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lC=()=>{var t;return(t=_h())===null||t===void 0?void 0:t.config},uC=t=>{var e;return(e=_h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[da(JSON.stringify(n)),da(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function fC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function d_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p_(){return l_.NODE_ADMIN===!0}function g_(){try{return typeof indexedDB=="object"}catch{return!1}}function dC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="FirebaseError";class Un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pC,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Un(i,a,s)}}function gC(t,e){return t.replace(mC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const mC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Vr(pa(r[0])||""),n=Vr(pa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},_C=function(t){const e=m_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yC=function(t){const e=m_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ga(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Yl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Wd(r)&&Wd(o)){if(!Yl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Wd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wC(t,e){const n=new EC(t,e);return n.subscribe.bind(n)}class EC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=il),i.error===void 0&&(i.error=il),i.complete===void 0&&(i.complete=il);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function il(){}function IC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $r;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bC(t){return t===ds?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const NC={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},kC=le.INFO,DC={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},OC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=DC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class so{constructor(e){this.name=e,this._logLevel=kC,this._logHandler=OC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const xC=(t,e)=>e.some(n=>t instanceof n);let Gd,Qd;function PC(){return Gd||(Gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return Qd||(Qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,Xl=new WeakMap,y_=new WeakMap,rl=new WeakMap,wh=new WeakMap;function LC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Yn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&__.set(n,t)}).catch(()=>{}),wh.set(e,t),e}function FC(t){if(Xl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xl.set(t,e)}let Jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){Jl=t(Jl)}function $C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ol(this),e,...n);return y_.set(s,e.sort?e.sort():[e]),Yn(s)}:MC().includes(t)?function(...e){return t.apply(ol(this),e),Yn(__.get(this))}:function(...e){return Yn(t.apply(ol(this),e))}}function VC(t){return typeof t=="function"?$C(t):(t instanceof IDBTransaction&&FC(t),xC(t,PC())?new Proxy(t,Jl):t)}function Yn(t){if(t instanceof IDBRequest)return LC(t);if(rl.has(t))return rl.get(t);const e=VC(t);return e!==t&&(rl.set(t,e),wh.set(e,t)),e}const ol=t=>wh.get(t);function BC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Yn(o.result),c.oldVersion,c.newVersion,Yn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jC=["get","getKey","getAll","getAllKeys","count"],HC=["put","add","delete","clear"],al=new Map;function Yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(al.get(e))return al.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=HC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jC.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return al.set(e,r),r}UC(t=>({...t,get:(e,n,s)=>Yd(e,n)||t.get(e,n,s),has:(e,n)=>!!Yd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zl="@firebase/app",Xd="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new so("@firebase/app"),qC="@firebase/app-compat",WC="@firebase/analytics-compat",GC="@firebase/analytics",QC="@firebase/app-check-compat",YC="@firebase/app-check",XC="@firebase/auth",JC="@firebase/auth-compat",ZC="@firebase/database",eS="@firebase/database-compat",tS="@firebase/functions",nS="@firebase/functions-compat",sS="@firebase/installations",iS="@firebase/installations-compat",rS="@firebase/messaging",oS="@firebase/messaging-compat",aS="@firebase/performance",cS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",hS="@firebase/storage",fS="@firebase/storage-compat",dS="@firebase/firestore",pS="@firebase/firestore-compat",gS="firebase",mS="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",_S={[Zl]:"fire-core",[qC]:"fire-core-compat",[GC]:"fire-analytics",[WC]:"fire-analytics-compat",[YC]:"fire-app-check",[QC]:"fire-app-check-compat",[XC]:"fire-auth",[JC]:"fire-auth-compat",[ZC]:"fire-rtdb",[eS]:"fire-rtdb-compat",[tS]:"fire-fn",[nS]:"fire-fn-compat",[sS]:"fire-iid",[iS]:"fire-iid-compat",[rS]:"fire-fcm",[oS]:"fire-fcm-compat",[aS]:"fire-perf",[cS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[hS]:"fire-gcs",[fS]:"fire-gcs-compat",[dS]:"fire-fst",[pS]:"fire-fst-compat","fire-js":"fire-js",[gS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map,tu=new Map;function yS(t,e){try{t.container.addComponent(e)}catch(n){Ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(tu.has(e))return Ns.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,t);for(const n of ma.values())yS(n,t);return!0}function vS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xn=new $i("app","Firebase",wS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=mS;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=lC()),!n)throw Xn.create("no-options");const r=ma.get(i);if(r){if(Yl(n,r.options)&&Yl(s,r.config))return r;throw Xn.create("duplicate-app",{appName:i})}const o=new RC(i);for(const c of tu.values())o.addComponent(c);const a=new ES(n,s,o);return ma.set(i,a),a}function w_(t=eu){const e=ma.get(t);if(!e&&t===eu)return v_();if(!e)throw Xn.create("no-app",{appName:t});return e}function Ot(t,e,n){var s;let i=(s=_S[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ns.warn(a.join(" "));return}vn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="firebase-heartbeat-database",IS=1,Br="firebase-heartbeat-store";let cl=null;function E_(){return cl||(cl=BC(TS,IS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Br)}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),cl}async function CS(t){try{return(await E_()).transaction(Br).objectStore(Br).get(T_(t))}catch(e){if(e instanceof Un)Ns.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ns.warn(n.message)}}}async function Jd(t,e){try{const s=(await E_()).transaction(Br,"readwrite");return await s.objectStore(Br).put(e,T_(t)),s.done}catch(n){if(n instanceof Un)Ns.warn(n.message);else{const s=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ns.warn(s.message)}}}function T_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1024,bS=30*24*60*60*1e3;class AS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=bS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zd(),{heartbeatsToSend:n,unsentEntries:s}=RS(this._heartbeatsCache.heartbeats),i=da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zd(){return new Date().toISOString().substring(0,10)}function RS(t,e=SS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ep(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ep(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return g_()?dC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ep(t){return da(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){vn(new tn("platform-logger",e=>new KC(e),"PRIVATE")),vn(new tn("heartbeat",e=>new AS(e),"PRIVATE")),Ot(Zl,Xd,t),Ot(Zl,Xd,"esm2017"),Ot("fire-js","")}kS("");var DS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Eh=Eh||{},q=DS||self;function _a(){}function fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function io(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OS(t){return Object.prototype.hasOwnProperty.call(t,ll)&&t[ll]||(t[ll]=++xS)}var ll="closure_uid_"+(1e9*Math.random()>>>0),xS=0;function PS(t,e,n){return t.call.apply(t.bind,arguments)}function MS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=PS:lt=MS,lt.apply(null,arguments)}function Lo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function rs(){this.s=this.s,this.o=this.o}var LS=0;rs.prototype.s=!1;rs.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),LS!=0)&&OS(this)};rs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Th(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function tp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(fc(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var FS=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",_a,e),q.removeEventListener("test",_a,e)}catch{}return t}();function ya(t){return/^[\s\xa0]*$/.test(t)}var np=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ul(t,e){return t<e?-1:t>e?1:0}function dc(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return dc().indexOf(t)!=-1}function Ih(t){return Ih[" "](t),t}Ih[" "]=_a;function C_(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var US=hn("Opera"),Ii=hn("Trident")||hn("MSIE"),S_=hn("Edge"),nu=S_||Ii,b_=hn("Gecko")&&!(dc().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),$S=dc().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function A_(){var t=q.document;return t?t.documentMode:void 0}var va;e:{var hl="",fl=function(){var t=dc();if(b_)return/rv:([^\);]+)(\)|;)/.exec(t);if(S_)return/Edge\/([\d\.]+)/.exec(t);if(Ii)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($S)return/WebKit\/(\S+)/.exec(t);if(US)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fl&&(hl=fl?fl[1]:""),Ii){var dl=A_();if(dl!=null&&dl>parseFloat(hl)){va=String(dl);break e}}va=hl}var VS={};function BS(){return C_(VS,9,function(){let t=0;const e=np(String(va)).split("."),n=np("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=ul(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ul(i[2].length==0,r[2].length==0)||ul(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var su;if(q.document&&Ii){var sp=A_();su=sp||parseInt(va,10)||void 0}else su=void 0;var jS=su;function jr(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(b_){e:{try{Ih(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jr.$.h.call(this)}}Ye(jr,ut);var HS={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ro="closure_listenable_"+(1e6*Math.random()|0),KS=0;function zS(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++KS,this.fa=this.ia=!1}function pc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ch(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function R_(t){const e={};for(const n in t)e[n]=t[n];return e}const ip="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ip.length;r++)n=ip[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ru(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zS(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function iu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=I_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ru(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Sh="closure_lm_"+(1e6*Math.random()|0),pl={};function k_(t,e,n,s,i){if(s&&s.once)return O_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)k_(t,e[r],n,s,i);return null}return n=Rh(n),t&&t[ro]?t.O(e,n,io(s)?!!s.capture:!!s,i):D_(t,e,n,!1,s,i)}function D_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=io(i)?!!i.capture:!!i,a=Ah(t);if(a||(t[Sh]=a=new gc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=qS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)FS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(P_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qS(){function t(n){return e.call(t.src,t.listener,n)}const e=WS;return t}function O_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)O_(t,e[r],n,s,i);return null}return n=Rh(n),t&&t[ro]?t.P(e,n,io(s)?!!s.capture:!!s,i):D_(t,e,n,!0,s,i)}function x_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)x_(t,e[r],n,s,i);else s=io(s)?!!s.capture:!!s,n=Rh(n),t&&t[ro]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ru(r,n,s,i),-1<n&&(pc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ah(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ru(e,n,s,i)),(n=-1<t?e[t]:null)&&bh(n))}function bh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ro])iu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(P_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ah(e))?(iu(n,t),n.h==0&&(n.src=null,e[Sh]=null)):pc(t)}}}function P_(t){return t in pl?pl[t]:pl[t]="on"+t}function WS(t,e){if(t.fa)t=!0;else{e=new jr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&bh(t),t=n.call(s,e)}return t}function Ah(t){return t=t[Sh],t instanceof gc?t:null}var gl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rh(t){return typeof t=="function"?t:(t[gl]||(t[gl]=function(e){return t.handleEvent(e)}),t[gl])}function Qe(){rs.call(this),this.i=new gc(this),this.S=this,this.J=null}Ye(Qe,rs);Qe.prototype[ro]=!0;Qe.prototype.removeEventListener=function(t,e,n,s){x_(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(s,t),N_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Fo(o,s,!0,e)&&i}if(o=e.g=t,i=Fo(o,s,!0,e)&&i,i=Fo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Fo(o,s,!1,e)&&i}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)pc(n[s]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Qe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Fo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&iu(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Nh=q.JSON.stringify;function GS(){var t=F_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QS{constructor(){this.h=this.g=null}add(e,n){const s=M_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var M_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new YS,t=>t.reset());class YS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XS(t){q.setTimeout(()=>{throw t},0)}function L_(t,e){ou||JS(),au||(ou(),au=!0),F_.add(t,e)}var ou;function JS(){var t=q.Promise.resolve(void 0);ou=function(){t.then(ZS)}}var au=!1,F_=new QS;function ZS(){for(var t;t=GS();){try{t.h.call(t.g)}catch(n){XS(n)}var e=M_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}au=!1}function mc(t,e){Qe.call(this),this.h=t||1,this.g=e||q,this.j=lt(this.qb,this),this.l=Date.now()}Ye(mc,Qe);P=mc.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(kh(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){mc.$.N.call(this),kh(this),delete this.g};function Dh(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function U_(t){t.g=Dh(()=>{t.g=null,t.i&&(t.i=!1,U_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eb extends rs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:U_(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(t){rs.call(this),this.h=t,this.g={}}Ye(Hr,rs);var rp=[];function $_(t,e,n,s){Array.isArray(n)||(n&&(rp[0]=n.toString()),n=rp);for(var i=0;i<n.length;i++){var r=k_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function V_(t){Ch(t.g,function(e,n){this.g.hasOwnProperty(n)&&bh(e)},t),t.g={}}Hr.prototype.N=function(){Hr.$.N.call(this),V_(this)};Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _c(){this.g=!0}_c.prototype.Ea=function(){this.g=!1};function tb(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function nb(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ti(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ib(t,n)+(s?" "+s:"")})}function sb(t,e){t.info(function(){return"TIMEOUT: "+e})}_c.prototype.info=function(){};function ib(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Nh(n)}catch{return e}}var Us={},op=null;function yc(){return op=op||new Qe}Us.Ta="serverreachability";function B_(t){ut.call(this,Us.Ta,t)}Ye(B_,ut);function Kr(t){const e=yc();et(e,new B_(e))}Us.STAT_EVENT="statevent";function j_(t,e){ut.call(this,Us.STAT_EVENT,t),this.stat=e}Ye(j_,ut);function gt(t){const e=yc();et(e,new j_(e,t))}Us.Ua="timingevent";function H_(t,e){ut.call(this,Us.Ua,t),this.size=e}Ye(H_,ut);function oo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var vc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},K_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Oh(){}Oh.prototype.h=null;function ap(t){return t.h||(t.h=t.i())}function z_(){}var ao={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xh(){ut.call(this,"d")}Ye(xh,ut);function Ph(){ut.call(this,"c")}Ye(Ph,ut);var cu;function wc(){}Ye(wc,Oh);wc.prototype.g=function(){return new XMLHttpRequest};wc.prototype.i=function(){return{}};cu=new wc;function co(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Hr(this),this.P=rb,t=nu?125:void 0,this.V=new mc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new q_}function q_(){this.i=null,this.g="",this.h=!1}var rb=45e3,lu={},wa={};P=co.prototype;P.setTimeout=function(t){this.P=t};function uu(t,e,n){t.L=1,t.v=Tc(xn(e)),t.s=n,t.S=!0,W_(t,null)}function W_(t,e){t.G=Date.now(),lo(t),t.A=xn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),ty(n.i,"t",s),t.C=0,n=t.l.I,t.h=new q_,t.g=Ty(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eb(lt(t.Pa,t,t.g),t.O)),$_(t.U,t.g,"readystatechange",t.nb),e=t.I?R_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Kr(),tb(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=An(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||nu||this.g&&(this.h.h||this.g.ja()||hp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Kr(3):Kr(2)),Ec(this);var n=this.g.da();this.aa=n;t:if(G_(this)){var s=hp(this.g);t="";var i=s.length,r=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),wr(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nb(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ya(a)){var l=a;break t}}l=null}if(n=l)ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,n);else{this.i=!1,this.o=3,gt(12),ys(this),wr(this);break e}}this.S?(Q_(this,u,o),nu&&this.i&&u==3&&($_(this.U,this.V,"tick",this.mb),this.V.start())):(ti(this.j,this.m,o,null),hu(this,o)),u==4&&ys(this),this.i&&!this.J&&(u==4?yy(this.l,this):(this.i=!1,lo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),ys(this),wr(this)}}}catch{}finally{}};function G_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Q_(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=ob(t,n),i==wa){e==4&&(t.o=4,gt(14),s=!1),ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lu){t.o=4,gt(15),ti(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ti(t.j,t.m,i,null),hu(t,i);G_(t)&&i!=wa&&i!=lu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bh(e),e.L=!0,gt(11))):(ti(t.j,t.m,n,"[Invalid Chunked Response]"),ys(t),wr(t))}P.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.C<e.length&&(Ec(this),Q_(this,t,e),this.i&&t!=4&&lo(this))}};function ob(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?wa:(n=Number(e.substring(n,s)),isNaN(n)?lu:(s+=1,s+n>e.length?wa:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,ys(this)};function lo(t){t.Y=Date.now()+t.P,Y_(t,t.P)}function Y_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=oo(lt(t.lb,t),e)}function Ec(t){t.B&&(q.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sb(this.j,this.A),this.L!=2&&(Kr(),gt(17)),ys(this),this.o=2,wr(this)):Y_(this,this.Y-t)};function wr(t){t.l.H==0||t.J||yy(t.l,t)}function ys(t){Ec(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,kh(t.V),V_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function hu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fu(n.h,t))){if(!t.K&&fu(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ia(n),Sc(n);else break e;Vh(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=oo(lt(n.ib,n),6e3));if(1>=iy(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else vs(n,11)}else if((t.K||n.g==t)&&Ia(n),!ya(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Mh(r,r.h),r.h=null))}if(s.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Ne(s.G,s.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Ey(s,s.I?s.oa:null,s.Y),o.K){ry(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ec(a),lo(a)),s.g=o}else my(s);0<n.i.length&&bc(n)}else l[0]!="stop"&&l[0]!="close"||vs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vs(n,7):$h(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}Kr(4)}catch{}}function ab(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function cb(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function X_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cb(t),s=ab(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var J_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bs){this.h=e!==void 0?e:t.h,Ea(this,t.j),this.s=t.s,this.g=t.g,Ta(this,t.m),this.l=t.l,e=t.i;var n=new zr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cp(this,n),this.o=t.o}else t&&(n=String(t).match(J_))?(this.h=!!e,Ea(this,n[1]||"",!0),this.s=cr(n[2]||""),this.g=cr(n[3]||"",!0),Ta(this,n[4]),this.l=cr(n[5]||"",!0),cp(this,n[6]||"",!0),this.o=cr(n[7]||"")):(this.h=!!e,this.i=new zr(null,this.h))}bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lr(e,lp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lr(e,lp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lr(n,n.charAt(0)=="/"?fb:hb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lr(n,pb)),t.join("")};function xn(t){return new bs(t)}function Ea(t,e,n){t.j=n?cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ta(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cp(t,e,n){e instanceof zr?(t.i=e,gb(t.i,t.h)):(n||(e=lr(e,db)),t.i=new zr(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Tc(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ub),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ub(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lp=/[#\/\?@]/g,hb=/[#\?:]/g,fb=/[#\?]/g,db=/[#\?@]/g,pb=/#/g;function zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function os(t){t.g||(t.g=new Map,t.h=0,t.i&&lb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=zr.prototype;P.add=function(t,e){os(this),this.i=null,t=Bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Z_(t,e){os(t),e=Bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ey(t,e){return os(t),e=Bi(t,e),t.g.has(e)}P.forEach=function(t,e){os(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};P.sa=function(){os(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};P.Z=function(t){os(this);let e=[];if(typeof t=="string")ey(this,t)&&(e=e.concat(this.g.get(Bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return os(this),this.i=null,t=Bi(this,t),ey(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ty(t,e,n){Z_(t,e),0<n.length&&(t.i=null,t.g.set(Bi(t,e),Th(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gb(t,e){e&&!t.j&&(os(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Z_(this,s),ty(this,i,n))},t)),t.j=e}var mb=class{constructor(t,e){this.h=t,this.g=e}};function ny(t){this.l=t||_b,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _b=10;function sy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iy(t){return t.h?1:t.g?t.g.size:0}function fu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mh(t,e){t.g?t.g.add(e):t.h=e}function ry(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ny.prototype.cancel=function(){if(this.i=oy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Th(t.i)}function Lh(){}Lh.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Lh.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function yb(){this.g=new Lh}function vb(t,e,n){const s=n||"";try{X_(t,function(i,r){let o=i;io(i)&&(o=Nh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function wb(t,e){const n=new _c;if(q.Image){const s=new Image;s.onload=Lo(Uo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Lo(Uo,n,s,"TestLoadImage: error",!1,e),s.onabort=Lo(Uo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Lo(Uo,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Uo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function uo(t){this.l=t.fc||null,this.j=t.ob||!1}Ye(uo,Oh);uo.prototype.g=function(){return new Ic(this.l,this.j)};uo.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Ic,Qe);var Fh=0;P=Ic.prototype;P.open=function(t,e){if(this.readyState!=Fh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=Fh};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ay(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function ay(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ho(this):qr(this),this.readyState==3&&ay(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ho(this))};P.Ya=function(t){this.g&&(this.response=t,ho(this))};P.ka=function(){this.g&&ho(this)};function ho(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Eb=q.JSON.parse;function Pe(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cy,this.L=this.M=!1}Ye(Pe,Qe);var cy="",Tb=/^https?$/i,Ib=["POST","PUT"];P=Pe.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cu.g(),this.C=this.u?ap(this.u):ap(cu),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){up(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=I_(Ib,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hy(this),0<this.B&&((this.L=Cb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=Dh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){up(this,r)}};function Cb(t){return Ii&&BS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Eh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function up(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ly(t),Cc(t)}function ly(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Cc(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cc(this,!0)),Pe.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?uy(this):this.kb())};P.kb=function(){uy(this)};function uy(t){if(t.h&&typeof Eh<"u"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)Dh(t.La,0,t);else if(et(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.I).match(J_)[1]||null;if(!i&&q.self&&q.self.location){var r=q.self.location.protocol;i=r.substr(0,r.length-1)}s=!Tb.test(i?i.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",ly(t)}}finally{Cc(t)}}}}function Cc(t,e){if(t.g){hy(t);const n=t.g,s=t.C[0]?_a:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function hy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Eb(e)}};function hp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case cy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fy(t){let e="";return Ch(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Uh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=fy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dy(t){this.Ga=0,this.i=[],this.j=new _c,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=er("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=er("baseRetryDelayMs",5e3,t),this.hb=er("retryDelaySeedMs",1e4,t),this.eb=er("forwardChannelMaxRetries",2,t),this.xa=er("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new ny(t&&t.concurrentRequestLimit),this.Ja=new yb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=dy.prototype;P.qa=8;P.H=1;function $h(t){if(py(t),t.H==3){var e=t.W++,n=xn(t.G);Ne(n,"SID",t.J),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),fo(t,n),e=new co(t,t.j,e,void 0),e.L=2,e.v=Tc(xn(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ty(e.l,null),e.g.ha(e.v)),e.G=Date.now(),lo(e)}wy(t)}function Sc(t){t.g&&(Bh(t),t.g.cancel(),t.g=null)}function py(t){Sc(t),t.u&&(q.clearTimeout(t.u),t.u=null),Ia(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function bc(t){sy(t.h)||t.m||(t.m=!0,L_(t.Na,t),t.C=0)}function Sb(t,e){return iy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=oo(lt(t.Na,t,e),vy(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new co(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=R_(r),N_(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gy(this,i,e),n=xn(this.G),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),fo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(fy(r)))+"&"+e:this.o&&Uh(n,this.o,r)),Mh(this.h,i),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),i.ba=!0,uu(i,n,null)):uu(i,n,e),this.H=2}}else this.H==3&&(t?fp(this,t):this.i.length==0||sy(this.h)||fp(this))};function fp(t,e){var n;e?n=e.m:n=t.W++;const s=xn(t.G);Ne(s,"SID",t.J),Ne(s,"RID",n),Ne(s,"AID",t.V),fo(t,s),t.o&&t.s&&Uh(s,t.o,t.s),n=new co(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=gy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mh(t.h,n),uu(n,s,e)}function fo(t,e){t.ma&&Ch(t.ma,function(n,s){Ne(e,s,n)}),t.l&&X_({},function(n,s){Ne(e,s,n)})}function gy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?lt(t.l.Va,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{vb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function my(t){t.g||t.u||(t.ba=1,L_(t.Ma,t),t.A=0)}function Vh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=oo(lt(t.Ma,t),vy(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,_y(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=oo(lt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,gt(10),Sc(this),_y(this))};function Bh(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function _y(t){t.g=new co(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xn(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.M?"0":"1"),Ne(e,"AID",t.V),Ne(e,"TYPE","xmlhttp"),fo(t,e),t.o&&t.s&&Uh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Tc(xn(e)),n.s=null,n.S=!0,W_(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Sc(this),Vh(this),gt(19))};function Ia(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function yy(t,e){var n=null;if(t.g==e){Ia(t),Bh(t),t.g=null;var s=2}else if(fu(t.h,e))n=e.F,ry(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=yc(),et(s,new H_(s,n)),bc(t)}else my(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(s==1&&Sb(t,e)||s==2&&Vh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:vs(t,5);break;case 4:vs(t,10);break;case 3:vs(t,6);break;default:vs(t,2)}}}function vy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function vs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=lt(t.pb,t);n||(n=new bs("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Ea(n,"https"),Tc(n)),wb(n.toString(),s)}else gt(2);t.H=0,t.l&&t.l.za(e),wy(t),py(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function wy(t){if(t.H=0,t.pa=[],t.l){const e=oy(t.h);(e.length!=0||t.i.length!=0)&&(tp(t.pa,e),tp(t.pa,t.i),t.h.i.length=0,Th(t.i),t.i.length=0),t.l.ya()}}function Ey(t,e,n){var s=n instanceof bs?xn(n):new bs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ta(s,s.m);else{var i=q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new bs(null,void 0);s&&Ea(r,s),e&&(r.g=e),i&&Ta(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ne(s,n,e),Ne(s,"VER",t.qa),fo(t,s),s}function Ty(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new uo({ob:!0})):new Pe(t.va),e.Oa(t.I),e}function Iy(){}P=Iy.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function Ca(){if(Ii&&!(10<=Number(jS)))throw Error("Environmental error: no available transport.")}Ca.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Qe.call(this),this.g=new dy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ya(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ji(this)}Ye(Pt,Qe);Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ey(t,null,t.Y),bc(t)};Pt.prototype.close=function(){$h(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Nh(t),t=n);e.i.push(new mb(e.fb++,t)),e.H==3&&bc(e)};Pt.prototype.N=function(){this.g.l=null,delete this.j,$h(this.g),delete this.g,Pt.$.N.call(this)};function Cy(t){xh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Cy,xh);function Sy(){Ph.call(this),this.status=1}Ye(Sy,Ph);function ji(t){this.g=t}Ye(ji,Iy);ji.prototype.Ba=function(){et(this.g,"a")};ji.prototype.Aa=function(t){et(this.g,new Cy(t))};ji.prototype.za=function(t){et(this.g,new Sy)};ji.prototype.ya=function(){et(this.g,"b")};function bb(){this.blockSize=-1}function nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(nn,bb);nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ml(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)ml(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){ml(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){ml(this,s),i=0;break}}this.h=i,this.i+=e};nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ge(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var Ab={};function jh(t){return-128<=t&&128>t?C_(Ab,t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function fn(t){if(isNaN(t)||!isFinite(t))return li;if(0>t)return Je(fn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=du;return new ge(e,0)}function by(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Je(by(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fn(Math.pow(e,8)),s=li,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=fn(Math.pow(e,r)),s=s.R(r).add(fn(o))):(s=s.R(n),s=s.add(fn(o)))}return s}var du=4294967296,li=jh(0),pu=jh(1),dp=jh(16777216);P=ge.prototype;P.ea=function(){if(Ut(this))return-Je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:du+s)*e,e*=du}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(Ut(this))return"-"+Je(this).toString(t);for(var e=fn(Math.pow(t,6)),n=this,s="";;){var i=ba(n,e).g;n=Sa(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Rn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}P.X=function(t){return t=Sa(this,t),Ut(t)?-1:Rn(t)?0:1};function Je(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ge(n,~t.h).add(pu)}P.abs=function(){return Ut(this)?Je(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Sa(t,e){return t.add(Je(e))}P.R=function(t){if(Rn(this)||Rn(t))return li;if(Ut(this))return Ut(t)?Je(this).R(Je(t)):Je(Je(this).R(t));if(Ut(t))return Je(this.R(Je(t)));if(0>this.X(dp)&&0>t.X(dp))return fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*s+2*i]+=o*c,$o(n,2*s+2*i),n[2*s+2*i+1]+=r*c,$o(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,$o(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,$o(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ge(n,0)};function $o(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function tr(t,e){this.g=t,this.h=e}function ba(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new tr(li,li);if(Ut(t))return e=ba(Je(t),e),new tr(Je(e.g),Je(e.h));if(Ut(e))return e=ba(t,Je(e)),new tr(Je(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pu,s=e;0>=s.X(t);)n=pp(n),s=pp(s);var i=Qs(n,1),r=Qs(s,1);for(s=Qs(s,2),n=Qs(n,2);!Rn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Qs(s,1),n=Qs(n,1)}return e=Sa(t,i.R(e)),new tr(i,e)}for(i=li;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=fn(n),o=r.R(e);Ut(o)||0<o.X(t);)n-=s,r=fn(n),o=r.R(e);Rn(r)&&(r=pu),i=i.add(r),t=Sa(t,o)}return new tr(i,t)}P.gb=function(t){return ba(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ge(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ge(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ge(n,this.h^t.h)};function pp(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ge(n,t.h)}function Qs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ge(i,t.h)}Ca.prototype.createWebChannel=Ca.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;vc.NO_ERROR=0;vc.TIMEOUT=8;vc.HTTP_ERROR=6;K_.COMPLETE="complete";z_.EventType=ao;ao.OPEN="a";ao.CLOSE="b";ao.ERROR="c";ao.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;nn.prototype.digest=nn.prototype.l;nn.prototype.reset=nn.prototype.reset;nn.prototype.update=nn.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=fn;ge.fromString=by;var Rb=function(){return new Ca},Nb=function(){return yc()},_l=vc,kb=K_,Db=Us,gp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ob=uo,Vo=z_,xb=Pe,Pb=nn,ui=ge;const mp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new so("@firebase/firestore");function _p(){return ks.logLevel}function $(t,...e){if(ks.logLevel<=le.DEBUG){const n=e.map(Hh);ks.debug(`Firestore (${Hi}): ${t}`,...n)}}function Pn(t,...e){if(ks.logLevel<=le.ERROR){const n=e.map(Hh);ks.error(`Firestore (${Hi}): ${t}`,...n)}}function Ci(t,...e){if(ks.logLevel<=le.WARN){const n=e.map(Hh);ks.warn(`Firestore (${Hi}): ${t}`,...n)}}function Hh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function Ae(t,e){t||z()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fb{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new Ay(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new nt(e)}}class Ub{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class $b{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ub(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.T=n.token,new Vb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=jb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function Si(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ve(0,0))}static max(){return new G(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Wr{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const Hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Wr{construct(e,n,s){return new at(e,n,s)}static isValidIdentifier(e){return Hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}function Kb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new ts(i,K.empty(),e)}function zb(t){return new ts(t.readTime,t.key,-1)}class ts{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ts(G.min(),K.empty(),-1)}static max(){return new ts(G.max(),K.empty(),-1)}}function qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Wb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function go(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Kh.ct=-1;function Ac(t){return t==null}function Aa(t){return t===0&&1/t==-1/0}function Qb(t){return typeof t=="number"&&Number.isInteger(t)&&!Aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bo(this.root,e,this.comparator,!0)}}class Bo{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??Xe.EMPTY,this.right=r??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vp(this.data.getIterator())}getIteratorFrom(e){return new vp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class vp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new ht(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ky("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=Yb.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qh(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?qh(e):e}function Gr(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:Jb(t)?9007199254740991:10:z()}function wn(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ns(s.timestampValue),o=ns(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ds(s.bytesValue).isEqual(Ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=$e(s.doubleValue),o=$e(i.doubleValue);return r===o?Aa(r)===Aa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(yp(r)!==yp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wn(r[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Yr(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=$e(i.integerValue||i.doubleValue),a=$e(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wp(t.timestampValue,e.timestampValue);case 4:return wp(Gr(t),Gr(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ds(i),a=Ds(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=he(o[c],a[c]);if(l!==0)return l}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=he($e(i.latitude),$e(r.latitude));return o!==0?o:he($e(i.longitude),$e(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bi(o[c],a[c]);if(l)return l}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===jo.mapValue&&r===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(r===jo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=he(a[u],l[u]);if(h!==0)return h;const f=bi(o[a[u]],c[l[u]]);if(f!==0)return f}return he(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function wp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=ns(t),s=ns(e),i=he(n.seconds,s.seconds);return i!==0?i:he(n.nanos,s.nanos)}function Ai(t){return gu(t)}function gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ns(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ds(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=gu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${gu(s.fields[a])}`;return r+"}"}(t.mapValue):z();var e,n}function mu(t){return!!t&&"integerValue"in t}function Wh(t){return!!t&&"arrayValue"in t}function Ep(t){return!!t&&"nullValue"in t}function Tp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function na(t){return!!t&&"mapValue"in t}function Er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Er(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Er(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Jb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Er(n)}setAll(e){let n=at.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Er(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){$s(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Tt(Er(this.value))}}function Dy(t){const e=[];return $s(t.fields,(n,s)=>{const i=new at([n]);if(na(s)){const r=Dy(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,G.min(),G.min(),G.min(),Tt.empty(),0)}static newFoundDocument(e,n,s,i){return new st(e,1,n,G.min(),s,i,0)}static newNoDocument(e,n){return new st(e,2,n,G.min(),G.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,G.min(),G.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){this.position=e,this.inclusive=n}}function Ip(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=bi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{}class je extends Oy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tA(e,n,s):n==="array-contains"?new iA(e,s):n==="in"?new rA(e,s):n==="not-in"?new oA(e,s):n==="array-contains-any"?new aA(e,s):new je(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nA(e,s):new sA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bi(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class En extends Oy{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new En(e,n)}matches(e){return xy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function xy(t){return t.op==="and"}function Py(t){return eA(t)&&xy(t)}function eA(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function _u(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(Py(t))return t.filters.map(e=>_u(e)).join(",");{const e=t.filters.map(n=>_u(n)).join(",");return`${t.op}(${e})`}}function My(t,e){return t instanceof je?function(n,s){return s instanceof je&&n.op===s.op&&n.field.isEqual(s.field)&&wn(n.value,s.value)}(t,e):t instanceof En?function(n,s){return s instanceof En&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&My(r,s.filters[o]),!0):!1}(t,e):void z()}function Ly(t){return t instanceof je?function(e){return`${e.field.canonicalString()} ${e.op} ${Ai(e.value)}`}(t):t instanceof En?function(e){return e.op.toString()+" {"+e.getFilters().map(Ly).join(" ,")+"}"}(t):"Filter"}class tA extends je{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class nA extends je{constructor(e,n){super(e,"in",n),this.keys=Fy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sA extends je{constructor(e,n){super(e,"not-in",n),this.keys=Fy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class iA extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wh(n)&&Yr(n.arrayValue,this.value)}}class rA extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yr(this.value.arrayValue,n)}}class oA extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yr(this.value.arrayValue,n)}}class aA extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Yr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Sp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new cA(t,e,n,s,i,r,o)}function Gh(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>_u(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ai(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ai(s)).join(",")),e.ft=n}return e.ft}function Qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!My(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cp(t.startAt,e.startAt)&&Cp(t.endAt,e.endAt)}function yu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function lA(t,e,n,s,i,r,o,a){return new Rc(t,e,n,s,i,r,o,a)}function Nc(t){return new Rc(t)}function bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hA(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function fA(t){return t.collectionGroup!==null}function hi(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=hA(e),s=uA(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Tr(n)),e.dt.push(new Tr(at.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Tr(at.keyField(),r))}}}return e.dt}function Mn(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=Sp(e.path,e.collectionGroup,hi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of hi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Tr(r.field,o))}const s=e.endAt?new Ra(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ra(e.startAt.position,e.startAt.inclusive):null;e._t=Sp(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function vu(t,e,n){return new Rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kc(t,e){return Qh(Mn(t),Mn(e))&&t.limitType===e.limitType}function Uy(t){return`${Gh(Mn(t))}|lt:${t.limitType}`}function wu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ly(s)).join(", ")}]`),Ac(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ai(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ai(s)).join(",")),`Target(${n})`}(Mn(t))}; limitType=${t.limitType})`}function Dc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of hi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ip(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,hi(n),s)||n.endAt&&!function(i,r,o){const a=Ip(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,hi(n),s))}(t,e)}function dA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $y(t){return(e,n)=>{let s=!1;for(const i of hi(t)){const r=pA(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function pA(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?bi(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ny(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=new xe(K.comparator);function Ln(){return gA}const Vy=new xe(K.comparator);function ur(...t){let e=Vy;for(const n of t)e=e.insert(n.key,n);return e}function By(t){let e=Vy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ws(){return Ir()}function jy(){return Ir()}function Ir(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new xe(K.comparator),_A=new ht(K.comparator);function te(...t){let e=_A;for(const n of t)e=e.add(n);return e}const yA=new ht(he);function vA(){return yA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Aa(e)?"-0":e}}function Ky(t){return{integerValue:""+t}}function wA(t,e){return Qb(e)?Ky(e):Hy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this._=void 0}}function EA(t,e,n){return t instanceof Na?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zh(i)&&(i=qh(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ri?qy(t,e):t instanceof Ni?Wy(t,e):function(s,i){const r=zy(s,i),o=Ap(r)+Ap(s.wt);return mu(r)&&mu(s.wt)?Ky(o):Hy(s.serializer,o)}(t,e)}function TA(t,e,n){return t instanceof Ri?qy(t,e):t instanceof Ni?Wy(t,e):n}function zy(t,e){return t instanceof ka?mu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Na extends Oc{}class Ri extends Oc{constructor(e){super(),this.elements=e}}function qy(t,e){const n=Gy(e);for(const s of t.elements)n.some(i=>wn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ni extends Oc{constructor(e){super(),this.elements=e}}function Wy(t,e){let n=Gy(e);for(const s of t.elements)n=n.filter(i=>!wn(i,s));return{arrayValue:{values:n}}}class ka extends Oc{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Ap(t){return $e(t.integerValue||t.doubleValue)}function Gy(t){return Wh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n){this.field=e,this.transform=n}}function IA(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ri&&s instanceof Ri||n instanceof Ni&&s instanceof Ni?Si(n.elements,s.elements,wn):n instanceof ka&&s instanceof ka?wn(n.wt,s.wt):n instanceof Na&&s instanceof Na}(t.transform,e.transform)}class CA{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function Yy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jy(t.key,gn.none()):new mo(t.key,t.data,gn.none());{const n=t.data,s=Tt.empty();let i=new ht(at.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new as(t.key,s,new Dt(i.toArray()),gn.none())}}function SA(t,e,n){t instanceof mo?function(s,i,r){const o=s.value.clone(),a=Np(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,r){if(!sa(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Np(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Xy(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Cr(t,e,n,s){return t instanceof mo?function(i,r,o,a){if(!sa(i.precondition,r))return o;const c=i.value.clone(),l=kp(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof as?function(i,r,o,a){if(!sa(i.precondition,r))return o;const c=kp(i.fieldTransforms,a,r),l=r.data;return l.setAll(Xy(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return sa(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function bA(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=zy(s.transform,i||null);r!=null&&(n===null&&(n=Tt.empty()),n.set(s.field,r))}return n||null}function Rp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Si(n,s,(i,r)=>IA(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mo extends xc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class as extends xc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Xy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Np(t,e,n){const s=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,TA(o,a,n[i]))}return s}function kp(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,EA(r,o,e))}return s}class Jy extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AA extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&SA(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=jy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Yy(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,s)=>Rp(n,s))&&Si(this.baseMutations,e.baseMutations,(n,s)=>Rp(n,s))}}class Yh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ae(e.mutations.length===s.length);let i=mA;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Yh(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,se;function DA(t){switch(t){default:return z();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Zy(t){if(t===void 0)return Pn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ue.OK:return S.OK;case Ue.CANCELLED:return S.CANCELLED;case Ue.UNKNOWN:return S.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return S.INTERNAL;case Ue.UNAVAILABLE:return S.UNAVAILABLE;case Ue.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ue.NOT_FOUND:return S.NOT_FOUND;case Ue.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ue.ABORTED:return S.ABORTED;case Ue.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ue.DATA_LOSS:return S.DATA_LOSS;default:return z()}}(se=Ue||(Ue={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ho}static getOrCreateInstance(){return Ho===null&&(Ho=new Xh),Ho}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ho=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=new ui([4294967295,4294967295],0);function Dp(t){const e=OA().encode(t),n=new Pb;return n.update(e),new Uint8Array(n.digest())}function Op(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new ui([n,s],0),new ui([i,r],0)]}class Jh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new hr(`Invalid padding: ${n}`);if(s<0)throw new hr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new hr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=ui.fromNumber(this.yt)}Tt(e,n,s){let i=e.add(n.multiply(ui.fromNumber(s)));return i.compare(xA)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Dp(e),[s,i]=Op(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);if(!this.Et(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Jh(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Dp(e),[s,i]=Op(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Pc(G.min(),i,new xe(he),Ln(),te())}}class _o{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new _o(s,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,s,i){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=i}}class ev{constructor(e,n){this.targetId=e,this.bt=n}}class tv{constructor(e,n,s=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class xp{constructor(){this.Vt=0,this.St=Mp(),this.Dt=ft.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=te(),n=te(),s=te();return this.St.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:z()}}),new _o(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Mp()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class PA{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Ln(),this.jt=Pp(),this.zt=new xe(he)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const s=e.targetId,i=e.bt.count,r=this.ne(s);if(r){const o=r.target;if(yu(o))if(i===0){const a=new K(o.path);this.Jt(s,a,st.newNoDocument(a,G.min()))}else Ae(i===1);else{const a=this.se(s);if(a!==i){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=Xh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,p,m,_,v,T;const N={localCacheCount:u,existenceFilterCount:h.count},E=h.unchangedNames;return E&&(N.bloomFilter={applied:l===0,hashCount:(f=E==null?void 0:E.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(_=(m=(p=E==null?void 0:E.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&_!==void 0?_:0,padding:(T=(v=E==null?void 0:E.bits)===null||v===void 0?void 0:v.padding)!==null&&T!==void 0?T:0}),N}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:i}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=Ds(r).toUint8Array()}catch(u){if(u instanceof ky)return Ci("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Jh(c,o,a)}catch(u){return Ci(u instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:i!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.At(a)||(this.Jt(e,r,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((r,o)=>{const a=this.ne(o);if(a){if(r.current&&yu(a.target)){const c=new K(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,st.newNoDocument(c,e))}r.kt&&(n.set(o,r.Ot()),r.$t())}});let s=te();this.jt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Qt.forEach((r,o)=>o.setReadTime(e));const i=new Pc(e,n,this.zt,this.Qt,s);return this.Qt=Ln(),this.jt=Pp(),this.zt=new xe(he),i}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new xp,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ht(he),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new xp),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Pp(){return new xe(K.comparator)}function Mp(){return new xe(K.comparator)}const MA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),LA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),FA=(()=>({and:"AND",or:"OR"}))();class UA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Eu(t,e){return t.useProto3Json||Ac(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $A(t,e){return Da(t,e.toTimestamp())}function mn(t){return Ae(!!t),G.fromTimestamp(function(e){const n=ns(e);return new Ve(n.seconds,n.nanos)}(t))}function Zh(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sv(t){const e=ke.fromString(t);return Ae(av(e)),e}function Tu(t,e){return Zh(t.databaseId,e.path)}function yl(t,e){const n=sv(e);if(n.get(1)!==t.databaseId.projectId)throw new H(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(iv(n))}function Iu(t,e){return Zh(t.databaseId,e)}function VA(t){const e=sv(t);return e.length===4?ke.emptyPath():iv(e)}function Cu(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iv(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lp(t,e,n){return{name:Tu(t,e),fields:n.value.mapValue.fields}}function BA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(Ae(l===void 0||typeof l=="string"),ft.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),ft.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:Zy(c.code);return new H(l,c.message||"")}(o);n=new tv(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=yl(t,s.document.name),r=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):G.min(),a=new Tt({mapValue:{fields:s.document.fields}}),c=st.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ia(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=yl(t,s.document),r=s.readTime?mn(s.readTime):G.min(),o=st.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ia([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=yl(t,s.document),r=s.removedTargetIds||[];n=new ia([],r,i,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new kA(i,r),a=s.targetId;n=new ev(a,o)}}return n}function jA(t,e){let n;if(e instanceof mo)n={update:Lp(t,e.key,e.value)};else if(e instanceof Jy)n={delete:Tu(t,e.key)};else if(e instanceof as)n={update:Lp(t,e.key,e.data),updateMask:XA(e.fieldMask)};else{if(!(e instanceof AA))return z();n={verify:Tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Na)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ri)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ni)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ka)return{fieldPath:r.field.canonicalString(),increment:o.wt};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function HA(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?mn(s.updateTime):mn(i);return r.isEqual(G.min())&&(r=mn(i)),new CA(r,s.transformResults||[])}(n,e))):[]}function KA(t,e){return{documents:[Iu(t,e.path)]}}function zA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Iu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Iu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return ov(En.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Zs(u.field),direction:GA(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Eu(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function qA(t){let e=VA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=rv(u);return h instanceof En&&Py(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Tr(ei(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ac(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ra(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ra(f,h)}(n.endAt)),lA(e,i,o,r,a,"F",c,l)}function WA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ei(e.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ei(e.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ei(e.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ei(e.unaryFilter.field);return je.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return je.create(ei(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return En.create(e.compositeFilter.filters.map(n=>rv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function GA(t){return MA[t]}function QA(t){return LA[t]}function YA(t){return FA[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ei(t){return at.fromServerFormat(t.fieldPath)}function ov(t){return t instanceof je?function(e){if(e.op==="=="){if(Tp(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NAN"}};if(Ep(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tp(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NOT_NAN"}};if(Ep(e.value))return{unaryFilter:{field:Zs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(e.field),op:QA(e.op),value:e.value}}}(t):t instanceof En?function(e){const n=e.getFilters().map(s=>ov(s));return n.length===1?n[0]:{compositeFilter:{op:YA(e.op),filters:n}}}(t):z()}function XA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function av(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,s,i,r=G.min(),o=G.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.le=e}}function ZA(t){const e=qA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.sn=new tR}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(ts.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class tR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ht(ke.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ht(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ki(0)}static kn(){return new ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Cr(s.mutation,i,Dt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const i=ws();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ur();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Ln();const o=Ir(),a=Ir();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof as)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Cr(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new sR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ir();let i=new xe((o,a)=>o-a),r=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||te()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=jy();u.forEach(f=>{if(!r.has(f)){const p=Yy(n.get(f),s.get(f));p!==null&&h.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(ws());let a=-1,c=r;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:By(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let i=ur();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ur();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Rc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,st.newInvalidDocument(l)))});let o=ur();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Cr(l.mutation,c,Dt.empty(),Ve.now()),Dc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return A.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:mn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:ZA(s.bundledQuery),readTime:mn(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.overlays=new xe(K.comparator),this.hs=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ws();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.de(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hs.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=ws(),r=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=ws(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ws(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return A.resolve(a)}de(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(s.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new NA(n,s));let r=this.hs.get(n);r===void 0&&(r=te(),this.hs.set(n,r)),this.hs.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.ls=new ht(ze.fs),this.ds=new ht(ze._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new ze(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new ze(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new K(new ke([])),s=new ze(n,e),i=new ze(n,e+1),r=[];return this.ds.forEachInRange([s,i],o=>{this.gs(o),r.push(o.key)}),r}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new K(new ke([])),s=new ze(n,e),i=new ze(n,e+1);let r=te();return this.ds.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ze(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return K.comparator(e.key,n.key)||he(e.Es,n.Es)}static _s(e,n){return he(e.Es,n.Es)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ht(ze.fs)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RA(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ze(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ps(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.vs(o.Es);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ht(he);return n.forEach(i=>{const r=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.Es)})}),A.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;K.isDocumentKey(r)||(r=r.child(""));const o=new ze(new K(r),0);let a=new ht(he);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.Es)),!0)},o),A.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const i=this.vs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,i=>{const r=new ze(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new ze(n,0),i=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.Ss=e,this.docs=new xe(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let s=Ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():st.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Ln();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||qb(zb(u),s)<=0||(i.has(u.key)||Dc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){z()}Ds(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new lR(this)}getSize(e){return A.resolve(this.size)}}class lR extends nR{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.persistence=e,this.Cs=new Ki(n=>Gh(n),Qh),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.xs=0,this.Ns=new ef,this.targetCount=0,this.ks=ki.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),A.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.$n(n),A.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Kh(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new uR(this),this.indexManager=new eR,this.remoteDocumentCache=function(s){return new cR(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new JA(n),this.Ls=new rR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new aR(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new fR(this.Os.next());return this.referenceDelegate.qs(),s(i).next(r=>this.referenceDelegate.Us(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ks(e,n){return A.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class fR extends Gb{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Gs=new ef,this.Qs=null}static js(e){return new tf(e)}get zs(){if(this.Qs)return this.Qs;throw z()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.zs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.zs,s=>{const i=K.fromPath(s);return this.Ws(e,i).next(r=>{r||n.removeEntry(i,G.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return A.or([()=>A.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=i}static Bi(e,n){let s=te(),i=te();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new nf(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ui(e,n).next(r=>r||this.Ki(e,n,i,s)).next(r=>r||this.Gi(e,n))}Ui(e,n){if(bp(n))return A.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vu(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=te(...r);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,vu(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,i){return bp(n)||i.isEqual(G.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(r=>{const o=this.Qi(n,r);return this.ji(n,o,s,i)?this.Gi(e,n):(_p()<=le.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wu(n)),this.zi(e,o,n,Kb(i,-1)))})}Qi(e,n){let s=new ht($y(e));return n.forEach((i,r)=>{Dc(e,r)&&(s=s.add(r))}),s}ji(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Gi(e,n){return _p()<=le.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",wu(n)),this.qi.getDocumentsMatchingQuery(e,n,ts.min())}zi(e,n,s,i){return this.qi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,s,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new xe(he),this.Ji=new Ki(r=>Gh(r),Qh),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function gR(t,e,n,s){return new pR(t,e,n,s)}async function cv(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=te();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function mR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const _=c.docVersions.get(p);Ae(_!==null),m.version.compareTo(_)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function lv(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function _R(t,e){const n=Y(t),s=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(r,u.addedDocuments,h)));let p=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,p,u)&&a.push(n.Fs.updateTargetData(r,p))});let c=Ln(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(yR(r,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(G.min())){const u=n.Fs.getLastRemoteSnapshotVersion(r).next(h=>n.Fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Hi=i,r))}function yR(t,e,n){let s=te(),i=te();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Ln();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:i}})}function vR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function wR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Fs.getTargetData(s,e).next(r=>r?(i=r,A.resolve(i)):n.Fs.allocateTargetId(s).next(o=>(i=new Wn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Hi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function Su(t,e,n){const s=Y(t),i=s.Hi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!go(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(i.target)}function Fp(t,e,n){const s=Y(t);let i=G.min(),r=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.Ji.get(l);return h!==void 0?A.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?r:te())).next(a=>(ER(s,dA(e),a),{documents:a,sr:r})))}function ER(t,e,n){let s=t.Yi.get(e)||G.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Yi.set(e,s)}class Up{constructor(){this.activeTargetIds=vA()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TR{constructor(){this.Wr=new Up,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Up,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko=null;function vl(){return Ko===null?Ko=268435456+Math.round(2147483648*Math.random()):Ko++,"0x"+Ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class bR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,i,r){const o=vl(),a=this.Io(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,i,r),this.Eo(e,a,c,s).then(l=>($("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ci("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,i,r,o){return this.po(e,n,s,i,r)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Io(e,n){const s=CR[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,i){const r=vl();return new Promise((o,a)=>{const c=new xb;c.setWithCredentials(!0),c.listenOnce(kb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _l.NO_ERROR:const u=c.getResponseJson();$(tt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case _l.TIMEOUT:$(tt,`RPC '${e}' ${r} timed out`),a(new H(S.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const h=c.getStatus();if($(tt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(v)>=0?v:S.UNKNOWN}(p.status);a(new H(m,p.message))}else a(new H(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(S.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{$(tt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);$(tt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const i=vl(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rb(),a=Nb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Ob({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=r.join("");$(tt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,f=!1;const p=new SR({io:_=>{f?$(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||($(tt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),$(tt,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},ro:()=>u.close()}),m=(_,v,T)=>{_.listen(v,N=>{try{T(N)}catch(E){setTimeout(()=>{throw E},0)}})};return m(u,Vo.EventType.OPEN,()=>{f||$(tt,`RPC '${e}' stream ${i} transport opened.`)}),m(u,Vo.EventType.CLOSE,()=>{f||(f=!0,$(tt,`RPC '${e}' stream ${i} transport closed`),p.fo())}),m(u,Vo.EventType.ERROR,_=>{f||(f=!0,Ci(tt,`RPC '${e}' stream ${i} transport errored:`,_),p.fo(new H(S.UNAVAILABLE,"The operation could not be completed")))}),m(u,Vo.EventType.MESSAGE,_=>{var v;if(!f){const T=_.data[0];Ae(!!T);const N=T,E=N.error||((v=N[0])===null||v===void 0?void 0:v.error);if(E){$(tt,`RPC '${e}' stream ${i} received error:`,E);const M=E.status;let J=function(Ee){const ve=Ue[Ee];if(ve!==void 0)return Zy(ve)}(M),oe=E.message;J===void 0&&(J=S.INTERNAL,oe="Unknown error status: "+M+" with message "+E.message),f=!0,p.fo(new H(J,oe)),u.close()}else $(tt,`RPC '${e}' stream ${i} received:`,T),p._o(T)}}),m(a,Db.STAT_EVENT,_=>{_.stat===gp.PROXY?$(tt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===gp.NOPROXY&&$(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function wl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new UA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=i,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,s,i,r,o,a,c){this.si=e,this.Mo=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new uv(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.$o===n&&this.Xo(s,i)},s=>{e(()=>{const i=new H(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(i)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{s(()=>this.Zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AR extends hv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=BA(this.serializer,e),s=function(i){if(!("targetChange"in i))return G.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?G.min():r.readTime?mn(r.readTime):G.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Cu(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=yu(a)?{documents:KA(i,a)}:{query:zA(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=nv(i,r.resumeToken);const c=Eu(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(G.min())>0){o.readTime=Da(i,r.snapshotVersion.toTimestamp());const c=Eu(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=WA(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Cu(this.serializer),n.removeTarget=e,this.zo(n)}}class RR extends hv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=HA(e.writeResults,e.commitTime),s=mn(e.commitTime);return this.listener.uu(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Cu(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>jA(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new H(S.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.po(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(S.UNKNOWN,i.toString())})}Ao(e,n,s,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(S.UNKNOWN,r.toString())})}terminate(){this.hu=!0}}class kR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Pn(n),this.wu=!1):$("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=r,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Vs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.Au.add(4),await yo(c),c.Pu.set("Unknown"),c.Au.delete(4),await Lc(c)}(this))})}),this.Pu=new kR(s,i)}}async function Lc(t){if(Vs(t))for(const e of t.Ru)await e(!0)}async function yo(t){for(const e of t.Ru)await e(!1)}function fv(t,e){const n=Y(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),of(n)?rf(n):zi(n).Uo()&&sf(n,e))}function dv(t,e){const n=Y(t),s=zi(n);n.Eu.delete(e),s.Uo()&&pv(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():Vs(n)&&n.Pu.set("Unknown"))}function sf(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zi(t).nu(e)}function pv(t,e){t.bu.Lt(e),zi(t).su(e)}function rf(t){t.bu=new PA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),zi(t).start(),t.Pu.mu()}function of(t){return Vs(t)&&!zi(t).qo()&&t.Eu.size>0}function Vs(t){return Y(t).Au.size===0}function gv(t){t.bu=void 0}async function OR(t){t.Eu.forEach((e,n)=>{sf(t,e)})}async function xR(t,e){gv(t),of(t)?(t.Pu.pu(e),rf(t)):t.Pu.set("Unknown")}async function PR(t,e,n){if(t.Pu.set("Online"),e instanceof tv&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Oa(t,s)}else if(e instanceof ia?t.bu.Wt(e):e instanceof ev?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(G.min()))try{const s=await lv(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.bu.ue(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Eu.get(c);l&&i.Eu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const l=i.Eu.get(a);if(!l)return;i.Eu.set(a,l.withResumeToken(ft.EMPTY_BYTE_STRING,l.snapshotVersion)),pv(i,a);const u=new Wn(l.target,a,c,l.sequenceNumber);sf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Oa(t,s)}}async function Oa(t,e,n){if(!go(e))throw e;t.Au.add(1),await yo(t),t.Pu.set("Offline"),n||(n=()=>lv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Lc(t)})}function mv(t,e){return e().catch(n=>Oa(t,n,e))}async function Fc(t){const e=Y(t),n=ss(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;MR(e);)try{const i=await vR(e.localStore,s);if(i===null){e.Tu.length===0&&n.Qo();break}s=i.batchId,LR(e,i)}catch(i){await Oa(e,i)}_v(e)&&yv(e)}function MR(t){return Vs(t)&&t.Tu.length<10}function LR(t,e){t.Tu.push(e);const n=ss(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function _v(t){return Vs(t)&&!ss(t).qo()&&t.Tu.length>0}function yv(t){ss(t).start()}async function FR(t){ss(t).au()}async function UR(t){const e=ss(t);for(const n of t.Tu)e.ou(n.mutations)}async function $R(t,e,n){const s=t.Tu.shift(),i=Yh.from(s,e,n);await mv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fc(t)}async function VR(t,e){e&&ss(t).ru&&await async function(n,s){if(i=s.code,DA(i)&&i!==S.ABORTED){const r=n.Tu.shift();ss(n).Go(),await mv(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Fc(n)}var i}(t,e),_v(t)&&yv(t)}async function Vp(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=Vs(n);n.Au.add(3),await yo(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Lc(n)}async function BR(t,e){const n=Y(t);e?(n.Au.delete(2),await Lc(n)):e||(n.Au.add(2),await yo(n),n.Pu.set("Unknown"))}function zi(t){return t.Vu||(t.Vu=function(e,n,s){const i=Y(e);return i.lu(),new AR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:OR.bind(null,t),co:xR.bind(null,t),eu:PR.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),of(t)?rf(t):t.Pu.set("Unknown")):(await t.Vu.stop(),gv(t))})),t.Vu}function ss(t){return t.Su||(t.Su=function(e,n,s){const i=Y(e);return i.lu(),new RR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:FR.bind(null,t),co:VR.bind(null,t),cu:UR.bind(null,t),uu:$R.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Fc(t)):(await t.Su.stop(),t.Tu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new af(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),go(t))return new H(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=ur(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new fi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.Du=new xe(K.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):z():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Di{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Di(e,n,fi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.xu=void 0,this.listeners=[]}}class HR{constructor(){this.queries=new Ki(e=>Uy(e),kc),this.onlineState="Unknown",this.Nu=new Set}}async function lf(t,e){const n=Y(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new jR),i)try{r.xu=await n.onListen(s)}catch(o){const a=cf(o,`Initialization of query '${wu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.ku(n.onlineState),r.xu&&e.Mu(r.xu)&&hf(n)}async function uf(t,e){const n=Y(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function KR(t,e){const n=Y(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Mu(i)&&(s=!0);o.xu=i}}s&&hf(n)}function zR(t,e,n){const s=Y(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function hf(t){t.Nu.forEach(e=>{e.next()})}class ff{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.key=e}}class wv{constructor(e){this.key=e}}class qR{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=te(),this.mutatedKeys=te(),this.Zu=$y(e),this.tc=new fi(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Bp,i=n?n.tc:this.tc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=Dc(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),v=!0):this.ic(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Zu(p,c)>0||l&&this.Zu(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:r}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const r=e.sc.Cu();r.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return p(h)-p(f)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,r.length!==0||c?{snapshot:new Di(this.query,e.tc,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Bp,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=te(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new wv(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new vv(s))}),n}ac(e){this.Ju=e.sr,this.Xu=te();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Di.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class WR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class GR{constructor(e){this.key=e,this.lc=!1}}class QR{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ki(a=>Uy(a),kc),this._c=new Map,this.wc=new Set,this.mc=new xe(K.comparator),this.gc=new Map,this.yc=new ef,this.Ic={},this.Tc=new Map,this.Ec=ki.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function YR(t,e){const n=oN(t);let s,i;const r=n.dc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.hc();else{const o=await wR(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await XR(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&fv(n.remoteStore,o)}return i}async function XR(t,e,n,s,i){t.Rc=(h,f,p)=>async function(m,_,v,T){let N=_.view.nc(v);N.ji&&(N=await Fp(m.localStore,_.query,!1).then(({documents:J})=>_.view.nc(J,N)));const E=T&&T.targetChanges.get(_.targetId),M=_.view.applyChanges(N,m.isPrimaryClient,E);return Hp(m,_.targetId,M.uc),M.snapshot}(t,h,f,p);const r=await Fp(t.localStore,e,!0),o=new qR(e,r.sr),a=o.nc(r.documents),c=_o.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Hp(t,n,l.uc);const u=new WR(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function JR(t,e){const n=Y(t),s=n.dc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!kc(r,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Su(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dv(n.remoteStore,s.targetId),bu(n,s.targetId)}).catch(po)):(bu(n,s.targetId),await Su(n.localStore,s.targetId,!0))}async function ZR(t,e,n){const s=aN(t);try{const i=await function(r,o){const a=Y(r),c=Ve.now(),l=o.reduce((f,p)=>f.add(p.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Ln(),m=te();return a.Xi.getEntries(f,l).next(_=>{p=_,p.forEach((v,T)=>{T.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(_=>{u=_;const v=[];for(const T of o){const N=bA(T,u.get(T.key).overlayedDocument);N!=null&&v.push(new as(T.key,N,Dy(N.value.mapValue),gn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(_=>{h=_;const v=_.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,_.batchId,v)})}).then(()=>({batchId:h.batchId,changes:By(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Ic[r.currentUser.toKey()];c||(c=new xe(he)),c=c.insert(o,a),r.Ic[r.currentUser.toKey()]=c}(s,i.batchId,n),await vo(s,i.changes),await Fc(s.remoteStore)}catch(i){const r=cf(i,"Failed to persist write");n.reject(r)}}async function Ev(t,e){const n=Y(t);try{const s=await _R(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.gc.get(r);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?Ae(o.lc):i.removedDocuments.size>0&&(Ae(o.lc),o.lc=!1))}),await vo(n,s,e)}catch(s){await po(s)}}function jp(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.dc.forEach((r,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Y(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&hf(a)}(s.eventManager,e),i.length&&s.fc.eu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function eN(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.gc.get(e),r=i&&i.key;if(r){let o=new xe(K.comparator);o=o.insert(r,st.newNoDocument(r,G.min()));const a=te().add(r),c=new Pc(G.min(),new Map,new xe(he),o,a);await Ev(s,c),s.mc=s.mc.remove(r),s.gc.delete(e),df(s)}else await Su(s.localStore,e,!1).then(()=>bu(s,e,n)).catch(po)}async function tN(t,e){const n=Y(t),s=e.batch.batchId;try{const i=await mR(n.localStore,e);Iv(n,s,null),Tv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await vo(n,i)}catch(i){await po(i)}}async function nN(t,e,n){const s=Y(t);try{const i=await function(r,o){const a=Y(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Iv(s,e,n),Tv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await vo(s,i)}catch(i){await po(i)}}function Tv(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Iv(t,e,n){const s=Y(t);let i=s.Ic[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ic[s.currentUser.toKey()]=i}}function bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||Cv(t,s)})}function Cv(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(dv(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),df(t))}function Hp(t,e,n){for(const s of n)s instanceof vv?(t.yc.addReference(s.key,e),sN(t,s)):s instanceof wv?($("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||Cv(t,s.key)):z()}function sN(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||($("SyncEngine","New document in limbo: "+n),t.wc.add(s),df(t))}function df(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new K(ke.fromString(e)),s=t.Ec.next();t.gc.set(s,new GR(n)),t.mc=t.mc.insert(n,s),fv(t.remoteStore,new Wn(Mn(Nc(n.path)),s,"TargetPurposeLimboResolution",Kh.ct))}}async function vo(t,e,n){const s=Y(t),i=[],r=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=nf.Bi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.fc.eu(i),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.$i,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Fi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!go(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Hi.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Hi=l.Hi.insert(h,m)}}}(s.localStore,r))}async function iN(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await cv(n.localStore,e);n.currentUser=e,function(i,r){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new H(S.CANCELLED,r))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vo(n,s.tr)}}function rN(t,e){const n=Y(t),s=n.gc.get(e);if(s&&s.lc)return te().add(s.key);{let i=te();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function oN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eN.bind(null,e),e.fc.eu=KR.bind(null,e.eventManager),e.fc.vc=zR.bind(null,e.eventManager),e}function aN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nN.bind(null,e),e}class Kp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return gR(this.persistence,new dR,e.initialUser,this.serializer)}createPersistence(e){return new hR(tf.js,this.serializer)}createSharedClientState(e){return new TR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=iN.bind(null,this.syncEngine),await BR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HR}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new bR(i));var i;return function(r,o,a,c){return new NR(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>jp(this.syncEngine,a,0),o=$p.D()?new $p:new IR,new DR(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new QR(s,i,r,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);$("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await yo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Ry.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=cf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await cv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hN(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Vp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Vp(e.remoteStore,r)),t._onlineComponents=e}function uN(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function hN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await El(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uN(n))throw n;Ci("Error using user provided cache. Falling back to memory cache: "+n),await El(t,new Kp)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await El(t,new Kp);return t._offlineComponents}async function Sv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await zp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await zp(t,new cN))),t._onlineComponents}function fN(t){return Sv(t).then(e=>e.syncEngine)}async function xa(t){const e=await Sv(t),n=e.eventManager;return n.onListen=YR.bind(null,e.syncEngine),n.onUnlisten=JR.bind(null,e.syncEngine),n}function dN(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new pf({next:h=>{r.enqueueAndForget(()=>uf(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new H(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new H(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ff(Nc(o.path),l,{includeMetadataChanges:!0,Uu:!0});return lf(i,u)}(await xa(t),t.asyncQueue,e,n,s)),s.promise}function pN(t,e,n={}){const s=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new pf({next:h=>{r.enqueueAndForget(()=>uf(i,u)),h.fromCache&&a.source==="server"?c.reject(new H(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ff(o,l,{includeMetadataChanges:!0,Uu:!0});return lf(i,u)}(await xa(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e,n){if(!n)throw new H(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gN(t,e,n,s){if(e===!0&&s===!0)throw new H(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wp(t){if(!K.isDocumentKey(t))throw new H(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gp(t){if(K.isDocumentKey(t))throw new H(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gf(t);throw new H(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Mb;switch(n.type){case"firstParty":return new $b(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qp.get(e);n&&($("ComponentProvider","Removing Datastore"),qp.delete(e),n.terminate())}(this),Promise.resolve()}}function mN(t,e,n,s={}){var i;const r=(t=Vt(t,Uc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ci("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=hC(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(c)}t._authCredentials=new Lb(new Ay(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class wo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wo(this.firestore,e,this._query)}}class Jn extends wo{constructor(e,n,s){super(e,n,Nc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new K(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function mf(t,e,...n){if(t=At(t),bv("collection","path",e),t instanceof Uc){const s=ke.fromString(e,...n);return Gp(s),new Jn(t,null,s)}{if(!(t instanceof _t||t instanceof Jn))throw new H(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return Gp(s),new Jn(t.firestore,null,s)}}function Av(t,e,...n){if(t=At(t),arguments.length===1&&(e=Ry.A()),bv("doc","path",e),t instanceof Uc){const s=ke.fromString(e,...n);return Wp(s),new _t(t,null,new K(s))}{if(!(t instanceof _t||t instanceof Jn))throw new H(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return Wp(s),new _t(t.firestore,t instanceof Jn?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new uv(this,"async_queue_retry"),this.Yc=()=>{const n=wl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=wl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=wl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new kn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!go(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Pn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=af.createAndSchedule(this,e,n,s,r=>this.ea(r));return this.jc.push(i),i}Xc(){this.zc&&z()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Yp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xs extends Uc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new _N,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rv(this),this._firestoreClient.terminate()}}function yN(t,e){const n=typeof t=="object"?t:w_(),s=typeof t=="string"?t:e||"(default)",i=vS(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=cC("firestore");r&&mN(i,...r)}return i}function $c(t){return t._firestoreClient||Rv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rv(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,l){return new Xb(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lN(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(ft.fromBase64String(e))}catch(n){throw new H(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=/^__.*__$/;class wN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new mo(e,this.data,n,this.fieldTransforms)}}class Nv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class jc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.oa(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:s,ha:!1});return i.la(e),i}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:s,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Pa(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(kv(this.ua)&&vN.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class EN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Mc(e)}ga(e,n,s,i=!1){return new jc({ua:e,methodName:n,ma:s,path:at.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dv(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new EN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TN(t,e,n,s,i,r={}){const o=t.ga(r.merge||r.mergeFields?2:0,e,n,i);_f("Data must be an object, but it was:",o,s);const a=xv(s,o);let c,l;if(r.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=Au(e,h,n);if(!o.contains(f))throw new H(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Mv(u,f)||u.push(f)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new wN(new Tt(a),c,l)}class Hc extends Eo{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hc}}function Ov(t,e,n){return new jc({ua:3,ma:e.settings.ma,methodName:t._methodName,ha:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class IN extends Eo{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=Ov(this,e,!0),s=this.ya.map(r=>qi(r,n)),i=new Ri(s);return new Qy(e.path,i)}isEqual(e){return this===e}}class CN extends Eo{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=Ov(this,e,!0),s=this.ya.map(r=>qi(r,n)),i=new Ni(s);return new Qy(e.path,i)}isEqual(e){return this===e}}function SN(t,e,n,s){const i=t.ga(1,e,n);_f("Data must be an object, but it was:",i,s);const r=[],o=Tt.empty();$s(s,(c,l)=>{const u=yf(e,c,n);l=At(l);const h=i.fa(u);if(l instanceof Hc)r.push(u);else{const f=qi(l,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new Dt(r);return new Nv(o,a,i.fieldTransforms)}function bN(t,e,n,s,i,r){const o=t.ga(1,e,n),a=[Au(e,s,n)],c=[i];if(r.length%2!=0)throw new H(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Au(e,r[f])),c.push(r[f+1]);const l=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!Mv(l,a[f])){const p=a[f];let m=c[f];m=At(m);const _=o.fa(p);if(m instanceof Hc)l.push(p);else{const v=qi(m,_);v!=null&&(l.push(p),u.set(p,v))}}const h=new Dt(l);return new Nv(u,h,o.fieldTransforms)}function qi(t,e){if(Pv(t=At(t)))return _f("Unsupported field value:",e,t),xv(t,e);if(t instanceof Eo)return function(n,s){if(!kv(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=qi(o,s.da(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=At(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wA(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:Da(s.serializer,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Da(s.serializer,i)}}if(n instanceof Bc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Oi)return{bytesValue:nv(s.serializer,n._byteString)};if(n instanceof _t){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${gf(n)}`)}(t,e)}function xv(t,e){const n={};return Ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(s,i)=>{const r=qi(i,e.aa(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Pv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Bc||t instanceof Oi||t instanceof _t||t instanceof Eo)}function _f(t,e,n){if(!Pv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=gf(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Au(t,e,n){if((e=At(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return yf(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const AN=new RegExp("[~\\*/\\[\\]]");function yf(t,e,n){if(e.search(AN)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new H(S.INVALID_ARGUMENT,a+t+c)}function Mv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RN extends Lv{data(){return super.data()}}function Fv(t,e){return typeof e=="string"?yf(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NN{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return $s(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Bc($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=qh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const n=ns(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);Ae(av(s));const i=new Qr(s.get(1),s.get(3)),r=new K(s.popFirst(5));return i.isEqual(n)||Pn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $v extends Lv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ra extends $v{data(e={}){return super.data(e)}}class Vv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ra(this._firestore,this._userDataWriter,s.key,s,new fr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ra(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ra(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:DN(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){t=Vt(t,_t);const e=Vt(t.firestore,xs);return dN($c(e),t._key).then(n=>Hv(e,t,n))}class vf extends NN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function ON(t){t=Vt(t,wo);const e=Vt(t.firestore,xs),n=$c(e),s=new vf(e);return Uv(t._query),pN(n,t._query).then(i=>new Vv(e,s,t,i))}function xN(t,e,n){t=Vt(t,_t);const s=Vt(t.firestore,xs),i=kN(t.converter,e,n);return jv(s,[TN(Dv(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,gn.none())])}function Xp(t,e,n,...s){t=Vt(t,_t);const i=Vt(t.firestore,xs),r=Dv(i);let o;return o=typeof(e=At(e))=="string"||e instanceof Vc?bN(r,"updateDoc",t._key,e,n,s):SN(r,"updateDoc",t._key,e),jv(i,[o.toMutation(t._key,gn.exists(!0))])}function wf(t,...e){var n,s,i;t=At(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yp(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Yp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof _t)l=Vt(t.firestore,xs),u=Nc(t._key.path),c={next:h=>{e[o]&&e[o](Hv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vt(t,wo);l=Vt(h.firestore,xs),u=h._query;const f=new vf(l);c={next:p=>{e[o]&&e[o](new Vv(l,f,h,p))},error:e[o+1],complete:e[o+2]},Uv(t._query)}return function(h,f,p,m){const _=new pf(m),v=new ff(f,_,p);return h.asyncQueue.enqueueAndForget(async()=>lf(await xa(h),v)),()=>{_.Sc(),h.asyncQueue.enqueueAndForget(async()=>uf(await xa(h),v))}}($c(l),u,a,c)}function jv(t,e){return function(n,s){const i=new kn;return n.asyncQueue.enqueueAndForget(async()=>ZR(await fN(n),s,i)),i.promise}($c(t),e)}function Hv(t,e,n){const s=n.docs.get(e._key),i=new vf(t);return new $v(t,i,e._key,s,new fr(n.hasPendingWrites,n.fromCache),e.converter)}function PN(...t){return new IN("arrayUnion",t)}function MN(...t){return new CN("arrayRemove",t)}(function(t,e=!0){(function(n){Hi=n})(Vi),vn(new tn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new xs(new Fb(n.getProvider("auth-internal")),new Bb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ot(mp,"3.11.0",t),Ot(mp,"3.11.0","esm2017")})();var LN="firebase",FN="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(LN,FN,"app");const UN={apiKey:"AIzaSyBdrW-op61lrviPqesC6ez5K5aSxHf_Y14",authDomain:"e-culture-71815.firebaseapp.com",projectId:"e-culture-71815",storageBucket:"e-culture-71815.appspot.com",messagingSenderId:"52761179686",appId:"1:52761179686:web:19db1bff3af727288658e7"},$N=v_(UN),Ef=yN(),VN=mf(Ef,"games"),BN=mf(Ef,"players");mf(Ef,"quizzes");const qn=class{constructor(e,n){Ws(this,"pseudo");Ws(this,"id");this.pseudo=e,this.id=n}static generate(){const n=Math.floor(Math.random()*1e12),s=`user${n}`;return new qn(s,n.toString())}saveOnLocalStorage(){localStorage.setItem(qn.LOCAL_STORAGE_KEY,JSON.stringify(this))}static storedOnLocalStorage(){return localStorage.getItem(qn.LOCAL_STORAGE_KEY)!=null}static loadFromLocalStorage(){const e=localStorage.getItem(qn.LOCAL_STORAGE_KEY);if(e){const n=JSON.parse(e);return new qn(n.pseudo,n.id)}else throw Error("Loading player from local storage but not in local storage.")}get ref(){return qn.getRef(this.id)}static getRef(e){return Av(BN,e)}push(){xN(this.ref,Object.assign({},this)).then(()=>console.debug(`Player ${this} pushed to firebase`)).catch(e=>{console.error(`Player ${this} not pushed to firebase: ${e}`)})}};let As=qn;Ws(As,"LOCAL_STORAGE_KEY","player");const jN=sn({data(){return{player:As.loadFromLocalStorage()}}}),rn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};function HN(t,e,n,s,i,r){return mt(),St("p",null,Ya(t.player.pseudo),1)}const KN=rn(jN,[["render",HN]]),zN=sn({components:{UserInfoSmall:KN}}),qN="/e-culture/assets/application-without-text-f8b8b962.png";const WN=t=>(to("data-v-0b36bb7b"),t=t(),no(),t),GN=WN(()=>Be("img",{src:qN,alt:"application logo"},null,-1));function QN(t,e,n,s,i,r){const o=Ct("router-link"),a=Ct("UserInfoSmall");return mt(),St("header",null,[we(o,{to:"/"},{default:Cs(()=>[GN]),_:1}),we(a)])}const To=rn(zN,[["render",QN],["__scopeId","data-v-0b36bb7b"]]),YN=sn({components:{HeaderDefault:To}}),XN="/e-culture/assets/application-aa4cc065.png",JN="/e-culture/assets/company-24baf615.png";const Kv=t=>(to("data-v-2916690c"),t=t(),no(),t),ZN={id:"home"},ek=Kv(()=>Be("img",{src:XN,alt:"application logo"},null,-1)),tk={id:"actions"},nk=Kv(()=>Be("footer",null,[Be("img",{src:JN,alt:"company logo"})],-1));function sk(t,e,n,s,i,r){const o=Ct("HeaderDefault"),a=Ct("router-link");return mt(),St("div",ZN,[we(o),Be("main",null,[ek,Be("div",tk,[we(a,{class:"pseudo-button",to:"/create-game"},{default:Cs(()=>[ci("Create a game")]),_:1}),we(a,{class:"pseudo-button",to:"/join-game"},{default:Cs(()=>[ci("Join a game")]),_:1}),we(a,{class:"pseudo-button",to:"/about"},{default:Cs(()=>[ci("About Us")]),_:1})])]),nk])}const ik=rn(YN,[["render",sk],["__scopeId","data-v-2916690c"]]),rk=sn({components:{HeaderDefault:To}}),ok=Be("p",null,"Create game here",-1);function ak(t,e,n,s,i,r){const o=Ct("HeaderDefault");return mt(),St(Lt,null,[we(o),ok],64)}const ck=rn(rk,[["render",ak]]),lk=sn({data:()=>({gameId:""})});const zv=t=>(to("data-v-e4526e02"),t=t(),no(),t),uk={id:"join-game-from-id"},hk=zv(()=>Be("h2",null,"Join a Game from an ID",-1)),fk={key:0},dk={key:1},pk=zv(()=>Be("p",null,"Please enter a Game ID",-1)),gk=[pk];function mk(t,e,n,s,i,r){const o=Ct("router-link");return mt(),St("div",uk,[hk,z0(Be("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>t.gameId=a),placeholder:"Game ID"},null,512),[[zT,t.gameId]]),t.gameId?(mt(),St("div",fk,[we(o,{to:"/game/"+t.gameId,class:"pseudo-button"},{default:Cs(()=>[ci("Join game '"+Ya(t.gameId)+"'",1)]),_:1},8,["to"])])):(mt(),St("div",dk,gk))])}const _k=rn(lk,[["render",mk],["__scopeId","data-v-e4526e02"]]);const yk={},vk=t=>(to("data-v-29cf4739"),t=t(),no(),t),wk={id:"join-random-game"},Ek=vk(()=>Be("h2",null,"Join a Random Game",-1));function Tk(t,e){const n=Ct("router-link");return mt(),St("div",wk,[Ek,we(n,{to:"/game/random",class:"pseudo-button"},{default:Cs(()=>[ci("Join a random game")]),_:1})])}const Ik=rn(yk,[["render",Tk],["__scopeId","data-v-29cf4739"]]),Ck=sn({components:{JoinGameFromId:_k,JoinGameRandom:Ik,HeaderDefault:To}});const Sk={id:"join-game"},bk={id:"different-join"};function Ak(t,e,n,s,i,r){const o=Ct("HeaderDefault"),a=Ct("JoinGameRandom"),c=Ct("JoinGameFromId");return mt(),St("div",Sk,[we(o),Be("div",bk,[we(a),we(c)])])}const Rk=rn(Ck,[["render",Ak],["__scopeId","data-v-7e63f1c8"]]),Nk=sn({components:{HeaderDefault:To}}),kk=Be("p",null,"About here",-1);function Dk(t,e,n,s,i,r){const o=Ct("HeaderDefault");return mt(),St(Lt,null,[we(o),kk],64)}const Ok=rn(Nk,[["render",Dk]]),xk=sn({props:{players:Object}}),Pk={id:"player-list"};function Mk(t,e,n,s,i,r){return mt(),St("div",Pk,[Be("ul",null,[(mt(!0),St(Lt,null,G0(t.players,o=>(mt(),St("li",{key:o.id},Ya(o.pseudo),1))),128))])])}const Lk=rn(xk,[["render",Mk]]);class Sr{constructor(e,n){Ws(this,"id");Ws(this,"players");this.id=e,this.players=n}get ref(){return Sr.getRef(this.id)}static getRef(e){return Av(VN,e)}}const Fk=sn({data(){return{gameId:this.$route.params.id,game:Object,player:As.loadFromLocalStorage()}},components:{HeaderDefault:To,PlayersList:Lk},watch:{gameId:{immediate:!0,handler(){this.$firestoreBind("game",Sr.getRef(this.gameId))}}},mounted(){Xp(Sr.getRef(this.gameId),{players:PN(this.player.ref)})},unmounted(){Xp(Sr.getRef(this.gameId),{players:MN(this.player.ref)})}});const qv=t=>(to("data-v-517fc5ec"),t=t(),no(),t),Uk={id:"game"},$k={id:"game-information"},Vk=qv(()=>Be("p",null,"Waiting for the game to start...",-1)),Bk=qv(()=>Be("p",null,"Players in this game:",-1));function jk(t,e,n,s,i,r){const o=Ct("HeaderDefault"),a=Ct("PlayersList");return mt(),St("div",Uk,[we(o),Be("div",$k,[Be("h2",null,"Game "+Ya(t.gameId),1),Vk,Bk,we(a,{players:t.game.players},null,8,["players"])])])}const Hk=rn(Fk,[["render",jk],["__scopeId","data-v-517fc5ec"]]),Kk=[{path:"/",name:"Home",component:ik},{path:"/create-game",name:"Create game",component:ck},{path:"/join-game",name:"Join game",component:Rk},{path:"/about",name:"About",component:Ok},{path:"/game/:id",name:"Game",component:Hk}],Tf=XI({history:dI("/e-culture/"),routes:Kk});function Wv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Gv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zk=Gv,Qv=new $i("auth","Firebase",Gv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new so("@firebase/auth");function qk(t,...e){Ma.logLevel<=le.WARN&&Ma.warn(`Auth (${Vi}): ${t}`,...e)}function oa(t,...e){Ma.logLevel<=le.ERROR&&Ma.error(`Auth (${Vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,...e){throw Cf(t,...e)}function If(t,...e){return Cf(t,...e)}function Wk(t,e,n){const s=Object.assign(Object.assign({},zk()),{[e]:n});return new $i("auth","Firebase",s).create(e,{appName:t.name})}function Cf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Qv.create(t,...e)}function fe(t,e,...n){if(!t)throw Cf(e,...n)}function br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function La(t,e){t||br(e)}function Gk(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gk()||fC()||"connection"in navigator)?navigator.onLine:!0}function Yk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,La(n>e,"Short delay should be less than long delay!"),this.isMobile=yh()||d_()}get(){return Qk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t,e){La(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Io(3e4,6e4);function e1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sf(t,e,n,s,i={}){return Xv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vh(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yv.fetch()(Jv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Xv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Jk),e);try{const i=new t1(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wk(t,u,l);Jp(t,u)}}catch(i){if(i instanceof Un)throw i;Jp(t,"network-request-failed",{message:String(i)})}}function Jv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Xk(t.config,i):`${t.config.apiScheme}://${i}`}class t1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(If(this.auth,"network-request-failed")),Zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=If(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e){return Sf(t,"POST","/v1/accounts:delete",e)}async function s1(t,e){return Sf(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i1(t,e=!1){const n=At(t),s=await n.getIdToken(e),i=Zv(s);fe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ar(Tl(i.auth_time)),issuedAtTime:Ar(Tl(i.iat)),expirationTime:Ar(Tl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Tl(t){return Number(t)*1e3}function Zv(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=pa(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function r1(t){const e=Zv(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Un&&o1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function o1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ru(t,s1(n,{idToken:s}));fe(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?u1(r.providerUserInfo):[],a=l1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ew(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function c1(t){const e=At(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function u1(t){return t.map(e=>{var{providerId:n}=e,s=Wv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e){const n=await Xv(t,{},async()=>{const s=vh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Jv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return fe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await h1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xr;return s&&(fe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(fe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(fe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class di{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Wv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ew(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ru(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i1(this,e)}reload(){return c1(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ru(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:M,isAnonymous:J,providerData:oe,stsTokenManager:Ee}=n;fe(E&&Ee,e,"internal-error");const ve=Xr.fromJSON(this.name,Ee);fe(typeof E=="string",e,"internal-error"),Hn(h,e.name),Hn(f,e.name),fe(typeof M=="boolean",e,"internal-error"),fe(typeof J=="boolean",e,"internal-error"),Hn(p,e.name),Hn(m,e.name),Hn(_,e.name),Hn(v,e.name),Hn(T,e.name),Hn(N,e.name);const Mt=new di({uid:E,auth:e,email:f,emailVerified:M,displayName:h,isAnonymous:J,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:ve,createdAt:T,lastLoginAt:N});return oe&&Array.isArray(oe)&&(Mt.providerData=oe.map(vt=>Object.assign({},vt))),v&&(Mt._redirectEventId=v),Mt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xr;i.updateFromServerResponse(n);const r=new di({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Fa(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;function Es(t){La(t instanceof Function,"Expected a class definition");let e=eg.get(t);return e?(La(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tw.type="NONE";const tg=tw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Il(this.userKey,i.apiKey,r),this.fullPersistenceKey=Il("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(Es(tg),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Es(tg);const o=Il(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=di._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new pi(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new pi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_1(e))return"Blackberry";if(y1(e))return"Webos";if(d1(e))return"Safari";if((e.includes("chrome/")||p1(e))&&!e.includes("edge/"))return"Chrome";if(m1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function f1(t=yn()){return/firefox\//i.test(t)}function d1(t=yn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p1(t=yn()){return/crios\//i.test(t)}function g1(t=yn()){return/iemobile/i.test(t)}function m1(t=yn()){return/android/i.test(t)}function _1(t=yn()){return/blackberry/i.test(t)}function y1(t=yn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e=[]){let n;switch(t){case"Browser":n=ng(yn());break;case"Worker":n=`${ng(yn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${s}`}async function sw(t,e){return Sf(t,"GET","/v2/recaptchaConfig",e1(t,e))}function sg(t){return t!==void 0&&t.enterprise!==void 0}class iw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function w1(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=If("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",v1().appendChild(s)})}const E1="https://www.google.com/recaptcha/enterprise.js?render=",T1="recaptcha-enterprise",I1="NO_RECAPTCHA";class C1{constructor(e){this.type=T1,this.auth=rw(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{sw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new iw(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;sg(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(I1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&sg(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}w1(E1+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.beforeStateQueue=new S1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Es(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?At(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Es(e))})}async initializeRecaptchaConfig(){const e=await sw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new iw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new C1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Es(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Es(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return fe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rw(t){return At(t)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function A1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Es);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Io(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Io(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Io(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Io(5e3,15e3);var rg="@firebase/auth",og="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function k1(t){vn(new tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),fe(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nw(t)},l=new b1(s,i,r,c);return A1(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vn(new tn("auth-internal",e=>{const n=rw(e.getProvider("auth").getImmediate());return(s=>new R1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(rg,og,N1(t)),Ot(rg,og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=5*60;uC("authIdTokenMaxAge");k1("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new Map,x1={activated:!1,tokenObservers:[]};function Tn(t){return O1.get(t)||Object.assign({},x1)}const ag={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new $r,await M1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new $r,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function M1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ua=new $i("appCheck","AppCheck",L1);function F1(t){if(!Tn(t).activated)throw Ua.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="firebase-app-check-database",$1=1,Nu="firebase-app-check-store";let qo=null;function V1(){return qo||(qo=new Promise((t,e)=>{try{const n=indexedDB.open(U1,$1);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ua.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Nu,{keyPath:"compositeKey"})}}}catch(n){e(Ua.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),qo)}function B1(t,e){return j1(H1(t),e)}async function j1(t,e){const s=(await V1()).transaction(Nu,"readwrite"),r=s.objectStore(Nu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var l;a(Ua.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}function H1(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new so("@firebase/app-check");function cg(t,e){return g_()?B1(t,e).catch(n=>{ku.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1={error:"UNKNOWN_ERROR"};function z1(t){return uc.encodeString(JSON.stringify(t),!1)}async function Du(t,e=!1){const n=t.app;F1(n);const s=Tn(n);let i=s.token,r;if(i&&!dr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(dr(c)?i=c:await cg(n,void 0))}if(!e&&i&&dr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Tn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?ku.warn(c.message):ku.error(c),r=c}let a;return i?r?dr(i)?a={token:i.token,internalError:r}:a=ug(r):(a={token:i.token},s.token=i,await cg(n,i)):a=ug(r),o&&G1(n,a),a}function q1(t,e,n,s){const{app:i}=t,r=Tn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&dr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),lg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>lg(t))}function ow(t,e){const n=Tn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function lg(t){const{app:e}=t,n=Tn(e);let s=n.tokenRefresher;s||(s=W1(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function W1(t){const{app:e}=t;return new P1(async()=>{const n=Tn(e);let s;if(n.token?s=await Du(t,!0):s=await Du(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Tn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},ag.RETRIAL_MIN_WAIT,ag.RETRIAL_MAX_WAIT)}function G1(t,e){const n=Tn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function dr(t){return t.expireTimeMillis-Date.now()>0}function ug(t){return{token:z1(K1),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Tn(this.app);for(const n of e)ow(this.app,n.next);return Promise.resolve()}}function Y1(t,e){return new Q1(t,e)}function X1(t){return{getToken:e=>Du(t,e),addTokenListener:e=>q1(t,"INTERNAL",e),removeTokenListener:e=>ow(t.app,e)}}const J1="@firebase/app-check",Z1="0.7.0",eD="app-check",hg="app-check-internal";function tD(){vn(new tn(eD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Y1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(hg).initialize()})),vn(new tn(hg,t=>{const e=t.getProvider("app-check").getImmediate();return X1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(J1,Z1)}tD();const aw=Symbol("firebaseApp");function bf(t){return ph()&&Jt(aw,null)||w_(t)}const dn=()=>{};function Af(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function nD(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Bs(t){return!!t&&typeof t=="object"}const sD=Object.prototype;function iD(t){return Bs(t)&&Object.getPrototypeOf(t)===sD}function Rf(t){return Bs(t)&&t.type==="document"}function cw(t){return Bs(t)&&t.type==="collection"}function rD(t){return Rf(t)||cw(t)}function oD(t){return Bs(t)&&t.type==="query"}function aD(t){return Bs(t)&&"ref"in t}function cD(t){return Bs(t)&&typeof t.bucket=="string"}function lD(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function uD(){return!!(ph()&&Jt(Xm,null))}const Wo=new WeakMap;function hD(t,e){if(!Wo.has(t)){const n=im(!0);Wo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Wo.delete(t)}}return Wo.get(t)}const fg="@firebase/database",dg="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lw="";function fD(t){lw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dD(e)}}catch{}return new pD},Ts=uw("localStorage"),Ou=uw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new so("@firebase/database"),gD=function(){let t=1;return function(){return t++}}(),hw=function(t){const e=CC(t),n=new vC;n.update(e);const s=n.digest();return uc.encodeByteArray(s)},Co=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Co.apply(null,s):typeof s=="object"?e+=Ze(s):e+=s,e+=" "}return e};let Rs=null,pg=!0;const mD=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(gi.logLevel=le.VERBOSE,Rs=gi.log.bind(gi),e&&Ou.set("logging_enabled",!0)):typeof t=="function"?Rs=t:(Rs=null,Ou.remove("logging_enabled"))},it=function(...t){if(pg===!0&&(pg=!1,Rs===null&&Ou.get("logging_enabled")===!0&&mD(!0)),Rs){const e=Co.apply(null,t);Rs(e)}},So=function(t){return function(...e){it(t,...e)}},xu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Co(...t);gi.error(e)},Ps=function(...t){const e=`FIREBASE FATAL ERROR: ${Co(...t)}`;throw gi.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+Co(...t);gi.warn(e)},_D=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xi="[MIN_NAME]",Ms="[MAX_NAME]",Wi=function(t,e){if(t===e)return 0;if(t===xi||e===Ms)return-1;if(e===xi||t===Ms)return 1;{const n=gg(t),s=gg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},vD=function(t,e){return t===e?0:t<e?-1:1},nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},Nf=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ze(e[s]),n+=":",n+=Nf(t[e[s]]);return n+="}",n},dw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Bt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pw=function(t){O(!fw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},wD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ED=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},TD=new RegExp("^-?(0*)\\d{1,10}$"),ID=-2147483648,CD=2147483647,gg=function(t){if(TD.test(t)){const e=Number(t);if(e>=ID&&e<=CD)return e}return null},bo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},SD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class Pu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="5",gw="v",mw="s",_w="r",yw="f",vw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ww="ls",Ew="p",Mu="ac",Tw="websocket",Iw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ND(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cw(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Tw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Iw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ND(t)&&(n.ns=t.namespace);const i=[];return Bt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(){this.counters_={}}incrementCounter(e,n=1){$n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={},Sl={};function Df(t){const e=t.toString();return Cl[e]||(Cl[e]=new kD),Cl[e]}function DD(t,e){const n=t.toString();return Sl[n]||(Sl[n]=e()),Sl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="start",xD="close",PD="pLPCommand",MD="pRTLPCB",Sw="id",bw="pw",Aw="ser",LD="cb",FD="seg",UD="ts",$D="d",VD="dframe",Rw=1870,Nw=30,BD=Rw-Nw,jD=25e3,HD=3e4;class ni{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=So(e),this.stats_=Df(n),this.urlFn=c=>(this.appCheckToken&&(c[Mu]=this.appCheckToken),Cw(n,Iw,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new OD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HD)),yD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Of((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mg)this.id=a,this.password=c;else if(o===xD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[mg]="t",s[Aw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[LD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gw]=kf,this.transportSessionId&&(s[mw]=this.transportSessionId),this.lastSessionId&&(s[ww]=this.lastSessionId),this.applicationId&&(s[Ew]=this.applicationId),this.appCheckToken&&(s[Mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&vw.test(location.hostname)&&(s[_w]=yw);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wD()&&!ED()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=h_(n),i=dw(s,BD);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[VD]="t",s[Sw]=e,s[bw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Of{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gD(),window[PD+this.uniqueCallbackIdentifier]=e,window[MD+this.uniqueCallbackIdentifier]=n,this.myIFrame=Of.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sw]=this.myID,e[bw]=this.myPW,e[Aw]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nw+s.length<=Rw;){const o=this.pendingSegs.shift();s=s+"&"+FD+i+"="+o.seg+"&"+UD+i+"="+o.ts+"&"+$D+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jD)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=16384,zD=45e3;let $a=null;typeof MozWebSocket<"u"?$a=MozWebSocket:typeof WebSocket<"u"&&($a=WebSocket);class qt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=So(this.connId),this.stats_=Df(n),this.connURL=qt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[gw]=kf,typeof location<"u"&&location.hostname&&vw.test(location.hostname)&&(o[_w]=yw),n&&(o[mw]=n),s&&(o[ww]=s),i&&(o[Mu]=i),r&&(o[Ew]=r),Cw(e,Tw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ts.set("previous_websocket_failure",!0);try{let s;p_(),this.mySock=new $a(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&$a!==null&&!qt.forceDisallow_}static previouslyFailed(){return Ts.isInMemoryStorage||Ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Vr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=dw(n,KD);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qt&&qt.isAvailable();let s=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qt];else{const i=this.transports_=[];for(const r of Jr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=6e4,WD=5e3,GD=10*1024,QD=100*1024,bl="t",_g="d",YD="s",yg="r",XD="e",vg="o",wg="a",Eg="n",Tg="p",JD="h";class ZD{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=So("c:"+this.id+":"),this.transportManager_=new Jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bl in e){const n=e[bl];n===wg?this.upgradeIfSecondaryHealthy_():n===yg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Eg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=nr(bl,e);if(_g in e){const s=e[_g];if(n===JD){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Eg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YD?this.onConnectionShutdown_(s):n===yg?this.onReset_(s):n===XD?xu("Server Error: "+s):n===vg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kf!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Dw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Va}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=32,Cg=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Re("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function is(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Re(t.pieces_,e)}function Ow(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Re(e,0)}function We(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Re(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return $t(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mw(t,e){if(is(t)!==is(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(is(t)>is(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class tO{constructor(e,n){this.errorPrefix_=n,this.parts_=xw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hc(this.parts_[s]);Lw(this)}}function nO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=hc(e),Lw(t)}function sO(t){const e=t.parts_.pop();t.byteLength_-=hc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lw(t){if(t.byteLength_>Cg)throw new Error(t.errorPrefix_+"has a key path longer than "+Cg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ig)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ig+") or object contains a cycle "+ps(t))}function ps(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Dw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new xf}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=1e3,iO=60*5*1e3,Sg=30*1e3,rO=1.3,oO=3e4,aO="server_kill",bg=3;class Dn extends kw{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dn.nextPersistentConnectionId_++,this.log_=So("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sr,this.maxReconnectDelay_=iO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!p_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ze(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new $r,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Dn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$n(e,"w")){const s=Ti(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_C(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xu("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oO&&(this.reconnectDelay_=sr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new ZD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{xt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(aO)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),c())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qd(this.interruptReasons_)&&(this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Nf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bg&&(this.reconnectDelay_=Sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lw.replace(/\./g,"-")]=1,yh()?e["framework.cordova"]=1:d_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Va.getInstance().currentlyOnline();return qd(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(xi,e),i=new re(xi,n);return this.compare(s,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;class Fw extends Kc{static get __EMPTY_NODE(){return Go}static set __EMPTY_NODE(e){Go=e}compare(e,n){return Wi(e.name,n.name)}isDefinedOn(e){throw Ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Ms,Go)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Go)}toString(){return".key"}}const mi=new Fw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??qe.RED,this.left=i??It.EMPTY_NODE,this.right=r??It.EMPTY_NODE}copy(e,n,s,i,r){return new qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class cO{copy(e,n,s,i,r){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qo(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new cO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t,e){return Wi(t.name,e.name)}function Pf(t,e){return Wi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;function uO(t){Lu=t}const Uw=function(t){return typeof t=="number"?"number:"+pw(t):"string:"+t},$w=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$n(e,".sv"),"Priority must be a string or number.")}else O(t===Lu||t.isEmpty(),"priority of unexpected type.");O(t===Lu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$w(this.priorityNode_)}static set __childrenNodeConstructor(e){Ag=e}static get __childrenNodeConstructor(){return Ag}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:ie(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pw(this.value_):e+=this.value_,this.lazyHash_=hw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vw,Bw;function hO(t){Vw=t}function fO(t){Bw=t}class dO extends Kc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Wi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Ms,new Ke("[PRIORITY-POST]",Bw))}makePost(e,n){const s=Vw(e);return new re(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const ct=new dO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=Math.log(2);class gO{constructor(e){const n=r=>parseInt(Math.log(r)/pO,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ba=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new qe(f,h.node,qe.BLACK,null,null);{const p=parseInt(u/2,10)+c,m=i(c,p),_=i(p+1,l);return h=t[p],f=n?n(h):h,new qe(f,h.node,qe.BLACK,m,_)}},r=function(c){let l=null,u=null,h=t.length;const f=function(m,_){const v=h-m,T=h;h-=m;const N=i(v+1,T),E=t[v],M=n?n(E):E;p(new qe(M,E.node,_,null,N))},p=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(m+1));_?f(v,qe.BLACK):(f(v,qe.BLACK),f(v,qe.RED))}return u},o=new gO(t.length),a=r(o);return new It(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;const Ys={};class Nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Ys&&ct,"ChildrenNode.ts has not been loaded"),Al=Al||new Nn({".priority":Ys},{".priority":ct}),Al}get(e){const n=Ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return $n(this.indexSet_,e.toString())}addIndex(e,n){O(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ba(s,e.getCompare()):a=Ys;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Nn(u,l)}addToIndexes(e,n){const s=ga(this.indexes_,(i,r)=>{const o=Ti(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Ys)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(re.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ba(a,o.getCompare())}else return Ys;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new re(e.name,a))),c.insert(e,e.node)}});return new Nn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ga(this.indexes_,i=>{if(i===Ys)return i;{const r=n.get(e.name);return r?i.remove(new re(e.name,r)):i}});return new Nn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;class de{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$w(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ir||(ir=new de(new It(Pf),null,Nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ir}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ir:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ir:this.priorityNode_;return new de(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{O(ie(e)!==".priority"||is(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ct,(o,a)=>{n[o]=a.val(e),s++,r&&de.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uw(this.getPriority().val())+":"),this.forEachChild(ct,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ao?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ct),i=n.getIterator(ct);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mO extends de{constructor(){super(new It(Pf),de.EMPTY_NODE,Nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const Ao=new mO;Object.defineProperties(re,{MIN:{value:new re(xi,de.EMPTY_NODE)},MAX:{value:new re(Ms,Ao)}});Fw.__EMPTY_NODE=de.EMPTY_NODE;Ke.__childrenNodeConstructor=de;uO(Ao);fO(Ao);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=!0;function rt(t,e=null){if(t===null)return de.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,rt(e))}if(!(t instanceof Array)&&_O){const n=[];let s=!1;if(Bt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=rt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new re(o,c)))}}),n.length===0)return de.EMPTY_NODE;const r=Ba(n,lO,o=>o.name,Pf);if(s){const o=Ba(n,ct.getCompare());return new de(r,rt(e),new Nn({".priority":o},{".priority":ct}))}else return new de(r,rt(e),Nn.Default)}else{let n=de.EMPTY_NODE;return Bt(t,(s,i)=>{if($n(t,s)&&s.substring(0,1)!=="."){const r=rt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(rt(e))}}hO(rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO extends Kc{constructor(e){super(),this.indexPath_=e,O(!ne(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Wi(e.name,n.name):r}makePost(e,n){const s=rt(e),i=de.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,i)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,Ao);return new re(Ms,e)}toString(){return xw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends Kc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Wi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=rt(e);return new re(n,s)}toString(){return".value"}}const wO=new vO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(t){return{type:"value",snapshotNode:t}}function TO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function IO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ct}copy(){const e=new Mf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ng(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ct?n="$priority":t.index_===wO?n="$value":t.index_===mi?n="$key":(O(t.index_ instanceof yO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ze(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ze(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ze(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ct&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends kw{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=So("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ja.getListenId_(e,s),a={};this.listens_[o]=a;const c=Ng(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Ti(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const s=ja.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ng(e._queryParams),s=e._path.toString(),i=new $r;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vh(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Vr(a.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){return{value:null,children:new Map}}function jw(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,Ha());const i=t.children.get(s);e=be(e),jw(i,e,n)}}function Fu(t,e,n){t.value!==null?n(e,t.value):bO(t,(s,i)=>{const r=new Re(e.toString()+"/"+s);Fu(i,r,n)})}function bO(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Bt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=10*1e3,RO=30*1e3,NO=5*60*1e3;class kO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AO(e);const s=Dg+(RO-Dg)*Math.random();Rr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Bt(e,(i,r)=>{r>0&&$n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Rr(this.reportStats_.bind(this),Math.floor(Math.random()*2*NO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function Hw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pn.ACK_USER_WRITE,this.source=Hw()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new Ka(ye(),n,this.revert)}}else return O(ie(this.path)===e,"operationForChild called for unrelated child."),new Ka(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pn.OVERWRITE}operationForChild(e){return ne(this.path)?new Ls(this.source,ye(),this.snap.getImmediateChild(e)):new Ls(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new Ls(this.source,ye(),n.value):new Zr(this.source,ye(),n)}else return O(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(CO(o.childName,o.snapshotNode))}),rr(t,i,"child_removed",e,s,n),rr(t,i,"child_added",e,s,n),rr(t,i,"child_moved",r,s,n),rr(t,i,"child_changed",e,s,n),rr(t,i,"value",e,s,n),i}function rr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>xO(t,a,c)),o.forEach(a=>{const c=OO(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function OO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xO(t,e,n){if(e.childName==null||n.childName==null)throw Ui("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e){return{eventCache:t,serverCache:e}}function Nr(t,e,n,s){return qw(new Lf(e,n,s),t.serverCache)}function Ww(t,e,n,s){return qw(t.eventCache,new Lf(e,n,s))}function Uu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;const PO=()=>(Rl||(Rl=new It(vD)),Rl);class Ce{constructor(e,n=PO()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Bt(e,(s,i)=>{n=n.set(new Re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ne(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(be(e),n);return r!=null?{path:We(new Re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new Ce(null)}}set(e,n){if(ne(e))return new Ce(n,this.children);{const s=ie(e),r=(this.children.get(s)||new Ce(null)).set(be(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(ne(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(ne(e))return n;{const s=ie(e),r=(this.children.get(s)||new Ce(null)).setTree(be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(We(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ne(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(be(e),We(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(ne(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),We(n,i),s):new Ce(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(We(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ce(null))}}function kr(t,e,n){if(ne(e))return new Zt(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$t(i,e);return r=r.updateChild(o,n),new Zt(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new Zt(r)}}}function Og(t,e,n){let s=t;return Bt(n,(i,r)=>{s=kr(s,We(e,i),r)}),s}function xg(t,e){if(ne(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Zt(n)}}function $u(t,e){return js(t,e)!=null}function js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function Pg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ct,(s,i)=>{e.push(new re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new re(s,i.value))}),e}function Zn(t,e){if(ne(e))return t;{const n=js(t,e);return n!=null?new Zt(new Ce(n)):new Zt(t.writeTree_.subtree(e))}}function Vu(t){return t.writeTree_.isEmpty()}function Pi(t,e){return Gw(ye(),t.writeTree_,e)}function Gw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Gw(We(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(We(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e){return eE(e,t)}function MO(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=kr(t.visibleWrites,e,n)),t.lastWriteId=s}function LO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function FO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UO(a,s.path)?i=!1:Gt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return $O(t),!0;if(s.snap)t.visibleWrites=xg(t.visibleWrites,s.path);else{const a=s.children;Bt(a,c=>{t.visibleWrites=xg(t.visibleWrites,We(s.path,c))})}return!0}else return!1}function UO(t,e){if(t.snap)return Gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gt(We(t.path,n),e))return!0;return!1}function $O(t){t.visibleWrites=Yw(t.allWrites,VO,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VO(t){return t.visible}function Yw(t,e,n){let s=Zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Gt(n,o)?(a=$t(n,o),s=kr(s,a,r.snap)):Gt(o,n)&&(a=$t(o,n),s=kr(s,ye(),r.snap.getChild(a)));else if(r.children){if(Gt(n,o))a=$t(n,o),s=Og(s,a,r.children);else if(Gt(o,n))if(a=$t(o,n),ne(a))s=Og(s,ye(),r.children);else{const c=Ti(r.children,ie(a));if(c){const l=c.getChild(be(a));s=kr(s,ye(),l)}}}else throw Ui("WriteRecord should have .snap or .children")}}return s}function Xw(t,e,n,s,i){if(!s&&!i){const r=js(t.visibleWrites,e);if(r!=null)return r;{const o=Zn(t.visibleWrites,e);if(Vu(o))return n;if(n==null&&!$u(o,ye()))return null;{const a=n||de.EMPTY_NODE;return Pi(o,a)}}}else{const r=Zn(t.visibleWrites,e);if(!i&&Vu(r))return n;if(!i&&n==null&&!$u(r,ye()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Gt(l.path,e)||Gt(e,l.path))},a=Yw(t.allWrites,o,e),c=n||de.EMPTY_NODE;return Pi(a,c)}}}function BO(t,e,n){let s=de.EMPTY_NODE;const i=js(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ct,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Zn(t.visibleWrites,e);return n.forEachChild(ct,(o,a)=>{const c=Pi(Zn(r,new Re(o)),a);s=s.updateImmediateChild(o,c)}),Pg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Zn(t.visibleWrites,e);return Pg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function jO(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=We(e,n);if($u(t.visibleWrites,r))return null;{const o=Zn(t.visibleWrites,r);return Vu(o)?i.getChild(n):Pi(o,i.getChild(n))}}function HO(t,e,n,s){const i=We(e,n),r=js(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Zn(t.visibleWrites,i);return Pi(o,s.getNode().getImmediateChild(n))}else return null}function KO(t,e){return js(t.visibleWrites,e)}function zO(t,e,n,s,i,r,o){let a;const c=Zn(t.visibleWrites,e),l=js(c,ye());if(l!=null)a=l;else if(n!=null)a=Pi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function qO(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Bu(t,e,n,s){return Xw(t.writeTree,t.treePath,e,n,s)}function Jw(t,e){return BO(t.writeTree,t.treePath,e)}function Mg(t,e,n,s){return jO(t.writeTree,t.treePath,e,n,s)}function za(t,e){return KO(t.writeTree,We(t.treePath,e))}function WO(t,e,n,s,i,r){return zO(t.writeTree,t.treePath,e,n,s,i,r)}function Ff(t,e,n){return HO(t.writeTree,t.treePath,e,n)}function Zw(t,e){return eE(We(t.treePath,e),t.writeTree)}function eE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Rg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,IO(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,TO(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Rg(s,e.snapshotNode,i.oldSnap));else throw Ui("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const tE=new QO;class Uf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Lf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ff(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fs(this.viewCache_),r=WO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function YO(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XO(t,e,n,s,i){const r=new GO;let o,a;if(n.type===pn.OVERWRITE){const l=n;l.source.fromUser?o=ju(t,e,l.path,l.snap,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ne(l.path),o=qa(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===pn.MERGE){const l=n;l.source.fromUser?o=ZO(t,e,l.path,l.children,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Hu(t,e,l.path,l.children,s,i,a,r))}else if(n.type===pn.ACK_USER_WRITE){const l=n;l.revert?o=nx(t,e,l.path,s,i,r):o=ex(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===pn.LISTEN_COMPLETE)o=tx(t,e,n.path,s,r);else throw Ui("Unknown operation type: "+n.type);const c=r.getChanges();return JO(e,o,c),{viewCache:o,changes:c}}function JO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Uu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(EO(Uu(e)))}}function nE(t,e,n,s,i,r){const o=e.eventCache;if(za(s,n)!=null)return e;{let a,c;if(ne(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Fs(e),u=l instanceof de?l:de.EMPTY_NODE,h=Jw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Bu(s,Fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ie(n);if(l===".priority"){O(is(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Mg(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=be(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Mg(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=Ff(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Nr(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function qa(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ne(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ie(n);if(!c.isCompleteForPath(n)&&is(n)>1)return e;const m=be(n),v=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=u.updatePriority(c.getNode(),v):l=u.updateChild(c.getNode(),p,v,m,tE,null)}const h=Ww(e,l,c.isFullyInitialized()||ne(n),u.filtersNodes()),f=new Uf(i,h,r);return nE(t,h,n,i,f,a)}function ju(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new Uf(i,e,r);if(ne(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Nr(e,l,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Nr(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),p=a.getNode().getImmediateChild(h);let m;if(ne(f))m=s;else{const _=u.getCompleteChild(h);_!=null?Ow(f)===".priority"&&_.getChild(Pw(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=de.EMPTY_NODE}if(p.equals(m))c=e;else{const _=t.filter.updateChild(a.getNode(),h,m,f,u,o);c=Nr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Lg(t,e){return t.eventCache.isCompleteForChild(e)}function ZO(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=We(n,c);Lg(e,ie(u))&&(a=ju(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=We(n,c);Lg(e,ie(u))||(a=ju(t,a,u,l,i,r,o))}),a}function Fg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Hu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ne(n)?l=s:l=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Fg(t,p,f);c=qa(t,c,new Re(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=Fg(t,m,f);c=qa(t,c,new Re(h),_,i,r,o,a)}}),c}function ex(t,e,n,s,i,r,o){if(za(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ne(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return qa(t,e,n,c.getNode().getChild(n),i,r,a,o);if(ne(n)){let l=new Ce(null);return c.getNode().forEachChild(mi,(u,h)=>{l=l.set(new Re(u),h)}),Hu(t,e,n,l,i,r,a,o)}else return e}else{let l=new Ce(null);return s.foreach((u,h)=>{const f=We(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),Hu(t,e,n,l,i,r,a,o)}}function tx(t,e,n,s,i){const r=e.serverCache,o=Ww(e,r.getNode(),r.isFullyInitialized()||ne(n),r.isFiltered());return nE(t,o,n,s,tE,i)}function nx(t,e,n,s,i,r){let o;if(za(s,n)!=null)return e;{const a=new Uf(s,e,i),c=e.eventCache.getNode();let l;if(ne(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Bu(s,Fs(e));else{const h=e.serverCache.getNode();O(h instanceof de,"serverChildren would be complete if leaf node"),u=Jw(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ie(n);let h=Ff(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,be(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,de.EMPTY_NODE,be(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bu(s,Fs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||za(s,ye())!=null,Nr(e,l,o,t.filter.filtersNodes())}}function sx(t,e){const n=Fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Ug(t,e,n,s){e.type===pn.MERGE&&e.source.queryId!==null&&(O(Fs(t.viewCache_),"We should always have a full cache before handling merges"),O(Uu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=XO(t.processor_,i,e,n,s);return YO(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ix(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ix(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return DO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $g;function rx(t){O(!$g,"__referenceConstructor has already been defined"),$g=t}function $f(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),Ug(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ug(o,e,n,s));return r}}function Vf(t,e){let n=null;for(const s of t.views.values())n=n||sx(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vg;function ox(t){O(!Vg,"__referenceConstructor has already been defined"),Vg=t}class Bg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=qO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ax(t,e,n,s,i){return MO(t.pendingWriteTree_,e,n,s,i),i?qc(t,new Ls(Hw(),e,n)):[]}function si(t,e,n=!1){const s=LO(t.pendingWriteTree_,e);if(FO(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(ye(),!0):Bt(s.children,o=>{r=r.set(new Re(o),!0)}),qc(t,new Ka(s.path,r,n))}else return[]}function zc(t,e,n){return qc(t,new Ls(Kw(),e,n))}function cx(t,e,n){const s=Ce.fromObject(n);return qc(t,new Zr(Kw(),e,s))}function lx(t,e,n,s){const i=oE(t,s);if(i!=null){const r=aE(i),o=r.path,a=r.queryId,c=$t(o,e),l=new Ls(zw(a),c,n);return cE(t,o,l)}else return[]}function ux(t,e,n,s){const i=oE(t,s);if(i){const r=aE(i),o=r.path,a=r.queryId,c=$t(o,e),l=Ce.fromObject(n),u=new Zr(zw(a),c,l);return cE(t,o,u)}else return[]}function sE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=$t(o,e),l=Vf(a,c);if(l)return l});return Xw(i,e,r,n,!0)}function qc(t,e){return iE(e,t.syncPointTree_,null,Qw(t.pendingWriteTree_,ye()))}function iE(t,e,n,s){if(ne(t.path))return rE(t,e,n,s);{const i=e.get(ye());n==null&&i!=null&&(n=Vf(i,ye()));let r=[];const o=ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Zw(s,o);r=r.concat(iE(a,c,l,u))}return i&&(r=r.concat($f(i,t,s,n))),r}}function rE(t,e,n,s){const i=e.get(ye());n==null&&i!=null&&(n=Vf(i,ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Zw(s,o),u=t.operationForChild(o);u&&(r=r.concat(rE(u,a,c,l)))}),i&&(r=r.concat($f(i,t,s,n))),r}function oE(t,e){return t.tagToQueryMap.get(e)}function aE(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Re(t.substr(0,e))}}function cE(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Qw(t.pendingWriteTree_,e);return $f(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bf(n)}node(){return this.node_}}class jf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new jf(this.syncTree_,n)}node(){return sE(this.syncTree_,this.path_)}}const hx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jg=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dx(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},dx=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},px=function(t,e,n,s){return Hf(e,new jf(n,t),s)},gx=function(t,e,n){return Hf(t,new Bf(e),n)};function Hf(t,e,n){const s=t.getPriority().val(),i=jg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=jg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,rt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(ct,(a,c)=>{const l=Hf(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function zf(t,e){let n=e instanceof Re?e:new Re(e),s=t,i=ie(n);for(;i!==null;){const r=Ti(s.node.children,i)||{children:{},childCount:0};s=new Kf(i,s,r),n=be(n),i=ie(n)}return s}function Gi(t){return t.node.value}function lE(t,e){t.node.value=e,Ku(t)}function uE(t){return t.node.childCount>0}function mx(t){return Gi(t)===void 0&&!uE(t)}function Wc(t,e){Bt(t.node.children,(n,s)=>{e(new Kf(n,t,s))})}function hE(t,e,n,s){n&&!s&&e(t),Wc(t,i=>{hE(i,e,!0,s)}),n&&s&&e(t)}function _x(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ro(t){return new Re(t.parent===null?t.name:Ro(t.parent)+"/"+t.name)}function Ku(t){t.parent!==null&&yx(t.parent,t.name,t)}function yx(t,e,n){const s=mx(n),i=$n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ku(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=/[\[\].#$\/\u0000-\u001F\u007F]/,wx=/[\[\].#$\u0000-\u001F\u007F]/,Nl=10*1024*1024,fE=function(t){return typeof t=="string"&&t.length!==0&&!vx.test(t)},Ex=function(t){return typeof t=="string"&&t.length!==0&&!wx.test(t)},Tx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ex(t)},dE=function(t,e,n){const s=n instanceof Re?new tO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ps(s));if(typeof e=="function")throw new Error(t+"contains a function "+ps(s)+" with contents = "+e.toString());if(fw(e))throw new Error(t+"contains "+e.toString()+" "+ps(s));if(typeof e=="string"&&e.length>Nl/3&&hc(e)>Nl)throw new Error(t+"contains a string greater than "+Nl+" utf8 bytes "+ps(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Bt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!fE(o)))throw new Error(t+" contains an invalid key ("+o+") "+ps(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nO(s,o),dE(t,a,s),sO(s)}),i&&r)throw new Error(t+' contains ".value" child '+ps(s)+" in addition to actual children.")}},Ix=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Tx(n))throw new Error(IC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sx(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Mw(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hs(t,e,n){Sx(t,n),bx(t,s=>Gt(s,e)||Gt(e,s))}function bx(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Ax(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ax(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Rs&&it("event: "+n.toString()),bo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="repo_interrupt",Nx=25;class kx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Cx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ha(),this.transactionQueueTree_=new Kf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dx(t,e,n){if(t.stats_=Df(t.repoInfo_),t.forceRestClient_||SD())t.server_=new ja(t.repoInfo_,(s,i,r,o)=>{Hg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Kg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dn(t.repoInfo_,e,(s,i,r,o)=>{Hg(t,s,i,r,o)},s=>{Kg(t,s)},s=>{xx(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=DD(t.repoInfo_,()=>new kO(t.stats_,t.server_)),t.infoData_=new SO,t.infoSyncTree_=new Bg({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=zc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),qf(t,"connected",!1),t.serverSyncTree_=new Bg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Hs(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ox(t){const n=t.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pE(t){return hx({timestamp:Ox(t)})}function Hg(t,e,n,s,i){t.dataUpdateCount++;const r=new Re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ga(n,l=>rt(l));o=ux(t.serverSyncTree_,r,c,i)}else{const c=rt(n);o=lx(t.serverSyncTree_,r,c,i)}else if(s){const c=ga(n,l=>rt(l));o=cx(t.serverSyncTree_,r,c)}else{const c=rt(n);o=zc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Gf(t,r)),Hs(t.eventQueue_,a,o)}function Kg(t,e){qf(t,"connected",e),e===!1&&Mx(t)}function xx(t,e){Bt(e,(n,s)=>{qf(t,n,s)})}function qf(t,e,n){const s=new Re("/.info/"+e),i=rt(n);t.infoData_.updateSnapshot(s,i);const r=zc(t.infoSyncTree_,s,i);Hs(t.eventQueue_,s,r)}function Px(t){return t.nextWriteId_++}function Mx(t){gE(t,"onDisconnectEvents");const e=pE(t),n=Ha();Fu(t.onDisconnect_,ye(),(i,r)=>{const o=px(i,r,t.serverSyncTree_,e);jw(n,i,o)});let s=[];Fu(n,ye(),(i,r)=>{s=s.concat(zc(t.serverSyncTree_,i,r));const o=$x(t,i);Gf(t,o)}),t.onDisconnect_=Ha(),Hs(t.eventQueue_,ye(),s)}function Lx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rx)}function gE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function mE(t,e,n){return sE(t.serverSyncTree_,e,n)||de.EMPTY_NODE}function Wf(t,e=t.transactionQueueTree_){if(e||Gc(t,e),Gi(e)){const n=yE(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Fx(t,Ro(e),n)}else uE(e)&&Wc(e,n=>{Wf(t,n)})}function Fx(t,e,n){const s=n.map(l=>l.currentWriteId),i=mE(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$t(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{gE(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(si(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gc(t,zf(t.transactionQueueTree_,e)),Wf(t,t.transactionQueueTree_),Hs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)bo(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Gf(t,e)}},o)}function Gf(t,e){const n=_E(t,e),s=Ro(n),i=yE(t,n);return Ux(t,i,s),s}function Ux(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=$t(n,c.path);let u=!1,h;if(O(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(si(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Nx)u=!0,h="maxretry",i=i.concat(si(t.serverSyncTree_,c.currentWriteId,!0));else{const f=mE(t,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){dE("transaction failed: Data returned ",p,c.path);let m=rt(p);typeof p=="object"&&p!=null&&$n(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=c.currentWriteId,T=pE(t),N=gx(m,f,T);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=N,c.currentWriteId=Px(t),o.splice(o.indexOf(v),1),i=i.concat(ax(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(si(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(si(t.serverSyncTree_,c.currentWriteId,!0))}Hs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Gc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)bo(s[a]);Wf(t,t.transactionQueueTree_)}function _E(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&Gi(s)===void 0;)s=zf(s,n),e=be(e),n=ie(e);return s}function yE(t,e){const n=[];return vE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function vE(t,e,n){const s=Gi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Wc(e,i=>{vE(t,i,n)})}function Gc(t,e){const n=Gi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lE(e,n.length>0?n:void 0)}Wc(e,s=>{Gc(t,s)})}function $x(t,e){const n=Ro(_E(t,e)),s=zf(t.transactionQueueTree_,e);return _x(s,i=>{kl(t,i)}),kl(t,s),hE(s,i=>{kl(t,i)}),n}function kl(t,e){const n=Gi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(si(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lE(e,void 0):n.length=r+1,Hs(t.eventQueue_,Ro(e),i);for(let o=0;o<s.length;o++)bo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Bx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const zg=function(t,e){const n=jx(t),s=n.namespace;n.domain==="firebase.com"&&Ps(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ps("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_D();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RD(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Re(n.pathString)}},jx=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Vx(t.substring(u,h)));const f=Bx(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ne(this._path)?null:Ow(this._path)}get ref(){return new Qi(this._repo,this._path)}get _queryIdentifier(){const e=kg(this._queryParams),n=Nf(e);return n==="{}"?"default":n}get _queryObject(){return kg(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof Qf))return!1;const n=this._repo===e._repo,s=Mw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eO(this._path)}}class Qi extends Qf{constructor(e,n){super(e,n,new Mf,!1)}get parent(){const e=Pw(this._path);return e===null?null:new Qi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}rx(Qi);ox(Qi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="FIREBASE_DATABASE_EMULATOR_HOST",zu={};let Kx=!1;function zx(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ps("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zg(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Hx]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=zg(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Pu(Pu.OWNER):new AD(t.name,t.options,e);Ix("Invalid Firebase Database URL",o),ne(o.path)||Ps("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Wx(a,t,u,new bD(t.name,n));return new Gx(h,t)}function qx(t,e){const n=zu[e];(!n||n[t.key]!==t)&&Ps(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Lx(t),delete n[t.key]}function Wx(t,e,n,s){let i=zu[e.name];i||(i={},zu[e.name]=i);let r=i[t.toURLString()];return r&&Ps("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kx(t,Kx,n,s),i[t.toURLString()]=r,r}class Gx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qi(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ps("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){fD(Vi),vn(new tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zx(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(fg,dg,t),Ot(fg,dg,"esm2017")}Dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Qx();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="firebasestorage.googleapis.com",Yx="storageBucket",Xx=2*60*1e3,Jx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Un{constructor(e,n,s=0){super(Dl(e),`Firebase Storage: ${n} (${Dl(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var In;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(In||(In={}));function Dl(t){return"storage/"+t}function Zx(){const t="An unknown error occurred, please check the error payload for server response.";return new Cn(In.UNKNOWN,t)}function eP(){return new Cn(In.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tP(){return new Cn(In.CANCELED,"User canceled the upload/download.")}function nP(t){return new Cn(In.INVALID_URL,"Invalid URL '"+t+"'.")}function sP(t){return new Cn(In.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qg(t){return new Cn(In.INVALID_ARGUMENT,t)}function EE(){return new Cn(In.APP_DELETED,"The Firebase app was deleted.")}function iP(t){return new Cn(In.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(s.path==="")return s;throw sP(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===wE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${_}/${i}/${v}`,"i"),E=[{regex:a,indices:c,postModify:r},{regex:p,indices:m,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<E.length;M++){const J=E[M],oe=J.regex.exec(e);if(oe){const Ee=oe[J.indices.bucket];let ve=oe[J.indices.path];ve||(ve=""),s=new Qt(Ee,ve),J.postModify(s);break}}if(s==null)throw nP(e);return s}}class rP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,c())},v)}function f(){r&&clearTimeout(r)}function p(v,...T){if(l){f();return}if(v){f(),u.call(null,v,...T);return}if(c()||o){f(),u.call(null,v,...T);return}s<64&&(s*=2);let E;a===1?(a=2,E=0):E=(s+Math.random())*1e3,h(E)}let m=!1;function _(v){m||(m=!0,f(),!l&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function aP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){return t!==void 0}function Wg(t,e,n,s){if(s<e)throw qg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw qg(`Invalid value for '${t}'. Expected ${n} or less.`)}function lP(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wa||(Wa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,s,i,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Yo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Wa.NO_ERROR,c=r.getStatus();if(!a||uP(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Wa.ABORT;s(!1,new Yo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Yo(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());cP(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Zx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?EE():tP();o(c)}else{const c=eP();o(c)}};this.canceled_?n(!1,new Yo(!1,null,!0)):this.backoffId_=oP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function fP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,s,i,r,o=!0){const a=lP(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return pP(l,e),fP(l,n),dP(l,r),gP(l,s),new hP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ga(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yP(this._location.path)}get storage(){return this._service}get parent(){const e=_P(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new Ga(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iP(e)}}function Gg(t,e){const n=e==null?void 0:e[Yx];return n==null?null:Qt.makeFromBucketSpec(n,t)}class vP{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=wE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xx,this._maxUploadRetryTime=Jx,this._requests=new Set,i!=null?this._bucket=Qt.makeFromBucketSpec(i,this._host):this._bucket=Gg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=Gg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ga(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new rP(EE());{const o=mP(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Qg="@firebase/storage",Yg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="storage";function EP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vP(n,s,i,e,Vi)}function TP(){vn(new tn(wP,EP,"PUBLIC").setMultipleInstances(!0)),Ot(Qg,Yg,""),Ot(Qg,Yg,"esm2017")}TP();const Ol=new WeakMap;function TE(t,e){return Ol.has(e)||Ol.set(e,t||{f:{},r:{},s:{},u:{}}),Ol.get(e)}function IP(t,e,n,s){if(!t)return n;const[i,r]=IE(t);if(!i)return n;const o=TE(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function CP(t,e,n,s){if(!t)return;const[i,r]=IE(t);if(!i)return;const o=TE(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(dn),a}function IE(t){return rD(t)||oD(t)?["f",t.path]:aD(t)?["r",t.toString()]:cD(t)?["s",t.toString()]:[]}const xl=new WeakMap;function SP(t,e,n){const s=bf();xl.has(s)||xl.set(s,new Map);const i=xl.get(s),r=CP(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):dn}const bP={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function qu(t,e,n,s){if(!iD(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const l=n[c];return a[l.path]=l.data(),a},{});function o(a,c,l,u){c=c||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(p=>{const m=Object.getOwnPropertyDescriptor(a,p);m&&!m.enumerable&&Object.defineProperty(h,p,m)});for(const p in a){const m=a[p];if(m==null||m instanceof Date||m instanceof Ve||m instanceof Bc)h[p]=m;else if(Rf(m)){const _=l+p;h[p]=_ in n?c[p]:m.path,f[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[p]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[p][_]=r[v.path])}o(m,c[p]||h[p],l+p+".",[h[p],f])}else Bs(m)?(h[p]={},o(m,c[p],l+p+".",[h[p],f])):h[p]=m}}return o(t,e,"",i),i}const Yf={reset:!1,wait:!0,maxRefDepth:2,converter:bP,snapshotOptions:{serverTimestamps:"estimate"}};function Qa(t){for(const e in t)t[e].unsub()}function Wu(t,e,n,s,i,r,o,a,c){const[l,u]=qu(s.data(t.snapshotOptions),Af(e,n),i,t);r.set(e,n,l),Gu(t,e,n,i,u,r,o,a,c)}function AP({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let l=dn;return a.once?Bv(t).then(u=>{u.exists()?Wu(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):l=wf(t,u=>{u.exists()?Wu(a,e,n,u,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{l(),Qa(c)}}function Gu(t,e,n,s,i,r,o,a,c){const l=Object.keys(i);if(Object.keys(s).filter(_=>l.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!l.length||++o>t.maxRefDepth)return a(n);let h=0;const f=l.length,p=Object.create(null);function m(_){_ in p&&++h>=f&&a(n)}l.forEach(_=>{const v=s[_],T=i[_],N=`${n}.${_}`;if(p[N]=!0,v)if(v.path!==T.path)v.unsub();else return;s[_]={data:()=>Af(e,N),unsub:AP({ref:T,target:e,path:N,depth:o,ops:r,resolve:m.bind(null,N),reject:c},t),path:T.path}})}function RP(t,e,n,s,i,r){const o=Object.assign({},Yf,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:u}=o,h="value";let f=pr(l?[]:t.value);l||n.set(t,h,[]);const p=s;let m,_=dn;const v=[],T={added:({newIndex:E,doc:M})=>{v.splice(E,0,Object.create(null));const J=v[E],[oe,Ee]=qu(M.data(c),void 0,J,o);n.add(pt(f),E,oe),Gu(o,f,`${h}.${E}`,J,Ee,n,0,s.bind(null,M),i)},modified:({oldIndex:E,newIndex:M,doc:J})=>{const oe=pt(f),Ee=v[E],ve=oe[E],[Mt,vt]=qu(J.data(c),ve,Ee,o);v.splice(M,0,Ee),n.remove(oe,E),n.add(oe,M,Mt),Gu(o,f,`${h}.${M}`,Ee,vt,n,0,s,i)},removed:({oldIndex:E})=>{const M=pt(f);n.remove(M,E),Qa(v.splice(E,1)[0])}};function N(E){const M=E.docChanges(a);if(!m&&M.length){m=!0;let J=0;const oe=M.length,Ee=Object.create(null);for(let ve=0;ve<oe;ve++)Ee[M[ve].doc.id]=!0;s=ve=>{ve&&ve.id in Ee&&++J>=oe&&(l&&(n.set(t,h,pt(f)),f=t),p(pt(f)),s=dn)}}M.forEach(J=>{T[J.type](J)}),M.length||(l&&(n.set(t,h,pt(f)),f=t),s(pt(f)))}return u?ON(e).then(N).catch(i):_=wf(e,N,i),E=>{if(_(),E){const M=typeof E=="function"?E():[];n.set(t,h,M)}v.forEach(Qa)}}function NP(t,e,n,s,i,r){const o=Object.assign({},Yf,r),a="value",c=Object.create(null);s=lD(s,()=>Af(t,a));let l=dn;function u(h){h.exists()?Wu(o,t,a,h,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Bv(e).then(u).catch(i):l=wf(e,u,i),h=>{if(l(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Qa(c)}}function kP(t,e){let n=dn;const s=Object.assign({},Yf,e),i=pt(t),r=s.target||pr();uD()&&(s.once=!0);const o=IP(i,s.ssrKey,r.value,bf());r.value=o;let c=!(cw(i)?(o||[]).length>0:o!==void 0);const l=pr(!1),u=pr(),h=Em(),f=rm();let p=dn;function m(){let T=pt(t);const N=new Promise((E,M)=>{if(n(s.reset),!T)return n=dn,E(null);l.value=c,c=!0,T.converter||(T=T.withConverter(s.converter)),n=(Rf(T)?NP:RP)(r,T,DP,E,M,s)}).catch(E=>(h.value===N&&(u.value=E),Promise.reject(E))).finally(()=>{h.value===N&&(l.value=!1)});h.value=N}let _=dn;Ge(t)&&(_=gr(t,m)),m(),i&&(p=SP(h.value,i,s.ssrKey)),ph()&&Lm(()=>h.value),f&&VE(v);function v(T=s.reset){_(),p(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>h},stop:{get:()=>v}})}const DP={set:(t,e,n)=>nD(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},or=new WeakMap;function OP(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const xP={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},PP=function(e,n,s){const i=Object.assign({},xP,n),{bindName:r,unbindName:o}=i,a=e.config.globalProperties;a[o]=function(l,u){OP(l,or.get(this),u),delete this.$firestoreRefs[l]},a[r]=function(l,u,h){const f=Object.assign({},i,h),p=y0(this.$data,l);or.has(this)||or.set(this,{});const m=or.get(this);m[l]&&m[l](f.reset);const _=hD(s||bf(),e).run(()=>im()),{promise:v,stop:T}=_.run(()=>kP(u,{target:p,...f})),N=E=>{T(E),_.stop()};return m[l]=N,this.$firestoreRefs[l]=u,v.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:c}=this.$options,l=typeof c=="function"?c.call(this):c;if(l)for(const u in l)this[r](u,l[u],i)},beforeUnmount(){const c=or.get(this);if(c)for(const l in c)c[l]();this.$firestoreRefs=null}})};function MP(t){return(e,n)=>PP(n,t,e)}function LP(t,{firebaseApp:e,modules:n=[]}){t.provide(aw,e);for(const s of n)t.use(s.bind(null,e))}const FP={};function UP(t,e){const n=Ct("router-view");return mt(),dT(n)}const $P=rn(FP,[["render",UP]]);const Xf=GT($P);Xf.use(Tf);Xf.use(LP,{firebaseApp:$N,modules:[MP()]});Xf.mount("#app");if(!As.storedOnLocalStorage()){const t=As.generate();t.saveOnLocalStorage(),t.push()}window.addEventListener("beforeunload",()=>{sessionStorage.setItem("lastRoute",Tf.currentRoute.value.path)});const Pl=sessionStorage.getItem("lastRoute")||"/";Tf.push(Pl).then(()=>{console.debug(`location set to ${Pl}.`)}).catch(t=>{console.error(`impossible to set location to ${Pl} because ${t}`)});
