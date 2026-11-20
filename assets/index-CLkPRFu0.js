function nx(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in s)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(s,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Hg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yu={exports:{}},Ha={},Ku={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function ix(){if(xm)return mt;xm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(D,K,De){this.props=D,this.context=K,this.refs=A,this.updater=De||x}S.prototype.isReactComponent={},S.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(D,K,De){this.props=D,this.context=K,this.refs=A,this.updater=De||x}var N=L.prototype=new y;N.constructor=L,E(N,S.prototype),N.isPureReactComponent=!0;var b=Array.isArray,U=Object.prototype.hasOwnProperty,w={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function P(D,K,De){var ne,ge={},Me=null,Ue=null;if(K!=null)for(ne in K.ref!==void 0&&(Ue=K.ref),K.key!==void 0&&(Me=""+K.key),K)U.call(K,ne)&&!M.hasOwnProperty(ne)&&(ge[ne]=K[ne]);var _e=arguments.length-2;if(_e===1)ge.children=De;else if(1<_e){for(var ze=Array(_e),St=0;St<_e;St++)ze[St]=arguments[St+2];ge.children=ze}if(D&&D.defaultProps)for(ne in _e=D.defaultProps,_e)ge[ne]===void 0&&(ge[ne]=_e[ne]);return{$$typeof:s,type:D,key:Me,ref:Ue,props:ge,_owner:w.current}}function $(D,K){return{$$typeof:s,type:D.type,key:K,ref:D.ref,props:D.props,_owner:D._owner}}function z(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function G(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(De){return K[De]})}var j=/\/+/g;function ae(D,K){return typeof D=="object"&&D!==null&&D.key!=null?G(""+D.key):K.toString(36)}function k(D,K,De,ne,ge){var Me=typeof D;(Me==="undefined"||Me==="boolean")&&(D=null);var Ue=!1;if(D===null)Ue=!0;else switch(Me){case"string":case"number":Ue=!0;break;case"object":switch(D.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=D,ge=ge(Ue),D=ne===""?"."+ae(Ue,0):ne,b(ge)?(De="",D!=null&&(De=D.replace(j,"$&/")+"/"),k(ge,K,De,"",function(St){return St})):ge!=null&&(z(ge)&&(ge=$(ge,De+(!ge.key||Ue&&Ue.key===ge.key?"":(""+ge.key).replace(j,"$&/")+"/")+D)),K.push(ge)),1;if(Ue=0,ne=ne===""?".":ne+":",b(D))for(var _e=0;_e<D.length;_e++){Me=D[_e];var ze=ne+ae(Me,_e);Ue+=k(Me,K,De,ze,ge)}else if(ze=v(D),typeof ze=="function")for(D=ze.call(D),_e=0;!(Me=D.next()).done;)Me=Me.value,ze=ne+ae(Me,_e++),Ue+=k(Me,K,De,ze,ge);else if(Me==="object")throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ue}function ie(D,K,De){if(D==null)return D;var ne=[],ge=0;return k(D,ne,"","",function(Me){return K.call(De,Me,ge++)}),ne}function ce(D){if(D._status===-1){var K=D._result;K=K(),K.then(function(De){(D._status===0||D._status===-1)&&(D._status=1,D._result=De)},function(De){(D._status===0||D._status===-1)&&(D._status=2,D._result=De)}),D._status===-1&&(D._status=0,D._result=K)}if(D._status===1)return D._result.default;throw D._result}var q={current:null},J={transition:null},V={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:J,ReactCurrentOwner:w};function Y(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ie,forEach:function(D,K,De){ie(D,function(){K.apply(this,arguments)},De)},count:function(D){var K=0;return ie(D,function(){K++}),K},toArray:function(D){return ie(D,function(K){return K})||[]},only:function(D){if(!z(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},mt.Component=S,mt.Fragment=t,mt.Profiler=a,mt.PureComponent=L,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,mt.act=Y,mt.cloneElement=function(D,K,De){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ne=E({},D.props),ge=D.key,Me=D.ref,Ue=D._owner;if(K!=null){if(K.ref!==void 0&&(Me=K.ref,Ue=w.current),K.key!==void 0&&(ge=""+K.key),D.type&&D.type.defaultProps)var _e=D.type.defaultProps;for(ze in K)U.call(K,ze)&&!M.hasOwnProperty(ze)&&(ne[ze]=K[ze]===void 0&&_e!==void 0?_e[ze]:K[ze])}var ze=arguments.length-2;if(ze===1)ne.children=De;else if(1<ze){_e=Array(ze);for(var St=0;St<ze;St++)_e[St]=arguments[St+2];ne.children=_e}return{$$typeof:s,type:D.type,key:ge,ref:Me,props:ne,_owner:Ue}},mt.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},mt.createElement=P,mt.createFactory=function(D){var K=P.bind(null,D);return K.type=D,K},mt.createRef=function(){return{current:null}},mt.forwardRef=function(D){return{$$typeof:f,render:D}},mt.isValidElement=z,mt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:ce}},mt.memo=function(D,K){return{$$typeof:h,type:D,compare:K===void 0?null:K}},mt.startTransition=function(D){var K=J.transition;J.transition={};try{D()}finally{J.transition=K}},mt.unstable_act=Y,mt.useCallback=function(D,K){return q.current.useCallback(D,K)},mt.useContext=function(D){return q.current.useContext(D)},mt.useDebugValue=function(){},mt.useDeferredValue=function(D){return q.current.useDeferredValue(D)},mt.useEffect=function(D,K){return q.current.useEffect(D,K)},mt.useId=function(){return q.current.useId()},mt.useImperativeHandle=function(D,K,De){return q.current.useImperativeHandle(D,K,De)},mt.useInsertionEffect=function(D,K){return q.current.useInsertionEffect(D,K)},mt.useLayoutEffect=function(D,K){return q.current.useLayoutEffect(D,K)},mt.useMemo=function(D,K){return q.current.useMemo(D,K)},mt.useReducer=function(D,K,De){return q.current.useReducer(D,K,De)},mt.useRef=function(D){return q.current.useRef(D)},mt.useState=function(D){return q.current.useState(D)},mt.useSyncExternalStore=function(D,K,De){return q.current.useSyncExternalStore(D,K,De)},mt.useTransition=function(){return q.current.useTransition()},mt.version="18.3.1",mt}var Sm;function Pd(){return Sm||(Sm=1,Ku.exports=ix()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function rx(){if(ym)return Ha;ym=1;var s=Pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,_={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(g in d)i.call(d,g)&&!l.hasOwnProperty(g)&&(_[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:f,key:v,ref:x,props:_,_owner:a.current}}return Ha.Fragment=t,Ha.jsx=c,Ha.jsxs=c,Ha}var Mm;function sx(){return Mm||(Mm=1,Yu.exports=rx()),Yu.exports}var me=sx(),lt=Pd();const ax=Hg(lt);var xl={},ju={exports:{}},$n={},Zu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function ox(){return Em||(Em=1,(function(s){function e(J,V){var Y=J.length;J.push(V);e:for(;0<Y;){var D=Y-1>>>1,K=J[D];if(0<a(K,V))J[D]=V,J[Y]=K,Y=D;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var V=J[0],Y=J.pop();if(Y!==V){J[0]=Y;e:for(var D=0,K=J.length,De=K>>>1;D<De;){var ne=2*(D+1)-1,ge=J[ne],Me=ne+1,Ue=J[Me];if(0>a(ge,Y))Me<K&&0>a(Ue,ge)?(J[D]=Ue,J[Me]=Y,D=Me):(J[D]=ge,J[ne]=Y,D=ne);else if(Me<K&&0>a(Ue,Y))J[D]=Ue,J[Me]=Y,D=Me;else break e}}return V}function a(J,V){var Y=J.sortIndex-V.sortIndex;return Y!==0?Y:J.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,_=null,v=3,x=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(J){for(var V=t(h);V!==null;){if(V.callback===null)i(h);else if(V.startTime<=J)i(h),V.sortIndex=V.expirationTime,e(d,V);else break;V=t(h)}}function b(J){if(A=!1,N(J),!E)if(t(d)!==null)E=!0,ce(U);else{var V=t(h);V!==null&&q(b,V.startTime-J)}}function U(J,V){E=!1,A&&(A=!1,y(P),P=-1),x=!0;var Y=v;try{for(N(V),_=t(d);_!==null&&(!(_.expirationTime>V)||J&&!G());){var D=_.callback;if(typeof D=="function"){_.callback=null,v=_.priorityLevel;var K=D(_.expirationTime<=V);V=s.unstable_now(),typeof K=="function"?_.callback=K:_===t(d)&&i(d),N(V)}else i(d);_=t(d)}if(_!==null)var De=!0;else{var ne=t(h);ne!==null&&q(b,ne.startTime-V),De=!1}return De}finally{_=null,v=Y,x=!1}}var w=!1,M=null,P=-1,$=5,z=-1;function G(){return!(s.unstable_now()-z<$)}function j(){if(M!==null){var J=s.unstable_now();z=J;var V=!0;try{V=M(!0,J)}finally{V?ae():(w=!1,M=null)}}else w=!1}var ae;if(typeof L=="function")ae=function(){L(j)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ie=k.port2;k.port1.onmessage=j,ae=function(){ie.postMessage(null)}}else ae=function(){S(j,0)};function ce(J){M=J,w||(w=!0,ae())}function q(J,V){P=S(function(){J(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){E||x||(E=!0,ce(U))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(J){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var Y=v;v=V;try{return J()}finally{v=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,V){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var Y=v;v=J;try{return V()}finally{v=Y}},s.unstable_scheduleCallback=function(J,V,Y){var D=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?D+Y:D):Y=D,J){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Y+K,J={id:g++,callback:V,priorityLevel:J,startTime:Y,expirationTime:K,sortIndex:-1},Y>D?(J.sortIndex=Y,e(h,J),t(d)===null&&J===t(h)&&(A?(y(P),P=-1):A=!0,q(b,Y-D))):(J.sortIndex=K,e(d,J),E||x||(E=!0,ce(U))),J},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(J){var V=v;return function(){var Y=v;v=V;try{return J.apply(this,arguments)}finally{v=Y}}}})(Ju)),Ju}var Tm;function lx(){return Tm||(Tm=1,Zu.exports=ox()),Zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function cx(){if(Cm)return $n;Cm=1;var s=Pd(),e=lx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(n){return d.call(_,n)?!0:d.call(g,n)?!1:h.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,o,u){if(r===null||typeof r>"u"||x(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(n,r,o,u,p,m,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new A(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,L);S[r]=new A(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,L);S[r]=new A(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,L);S[r]=new A(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,o,u){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,o,p,u)&&(o=null),u||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),w=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),G=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),J=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,D;function K(n){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var De=!1;function ne(n,r){if(!n||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var u=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){u=le}n.call(r.prototype)}else{try{throw Error()}catch(le){u=le}n()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var p=le.stack.split(`
`),m=u.stack.split(`
`),T=p.length-1,O=m.length-1;1<=T&&0<=O&&p[T]!==m[O];)O--;for(;1<=T&&0<=O;T--,O--)if(p[T]!==m[O]){if(T!==1||O!==1)do if(T--,O--,0>O||p[T]!==m[O]){var H=`
`+p[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=O);break}}}finally{De=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?K(n):""}function ge(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case w:return"Portal";case $:return"Profiler";case P:return"StrictMode";case ae:return"Suspense";case k:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case ce:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function Ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function St(n){var r=ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,m=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function et(n){n._valueTracker||(n._valueTracker=St(n))}function Tt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,r){var o=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function en(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=_e(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function qt(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function dn(n,r){qt(n,r);var o=_e(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?zn(n,r.type,o):r.hasOwnProperty("defaultValue")&&zn(n,r.type,_e(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ot(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function zn(n,r,o){(r!=="number"||Ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var zt=Array.isArray;function sn(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+_e(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function En(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nn(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(zt(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:_e(o)}}function X(n,r){var o=_e(r.value),u=_e(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Un(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function It(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?It(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Yt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Qe(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(n){I.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),it[r]=it[n]})});function C(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||it.hasOwnProperty(n)&&it[n]?(""+r).trim():r+"px"}function ee(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=C(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var ye=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pe(n,r){if(r){if(ye[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ae(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function fe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var de=null,Ce=null,F=null;function he(n){if(n=Ra(n)){if(typeof de!="function")throw Error(t(280));var r=n.stateNode;r&&(r=No(r),de(n.stateNode,n.type,r))}}function ue(n){Ce?F?F.push(n):F=[n]:Ce=n}function we(){if(Ce){var n=Ce,r=F;if(F=Ce=null,he(n),r)for(n=0;n<r.length;n++)he(r[n])}}function Te(n,r){return n(r)}function be(){}var Ke=!1;function ct(n,r,o){if(Ke)return n(r,o);Ke=!0;try{return Te(n,r,o)}finally{Ke=!1,(Ce!==null||F!==null)&&(be(),we())}}function Se(n,r){var o=n.stateNode;if(o===null)return null;var u=No(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Je=!1;if(f)try{var st={};Object.defineProperty(st,"passive",{get:function(){Je=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Je=!1}function Fe(n,r,o,u,p,m,T,O,H){var le=Array.prototype.slice.call(arguments,3);try{r.apply(o,le)}catch(xe){this.onError(xe)}}var _t=!1,Wt=null,Jn=!1,us=null,aa={onError:function(n){_t=!0,Wt=n}};function vc(n,r,o,u,p,m,T,O,H){_t=!1,Wt=null,Fe.apply(aa,arguments)}function mo(n,r,o,u,p,m,T,O,H){if(vc.apply(this,arguments),_t){if(_t){var le=Wt;_t=!1,Wt=null}else throw Error(t(198));Jn||(Jn=!0,us=le)}}function bi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function wi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function fs(n){if(bi(n)!==n)throw Error(t(188))}function go(n){var r=n.alternate;if(!r){if(r=bi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var m=p.alternate;if(m===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===o)return fs(p),n;if(m===u)return fs(p),r;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=m;else{for(var T=!1,O=p.child;O;){if(O===o){T=!0,o=p,u=m;break}if(O===u){T=!0,u=p,o=m;break}O=O.sibling}if(!T){for(O=m.child;O;){if(O===o){T=!0,o=m,u=p;break}if(O===u){T=!0,u=m,o=p;break}O=O.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function oa(n){return n=go(n),n!==null?kr(n):null}function kr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=kr(n);if(r!==null)return r;n=n.sibling}return null}var la=e.unstable_scheduleCallback,ca=e.unstable_cancelCallback,Br=e.unstable_shouldYield,xc=e.unstable_requestPaint,Ht=e.unstable_now,_o=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,vo=e.unstable_UserBlockingPriority,ds=e.unstable_NormalPriority,xo=e.unstable_LowPriority,R=e.unstable_IdlePriority,B=null,re=null;function Q(n){if(re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(B,n,void 0,(n.current.flags&128)===128)}catch{}}var Z=Math.clz32?Math.clz32:Le,Ne=Math.log,He=Math.LN2;function Le(n){return n>>>=0,n===0?32:31-(Ne(n)/He|0)|0}var Oe=64,Ve=4194304;function rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ft(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var O=T&~p;O!==0?u=rt(O):(m&=T,m!==0&&(u=rt(m)))}else T=o&~p,T!==0?u=rt(T):m!==0&&(u=rt(m));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,m=r&-r,p>=m||p===16&&(m&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-Z(r),p=1<<o,u|=n[o],r&=~p;return u}function We(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Z(m),O=1<<T,H=p[T];H===-1?((O&o)===0||(O&u)!==0)&&(p[T]=We(O,r)):H<=r&&(n.expiredLanes|=O),m&=~O}}function Gt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pt(){var n=Oe;return Oe<<=1,(Oe&4194240)===0&&(Oe=64),n}function bt(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Kt(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Z(r),n[r]=o}function Xe(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-Z(o),m=1<<p;r[p]=0,u[p]=-1,n[p]=-1,o&=~m}}function an(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Z(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}var je=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var on,or,mi,Di,gt,Zt=!1,Tn=[],Rt=null,Nt=null,hn=null,lr=new Map,fa=new Map,cr=[],T_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(n,r){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(r.pointerId)}}function da(n,r,o,u,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[p]},r!==null&&(r=Ra(r),r!==null&&or(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function C_(n,r,o,u,p){switch(r){case"focusin":return Rt=da(Rt,n,r,o,u,p),!0;case"dragenter":return Nt=da(Nt,n,r,o,u,p),!0;case"mouseover":return hn=da(hn,n,r,o,u,p),!0;case"pointerover":var m=p.pointerId;return lr.set(m,da(lr.get(m)||null,n,r,o,u,p)),!0;case"gotpointercapture":return m=p.pointerId,fa.set(m,da(fa.get(m)||null,n,r,o,u,p)),!0}return!1}function ih(n){var r=zr(n.target);if(r!==null){var o=bi(r);if(o!==null){if(r=o.tag,r===13){if(r=wi(o),r!==null){n.blockedOn=r,gt(n.priority,function(){mi(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=yc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pe=u,o.target.dispatchEvent(u),Pe=null}else return r=Ra(o),r!==null&&or(r),n.blockedOn=o,!1;r.shift()}return!0}function rh(n,r,o){So(n)&&o.delete(r)}function R_(){Zt=!1,Rt!==null&&So(Rt)&&(Rt=null),Nt!==null&&So(Nt)&&(Nt=null),hn!==null&&So(hn)&&(hn=null),lr.forEach(rh),fa.forEach(rh)}function ha(n,r){n.blockedOn===r&&(n.blockedOn=null,Zt||(Zt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,R_)))}function pa(n){function r(p){return ha(p,n)}if(0<Tn.length){ha(Tn[0],n);for(var o=1;o<Tn.length;o++){var u=Tn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Rt!==null&&ha(Rt,n),Nt!==null&&ha(Nt,n),hn!==null&&ha(hn,n),lr.forEach(r),fa.forEach(r),o=0;o<cr.length;o++)u=cr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)ih(o),o.blockedOn===null&&cr.shift()}var hs=b.ReactCurrentBatchConfig,yo=!0;function A_(n,r,o,u){var p=je,m=hs.transition;hs.transition=null;try{je=1,Sc(n,r,o,u)}finally{je=p,hs.transition=m}}function b_(n,r,o,u){var p=je,m=hs.transition;hs.transition=null;try{je=4,Sc(n,r,o,u)}finally{je=p,hs.transition=m}}function Sc(n,r,o,u){if(yo){var p=yc(n,r,o,u);if(p===null)kc(n,r,u,Mo,o),nh(n,u);else if(C_(p,n,r,o,u))u.stopPropagation();else if(nh(n,u),r&4&&-1<T_.indexOf(n)){for(;p!==null;){var m=Ra(p);if(m!==null&&on(m),m=yc(n,r,o,u),m===null&&kc(n,r,u,Mo,o),m===p)break;p=m}p!==null&&u.stopPropagation()}else kc(n,r,u,null,o)}}var Mo=null;function yc(n,r,o,u){if(Mo=null,n=fe(u),n=zr(n),n!==null)if(r=bi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=wi(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Mo=n,null}function sh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_o()){case ua:return 1;case vo:return 4;case ds:case xo:return 16;case R:return 536870912;default:return 16}default:return 16}}var ur=null,Mc=null,Eo=null;function ah(){if(Eo)return Eo;var n,r=Mc,o=r.length,u,p="value"in ur?ur.value:ur.textContent,m=p.length;for(n=0;n<o&&r[n]===p[n];n++);var T=o-n;for(u=1;u<=T&&r[o-u]===p[m-u];u++);return Eo=p.slice(n,1<u?1-u:void 0)}function To(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function oh(){return!1}function Qn(n){function r(o,u,p,m,T){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Co:oh,this.isPropagationStopped=oh,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),r}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=Qn(ps),ma=Y({},ps,{view:0,detail:0}),w_=Qn(ma),Tc,Cc,ga,Ro=Y({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ga&&(ga&&n.type==="mousemove"?(Tc=n.screenX-ga.screenX,Cc=n.screenY-ga.screenY):Cc=Tc=0,ga=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),lh=Qn(Ro),P_=Y({},Ro,{dataTransfer:0}),D_=Qn(P_),L_=Y({},ma,{relatedTarget:0}),Rc=Qn(L_),I_=Y({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),N_=Qn(I_),U_=Y({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),O_=Qn(U_),F_=Y({},ps,{data:0}),ch=Qn(F_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=z_[n])?!!r[n]:!1}function Ac(){return H_}var G_=Y({},ma,{key:function(n){if(n.key){var r=k_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?B_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),V_=Qn(G_),W_=Y({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=Qn(W_),X_=Y({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),$_=Qn(X_),q_=Y({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=Qn(q_),K_=Y({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=Qn(K_),Z_=[9,13,27,32],bc=f&&"CompositionEvent"in window,_a=null;f&&"documentMode"in document&&(_a=document.documentMode);var J_=f&&"TextEvent"in window&&!_a,fh=f&&(!bc||_a&&8<_a&&11>=_a),dh=" ",hh=!1;function ph(n,r){switch(n){case"keyup":return Z_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Q_(n,r){switch(n){case"compositionend":return mh(r);case"keypress":return r.which!==32?null:(hh=!0,dh);case"textInput":return n=r.data,n===dh&&hh?null:n;default:return null}}function ev(n,r){if(ms)return n==="compositionend"||!bc&&ph(n,r)?(n=ah(),Eo=Mc=ur=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fh&&r.locale!=="ko"?null:r.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!tv[n.type]:r==="textarea"}function _h(n,r,o,u){ue(u),r=Do(r,"onChange"),0<r.length&&(o=new Ec("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var va=null,xa=null;function nv(n){Uh(n,0)}function Ao(n){var r=Ss(n);if(Tt(r))return n}function iv(n,r){if(n==="change")return r}var vh=!1;if(f){var wc;if(f){var Pc="oninput"in document;if(!Pc){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),Pc=typeof xh.oninput=="function"}wc=Pc}else wc=!1;vh=wc&&(!document.documentMode||9<document.documentMode)}function Sh(){va&&(va.detachEvent("onpropertychange",yh),xa=va=null)}function yh(n){if(n.propertyName==="value"&&Ao(xa)){var r=[];_h(r,xa,n,fe(n)),ct(nv,r)}}function rv(n,r,o){n==="focusin"?(Sh(),va=r,xa=o,va.attachEvent("onpropertychange",yh)):n==="focusout"&&Sh()}function sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(xa)}function av(n,r){if(n==="click")return Ao(r)}function ov(n,r){if(n==="input"||n==="change")return Ao(r)}function lv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var gi=typeof Object.is=="function"?Object.is:lv;function Sa(n,r){if(gi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!d.call(r,p)||!gi(n[p],r[p]))return!1}return!0}function Mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eh(n,r){var o=Mh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Mh(o)}}function Th(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Th(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ch(){for(var n=window,r=Ct();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ct(n.document)}return r}function Dc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function cv(n){var r=Ch(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Th(o.ownerDocument.documentElement,o)){if(u!==null&&Dc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,m=Math.min(u.start,p);u=u.end===void 0?m:Math.min(u.end,p),!n.extend&&m>u&&(p=u,u=m,m=p),p=Eh(o,m);var T=Eh(o,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),m>u?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=f&&"documentMode"in document&&11>=document.documentMode,gs=null,Lc=null,ya=null,Ic=!1;function Rh(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ic||gs==null||gs!==Ct(u)||(u=gs,"selectionStart"in u&&Dc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ya&&Sa(ya,u)||(ya=u,u=Do(Lc,"onSelect"),0<u.length&&(r=new Ec("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=gs)))}function bo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var _s={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Nc={},Ah={};f&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function wo(n){if(Nc[n])return Nc[n];if(!_s[n])return n;var r=_s[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Ah)return Nc[n]=r[o];return n}var bh=wo("animationend"),wh=wo("animationiteration"),Ph=wo("animationstart"),Dh=wo("transitionend"),Lh=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,r){Lh.set(n,r),l(r,[n])}for(var Uc=0;Uc<Ih.length;Uc++){var Oc=Ih[Uc],fv=Oc.toLowerCase(),dv=Oc[0].toUpperCase()+Oc.slice(1);fr(fv,"on"+dv)}fr(bh,"onAnimationEnd"),fr(wh,"onAnimationIteration"),fr(Ph,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Dh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Nh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,mo(u,r,void 0,n),n.currentTarget=null}function Uh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var T=u.length-1;0<=T;T--){var O=u[T],H=O.instance,le=O.currentTarget;if(O=O.listener,H!==m&&p.isPropagationStopped())break e;Nh(p,O,le),m=H}else for(T=0;T<u.length;T++){if(O=u[T],H=O.instance,le=O.currentTarget,O=O.listener,H!==m&&p.isPropagationStopped())break e;Nh(p,O,le),m=H}}}if(Jn)throw n=us,Jn=!1,us=null,n}function kt(n,r){var o=r[Wc];o===void 0&&(o=r[Wc]=new Set);var u=n+"__bubble";o.has(u)||(Oh(r,n,2,!1),o.add(u))}function Fc(n,r,o){var u=0;r&&(u|=4),Oh(o,n,u,r)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Po]){n[Po]=!0,i.forEach(function(o){o!=="selectionchange"&&(hv.has(o)||Fc(o,!1,n),Fc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Po]||(r[Po]=!0,Fc("selectionchange",!1,r))}}function Oh(n,r,o,u){switch(sh(r)){case 1:var p=A_;break;case 4:p=b_;break;default:p=Sc}o=p.bind(null,r,o,n),p=void 0,!Je||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function kc(n,r,o,u,p){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;T=T.return}for(;O!==null;){if(T=zr(O),T===null)return;if(H=T.tag,H===5||H===6){u=m=T;continue e}O=O.parentNode}}u=u.return}ct(function(){var le=m,xe=fe(o),Ee=[];e:{var ve=Lh.get(n);if(ve!==void 0){var Be=Ec,$e=n;switch(n){case"keypress":if(To(o)===0)break e;case"keydown":case"keyup":Be=V_;break;case"focusin":$e="focus",Be=Rc;break;case"focusout":$e="blur",Be=Rc;break;case"beforeblur":case"afterblur":Be=Rc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=$_;break;case bh:case wh:case Ph:Be=N_;break;case Dh:Be=Y_;break;case"scroll":Be=w_;break;case"wheel":Be=j_;break;case"copy":case"cut":case"paste":Be=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=uh}var Ye=(r&4)!==0,Jt=!Ye&&n==="scroll",te=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var W=le,se;W!==null;){se=W;var Re=se.stateNode;if(se.tag===5&&Re!==null&&(se=Re,te!==null&&(Re=Se(W,te),Re!=null&&Ye.push(Ta(W,Re,se)))),Jt)break;W=W.return}0<Ye.length&&(ve=new Be(ve,$e,null,o,xe),Ee.push({event:ve,listeners:Ye}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",ve&&o!==Pe&&($e=o.relatedTarget||o.fromElement)&&(zr($e)||$e[Wi]))break e;if((Be||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?($e=o.relatedTarget||o.toElement,Be=le,$e=$e?zr($e):null,$e!==null&&(Jt=bi($e),$e!==Jt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Be=null,$e=le),Be!==$e)){if(Ye=lh,Re="onMouseLeave",te="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=uh,Re="onPointerLeave",te="onPointerEnter",W="pointer"),Jt=Be==null?ve:Ss(Be),se=$e==null?ve:Ss($e),ve=new Ye(Re,W+"leave",Be,o,xe),ve.target=Jt,ve.relatedTarget=se,Re=null,zr(xe)===le&&(Ye=new Ye(te,W+"enter",$e,o,xe),Ye.target=se,Ye.relatedTarget=Jt,Re=Ye),Jt=Re,Be&&$e)t:{for(Ye=Be,te=$e,W=0,se=Ye;se;se=vs(se))W++;for(se=0,Re=te;Re;Re=vs(Re))se++;for(;0<W-se;)Ye=vs(Ye),W--;for(;0<se-W;)te=vs(te),se--;for(;W--;){if(Ye===te||te!==null&&Ye===te.alternate)break t;Ye=vs(Ye),te=vs(te)}Ye=null}else Ye=null;Be!==null&&Fh(Ee,ve,Be,Ye,!1),$e!==null&&Jt!==null&&Fh(Ee,Jt,$e,Ye,!0)}}e:{if(ve=le?Ss(le):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Ze=iv;else if(gh(ve))if(vh)Ze=ov;else{Ze=sv;var tt=rv}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=av);if(Ze&&(Ze=Ze(n,le))){_h(Ee,Ze,o,xe);break e}tt&&tt(n,ve,le),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&zn(ve,"number",ve.value)}switch(tt=le?Ss(le):window,n){case"focusin":(gh(tt)||tt.contentEditable==="true")&&(gs=tt,Lc=le,ya=null);break;case"focusout":ya=Lc=gs=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Rh(Ee,o,xe);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Rh(Ee,o,xe)}var nt;if(bc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ms?ph(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(fh&&o.locale!=="ko"&&(ms||at!=="onCompositionStart"?at==="onCompositionEnd"&&ms&&(nt=ah()):(ur=xe,Mc="value"in ur?ur.value:ur.textContent,ms=!0)),tt=Do(le,at),0<tt.length&&(at=new ch(at,n,null,o,xe),Ee.push({event:at,listeners:tt}),nt?at.data=nt:(nt=mh(o),nt!==null&&(at.data=nt)))),(nt=J_?Q_(n,o):ev(n,o))&&(le=Do(le,"onBeforeInput"),0<le.length&&(xe=new ch("onBeforeInput","beforeinput",null,o,xe),Ee.push({event:xe,listeners:le}),xe.data=nt))}Uh(Ee,r)})}function Ta(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Do(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,m=p.stateNode;p.tag===5&&m!==null&&(p=m,m=Se(n,o),m!=null&&u.unshift(Ta(n,m,p)),m=Se(n,r),m!=null&&u.push(Ta(n,m,p))),n=n.return}return u}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fh(n,r,o,u,p){for(var m=r._reactName,T=[];o!==null&&o!==u;){var O=o,H=O.alternate,le=O.stateNode;if(H!==null&&H===u)break;O.tag===5&&le!==null&&(O=le,p?(H=Se(o,m),H!=null&&T.unshift(Ta(o,H,O))):p||(H=Se(o,m),H!=null&&T.push(Ta(o,H,O)))),o=o.return}T.length!==0&&n.push({event:r,listeners:T})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function kh(n){return(typeof n=="string"?n:""+n).replace(pv,`
`).replace(mv,"")}function Lo(n,r,o){if(r=kh(r),kh(n)!==r&&o)throw Error(t(425))}function Io(){}var Bc=null,zc=null;function Hc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(n){return Bh.resolve(null).then(n).catch(vv)}:Gc;function vv(n){setTimeout(function(){throw n})}function Vc(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),pa(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);pa(r)}function dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function zh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Li="__reactFiber$"+xs,Ca="__reactProps$"+xs,Wi="__reactContainer$"+xs,Wc="__reactEvents$"+xs,xv="__reactListeners$"+xs,Sv="__reactHandles$"+xs;function zr(n){var r=n[Li];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Wi]||o[Li]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=zh(n);n!==null;){if(o=n[Li])return o;n=zh(n)}return r}n=o,o=n.parentNode}return null}function Ra(n){return n=n[Li]||n[Wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function No(n){return n[Ca]||null}var Xc=[],ys=-1;function hr(n){return{current:n}}function Bt(n){0>ys||(n.current=Xc[ys],Xc[ys]=null,ys--)}function Ft(n,r){ys++,Xc[ys]=n.current,n.current=r}var pr={},Cn=hr(pr),Hn=hr(!1),Hr=pr;function Ms(n,r){var o=n.type.contextTypes;if(!o)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},m;for(m in o)p[m]=r[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(n){return n=n.childContextTypes,n!=null}function Uo(){Bt(Hn),Bt(Cn)}function Hh(n,r,o){if(Cn.current!==pr)throw Error(t(168));Ft(Cn,r),Ft(Hn,o)}function Gh(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,Ue(n)||"Unknown",p));return Y({},o,u)}function Oo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Hr=Cn.current,Ft(Cn,n),Ft(Hn,Hn.current),!0}function Vh(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Gh(n,r,Hr),u.__reactInternalMemoizedMergedChildContext=n,Bt(Hn),Bt(Cn),Ft(Cn,n)):Bt(Hn),Ft(Hn,o)}var Xi=null,Fo=!1,$c=!1;function Wh(n){Xi===null?Xi=[n]:Xi.push(n)}function yv(n){Fo=!0,Wh(n)}function mr(){if(!$c&&Xi!==null){$c=!0;var n=0,r=je;try{var o=Xi;for(je=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Xi=null,Fo=!1}catch(p){throw Xi!==null&&(Xi=Xi.slice(n+1)),la(ua,mr),p}finally{je=r,$c=!1}}return null}var Es=[],Ts=0,ko=null,Bo=0,li=[],ci=0,Gr=null,$i=1,qi="";function Vr(n,r){Es[Ts++]=Bo,Es[Ts++]=ko,ko=n,Bo=r}function Xh(n,r,o){li[ci++]=$i,li[ci++]=qi,li[ci++]=Gr,Gr=n;var u=$i;n=qi;var p=32-Z(u)-1;u&=~(1<<p),o+=1;var m=32-Z(r)+p;if(30<m){var T=p-p%5;m=(u&(1<<T)-1).toString(32),u>>=T,p-=T,$i=1<<32-Z(r)+p|o<<p|u,qi=m+n}else $i=1<<m|o<<p|u,qi=n}function qc(n){n.return!==null&&(Vr(n,1),Xh(n,1,0))}function Yc(n){for(;n===ko;)ko=Es[--Ts],Es[Ts]=null,Bo=Es[--Ts],Es[Ts]=null;for(;n===Gr;)Gr=li[--ci],li[ci]=null,qi=li[--ci],li[ci]=null,$i=li[--ci],li[ci]=null}var ei=null,ti=null,Vt=!1,_i=null;function $h(n,r){var o=hi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function qh(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ei=n,ti=dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ei=n,ti=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Gr!==null?{id:$i,overflow:qi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=hi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(Vt){var r=ti;if(r){var o=r;if(!qh(n,r)){if(Kc(n))throw Error(t(418));r=dr(o.nextSibling);var u=ei;r&&qh(n,r)?$h(u,o):(n.flags=n.flags&-4097|2,Vt=!1,ei=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,ei=n}}}function Yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function zo(n){if(n!==ei)return!1;if(!Vt)return Yh(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Hc(n.type,n.memoizedProps)),r&&(r=ti)){if(Kc(n))throw Kh(),Error(t(418));for(;r;)$h(n,r),r=dr(r.nextSibling)}if(Yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ti=dr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ti=null}}else ti=ei?dr(n.stateNode.nextSibling):null;return!0}function Kh(){for(var n=ti;n;)n=dr(n.nextSibling)}function Cs(){ti=ei=null,Vt=!1}function Zc(n){_i===null?_i=[n]:_i.push(n)}var Mv=b.ReactCurrentBatchConfig;function Aa(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,m=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(T){var O=p.refs;T===null?delete O[m]:O[m]=T},r._stringRef=m,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ho(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function jh(n){var r=n._init;return r(n._payload)}function Zh(n){function r(te,W){if(n){var se=te.deletions;se===null?(te.deletions=[W],te.flags|=16):se.push(W)}}function o(te,W){if(!n)return null;for(;W!==null;)r(te,W),W=W.sibling;return null}function u(te,W){for(te=new Map;W!==null;)W.key!==null?te.set(W.key,W):te.set(W.index,W),W=W.sibling;return te}function p(te,W){return te=Er(te,W),te.index=0,te.sibling=null,te}function m(te,W,se){return te.index=se,n?(se=te.alternate,se!==null?(se=se.index,se<W?(te.flags|=2,W):se):(te.flags|=2,W)):(te.flags|=1048576,W)}function T(te){return n&&te.alternate===null&&(te.flags|=2),te}function O(te,W,se,Re){return W===null||W.tag!==6?(W=Gu(se,te.mode,Re),W.return=te,W):(W=p(W,se),W.return=te,W)}function H(te,W,se,Re){var Ze=se.type;return Ze===M?xe(te,W,se.props.children,Re,se.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ce&&jh(Ze)===W.type)?(Re=p(W,se.props),Re.ref=Aa(te,W,se),Re.return=te,Re):(Re=fl(se.type,se.key,se.props,null,te.mode,Re),Re.ref=Aa(te,W,se),Re.return=te,Re)}function le(te,W,se,Re){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Vu(se,te.mode,Re),W.return=te,W):(W=p(W,se.children||[]),W.return=te,W)}function xe(te,W,se,Re,Ze){return W===null||W.tag!==7?(W=Zr(se,te.mode,Re,Ze),W.return=te,W):(W=p(W,se),W.return=te,W)}function Ee(te,W,se){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Gu(""+W,te.mode,se),W.return=te,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return se=fl(W.type,W.key,W.props,null,te.mode,se),se.ref=Aa(te,null,W),se.return=te,se;case w:return W=Vu(W,te.mode,se),W.return=te,W;case ce:var Re=W._init;return Ee(te,Re(W._payload),se)}if(zt(W)||V(W))return W=Zr(W,te.mode,se,null),W.return=te,W;Ho(te,W)}return null}function ve(te,W,se,Re){var Ze=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ze!==null?null:O(te,W,""+se,Re);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case U:return se.key===Ze?H(te,W,se,Re):null;case w:return se.key===Ze?le(te,W,se,Re):null;case ce:return Ze=se._init,ve(te,W,Ze(se._payload),Re)}if(zt(se)||V(se))return Ze!==null?null:xe(te,W,se,Re,null);Ho(te,se)}return null}function Be(te,W,se,Re,Ze){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return te=te.get(se)||null,O(W,te,""+Re,Ze);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case U:return te=te.get(Re.key===null?se:Re.key)||null,H(W,te,Re,Ze);case w:return te=te.get(Re.key===null?se:Re.key)||null,le(W,te,Re,Ze);case ce:var tt=Re._init;return Be(te,W,se,tt(Re._payload),Ze)}if(zt(Re)||V(Re))return te=te.get(se)||null,xe(W,te,Re,Ze,null);Ho(W,Re)}return null}function $e(te,W,se,Re){for(var Ze=null,tt=null,nt=W,at=W=0,gn=null;nt!==null&&at<se.length;at++){nt.index>at?(gn=nt,nt=null):gn=nt.sibling;var At=ve(te,nt,se[at],Re);if(At===null){nt===null&&(nt=gn);break}n&&nt&&At.alternate===null&&r(te,nt),W=m(At,W,at),tt===null?Ze=At:tt.sibling=At,tt=At,nt=gn}if(at===se.length)return o(te,nt),Vt&&Vr(te,at),Ze;if(nt===null){for(;at<se.length;at++)nt=Ee(te,se[at],Re),nt!==null&&(W=m(nt,W,at),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Vt&&Vr(te,at),Ze}for(nt=u(te,nt);at<se.length;at++)gn=Be(nt,te,at,se[at],Re),gn!==null&&(n&&gn.alternate!==null&&nt.delete(gn.key===null?at:gn.key),W=m(gn,W,at),tt===null?Ze=gn:tt.sibling=gn,tt=gn);return n&&nt.forEach(function(Tr){return r(te,Tr)}),Vt&&Vr(te,at),Ze}function Ye(te,W,se,Re){var Ze=V(se);if(typeof Ze!="function")throw Error(t(150));if(se=Ze.call(se),se==null)throw Error(t(151));for(var tt=Ze=null,nt=W,at=W=0,gn=null,At=se.next();nt!==null&&!At.done;at++,At=se.next()){nt.index>at?(gn=nt,nt=null):gn=nt.sibling;var Tr=ve(te,nt,At.value,Re);if(Tr===null){nt===null&&(nt=gn);break}n&&nt&&Tr.alternate===null&&r(te,nt),W=m(Tr,W,at),tt===null?Ze=Tr:tt.sibling=Tr,tt=Tr,nt=gn}if(At.done)return o(te,nt),Vt&&Vr(te,at),Ze;if(nt===null){for(;!At.done;at++,At=se.next())At=Ee(te,At.value,Re),At!==null&&(W=m(At,W,at),tt===null?Ze=At:tt.sibling=At,tt=At);return Vt&&Vr(te,at),Ze}for(nt=u(te,nt);!At.done;at++,At=se.next())At=Be(nt,te,at,At.value,Re),At!==null&&(n&&At.alternate!==null&&nt.delete(At.key===null?at:At.key),W=m(At,W,at),tt===null?Ze=At:tt.sibling=At,tt=At);return n&&nt.forEach(function(tx){return r(te,tx)}),Vt&&Vr(te,at),Ze}function Jt(te,W,se,Re){if(typeof se=="object"&&se!==null&&se.type===M&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case U:e:{for(var Ze=se.key,tt=W;tt!==null;){if(tt.key===Ze){if(Ze=se.type,Ze===M){if(tt.tag===7){o(te,tt.sibling),W=p(tt,se.props.children),W.return=te,te=W;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ce&&jh(Ze)===tt.type){o(te,tt.sibling),W=p(tt,se.props),W.ref=Aa(te,tt,se),W.return=te,te=W;break e}o(te,tt);break}else r(te,tt);tt=tt.sibling}se.type===M?(W=Zr(se.props.children,te.mode,Re,se.key),W.return=te,te=W):(Re=fl(se.type,se.key,se.props,null,te.mode,Re),Re.ref=Aa(te,W,se),Re.return=te,te=Re)}return T(te);case w:e:{for(tt=se.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){o(te,W.sibling),W=p(W,se.children||[]),W.return=te,te=W;break e}else{o(te,W);break}else r(te,W);W=W.sibling}W=Vu(se,te.mode,Re),W.return=te,te=W}return T(te);case ce:return tt=se._init,Jt(te,W,tt(se._payload),Re)}if(zt(se))return $e(te,W,se,Re);if(V(se))return Ye(te,W,se,Re);Ho(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,W!==null&&W.tag===6?(o(te,W.sibling),W=p(W,se),W.return=te,te=W):(o(te,W),W=Gu(se,te.mode,Re),W.return=te,te=W),T(te)):o(te,W)}return Jt}var Rs=Zh(!0),Jh=Zh(!1),Go=hr(null),Vo=null,As=null,Jc=null;function Qc(){Jc=As=Vo=null}function eu(n){var r=Go.current;Bt(Go),n._currentValue=r}function tu(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function bs(n,r){Vo=n,Jc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Vn=!0),n.firstContext=null)}function ui(n){var r=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:r,next:null},As===null){if(Vo===null)throw Error(t(308));As=n,Vo.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return r}var Wr=null;function nu(n){Wr===null?Wr=[n]:Wr.push(n)}function Qh(n,r,o,u){var p=r.interleaved;return p===null?(o.next=o,nu(r)):(o.next=p.next,p.next=o),r.interleaved=o,Yi(n,u)}function Yi(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var gr=!1;function iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ep(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function _r(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Yi(n,o)}return p=u.interleaved,p===null?(r.next=r,nu(u)):(r.next=p.next,p.next=r),u.interleaved=r,Yi(n,o)}function Wo(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,an(n,o)}}function tp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?p=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?p=m=r:m=m.next=r}else p=m=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Xo(n,r,o,u){var p=n.updateQueue;gr=!1;var m=p.firstBaseUpdate,T=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var H=O,le=H.next;H.next=null,T===null?m=le:T.next=le,T=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,O=xe.lastBaseUpdate,O!==T&&(O===null?xe.firstBaseUpdate=le:O.next=le,xe.lastBaseUpdate=H))}if(m!==null){var Ee=p.baseState;T=0,xe=le=H=null,O=m;do{var ve=O.lane,Be=O.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var $e=n,Ye=O;switch(ve=r,Be=o,Ye.tag){case 1:if($e=Ye.payload,typeof $e=="function"){Ee=$e.call(Be,Ee,ve);break e}Ee=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ye.payload,ve=typeof $e=="function"?$e.call(Be,Ee,ve):$e,ve==null)break e;Ee=Y({},Ee,ve);break e;case 2:gr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[O]:ve.push(O))}else Be={eventTime:Be,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},xe===null?(le=xe=Be,H=Ee):xe=xe.next=Be,T|=ve;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(xe===null&&(H=Ee),p.baseState=H,p.firstBaseUpdate=le,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else m===null&&(p.shared.lanes=0);qr|=T,n.lanes=T,n.memoizedState=Ee}}function np(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ba={},Ii=hr(ba),wa=hr(ba),Pa=hr(ba);function Xr(n){if(n===ba)throw Error(t(174));return n}function ru(n,r){switch(Ft(Pa,r),Ft(wa,n),Ft(Ii,ba),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Lt(r,n)}Bt(Ii),Ft(Ii,r)}function ws(){Bt(Ii),Bt(wa),Bt(Pa)}function ip(n){Xr(Pa.current);var r=Xr(Ii.current),o=Lt(r,n.type);r!==o&&(Ft(wa,n),Ft(Ii,o))}function su(n){wa.current===n&&(Bt(Ii),Bt(wa))}var Xt=hr(0);function $o(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var au=[];function ou(){for(var n=0;n<au.length;n++)au[n]._workInProgressVersionPrimary=null;au.length=0}var qo=b.ReactCurrentDispatcher,lu=b.ReactCurrentBatchConfig,$r=0,$t=null,ln=null,pn=null,Yo=!1,Da=!1,La=0,Ev=0;function Rn(){throw Error(t(321))}function cu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!gi(n[o],r[o]))return!1;return!0}function uu(n,r,o,u,p,m){if($r=m,$t=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,qo.current=n===null||n.memoizedState===null?Av:bv,n=o(u,p),Da){m=0;do{if(Da=!1,La=0,25<=m)throw Error(t(301));m+=1,pn=ln=null,r.updateQueue=null,qo.current=wv,n=o(u,p)}while(Da)}if(qo.current=Zo,r=ln!==null&&ln.next!==null,$r=0,pn=ln=$t=null,Yo=!1,r)throw Error(t(300));return n}function fu(){var n=La!==0;return La=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?$t.memoizedState=pn=n:pn=pn.next=n,pn}function fi(){if(ln===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var r=pn===null?$t.memoizedState:pn.next;if(r!==null)pn=r,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},pn===null?$t.memoizedState=pn=n:pn=pn.next=n}return pn}function Ia(n,r){return typeof r=="function"?r(n):r}function du(n){var r=fi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=ln,p=u.baseQueue,m=o.pending;if(m!==null){if(p!==null){var T=p.next;p.next=m.next,m.next=T}u.baseQueue=p=m,o.pending=null}if(p!==null){m=p.next,u=u.baseState;var O=T=null,H=null,le=m;do{var xe=le.lane;if(($r&xe)===xe)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:n(u,le.action);else{var Ee={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(O=H=Ee,T=u):H=H.next=Ee,$t.lanes|=xe,qr|=xe}le=le.next}while(le!==null&&le!==m);H===null?T=u:H.next=O,gi(u,r.memoizedState)||(Vn=!0),r.memoizedState=u,r.baseState=T,r.baseQueue=H,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do m=p.lane,$t.lanes|=m,qr|=m,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function hu(n){var r=fi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,m=r.memoizedState;if(p!==null){o.pending=null;var T=p=p.next;do m=n(m,T.action),T=T.next;while(T!==p);gi(m,r.memoizedState)||(Vn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function rp(){}function sp(n,r){var o=$t,u=fi(),p=r(),m=!gi(u.memoizedState,p);if(m&&(u.memoizedState=p,Vn=!0),u=u.queue,pu(lp.bind(null,o,u,n),[n]),u.getSnapshot!==r||m||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,Na(9,op.bind(null,o,u,p,r),void 0,null),mn===null)throw Error(t(349));($r&30)!==0||ap(o,r,p)}return p}function ap(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=$t.updateQueue,r===null?(r={lastEffect:null,stores:null},$t.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function op(n,r,o,u){r.value=o,r.getSnapshot=u,cp(r)&&up(n)}function lp(n,r,o){return o(function(){cp(r)&&up(n)})}function cp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!gi(n,o)}catch{return!0}}function up(n){var r=Yi(n,1);r!==null&&yi(r,n,1,-1)}function fp(n){var r=Ni();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},r.queue=n,n=n.dispatch=Rv.bind(null,$t,n),[r.memoizedState,n]}function Na(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=$t.updateQueue,r===null?(r={lastEffect:null,stores:null},$t.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function dp(){return fi().memoizedState}function Ko(n,r,o,u){var p=Ni();$t.flags|=n,p.memoizedState=Na(1|r,o,void 0,u===void 0?null:u)}function jo(n,r,o,u){var p=fi();u=u===void 0?null:u;var m=void 0;if(ln!==null){var T=ln.memoizedState;if(m=T.destroy,u!==null&&cu(u,T.deps)){p.memoizedState=Na(r,o,m,u);return}}$t.flags|=n,p.memoizedState=Na(1|r,o,m,u)}function hp(n,r){return Ko(8390656,8,n,r)}function pu(n,r){return jo(2048,8,n,r)}function pp(n,r){return jo(4,2,n,r)}function mp(n,r){return jo(4,4,n,r)}function gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function _p(n,r,o){return o=o!=null?o.concat([n]):null,jo(4,4,gp.bind(null,r,n),o)}function mu(){}function vp(n,r){var o=fi();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&cu(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function xp(n,r){var o=fi();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&cu(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Sp(n,r,o){return($r&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=o):(gi(o,r)||(o=Pt(),$t.lanes|=o,qr|=o,n.baseState=!0),r)}function Tv(n,r){var o=je;je=o!==0&&4>o?o:4,n(!0);var u=lu.transition;lu.transition={};try{n(!1),r()}finally{je=o,lu.transition=u}}function yp(){return fi().memoizedState}function Cv(n,r,o){var u=yr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Mp(n))Ep(r,o);else if(o=Qh(n,r,o,u),o!==null){var p=Fn();yi(o,n,u,p),Tp(o,r,u)}}function Rv(n,r,o){var u=yr(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mp(n))Ep(r,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,O=m(T,o);if(p.hasEagerState=!0,p.eagerState=O,gi(O,T)){var H=r.interleaved;H===null?(p.next=p,nu(r)):(p.next=H.next,H.next=p),r.interleaved=p;return}}catch{}finally{}o=Qh(n,r,p,u),o!==null&&(p=Fn(),yi(o,n,u,p),Tp(o,r,u))}}function Mp(n){var r=n.alternate;return n===$t||r!==null&&r===$t}function Ep(n,r){Da=Yo=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Tp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,an(n,o)}}var Zo={readContext:ui,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Av={readContext:ui,useCallback:function(n,r){return Ni().memoizedState=[n,r===void 0?null:r],n},useContext:ui,useEffect:hp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Ko(4194308,4,gp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Ko(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ko(4,2,n,r)},useMemo:function(n,r){var o=Ni();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Ni();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Cv.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var r=Ni();return n={current:n},r.memoizedState=n},useState:fp,useDebugValue:mu,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=fp(!1),r=n[0];return n=Tv.bind(null,n[1]),Ni().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=$t,p=Ni();if(Vt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),mn===null)throw Error(t(349));($r&30)!==0||ap(u,r,o)}p.memoizedState=o;var m={value:o,getSnapshot:r};return p.queue=m,hp(lp.bind(null,u,m,n),[n]),u.flags|=2048,Na(9,op.bind(null,u,m,o,r),void 0,null),o},useId:function(){var n=Ni(),r=mn.identifierPrefix;if(Vt){var o=qi,u=$i;o=(u&~(1<<32-Z(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=La++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Ev++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},bv={readContext:ui,useCallback:vp,useContext:ui,useEffect:pu,useImperativeHandle:_p,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:xp,useReducer:du,useRef:dp,useState:function(){return du(Ia)},useDebugValue:mu,useDeferredValue:function(n){var r=fi();return Sp(r,ln.memoizedState,n)},useTransition:function(){var n=du(Ia)[0],r=fi().memoizedState;return[n,r]},useMutableSource:rp,useSyncExternalStore:sp,useId:yp,unstable_isNewReconciler:!1},wv={readContext:ui,useCallback:vp,useContext:ui,useEffect:pu,useImperativeHandle:_p,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:xp,useReducer:hu,useRef:dp,useState:function(){return hu(Ia)},useDebugValue:mu,useDeferredValue:function(n){var r=fi();return ln===null?r.memoizedState=n:Sp(r,ln.memoizedState,n)},useTransition:function(){var n=hu(Ia)[0],r=fi().memoizedState;return[n,r]},useMutableSource:rp,useSyncExternalStore:sp,useId:yp,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=Y({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function gu(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:Y({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Jo={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Fn(),p=yr(n),m=Ki(u,p);m.payload=r,o!=null&&(m.callback=o),r=_r(n,m,p),r!==null&&(yi(r,n,p,u),Wo(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Fn(),p=yr(n),m=Ki(u,p);m.tag=1,m.payload=r,o!=null&&(m.callback=o),r=_r(n,m,p),r!==null&&(yi(r,n,p,u),Wo(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Fn(),u=yr(n),p=Ki(o,u);p.tag=2,r!=null&&(p.callback=r),r=_r(n,p,u),r!==null&&(yi(r,n,u,o),Wo(r,n,u))}};function Cp(n,r,o,u,p,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):r.prototype&&r.prototype.isPureReactComponent?!Sa(o,u)||!Sa(p,m):!0}function Rp(n,r,o){var u=!1,p=pr,m=r.contextType;return typeof m=="object"&&m!==null?m=ui(m):(p=Gn(r)?Hr:Cn.current,u=r.contextTypes,m=(u=u!=null)?Ms(n,p):pr),r=new r(o,m),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jo,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=m),r}function Ap(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&Jo.enqueueReplaceState(r,r.state,null)}function _u(n,r,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},iu(n);var m=r.contextType;typeof m=="object"&&m!==null?p.context=ui(m):(m=Gn(r)?Hr:Cn.current,p.context=Ms(n,m)),p.state=n.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(gu(n,r,m,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Jo.enqueueReplaceState(p,p.state,null),Xo(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,r){try{var o="",u=r;do o+=ge(u),u=u.return;while(u);var p=o}catch(m){p=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:r,stack:p,digest:null}}function vu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function xu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Pv=typeof WeakMap=="function"?WeakMap:Map;function bp(n,r,o){o=Ki(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){sl||(sl=!0,Nu=u),xu(n,r)},o}function wp(n,r,o){o=Ki(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;o.payload=function(){return u(p)},o.callback=function(){xu(n,r)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){xu(n,r),typeof u!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),o}function Pp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Pv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(p.add(o),n=Wv.bind(null,n,r,o),r.then(n,n))}function Dp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Lp(n,r,o,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Ki(-1,1),r.tag=2,_r(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Dv=b.ReactCurrentOwner,Vn=!1;function On(n,r,o,u){r.child=n===null?Jh(r,null,o,u):Rs(r,n.child,o,u)}function Ip(n,r,o,u,p){o=o.render;var m=r.ref;return bs(r,p),u=uu(n,r,o,u,m,p),o=fu(),n!==null&&!Vn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ji(n,r,p)):(Vt&&o&&qc(r),r.flags|=1,On(n,r,u,p),r.child)}function Np(n,r,o,u,p){if(n===null){var m=o.type;return typeof m=="function"&&!Hu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=m,Up(n,r,m,u,p)):(n=fl(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,(n.lanes&p)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:Sa,o(T,u)&&n.ref===r.ref)return ji(n,r,p)}return r.flags|=1,n=Er(m,u),n.ref=r.ref,n.return=r,r.child=n}function Up(n,r,o,u,p){if(n!==null){var m=n.memoizedProps;if(Sa(m,u)&&n.ref===r.ref)if(Vn=!1,r.pendingProps=u=m,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Vn=!0);else return r.lanes=n.lanes,ji(n,r,p)}return Su(n,r,o,u,p)}function Op(n,r,o){var u=r.pendingProps,p=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ls,ni),ni|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ft(Ls,ni),ni|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ft(Ls,ni),ni|=u}else m!==null?(u=m.baseLanes|o,r.memoizedState=null):u=o,Ft(Ls,ni),ni|=u;return On(n,r,p,o),r.child}function Fp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Su(n,r,o,u,p){var m=Gn(o)?Hr:Cn.current;return m=Ms(r,m),bs(r,p),o=uu(n,r,o,u,m,p),u=fu(),n!==null&&!Vn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ji(n,r,p)):(Vt&&u&&qc(r),r.flags|=1,On(n,r,o,p),r.child)}function kp(n,r,o,u,p){if(Gn(o)){var m=!0;Oo(r)}else m=!1;if(bs(r,p),r.stateNode===null)el(n,r),Rp(r,o,u),_u(r,o,u,p),u=!0;else if(n===null){var T=r.stateNode,O=r.memoizedProps;T.props=O;var H=T.context,le=o.contextType;typeof le=="object"&&le!==null?le=ui(le):(le=Gn(o)?Hr:Cn.current,le=Ms(r,le));var xe=o.getDerivedStateFromProps,Ee=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==u||H!==le)&&Ap(r,T,u,le),gr=!1;var ve=r.memoizedState;T.state=ve,Xo(r,u,T,p),H=r.memoizedState,O!==u||ve!==H||Hn.current||gr?(typeof xe=="function"&&(gu(r,o,xe,u),H=r.memoizedState),(O=gr||Cp(r,o,O,u,ve,H,le))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),T.props=u,T.state=H,T.context=le,u=O):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{T=r.stateNode,ep(n,r),O=r.memoizedProps,le=r.type===r.elementType?O:vi(r.type,O),T.props=le,Ee=r.pendingProps,ve=T.context,H=o.contextType,typeof H=="object"&&H!==null?H=ui(H):(H=Gn(o)?Hr:Cn.current,H=Ms(r,H));var Be=o.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Ee||ve!==H)&&Ap(r,T,u,H),gr=!1,ve=r.memoizedState,T.state=ve,Xo(r,u,T,p);var $e=r.memoizedState;O!==Ee||ve!==$e||Hn.current||gr?(typeof Be=="function"&&(gu(r,o,Be,u),$e=r.memoizedState),(le=gr||Cp(r,o,le,u,ve,$e,H)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,$e,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,$e,H)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=$e),T.props=u,T.state=$e,T.context=H,u=le):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return yu(n,r,o,u,m,p)}function yu(n,r,o,u,p,m){Fp(n,r);var T=(r.flags&128)!==0;if(!u&&!T)return p&&Vh(r,o,!1),ji(n,r,m);u=r.stateNode,Dv.current=r;var O=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&T?(r.child=Rs(r,n.child,null,m),r.child=Rs(r,null,O,m)):On(n,r,O,m),r.memoizedState=u.state,p&&Vh(r,o,!0),r.child}function Bp(n){var r=n.stateNode;r.pendingContext?Hh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Hh(n,r.context,!1),ru(n,r.containerInfo)}function zp(n,r,o,u,p){return Cs(),Zc(p),r.flags|=256,On(n,r,o,u),r.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Hp(n,r,o){var u=r.pendingProps,p=Xt.current,m=!1,T=(r.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(m=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ft(Xt,p&1),n===null)return jc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=u.children,n=u.fallback,m?(u=r.mode,m=r.child,T={mode:"hidden",children:T},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=dl(T,u,0,null),n=Zr(n,u,o,null),m.return=r,n.return=r,m.sibling=n,r.child=m,r.child.memoizedState=Eu(o),r.memoizedState=Mu,n):Tu(r,T));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return Lv(n,r,T,u,O,p,o);if(m){m=u.fallback,T=r.mode,p=n.child,O=p.sibling;var H={mode:"hidden",children:u.children};return(T&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=H,r.deletions=null):(u=Er(p,H),u.subtreeFlags=p.subtreeFlags&14680064),O!==null?m=Er(O,m):(m=Zr(m,T,o,null),m.flags|=2),m.return=r,u.return=r,u.sibling=m,r.child=u,u=m,m=r.child,T=n.child.memoizedState,T=T===null?Eu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,r.memoizedState=Mu,u}return m=n.child,n=m.sibling,u=Er(m,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Tu(n,r){return r=dl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Qo(n,r,o,u){return u!==null&&Zc(u),Rs(r,n.child,null,o),n=Tu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Lv(n,r,o,u,p,m,T){if(o)return r.flags&256?(r.flags&=-257,u=vu(Error(t(422))),Qo(n,r,T,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(m=u.fallback,p=r.mode,u=dl({mode:"visible",children:u.children},p,0,null),m=Zr(m,p,T,null),m.flags|=2,u.return=r,m.return=r,u.sibling=m,r.child=u,(r.mode&1)!==0&&Rs(r,n.child,null,T),r.child.memoizedState=Eu(T),r.memoizedState=Mu,m);if((r.mode&1)===0)return Qo(n,r,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var O=u.dgst;return u=O,m=Error(t(419)),u=vu(m,u,void 0),Qo(n,r,T,u)}if(O=(T&n.childLanes)!==0,Vn||O){if(u=mn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==m.retryLane&&(m.retryLane=p,Yi(n,p),yi(u,n,p,-1))}return zu(),u=vu(Error(t(421))),Qo(n,r,T,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Xv.bind(null,n),p._reactRetry=r,null):(n=m.treeContext,ti=dr(p.nextSibling),ei=r,Vt=!0,_i=null,n!==null&&(li[ci++]=$i,li[ci++]=qi,li[ci++]=Gr,$i=n.id,qi=n.overflow,Gr=r),r=Tu(r,u.children),r.flags|=4096,r)}function Gp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),tu(n.return,r,o)}function Cu(n,r,o,u,p){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=p)}function Vp(n,r,o){var u=r.pendingProps,p=u.revealOrder,m=u.tail;if(On(n,r,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gp(n,o,r);else if(n.tag===19)Gp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Xt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&$o(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Cu(r,!1,p,o,m);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&$o(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Cu(r,!0,o,null,m);break;case"together":Cu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function el(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ji(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),qr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Er(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Er(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Iv(n,r,o){switch(r.tag){case 3:Bp(r),Cs();break;case 5:ip(r);break;case 1:Gn(r.type)&&Oo(r);break;case 4:ru(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Ft(Go,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Xt,Xt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Hp(n,r,o):(Ft(Xt,Xt.current&1),n=ji(n,r,o),n!==null?n.sibling:null);Ft(Xt,Xt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Vp(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ft(Xt,Xt.current),u)break;return null;case 22:case 23:return r.lanes=0,Op(n,r,o)}return ji(n,r,o)}var Wp,Ru,Xp,$p;Wp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ru=function(){},Xp=function(n,r,o,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Xr(Ii.current);var m=null;switch(o){case"input":p=dt(n,p),u=dt(n,u),m=[];break;case"select":p=Y({},p,{value:void 0}),u=Y({},u,{value:void 0}),m=[];break;case"textarea":p=En(n,p),u=En(n,u),m=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Io)}pe(o,u);var T;o=null;for(le in p)if(!u.hasOwnProperty(le)&&p.hasOwnProperty(le)&&p[le]!=null)if(le==="style"){var O=p[le];for(T in O)O.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?m||(m=[]):(m=m||[]).push(le,null));for(le in u){var H=u[le];if(O=p?.[le],u.hasOwnProperty(le)&&H!==O&&(H!=null||O!=null))if(le==="style")if(O){for(T in O)!O.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in H)H.hasOwnProperty(T)&&O[T]!==H[T]&&(o||(o={}),o[T]=H[T])}else o||(m||(m=[]),m.push(le,o)),o=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(m=m||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&kt("scroll",n),m||O===H||(m=[])):(m=m||[]).push(le,H))}o&&(m=m||[]).push("style",o);var le=m;(r.updateQueue=le)&&(r.flags|=4)}},$p=function(n,r,o,u){o!==u&&(r.flags|=4)};function Ua(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function Nv(n,r,o){var u=r.pendingProps;switch(Yc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return Gn(r.type)&&Uo(),An(r),null;case 3:return u=r.stateNode,ws(),Bt(Hn),Bt(Cn),ou(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(zo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,_i!==null&&(Fu(_i),_i=null))),Ru(n,r),An(r),null;case 5:su(r);var p=Xr(Pa.current);if(o=r.type,n!==null&&r.stateNode!=null)Xp(n,r,o,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return An(r),null}if(n=Xr(Ii.current),zo(r)){u=r.stateNode,o=r.type;var m=r.memoizedProps;switch(u[Li]=r,u[Ca]=m,n=(r.mode&1)!==0,o){case"dialog":kt("cancel",u),kt("close",u);break;case"iframe":case"object":case"embed":kt("load",u);break;case"video":case"audio":for(p=0;p<Ma.length;p++)kt(Ma[p],u);break;case"source":kt("error",u);break;case"img":case"image":case"link":kt("error",u),kt("load",u);break;case"details":kt("toggle",u);break;case"input":en(u,m),kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},kt("invalid",u);break;case"textarea":Nn(u,m),kt("invalid",u)}pe(o,m),p=null;for(var T in m)if(m.hasOwnProperty(T)){var O=m[T];T==="children"?typeof O=="string"?u.textContent!==O&&(m.suppressHydrationWarning!==!0&&Lo(u.textContent,O,n),p=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&Lo(u.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&kt("scroll",u)}switch(o){case"input":et(u),Ot(u,m,!0);break;case"textarea":et(u),Un(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Io)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=It(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[Li]=r,n[Ca]=u,Wp(n,r,!1,!1),r.stateNode=n;e:{switch(T=Ae(o,u),o){case"dialog":kt("cancel",n),kt("close",n),p=u;break;case"iframe":case"object":case"embed":kt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Ma.length;p++)kt(Ma[p],n);p=u;break;case"source":kt("error",n),p=u;break;case"img":case"image":case"link":kt("error",n),kt("load",n),p=u;break;case"details":kt("toggle",n),p=u;break;case"input":en(n,u),p=dt(n,u),kt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=Y({},u,{value:void 0}),kt("invalid",n);break;case"textarea":Nn(n,u),p=En(n,u),kt("invalid",n);break;default:p=u}pe(o,p),O=p;for(m in O)if(O.hasOwnProperty(m)){var H=O[m];m==="style"?ee(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Yt(n,H)):m==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Qe(n,H):typeof H=="number"&&Qe(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?H!=null&&m==="onScroll"&&kt("scroll",n):H!=null&&N(n,m,H,T))}switch(o){case"input":et(n),Ot(n,u,!1);break;case"textarea":et(n),Un(n);break;case"option":u.value!=null&&n.setAttribute("value",""+_e(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?sn(n,!!u.multiple,m,!1):u.defaultValue!=null&&sn(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Io)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return An(r),null;case 6:if(n&&r.stateNode!=null)$p(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=Xr(Pa.current),Xr(Ii.current),zo(r)){if(u=r.stateNode,o=r.memoizedProps,u[Li]=r,(m=u.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:Lo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(u.nodeValue,o,(n.mode&1)!==0)}m&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Li]=r,r.stateNode=u}return An(r),null;case 13:if(Bt(Xt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&ti!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Kh(),Cs(),r.flags|=98560,m=!1;else if(m=zo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Li]=r}else Cs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),m=!1}else _i!==null&&(Fu(_i),_i=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xt.current&1)!==0?cn===0&&(cn=3):zu())),r.updateQueue!==null&&(r.flags|=4),An(r),null);case 4:return ws(),Ru(n,r),n===null&&Ea(r.stateNode.containerInfo),An(r),null;case 10:return eu(r.type._context),An(r),null;case 17:return Gn(r.type)&&Uo(),An(r),null;case 19:if(Bt(Xt),m=r.memoizedState,m===null)return An(r),null;if(u=(r.flags&128)!==0,T=m.rendering,T===null)if(u)Ua(m,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=$o(n),T!==null){for(r.flags|=128,Ua(m,!1),u=T.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)m=o,n=u,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Xt,Xt.current&1|2),r.child}n=n.sibling}m.tail!==null&&Ht()>Is&&(r.flags|=128,u=!0,Ua(m,!1),r.lanes=4194304)}else{if(!u)if(n=$o(T),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ua(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return An(r),null}else 2*Ht()-m.renderingStartTime>Is&&o!==1073741824&&(r.flags|=128,u=!0,Ua(m,!1),r.lanes=4194304);m.isBackwards?(T.sibling=r.child,r.child=T):(o=m.last,o!==null?o.sibling=T:r.child=T,m.last=T)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=Ht(),r.sibling=null,o=Xt.current,Ft(Xt,u?o&1|2:o&1),r):(An(r),null);case 22:case 23:return Bu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(ni&1073741824)!==0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Uv(n,r){switch(Yc(r),r.tag){case 1:return Gn(r.type)&&Uo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ws(),Bt(Hn),Bt(Cn),ou(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return su(r),null;case 13:if(Bt(Xt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Cs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Bt(Xt),null;case 4:return ws(),null;case 10:return eu(r.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var tl=!1,bn=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ds(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){jt(n,r,u)}else o.current=null}function Au(n,r,o){try{o()}catch(u){jt(n,r,u)}}var qp=!1;function Fv(n,r){if(Bc=yo,n=Ch(),Dc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,O=-1,H=-1,le=0,xe=0,Ee=n,ve=null;t:for(;;){for(var Be;Ee!==o||p!==0&&Ee.nodeType!==3||(O=T+p),Ee!==m||u!==0&&Ee.nodeType!==3||(H=T+u),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)ve=Ee,Ee=Be;for(;;){if(Ee===n)break t;if(ve===o&&++le===p&&(O=T),ve===m&&++xe===u&&(H=T),(Be=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Be}o=O===-1||H===-1?null:{start:O,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(zc={focusedElem:n,selectionRange:o},yo=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var $e=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ye=$e.memoizedProps,Jt=$e.memoizedState,te=r.stateNode,W=te.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:vi(r.type,Ye),Jt);te.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var se=r.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){jt(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return $e=qp,qp=!1,$e}function Oa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var m=p.destroy;p.destroy=void 0,m!==void 0&&Au(r,o,m)}p=p.next}while(p!==u)}}function nl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function bu(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Yp(n){var r=n.alternate;r!==null&&(n.alternate=null,Yp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Li],delete r[Ca],delete r[Wc],delete r[xv],delete r[Sv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Kp(n){return n.tag===5||n.tag===3||n.tag===4}function jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Io));else if(u!==4&&(n=n.child,n!==null))for(wu(n,r,o),n=n.sibling;n!==null;)wu(n,r,o),n=n.sibling}function Pu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Pu(n,r,o),n=n.sibling;n!==null;)Pu(n,r,o),n=n.sibling}var Sn=null,xi=!1;function vr(n,r,o){for(o=o.child;o!==null;)Zp(n,r,o),o=o.sibling}function Zp(n,r,o){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(B,o)}catch{}switch(o.tag){case 5:bn||Ds(o,r);case 6:var u=Sn,p=xi;Sn=null,vr(n,r,o),Sn=u,xi=p,Sn!==null&&(xi?(n=Sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Sn.removeChild(o.stateNode));break;case 18:Sn!==null&&(xi?(n=Sn,o=o.stateNode,n.nodeType===8?Vc(n.parentNode,o):n.nodeType===1&&Vc(n,o),pa(n)):Vc(Sn,o.stateNode));break;case 4:u=Sn,p=xi,Sn=o.stateNode.containerInfo,xi=!0,vr(n,r,o),Sn=u,xi=p;break;case 0:case 11:case 14:case 15:if(!bn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var m=p,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Au(o,r,T),p=p.next}while(p!==u)}vr(n,r,o);break;case 1:if(!bn&&(Ds(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(O){jt(o,r,O)}vr(n,r,o);break;case 21:vr(n,r,o);break;case 22:o.mode&1?(bn=(u=bn)||o.memoizedState!==null,vr(n,r,o),bn=u):vr(n,r,o);break;default:vr(n,r,o)}}function Jp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Ov),r.forEach(function(u){var p=$v.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function Si(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var m=n,T=r,O=T;e:for(;O!==null;){switch(O.tag){case 5:Sn=O.stateNode,xi=!1;break e;case 3:Sn=O.stateNode.containerInfo,xi=!0;break e;case 4:Sn=O.stateNode.containerInfo,xi=!0;break e}O=O.return}if(Sn===null)throw Error(t(160));Zp(m,T,p),Sn=null,xi=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(le){jt(p,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Qp(r,n),r=r.sibling}function Qp(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(r,n),Ui(n),u&4){try{Oa(3,n,n.return),nl(3,n)}catch(Ye){jt(n,n.return,Ye)}try{Oa(5,n,n.return)}catch(Ye){jt(n,n.return,Ye)}}break;case 1:Si(r,n),Ui(n),u&512&&o!==null&&Ds(o,o.return);break;case 5:if(Si(r,n),Ui(n),u&512&&o!==null&&Ds(o,o.return),n.flags&32){var p=n.stateNode;try{Qe(p,"")}catch(Ye){jt(n,n.return,Ye)}}if(u&4&&(p=n.stateNode,p!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&qt(p,m),Ae(O,T);var le=Ae(O,m);for(T=0;T<H.length;T+=2){var xe=H[T],Ee=H[T+1];xe==="style"?ee(p,Ee):xe==="dangerouslySetInnerHTML"?Yt(p,Ee):xe==="children"?Qe(p,Ee):N(p,xe,Ee,le)}switch(O){case"input":dn(p,m);break;case"textarea":X(p,m);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?sn(p,!!m.multiple,Be,!1):ve!==!!m.multiple&&(m.defaultValue!=null?sn(p,!!m.multiple,m.defaultValue,!0):sn(p,!!m.multiple,m.multiple?[]:"",!1))}p[Ca]=m}catch(Ye){jt(n,n.return,Ye)}}break;case 6:if(Si(r,n),Ui(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,m=n.memoizedProps;try{p.nodeValue=m}catch(Ye){jt(n,n.return,Ye)}}break;case 3:if(Si(r,n),Ui(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pa(r.containerInfo)}catch(Ye){jt(n,n.return,Ye)}break;case 4:Si(r,n),Ui(n);break;case 13:Si(r,n),Ui(n),p=n.child,p.flags&8192&&(m=p.memoizedState!==null,p.stateNode.isHidden=m,!m||p.alternate!==null&&p.alternate.memoizedState!==null||(Iu=Ht())),u&4&&Jp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(le=bn)||xe,Si(r,n),bn=le):Si(r,n),Ui(n),u&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(Ee=Ge=xe;Ge!==null;){switch(ve=Ge,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:Oa(4,ve,ve.return);break;case 1:Ds(ve,ve.return);var $e=ve.stateNode;if(typeof $e.componentWillUnmount=="function"){u=ve,o=ve.return;try{r=u,$e.props=r.memoizedProps,$e.state=r.memoizedState,$e.componentWillUnmount()}catch(Ye){jt(u,o,Ye)}}break;case 5:Ds(ve,ve.return);break;case 22:if(ve.memoizedState!==null){nm(Ee);continue}}Be!==null?(Be.return=ve,Ge=Be):nm(Ee)}xe=xe.sibling}e:for(xe=null,Ee=n;;){if(Ee.tag===5){if(xe===null){xe=Ee;try{p=Ee.stateNode,le?(m=p.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Ee.stateNode,H=Ee.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=C("display",T))}catch(Ye){jt(n,n.return,Ye)}}}else if(Ee.tag===6){if(xe===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch(Ye){jt(n,n.return,Ye)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;xe===Ee&&(xe=null),Ee=Ee.return}xe===Ee&&(xe=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Si(r,n),Ui(n),u&4&&Jp(n);break;case 21:break;default:Si(r,n),Ui(n)}}function Ui(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Kp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Qe(p,""),u.flags&=-33);var m=jp(n);Pu(n,m,p);break;case 3:case 4:var T=u.stateNode.containerInfo,O=jp(n);wu(n,O,T);break;default:throw Error(t(161))}}catch(H){jt(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function kv(n,r,o){Ge=n,em(n)}function em(n,r,o){for(var u=(n.mode&1)!==0;Ge!==null;){var p=Ge,m=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||tl;if(!T){var O=p.alternate,H=O!==null&&O.memoizedState!==null||bn;O=tl;var le=bn;if(tl=T,(bn=H)&&!le)for(Ge=p;Ge!==null;)T=Ge,H=T.child,T.tag===22&&T.memoizedState!==null?im(p):H!==null?(H.return=T,Ge=H):im(p);for(;m!==null;)Ge=m,em(m),m=m.sibling;Ge=p,tl=O,bn=le}tm(n)}else(p.subtreeFlags&8772)!==0&&m!==null?(m.return=p,Ge=m):tm(n)}}function tm(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bn||nl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!bn)if(o===null)u.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:vi(r.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&np(r,m,u);break;case 3:var T=r.updateQueue;if(T!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}np(r,T,o)}break;case 5:var O=r.stateNode;if(o===null&&r.flags&4){o=O;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var Ee=xe.dehydrated;Ee!==null&&pa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||r.flags&512&&bu(r)}catch(ve){jt(r,r.return,ve)}}if(r===n){Ge=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function nm(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ge=o;break}Ge=r.return}}function im(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{nl(4,r)}catch(H){jt(r,o,H)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(H){jt(r,p,H)}}var m=r.return;try{bu(r)}catch(H){jt(r,m,H)}break;case 5:var T=r.return;try{bu(r)}catch(H){jt(r,T,H)}}}catch(H){jt(r,r.return,H)}if(r===n){Ge=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Ge=O;break}Ge=r.return}}var Bv=Math.ceil,il=b.ReactCurrentDispatcher,Du=b.ReactCurrentOwner,di=b.ReactCurrentBatchConfig,Et=0,mn=null,tn=null,yn=0,ni=0,Ls=hr(0),cn=0,Fa=null,qr=0,rl=0,Lu=0,ka=null,Wn=null,Iu=0,Is=1/0,Zi=null,sl=!1,Nu=null,xr=null,al=!1,Sr=null,ol=0,Ba=0,Uu=null,ll=-1,cl=0;function Fn(){return(Et&6)!==0?Ht():ll!==-1?ll:ll=Ht()}function yr(n){return(n.mode&1)===0?1:(Et&2)!==0&&yn!==0?yn&-yn:Mv.transition!==null?(cl===0&&(cl=Pt()),cl):(n=je,n!==0||(n=window.event,n=n===void 0?16:sh(n.type)),n)}function yi(n,r,o,u){if(50<Ba)throw Ba=0,Uu=null,Error(t(185));Kt(n,o,u),((Et&2)===0||n!==mn)&&(n===mn&&((Et&2)===0&&(rl|=o),cn===4&&Mr(n,yn)),Xn(n,u),o===1&&Et===0&&(r.mode&1)===0&&(Is=Ht()+500,Fo&&mr()))}function Xn(n,r){var o=n.callbackNode;pt(n,r);var u=ft(n,n===mn?yn:0);if(u===0)o!==null&&ca(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&ca(o),r===1)n.tag===0?yv(sm.bind(null,n)):Wh(sm.bind(null,n)),_v(function(){(Et&6)===0&&mr()}),o=null;else{switch(Pi(u)){case 1:o=ua;break;case 4:o=vo;break;case 16:o=ds;break;case 536870912:o=R;break;default:o=ds}o=hm(o,rm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function rm(n,r){if(ll=-1,cl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ns()&&n.callbackNode!==o)return null;var u=ft(n,n===mn?yn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=ul(n,u);else{r=u;var p=Et;Et|=2;var m=om();(mn!==n||yn!==r)&&(Zi=null,Is=Ht()+500,Kr(n,r));do try{Gv();break}catch(O){am(n,O)}while(!0);Qc(),il.current=m,Et=p,tn!==null?r=0:(mn=null,yn=0,r=cn)}if(r!==0){if(r===2&&(p=Gt(n),p!==0&&(u=p,r=Ou(n,p))),r===1)throw o=Fa,Kr(n,0),Mr(n,u),Xn(n,Ht()),o;if(r===6)Mr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!zv(p)&&(r=ul(n,u),r===2&&(m=Gt(n),m!==0&&(u=m,r=Ou(n,m))),r===1))throw o=Fa,Kr(n,0),Mr(n,u),Xn(n,Ht()),o;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:jr(n,Wn,Zi);break;case 3:if(Mr(n,u),(u&130023424)===u&&(r=Iu+500-Ht(),10<r)){if(ft(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Fn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Gc(jr.bind(null,n,Wn,Zi),r);break}jr(n,Wn,Zi);break;case 4:if(Mr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var T=31-Z(u);m=1<<T,T=r[T],T>p&&(p=T),u&=~m}if(u=p,u=Ht()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Bv(u/1960))-u,10<u){n.timeoutHandle=Gc(jr.bind(null,n,Wn,Zi),u);break}jr(n,Wn,Zi);break;case 5:jr(n,Wn,Zi);break;default:throw Error(t(329))}}}return Xn(n,Ht()),n.callbackNode===o?rm.bind(null,n):null}function Ou(n,r){var o=ka;return n.current.memoizedState.isDehydrated&&(Kr(n,r).flags|=256),n=ul(n,r),n!==2&&(r=Wn,Wn=o,r!==null&&Fu(r)),n}function Fu(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function zv(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],m=p.getSnapshot;p=p.value;try{if(!gi(m(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Mr(n,r){for(r&=~Lu,r&=~rl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Z(r),u=1<<o;n[o]=-1,r&=~u}}function sm(n){if((Et&6)!==0)throw Error(t(327));Ns();var r=ft(n,0);if((r&1)===0)return Xn(n,Ht()),null;var o=ul(n,r);if(n.tag!==0&&o===2){var u=Gt(n);u!==0&&(r=u,o=Ou(n,u))}if(o===1)throw o=Fa,Kr(n,0),Mr(n,r),Xn(n,Ht()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,jr(n,Wn,Zi),Xn(n,Ht()),null}function ku(n,r){var o=Et;Et|=1;try{return n(r)}finally{Et=o,Et===0&&(Is=Ht()+500,Fo&&mr())}}function Yr(n){Sr!==null&&Sr.tag===0&&(Et&6)===0&&Ns();var r=Et;Et|=1;var o=di.transition,u=je;try{if(di.transition=null,je=1,n)return n()}finally{je=u,di.transition=o,Et=r,(Et&6)===0&&mr()}}function Bu(){ni=Ls.current,Bt(Ls)}function Kr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,gv(o)),tn!==null)for(o=tn.return;o!==null;){var u=o;switch(Yc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Uo();break;case 3:ws(),Bt(Hn),Bt(Cn),ou();break;case 5:su(u);break;case 4:ws();break;case 13:Bt(Xt);break;case 19:Bt(Xt);break;case 10:eu(u.type._context);break;case 22:case 23:Bu()}o=o.return}if(mn=n,tn=n=Er(n.current,null),yn=ni=r,cn=0,Fa=null,Lu=rl=qr=0,Wn=ka=null,Wr!==null){for(r=0;r<Wr.length;r++)if(o=Wr[r],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,m=o.pending;if(m!==null){var T=m.next;m.next=p,u.next=T}o.pending=u}Wr=null}return n}function am(n,r){do{var o=tn;try{if(Qc(),qo.current=Zo,Yo){for(var u=$t.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Yo=!1}if($r=0,pn=ln=$t=null,Da=!1,La=0,Du.current=null,o===null||o.return===null){cn=1,Fa=r,tn=null;break}e:{var m=n,T=o.return,O=o,H=r;if(r=yn,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,xe=O,Ee=xe.tag;if((xe.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=Dp(T);if(Be!==null){Be.flags&=-257,Lp(Be,T,O,m,r),Be.mode&1&&Pp(m,le,r),r=Be,H=le;var $e=r.updateQueue;if($e===null){var Ye=new Set;Ye.add(H),r.updateQueue=Ye}else $e.add(H);break e}else{if((r&1)===0){Pp(m,le,r),zu();break e}H=Error(t(426))}}else if(Vt&&O.mode&1){var Jt=Dp(T);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Lp(Jt,T,O,m,r),Zc(Ps(H,O));break e}}m=H=Ps(H,O),cn!==4&&(cn=2),ka===null?ka=[m]:ka.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var te=bp(m,H,r);tp(m,te);break e;case 1:O=H;var W=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(xr===null||!xr.has(se)))){m.flags|=65536,r&=-r,m.lanes|=r;var Re=wp(m,O,r);tp(m,Re);break e}}m=m.return}while(m!==null)}cm(o)}catch(Ze){r=Ze,tn===o&&o!==null&&(tn=o=o.return);continue}break}while(!0)}function om(){var n=il.current;return il.current=Zo,n===null?Zo:n}function zu(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(qr&268435455)===0&&(rl&268435455)===0||Mr(mn,yn)}function ul(n,r){var o=Et;Et|=2;var u=om();(mn!==n||yn!==r)&&(Zi=null,Kr(n,r));do try{Hv();break}catch(p){am(n,p)}while(!0);if(Qc(),Et=o,il.current=u,tn!==null)throw Error(t(261));return mn=null,yn=0,cn}function Hv(){for(;tn!==null;)lm(tn)}function Gv(){for(;tn!==null&&!Br();)lm(tn)}function lm(n){var r=dm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,r===null?cm(n):tn=r,Du.current=null}function cm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=Nv(o,r,ni),o!==null){tn=o;return}}else{if(o=Uv(o,r),o!==null){o.flags&=32767,tn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,tn=null;return}}if(r=r.sibling,r!==null){tn=r;return}tn=r=n}while(r!==null);cn===0&&(cn=5)}function jr(n,r,o){var u=je,p=di.transition;try{di.transition=null,je=1,Vv(n,r,o,u)}finally{di.transition=p,je=u}return null}function Vv(n,r,o,u){do Ns();while(Sr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Xe(n,m),n===mn&&(tn=mn=null,yn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||al||(al=!0,hm(ds,function(){return Ns(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=di.transition,di.transition=null;var T=je;je=1;var O=Et;Et|=4,Du.current=null,Fv(n,o),Qp(o,n),cv(zc),yo=!!Bc,zc=Bc=null,n.current=o,kv(o),xc(),Et=O,je=T,di.transition=m}else n.current=o;if(al&&(al=!1,Sr=n,ol=p),m=n.pendingLanes,m===0&&(xr=null),Q(o.stateNode),Xn(n,Ht()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(sl)throw sl=!1,n=Nu,Nu=null,n;return(ol&1)!==0&&n.tag!==0&&Ns(),m=n.pendingLanes,(m&1)!==0?n===Uu?Ba++:(Ba=0,Uu=n):Ba=0,mr(),null}function Ns(){if(Sr!==null){var n=Pi(ol),r=di.transition,o=je;try{if(di.transition=null,je=16>n?16:n,Sr===null)var u=!1;else{if(n=Sr,Sr=null,ol=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,Ge=n.current;Ge!==null;){var m=Ge,T=m.child;if((Ge.flags&16)!==0){var O=m.deletions;if(O!==null){for(var H=0;H<O.length;H++){var le=O[H];for(Ge=le;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:Oa(8,xe,m)}var Ee=xe.child;if(Ee!==null)Ee.return=xe,Ge=Ee;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,Be=xe.return;if(Yp(xe),xe===le){Ge=null;break}if(ve!==null){ve.return=Be,Ge=ve;break}Ge=Be}}}var $e=m.alternate;if($e!==null){var Ye=$e.child;if(Ye!==null){$e.child=null;do{var Jt=Ye.sibling;Ye.sibling=null,Ye=Jt}while(Ye!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ge=T;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var te=m.sibling;if(te!==null){te.return=m.return,Ge=te;break e}Ge=m.return}}var W=n.current;for(Ge=W;Ge!==null;){T=Ge;var se=T.child;if((T.subtreeFlags&2064)!==0&&se!==null)se.return=T,Ge=se;else e:for(T=W;Ge!==null;){if(O=Ge,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:nl(9,O)}}catch(Ze){jt(O,O.return,Ze)}if(O===T){Ge=null;break e}var Re=O.sibling;if(Re!==null){Re.return=O.return,Ge=Re;break e}Ge=O.return}}if(Et=p,mr(),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(B,n)}catch{}u=!0}return u}finally{je=o,di.transition=r}}return!1}function um(n,r,o){r=Ps(o,r),r=bp(n,r,1),n=_r(n,r,1),r=Fn(),n!==null&&(Kt(n,1,r),Xn(n,r))}function jt(n,r,o){if(n.tag===3)um(n,n,o);else for(;r!==null;){if(r.tag===3){um(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xr===null||!xr.has(u))){n=Ps(o,n),n=wp(r,n,1),r=_r(r,n,1),n=Fn(),r!==null&&(Kt(r,1,n),Xn(r,n));break}}r=r.return}}function Wv(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Fn(),n.pingedLanes|=n.suspendedLanes&o,mn===n&&(yn&o)===o&&(cn===4||cn===3&&(yn&130023424)===yn&&500>Ht()-Iu?Kr(n,0):Lu|=o),Xn(n,r)}function fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var o=Fn();n=Yi(n,r),n!==null&&(Kt(n,r,o),Xn(n,o))}function Xv(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),fm(n,o)}function $v(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),fm(n,o)}var dm;dm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)Vn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Vn=!1,Iv(n,r,o);Vn=(n.flags&131072)!==0}else Vn=!1,Vt&&(r.flags&1048576)!==0&&Xh(r,Bo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;el(n,r),n=r.pendingProps;var p=Ms(r,Cn.current);bs(r,o),p=uu(null,r,u,n,p,o);var m=fu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(u)?(m=!0,Oo(r)):m=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,iu(r),p.updater=Jo,r.stateNode=p,p._reactInternals=r,_u(r,u,n,o),r=yu(null,r,u,!0,m,o)):(r.tag=0,Vt&&m&&qc(r),On(null,r,p,o),r=r.child),r;case 16:u=r.elementType;e:{switch(el(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Yv(u),n=vi(u,n),p){case 0:r=Su(null,r,u,n,o);break e;case 1:r=kp(null,r,u,n,o);break e;case 11:r=Ip(null,r,u,n,o);break e;case 14:r=Np(null,r,u,vi(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),Su(n,r,u,p,o);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),kp(n,r,u,p,o);case 3:e:{if(Bp(r),n===null)throw Error(t(387));u=r.pendingProps,m=r.memoizedState,p=m.element,ep(n,r),Xo(r,u,null,o);var T=r.memoizedState;if(u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){p=Ps(Error(t(423)),r),r=zp(n,r,u,o,p);break e}else if(u!==p){p=Ps(Error(t(424)),r),r=zp(n,r,u,o,p);break e}else for(ti=dr(r.stateNode.containerInfo.firstChild),ei=r,Vt=!0,_i=null,o=Jh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Cs(),u===p){r=ji(n,r,o);break e}On(n,r,u,o)}r=r.child}return r;case 5:return ip(r),n===null&&jc(r),u=r.type,p=r.pendingProps,m=n!==null?n.memoizedProps:null,T=p.children,Hc(u,p)?T=null:m!==null&&Hc(u,m)&&(r.flags|=32),Fp(n,r),On(n,r,T,o),r.child;case 6:return n===null&&jc(r),null;case 13:return Hp(n,r,o);case 4:return ru(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Rs(r,null,u,o):On(n,r,u,o),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),Ip(n,r,u,p,o);case 7:return On(n,r,r.pendingProps,o),r.child;case 8:return On(n,r,r.pendingProps.children,o),r.child;case 12:return On(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,m=r.memoizedProps,T=p.value,Ft(Go,u._currentValue),u._currentValue=T,m!==null)if(gi(m.value,T)){if(m.children===p.children&&!Hn.current){r=ji(n,r,o);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var O=m.dependencies;if(O!==null){T=m.child;for(var H=O.firstContext;H!==null;){if(H.context===u){if(m.tag===1){H=Ki(-1,o&-o),H.tag=2;var le=m.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),le.pending=H}}m.lanes|=o,H=m.alternate,H!==null&&(H.lanes|=o),tu(m.return,o,r),O.lanes|=o;break}H=H.next}}else if(m.tag===10)T=m.type===r.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,O=T.alternate,O!==null&&(O.lanes|=o),tu(T,o,r),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===r){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}On(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,bs(r,o),p=ui(p),u=u(p),r.flags|=1,On(n,r,u,o),r.child;case 14:return u=r.type,p=vi(u,r.pendingProps),p=vi(u.type,p),Np(n,r,u,p,o);case 15:return Up(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),el(n,r),r.tag=1,Gn(u)?(n=!0,Oo(r)):n=!1,bs(r,o),Rp(r,u,p),_u(r,u,p,o),yu(null,r,u,!0,n,o);case 19:return Vp(n,r,o);case 22:return Op(n,r,o)}throw Error(t(156,r.tag))};function hm(n,r){return la(n,r)}function qv(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,r,o,u){return new qv(n,r,o,u)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yv(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===ie)return 14}return 2}function Er(n,r){var o=n.alternate;return o===null?(o=hi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function fl(n,r,o,u,p,m){var T=2;if(u=n,typeof n=="function")Hu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case M:return Zr(o.children,p,m,r);case P:T=8,p|=8;break;case $:return n=hi(12,o,r,p|2),n.elementType=$,n.lanes=m,n;case ae:return n=hi(13,o,r,p),n.elementType=ae,n.lanes=m,n;case k:return n=hi(19,o,r,p),n.elementType=k,n.lanes=m,n;case q:return dl(o,p,m,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:T=10;break e;case G:T=9;break e;case j:T=11;break e;case ie:T=14;break e;case ce:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=hi(T,o,r,p),r.elementType=n,r.type=u,r.lanes=m,r}function Zr(n,r,o,u){return n=hi(7,n,u,r),n.lanes=o,n}function dl(n,r,o,u){return n=hi(22,n,u,r),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function Gu(n,r,o){return n=hi(6,n,null,r),n.lanes=o,n}function Vu(n,r,o){return r=hi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Kv(n,r,o,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bt(0),this.expirationTimes=bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wu(n,r,o,u,p,m,T,O,H){return n=new Kv(n,r,o,O,H),r===1?(r=1,m===!0&&(r|=8)):r=0,m=hi(3,null,null,r),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(m),n}function jv(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function pm(n){if(!n)return pr;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return Gh(n,o,r)}return r}function mm(n,r,o,u,p,m,T,O,H){return n=Wu(o,u,!0,n,p,m,T,O,H),n.context=pm(null),o=n.current,u=Fn(),p=yr(o),m=Ki(u,p),m.callback=r??null,_r(o,m,p),n.current.lanes=p,Kt(n,p,u),Xn(n,u),n}function hl(n,r,o,u){var p=r.current,m=Fn(),T=yr(p);return o=pm(o),r.context===null?r.context=o:r.pendingContext=o,r=Ki(m,T),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=_r(p,r,T),n!==null&&(yi(n,p,T,m),Wo(n,p,T)),T}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Xu(n,r){gm(n,r),(n=n.alternate)&&gm(n,r)}function Zv(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function $u(n){this._internalRoot=n}ml.prototype.render=$u.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));hl(n,r,null,null)},ml.prototype.unmount=$u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Yr(function(){hl(null,n,null,null)}),r[Wi]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var r=Di();n={blockedOn:null,target:n,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,n),o===0&&ih(n)}};function qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vm(){}function Jv(n,r,o,u,p){if(p){if(typeof u=="function"){var m=u;u=function(){var le=pl(T);m.call(le)}}var T=mm(r,u,n,0,null,!1,!1,"",vm);return n._reactRootContainer=T,n[Wi]=T.current,Ea(n.nodeType===8?n.parentNode:n),Yr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var O=u;u=function(){var le=pl(H);O.call(le)}}var H=Wu(n,0,!1,null,null,!1,!1,"",vm);return n._reactRootContainer=H,n[Wi]=H.current,Ea(n.nodeType===8?n.parentNode:n),Yr(function(){hl(r,H,o,u)}),H}function _l(n,r,o,u,p){var m=o._reactRootContainer;if(m){var T=m;if(typeof p=="function"){var O=p;p=function(){var H=pl(T);O.call(H)}}hl(r,T,n,p)}else T=Jv(o,r,n,p,u);return pl(T)}on=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=rt(r.pendingLanes);o!==0&&(an(r,o|1),Xn(r,Ht()),(Et&6)===0&&(Is=Ht()+500,mr()))}break;case 13:Yr(function(){var u=Yi(n,1);if(u!==null){var p=Fn();yi(u,n,1,p)}}),Xu(n,1)}},or=function(n){if(n.tag===13){var r=Yi(n,134217728);if(r!==null){var o=Fn();yi(r,n,134217728,o)}Xu(n,134217728)}},mi=function(n){if(n.tag===13){var r=yr(n),o=Yi(n,r);if(o!==null){var u=Fn();yi(o,n,r,u)}Xu(n,r)}},Di=function(){return je},gt=function(n,r){var o=je;try{return je=n,r()}finally{je=o}},de=function(n,r,o){switch(r){case"input":if(dn(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=No(u);if(!p)throw Error(t(90));Tt(u),dn(u,p)}}}break;case"textarea":X(n,o);break;case"select":r=o.value,r!=null&&sn(n,!!o.multiple,r,!1)}},Te=ku,be=Yr;var Qv={usingClientEntryPoint:!1,Events:[Ra,Ss,No,ue,we,ku]},za={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oa(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{B=vl.inject(ex),re=vl}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,$n.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(r))throw Error(t(200));return jv(n,r,null,o)},$n.createRoot=function(n,r){if(!qu(n))throw Error(t(299));var o=!1,u="",p=_m;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Wu(n,1,!1,null,null,o,!1,u,p),n[Wi]=r.current,Ea(n.nodeType===8?n.parentNode:n),new $u(r)},$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oa(r),n=n===null?null:n.stateNode,n},$n.flushSync=function(n){return Yr(n)},$n.hydrate=function(n,r,o){if(!gl(r))throw Error(t(200));return _l(null,n,r,!0,o)},$n.hydrateRoot=function(n,r,o){if(!qu(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,m="",T=_m;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),r=mm(r,null,n,1,o??null,p,!1,m,T),n[Wi]=r.current,Ea(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new ml(r)},$n.render=function(n,r,o){if(!gl(r))throw Error(t(200));return _l(null,n,r,!1,o)},$n.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Wi]=null})}),!0):!1},$n.unstable_batchedUpdates=ku,$n.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!gl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,r,o,!1,u)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var Rm;function ux(){if(Rm)return ju.exports;Rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ju.exports=cx(),ju.exports}var Am;function fx(){if(Am)return xl;Am=1;var s=ux();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var dx=fx();const hx="";function px(){const[s,e]=lt.useState(null),[t,i]=lt.useState(null),[a,l]=lt.useState(!1),[c,f]=lt.useState(""),d=lt.useRef(null),h=lt.useRef(null),g=lt.useCallback(E=>{const A=new WebSocket(hx);return d.current=A,A.onopen=()=>{l(!0),E?.(A)},A.onclose=()=>l(!1),A.onmessage=S=>{const y=JSON.parse(S.data);y.type==="state"&&e(y.room),y.type==="joined"&&(i(y.seat),h.current=y.seat,localStorage.setItem("pc-session",JSON.stringify({code:y.code,token:y.token}))),y.type==="error"&&f(String(y.message))},A},[]);lt.useEffect(()=>{},[g]);const _=lt.useCallback(E=>{{f("No backend configured");return}},[]),v=lt.useCallback((E,A)=>{localStorage.removeItem("pc-session"),g(S=>S.send(JSON.stringify({type:"create",name:E,bestOf:A})))},[g]),x=lt.useCallback((E,A)=>{localStorage.removeItem("pc-session"),g(S=>S.send(JSON.stringify({type:"join",code:E.toUpperCase(),name:A})))},[g]);return{room:s,seat:t??h.current,connected:a,error:c,create:v,join:x,send:_,setError:f}}class mx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return gx(e).buffer}}function gx(s){let e=0;for(const a of s)e+=a.byteLength;const t=new Uint8Array(e);let i=0;for(const a of s){const l=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);t.set(l,i),i+=a.byteLength}return t}function Gg(s){return new _x(s).unpack()}function Vg(s){const e=new vx,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class _x{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,a="",l,c;for(;i<e;)l=t[i],l<160?(c=l,i++):(l^192)<32?(c=(l&31)<<6|t[i+1]&63,i+=2):(l^224)<16?(c=(l&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(c=(l&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),a+=String.fromCodePoint(c);return this.index+=e,a}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const a=this.unpack();t[a]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,a=e&8388607|8388608;return(t===0?1:-1)*a*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,a=(e>>20&2047)-1023,c=(e&1048575|1048576)*2**(a-20)+t*2**(a-52);return(i===0?1:-1)*c}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class vx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=a=>{if(a<t){const l=this.pack(e[a]);return l instanceof Promise?l.then(()=>i(a+1)):i(a+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),a=e/2**i-1,l=Math.floor(a*2**52),c=2**32,f=t<<31|i+1023<<20|l/c&1048575,d=l%c;this._bufferBuilder.append(203),this.pack_int32(f),this.pack_int32(d)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const a=l=>{if(l<t.length){const c=t[l];if(e.hasOwnProperty(c)){this.pack(c);const f=this.pack(e[c]);if(f instanceof Promise)return f.then(()=>a(l+1))}return a(l+1)}};return a(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new mx,this._textEncoder=new TextEncoder}}let Wg=!0,Xg=!0;function Za(s,e,t){const i=s.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function ss(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Dd("Unable to polyfill events");return}const a=s.RTCPeerConnection.prototype,l=a.addEventListener;a.addEventListener=function(f,d){if(f!==e)return l.apply(this,arguments);const h=g=>{const _=t(g);_&&(d.handleEvent?d.handleEvent(_):d(_))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(d,h),l.apply(this,[f,h])};const c=a.removeEventListener;a.removeEventListener=function(f,d){if(f!==e||!this._eventMap||!this._eventMap[e])return c.apply(this,arguments);if(!this._eventMap[e].has(d))return c.apply(this,arguments);const h=this._eventMap[e].get(d);return this._eventMap[e].delete(d),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,c.apply(this,[f,h])},Object.defineProperty(a,"on"+e,{get(){return this["_on"+e]},set(f){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),f&&this.addEventListener(e,this["_on"+e]=f)},enumerable:!0,configurable:!0})}function xx(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Wg=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function Sx(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Xg=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Dd(){if(typeof window=="object"){if(Wg)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Ld(s,e){Xg&&console.warn(s+" is deprecated, please use "+e+" instead.")}function yx(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(a=>a.brand==="Chromium");if(i){const a=parseInt(i.version,10);if(a>=90)return{browser:"chrome",version:a}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Za(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Za(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Za(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Za(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function bm(s){return Object.prototype.toString.call(s)==="[object Object]"}function $g(s){return bm(s)?Object.keys(s).reduce(function(e,t){const i=bm(s[t]),a=i?$g(s[t]):s[t],l=i&&!Object.keys(a).length;return a===void 0||l?e:Object.assign(e,{[t]:a})},{}):s}function Lf(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?Lf(s,s.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(a=>{Lf(s,s.get(a),t)})}))}function wm(s,e,t){const i=t?"outbound-rtp":"inbound-rtp",a=new Map;if(e===null)return a;const l=[];return s.forEach(c=>{c.type==="track"&&c.trackIdentifier===e.id&&l.push(c)}),l.forEach(c=>{s.forEach(f=>{f.type===i&&f.trackId===c.id&&Lf(s,f,a)})}),a}const Pm=Dd;function qg(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const i=function(f){if(typeof f!="object"||f.mandatory||f.optional)return f;const d={};return Object.keys(f).forEach(h=>{if(h==="require"||h==="advanced"||h==="mediaSource")return;const g=typeof f[h]=="object"?f[h]:{ideal:f[h]};g.exact!==void 0&&typeof g.exact=="number"&&(g.min=g.max=g.exact);const _=function(v,x){return v?v+x.charAt(0).toUpperCase()+x.slice(1):x==="deviceId"?"sourceId":x};if(g.ideal!==void 0){d.optional=d.optional||[];let v={};typeof g.ideal=="number"?(v[_("min",h)]=g.ideal,d.optional.push(v),v={},v[_("max",h)]=g.ideal,d.optional.push(v)):(v[_("",h)]=g.ideal,d.optional.push(v))}g.exact!==void 0&&typeof g.exact!="number"?(d.mandatory=d.mandatory||{},d.mandatory[_("",h)]=g.exact):["min","max"].forEach(v=>{g[v]!==void 0&&(d.mandatory=d.mandatory||{},d.mandatory[_(v,h)]=g[v])})}),f.advanced&&(d.optional=(d.optional||[]).concat(f.advanced)),d},a=function(f,d){if(e.version>=61)return d(f);if(f=JSON.parse(JSON.stringify(f)),f&&typeof f.audio=="object"){const h=function(g,_,v){_ in g&&!(v in g)&&(g[v]=g[_],delete g[_])};f=JSON.parse(JSON.stringify(f)),h(f.audio,"autoGainControl","googAutoGainControl"),h(f.audio,"noiseSuppression","googNoiseSuppression"),f.audio=i(f.audio)}if(f&&typeof f.video=="object"){let h=f.video.facingMode;h=h&&(typeof h=="object"?h:{ideal:h});const g=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!g)){delete f.video.facingMode;let _;if(h.exact==="environment"||h.ideal==="environment"?_=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(_=["front"]),_)return t.mediaDevices.enumerateDevices().then(v=>{v=v.filter(E=>E.kind==="videoinput");let x=v.find(E=>_.some(A=>E.label.toLowerCase().includes(A)));return!x&&v.length&&_.includes("back")&&(x=v[v.length-1]),x&&(f.video.deviceId=h.exact?{exact:x.deviceId}:{ideal:x.deviceId}),f.video=i(f.video),Pm("chrome: "+JSON.stringify(f)),d(f)})}f.video=i(f.video)}return Pm("chrome: "+JSON.stringify(f)),d(f)},l=function(f){return e.version>=64?f:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[f.name]||f.name,message:f.message,constraint:f.constraint||f.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},c=function(f,d,h){a(f,g=>{t.webkitGetUserMedia(g,d,_=>{h&&h(l(_))})})};if(t.getUserMedia=c.bind(t),t.mediaDevices.getUserMedia){const f=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(d){return a(d,h=>f(h).then(g=>{if(h.audio&&!g.getAudioTracks().length||h.video&&!g.getVideoTracks().length)throw g.getTracks().forEach(_=>{_.stop()}),new DOMException("","NotFoundError");return g},g=>Promise.reject(l(g))))}}}function Yg(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Kg(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=a=>{a.stream.addEventListener("addtrack",l=>{let c;s.RTCPeerConnection.prototype.getReceivers?c=this.getReceivers().find(d=>d.track&&d.track.id===l.track.id):c={track:l.track};const f=new Event("track");f.track=l.track,f.receiver=c,f.transceiver={receiver:c},f.streams=[a.stream],this.dispatchEvent(f)}),a.stream.getTracks().forEach(l=>{let c;s.RTCPeerConnection.prototype.getReceivers?c=this.getReceivers().find(d=>d.track&&d.track.id===l.id):c={track:l};const f=new Event("track");f.track=l,f.receiver=c,f.transceiver={receiver:c},f.streams=[a.stream],this.dispatchEvent(f)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else ss(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function jg(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(a,l){return{track:l,get dtmf(){return this._dtmf===void 0&&(l.kind==="audio"?this._dtmf=a.createDTMFSender(l):this._dtmf=null),this._dtmf},_pc:a}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const a=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(f,d){let h=a.apply(this,arguments);return h||(h=e(this,f),this._senders.push(h)),h};const l=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(f){l.apply(this,arguments);const d=this._senders.indexOf(f);d!==-1&&this._senders.splice(d,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(l){this._senders=this._senders||[],t.apply(this,[l]),l.getTracks().forEach(c=>{this._senders.push(e(this,c))})};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(l){this._senders=this._senders||[],i.apply(this,[l]),l.getTracks().forEach(c=>{const f=this._senders.find(d=>d.track===c);f&&this._senders.splice(this._senders.indexOf(f),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(a=>a._pc=this),i},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Zg(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const i=s.RTCPeerConnection.prototype.getSenders;i&&(s.RTCPeerConnection.prototype.getSenders=function(){const c=i.apply(this,[]);return c.forEach(f=>f._pc=this),c});const a=s.RTCPeerConnection.prototype.addTrack;a&&(s.RTCPeerConnection.prototype.addTrack=function(){const c=a.apply(this,arguments);return c._pc=this,c}),s.RTCRtpSender.prototype.getStats=function(){const c=this;return this._pc.getStats().then(f=>wm(f,c.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const i=s.RTCPeerConnection.prototype.getReceivers;i&&(s.RTCPeerConnection.prototype.getReceivers=function(){const l=i.apply(this,[]);return l.forEach(c=>c._pc=this),l}),ss(s,"track",a=>(a.receiver._pc=a.srcElement,a)),s.RTCRtpReceiver.prototype.getStats=function(){const l=this;return this._pc.getStats().then(c=>wm(c,l.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const a=arguments[0];let l,c,f;return this.getSenders().forEach(d=>{d.track===a&&(l?f=!0:l=d)}),this.getReceivers().forEach(d=>(d.track===a&&(c?f=!0:c=d),d.track===a)),f||l&&c?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):l?l.getStats():c?c.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Jg(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(c=>this._shimmedLocalStreams[c][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(c,f){if(!f)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const d=e.apply(this,arguments);return this._shimmedLocalStreams[f.id]?this._shimmedLocalStreams[f.id].indexOf(d)===-1&&this._shimmedLocalStreams[f.id].push(d):this._shimmedLocalStreams[f.id]=[f,d],d};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(c){this._shimmedLocalStreams=this._shimmedLocalStreams||{},c.getTracks().forEach(h=>{if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError")});const f=this.getSenders();t.apply(this,arguments);const d=this.getSenders().filter(h=>f.indexOf(h)===-1);this._shimmedLocalStreams[c.id]=[c].concat(d)};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[c.id],i.apply(this,arguments)};const a=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},c&&Object.keys(this._shimmedLocalStreams).forEach(f=>{const d=this._shimmedLocalStreams[f].indexOf(c);d!==-1&&this._shimmedLocalStreams[f].splice(d,1),this._shimmedLocalStreams[f].length===1&&delete this._shimmedLocalStreams[f]}),a.apply(this,arguments)}}function Qg(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Jg(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const g=t.apply(this);return this._reverseStreams=this._reverseStreams||{},g.map(_=>this._reverseStreams[_.id])};const i=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(g){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},g.getTracks().forEach(_=>{if(this.getSenders().find(x=>x.track===_))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[g.id]){const _=new s.MediaStream(g.getTracks());this._streams[g.id]=_,this._reverseStreams[_.id]=g,g=_}i.apply(this,[g])};const a=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(g){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},a.apply(this,[this._streams[g.id]||g]),delete this._reverseStreams[this._streams[g.id]?this._streams[g.id].id:g.id],delete this._streams[g.id]},s.RTCPeerConnection.prototype.addTrack=function(g,_){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const v=[].slice.call(arguments,1);if(v.length!==1||!v[0].getTracks().find(A=>A===g))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(A=>A.track===g))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const E=this._streams[_.id];if(E)E.addTrack(g),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const A=new s.MediaStream([g]);this._streams[_.id]=A,this._reverseStreams[A.id]=_,this.addStream(A)}return this.getSenders().find(A=>A.track===g)};function l(h,g){let _=g.sdp;return Object.keys(h._reverseStreams||[]).forEach(v=>{const x=h._reverseStreams[v],E=h._streams[x.id];_=_.replace(new RegExp(E.id,"g"),x.id)}),new RTCSessionDescription({type:g.type,sdp:_})}function c(h,g){let _=g.sdp;return Object.keys(h._reverseStreams||[]).forEach(v=>{const x=h._reverseStreams[v],E=h._streams[x.id];_=_.replace(new RegExp(x.id,"g"),E.id)}),new RTCSessionDescription({type:g.type,sdp:_})}["createOffer","createAnswer"].forEach(function(h){const g=s.RTCPeerConnection.prototype[h],_={[h](){const v=arguments;return arguments.length&&typeof arguments[0]=="function"?g.apply(this,[E=>{const A=l(this,E);v[0].apply(null,[A])},E=>{v[1]&&v[1].apply(null,E)},arguments[2]]):g.apply(this,arguments).then(E=>l(this,E))}};s.RTCPeerConnection.prototype[h]=_[h]});const f=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?f.apply(this,arguments):(arguments[0]=c(this,arguments[0]),f.apply(this,arguments))};const d=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const h=d.get.apply(this);return h.type===""?h:l(this,h)}}),s.RTCPeerConnection.prototype.removeTrack=function(g){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!g._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(g._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let v;Object.keys(this._streams).forEach(x=>{this._streams[x].getTracks().find(A=>g.track===A)&&(v=this._streams[x])}),v&&(v.getTracks().length===1?this.removeStream(this._reverseStreams[v.id]):v.removeTrack(g.track),this.dispatchEvent(new Event("negotiationneeded")))}}function If(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],a={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=a[t]})}function e0(s,e){e.version>102||ss(s,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const Dm=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:e0,shimAddTrackRemoveTrack:Qg,shimAddTrackRemoveTrackWithNative:Jg,shimGetSendersWithDtmf:jg,shimGetUserMedia:qg,shimMediaStream:Yg,shimOnTrack:Kg,shimPeerConnection:If,shimSenderReceiverGetStats:Zg},Symbol.toStringTag,{value:"Module"}));function t0(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const i=s&&s.MediaStreamTrack;if(t.getUserMedia=function(a,l,c){Ld("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(a).then(l,c)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const a=function(c,f,d){f in c&&!(d in c)&&(c[d]=c[f],delete c[f])},l=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(c){return typeof c=="object"&&typeof c.audio=="object"&&(c=JSON.parse(JSON.stringify(c)),a(c.audio,"autoGainControl","mozAutoGainControl"),a(c.audio,"noiseSuppression","mozNoiseSuppression")),l(c)},i&&i.prototype.getSettings){const c=i.prototype.getSettings;i.prototype.getSettings=function(){const f=c.apply(this,arguments);return a(f,"mozAutoGainControl","autoGainControl"),a(f,"mozNoiseSuppression","noiseSuppression"),f}}if(i&&i.prototype.applyConstraints){const c=i.prototype.applyConstraints;i.prototype.applyConstraints=function(f){return this.kind==="audio"&&typeof f=="object"&&(f=JSON.parse(JSON.stringify(f)),a(f,"autoGainControl","mozAutoGainControl"),a(f,"noiseSuppression","mozNoiseSuppression")),c.apply(this,[f])}}}}function Mx(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const a=new DOMException("getDisplayMedia without video constraints is undefined");return a.name="NotFoundError",a.code=8,Promise.reject(a)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(i)}))}function n0(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Nf(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],a={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=a[t]}))}function i0(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[l,c,f]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[l||null]).then(d=>{if(e.version<53&&!c)try{d.forEach(h=>{h.type=t[h.type]||h.type})}catch(h){if(h.name!=="TypeError")throw h;d.forEach((g,_)=>{d.set(_,Object.assign({},g,{type:t[g.type]||g.type}))})}return d}).then(c,f)}}function r0(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const a=e.apply(this,[]);return a.forEach(l=>l._pc=this),a});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const a=t.apply(this,arguments);return a._pc=this,a}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function s0(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(a=>a._pc=this),i}),ss(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function a0(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){Ld("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function o0(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function l0(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let a=arguments[1]&&arguments[1].sendEncodings;a===void 0&&(a=[]),a=[...a];const l=a.length>0;l&&a.forEach(f=>{if("rid"in f&&!/^[a-z0-9]{0,16}$/i.test(f.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in f&&!(parseFloat(f.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in f&&!(parseFloat(f.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const c=t.apply(this,arguments);if(l){const{sender:f}=c,d=f.getParameters();(!("encodings"in d)||d.encodings.length===1&&Object.keys(d.encodings[0]).length===0)&&(d.encodings=a,f.sendEncodings=a,this.setParametersPromises.push(f.setParameters(d).then(()=>{delete f.sendEncodings}).catch(()=>{delete f.sendEncodings})))}return c})}function c0(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const a=t.apply(this,arguments);return"encodings"in a||(a.encodings=[].concat(this.sendEncodings||[{}])),a})}function u0(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function f0(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Lm=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:l0,shimCreateAnswer:f0,shimCreateOffer:u0,shimGetDisplayMedia:Mx,shimGetParameters:c0,shimGetStats:i0,shimGetUserMedia:t0,shimOnTrack:n0,shimPeerConnection:Nf,shimRTCDataChannel:o0,shimReceiverGetStats:s0,shimRemoveStream:a0,shimSenderGetStats:r0},Symbol.toStringTag,{value:"Module"}));function d0(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(a=>e.call(this,a,i)),i.getVideoTracks().forEach(a=>e.call(this,a,i))},s.RTCPeerConnection.prototype.addTrack=function(i,...a){return a&&a.forEach(l=>{this._localStreams?this._localStreams.includes(l)||this._localStreams.push(l):this._localStreams=[l]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const a=t.getTracks();this.getSenders().forEach(l=>{a.includes(l.track)&&this.removeTrack(l)})})}}function h0(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(a=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(a))return;this._remoteStreams.push(a);const l=new Event("addstream");l.stream=a,this.dispatchEvent(l)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(a){a.streams.forEach(l=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(l)>=0)return;i._remoteStreams.push(l);const c=new Event("addstream");c.stream=l,i.dispatchEvent(c)})}),e.apply(i,arguments)}}}function p0(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,a=e.setLocalDescription,l=e.setRemoteDescription,c=e.addIceCandidate;e.createOffer=function(h,g){const _=arguments.length>=2?arguments[2]:arguments[0],v=t.apply(this,[_]);return g?(v.then(h,g),Promise.resolve()):v},e.createAnswer=function(h,g){const _=arguments.length>=2?arguments[2]:arguments[0],v=i.apply(this,[_]);return g?(v.then(h,g),Promise.resolve()):v};let f=function(d,h,g){const _=a.apply(this,[d]);return g?(_.then(h,g),Promise.resolve()):_};e.setLocalDescription=f,f=function(d,h,g){const _=l.apply(this,[d]);return g?(_.then(h,g),Promise.resolve()):_},e.setRemoteDescription=f,f=function(d,h,g){const _=c.apply(this,[d]);return g?(_.then(h,g),Promise.resolve()):_},e.addIceCandidate=f}function m0(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=a=>i(g0(a))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,a,l){e.mediaDevices.getUserMedia(i).then(a,l)}.bind(e))}function g0(s){return s&&s.video!==void 0?Object.assign({},s,{video:$g(s.video)}):s}function _0(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(i,a){if(i&&i.iceServers){const l=[];for(let c=0;c<i.iceServers.length;c++){let f=i.iceServers[c];f.urls===void 0&&f.url?(Ld("RTCIceServer.url","RTCIceServer.urls"),f=JSON.parse(JSON.stringify(f)),f.urls=f.url,delete f.url,l.push(f)):l.push(i.iceServers[c])}i.iceServers=l}return new e(i,a)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function v0(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function x0(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const a=this.getTransceivers().find(c=>c.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&a?a.direction==="sendrecv"?a.setDirection?a.setDirection("sendonly"):a.direction="sendonly":a.direction==="recvonly"&&(a.setDirection?a.setDirection("inactive"):a.direction="inactive"):i.offerToReceiveAudio===!0&&!a&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const l=this.getTransceivers().find(c=>c.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&l?l.direction==="sendrecv"?l.setDirection?l.setDirection("sendonly"):l.direction="sendonly":l.direction==="recvonly"&&(l.setDirection?l.setDirection("inactive"):l.direction="inactive"):i.offerToReceiveVideo===!0&&!l&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function S0(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const Im=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:S0,shimCallbacksAPI:p0,shimConstraints:g0,shimCreateOfferLegacy:x0,shimGetUserMedia:m0,shimLocalStreamsAPI:d0,shimRTCIceServerUrls:_0,shimRemoteStreamsAPI:h0,shimTrackEventTransceiver:v0},Symbol.toStringTag,{value:"Module"}));var Qu={exports:{}},Nm;function Ex(){return Nm||(Nm=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((a,l)=>(l>0?"m="+a:a).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(a=>a.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const a={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let l=8;l<i.length;l+=2)switch(i[l]){case"raddr":a.relatedAddress=i[l+1];break;case"rport":a.relatedPort=parseInt(i[l+1],10);break;case"tcptype":a.tcpType=i[l+1];break;case"ufrag":a.ufrag=i[l+1],a.usernameFragment=i[l+1];break;default:a[i[l]]===void 0&&(a[i[l]]=i[l+1]);break}return a},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const a=t.component;a==="rtp"?i.push(1):a==="rtcp"?i.push(2):i.push(a),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const l=t.type;return i.push("typ"),i.push(l),l!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const a={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),a.name=i[0],a.clockRate=parseInt(i[1],10),a.channels=i.length===3?parseInt(i[2],10):1,a.numChannels=a.channels,a},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const a=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(a!==1?"/"+a:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={},a=t.substring(t.indexOf(" ")+1).split(";");for(let l=0;l<a.length;l++){const[c,...f]=a[l].trim().split("=");i[c.trim()]=f.length?f.join("="):void 0}return i},e.writeFmtp=function(t){let i="",a=t.payloadType;if(t.preferredPayloadType!==void 0&&(a=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const l=[];Object.keys(t.parameters).forEach(c=>{t.parameters[c]!==void 0?l.push(c+"="+t.parameters[c]):l.push(c)}),i+="a=fmtp:"+a+" "+l.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",a=t.payloadType;return t.preferredPayloadType!==void 0&&(a=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(l=>{i+="a=rtcp-fb:"+a+" "+l.type+(l.parameter&&l.parameter.length?" "+l.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),a={ssrc:parseInt(t.substring(7,i),10)},l=t.indexOf(":",i);return l>-1?(a.attribute=t.substring(i+1,l),a.value=t.substring(l+1)):a.attribute=t.substring(i+1),a},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(a=>parseInt(a,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let a="a=setup:"+i+`\r
`;return t.fingerprints.forEach(l=>{a+="a=fingerprint:"+l.algorithm+" "+l.value+`\r
`}),a},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const a=e.matchPrefix(t+i,"a=ice-ufrag:")[0],l=e.matchPrefix(t+i,"a=ice-pwd:")[0];return a&&l?{usernameFragment:a.substring(12),password:l.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},l=e.splitLines(t)[0].split(" ");i.profile=l[2];for(let f=3;f<l.length;f++){const d=l[f],h=e.matchPrefix(t,"a=rtpmap:"+d+" ")[0];if(h){const g=e.parseRtpMap(h),_=e.matchPrefix(t,"a=fmtp:"+d+" ");switch(g.parameters=_.length?e.parseFmtp(_[0]):{},g.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+d+" ").map(e.parseRtcpFb),i.codecs.push(g),g.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(g.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(f=>{i.headerExtensions.push(e.parseExtmap(f))});const c=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(f=>{c.forEach(d=>{f.rtcpFeedback.find(g=>g.type===d.type&&g.parameter===d.parameter)||f.rtcpFeedback.push(d)})}),i},e.writeRtpDescription=function(t,i){let a="";a+="m="+t+" ",a+=i.codecs.length>0?"9":"0",a+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",a+=i.codecs.map(c=>c.preferredPayloadType!==void 0?c.preferredPayloadType:c.payloadType).join(" ")+`\r
`,a+=`c=IN IP4 0.0.0.0\r
`,a+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(c=>{a+=e.writeRtpMap(c),a+=e.writeFmtp(c),a+=e.writeRtcpFb(c)});let l=0;return i.codecs.forEach(c=>{c.maxptime>l&&(l=c.maxptime)}),l>0&&(a+="a=maxptime:"+l+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(c=>{a+=e.writeExtmap(c)}),a},e.parseRtpEncodingParameters=function(t){const i=[],a=e.parseRtpParameters(t),l=a.fecMechanisms.indexOf("RED")!==-1,c=a.fecMechanisms.indexOf("ULPFEC")!==-1,f=e.matchPrefix(t,"a=ssrc:").map(v=>e.parseSsrcMedia(v)).filter(v=>v.attribute==="cname"),d=f.length>0&&f[0].ssrc;let h;const g=e.matchPrefix(t,"a=ssrc-group:FID").map(v=>v.substring(17).split(" ").map(E=>parseInt(E,10)));g.length>0&&g[0].length>1&&g[0][0]===d&&(h=g[0][1]),a.codecs.forEach(v=>{if(v.name.toUpperCase()==="RTX"&&v.parameters.apt){let x={ssrc:d,codecPayloadType:parseInt(v.parameters.apt,10)};d&&h&&(x.rtx={ssrc:h}),i.push(x),l&&(x=JSON.parse(JSON.stringify(x)),x.fec={ssrc:d,mechanism:c?"red+ulpfec":"red"},i.push(x))}}),i.length===0&&d&&i.push({ssrc:d});let _=e.matchPrefix(t,"b=");return _.length&&(_[0].indexOf("b=TIAS:")===0?_=parseInt(_[0].substring(7),10):_[0].indexOf("b=AS:")===0?_=parseInt(_[0].substring(5),10)*1e3*.95-2e3*8:_=void 0,i.forEach(v=>{v.maxBitrate=_})),i},e.parseRtcpParameters=function(t){const i={},a=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname")[0];a&&(i.cname=a.value,i.ssrc=a.ssrc);const l=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=l.length>0,i.compound=l.length===0;const c=e.matchPrefix(t,"a=rtcp-mux");return i.mux=c.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const a=e.matchPrefix(t,"a=msid:");if(a.length===1)return i=a[0].substring(7).split(" "),{stream:i[0],track:i[1]};const l=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="msid");if(l.length>0)return i=l[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),a=e.matchPrefix(t,"a=max-message-size:");let l;a.length>0&&(l=parseInt(a[0].substring(19),10)),isNaN(l)&&(l=65536);const c=e.matchPrefix(t,"a=sctp-port:");if(c.length>0)return{port:parseInt(c[0].substring(12),10),protocol:i.fmt,maxMessageSize:l};const f=e.matchPrefix(t,"a=sctpmap:");if(f.length>0){const d=f[0].substring(10).split(" ");return{port:parseInt(d[0],10),protocol:d[1],maxMessageSize:l}}},e.writeSctpDescription=function(t,i){let a=[];return t.protocol!=="DTLS/SCTP"?a=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:a=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&a.push("a=max-message-size:"+i.maxMessageSize+`\r
`),a.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,a){let l;const c=i!==void 0?i:2;return t?l=t:l=e.generateSessionId(),`v=0\r
o=`+(a||"thisisadapterortc")+" "+l+" "+c+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const a=e.splitLines(t);for(let l=0;l<a.length;l++)switch(a[l]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return a[l].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const a=e.splitLines(t)[0].substring(2).split(" ");return{kind:a[0],port:parseInt(a[1],10),protocol:a[2],fmt:a.slice(3).join(" ")}},e.parseOLine=function(t){const a=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:a[0],sessionId:a[1],sessionVersion:parseInt(a[2],10),netType:a[3],addressType:a[4],address:a[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let a=0;a<i.length;a++)if(i[a].length<2||i[a].charAt(1)!=="=")return!1;return!0},s.exports=e})(Qu)),Qu.exports}var y0=Ex();const Ks=Hg(y0),Tx=nx({__proto__:null,default:Ks},[y0]);function $l(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const a=new e(i),l=Ks.parseCandidate(i.candidate);for(const c in l)c in a||Object.defineProperty(a,c,{value:l[c]});return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new e(i)},s.RTCIceCandidate.prototype=e.prototype,ss(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Uf(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||ss(s,"icecandidate",e=>{if(e.candidate){const t=Ks.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function ql(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(f){if(!f||!f.sdp)return!1;const d=Ks.splitSections(f.sdp);return d.shift(),d.some(h=>{const g=Ks.parseMLine(h);return g&&g.kind==="application"&&g.protocol.indexOf("SCTP")!==-1})},i=function(f){const d=f.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(d===null||d.length<2)return-1;const h=parseInt(d[1],10);return h!==h?-1:h},a=function(f){let d=65536;return e.browser==="firefox"&&(e.version<57?f===-1?d=16384:d=2147483637:e.version<60?d=e.version===57?65535:65536:d=2147483637),d},l=function(f,d){let h=65536;e.browser==="firefox"&&e.version===57&&(h=65535);const g=Ks.matchPrefix(f.sdp,"a=max-message-size:");return g.length>0?h=parseInt(g[0].substring(19),10):e.browser==="firefox"&&d!==-1&&(h=2147483637),h},c=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:d}=this.getConfiguration();d==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const d=i(arguments[0]),h=a(d),g=l(arguments[0],d);let _;h===0&&g===0?_=Number.POSITIVE_INFINITY:h===0||g===0?_=Math.max(h,g):_=Math.min(h,g);const v={};Object.defineProperty(v,"maxMessageSize",{get(){return _}}),this._sctp=v}return c.apply(this,arguments)}}function Yl(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(a,l){const c=a.send;a.send=function(){const d=arguments[0],h=d.length||d.size||d.byteLength;if(a.readyState==="open"&&l.sctp&&h>l.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+l.sctp.maxMessageSize+" bytes)");return c.apply(a,arguments)}}const i=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const l=i.apply(this,arguments);return t(l,this),l},ss(s,"datachannel",a=>(t(a.channel,a.target),a))}function Of(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=a=>{const l=a.target;if(l._lastConnectionState!==l.connectionState){l._lastConnectionState=l.connectionState;const c=new Event("connectionstatechange",a);l.dispatchEvent(c)}return a},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Ff(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(a){if(a&&a.sdp&&a.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const l=a.sdp.split(`
`).filter(c=>c.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&a instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:a.type,sdp:l}):a.sdp=l}return t.apply(this,arguments)}}function Kl(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function jl(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let a=arguments[0]||{};if(typeof a!="object"||a.type&&a.sdp)return t.apply(this,arguments);if(a={type:a.type,sdp:a.sdp},!a.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":a.type="offer";break;default:a.type="answer";break}return a.sdp||a.type!=="offer"&&a.type!=="answer"?t.apply(this,[a]):(a.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(c=>t.apply(this,[c]))})}const Cx=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Ff,shimAddIceCandidateNullOrEmpty:Kl,shimConnectionState:Of,shimMaxMessageSize:ql,shimParameterlessSetLocalDescription:jl,shimRTCIceCandidate:$l,shimRTCIceCandidateRelayProtocol:Uf,shimSendThrowTypeError:Yl},Symbol.toStringTag,{value:"Module"}));function Rx({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Dd,i=yx(s),a={browserDetails:i,commonShim:Cx,extractVersion:Za,disableLog:xx,disableWarnings:Sx,sdp:Tx};switch(i.browser){case"chrome":if(!Dm||!If||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),a;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),a;t("adapter.js shimming chrome."),a.browserShim=Dm,Kl(s,i),jl(s),qg(s,i),Yg(s),If(s,i),Kg(s,i),Qg(s,i),jg(s),Zg(s,i),e0(s,i),$l(s),Uf(s),Of(s),ql(s,i),Yl(s,i),Ff(s,i);break;case"firefox":if(!Lm||!Nf||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),a;t("adapter.js shimming firefox."),a.browserShim=Lm,Kl(s,i),jl(s),t0(s,i),Nf(s,i),i0(s,i),n0(s),a0(s),r0(s),s0(s),o0(s),l0(s,i),c0(s,i),u0(s,i),f0(s,i),$l(s),Of(s),ql(s,i),Yl(s,i);break;case"safari":if(!Im||!e.shimSafari)return t("Safari shim is not included in this adapter release."),a;t("adapter.js shimming safari."),a.browserShim=Im,Kl(s,i),jl(s),_0(s),x0(s),p0(s),d0(s),h0(s),v0(s),m0(s),S0(s),$l(s),Uf(s),ql(s,i),Yl(s,i),Ff(s,i);break;default:t("Unsupported browser!");break}return a}const Um=Rx({window:typeof window>"u"?void 0:window});function as(s,e,t,i){Object.defineProperty(s,e,{get:t,set:i,enumerable:!0,configurable:!0})}class M0{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,a=Math.ceil(i/this.chunkedMTU);let l=0,c=0;for(;c<i;){const f=Math.min(i,c+this.chunkedMTU),d=e.slice(c,f),h={__peerData:this._dataCount,n:l,data:d,total:a};t.push(h),c=f,l++}return this._dataCount++,t}}}function Ax(s){let e=0;for(const a of s)e+=a.byteLength;const t=new Uint8Array(e);let i=0;for(const a of s)t.set(a,i),i+=a.byteLength;return t}const ef=Um.default||Um,Ga=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return ef.browserDetails.browser}getVersion(){return ef.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=ef.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},bx=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),E0=()=>Math.random().toString(36).slice(2),Om={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class wx extends M0{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(a){a.target&&t(a.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Om,this.browser=Ga.getBrowser(),this.browserVersion=Ga.getVersion(),this.pack=Vg,this.unpack=Gg,this.supports=(function(){const t={browser:Ga.isBrowserSupported(),webRTC:Ga.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(Om),t.audioVideo=!0;let a;try{a=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!a.ordered;try{a.binaryType="blob",t.binaryBlob=!Ga.isIOS}catch{}}catch{}finally{a&&a.close()}}catch{}finally{i&&i.close()}return t})(),this.validateId=bx,this.randomToken=E0}}const qn=new wx,Px="PeerJS: ";class Dx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[Px,...t];for(const a in i)i[a]instanceof Error&&(i[a]="("+i[a].name+") "+i[a].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var qe=new Dx,Id={},Lx=Object.prototype.hasOwnProperty,Bn="~";function ro(){}Object.create&&(ro.prototype=Object.create(null),new ro().__proto__||(Bn=!1));function Ix(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function T0(s,e,t,i,a){if(typeof t!="function")throw new TypeError("The listener must be a function");var l=new Ix(t,i||s,a),c=Bn?Bn+e:e;return s._events[c]?s._events[c].fn?s._events[c]=[s._events[c],l]:s._events[c].push(l):(s._events[c]=l,s._eventsCount++),s}function Zl(s,e){--s._eventsCount===0?s._events=new ro:delete s._events[e]}function In(){this._events=new ro,this._eventsCount=0}In.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)Lx.call(t,i)&&e.push(Bn?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};In.prototype.listeners=function(e){var t=Bn?Bn+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var a=0,l=i.length,c=new Array(l);a<l;a++)c[a]=i[a].fn;return c};In.prototype.listenerCount=function(e){var t=Bn?Bn+e:e,i=this._events[t];return i?i.fn?1:i.length:0};In.prototype.emit=function(e,t,i,a,l,c){var f=Bn?Bn+e:e;if(!this._events[f])return!1;var d=this._events[f],h=arguments.length,g,_;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,i),!0;case 4:return d.fn.call(d.context,t,i,a),!0;case 5:return d.fn.call(d.context,t,i,a,l),!0;case 6:return d.fn.call(d.context,t,i,a,l,c),!0}for(_=1,g=new Array(h-1);_<h;_++)g[_-1]=arguments[_];d.fn.apply(d.context,g)}else{var v=d.length,x;for(_=0;_<v;_++)switch(d[_].once&&this.removeListener(e,d[_].fn,void 0,!0),h){case 1:d[_].fn.call(d[_].context);break;case 2:d[_].fn.call(d[_].context,t);break;case 3:d[_].fn.call(d[_].context,t,i);break;case 4:d[_].fn.call(d[_].context,t,i,a);break;default:if(!g)for(x=1,g=new Array(h-1);x<h;x++)g[x-1]=arguments[x];d[_].fn.apply(d[_].context,g)}}return!0};In.prototype.on=function(e,t,i){return T0(this,e,t,i,!1)};In.prototype.once=function(e,t,i){return T0(this,e,t,i,!0)};In.prototype.removeListener=function(e,t,i,a){var l=Bn?Bn+e:e;if(!this._events[l])return this;if(!t)return Zl(this,l),this;var c=this._events[l];if(c.fn)c.fn===t&&(!a||c.once)&&(!i||c.context===i)&&Zl(this,l);else{for(var f=0,d=[],h=c.length;f<h;f++)(c[f].fn!==t||a&&!c[f].once||i&&c[f].context!==i)&&d.push(c[f]);d.length?this._events[l]=d.length===1?d[0]:d:Zl(this,l)}return this};In.prototype.removeAllListeners=function(e){var t;return e?(t=Bn?Bn+e:e,this._events[t]&&Zl(this,t)):(this._events=new ro,this._eventsCount=0),this};In.prototype.off=In.prototype.removeListener;In.prototype.addListener=In.prototype.on;In.prefixed=Bn;In.EventEmitter=In;Id=In;var os={};as(os,"ConnectionType",()=>Ur);as(os,"PeerErrorType",()=>rn);as(os,"BaseConnectionErrorType",()=>kf);as(os,"DataConnectionErrorType",()=>Nd);as(os,"SerializationType",()=>hc);as(os,"SocketEventType",()=>Lr);as(os,"ServerMessageType",()=>Dn);var Ur=(function(s){return s.Data="data",s.Media="media",s})({}),rn=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),kf=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),Nd=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),hc=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),Lr=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),Dn=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const C0="1.5.5";class Nx extends Id.EventEmitter{constructor(e,t,i,a,l,c=5e3){super(),this.pingInterval=c,this._disconnected=!0,this._messagesQueue=[];const f=e?"wss://":"ws://";this._baseUrl=f+t+":"+i+a+"peerjs?key="+l}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+C0),this._disconnected=!1,this._socket.onmessage=a=>{let l;try{l=JSON.parse(a.data),qe.log("Server message received:",l)}catch{qe.log("Invalid server message",a.data);return}this.emit(Lr.Message,l)},this._socket.onclose=a=>{this._disconnected||(qe.log("Socket closed.",a),this._cleanup(),this._disconnected=!0,this.emit(Lr.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),qe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){qe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Dn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Lr.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class R0{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Ur.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,a={ordered:!!e.reliable},l=t.createDataChannel(i.label,a);i._initializeDataChannel(l),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){qe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,a=this.connection.type,l=this.connection.provider;qe.log("Listening for ICE candidates."),e.onicecandidate=c=>{!c.candidate||!c.candidate.candidate||(qe.log(`Received ICE candidates for ${t}:`,c.candidate),l.socket.send({type:Dn.Candidate,payload:{candidate:c.candidate,type:a,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":qe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(kf.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":qe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(kf.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":qe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},qe.log("Listening for data channel"),e.ondatachannel=c=>{qe.log("Received data channel");const f=c.channel;l.getConnection(t,i)._initializeDataChannel(f)},qe.log("Listening for remote stream"),e.ontrack=c=>{qe.log("Received remote stream");const f=c.streams[0],d=l.getConnection(t,i);if(d.type===Ur.Media){const h=d;this._addStreamToMediaConnection(f,h)}}}cleanup(){qe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const a=this.connection.dataChannel;a&&(i=!!a.readyState&&a.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);qe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),qe.log("Set localDescription:",i,`for:${this.connection.peer}`);let a={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Ur.Data){const l=this.connection;a={...a,label:l.label,reliable:l.reliable,serialization:l.serialization}}t.socket.send({type:Dn.Offer,payload:a,dst:this.connection.peer})}catch(a){a!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(rn.WebRTC,a),qe.log("Failed to setLocalDescription, ",a))}}catch(i){t.emitError(rn.WebRTC,i),qe.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();qe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),qe.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:Dn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(a){t.emitError(rn.WebRTC,a),qe.log("Failed to setLocalDescription, ",a)}}catch(i){t.emitError(rn.WebRTC,i),qe.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,a=this.connection.provider;qe.log("Setting remote description",t);const l=this;try{await i.setRemoteDescription(t),qe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await l._makeAnswer()}catch(c){a.emitError(rn.WebRTC,c),qe.log("Failed to setRemoteDescription, ",c)}}async handleCandidate(e){qe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),qe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(rn.WebRTC,t),qe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(qe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return qe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){qe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class A0 extends Id.EventEmitter{emitError(e,t){qe.error("Error:",t),this.emit("error",new Ux(`${e}`,t))}}class Ux extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class b0 extends A0{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}class sc extends b0{static#e=this.ID_PREFIX="mc_";get type(){return Ur.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||sc.ID_PREFIX+qn.randomToken(),this._negotiator=new R0(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{qe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{qe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){qe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case Dn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case Dn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:qe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){qe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const a of i)this.handleMessage(a);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class Ox{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:a,path:l,key:c}=this._options,f=new URL(`${t}://${i}:${a}${l}${c}/${e}`);return f.searchParams.set("ts",`${Date.now()}${Math.random()}`),f.searchParams.set("version",C0),fetch(f.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){qe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==qn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===qn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw qe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class ac extends b0{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Ur.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||ac.ID_PREFIX+E0(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new R0(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{qe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{qe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{qe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Nd.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Dn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Dn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:qe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class Ud extends ac{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ac.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return qe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class tf extends Ud{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new M0,this.serialization=hc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Gg(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const a=Ax(i.data);this._handleDataMessage({data:a})}}_send(e,t){const i=Vg(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);qe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class Fx extends Ud{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=hc.None}}class kx extends Ud{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=qn.chunkedMTU){this.emitError(Nd.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=hc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class Od extends A0{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Fx,json:kx,binary:tf,"binary-utf8":tf,default:tf},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:qn.CLOUD_HOST,port:qn.CLOUD_PORT,path:"/",key:Od.DEFAULT_KEY,token:qn.randomToken(),config:qn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==qn.CLOUD_HOST?this._options.secure=qn.isSecure():this._options.host==qn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&qe.setLogFunction(this._options.logFunction),qe.logLevel=this._options.debug||0,this._api=new Ox(t),this._socket=this._createServerConnection(),!qn.supports.audioVideo&&!qn.supports.data){this._delayedAbort(rn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!qn.validateId(i)){this._delayedAbort(rn.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(a=>this._initialize(a)).catch(a=>this._abort(rn.ServerError,a))}_createServerConnection(){const e=new Nx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Lr.Message,t=>{this._handleMessage(t)}),e.on(Lr.Error,t=>{this._abort(rn.SocketError,t)}),e.on(Lr.Disconnected,()=>{this.disconnected||(this.emitError(rn.Network,"Lost connection to server."),this.disconnect())}),e.on(Lr.Close,()=>{this.disconnected||this._abort(rn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,a=e.src;switch(t){case Dn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Dn.Error:this._abort(rn.ServerError,i.msg);break;case Dn.IdTaken:this._abort(rn.UnavailableID,`ID "${this.id}" is taken`);break;case Dn.InvalidKey:this._abort(rn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Dn.Leave:qe.log(`Received leave message from ${a}`),this._cleanupPeer(a),this._connections.delete(a);break;case Dn.Expire:this.emitError(rn.PeerUnavailable,`Could not connect to peer ${a}`);break;case Dn.Offer:{const l=i.connectionId;let c=this.getConnection(a,l);if(c&&(c.close(),qe.warn(`Offer received for existing Connection ID:${l}`)),i.type===Ur.Media){const d=new sc(a,this,{connectionId:l,_payload:i,metadata:i.metadata});c=d,this._addConnection(a,c),this.emit("call",d)}else if(i.type===Ur.Data){const d=new this._serializers[i.serialization](a,this,{connectionId:l,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});c=d,this._addConnection(a,c),this.emit("connection",d)}else{qe.warn(`Received malformed connection type:${i.type}`);return}const f=this._getMessages(l);for(const d of f)c.handleMessage(d);break}default:{if(!i){qe.warn(`You received a malformed message from ${a} of type ${t}`);return}const l=i.connectionId,c=this.getConnection(a,l);c&&c.peerConnection?c.handleMessage(e):l?this._storeMessage(l,e):qe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){qe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(rn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){qe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(rn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){qe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const a=new sc(e,this,{...i,_stream:t});return this._addConnection(e,a),a}_addConnection(e,t){qe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const a of i)if(a.connectionId===t)return a;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){qe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(qe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;qe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)qe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)qe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(rn.ServerError,t))}}var Bx=Od;const Fm=[{name:"Gholdengo",id:1e3,role:"Special setup",ability:"Good as Gold",item:"Air Balloon",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Fighting",moves:["Make It Rain","Shadow Ball","Nasty Plot","Recover"],quirk:"Air Balloon buys a turn to set up; then the golden tax collector arrives."},{name:"Great Tusk",id:984,role:"Spinner / breaker",ability:"Protosynthesis",item:"Booster Energy",nature:"Jolly",evs:"252 Atk / 4 Def / 252 Spe",tera:"Ground",moves:["Headlong Rush","Close Combat","Rapid Spin","Knock Off"],quirk:"A hazard remover that hits like it has a personal grudge."},{name:"Iron Valiant",id:1006,role:"Mixed attacker",ability:"Quark Drive",item:"Booster Energy",nature:"Naive",evs:"4 Atk / 252 SpA / 252 Spe",tera:"Ghost",moves:["Moonblast","Close Combat","Knock Off","Encore"],quirk:"Encore catches setup attempts; the rest is an extremely rude greeting."},{name:"Kingambit",id:983,role:"Late-game cleaner",ability:"Supreme Overlord",item:"Black Glasses",nature:"Adamant",evs:"252 HP / 252 Atk / 4 SpD",tera:"Dark",moves:["Kowtow Cleave","Sucker Punch","Iron Head","Swords Dance"],quirk:"The last Pokémon standing gets promoted to management."},{name:"Clodsire",id:980,role:"Special wall / rocks",ability:"Unaware",item:"Leftovers",nature:"Careful",evs:"252 HP / 4 Def / 252 SpD",tera:"Water",moves:["Earthquake","Toxic","Recover","Stealth Rock"],quirk:"Ignores your boosts, your plans, and probably your entire team."},{name:"Tinkaton",id:959,role:"Utility gremlin",ability:"Mold Breaker",item:"Air Balloon",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Fairy",moves:["Gigaton Hammer","Play Rough","Knock Off","Encore"],quirk:"Encore into Gigaton Hammer is a deeply personal problem."},{name:"Dondozo",id:977,role:"Physical wall",ability:"Unaware",item:"Leftovers",nature:"Impish",evs:"252 HP / 252 Def / 4 SpD",tera:"Dragon",moves:["Wave Crash","Body Press","Rest","Sleep Talk"],quirk:"A giant sleepy fish that refuses to respect your setup."},{name:"Annihilape",id:979,role:"Bulky setup",ability:"Defiant",item:"Leftovers",nature:"Careful",evs:"252 HP / 4 Atk / 252 SpD",tera:"Fire",moves:["Rage Fist","Drain Punch","Bulk Up","Taunt"],quirk:"Every hit makes the grudge worse. Taunt is just bad manners."},{name:"Meowscarada",id:908,role:"Fast pivot",ability:"Protean",item:"Heavy-Duty Boots",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Grass",moves:["Flower Trick","Knock Off","U-turn","Play Rough"],quirk:"A magician: the item disappears, then the Pokémon does too."},{name:"Skeledirge",id:911,role:"Unaware tank",ability:"Unaware",item:"Heavy-Duty Boots",nature:"Bold",evs:"252 HP / 252 Def / 4 SpA",tera:"Fairy",moves:["Torch Song","Shadow Ball","Slack Off","Will-O-Wisp"],quirk:"Torch Song snowballs while Unaware refuses to be impressed."},{name:"Quaquaval",id:914,role:"Momentum sweeper",ability:"Moxie",item:"Life Orb",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Water",moves:["Aqua Step","Close Combat","Ice Spinner","Rapid Spin"],quirk:"Dances faster, spins hazards away, and gets meaner after a KO."},{name:"Garganacl",id:934,role:"Salt / stall",ability:"Purifying Salt",item:"Leftovers",nature:"Careful",evs:"252 HP / 4 Def / 252 SpD",tera:"Fairy",moves:["Salt Cure","Recover","Stealth Rock","Protect"],quirk:"Protect lets Salt Cure collect rent while you do absolutely nothing."},{name:"Baxcalibur",id:998,role:"Setup breaker",ability:"Thermal Exchange",item:"Loaded Dice",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Ice",moves:["Glaive Rush","Icicle Spear","Earthquake","Dragon Dance"],quirk:"Loaded Dice turns the ice move into a very committed dice roll."},{name:"Dragapult",id:887,role:"Fast attacker",ability:"Infiltrator",item:"Life Orb",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Dragon",moves:["Dragon Darts","Phantom Force","U-turn","Dragon Dance"],quirk:"Phantom Force burns a turn; U-turn refuses to stay for the consequences."},{name:"Corviknight",id:823,role:"Defog / pivot",ability:"Pressure",item:"Rocky Helmet",nature:"Impish",evs:"252 HP / 168 Def / 88 SpD",tera:"Dragon",moves:["Brave Bird","U-turn","Roost","Defog"],quirk:"The helmet makes contact attackers pay a cover charge."},{name:"Rotom-Wash",id:479,role:"Bulky pivot",ability:"Levitate",item:"Sitrus Berry",nature:"Bold",evs:"248 HP / 8 SpA / 8 Spe",tera:"Grass",moves:["Hydro Pump","Volt Switch","Will-O-Wisp","Pain Split"],quirk:"Pain Split is the most passive-aggressive way to ask for HP."},{name:"Garchomp",id:445,role:"Rocks / attacker",ability:"Rough Skin",item:"Rocky Helmet",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Steel",moves:["Earthquake","Dragon Claw","Stealth Rock","Fire Fang"],quirk:"Rocky Helmet plus Rough Skin: touching the shark is a subscription fee."},{name:"Azumarill",id:184,role:"Belly Drum sweeper",ability:"Huge Power",item:"Sitrus Berry",nature:"Adamant",evs:"252 HP / 252 Atk / 4 SpD",tera:"Water",moves:["Belly Drum","Aqua Jet","Play Rough","Liquidation"],quirk:"One snack, one drum solo, then a tiny blue war crime."},{name:"Volcarona",id:637,role:"Quiver Dance sweeper",ability:"Flame Body",item:"Heavy-Duty Boots",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Ground",moves:["Fiery Dance","Bug Buzz","Giga Drain","Quiver Dance"],quirk:"A dance build with a Ground Tera surprise for would-be counters."},{name:"Breloom",id:286,role:"Sleep / priority",ability:"Technician",item:"Loaded Dice",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Rock",moves:["Spore","Bullet Seed","Mach Punch","Swords Dance"],quirk:"Puts something to sleep, then launches a suspicious number of seeds."},{name:"Gengar",id:94,role:"Special attacker",ability:"Cursed Body",item:"Focus Sash",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Ghost",moves:["Shadow Ball","Sludge Bomb","Focus Blast","Destiny Bond"],quirk:"Focus Sash plus Destiny Bond: a two-for-one deal, allegedly."},{name:"Serperior",id:497,role:"Contrary setup",ability:"Contrary",item:"Leftovers",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Fire",moves:["Leaf Storm","Glare","Leech Seed","Substitute"],quirk:"Leaf Storm boosts instead of dropping SpA; Glare makes the opponent sit down."},{name:"Grimmsnarl",id:861,role:"Prankster screens",ability:"Prankster",item:"Light Clay",nature:"Careful",evs:"252 HP / 4 Atk / 252 SpD",tera:"Ghost",moves:["Reflect","Light Screen","Spirit Break","Parting Shot"],quirk:"Eight turns of team support and a rude exit."},{name:"Hydreigon",id:635,role:"Choice attacker",ability:"Levitate",item:"Choice Scarf",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Steel",moves:["Draco Meteor","Dark Pulse","Flamethrower","U-turn"],quirk:"The scarf says “I’m leaving”; U-turn makes sure of it."},{name:"Maushold",id:925,role:"Tidy Up sweeper",ability:"Technician",item:"Wide Lens",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Normal",moves:["Population Bomb","Tidy Up","Encore","Low Kick"],quirk:"Wide Lens Population Bomb: the family comes together to ruin your day."},{name:"Ditto",id:132,role:"Imposter revenge",ability:"Imposter",item:"Choice Scarf",nature:"Relaxed",evs:"252 HP / 4 Def / 252 SpD",tera:"Ghost",moves:["Transform"],quirk:"Your opponent brought six Pokémon. Ditto brought a mirror."},{name:"Sneasler",id:903,role:"Unburden cleaner",ability:"Unburden",item:"White Herb",nature:"Adamant",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Flying",moves:["Close Combat","Dire Claw","Acrobatics","Swords Dance"],quirk:"White Herb patches the Close Combat drops, then Unburden turns on."},{name:"Toxapex",id:748,role:"Defensive utility",ability:"Regenerator",item:"Black Sludge",nature:"Bold",evs:"252 HP / 252 Def / 4 SpD",tera:"Dark",moves:["Baneful Bunker","Recover","Haze","Toxic Spikes"],quirk:"Bunker, recover, haze. It’s not a battle; it’s a waiting room."},{name:"Clefable",id:36,role:"Magic Guard utility",ability:"Magic Guard",item:"Life Orb",nature:"Bold",evs:"252 HP / 252 Def / 4 SpD",tera:"Water",moves:["Moonblast","Soft-Boiled","Thunder Wave","Knock Off"],quirk:"Life Orb with Magic Guard: all the menace, none of the chip damage."},{name:"Scizor",id:212,role:"Priority pivot",ability:"Technician",item:"Metal Coat",nature:"Adamant",evs:"248 HP / 252 Atk / 8 SpD",tera:"Steel",moves:["Bullet Punch","U-turn","Knock Off","Swords Dance"],quirk:"Metal Coat Bullet Punch is the Pokémon equivalent of a steel chair."},{name:"Iron Hands",id:992,role:"Bulky attacker",ability:"Quark Drive",item:"Assault Vest",nature:"Adamant",evs:"252 HP / 252 Atk / 4 SpD",tera:"Electric",moves:["Drain Punch","Wild Charge","Ice Punch","Volt Switch"],quirk:"Assault Vest with Volt Switch: it can leave, but it will make it awkward."},{name:"Sinistcha",id:1013,role:"Special sustain",ability:"Heatproof",item:"Leftovers",nature:"Bold",evs:"252 HP / 4 SpA / 252 Def",tera:"Water",moves:["Matcha Gotcha","Shadow Ball","Strength Sap","Calm Mind"],quirk:"Strength Sap steals the opponent’s gains and turns them into tea time."},{name:"Mimikyu",id:778,role:"Disguise setup",ability:"Disguise",item:"Life Orb",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Ghost",moves:["Play Rough","Shadow Sneak","Swords Dance","Drain Punch"],quirk:"One free disguise hit, then a very unfriendly drain punch."},{name:"Hatterene",id:858,role:"Magic Bounce setup",ability:"Magic Bounce",item:"Leftovers",nature:"Quiet",evs:"252 HP / 252 SpA / 4 SpD",tera:"Water",moves:["Psychic","Draining Kiss","Mystical Fire","Calm Mind"],quirk:"Bounces hazards back and calmly starts setting up."},{name:"Froslass",id:478,role:"Suicide lead",ability:"Cursed Body",item:"Focus Sash",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Ghost",moves:["Spikes","Taunt","Ice Beam","Destiny Bond"],quirk:"Gets hazards up, then offers a deeply cursed trade."},{name:"Pawmot",id:923,role:"Revival support",ability:"Natural Cure",item:"Leppa Berry",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Electric",moves:["Revival Blessing","Close Combat","Double Shock","Mach Punch"],quirk:"Leppa Berry is emergency battery backup for the revival service."},{name:"Kilowattrel",id:941,role:"Fast pivot",ability:"Volt Absorb",item:"Heavy-Duty Boots",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Flying",moves:["Thunderbolt","Hurricane","Volt Switch","Roost"],quirk:"Volt Absorb invites electric moves; the boots keep it airborne."},{name:"Sableye",id:302,role:"Prankster disruption",ability:"Prankster",item:"Rocky Helmet",nature:"Careful",evs:"252 HP / 4 Def / 252 SpD",tera:"Steel",moves:["Knock Off","Will-O-Wisp","Recover","Encore"],quirk:"Encore and Will-O-Wisp: the tiny gremlin is now your manager."}],Sl=(s,e)=>e.some(t=>s.toLowerCase().includes(t)),zx=s=>{const e=s.role.toLowerCase();return Sl(e,["hazard","spikes","rocks","defog","spinner","suicide"])?"hazard":Sl(e,["wall","tank","defensive","utility","support","screens","revival","disruption"])?"support":Sl(e,["setup","sweeper","cleaner","breaker","dance","drum"])?"setup":Sl(e,["pivot","attacker","revenge","priority"])?"attacker":"other"};function Hx(s=Math.random){const e=i=>Math.floor(s()*i);for(let i=0;i<200;i++){const a=[...Fm];for(let d=a.length-1;d>0;d--){const h=e(d+1);[a[d],a[h]]=[a[h],a[d]]}const l=a.slice(0,12),c={};if(l.forEach(d=>{const h=zx(d);c[h]=(c[h]||0)+1}),(c.hazard||0)>=1&&(c.hazard||0)<=3&&(c.support||0)>=1&&(c.support||0)<=3&&(c.setup||0)>=1&&(c.setup||0)<=4&&(c.attacker||0)>=2&&new Set(l.map(d=>d.name)).size===12)return[l.slice(0,6),l.slice(6,12)]}const t=[...Fm].sort(()=>s()-.5).slice(0,12);return[t.slice(0,6),t.slice(6,12)]}function Va(s){return s.map(e=>`${e.name} @ ${e.item}
Ability: ${e.ability}
Tera Type: ${e.tera}
EVs: ${e.evs}
${e.nature} Nature
${e.moves.map(t=>" - "+t).join(`
`)}`).join(`

`)}function Gx(s,e){return!s[0]||!s[1]||s[0]===s[1]?null:s[0]===e?0:s[1]===e?1:null}const Vx=s=>Math.floor(s/2)+1,km=(s,e,t)=>({code:s,players:[{name:e,token:crypto.randomUUID()},null],bestOf:t,phase:"calls",calls:[null,null],result:null,tossWinner:null,candidates:null,teams:[[],[]],wins:[0,0],games:0,history:[]});function Wx(){const[s,e]=lt.useState(null),[t,i]=lt.useState(null),[a,l]=lt.useState(!1),[c,f]=lt.useState(""),d=lt.useRef(null),h=lt.useRef([]),g=lt.useRef(null),_=lt.useRef(null),v=lt.useRef(!1),x=lt.useRef(null),E=lt.useCallback(()=>{const N=g.current;N&&(e({...N}),h.current.forEach(b=>{b.open&&b.send({type:"state",room:N})}))},[]),A=lt.useCallback((N,b=0)=>{const U=g.current;if(!U||!v.current)return;const w=JSON.parse(JSON.stringify(U));if(N.type==="join"&&!w.players[1])w.players[1]={name:String(N.name||"Player 2").slice(0,24),token:crypto.randomUUID()};else if(N.type==="call"&&w.phase==="calls"){const M=N.side==="heads"||N.side==="tails"?N.side:null;M&&w.calls[b]!==M&&(w.calls[b]=M)}else if(N.type==="flip"&&w.phase==="calls"&&w.calls.every(Boolean)&&w.players[1])w.result=(crypto.getRandomValues(new Uint8Array(1))[0]&1)===0?"heads":"tails",w.tossWinner=Gx(w.calls,w.result),w.phase="spin";else if(N.type==="spin"&&w.phase==="spin"){const M=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;w.candidates=Hx(M),w.phase="pick"}else if(N.type==="pick"&&w.phase==="pick"&&b===w.tossWinner&&w.candidates){const M=Number(N.team)===0?0:1;w.teams[b]=w.candidates[M].slice(),w.teams[1-b]=w.candidates[1-M].slice(),w.phase="battle"}else if(N.type==="result"&&w.phase==="battle"&&w.teams[0].length===6){const M=Number(N.winner)===0?0:1;w.games++,w.wins[M]++,w.history.push({game:w.games,winner:M,teams:[w.teams[0].slice(),w.teams[1].slice()]}),w.phase=w.wins[M]>=Vx(w.bestOf)?"complete":"between"}else N.type==="next"&&w.phase==="between"?(w.phase="calls",w.calls=[null,null],w.result=null,w.tossWinner=null,w.candidates=null,w.teams=[[],[]]):N.type==="reset"&&(w.phase="calls",w.calls=[null,null],w.result=null,w.tossWinner=null,w.candidates=null,w.teams=[[],[]],w.wins=[0,0],w.games=0,w.history=[],w.bestOf=Number(N.bestOf)===5?5:3);g.current=w,E()},[E]);lt.useEffect(()=>{const N=new Bx({debug:0});return d.current=N,N.on("open",()=>{l(!0);const b=x.current;if(b){if(x.current=null,b.kind==="create"){const U=km(N.id,b.name,b.bestOf||3);g.current=U,v.current=!0,_.current=0,i(0),e(U),localStorage.setItem("pc-peer",JSON.stringify({code:N.id,name:b.name}))}else if(b.code){const U=N.connect(b.code);h.current.push(U),U.on("open",()=>{U.send({type:"join",name:b.name}),_.current=1,i(1)}),U.on("data",w=>{w?.type==="state"&&(g.current=w.room,e(w.room))}),U.on("error",()=>f("Peer connection failed"))}}}),N.on("connection",b=>{h.current.push(b),b.on("data",U=>{U?.type!=="state"&&A(U,1)}),b.on("open",()=>E())}),N.on("error",b=>f("Relay: "+String(b.message))),()=>{h.current.forEach(b=>b.close()),N.destroy()}},[A,E]);const S=lt.useCallback((N,b)=>{if(localStorage.removeItem("pc-peer"),d.current?.open){const U=km(d.current.id,N,b);g.current=U,v.current=!0,_.current=0,i(0),e(U),localStorage.setItem("pc-peer",JSON.stringify({code:d.current.id,name:N}))}else x.current={kind:"create",name:N,bestOf:b}},[]),y=lt.useCallback((N,b)=>{if(d.current?.open&&N){const U=d.current.connect(N);h.current.push(U),U.on("open",()=>{U.send({type:"join",name:b}),_.current=1,i(1)}),U.on("data",w=>{w?.type==="state"&&(g.current=w.room,e(w.room))}),U.on("error",()=>f("Peer connection failed"))}else x.current={kind:"join",name:b,code:N}},[]),L=lt.useCallback(N=>{v.current?A(N,0):h.current[0]?.open?h.current[0].send(N):f("Not connected to host")},[A]);return{room:s,seat:t??_.current,connected:a,error:c,create:S,join:y,send:L,setError:f,relay:"peerjs"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="187",Xx=0,Bm=1,$x=2,Jl=1,qx=2,Ja=3,ns=0,jn=1,ir=2,js=0,to=1,zm=2,Hm=3,Gm=4,Yx=5,Ys=100,Kx=101,jx=102,Zx=103,Jx=104,Qx=200,eS=201,tS=202,nS=203,w0=204,P0=205,iS=206,rS=207,sS=208,aS=209,oS=210,lS=211,cS=212,uS=213,fS=214,Bf=0,zf=1,Hf=2,so=3,Gf=4,Vf=5,Wf=6,Xf=7,D0=0,dS=1,hS=2,sr=0,L0=1,I0=2,N0=3,kd=4,U0=5,O0=6,F0=7,k0=300,Js=301,ao=302,nf=303,rf=304,$f=1e3,rr=1001,qf=1002,Mn=1003,pS=1004,yl=1005,Kn=1006,sf=1007,Ir=1008,ai=1009,B0=1010,z0=1011,oo=1012,Bd=1013,Gi=1014,Ri=1015,Vi=1016,zd=1017,Hd=1018,Qs=1020,H0=35902,G0=35899,V0=1021,W0=1022,Bi=1023,Or=1026,Nr=1027,Gd=1028,Vd=1029,is=1030,Wd=1031,Xd=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Yf=35840,Kf=35841,jf=35842,Zf=35843,Jf=36196,Qf=37492,ed=37496,td=37488,nd=37489,oc=37490,id=37491,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,fd=37815,dd=37816,hd=37817,pd=37818,md=37819,gd=37820,_d=37821,vd=36492,xd=36494,Sd=36495,yd=36283,Md=36284,lc=36285,Ed=36286,mS=3200,Td=0,gS=1,Dr="",si="srgb",cc="srgb-linear",uc="linear",Dt="srgb",af=7680,_S=519,vS=512,xS=513,SS=514,X0=515,yS=516,MS=517,$0=518,q0=519,ES=35044,Vm="300 es",Ai=2e3,lo=2001;function TS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CS(){const s=fc("canvas");return s.style.display="block",s}const Wm={};function Xm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Y0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=Y0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=Y0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ic(...s){const e=s.join(" ");e in Wm||(Wm[e]=!0,ot(...s))}function RS(s,e,t){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const AS={[Bf]:Bf,[Hf]:Wf,[Gf]:Gf,[so]:Vf,[zf]:zf,[Wf]:Hf,[Xf]:Xf,[Vf]:so};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=Math.PI/180,Cd=180/Math.PI;function uo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function bS(s,e){return(s%e+e)%e}function lf(s,e,t){return(1-t)*s+t*e}function wS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $d(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function PS(s,e){if(e.constructor===Float32Array)return s;const t=$d(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function DS(s,e){if(e.constructor===Float32Array)return s;const t=$d(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}class Mt{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,c,f){let d=i[a+0],h=i[a+1],g=i[a+2],_=i[a+3],v=l[c+0],x=l[c+1],E=l[c+2],A=l[c+3];if(_!==A||d!==v||h!==x||g!==E){let S=d*v+h*x+g*E+_*A;S<0&&(v=-v,x=-x,E=-E,A=-A,S=-S);let y=1-f;if(S<.9995){const L=Math.acos(S),N=Math.sin(L);y=Math.sin(y*L)/N,f=Math.sin(f*L)/N,d=d*y+v*f,h=h*y+x*f,g=g*y+E*f,_=_*y+A*f}else{d=d*y+v*f,h=h*y+x*f,g=g*y+E*f,_=_*y+A*f;const L=1/Math.sqrt(d*d+h*h+g*g+_*_);d*=L,h*=L,g*=L,_*=L}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,l,c){const f=i[a],d=i[a+1],h=i[a+2],g=i[a+3],_=l[c],v=l[c+1],x=l[c+2],E=l[c+3];return e[t]=f*E+g*_+d*x-h*v,e[t+1]=d*E+g*v+h*_-f*x,e[t+2]=h*E+g*x+f*v-d*_,e[t+3]=g*E-f*_-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(i/2),g=f(a/2),_=f(l/2),v=d(i/2),x=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=v*g*_+h*x*E,this._y=h*x*_-v*g*E,this._z=h*g*E+v*x*_,this._w=h*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+h*x*E,this._y=h*x*_-v*g*E,this._z=h*g*E-v*x*_,this._w=h*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-h*x*E,this._y=h*x*_+v*g*E,this._z=h*g*E+v*x*_,this._w=h*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-h*x*E,this._y=h*x*_+v*g*E,this._z=h*g*E-v*x*_,this._w=h*g*_+v*x*E;break;case"YZX":this._x=v*g*_+h*x*E,this._y=h*x*_+v*g*E,this._z=h*g*E-v*x*_,this._w=h*g*_-v*x*E;break;case"XZY":this._x=v*g*_-h*x*E,this._y=h*x*_-v*g*E,this._z=h*g*E+v*x*_,this._w=h*g*_+v*x*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],_=t[10],v=i+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-d)*x,this._y=(l-h)*x,this._z=(c-a)*x}else if(i>f&&i>_){const x=2*Math.sqrt(1+i-f-_);this._w=(g-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(l+h)/x}else if(f>_){const x=2*Math.sqrt(1+f-i-_);this._w=(l-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-i-f);this._w=(c-a)/x,this._x=(l+h)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=i*g+c*f+a*h-l*d,this._y=a*g+c*d+l*f-i*h,this._z=l*g+c*h+i*d-a*f,this._w=c*g-i*f-a*d-l*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,a=-a,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($m.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*a-f*i),g=2*(f*t-l*a),_=2*(l*i-c*t);return this.x=t+d*h+c*_-f*g,this.y=i+d*g+f*h-l*_,this.z=a+d*_+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-i*d,this.z=i*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new oe,$m=new na;class ut{static{this.prototype.isMatrix3=!0}constructor(e,t,i,a,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,d,h)}set(e,t,i,a,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=i,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[3],d=i[6],h=i[1],g=i[4],_=i[7],v=i[2],x=i[5],E=i[8],A=a[0],S=a[3],y=a[6],L=a[1],N=a[4],b=a[7],U=a[2],w=a[5],M=a[8];return l[0]=c*A+f*L+d*U,l[3]=c*S+f*N+d*w,l[6]=c*y+f*b+d*M,l[1]=h*A+g*L+_*U,l[4]=h*S+g*N+_*w,l[7]=h*y+g*b+_*M,l[2]=v*A+x*L+E*U,l[5]=v*S+x*N+E*w,l[8]=v*y+x*b+E*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-i*l*g+i*f*d+a*l*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=g*c-f*h,v=f*d-g*l,x=h*l-c*d,E=t*_+i*v+a*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(a*h-g*i)*A,e[2]=(f*i-a*c)*A,e[3]=v*A,e[4]=(g*t-a*d)*A,e[5]=(a*l-f*t)*A,e[6]=x*A,e[7]=(i*d-h*t)*A,e[8]=(c*t-i*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*c+h*f)+c+e,-a*h,a*d,-a*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return ic("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uf.makeScale(e,t)),this}rotate(e){return ic("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return ic("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new ut,qm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LS(){const s={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=ar(a.r),a.g=ar(a.g),a.b=ar(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=Zs(a.r),a.g=Zs(a.g),a.b=Zs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Dr?uc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[cc]:{primaries:e,whitePoint:i,transfer:uc,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const vt=LS();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class IS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=fc("canvas")),Us.width=e.width,Us.height=e.height;const a=Us.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ar(l[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NS=0;class qd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(ff(a[c].image)):l.push(ff(a[c]))}else l=ff(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function ff(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?IS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let US=0;const df=new oe;class Ln extends ls{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=rr,a=rr,l=Kn,c=Ir,f=Bi,d=ai,h=Ln.DEFAULT_ANISOTROPY,g=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=uo(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(df).x}get height(){return this.source.getSize(df).y}get depth(){return this.source.getSize(df).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $f:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $f:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=k0;Ln.DEFAULT_ANISOTROPY=1;class Qt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const d=e.elements,h=d[0],g=d[4],_=d[8],v=d[1],x=d[5],E=d[9],A=d[2],S=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,b=(x+1)/2,U=(y+1)/2,w=(g+v)/4,M=(_+A)/4,P=(E+S)/4;return N>b&&N>U?N<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(N),a=w/i,l=M/i):b>U?b<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),i=w/a,l=P/a):U<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),i=M/l,a=P/l),this.set(i,a,l,t),this}let L=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(_-A)/L,this.z=(v-g)/L,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OS extends ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=new Ln({width:e,height:t,depth:i.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new qd(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends OS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class K0 extends Ln{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Ln{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ut{static{this.prototype.isMatrix4=!0}constructor(e,t,i,a,l,c,f,d,h,g,_,v,x,E,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,d,h,g,_,v,x,E,A,S)}set(e,t,i,a,l,c,f,d,h,g,_,v,x,E,A,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=l,y[5]=c,y[9]=f,y[13]=d,y[2]=h,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=E,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),c=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*g,x=c*_,E=f*g,A=f*_;t[0]=d*g,t[4]=-d*_,t[8]=h,t[1]=x+E*h,t[5]=v-A*h,t[9]=-f*d,t[2]=A-v*h,t[6]=E+x*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*g,x=d*_,E=h*g,A=h*_;t[0]=v+A*f,t[4]=E*f-x,t[8]=c*h,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=x*f-E,t[6]=A+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*g,x=d*_,E=h*g,A=h*_;t[0]=v-A*f,t[4]=-c*_,t[8]=E+x*f,t[1]=x+E*f,t[5]=c*g,t[9]=A-v*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*g,x=c*_,E=f*g,A=f*_;t[0]=d*g,t[4]=E*h-x,t[8]=v*h+A,t[1]=d*_,t[5]=A*h+v,t[9]=x*h-E,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,x=c*h,E=f*d,A=f*h;t[0]=d*g,t[4]=A-v*_,t[8]=E*_+x,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=x*_+E,t[10]=v-A*_}else if(e.order==="XZY"){const v=c*d,x=c*h,E=f*d,A=f*h;t[0]=d*g,t[4]=-_,t[8]=h*g,t[1]=v*_+A,t[5]=c*g,t[9]=x*_-E,t[2]=E*_-x,t[6]=f*g,t[10]=A*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kS,e,BS)}lookAt(e,t,i){const a=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Cr.crossVectors(i,ii),Cr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Cr.crossVectors(i,ii)),Cr.normalize(),Ml.crossVectors(ii,Cr),a[0]=Cr.x,a[4]=Ml.x,a[8]=ii.x,a[1]=Cr.y,a[5]=Ml.y,a[9]=ii.y,a[2]=Cr.z,a[6]=Ml.z,a[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[4],d=i[8],h=i[12],g=i[1],_=i[5],v=i[9],x=i[13],E=i[2],A=i[6],S=i[10],y=i[14],L=i[3],N=i[7],b=i[11],U=i[15],w=a[0],M=a[4],P=a[8],$=a[12],z=a[1],G=a[5],j=a[9],ae=a[13],k=a[2],ie=a[6],ce=a[10],q=a[14],J=a[3],V=a[7],Y=a[11],D=a[15];return l[0]=c*w+f*z+d*k+h*J,l[4]=c*M+f*G+d*ie+h*V,l[8]=c*P+f*j+d*ce+h*Y,l[12]=c*$+f*ae+d*q+h*D,l[1]=g*w+_*z+v*k+x*J,l[5]=g*M+_*G+v*ie+x*V,l[9]=g*P+_*j+v*ce+x*Y,l[13]=g*$+_*ae+v*q+x*D,l[2]=E*w+A*z+S*k+y*J,l[6]=E*M+A*G+S*ie+y*V,l[10]=E*P+A*j+S*ce+y*Y,l[14]=E*$+A*ae+S*q+y*D,l[3]=L*w+N*z+b*k+U*J,l[7]=L*M+N*G+b*ie+U*V,l[11]=L*P+N*j+b*ce+U*Y,l[15]=L*$+N*ae+b*q+U*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],A=e[7],S=e[11],y=e[15],L=d*x-h*v,N=f*x-h*_,b=f*v-d*_,U=c*x-h*g,w=c*v-d*g,M=c*_-f*g;return t*(A*L-S*N+y*b)-i*(E*L-S*U+y*w)+a*(E*N-A*U+y*M)-l*(E*b-A*w+S*M)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[1],c=e[5],f=e[9],d=e[2],h=e[6],g=e[10];return t*(c*g-f*h)-i*(l*g-f*d)+a*(l*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],A=e[13],S=e[14],y=e[15],L=t*f-i*c,N=t*d-a*c,b=t*h-l*c,U=i*d-a*f,w=i*h-l*f,M=a*h-l*d,P=g*A-_*E,$=g*S-v*E,z=g*y-x*E,G=_*S-v*A,j=_*y-x*A,ae=v*y-x*S,k=L*ae-N*j+b*G+U*z-w*$+M*P;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/k;return e[0]=(f*ae-d*j+h*G)*ie,e[1]=(a*j-i*ae-l*G)*ie,e[2]=(A*M-S*w+y*U)*ie,e[3]=(v*w-_*M-x*U)*ie,e[4]=(d*z-c*ae-h*$)*ie,e[5]=(t*ae-a*z+l*$)*ie,e[6]=(S*b-E*M-y*N)*ie,e[7]=(g*M-v*b+x*N)*ie,e[8]=(c*j-f*z+h*P)*ie,e[9]=(i*z-t*j-l*P)*ie,e[10]=(E*w-A*b+y*L)*ie,e[11]=(_*b-g*w-x*L)*ie,e[12]=(f*$-c*G-d*P)*ie,e[13]=(t*G-i*$+a*P)*ie,e[14]=(A*N-E*U-S*L)*ie,e[15]=(g*U-_*N+v*L)*ie,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+i,h*f-a*d,h*d+a*f,0,h*f+a*d,g*f+i,g*d-a*c,0,h*d-a*f,g*d+a*c,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,_=f+f,v=l*h,x=l*g,E=l*_,A=c*g,S=c*_,y=f*_,L=d*h,N=d*g,b=d*_,U=i.x,w=i.y,M=i.z;return a[0]=(1-(A+y))*U,a[1]=(x+b)*U,a[2]=(E-N)*U,a[3]=0,a[4]=(x-b)*w,a[5]=(1-(v+y))*w,a[6]=(S+L)*w,a[7]=0,a[8]=(E+N)*M,a[9]=(S-L)*M,a[10]=(1-(v+A))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return i.set(1,1,1),t.identity(),this;let c=Os.set(a[0],a[1],a[2]).length();const f=Os.set(a[4],a[5],a[6]).length(),d=Os.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Mi.copy(this);const h=1/c,g=1/f,_=1/d;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,t.setFromRotationMatrix(Mi),i.x=c,i.y=f,i.z=d,this}makePerspective(e,t,i,a,l,c,f=Ai,d=!1){const h=this.elements,g=2*l/(t-e),_=2*l/(i-a),v=(t+e)/(t-e),x=(i+a)/(i-a);let E,A;if(d)E=l/(c-l),A=c*l/(c-l);else if(f===Ai)E=-(c+l)/(c-l),A=-2*c*l/(c-l);else if(f===lo)E=-c/(c-l),A=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,l,c,f=Ai,d=!1){const h=this.elements,g=2/(t-e),_=2/(i-a),v=-(t+e)/(t-e),x=-(i+a)/(i-a);let E,A;if(d)E=1/(c-l),A=c/(c-l);else if(f===Ai)E=-2/(c-l),A=-(c+l)/(c-l);else if(f===lo)E=-1/(c-l),A=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Os=new oe,Mi=new Ut,kS=new oe(0,0,0),BS=new oe(1,1,1),Cr=new oe,Ml=new oe,ii=new oe,Km=new Ut,jm=new na;class Fr{constructor(e=0,t=0,i=0,a=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],h=a[5],g=a[9],_=a[2],v=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class j0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zS=0;const Zm=new oe,Fs=new na,Ji=new Ut,El=new oe,Wa=new oe,HS=new oe,GS=new na,Jm=new oe(1,0,0),Qm=new oe(0,1,0),eg=new oe(0,0,1),tg={type:"added"},VS={type:"removed"},ks={type:"childadded",child:null},hf={type:"childremoved",child:null};class vn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new oe,t=new Fr,i=new na,a=new oe(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ut}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?El.copy(e):El.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Wa,El,this.up):Ji.lookAt(El,Wa,this.up),this.quaternion.setFromRotationMatrix(Ji),a&&(Ji.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),ks.child=e,this.dispatchEvent(ks),ks.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VS),hf.child=e,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,HS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,GS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*i-l[8]*a,l[13]+=i-l[1]*t-l[5]*i-l[9]*a,l[14]+=a-l[2]*t-l[6]*i-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const _=d[h];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),x=c(e.animations),E=c(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new oe(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qa extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WS={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,i),y=this._getHandJoint(h,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(WS)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function mf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=vt.workingColorSpace){if(e=bS(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=mf(c,l,e+1/3),this.g=mf(c,l,e),this.b=mf(c,l,e-1/3)}return vt.colorSpaceToWorking(this,a),this}setStyle(e,t=si){function i(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return vt.workingToColorSpace(Pn.copy(this),e),Math.round(xt(Pn.r*255,0,255))*65536+Math.round(xt(Pn.g*255,0,255))*256+Math.round(xt(Pn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,a=Pn.g,l=Pn.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const _=c-f;switch(h=g<=.5?_/(c+f):_/(2-c-f),c){case i:d=(a-l)/_+(a<l?6:0);break;case a:d=(l-i)/_+2;break;case l:d=(i-a)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=si){vt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,i=Pn.g,a=Pn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Tl);const i=lf(Rr.h,Tl.h,t),a=lf(Rr.s,Tl.s,t),l=lf(Rr.l,Tl.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new yt;yt.NAMES=Z0;class Yd extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new oe,Qi=new oe,gf=new oe,er=new oe,Bs=new oe,zs=new oe,ng=new oe,_f=new oe,vf=new oe,xf=new oe,Sf=new Qt,yf=new Qt,Mf=new Qt;class Ci{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ei.subVectors(e,t),a.cross(Ei);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){Ei.subVectors(a,t),Qi.subVectors(i,t),gf.subVectors(e,t);const c=Ei.dot(Ei),f=Ei.dot(Qi),d=Ei.dot(gf),h=Qi.dot(Qi),g=Qi.dot(gf),_=c*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(h*d-f*g)*v,E=(c*g-f*d)*v;return l.set(1-x-E,E,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,a,l,c,f,d){return this.getBarycoord(e,t,i,a,er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,er.x),d.addScaledVector(c,er.y),d.addScaledVector(f,er.z),d)}static getInterpolatedAttribute(e,t,i,a,l,c){return Sf.setScalar(0),yf.setScalar(0),Mf.setScalar(0),Sf.fromBufferAttribute(e,t),yf.fromBufferAttribute(e,i),Mf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Sf,l.x),c.addScaledVector(yf,l.y),c.addScaledVector(Mf,l.z),c}static isFrontFacing(e,t,i,a){return Ei.subVectors(i,t),Qi.subVectors(e,t),Ei.cross(Qi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ei.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let c,f;Bs.subVectors(a,i),zs.subVectors(l,i),_f.subVectors(e,i);const d=Bs.dot(_f),h=zs.dot(_f);if(d<=0&&h<=0)return t.copy(i);vf.subVectors(e,a);const g=Bs.dot(vf),_=zs.dot(vf);if(g>=0&&_<=g)return t.copy(a);const v=d*_-g*h;if(v<=0&&d>=0&&g<=0&&d-g>0)return c=d/(d-g),t.copy(i).addScaledVector(Bs,c);xf.subVectors(e,l);const x=Bs.dot(xf),E=zs.dot(xf);if(E>=0&&x<=E)return t.copy(l);const A=x*h-d*E;if(A<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(i).addScaledVector(zs,f);const S=g*E-x*_;if(S<=0&&_-g>=0&&x-E>=0)return ng.subVectors(l,a),f=(_-g)/(_-g+(x-E)),t.copy(a).addScaledVector(ng,f);const y=1/(S+A+v);return c=A*y,f=v*y,t.copy(i).addScaledVector(Bs,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cs{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ti):Ti.fromBufferAttribute(l,c),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Rl.subVectors(this.max,Xa),Hs.subVectors(e.a,Xa),Gs.subVectors(e.b,Xa),Vs.subVectors(e.c,Xa),Ar.subVectors(Gs,Hs),br.subVectors(Vs,Gs),Jr.subVectors(Hs,Vs);let t=[0,-Ar.z,Ar.y,0,-br.z,br.y,0,-Jr.z,Jr.y,Ar.z,0,-Ar.x,br.z,0,-br.x,Jr.z,0,-Jr.x,-Ar.y,Ar.x,0,-br.y,br.x,0,-Jr.y,Jr.x,0];return!Ef(t,Hs,Gs,Vs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,Hs,Gs,Vs,Rl))?!1:(Al.crossVectors(Ar,br),t=[Al.x,Al.y,Al.z],Ef(t,Hs,Gs,Vs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ti=new oe,Cl=new cs,Hs=new oe,Gs=new oe,Vs=new oe,Ar=new oe,br=new oe,Jr=new oe,Xa=new oe,Rl=new oe,Al=new oe,Qr=new oe;function Ef(s,e,t,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){Qr.fromArray(s,l);const f=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),d=e.dot(Qr),h=t.dot(Qr),g=i.dot(Qr);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const nn=new oe,bl=new Mt;let XS=0;class Hi extends ls{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ES,this.updateRanges=[],this.gpuType=Ri,this.version=0,this._normalizationScale=e!==void 0?$d(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):PS(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):DS(e,this.array)}}class J0 extends Hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q0 extends Hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends Hi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const $S=new cs,$a=new oe,Tf=new oe;class ia{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$S.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector($a,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(Tf)),this.expandByPoint($a.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qS=0;const pi=new Ut,Cf=new vn,Ws=new oe,ri=new cs,qa=new cs,_n=new oe;class oi extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TS(e)?Q0:J0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ut().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];qa.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(ri.min,qa.min),ri.expandByPoint(_n),_n.addVectors(ri.max,qa.max),ri.expandByPoint(_n)):(ri.expandByPoint(qa.min),ri.expandByPoint(qa.max))}ri.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)_n.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(_n));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)_n.fromBufferAttribute(f,h),d&&(Ws.fromBufferAttribute(e,h),_n.add(Ws)),a=Math.max(a,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const f=[],d=[],h=new Uint8Array(i.count);for(let $=0;$<i.count;$++)f[$]=new oe,d[$]=new oe;const g=new oe,_=new oe,v=new oe,x=new Mt,E=new Mt,A=new Mt,S=new oe,y=new oe;function L($,z,G){h[$]=h[z]=h[G]=1,g.fromBufferAttribute(i,$),_.fromBufferAttribute(i,z),v.fromBufferAttribute(i,G),x.fromBufferAttribute(l,$),E.fromBufferAttribute(l,z),A.fromBufferAttribute(l,G),_.sub(g),v.sub(g),E.sub(x),A.sub(x);const j=1/(E.x*A.y-A.x*E.y);isFinite(j)&&(S.copy(_).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(j),y.copy(v).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(j),f[$].add(S),f[z].add(S),f[G].add(S),d[$].add(y),d[z].add(y),d[G].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,z=N.length;$<z;++$){const G=N[$],j=G.start,ae=G.count;for(let k=j,ie=j+ae;k<ie;k+=3)L(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new oe,U=new oe,w=new oe,M=new oe;function P($){w.fromBufferAttribute(a,$),M.copy(w);const z=f[$];b.copy(z),b.sub(w.multiplyScalar(w.dot(z))).normalize(),U.crossVectors(M,z);const j=U.dot(d[$])<0?-1:1;c.setXYZW($,b.x,b.y,b.z,j)}for(let $=0,z=i.count;$<z;++$)h[$]&&P($);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const a=new oe,l=new oe,c=new oe,f=new oe,d=new oe,h=new oe,g=new oe,_=new oe;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),A=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),f.add(g),d.add(g),h.add(g),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),i.setXYZ(v+0,g.x,g.y,g.z),i.setXYZ(v+1,g.x,g.y,g.z),i.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(d.length*g);let x=0,E=0;for(let A=0,S=d.length;A<S;A++){f.isInterleavedBufferAttribute?x=d[A]*f.data.stride+f.offset:x=d[A]*g;for(let y=0;y<g;y++)v[E++]=h[x++]}return new Hi(v,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],x=e(v,i);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(a[d]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const g=a[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],_=l[h];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rf=new oe,YS=new oe,KS=new ut;class Pr{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Rf.subVectors(i,t).cross(YS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Rf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||KS.getNormalMatrix(e),a=this.coplanarPoint(Rf).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let jS=0;class ra extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=to,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=w0,this.blendDst=P0,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_S,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=af,this.stencilZFail=af,this.stencilZPass=af,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Pr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nr=new oe,Af=new oe,wl=new oe,Pl=new oe;class e_{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Af.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Pl.copy(this.origin).sub(Af);const l=e.distanceTo(t)*.5,c=-this.direction.dot(wl),f=Pl.dot(this.direction),d=-Pl.dot(wl),h=Pl.lengthSq(),g=Math.abs(1-c*c);let _,v,x,E;if(g>0)if(_=c*d-f,v=c*f-d,E=l*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,x=_*(_+c*v+2*f)+v*(c*_+v+2*d)+h}else v=l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*d)+h;else v=-l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*d)+h;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+h):v<=E?(_=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+h);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),x=-_*_+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Af).addScaledVector(wl,v),x}intersectSphere(e,t){if(e.radius<0)return null;nr.subVectors(e.center,this.origin);const i=nr.dot(this.direction),a=nr.dot(nr)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),g>=0?(l=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,i,a,l){const c=this.origin,f=this.direction,d=f.x,h=f.y,g=f.z,_=e.x-c.x,v=e.y-c.y,x=e.z-c.z,E=t.x-c.x,A=t.y-c.y,S=t.z-c.z,y=i.x-c.x,L=i.y-c.y,N=i.z-c.z,b=Math.abs(d),U=Math.abs(h),w=Math.abs(g);let M,P,$,z,G,j,ae,k,ie,ce,q,J;if(b>=U&&b>=w?($=d,j=_,ie=E,J=y,d>=0?(M=h,P=g,z=v,G=x,ae=A,k=S,ce=L,q=N):(M=g,P=h,z=x,G=v,ae=S,k=A,ce=N,q=L)):U>=w?($=h,j=v,ie=A,J=L,h>=0?(M=g,P=d,z=x,G=_,ae=S,k=E,ce=N,q=y):(M=d,P=g,z=_,G=x,ae=E,k=S,ce=y,q=N)):($=g,j=x,ie=S,J=N,g>=0?(M=d,P=h,z=_,G=v,ae=E,k=A,ce=y,q=L):(M=h,P=d,z=v,G=_,ae=A,k=E,ce=L,q=y)),$===0)return null;const V=M/$,Y=P/$,D=1/$,K=z-V*j,De=G-Y*j,ne=ae-V*ie,ge=k-Y*ie,Me=ce-V*J,Ue=q-Y*J,_e=Me*ge-Ue*ne,ze=K*Ue-De*Me,St=ne*De-ge*K;if(a){if(_e<0||ze<0||St<0)return null}else if((_e<0||ze<0||St<0)&&(_e>0||ze>0||St>0))return null;const et=_e+ze+St;if(et===0)return null;const Tt=D*(_e*j+ze*ie+St*J);return(et>0?Tt<0:Tt>0)?null:this.at(Tt/et,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class t_ extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ig=new Ut,es=new e_,Dl=new ia,rg=new oe,Ll=new oe,Il=new oe,Nl=new oe,bf=new oe,Ul=new oe,sg=new oe,Ol=new oe;class Zn extends vn{constructor(e=new oi,t=new t_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ul.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],_=l[d];g!==0&&(bf.fromBufferAttribute(_,e),c?Ul.addScaledVector(bf,g):Ul.addScaledVector(bf.sub(t),g))}t.add(Ul)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Dl.containsPoint(es.origin)===!1&&(es.intersectSphere(Dl,rg)===null||es.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(l).invert(),es.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,A=v.length;E<A;E++){const S=v[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),N=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let b=L,U=N;b<U;b+=3){const w=f.getX(b),M=f.getX(b+1),P=f.getX(b+2);a=Fl(this,y,e,i,h,g,_,w,M,P),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let S=E,y=A;S<y;S+=3){const L=f.getX(S),N=f.getX(S+1),b=f.getX(S+2);a=Fl(this,c,e,i,h,g,_,L,N,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,A=v.length;E<A;E++){const S=v[E],y=c[S.materialIndex],L=Math.max(S.start,x.start),N=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let b=L,U=N;b<U;b+=3){const w=b,M=b+1,P=b+2;a=Fl(this,y,e,i,h,g,_,w,M,P),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let S=E,y=A;S<y;S+=3){const L=S,N=S+1,b=S+2;a=Fl(this,c,e,i,h,g,_,L,N,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function ZS(s,e,t,i,a,l,c,f){let d;if(e.side===jn?d=i.intersectTriangle(c,l,a,!0,f):d=i.intersectTriangle(a,l,c,e.side===ns,f),d===null)return null;Ol.copy(f),Ol.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Ol);return h<t.near||h>t.far?null:{distance:h,point:Ol.clone(),object:s}}function Fl(s,e,t,i,a,l,c,f,d,h){s.getVertexPosition(f,Ll),s.getVertexPosition(d,Il),s.getVertexPosition(h,Nl);const g=ZS(s,e,t,i,Ll,Il,Nl,sg);if(g){const _=new oe;Ci.getBarycoord(sg,Ll,Il,Nl,_),a&&(g.uv=Ci.getInterpolatedAttribute(a,f,d,h,_,new Mt)),l&&(g.uv1=Ci.getInterpolatedAttribute(l,f,d,h,_,new Mt)),c&&(g.normal=Ci.getInterpolatedAttribute(c,f,d,h,_,new oe),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new oe,materialIndex:0};Ci.getNormal(Ll,Il,Nl,v.normal),g.face=v,g.barycoord=_}return g}class n_ extends Ln{constructor(e=null,t=1,i=1,a,l,c,f,d,h=Mn,g=Mn,_,v){super(null,c,f,d,h,g,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ag extends Hi{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new Ut,og=new Ut,kl=[],lg=new cs,JS=new Ut,Ya=new Zn,Ka=new ia;class QS extends Zn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ag(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,JS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),lg.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(lg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ia),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),Ka.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=i.length+1,c=e*l+1;for(let f=0;f<i.length;f++)i[f]=a[c+f]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ya.geometry=this.geometry,Ya.material=this.material,Ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(i),e.ray.intersectsSphere(Ka)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,Xs),og.multiplyMatrices(i,Xs),Ya.matrixWorld=og,Ya.raycast(e,kl);for(let c=0,f=kl.length;c<f;c++){const d=kl[c];d.instanceId=l,d.object=this,t.push(d)}kl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ag(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new n_(new Float32Array(a*this.count),a,this.count,Gd,Ri));const l=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const f=this.geometry.morphTargetsRelative?1:1-c,d=a*e;return l[d]=f,l.set(i,d+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ts=new ia,ey=new Mt(.5,.5),Bl=new oe;class co{constructor(e=new Pr,t=new Pr,i=new Pr,a=new Pr,l=new Pr,c=new Pr){this.planes=[e,t,i,a,l,c]}set(e,t,i,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai,i=!1){const a=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],_=l[5],v=l[6],x=l[7],E=l[8],A=l[9],S=l[10],y=l[11],L=l[12],N=l[13],b=l[14],U=l[15];if(a[0].setComponents(h-c,x-g,y-E,U-L).normalize(),a[1].setComponents(h+c,x+g,y+E,U+L).normalize(),a[2].setComponents(h+f,x+_,y+A,U+N).normalize(),a[3].setComponents(h-f,x-_,y-A,U-N).normalize(),i)a[4].setComponents(d,v,S,b).normalize(),a[5].setComponents(h-d,x-v,y-S,U-b).normalize();else if(a[4].setComponents(h-d,x-v,y-S,U-b).normalize(),t===Ai)a[5].setComponents(h+d,x+v,y+S,U+b).normalize();else if(t===lo)a[5].setComponents(d,v,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=ey.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Bl.x=a.normal.x>0?e.max.x:e.min.x,Bl.y=a.normal.y>0?e.max.y:e.min.y,Bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const cg=new Ut;class Kd{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let a=0;a<t.length;a++){const l=t[a];cg.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),i[a]===void 0&&(i[a]=new co),i[a].setFromProjectionMatrix(cg,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new co),t[a].copy(i[a]);return this._count=e._count,this}clone(){return new Kd().copy(this)}}class jd extends ra{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ug=new Ut,Rd=new e_,zl=new ia,Hl=new oe;class i_ extends vn{constructor(e=new oi,t=new jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(a),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;ug.copy(a).invert(),Rd.copy(e.ray).applyMatrix4(ug);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,_=i.attributes.position;if(h!==null){const v=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let E=v,A=x;E<A;E++){const S=h.getX(E);Hl.fromBufferAttribute(_,S),fg(Hl,S,d,a,e,t,this)}}else{const v=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let E=v,A=x;E<A;E++)Hl.fromBufferAttribute(_,E),fg(Hl,E,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function fg(s,e,t,i,a,l,c){const f=Rd.distanceSqToPoint(s);if(f<t){const d=new oe;Rd.closestPointToPoint(s,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class r_ extends Ln{constructor(e=[],t=Js,i,a,l,c,f,d,h,g){super(e,t,i,a,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends Ln{constructor(e,t,i,a,l,c,f,d,h){super(e,t,i,a,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea extends Ln{constructor(e,t,i=Gi,a,l,c,f=Mn,d=Mn,h,g=Or,_=1){if(g!==Or&&g!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,a,l,c,f,d,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class a_ extends ea{constructor(e,t=Gi,i=Js,a,l,c=Mn,f=Mn,d,h=Or){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,a,l,c,f,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class o_ extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends oi{constructor(e=1,t=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,i,t,e,c,l,0),E("z","y","x",1,-1,i,t,-e,c,l,1),E("x","z","y",1,1,e,i,t,a,c,2),E("x","z","y",1,-1,e,i,-t,a,c,3),E("x","y","z",1,-1,e,t,i,a,l,4),E("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(d),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(_,2));function E(A,S,y,L,N,b,U,w,M,P,$){const z=b/M,G=U/P,j=b/2,ae=U/2,k=w/2,ie=M+1,ce=P+1;let q=0,J=0;const V=new oe;for(let Y=0;Y<ce;Y++){const D=Y*G-ae;for(let K=0;K<ie;K++){const De=K*z-j;V[A]=De*L,V[S]=D*N,V[y]=k,h.push(V.x,V.y,V.z),V[A]=0,V[S]=0,V[y]=w>0?1:-1,g.push(V.x,V.y,V.z),_.push(K/M),_.push(1-Y/P),q+=1}}for(let Y=0;Y<P;Y++)for(let D=0;D<M;D++){const K=v+D+ie*Y,De=v+D+ie*(Y+1),ne=v+(D+1)+ie*(Y+1),ge=v+(D+1)+ie*Y;d.push(K,De,ge),d.push(De,ne,ge),J+=6}f.addGroup(x,J,$),x+=J,v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pc extends oi{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],d=[],h=new oe,g=new Mt;c.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*a;h.x=e*Math.cos(x),h.y=e*Math.sin(x),c.push(h.x,h.y,h.z),f.push(0,0,1),g.x=(c[v]/e+1)/2,g.y=(c[v+1]/e+1)/2,d.push(g.x,g.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(f,3)),this.setAttribute("uv",new xn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mc extends oi{constructor(e=1,t=1,i=1,a=32,l=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d};const h=this;a=Math.floor(a),l=Math.floor(l);const g=[],_=[],v=[],x=[];let E=0;const A=[],S=i/2;let y=0;L(),c===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(x,2));function L(){const b=new oe,U=new oe;let w=0;const M=(t-e)/i;for(let P=0;P<=l;P++){const $=[],z=P/l,G=z*(t-e)+e;for(let j=0;j<=a;j++){const ae=j/a,k=ae*d+f,ie=Math.sin(k),ce=Math.cos(k);U.x=G*ie,U.y=-z*i+S,U.z=G*ce,_.push(U.x,U.y,U.z),b.set(ie,M,ce).normalize(),v.push(b.x,b.y,b.z),x.push(ae,1-z),$.push(E++)}A.push($)}for(let P=0;P<a;P++)for(let $=0;$<l;$++){const z=A[$][P],G=A[$+1][P],j=A[$+1][P+1],ae=A[$][P+1];(e>0||$!==0)&&(g.push(z,G,ae),w+=3),(t>0||$!==l-1)&&(g.push(G,j,ae),w+=3)}h.addGroup(y,w,0),y+=w}function N(b){const U=E,w=new Mt,M=new oe;let P=0;const $=b===!0?e:t,z=b===!0?1:-1;for(let j=1;j<=a;j++)_.push(0,S*z,0),v.push(0,z,0),x.push(.5,.5),E++;const G=E;for(let j=0;j<=a;j++){const k=j/a*d+f,ie=Math.cos(k),ce=Math.sin(k);M.x=$*ce,M.y=S*z,M.z=$*ie,_.push(M.x,M.y,M.z),v.push(0,z,0),w.x=ie*.5+.5,w.y=ce*.5*z+.5,x.push(w.x,w.y),E++}for(let j=0;j<a;j++){const ae=U+j,k=G+j;b===!0?g.push(k,k+1,ae):g.push(k+1,k,ae),P+=3}h.addGroup(y,P,b===!0?1:2),y+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ho extends oi{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(i),d=Math.floor(a),h=f+1,g=d+1,_=e/f,v=t/d,x=[],E=[],A=[],S=[];for(let y=0;y<g;y++){const L=y*v-c;for(let N=0;N<h;N++){const b=N*_-l;E.push(b,-L,0),A.push(0,0,1),S.push(N/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<f;L++){const N=L+h*y,b=L+h*(y+1),U=L+1+h*(y+1),w=L+1+h*y;x.push(N,b,w),x.push(b,U,w)}this.setIndex(x),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(A,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zd extends oi{constructor(e=1,t=.4,i=12,a=48,l=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:l,thetaStart:c,thetaLength:f},i=Math.floor(i),a=Math.floor(a);const d=[],h=[],g=[],_=[],v=new oe,x=new oe,E=new oe;for(let A=0;A<=i;A++){const S=c+A/i*f;for(let y=0;y<=a;y++){const L=y/a*l;x.x=(e+t*Math.cos(S))*Math.cos(L),x.y=(e+t*Math.cos(S))*Math.sin(L),x.z=t*Math.sin(S),h.push(x.x,x.y,x.z),v.x=e*Math.cos(L),v.y=e*Math.sin(L),E.subVectors(x,v).normalize(),g.push(E.x,E.y,E.z),_.push(y/a),_.push(A/i)}}for(let A=1;A<=i;A++)for(let S=1;S<=a;S++){const y=(a+1)*A+S-1,L=(a+1)*(A-1)+S-1,N=(a+1)*(A-1)+S,b=(a+1)*A+S;d.push(y,L,b),d.push(L,N,b)}this.setIndex(d),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ta(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(dg(a))a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(dg(a[0])){const l=[];for(let c=0,f=a.length;c<f;c++)l[c]=a[c].clone();e[t][i]=l}else e[t][i]=a.slice();else e[t][i]=a}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const i=ta(s[t]);for(const a in i)e[a]=i[a]}return e}function dg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ty(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function l_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const ny={clone:ta,merge:kn};var iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new yt().setHex(a.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new oe().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Qt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sy extends rs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class no extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ay extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jd extends vn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const wf=new Ut,hg=new oe,pg=new oe;class c_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hg.setFromMatrixPosition(e.matrixWorld),t.position.copy(hg),pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){wf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,c=a?a.z/l.x:1,f=a?a.w/l.y:1,d=a?a.x/l.x:0,h=a?a.y/l.y:0;e.coordinateSystem===lo||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*f,0,.5*f+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*f,0,.5*f+h,0,0,.5,.5,0,0,0,1),t.multiply(wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new oe,Vl=new na,Oi=new oe;class u_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Vl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gl,Vl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new oe,mg=new Mt,gg=new Mt;class Yn extends u_{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,mg,gg),t.subVectors(gg,mg)}setViewOffset(e,t,i,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(of*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ly extends c_{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class io extends Jd{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new ly}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class f_ extends u_{constructor(e=-1,t=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cy extends c_{constructor(){super(new f_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ad extends Jd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new cy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qd extends Jd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $s=-90,qs=1;class bd extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn($s,qs,e,t);a.layers=this.layers,this.add(a);const l=new Yn($s,qs,e,t);l.layers=this.layers,this.add(l);const c=new Yn($s,qs,e,t);c.layers=this.layers,this.add(c);const f=new Yn($s,qs,e,t);f.layers=this.layers,this.add(f);const d=new Yn($s,qs,e,t);d.layers=this.layers,this.add(d);const h=new Yn($s,qs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.mipmapsAutoUpdate=A,e.setRenderTarget(i,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class uy extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class d_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _g(s,e,t,i){const a=fy(i);switch(t){case V0:return s*e;case Gd:return s*e/a.components*a.byteLength;case Vd:return s*e/a.components*a.byteLength;case is:return s*e*2/a.components*a.byteLength;case Wd:return s*e*2/a.components*a.byteLength;case W0:return s*e*3/a.components*a.byteLength;case Bi:return s*e*4/a.components*a.byteLength;case Xd:return s*e*4/a.components*a.byteLength;case Ql:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Zf:return Math.max(s,16)*Math.max(e,8)/4;case Yf:case jf:return Math.max(s,8)*Math.max(e,8)/2;case Jf:case Qf:case td:case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ed:case oc:case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vd:case xd:case Sd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yd:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(s){switch(s){case ai:case B0:return{byteLength:1,components:1};case oo:case z0:case Vi:return{byteLength:2,components:1};case zd:case Hd:return{byteLength:2,components:4};case Gi:case Bd:case Ri:return{byteLength:4,components:1};case H0:case G0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h_(){let s=null,e=!1,t=null,i=null;function a(l,c){i=s.requestAnimationFrame(a),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dy(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,_=h.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,h,g),f.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,h){const g=d.array,_=d.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];s.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:c}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:Sy,batching_pars_vertex:yy,batching_vertex:My,begin_vertex:Ey,beginnormal_vertex:Ty,bsdfs:Cy,iridescence_fragment:Ry,bumpmap_pars_fragment:Ay,clipping_planes_fragment:by,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Dy,color_fragment:Ly,color_pars_fragment:Iy,color_pars_vertex:Ny,color_vertex:Uy,common:Oy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:ky,displacementmap_vertex:By,emissivemap_fragment:zy,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Vy,envmap_fragment:Wy,envmap_common_pars_fragment:Xy,envmap_pars_fragment:$y,envmap_pars_vertex:qy,envmap_physical_pars_fragment:rM,envmap_vertex:Yy,fog_vertex:Ky,fog_pars_vertex:jy,fog_fragment:Zy,fog_pars_fragment:Jy,gradientmap_pars_fragment:Qy,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:aM,lights_phong_fragment:oM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,lightprobes_pars_fragment:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:xM,map_pars_fragment:SM,map_particle_fragment:yM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:CM,morphcolor_vertex:RM,morphnormal_vertex:AM,morphtarget_pars_vertex:bM,morphtarget_vertex:wM,normal_fragment_begin:PM,normal_fragment_maps:DM,normal_pars_fragment:LM,normal_pars_vertex:IM,normal_vertex:NM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:BM,opaque_fragment:zM,packing:HM,premultiplied_alpha_fragment:GM,project_vertex:VM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:KM,shadowmap_vertex:jM,shadowmask_pars_fragment:ZM,skinbase_vertex:JM,skinning_pars_vertex:QM,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:rE,tonemapping_pars_fragment:sE,transmission_fragment:aE,transmission_pars_fragment:oE,uv_pars_fragment:lE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:_E,depth_vert:vE,depth_frag:xE,distance_vert:SE,distance_frag:yE,equirect_vert:ME,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:CE,meshbasic_vert:RE,meshbasic_frag:AE,meshlambert_vert:bE,meshlambert_frag:wE,meshmatcap_vert:PE,meshmatcap_frag:DE,meshnormal_vert:LE,meshnormal_frag:IE,meshphong_vert:NE,meshphong_frag:UE,meshphysical_vert:OE,meshphysical_frag:FE,meshtoon_vert:kE,meshtoon_frag:BE,points_vert:zE,points_frag:HE,shadow_vert:GE,shadow_frag:VE,sprite_vert:WE,sprite_frag:XE},ke={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ki={basic:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:kn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:kn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:kn([ke.points,ke.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:kn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:kn([ke.common,ke.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:kn([ke.sprite,ke.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:kn([ke.common,ke.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:kn([ke.lights,ke.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Wl={r:0,b:0,g:0},$E=new Ut,p_=new ut;p_.set(-1,0,0,0,1,0,0,0,1);function qE(s,e,t,i,a,l){const c=new yt(0);let f=a===!0?0:1,d,h,g=null,_=0,v=null;function x(L){let N=L.isScene===!0?L.background:null;if(N&&N.isTexture){const b=L.backgroundBlurriness>0;N=e.get(N,b)}return N}function E(L){let N=!1;const b=x(L);b===null?S(c,f):b&&b.isColor&&(S(b,1),N=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(L,N){const b=x(N);b&&b.isCubeTexture?(h===void 0&&(h=new Zn(new fo(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:ta(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(N.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(p_),h.material.toneMapped=vt.getTransfer(b.colorSpace)!==Dt,(g!==b||_!==b.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,g=b,_=b.version,v=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Zn(new ho(2,2),new rs({name:"BackgroundMaterial",uniforms:ta(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=vt.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||_!==b.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=b,_=b.version,v=s.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function S(L,N){L.getRGB(Wl,l_(s)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,N,l)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,N=1){c.set(L),f=N,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,S(c,f)},render:E,addToRenderList:A,dispose:y}}function YE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=v(null);let l=a,c=!1;function f(G,j,ae,k,ie){let ce=!1;const q=_(G,k,ae,j);l!==q&&(l=q,h(l.object)),ce=x(G,k,ae,ie),ce&&E(G,k,ae,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,b(G,j,ae,k),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function d(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function _(G,j,ae,k){const ie=k.wireframe===!0;let ce=i[j.id];ce===void 0&&(ce={},i[j.id]=ce);const q=G.isInstancedMesh===!0?G.id:0;let J=ce[q];J===void 0&&(J={},ce[q]=J);let V=J[ae.id];V===void 0&&(V={},J[ae.id]=V);let Y=V[ie];return Y===void 0&&(Y=v(d()),V[ie]=Y),Y}function v(G){const j=[],ae=[],k=[];for(let ie=0;ie<t;ie++)j[ie]=0,ae[ie]=0,k[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ae,attributeDivisors:k,object:G,attributes:{},index:null}}function x(G,j,ae,k){const ie=l.attributes,ce=j.attributes;let q=0;const J=ae.getAttributes();for(const V in J)if(J[V].location>=0){const D=ie[V];let K=ce[V];if(K===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;q++}return l.attributesNum!==q||l.index!==k}function E(G,j,ae,k){const ie={},ce=j.attributes;let q=0;const J=ae.getAttributes();for(const V in J)if(J[V].location>=0){let D=ce[V];D===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),ie[V]=K,q++}l.attributes=ie,l.attributesNum=q,l.index=k}function A(){const G=l.newAttributes;for(let j=0,ae=G.length;j<ae;j++)G[j]=0}function S(G){y(G,0)}function y(G,j){const ae=l.newAttributes,k=l.enabledAttributes,ie=l.attributeDivisors;ae[G]=1,k[G]===0&&(s.enableVertexAttribArray(G),k[G]=1),ie[G]!==j&&(s.vertexAttribDivisor(G,j),ie[G]=j)}function L(){const G=l.newAttributes,j=l.enabledAttributes;for(let ae=0,k=j.length;ae<k;ae++)j[ae]!==G[ae]&&(s.disableVertexAttribArray(ae),j[ae]=0)}function N(G,j,ae,k,ie,ce,q){q===!0?s.vertexAttribIPointer(G,j,ae,ie,ce):s.vertexAttribPointer(G,j,ae,k,ie,ce)}function b(G,j,ae,k){A();const ie=k.attributes,ce=ae.getAttributes(),q=j.defaultAttributeValues;for(const J in ce){const V=ce[J];if(V.location>=0){let Y=ie[J];if(Y===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),Y!==void 0){const D=Y.normalized,K=Y.itemSize,De=e.get(Y);if(De===void 0)continue;const ne=De.buffer,ge=De.type,Me=De.bytesPerElement,Ue=ge===s.INT||ge===s.UNSIGNED_INT||Y.gpuType===Bd;if(Y.isInterleavedBufferAttribute){const _e=Y.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,St=Y.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)y(V.location+et,_e.meshPerAttribute);G.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let et=0;et<V.locationSize;et++)S(V.location+et);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let et=0;et<V.locationSize;et++)N(V.location+et,K/V.locationSize,ge,D,ze*Me,(St+K/V.locationSize*et)*Me,Ue)}else{if(Y.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)y(V.location+_e,Y.meshPerAttribute);G.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _e=0;_e<V.locationSize;_e++)S(V.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let _e=0;_e<V.locationSize;_e++)N(V.location+_e,K/V.locationSize,ge,D,K*Me,K/V.locationSize*_e*Me,Ue)}}else if(q!==void 0){const D=q[J];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(V.location,D);break;case 3:s.vertexAttrib3fv(V.location,D);break;case 4:s.vertexAttrib4fv(V.location,D);break;default:s.vertexAttrib1fv(V.location,D)}}}}L()}function U(){$();for(const G in i){const j=i[G];for(const ae in j){const k=j[ae];for(const ie in k){const ce=k[ie];for(const q in ce)g(ce[q].object),delete ce[q];delete k[ie]}}delete i[G]}}function w(G){if(i[G.id]===void 0)return;const j=i[G.id];for(const ae in j){const k=j[ae];for(const ie in k){const ce=k[ie];for(const q in ce)g(ce[q].object),delete ce[q];delete k[ie]}}delete i[G.id]}function M(G){for(const j in i){const ae=i[j];for(const k in ae){const ie=ae[k];if(ie[G.id]===void 0)continue;const ce=ie[G.id];for(const q in ce)g(ce[q].object),delete ce[q];delete ie[G.id]}}}function P(G){for(const j in i){const ae=i[j],k=G.isInstancedMesh===!0?G.id:0,ie=ae[k];if(ie!==void 0){for(const ce in ie){const q=ie[ce];for(const J in q)g(q[J].object),delete q[J];delete ie[ce]}delete ae[k],Object.keys(ae).length===0&&delete i[j]}}}function $(){z(),c=!0,l!==a&&(l=a,h(l.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:$,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function KE(s,e,t){let i;function a(d){i=d}function l(d,h){s.drawArrays(i,d,h),t.update(h,i,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(i,d,h,g),t.update(h,i,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];t.update(v,i,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function jE(s,e,t,i){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(M){return!(M!==Bi&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const P=M===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ai&&M!==Ri&&!P&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(ot("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:b,maxSamples:U,samples:w}}function ZE(s){const e=this;let t=null,i=0,a=!1,l=!1;const c=new Pr,f=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||a;return a=v,i=_.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=s.get(_);if(!a||E===null||E.length===0||l&&!S)l?g(null):h();else{const L=l?0:i,N=L*4;let b=y.clippingState||null;d.value=b,b=g(E,v,N,x);for(let U=0;U!==N;++U)b[U]=t[U];y.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,v,x,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=d.value,E!==!0||S===null){const y=x+A*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let N=0,b=x;N!==A;++N,b+=4)c.copy(_[N]).applyMatrix4(L,f),c.normal.toArray(S,b),S[b+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}class eh extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new r_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new fo(5,5,5),l=new rs({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:js});l.uniforms.tEquirect.value=t;const c=new Zn(a,l),f=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Kn),new bd(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(l)}}const vg=256,JE=3,QE=20,m_=256,g_=16,eT=3,tT=new oe,nT=new yt;class dc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bd(1,10,null),this._boxMesh=new Zn(new fo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,a=100,l={}){const{size:c=256,position:f=tT}=l,d=this._renderer;this._setSize(c);const h=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const _=d.autoClear,v=d.autoClearColor,x=d.autoClearDepth,E=d.autoClearStencil,A=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,A===null&&(e.background=d.getClearColor(nT));const S=new bd(i,a,g);return S.position.copy(f),S.update(d,e),d.autoClear=_,d.autoClearColor=v,d.autoClearDepth=x,d.autoClearStencil=E,e.background=A,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vg,wS(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===ao?this._setSize(e.image.length===0?vg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=xg(e,!1,!1),i=Math.log2(e)-JE;for(let a=0;a<=i;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=xg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const a=this._boxMesh,l=this._cubeCamera;a.material=i,l.renderTarget=e,l.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===ao?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iT(),this._integrationMaterial=rT());const t=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/g_);for(let c=0;c<=i;c++){const f=dc.lodToRoughness(c,i);if(c>i-eT)l.roughness.value=f,this._renderCube(e,c,this._integrationMaterial);else{const d=f>0?Math.log2(t)+.5*Math.log2(6/(m_*Math.pow(f,4)))+.5:0;a.roughness.value=f,a.lodBias.value=d,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sT());const i=this._blurMaterial,a=i.uniforms,l=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=l.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(l,0,i)}}function xg(s,e,t){return new eh(s,{minFilter:Ir,generateMipmaps:e,type:Vi,colorSpace:cc,depthBuffer:t})}function po(s,e,t){return new rs({name:s,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:jn,blending:js,depthTest:!1,depthWrite:!1})}function iT(){return po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${m_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rT(){return po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:g_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sT(){return po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${QE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Sg(){return po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yg(){return po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function aT(s){let e=new WeakMap,t=new WeakMap,i=null;function a(v,x=!1){return v==null?null:x?c(v):l(v)}function l(v){if(v&&v.isTexture){const x=v.mapping;if(x===nf||x===rf)if(e.has(v)){const E=e.get(v).texture;return f(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new eh(E.height);return A.fromEquirectangularTexture(s,v),e.set(v,A),v.addEventListener("dispose",h),f(A.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const x=v.mapping,E=x===nf||x===rf,A=x===Js||x===ao;if(E||A){let S=t.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return i===null&&(i=new dc(s)),S=E?i.fromEquirectangular(v,S):i.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,t.set(v,S),S.texture;if(S!==void 0)return S.texture;{const L=v.image;return E&&L&&L.height>0||A&&L&&d(L)?(i===null&&(i=new dc(s)),S=E?i.fromEquirectangular(v):i.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,t.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function f(v,x){return x===nf?v.mapping=Js:x===rf&&(v.mapping=ao),v}function d(v){let x=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&x++;return x===E}function h(v){const x=v.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:_}}function oT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&ic("WebGLRenderer: "+i+" extension not supported."),a}}}function lT(s,e,t,i){const a={},l=new WeakMap,c=new FinalizationRegistry(E=>delete a[E]);function f(E){d(E.target)}function d(E){E.index!==null&&e.remove(E.index);for(const S in E.attributes)e.remove(E.attributes[S]);E.removeEventListener("dispose",f),delete a[E.id],c.unregister(E);const A=l.get(E);A&&(e.remove(A),l.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,A){return a[A.id]!==void 0||(A.addEventListener("dispose",f),a[A.id]=new WeakRef(A),c.register(A,A.id,A),t.memory.geometries++),A}function g(E){const A=E.attributes;for(const S in A)e.update(A[S],s.ARRAY_BUFFER)}function _(E){const A=E.index,S=E.attributes.position;let y=0;if(S===void 0)return;const L=A!==null?A.array.length:S.array.length/3-1,N=S.count>=65535?Q0:J0,b=new N(Math.ceil(L/3)*6,1),U=b.array;if(A!==null){const M=A.array;y=A.version;for(let P=0,$=0;P<L;P+=3){const z=M[P+0],G=M[P+1],j=M[P+2];U[$++]=z,U[$++]=G,U[$++]=G,U[$++]=j,U[$++]=j,U[$++]=z}}else{y=S.version;for(let M=0,P=0;M<L;M+=3){const $=M+0,z=M+1,G=M+2;U[P++]=$,U[P++]=z,U[P++]=z,U[P++]=G,U[P++]=G,U[P++]=$}}b.version=y;const w=l.get(E);w&&e.remove(w),l.set(E,b)}function v(E){const A=l.get(E);if(A){const S=E.index;S!==null&&A.version<S.version&&_(E)}else _(E);return l.get(E)}function x(){for(const E in a){const A=a[E].deref();A!==void 0&&d(A)}}return{get:h,update:g,getWireframeAttribute:v,dispose:x}}function cT(s,e,t){let i;function a(_){i=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,v){s.drawElements(i,v,l,_*c),t.update(v,i,1)}function h(_,v,x){x!==0&&(s.drawElementsInstanced(i,v,l,_*c,x),t.update(v,i,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,l,_,0,x);let A=0;for(let S=0;S<x;S++)A+=v[S];t.update(A,i,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function uT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function fT(s,e,t){const i=new WeakMap,a=new Qt;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let z=function(){P.dispose(),i.delete(f),f.removeEventListener("dispose",z)};var x=z;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),A===!0&&(b=2),S===!0&&(b=3);let U=f.attributes.position.count*b,w=1;U>e.maxTextureSize&&(w=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const M=new Float32Array(U*w*4*_),P=new K0(M,U,w,_);P.type=Ri,P.needsUpdate=!0;const $=b*4;for(let G=0;G<_;G++){const j=y[G],ae=L[G],k=N[G],ie=U*w*4*G;for(let ce=0;ce<j.count;ce++){const q=ce*$;E===!0&&(a.fromBufferAttribute(j,ce),M[ie+q+0]=a.x,M[ie+q+1]=a.y,M[ie+q+2]=a.z,M[ie+q+3]=0),A===!0&&(a.fromBufferAttribute(ae,ce),M[ie+q+4]=a.x,M[ie+q+5]=a.y,M[ie+q+6]=a.z,M[ie+q+7]=0),S===!0&&(a.fromBufferAttribute(k,ce),M[ie+q+8]=a.x,M[ie+q+9]=a.y,M[ie+q+10]=a.z,M[ie+q+11]=k.itemSize===4?a.w:1)}}v={count:_,texture:P,size:new Mt(U,w)},i.set(f,v),f.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const A=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function dT(s,e,t,i,a){let l=new WeakMap;function c(h){const g=a.render.frame,_=h.geometry,v=e.get(h,_);if(l.get(v)!==g&&(e.update(v),l.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return v}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const hT={[L0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[N0]:"CINEON_TONE_MAPPING",[kd]:"ACES_FILMIC_TONE_MAPPING",[O0]:"AGX_TONE_MAPPING",[F0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function pT(s,e,t,i,a,l){const c=new zi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,d=null,h=null;const g=new oi;g.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new xn([0,2,0,0,2,0],2));const _=new sy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Zn(g,_),x=new f_(-1,1,1,-1,0,1);let E=null,A=null,S=!1,y,L=null,N=[],b=!1;this.setSize=function(U,w){c.setSize(U,w),f!==null&&f.setSize(U,w),d!==null&&d.setSize(U,w);for(let M=0;M<N.length;M++){const P=N[M];P.setSize&&P.setSize(U,w)}},this.setEffects=function(U){N=U,b=N.length>0&&N[0].isRenderPass===!0;const w=c.width,M=c.height;N.length>0&&f===null&&(f=new zi(w,M,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),d=new zi(w,M,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));const P=a===!0&&N.some($=>$.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&h===null&&(h=new ea(w,M),l===!0&&(h.format=Nr,h.type=Qs)),c.dispose(),c.depthTexture=P?h:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let $=0;$<N.length;$++){const z=N[$];z.setSize&&z.setSize(w,M),P&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(h)}},this.begin=function(U,w){if(S||U.toneMapping===sr&&N.length===0)return!1;if(L=w,w!==null){const M=w.width,P=w.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return b===!1&&U.setRenderTarget(c),y=U.toneMapping,U.toneMapping=sr,!0},this.hasRenderPass=function(){return b},this.end=function(U,w){U.toneMapping=y,S=!0;let M=c,P=f;for(let $=0;$<N.length;$++){const z=N[$];z.enabled!==!1&&(z.render(U,P,M,w),z.needsSwap!==!1&&(M=P,P=P===f?d:f))}if(E!==U.outputColorSpace||A!==U.toneMapping){E=U.outputColorSpace,A=U.toneMapping,_.defines={},vt.getTransfer(E)===Dt&&(_.defines.SRGB_TRANSFER="");const $=hT[A];$&&(_.defines[$]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=M.texture,U.setRenderTarget(L),U.render(v,x),L=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f!==null&&f.dispose(),d!==null&&d.dispose(),g.dispose(),_.dispose()}}const __=new Ln,v_=new ea(1,1),x_=new a_(1),S_=new K0,y_=new FS,M_=new r_,Mg=[],Eg=[],Tg=new Float32Array(16),Cg=new Float32Array(9),Rg=new Float32Array(4);function sa(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=Mg[a];if(l===void 0&&(l=new Float32Array(a),Mg[a]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function gc(s,e){let t=Eg[e];t===void 0&&(t=new Int32Array(e),Eg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function mT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function _T(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function xT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Rg.set(i),s.uniformMatrix2fv(this.addr,!1,Rg),fn(t,i)}}function ST(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Cg.set(i),s.uniformMatrix3fv(this.addr,!1,Cg),fn(t,i)}}function yT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Tg.set(i),s.uniformMatrix4fv(this.addr,!1,Tg),fn(t,i)}}function MT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ET(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function TT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function CT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function RT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function AT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function bT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function wT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function _c(s){return s.version===0&&(s.compareFunction=q0,s.needsUpdate=!0),s}function PT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?l=_c(v_):l=__,t.setTexture2D(e||l,a)}function DT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||y_,a)}function LT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=_c(x_):l=M_,t.setTextureCube(e||l,a)}function IT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||S_,a)}function NT(s){switch(s){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return CT;case 5125:return RT;case 36294:return AT;case 36295:return bT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return IT}}function UT(s,e){s.uniform1fv(this.addr,e)}function OT(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function FT(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function kT(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function BT(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zT(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HT(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function GT(s,e){s.uniform1iv(this.addr,e)}function VT(s,e){s.uniform2iv(this.addr,e)}function WT(s,e){s.uniform3iv(this.addr,e)}function XT(s,e){s.uniform4iv(this.addr,e)}function $T(s,e){s.uniform1uiv(this.addr,e)}function qT(s,e){s.uniform2uiv(this.addr,e)}function YT(s,e){s.uniform3uiv(this.addr,e)}function KT(s,e){s.uniform4uiv(this.addr,e)}function jT(s,e,t){const i=this.cache,a=e.length,l=gc(t,a);un(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=_c(v_):c=__;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,l[f])}function ZT(s,e,t){const i=this.cache,a=e.length,l=gc(t,a);un(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||y_,l[c])}function JT(s,e,t){const i=this.cache,a=e.length,l=gc(t,a);un(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=_c(x_):c=M_;for(let f=0;f!==a;++f)t.setTextureCube(e[f]||c,l[f])}function QT(s,e,t){const i=this.cache,a=e.length,l=gc(t,a);un(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||S_,l[c])}function eC(s){switch(s){case 5126:return UT;case 35664:return OT;case 35665:return FT;case 35666:return kT;case 35674:return BT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return $T;case 36294:return qT;case 36295:return YT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}class tC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NT(t.type)}}class nC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eC(t.type)}}class iC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],i)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function Ag(s,e){s.seq.push(e),s.map[e.id]=e}function rC(s,e,t){const i=s.name,a=i.length;for(Pf.lastIndex=0;;){const l=Pf.exec(i),c=Pf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===a){Ag(t,h===void 0?new tC(f,s,e):new nC(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new iC(f),Ag(t,_)),t=_}}}class rc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);rC(f,d,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function bg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const sC=37297;let aC=0;function oC(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const wg=new ut;function lC(s){vt._getMatrix(wg,vt.workingColorSpace,s);const e=`mat3( ${wg.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(s)){case uc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pg(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+oC(s.getShaderSource(e),f)}else return l}function cC(s,e){const t=lC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const uC={[L0]:"Linear",[I0]:"Reinhard",[N0]:"Cineon",[kd]:"ACESFilmic",[O0]:"AgX",[F0]:"Neutral",[U0]:"Custom"};function fC(s,e){const t=uC[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xl=new oe;function dC(){vt.getLuminanceCoefficients(Xl);const s=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function pC(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mC(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function eo(s){return s!==""}function Dg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gC=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(gC,_C)}function _C(s,e){const t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wd(t)}const vC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(s){return s.replace(vC,xC)}function xC(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ng(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SC={[Jl]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function yC(s){return SC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MC={[ao]:"ENVMAP_MODE_REFRACTION"};function EC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":MC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TC={[D0]:"ENVMAP_BLENDING_MULTIPLY",[dS]:"ENVMAP_BLENDING_MIX",[hS]:"ENVMAP_BLENDING_ADD"};function CC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":TC[s.combine]||"ENVMAP_BLENDING_NONE"}function RC(s,e,t,i){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=yC(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=EC(t),_=CC(t),v=hC(t),x=pC(l),E=a.createProgram();let A,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(eo).join(`
`),A.length>0&&(A+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(eo).join(`
`),S.length>0&&(S+=`
`)):(A=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),S=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?ht.tonemapping_pars_fragment:"",t.toneMapping!==sr?fC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,cC("linearToOutputTexel",t.outputColorSpace),dC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),c=wd(c),c=Dg(c,t),c=Lg(c,t),f=wd(f),f=Dg(f,t),f=Lg(f,t),c=Ig(c),f=Ig(f),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,A=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,S=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=y+A+c,N=y+S+f,b=bg(a,a.VERTEX_SHADER,L),U=bg(a,a.FRAGMENT_SHADER,N);a.attachShader(E,b),a.attachShader(E,U),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function w(z){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(E)||"",j=a.getShaderInfoLog(b)||"",ae=a.getShaderInfoLog(U)||"",k=G.trim(),ie=j.trim(),ce=ae.trim();let q=!0,J=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,b,U);else{const V=Pg(a,b,"vertex"),Y=Pg(a,U,"fragment");wt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+k+`
`+V+`
`+Y)}else k!==""?ot("WebGLProgram: Program Info Log:",k):(ie===""||ce==="")&&(J=!1);J&&(z.diagnostics={runnable:q,programLog:k,vertexShader:{log:ie,prefix:A},fragmentShader:{log:ce,prefix:S}})}a.deleteShader(b),a.deleteShader(U),M=new rc(a,E),P=mC(a,E)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let P;this.getAttributes=function(){return P===void 0&&w(this),P};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=a.getProgramParameter(E,sC)),$},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=U,this}let AC=0;class bC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wC(e),t.set(e,i)),i}}class wC{constructor(e){this.id=AC++,this.code=e,this.usedTimes=0}}function PC(s){return s===is||s===oc||s===lc}function DC(s,e,t,i,a,l){const c=new j0,f=new bC,d=new Set,h=[],g=new Map,_=i.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return d.add(M),M===0?"uv":`uv${M}`}function E(M,P,$,z,G,j){const ae=z.fog,k=G.geometry,ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,ce=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,q=e.get(M.envMap||ie,ce),J=v[M.type];let V=i.precision;M.precision!==null&&(V=i.getMaxPrecision(M.precision),V!==M.precision&&ot("WebGLProgram.getParameters:",M.precision,"not supported, using",V,"instead."));const Y=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,D=Y!==void 0?Y.length:0;let K=0;k.morphAttributes.position!==void 0&&(K=1),k.morphAttributes.normal!==void 0&&(K=2),k.morphAttributes.color!==void 0&&(K=3);let De,ne,ge,Me;if(J){const Fe=ki[J];De=Fe.vertexShader,ne=Fe.fragmentShader}else{De=M.vertexShader,ne=M.fragmentShader;const Fe=f.getVertexShaderStage(M),_t=f.getFragmentShaderStage(M);f.update(M,Fe,_t),ge=Fe.id,Me=_t.id}const Ue=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ze=G.isInstancedMesh===!0,St=G.isBatchedMesh===!0,et=!!M.map,Tt=!!M.matcap,Ct=!!q,dt=Ct&&q.isPMREMTexture===!0,en=!!M.aoMap,qt=!!M.lightMap,dn=!!M.bumpMap&&M.wireframe===!1,Ot=!!M.normalMap,zn=!!M.displacementMap,zt=!!M.emissiveMap,sn=!!M.metalnessMap,En=!!M.roughnessMap,Nn=M.anisotropy>0,X=M.clearcoat>0,Un=M.diffuseRoughness>0,It=M.dispersion>0,Lt=M.retroreflectivity>0,Ie=M.iridescence>0,Yt=M.sheen>0,Qe=M.transmission>0,it=Nn&&!!M.anisotropyMap,I=X&&!!M.clearcoatMap,C=X&&!!M.clearcoatNormalMap,ee=X&&!!M.clearcoatRoughnessMap,ye=Un&&!!M.diffuseRoughnessMap,pe=Ie&&!!M.iridescenceMap,Ae=Ie&&!!M.iridescenceThicknessMap,Pe=Yt&&!!M.sheenColorMap,fe=Yt&&!!M.sheenRoughnessMap,de=!!M.specularMap,Ce=!!M.specularColorMap,F=!!M.specularIntensityMap,he=Qe&&!!M.transmissionMap,ue=Qe&&!!M.thicknessMap,we=!!M.gradientMap,Te=!!M.alphaMap,be=M.alphaTest>0,Ke=!!M.alphaHash,ct=!!M.extensions;let Se=sr;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Je=dt?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,st={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:De,fragmentShader:ne,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:V,batching:St,batchingColor:St&&G._colorsTexture!==null,instancing:ze,instancingColor:ze&&G.instanceColor!==null,instancingMorph:ze&&G.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Tt,envMap:Ct,envMapMode:Ct&&q.mapping,envMapPMREM:dt,envMapMaxLod:dt?Je.length-1:null,envMapSize:dt?Je[0].width:null,aoMap:en,lightMap:qt,bumpMap:dn,normalMap:Ot,displacementMap:zn,emissiveMap:zt,normalMapObjectSpace:Ot&&M.normalMapType===gS,normalMapTangentSpace:Ot&&M.normalMapType===Td,packedNormalMap:Ot&&M.normalMapType===Td&&PC(M.normalMap.format),metalnessMap:sn,roughnessMap:En,anisotropy:Nn,anisotropyMap:it,clearcoat:X,clearcoatMap:I,clearcoatNormalMap:C,clearcoatRoughnessMap:ee,diffuseRoughness:Un,diffuseRoughnessMap:ye,dispersion:It,retroreflection:Lt,iridescence:Ie,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:Yt,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:de,specularColorMap:Ce,specularIntensityMap:F,transmission:Qe,transmissionMap:he,thicknessMap:ue,gradientMap:we,opaque:M.transparent===!1&&M.blending===to&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:be,alphaHash:Ke,combine:M.combine,mapUv:et&&x(M.map.channel),aoMapUv:en&&x(M.aoMap.channel),lightMapUv:qt&&x(M.lightMap.channel),bumpMapUv:dn&&x(M.bumpMap.channel),normalMapUv:Ot&&x(M.normalMap.channel),displacementMapUv:zn&&x(M.displacementMap.channel),emissiveMapUv:zt&&x(M.emissiveMap.channel),metalnessMapUv:sn&&x(M.metalnessMap.channel),roughnessMapUv:En&&x(M.roughnessMap.channel),anisotropyMapUv:it&&x(M.anisotropyMap.channel),clearcoatMapUv:I&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:C&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&x(M.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(M.sheenRoughnessMap.channel),specularMapUv:de&&x(M.specularMap.channel),specularColorMapUv:Ce&&x(M.specularColorMap.channel),specularIntensityMapUv:F&&x(M.specularIntensityMap.channel),transmissionMapUv:he&&x(M.transmissionMap.channel),thicknessMapUv:ue&&x(M.thicknessMap.channel),alphaMapUv:Te&&x(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ot||Nn),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(et||Te),fog:!!ae,useFog:M.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&Ot===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:_e,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:K,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:j.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:zt&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ir,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ct&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&M.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=d.has(1),st.vertexUv2s=d.has(2),st.vertexUv3s=d.has(3),d.clear(),st}function A(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)P.push($),P.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(S(P,M),y(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function S(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function y(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function L(M){const P=v[M.type];let $;if(P){const z=ki[P];$=ny.clone(z.uniforms)}else $=M.uniforms;return $}function N(M,P){let $=g.get(P);return $!==void 0?++$.usedTimes:($=new RC(s,P,M,a),h.push($),g.set(P,$)),$}function b(M){if(--M.usedTimes===0){const P=h.indexOf(M);h[P]=h[h.length-1],h.pop(),g.delete(M.cacheKey),M.destroy()}}function U(M){f.remove(M)}function w(){f.dispose()}return{getParameters:E,getProgramCacheKey:A,getUniforms:L,acquireProgram:N,releaseProgram:b,releaseShaderCache:U,programs:h,dispose:w}}function LC(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function a(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:l}}function IC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ug(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Og(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function c(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function f(v,x,E,A,S,y){let L=s[e];return L===void 0?(L={id:v.id,object:v,geometry:x,material:E,materialVariant:c(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:y},s[e]=L):(L.id=v.id,L.object=v,L.geometry=x,L.material=E,L.materialVariant=c(v),L.groupOrder=A,L.renderOrder=v.renderOrder,L.z=S,L.group=y),e++,L}function d(v,x,E,A,S,y,L){L.reversedDepth===!0&&(S=-S);const N=f(v,x,E,A,S,y);E.transmission>0?i.push(N):E.transparent===!0?a.push(N):t.push(N)}function h(v,x,E,A,S,y){const L=f(v,x,E,A,S,y);E.transmission>0?i.unshift(L):E.transparent===!0?a.unshift(L):t.unshift(L)}function g(v,x){t.length>1&&t.sort(v||IC),i.length>1&&i.sort(x||Ug),a.length>1&&a.sort(x||Ug)}function _(){for(let v=e,x=s.length;v<x;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:d,unshift:h,finish:_,sort:g}}function NC(){let s=new WeakMap;function e(i,a){const l=s.get(i);let c;return l===void 0?(c=new Og,s.set(i,[c])):a>=l.length?(c=new Og,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function UC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new oe,color:new yt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=t,t}}}function OC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let FC=0;function kC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BC(s){const e=new UC,t=OC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new oe);const a=new oe,l=new Ut,c=new Ut;function f(h){let g=0,_=0,v=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let x=0,E=0,A=0,S=0,y=0,L=0,N=0,b=0,U=0,w=0,M=0,P=0,$=0,z=0;h.sort(kC);for(let j=0,ae=h.length;j<ae;j++){const k=h[j],ie=k.color,ce=k.intensity,q=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===is?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=ie.r*ce,_+=ie.g*ce,v+=ie.b*ce;else if(k.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(k.sh.coefficients[V],ce);z++}else if(k.isSunLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,D=t.get(k);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[E]=D,i.sunShadowMap[E]=J;const K=Y.getViewportCount();for(let De=0;De<K;De++)i.sunShadowMatrix[A+De]=Y.getMatrix(De),i.sunShadowCascade[A+De]=Y._cascadeData[De];A+=K,E++}i.sun[x]=V,x++}else if(k.isDirectionalLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,D=t.get(k);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.directionalShadow[S]=D,i.directionalShadowMap[S]=J,i.directionalShadowMatrix[S]=k.shadow.matrix,U++}i.directional[S]=V,S++}else if(k.isSpotLight){const V=e.get(k);V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(ie).multiplyScalar(ce),V.distance=q,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,i.spot[L]=V;const Y=k.shadow;if(k.map&&(i.spotLightMap[P]=k.map,P++,Y.updateMatrices(k),k.castShadow&&$++),i.spotLightMatrix[L]=Y.matrix,k.castShadow){const D=t.get(k);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,i.spotShadow[L]=D,i.spotShadowMap[L]=J,M++}L++}else if(k.isRectAreaLight){const V=e.get(k);V.color.copy(ie).multiplyScalar(ce),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),i.rectArea[N]=V,N++}else if(k.isPointLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),V.distance=k.distance,V.decay=k.decay,k.castShadow){const Y=k.shadow,D=t.get(k);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,i.pointShadow[y]=D,i.pointShadowMap[y]=J,i.pointShadowMatrix[y]=k.shadow.matrix,w++}i.point[y]=V,y++}else if(k.isHemisphereLight){const V=e.get(k);V.skyColor.copy(k.color).multiplyScalar(ce),V.groundColor.copy(k.groundColor).multiplyScalar(ce),i.hemi[b]=V,b++}}N>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=v;const G=i.hash;(G.sunLength!==x||G.directionalLength!==S||G.pointLength!==y||G.spotLength!==L||G.rectAreaLength!==N||G.hemiLength!==b||G.numSunShadows!==E||G.numDirectionalShadows!==U||G.numPointShadows!==w||G.numSpotShadows!==M||G.numSpotMaps!==P||G.numLightProbes!==z)&&(i.sun.length=x,i.directional.length=S,i.spot.length=L,i.rectArea.length=N,i.point.length=y,i.hemi.length=b,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=A,i.sunShadowCascade.length=A,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.directionalShadowMatrix.length=U,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+P-$,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=$,i.numLightProbes=z,G.sunLength=x,G.directionalLength=S,G.pointLength=y,G.spotLength=L,G.rectAreaLength=N,G.hemiLength=b,G.numSunShadows=E,G.numDirectionalShadows=U,G.numPointShadows=w,G.numSpotShadows=M,G.numSpotMaps=P,G.numLightProbes=z,i.version=FC++)}function d(h,g){let _=0,v=0,x=0,E=0,A=0,S=0;const y=g.matrixWorldInverse;for(let L=0,N=h.length;L<N;L++){const b=h[L];if(b.isSunLight){const U=i.sun[_];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(y),_++}else if(b.isDirectionalLight){const U=i.directional[v];U.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(y),v++}else if(b.isSpotLight){const U=i.spot[E];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(y),E++}else if(b.isRectAreaLight){const U=i.rectArea[A];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const U=i.point[x];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const U=i.hemi[S];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(y),S++}}}return{setup:f,setupView:d,state:i}}function Fg(s){const e=new BC(s),t=[],i=[],a=[];function l(_){g.camera=_,t.length=0,i.length=0,a.length=0}function c(_){_.isLightProbeGrid?a.push(_):t.push(_)}function f(_){i.push(_)}function d(){e.setup(t),a.sort((_,v)=>_.priority-v.priority||_.id-v.id)}function h(_){e.setupView(t,_)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:f}}function zC(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Fg(s),e.set(a,[f])):l>=c.length?(f=new Fg(s),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const HC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VC=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],WC=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],kg=new Ut,ja=new oe,Df=new oe;function XC(s,e,t){let i=new co;const a=new Mt,l=new Mt,c=new Qt,f=new ay,d=new oy,h={},g=t.maxTextureSize,_={[ns]:jn,[jn]:ns,[ir]:ir},v=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:HC,fragmentShader:GC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let y=this.type;this.render=function(w,M,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||w.length===0)return;this.type===qx&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jl);const $=s.getRenderTarget(),z=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),j=s.state;j.setBlending(js),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ae=y!==this.type;ae&&M.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(ie=>ie.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,ie=w.length;k<ie;k++){const ce=w[k],q=ce.shadow;if(q===void 0){ot("WebGLShadowMap:",ce,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const J=q.getFrameExtents();a.multiply(J),l.copy(q.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/J.x),a.x=l.x*J.x,q.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/J.y),a.y=l.y*J.y,q.mapSize.y=l.y));const V=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=V,q.map===null||ae===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ja){if(ce.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new zi(a.x,a.y,{format:is,type:Vi,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),q.map.texture.name=ce.name+".shadowMap",q.map.depthTexture=new ea(a.x,a.y,Ri),q.map.depthTexture.name=ce.name+".shadowMapDepth",q.map.depthTexture.format=Or,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn}else ce.isPointLight?(q.map=new eh(a.x),q.map.depthTexture=new a_(a.x,Gi)):(q.map=new zi(a.x,a.y),q.map.depthTexture=new ea(a.x,a.y,Gi)),q.map.depthTexture.name=ce.name+".shadowMap",q.map.depthTexture.format=Or,this.type===Jl?(q.map.depthTexture.compareFunction=V?$0:X0,q.map.depthTexture.minFilter=Kn,q.map.depthTexture.magFilter=Kn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Mn,q.map.depthTexture.magFilter=Mn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);const Y=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();ce.isPointLight!==!0&&q.updateMatrices(ce,P);const D=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:P.layers;for(let K=0;K<Y;K++){const De=q.getCamera(K);if(ce.isPointLight){const ne=q.camera,ge=q.matrix,Me=ce.distance||ne.far;Me!==ne.far&&(ne.far=Me,ne.updateProjectionMatrix()),ja.setFromMatrixPosition(ce.matrixWorld),ne.position.copy(ja),Df.copy(ne.position),Df.add(VC[K]),ne.up.copy(WC[K]),ne.lookAt(Df),ne.updateMatrixWorld(),ge.makeTranslation(-ja.x,-ja.y,-ja.z),kg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),q._frustum.setFromProjectionMatrix(kg,ne.coordinateSystem,ne.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,K),s.clear();else{K===0&&(s.setRenderTarget(q.map),s.clear());const ne=q.getViewport(K);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),j.viewport(c)}i=q.getFrustum(K),b(M,P,De,ce,D,this.type)}q.isPointLightShadow!==!0&&this.type===Ja&&L(q,P),q.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget($,z,G)};function L(w,M){const P=e.update(A);v.defines.VSM_SAMPLES!==w.blurSamples&&(v.defines.VSM_SAMPLES=w.blurSamples,x.defines.VSM_SAMPLES=w.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),w.mapPass===null?w.mapPass=new zi(a.x,a.y,{format:is,type:Vi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),v.uniforms.shadow_pass.value=w.map.depthTexture,v.uniforms.resolution.value.set(w.map.width,w.map.height),v.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(M,null,P,v,A,null),x.uniforms.shadow_pass.value=w.mapPass.texture,x.uniforms.resolution.value.set(w.map.width,w.map.height),x.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(M,null,P,x,A,null)}function N(w,M,P,$){let z=null;const G=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(G!==void 0)z=G;else if(z=P.isPointLight===!0?d:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const j=z.uuid,ae=M.uuid;let k=h[j];k===void 0&&(k={},h[j]=k);let ie=k[ae];ie===void 0&&(ie=z.clone(),k[ae]=ie,M.addEventListener("dispose",U)),z=ie}if(z.visible=M.visible,z.wireframe=M.wireframe,$===Ja?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:_[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,z.map=M.map,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,P.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const j=s.properties.get(z);j.light=P}return z}function b(w,M,P,$,z,G){if(w.visible===!1)return;if(w.layers.test(z)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&G===Ja)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=e.update(w),ie=w.material;if(Array.isArray(ie)){const ce=k.groups;for(let q=0,J=ce.length;q<J;q++){const V=ce[q],Y=ie[V.materialIndex];if(Y&&Y.visible){const D=N(w,Y,$,G);w.onBeforeShadow(s,w,M,P,k,D,V),s.renderBufferDirect(P,null,k,D,w,V),w.onAfterShadow(s,w,M,P,k,D,V)}}}else if(ie.visible){const ce=N(w,ie,$,G);w.onBeforeShadow(s,w,M,P,k,ce,null),s.renderBufferDirect(P,null,k,ce,w,null),w.onAfterShadow(s,w,M,P,k,ce,null)}}const ae=w.children;for(let k=0,ie=ae.length;k<ie;k++)b(ae[k],M,P,$,z,G)}function U(w){w.target.removeEventListener("dispose",U);for(const P in h){const $=h[P],z=w.target.uuid;z in $&&($[z].dispose(),delete $[z])}}}function $C(s,e){function t(){let F=!1;const he=new Qt;let ue=null;const we=new Qt(0,0,0,0);return{setMask:function(Te){ue!==Te&&!F&&(s.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){F=Te},setClear:function(Te,be,Ke,ct,Se){Se===!0&&(Te*=ct,be*=ct,Ke*=ct),he.set(Te,be,Ke,ct),we.equals(he)===!1&&(s.clearColor(Te,be,Ke,ct),we.copy(he))},reset:function(){F=!1,ue=null,we.set(-1,0,0,0)}}}function i(){let F=!1,he=!1,ue=null,we=null,Te=null;return{setReversed:function(be){if(he!==be){const Ke=e.get("EXT_clip_control");be?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),he=be;const ct=Te;Te=null,this.setClear(ct)}},getReversed:function(){return he},setTest:function(be){be?_e(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(be){ue!==be&&!F&&(s.depthMask(be),ue=be)},setFunc:function(be){if(he&&(be=AS[be]),we!==be){switch(be){case Bf:s.depthFunc(s.NEVER);break;case zf:s.depthFunc(s.ALWAYS);break;case Hf:s.depthFunc(s.LESS);break;case so:s.depthFunc(s.LEQUAL);break;case Gf:s.depthFunc(s.EQUAL);break;case Vf:s.depthFunc(s.GEQUAL);break;case Wf:s.depthFunc(s.GREATER);break;case Xf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=be}},setLocked:function(be){F=be},setClear:function(be){Te!==be&&(Te=be,he&&(be=1-be),s.clearDepth(be))},reset:function(){F=!1,ue=null,we=null,Te=null,he=!1}}}function a(){let F=!1,he=null,ue=null,we=null,Te=null,be=null,Ke=null,ct=null,Se=null;return{setTest:function(Je){F||(Je?_e(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Je){he!==Je&&!F&&(s.stencilMask(Je),he=Je)},setFunc:function(Je,st,Fe){(ue!==Je||we!==st||Te!==Fe)&&(s.stencilFunc(Je,st,Fe),ue=Je,we=st,Te=Fe)},setOp:function(Je,st,Fe){(be!==Je||Ke!==st||ct!==Fe)&&(s.stencilOp(Je,st,Fe),be=Je,Ke=st,ct=Fe)},setLocked:function(Je){F=Je},setClear:function(Je){Se!==Je&&(s.clearStencil(Je),Se=Je)},reset:function(){F=!1,he=null,ue=null,we=null,Te=null,be=null,Ke=null,ct=null,Se=null}}}const l=new t,c=new i,f=new a;let d={};const h=new WeakMap;let g={},_={},v={},x=new WeakMap,E=[],A=null,S=!1,y=null,L=null,N=null,b=null,U=null,w=null,M=null,P=new yt(0,0,0),$=0,z=!1,G=null,j=null,ae=null,k=null,ie=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=J>=2);let Y=null,D={};const K=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),ne=new Qt().fromArray(K),ge=new Qt().fromArray(De);function Me(F,he,ue,we){const Te=new Uint8Array(4),be=s.createTexture();s.bindTexture(F,be),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ue;Ke++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(he+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return be}const Ue={};Ue[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),c.setFunc(so),dn(!1),Ot(Bm),_e(s.CULL_FACE),en(js);function _e(F){g[F]!==!0&&(s.enable(F),g[F]=!0)}function ze(F){g[F]!==!1&&(s.disable(F),g[F]=!1)}function St(F,he){return v[F]!==he?(s.bindFramebuffer(F,he),v[F]=he,F===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=he),F===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=he),!0):!1}function et(F,he){let ue=E,we=!1;if(F){ue=x.get(he),ue===void 0&&(ue=[],x.set(he,ue));const Te=F.textures;if(ue.length!==Te.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ke=Te.length;be<Ke;be++)ue[be]=s.COLOR_ATTACHMENT0+be;ue.length=Te.length,we=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,we=!0);we&&s.drawBuffers(ue)}function Tt(F){return A!==F?(s.useProgram(F),A=F,!0):!1}const Ct={[Ys]:s.FUNC_ADD,[Kx]:s.FUNC_SUBTRACT,[jx]:s.FUNC_REVERSE_SUBTRACT};Ct[Zx]=s.MIN,Ct[Jx]=s.MAX;const dt={[Qx]:s.ZERO,[eS]:s.ONE,[tS]:s.SRC_COLOR,[w0]:s.SRC_ALPHA,[oS]:s.SRC_ALPHA_SATURATE,[sS]:s.DST_COLOR,[iS]:s.DST_ALPHA,[nS]:s.ONE_MINUS_SRC_COLOR,[P0]:s.ONE_MINUS_SRC_ALPHA,[aS]:s.ONE_MINUS_DST_COLOR,[rS]:s.ONE_MINUS_DST_ALPHA,[lS]:s.CONSTANT_COLOR,[cS]:s.ONE_MINUS_CONSTANT_COLOR,[uS]:s.CONSTANT_ALPHA,[fS]:s.ONE_MINUS_CONSTANT_ALPHA};function en(F,he,ue,we,Te,be,Ke,ct,Se,Je){if(F===js){S===!0&&(ze(s.BLEND),S=!1);return}if(S===!1&&(_e(s.BLEND),S=!0),F!==Yx){if(F!==y||Je!==z){if((L!==Ys||U!==Ys)&&(s.blendEquation(s.FUNC_ADD),L=Ys,U=Ys),Je)switch(F){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFunc(s.ONE,s.ONE);break;case Hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",F);break}else switch(F){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hm:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",F);break}N=null,b=null,w=null,M=null,P.set(0,0,0),$=0,y=F,z=Je}return}Te=Te||he,be=be||ue,Ke=Ke||we,(he!==L||Te!==U)&&(s.blendEquationSeparate(Ct[he],Ct[Te]),L=he,U=Te),(ue!==N||we!==b||be!==w||Ke!==M)&&(s.blendFuncSeparate(dt[ue],dt[we],dt[be],dt[Ke]),N=ue,b=we,w=be,M=Ke),(ct.equals(P)===!1||Se!==$)&&(s.blendColor(ct.r,ct.g,ct.b,Se),P.copy(ct),$=Se),y=F,z=!1}function qt(F,he){F.side===ir?ze(s.CULL_FACE):_e(s.CULL_FACE);let ue=F.side===jn;he&&(ue=!ue),dn(ue),F.blending===to&&F.transparent===!1?en(js):en(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),l.setMask(F.colorWrite);const we=F.stencilWrite;f.setTest(we),we&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function dn(F){G!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),G=F)}function Ot(F){F!==Xx?(_e(s.CULL_FACE),F!==j&&(F===Bm?s.cullFace(s.BACK):F===$x?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),j=F}function zn(F){F!==ae&&(q&&s.lineWidth(F),ae=F)}function zt(F,he,ue){F?(_e(s.POLYGON_OFFSET_FILL),(k!==he||ie!==ue)&&(k=he,ie=ue,c.getReversed()&&(he=-he,ue=-ue),s.polygonOffset(he,ue))):ze(s.POLYGON_OFFSET_FILL)}function sn(F){F?_e(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function En(F){F===void 0&&(F=s.TEXTURE0+ce-1),Y!==F&&(s.activeTexture(F),Y=F)}function Nn(F,he,ue){ue===void 0&&(Y===null?ue=s.TEXTURE0+ce-1:ue=Y);let we=D[ue];we===void 0&&(we={type:void 0,texture:void 0},D[ue]=we),(we.type!==F||we.texture!==he)&&(Y!==ue&&(s.activeTexture(ue),Y=ue),s.bindTexture(F,he||Ue[F]),we.type=F,we.texture=he)}function X(){const F=D[Y];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Un(){try{s.compressedTexImage2D(...arguments)}catch(F){wt("WebGLState:",F)}}function It(){try{s.compressedTexImage3D(...arguments)}catch(F){wt("WebGLState:",F)}}function Lt(){try{s.texSubImage2D(...arguments)}catch(F){wt("WebGLState:",F)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(F){wt("WebGLState:",F)}}function Yt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){wt("WebGLState:",F)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(F){wt("WebGLState:",F)}}function it(){try{s.texStorage2D(...arguments)}catch(F){wt("WebGLState:",F)}}function I(){try{s.texStorage3D(...arguments)}catch(F){wt("WebGLState:",F)}}function C(){try{s.texImage2D(...arguments)}catch(F){wt("WebGLState:",F)}}function ee(){try{s.texImage3D(...arguments)}catch(F){wt("WebGLState:",F)}}function ye(F){return _[F]!==void 0?_[F]:s.getParameter(F)}function pe(F,he){_[F]!==he&&(s.pixelStorei(F,he),_[F]=he)}function Ae(F){ne.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function Pe(F){ge.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ge.copy(F))}function fe(F,he){let ue=h.get(he);ue===void 0&&(ue=new WeakMap,h.set(he,ue));let we=ue.get(F);we===void 0&&(we=s.getUniformBlockIndex(he,F.name),s.uniformBlockBinding(he,we,we),ue.set(F,we))}function de(F,he,ue){const Te=h.get(he).get(F);d[Te]!==ue&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,ue),d[Te]=ue)}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},Y=null,D={},v={},d={},x=new WeakMap,E=[],A=null,S=!1,y=null,L=null,N=null,b=null,U=null,w=null,M=null,P=new yt(0,0,0),$=0,z=!1,G=null,j=null,ae=null,k=null,ie=null,ne.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:ze,bindFramebuffer:St,drawBuffers:et,useProgram:Tt,setBlending:en,setMaterial:qt,setFlipSided:dn,setCullFace:Ot,setLineWidth:zn,setPolygonOffset:zt,setScissorTest:sn,activeTexture:En,bindTexture:Nn,unbindTexture:X,compressedTexImage2D:Un,compressedTexImage3D:It,texImage2D:C,texImage3D:ee,pixelStorei:pe,getParameter:ye,updateUBOMapping:fe,uniformBlockBinding:de,texStorage2D:it,texStorage3D:I,texSubImage2D:Lt,texSubImage3D:Ie,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Qe,scissor:Ae,viewport:Pe,reset:Ce}}function qC(s,e,t,i,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,g=new WeakMap,_=new Set;let v;const x=new WeakMap,E=new Set,A=new FinalizationRegistry(I=>E.delete(I));let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,C){return S?new OffscreenCanvas(I,C):fc("canvas")}function L(I,C,ee){let ye=1;const pe=it(I);if((pe.width>ee||pe.height>ee)&&(ye=ee/Math.max(pe.width,pe.height)),ye<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ae=Math.floor(ye*pe.width),Pe=Math.floor(ye*pe.height);v===void 0&&(v=y(Ae,Pe));const fe=C?y(Ae,Pe):v;return fe.width=Ae,fe.height=Pe,fe.getContext("2d").drawImage(I,0,0,Ae,Pe),ot("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Pe+")."),fe}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function N(I){return I.generateMipmaps}function b(I){s.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,C,ee,ye,pe,Ae=!1){if(I!==null){if(s[I]!==void 0)return s[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;ye&&(Pe=e.get("EXT_texture_norm16"),Pe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=C;if(C===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),C===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),C===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),C===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),C===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),C===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),C===s.RGB&&(ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),C===s.RGBA){const de=Ae?uc:vt.getTransfer(pe);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=de===Dt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(I,C){let ee;return I?C===null||C===Gi||C===Qs?ee=s.DEPTH24_STENCIL8:C===Ri?ee=s.DEPTH32F_STENCIL8:C===oo&&(ee=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Gi||C===Qs?ee=s.DEPTH_COMPONENT24:C===Ri?ee=s.DEPTH_COMPONENT32F:C===oo&&(ee=s.DEPTH_COMPONENT16),ee}function P(I,C){return N(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==Kn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function $(I){const C=new WeakRef(I);i.get(I).__ref=C,E.add(C),A.register(I,C,C)}function z(I){const C=i.get(I).__ref;C!==void 0&&(E.delete(C),A.unregister(C))}function G(I){ae(I.target)}function j(I){k(I.target)}function ae(I){I.removeEventListener("dispose",G),z(I),ce(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&_.delete(I)}function k(I){I.removeEventListener("dispose",j),z(I),J(I)}function ie(){for(const I of E){const C=I.deref();C!==void 0&&(C.isRenderTarget===!0?k(C):ae(C))}E.clear(),_.clear()}function ce(I){const C=i.get(I);if(C.__webglInit===void 0)return;const ee=I.source,ye=x.get(ee);if(ye){const pe=ye[C.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&q(I),Object.keys(ye).length===0&&x.delete(ee)}i.remove(I)}function q(I){const C=i.get(I);s.deleteTexture(C.__webglTexture);const ee=I.source,ye=x.get(ee);delete ye[C.__cacheKey],c.memory.textures--}function J(I){const C=i.get(I);C.__depthDisposeCallback&&C.__depthDisposeCallback();const ee=I.depthTexture;if(ee&&ee.renderTarget===I&&ae(ee),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(C.__webglFramebuffer[pe]))for(let Ae=0;Ae<C.__webglFramebuffer[pe].length;Ae++)s.deleteFramebuffer(C.__webglFramebuffer[pe][Ae]);else s.deleteFramebuffer(C.__webglFramebuffer[pe]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[pe])}else{if(Array.isArray(C.__webglFramebuffer))for(let pe=0;pe<C.__webglFramebuffer.length;pe++)s.deleteFramebuffer(C.__webglFramebuffer[pe]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pe=0;pe<C.__webglColorRenderbuffer.length;pe++)C.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[pe]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ye=I.textures;for(let pe=0,Ae=ye.length;pe<Ae;pe++){const Pe=i.get(ye[pe]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),c.memory.textures--),i.remove(ye[pe])}i.remove(I)}let V=0;function Y(){V=0}function D(){return V}function K(I){V=I}function De(){const I=V;return I>=a.maxTextures&&ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,I}function ne(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.mipmapsAutoUpdate),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function ge(I,C){const ee=i.get(I);if(I.isVideoTexture&&Yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ee.__version!==I.version){const ye=I.image;if(ye===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(ee,I,C);return}}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+C)}function Me(I,C){const ee=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){qt(ee,I,C);return}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+C)}function Ue(I,C){const ee=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){qt(ee,I,C);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+C)}function _e(I,C){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){dn(ee,I,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+C)}const ze={[$f]:s.REPEAT,[rr]:s.CLAMP_TO_EDGE,[qf]:s.MIRRORED_REPEAT},St={[Mn]:s.NEAREST,[pS]:s.NEAREST_MIPMAP_NEAREST,[yl]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[sf]:s.LINEAR_MIPMAP_NEAREST,[Ir]:s.LINEAR_MIPMAP_LINEAR},et={[vS]:s.NEVER,[q0]:s.ALWAYS,[xS]:s.LESS,[X0]:s.LEQUAL,[SS]:s.EQUAL,[$0]:s.GEQUAL,[yS]:s.GREATER,[MS]:s.NOTEQUAL};function Tt(I,C){if(C.type===Ri&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Kn||C.magFilter===sf||C.magFilter===yl||C.magFilter===Ir||C.minFilter===Kn||C.minFilter===sf||C.minFilter===yl||C.minFilter===Ir)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ze[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ze[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ze[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,St[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,St[C.minFilter]),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,et[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Mn||C.minFilter!==yl&&C.minFilter!==Ir||C.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ct(I,C){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",G),$(C));const ye=C.source;let pe=x.get(ye);pe===void 0&&(pe={},x.set(ye,pe));const Ae=ne(C);if(Ae!==I.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),pe[Ae].usedTimes++;const Pe=pe[I.__cacheKey];Pe!==void 0&&(pe[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&q(C)),I.__cacheKey=Ae,I.__webglTexture=pe[Ae].texture}return ee}function dt(I,C,ee){return Math.floor(Math.floor(I/ee)/C)}function en(I,C,ee,ye){const Ae=I.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,ee,ye,C.data);else{Ae.sort((F,he)=>F.start-he.start);let Pe=0;for(let F=1;F<Ae.length;F++){const he=Ae[Pe],ue=Ae[F],we=he.start+he.count,Te=dt(ue.start,C.width,4),be=dt(he.start,C.width,4);ue.start<=we+1&&Te===be&&dt(ue.start+ue.count-1,C.width,4)===Te?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++Pe,Ae[Pe]=ue)}Ae.length=Pe+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let F=0,he=Ae.length;F<he;F++){const ue=Ae[F],we=Math.floor(ue.start/4),Te=Math.ceil(ue.count/4),be=we%C.width,Ke=Math.floor(we/C.width),ct=Te,Se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,be),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(s.TEXTURE_2D,0,be,Ke,ct,Se,ee,ye,C.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function qt(I,C,ee){let ye=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ye=s.TEXTURE_3D);const pe=Ct(I,C),Ae=C.source;t.bindTexture(ye,I.__webglTexture,s.TEXTURE0+ee);const Pe=i.get(Ae);if(Ae.version!==Pe.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const Se=vt.getPrimaries(vt.workingColorSpace),Je=C.colorSpace===Dr?null:vt.getPrimaries(C.colorSpace),st=C.colorSpace===Dr||Se===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment);let de=L(C.image,!1,a.maxTextureSize);de=Qe(C,de);const Ce=l.convert(C.format,C.colorSpace),F=l.convert(C.type);let he=w(C.internalFormat,Ce,F,C.normalized,C.colorSpace,C.isVideoTexture);Tt(ye,C);let ue;const we=C.mipmaps,Te=C.isVideoTexture!==!0,be=Pe.__version===void 0||pe===!0,Ke=Ae.dataReady,ct=P(C,de);if(C.isDepthTexture)he=M(C.format===Nr,C.type),be&&(Te?t.texStorage2D(s.TEXTURE_2D,1,he,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,Ce,F,null));else if(C.isDataTexture)if(we.length>0){Te&&be&&t.texStorage2D(s.TEXTURE_2D,ct,he,we[0].width,we[0].height);for(let Se=0,Je=we.length;Se<Je;Se++)ue=we[Se],Te?Ke&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ue.width,ue.height,Ce,F,ue.data):t.texImage2D(s.TEXTURE_2D,Se,he,ue.width,ue.height,0,Ce,F,ue.data);C.generateMipmaps=!1}else Te?(be&&t.texStorage2D(s.TEXTURE_2D,ct,he,de.width,de.height),Ke&&en(C,de,Ce,F)):t.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,Ce,F,de.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Te&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ct,he,we[0].width,we[0].height,de.depth);for(let Se=0,Je=we.length;Se<Je;Se++)if(ue=we[Se],C.format!==Bi)if(Ce!==null)if(Te){if(Ke)if(C.layerUpdates.size>0){const st=_g(ue.width,ue.height,C.format,C.type);for(const Fe of C.layerUpdates){const _t=ue.data.subarray(Fe*st/ue.data.BYTES_PER_ELEMENT,(Fe+1)*st/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,Fe,ue.width,ue.height,1,Ce,_t)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ue.width,ue.height,de.depth,Ce,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,he,ue.width,ue.height,de.depth,0,ue.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Ke&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ue.width,ue.height,de.depth,Ce,F,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,he,ue.width,ue.height,de.depth,0,Ce,F,ue.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Te&&be&&t.texStorage2D(s.TEXTURE_2D,ct,he,we[0].width,we[0].height);for(let Se=0,Je=we.length;Se<Je;Se++)ue=we[Se],C.format!==Bi?Ce!==null?Te?Ke&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,ue.width,ue.height,Ce,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,he,ue.width,ue.height,0,ue.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ke&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ue.width,ue.height,Ce,F,ue.data):t.texImage2D(s.TEXTURE_2D,Se,he,ue.width,ue.height,0,Ce,F,ue.data)}else if(C.isDataArrayTexture)if(Te){if(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ct,he,de.width,de.height,de.depth),Ke)if(C.layerUpdates.size>0){const Se=_g(de.width,de.height,C.format,C.type);for(const Je of C.layerUpdates){const st=de.data.subarray(Je*Se/de.data.BYTES_PER_ELEMENT,(Je+1)*Se/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Je,de.width,de.height,1,Ce,F,st)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,F,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,de.width,de.height,de.depth,0,Ce,F,de.data);else if(C.isData3DTexture)Te?(be&&t.texStorage3D(s.TEXTURE_3D,ct,he,de.width,de.height,de.depth),Ke&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,F,de.data)):t.texImage3D(s.TEXTURE_3D,0,he,de.width,de.height,de.depth,0,Ce,F,de.data);else if(C.isFramebufferTexture){if(be)if(Te)t.texStorage2D(s.TEXTURE_2D,ct,he,de.width,de.height);else{let Se=de.width,Je=de.height;for(let st=0;st<ct;st++)t.texImage2D(s.TEXTURE_2D,st,he,Se,Je,0,Ce,F,null),Se>>=1,Je>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in s){const Se=s.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),de.parentNode!==Se){Se.appendChild(de),_.add(C),Se.onpaint=Je=>{const st=Je.changedElements;for(const Fe of _)st.includes(Fe.image)&&(Fe.needsUpdate=!0)},Se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const st=s.RGBA,Fe=s.RGBA,_t=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,st,Fe,_t,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(we.length>0){if(Te&&be){const Se=it(we[0]);t.texStorage2D(s.TEXTURE_2D,ct,he,Se.width,Se.height)}for(let Se=0,Je=we.length;Se<Je;Se++)ue=we[Se],Te?Ke&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ce,F,ue):t.texImage2D(s.TEXTURE_2D,Se,he,Ce,F,ue);C.generateMipmaps=!1}else if(Te){if(be){const Se=it(de);t.texStorage2D(s.TEXTURE_2D,ct,he,Se.width,Se.height)}Ke&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,F,de)}else t.texImage2D(s.TEXTURE_2D,0,he,Ce,F,de);N(C)&&C.mipmapsAutoUpdate===!0&&b(ye),Pe.__version=Ae.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function dn(I,C,ee){if(C.image.length!==6)return;const ye=Ct(I,C),pe=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ee);const Ae=i.get(pe);if(pe.version!==Ae.__version||ye===!0){t.activeTexture(s.TEXTURE0+ee);const Pe=vt.getPrimaries(vt.workingColorSpace),fe=C.colorSpace===Dr?null:vt.getPrimaries(C.colorSpace),de=C.colorSpace===Dr||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ce=C.isCompressedTexture||C.image[0].isCompressedTexture,F=C.image[0]&&C.image[0].isDataTexture,he=[];for(let Fe=0;Fe<6;Fe++)!Ce&&!F?he[Fe]=L(C.image[Fe],!0,a.maxCubemapSize):he[Fe]=F?C.image[Fe].image:C.image[Fe],he[Fe]=Qe(C,he[Fe]);const ue=he[0],we=l.convert(C.format,C.colorSpace),Te=l.convert(C.type);let be=w(C.internalFormat,we,Te,C.normalized,C.colorSpace);const Ke=C.isVideoTexture!==!0,ct=Ae.__version===void 0||ye===!0,Se=pe.dataReady;let Je=P(C,ue);Tt(s.TEXTURE_CUBE_MAP,C);let st;if(C.isDepthTexture){if(be=M(C.format===Nr,C.type),ct)if(Ke)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,be,ue.width,ue.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,ue.width,ue.height,0,we,Te,null)}else if(Ce){Ke&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,be,ue.width,ue.height);for(let Fe=0;Fe<6;Fe++){st=he[Fe].mipmaps;for(let _t=0;_t<st.length;_t++){const Wt=st[_t];C.format!==Bi?we!==null?Ke?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,0,0,Wt.width,Wt.height,we,Wt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,be,Wt.width,Wt.height,0,Wt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,0,0,Wt.width,Wt.height,we,Te,Wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t,be,Wt.width,Wt.height,0,we,Te,Wt.data)}}}else{if(st=C.mipmaps,Ke&&ct){st.length>0&&Je++;const Fe=it(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,be,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(F){Ke?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,he[Fe].width,he[Fe].height,we,Te,he[Fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,he[Fe].width,he[Fe].height,0,we,Te,he[Fe].data);for(let _t=0;_t<st.length;_t++){const Jn=st[_t].image[Fe].image;Ke?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,0,0,Jn.width,Jn.height,we,Te,Jn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,be,Jn.width,Jn.height,0,we,Te,Jn.data)}}else{Ke?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,we,Te,he[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,we,Te,he[Fe]);for(let _t=0;_t<st.length;_t++){const Wt=st[_t];Ke?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,0,0,we,Te,Wt.image[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,_t+1,be,we,Te,Wt.image[Fe])}}}N(C)&&C.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),Ae.__version=pe.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Ot(I,C,ee,ye,pe,Ae){const Pe=l.convert(ee.format,ee.colorSpace),fe=l.convert(ee.type),de=w(ee.internalFormat,Pe,fe,ee.normalized,ee.colorSpace),Ce=i.get(C),F=i.get(ee);if(F.__renderTarget=C,!Ce.__hasExternalTextures){const he=Math.max(1,C.width>>Ae),ue=Math.max(1,C.height>>Ae);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ae,de,he,ue,C.depth,0,Pe,fe,null):t.texImage2D(pe,Ae,de,he,ue,0,Pe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ie(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,pe,F.__webglTexture,0,Lt(C)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,pe,F.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function zn(I,C,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer){const ye=C.depthTexture,pe=ye&&ye.isDepthTexture?ye.type:null,Ae=M(C.stencilBuffer,pe),Pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(C),Ae,C.width,C.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(C),Ae,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,I)}else{const ye=C.textures;for(let pe=0;pe<ye.length;pe++){const Ae=ye[pe],Pe=l.convert(Ae.format,Ae.colorSpace),fe=l.convert(Ae.type),de=w(Ae.internalFormat,Pe,fe,Ae.normalized,Ae.colorSpace);Ie(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(C),de,C.width,C.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(C),de,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,de,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(I,C,ee){const ye=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=i.get(C.depthTexture);pe.__renderTarget=C;const Ae=ye?C.depthTexture.image[0]:C.depthTexture.image;(!pe.__webglTexture||Ae.width!==C.width||Ae.height!==C.height)&&(Ae.width=C.width,Ae.height=C.height,C.depthTexture.needsUpdate=!0),ye?_e(C.depthTexture,0):ge(C.depthTexture,0);const Pe=pe.__webglTexture,fe=Lt(C),de=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,Ce=C.depthTexture.format===Nr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===Or)Ie(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,de,Pe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,de,Pe,0);else if(C.depthTexture.format===Nr)Ie(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,de,Pe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,de,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function sn(I){const C=i.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const ye=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ye){const pe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ye.removeEventListener("dispose",pe)};ye.addEventListener("dispose",pe),C.__depthDisposeCallback=pe}C.__boundDepthTexture=ye}if(I.depthTexture&&!C.__autoAllocateDepthBuffer)if(ee)for(let ye=0;ye<6;ye++)zt(C.__webglFramebuffer[ye],I,ye);else I.texture.mipmaps.length>0?zt(C.__webglFramebuffer[0],I,0):zt(C.__webglFramebuffer,I,0);else if(ee){C.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ye]),C.__webglDepthbuffer[ye]===void 0)C.__webglDepthbuffer[ye]=s.createRenderbuffer(),zn(C.__webglDepthbuffer[ye],I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=C.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ae)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),zn(C.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function En(I,C,ee){const ye=i.get(I);C!==void 0&&Ot(ye.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&sn(I)}function Nn(I){const C=I.texture,ee=i.get(I),ye=i.get(C);I.addEventListener("dispose",j),$(I);const pe=I.textures,Ae=I.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=C.version,c.memory.textures++),Ae){ee.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(C.mipmaps.length>0){ee.__webglFramebuffer[fe]=[];for(let de=0;de<C.mipmaps.length;de++)ee.__webglFramebuffer[fe][de]=s.createFramebuffer()}else ee.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(C.mipmaps.length>0){ee.__webglFramebuffer=[];for(let fe=0;fe<C.mipmaps.length;fe++)ee.__webglFramebuffer[fe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,de=pe.length;fe<de;fe++){const Ce=i.get(pe[fe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&Ie(I)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let fe=0;fe<pe.length;fe++){const de=pe[fe];ee.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe]);const Ce=l.convert(de.format,de.colorSpace),F=l.convert(de.type),he=w(de.internalFormat,Ce,F,de.normalized,de.colorSpace,I.isXRRenderTarget===!0),ue=Lt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,he,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),zn(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,C);for(let fe=0;fe<6;fe++)if(C.mipmaps.length>0)for(let de=0;de<C.mipmaps.length;de++)Ot(ee.__webglFramebuffer[fe][de],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Ot(ee.__webglFramebuffer[fe],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);N(C)?b(s.TEXTURE_CUBE_MAP):C.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let fe=0,de=pe.length;fe<de;fe++){const Ce=pe[fe],F=i.get(Ce);let he=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,F.__webglTexture),Tt(he,Ce),Ot(ee.__webglFramebuffer,I,Ce,s.COLOR_ATTACHMENT0+fe,he,0),N(Ce)&&b(he)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(fe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,ye.__webglTexture),Tt(fe,C),C.mipmaps.length>0)for(let de=0;de<C.mipmaps.length;de++)Ot(ee.__webglFramebuffer[de],I,C,s.COLOR_ATTACHMENT0,fe,de);else Ot(ee.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,fe,0);N(C)?b(fe):C.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&sn(I)}function X(I){const C=I.textures;for(let ee=0,ye=C.length;ee<ye;ee++){const pe=C[ee];if(N(pe)&&pe.mipmapsAutoUpdate===!0){const Ae=U(I),Pe=i.get(pe).__webglTexture;t.bindTexture(Ae,Pe),b(Ae),t.unbindTexture()}}}const Un=[];function It(I){if(I.samples>0){if(Ie(I)===!1){const C=I.textures,ee=I.width,ye=I.height;let pe=s.COLOR_BUFFER_BIT;const Ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=i.get(I),fe=C.length>1;if(fe)for(let Ce=0;Ce<C.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<C.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const F=i.get(C[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,ee,ye,0,0,ee,ye,pe,s.NEAREST),d===!0&&(Un.length=0,Un.push(s.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Un.push(Ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Un))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<C.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const F=i.get(C[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&d){const C=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Lt(I){return Math.min(a.maxSamples,I.samples)}function Ie(I){const C=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Yt(I){const C=c.render.frame;g.get(I)!==C&&(g.set(I,C),I.update())}function Qe(I,C){const ee=I.colorSpace,ye=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==cc&&ee!==Dr&&(vt.getTransfer(ee)===Dt?(ye!==Bi||pe!==ai)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",ee)),C}function it(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=De,this.resetTextureUnits=Y,this.getTextureUnits=D,this.setTextureUnits=K,this.setTexture2D=ge,this.setTexture2DArray=Me,this.setTexture3D=Ue,this.setTextureCube=_e,this.rebindTextures=En,this.setupRenderTarget=Nn,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=sn,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ie,this.dispose=ie}function YC(s,e){function t(i,a=Dr){let l;const c=vt.getTransfer(a);if(i===ai)return s.UNSIGNED_BYTE;if(i===zd)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Hd)return s.UNSIGNED_SHORT_5_5_5_1;if(i===H0)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===G0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===B0)return s.BYTE;if(i===z0)return s.SHORT;if(i===oo)return s.UNSIGNED_SHORT;if(i===Bd)return s.INT;if(i===Gi)return s.UNSIGNED_INT;if(i===Ri)return s.FLOAT;if(i===Vi)return s.HALF_FLOAT;if(i===V0)return s.ALPHA;if(i===W0)return s.RGB;if(i===Bi)return s.RGBA;if(i===Or)return s.DEPTH_COMPONENT;if(i===Nr)return s.DEPTH_STENCIL;if(i===Gd)return s.RED;if(i===Vd)return s.RED_INTEGER;if(i===is)return s.RG;if(i===Wd)return s.RG_INTEGER;if(i===Xd)return s.RGBA_INTEGER;if(i===Ql||i===ec||i===tc||i===nc)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===Kf||i===jf||i===Zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jf||i===Qf||i===ed||i===td||i===nd||i===oc||i===id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Jf||i===Qf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===td)return l.COMPRESSED_R11_EAC;if(i===nd)return l.COMPRESSED_SIGNED_R11_EAC;if(i===oc)return l.COMPRESSED_RG11_EAC;if(i===id)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rd||i===sd||i===ad||i===od||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===_d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===rd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ad)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===od)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ld)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ud)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===md)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_d)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vd||i===xd||i===Sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===vd)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yd||i===Md||i===lc||i===Ed)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===yd)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ed)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const KC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new o_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rs({vertexShader:KC,fragmentShader:jC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JC extends ls{constructor(e,t){super();const i=this;let a=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,_=null,v=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",S=new ZC,y={},L=t.getContextAttributes();let N=null,b=null;const U=[],w=[],M=new Mt;let P=null,$=null;const z=new Yn;z.viewport=new Qt;const G=new Yn;G.viewport=new Qt;const j=[z,G],ae=new uy;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=U[ne];return ge===void 0&&(ge=new pf,U[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=U[ne];return ge===void 0&&(ge=new pf,U[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=U[ne];return ge===void 0&&(ge=new pf,U[ne]=ge),ge.getHandSpace()};function ce(ne){const ge=w.indexOf(ne.inputSource);if(ge===-1)return;const Me=U[ge];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,h||c),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",J);for(let ne=0;ne<U.length;ne++){const ge=w[ne];ge!==null&&(w[ne]=null,U[ne].disconnect(ge))}k=null,ie=null,S.reset();for(const ne in y)delete y[ne];if(e.setRenderTarget(N),x=null,v=null,_=null,a=null,b=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),$!==null){const ne=$.camera;ne.fov=$.fov,ne.zoom=$.zoom,ne.updateProjectionMatrix(),$=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",q),a.addEventListener("inputsourceschange",J),L.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,_e=null;L.depth&&(_e=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=L.stencil?Nr:Or,Ue=L.stencil?Qs:Gi);const ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(ze),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new zi(v.textureWidth,v.textureHeight,{format:Bi,type:ai,depthTexture:new ea(v.textureWidth,v.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new zi(x.framebufferWidth,x.framebufferHeight,{format:Bi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(f),De.setContext(a),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(ne){for(let ge=0;ge<ne.removed.length;ge++){const Me=ne.removed[ge],Ue=w.indexOf(Me);Ue>=0&&(w[Ue]=null,U[Ue].disconnect(Me))}for(let ge=0;ge<ne.added.length;ge++){const Me=ne.added[ge];let Ue=w.indexOf(Me);if(Ue===-1){for(let ze=0;ze<U.length;ze++)if(ze>=w.length){w.push(Me),Ue=ze;break}else if(w[ze]===null){w[ze]=Me,Ue=ze;break}if(Ue===-1)break}const _e=U[Ue];_e&&_e.connect(Me)}}function V(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;let ge=ne.near,Me=ne.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),ae.near=G.near=z.near=ge,ae.far=G.far=z.far=Me,(k!==ae.near||ie!==ae.far)&&(a.updateRenderState({depthNear:ae.near,depthFar:ae.far}),k=ae.near,ie=ae.far),ae.layers.mask=ne.layers.mask|6,z.layers.mask=ae.layers.mask&-5,G.layers.mask=ae.layers.mask&-3;const Ue=ne.parent,_e=ae.cameras;V(ae,Ue);for(let ze=0;ze<_e.length;ze++)V(_e[ze],Ue);ae.projectionMatrix.copy(z.projectionMatrix),ae.projectionMatrixInverse.copy(z.projectionMatrixInverse),$===null&&ne.isPerspectiveCamera&&($={camera:ne,fov:ne.fov,zoom:ne.zoom}),Y(ne,ae,Ue)};function Y(ne,ge,Me){Me===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(ne){d=ne,v!==null&&(v.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ae)},this.getCameraTexture=function(ne){return y[ne]};let D=null;function K(ne,ge){if(g=ge.getViewerPose(h||c),E=ge,g!==null){const Me=g.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let Ue=!1;Me.length!==ae.cameras.length&&(ae.cameras.length=0,Ue=!0);for(let et=0;et<Me.length;et++){const Tt=Me[et];let Ct=null;if(x!==null)Ct=x.getViewport(Tt);else{const en=_.getViewSubImage(v,Tt);Ct=en.viewport,et===0&&(e.setRenderTargetTextures(b,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(b))}let dt=j[et];dt===void 0&&(dt=new Yn,dt.layers.enable(et),dt.viewport=new Qt,j[et]=dt),dt.matrix.fromArray(Tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),et===0&&(ae.matrix.copy(dt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Ue===!0&&ae.cameras.push(dt)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){_=i.getBinding();const et=_.getDepthInformation(Me[0]);et&&et.isValid&&et.texture&&S.init(et,a.renderState)}if(_e&&_e.includes("camera-access")&&A){e.state.unbindTexture(),_=i.getBinding();for(let et=0;et<Me.length;et++){const Tt=Me[et].camera;if(Tt){let Ct=y[Tt];Ct||(Ct=new o_,y[Tt]=Ct);const dt=_.getCameraImage(Tt);Ct.sourceTexture=dt}}}}for(let Me=0;Me<U.length;Me++){const Ue=w[Me],_e=U[Me];Ue!==null&&_e!==void 0&&_e.update(Ue,ge,h||c)}D&&D(ne,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const De=new h_;De.setAnimationLoop(K),this.setAnimationLoop=function(ne){D=ne},this.dispose=function(){}}}const QC=new Ut,E_=new ut;E_.set(-1,0,0,0,1,0,0,0,1);function e1(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,l_(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,L,N,b){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,b)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),A(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,L,N):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),N=L.envMap,b=L.envMapRotation;N&&(S.envMap.value=N,S.envMapRotation.value.setFromMatrix4(QC.makeRotationFromEuler(b)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(E_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,N){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=N*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.diffuseRoughness>0&&(S.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function t1(s,e,t,i){let a={},l={};function c(L,N){const b=N.program;i.uniformBlockBinding(L,b,a[L.id])}function f(L,N){let b=a[L.id];b===void 0&&(E(L),b=d(L),a[L.id]=b,L.addEventListener("dispose",S));const U=N.program;i.updateUBOMapping(L,U);const w=e.render.frame;l[L.id]!==w&&(h(L),l[L.id]=w)}function d(L){const N=s.createBuffer(),b=L.__size,U=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,b,U),s.bindBuffer(s.UNIFORM_BUFFER,null),N}function h(L){const N=a[L.id],b=L.uniforms,U=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let w=0,M=b.length;w<M;w++){const P=b[w];if(Array.isArray(P))for(let $=0,z=P.length;$<z;$++)g(P[$],w,$,U);else g(P,w,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(L,N,b,U){if(v(L,N,b,U)===!0){const w=L.__offset,M=L.value;if(Array.isArray(M)){let P=0;for(let $=0;$<M.length;$++){const z=M[$],G=A(z,!0);_(z,L.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else _(M,L.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,L.__data)}}function _(L,N,b){typeof L=="number"||typeof L=="boolean"?N[b]=L:L.isMatrix3?(N[b]=L.elements[0],N[b+1]=L.elements[1],N[b+2]=L.elements[2],N[b+3]=0,N[b+4]=L.elements[3],N[b+5]=L.elements[4],N[b+6]=L.elements[5],N[b+7]=0,N[b+8]=L.elements[6],N[b+9]=L.elements[7],N[b+10]=L.elements[8],N[b+11]=0):ArrayBuffer.isView(L)?N.set(L.subarray(0,N.length-b),b):L.toArray(N,b)}function v(L,N,b,U){const w=L.value,M=N+"_"+b;if(Array.isArray(w)){U[M]===void 0&&(U[M]=[]);const P=U[M];let $=!1;for(let z=0;z<w.length;z++)x(w[z],P,z)===!0&&($=!0);return $}return x(w,U,M)}function x(L,N,b){if(N[b]===void 0)return typeof L=="number"||typeof L=="boolean"?N[b]=L:ArrayBuffer.isView(L)?N[b]=L.slice():N[b]=L.clone(),!0;{const U=N[b];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return N[b]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(U.equals(L)===!1)return U.copy(L),!0}}return!1}function E(L){const N=L.uniforms;let b=0;const U=16;for(let M=0,P=N.length;M<P;M++){const $=Array.isArray(N[M])?N[M]:[N[M]];for(let z=0,G=$.length;z<G;z++){const j=$[z],ae=Array.isArray(j.value)?j.value:[j.value],k=Array.isArray(N[M])||Array.isArray(j.value);let ie=b;for(let q=0,J=ae.length;q<J;q++){const V=ae[q],Y=A(V,k),D=b%U,K=D%Y.boundary,De=D+K;b+=K,De!==0&&U-De<Y.storage&&(b+=U-De),q===0&&(ie=b),b+=Y.storage}const ce=j.type==="int"?Int32Array:j.type==="uint"?Uint32Array:Float32Array;j.__data=new ce((b-ie)/Float32Array.BYTES_PER_ELEMENT),j.__offset=ie}}const w=b%U;return w>0&&(b+=U-w),L.__size=b,L.__cache={},this}function A(L,N){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=16,b.storage=48):L.isMatrix4?(b.boundary=16,b.storage=64):L.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(b.boundary=16,b.storage=L.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",L),N===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function S(L){const N=L.target;N.removeEventListener("dispose",S),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function y(){for(const L in a)s.deleteBuffer(a[L]);a={},l={}}return{bind:c,update:f,dispose:y}}const n1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function i1(){return Fi===null&&(Fi=new n_(n1,16,16,is,Vi),Fi.name="DFG_LUT",Fi.minFilter=Kn,Fi.magFilter=Kn,Fi.wrapS=rr,Fi.wrapT=rr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class th{constructor(e={}){const{canvas:t=CS(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=ai}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const A=x,S=new Set([Xd,Wd,Vd]),y=new Set([ai,Gi,oo,Qs,zd,Hd]),L=new Uint32Array(4),N=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let U=null,w=null;const M=[],P=[];let $=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,j=null,ae=null,k=null,ie=null;this._outputColorSpace=si;let ce=0,q=0,J=null,V=-1,Y=null;const D=new Qt,K=new Qt;let De=null;const ne=new yt(0);let ge=0,Me=t.width,Ue=t.height,_e=1,ze=null,St=null;const et=new Qt(0,0,Me,Ue),Tt=new Qt(0,0,Me,Ue);let Ct=!1;const dt=new co,en=new Kd;let qt=!1,dn=!1;const Ot=new Ut,zn=new oe,zt=new Qt,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let En=!1;function Nn(){return J===null?_e:1}let X=i;function Un(R,B){return t.getContext(R,B)}let It,Lt,Ie,Yt,Qe,it,I,C,ee,ye,pe,Ae,Pe,fe,de,Ce,F,he,ue,we,Te,be,Ke;try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fd}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const B="webgl2";if(X=Un(B,R),X===null)throw Un(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(R){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),wt("WebGLRenderer: "+R.message),R}function ct(){It=new oT(X),It.init(),Te=new YC(X,It),Lt=new jE(X,It,e,Te),Ie=new $C(X,It),Lt.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),ae=X.createFramebuffer(),k=X.createFramebuffer(),ie=X.createFramebuffer(),Yt=new uT(X),Qe=new LC,it=new qC(X,It,Ie,Qe,Lt,Te,Yt),I=new aT(z),C=new dy(X),be=new YE(X,C),ee=new lT(X,C,Yt,be),ye=new dT(X,ee,C,be,Yt),he=new fT(X,Lt,it),de=new ZE(Qe),pe=new DC(z,I,It,Lt,be,de),Ae=new e1(z,Qe),Pe=new NC,fe=new zC(It),F=new qE(z,I,Ie,ye,E,d),Ce=new XC(z,ye,Lt),Ke=new t1(X,Yt,Lt,Ie),ue=new KE(X,It,Yt),we=new cT(X,It,Yt),Yt.programs=pe.programs,z.capabilities=Lt,z.extensions=It,z.properties=Qe,z.renderLists=Pe,z.shadowMap=Ce,z.state=Ie,z.info=Yt}A!==ai&&($=new pT(A,t.width,t.height,f,a,l));const Se=new JC(z,X);this.xr=Se,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=It.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=It.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(Me,Ue,!1))},this.getSize=function(R){return R.set(Me,Ue)},this.setSize=function(R,B,re=!0){if(Se.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=R,Ue=B,t.width=Math.floor(R*_e),t.height=Math.floor(B*_e),re===!0&&(t.style.width=R+"px",t.style.height=B+"px"),$!==null&&$.setSize(t.width,t.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(Me*_e,Ue*_e).floor()},this.setDrawingBufferSize=function(R,B,re){Me=R,Ue=B,_e=re,t.width=Math.floor(R*re),t.height=Math.floor(B*re),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(A===ai){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,B,re,Q){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,B,re,Q),Ie.viewport(D.copy(et).multiplyScalar(Nn()).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,B,re,Q){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,B,re,Q),Ie.scissor(K.copy(Tt).multiplyScalar(Nn()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){Ie.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){ze=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,re=!0){let Q=0;if(R){let Z=!1;if(J!==null){const Ne=J.texture.format;Z=S.has(Ne)}if(Z){const Ne=J.texture.type,He=y.has(Ne),Le=F.getClearColor(),Oe=F.getClearAlpha(),Ve=Le.r,rt=Le.g,ft=Le.b;He?(L[0]=Ve,L[1]=rt,L[2]=ft,L[3]=Oe,X.clearBufferuiv(X.COLOR,0,L)):(N[0]=Ve,N[1]=rt,N[2]=ft,N[3]=Oe,X.clearBufferiv(X.COLOR,0,N))}else Q|=X.COLOR_BUFFER_BIT}B&&(Q|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),F.dispose(),Pe.dispose(),fe.dispose(),it.dispose(),Qe.dispose(),I.dispose(),ye.dispose(),ee.dispose(),be.dispose(),Ke.dispose(),pe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",mo),Se.removeEventListener("sessionend",bi),wi.stop()};function Je(R){R.preventDefault(),Xm("WebGLRenderer: Context Lost."),G=!0}function st(){Xm("WebGLRenderer: Context Restored."),G=!1;const R=Yt.autoReset,B=Ce.enabled,re=Ce.autoUpdate,Q=Ce.needsUpdate,Z=Ce.type;ct(),Yt.autoReset=R,Ce.enabled=B,Ce.autoUpdate=re,Ce.needsUpdate=Q,Ce.type=Z}function Fe(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const B=R.target;B.removeEventListener("dispose",_t),Wt(B)}function Wt(R){Jn(R),Qe.remove(R)}function Jn(R){const B=Qe.get(R).programs;B!==void 0&&(B.forEach(function(re){pe.releaseProgram(re)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,re,Q,Z,Ne){B===null&&(B=sn);const He=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Le=ua(R,B,re,Q,Z);Ie.setMaterial(Q,He);let Oe=re.index,Ve=1;if(Q.wireframe===!0){if(Oe=ee.getWireframeAttribute(re),Oe===void 0)return;Ve=2}const rt=re.drawRange,ft=re.attributes.position;let We=rt.start*Ve,pt=(rt.start+rt.count)*Ve;Ne!==null&&(We=Math.max(We,Ne.start*Ve),pt=Math.min(pt,(Ne.start+Ne.count)*Ve)),Oe!==null?(We=Math.max(We,0),pt=Math.min(pt,Oe.count)):ft!=null&&(We=Math.max(We,0),pt=Math.min(pt,ft.count));const Gt=pt-We;if(Gt<0||Gt===1/0)return;be.setup(Z,Q,Le,re,Oe);let Pt,bt=ue;if(Oe!==null&&(Pt=C.get(Oe),bt=we,bt.setIndex(Pt)),Z.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*Nn()),bt.setMode(X.LINES)):bt.setMode(X.TRIANGLES);else if(Z.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Ie.setLineWidth(Kt*Nn()),Z.isLineSegments?bt.setMode(X.LINES):Z.isLineLoop?bt.setMode(X.LINE_LOOP):bt.setMode(X.LINE_STRIP)}else Z.isPoints?bt.setMode(X.POINTS):Z.isSprite&&bt.setMode(X.TRIANGLES);if(Z.isBatchedMesh)if(It.get("WEBGL_multi_draw"))bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,Xe=Z._multiDrawCounts,an=Z._multiDrawCount,je=Oe?C.get(Oe).bytesPerElement:1,Pi=Qe.get(Q).currentProgram.getUniforms();for(let on=0;on<an;on++)Pi.setValue(X,"_gl_DrawID",on),bt.render(Kt[on]/je,Xe[on])}else if(Z.isInstancedMesh)bt.renderInstances(We,Gt,Z.count);else if(re.isInstancedBufferGeometry){const Kt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xe=Math.min(re.instanceCount,Kt);bt.renderInstances(We,Gt,Xe)}else bt.render(We,Gt)};function us(R,B,re,Q){j!==null&&R.isNodeMaterial&&j.setObject(Q,R),qt===!0&&de.setState(R,re,!1),R.transparent===!0&&R.side===ir&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Br(R,B,Q),R.side=ns,R.needsUpdate=!0,Br(R,B,Q),R.side=ir):Br(R,B,Q)}this.compile=function(R,B,re=null){re===null&&(re=R),j!==null&&j.renderStart(R,B,re),w=fe.get(re),w.init(B),P.push(w),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),j!==null&&j.updateLights(w.state.lightsArray),dn=this.localClippingEnabled,qt=de.init(this.clippingPlanes,dn),qt===!0&&de.setGlobalState(this.clippingPlanes,B),j!==null&&Ce.render(w.state.shadowsArray,re,B);const Q=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ne=Z.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Le=Ne[He];us(Le,re,B,Z),Q.add(Le)}else us(Ne,re,B,Z),Q.add(Ne)}),w=P.pop(),j!==null&&j.renderEnd(),Q},this.compileAsync=function(R,B,re=null){const Q=this.compile(R,B,re);return new Promise(Z=>{function Ne(){if(Q.forEach(function(He){const Oe=Qe.get(He).currentProgram;(Oe===void 0||Oe.isReady())&&Q.delete(He)}),Q.size===0){Z(R);return}setTimeout(Ne,10)}It.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let aa=null;function vc(R){aa&&aa(R)}function mo(){wi.stop()}function bi(){wi.start()}const wi=new h_;wi.setAnimationLoop(vc),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){aa=R,Se.setAnimationLoop(R),R===null?wi.stop():wi.start()},Se.addEventListener("sessionstart",mo),Se.addEventListener("sessionend",bi),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(R,B);const re=Se.enabled===!0&&Se.isPresenting===!0,Q=$!==null&&(J===null||re)&&$.begin(z,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(B),B=Se.getCamera()),R.isScene===!0&&R.onBeforeRender(z,R,B,J),w=fe.get(R,P.length),w.init(B),w.state.textureUnits=it.getTextureUnits(),P.push(w),Ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?en.setFromArrayCamera(B):dt.setFromProjectionMatrix(Ot,Ai,B.reversedDepth),dn=this.localClippingEnabled,qt=de.init(this.clippingPlanes,dn),U=Pe.get(R,M.length),U.init(),M.push(U),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){const He=z.xr.getDepthSensingMesh();He!==null&&fs(He,B,-1/0,z.sortObjects)}fs(R,B,0,z.sortObjects),U.finish(),j!==null&&j.updateLights(w.state.lightsArray),z.sortObjects===!0&&U.sort(ze,St),En=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,En&&F.addToRenderList(U,R),this.info.autoReset===!0&&this.info.reset(),qt===!0&&de.beginShadows();const Z=w.state.shadowsArray;if(Ce.render(Z,R,B),qt===!0&&de.endShadows(),(Q&&$.hasRenderPass())===!1){const He=U.opaque,Le=U.transmissive;if(w.setupLights(),B.isArrayCamera){const Oe=B.cameras;if(Le.length>0)for(let Ve=0,rt=Oe.length;Ve<rt;Ve++){const ft=Oe[Ve];oa(He,Le,R,ft)}En&&F.render(R);for(let Ve=0,rt=Oe.length;Ve<rt;Ve++){const ft=Oe[Ve];go(U,R,ft,ft.viewport)}}else Le.length>0&&oa(He,Le,R,B),En&&F.render(R),go(U,R,B)}J!==null&&q===0&&(it.updateMultisampleRenderTarget(J),it.updateRenderTargetMipmap(J)),Q&&$.end(z),R.isScene===!0&&R.onAfterRender(z,R,B),be.resetDefaultState(),V=-1,Y=null,P.pop(),P.length>0?(w=P[P.length-1],it.setTextureUnits(w.state.textureUnits),qt===!0&&de.setGlobalState(z.clippingPlanes,w.state.camera)):w=null,M.pop(),M.length>0?U=M[M.length-1]:U=null,j!==null&&j.renderEnd()};function fs(R,B,re,Q){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){const He=B.isArrayCamera?en:dt;if(!R.frustumCulled||R.intersectsFrustum(He)){Q&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ot);const Le=ye.update(R),Oe=R.material;Oe.visible&&U.push(R,Le,Oe,re,zt.z,null,B)}}else if(R.isMesh||R.isLine||R.isPoints){const He=B.isArrayCamera?en:dt;if(!R.frustumCulled||R.intersectsFrustum(He)){const Le=ye.update(R),Oe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),zt.copy(Le.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(Ot)),Array.isArray(Oe)){const Ve=Le.groups;for(let rt=0,ft=Ve.length;rt<ft;rt++){const We=Ve[rt],pt=Oe[We.materialIndex];pt&&pt.visible&&U.push(R,Le,pt,re,zt.z,We,B)}}else Oe.visible&&U.push(R,Le,Oe,re,zt.z,null,B)}}}const Ne=R.children;for(let He=0,Le=Ne.length;He<Le;He++)fs(Ne[He],B,re,Q)}function go(R,B,re,Q){const{opaque:Z,transmissive:Ne,transparent:He}=R;w.setupLightsView(re),qt===!0&&de.setGlobalState(z.clippingPlanes,re),Q&&Ie.viewport(D.copy(Q)),Z.length>0&&kr(Z,B,re),Ne.length>0&&kr(Ne,B,re),He.length>0&&kr(He,B,re),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function oa(R,B,re,Q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){const We=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new zi(1,1,{generateMipmaps:!0,type:We?Vi:ai,minFilter:Ir,samples:Math.max(4,Lt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ne=w.state.transmissionRenderTarget[Q.id],He=Q.viewport||D;Ne.setSize(He.z*z.transmissionResolutionScale,He.w*z.transmissionResolutionScale);const Le=z.getRenderTarget(),Oe=z.getActiveCubeFace(),Ve=z.getActiveMipmapLevel();z.setRenderTarget(Ne),z.getClearColor(ne),ge=z.getClearAlpha(),ge<1&&z.setClearColor(16777215,.5),z.clear(),En&&F.render(re);const rt=z.toneMapping;z.toneMapping=sr;const ft=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),qt===!0&&de.setGlobalState(z.clippingPlanes,Q),kr(R,re,Q),it.updateMultisampleRenderTarget(Ne),it.updateRenderTargetMipmap(Ne),It.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let pt=0,Gt=B.length;pt<Gt;pt++){const Pt=B[pt],{object:bt,geometry:Kt,material:Xe,group:an}=Pt;if(Xe.side===ir&&bt.layers.test(Q.layers)){const je=Xe.side;Xe.side=jn,Xe.needsUpdate=!0,la(bt,re,Q,Kt,Xe,an),Xe.side=je,Xe.needsUpdate=!0,We=!0}}We===!0&&(it.updateMultisampleRenderTarget(Ne),it.updateRenderTargetMipmap(Ne))}z.setRenderTarget(Le,Oe,Ve),z.setClearColor(ne,ge),ft!==void 0&&(Q.viewport=ft),z.toneMapping=rt}function kr(R,B,re){const Q=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Ne=R.length;Z<Ne;Z++){const He=R[Z],{object:Le,geometry:Oe,group:Ve}=He;let rt=He.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),Le.layers.test(re.layers)&&la(Le,B,re,Oe,rt,Ve)}}function la(R,B,re,Q,Z,Ne){j!==null&&Z.isNodeMaterial&&j.setObject(R,Z),R.onBeforeRender(z,B,re,Q,Z,Ne),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(z,B,re,Q,R,Ne),Z.transparent===!0&&Z.side===ir&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,z.renderBufferDirect(re,B,Q,Z,R,Ne),Z.side=ns,Z.needsUpdate=!0,z.renderBufferDirect(re,B,Q,Z,R,Ne),Z.side=ir):z.renderBufferDirect(re,B,Q,Z,R,Ne),R.onAfterRender(z,B,re,Q,Z,Ne)}function ca(R){let B=0;for(const re of R)re.texture!==null&&B++;return B}function Br(R,B,re){B.isScene!==!0&&(B=sn);const Q=Qe.get(R),Z=w.state.lights,Ne=w.state.shadowsArray,He=Z.state.version,Le=pe.getParameters(R,Z.state,Ne,B,re,w.state.lightProbeGridArray),Oe=pe.getProgramCacheKey(Le);let Ve=Q.programs;Q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,Q.fog=B.fog;const rt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Q.envMap=I.get(R.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",_t),Ve=new Map,Q.programs=Ve,Q.programVariants=new Map);let ft=Ve.get(Oe);if(ft!==void 0){if(Q.currentProgram===ft&&Q.lightsStateVersion===He)return _o(R,Le),ft}else Le.uniforms=pe.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,re,Le),R.onBeforeCompile(Le,z),ft=pe.acquireProgram(Le,Oe),Ve.set(Oe,ft),Q.uniforms=Le.uniforms;const We=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=de.uniform),_o(R,Le),Q.needsLights=ds(R),Q.lightsStateVersion=He,Q.needsLights&&(We.ambientLightColor.value=Z.state.ambient,We.lightProbe.value=Z.state.probe,We.sunLights.value=Z.state.sun,We.sunLightShadows.value=Z.state.sunShadow,We.directionalLights.value=Z.state.directional,We.directionalLightShadows.value=Z.state.directionalShadow,We.spotLights.value=Z.state.spot,We.spotLightShadows.value=Z.state.spotShadow,We.rectAreaLights.value=Z.state.rectArea,We.ltc_1.value=Z.state.rectAreaLTC1,We.ltc_2.value=Z.state.rectAreaLTC2,We.pointLights.value=Z.state.point,We.pointLightShadows.value=Z.state.pointShadow,We.hemisphereLights.value=Z.state.hemi,We.sunShadowMatrix.value=Z.state.sunShadowMatrix,We.sunShadowCascade.value=Z.state.sunShadowCascade,We.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,We.spotLightMatrix.value=Z.state.spotLightMatrix,We.spotLightMap.value=Z.state.spotLightMap,We.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.numLightProbeGrids=ca(w.state.lightProbeGridArray),Q.currentProgram=ft,Q.uniformsList=null,ft}function xc(R,B,re,Q,Z){const Ne=Qe.get(R),He=Ne.currentProgram.id+","+Q+","+Z;let Le=Ne.programVariants.get(He);return Le===void 0?(Le=Br(R,B,re),Ne.programVariants.set(He,Le)):(Ne.currentProgram=Le,Ne.uniformsList=null,Ne.outputColorSpace=Q,Ne.toneMapping=Z),Le}function Ht(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=rc.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function _o(R,B){const re=Qe.get(R);re.outputColorSpace=B.outputColorSpace,re.batching=B.batching,re.batchingColor=B.batchingColor,re.instancing=B.instancing,re.instancingColor=B.instancingColor,re.instancingMorph=B.instancingMorph,re.skinning=B.skinning,re.morphTargets=B.morphTargets,re.morphNormals=B.morphNormals,re.morphColors=B.morphColors,re.morphTargetsCount=B.morphTargetsCount,re.numClippingPlanes=B.numClippingPlanes,re.numIntersection=B.numClipIntersection,re.vertexAlphas=B.vertexAlphas,re.vertexTangents=B.vertexTangents,re.toneMapping=B.toneMapping}function ua(R,B,re,Q,Z){B.isScene!==!0&&(B=sn),it.resetTextureUnits();const Ne=B.fog,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?B.environment:null,Le=J===null?z.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vt.workingColorSpace,Oe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ve=I.get(Q.envMap||He,Oe),rt=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ft=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,Gt=!!re.morphAttributes.color;let Pt=sr;Q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pt=z.toneMapping);const bt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Kt=bt!==void 0?bt.length:0,Xe=Qe.get(Q),an=w.state.lights;if(qt===!0&&(dn===!0||R!==Y)){const Rt=R===Y&&Q.id===V;de.setState(Q,R,Rt)}let je=!1,Pi=!1;Q.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==an.state.version||Z.isBatchedMesh&&Xe.batching===!1||!Z.isBatchedMesh&&Xe.batching===!0||Z.isBatchedMesh&&Xe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Xe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xe.instancingMorph===!1&&Z.morphTexture!==null||Xe.envMap!==Ve||Q.fog===!0&&Xe.fog!==Ne||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==rt||Xe.vertexTangents!==ft||Xe.morphTargets!==We||Xe.morphNormals!==pt||Xe.morphColors!==Gt||Xe.morphTargetsCount!==Kt||Xe.numLightProbeGrids!==ca(w.state.lightProbeGridArray)?je=!0:(Xe.outputColorSpace!==Le||Xe.toneMapping!==Pt)&&(Pi=!0):(je=!0,Xe.__version=Q.version);let on=Xe.currentProgram;(je===!0||Pi===!0)&&(on=Pi===!0?xc(Q,B,Z,Le,Pt):Br(Q,B,Z),j&&Q.isNodeMaterial&&j.onUpdateProgram(Q,on,Xe));let or=!1,mi=!1,Di=!1;const gt=on.getUniforms(),Zt=Xe.uniforms;if(Ie.useProgram(on.program)&&(or=!0,mi=!0,Di=!0),Q.id!==V&&(V=Q.id,mi=!0),or||Y!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),gt.setValue(X,"projectionMatrix",R.projectionMatrix),gt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Nt=gt.map.cameraPosition;Nt!==void 0&&Nt.setValue(X,zn.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&gt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&gt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,mi=!0,Di=!0)}if(Xe.needsLights&&(an.state.sunShadowMap.length>0&&gt.setValue(X,"sunShadowMap",an.state.sunShadowMap,it),an.state.directionalShadowMap.length>0&&gt.setValue(X,"directionalShadowMap",an.state.directionalShadowMap,it),an.state.spotShadowMap.length>0&&gt.setValue(X,"spotShadowMap",an.state.spotShadowMap,it),an.state.pointShadowMap.length>0&&gt.setValue(X,"pointShadowMap",an.state.pointShadowMap,it)),Z.isSkinnedMesh){gt.setOptional(X,Z,"bindMatrix"),gt.setOptional(X,Z,"bindMatrixInverse");const Rt=Z.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),gt.setValue(X,"boneTexture",Rt.boneTexture,it))}Z.isBatchedMesh&&(gt.setOptional(X,Z,"batchingTexture"),gt.setValue(X,"batchingTexture",Z._matricesTexture,it),gt.setOptional(X,Z,"batchingIdTexture"),gt.setValue(X,"batchingIdTexture",Z._indirectTexture,it),gt.setOptional(X,Z,"batchingColorTexture"),Z._colorsTexture!==null&&gt.setValue(X,"batchingColorTexture",Z._colorsTexture,it));const Tn=re.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&he.update(Z,re,on),(mi||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,gt.setValue(X,"receiveShadow",Z.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&B.environment!==null&&(Zt.envMapIntensity.value=B.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=i1()),mi){if(gt.setValue(X,"toneMappingExposure",z.toneMappingExposure),Xe.needsLights&&vo(Zt,Di),Ne&&Q.fog===!0&&Ae.refreshFogUniforms(Zt,Ne),Ae.refreshMaterialUniforms(Zt,Q,_e,Ue,w.state.transmissionRenderTarget[R.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const Rt=b;let Nt=0;for(const hn of w.state.lightProbeGridArray)hn.texture!==null&&(Rt.textures[Nt]=hn.texture,Rt.min[Nt]=hn.boundingBox.min,Rt.max[Nt]=hn.boundingBox.max,Rt.resolution[Nt]=hn.resolution,Nt++);for(const hn in Rt)Rt[hn].length=Nt;Zt.probesSH.value=Rt.textures,Zt.probesMin.value=Rt.min,Zt.probesMax.value=Rt.max,Zt.probesResolution.value=Rt.resolution}rc.upload(X,Ht(Xe),Zt,it)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(rc.upload(X,Ht(Xe),Zt,it),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&gt.setValue(X,"center",Z.center),gt.setValue(X,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(X,"normalMatrix",Z.normalMatrix),gt.setValue(X,"modelMatrix",Z.matrixWorld),Q.uniformsGroups!==void 0){const Rt=Q.uniformsGroups;for(let Nt=0,hn=Rt.length;Nt<hn;Nt++){const lr=Rt[Nt];Ke.update(lr,on),Ke.bind(lr,on)}}return on}function vo(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.sunLights.needsUpdate=B,R.sunLightShadows.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function ds(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,B,re){const Q=Qe.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Qe.get(R.texture).__webglTexture=B,Qe.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:re,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){const re=Qe.get(R);re.__webglFramebuffer=B,re.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,re=0){J=R,ce=B,q=re;let Q=null,Z=!1,Ne=!1;if(R){const Le=Qe.get(R);if(Le.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(X.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(R.viewport),K.copy(R.scissor),De=R.scissorTest,Ie.viewport(D),Ie.scissor(K),Ie.setScissorTest(De),V=-1;return}else if(Le.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Le.__hasExternalTextures)it.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(Le.__boundDepthTexture!==rt){if(rt!==null&&Qe.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ne=!0);const Ve=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?Q=Ve[B][re]:Q=Ve[B],Z=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?Q=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?Q=Ve[re]:Q=Ve,D.copy(R.viewport),K.copy(R.scissor),De=R.scissorTest}else D.copy(et).multiplyScalar(_e).floor(),K.copy(Tt).multiplyScalar(_e).floor(),De=Ct;if(re!==0&&(Q=ae),Ie.bindFramebuffer(X.FRAMEBUFFER,Q)&&Ie.drawBuffers(R,Q),Ie.viewport(D),Ie.scissor(K),Ie.setScissorTest(De),Z){const Le=Qe.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,re)}else if(Ne){const Le=B;for(let Oe=0;Oe<R.textures.length;Oe++){const Ve=Qe.get(R.textures[Oe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Oe,Ve.__webglTexture,re,Le)}}else if(R!==null&&re!==0){const Le=Qe.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Le.__webglTexture,re)}V=-1};function xo(R){const B=Qe.get(R);return(B.__readFormat!==R.format||B.__readType!==R.type)&&(B.__readFormat=R.format,B.__readType=R.type,B.__formatReadable=Lt.textureFormatReadable(R.format),B.__typeReadable=Lt.textureTypeReadable(R.type)),B}this.readRenderTargetPixels=function(R,B,re,Q,Z,Ne,He,Le=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Oe=Oe[He],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Ie.bindFramebuffer(X.FRAMEBUFFER,Oe);try{const Ve=R.textures[Le],rt=Ve.format,ft=Ve.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Le);const We=xo(Ve);if(We.__formatReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-Q&&re>=0&&re<=R.height-Z&&X.readPixels(B,re,Q,Z,Te.convert(rt),Te.convert(ft),Ne)}finally{const Ve=J!==null?Qe.get(J).__webglFramebuffer:null;Ie.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,B,re,Q,Z,Ne,He,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Oe=Oe[He],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(B>=0&&B<=R.width-Q&&re>=0&&re<=R.height-Z){Ie.bindFramebuffer(X.FRAMEBUFFER,Oe);const Ve=R.textures[Le],rt=Ve.format,ft=Ve.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Le);const We=xo(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,pt),X.bufferData(X.PIXEL_PACK_BUFFER,Ne.byteLength,X.STREAM_READ),X.readPixels(B,re,Q,Z,Te.convert(rt),Te.convert(ft),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Gt=J!==null?Qe.get(J).__webglFramebuffer:null;Ie.bindFramebuffer(X.FRAMEBUFFER,Gt);const Pt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await RS(X,Pt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,pt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ne),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(pt),X.deleteSync(Pt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,re=0){const Q=Math.pow(2,-re),Z=Math.floor(R.image.width*Q),Ne=Math.floor(R.image.height*Q),He=B!==null?B.x:0,Le=B!==null?B.y:0;it.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,He,Le,Z,Ne),Ie.unbindTexture()},this.copyTextureToTexture=function(R,B,re=null,Q=null,Z=0,Ne=0){let He,Le,Oe,Ve,rt,ft,We,pt,Gt;const Pt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(re!==null)He=re.max.x-re.min.x,Le=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,Ve=re.min.x,rt=re.min.y,ft=re.isBox3?re.min.z:0;else{const gt=Math.pow(2,-Z);He=Math.floor(Pt.width*gt),Le=Math.floor(Pt.height*gt),R.isDataArrayTexture?Oe=Pt.depth:R.isData3DTexture?Oe=Math.floor(Pt.depth*gt):Oe=1,Ve=0,rt=0,ft=0}Q!==null?(We=Q.x,pt=Q.y,Gt=Q.z):(We=0,pt=0,Gt=0);const bt=Te.convert(B.format),Kt=Te.convert(B.type);let Xe;B.isData3DTexture?(it.setTexture3D(B,0),Xe=X.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(it.setTexture2DArray(B,0),Xe=X.TEXTURE_2D_ARRAY):(it.setTexture2D(B,0),Xe=X.TEXTURE_2D),Ie.activeTexture(X.TEXTURE0),Ie.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,B.flipY),Ie.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Ie.pixelStorei(X.UNPACK_ALIGNMENT,B.unpackAlignment);const an=Ie.getParameter(X.UNPACK_ROW_LENGTH),je=Ie.getParameter(X.UNPACK_IMAGE_HEIGHT),Pi=Ie.getParameter(X.UNPACK_SKIP_PIXELS),on=Ie.getParameter(X.UNPACK_SKIP_ROWS),or=Ie.getParameter(X.UNPACK_SKIP_IMAGES);Ie.pixelStorei(X.UNPACK_ROW_LENGTH,Pt.width),Ie.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pt.height),Ie.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),Ie.pixelStorei(X.UNPACK_SKIP_ROWS,rt),Ie.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const mi=R.isDataArrayTexture||R.isData3DTexture,Di=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){const gt=Qe.get(R),Zt=Qe.get(B),Tn=Qe.get(gt.__renderTarget),Rt=Qe.get(Zt.__renderTarget);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Nt=0;Nt<Oe;Nt++)mi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qe.get(R).__webglTexture,Z,ft+Nt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qe.get(B).__webglTexture,Ne,Gt+Nt)),X.blitFramebuffer(Ve,rt,Ve+He,rt+Le,We,pt,We+He,pt+Le,X.DEPTH_BUFFER_BIT,X.NEAREST);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Qe.has(R)){const gt=Qe.get(R),Zt=Qe.get(B);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,k),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,ie);for(let Tn=0;Tn<Oe;Tn++)mi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,gt.__webglTexture,Z,ft+Tn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,gt.__webglTexture,Z),Di?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.__webglTexture,Ne,Gt+Tn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Zt.__webglTexture,Ne),Z!==0?X.blitFramebuffer(Ve,rt,Ve+He,rt+Le,We,pt,We+He,pt+Le,X.COLOR_BUFFER_BIT,X.NEAREST):Di?X.copyTexSubImage3D(Xe,Ne,We,pt,Gt+Tn,Ve,rt,He,Le):X.copyTexSubImage2D(Xe,Ne,We,pt,Ve,rt,He,Le);Ie.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Di?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Xe,Ne,We,pt,Gt,He,Le,Oe,bt,Kt,Pt.data):B.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,Ne,We,pt,Gt,He,Le,Oe,bt,Pt.data):X.texSubImage3D(Xe,Ne,We,pt,Gt,He,Le,Oe,bt,Kt,Pt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ne,We,pt,He,Le,bt,Kt,Pt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ne,We,pt,Pt.width,Pt.height,bt,Pt.data):X.texSubImage2D(X.TEXTURE_2D,Ne,We,pt,He,Le,bt,Kt,Pt);Ie.pixelStorei(X.UNPACK_ROW_LENGTH,an),Ie.pixelStorei(X.UNPACK_IMAGE_HEIGHT,je),Ie.pixelStorei(X.UNPACK_SKIP_PIXELS,Pi),Ie.pixelStorei(X.UNPACK_SKIP_ROWS,on),Ie.pixelStorei(X.UNPACK_SKIP_IMAGES,or),Ne===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&X.generateMipmap(Xe),Ie.unbindTexture()},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){ce=0,q=0,J=null,Ie.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}class r1{constructor(e,t,i){this.host=e,this.canvas=t;const a=document.createElement("canvas");a.width=600,a.height=400;const l=a.getContext("2d",{alpha:!1});this.texture=new s_(a),this.texture.colorSpace=si;const c=_=>{l.clearRect(0,0,600,400),l.drawImage(i,_%4*444,Math.floor(_/4)*444,444,444,0,54,600,292),this.texture.needsUpdate=!0};c(0),this.renderer=new th({canvas:t,alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7)),this.renderer.setClearColor(526612,0),this.renderer.toneMapping=kd,this.geom=new ho(4.95,3.3,40,24),this.base=this.geom.attributes.position.array.slice(),this.mesh=new Zn(this.geom,new t_({map:this.texture})),this.mesh.position.z=-.25,this.scene.add(this.mesh);const f=new io(16760419,9,8);f.position.set(-2,1.4,2.2),this.scene.add(f);const d=new io(16728755,6,7);d.position.set(2.1,-.7,1.8),this.scene.add(d);const h=new io(5106431,5,7);h.position.set(-1.8,-1.2,1.6),this.scene.add(h),this.scene.add(new Qd(16777215,.9)),this.onPointer=_=>{const v=e.getBoundingClientRect();this.px=((_.clientX-v.left)/v.width-.5)*2,this.py=((_.clientY-v.top)/v.height-.5)*2},e.addEventListener("pointermove",this.onPointer),e.addEventListener("pointerleave",()=>{this.px=this.py=0}),e.classList.add("three-ready"),this.resize(),new ResizeObserver(()=>this.resize()).observe(e);const g=()=>{this.raf=requestAnimationFrame(g);const _=Math.min(this.clock.getDelta(),.04);if(this.t+=_,!this.reduced){this.t-this.last>.145&&(this.frame=(this.frame+1)%8,c(this.frame),this.last=this.t);const v=Math.sin(this.t*1.55)*.035+this.px*.045,x=Math.sin(this.t*1.95+.5)*.022-this.py*.025;this.sv+=(v-this.sway)*15.5*_,this.sv*=Math.exp(-6.8*_),this.sway+=this.sv*_,this.nv+=(x-this.nod)*15.5*_,this.nv*=Math.exp(-6.8*_),this.nod+=this.nv*_,this.mesh.rotation.set(this.nod,0,this.sway),this.mesh.position.y=Math.sin(this.t*1.8)*.035+this.nod*.12,this.mesh.position.x=Math.sin(this.t*.76)*.025+this.px*.025;const E=this.geom.attributes.position;for(let A=0;A<E.count;A++){const S=this.base[A*3],y=this.base[A*3+1],L=Math.max(0,1-Math.abs(S)/2.5)*Math.max(.35,1-Math.abs(y)/1.7);E.setZ(A,this.base[A*3+2]+Math.sin(this.t*2+S*1.35+y*1.85)*.018*L)}E.needsUpdate=!0,this.geom.computeVertexNormals(),f.intensity=9+Math.sin(this.t*2.1)*1.4,d.intensity=6+Math.sin(this.t*2.8+1.2)*1.3,h.intensity=5+Math.cos(this.t*2.3)}this.renderer.render(this.scene,this.camera)};g()}renderer;scene=new Yd;camera=new Yn(36,1,.1,50);texture;geom;mesh;base;frame=0;last=0;t=0;raf=0;px=0;py=0;sway=0;sv=0;nod=0;nv=0;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;disc={x:0,y:0};onPointer;clock=new d_;resize(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.position.z=e/t<1?5.8:5.15,this.camera.updateProjectionMatrix(),this.disc.x=e,this.disc.y=t}dispose(){cancelAnimationFrame(this.raf),this.host.removeEventListener("pointermove",this.onPointer),this.geom.dispose(),this.texture.dispose(),this.renderer.dispose()}}function s1(s,e){const t=document.createElement("canvas");t.width=t.height=512;const i=t.getContext("2d"),a=i.createRadialGradient(180,150,20,256,256,250);return a.addColorStop(0,"#fff4c8"),a.addColorStop(.5,"#e8b950"),a.addColorStop(1,"#8f5414"),i.fillStyle=a,i.fillRect(0,0,512,512),i.strokeStyle=e,i.lineWidth=10,i.beginPath(),i.arc(256,256,226,0,Math.PI*2),i.stroke(),i.setLineDash([12,12]),i.lineWidth=5,i.beginPath(),i.arc(256,256,196,0,Math.PI*2),i.stroke(),i.setLineDash([]),i.fillStyle="#4a2608",i.textAlign="center",i.textBaseline="middle",i.font="900 118px Georgia",i.fillText(e,256,205),i.font="900 62px monospace",i.fillText(s,256,320),i.font="700 22px monospace",i.fillText("POKE CASINO",256,386),new s_(t)}class a1{constructor(e){this.canvas=e,this.renderer=new th({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),this.camera.position.set(0,1.2,7.5),this.camera.lookAt(0,0,0),this.scene.add(new Qd(16777215,1.1));const t=new Ad(16768923,3.2);t.position.set(-3,5,5),this.scene.add(t);const i=new Ad(6743807,1.6);i.position.set(3,-2,-4),this.scene.add(i);const a=new no({color:15117620,metalness:.95,roughness:.22}),l=new Zn(new mc(1.35,1.35,.16,64),a);l.rotation.z=Math.PI/2,this.coin.add(l);for(const[d,h,g]of[["HEADS","♠",.09],["TAILS","♦",-.09]]){const _=new Zn(new pc(1.28,64),new no({map:s1(d,h),metalness:.55,roughness:.3}));_.position.z=g,g<0&&(_.rotation.y=Math.PI),this.coin.add(_)}this.scene.add(this.coin);const c=new oi;c.setAttribute("position",new Hi(new Float32Array(360),3)),this.particles=new i_(c,new jd({color:16766839,size:.12,transparent:!0,opacity:.9,depthWrite:!1})),this.scene.add(this.particles);const f=()=>{if(this.raf=requestAnimationFrame(f),this.t+=.016,this.flipping){const h=Math.min(1,(performance.now()-this.start)/1900),g=1-Math.pow(1-h,3);this.coin.rotation.y=this.startRotation+(this.target-this.startRotation)*g,this.coin.position.y=Math.sin(h*Math.PI)*2.3-Math.sin(h*Math.PI*3)*.18*(1-h),this.coin.rotation.z=Math.sin(h*Math.PI*2)*.22*(1-h),h>=1&&(this.flipping=!1,this.coin.position.y=0,this.burst(),this.resolve?.(),this.resolve=null)}else!this.flipping&&this.target&&(this.coin.rotation.z*=.9);const d=this.particles.geometry.attributes.position;for(let h=0;h<120;h++)this.pvel[h*3+1]!==0&&(this.pvel[h*3+1]-=.006,d.setXYZ(h,d.getX(h)+this.pvel[h*3],d.getY(h)+this.pvel[h*3+1],d.getZ(h)+this.pvel[h*3+2]));d.needsUpdate=!0,this.renderer.render(this.scene,this.camera)};f(),new ResizeObserver(()=>this.resize()).observe(e.parentElement||e),this.resize()}renderer;scene=new Yd;camera=new Yn(38,1,.1,50);coin=new Qa;particles;pvel=new Float32Array(360);t=0;raf=0;flipping=!1;target=0;start=0;resolve=null;startRotation=0;resize(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}burst(){const e=this.particles.geometry.attributes.position;for(let t=0;t<120;t++){e.setXYZ(t,0,0,0);const i=Math.random()*Math.PI*2,a=.04+Math.random()*.1;this.pvel[t*3]=Math.cos(i)*a,this.pvel[t*3+1]=.05+Math.random()*.12,this.pvel[t*3+2]=Math.sin(i)*a}e.needsUpdate=!0}flip(e){this.startRotation=this.coin.rotation.y;const t=Math.round(this.startRotation/(Math.PI*2))*Math.PI*2;return this.target=t+Math.PI*2*5+(e==="tails"?Math.PI:0),this.target<=this.startRotation&&(this.target+=Math.PI*2),this.start=performance.now(),this.flipping=!0,new Promise(i=>{this.resolve=i})}dispose(){cancelAnimationFrame(this.raf),this.renderer.dispose()}}class o1{constructor(e){this.canvas=e,this.renderer=new th({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),this.camera.position.set(0,7,12),this.camera.lookAt(0,0,-2),this.scene.add(new Qd(16777215,.8));const t=new Ad(16765065,2);t.position.set(-5,9,6),this.scene.add(t);const i=new io(16732078,6,22);i.position.set(7,2,-3),this.scene.add(i);const a=new io(5106431,5,22);a.position.set(-7,2,-3),this.scene.add(a);const l=new Zn(new pc(11,72),new no({color:678972,roughness:.92}));l.rotation.x=-Math.PI/2,this.scene.add(l);const c=new Zn(new Zd(11,.35,12,80),new no({color:14066236,metalness:.9,roughness:.25}));c.rotation.x=Math.PI/2,this.scene.add(c);const f=new mc(.3,.3,.08,24),d=new no({color:15118922,metalness:.7,roughness:.3});this.chips=new QS(f,d,24);const h=new vn;for(let x=0;x<24;x++){const E=x*2.4,A=3+x%5*1.6;h.position.set(Math.cos(E)*A,.06+x%3*.08,Math.sin(E)*A-2),h.rotation.set(0,E,0),h.scale.setScalar(.7+x%4*.12),h.updateMatrix(),this.chips.setMatrixAt(x,h.matrix)}this.scene.add(this.chips);const g=new oi,_=new Float32Array(540);for(let x=0;x<180;x++)_[x*3]=(Math.random()-.5)*24,_[x*3+1]=Math.random()*7,_[x*3+2]=(Math.random()-.5)*18;g.setAttribute("position",new Hi(_,3)),this.dust=new i_(g,new jd({color:16769184,size:.05,transparent:!0,opacity:.55})),this.scene.add(this.dust);const v=()=>{this.raf=requestAnimationFrame(v);const x=this.clock.getElapsedTime();i.intensity=5.5+Math.sin(x*1.7)*1.2,a.intensity=4.5+Math.cos(x*1.3)*1,this.dust.rotation.y=x*.01,this.chips.rotation.y=Math.sin(x*.12)*.03,this.renderer.render(this.scene,this.camera)};v(),new ResizeObserver(()=>this.resize()).observe(e.parentElement||e),this.resize()}renderer;scene=new Yd;camera=new Yn(48,1,.1,100);chips;dust;raf=0;clock=new d_;resize(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){cancelAnimationFrame(this.raf),this.renderer.dispose()}}function l1({p:s,spinning:e=!1,winner:t=!1}){const[i,a]=lt.useState({x:0,y:0});return s?me.jsx("div",{className:`card ${e?"spinning":""} ${t?"winner":""}`,onMouseMove:l=>{const c=l.currentTarget.getBoundingClientRect();a({x:((l.clientY-c.top)/c.height-.5)*-12,y:((l.clientX-c.left)/c.width-.5)*12})},onMouseLeave:()=>a({x:0,y:0}),style:{transform:`perspective(700px) rotateX(${i.x}deg) rotateY(${i.y}deg)`},title:s.quirk,children:me.jsxs("div",{className:"card-inner",children:[me.jsx("div",{className:"card-art",children:me.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${s.id}.png`,alt:s.name,loading:"lazy"})}),me.jsx("div",{className:"card-name",children:s.name}),me.jsx("div",{className:"card-role",children:s.role}),me.jsxs("div",{className:"card-ability",children:["ABILITY · ",s.ability]}),me.jsxs("div",{className:"card-meta",children:[s.item," · ",s.tera," TERA"]})]})}):me.jsxs("div",{className:"card card-empty",children:[me.jsx("div",{className:"card-back",children:"?"}),me.jsx("span",{className:"card-name",children:"AWAITING DEAL"})]})}function c1(){return"https://play.pokemonshowdown.com/"}function u1(){return"https://psim.us/"}async function f1(s){try{return await navigator.clipboard.writeText(s),!0}catch{return!1}}const Bg=s=>`/pokemon-casino/assets/${s}`;function zg({teams:s,titles:e}){return me.jsx("div",{className:"teams",children:s.map((t,i)=>me.jsxs("section",{className:"team",children:[me.jsxs("header",{children:[me.jsx("h3",{children:e[i]}),me.jsxs("span",{children:[t.length,"/6"]})]}),me.jsx("div",{className:"reels",children:Array.from({length:6},(a,l)=>me.jsx(l1,{p:t[l]||null,winner:t.length===6},l))})]},i))})}function d1(){const s=px(),e=Wx(),t=!!"".trim(),{room:i,seat:a,connected:l,error:c,create:f,join:d,send:h,setError:g}=t?s:e,[_,v]=lt.useState("Player 1"),[x,E]=lt.useState("Player 2"),[A,S]=lt.useState(()=>new URLSearchParams(location.search).get("room")||""),[y,L]=lt.useState(3),[N,b]=lt.useState(!1),[U,w]=lt.useState(""),M=lt.useRef(null),P=lt.useRef(null),$=lt.useRef(null),z=lt.useRef(null),G=lt.useRef(null),j=lt.useRef(null),ae=lt.useRef("");lt.useEffect(()=>{if(!M.current)return;const D=new Image;return D.onload=()=>{if(M.current)try{z.current=new r1(M.current.parentElement,M.current,D)}catch(K){window.__DEALER_ERROR__=String(K)}},D.src=Bg("dealer-atlas.webp"),()=>{z.current?.dispose(),z.current=null}},[!!i]),lt.useEffect(()=>(P.current&&(G.current=new a1(P.current)),$.current&&(j.current=new o1($.current)),()=>{G.current?.dispose(),j.current?.dispose(),G.current=null}),[!!i]);const k=i?`${i.code}-${i.games}`:"";lt.useEffect(()=>{i?.result&&i.phase!=="calls"&&ae.current!==k&&(ae.current=k,G.current?.flip(i.result))},[i?.result,i?.phase,k]);const ie=a!==null?i?.calls[a]:null,ce=D=>h({type:"call",side:D}),q=i?i.history.map(D=>`========== GAME ${D.game} · PLAYER ${D.winner+1} WON ==========

=== PLAYER 1 ===

${Va(D.teams[0])}

=== PLAYER 2 ===

${Va(D.teams[1])}`).join(`


`):"",J=i&&i.teams[0].length===6?`${q}

=== CURRENT GAME ===

=== PLAYER 1 ===

${Va(i.teams[0])}

=== PLAYER 2 ===

${Va(i.teams[1])}`:q;if(!i)return me.jsxs("div",{className:"lobby",children:[me.jsx("canvas",{ref:$,className:"bg"}),me.jsxs("div",{className:"lobby-card",children:[me.jsx("div",{className:"eyebrow",children:"Las Vegas meets Kanto"}),me.jsxs("h1",{children:["Pokémon ",me.jsx("span",{children:"Battle Draft"})," Casino"]}),me.jsx("p",{children:"Two players. One golden coin. Two cursed teams. Real Pokémon Showdown battles."}),me.jsxs("label",{children:["Your name",me.jsx("input",{value:_,onChange:D=>v(D.target.value),maxLength:24})]}),me.jsxs("label",{children:["Format",me.jsxs("select",{value:y,onChange:D=>L(Number(D.target.value)),children:[me.jsx("option",{value:3,children:"Best of 3"}),me.jsx("option",{value:5,children:"Best of 5"})]})]}),me.jsx("div",{className:"row",children:me.jsx("button",{className:"primary",onClick:()=>f(_,y),disabled:!l,children:"Create room"})}),me.jsx("div",{className:"divider",children:"or join a friend"}),me.jsxs("div",{className:"row",children:[me.jsx("input",{placeholder:"YOUR NAME",value:x,onChange:D=>E(D.target.value),maxLength:24}),me.jsx("input",{placeholder:"ROOM CODE",value:A,onChange:D=>S(D.target.value)}),me.jsx("button",{onClick:()=>d(A,x),disabled:!l||!A,children:"Join"})]}),c&&me.jsx("p",{className:"error",children:c}),me.jsxs("small",{children:["Backend ",l?"connected":"offline"," · silent by design · no music or sound effects"]})]})]});const V=i.phase,Y=V==="pick"&&a===i.tossWinner;return me.jsxs("div",{className:"app",children:[me.jsx("canvas",{ref:$,className:"bg"}),me.jsxs("header",{className:"topbar",children:[me.jsxs("div",{children:[me.jsxs("span",{className:"eyebrow",children:["Room ",i.code]}),me.jsxs("h1",{children:["POKÉMON ",me.jsx("em",{children:"BATTLE DRAFT"})," CASINO"]})]}),me.jsxs("div",{className:"topright",children:[me.jsx("span",{className:l?"dot on":"dot"})," ",l?"LIVE":"OFFLINE",me.jsx("button",{onClick:()=>{navigator.clipboard.writeText(`${location.origin}${location.pathname}?room=${i.code}`),w("Link copied")},children:"Share link"}),me.jsx("button",{onClick:()=>h({type:"reset",bestOf:y}),children:"New series"})]})]}),me.jsxs("div",{className:"stage",children:[me.jsxs("div",{className:"dealer",children:[me.jsx("canvas",{ref:M}),me.jsx("img",{src:Bg("dealer-portrait.webp"),alt:"Casino dealer"}),me.jsx("span",{className:"dealer-tag",children:"MIRAGE · HOUSE DEALER"})]}),me.jsxs("div",{className:"table",children:[me.jsxs("div",{className:"scorebar",children:[me.jsxs("span",{children:["PLAYER 1 · ",i.players[0]?.name||"Waiting"]}),me.jsx("strong",{children:i.wins[0]}),me.jsx("i",{children:":"}),me.jsx("strong",{children:i.wins[1]}),me.jsxs("span",{children:[i.players[1]?.name||"Waiting"," · PLAYER 2"]})]}),me.jsx("p",{className:"status",children:V==="calls"?`GAME ${i.games+1} / ${i.bestOf} · CALL HEADS OR TAILS`:V.toUpperCase()}),me.jsxs("div",{className:"coinrow",children:[me.jsx("div",{className:"coinstage",children:me.jsx("canvas",{ref:P})}),me.jsxs("div",{className:"calls",children:[[0,1].map(D=>me.jsxs("div",{className:"callgroup",children:[me.jsxs("strong",{children:["PLAYER ",D+1]}),["heads","tails"].map(K=>me.jsx("button",{disabled:V!=="calls"||ie===K||i.calls[1-D]===K||a!==D,className:ie===K?"sel":"",onClick:()=>ce(K),children:K.toUpperCase()},K)),me.jsx("small",{children:i.calls[D]?`LOCKED: ${i.calls[D]}`:"no call"})]},D)),me.jsx("button",{className:"primary",disabled:V!=="calls"||!i.calls.every(Boolean)||!i.players[1],onClick:()=>h({type:"flip"}),children:"FLIP THE GOLDEN COIN"}),i.result&&me.jsxs("p",{className:"result",children:[i.result.toUpperCase()," · PLAYER ",(i.tossWinner??0)+1," WINS THE TOSS"]})]})]}),me.jsxs("div",{className:"phase-actions",children:[V==="spin"&&me.jsx("button",{className:"primary",onClick:()=>h({type:"spin"}),children:"DEAL TWO TEAMS"}),V==="battle"&&me.jsxs(me.Fragment,{children:[me.jsx("button",{onClick:()=>h({type:"result",winner:0}),children:"PLAYER 1 WON"}),me.jsx("button",{onClick:()=>h({type:"result",winner:1}),children:"PLAYER 2 WON"})]}),V==="between"&&me.jsx("button",{className:"primary",onClick:()=>h({type:"next"}),children:"NEXT GAME"}),V==="complete"&&me.jsxs("p",{className:"jackpot",children:["JACKPOT · PLAYER ",(i.wins[0]>i.wins[1]?0:1)+1," TAKES THE SERIES ",i.wins[0],"–",i.wins[1]]})]})]})]}),V==="pick"&&Y&&me.jsxs("section",{className:"draft",children:[me.jsx("h2",{children:"THE TOSS WINNER PICKS FIRST · CHOOSE YOUR SIX"}),me.jsx("div",{className:"draft-grid",children:i.candidates?.map((D,K)=>me.jsxs("div",{children:[me.jsx(zg,{teams:[D,[]],titles:[`TEAM ${K?"B":"A"}`,""]}),me.jsxs("button",{className:"primary",onClick:()=>h({type:"pick",team:K}),children:["PICK TEAM ",K?"B":"A"]})]},K))})]}),i.teams[0].length===6&&me.jsx(zg,{teams:i.teams,titles:[`PLAYER 1 · ${i.players[0]?.name}`,`PLAYER 2 · ${i.players[1]?.name}`]}),me.jsxs("section",{className:"showdown",children:[me.jsx("h2",{children:"Showdown handoff"}),me.jsx("p",{children:"Generate valid import text, copy a team, open Showdown and import it. A cross-origin iframe cannot be controlled from this page, so battles launch there — not here."}),me.jsxs("div",{className:"row",children:[[0,1].map(D=>i.teams[D].length===6&&me.jsxs("button",{disabled:!i.teams[D].length,onClick:async()=>w(await f1(Va(i.teams[D]))?`Team ${D+1} copied`:"Copy blocked — select manually"),children:["COPY P",D+1," TEAM"]},D)),me.jsx("button",{onClick:()=>b(!0),children:"OPEN psim.us EMBED"}),me.jsx("a",{className:"button",href:c1(),target:"_blank",rel:"noreferrer",children:"OPEN SHOWDOWN ↗"})]}),me.jsx("textarea",{readOnly:!0,value:J,placeholder:"Team archive appears here"}),U&&me.jsx("small",{children:U})]}),N&&me.jsx("div",{className:"modal",onClick:()=>b(!1),children:me.jsxs("div",{className:"modal-inner",onClick:D=>D.stopPropagation(),children:[me.jsxs("header",{children:[me.jsx("strong",{children:"psim.us embedded client"}),me.jsx("button",{onClick:()=>b(!1),children:"CLOSE"})]}),me.jsx("p",{children:"Embedding is officially supported by Showdown servers, but this parent page cannot inject teams or start a battle inside the iframe."}),me.jsx("iframe",{title:"Showdown",src:u1()})]})}),c&&me.jsx("p",{className:"error",onClick:()=>g(""),children:c})]})}dx.createRoot(document.getElementById("root")).render(me.jsx(ax.StrictMode,{children:me.jsx(d1,{})}));
