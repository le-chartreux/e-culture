var LE=Object.defineProperty;var FE=(t,e,n)=>e in t?LE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _o=(t,e,n)=>(FE(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ru(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Nu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?BE(s):Nu(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(je(t))return t;if(ke(t))return t}}const UE=/;(?![^(]*\))/g,$E=/:([^]+)/,VE=/\/\*.*?\*\//gs;function BE(t){const e={};return t.replace(VE,"").split(UE).forEach(n=>{if(n){const s=n.split($E);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ku(t){let e="";if(je(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=ku(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",HE=Ru(jE);function Ng(t){return!!t||t===""}const Pa=t=>je(t)?t:t==null?"":G(t)||ke(t)&&(t.toString===xg||!Q(t.toString))?JSON.stringify(t,kg,2):String(t),kg=(t,e)=>e&&e.__v_isRef?kg(t,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Dg(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!G(e)&&!Pg(e)?String(e):e,Se={},Ys=[],qt=()=>{},KE=()=>!1,qE=/^on[^a-z]/,Ma=t=>qE.test(t),Du=t=>t.startsWith("onUpdate:"),mt=Object.assign,Ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zE=Object.prototype.hasOwnProperty,oe=(t,e)=>zE.call(t,e),G=Array.isArray,Xs=t=>La(t)==="[object Map]",Dg=t=>La(t)==="[object Set]",Q=t=>typeof t=="function",je=t=>typeof t=="string",xu=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Og=t=>ke(t)&&Q(t.then)&&Q(t.catch),xg=Object.prototype.toString,La=t=>xg.call(t),WE=t=>La(t).slice(8,-1),Pg=t=>La(t)==="[object Object]",Pu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$o=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},GE=/-(\w)/g,fn=Fa(t=>t.replace(GE,(e,n)=>n?n.toUpperCase():"")),QE=/\B([A-Z])/g,bi=Fa(t=>t.replace(QE,"-$1").toLowerCase()),Ua=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=Fa(t=>t?`on${Ua(t)}`:""),Er=(t,e)=>!Object.is(t,e),Vo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Of;const YE=()=>Of||(Of=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let bt;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Lg(t){return new Mg(t)}function XE(t,e=bt){e&&e.active&&e.effects.push(t)}function Fg(){return bt}function JE(t){bt&&bt.cleanups.push(t)}const Mu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ug=t=>(t.w&Qn)>0,$g=t=>(t.n&Qn)>0,ZE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qn},ew=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ug(i)&&!$g(i)?i.delete(t):e[n++]=i,i.w&=~Qn,i.n&=~Qn}e.length=n}},Qo=new WeakMap;let Xi=0,Qn=1;const gc=30;let Vt;const vs=Symbol(""),mc=Symbol("");class Lu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,XE(this,s)}run(){if(!this.active)return this.fn();let e=Vt,n=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Bn=!0,Qn=1<<++Xi,Xi<=gc?ZE(this):xf(this),this.fn()}finally{Xi<=gc&&ew(this),Qn=1<<--Xi,Vt=this.parent,Bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(xf(this),this.onStop&&this.onStop(),this.active=!1)}}function xf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Bn=!0;const Vg=[];function Ai(){Vg.push(Bn),Bn=!1}function Ri(){const t=Vg.pop();Bn=t===void 0?!0:t}function It(t,e,n){if(Bn&&Vt){let s=Qo.get(t);s||Qo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Mu()),Bg(i)}}function Bg(t,e){let n=!1;Xi<=gc?$g(t)||(t.n|=Qn,n=!Ug(t)):n=!t.has(Vt),n&&(t.add(Vt),Vt.deps.push(t))}function bn(t,e,n,s,i,r){const o=Qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Pu(n)&&a.push(o.get("length")):(a.push(o.get(vs)),Xs(t)&&a.push(o.get(mc)));break;case"delete":G(t)||(a.push(o.get(vs)),Xs(t)&&a.push(o.get(mc)));break;case"set":Xs(t)&&a.push(o.get(vs));break}if(a.length===1)a[0]&&_c(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_c(Mu(l))}}function _c(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Pf(s);for(const s of n)s.computed||Pf(s)}function Pf(t,e){(t!==Vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function tw(t,e){var n;return(n=Qo.get(t))===null||n===void 0?void 0:n.get(e)}const nw=Ru("__proto__,__v_isRef,__isVue"),jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xu)),sw=Fu(),iw=Fu(!1,!0),rw=Fu(!0),Mf=ow();function ow(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let r=0,o=this.length;r<o;r++)It(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ce)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ai();const s=ce(this)[e].apply(this,n);return Ri(),s}}),t}function aw(t){const e=ce(this);return It(e,"has",t),e.hasOwnProperty(t)}function Fu(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Cw:Wg:e?zg:qg).get(s))return s;const o=G(s);if(!t){if(o&&oe(Mf,i))return Reflect.get(Mf,i,r);if(i==="hasOwnProperty")return aw}const a=Reflect.get(s,i,r);return(xu(i)?jg.has(i):nw(i))||(t||It(s,"get",i),e)?a:We(a)?o&&Pu(i)?a:a.value:ke(a)?t?Gg(a):Kr(a):a}}const lw=Hg(),cw=Hg(!0);function Hg(t=!1){return function(n,s,i,r){let o=n[s];if(hi(o)&&We(o)&&!We(i))return!1;if(!t&&(!Yo(i)&&!hi(i)&&(o=ce(o),i=ce(i)),!G(n)&&We(o)&&!We(i)))return o.value=i,!0;const a=G(n)&&Pu(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,r);return n===ce(r)&&(a?Er(i,o)&&bn(n,"set",s,i):bn(n,"add",s,i)),l}}function uw(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&bn(t,"delete",e,void 0),s}function hw(t,e){const n=Reflect.has(t,e);return(!xu(e)||!jg.has(e))&&It(t,"has",e),n}function fw(t){return It(t,"iterate",G(t)?"length":vs),Reflect.ownKeys(t)}const Kg={get:sw,set:lw,deleteProperty:uw,has:hw,ownKeys:fw},dw={get:rw,set(t,e){return!0},deleteProperty(t,e){return!0}},pw=mt({},Kg,{get:iw,set:cw}),Uu=t=>t,$a=t=>Reflect.getPrototypeOf(t);function yo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ce(t),r=ce(e);n||(e!==r&&It(i,"get",e),It(i,"get",r));const{has:o}=$a(i),a=s?Uu:n?Bu:wr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function vo(t,e=!1){const n=this.__v_raw,s=ce(n),i=ce(t);return e||(t!==i&&It(s,"has",t),It(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Eo(t,e=!1){return t=t.__v_raw,!e&&It(ce(t),"iterate",vs),Reflect.get(t,"size",t)}function Lf(t){t=ce(t);const e=ce(this);return $a(e).has.call(e,t)||(e.add(t),bn(e,"add",t,t)),this}function Ff(t,e){e=ce(e);const n=ce(this),{has:s,get:i}=$a(n);let r=s.call(n,t);r||(t=ce(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Er(e,o)&&bn(n,"set",t,e):bn(n,"add",t,e),this}function Uf(t){const e=ce(this),{has:n,get:s}=$a(e);let i=n.call(e,t);i||(t=ce(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&bn(e,"delete",t,void 0),r}function $f(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&bn(t,"clear",void 0,void 0),n}function wo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ce(o),l=e?Uu:t?Bu:wr;return!t&&It(a,"iterate",vs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function To(t,e,n){return function(...s){const i=this.__v_raw,r=ce(i),o=Xs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Uu:e?Bu:wr;return!e&&It(r,"iterate",l?mc:vs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:this}}function gw(){const t={get(r){return yo(this,r)},get size(){return Eo(this)},has:vo,add:Lf,set:Ff,delete:Uf,clear:$f,forEach:wo(!1,!1)},e={get(r){return yo(this,r,!1,!0)},get size(){return Eo(this)},has:vo,add:Lf,set:Ff,delete:Uf,clear:$f,forEach:wo(!1,!0)},n={get(r){return yo(this,r,!0)},get size(){return Eo(this,!0)},has(r){return vo.call(this,r,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:wo(!0,!1)},s={get(r){return yo(this,r,!0,!0)},get size(){return Eo(this,!0)},has(r){return vo.call(this,r,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=To(r,!1,!1),n[r]=To(r,!0,!1),e[r]=To(r,!1,!0),s[r]=To(r,!0,!0)}),[t,n,e,s]}const[mw,_w,yw,vw]=gw();function $u(t,e){const n=e?t?vw:yw:t?_w:mw;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,r)}const Ew={get:$u(!1,!1)},ww={get:$u(!1,!0)},Tw={get:$u(!0,!1)},qg=new WeakMap,zg=new WeakMap,Wg=new WeakMap,Cw=new WeakMap;function Iw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sw(t){return t.__v_skip||!Object.isExtensible(t)?0:Iw(WE(t))}function Kr(t){return hi(t)?t:Vu(t,!1,Kg,Ew,qg)}function bw(t){return Vu(t,!1,pw,ww,zg)}function Gg(t){return Vu(t,!0,dw,Tw,Wg)}function Vu(t,e,n,s,i){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Sw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Js(t){return hi(t)?Js(t.__v_raw):!!(t&&t.__v_isReactive)}function hi(t){return!!(t&&t.__v_isReadonly)}function Yo(t){return!!(t&&t.__v_isShallow)}function Qg(t){return Js(t)||hi(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Yg(t){return Go(t,"__v_skip",!0),t}const wr=t=>ke(t)?Kr(t):t,Bu=t=>ke(t)?Gg(t):t;function Xg(t){Bn&&Vt&&(t=ce(t),Bg(t.dep||(t.dep=Mu())))}function Jg(t,e){t=ce(t);const n=t.dep;n&&_c(n)}function We(t){return!!(t&&t.__v_isRef===!0)}function ir(t){return em(t,!1)}function Zg(t){return em(t,!0)}function em(t,e){return We(t)?t:new Aw(t,e)}class Aw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:wr(e)}get value(){return Xg(this),this._value}set value(e){const n=this.__v_isShallow||Yo(e)||hi(e);e=n?e:ce(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wr(e),Jg(this))}}function ft(t){return We(t)?t.value:t}const Rw={get:(t,e,n)=>ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return We(i)&&!We(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function tm(t){return Js(t)?t:new Proxy(t,Rw)}class Nw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tw(ce(this._object),this._key)}}function kw(t,e,n){const s=t[e];return We(s)?s:new Nw(t,e,n)}var nm;class Dw{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[nm]=!1,this._dirty=!0,this.effect=new Lu(e,()=>{this._dirty||(this._dirty=!0,Jg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ce(this);return Xg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}nm="__v_isReadonly";function Ow(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=qt):(s=t.get,i=t.set),new Dw(s,i,r||!i,n)}function jn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Va(r,e,n)}return i}function zt(t,e,n,s){if(Q(t)){const r=jn(t,e,n,s);return r&&Og(r)&&r.catch(o=>{Va(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(zt(t[r],e,n,s));return i}function Va(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){jn(l,null,10,[t,o,a]);return}}xw(t,n,i,s)}function xw(t,e,n,s=!0){console.error(t)}let Tr=!1,yc=!1;const rt=[];let on=0;const Zs=[];let wn=null,us=0;const sm=Promise.resolve();let ju=null;function im(t){const e=ju||sm;return t?e.then(this?t.bind(this):t):e}function Pw(t){let e=on+1,n=rt.length;for(;e<n;){const s=e+n>>>1;Cr(rt[s])<t?e=s+1:n=s}return e}function Hu(t){(!rt.length||!rt.includes(t,Tr&&t.allowRecurse?on+1:on))&&(t.id==null?rt.push(t):rt.splice(Pw(t.id),0,t),rm())}function rm(){!Tr&&!yc&&(yc=!0,ju=sm.then(am))}function Mw(t){const e=rt.indexOf(t);e>on&&rt.splice(e,1)}function Lw(t){G(t)?Zs.push(...t):(!wn||!wn.includes(t,t.allowRecurse?us+1:us))&&Zs.push(t),rm()}function Vf(t,e=Tr?on+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function om(t){if(Zs.length){const e=[...new Set(Zs)];if(Zs.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,s)=>Cr(n)-Cr(s)),us=0;us<wn.length;us++)wn[us]();wn=null,us=0}}const Cr=t=>t.id==null?1/0:t.id,Fw=(t,e)=>{const n=Cr(t)-Cr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function am(t){yc=!1,Tr=!0,rt.sort(Fw);const e=qt;try{for(on=0;on<rt.length;on++){const n=rt[on];n&&n.active!==!1&&jn(n,null,14)}}finally{on=0,rt.length=0,om(),Tr=!1,ju=null,(rt.length||Zs.length)&&am()}}function Uw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Se;f&&(i=n.map(p=>je(p)?p.trim():p)),h&&(i=n.map(pc))}let a,l=s[a=Al(e)]||s[a=Al(fn(e))];!l&&r&&(l=s[a=Al(bi(e))]),l&&zt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(c,t,6,i)}}function lm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=lm(c,e,!0);u&&(a=!0,mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ke(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):mt(o,r),ke(t)&&s.set(t,o),o)}function Ba(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,bi(e))||oe(t,e))}let At=null,ja=null;function Xo(t){const e=At;return At=t,ja=t&&t.type.__scopeId||null,e}function qr(t){ja=t}function zr(){ja=null}function Es(t,e=At,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Qf(-1);const r=Xo(e);let o;try{o=t(...i)}finally{Xo(r),s._d&&Qf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Rl(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:_}=t;let v,I;const N=Xo(t);try{if(n.shapeFlag&4){const M=i||s;v=rn(u.call(M,M,h,r,p,f,m)),I=l}else{const M=e;v=rn(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),I=e.props?l:$w(l)}}catch(M){ar.length=0,Va(M,t,1),v=Ee(Ir)}let w=v;if(I&&_!==!1){const M=Object.keys(I),{shapeFlag:X}=w;M.length&&X&7&&(o&&M.some(Du)&&(I=Vw(I,o)),w=fi(w,I))}return n.dirs&&(w=fi(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,Xo(N),v}const $w=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},Vw=(t,e)=>{const n={};for(const s in t)(!Du(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Bw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Bf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ba(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Bf(s,o,c):!0:!!o;return!1}function Bf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ba(n,r))return!0}return!1}function jw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hw=t=>t.__isSuspense;function Kw(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Lw(t)}function Bo(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function Wt(t,e,n=!1){const s=xe||At;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e}}const Co={};function rr(t,e,n){return cm(t,e,n)}function cm(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=Fg()===(xe==null?void 0:xe.scope)?xe:null;let l,c=!1,u=!1;if(We(t)?(l=()=>t.value,c=Yo(t)):Js(t)?(l=()=>t,s=!0):G(t)?(u=!0,c=t.some(w=>Js(w)||Yo(w)),l=()=>t.map(w=>{if(We(w))return w.value;if(Js(w))return ds(w);if(Q(w))return jn(w,a,2)})):Q(t)?e?l=()=>jn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),zt(t,a,3,[f])}:l=qt,e&&s){const w=l;l=()=>ds(w())}let h,f=w=>{h=I.onStop=()=>{jn(w,a,4)}},p;if(br)if(f=qt,e?n&&zt(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const w=U0();p=w.__watcherHandles||(w.__watcherHandles=[])}else return qt;let m=u?new Array(t.length).fill(Co):Co;const _=()=>{if(I.active)if(e){const w=I.run();(s||c||(u?w.some((M,X)=>Er(M,m[X])):Er(w,m)))&&(h&&h(),zt(e,a,3,[w,m===Co?void 0:u&&m[0]===Co?[]:m,f]),m=w)}else I.run()};_.allowRecurse=!!e;let v;i==="sync"?v=_:i==="post"?v=()=>vt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),v=()=>Hu(_));const I=new Lu(l,v);e?n?_():m=I.run():i==="post"?vt(I.run.bind(I),a&&a.suspense):I.run();const N=()=>{I.stop(),a&&a.scope&&Ou(a.scope.effects,I)};return p&&p.push(N),N}function qw(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?um(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=xe;di(this);const a=cm(i,r.bind(s),n);return o?di(o):ws(),a}function um(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ds(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))ds(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)ds(t[n],e);else if(Dg(t)||Xs(t))t.forEach(n=>{ds(n,e)});else if(Pg(t))for(const n in t)ds(t[n],e);return t}function Zt(t){return Q(t)?{setup:t,name:t.name}:t}const jo=t=>!!t.type.__asyncLoader,hm=t=>t.type.__isKeepAlive;function zw(t,e){fm(t,"a",e)}function Ww(t,e){fm(t,"da",e)}function fm(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ha(e,s,n),n){let i=n.parent;for(;i&&i.parent;)hm(i.parent.vnode)&&Gw(s,e,n,i),i=i.parent}}function Gw(t,e,n,s){const i=Ha(e,t,s,!0);dm(()=>{Ou(s[e],i)},n)}function Ha(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ai(),di(n);const a=zt(e,n,t,o);return ws(),Ri(),a});return s?i.unshift(r):i.push(r),r}}const kn=t=>(e,n=xe)=>(!br||t==="sp")&&Ha(t,(...s)=>e(...s),n),Qw=kn("bm"),Yw=kn("m"),Xw=kn("bu"),Jw=kn("u"),Zw=kn("bum"),dm=kn("um"),pm=kn("sp"),e0=kn("rtg"),t0=kn("rtc");function n0(t,e=xe){Ha("ec",t,e)}function s0(t,e){const n=At;if(n===null)return t;const s=za(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Se]=e[r];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&ds(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function rs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ai(),zt(l,n,8,[t.el,a,t,e]),Ri())}}const gm="components";function Tt(t,e){return r0(gm,t,!0,e)||t}const i0=Symbol();function r0(t,e,n=!0,s=!1){const i=At||xe;if(i){const r=i.type;if(t===gm){const a=L0(r,!1);if(a&&(a===e||a===fn(e)||a===Ua(fn(e))))return r}const o=jf(i[t]||r[t],e)||jf(i.appContext[t],e);return!o&&s?r:o}}function jf(t,e){return t&&(t[e]||t[fn(e)]||t[Ua(fn(e))])}function o0(t,e,n,s){let i;const r=n&&n[s];if(G(t)||je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ke(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const vc=t=>t?bm(t)?za(t)||t.proxy:vc(t.parent):null,or=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$emit:t=>t.emit,$options:t=>Ku(t),$forceUpdate:t=>t.f||(t.f=()=>Hu(t.update)),$nextTick:t=>t.n||(t.n=im.bind(t.proxy)),$watch:t=>qw.bind(t)}),Nl=(t,e)=>t!==Se&&!t.__isScriptSetup&&oe(t,e),a0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Nl(s,e))return o[e]=1,s[e];if(i!==Se&&oe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&oe(c,e))return o[e]=3,r[e];if(n!==Se&&oe(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=or[e];let h,f;if(u)return e==="$attrs"&&It(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&oe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,oe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Nl(i,e)?(i[e]=n,!0):s!==Se&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&oe(t,o)||Nl(e,o)||(a=r[0])&&oe(a,o)||oe(s,o)||oe(or,o)||oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ec=!0;function l0(t){const e=Ku(t),n=t.proxy,s=t.ctx;Ec=!1,e.beforeCreate&&Hf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:I,beforeUnmount:N,destroyed:w,unmounted:M,render:X,renderTracked:ie,renderTriggered:we,errorCaptured:ve,serverPrefetch:Dt,expose:_t,inheritAttrs:xn,components:tn,directives:Fs,filters:ss}=e;if(c&&c0(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const me=o[Te];Q(me)&&(s[Te]=me.bind(n))}if(i){const Te=i.call(n,n);ke(Te)&&(t.data=Kr(Te))}if(Ec=!0,r)for(const Te in r){const me=r[Te],Ft=Q(me)?me.bind(n,n):Q(me.get)?me.get.bind(n,n):qt,is=!Q(me)&&Q(me.set)?me.set.bind(n):qt,Ut=xt({get:Ft,set:is});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:yt=>Ut.value=yt})}if(a)for(const Te in a)mm(a[Te],s,n,Te);if(l){const Te=Q(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(me=>{Bo(me,Te[me])})}u&&Hf(u,t,"c");function Me(Te,me){G(me)?me.forEach(Ft=>Te(Ft.bind(n))):me&&Te(me.bind(n))}if(Me(Qw,h),Me(Yw,f),Me(Xw,p),Me(Jw,m),Me(zw,_),Me(Ww,v),Me(n0,ve),Me(t0,ie),Me(e0,we),Me(Zw,N),Me(dm,M),Me(pm,Dt),G(_t))if(_t.length){const Te=t.exposed||(t.exposed={});_t.forEach(me=>{Object.defineProperty(Te,me,{get:()=>n[me],set:Ft=>n[me]=Ft})})}else t.exposed||(t.exposed={});X&&t.render===qt&&(t.render=X),xn!=null&&(t.inheritAttrs=xn),tn&&(t.components=tn),Fs&&(t.directives=Fs)}function c0(t,e,n=qt,s=!1){G(t)&&(t=wc(t));for(const i in t){const r=t[i];let o;ke(r)?"default"in r?o=Wt(r.from||i,r.default,!0):o=Wt(r.from||i):o=Wt(r),We(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Hf(t,e,n){zt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function mm(t,e,n,s){const i=s.includes(".")?um(n,s):()=>n[s];if(je(t)){const r=e[t];Q(r)&&rr(i,r)}else if(Q(t))rr(i,t.bind(n));else if(ke(t))if(G(t))t.forEach(r=>mm(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&rr(i,r,t)}}function Ku(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Jo(l,c,o,!0)),Jo(l,e,o)),ke(e)&&r.set(e,l),l}function Jo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Jo(t,r,n,!0),i&&i.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=u0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const u0={data:Kf,props:as,emits:as,methods:as,computed:as,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:as,directives:as,watch:f0,provide:Kf,inject:h0};function Kf(t,e){return e?t?function(){return mt(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function h0(t,e){return as(wc(t),wc(e))}function wc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function as(t,e){return t?mt(mt(Object.create(null),t),e):e}function f0(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function d0(t,e,n,s=!1){const i={},r={};Go(r,qa,1),t.propsDefaults=Object.create(null),_m(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:bw(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function p0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ce(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ba(t.emitsOptions,f))continue;const p=e[f];if(l)if(oe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const m=fn(f);i[m]=Tc(l,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{_m(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=bi(h))===h||!oe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Tc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!oe(e,h))&&(delete r[h],c=!0)}c&&bn(t,"set","$attrs")}function _m(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($o(l))continue;const c=e[l];let u;i&&oe(i,u=fn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ba(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ce(n),c=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Tc(i,l,h,c[h],t,!oe(c,h))}}return o}function Tc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(di(i),s=c[n]=l.call(null,e),ws())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===bi(n))&&(s=!0))}return s}function ym(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=h=>{l=!0;const[f,p]=ym(h,e,!0);mt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ke(t)&&s.set(t,Ys),Ys;if(G(r))for(let u=0;u<r.length;u++){const h=fn(r[u]);qf(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=fn(u);if(qf(h)){const f=r[u],p=o[h]=G(f)||Q(f)?{type:f}:Object.assign({},f);if(p){const m=Gf(Boolean,p.type),_=Gf(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||oe(p,"default"))&&a.push(h)}}}const c=[o,a];return ke(t)&&s.set(t,c),c}function qf(t){return t[0]!=="$"}function zf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wf(t,e){return zf(t)===zf(e)}function Gf(t,e){return G(e)?e.findIndex(n=>Wf(n,t)):Q(e)&&Wf(e,t)?0:-1}const vm=t=>t[0]==="_"||t==="$stable",qu=t=>G(t)?t.map(rn):[rn(t)],g0=(t,e,n)=>{if(e._n)return e;const s=Es((...i)=>qu(e(...i)),n);return s._c=!1,s},Em=(t,e,n)=>{const s=t._ctx;for(const i in t){if(vm(i))continue;const r=t[i];if(Q(r))e[i]=g0(i,r,s);else if(r!=null){const o=qu(r);e[i]=()=>o}}},wm=(t,e)=>{const n=qu(e);t.slots.default=()=>n},m0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Go(e,"_",n)):Em(e,t.slots={})}else t.slots={},e&&wm(t,e);Go(t.slots,qa,1)},_0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(mt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Em(e,i)),o=e}else e&&(wm(t,e),o={default:1});if(r)for(const a in i)!vm(a)&&!(a in o)&&delete i[a]};function Tm(){return{app:null,config:{isNativeTag:KE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y0=0;function v0(t,e){return function(s,i=null){Q(s)||(s=Object.assign({},s)),i!=null&&!ke(i)&&(i=null);const r=Tm(),o=new Set;let a=!1;const l=r.app={_uid:y0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Ee(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,za(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Cc(t,e,n,s,i=!1){if(G(t)){t.forEach((f,p)=>Cc(f,e&&(G(e)?e[p]:e),n,s,i));return}if(jo(s)&&!i)return;const r=s.shapeFlag&4?za(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,oe(h,c)&&(h[c]=null)):We(c)&&(c.value=null)),Q(l))jn(l,a,12,[o,u]);else{const f=je(l),p=We(l);if(f||p){const m=()=>{if(t.f){const _=f?oe(h,l)?h[l]:u[l]:l.value;i?G(_)&&Ou(_,r):G(_)?_.includes(r)||_.push(r):f?(u[l]=[r],oe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,oe(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,vt(m,n)):m()}}}const vt=Kw;function E0(t){return w0(t)}function w0(t,e){const n=YE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=qt,insertStaticContent:m}=t,_=(d,g,y,E=null,C=null,R=null,L=!1,A=null,k=!!g.dynamicChildren)=>{if(d===g)return;d&&!ji(d,g)&&(E=x(d),yt(d,C,R,!0),d=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:S,ref:B,shapeFlag:U}=g;switch(S){case Ka:v(d,g,y,E);break;case Ir:I(d,g,y,E);break;case kl:d==null&&N(g,y,E,L);break;case Ot:tn(d,g,y,E,C,R,L,A,k);break;default:U&1?X(d,g,y,E,C,R,L,A,k):U&6?Fs(d,g,y,E,C,R,L,A,k):(U&64||U&128)&&S.process(d,g,y,E,C,R,L,A,k,re)}B!=null&&C&&Cc(B,d&&d.ref,R,g||d,!g)},v=(d,g,y,E)=>{if(d==null)s(g.el=a(g.children),y,E);else{const C=g.el=d.el;g.children!==d.children&&c(C,g.children)}},I=(d,g,y,E)=>{d==null?s(g.el=l(g.children||""),y,E):g.el=d.el},N=(d,g,y,E)=>{[d.el,d.anchor]=m(d.children,g,y,E,d.el,d.anchor)},w=({el:d,anchor:g},y,E)=>{let C;for(;d&&d!==g;)C=f(d),s(d,y,E),d=C;s(g,y,E)},M=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),i(d),d=y;i(g)},X=(d,g,y,E,C,R,L,A,k)=>{L=L||g.type==="svg",d==null?ie(g,y,E,C,R,L,A,k):Dt(d,g,C,R,L,A,k)},ie=(d,g,y,E,C,R,L,A)=>{let k,S;const{type:B,props:U,shapeFlag:j,transition:z,dirs:Z}=d;if(k=d.el=o(d.type,R,U&&U.is,U),j&8?u(k,d.children):j&16&&ve(d.children,k,null,E,C,R&&B!=="foreignObject",L,A),Z&&rs(d,null,E,"created"),we(k,d,d.scopeId,L,E),U){for(const _e in U)_e!=="value"&&!$o(_e)&&r(k,_e,null,U[_e],R,d.children,E,C,F);"value"in U&&r(k,"value",null,U.value),(S=U.onVnodeBeforeMount)&&sn(S,E,d)}Z&&rs(d,null,E,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&z&&!z.persisted;Ce&&z.beforeEnter(k),s(k,g,y),((S=U&&U.onVnodeMounted)||Ce||Z)&&vt(()=>{S&&sn(S,E,d),Ce&&z.enter(k),Z&&rs(d,null,E,"mounted")},C)},we=(d,g,y,E,C)=>{if(y&&p(d,y),E)for(let R=0;R<E.length;R++)p(d,E[R]);if(C){let R=C.subTree;if(g===R){const L=C.vnode;we(d,L,L.scopeId,L.slotScopeIds,C.parent)}}},ve=(d,g,y,E,C,R,L,A,k=0)=>{for(let S=k;S<d.length;S++){const B=d[S]=A?Fn(d[S]):rn(d[S]);_(null,B,g,y,E,C,R,L,A)}},Dt=(d,g,y,E,C,R,L)=>{const A=g.el=d.el;let{patchFlag:k,dynamicChildren:S,dirs:B}=g;k|=d.patchFlag&16;const U=d.props||Se,j=g.props||Se;let z;y&&os(y,!1),(z=j.onVnodeBeforeUpdate)&&sn(z,y,g,d),B&&rs(g,d,y,"beforeUpdate"),y&&os(y,!0);const Z=C&&g.type!=="foreignObject";if(S?_t(d.dynamicChildren,S,A,y,E,Z,R):L||me(d,g,A,null,y,E,Z,R,!1),k>0){if(k&16)xn(A,g,U,j,y,E,C);else if(k&2&&U.class!==j.class&&r(A,"class",null,j.class,C),k&4&&r(A,"style",U.style,j.style,C),k&8){const Ce=g.dynamicProps;for(let _e=0;_e<Ce.length;_e++){const Le=Ce[_e],$t=U[Le],$s=j[Le];($s!==$t||Le==="value")&&r(A,Le,$t,$s,C,d.children,y,E,F)}}k&1&&d.children!==g.children&&u(A,g.children)}else!L&&S==null&&xn(A,g,U,j,y,E,C);((z=j.onVnodeUpdated)||B)&&vt(()=>{z&&sn(z,y,g,d),B&&rs(g,d,y,"updated")},E)},_t=(d,g,y,E,C,R,L)=>{for(let A=0;A<g.length;A++){const k=d[A],S=g[A],B=k.el&&(k.type===Ot||!ji(k,S)||k.shapeFlag&70)?h(k.el):y;_(k,S,B,null,E,C,R,L,!0)}},xn=(d,g,y,E,C,R,L)=>{if(y!==E){if(y!==Se)for(const A in y)!$o(A)&&!(A in E)&&r(d,A,y[A],null,L,g.children,C,R,F);for(const A in E){if($o(A))continue;const k=E[A],S=y[A];k!==S&&A!=="value"&&r(d,A,S,k,L,g.children,C,R,F)}"value"in E&&r(d,"value",y.value,E.value)}},tn=(d,g,y,E,C,R,L,A,k)=>{const S=g.el=d?d.el:a(""),B=g.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:z}=g;z&&(A=A?A.concat(z):z),d==null?(s(S,y,E),s(B,y,E),ve(g.children,y,B,C,R,L,A,k)):U>0&&U&64&&j&&d.dynamicChildren?(_t(d.dynamicChildren,j,y,C,R,L,A),(g.key!=null||C&&g===C.subTree)&&Cm(d,g,!0)):me(d,g,y,B,C,R,L,A,k)},Fs=(d,g,y,E,C,R,L,A,k)=>{g.slotScopeIds=A,d==null?g.shapeFlag&512?C.ctx.activate(g,y,E,L,k):ss(g,y,E,C,R,L,k):Vi(d,g,k)},ss=(d,g,y,E,C,R,L)=>{const A=d.component=D0(d,E,C);if(hm(d)&&(A.ctx.renderer=re),O0(A),A.asyncDep){if(C&&C.registerDep(A,Me),!d.el){const k=A.subTree=Ee(Ir);I(null,k,g,y)}return}Me(A,d,g,y,C,R,L)},Vi=(d,g,y)=>{const E=g.component=d.component;if(Bw(d,g,y))if(E.asyncDep&&!E.asyncResolved){Te(E,g,y);return}else E.next=g,Mw(E.update),E.update();else g.el=d.el,E.vnode=g},Me=(d,g,y,E,C,R,L)=>{const A=()=>{if(d.isMounted){let{next:B,bu:U,u:j,parent:z,vnode:Z}=d,Ce=B,_e;os(d,!1),B?(B.el=Z.el,Te(d,B,L)):B=Z,U&&Vo(U),(_e=B.props&&B.props.onVnodeBeforeUpdate)&&sn(_e,z,B,Z),os(d,!0);const Le=Rl(d),$t=d.subTree;d.subTree=Le,_($t,Le,h($t.el),x($t),d,C,R),B.el=Le.el,Ce===null&&jw(d,Le.el),j&&vt(j,C),(_e=B.props&&B.props.onVnodeUpdated)&&vt(()=>sn(_e,z,B,Z),C)}else{let B;const{el:U,props:j}=g,{bm:z,m:Z,parent:Ce}=d,_e=jo(g);if(os(d,!1),z&&Vo(z),!_e&&(B=j&&j.onVnodeBeforeMount)&&sn(B,Ce,g),os(d,!0),U&&J){const Le=()=>{d.subTree=Rl(d),J(U,d.subTree,d,C,null)};_e?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Le()):Le()}else{const Le=d.subTree=Rl(d);_(null,Le,y,E,d,C,R),g.el=Le.el}if(Z&&vt(Z,C),!_e&&(B=j&&j.onVnodeMounted)){const Le=g;vt(()=>sn(B,Ce,Le),C)}(g.shapeFlag&256||Ce&&jo(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&d.a&&vt(d.a,C),d.isMounted=!0,g=y=E=null}},k=d.effect=new Lu(A,()=>Hu(S),d.scope),S=d.update=()=>k.run();S.id=d.uid,os(d,!0),S()},Te=(d,g,y)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,p0(d,g.props,E,y),_0(d,g.children,y),Ai(),Vf(),Ri()},me=(d,g,y,E,C,R,L,A,k=!1)=>{const S=d&&d.children,B=d?d.shapeFlag:0,U=g.children,{patchFlag:j,shapeFlag:z}=g;if(j>0){if(j&128){is(S,U,y,E,C,R,L,A,k);return}else if(j&256){Ft(S,U,y,E,C,R,L,A,k);return}}z&8?(B&16&&F(S,C,R),U!==S&&u(y,U)):B&16?z&16?is(S,U,y,E,C,R,L,A,k):F(S,C,R,!0):(B&8&&u(y,""),z&16&&ve(U,y,E,C,R,L,A,k))},Ft=(d,g,y,E,C,R,L,A,k)=>{d=d||Ys,g=g||Ys;const S=d.length,B=g.length,U=Math.min(S,B);let j;for(j=0;j<U;j++){const z=g[j]=k?Fn(g[j]):rn(g[j]);_(d[j],z,y,null,C,R,L,A,k)}S>B?F(d,C,R,!0,!1,U):ve(g,y,E,C,R,L,A,k,U)},is=(d,g,y,E,C,R,L,A,k)=>{let S=0;const B=g.length;let U=d.length-1,j=B-1;for(;S<=U&&S<=j;){const z=d[S],Z=g[S]=k?Fn(g[S]):rn(g[S]);if(ji(z,Z))_(z,Z,y,null,C,R,L,A,k);else break;S++}for(;S<=U&&S<=j;){const z=d[U],Z=g[j]=k?Fn(g[j]):rn(g[j]);if(ji(z,Z))_(z,Z,y,null,C,R,L,A,k);else break;U--,j--}if(S>U){if(S<=j){const z=j+1,Z=z<B?g[z].el:E;for(;S<=j;)_(null,g[S]=k?Fn(g[S]):rn(g[S]),y,Z,C,R,L,A,k),S++}}else if(S>j)for(;S<=U;)yt(d[S],C,R,!0),S++;else{const z=S,Z=S,Ce=new Map;for(S=Z;S<=j;S++){const St=g[S]=k?Fn(g[S]):rn(g[S]);St.key!=null&&Ce.set(St.key,S)}let _e,Le=0;const $t=j-Z+1;let $s=!1,Nf=0;const Bi=new Array($t);for(S=0;S<$t;S++)Bi[S]=0;for(S=z;S<=U;S++){const St=d[S];if(Le>=$t){yt(St,C,R,!0);continue}let nn;if(St.key!=null)nn=Ce.get(St.key);else for(_e=Z;_e<=j;_e++)if(Bi[_e-Z]===0&&ji(St,g[_e])){nn=_e;break}nn===void 0?yt(St,C,R,!0):(Bi[nn-Z]=S+1,nn>=Nf?Nf=nn:$s=!0,_(St,g[nn],y,null,C,R,L,A,k),Le++)}const kf=$s?T0(Bi):Ys;for(_e=kf.length-1,S=$t-1;S>=0;S--){const St=Z+S,nn=g[St],Df=St+1<B?g[St+1].el:E;Bi[S]===0?_(null,nn,y,Df,C,R,L,A,k):$s&&(_e<0||S!==kf[_e]?Ut(nn,y,Df,2):_e--)}}},Ut=(d,g,y,E,C=null)=>{const{el:R,type:L,transition:A,children:k,shapeFlag:S}=d;if(S&6){Ut(d.component.subTree,g,y,E);return}if(S&128){d.suspense.move(g,y,E);return}if(S&64){L.move(d,g,y,re);return}if(L===Ot){s(R,g,y);for(let U=0;U<k.length;U++)Ut(k[U],g,y,E);s(d.anchor,g,y);return}if(L===kl){w(d,g,y);return}if(E!==2&&S&1&&A)if(E===0)A.beforeEnter(R),s(R,g,y),vt(()=>A.enter(R),C);else{const{leave:U,delayLeave:j,afterLeave:z}=A,Z=()=>s(R,g,y),Ce=()=>{U(R,()=>{Z(),z&&z()})};j?j(R,Z,Ce):Ce()}else s(R,g,y)},yt=(d,g,y,E=!1,C=!1)=>{const{type:R,props:L,ref:A,children:k,dynamicChildren:S,shapeFlag:B,patchFlag:U,dirs:j}=d;if(A!=null&&Cc(A,null,y,d,!0),B&256){g.ctx.deactivate(d);return}const z=B&1&&j,Z=!jo(d);let Ce;if(Z&&(Ce=L&&L.onVnodeBeforeUnmount)&&sn(Ce,g,d),B&6)T(d.component,y,E);else{if(B&128){d.suspense.unmount(y,E);return}z&&rs(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,y,C,re,E):S&&(R!==Ot||U>0&&U&64)?F(S,g,y,!1,!0):(R===Ot&&U&384||!C&&B&16)&&F(k,g,y),E&&Us(d)}(Z&&(Ce=L&&L.onVnodeUnmounted)||z)&&vt(()=>{Ce&&sn(Ce,g,d),z&&rs(d,null,g,"unmounted")},y)},Us=d=>{const{type:g,el:y,anchor:E,transition:C}=d;if(g===Ot){mo(y,E);return}if(g===kl){M(d);return}const R=()=>{i(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(d.shapeFlag&1&&C&&!C.persisted){const{leave:L,delayLeave:A}=C,k=()=>L(y,R);A?A(d.el,R,k):k()}else R()},mo=(d,g)=>{let y;for(;d!==g;)y=f(d),i(d),d=y;i(g)},T=(d,g,y)=>{const{bum:E,scope:C,update:R,subTree:L,um:A}=d;E&&Vo(E),C.stop(),R&&(R.active=!1,yt(L,d,g,y)),A&&vt(A,g),vt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(d,g,y,E=!1,C=!1,R=0)=>{for(let L=R;L<d.length;L++)yt(d[L],g,y,E,C)},x=d=>d.shapeFlag&6?x(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,g,y)=>{d==null?g._vnode&&yt(g._vnode,null,null,!0):_(g._vnode||null,d,g,null,null,null,y),Vf(),om(),g._vnode=d},re={p:_,um:yt,m:Ut,r:Us,mt:ss,mc:ve,pc:me,pbc:_t,n:x,o:t};let De,J;return e&&([De,J]=e(re)),{render:V,hydrate:De,createApp:v0(V,De)}}function os({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cm(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Fn(i[r]),a.el=o.el),n||Cm(o,a)),a.type===Ka&&(a.el=o.el)}}function T0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const C0=t=>t.__isTeleport,Ot=Symbol(void 0),Ka=Symbol(void 0),Ir=Symbol(void 0),kl=Symbol(void 0),ar=[];let jt=null;function pt(t=!1){ar.push(jt=t?null:[])}function I0(){ar.pop(),jt=ar[ar.length-1]||null}let Sr=1;function Qf(t){Sr+=t}function Im(t){return t.dynamicChildren=Sr>0?jt||Ys:null,I0(),Sr>0&&jt&&jt.push(t),t}function Ct(t,e,n,s,i,r){return Im($e(t,e,n,s,i,r,!0))}function S0(t,e,n,s,i){return Im(Ee(t,e,n,s,i,!0))}function Ic(t){return t?t.__v_isVNode===!0:!1}function ji(t,e){return t.type===e.type&&t.key===e.key}const qa="__vInternal",Sm=({key:t})=>t??null,Ho=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||We(t)||Q(t)?{i:At,r:t,k:e,f:!!n}:t:null;function $e(t,e=null,n=null,s=0,i=null,r=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sm(e),ref:e&&Ho(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:At};return a?(zu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),Sr>0&&!o&&jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jt.push(l),l}const Ee=b0;function b0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===i0)&&(t=Ir),Ic(t)){const a=fi(t,e,!0);return n&&zu(a,n),Sr>0&&!r&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag|=-2,a}if(F0(t)&&(t=t.__vccOpts),e){e=A0(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=ku(a)),ke(l)&&(Qg(l)&&!G(l)&&(l=mt({},l)),e.style=Nu(l))}const o=je(t)?1:Hw(t)?128:C0(t)?64:ke(t)?4:Q(t)?2:0;return $e(t,e,n,s,i,o,r,!0)}function A0(t){return t?Qg(t)||qa in t?mt({},t):t:null}function fi(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?R0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sm(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Ho(e)):[i,Ho(e)]:Ho(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fi(t.ssContent),ssFallback:t.ssFallback&&fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ei(t=" ",e=0){return Ee(Ka,null,t,e)}function rn(t){return t==null||typeof t=="boolean"?Ee(Ir):G(t)?Ee(Ot,null,t.slice()):typeof t=="object"?Fn(t):Ee(Ka,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fi(t)}function zu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),zu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(qa in e)?e._ctx=At:i===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[ei(e)]):n=8);t.children=e,t.shapeFlag|=n}function R0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ku([e.class,s.class]));else if(i==="style")e.style=Nu([e.style,s.style]);else if(Ma(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function sn(t,e,n,s=null){zt(t,e,7,[n,s])}const N0=Tm();let k0=0;function D0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||N0,r={uid:k0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(s,i),emitsOptions:lm(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Uw.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const Wu=()=>xe||At,di=t=>{xe=t,t.scope.on()},ws=()=>{xe&&xe.scope.off(),xe=null};function bm(t){return t.vnode.shapeFlag&4}let br=!1;function O0(t,e=!1){br=e;const{props:n,children:s}=t.vnode,i=bm(t);d0(t,n,i,e),m0(t,s);const r=i?x0(t,e):void 0;return br=!1,r}function x0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yg(new Proxy(t.ctx,a0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?M0(t):null;di(t),Ai();const r=jn(s,t,0,[t.props,i]);if(Ri(),ws(),Og(r)){if(r.then(ws,ws),e)return r.then(o=>{Yf(t,o,e)}).catch(o=>{Va(o,t,0)});t.asyncDep=r}else Yf(t,r,e)}else Am(t,e)}function Yf(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=tm(e)),Am(t,n)}let Xf;function Am(t,e,n){const s=t.type;if(!t.render){if(!e&&Xf&&!s.render){const i=s.template||Ku(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=mt(mt({isCustomElement:r,delimiters:a},o),l);s.render=Xf(i,c)}}t.render=s.render||qt}di(t),Ai(),l0(t),Ri(),ws()}function P0(t){return new Proxy(t.attrs,{get(e,n){return It(t,"get","$attrs"),e[n]}})}function M0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=P0(t))},slots:t.slots,emit:t.emit,expose:e}}function za(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tm(Yg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in or)return or[n](t)},has(e,n){return n in e||n in or}}))}function L0(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function F0(t){return Q(t)&&"__vccOpts"in t}const xt=(t,e)=>Ow(t,e,br);function Rm(t,e,n){const s=arguments.length;return s===2?ke(e)&&!G(e)?Ic(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ic(n)&&(n=[n]),Ee(t,e,n))}const Nm=Symbol(""),U0=()=>Wt(Nm),$0="3.2.47",V0="http://www.w3.org/2000/svg",hs=typeof document<"u"?document:null,Jf=hs&&hs.createElement("template"),B0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?hs.createElementNS(V0,t):hs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>hs.createTextNode(t),createComment:t=>hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Jf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Jf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function j0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function H0(t,e,n){const s=t.style,i=je(n);if(n&&!i){if(e&&!je(e))for(const r in e)n[r]==null&&Sc(s,r,"");for(const r in n)Sc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Zf=/\s*!important$/;function Sc(t,e,n){if(G(n))n.forEach(s=>Sc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=K0(t,e);Zf.test(n)?t.setProperty(bi(s),n.replace(Zf,""),"important"):t[s]=n}}const ed=["Webkit","Moz","ms"],Dl={};function K0(t,e){const n=Dl[e];if(n)return n;let s=fn(e);if(s!=="filter"&&s in t)return Dl[e]=s;s=Ua(s);for(let i=0;i<ed.length;i++){const r=ed[i]+s;if(r in t)return Dl[e]=r}return e}const td="http://www.w3.org/1999/xlink";function q0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(td,e.slice(6,e.length)):t.setAttributeNS(td,e,n);else{const r=HE(e);n==null||r&&!Ng(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function z0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ng(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Hs(t,e,n,s){t.addEventListener(e,n,s)}function W0(t,e,n,s){t.removeEventListener(e,n,s)}function G0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Q0(e);if(s){const c=r[e]=J0(s,i);Hs(t,a,c,l)}else o&&(W0(t,a,o,l),r[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function Q0(t){let e;if(nd.test(t)){e={};let s;for(;s=t.match(nd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bi(t.slice(2)),e]}let Ol=0;const Y0=Promise.resolve(),X0=()=>Ol||(Y0.then(()=>Ol=0),Ol=Date.now());function J0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(Z0(s,n.value),e,5,[s])};return n.value=t,n.attached=X0(),n}function Z0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const sd=/^on[a-z]/,eT=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?j0(t,s,i):e==="style"?H0(t,n,s):Ma(e)?Du(e)||G0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tT(t,e,s,i))?z0(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),q0(t,e,s,i))};function tT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&sd.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sd.test(e)&&je(n)?!1:e in t}const id=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Vo(e,n):e};function nT(t){t.target.composing=!0}function rd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sT={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=id(i);const r=s||i.props&&i.props.type==="number";Hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=pc(a)),t._assign(a)}),n&&Hs(t,"change",()=>{t.value=t.value.trim()}),e||(Hs(t,"compositionstart",nT),Hs(t,"compositionend",rd),Hs(t,"change",rd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=id(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&pc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},iT=mt({patchProp:eT},B0);let od;function rT(){return od||(od=E0(iT))}const oT=(...t)=>{const e=rT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=aT(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function aT(t){return je(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof window<"u";function lT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function xl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Yt(i)?i.map(t):t(i)}return n}const lr=()=>{},Yt=Array.isArray,cT=/\/$/,uT=t=>t.replace(cT,"");function Pl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=pT(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function hT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ad(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fT(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&pi(e.matched[s],n.matched[i])&&km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dT(t[n],e[n]))return!1;return!0}function dT(t,e){return Yt(t)?ld(t,e):Yt(e)?ld(e,t):t===e}function ld(t,e){return Yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ar;(function(t){t.pop="pop",t.push="push"})(Ar||(Ar={}));var cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cr||(cr={}));function gT(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uT(t)}const mT=/^[^#]+#/;function _T(t,e){return t.replace(mT,"#")+e}function yT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function vT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=yT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const bc=new Map;function ET(t,e){bc.set(t,e)}function wT(t){const e=bc.get(t);return bc.delete(t),e}let TT=()=>location.protocol+"//"+location.host;function Dm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ad(l,"")}return ad(n,t)+s+i}function CT(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=Dm(t,location),m=n.value,_=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=_?f.position-_.position:0}else s(p);i.forEach(I=>{I(n.value,m,{delta:v,type:Ar.pop,direction:v?v>0?cr.forward:cr.back:cr.unknown})})};function l(){o=n.value}function c(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:Wa()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function ud(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Wa():null}}function IT(t){const{history:e,location:n}=window,s={value:Dm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:TT()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=pe({},e.state,ud(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:Wa()});r(u.current,u,!0);const h=pe({},ud(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function ST(t){t=gT(t);const e=IT(t),n=CT(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:_T.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function bT(t){return typeof t=="string"||t&&typeof t=="object"}function Om(t){return typeof t=="string"||typeof t=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xm=Symbol("");var hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hd||(hd={}));function gi(t,e){return pe(new Error,{type:t,[xm]:!0},e)}function En(t,e){return t instanceof Error&&xm in t&&(e==null||!!(t.type&e))}const fd="[^/]+?",AT={sensitive:!1,strict:!1,start:!0,end:!0},RT=/[.+*?^${}()[\]/\\]/g;function NT(t,e){const n=pe({},AT,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(RT,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:_,optional:v,regexp:I}=f;r.push({name:m,repeatable:_,optional:v});const N=I||fd;if(N!==fd){p+=10;try{new RegExp(`(${N})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+M.message)}}let w=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(w=v&&c.length<2?`(?:/${w})`:"/"+w),v&&(w+="?"),i+=w,p+=20,v&&(p+=-8),_&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,I=m in c?c[m]:"";if(Yt(I)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=Yt(I)?I.join("/"):I;if(!N)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function kT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DT(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=kT(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(dd(s))return 1;if(dd(i))return-1}return i.length-s.length}function dd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OT={type:0,value:""},xT=/[a-zA-Z0-9_]/;function PT(t){if(!t)return[[]];if(t==="/")return[[OT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:xT.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function MT(t,e,n){const s=NT(PT(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function LT(t,e){const n=[],s=new Map;e=md({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,m=FT(u);m.aliasOf=f&&f.record;const _=md(e,u),v=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of w)v.push(pe({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let I,N;for(const w of v){const{path:M}=w;if(h&&M[0]!=="/"){const X=h.record.path,ie=X[X.length-1]==="/"?"":"/";w.path=h.record.path+(M&&ie+M)}if(I=MT(w,h,_),f?f.alias.push(I):(N=N||I,N!==I&&N.alias.push(I),p&&u.name&&!gd(I)&&o(u.name)),m.children){const X=m.children;for(let ie=0;ie<X.length;ie++)r(X[ie],I,f&&f.children[ie])}f=f||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return N?()=>{o(N)}:lr}function o(u){if(Om(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&DT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Pm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gd(u)&&s.set(u.record.name,u)}function c(u,h){let f,p={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw gi(1,{location:u});_=f.record.name,p=pe(pd(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&pd(u.params,f.keys.map(N=>N.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(N=>N.re.test(m)),f&&(p=f.parse(m),_=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw gi(1,{location:u,currentLocation:h});_=f.record.name,p=pe({},h.params,u.params),m=f.stringify(p)}const v=[];let I=f;for(;I;)v.unshift(I.record),I=I.parent;return{name:_,path:m,params:p,matched:v,meta:$T(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function pd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function FT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:UT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function UT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $T(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function md(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pm(t,e){return e.children.some(n=>n===t||Pm(t,n))}const Mm=/#/g,VT=/&/g,BT=/\//g,jT=/=/g,HT=/\?/g,Lm=/\+/g,KT=/%5B/g,qT=/%5D/g,Fm=/%5E/g,zT=/%60/g,Um=/%7B/g,WT=/%7C/g,$m=/%7D/g,GT=/%20/g;function Gu(t){return encodeURI(""+t).replace(WT,"|").replace(KT,"[").replace(qT,"]")}function QT(t){return Gu(t).replace(Um,"{").replace($m,"}").replace(Fm,"^")}function Ac(t){return Gu(t).replace(Lm,"%2B").replace(GT,"+").replace(Mm,"%23").replace(VT,"%26").replace(zT,"`").replace(Um,"{").replace($m,"}").replace(Fm,"^")}function YT(t){return Ac(t).replace(jT,"%3D")}function XT(t){return Gu(t).replace(Mm,"%23").replace(HT,"%3F")}function JT(t){return t==null?"":XT(t).replace(BT,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ZT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Lm," "),o=r.indexOf("="),a=Zo(o<0?r:r.slice(0,o)),l=o<0?null:Zo(r.slice(o+1));if(a in e){let c=e[a];Yt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function _d(t){let e="";for(let n in t){const s=t[n];if(n=YT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(s)?s.map(r=>r&&Ac(r)):[s&&Ac(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function eC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Yt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const tC=Symbol(""),yd=Symbol(""),Qu=Symbol(""),Vm=Symbol(""),Rc=Symbol("");function Hi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Un(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(gi(4,{from:n,to:e})):h instanceof Error?a(h):bT(h)?a(gi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ml(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(nC(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Un(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=lT(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Un(f,n,s,r,o)()}))}}return i}function nC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vd(t){const e=Wt(Qu),n=Wt(Vm),s=xt(()=>e.resolve(ft(t.to))),i=xt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(pi.bind(null,u));if(f>-1)return f;const p=Ed(l[c-2]);return c>1&&Ed(u)===p&&h[h.length-1].path!==p?h.findIndex(pi.bind(null,l[c-2])):f}),r=xt(()=>i.value>-1&&oC(n.params,s.value.params)),o=xt(()=>i.value>-1&&i.value===n.matched.length-1&&km(n.params,s.value.params));function a(l={}){return rC(l)?e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(lr):Promise.resolve()}return{route:s,href:xt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const sC=Zt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vd,setup(t,{slots:e}){const n=Kr(vd(t)),{options:s}=Wt(Qu),i=xt(()=>({[wd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Rm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),iC=sC;function rC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Yt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wd=(t,e,n)=>t??e??n,aC=Zt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Wt(Rc),i=xt(()=>t.route||s.value),r=Wt(yd,0),o=xt(()=>{let c=ft(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=xt(()=>i.value.matched[o.value]);Bo(yd,xt(()=>o.value+1)),Bo(tC,a),Bo(Rc,i);const l=ir();return rr(()=>[l.value,a.value,t.name],([c,u,h],[f,p,m])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!pi(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Td(n.default,{Component:f,route:c});const p=h.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,v=Rm(f,pe({},m,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Td(n.default,{Component:v,route:c})||v}}});function Td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lC=aC;function cC(t){const e=LT(t.routes,t),n=t.parseQuery||ZT,s=t.stringifyQuery||_d,i=t.history,r=Hi(),o=Hi(),a=Hi(),l=Zg(Mn);let c=Mn;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xl.bind(null,T=>""+T),h=xl.bind(null,JT),f=xl.bind(null,Zo);function p(T,F){let x,V;return Om(T)?(x=e.getRecordMatcher(T),V=F):V=T,e.addRoute(V,x)}function m(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function I(T,F){if(F=pe({},F||l.value),typeof T=="string"){const d=Pl(n,T,F.path),g=e.resolve({path:d.path},F),y=i.createHref(d.fullPath);return pe(d,g,{params:f(g.params),hash:Zo(d.hash),redirectedFrom:void 0,href:y})}let x;if("path"in T)x=pe({},T,{path:Pl(n,T.path,F.path).path});else{const d=pe({},T.params);for(const g in d)d[g]==null&&delete d[g];x=pe({},T,{params:h(T.params)}),F.params=h(F.params)}const V=e.resolve(x,F),re=T.hash||"";V.params=u(f(V.params));const De=hT(s,pe({},T,{hash:QT(re),path:V.path})),J=i.createHref(De);return pe({fullPath:De,hash:re,query:s===_d?eC(T.query):T.query||{}},V,{redirectedFrom:void 0,href:J})}function N(T){return typeof T=="string"?Pl(n,T,l.value.path):pe({},T)}function w(T,F){if(c!==T)return gi(8,{from:F,to:T})}function M(T){return we(T)}function X(T){return M(pe(N(T),{replace:!0}))}function ie(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:x}=F;let V=typeof x=="function"?x(T):x;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=N(V):{path:V},V.params={}),pe({query:T.query,hash:T.hash,params:"path"in V?{}:T.params},V)}}function we(T,F){const x=c=I(T),V=l.value,re=T.state,De=T.force,J=T.replace===!0,d=ie(x);if(d)return we(pe(N(d),{state:typeof d=="object"?pe({},re,d.state):re,force:De,replace:J}),F||x);const g=x;g.redirectedFrom=F;let y;return!De&&fT(s,V,x)&&(y=gi(16,{to:g,from:V}),is(V,V,!0,!1)),(y?Promise.resolve(y):Dt(g,V)).catch(E=>En(E)?En(E,2)?E:Ft(E):Te(E,g,V)).then(E=>{if(E){if(En(E,2))return we(pe({replace:J},N(E.to),{state:typeof E.to=="object"?pe({},re,E.to.state):re,force:De}),F||g)}else E=xn(g,V,!0,J,re);return _t(g,V,E),E})}function ve(T,F){const x=w(T,F);return x?Promise.reject(x):Promise.resolve()}function Dt(T,F){let x;const[V,re,De]=uC(T,F);x=Ml(V.reverse(),"beforeRouteLeave",T,F);for(const d of V)d.leaveGuards.forEach(g=>{x.push(Un(g,T,F))});const J=ve.bind(null,T,F);return x.push(J),Vs(x).then(()=>{x=[];for(const d of r.list())x.push(Un(d,T,F));return x.push(J),Vs(x)}).then(()=>{x=Ml(re,"beforeRouteUpdate",T,F);for(const d of re)d.updateGuards.forEach(g=>{x.push(Un(g,T,F))});return x.push(J),Vs(x)}).then(()=>{x=[];for(const d of T.matched)if(d.beforeEnter&&!F.matched.includes(d))if(Yt(d.beforeEnter))for(const g of d.beforeEnter)x.push(Un(g,T,F));else x.push(Un(d.beforeEnter,T,F));return x.push(J),Vs(x)}).then(()=>(T.matched.forEach(d=>d.enterCallbacks={}),x=Ml(De,"beforeRouteEnter",T,F),x.push(J),Vs(x))).then(()=>{x=[];for(const d of o.list())x.push(Un(d,T,F));return x.push(J),Vs(x)}).catch(d=>En(d,8)?d:Promise.reject(d))}function _t(T,F,x){for(const V of a.list())V(T,F,x)}function xn(T,F,x,V,re){const De=w(T,F);if(De)return De;const J=F===Mn,d=Ks?history.state:{};x&&(V||J?i.replace(T.fullPath,pe({scroll:J&&d&&d.scroll},re)):i.push(T.fullPath,re)),l.value=T,is(T,F,x,J),Ft()}let tn;function Fs(){tn||(tn=i.listen((T,F,x)=>{if(!mo.listening)return;const V=I(T),re=ie(V);if(re){we(pe(re,{replace:!0}),V).catch(lr);return}c=V;const De=l.value;Ks&&ET(cd(De.fullPath,x.delta),Wa()),Dt(V,De).catch(J=>En(J,12)?J:En(J,2)?(we(J.to,V).then(d=>{En(d,20)&&!x.delta&&x.type===Ar.pop&&i.go(-1,!1)}).catch(lr),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Te(J,V,De))).then(J=>{J=J||xn(V,De,!1),J&&(x.delta&&!En(J,8)?i.go(-x.delta,!1):x.type===Ar.pop&&En(J,20)&&i.go(-1,!1)),_t(V,De,J)}).catch(lr)}))}let ss=Hi(),Vi=Hi(),Me;function Te(T,F,x){Ft(T);const V=Vi.list();return V.length?V.forEach(re=>re(T,F,x)):console.error(T),Promise.reject(T)}function me(){return Me&&l.value!==Mn?Promise.resolve():new Promise((T,F)=>{ss.add([T,F])})}function Ft(T){return Me||(Me=!T,Fs(),ss.list().forEach(([F,x])=>T?x(T):F()),ss.reset()),T}function is(T,F,x,V){const{scrollBehavior:re}=t;if(!Ks||!re)return Promise.resolve();const De=!x&&wT(cd(T.fullPath,0))||(V||!x)&&history.state&&history.state.scroll||null;return im().then(()=>re(T,F,De)).then(J=>J&&vT(J)).catch(J=>Te(J,T,F))}const Ut=T=>i.go(T);let yt;const Us=new Set,mo={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:I,options:t,push:M,replace:X,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Vi.add,isReady:me,install(T){const F=this;T.component("RouterLink",iC),T.component("RouterView",lC),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(l)}),Ks&&!yt&&l.value===Mn&&(yt=!0,M(i.location).catch(re=>{}));const x={};for(const re in Mn)x[re]=xt(()=>l.value[re]);T.provide(Qu,F),T.provide(Vm,Kr(x)),T.provide(Rc,l);const V=T.unmount;Us.add(T),T.unmount=function(){Us.delete(T),Us.size<1&&(c=Mn,tn&&tn(),tn=null,l.value=Mn,yt=!1,Me=!1),V()}}};return mo}function Vs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>pi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>pi(c,l))||i.push(l))}return[n,s,i]}const fs=class{constructor(e,n){_o(this,"pseudo");_o(this,"id");this.pseudo=e,this.id=n}static generate(){const n=Math.floor(Math.random()*1e12),s=`user${n}`;return new fs(s,n.toString())}saveOnLocalStorage(){localStorage.setItem(fs.LOCAL_STORAGE_KEY,JSON.stringify(this))}static storedOnLocalStorage(){return localStorage.getItem(fs.LOCAL_STORAGE_KEY)!=null}static loadFromLocalStorage(){const e=localStorage.getItem(fs.LOCAL_STORAGE_KEY);if(e){const n=JSON.parse(e);return new fs(n.pseudo,n.id)}else throw Error("Loading player from local storage but not in local storage.")}};let ti=fs;_o(ti,"LOCAL_STORAGE_KEY","player");const hC=Zt({data(){return{player:ti.loadFromLocalStorage()}}}),en=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};function fC(t,e,n,s,i,r){return pt(),Ct("p",null,Pa(t.player.pseudo),1)}const dC=en(hC,[["render",fC]]),pC=Zt({components:{UserInfoSmall:dC}}),gC="/e-culture/assets/application-without-text-f8b8b962.png";const mC=t=>(qr("data-v-0b36bb7b"),t=t(),zr(),t),_C=mC(()=>$e("img",{src:gC,alt:"application logo"},null,-1));function yC(t,e,n,s,i,r){const o=Tt("router-link"),a=Tt("UserInfoSmall");return pt(),Ct("header",null,[Ee(o,{to:"/"},{default:Es(()=>[_C]),_:1}),Ee(a)])}const Wr=en(pC,[["render",yC],["__scopeId","data-v-0b36bb7b"]]),vC=Zt({components:{HeaderDefault:Wr}}),EC="/e-culture/assets/application-aa4cc065.png",wC="/e-culture/assets/company-24baf615.png";const Bm=t=>(qr("data-v-2916690c"),t=t(),zr(),t),TC={id:"home"},CC=Bm(()=>$e("img",{src:EC,alt:"application logo"},null,-1)),IC={id:"actions"},SC=Bm(()=>$e("footer",null,[$e("img",{src:wC,alt:"company logo"})],-1));function bC(t,e,n,s,i,r){const o=Tt("HeaderDefault"),a=Tt("router-link");return pt(),Ct("div",TC,[Ee(o),$e("main",null,[CC,$e("div",IC,[Ee(a,{class:"pseudo-button",to:"/create-game"},{default:Es(()=>[ei("Create a game")]),_:1}),Ee(a,{class:"pseudo-button",to:"/join-game"},{default:Es(()=>[ei("Join a game")]),_:1}),Ee(a,{class:"pseudo-button",to:"/about"},{default:Es(()=>[ei("About Us")]),_:1})])]),SC])}const AC=en(vC,[["render",bC],["__scopeId","data-v-2916690c"]]),RC=Zt({components:{HeaderDefault:Wr}}),NC=$e("p",null,"Create game here",-1);function kC(t,e,n,s,i,r){const o=Tt("HeaderDefault");return pt(),Ct(Ot,null,[Ee(o),NC],64)}const DC=en(RC,[["render",kC]]),OC=Zt({data:()=>({gameId:""})});const jm=t=>(qr("data-v-e4526e02"),t=t(),zr(),t),xC={id:"join-game-from-id"},PC=jm(()=>$e("h2",null,"Join a Game from an ID",-1)),MC={key:0},LC={key:1},FC=jm(()=>$e("p",null,"Please enter a Game ID",-1)),UC=[FC];function $C(t,e,n,s,i,r){const o=Tt("router-link");return pt(),Ct("div",xC,[PC,s0($e("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>t.gameId=a),placeholder:"Game ID"},null,512),[[sT,t.gameId]]),t.gameId?(pt(),Ct("div",MC,[Ee(o,{to:"/game/"+t.gameId,class:"pseudo-button"},{default:Es(()=>[ei("Join game '"+Pa(t.gameId)+"'",1)]),_:1},8,["to"])])):(pt(),Ct("div",LC,UC))])}const VC=en(OC,[["render",$C],["__scopeId","data-v-e4526e02"]]);const BC={},jC=t=>(qr("data-v-29cf4739"),t=t(),zr(),t),HC={id:"join-random-game"},KC=jC(()=>$e("h2",null,"Join a Random Game",-1));function qC(t,e){const n=Tt("router-link");return pt(),Ct("div",HC,[KC,Ee(n,{to:"/game/random",class:"pseudo-button"},{default:Es(()=>[ei("Join a random game")]),_:1})])}const zC=en(BC,[["render",qC],["__scopeId","data-v-29cf4739"]]),WC=Zt({components:{JoinGameFromId:VC,JoinGameRandom:zC,HeaderDefault:Wr}});const GC={id:"join-game"},QC={id:"different-join"};function YC(t,e,n,s,i,r){const o=Tt("HeaderDefault"),a=Tt("JoinGameRandom"),l=Tt("JoinGameFromId");return pt(),Ct("div",GC,[Ee(o),$e("div",QC,[Ee(a),Ee(l)])])}const XC=en(WC,[["render",YC],["__scopeId","data-v-7e63f1c8"]]),JC=Zt({components:{HeaderDefault:Wr}}),ZC=$e("p",null,"About here",-1);function eI(t,e,n,s,i,r){const o=Tt("HeaderDefault");return pt(),Ct(Ot,null,[Ee(o),ZC],64)}const tI=en(JC,[["render",eI]]);/**
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
 */const Hm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw Ni(e)},Ni=function(t){return new Error("Firebase Database ("+Hm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Km=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new sI;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qm=function(t){const e=Km(t);return Ga.encodeByteArray(e,!0)},ea=function(t){return qm(t).replace(/\./g,"")},ta=function(t){try{return Ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iI(t){return zm(void 0,t)}function zm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rI(n)||(t[n]=zm(t[n],e[n]));return t}function rI(t){return t!=="__proto__"}/**
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
 */function oI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aI=()=>oI().__FIREBASE_DEFAULTS__,lI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ta(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return aI()||lI()||cI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uI=t=>{var e,n;return(n=(e=Yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hI=t=>{const e=uI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fI=()=>{var t;return(t=Yu())===null||t===void 0?void 0:t.config},dI=t=>{var e;return(e=Yu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),a].join(".")}/**
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
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function gI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gm(){return Hm.NODE_ADMIN===!0}function Qm(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const _I="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_I,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,s)}}function yI(t,e){return t.replace(vI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vI=/\{\$([^}]+)}/g;/**
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
 */function Nr(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
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
 */const Ym=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Nr(ta(r[0])||""),n=Nr(ta(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},EI=function(t){const e=Ym(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wI=function(t){const e=Ym(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function na(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Nc(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Id(r)&&Id(o)){if(!Nc(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Id(t){return t!==null&&typeof t=="object"}/**
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
 */function Ju(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class TI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function CI(t,e){const n=new II(t,e);return n.subscribe.bind(n)}class II{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");SI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ll),i.error===void 0&&(i.error=Ll),i.complete===void 0&&(i.complete=Ll);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ll(){}function bI(t,e){return`${t} failed: ${e} argument `}/**
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
 */const AI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function es(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ls="[DEFAULT]";/**
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
 */class RI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Rr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kI(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===ls?void 0:t}function kI(t){return t.instantiationMode==="EAGER"}/**
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
 */class DI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const OI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},xI=ae.INFO,PI={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},MI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=PI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gr{constructor(e){this.name=e,this._logLevel=xI,this._logHandler=MI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let Sd,bd;function FI(){return Sd||(Sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return bd||(bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xm=new WeakMap,kc=new WeakMap,Jm=new WeakMap,Fl=new WeakMap,Zu=new WeakMap;function $I(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Hn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xm.set(n,t)}).catch(()=>{}),Zu.set(e,t),e}function VI(t){if(kc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BI(t){Dc=t(Dc)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ul(this),e,...n);return Jm.set(s,e.sort?e.sort():[e]),Hn(s)}:UI().includes(t)?function(...e){return t.apply(Ul(this),e),Hn(Xm.get(this))}:function(...e){return Hn(t.apply(Ul(this),e))}}function HI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&VI(t),LI(t,FI())?new Proxy(t,Dc):t)}function Hn(t){if(t instanceof IDBRequest)return $I(t);if(Fl.has(t))return Fl.get(t);const e=HI(t);return e!==t&&(Fl.set(t,e),Zu.set(e,t)),e}const Ul=t=>Zu.get(t);function KI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Hn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qI=["get","getKey","getAll","getAllKeys","count"],zI=["put","add","delete","clear"],$l=new Map;function Ad(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $l.set(e,r),r}BI(t=>({...t,get:(e,n,s)=>Ad(e,n)||t.get(e,n,s),has:(e,n)=>!!Ad(e,n)||t.has(e,n)}));/**
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
 */class WI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function GI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",Rd="0.9.9";/**
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
 */const Ss=new Gr("@firebase/app"),QI="@firebase/app-compat",YI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",sS="@firebase/database-compat",iS="@firebase/functions",rS="@firebase/functions-compat",oS="@firebase/installations",aS="@firebase/installations-compat",lS="@firebase/messaging",cS="@firebase/messaging-compat",uS="@firebase/performance",hS="@firebase/performance-compat",fS="@firebase/remote-config",dS="@firebase/remote-config-compat",pS="@firebase/storage",gS="@firebase/storage-compat",mS="@firebase/firestore",_S="@firebase/firestore-compat",yS="firebase",vS="9.21.0";/**
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
 */const xc="[DEFAULT]",ES={[Oc]:"fire-core",[QI]:"fire-core-compat",[XI]:"fire-analytics",[YI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[sS]:"fire-rtdb-compat",[iS]:"fire-fn",[rS]:"fire-fn-compat",[oS]:"fire-iid",[aS]:"fire-iid-compat",[lS]:"fire-fcm",[cS]:"fire-fcm-compat",[uS]:"fire-perf",[hS]:"fire-perf-compat",[fS]:"fire-rc",[dS]:"fire-rc-compat",[pS]:"fire-gcs",[gS]:"fire-gcs-compat",[mS]:"fire-fst",[_S]:"fire-fst-compat","fire-js":"fire-js",[yS]:"fire-js-all"};/**
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
 */const sa=new Map,Pc=new Map;function wS(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(Pc.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of sa.values())wS(n,t);return!0}function TS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kn=new ki("app","Firebase",CS);/**
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
 */class IS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=vS;function Zm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=fI()),!n)throw Kn.create("no-options");const r=sa.get(i);if(r){if(Nc(n,r.options)&&Nc(s,r.config))return r;throw Kn.create("duplicate-app",{appName:i})}const o=new DI(i);for(const l of Pc.values())o.addComponent(l);const a=new IS(n,s,o);return sa.set(i,a),a}function e_(t=xc){const e=sa.get(t);if(!e&&t===xc)return Zm();if(!e)throw Kn.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let i=(s=ES[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}pn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const SS="firebase-heartbeat-database",bS=1,kr="firebase-heartbeat-store";let Vl=null;function t_(){return Vl||(Vl=KI(SS,bS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function AS(t){try{return(await t_()).transaction(kr).objectStore(kr).get(n_(t))}catch(e){if(e instanceof Dn)Ss.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function Nd(t,e){try{const s=(await t_()).transaction(kr,"readwrite");return await s.objectStore(kr).put(e,n_(t)),s.done}catch(n){if(n instanceof Dn)Ss.warn(n.message);else{const s=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(s.message)}}}function n_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RS=1024,NS=30*24*60*60*1e3;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=NS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kd(),{heartbeatsToSend:n,unsentEntries:s}=DS(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kd(){return new Date().toISOString().substring(0,10)}function DS(t,e=RS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Dd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class OS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qm()?mI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await AS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dd(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xS(t){pn(new Xt("platform-logger",e=>new WI(e),"PRIVATE")),pn(new Xt("heartbeat",e=>new kS(e),"PRIVATE")),Rt(Oc,Rd,t),Rt(Oc,Rd,"esm2017"),Rt("fire-js","")}xS("");var PS="firebase",MS="9.21.0";/**
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
 */Rt(PS,MS,"app");var LS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,eh=eh||{},q=LS||self;function ia(){}function Ya(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FS(t){return Object.prototype.hasOwnProperty.call(t,Bl)&&t[Bl]||(t[Bl]=++US)}var Bl="closure_uid_"+(1e9*Math.random()>>>0),US=0;function $S(t,e,n){return t.call.apply(t.bind,arguments)}function VS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=$S:at=VS,at.apply(null,arguments)}function Io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ts(){this.s=this.s,this.o=this.o}var BS=0;ts.prototype.s=!1;ts.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),BS!=0)&&FS(this)};ts.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const s_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function th(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Od(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ya(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var jS=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",ia,e),q.removeEventListener("test",ia,e)}catch{}return t}();function ra(t){return/^[\s\xa0]*$/.test(t)}var xd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function jl(t,e){return t<e?-1:t>e?1:0}function Xa(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return Xa().indexOf(t)!=-1}function nh(t){return nh[" "](t),t}nh[" "]=ia;function i_(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var HS=an("Opera"),_i=an("Trident")||an("MSIE"),r_=an("Edge"),Mc=r_||_i,o_=an("Gecko")&&!(Xa().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),KS=Xa().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function a_(){var t=q.document;return t?t.documentMode:void 0}var oa;e:{var Hl="",Kl=function(){var t=Xa();if(o_)return/rv:([^\);]+)(\)|;)/.exec(t);if(r_)return/Edge\/([\d\.]+)/.exec(t);if(_i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(KS)return/WebKit\/(\S+)/.exec(t);if(HS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Kl&&(Hl=Kl?Kl[1]:""),_i){var ql=a_();if(ql!=null&&ql>parseFloat(Hl)){oa=String(ql);break e}}oa=Hl}var qS={};function zS(){return i_(qS,9,function(){let t=0;const e=xd(String(oa)).split("."),n=xd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=jl(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||jl(i[2].length==0,r[2].length==0)||jl(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Lc;if(q.document&&_i){var Pd=a_();Lc=Pd||parseInt(oa,10)||void 0}else Lc=void 0;var WS=Lc;function Dr(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(o_){e:{try{nh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Dr.$.h.call(this)}}Qe(Dr,lt);var GS={2:"touch",3:"pen",4:"mouse"};Dr.prototype.h=function(){Dr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),QS=0;function YS(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++QS,this.fa=this.ia=!1}function Ja(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function l_(t){const e={};for(const n in t)e[n]=t[n];return e}const Md="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function c_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Md.length;r++)n=Md[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Za(t){this.src=t,this.g={},this.h=0}Za.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Uc(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new YS(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Fc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=s_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ja(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var ih="closure_lm_"+(1e6*Math.random()|0),zl={};function u_(t,e,n,s,i){if(s&&s.once)return f_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)u_(t,e[r],n,s,i);return null}return n=ah(n),t&&t[Yr]?t.O(e,n,Qr(s)?!!s.capture:!!s,i):h_(t,e,n,!1,s,i)}function h_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Qr(i)?!!i.capture:!!i,a=oh(t);if(a||(t[ih]=a=new Za(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=XS(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(p_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function XS(){function t(n){return e.call(t.src,t.listener,n)}const e=JS;return t}function f_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)f_(t,e[r],n,s,i);return null}return n=ah(n),t&&t[Yr]?t.P(e,n,Qr(s)?!!s.capture:!!s,i):h_(t,e,n,!0,s,i)}function d_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)d_(t,e[r],n,s,i);else s=Qr(s)?!!s.capture:!!s,n=ah(n),t&&t[Yr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Uc(r,n,s,i),-1<n&&(Ja(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=oh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uc(e,n,s,i)),(n=-1<t?e[t]:null)&&rh(n))}function rh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yr])Fc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(p_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=oh(e))?(Fc(n,t),n.h==0&&(n.src=null,e[ih]=null)):Ja(t)}}}function p_(t){return t in zl?zl[t]:zl[t]="on"+t}function JS(t,e){if(t.fa)t=!0;else{e=new Dr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&rh(t),t=n.call(s,e)}return t}function oh(t){return t=t[ih],t instanceof Za?t:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ah(t){return typeof t=="function"?t:(t[Wl]||(t[Wl]=function(e){return t.handleEvent(e)}),t[Wl])}function Ge(){ts.call(this),this.i=new Za(this),this.S=this,this.J=null}Qe(Ge,ts);Ge.prototype[Yr]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){d_(this,t,e,n,s)};function Ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var i=e;e=new lt(s,t),c_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=So(o,s,!0,e)&&i}if(o=e.g=t,i=So(o,s,!0,e)&&i,i=So(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=So(o,s,!1,e)&&i}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ja(n[s]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function So(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Fc(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var lh=q.JSON.stringify;function ZS(){var t=__;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eb{constructor(){this.h=this.g=null}add(e,n){const s=g_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var g_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tb,t=>t.reset());class tb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nb(t){q.setTimeout(()=>{throw t},0)}function m_(t,e){$c||sb(),Vc||($c(),Vc=!0),__.add(t,e)}var $c;function sb(){var t=q.Promise.resolve(void 0);$c=function(){t.then(ib)}}var Vc=!1,__=new eb;function ib(){for(var t;t=ZS();){try{t.h.call(t.g)}catch(n){nb(n)}var e=g_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vc=!1}function el(t,e){Ge.call(this),this.h=t||1,this.g=e||q,this.j=at(this.qb,this),this.l=Date.now()}Qe(el,Ge);P=el.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(ch(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ch(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){el.$.N.call(this),ch(this),delete this.g};function uh(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function y_(t){t.g=uh(()=>{t.g=null,t.i&&(t.i=!1,y_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rb extends ts{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:y_(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(t){ts.call(this),this.h=t,this.g={}}Qe(Or,ts);var Ld=[];function v_(t,e,n,s){Array.isArray(n)||(n&&(Ld[0]=n.toString()),n=Ld);for(var i=0;i<n.length;i++){var r=u_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function E_(t){sh(t.g,function(e,n){this.g.hasOwnProperty(n)&&rh(e)},t),t.g={}}Or.prototype.N=function(){Or.$.N.call(this),E_(this)};Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tl(){this.g=!0}tl.prototype.Ea=function(){this.g=!1};function ob(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ab(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ws(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cb(t,n)+(s?" "+s:"")})}function lb(t,e){t.info(function(){return"TIMEOUT: "+e})}tl.prototype.info=function(){};function cb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lh(n)}catch{return e}}var xs={},Fd=null;function nl(){return Fd=Fd||new Ge}xs.Ta="serverreachability";function w_(t){lt.call(this,xs.Ta,t)}Qe(w_,lt);function xr(t){const e=nl();Ze(e,new w_(e))}xs.STAT_EVENT="statevent";function T_(t,e){lt.call(this,xs.STAT_EVENT,t),this.stat=e}Qe(T_,lt);function dt(t){const e=nl();Ze(e,new T_(e,t))}xs.Ua="timingevent";function C_(t,e){lt.call(this,xs.Ua,t),this.size=e}Qe(C_,lt);function Xr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var sl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},I_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hh(){}hh.prototype.h=null;function Ud(t){return t.h||(t.h=t.i())}function S_(){}var Jr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fh(){lt.call(this,"d")}Qe(fh,lt);function dh(){lt.call(this,"c")}Qe(dh,lt);var Bc;function il(){}Qe(il,hh);il.prototype.g=function(){return new XMLHttpRequest};il.prototype.i=function(){return{}};Bc=new il;function Zr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Or(this),this.P=ub,t=Mc?125:void 0,this.V=new el(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new b_}function b_(){this.i=null,this.g="",this.h=!1}var ub=45e3,jc={},aa={};P=Zr.prototype;P.setTimeout=function(t){this.P=t};function Hc(t,e,n){t.L=1,t.v=ol(An(e)),t.s=n,t.S=!0,A_(t,null)}function A_(t,e){t.G=Date.now(),eo(t),t.A=An(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),M_(n.i,"t",s),t.C=0,n=t.l.I,t.h=new b_,t.g=ny(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rb(at(t.Pa,t,t.g),t.O)),v_(t.U,t.g,"readystatechange",t.nb),e=t.I?l_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xr(),ob(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Tn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=Tn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Mc||this.g&&(this.h.h||this.g.ja()||jd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?xr(3):xr(2)),rl(this);var n=this.g.da();this.aa=n;t:if(R_(this)){var s=jd(this.g);t="";var i=s.length,r=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),ur(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ab(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ra(a)){var c=a;break t}}c=null}if(n=c)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kc(this,n);else{this.i=!1,this.o=3,dt(12),ps(this),ur(this);break e}}this.S?(N_(this,u,o),Mc&&this.i&&u==3&&(v_(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),Kc(this,o)),u==4&&ps(this),this.i&&!this.J&&(u==4?J_(this.l,this):(this.i=!1,eo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),ps(this),ur(this)}}}catch{}finally{}};function R_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function N_(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=hb(t,n),i==aa){e==4&&(t.o=4,dt(14),s=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==jc){t.o=4,dt(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ws(t.j,t.m,i,null),Kc(t,i);R_(t)&&i!=aa&&i!=jc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eh(e),e.L=!0,dt(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),ps(t),ur(t))}P.mb=function(){if(this.g){var t=Tn(this.g),e=this.g.ja();this.C<e.length&&(rl(this),N_(this,t,e),this.i&&t!=4&&eo(this))}};function hb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?aa:(n=Number(e.substring(n,s)),isNaN(n)?jc:(s+=1,s+n>e.length?aa:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,ps(this)};function eo(t){t.Y=Date.now()+t.P,k_(t,t.P)}function k_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xr(at(t.lb,t),e)}function rl(t){t.B&&(q.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lb(this.j,this.A),this.L!=2&&(xr(),dt(17)),ps(this),this.o=2,ur(this)):k_(this,this.Y-t)};function ur(t){t.l.H==0||t.J||J_(t.l,t)}function ps(t){rl(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,ch(t.V),E_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Kc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||qc(n.h,t))){if(!t.K&&qc(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ua(n),cl(n);else break e;vh(n),dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Xr(at(n.ib,n),6e3));if(1>=U_(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else gs(n,11)}else if((t.K||n.g==t)&&ua(n),!ra(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ph(r,r.h),r.h=null))}if(s.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Re(s.G,s.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=ty(s,s.I?s.oa:null,s.Y),o.K){$_(s.h,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(rl(a),eo(a)),s.g=o}else Y_(s);0<n.i.length&&ul(n)}else c[0]!="stop"&&c[0]!="close"||gs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?gs(n,7):yh(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}xr(4)}catch{}}function fb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ya(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function db(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ya(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function D_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ya(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=db(t),s=fb(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var O_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ts(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ts){this.h=e!==void 0?e:t.h,la(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l,e=t.i;var n=new Pr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$d(this,n),this.o=t.o}else t&&(n=String(t).match(O_))?(this.h=!!e,la(this,n[1]||"",!0),this.s=Ji(n[2]||""),this.g=Ji(n[3]||"",!0),ca(this,n[4]),this.l=Ji(n[5]||"",!0),$d(this,n[6]||"",!0),this.o=Ji(n[7]||"")):(this.h=!!e,this.i=new Pr(null,this.h))}Ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zi(e,Vd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zi(e,Vd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zi(n,n.charAt(0)=="/"?_b:mb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zi(n,vb)),t.join("")};function An(t){return new Ts(t)}function la(t,e,n){t.j=n?Ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $d(t,e,n){e instanceof Pr?(t.i=e,Eb(t.i,t.h)):(n||(e=Zi(e,yb)),t.i=new Pr(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function ol(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vd=/[#\/\?@]/g,mb=/[#\?:]/g,_b=/[#\?]/g,yb=/[#\?@]/g,vb=/#/g;function Pr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ns(t){t.g||(t.g=new Map,t.h=0,t.i&&pb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Pr.prototype;P.add=function(t,e){ns(this),this.i=null,t=Oi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function x_(t,e){ns(t),e=Oi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function P_(t,e){return ns(t),e=Oi(t,e),t.g.has(e)}P.forEach=function(t,e){ns(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};P.sa=function(){ns(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};P.Z=function(t){ns(this);let e=[];if(typeof t=="string")P_(this,t)&&(e=e.concat(this.g.get(Oi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return ns(this),this.i=null,t=Oi(this,t),P_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function M_(t,e,n){x_(t,e),0<n.length&&(t.i=null,t.g.set(Oi(t,e),th(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Oi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Eb(t,e){e&&!t.j&&(ns(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(x_(this,s),M_(this,i,n))},t)),t.j=e}var wb=class{constructor(t,e){this.h=t,this.g=e}};function L_(t){this.l=t||Tb,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tb=10;function F_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function U_(t){return t.h?1:t.g?t.g.size:0}function qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ph(t,e){t.g?t.g.add(e):t.h=e}function $_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}L_.prototype.cancel=function(){if(this.i=V_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function V_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return th(t.i)}function gh(){}gh.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};gh.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function Cb(){this.g=new gh}function Ib(t,e,n){const s=n||"";try{D_(t,function(i,r){let o=i;Qr(i)&&(o=lh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Sb(t,e){const n=new tl;if(q.Image){const s=new Image;s.onload=Io(bo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Io(bo,n,s,"TestLoadImage: error",!1,e),s.onabort=Io(bo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Io(bo,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function bo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function to(t){this.l=t.fc||null,this.j=t.ob||!1}Qe(to,hh);to.prototype.g=function(){return new al(this.l,this.j)};to.prototype.i=function(t){return function(){return t}}({});function al(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(al,Ge);var mh=0;P=al.prototype;P.open=function(t,e){if(this.readyState!=mh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=mh};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mr(this)),this.g&&(this.readyState=3,Mr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;B_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function B_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?no(this):Mr(this),this.readyState==3&&B_(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,no(this))};P.Ya=function(t){this.g&&(this.response=t,no(this))};P.ka=function(){this.g&&no(this)};function no(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bb=q.JSON.parse;function Oe(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=j_,this.L=this.M=!1}Qe(Oe,Ge);var j_="",Ab=/^https?$/i,Rb=["POST","PUT"];P=Oe.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bc.g(),this.C=this.u?Ud(this.u):Ud(Bc),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Bd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=s_(Rb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{q_(this),0<this.B&&((this.L=Nb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=uh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Bd(this,r)}};function Nb(t){return _i&&zS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof eh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function Bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,H_(t),ll(t)}function H_(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),ll(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ll(this,!0)),Oe.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?K_(this):this.kb())};P.kb=function(){K_(this)};function K_(t){if(t.h&&typeof eh<"u"&&(!t.C[1]||Tn(t)!=4||t.da()!=2)){if(t.v&&Tn(t)==4)uh(t.La,0,t);else if(Ze(t,"readystatechange"),Tn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.I).match(O_)[1]||null;if(!i&&q.self&&q.self.location){var r=q.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ab.test(i?i.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",H_(t)}}finally{ll(t)}}}}function ll(t,e){if(t.g){q_(t);const n=t.g,s=t.C[0]?ia:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function q_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Tn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bb(e)}};function jd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case j_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function z_(t){let e="";return sh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function _h(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=z_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Ki(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function W_(t){this.Ga=0,this.i=[],this.j=new tl,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ki("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ki("baseRetryDelayMs",5e3,t),this.hb=Ki("retryDelaySeedMs",1e4,t),this.eb=Ki("forwardChannelMaxRetries",2,t),this.xa=Ki("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new L_(t&&t.concurrentRequestLimit),this.Ja=new Cb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=W_.prototype;P.qa=8;P.H=1;function yh(t){if(G_(t),t.H==3){var e=t.W++,n=An(t.G);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),so(t,n),e=new Zr(t,t.j,e,void 0),e.L=2,e.v=ol(An(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=ny(e.l,null),e.g.ha(e.v)),e.G=Date.now(),eo(e)}ey(t)}function cl(t){t.g&&(Eh(t),t.g.cancel(),t.g=null)}function G_(t){cl(t),t.u&&(q.clearTimeout(t.u),t.u=null),ua(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function ul(t){F_(t.h)||t.m||(t.m=!0,m_(t.Na,t),t.C=0)}function kb(t,e){return U_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xr(at(t.Na,t,e),Z_(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zr(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=l_(r),c_(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Q_(this,i,e),n=An(this.G),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),so(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(z_(r)))+"&"+e:this.o&&_h(n,this.o,r)),ph(this.h,i),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),i.ba=!0,Hc(i,n,null)):Hc(i,n,e),this.H=2}}else this.H==3&&(t?Hd(this,t):this.i.length==0||F_(this.h)||Hd(this))};function Hd(t,e){var n;e?n=e.m:n=t.W++;const s=An(t.G);Re(s,"SID",t.J),Re(s,"RID",n),Re(s,"AID",t.V),so(t,s),t.o&&t.s&&_h(s,t.o,t.s),n=new Zr(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Q_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ph(t.h,n),Hc(n,s,e)}function so(t,e){t.ma&&sh(t.ma,function(n,s){Re(e,s,n)}),t.l&&D_({},function(n,s){Re(e,s,n)})}function Q_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?at(t.l.Va,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Ib(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Y_(t){t.g||t.u||(t.ba=1,m_(t.Ma,t),t.A=0)}function vh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xr(at(t.Ma,t),Z_(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,X_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Xr(at(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,dt(10),cl(this),X_(this))};function Eh(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function X_(t){t.g=new Zr(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=An(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.M?"0":"1"),Re(e,"AID",t.V),Re(e,"TYPE","xmlhttp"),so(t,e),t.o&&t.s&&_h(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ol(An(e)),n.s=null,n.S=!0,A_(n,t)}P.ib=function(){this.v!=null&&(this.v=null,cl(this),vh(this),dt(19))};function ua(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function J_(t,e){var n=null;if(t.g==e){ua(t),Eh(t),t.g=null;var s=2}else if(qc(t.h,e))n=e.F,$_(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=nl(),Ze(s,new C_(s,n)),ul(t)}else Y_(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(s==1&&kb(t,e)||s==2&&vh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:gs(t,5);break;case 4:gs(t,10);break;case 3:gs(t,6);break;default:gs(t,2)}}}function Z_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function gs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=at(t.pb,t);n||(n=new Ts("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||la(n,"https"),ol(n)),Sb(n.toString(),s)}else dt(2);t.H=0,t.l&&t.l.za(e),ey(t),G_(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function ey(t){if(t.H=0,t.pa=[],t.l){const e=V_(t.h);(e.length!=0||t.i.length!=0)&&(Od(t.pa,e),Od(t.pa,t.i),t.h.i.length=0,th(t.i),t.i.length=0),t.l.ya()}}function ty(t,e,n){var s=n instanceof Ts?An(n):new Ts(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ca(s,s.m);else{var i=q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ts(null,void 0);s&&la(r,s),e&&(r.g=e),i&&ca(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.qa),so(t,s),s}function ny(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new to({ob:!0})):new Oe(t.va),e.Oa(t.I),e}function sy(){}P=sy.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function ha(){if(_i&&!(10<=Number(WS)))throw Error("Environmental error: no available transport.")}ha.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){Ge.call(this),this.g=new W_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ra(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ra(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xi(this)}Qe(kt,Ge);kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=ty(t,null,t.Y),ul(t)};kt.prototype.close=function(){yh(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lh(t),t=n);e.i.push(new wb(e.fb++,t)),e.H==3&&ul(e)};kt.prototype.N=function(){this.g.l=null,delete this.j,yh(this.g),delete this.g,kt.$.N.call(this)};function iy(t){fh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(iy,fh);function ry(){dh.call(this),this.status=1}Qe(ry,dh);function xi(t){this.g=t}Qe(xi,sy);xi.prototype.Ba=function(){Ze(this.g,"a")};xi.prototype.Aa=function(t){Ze(this.g,new iy(t))};xi.prototype.za=function(t){Ze(this.g,new ry)};xi.prototype.ya=function(){Ze(this.g,"b")};function Db(){this.blockSize=-1}function Jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(Jt,Db);Jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gl(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Gl(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Gl(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Gl(this,s),i=0;break}}this.h=i,this.i+=e};Jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ge(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var Ob={};function wh(t){return-128<=t&&128>t?i_(Ob,t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function cn(t){if(isNaN(t)||!isFinite(t))return ni;if(0>t)return Xe(cn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=zc;return new ge(e,0)}function oy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(oy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cn(Math.pow(e,8)),s=ni,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=cn(Math.pow(e,r)),s=s.R(r).add(cn(o))):(s=s.R(n),s=s.add(cn(o)))}return s}var zc=4294967296,ni=wh(0),Wc=wh(1),Kd=wh(16777216);P=ge.prototype;P.ea=function(){if(Pt(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:zc+s)*e,e*=zc}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Pt(this))return"-"+Xe(this).toString(t);for(var e=cn(Math.pow(t,6)),n=this,s="";;){var i=da(n,e).g;n=fa(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Cn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}P.X=function(t){return t=fa(this,t),Pt(t)?-1:Cn(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ge(n,~t.h).add(Wc)}P.abs=function(){return Pt(this)?Xe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function fa(t,e){return t.add(Xe(e))}P.R=function(t){if(Cn(this)||Cn(t))return ni;if(Pt(this))return Pt(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(Pt(t))return Xe(this.R(Xe(t)));if(0>this.X(Kd)&&0>t.X(Kd))return cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Ao(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Ao(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Ao(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Ao(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ge(n,0)};function Ao(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qi(t,e){this.g=t,this.h=e}function da(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new qi(ni,ni);if(Pt(t))return e=da(Xe(t),e),new qi(Xe(e.g),Xe(e.h));if(Pt(e))return e=da(t,Xe(e)),new qi(Xe(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wc,s=e;0>=s.X(t);)n=qd(n),s=qd(s);var i=Bs(n,1),r=Bs(s,1);for(s=Bs(s,2),n=Bs(n,2);!Cn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Bs(s,1),n=Bs(n,1)}return e=fa(t,i.R(e)),new qi(i,e)}for(i=ni;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=cn(n),o=r.R(e);Pt(o)||0<o.X(t);)n-=s,r=cn(n),o=r.R(e);Cn(r)&&(r=Wc),i=i.add(r),t=fa(t,o)}return new qi(i,t)}P.gb=function(t){return da(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ge(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ge(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ge(n,this.h^t.h)};function qd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ge(n,t.h)}function Bs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ge(i,t.h)}ha.prototype.createWebChannel=ha.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;sl.NO_ERROR=0;sl.TIMEOUT=8;sl.HTTP_ERROR=6;I_.COMPLETE="complete";S_.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;Jt.prototype.digest=Jt.prototype.l;Jt.prototype.reset=Jt.prototype.reset;Jt.prototype.update=Jt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=cn;ge.fromString=oy;var xb=function(){return new ha},Pb=function(){return nl()},Ql=sl,Mb=I_,Lb=xs,zd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Fb=to,Ro=S_,Ub=Oe,$b=Jt,si=ge;const Wd="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let Pi="9.21.0";/**
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
 */const bs=new Gr("@firebase/firestore");function Gd(){return bs.logLevel}function $(t,...e){if(bs.logLevel<=ae.DEBUG){const n=e.map(Th);bs.debug(`Firestore (${Pi}): ${t}`,...n)}}function Rn(t,...e){if(bs.logLevel<=ae.ERROR){const n=e.map(Th);bs.error(`Firestore (${Pi}): ${t}`,...n)}}function yi(t,...e){if(bs.logLevel<=ae.WARN){const n=e.map(Th);bs.warn(`Firestore (${Pi}): ${t}`,...n)}}function Th(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function Be(t,e){t||Y()}function ue(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ay{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Bb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jb{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string"),new ay(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new tt(e)}}class Hb{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Kb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Hb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.T=n.token,new qb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ly{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Wb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class gt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new gt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new gt(0,0))}static max(){return new W(new gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Lr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Lr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Lr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Lr{construct(e,n,s){return new Ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const Gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Lr{construct(e,n,s){return new Et(e,n,s)}static isValidIdentifier(e){return Gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ne.fromString(e))}static fromName(e){return new K(Ne.fromString(e).popFirst(5))}static empty(){return new K(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ne(e.slice()))}}function Qb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(s===1e9?new gt(n+1,0):new gt(n,s));return new Yn(i,K.empty(),e)}function Yb(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Yn(W.min(),K.empty(),-1)}static max(){return new Yn(W.max(),K.empty(),-1)}}function Xb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const Jb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ch(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Jb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ih{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ih.ct=-1;function hl(t){return t==null}function Gc(t){return t===0&&1/t==-1/0}/**
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
 */function Qd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??Ye.EMPTY,this.right=r??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yd(this.data.getIterator())}getIteratorFrom(e){return new Yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $n{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new $n([])}unionWith(e){let n=new ct(Et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new $n(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class cy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cy("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const tA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Be(!!t),typeof t=="string"){let e=0;const n=tA.exec(t);if(Be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function Sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bh(t){const e=t.mapValue.fields.__previous_value__;return Sh(e)?bh(e):e}function Fr(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class nA{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ur{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sh(t)?4:sA(t)?9007199254740991:10:Y()}function gn(t,e){if(t===e)return!0;const n=Rs(t);if(n!==Rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fr(t).isEqual(Fr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Xn(s.timestampValue),o=Xn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return As(s.bytesValue).isEqual(As(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ue(s.doubleValue),o=Ue(i.doubleValue);return r===o?Gc(r)===Gc(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Qd(r)!==Qd(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!gn(r[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function $r(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=Rs(t),s=Rs(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ue(i.integerValue||i.doubleValue),a=Ue(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(Fr(t),Fr(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,r){const o=As(i),a=As(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=he(o[l],a[l]);if(c!==0)return c}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=he(Ue(i.latitude),Ue(r.latitude));return o!==0?o:he(Ue(i.longitude),Ue(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ei(o[l],a[l]);if(c)return c}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ko.mapValue&&r===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(r===ko.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=he(a[u],c[u]);if(h!==0)return h;const f=Ei(o[a[u]],l[c[u]]);if(f!==0)return f}return he(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Xn(t),s=Xn(e),i=he(n.seconds,s.seconds);return i!==0?i:he(n.nanos,s.nanos)}function wi(t){return Qc(t)}function Qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Xn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?As(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Qc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Qc(s.fields[a])}`;return r+"}"}(t.mapValue):Y();var e,n}function Yc(t){return!!t&&"integerValue"in t}function Ah(t){return!!t&&"arrayValue"in t}function Jd(t){return!!t&&"nullValue"in t}function Zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fl(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=Et.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){fl(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ln(hr(this.value))}}/**
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
 */class nt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,W.min(),W.min(),W.min(),ln.empty(),0)}static newFoundDocument(e,n,s,i){return new nt(e,1,n,W.min(),s,i,0)}static newNoDocument(e,n){return new nt(e,2,n,W.min(),W.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,W.min(),W.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function ep(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Ei(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function tp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fr{constructor(e,n="asc"){this.field=e,this.dir=n}}function iA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class uy{}class Ve extends uy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new oA(e,n,s):n==="array-contains"?new cA(e,s):n==="in"?new uA(e,s):n==="not-in"?new hA(e,s):n==="array-contains-any"?new fA(e,s):new Ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new aA(e,s):new lA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ei(n,this.value)):n!==null&&Rs(this.value)===Rs(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mn extends uy{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new mn(e,n)}matches(e){return hy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hy(t){return t.op==="and"}function fy(t){return rA(t)&&hy(t)}function rA(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Xc(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(fy(t))return t.filters.map(e=>Xc(e)).join(",");{const e=t.filters.map(n=>Xc(n)).join(",");return`${t.op}(${e})`}}function dy(t,e){return t instanceof Ve?function(n,s){return s instanceof Ve&&n.op===s.op&&n.field.isEqual(s.field)&&gn(n.value,s.value)}(t,e):t instanceof mn?function(n,s){return s instanceof mn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&dy(r,s.filters[o]),!0):!1}(t,e):void Y()}function py(t){return t instanceof Ve?function(e){return`${e.field.canonicalString()} ${e.op} ${wi(e.value)}`}(t):t instanceof mn?function(e){return e.op.toString()+" {"+e.getFilters().map(py).join(" ,")+"}"}(t):"Filter"}class oA extends Ve{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class aA extends Ve{constructor(e,n){super(e,"in",n),this.keys=gy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lA extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=gy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class cA extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ah(n)&&$r(n.arrayValue,this.value)}}class uA extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$r(this.value.arrayValue,n)}}class hA extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$r(this.value.arrayValue,n)}}class fA extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ah(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>$r(this.value.arrayValue,s))}}/**
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
 */class dA{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function np(t,e=null,n=[],s=[],i=null,r=null,o=null){return new dA(t,e,n,s,i,r,o)}function Rh(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Xc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wi(s)).join(",")),e.ft=n}return e.ft}function Nh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tp(t.startAt,e.startAt)&&tp(t.endAt,e.endAt)}function Jc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class dl{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function pA(t,e,n,s,i,r,o,a){return new dl(t,e,n,s,i,r,o,a)}function pl(t){return new dl(t)}function sp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mA(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _A(t){return t.collectionGroup!==null}function ii(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=mA(e),s=gA(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new fr(n)),e.dt.push(new fr(Et.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new fr(Et.keyField(),r))}}}return e.dt}function Nn(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=np(e.path,e.collectionGroup,ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ii(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new fr(r.field,o))}const s=e.endAt?new pa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new pa(e.startAt.position,e.startAt.inclusive):null;e._t=np(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Zc(t,e,n){return new dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gl(t,e){return Nh(Nn(t),Nn(e))&&t.limitType===e.limitType}function my(t){return`${Rh(Nn(t))}|lt:${t.limitType}`}function eu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>py(s)).join(", ")}]`),hl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wi(s)).join(",")),`Target(${n})`}(Nn(t))}; limitType=${t.limitType})`}function ml(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of ii(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ep(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ii(n),s)||n.endAt&&!function(i,r,o){const a=ep(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ii(n),s))}(t,e)}function yA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _y(t){return(e,n)=>{let s=!1;for(const i of ii(t)){const r=vA(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function vA(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ei(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fl(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return eA(this.inner)}size(){return this.innerSize}}/**
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
 */const EA=new Pe(K.comparator);function Jn(){return EA}const yy=new Pe(K.comparator);function er(...t){let e=yy;for(const n of t)e=e.insert(n.key,n);return e}function wA(t){let e=yy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ms(){return dr()}function vy(){return dr()}function dr(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const TA=new ct(K.comparator);function le(...t){let e=TA;for(const n of t)e=e.add(n);return e}const CA=new ct(he);function IA(){return CA}/**
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
 */function SA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gc(e)?"-0":e}}function bA(t){return{integerValue:""+t}}/**
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
 */class _l{constructor(){this._=void 0}}function AA(t,e,n){return t instanceof tu?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sh(i)&&(i=bh(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ga?Ey(t,e):t instanceof ma?wy(t,e):function(s,i){const r=NA(s,i),o=ip(r)+ip(s.wt);return Yc(r)&&Yc(s.wt)?bA(o):SA(s.serializer,o)}(t,e)}function RA(t,e,n){return t instanceof ga?Ey(t,e):t instanceof ma?wy(t,e):n}function NA(t,e){return t instanceof nu?Yc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class tu extends _l{}class ga extends _l{constructor(e){super(),this.elements=e}}function Ey(t,e){const n=Ty(e);for(const s of t.elements)n.some(i=>gn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ma extends _l{constructor(e){super(),this.elements=e}}function wy(t,e){let n=Ty(e);for(const s of t.elements)n=n.filter(i=>!gn(i,s));return{arrayValue:{values:n}}}class nu extends _l{constructor(e,n){super(),this.serializer=e,this.wt=n}}function ip(t){return Ue(t.integerValue||t.doubleValue)}function Ty(t){return Ah(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kA(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ga&&s instanceof ga||n instanceof ma&&s instanceof ma?vi(n.elements,s.elements,gn):n instanceof nu&&s instanceof nu?gn(n.wt,s.wt):n instanceof tu&&s instanceof tu}(t.transform,e.transform)}class Cs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cs}static exists(e){return new Cs(void 0,e)}static updateTime(e){return new Cs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kh{}function Cy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new OA(t.key,Cs.none()):new Dh(t.key,t.data,Cs.none());{const n=t.data,s=ln.empty();let i=new ct(Et.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new yl(t.key,s,new $n(i.toArray()),Cs.none())}}function DA(t,e,n){t instanceof Dh?function(s,i,r){const o=s.value.clone(),a=op(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yl?function(s,i,r){if(!Ko(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=op(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Iy(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function pr(t,e,n,s){return t instanceof Dh?function(i,r,o,a){if(!Ko(i.precondition,r))return o;const l=i.value.clone(),c=ap(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof yl?function(i,r,o,a){if(!Ko(i.precondition,r))return o;const l=ap(i.fieldTransforms,a,r),c=r.data;return c.setAll(Iy(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Ko(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function rp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vi(n,s,(i,r)=>kA(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dh extends kh{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yl extends kh{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Iy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function op(t,e,n){const s=new Map;Be(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,RA(o,a,n[i]))}return s}function ap(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,AA(r,o,e))}return s}class OA extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xA{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&DA(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Cy(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,s)=>rp(n,s))&&vi(this.baseMutations,e.baseMutations,(n,s)=>rp(n,s))}}/**
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
 */class PA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,te;function Sy(t){if(t===void 0)return Rn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Fe.OK:return D.OK;case Fe.CANCELLED:return D.CANCELLED;case Fe.UNKNOWN:return D.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return D.INTERNAL;case Fe.UNAVAILABLE:return D.UNAVAILABLE;case Fe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Fe.NOT_FOUND:return D.NOT_FOUND;case Fe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Fe.ABORTED:return D.ABORTED;case Fe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Fe.DATA_LOSS:return D.DATA_LOSS;default:return Y()}}(te=Fe||(Fe={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Oh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Do}static getOrCreateInstance(){return Do===null&&(Do=new Oh),Do}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Do=null;/**
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
 */function LA(){return new TextEncoder}/**
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
 */const FA=new si([4294967295,4294967295],0);function lp(t){const e=LA().encode(t),n=new $b;return n.update(e),new Uint8Array(n.digest())}function cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new si([n,s],0),new si([i,r],0)]}class xh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new tr(`Invalid padding: ${n}`);if(s<0)throw new tr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new tr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=si.fromNumber(this.yt)}Tt(e,n,s){let i=e.add(n.multiply(si.fromNumber(s)));return i.compare(FA)===1&&(i=new si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=lp(e),[s,i]=cp(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);if(!this.Et(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new xh(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=lp(e),[s,i]=cp(n);for(let r=0;r<this.hashCount;r++){const o=this.Tt(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new vl(W.min(),i,new Pe(he),Jn(),le())}}class ro{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ro(s,n,le(),le(),le())}}/**
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
 */class qo{constructor(e,n,s,i){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=i}}class by{constructor(e,n){this.targetId=e,this.bt=n}}class Ay{constructor(e,n,s=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class up{constructor(){this.Vt=0,this.St=fp(),this.Dt=ut.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=le(),n=le(),s=le();return this.St.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new ro(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=fp()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class UA{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Jn(),this.jt=hp(),this.zt=new Pe(he)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const s=e.targetId,i=e.bt.count,r=this.ne(s);if(r){const o=r.target;if(Jc(o))if(i===0){const a=new K(o.path);this.Jt(s,a,nt.newNoDocument(a,W.min()))}else Be(i===1);else{const a=this.se(s);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,c)}(n=Oh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,p,m,_,v,I;const N={localCacheCount:u,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(N.bloomFilter={applied:c===0,hashCount:(f=w==null?void 0:w.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(_=(m=(p=w==null?void 0:w.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&_!==void 0?_:0,padding:(I=(v=w==null?void 0:w.bits)===null||v===void 0?void 0:v.padding)!==null&&I!==void 0?I:0}),N}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:i}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=As(r).toUint8Array()}catch(u){if(u instanceof cy)return yi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new xh(l,o,a)}catch(u){return yi(u instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:i!==n-this.re(e.targetId,c)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.At(a)||(this.Jt(e,r,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((r,o)=>{const a=this.ne(o);if(a){if(r.current&&Jc(a.target)){const l=new K(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,nt.newNoDocument(l,e))}r.kt&&(n.set(o,r.Ot()),r.$t())}});let s=le();this.jt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Qt.forEach((r,o)=>o.setReadTime(e));const i=new vl(e,n,this.zt,this.Qt,s);return this.Qt=Jn(),this.jt=hp(),this.zt=new Pe(he),i}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new up,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ct(he),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new up),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function hp(){return new Pe(K.comparator)}function fp(){return new Pe(K.comparator)}const $A=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BA=(()=>({and:"AND",or:"OR"}))();class jA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function su(t,e){return t.useProto3Json||hl(e)?e:{value:e}}function HA(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ri(t){return Be(!!t),W.fromTimestamp(function(e){const n=Xn(e);return new gt(n.seconds,n.nanos)}(t))}function qA(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ry(t){const e=Ne.fromString(t);return Be(Oy(e)),e}function Xl(t,e){const n=Ry(e);if(n.get(1)!==t.databaseId.projectId)throw new H(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Ny(n))}function iu(t,e){return qA(t.databaseId,e)}function zA(t){const e=Ry(t);return e.length===4?Ne.emptyPath():Ny(e)}function dp(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ny(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function WA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Be(c===void 0||typeof c=="string"),ut.fromBase64String(c||"")):(Be(c===void 0||c instanceof Uint8Array),ut.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:Sy(l.code);return new H(c,l.message||"")}(o);n=new Ay(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Xl(t,s.document.name),r=ri(s.document.updateTime),o=s.document.createTime?ri(s.document.createTime):W.min(),a=new ln({mapValue:{fields:s.document.fields}}),l=nt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new qo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Xl(t,s.document),r=s.readTime?ri(s.readTime):W.min(),o=nt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Xl(t,s.document),r=s.removedTargetIds||[];n=new qo([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new MA(i,r),a=s.targetId;n=new by(a,o)}}return n}function GA(t,e){return{documents:[iu(t,e.path)]}}function QA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=iu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=iu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Dy(mn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:qs(u.field),direction:JA(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=su(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function YA(t){let e=zA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Be(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=ky(u);return h instanceof mn&&fy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fr(zs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,hl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new pa(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new pa(f,h)}(n.endAt)),pA(e,i,o,r,a,"F",l,c)}function XA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ky(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=zs(e.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=zs(e.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zs(e.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=zs(e.unaryFilter.field);return Ve.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Ve.create(zs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return mn.create(e.compositeFilter.filters.map(n=>ky(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function JA(t){return $A[t]}function ZA(t){return VA[t]}function eR(t){return BA[t]}function qs(t){return{fieldPath:t.canonicalString()}}function zs(t){return Et.fromServerFormat(t.fieldPath)}function Dy(t){return t instanceof Ve?function(e){if(e.op==="=="){if(Zd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NAN"}};if(Jd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NOT_NAN"}};if(Jd(e.value))return{unaryFilter:{field:qs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(e.field),op:ZA(e.op),value:e.value}}}(t):t instanceof mn?function(e){const n=e.getFilters().map(s=>Dy(s));return n.length===1?n[0]:{compositeFilter:{op:eR(e.op),filters:n}}}(t):Y()}function Oy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vn{constructor(e,n,s,i,r=W.min(),o=W.min(),a=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tR{constructor(e){this.le=e}}function nR(t){const e=YA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
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
 */class sR{constructor(){this.sn=new iR}addToCollectionParentIndex(e,n){return this.sn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Yn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class iR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ct(Ne.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ct(Ne.comparator)).toArray()}}/**
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
 */class Ti{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Ti(0)}static kn(){return new Ti(-1)}}/**
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
 */class rR{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aR{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&pr(s.mutation,i,$n.empty(),gt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const i=ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=er();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Jn();const o=dr(),a=dr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof yl)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),pr(u.mutation,c,u.mutation.getFieldMask(),gt.now())):o.set(c.key,$n.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new oR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=dr();let i=new Pe((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||$n.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=vy();u.forEach(f=>{if(!r.has(f)){const p=Cy(n.get(f),s.get(f));p!==null&&h.set(f,p),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_A(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(ms());let a=-1,l=r;return o.next(c=>b.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:wA(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let i=er();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=er();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(c,u){return new dl(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,nt.newInvalidDocument(c)))});let o=er();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&pr(c.mutation,l,$n.empty(),gt.now()),ml(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class lR{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return b.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:ri(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:nR(s.bundledQuery),readTime:ri(s.readTime)}}(n)),b.resolve()}}/**
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
 */class cR{constructor(){this.overlays=new Pe(K.comparator),this.hs=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ms();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.de(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hs.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=ms(),r=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Pe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ms(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ms(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return b.resolve(a)}de(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(s.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new PA(n,s));let r=this.hs.get(n);r===void 0&&(r=le(),this.hs.set(n,r)),this.hs.set(n,r.add(s.key))}}/**
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
 */class Ph{constructor(){this.ls=new ct(Ke.fs),this.ds=new ct(Ke._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Ke(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new K(new Ne([])),s=new Ke(n,e),i=new Ke(n,e+1),r=[];return this.ds.forEachInRange([s,i],o=>{this.gs(o),r.push(o.key)}),r}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new K(new Ne([])),s=new Ke(n,e),i=new Ke(n,e+1);let r=le();return this.ds.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ke(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return K.comparator(e.key,n.key)||he(e.Es,n.Es)}static _s(e,n){return he(e.Es,n.Es)||K.comparator(e.key,n.key)}}/**
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
 */class uR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ct(Ke.fs)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xA(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ke(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ps(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.vs(o.Es);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(he);return n.forEach(i=>{const r=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.Es)})}),b.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;K.isDocumentKey(r)||(r=r.child(""));const o=new Ke(new K(r),0);let a=new ct(he);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Es)),!0)},o),b.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const i=this.vs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Be(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return b.forEach(n.mutations,i=>{const r=new Ke(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Ke(n,0),i=this.Rs.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hR{constructor(e){this.Ss=e,this.docs=new Pe(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let s=Jn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():nt.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Jn();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Xb(Yb(u),s)<=0||(i.has(u.key)||ml(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}Ds(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fR(this)}getSize(e){return b.resolve(this.size)}}class fR extends rR{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class dR{constructor(e){this.persistence=e,this.Cs=new Mi(n=>Rh(n),Nh),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Ph,this.targetCount=0,this.ks=Ti.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),b.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.$n(n),b.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Ns.containsKey(n))}}/**
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
 */class pR{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Ih(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new dR(this),this.indexManager=new sR,this.remoteDocumentCache=function(s){return new hR(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new tR(n),this.Ls=new lR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new uR(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new gR(this.Os.next());return this.referenceDelegate.qs(),s(i).next(r=>this.referenceDelegate.Us(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ks(e,n){return b.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class gR extends Zb{constructor(e){super(),this.currentSequenceNumber=e}}class Mh{constructor(e){this.persistence=e,this.Gs=new Ph,this.Qs=null}static js(e){return new Mh(e)}get zs(){if(this.Qs)return this.Qs;throw Y()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),b.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.zs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.zs,s=>{const i=K.fromPath(s);return this.Ws(e,i).next(r=>{r||n.removeEntry(i,W.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return b.or([()=>b.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Lh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=i}static Bi(e,n){let s=le(),i=le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Lh(e,n.fromCache,s,i)}}/**
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
 */class mR{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ui(e,n).next(r=>r||this.Ki(e,n,i,s)).next(r=>r||this.Gi(e,n))}Ui(e,n){if(sp(n))return b.resolve(null);let s=Nn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zc(n,null,"F"),s=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Zc(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,s,i){return sp(n)||i.isEqual(W.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(r=>{const o=this.Qi(n,r);return this.ji(n,o,s,i)?this.Gi(e,n):(Gd()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eu(n)),this.zi(e,o,n,Qb(i,-1)))})}Qi(e,n){let s=new ct(_y(e));return n.forEach((i,r)=>{ml(e,r)&&(s=s.add(r))}),s}ji(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Gi(e,n){return Gd()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",eu(n)),this.qi.getDocumentsMatchingQuery(e,n,Yn.min())}zi(e,n,s,i){return this.qi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class _R{constructor(e,n,s,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Pe(he),this.Ji=new Mi(r=>Rh(r),Nh),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function yR(t,e,n,s){return new _R(t,e,n,s)}async function xy(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=le();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function Py(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function vR(t,e){const n=ue(t),s=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(r,u.addedDocuments,h)));let p=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ut.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,p,u)&&a.push(n.Fs.updateTargetData(r,p))});let l=Jn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ER(r,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!s.isEqual(W.min())){const u=n.Fs.getLastRemoteSnapshotVersion(r).next(h=>n.Fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Hi=i,r))}function ER(t,e,n){let s=le(),i=le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Jn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:i}})}function wR(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Fs.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Fs.allocateTargetId(s).next(o=>(i=new Vn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Hi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function ru(t,e,n){const s=ue(t),i=s.Hi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!io(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(i.target)}function pp(t,e,n){const s=ue(t);let i=W.min(),r=le();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ue(a),h=u.Ji.get(c);return h!==void 0?b.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(s,o,Nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?r:le())).next(a=>(TR(s,yA(e),a),{documents:a,sr:r})))}function TR(t,e,n){let s=t.Yi.get(e)||W.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Yi.set(e,s)}class gp{constructor(){this.activeTargetIds=IA()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CR{constructor(){this.Wr=new gp,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new gp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mp{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function Jl(){return Oo===null?Oo=268435456+Math.round(2147483648*Math.random()):Oo++,"0x"+Oo.toString(16)}/**
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
 */const SR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bR{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const et="WebChannelConnection";class AR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,i,r){const o=Jl(),a=this.Io(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.To(l,i,r),this.Eo(e,a,l,s).then(c=>($("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw yi("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}Ao(e,n,s,i,r,o){return this.po(e,n,s,i,r)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Pi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}Io(e,n){const s=SR[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,i){const r=Jl();return new Promise((o,a)=>{const l=new Ub;l.setWithCredentials(!0),l.listenOnce(Mb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ql.NO_ERROR:const u=l.getResponseJson();$(et,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Ql.TIMEOUT:$(et,`RPC '${e}' ${r} timed out`),a(new H(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const h=l.getStatus();if($(et,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(v)>=0?v:D.UNKNOWN}(p.status);a(new H(m,p.message))}else a(new H(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(D.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(et,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);$(et,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=Jl(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xb(),a=Pb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Fb({})),this.To(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=r.join("");$(et,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const p=new bR({io:_=>{f?$(et,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||($(et,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),$(et,`RPC '${e}' stream ${i} sending:`,_),u.send(_))},ro:()=>u.close()}),m=(_,v,I)=>{_.listen(v,N=>{try{I(N)}catch(w){setTimeout(()=>{throw w},0)}})};return m(u,Ro.EventType.OPEN,()=>{f||$(et,`RPC '${e}' stream ${i} transport opened.`)}),m(u,Ro.EventType.CLOSE,()=>{f||(f=!0,$(et,`RPC '${e}' stream ${i} transport closed`),p.fo())}),m(u,Ro.EventType.ERROR,_=>{f||(f=!0,yi(et,`RPC '${e}' stream ${i} transport errored:`,_),p.fo(new H(D.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ro.EventType.MESSAGE,_=>{var v;if(!f){const I=_.data[0];Be(!!I);const N=I,w=N.error||((v=N[0])===null||v===void 0?void 0:v.error);if(w){$(et,`RPC '${e}' stream ${i} received error:`,w);const M=w.status;let X=function(we){const ve=Fe[we];if(ve!==void 0)return Sy(ve)}(M),ie=w.message;X===void 0&&(X=D.INTERNAL,ie="Unknown error status: "+M+" with message "+w.message),f=!0,p.fo(new H(X,ie)),u.close()}else $(et,`RPC '${e}' stream ${i} received:`,I),p._o(I)}}),m(a,Lb.STAT_EVENT,_=>{_.stat===zd.PROXY?$(et,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===zd.NOPROXY&&$(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Zl(){return typeof document<"u"?document:null}/**
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
 */function My(t){return new jA(t,!0)}/**
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
 */class Ly{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=i,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class RR{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Mo=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Ly(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.$o===n&&this.Xo(s,i)},s=>{e(()=>{const i=new H(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(i)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{s(()=>this.Zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NR extends RR{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=WA(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?W.min():r.readTime?ri(r.readTime):W.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=dp(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Jc(a)?{documents:GA(i,a)}:{query:QA(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=KA(i,r.resumeToken);const l=su(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(W.min())>0){o.readTime=HA(i,r.snapshotVersion.toTimestamp());const l=su(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=XA(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=dp(this.serializer),n.removeTarget=e,this.zo(n)}}/**
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
 */class kR extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new H(D.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.po(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(D.UNKNOWN,i.toString())})}Ao(e,n,s,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(D.UNKNOWN,r.toString())})}terminate(){this.hu=!0}}class DR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Rn(n),this.wu=!1):$("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class OR{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=r,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{ao(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.Au.add(4),await oo(l),l.Pu.set("Unknown"),l.Au.delete(4),await El(l)}(this))})}),this.Pu=new DR(s,i)}}async function El(t){if(ao(t))for(const e of t.Ru)await e(!0)}async function oo(t){for(const e of t.Ru)await e(!1)}function Fy(t,e){const n=ue(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),$h(n)?Uh(n):Li(n).Uo()&&Fh(n,e))}function Uy(t,e){const n=ue(t),s=Li(n);n.Eu.delete(e),s.Uo()&&$y(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():ao(n)&&n.Pu.set("Unknown"))}function Fh(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).nu(e)}function $y(t,e){t.bu.Lt(e),Li(t).su(e)}function Uh(t){t.bu=new UA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.Pu.mu()}function $h(t){return ao(t)&&!Li(t).qo()&&t.Eu.size>0}function ao(t){return ue(t).Au.size===0}function Vy(t){t.bu=void 0}async function xR(t){t.Eu.forEach((e,n)=>{Fh(t,e)})}async function PR(t,e){Vy(t),$h(t)?(t.Pu.pu(e),Uh(t)):t.Pu.set("Unknown")}async function MR(t,e,n){if(t.Pu.set("Online"),e instanceof Ay&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _p(t,s)}else if(e instanceof qo?t.bu.Wt(e):e instanceof by?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(W.min()))try{const s=await Py(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.bu.ue(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(l);c&&i.Eu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(ut.EMPTY_BYTE_STRING,c.snapshotVersion)),$y(i,a);const u=new Vn(c.target,a,l,c.sequenceNumber);Fh(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await _p(t,s)}}async function _p(t,e,n){if(!io(e))throw e;t.Au.add(1),await oo(t),t.Pu.set("Offline"),n||(n=()=>Py(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await El(t)})}async function yp(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ao(n);n.Au.add(3),await oo(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await El(n)}async function LR(t,e){const n=ue(t);e?(n.Au.delete(2),await El(n)):e||(n.Au.add(2),await oo(n),n.Pu.set("Unknown"))}function Li(t){return t.Vu||(t.Vu=function(e,n,s){const i=ue(e);return i.lu(),new NR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{oo:xR.bind(null,t),co:PR.bind(null,t),eu:MR.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),$h(t)?Uh(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Vy(t))})),t.Vu}/**
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
 */class Vh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Vh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function By(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),io(t))return new H(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class oi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=er(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class vp{constructor(){this.Du=new Pe(K.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Y():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ci{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ci(e,n,oi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class FR{constructor(){this.xu=void 0,this.listeners=[]}}class UR{constructor(){this.queries=new Mi(e=>my(e),gl),this.onlineState="Unknown",this.Nu=new Set}}async function Bh(t,e){const n=ue(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new FR),i)try{r.xu=await n.onListen(s)}catch(o){const a=By(o,`Initialization of query '${eu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.ku(n.onlineState),r.xu&&e.Mu(r.xu)&&Hh(n)}async function jh(t,e){const n=ue(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function $R(t,e){const n=ue(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Mu(i)&&(s=!0);o.xu=i}}s&&Hh(n)}function VR(t,e,n){const s=ue(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Hh(t){t.Nu.forEach(e=>{e.next()})}class Kh{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ci(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class jy{constructor(e){this.key=e}}class Hy{constructor(e){this.key=e}}class BR{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=le(),this.mutatedKeys=le(),this.Zu=_y(e),this.tc=new oi(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new vp,i=n?n.tc:this.tc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),p=ml(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),v=!0):this.ic(f,p)||(s.track({type:2,doc:p}),v=!0,(l&&this.Zu(p,l)>0||c&&this.Zu(p,c)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:r}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const r=e.sc.Cu();r.sort((c,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(h)-p(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,r.length!==0||l?{snapshot:new Ci(this.query,e.tc,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new vp,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=le(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new Hy(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new jy(s))}),n}ac(e){this.Ju=e.sr,this.Xu=le();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Ci.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class jR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class HR{constructor(e){this.key=e,this.lc=!1}}class KR{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Mi(a=>my(a),gl),this._c=new Map,this.wc=new Set,this.mc=new Pe(K.comparator),this.gc=new Map,this.yc=new Ph,this.Ic={},this.Tc=new Map,this.Ec=Ti.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function qR(t,e){const n=JR(t);let s,i;const r=n.dc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.hc();else{const o=await wR(n.localStore,Nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await zR(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Fy(n.remoteStore,o)}return i}async function zR(t,e,n,s,i){t.Rc=(h,f,p)=>async function(m,_,v,I){let N=_.view.nc(v);N.ji&&(N=await pp(m.localStore,_.query,!1).then(({documents:X})=>_.view.nc(X,N)));const w=I&&I.targetChanges.get(_.targetId),M=_.view.applyChanges(N,m.isPrimaryClient,w);return wp(m,_.targetId,M.uc),M.snapshot}(t,h,f,p);const r=await pp(t.localStore,e,!0),o=new BR(e,r.sr),a=o.nc(r.documents),l=ro.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);wp(t,n,c.uc);const u=new jR(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function WR(t,e){const n=ue(t),s=n.dc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!gl(r,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ru(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Uy(n.remoteStore,s.targetId),ou(n,s.targetId)}).catch(Ch)):(ou(n,s.targetId),await ru(n.localStore,s.targetId,!0))}async function Ky(t,e){const n=ue(t);try{const s=await vR(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.gc.get(r);o&&(Be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?Be(o.lc):i.removedDocuments.size>0&&(Be(o.lc),o.lc=!1))}),await zy(n,s,e)}catch(s){await Ch(s)}}function Ep(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.dc.forEach((r,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ue(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&Hh(a)}(s.eventManager,e),i.length&&s.fc.eu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GR(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.gc.get(e),r=i&&i.key;if(r){let o=new Pe(K.comparator);o=o.insert(r,nt.newNoDocument(r,W.min()));const a=le().add(r),l=new vl(W.min(),new Map,new Pe(he),o,a);await Ky(s,l),s.mc=s.mc.remove(r),s.gc.delete(e),qh(s)}else await ru(s.localStore,e,!1).then(()=>ou(s,e,n)).catch(Ch)}function ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||qy(t,s)})}function qy(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Uy(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),qh(t))}function wp(t,e,n){for(const s of n)s instanceof jy?(t.yc.addReference(s.key,e),QR(t,s)):s instanceof Hy?($("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||qy(t,s.key)):Y()}function QR(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||($("SyncEngine","New document in limbo: "+n),t.wc.add(s),qh(t))}function qh(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new K(Ne.fromString(e)),s=t.Ec.next();t.gc.set(s,new HR(n)),t.mc=t.mc.insert(n,s),Fy(t.remoteStore,new Vn(Nn(pl(n.path)),s,"TargetPurposeLimboResolution",Ih.ct))}}async function zy(t,e,n){const s=ue(t),i=[],r=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Lh.Bi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.fc.eu(i),await async function(a,l){const c=ue(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(l,h=>b.forEach(h.$i,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>b.forEach(h.Fi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!io(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Hi.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);c.Hi=c.Hi.insert(h,m)}}}(s.localStore,r))}async function YR(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await xy(n.localStore,e);n.currentUser=e,function(i,r){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new H(D.CANCELLED,r))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zy(n,s.tr)}}function XR(t,e){const n=ue(t),s=n.gc.get(e);if(s&&s.lc)return le().add(s.key);{let i=le();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function JR(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GR.bind(null,e),e.fc.eu=$R.bind(null,e.eventManager),e.fc.vc=VR.bind(null,e.eventManager),e}class Tp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=My(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yR(this.persistence,new mR,e.initialUser,this.serializer)}createPersistence(e){return new pR(Mh.js,this.serializer)}createSharedClientState(e){return new CR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ep(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YR.bind(null,this.syncEngine),await LR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new UR}createDatastore(e){const n=My(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new AR(i));var i;return function(r,o,a,l){return new kR(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ep(this.syncEngine,a,0),o=mp.D()?new mp:new IR,new OR(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new KR(s,i,r,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);$("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await oo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eN{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=ly.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=By(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ec(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await xy(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nN(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>yp(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>yp(e.remoteStore,r)),t._onlineComponents=e}function tN(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tN(n))throw n;yi("Error using user provided cache. Falling back to memory cache: "+n),await ec(t,new Tp)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await ec(t,new Tp);return t._offlineComponents}async function sN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Cp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Cp(t,new ZR))),t._onlineComponents}async function _a(t){const e=await sN(t),n=e.eventManager;return n.onListen=qR.bind(null,e.syncEngine),n.onUnlisten=WR.bind(null,e.syncEngine),n}function iN(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new zh({next:h=>{r.enqueueAndForget(()=>jh(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new H(D.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new H(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Kh(pl(o.path),c,{includeMetadataChanges:!0,Uu:!0});return Bh(i,u)}(await _a(t),t.asyncQueue,e,n,s)),s.promise}function rN(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new zh({next:h=>{r.enqueueAndForget(()=>jh(i,u)),h.fromCache&&a.source==="server"?l.reject(new H(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Kh(o,c,{includeMetadataChanges:!0,Uu:!0});return Bh(i,u)}(await _a(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const Ip=new Map;/**
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
 */function Wy(t,e,n){if(!n)throw new H(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oN(t,e,n,s){if(e===!0&&s===!0)throw new H(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sp(t){if(!K.isDocumentKey(t))throw new H(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bp(t){if(K.isDocumentKey(t))throw new H(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function aN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aN(t);throw new H(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ap{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class wl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ap({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ap(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vb;switch(n.type){case"firstParty":return new Kb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ip.get(e);n&&($("ComponentProvider","Removing Datastore"),Ip.delete(e),n.terminate())}(this),Promise.resolve()}}function lN(t,e,n,s={}){var i;const r=(t=zn(t,wl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&yi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=tt.MOCK_USER;else{o=pI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new H(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(l)}t._authCredentials=new Bb(new ay(o,a))}}/**
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
 */class Gt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class lo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class Wn extends lo{constructor(e,n,s){super(e,n,pl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new K(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function Wh(t,e,...n){if(t=es(t),Wy("collection","path",e),t instanceof wl){const s=Ne.fromString(e,...n);return bp(s),new Wn(t,null,s)}{if(!(t instanceof Gt||t instanceof Wn))throw new H(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return bp(s),new Wn(t.firestore,null,s)}}function cN(t,e,...n){if(t=es(t),arguments.length===1&&(e=ly.A()),Wy("doc","path",e),t instanceof wl){const s=Ne.fromString(e,...n);return Sp(s),new Gt(t,null,new K(s))}{if(!(t instanceof Gt||t instanceof Wn))throw new H(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return Sp(s),new Gt(t.firestore,t instanceof Wn?t.converter:null,new K(s))}}/**
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
 */class uN{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Ly(this,"async_queue_retry"),this.Yc=()=>{const n=Zl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Zl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new qn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!io(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Rn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Vh.createAndSchedule(this,e,n,s,r=>this.ea(r));return this.jc.push(i),i}Xc(){this.zc&&Y()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Rp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Vr extends wl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new uN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gy(this),this._firestoreClient.terminate()}}function hN(t,e){const n=typeof t=="object"?t:e_(),s=typeof t=="string"?t:e||"(default)",i=TS(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=hI("firestore");r&&lN(i,...r)}return i}function Gh(t){return t._firestoreClient||Gy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gy(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new nA(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new eN(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ya{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ya(ut.fromBase64String(e))}catch(n){throw new H(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ya(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}const fN=new RegExp("[~\\*/\\[\\]]");function dN(t,e,n){if(e.search(fN)>=0)throw Np(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qy(...e.split("."))._internalPath}catch{throw Np(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Np(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new H(D.INVALID_ARGUMENT,a+t+l)}/**
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
 */class Xy{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pN extends Xy{data(){return super.data()}}function Jy(t,e){return typeof e=="string"?dN(t,e):e instanceof Qy?e._internalPath:e._delegate._internalPath}/**
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
 */function Zy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gN{convertValue(e,n="none"){switch(Rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return fl(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Yy(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ne.fromString(e);Be(Oy(s));const i=new Ur(s.get(1),s.get(3)),r=new K(s.popFirst(5));return i.isEqual(n)||Rn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */class nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ev extends Xy{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Jy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zo extends ev{data(e={}){return super.data(e)}}class tv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new nr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new zo(this._firestore,this._userDataWriter,s.key,s,new nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new zo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:mN(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function nv(t){t=zn(t,Gt);const e=zn(t.firestore,Vr);return iN(Gh(e),t._key).then(n=>sv(e,t,n))}class Qh extends gN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ya(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function _N(t){t=zn(t,lo);const e=zn(t.firestore,Vr),n=Gh(e),s=new Qh(e);return Zy(t._query),rN(n,t._query).then(i=>new tv(e,s,t,i))}function Yh(t,...e){var n,s,i;t=es(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rp(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Rp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Gt)c=zn(t.firestore,Vr),u=pl(t._key.path),l={next:h=>{e[o]&&e[o](sv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zn(t,lo);c=zn(h.firestore,Vr),u=h._query;const f=new Qh(c);l={next:p=>{e[o]&&e[o](new tv(c,f,h,p))},error:e[o+1],complete:e[o+2]},Zy(t._query)}return function(h,f,p,m){const _=new zh(m),v=new Kh(f,_,p);return h.asyncQueue.enqueueAndForget(async()=>Bh(await _a(h),v)),()=>{_.Sc(),h.asyncQueue.enqueueAndForget(async()=>jh(await _a(h),v))}}(Gh(c),u,a,l)}function sv(t,e,n){const s=n.docs.get(e._key),i=new Qh(t);return new ev(t,i,e._key,s,new nr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Pi=n})(Di),pn(new Xt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Vr(new jb(n.getProvider("auth-internal")),new zb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rt(Wd,"3.11.0",t),Rt(Wd,"3.11.0","esm2017")})();const yN={apiKey:"AIzaSyBdrW-op61lrviPqesC6ez5K5aSxHf_Y14",authDomain:"e-culture-71815.firebaseapp.com",projectId:"e-culture-71815",storageBucket:"e-culture-71815.appspot.com",messagingSenderId:"52761179686",appId:"1:52761179686:web:19db1bff3af727288658e7"},vN=Zm(yN),Xh=hN(),EN=Wh(Xh,"games");Wh(Xh,"players");Wh(Xh,"quizzes");const wN=Zt({props:{players:Object}}),TN={id:"player-list"};function CN(t,e,n,s,i,r){return pt(),Ct("div",TN,[$e("ul",null,[(pt(!0),Ct(Ot,null,o0(t.players,o=>(pt(),Ct("li",{key:o.id},Pa(o.pseudo),1))),128))])])}const IN=en(wN,[["render",CN]]),SN=Zt({data(){return{gameId:this.$route.params.id,game:Object}},components:{HeaderDefault:Wr,PlayersList:IN},watch:{gameId:{immediate:!0,handler(t){this.$firestoreBind("game",cN(EN,t))}}}});const iv=t=>(qr("data-v-877d81f8"),t=t(),zr(),t),bN={id:"game"},AN={id:"game-information"},RN=iv(()=>$e("p",null,"Waiting for the game to start...",-1)),NN=iv(()=>$e("p",null,"Players in this game:",-1));function kN(t,e,n,s,i,r){const o=Tt("HeaderDefault"),a=Tt("PlayersList");return pt(),Ct("div",bN,[Ee(o),$e("div",AN,[$e("h2",null,"Game "+Pa(t.gameId),1),RN,NN,Ee(a,{players:t.game.players},null,8,["players"])])])}const DN=en(SN,[["render",kN],["__scopeId","data-v-877d81f8"]]),ON=[{path:"/",name:"Home",component:AC},{path:"/create-game",name:"Create game",component:DC},{path:"/join-game",name:"Join game",component:XC},{path:"/about",name:"About",component:tI},{path:"/game/:id",name:"Game",component:DN}],Jh=cC({history:ST("/e-culture/"),routes:ON});function rv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ov(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xN=ov,av=new ki("auth","Firebase",ov());/**
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
 */const va=new Gr("@firebase/auth");function PN(t,...e){va.logLevel<=ae.WARN&&va.warn(`Auth (${Di}): ${t}`,...e)}function Wo(t,...e){va.logLevel<=ae.ERROR&&va.error(`Auth (${Di}): ${t}`,...e)}/**
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
 */function kp(t,...e){throw ef(t,...e)}function Zh(t,...e){return ef(t,...e)}function MN(t,e,n){const s=Object.assign(Object.assign({},xN()),{[e]:n});return new ki("auth","Firebase",s).create(e,{appName:t.name})}function ef(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return av.create(t,...e)}function fe(t,e,...n){if(!t)throw ef(e,...n)}function gr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wo(e),new Error(e)}function Ea(t,e){t||gr(e)}function LN(){return Dp()==="http:"||Dp()==="https:"}function Dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LN()||gI()||"connection"in navigator)?navigator.onLine:!0}function UN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ea(n>e,"Short delay should be less than long delay!"),this.isMobile=Xu()||Wm()}get(){return FN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $N(t,e){Ea(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BN=new co(3e4,6e4);function jN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tf(t,e,n,s,i={}){return cv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ju(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lv.fetch()(uv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function cv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},VN),e);try{const i=new HN(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw MN(t,u,c);kp(t,u)}}catch(i){if(i instanceof Dn)throw i;kp(t,"network-request-failed",{message:String(i)})}}function uv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?$N(t.config,i):`${t.config.apiScheme}://${i}`}class HN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zh(this.auth,"network-request-failed")),BN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Zh(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function KN(t,e){return tf(t,"POST","/v1/accounts:delete",e)}async function qN(t,e){return tf(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zN(t,e=!1){const n=es(t),s=await n.getIdToken(e),i=hv(s);fe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:mr(tc(i.auth_time)),issuedAtTime:mr(tc(i.iat)),expirationTime:mr(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function hv(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ta(n);return i?JSON.parse(i):(Wo("Failed to decode base64 JWT payload"),null)}catch(i){return Wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function WN(t){const e=hv(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function au(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&GN(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function GN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await au(t,qN(n,{idToken:s}));fe(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?JN(r.providerUserInfo):[],a=XN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function YN(t){const e=es(t);await wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XN(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function JN(t){return t.map(e=>{var{providerId:n}=e,s=rv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ZN(t,e){const n=await cv(t,{},async()=>{const s=Ju({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=uv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return fe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await ZN(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Br;return s&&(fe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(fe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(fe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
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
 */function Ln(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=rv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await au(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zN(this,e)}reload(){return YN(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await au(this,KN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:M,isAnonymous:X,providerData:ie,stsTokenManager:we}=n;fe(w&&we,e,"internal-error");const ve=Br.fromJSON(this.name,we);fe(typeof w=="string",e,"internal-error"),Ln(h,e.name),Ln(f,e.name),fe(typeof M=="boolean",e,"internal-error"),fe(typeof X=="boolean",e,"internal-error"),Ln(p,e.name),Ln(m,e.name),Ln(_,e.name),Ln(v,e.name),Ln(I,e.name),Ln(N,e.name);const Dt=new ai({uid:w,auth:e,email:f,emailVerified:M,displayName:h,isAnonymous:X,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:ve,createdAt:I,lastLoginAt:N});return ie&&Array.isArray(ie)&&(Dt.providerData=ie.map(_t=>Object.assign({},_t))),v&&(Dt._redirectEventId=v),Dt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Br;i.updateFromServerResponse(n);const r=new ai({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await wa(r),r}}/**
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
 */const Op=new Map;function _s(t){Ea(t instanceof Function,"Expected a class definition");let e=Op.get(t);return e?(Ea(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Op.set(t,e),e)}/**
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
 */class dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dv.type="NONE";const xp=dv;/**
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
 */function nc(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,r),this.fullPersistenceKey=nc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new li(_s(xp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||_s(xp);const o=nc(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ai._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new li(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new li(r,e,s))}}/**
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
 */function Pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r1(e))return"Blackberry";if(o1(e))return"Webos";if(t1(e))return"Safari";if((e.includes("chrome/")||n1(e))&&!e.includes("edge/"))return"Chrome";if(i1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function e1(t=dn()){return/firefox\//i.test(t)}function t1(t=dn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n1(t=dn()){return/crios\//i.test(t)}function s1(t=dn()){return/iemobile/i.test(t)}function i1(t=dn()){return/android/i.test(t)}function r1(t=dn()){return/blackberry/i.test(t)}function o1(t=dn()){return/webos/i.test(t)}/**
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
 */function pv(t,e=[]){let n;switch(t){case"Browser":n=Pp(dn());break;case"Worker":n=`${Pp(dn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${s}`}async function gv(t,e){return tf(t,"GET","/v2/recaptchaConfig",jN(t,e))}function Mp(t){return t!==void 0&&t.enterprise!==void 0}class mv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function a1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function l1(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Zh("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",a1().appendChild(s)})}const c1="https://www.google.com/recaptcha/enterprise.js?render=",u1="recaptcha-enterprise",h1="NO_RECAPTCHA";class f1{constructor(e){this.type=u1,this.auth=_v(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{gv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new mv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Mp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(h1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Mp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}l1(c1+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class p1{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_s(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?es(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}async initializeRecaptchaConfig(){const e=await gv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new f1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_s(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[_s(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return fe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _v(t){return es(t)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=CI(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function g1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_s);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new co(3e4,6e4);/**
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
 */new co(2e3,1e4);/**
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
 */new co(3e4,6e4);/**
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
 */new co(5e3,15e3);var Fp="@firebase/auth",Up="0.23.1";/**
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
 */class m1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function y1(t){pn(new Xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),fe(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pv(t)},c=new p1(s,i,r,l);return g1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),pn(new Xt("auth-internal",e=>{const n=_v(e.getProvider("auth").getImmediate());return(s=>new m1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Fp,Up,_1(t)),Rt(Fp,Up,"esm2017")}/**
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
 */const v1=5*60;dI("authIdTokenMaxAge");y1("Browser");/**
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
 */const E1=new Map,w1={activated:!1,tokenObservers:[]};function _n(t){return E1.get(t)||Object.assign({},w1)}const $p={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class T1{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Rr,await C1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Rr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function C1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const I1={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ta=new ki("appCheck","AppCheck",I1);function S1(t){if(!_n(t).activated)throw Ta.create("use-before-activation",{appName:t.name})}/**
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
 */const b1="firebase-app-check-database",A1=1,lu="firebase-app-check-store";let Po=null;function R1(){return Po||(Po=new Promise((t,e)=>{try{const n=indexedDB.open(b1,A1);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Ta.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(lu,{keyPath:"compositeKey"})}}}catch(n){e(Ta.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Po)}function N1(t,e){return k1(D1(t),e)}async function k1(t,e){const s=(await R1()).transaction(lu,"readwrite"),r=s.objectStore(lu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Ta.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function D1(t){return`${t.options.appId}-${t.name}`}/**
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
 */const cu=new Gr("@firebase/app-check");function Vp(t,e){return Qm()?N1(t,e).catch(n=>{cu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const O1={error:"UNKNOWN_ERROR"};function x1(t){return Ga.encodeString(JSON.stringify(t),!1)}async function uu(t,e=!1){const n=t.app;S1(n);const s=_n(n);let i=s.token,r;if(i&&!sr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(sr(l)?i=l:await Vp(n,void 0))}if(!e&&i&&sr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await _n(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?cu.warn(l.message):cu.error(l),r=l}let a;return i?r?sr(i)?a={token:i.token,internalError:r}:a=jp(r):(a={token:i.token},s.token=i,await Vp(n,i)):a=jp(r),o&&L1(n,a),a}function P1(t,e,n,s){const{app:i}=t,r=_n(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&sr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Bp(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Bp(t))}function yv(t,e){const n=_n(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Bp(t){const{app:e}=t,n=_n(e);let s=n.tokenRefresher;s||(s=M1(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function M1(t){const{app:e}=t;return new T1(async()=>{const n=_n(e);let s;if(n.token?s=await uu(t,!0):s=await uu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=_n(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},$p.RETRIAL_MIN_WAIT,$p.RETRIAL_MAX_WAIT)}function L1(t,e){const n=_n(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function sr(t){return t.expireTimeMillis-Date.now()>0}function jp(t){return{token:x1(O1),error:t}}/**
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
 */class F1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=_n(this.app);for(const n of e)yv(this.app,n.next);return Promise.resolve()}}function U1(t,e){return new F1(t,e)}function $1(t){return{getToken:e=>uu(t,e),addTokenListener:e=>P1(t,"INTERNAL",e),removeTokenListener:e=>yv(t.app,e)}}const V1="@firebase/app-check",B1="0.7.0",j1="app-check",Hp="app-check-internal";function H1(){pn(new Xt(j1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return U1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Hp).initialize()})),pn(new Xt(Hp,t=>{const e=t.getProvider("app-check").getImmediate();return $1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Rt(V1,B1)}H1();const vv=Symbol("firebaseApp");function nf(t){return Wu()&&Wt(vv,null)||e_(t)}const un=()=>{};function sf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function K1(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ps(t){return!!t&&typeof t=="object"}const q1=Object.prototype;function z1(t){return Ps(t)&&Object.getPrototypeOf(t)===q1}function rf(t){return Ps(t)&&t.type==="document"}function Ev(t){return Ps(t)&&t.type==="collection"}function W1(t){return rf(t)||Ev(t)}function G1(t){return Ps(t)&&t.type==="query"}function Q1(t){return Ps(t)&&"ref"in t}function Y1(t){return Ps(t)&&typeof t.bucket=="string"}function X1(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function J1(){return!!(Wu()&&Wt(Nm,null))}const Mo=new WeakMap;function Z1(t,e){if(!Mo.has(t)){const n=Lg(!0);Mo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Mo.delete(t)}}return Mo.get(t)}const Kp="@firebase/database",qp="0.14.4";/**
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
 */let wv="";function ek(t){wv=t}/**
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
 */class tk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class nk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Tv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tk(e)}}catch{}return new nk},ys=Tv("localStorage"),hu=Tv("sessionStorage");/**
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
 */const ci=new Gr("@firebase/database"),sk=function(){let t=1;return function(){return t++}}(),Cv=function(t){const e=AI(t),n=new TI;n.update(e);const s=n.digest();return Ga.encodeByteArray(s)},uo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=uo.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let Is=null,zp=!0;const ik=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ci.logLevel=ae.VERBOSE,Is=ci.log.bind(ci),e&&hu.set("logging_enabled",!0)):typeof t=="function"?Is=t:(Is=null,hu.remove("logging_enabled"))},st=function(...t){if(zp===!0&&(zp=!1,Is===null&&hu.get("logging_enabled")===!0&&ik(!0)),Is){const e=uo.apply(null,t);Is(e)}},ho=function(t){return function(...e){st(t,...e)}},fu=function(...t){const e="FIREBASE INTERNAL ERROR: "+uo(...t);ci.error(e)},Ns=function(...t){const e=`FIREBASE FATAL ERROR: ${uo(...t)}`;throw ci.error(e),new Error(e)},Nt=function(...t){const e="FIREBASE WARNING: "+uo(...t);ci.warn(e)},rk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ok=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ii="[MIN_NAME]",ks="[MAX_NAME]",Fi=function(t,e){if(t===e)return 0;if(t===Ii||e===ks)return-1;if(e===Ii||t===ks)return 1;{const n=Wp(t),s=Wp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ak=function(t,e){return t===e?0:t<e?-1:1},zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},of=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=of(t[e[s]]);return n+="}",n},Sv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bv=function(t){O(!Iv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},lk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ck=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},uk=new RegExp("^-?(0*)\\d{1,10}$"),hk=-2147483648,fk=2147483647,Wp=function(t){if(uk.test(t)){const e=Number(t);if(e>=hk&&e<=fk)return e}return null},fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},dk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_r=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class du{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}du.OWNER="owner";/**
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
 */const af="5",Av="v",Rv="s",Nv="r",kv="f",Dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ov="ls",xv="p",pu="ac",Pv="websocket",Mv="long_polling";/**
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
 */class mk{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ys.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ys.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _k(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lv(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Pv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_k(t)&&(n.ns=t.namespace);const i=[];return Lt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class yk{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iI(this.counters_)}}/**
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
 */const sc={},ic={};function lf(t){const e=t.toString();return sc[e]||(sc[e]=new yk),sc[e]}function vk(t,e){const n=t.toString();return ic[n]||(ic[n]=e()),ic[n]}/**
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
 */class Ek{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gp="start",wk="close",Tk="pLPCommand",Ck="pRTLPCB",Fv="id",Uv="pw",$v="ser",Ik="cb",Sk="seg",bk="ts",Ak="d",Rk="dframe",Vv=1870,Bv=30,Nk=Vv-Bv,kk=25e3,Dk=3e4;class Gs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ho(e),this.stats_=lf(n),this.urlFn=l=>(this.appCheckToken&&(l[pu]=this.appCheckToken),Lv(n,Mv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ek(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dk)),ok(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gp)this.id=a,this.password=l;else if(o===wk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gp]="t",s[$v]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ik]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Av]=af,this.transportSessionId&&(s[Rv]=this.transportSessionId),this.lastSessionId&&(s[Ov]=this.lastSessionId),this.applicationId&&(s[xv]=this.applicationId),this.appCheckToken&&(s[pu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(s[Nv]=kv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lk()&&!ck()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qm(n),i=Sv(s,Nk);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Rk]="t",s[Fv]=e,s[Uv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sk(),window[Tk+this.uniqueCallbackIdentifier]=e,window[Ck+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){st("frame writing exception"),a.stack&&st(a.stack),st(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[$v]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bv+s.length<=Vv;){const o=this.pendingSegs.shift();s=s+"&"+Sk+i+"="+o.seg+"&"+bk+i+"="+o.ts+"&"+Ak+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(kk)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ok=16384,xk=45e3;let Ca=null;typeof MozWebSocket<"u"?Ca=MozWebSocket:typeof WebSocket<"u"&&(Ca=WebSocket);class Bt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ho(this.connId),this.stats_=lf(n),this.connURL=Bt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Av]=af,typeof location<"u"&&location.hostname&&Dv.test(location.hostname)&&(o[Nv]=kv),n&&(o[Rv]=n),s&&(o[Ov]=s),i&&(o[pu]=i),r&&(o[xv]=r),Lv(e,Pv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ys.set("previous_websocket_failure",!0);try{let s;Gm(),this.mySock=new Ca(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ca!==null&&!Bt.forceDisallow_}static previouslyFailed(){return ys.isInMemoryStorage||ys.get("previous_websocket_failure")===!0}markConnectionHealthy(){ys.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Nr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Sv(n,Ok);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bt.responsesRequiredToBeHealthy=2;Bt.healthyTimeout=3e4;/**
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
 */class jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gs,Bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Bt&&Bt.isAvailable();let s=n&&!Bt.previouslyFailed();if(e.webSocketOnly&&(n||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Bt];else{const i=this.transports_=[];for(const r of jr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jr.globalTransportInitialized_=!1;/**
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
 */const Pk=6e4,Mk=5e3,Lk=10*1024,Fk=100*1024,rc="t",Qp="d",Uk="s",Yp="r",$k="e",Xp="o",Jp="a",Zp="n",eg="p",Vk="h";class Bk{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ho("c:"+this.id+":"),this.transportManager_=new jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_r(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rc in e){const n=e[rc];n===Jp?this.upgradeIfSecondaryHealthy_():n===Yp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zi("t",e),s=zi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zi("t",e),s=zi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zi(rc,e);if(Qp in e){const s=e[Qp];if(n===Vk){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Uk?this.onConnectionShutdown_(s):n===Yp?this.onReset_(s):n===$k?fu("Server Error: "+s):n===Xp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==s&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),_r(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_r(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ys.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Hv{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ia extends Hv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ia}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const tg=32,ng=768;class Ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Ae("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ae(t.pieces_,e)}function Kv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ae(e,0)}function ze(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ae(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Mt(t,e){const n=ne(t),s=ne(e);if(n===null)return e;if(n===s)return Mt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wv(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ht(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Hk{constructor(e,n){this.errorPrefix_=n,this.parts_=qv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qa(this.parts_[s]);Gv(this)}}function Kk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qa(e),Gv(t)}function qk(t){const e=t.parts_.pop();t.byteLength_-=Qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gv(t){if(t.byteLength_>ng)throw new Error(t.errorPrefix_+"has a key path longer than "+ng+" bytes ("+t.byteLength_+").");if(t.parts_.length>tg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tg+") or object contains a cycle "+cs(t))}function cs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class uf extends Hv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new uf}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wi=1e3,zk=60*5*1e3,sg=30*1e3,Wk=1.3,Gk=3e4,Qk="server_kill",ig=3;class Sn extends jv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Sn.nextPersistentConnectionId_++,this.log_=ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=zk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Gm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ia.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Je(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Rr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Sn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const s=mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=EI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fu("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gk&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Bk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Nt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Nt(h),l())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>of(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ae(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ig&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ig&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wv.replace(/\./g,"-")]=1,Xu()?e["framework.cordova"]=1:Wm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ia.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
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
 */class Tl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new se(Ii,e),i=new se(Ii,n);return this.compare(s,i)!==0}minPost(){return se.MIN}}/**
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
 */let Lo;class Qv extends Tl{static get __EMPTY_NODE(){return Lo}static set __EMPTY_NODE(e){Lo=e}compare(e,n){return Fi(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(ks,Lo)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Lo)}toString(){return".key"}}const ui=new Qv;/**
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
 */class Fo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??qe.RED,this.left=i??wt.EMPTY_NODE,this.right=r??wt.EMPTY_NODE}copy(e,n,s,i,r){return new qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class Yk{copy(e,n,s,i,r){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,n=wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fo(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new Yk;/**
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
 */function Xk(t,e){return Fi(t.name,e.name)}function hf(t,e){return Fi(t,e)}/**
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
 */let gu;function Jk(t){gu=t}const Yv=function(t){return typeof t=="number"?"number:"+bv(t):"string:"+t},Xv=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else O(t===gu||t.isEmpty(),"priority of unexpected type.");O(t===gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let rg;class He{constructor(e,n=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xv(this.priorityNode_)}static set __childrenNodeConstructor(e){rg=e}static get __childrenNodeConstructor(){return rg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:ne(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ne(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bv(this.value_):e+=this.value_,this.lazyHash_=Cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=He.VALUE_TYPE_ORDER.indexOf(n),r=He.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Jv,Zv;function Zk(t){Jv=t}function eD(t){Zv=t}class tD extends Tl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Fi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(ks,new He("[PRIORITY-POST]",Zv))}makePost(e,n){const s=Jv(e);return new se(n,new He("[PRIORITY-POST]",s))}toString(){return".priority"}}const ot=new tD;/**
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
 */const nD=Math.log(2);class sD{constructor(e){const n=r=>parseInt(Math.log(r)/nD,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sa=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new qe(f,h.node,qe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),_=i(p+1,c);return h=t[p],f=n?n(h):h,new qe(f,h.node,qe.BLACK,m,_)}},r=function(l){let c=null,u=null,h=t.length;const f=function(m,_){const v=h-m,I=h;h-=m;const N=i(v+1,I),w=t[v],M=n?n(w):w;p(new qe(M,w.node,_,null,N))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));_?f(v,qe.BLACK):(f(v,qe.BLACK),f(v,qe.RED))}return u},o=new sD(t.length),a=r(o);return new wt(s||e,a)};/**
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
 */let oc;const js={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(js&&ot,"ChildrenNode.ts has not been loaded"),oc=oc||new In({".priority":js},{".priority":ot}),oc}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wt?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){O(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(se.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Sa(s,e.getCompare()):a=js;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new In(u,c)}addToIndexes(e,n){const s=na(this.indexes_,(i,r)=>{const o=mi(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===js)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(se.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sa(a,o.getCompare())}else return js;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new In(s,this.indexSet_)}removeFromIndexes(e,n){const s=na(this.indexes_,i=>{if(i===js)return i;{const r=n.get(e.name);return r?i.remove(new se(e.name,r)):i}});return new In(s,this.indexSet_)}}/**
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
 */let Gi;class de{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xv(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gi||(Gi=new de(new wt(hf),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gi}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gi:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new se(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Gi:this.priorityNode_;return new de(i,o,r)}}updateChild(e,n){const s=ne(e);if(s===null)return n;{O(ne(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ot,(o,a)=>{n[o]=a.val(e),s++,r&&de.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yv(this.getPriority().val())+":"),this.forEachChild(ot,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Cv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new se(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ot),i=n.getIterator(ot);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iD extends de{constructor(){super(new wt(hf),de.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const po=new iD;Object.defineProperties(se,{MIN:{value:new se(Ii,de.EMPTY_NODE)},MAX:{value:new se(ks,po)}});Qv.__EMPTY_NODE=de.EMPTY_NODE;He.__childrenNodeConstructor=de;Jk(po);eD(po);/**
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
 */const rD=!0;function it(t,e=null){if(t===null)return de.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new He(n,it(e))}if(!(t instanceof Array)&&rD){const n=[];let s=!1;if(Lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=it(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new se(o,l)))}}),n.length===0)return de.EMPTY_NODE;const r=Sa(n,Xk,o=>o.name,hf);if(s){const o=Sa(n,ot.getCompare());return new de(r,it(e),new In({".priority":o},{".priority":ot}))}else return new de(r,it(e),In.Default)}else{let n=de.EMPTY_NODE;return Lt(t,(s,i)=>{if(On(t,s)&&s.substring(0,1)!=="."){const r=it(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(it(e))}}Zk(it);/**
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
 */class oD extends Tl{constructor(e){super(),this.indexPath_=e,O(!ee(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Fi(e.name,n.name):r}makePost(e,n){const s=it(e),i=de.EMPTY_NODE.updateChild(this.indexPath_,s);return new se(n,i)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,po);return new se(ks,e)}toString(){return qv(this.indexPath_,0).join("/")}}/**
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
 */class aD extends Tl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Fi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const s=it(e);return new se(n,s)}toString(){return".value"}}const lD=new aD;/**
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
 */function cD(t){return{type:"value",snapshotNode:t}}function uD(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hD(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function og(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ot}copy(){const e=new ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ag(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ot?n="$priority":t.index_===lD?n="$value":t.index_===ui?n="$key":(O(t.index_ instanceof oD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ot&&(e.i=t.index_.toString()),e}/**
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
 */class ba extends jv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ho("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ba.getListenId_(e,s),a={};this.listens_[o]=a;const l=ag(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),mi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ba.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ag(e._queryParams),s=e._path.toString(),i=new Rr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ju(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nr(a.responseText)}catch{Nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class dD{constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Aa(){return{value:null,children:new Map}}function eE(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ne(e);t.children.has(s)||t.children.set(s,Aa());const i=t.children.get(s);e=be(e),eE(i,e,n)}}function mu(t,e,n){t.value!==null?n(e,t.value):pD(t,(s,i)=>{const r=new Ae(e.toString()+"/"+s);mu(i,r,n)})}function pD(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class gD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Lt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const cg=10*1e3,mD=30*1e3,_D=5*60*1e3;class yD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gD(e);const s=cg+(mD-cg)*Math.random();_r(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Lt(e,(i,r)=>{r>0&&On(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),_r(this.reportStats_.bind(this),Math.floor(Math.random()*2*_D))}}/**
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
 */var hn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(hn||(hn={}));function tE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ra{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=hn.ACK_USER_WRITE,this.source=tE()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ae(e));return new Ra(ye(),n,this.revert)}}else return O(ne(this.path)===e,"operationForChild called for unrelated child."),new Ra(be(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ds{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=hn.OVERWRITE}operationForChild(e){return ee(this.path)?new Ds(this.source,ye(),this.snap.getImmediateChild(e)):new Ds(this.source,be(this.path),this.snap)}}/**
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
 */class Hr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=hn.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new Ae(e));return n.isEmpty()?null:n.value?new Ds(this.source,ye(),n.value):new Hr(this.source,ye(),n)}else return O(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hr(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class df{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function vD(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fD(o.childName,o.snapshotNode))}),Qi(t,i,"child_removed",e,s,n),Qi(t,i,"child_added",e,s,n),Qi(t,i,"child_moved",r,s,n),Qi(t,i,"child_changed",e,s,n),Qi(t,i,"value",e,s,n),i}function Qi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>wD(t,a,l)),o.forEach(a=>{const l=ED(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ED(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wD(t,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const s=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function iE(t,e){return{eventCache:t,serverCache:e}}function yr(t,e,n,s){return iE(new df(e,n,s),t.serverCache)}function rE(t,e,n,s){return iE(t.eventCache,new df(e,n,s))}function _u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Os(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ac;const TD=()=>(ac||(ac=new wt(ak)),ac);class Ie{constructor(e,n=TD()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Lt(e,(s,i)=>{n=n.set(new Ae(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ee(e))return null;{const s=ne(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(be(e),n);return r!=null?{path:ze(new Ae(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=ne(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new Ie(null)}}set(e,n){if(ee(e))return new Ie(n,this.children);{const s=ne(e),r=(this.children.get(s)||new Ie(null)).set(be(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=ne(e),s=this.children.get(n);if(s){const i=s.remove(be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=ne(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(ee(e))return n;{const s=ne(e),r=(this.children.get(s)||new Ie(null)).setTree(be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ze(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=ne(e),o=this.children.get(r);return o?o.findOnPath_(be(e),ze(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=ne(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),ze(n,i),s):new Ie(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new Ie(null))}}function vr(t,e,n){if(ee(e))return new Qt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Mt(i,e);return r=r.updateChild(o,n),new Qt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new Qt(r)}}}function ug(t,e,n){let s=t;return Lt(n,(i,r)=>{s=vr(s,ze(e,i),r)}),s}function hg(t,e){if(ee(e))return Qt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Qt(n)}}function yu(t,e){return Ms(t,e)!=null}function Ms(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function fg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ot,(s,i)=>{e.push(new se(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new se(s,i.value))}),e}function Gn(t,e){if(ee(e))return t;{const n=Ms(t,e);return n!=null?new Qt(new Ie(n)):new Qt(t.writeTree_.subtree(e))}}function vu(t){return t.writeTree_.isEmpty()}function Si(t,e){return oE(ye(),t.writeTree_,e)}function oE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=oE(ze(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ze(t,".priority"),s)),n}}/**
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
 */function aE(t,e){return fE(e,t)}function CD(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=vr(t.visibleWrites,e,n)),t.lastWriteId=s}function ID(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function SD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bD(a,s.path)?i=!1:Ht(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return AD(t),!0;if(s.snap)t.visibleWrites=hg(t.visibleWrites,s.path);else{const a=s.children;Lt(a,l=>{t.visibleWrites=hg(t.visibleWrites,ze(s.path,l))})}return!0}else return!1}function bD(t,e){if(t.snap)return Ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ht(ze(t.path,n),e))return!0;return!1}function AD(t){t.visibleWrites=lE(t.allWrites,RD,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RD(t){return t.visible}function lE(t,e,n){let s=Qt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ht(n,o)?(a=Mt(n,o),s=vr(s,a,r.snap)):Ht(o,n)&&(a=Mt(o,n),s=vr(s,ye(),r.snap.getChild(a)));else if(r.children){if(Ht(n,o))a=Mt(n,o),s=ug(s,a,r.children);else if(Ht(o,n))if(a=Mt(o,n),ee(a))s=ug(s,ye(),r.children);else{const l=mi(r.children,ne(a));if(l){const c=l.getChild(be(a));s=vr(s,ye(),c)}}}else throw Ni("WriteRecord should have .snap or .children")}}return s}function cE(t,e,n,s,i){if(!s&&!i){const r=Ms(t.visibleWrites,e);if(r!=null)return r;{const o=Gn(t.visibleWrites,e);if(vu(o))return n;if(n==null&&!yu(o,ye()))return null;{const a=n||de.EMPTY_NODE;return Si(o,a)}}}else{const r=Gn(t.visibleWrites,e);if(!i&&vu(r))return n;if(!i&&n==null&&!yu(r,ye()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ht(c.path,e)||Ht(e,c.path))},a=lE(t.allWrites,o,e),l=n||de.EMPTY_NODE;return Si(a,l)}}}function ND(t,e,n){let s=de.EMPTY_NODE;const i=Ms(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ot,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Gn(t.visibleWrites,e);return n.forEachChild(ot,(o,a)=>{const l=Si(Gn(r,new Ae(o)),a);s=s.updateImmediateChild(o,l)}),fg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Gn(t.visibleWrites,e);return fg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kD(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ze(e,n);if(yu(t.visibleWrites,r))return null;{const o=Gn(t.visibleWrites,r);return vu(o)?i.getChild(n):Si(o,i.getChild(n))}}function DD(t,e,n,s){const i=ze(e,n),r=Ms(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Gn(t.visibleWrites,i);return Si(o,s.getNode().getImmediateChild(n))}else return null}function OD(t,e){return Ms(t.visibleWrites,e)}function xD(t,e,n,s,i,r,o){let a;const l=Gn(t.visibleWrites,e),c=Ms(l,ye());if(c!=null)a=c;else if(n!=null)a=Si(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function PD(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function Eu(t,e,n,s){return cE(t.writeTree,t.treePath,e,n,s)}function uE(t,e){return ND(t.writeTree,t.treePath,e)}function dg(t,e,n,s){return kD(t.writeTree,t.treePath,e,n,s)}function Na(t,e){return OD(t.writeTree,ze(t.treePath,e))}function MD(t,e,n,s,i,r){return xD(t.writeTree,t.treePath,e,n,s,i,r)}function pf(t,e,n){return DD(t.writeTree,t.treePath,e,n)}function hE(t,e){return fE(ze(t.treePath,e),t.writeTree)}function fE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class LD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,og(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hD(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,uD(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,og(s,e.snapshotNode,i.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class FD{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const dE=new FD;class gf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new df(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Os(this.viewCache_),r=MD(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function UD(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $D(t,e,n,s,i){const r=new LD;let o,a;if(n.type===hn.OVERWRITE){const c=n;c.source.fromUser?o=wu(t,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=ka(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===hn.MERGE){const c=n;c.source.fromUser?o=BD(t,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===hn.ACK_USER_WRITE){const c=n;c.revert?o=KD(t,e,c.path,s,i,r):o=jD(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===hn.LISTEN_COMPLETE)o=HD(t,e,n.path,s,r);else throw Ni("Unknown operation type: "+n.type);const l=r.getChanges();return VD(e,o,l),{viewCache:o,changes:l}}function VD(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=_u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(cD(_u(e)))}}function pE(t,e,n,s,i,r){const o=e.eventCache;if(Na(s,n)!=null)return e;{let a,l;if(ee(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Os(e),u=c instanceof de?c:de.EMPTY_NODE,h=uE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Eu(s,Os(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ne(n);if(c===".priority"){O(Zn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=dg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=be(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=dg(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=pf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return yr(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function ka(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ne(n);if(!l.isCompleteForPath(n)&&Zn(n)>1)return e;const m=be(n),v=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,m,dE,null)}const h=rE(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),f=new gf(i,h,r);return pE(t,h,n,i,f,a)}function wu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new gf(i,e,r);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=yr(e,c,!0,t.filter.filtersNodes());else{const h=ne(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=yr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=be(n),p=a.getNode().getImmediateChild(h);let m;if(ee(f))m=s;else{const _=u.getCompleteChild(h);_!=null?Kv(f)===".priority"&&_.getChild(zv(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=de.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=yr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pg(t,e){return t.eventCache.isCompleteForChild(e)}function BD(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ze(n,l);pg(e,ne(u))&&(a=wu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ze(n,l);pg(e,ne(u))||(a=wu(t,a,u,c,i,r,o))}),a}function gg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=s:c=new Ie(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=gg(t,p,f);l=ka(t,l,new Ae(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=gg(t,m,f);l=ka(t,l,new Ae(h),_,i,r,o,a)}}),l}function jD(t,e,n,s,i,r,o){if(Na(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ka(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ee(n)){let c=new Ie(null);return l.getNode().forEachChild(ui,(u,h)=>{c=c.set(new Ae(u),h)}),Tu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ie(null);return s.foreach((u,h)=>{const f=ze(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Tu(t,e,n,c,i,r,a,o)}}function HD(t,e,n,s,i){const r=e.serverCache,o=rE(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return pE(t,o,n,s,dE,i)}function KD(t,e,n,s,i,r){let o;if(Na(s,n)!=null)return e;{const a=new gf(s,e,i),l=e.eventCache.getNode();let c;if(ee(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eu(s,Os(e));else{const h=e.serverCache.getNode();O(h instanceof de,"serverChildren would be complete if leaf node"),u=uE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ne(n);let h=pf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,be(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,de.EMPTY_NODE,be(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eu(s,Os(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Na(s,ye())!=null,yr(e,c,o,t.filter.filtersNodes())}}function qD(t,e){const n=Os(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function mg(t,e,n,s){e.type===hn.MERGE&&e.source.queryId!==null&&(O(Os(t.viewCache_),"We should always have a full cache before handling merges"),O(_u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=$D(t.processor_,i,e,n,s);return UD(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,zD(t,r.changes,r.viewCache.eventCache.getNode(),null)}function zD(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return vD(t.eventGenerator_,e,n,i)}/**
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
 */let _g;function WD(t){O(!_g,"__referenceConstructor has already been defined"),_g=t}function mf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),mg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(mg(o,e,n,s));return r}}function _f(t,e){let n=null;for(const s of t.views.values())n=n||qD(s,e);return n}/**
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
 */let yg;function GD(t){O(!yg,"__referenceConstructor has already been defined"),yg=t}class vg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=PD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QD(t,e,n,s,i){return CD(t.pendingWriteTree_,e,n,s,i),i?Il(t,new Ds(tE(),e,n)):[]}function Qs(t,e,n=!1){const s=ID(t.pendingWriteTree_,e);if(SD(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ye(),!0):Lt(s.children,o=>{r=r.set(new Ae(o),!0)}),Il(t,new Ra(s.path,r,n))}else return[]}function Cl(t,e,n){return Il(t,new Ds(nE(),e,n))}function YD(t,e,n){const s=Ie.fromObject(n);return Il(t,new Hr(nE(),e,s))}function XD(t,e,n,s){const i=yE(t,s);if(i!=null){const r=vE(i),o=r.path,a=r.queryId,l=Mt(o,e),c=new Ds(sE(a),l,n);return EE(t,o,c)}else return[]}function JD(t,e,n,s){const i=yE(t,s);if(i){const r=vE(i),o=r.path,a=r.queryId,l=Mt(o,e),c=Ie.fromObject(n),u=new Hr(sE(a),l,c);return EE(t,o,u)}else return[]}function gE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Mt(o,e),c=_f(a,l);if(c)return c});return cE(i,e,r,n,!0)}function Il(t,e){return mE(e,t.syncPointTree_,null,aE(t.pendingWriteTree_,ye()))}function mE(t,e,n,s){if(ee(t.path))return _E(t,e,n,s);{const i=e.get(ye());n==null&&i!=null&&(n=_f(i,ye()));let r=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hE(s,o);r=r.concat(mE(a,l,c,u))}return i&&(r=r.concat(mf(i,t,s,n))),r}}function _E(t,e,n,s){const i=e.get(ye());n==null&&i!=null&&(n=_f(i,ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hE(s,o),u=t.operationForChild(o);u&&(r=r.concat(_E(u,a,l,c)))}),i&&(r=r.concat(mf(i,t,s,n))),r}function yE(t,e){return t.tagToQueryMap.get(e)}function vE(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ae(t.substr(0,e))}}function EE(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=aE(t.pendingWriteTree_,e);return mf(s,n,i,null)}/**
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
 */class yf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yf(n)}node(){return this.node_}}class vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new vf(this.syncTree_,n)}node(){return gE(this.syncTree_,this.path_)}}const ZD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Eg=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tO(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},tO=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},nO=function(t,e,n,s){return Ef(e,new vf(n,t),s)},sO=function(t,e,n){return Ef(t,new yf(e),n)};function Ef(t,e,n){const s=t.getPriority().val(),i=Eg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Eg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new He(a,it(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new He(i))),o.forEachChild(ot,(a,l)=>{const c=Ef(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class wf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Tf(t,e){let n=e instanceof Ae?e:new Ae(e),s=t,i=ne(n);for(;i!==null;){const r=mi(s.node.children,i)||{children:{},childCount:0};s=new wf(i,s,r),n=be(n),i=ne(n)}return s}function Ui(t){return t.node.value}function wE(t,e){t.node.value=e,Cu(t)}function TE(t){return t.node.childCount>0}function iO(t){return Ui(t)===void 0&&!TE(t)}function Sl(t,e){Lt(t.node.children,(n,s)=>{e(new wf(n,t,s))})}function CE(t,e,n,s){n&&!s&&e(t),Sl(t,i=>{CE(i,e,!0,s)}),n&&s&&e(t)}function rO(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function go(t){return new Ae(t.parent===null?t.name:go(t.parent)+"/"+t.name)}function Cu(t){t.parent!==null&&oO(t.parent,t.name,t)}function oO(t,e,n){const s=iO(n),i=On(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Cu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cu(t))}/**
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
 */const aO=/[\[\].#$\/\u0000-\u001F\u007F]/,lO=/[\[\].#$\u0000-\u001F\u007F]/,lc=10*1024*1024,IE=function(t){return typeof t=="string"&&t.length!==0&&!aO.test(t)},cO=function(t){return typeof t=="string"&&t.length!==0&&!lO.test(t)},uO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cO(t)},SE=function(t,e,n){const s=n instanceof Ae?new Hk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+cs(s));if(typeof e=="function")throw new Error(t+"contains a function "+cs(s)+" with contents = "+e.toString());if(Iv(e))throw new Error(t+"contains "+e.toString()+" "+cs(s));if(typeof e=="string"&&e.length>lc/3&&Qa(e)>lc)throw new Error(t+"contains a string greater than "+lc+" utf8 bytes "+cs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!IE(o)))throw new Error(t+" contains an invalid key ("+o+") "+cs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kk(s,o),SE(t,a,s),qk(s)}),i&&r)throw new Error(t+' contains ".value" child '+cs(s)+" in addition to actual children.")}},hO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!IE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uO(n))throw new Error(bI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dO(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Wv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ls(t,e,n){dO(t,n),pO(t,s=>Ht(s,e)||Ht(e,s))}function pO(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(gO(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Is&&st("event: "+n.toString()),fo(s)}}}/**
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
 */const mO="repo_interrupt",_O=25;class yO{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Aa(),this.transactionQueueTree_=new wf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vO(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||dk())t.server_=new ba(t.repoInfo_,(s,i,r,o)=>{wg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(s,i,r,o)=>{wg(t,s,i,r,o)},s=>{Tg(t,s)},s=>{wO(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vk(t.repoInfo_,()=>new yD(t.stats_,t.server_)),t.infoData_=new dD,t.infoSyncTree_=new vg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Cl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cf(t,"connected",!1),t.serverSyncTree_=new vg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ls(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function EO(t){const n=t.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bE(t){return ZD({timestamp:EO(t)})}function wg(t,e,n,s,i){t.dataUpdateCount++;const r=new Ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=na(n,c=>it(c));o=JD(t.serverSyncTree_,r,l,i)}else{const l=it(n);o=XD(t.serverSyncTree_,r,l,i)}else if(s){const l=na(n,c=>it(c));o=YD(t.serverSyncTree_,r,l)}else{const l=it(n);o=Cl(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Sf(t,r)),Ls(t.eventQueue_,a,o)}function Tg(t,e){Cf(t,"connected",e),e===!1&&CO(t)}function wO(t,e){Lt(e,(n,s)=>{Cf(t,n,s)})}function Cf(t,e,n){const s=new Ae("/.info/"+e),i=it(n);t.infoData_.updateSnapshot(s,i);const r=Cl(t.infoSyncTree_,s,i);Ls(t.eventQueue_,s,r)}function TO(t){return t.nextWriteId_++}function CO(t){AE(t,"onDisconnectEvents");const e=bE(t),n=Aa();mu(t.onDisconnect_,ye(),(i,r)=>{const o=nO(i,r,t.serverSyncTree_,e);eE(n,i,o)});let s=[];mu(n,ye(),(i,r)=>{s=s.concat(Cl(t.serverSyncTree_,i,r));const o=AO(t,i);Sf(t,o)}),t.onDisconnect_=Aa(),Ls(t.eventQueue_,ye(),s)}function IO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mO)}function AE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function RE(t,e,n){return gE(t.serverSyncTree_,e,n)||de.EMPTY_NODE}function If(t,e=t.transactionQueueTree_){if(e||bl(t,e),Ui(e)){const n=kE(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&SO(t,go(e),n)}else TE(e)&&Sl(e,n=>{If(t,n)})}function SO(t,e,n){const s=n.map(c=>c.currentWriteId),i=RE(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Mt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{AE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Qs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();bl(t,Tf(t.transactionQueueTree_,e)),If(t,t.transactionQueueTree_),Ls(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)fo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Nt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Sf(t,e)}},o)}function Sf(t,e){const n=NE(t,e),s=go(n),i=kE(t,n);return bO(t,i,s),s}function bO(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Mt(n,l.path);let u=!1,h;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Qs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_O)u=!0,h="maxretry",i=i.concat(Qs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=RE(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){SE("transaction failed: Data returned ",p,l.path);let m=it(p);typeof p=="object"&&p!=null&&On(p,".priority")||(m=m.updatePriority(f.getPriority()));const v=l.currentWriteId,I=bE(t),N=sO(m,f,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=N,l.currentWriteId=TO(t),o.splice(o.indexOf(v),1),i=i.concat(QD(t.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),i=i.concat(Qs(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(Qs(t.serverSyncTree_,l.currentWriteId,!0))}Ls(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}bl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)fo(s[a]);If(t,t.transactionQueueTree_)}function NE(t,e){let n,s=t.transactionQueueTree_;for(n=ne(e);n!==null&&Ui(s)===void 0;)s=Tf(s,n),e=be(e),n=ne(e);return s}function kE(t,e){const n=[];return DE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function DE(t,e,n){const s=Ui(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Sl(e,i=>{DE(t,i,n)})}function bl(t,e){const n=Ui(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,wE(e,n.length>0?n:void 0)}Sl(e,s=>{bl(t,s)})}function AO(t,e){const n=go(NE(t,e)),s=Tf(t.transactionQueueTree_,e);return rO(s,i=>{cc(t,i)}),cc(t,s),CE(s,i=>{cc(t,i)}),n}function cc(t,e){const n=Ui(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wE(e,void 0):n.length=r+1,Ls(t.eventQueue_,go(e),i);for(let o=0;o<s.length;o++)fo(s[o])}}/**
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
 */function RO(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function NO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cg=function(t,e){const n=kO(t),s=n.namespace;n.domain==="firebase.com"&&Ns(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ns("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mk(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ae(n.pathString)}},kO=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=RO(t.substring(u,h)));const f=NO(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class bf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:Kv(this._path)}get ref(){return new $i(this._repo,this._path)}get _queryIdentifier(){const e=lg(this._queryParams),n=of(e);return n==="{}"?"default":n}get _queryObject(){return lg(this._queryParams)}isEqual(e){if(e=es(e),!(e instanceof bf))return!1;const n=this._repo===e._repo,s=Wv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jk(this._path)}}class $i extends bf{constructor(e,n){super(e,n,new ff,!1)}get parent(){const e=zv(this._path);return e===null?null:new $i(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}WD($i);GD($i);/**
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
 */const DO="FIREBASE_DATABASE_EMULATOR_HOST",Iu={};let OO=!1;function xO(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ns("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[DO]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Cg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new du(du.OWNER):new gk(t.name,t.options,e);hO("Invalid Firebase Database URL",o),ee(o.path)||Ns("Database URL must point to the root of a Firebase Database (not including a child path).");const h=MO(a,t,u,new pk(t.name,n));return new LO(h,t)}function PO(t,e){const n=Iu[e];(!n||n[t.key]!==t)&&Ns(`Database ${e}(${t.repoInfo_}) has already been deleted.`),IO(t),delete n[t.key]}function MO(t,e,n,s){let i=Iu[e.name];i||(i={},Iu[e.name]=i);let r=i[t.toURLString()];return r&&Ns("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yO(t,OO,n,s),i[t.toURLString()]=r,r}class LO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $i(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ns("Cannot call "+e+" on a deleted database.")}}/**
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
 */function FO(t){ek(Di),pn(new Xt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xO(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rt(Kp,qp,t),Rt(Kp,qp,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FO();/**
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
 */const OE="firebasestorage.googleapis.com",UO="storageBucket",$O=2*60*1e3,VO=10*60*1e3;/**
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
 */class vn extends Dn{constructor(e,n,s=0){super(uc(e),`Firebase Storage: ${n} (${uc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yn||(yn={}));function uc(t){return"storage/"+t}function BO(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(yn.UNKNOWN,t)}function jO(){return new vn(yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HO(){return new vn(yn.CANCELED,"User canceled the upload/download.")}function KO(t){return new vn(yn.INVALID_URL,"Invalid URL '"+t+"'.")}function qO(t){return new vn(yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ig(t){return new vn(yn.INVALID_ARGUMENT,t)}function xE(){return new vn(yn.APP_DELETED,"The Firebase app was deleted.")}function zO(t){return new vn(yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(s.path==="")return s;throw qO(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===OE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",I=new RegExp(`^https?://${_}/${i}/${v}`,"i"),w=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let M=0;M<w.length;M++){const X=w[M],ie=X.regex.exec(e);if(ie){const we=ie[X.indices.bucket];let ve=ie[X.indices.path];ve||(ve=""),s=new Kt(we,ve),X.postModify(s);break}}if(s==null)throw KO(e);return s}}class WO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function GO(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,l())},v)}function f(){r&&clearTimeout(r)}function p(v,...I){if(c){f();return}if(v){f(),u.call(null,v,...I);return}if(l()||o){f(),u.call(null,v,...I);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,h(w)}let m=!1;function _(v){m||(m=!0,f(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function QO(t){t(!1)}/**
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
 */function YO(t){return t!==void 0}function Sg(t,e,n,s){if(s<e)throw Ig(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ig(`Invalid value for '${t}'. Expected ${n} or less.`)}function XO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Da;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Da||(Da={}));/**
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
 */function JO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class ZO{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Uo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Da.NO_ERROR,l=r.getStatus();if(!a||JO(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Da.ABORT;s(!1,new Uo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Uo(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YO(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=BO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?xE():HO();o(l)}else{const l=jO();o(l)}};this.canceled_?n(!1,new Uo(!1,null,!0)):this.backoffId_=GO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ex(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ix(t,e,n,s,i,r,o=!0){const a=XO(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nx(c,e),ex(c,n),tx(c,r),sx(c,s),new ZO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function rx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ox(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Oa{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Oa(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ox(this._location.path)}get storage(){return this._service}get parent(){const e=rx(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Oa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zO(e)}}function bg(t,e){const n=e==null?void 0:e[UO];return n==null?null:Kt.makeFromBucketSpec(n,t)}class ax{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=OE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$O,this._maxUploadRetryTime=VO,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Oa(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new WO(xE());{const o=ix(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ag="@firebase/storage",Rg="0.11.2";/**
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
 */const lx="storage";function cx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ax(n,s,i,e,Di)}function ux(){pn(new Xt(lx,cx,"PUBLIC").setMultipleInstances(!0)),Rt(Ag,Rg,""),Rt(Ag,Rg,"esm2017")}ux();const hc=new WeakMap;function PE(t,e){return hc.has(e)||hc.set(e,t||{f:{},r:{},s:{},u:{}}),hc.get(e)}function hx(t,e,n,s){if(!t)return n;const[i,r]=ME(t);if(!i)return n;const o=PE(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function fx(t,e,n,s){if(!t)return;const[i,r]=ME(t);if(!i)return;const o=PE(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(un),a}function ME(t){return W1(t)||G1(t)?["f",t.path]:Q1(t)?["r",t.toString()]:Y1(t)?["s",t.toString()]:[]}const fc=new WeakMap;function dx(t,e,n){const s=nf();fc.has(s)||fc.set(s,new Map);const i=fc.get(s),r=fx(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):un}const px={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Su(t,e,n,s){if(!z1(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(p=>{const m=Object.getOwnPropertyDescriptor(a,p);m&&!m.enumerable&&Object.defineProperty(h,p,m)});for(const p in a){const m=a[p];if(m==null||m instanceof Date||m instanceof gt||m instanceof Yy)h[p]=m;else if(rf(m)){const _=c+p;h[p]=_ in n?l[p]:m.path,f[_]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[p]=Array(m.length);for(let _=0;_<m.length;_++){const v=m[_];v&&v.path in r&&(h[p][_]=r[v.path])}o(m,l[p]||h[p],c+p+".",[h[p],f])}else Ps(m)?(h[p]={},o(m,l[p],c+p+".",[h[p],f])):h[p]=m}}return o(t,e,"",i),i}const Af={reset:!1,wait:!0,maxRefDepth:2,converter:px,snapshotOptions:{serverTimestamps:"estimate"}};function xa(t){for(const e in t)t[e].unsub()}function bu(t,e,n,s,i,r,o,a,l){const[c,u]=Su(s.data(t.snapshotOptions),sf(e,n),i,t);r.set(e,n,c),Au(t,e,n,i,u,r,o,a,l)}function gx({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=un;return a.once?nv(t).then(u=>{u.exists()?bu(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Yh(t,u=>{u.exists()?bu(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),xa(l)}}function Au(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,p=Object.create(null);function m(_){_ in p&&++h>=f&&a(n)}c.forEach(_=>{const v=s[_],I=i[_],N=`${n}.${_}`;if(p[N]=!0,v)if(v.path!==I.path)v.unsub();else return;s[_]={data:()=>sf(e,N),unsub:gx({ref:I,target:e,path:N,depth:o,ops:r,resolve:m.bind(null,N),reject:l},t),path:I.path}})}function mx(t,e,n,s,i,r){const o=Object.assign({},Af,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=ir(c?[]:t.value);c||n.set(t,h,[]);const p=s;let m,_=un;const v=[],I={added:({newIndex:w,doc:M})=>{v.splice(w,0,Object.create(null));const X=v[w],[ie,we]=Su(M.data(l),void 0,X,o);n.add(ft(f),w,ie),Au(o,f,`${h}.${w}`,X,we,n,0,s.bind(null,M),i)},modified:({oldIndex:w,newIndex:M,doc:X})=>{const ie=ft(f),we=v[w],ve=ie[w],[Dt,_t]=Su(X.data(l),ve,we,o);v.splice(M,0,we),n.remove(ie,w),n.add(ie,M,Dt),Au(o,f,`${h}.${M}`,we,_t,n,0,s,i)},removed:({oldIndex:w})=>{const M=ft(f);n.remove(M,w),xa(v.splice(w,1)[0])}};function N(w){const M=w.docChanges(a);if(!m&&M.length){m=!0;let X=0;const ie=M.length,we=Object.create(null);for(let ve=0;ve<ie;ve++)we[M[ve].doc.id]=!0;s=ve=>{ve&&ve.id in we&&++X>=ie&&(c&&(n.set(t,h,ft(f)),f=t),p(ft(f)),s=un)}}M.forEach(X=>{I[X.type](X)}),M.length||(c&&(n.set(t,h,ft(f)),f=t),s(ft(f)))}return u?_N(e).then(N).catch(i):_=Yh(e,N,i),w=>{if(_(),w){const M=typeof w=="function"?w():[];n.set(t,h,M)}v.forEach(xa)}}function _x(t,e,n,s,i,r){const o=Object.assign({},Af,r),a="value",l=Object.create(null);s=X1(s,()=>sf(t,a));let c=un;function u(h){h.exists()?bu(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?nv(e).then(u).catch(i):c=Yh(e,u,i),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}xa(l)}}function yx(t,e){let n=un;const s=Object.assign({},Af,e),i=ft(t),r=s.target||ir();J1()&&(s.once=!0);const o=hx(i,s.ssrKey,r.value,nf());r.value=o;let l=!(Ev(i)?(o||[]).length>0:o!==void 0);const c=ir(!1),u=ir(),h=Zg(),f=Fg();let p=un;function m(){let I=ft(t);const N=new Promise((w,M)=>{if(n(s.reset),!I)return n=un,w(null);c.value=l,l=!0,I.converter||(I=I.withConverter(s.converter)),n=(rf(I)?_x:mx)(r,I,vx,w,M,s)}).catch(w=>(h.value===N&&(u.value=w),Promise.reject(w))).finally(()=>{h.value===N&&(c.value=!1)});h.value=N}let _=un;We(t)&&(_=rr(t,m)),m(),i&&(p=dx(h.value,i,s.ssrKey)),Wu()&&pm(()=>h.value),f&&JE(v);function v(I=s.reset){_(),p(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const vx={set:(t,e,n)=>K1(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)},Yi=new WeakMap;function Ex(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const wx={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},Tx=function(e,n,s){const i=Object.assign({},wx,n),{bindName:r,unbindName:o}=i,a=e.config.globalProperties;a[o]=function(c,u){Ex(c,Yi.get(this),u),delete this.$firestoreRefs[c]},a[r]=function(c,u,h){const f=Object.assign({},i,h),p=kw(this.$data,c);Yi.has(this)||Yi.set(this,{});const m=Yi.get(this);m[c]&&m[c](f.reset);const _=Z1(s||nf(),e).run(()=>Lg()),{promise:v,stop:I}=_.run(()=>yx(u,{target:p,...f})),N=w=>{I(w),_.stop()};return m[c]=N,this.$firestoreRefs[c]=u,v.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,c=typeof l=="function"?l.call(this):l;if(c)for(const u in c)this[r](u,c[u],i)},beforeUnmount(){const l=Yi.get(this);if(l)for(const c in l)l[c]();this.$firestoreRefs=null}})};function Cx(t){return(e,n)=>Tx(n,t,e)}function Ix(t,{firebaseApp:e,modules:n=[]}){t.provide(vv,e);for(const s of n)t.use(s.bind(null,e))}const Sx={};function bx(t,e){const n=Tt("router-view");return pt(),S0(n)}const Ax=en(Sx,[["render",bx]]);const Rf=oT(Ax);Rf.use(Jh);Rf.use(Ix,{firebaseApp:vN,modules:[Cx()]});Rf.mount("#app");if(!ti.storedOnLocalStorage()){const t=ti.generate();console.debug(`player ${t} generated`),t.saveOnLocalStorage()}window.addEventListener("beforeunload",()=>{sessionStorage.setItem("lastRoute",Jh.currentRoute.value.path)});const dc=sessionStorage.getItem("lastRoute")||"/";Jh.push(dc).then(()=>{console.debug(`location set to ${dc}.`)}).catch(t=>{console.error(`impossible to set location to ${dc} because ${t}`)});
