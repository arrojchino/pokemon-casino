(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function g_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ec={exports:{}},Pa={},Tc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function __(){if(Np)return ht;Np=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function _(N,ne,Le){this.props=N,this.context=ne,this.refs=R,this.updater=Le||M}_.prototype.isReactComponent={},_.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=_.prototype;function P(N,ne,Le){this.props=N,this.context=ne,this.refs=R,this.updater=Le||M}var O=P.prototype=new x;O.constructor=P,E(O,_.prototype),O.isPureReactComponent=!0;var b=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},y={key:!0,ref:!0,__self:!0,__source:!0};function C(N,ne,Le){var ie,me={},ye=null,Ue=null;if(ne!=null)for(ie in ne.ref!==void 0&&(Ue=ne.ref),ne.key!==void 0&&(ye=""+ne.key),ne)U.call(ne,ie)&&!y.hasOwnProperty(ie)&&(me[ie]=ne[ie]);var _e=arguments.length-2;if(_e===1)me.children=Le;else if(1<_e){for(var ze=Array(_e),vt=0;vt<_e;vt++)ze[vt]=arguments[vt+2];me.children=ze}if(N&&N.defaultProps)for(ie in _e=N.defaultProps,_e)me[ie]===void 0&&(me[ie]=_e[ie]);return{$$typeof:s,type:N,key:ye,ref:Ue,props:me,_owner:D.current}}function q(N,ne){return{$$typeof:s,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function z(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function V(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Le){return ne[Le]})}var K=/\/+/g;function oe(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):ne.toString(36)}function B(N,ne,Le,ie,me){var ye=typeof N;(ye==="undefined"||ye==="boolean")&&(N=null);var Ue=!1;if(N===null)Ue=!0;else switch(ye){case"string":case"number":Ue=!0;break;case"object":switch(N.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=N,me=me(Ue),N=ie===""?"."+oe(Ue,0):ie,b(me)?(Le="",N!=null&&(Le=N.replace(K,"$&/")+"/"),B(me,ne,Le,"",function(vt){return vt})):me!=null&&(z(me)&&(me=q(me,Le+(!me.key||Ue&&Ue.key===me.key?"":(""+me.key).replace(K,"$&/")+"/")+N)),ne.push(me)),1;if(Ue=0,ie=ie===""?".":ie+":",b(N))for(var _e=0;_e<N.length;_e++){ye=N[_e];var ze=ie+oe(ye,_e);Ue+=B(ye,ne,Le,ze,me)}else if(ze=g(N),typeof ze=="function")for(N=ze.call(N),_e=0;!(ye=N.next()).done;)ye=ye.value,ze=ie+oe(ye,_e++),Ue+=B(ye,ne,Le,ze,me);else if(ye==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Ue}function re(N,ne,Le){if(N==null)return N;var ie=[],me=0;return B(N,ie,"","",function(ye){return ne.call(Le,ye,me++)}),ie}function Z(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Le){(N._status===0||N._status===-1)&&(N._status=1,N._result=Le)},function(Le){(N._status===0||N._status===-1)&&(N._status=2,N._result=Le)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var X={current:null},Q={transition:null},Y={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:Q,ReactCurrentOwner:D};function $(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:re,forEach:function(N,ne,Le){re(N,function(){ne.apply(this,arguments)},Le)},count:function(N){var ne=0;return re(N,function(){ne++}),ne},toArray:function(N){return re(N,function(ne){return ne})||[]},only:function(N){if(!z(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=_,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=P,ht.StrictMode=r,ht.Suspense=m,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,ht.act=$,ht.cloneElement=function(N,ne,Le){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ie=E({},N.props),me=N.key,ye=N.ref,Ue=N._owner;if(ne!=null){if(ne.ref!==void 0&&(ye=ne.ref,Ue=D.current),ne.key!==void 0&&(me=""+ne.key),N.type&&N.type.defaultProps)var _e=N.type.defaultProps;for(ze in ne)U.call(ne,ze)&&!y.hasOwnProperty(ze)&&(ie[ze]=ne[ze]===void 0&&_e!==void 0?_e[ze]:ne[ze])}var ze=arguments.length-2;if(ze===1)ie.children=Le;else if(1<ze){_e=Array(ze);for(var vt=0;vt<ze;vt++)_e[vt]=arguments[vt+2];ie.children=_e}return{$$typeof:s,type:N.type,key:me,ref:ye,props:ie,_owner:Ue}},ht.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ht.createElement=C,ht.createFactory=function(N){var ne=C.bind(null,N);return ne.type=N,ne},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:d,render:N}},ht.isValidElement=z,ht.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:Z}},ht.memo=function(N,ne){return{$$typeof:h,type:N,compare:ne===void 0?null:ne}},ht.startTransition=function(N){var ne=Q.transition;Q.transition={};try{N()}finally{Q.transition=ne}},ht.unstable_act=$,ht.useCallback=function(N,ne){return X.current.useCallback(N,ne)},ht.useContext=function(N){return X.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return X.current.useDeferredValue(N)},ht.useEffect=function(N,ne){return X.current.useEffect(N,ne)},ht.useId=function(){return X.current.useId()},ht.useImperativeHandle=function(N,ne,Le){return X.current.useImperativeHandle(N,ne,Le)},ht.useInsertionEffect=function(N,ne){return X.current.useInsertionEffect(N,ne)},ht.useLayoutEffect=function(N,ne){return X.current.useLayoutEffect(N,ne)},ht.useMemo=function(N,ne){return X.current.useMemo(N,ne)},ht.useReducer=function(N,ne,Le){return X.current.useReducer(N,ne,Le)},ht.useRef=function(N){return X.current.useRef(N)},ht.useState=function(N){return X.current.useState(N)},ht.useSyncExternalStore=function(N,ne,Le){return X.current.useSyncExternalStore(N,ne,Le)},ht.useTransition=function(){return X.current.useTransition()},ht.version="18.3.1",ht}var Dp;function Kf(){return Dp||(Dp=1,Tc.exports=__()),Tc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function v_(){if(Ip)return Pa;Ip=1;var s=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,m,h){var v,S={},g=null,M=null;h!==void 0&&(g=""+h),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)r.call(m,v)&&!u.hasOwnProperty(v)&&(S[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)S[v]===void 0&&(S[v]=m[v]);return{$$typeof:e,type:d,key:g,ref:M,props:S,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=c,Pa.jsxs=c,Pa}var Up;function x_(){return Up||(Up=1,Ec.exports=v_()),Ec.exports}var ge=x_(),Lt=Kf();const S_=g_(Lt);var rl={},wc={exports:{}},Hn={},Ac={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function M_(){return Fp||(Fp=1,(function(s){function e(Q,Y){var $=Q.length;Q.push(Y);e:for(;0<$;){var N=$-1>>>1,ne=Q[N];if(0<o(ne,Y))Q[N]=Y,Q[$]=ne,$=N;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var Y=Q[0],$=Q.pop();if($!==Y){Q[0]=$;e:for(var N=0,ne=Q.length,Le=ne>>>1;N<Le;){var ie=2*(N+1)-1,me=Q[ie],ye=ie+1,Ue=Q[ye];if(0>o(me,$))ye<ne&&0>o(Ue,me)?(Q[N]=Ue,Q[ye]=$,N=ye):(Q[N]=me,Q[ie]=$,N=ie);else if(ye<ne&&0>o(Ue,$))Q[N]=Ue,Q[ye]=$,N=ye;else break e}}return Y}function o(Q,Y){var $=Q.sortIndex-Y.sortIndex;return $!==0?$:Q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var m=[],h=[],v=1,S=null,g=3,M=!1,E=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(Q){for(var Y=t(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=Q)r(h),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=t(h)}}function b(Q){if(R=!1,O(Q),!E)if(t(m)!==null)E=!0,Z(U);else{var Y=t(h);Y!==null&&X(b,Y.startTime-Q)}}function U(Q,Y){E=!1,R&&(R=!1,x(C),C=-1),M=!0;var $=g;try{for(O(Y),S=t(m);S!==null&&(!(S.expirationTime>Y)||Q&&!V());){var N=S.callback;if(typeof N=="function"){S.callback=null,g=S.priorityLevel;var ne=N(S.expirationTime<=Y);Y=s.unstable_now(),typeof ne=="function"?S.callback=ne:S===t(m)&&r(m),O(Y)}else r(m);S=t(m)}if(S!==null)var Le=!0;else{var ie=t(h);ie!==null&&X(b,ie.startTime-Y),Le=!1}return Le}finally{S=null,g=$,M=!1}}var D=!1,y=null,C=-1,q=5,z=-1;function V(){return!(s.unstable_now()-z<q)}function K(){if(y!==null){var Q=s.unstable_now();z=Q;var Y=!0;try{Y=y(!0,Q)}finally{Y?oe():(D=!1,y=null)}}else D=!1}var oe;if(typeof P=="function")oe=function(){P(K)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,re=B.port2;B.port1.onmessage=K,oe=function(){re.postMessage(null)}}else oe=function(){_(K,0)};function Z(Q){y=Q,D||(D=!0,oe())}function X(Q,Y){C=_(function(){Q(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,Z(U))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(Q){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var $=g;g=Y;try{return Q()}finally{g=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,Y){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var $=g;g=Q;try{return Y()}finally{g=$}},s.unstable_scheduleCallback=function(Q,Y,$){var N=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?N+$:N):$=N,Q){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=$+ne,Q={id:v++,callback:Y,priorityLevel:Q,startTime:$,expirationTime:ne,sortIndex:-1},$>N?(Q.sortIndex=$,e(h,Q),t(m)===null&&Q===t(h)&&(R?(x(C),C=-1):R=!0,X(b,$-N))):(Q.sortIndex=ne,e(m,Q),E||M||(E=!0,Z(U))),Q},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Q){var Y=g;return function(){var $=g;g=Y;try{return Q.apply(this,arguments)}finally{g=$}}}})(Rc)),Rc}var Op;function y_(){return Op||(Op=1,Ac.exports=M_()),Ac.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function E_(){if(Bp)return Hn;Bp=1;var s=Kf(),e=y_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function g(n){return m.call(S,n)?!0:m.call(v,n)?!1:h.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,l){if(i===null||typeof i>"u"||M(n,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,l,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,P);_[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,P);_[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,P);_[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,l){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?n.setAttributeNS(l,i,a):n.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),V=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),Q=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Le=!1;function ie(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var l=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){l=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){l=ue}n()}}catch(ue){if(ue&&l&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),p=l.stack.split(`
`),T=f.length-1,I=p.length-1;1<=T&&0<=I&&f[T]!==p[I];)I--;for(;1<=T&&0<=I;T--,I--)if(f[T]!==p[I]){if(T!==1||I!==1)do if(T--,I--,0>I||f[T]!==p[I]){var H=`
`+f[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=I);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function me(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case y:return"Fragment";case D:return"Portal";case q:return"Profiler";case C:return"StrictMode";case oe:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case K:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){l=""+T,p.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function je(n){n._valueTracker||(n._valueTracker=vt(n))}function yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=ze(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function Et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ct(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function jt(n,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Yt(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function cn(n,i){Yt(n,i);var a=_e(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Un(n,i.type,a):i.hasOwnProperty("defaultValue")&&Un(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Un(n,i,a){(i!=="number"||Et(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var kt=Array.isArray;function nn(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Mn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function bn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(kt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function W(n,i){var a=_e(i.value),l=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),l!=null&&(n.defaultValue=""+l)}function Ln(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Nt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Nt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,qt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,l,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Qe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),nt[i]=nt[n]})});function w(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||nt.hasOwnProperty(n)&&nt[n]?(""+i).trim():i+"px"}function ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=w(a,i[a],l);a==="float"&&(a="cssFloat"),l?n.setProperty(a,f):n[a]=f}}var Me=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pe(n,i){if(i){if(Me[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Re(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function fe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var de=null,we=null,F=null;function he(n){if(n=pa(n)){if(typeof de!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xo(i),de(n.stateNode,n.type,i))}}function ce(n){we?F?F.push(n):F=[n]:we=n}function Pe(){if(we){var n=we,i=F;if(F=we=null,he(n),i)for(n=0;n<i.length;n++)he(i[n])}}function Te(n,i){return n(i)}function Ce(){}var $e=!1;function ot(n,i,a){if($e)return n(i,a);$e=!0;try{return Te(n,i,a)}finally{$e=!1,(we!==null||F!==null)&&(Ce(),Pe())}}function Se(n,i){var a=n.stateNode;if(a===null)return null;var l=xo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Je=!1;if(d)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){Je=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{Je=!1}function Oe(n,i,a,l,f,p,T,I,H){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(xe){this.onError(xe)}}var mt=!1,Vt=null,Yn=!1,jr=null,$s={onError:function(n){mt=!0,Vt=n}};function ql(n,i,a,l,f,p,T,I,H){mt=!1,Vt=null,Oe.apply($s,arguments)}function ja(n,i,a,l,f,p,T,I,H){if(ql.apply(this,arguments),mt){if(mt){var ue=Vt;mt=!1,Vt=null}else throw Error(t(198));Yn||(Yn=!0,jr=ue)}}function yi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ei(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function es(n){if(yi(n)!==n)throw Error(t(188))}function eo(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return es(f),n;if(p===l)return es(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==l.return)a=f,l=p;else{for(var T=!1,I=f.child;I;){if(I===a){T=!0,a=f,l=p;break}if(I===l){T=!0,l=f,a=p;break}I=I.sibling}if(!T){for(I=p.child;I;){if(I===a){T=!0,a=p,l=f;break}if(I===l){T=!0,l=p,a=f;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==l)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ks(n){return n=eo(n),n!==null?br(n):null}function br(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=br(n);if(i!==null)return i;n=n.sibling}return null}var Zs=e.unstable_scheduleCallback,Js=e.unstable_cancelCallback,Lr=e.unstable_shouldYield,$l=e.unstable_requestPaint,zt=e.unstable_now,to=e.unstable_getCurrentPriorityLevel,Qs=e.unstable_ImmediatePriority,no=e.unstable_UserBlockingPriority,ts=e.unstable_NormalPriority,io=e.unstable_LowPriority,A=e.unstable_IdlePriority,k=null,se=null;function j(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(k,n,void 0,(n.current.flags&128)===128)}catch{}}var J=Math.clz32?Math.clz32:Ne,Ie=Math.log,He=Math.LN2;function Ne(n){return n>>>=0,n===0?32:31-(Ie(n)/He|0)|0}var Fe=64,Ve=4194304;function it(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ut(n,i){var a=n.pendingLanes;if(a===0)return 0;var l=0,f=n.suspendedLanes,p=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~f;I!==0?l=it(I):(p&=T,p!==0&&(l=it(p)))}else T=a&~f,T!==0?l=it(T):p!==0&&(l=it(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)a=31-J(i),f=1<<a,l|=n[a],i&=~f;return l}function We(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var T=31-J(p),I=1<<T,H=f[T];H===-1?((I&a)===0||(I&l)!==0)&&(f[T]=We(I,i)):H<=i&&(n.expiredLanes|=I),p&=~I}}function Ht(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ct(){var n=Fe;return Fe<<=1,(Fe&4194240)===0&&(Fe=64),n}function At(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-J(i),n[i]=a}function Xe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-J(a),p=1<<f;i[f]=0,l[f]=-1,n[f]=-1,a&=~p}}function rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-J(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}var Ke=0;function Ti(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var sn,tr,ui,wi,pt,Zt=!1,yn=[],Tt=null,Dt=null,fn=null,nr=new Map,js=new Map,ir=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":nr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(i.pointerId)}}function ea(n,i,a,l,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=pa(i),i!==null&&tr(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function kg(n,i,a,l,f){switch(i){case"focusin":return Tt=ea(Tt,n,i,a,l,f),!0;case"dragenter":return Dt=ea(Dt,n,i,a,l,f),!0;case"mouseover":return fn=ea(fn,n,i,a,l,f),!0;case"pointerover":var p=f.pointerId;return nr.set(p,ea(nr.get(p)||null,n,i,a,l,f)),!0;case"gotpointercapture":return p=f.pointerId,js.set(p,ea(js.get(p)||null,n,i,a,l,f)),!0}return!1}function gd(n){var i=Nr(n.target);if(i!==null){var a=yi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ei(a),i!==null){n.blockedOn=i,pt(n.priority,function(){ui(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Zl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);be=l,a.target.dispatchEvent(l),be=null}else return i=pa(a),i!==null&&tr(i),n.blockedOn=a,!1;i.shift()}return!0}function _d(n,i,a){ro(n)&&a.delete(i)}function zg(){Zt=!1,Tt!==null&&ro(Tt)&&(Tt=null),Dt!==null&&ro(Dt)&&(Dt=null),fn!==null&&ro(fn)&&(fn=null),nr.forEach(_d),js.forEach(_d)}function ta(n,i){n.blockedOn===i&&(n.blockedOn=null,Zt||(Zt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zg)))}function na(n){function i(f){return ta(f,n)}if(0<yn.length){ta(yn[0],n);for(var a=1;a<yn.length;a++){var l=yn[a];l.blockedOn===n&&(l.blockedOn=null)}}for(Tt!==null&&ta(Tt,n),Dt!==null&&ta(Dt,n),fn!==null&&ta(fn,n),nr.forEach(i),js.forEach(i),a=0;a<ir.length;a++)l=ir[a],l.blockedOn===n&&(l.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)gd(a),a.blockedOn===null&&ir.shift()}var ns=b.ReactCurrentBatchConfig,so=!0;function Hg(n,i,a,l){var f=Ke,p=ns.transition;ns.transition=null;try{Ke=1,Kl(n,i,a,l)}finally{Ke=f,ns.transition=p}}function Gg(n,i,a,l){var f=Ke,p=ns.transition;ns.transition=null;try{Ke=4,Kl(n,i,a,l)}finally{Ke=f,ns.transition=p}}function Kl(n,i,a,l){if(so){var f=Zl(n,i,a,l);if(f===null)hu(n,i,l,ao,a),md(n,l);else if(kg(f,n,i,a,l))l.stopPropagation();else if(md(n,l),i&4&&-1<Bg.indexOf(n)){for(;f!==null;){var p=pa(f);if(p!==null&&sn(p),p=Zl(n,i,a,l),p===null&&hu(n,i,l,ao,a),p===f)break;f=p}f!==null&&l.stopPropagation()}else hu(n,i,l,null,a)}}var ao=null;function Zl(n,i,a,l){if(ao=null,n=fe(l),n=Nr(n),n!==null)if(i=yi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ei(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ao=n,null}function vd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(to()){case Qs:return 1;case no:return 4;case ts:case io:return 16;case A:return 536870912;default:return 16}default:return 16}}var rr=null,Jl=null,oo=null;function xd(){if(oo)return oo;var n,i=Jl,a=i.length,l,f="value"in rr?rr.value:rr.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(l=1;l<=T&&i[a-l]===f[p-l];l++);return oo=f.slice(n,1<l?1-l:void 0)}function lo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function uo(){return!0}function Sd(){return!1}function qn(n){function i(a,l,f,p,T){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?uo:Sd,this.isPropagationStopped=Sd,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=qn(is),ia=$({},is,{view:0,detail:0}),Vg=qn(ia),jl,eu,ra,co=$({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(jl=n.screenX-ra.screenX,eu=n.screenY-ra.screenY):eu=jl=0,ra=n),jl)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),Md=qn(co),Wg=$({},co,{dataTransfer:0}),Xg=qn(Wg),Yg=$({},ia,{relatedTarget:0}),tu=qn(Yg),qg=$({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=qn(qg),Kg=$({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zg=qn(Kg),Jg=$({},is,{data:0}),yd=qn(Jg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=e0[n])?!!i[n]:!1}function nu(){return t0}var n0=$({},ia,{key:function(n){if(n.key){var i=Qg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=lo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(n){return n.type==="keypress"?lo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),i0=qn(n0),r0=$({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=qn(r0),s0=$({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),a0=qn(s0),o0=$({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=qn(o0),u0=$({},co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=qn(u0),f0=[9,13,27,32],iu=d&&"CompositionEvent"in window,sa=null;d&&"documentMode"in document&&(sa=document.documentMode);var d0=d&&"TextEvent"in window&&!sa,Td=d&&(!iu||sa&&8<sa&&11>=sa),wd=" ",Ad=!1;function Rd(n,i){switch(n){case"keyup":return f0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rs=!1;function h0(n,i){switch(n){case"compositionend":return Cd(i);case"keypress":return i.which!==32?null:(Ad=!0,wd);case"textInput":return n=i.data,n===wd&&Ad?null:n;default:return null}}function p0(n,i){if(rs)return n==="compositionend"||!iu&&Rd(n,i)?(n=xd(),oo=Jl=rr=null,rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Td&&i.locale!=="ko"?null:i.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!m0[n.type]:i==="textarea"}function bd(n,i,a,l){ce(l),i=go(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var aa=null,oa=null;function g0(n){$d(n,0)}function fo(n){var i=us(n);if(yt(i))return n}function _0(n,i){if(n==="change")return i}var Ld=!1;if(d){var ru;if(d){var su="oninput"in document;if(!su){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),su=typeof Nd.oninput=="function"}ru=su}else ru=!1;Ld=ru&&(!document.documentMode||9<document.documentMode)}function Dd(){aa&&(aa.detachEvent("onpropertychange",Id),oa=aa=null)}function Id(n){if(n.propertyName==="value"&&fo(oa)){var i=[];bd(i,oa,n,fe(n)),ot(g0,i)}}function v0(n,i,a){n==="focusin"?(Dd(),aa=i,oa=a,aa.attachEvent("onpropertychange",Id)):n==="focusout"&&Dd()}function x0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fo(oa)}function S0(n,i){if(n==="click")return fo(i)}function M0(n,i){if(n==="input"||n==="change")return fo(i)}function y0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:y0;function la(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!m.call(i,f)||!ci(n[f],i[f]))return!1}return!0}function Ud(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fd(n,i){var a=Ud(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ud(a)}}function Od(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Od(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Bd(){for(var n=window,i=Et();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Et(n.document)}return i}function au(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function E0(n){var i=Bd(),a=n.focusedElem,l=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Od(a.ownerDocument.documentElement,a)){if(l!==null&&au(a)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!n.extend&&p>l&&(f=l,l=p,p=f),f=Fd(a,p);var T=Fd(a,l);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>l?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var T0=d&&"documentMode"in document&&11>=document.documentMode,ss=null,ou=null,ua=null,lu=!1;function kd(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||ss==null||ss!==Et(l)||(l=ss,"selectionStart"in l&&au(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ua&&la(ua,l)||(ua=l,l=go(ou,"onSelect"),0<l.length&&(i=new Ql("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=ss)))}function ho(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var as={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},uu={},zd={};d&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function po(n){if(uu[n])return uu[n];if(!as[n])return n;var i=as[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in zd)return uu[n]=i[a];return n}var Hd=po("animationend"),Gd=po("animationiteration"),Vd=po("animationstart"),Wd=po("transitionend"),Xd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,i){Xd.set(n,i),u(i,[n])}for(var cu=0;cu<Yd.length;cu++){var fu=Yd[cu],w0=fu.toLowerCase(),A0=fu[0].toUpperCase()+fu.slice(1);sr(w0,"on"+A0)}sr(Hd,"onAnimationEnd"),sr(Gd,"onAnimationIteration"),sr(Vd,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(Wd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function qd(n,i,a){var l=n.type||"unknown-event";n.currentTarget=a,ja(l,i,void 0,n),n.currentTarget=null}function $d(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var T=l.length-1;0<=T;T--){var I=l[T],H=I.instance,ue=I.currentTarget;if(I=I.listener,H!==p&&f.isPropagationStopped())break e;qd(f,I,ue),p=H}else for(T=0;T<l.length;T++){if(I=l[T],H=I.instance,ue=I.currentTarget,I=I.listener,H!==p&&f.isPropagationStopped())break e;qd(f,I,ue),p=H}}}if(Yn)throw n=jr,Yn=!1,jr=null,n}function Ot(n,i){var a=i[xu];a===void 0&&(a=i[xu]=new Set);var l=n+"__bubble";a.has(l)||(Kd(i,n,2,!1),a.add(l))}function du(n,i,a){var l=0;i&&(l|=4),Kd(a,n,l,i)}var mo="_reactListening"+Math.random().toString(36).slice(2);function fa(n){if(!n[mo]){n[mo]=!0,r.forEach(function(a){a!=="selectionchange"&&(R0.has(a)||du(a,!1,n),du(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[mo]||(i[mo]=!0,du("selectionchange",!1,i))}}function Kd(n,i,a,l){switch(vd(i)){case 1:var f=Hg;break;case 4:f=Gg;break;default:f=Kl}a=f.bind(null,i,a,n),f=void 0,!Je||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function hu(n,i,a,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(T===4)for(T=l.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;T=T.return}for(;I!==null;){if(T=Nr(I),T===null)return;if(H=T.tag,H===5||H===6){l=p=T;continue e}I=I.parentNode}}l=l.return}ot(function(){var ue=p,xe=fe(a),Ee=[];e:{var ve=Xd.get(n);if(ve!==void 0){var ke=Ql,Ye=n;switch(n){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":ke=i0;break;case"focusin":Ye="focus",ke=tu;break;case"focusout":Ye="blur",ke=tu;break;case"beforeblur":case"afterblur":ke=tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=a0;break;case Hd:case Gd:case Vd:ke=$g;break;case Wd:ke=l0;break;case"scroll":ke=Vg;break;case"wheel":ke=c0;break;case"copy":case"cut":case"paste":ke=Zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Ed}var qe=(i&4)!==0,Jt=!qe&&n==="scroll",te=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var G=ue,ae;G!==null;){ae=G;var Ae=ae.stateNode;if(ae.tag===5&&Ae!==null&&(ae=Ae,te!==null&&(Ae=Se(G,te),Ae!=null&&qe.push(da(G,Ae,ae)))),Jt)break;G=G.return}0<qe.length&&(ve=new ke(ve,Ye,null,a,xe),Ee.push({event:ve,listeners:qe}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ve&&a!==be&&(Ye=a.relatedTarget||a.fromElement)&&(Nr(Ye)||Ye[Bi]))break e;if((ke||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(Ye=a.relatedTarget||a.toElement,ke=ue,Ye=Ye?Nr(Ye):null,Ye!==null&&(Jt=yi(Ye),Ye!==Jt||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ke=null,Ye=ue),ke!==Ye)){if(qe=Md,Ae="onMouseLeave",te="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Ed,Ae="onPointerLeave",te="onPointerEnter",G="pointer"),Jt=ke==null?ve:us(ke),ae=Ye==null?ve:us(Ye),ve=new qe(Ae,G+"leave",ke,a,xe),ve.target=Jt,ve.relatedTarget=ae,Ae=null,Nr(xe)===ue&&(qe=new qe(te,G+"enter",Ye,a,xe),qe.target=ae,qe.relatedTarget=Jt,Ae=qe),Jt=Ae,ke&&Ye)t:{for(qe=ke,te=Ye,G=0,ae=qe;ae;ae=os(ae))G++;for(ae=0,Ae=te;Ae;Ae=os(Ae))ae++;for(;0<G-ae;)qe=os(qe),G--;for(;0<ae-G;)te=os(te),ae--;for(;G--;){if(qe===te||te!==null&&qe===te.alternate)break t;qe=os(qe),te=os(te)}qe=null}else qe=null;ke!==null&&Zd(Ee,ve,ke,qe,!1),Ye!==null&&Jt!==null&&Zd(Ee,Jt,Ye,qe,!0)}}e:{if(ve=ue?us(ue):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var Ze=_0;else if(Pd(ve))if(Ld)Ze=M0;else{Ze=x0;var et=v0}else(ke=ve.nodeName)&&ke.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=S0);if(Ze&&(Ze=Ze(n,ue))){bd(Ee,Ze,a,xe);break e}et&&et(n,ve,ue),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&Un(ve,"number",ve.value)}switch(et=ue?us(ue):window,n){case"focusin":(Pd(et)||et.contentEditable==="true")&&(ss=et,ou=ue,ua=null);break;case"focusout":ua=ou=ss=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,kd(Ee,a,xe);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":kd(Ee,a,xe)}var tt;if(iu)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else rs?Rd(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Td&&a.locale!=="ko"&&(rs||st!=="onCompositionStart"?st==="onCompositionEnd"&&rs&&(tt=xd()):(rr=xe,Jl="value"in rr?rr.value:rr.textContent,rs=!0)),et=go(ue,st),0<et.length&&(st=new yd(st,n,null,a,xe),Ee.push({event:st,listeners:et}),tt?st.data=tt:(tt=Cd(a),tt!==null&&(st.data=tt)))),(tt=d0?h0(n,a):p0(n,a))&&(ue=go(ue,"onBeforeInput"),0<ue.length&&(xe=new yd("onBeforeInput","beforeinput",null,a,xe),Ee.push({event:xe,listeners:ue}),xe.data=tt))}$d(Ee,i)})}function da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function go(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Se(n,a),p!=null&&l.unshift(da(n,p,f)),p=Se(n,i),p!=null&&l.push(da(n,p,f))),n=n.return}return l}function os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Zd(n,i,a,l,f){for(var p=i._reactName,T=[];a!==null&&a!==l;){var I=a,H=I.alternate,ue=I.stateNode;if(H!==null&&H===l)break;I.tag===5&&ue!==null&&(I=ue,f?(H=Se(a,p),H!=null&&T.unshift(da(a,H,I))):f||(H=Se(a,p),H!=null&&T.push(da(a,H,I)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var C0=/\r\n?/g,P0=/\u0000|\uFFFD/g;function Jd(n){return(typeof n=="string"?n:""+n).replace(C0,`
`).replace(P0,"")}function _o(n,i,a){if(i=Jd(i),Jd(n)!==i&&a)throw Error(t(425))}function vo(){}var pu=null,mu=null;function gu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(n){return Qd.resolve(null).then(n).catch(N0)}:_u;function N0(n){setTimeout(function(){throw n})}function vu(n,i){var a=i,l=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){n.removeChild(f),na(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);na(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function jd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Ai="__reactFiber$"+ls,ha="__reactProps$"+ls,Bi="__reactContainer$"+ls,xu="__reactEvents$"+ls,D0="__reactListeners$"+ls,I0="__reactHandles$"+ls;function Nr(n){var i=n[Ai];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[Ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=jd(n);n!==null;){if(a=n[Ai])return a;n=jd(n)}return i}n=a,a=n.parentNode}return null}function pa(n){return n=n[Ai]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xo(n){return n[ha]||null}var Su=[],cs=-1;function or(n){return{current:n}}function Bt(n){0>cs||(n.current=Su[cs],Su[cs]=null,cs--)}function Ft(n,i){cs++,Su[cs]=n.current,n.current=i}var lr={},En=or(lr),Fn=or(!1),Dr=lr;function fs(n,i){var a=n.type.contextTypes;if(!a)return lr;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function On(n){return n=n.childContextTypes,n!=null}function So(){Bt(Fn),Bt(En)}function eh(n,i,a){if(En.current!==lr)throw Error(t(168));Ft(En,i),Ft(Fn,a)}function th(n,i,a){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(t(108,Ue(n)||"Unknown",f));return $({},a,l)}function Mo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,Dr=En.current,Ft(En,n),Ft(Fn,Fn.current),!0}function nh(n,i,a){var l=n.stateNode;if(!l)throw Error(t(169));a?(n=th(n,i,Dr),l.__reactInternalMemoizedMergedChildContext=n,Bt(Fn),Bt(En),Ft(En,n)):Bt(Fn),Ft(Fn,a)}var ki=null,yo=!1,Mu=!1;function ih(n){ki===null?ki=[n]:ki.push(n)}function U0(n){yo=!0,ih(n)}function ur(){if(!Mu&&ki!==null){Mu=!0;var n=0,i=Ke;try{var a=ki;for(Ke=1;n<a.length;n++){var l=a[n];do l=l(!0);while(l!==null)}ki=null,yo=!1}catch(f){throw ki!==null&&(ki=ki.slice(n+1)),Zs(Qs,ur),f}finally{Ke=i,Mu=!1}}return null}var ds=[],hs=0,Eo=null,To=0,ni=[],ii=0,Ir=null,zi=1,Hi="";function Ur(n,i){ds[hs++]=To,ds[hs++]=Eo,Eo=n,To=i}function rh(n,i,a){ni[ii++]=zi,ni[ii++]=Hi,ni[ii++]=Ir,Ir=n;var l=zi;n=Hi;var f=32-J(l)-1;l&=~(1<<f),a+=1;var p=32-J(i)+f;if(30<p){var T=f-f%5;p=(l&(1<<T)-1).toString(32),l>>=T,f-=T,zi=1<<32-J(i)+f|a<<f|l,Hi=p+n}else zi=1<<p|a<<f|l,Hi=n}function yu(n){n.return!==null&&(Ur(n,1),rh(n,1,0))}function Eu(n){for(;n===Eo;)Eo=ds[--hs],ds[hs]=null,To=ds[--hs],ds[hs]=null;for(;n===Ir;)Ir=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,zi=ni[--ii],ni[ii]=null}var $n=null,Kn=null,Gt=!1,fi=null;function sh(n,i){var a=oi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ah(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,Kn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:zi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=oi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,Kn=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wu(n){if(Gt){var i=Kn;if(i){var a=i;if(!ah(n,i)){if(Tu(n))throw Error(t(418));i=ar(a.nextSibling);var l=$n;i&&ah(n,i)?sh(l,a):(n.flags=n.flags&-4097|2,Gt=!1,$n=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,$n=n}}}function oh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function wo(n){if(n!==$n)return!1;if(!Gt)return oh(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!gu(n.type,n.memoizedProps)),i&&(i=Kn)){if(Tu(n))throw lh(),Error(t(418));for(;i;)sh(n,i),i=ar(i.nextSibling)}if(oh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=$n?ar(n.stateNode.nextSibling):null;return!0}function lh(){for(var n=Kn;n;)n=ar(n.nextSibling)}function ps(){Kn=$n=null,Gt=!1}function Au(n){fi===null?fi=[n]:fi.push(n)}var F0=b.ReactCurrentBatchConfig;function ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var l=a.stateNode}if(!l)throw Error(t(147,n));var f=l,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var I=f.refs;T===null?delete I[p]:I[p]=T},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ao(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function uh(n){var i=n._init;return i(n._payload)}function ch(n){function i(te,G){if(n){var ae=te.deletions;ae===null?(te.deletions=[G],te.flags|=16):ae.push(G)}}function a(te,G){if(!n)return null;for(;G!==null;)i(te,G),G=G.sibling;return null}function l(te,G){for(te=new Map;G!==null;)G.key!==null?te.set(G.key,G):te.set(G.index,G),G=G.sibling;return te}function f(te,G){return te=_r(te,G),te.index=0,te.sibling=null,te}function p(te,G,ae){return te.index=ae,n?(ae=te.alternate,ae!==null?(ae=ae.index,ae<G?(te.flags|=2,G):ae):(te.flags|=2,G)):(te.flags|=1048576,G)}function T(te){return n&&te.alternate===null&&(te.flags|=2),te}function I(te,G,ae,Ae){return G===null||G.tag!==6?(G=_c(ae,te.mode,Ae),G.return=te,G):(G=f(G,ae),G.return=te,G)}function H(te,G,ae,Ae){var Ze=ae.type;return Ze===y?xe(te,G,ae.props.children,Ae,ae.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&uh(Ze)===G.type)?(Ae=f(G,ae.props),Ae.ref=ma(te,G,ae),Ae.return=te,Ae):(Ae=Zo(ae.type,ae.key,ae.props,null,te.mode,Ae),Ae.ref=ma(te,G,ae),Ae.return=te,Ae)}function ue(te,G,ae,Ae){return G===null||G.tag!==4||G.stateNode.containerInfo!==ae.containerInfo||G.stateNode.implementation!==ae.implementation?(G=vc(ae,te.mode,Ae),G.return=te,G):(G=f(G,ae.children||[]),G.return=te,G)}function xe(te,G,ae,Ae,Ze){return G===null||G.tag!==7?(G=Vr(ae,te.mode,Ae,Ze),G.return=te,G):(G=f(G,ae),G.return=te,G)}function Ee(te,G,ae){if(typeof G=="string"&&G!==""||typeof G=="number")return G=_c(""+G,te.mode,ae),G.return=te,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return ae=Zo(G.type,G.key,G.props,null,te.mode,ae),ae.ref=ma(te,null,G),ae.return=te,ae;case D:return G=vc(G,te.mode,ae),G.return=te,G;case Z:var Ae=G._init;return Ee(te,Ae(G._payload),ae)}if(kt(G)||Y(G))return G=Vr(G,te.mode,ae,null),G.return=te,G;Ao(te,G)}return null}function ve(te,G,ae,Ae){var Ze=G!==null?G.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Ze!==null?null:I(te,G,""+ae,Ae);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case U:return ae.key===Ze?H(te,G,ae,Ae):null;case D:return ae.key===Ze?ue(te,G,ae,Ae):null;case Z:return Ze=ae._init,ve(te,G,Ze(ae._payload),Ae)}if(kt(ae)||Y(ae))return Ze!==null?null:xe(te,G,ae,Ae,null);Ao(te,ae)}return null}function ke(te,G,ae,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return te=te.get(ae)||null,I(G,te,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case U:return te=te.get(Ae.key===null?ae:Ae.key)||null,H(G,te,Ae,Ze);case D:return te=te.get(Ae.key===null?ae:Ae.key)||null,ue(G,te,Ae,Ze);case Z:var et=Ae._init;return ke(te,G,ae,et(Ae._payload),Ze)}if(kt(Ae)||Y(Ae))return te=te.get(ae)||null,xe(G,te,Ae,Ze,null);Ao(G,Ae)}return null}function Ye(te,G,ae,Ae){for(var Ze=null,et=null,tt=G,st=G=0,pn=null;tt!==null&&st<ae.length;st++){tt.index>st?(pn=tt,tt=null):pn=tt.sibling;var wt=ve(te,tt,ae[st],Ae);if(wt===null){tt===null&&(tt=pn);break}n&&tt&&wt.alternate===null&&i(te,tt),G=p(wt,G,st),et===null?Ze=wt:et.sibling=wt,et=wt,tt=pn}if(st===ae.length)return a(te,tt),Gt&&Ur(te,st),Ze;if(tt===null){for(;st<ae.length;st++)tt=Ee(te,ae[st],Ae),tt!==null&&(G=p(tt,G,st),et===null?Ze=tt:et.sibling=tt,et=tt);return Gt&&Ur(te,st),Ze}for(tt=l(te,tt);st<ae.length;st++)pn=ke(tt,te,st,ae[st],Ae),pn!==null&&(n&&pn.alternate!==null&&tt.delete(pn.key===null?st:pn.key),G=p(pn,G,st),et===null?Ze=pn:et.sibling=pn,et=pn);return n&&tt.forEach(function(vr){return i(te,vr)}),Gt&&Ur(te,st),Ze}function qe(te,G,ae,Ae){var Ze=Y(ae);if(typeof Ze!="function")throw Error(t(150));if(ae=Ze.call(ae),ae==null)throw Error(t(151));for(var et=Ze=null,tt=G,st=G=0,pn=null,wt=ae.next();tt!==null&&!wt.done;st++,wt=ae.next()){tt.index>st?(pn=tt,tt=null):pn=tt.sibling;var vr=ve(te,tt,wt.value,Ae);if(vr===null){tt===null&&(tt=pn);break}n&&tt&&vr.alternate===null&&i(te,tt),G=p(vr,G,st),et===null?Ze=vr:et.sibling=vr,et=vr,tt=pn}if(wt.done)return a(te,tt),Gt&&Ur(te,st),Ze;if(tt===null){for(;!wt.done;st++,wt=ae.next())wt=Ee(te,wt.value,Ae),wt!==null&&(G=p(wt,G,st),et===null?Ze=wt:et.sibling=wt,et=wt);return Gt&&Ur(te,st),Ze}for(tt=l(te,tt);!wt.done;st++,wt=ae.next())wt=ke(tt,te,st,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&tt.delete(wt.key===null?st:wt.key),G=p(wt,G,st),et===null?Ze=wt:et.sibling=wt,et=wt);return n&&tt.forEach(function(m_){return i(te,m_)}),Gt&&Ur(te,st),Ze}function Jt(te,G,ae,Ae){if(typeof ae=="object"&&ae!==null&&ae.type===y&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case U:e:{for(var Ze=ae.key,et=G;et!==null;){if(et.key===Ze){if(Ze=ae.type,Ze===y){if(et.tag===7){a(te,et.sibling),G=f(et,ae.props.children),G.return=te,te=G;break e}}else if(et.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Z&&uh(Ze)===et.type){a(te,et.sibling),G=f(et,ae.props),G.ref=ma(te,et,ae),G.return=te,te=G;break e}a(te,et);break}else i(te,et);et=et.sibling}ae.type===y?(G=Vr(ae.props.children,te.mode,Ae,ae.key),G.return=te,te=G):(Ae=Zo(ae.type,ae.key,ae.props,null,te.mode,Ae),Ae.ref=ma(te,G,ae),Ae.return=te,te=Ae)}return T(te);case D:e:{for(et=ae.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===ae.containerInfo&&G.stateNode.implementation===ae.implementation){a(te,G.sibling),G=f(G,ae.children||[]),G.return=te,te=G;break e}else{a(te,G);break}else i(te,G);G=G.sibling}G=vc(ae,te.mode,Ae),G.return=te,te=G}return T(te);case Z:return et=ae._init,Jt(te,G,et(ae._payload),Ae)}if(kt(ae))return Ye(te,G,ae,Ae);if(Y(ae))return qe(te,G,ae,Ae);Ao(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,G!==null&&G.tag===6?(a(te,G.sibling),G=f(G,ae),G.return=te,te=G):(a(te,G),G=_c(ae,te.mode,Ae),G.return=te,te=G),T(te)):a(te,G)}return Jt}var ms=ch(!0),fh=ch(!1),Ro=or(null),Co=null,gs=null,Ru=null;function Cu(){Ru=gs=Co=null}function Pu(n){var i=Ro.current;Bt(Ro),n._currentValue=i}function bu(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function _s(n,i){Co=n,Ru=gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ri(n){var i=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:i,next:null},gs===null){if(Co===null)throw Error(t(308));gs=n,Co.dependencies={lanes:0,firstContext:n}}else gs=gs.next=n;return i}var Fr=null;function Lu(n){Fr===null?Fr=[n]:Fr.push(n)}function dh(n,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Lu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Gi(n,l)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var cr=!1;function Nu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Gi(n,a)}return f=l.interleaved,f===null?(i.next=i,Lu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Gi(n,a)}function Po(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,rn(n,a)}}function ph(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function bo(n,i,a,l){var f=n.updateQueue;cr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var H=I,ue=H.next;H.next=null,T===null?p=ue:T.next=ue,T=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==T&&(I===null?xe.firstBaseUpdate=ue:I.next=ue,xe.lastBaseUpdate=H))}if(p!==null){var Ee=f.baseState;T=0,xe=ue=H=null,I=p;do{var ve=I.lane,ke=I.eventTime;if((l&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ke,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ye=n,qe=I;switch(ve=i,ke=a,qe.tag){case 1:if(Ye=qe.payload,typeof Ye=="function"){Ee=Ye.call(ke,Ee,ve);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=qe.payload,ve=typeof Ye=="function"?Ye.call(ke,Ee,ve):Ye,ve==null)break e;Ee=$({},Ee,ve);break e;case 2:cr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[I]:ve.push(I))}else ke={eventTime:ke,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ue=xe=ke,H=Ee):xe=xe.next=ke,T|=ve;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(xe===null&&(H=Ee),f.baseState=H,f.firstBaseUpdate=ue,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);kr|=T,n.lanes=T,n.memoizedState=Ee}}function mh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(t(191,f));f.call(l)}}}var ga={},Ri=or(ga),_a=or(ga),va=or(ga);function Or(n){if(n===ga)throw Error(t(174));return n}function Du(n,i){switch(Ft(va,i),Ft(_a,n),Ft(Ri,ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:bt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=bt(i,n)}Bt(Ri),Ft(Ri,i)}function vs(){Bt(Ri),Bt(_a),Bt(va)}function gh(n){Or(va.current);var i=Or(Ri.current),a=bt(i,n.type);i!==a&&(Ft(_a,n),Ft(Ri,a))}function Iu(n){_a.current===n&&(Bt(Ri),Bt(_a))}var Wt=or(0);function Lo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uu=[];function Fu(){for(var n=0;n<Uu.length;n++)Uu[n]._workInProgressVersionPrimary=null;Uu.length=0}var No=b.ReactCurrentDispatcher,Ou=b.ReactCurrentBatchConfig,Br=0,Xt=null,an=null,dn=null,Do=!1,xa=!1,Sa=0,O0=0;function Tn(){throw Error(t(321))}function Bu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ci(n[a],i[a]))return!1;return!0}function ku(n,i,a,l,f,p){if(Br=p,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,No.current=n===null||n.memoizedState===null?H0:G0,n=a(l,f),xa){p=0;do{if(xa=!1,Sa=0,25<=p)throw Error(t(301));p+=1,dn=an=null,i.updateQueue=null,No.current=V0,n=a(l,f)}while(xa)}if(No.current=Fo,i=an!==null&&an.next!==null,Br=0,dn=an=Xt=null,Do=!1,i)throw Error(t(300));return n}function zu(){var n=Sa!==0;return Sa=0,n}function Ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Xt.memoizedState=dn=n:dn=dn.next=n,dn}function si(){if(an===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var i=dn===null?Xt.memoizedState:dn.next;if(i!==null)dn=i,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},dn===null?Xt.memoizedState=dn=n:dn=dn.next=n}return dn}function Ma(n,i){return typeof i=="function"?i(n):i}function Hu(n){var i=si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=an,f=l.baseQueue,p=a.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}l.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,l=l.baseState;var I=T=null,H=null,ue=p;do{var xe=ue.lane;if((Br&xe)===xe)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),l=ue.hasEagerState?ue.eagerState:n(l,ue.action);else{var Ee={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(I=H=Ee,T=l):H=H.next=Ee,Xt.lanes|=xe,kr|=xe}ue=ue.next}while(ue!==null&&ue!==p);H===null?T=l:H.next=I,ci(l,i.memoizedState)||(Bn=!0),i.memoizedState=l,i.baseState=T,i.baseQueue=H,a.lastRenderedState=l}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Xt.lanes|=p,kr|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Gu(n){var i=si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do p=n(p,T.action),T=T.next;while(T!==f);ci(p,i.memoizedState)||(Bn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function _h(){}function vh(n,i){var a=Xt,l=si(),f=i(),p=!ci(l.memoizedState,f);if(p&&(l.memoizedState=f,Bn=!0),l=l.queue,Vu(Mh.bind(null,a,l,n),[n]),l.getSnapshot!==i||p||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,ya(9,Sh.bind(null,a,l,f,i),void 0,null),hn===null)throw Error(t(349));(Br&30)!==0||xh(a,i,f)}return f}function xh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Sh(n,i,a,l){i.value=a,i.getSnapshot=l,yh(i)&&Eh(n)}function Mh(n,i,a){return a(function(){yh(i)&&Eh(n)})}function yh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ci(n,a)}catch{return!0}}function Eh(n){var i=Gi(n,1);i!==null&&mi(i,n,1,-1)}function Th(n){var i=Ci();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},i.queue=n,n=n.dispatch=z0.bind(null,Xt,n),[i.memoizedState,n]}function ya(n,i,a,l){return n={tag:n,create:i,destroy:a,deps:l,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n)),n}function wh(){return si().memoizedState}function Io(n,i,a,l){var f=Ci();Xt.flags|=n,f.memoizedState=ya(1|i,a,void 0,l===void 0?null:l)}function Uo(n,i,a,l){var f=si();l=l===void 0?null:l;var p=void 0;if(an!==null){var T=an.memoizedState;if(p=T.destroy,l!==null&&Bu(l,T.deps)){f.memoizedState=ya(i,a,p,l);return}}Xt.flags|=n,f.memoizedState=ya(1|i,a,p,l)}function Ah(n,i){return Io(8390656,8,n,i)}function Vu(n,i){return Uo(2048,8,n,i)}function Rh(n,i){return Uo(4,2,n,i)}function Ch(n,i){return Uo(4,4,n,i)}function Ph(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bh(n,i,a){return a=a!=null?a.concat([n]):null,Uo(4,4,Ph.bind(null,i,n),a)}function Wu(){}function Lh(n,i){var a=si();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Bu(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Nh(n,i){var a=si();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Bu(i,l[1])?l[0]:(n=n(),a.memoizedState=[n,i],n)}function Dh(n,i,a){return(Br&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(ci(a,i)||(a=Ct(),Xt.lanes|=a,kr|=a,n.baseState=!0),i)}function B0(n,i){var a=Ke;Ke=a!==0&&4>a?a:4,n(!0);var l=Ou.transition;Ou.transition={};try{n(!1),i()}finally{Ke=a,Ou.transition=l}}function Ih(){return si().memoizedState}function k0(n,i,a){var l=mr(n);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Uh(n))Fh(i,a);else if(a=dh(n,i,a,l),a!==null){var f=Dn();mi(a,n,l,f),Oh(a,i,l)}}function z0(n,i,a){var l=mr(n),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uh(n))Fh(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,I=p(T,a);if(f.hasEagerState=!0,f.eagerState=I,ci(I,T)){var H=i.interleaved;H===null?(f.next=f,Lu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=dh(n,i,f,l),a!==null&&(f=Dn(),mi(a,n,l,f),Oh(a,i,l))}}function Uh(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Fh(n,i){xa=Do=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Oh(n,i,a){if((a&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,rn(n,a)}}var Fo={readContext:ri,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},H0={readContext:ri,useCallback:function(n,i){return Ci().memoizedState=[n,i===void 0?null:i],n},useContext:ri,useEffect:Ah,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Io(4194308,4,Ph.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Io(4194308,4,n,i)},useInsertionEffect:function(n,i){return Io(4,2,n,i)},useMemo:function(n,i){var a=Ci();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var l=Ci();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=k0.bind(null,Xt,n),[l.memoizedState,n]},useRef:function(n){var i=Ci();return n={current:n},i.memoizedState=n},useState:Th,useDebugValue:Wu,useDeferredValue:function(n){return Ci().memoizedState=n},useTransition:function(){var n=Th(!1),i=n[0];return n=B0.bind(null,n[1]),Ci().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var l=Xt,f=Ci();if(Gt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(Br&30)!==0||xh(l,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Ah(Mh.bind(null,l,p,n),[n]),l.flags|=2048,ya(9,Sh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var n=Ci(),i=hn.identifierPrefix;if(Gt){var a=Hi,l=zi;a=(l&~(1<<32-J(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Sa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=O0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},G0={readContext:ri,useCallback:Lh,useContext:ri,useEffect:Vu,useImperativeHandle:bh,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Nh,useReducer:Hu,useRef:wh,useState:function(){return Hu(Ma)},useDebugValue:Wu,useDeferredValue:function(n){var i=si();return Dh(i,an.memoizedState,n)},useTransition:function(){var n=Hu(Ma)[0],i=si().memoizedState;return[n,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Ih,unstable_isNewReconciler:!1},V0={readContext:ri,useCallback:Lh,useContext:ri,useEffect:Vu,useImperativeHandle:bh,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Nh,useReducer:Gu,useRef:wh,useState:function(){return Gu(Ma)},useDebugValue:Wu,useDeferredValue:function(n){var i=si();return an===null?i.memoizedState=n:Dh(i,an.memoizedState,n)},useTransition:function(){var n=Gu(Ma)[0],i=si().memoizedState;return[n,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Ih,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Xu(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Oo={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=mr(n),p=Vi(l,f);p.payload=i,a!=null&&(p.callback=a),i=fr(n,p,f),i!==null&&(mi(i,n,f,l),Po(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=mr(n),p=Vi(l,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=fr(n,p,f),i!==null&&(mi(i,n,f,l),Po(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),l=mr(n),f=Vi(a,l);f.tag=2,i!=null&&(f.callback=i),i=fr(n,f,l),i!==null&&(mi(i,n,l,a),Po(i,n,l))}};function Bh(n,i,a,l,f,p,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,p,T):i.prototype&&i.prototype.isPureReactComponent?!la(a,l)||!la(f,p):!0}function kh(n,i,a){var l=!1,f=lr,p=i.contextType;return typeof p=="object"&&p!==null?p=ri(p):(f=On(i)?Dr:En.current,l=i.contextTypes,p=(l=l!=null)?fs(n,f):lr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oo,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function zh(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&Oo.enqueueReplaceState(i,i.state,null)}function Yu(n,i,a,l){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Nu(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=ri(p):(p=On(i)?Dr:En.current,f.context=fs(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Xu(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oo.enqueueReplaceState(f,f.state,null),bo(n,a,f,l),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function xs(n,i){try{var a="",l=i;do a+=me(l),l=l.return;while(l);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function qu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function $u(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Hh(n,i,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Wo||(Wo=!0,uc=l),$u(n,i)},a}function Gh(n,i,a){a=Vi(-1,a),a.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){$u(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){$u(n,i),typeof l!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Vh(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new W0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),n=r_.bind(null,n,i,a),i.then(n,n))}function Wh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Xh(n,i,a,l,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Vi(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var X0=b.ReactCurrentOwner,Bn=!1;function Nn(n,i,a,l){i.child=n===null?fh(i,null,a,l):ms(i,n.child,a,l)}function Yh(n,i,a,l,f){a=a.render;var p=i.ref;return _s(i,f),l=ku(n,i,a,l,p,f),a=zu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Wi(n,i,f)):(Gt&&a&&yu(i),i.flags|=1,Nn(n,i,l,f),i.child)}function qh(n,i,a,l,f){if(n===null){var p=a.type;return typeof p=="function"&&!gc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,$h(n,i,p,l,f)):(n=Zo(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(T,l)&&n.ref===i.ref)return Wi(n,i,f)}return i.flags|=1,n=_r(p,l),n.ref=i.ref,n.return=i,i.child=n}function $h(n,i,a,l,f){if(n!==null){var p=n.memoizedProps;if(la(p,l)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=l=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,Wi(n,i,f)}return Ku(n,i,a,l,f)}function Kh(n,i,a){var l=i.pendingProps,f=l.children,p=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ms,Zn),Zn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Ms,Zn),Zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Ft(Ms,Zn),Zn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Ft(Ms,Zn),Zn|=l;return Nn(n,i,f,a),i.child}function Zh(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ku(n,i,a,l,f){var p=On(a)?Dr:En.current;return p=fs(i,p),_s(i,f),a=ku(n,i,a,l,p,f),l=zu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Wi(n,i,f)):(Gt&&l&&yu(i),i.flags|=1,Nn(n,i,a,f),i.child)}function Jh(n,i,a,l,f){if(On(a)){var p=!0;Mo(i)}else p=!1;if(_s(i,f),i.stateNode===null)ko(n,i),kh(i,a,l),Yu(i,a,l,f),l=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var H=T.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ri(ue):(ue=On(a)?Dr:En.current,ue=fs(i,ue));var xe=a.getDerivedStateFromProps,Ee=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==l||H!==ue)&&zh(i,T,l,ue),cr=!1;var ve=i.memoizedState;T.state=ve,bo(i,l,T,f),H=i.memoizedState,I!==l||ve!==H||Fn.current||cr?(typeof xe=="function"&&(Xu(i,a,xe,l),H=i.memoizedState),(I=cr||Bh(i,a,I,l,ve,H,ue))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),T.props=l,T.state=H,T.context=ue,l=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{T=i.stateNode,hh(n,i),I=i.memoizedProps,ue=i.type===i.elementType?I:di(i.type,I),T.props=ue,Ee=i.pendingProps,ve=T.context,H=a.contextType,typeof H=="object"&&H!==null?H=ri(H):(H=On(a)?Dr:En.current,H=fs(i,H));var ke=a.getDerivedStateFromProps;(xe=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Ee||ve!==H)&&zh(i,T,l,H),cr=!1,ve=i.memoizedState,T.state=ve,bo(i,l,T,f);var Ye=i.memoizedState;I!==Ee||ve!==Ye||Fn.current||cr?(typeof ke=="function"&&(Xu(i,a,ke,l),Ye=i.memoizedState),(ue=cr||Bh(i,a,ue,l,ve,Ye,H)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,Ye,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,Ye,H)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ye),T.props=l,T.state=Ye,T.context=H,l=ue):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),l=!1)}return Zu(n,i,a,l,p,f)}function Zu(n,i,a,l,f,p){Zh(n,i);var T=(i.flags&128)!==0;if(!l&&!T)return f&&nh(i,a,!1),Wi(n,i,p);l=i.stateNode,X0.current=i;var I=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&T?(i.child=ms(i,n.child,null,p),i.child=ms(i,null,I,p)):Nn(n,i,I,p),i.memoizedState=l.state,f&&nh(i,a,!0),i.child}function Qh(n){var i=n.stateNode;i.pendingContext?eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&eh(n,i.context,!1),Du(n,i.containerInfo)}function jh(n,i,a,l,f){return ps(),Au(f),i.flags|=256,Nn(n,i,a,l),i.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ep(n,i,a){var l=i.pendingProps,f=Wt.current,p=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ft(Wt,f&1),n===null)return wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=l.children,n=l.fallback,p?(l=i.mode,p=i.child,T={mode:"hidden",children:T},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=Jo(T,l,0,null),n=Vr(n,l,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Qu(a),i.memoizedState=Ju,n):ju(i,T));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Y0(n,i,T,l,I,f,a);if(p){p=l.fallback,T=i.mode,f=n.child,I=f.sibling;var H={mode:"hidden",children:l.children};return(T&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=_r(f,H),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?p=_r(I,p):(p=Vr(p,T,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,T=n.child.memoizedState,T=T===null?Qu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=n.childLanes&~a,i.memoizedState=Ju,l}return p=n.child,n=p.sibling,l=_r(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=l,i.memoizedState=null,l}function ju(n,i){return i=Jo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Bo(n,i,a,l){return l!==null&&Au(l),ms(i,n.child,null,a),n=ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Y0(n,i,a,l,f,p,T){if(a)return i.flags&256?(i.flags&=-257,l=qu(Error(t(422))),Bo(n,i,T,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=Jo({mode:"visible",children:l.children},f,0,null),p=Vr(p,f,T,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ms(i,n.child,null,T),i.child.memoizedState=Qu(T),i.memoizedState=Ju,p);if((i.mode&1)===0)return Bo(n,i,T,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(t(419)),l=qu(p,l,void 0),Bo(n,i,T,l)}if(I=(T&n.childLanes)!==0,Bn||I){if(l=hn,l!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Gi(n,f),mi(l,n,f,-1))}return mc(),l=qu(Error(t(421))),Bo(n,i,T,l)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=s_.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Kn=ar(f.nextSibling),$n=i,Gt=!0,fi=null,n!==null&&(ni[ii++]=zi,ni[ii++]=Hi,ni[ii++]=Ir,zi=n.id,Hi=n.overflow,Ir=i),i=ju(i,l.children),i.flags|=4096,i)}function tp(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),bu(n.return,i,a)}function ec(n,i,a,l,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=f)}function np(n,i,a){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(Nn(n,i,l.children,a),l=Wt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tp(n,a,i);else if(n.tag===19)tp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(Ft(Wt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Lo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ec(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Lo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}ec(i,!0,a,null,p);break;case"together":ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ko(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function q0(n,i,a){switch(i.tag){case 3:Qh(i),ps();break;case 5:gh(i);break;case 1:On(i.type)&&Mo(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ft(Ro,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ep(n,i,a):(Ft(Wt,Wt.current&1),n=Wi(n,i,a),n!==null?n.sibling:null);Ft(Wt,Wt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(n.flags&128)!==0){if(l)return np(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ft(Wt,Wt.current),l)break;return null;case 22:case 23:return i.lanes=0,Kh(n,i,a)}return Wi(n,i,a)}var ip,tc,rp,sp;ip=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},tc=function(){},rp=function(n,i,a,l){var f=n.memoizedProps;if(f!==l){n=i.stateNode,Or(Ri.current);var p=null;switch(a){case"input":f=ct(n,f),l=ct(n,l),p=[];break;case"select":f=$({},f,{value:void 0}),l=$({},l,{value:void 0}),p=[];break;case"textarea":f=Mn(n,f),l=Mn(n,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=vo)}pe(a,l);var T;a=null;for(ue in f)if(!l.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var I=f[ue];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?p||(p=[]):(p=p||[]).push(ue,null));for(ue in l){var H=l[ue];if(I=f?.[ue],l.hasOwnProperty(ue)&&H!==I&&(H!=null||I!=null))if(ue==="style")if(I){for(T in I)!I.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in H)H.hasOwnProperty(T)&&I[T]!==H[T]&&(a||(a={}),a[T]=H[T])}else a||(p||(p=[]),p.push(ue,a)),a=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(p=p||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Ot("scroll",n),p||I===H||(p=[])):(p=p||[]).push(ue,H))}a&&(p=p||[]).push("style",a);var ue=p;(i.updateQueue=ue)&&(i.flags|=4)}},sp=function(n,i,a,l){a!==l&&(i.flags|=4)};function Ea(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function $0(n,i,a){var l=i.pendingProps;switch(Eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return On(i.type)&&So(),wn(i),null;case 3:return l=i.stateNode,vs(),Bt(Fn),Bt(En),Fu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(wo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(dc(fi),fi=null))),tc(n,i),wn(i),null;case 5:Iu(i);var f=Or(va.current);if(a=i.type,n!==null&&i.stateNode!=null)rp(n,i,a,l,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=Or(Ri.current),wo(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[Ai]=i,l[ha]=p,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(f=0;f<ca.length;f++)Ot(ca[f],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":jt(l,p),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ot("invalid",l);break;case"textarea":bn(l,p),Ot("invalid",l)}pe(a,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var I=p[T];T==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&_o(l.textContent,I,n),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&_o(l.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Ot("scroll",l)}switch(a){case"input":je(l),Ut(l,p,!0);break;case"textarea":je(l),Ln(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=vo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Nt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=T.createElement(a,{is:l.is}):(n=T.createElement(a),a==="select"&&(T=n,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):n=T.createElementNS(n,a),n[Ai]=i,n[ha]=l,ip(n,i,!1,!1),i.stateNode=n;e:{switch(T=Re(a,l),a){case"dialog":Ot("cancel",n),Ot("close",n),f=l;break;case"iframe":case"object":case"embed":Ot("load",n),f=l;break;case"video":case"audio":for(f=0;f<ca.length;f++)Ot(ca[f],n);f=l;break;case"source":Ot("error",n),f=l;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),f=l;break;case"details":Ot("toggle",n),f=l;break;case"input":jt(n,l),f=ct(n,l),Ot("invalid",n);break;case"option":f=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},f=$({},l,{value:void 0}),Ot("invalid",n);break;case"textarea":bn(n,l),f=Mn(n,l),Ot("invalid",n);break;default:f=l}pe(a,f),I=f;for(p in I)if(I.hasOwnProperty(p)){var H=I[p];p==="style"?ee(n,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&qt(n,H)):p==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Qe(n,H):typeof H=="number"&&Qe(n,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Ot("scroll",n):H!=null&&O(n,p,H,T))}switch(a){case"input":je(n),Ut(n,l,!1);break;case"textarea":je(n),Ln(n);break;case"option":l.value!=null&&n.setAttribute("value",""+_e(l.value));break;case"select":n.multiple=!!l.multiple,p=l.value,p!=null?nn(n,!!l.multiple,p,!1):l.defaultValue!=null&&nn(n,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=vo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)sp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(a=Or(va.current),Or(Ri.current),wo(i)){if(l=i.stateNode,a=i.memoizedProps,l[Ai]=i,(p=l.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:_o(l.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_o(l.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ai]=i,i.stateNode=l}return wn(i),null;case 13:if(Bt(Wt),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lh(),ps(),i.flags|=98560,p=!1;else if(p=wo(i),l!==null&&l.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Ai]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),p=!1}else fi!==null&&(dc(fi),fi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?on===0&&(on=3):mc())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return vs(),tc(n,i),n===null&&fa(i.stateNode.containerInfo),wn(i),null;case 10:return Pu(i.type._context),wn(i),null;case 17:return On(i.type)&&So(),wn(i),null;case 19:if(Bt(Wt),p=i.memoizedState,p===null)return wn(i),null;if(l=(i.flags&128)!==0,T=p.rendering,T===null)if(l)Ea(p,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Lo(n),T!==null){for(i.flags|=128,Ea(p,!1),l=T.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,n=l,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,n=T.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Wt,Wt.current&1|2),i.child}n=n.sibling}p.tail!==null&&zt()>ys&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304)}else{if(!l)if(n=Lo(T),n!==null){if(i.flags|=128,l=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Gt)return wn(i),null}else 2*zt()-p.renderingStartTime>ys&&a!==1073741824&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=zt(),i.sibling=null,a=Wt.current,Ft(Wt,l?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return pc(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function K0(n,i){switch(Eu(i),i.tag){case 1:return On(i.type)&&So(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return vs(),Bt(Fn),Bt(En),Fu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Iu(i),null;case 13:if(Bt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ps()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Bt(Wt),null;case 4:return vs(),null;case 10:return Pu(i.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var zo=!1,An=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ss(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Kt(n,i,l)}else a.current=null}function nc(n,i,a){try{a()}catch(l){Kt(n,i,l)}}var ap=!1;function J0(n,i){if(pu=so,n=Bd(),au(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,I=-1,H=-1,ue=0,xe=0,Ee=n,ve=null;t:for(;;){for(var ke;Ee!==a||f!==0&&Ee.nodeType!==3||(I=T+f),Ee!==p||l!==0&&Ee.nodeType!==3||(H=T+l),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(ke=Ee.firstChild)!==null;)ve=Ee,Ee=ke;for(;;){if(Ee===n)break t;if(ve===a&&++ue===f&&(I=T),ve===p&&++xe===l&&(H=T),(ke=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=ke}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(mu={focusedElem:n,selectionRange:a},so=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var qe=Ye.memoizedProps,Jt=Ye.memoizedState,te=i.stateNode,G=te.getSnapshotBeforeUpdate(i.elementType===i.type?qe:di(i.type,qe),Jt);te.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Kt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Ye=ap,ap=!1,Ye}function Ta(n,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&nc(i,a,p)}f=f.next}while(f!==l)}}function Ho(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function ic(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function op(n){var i=n.alternate;i!==null&&(n.alternate=null,op(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ai],delete i[ha],delete i[xu],delete i[D0],delete i[I0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lp(n){return n.tag===5||n.tag===3||n.tag===4}function up(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vo));else if(l!==4&&(n=n.child,n!==null))for(rc(n,i,a),n=n.sibling;n!==null;)rc(n,i,a),n=n.sibling}function sc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(sc(n,i,a),n=n.sibling;n!==null;)sc(n,i,a),n=n.sibling}var vn=null,hi=!1;function dr(n,i,a){for(a=a.child;a!==null;)cp(n,i,a),a=a.sibling}function cp(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(k,a)}catch{}switch(a.tag){case 5:An||Ss(a,i);case 6:var l=vn,f=hi;vn=null,dr(n,i,a),vn=l,hi=f,vn!==null&&(hi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(hi?(n=vn,a=a.stateNode,n.nodeType===8?vu(n.parentNode,a):n.nodeType===1&&vu(n,a),na(n)):vu(vn,a.stateNode));break;case 4:l=vn,f=hi,vn=a.stateNode.containerInfo,hi=!0,dr(n,i,a),vn=l,hi=f;break;case 0:case 11:case 14:case 15:if(!An&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&nc(a,i,T),f=f.next}while(f!==l)}dr(n,i,a);break;case 1:if(!An&&(Ss(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Kt(a,i,I)}dr(n,i,a);break;case 21:dr(n,i,a);break;case 22:a.mode&1?(An=(l=An)||a.memoizedState!==null,dr(n,i,a),An=l):dr(n,i,a);break;default:dr(n,i,a)}}function fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Z0),i.forEach(function(l){var f=a_.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}}function pi(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var p=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:vn=I.stateNode,hi=!1;break e;case 3:vn=I.stateNode.containerInfo,hi=!0;break e;case 4:vn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(vn===null)throw Error(t(160));cp(p,T,f),vn=null,hi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ue){Kt(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,n),i=i.sibling}function dp(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),Pi(n),l&4){try{Ta(3,n,n.return),Ho(3,n)}catch(qe){Kt(n,n.return,qe)}try{Ta(5,n,n.return)}catch(qe){Kt(n,n.return,qe)}}break;case 1:pi(i,n),Pi(n),l&512&&a!==null&&Ss(a,a.return);break;case 5:if(pi(i,n),Pi(n),l&512&&a!==null&&Ss(a,a.return),n.flags&32){var f=n.stateNode;try{Qe(f,"")}catch(qe){Kt(n,n.return,qe)}}if(l&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,T=a!==null?a.memoizedProps:p,I=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Yt(f,p),Re(I,T);var ue=Re(I,p);for(T=0;T<H.length;T+=2){var xe=H[T],Ee=H[T+1];xe==="style"?ee(f,Ee):xe==="dangerouslySetInnerHTML"?qt(f,Ee):xe==="children"?Qe(f,Ee):O(f,xe,Ee,ue)}switch(I){case"input":cn(f,p);break;case"textarea":W(f,p);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var ke=p.value;ke!=null?nn(f,!!p.multiple,ke,!1):ve!==!!p.multiple&&(p.defaultValue!=null?nn(f,!!p.multiple,p.defaultValue,!0):nn(f,!!p.multiple,p.multiple?[]:"",!1))}f[ha]=p}catch(qe){Kt(n,n.return,qe)}}break;case 6:if(pi(i,n),Pi(n),l&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(qe){Kt(n,n.return,qe)}}break;case 3:if(pi(i,n),Pi(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{na(i.containerInfo)}catch(qe){Kt(n,n.return,qe)}break;case 4:pi(i,n),Pi(n);break;case 13:pi(i,n),Pi(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(lc=zt())),l&4&&fp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(An=(ue=An)||xe,pi(i,n),An=ue):pi(i,n),Pi(n),l&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(Ee=Ge=xe;Ge!==null;){switch(ve=Ge,ke=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ta(4,ve,ve.return);break;case 1:Ss(ve,ve.return);var Ye=ve.stateNode;if(typeof Ye.componentWillUnmount=="function"){l=ve,a=ve.return;try{i=l,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(qe){Kt(l,a,qe)}}break;case 5:Ss(ve,ve.return);break;case 22:if(ve.memoizedState!==null){mp(Ee);continue}}ke!==null?(ke.return=ve,Ge=ke):mp(Ee)}xe=xe.sibling}e:for(xe=null,Ee=n;;){if(Ee.tag===5){if(xe===null){xe=Ee;try{f=Ee.stateNode,ue?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Ee.stateNode,H=Ee.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=w("display",T))}catch(qe){Kt(n,n.return,qe)}}}else if(Ee.tag===6){if(xe===null)try{Ee.stateNode.nodeValue=ue?"":Ee.memoizedProps}catch(qe){Kt(n,n.return,qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;xe===Ee&&(xe=null),Ee=Ee.return}xe===Ee&&(xe=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:pi(i,n),Pi(n),l&4&&fp(n);break;case 21:break;default:pi(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(lp(a)){var l=a;break e}a=a.return}throw Error(t(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Qe(f,""),l.flags&=-33);var p=up(n);sc(n,p,f);break;case 3:case 4:var T=l.stateNode.containerInfo,I=up(n);rc(n,I,T);break;default:throw Error(t(161))}}catch(H){Kt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Q0(n,i,a){Ge=n,hp(n)}function hp(n,i,a){for(var l=(n.mode&1)!==0;Ge!==null;){var f=Ge,p=f.child;if(f.tag===22&&l){var T=f.memoizedState!==null||zo;if(!T){var I=f.alternate,H=I!==null&&I.memoizedState!==null||An;I=zo;var ue=An;if(zo=T,(An=H)&&!ue)for(Ge=f;Ge!==null;)T=Ge,H=T.child,T.tag===22&&T.memoizedState!==null?gp(f):H!==null?(H.return=T,Ge=H):gp(f);for(;p!==null;)Ge=p,hp(p),p=p.sibling;Ge=f,zo=I,An=ue}pp(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Ge=p):pp(n)}}function pp(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||Ho(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!An)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&mh(i,p,l);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mh(i,T,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var Ee=xe.dehydrated;Ee!==null&&na(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&ic(i)}catch(ve){Kt(i,i.return,ve)}}if(i===n){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function mp(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function gp(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(H){Kt(i,a,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(H){Kt(i,f,H)}}var p=i.return;try{ic(i)}catch(H){Kt(i,p,H)}break;case 5:var T=i.return;try{ic(i)}catch(H){Kt(i,T,H)}}}catch(H){Kt(i,i.return,H)}if(i===n){Ge=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ge=I;break}Ge=i.return}}var j0=Math.ceil,Go=b.ReactCurrentDispatcher,ac=b.ReactCurrentOwner,ai=b.ReactCurrentBatchConfig,Mt=0,hn=null,en=null,xn=0,Zn=0,Ms=or(0),on=0,wa=null,kr=0,Vo=0,oc=0,Aa=null,kn=null,lc=0,ys=1/0,Xi=null,Wo=!1,uc=null,hr=null,Xo=!1,pr=null,Yo=0,Ra=0,cc=null,qo=-1,$o=0;function Dn(){return(Mt&6)!==0?zt():qo!==-1?qo:qo=zt()}function mr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&xn!==0?xn&-xn:F0.transition!==null?($o===0&&($o=Ct()),$o):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:vd(n.type)),n)}function mi(n,i,a,l){if(50<Ra)throw Ra=0,cc=null,Error(t(185));$t(n,a,l),((Mt&2)===0||n!==hn)&&(n===hn&&((Mt&2)===0&&(Vo|=a),on===4&&gr(n,xn)),zn(n,l),a===1&&Mt===0&&(i.mode&1)===0&&(ys=zt()+500,yo&&ur()))}function zn(n,i){var a=n.callbackNode;dt(n,i);var l=ut(n,n===hn?xn:0);if(l===0)a!==null&&Js(a),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(a!=null&&Js(a),i===1)n.tag===0?U0(vp.bind(null,n)):ih(vp.bind(null,n)),L0(function(){(Mt&6)===0&&ur()}),a=null;else{switch(Ti(l)){case 1:a=Qs;break;case 4:a=no;break;case 16:a=ts;break;case 536870912:a=A;break;default:a=ts}a=Ap(a,_p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function _p(n,i){if(qo=-1,$o=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Es()&&n.callbackNode!==a)return null;var l=ut(n,n===hn?xn:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=Ko(n,l);else{i=l;var f=Mt;Mt|=2;var p=Sp();(hn!==n||xn!==i)&&(Xi=null,ys=zt()+500,Hr(n,i));do try{n_();break}catch(I){xp(n,I)}while(!0);Cu(),Go.current=p,Mt=f,en!==null?i=0:(hn=null,xn=0,i=on)}if(i!==0){if(i===2&&(f=Ht(n),f!==0&&(l=f,i=fc(n,f))),i===1)throw a=wa,Hr(n,0),gr(n,l),zn(n,zt()),a;if(i===6)gr(n,l);else{if(f=n.current.alternate,(l&30)===0&&!e_(f)&&(i=Ko(n,l),i===2&&(p=Ht(n),p!==0&&(l=p,i=fc(n,p))),i===1))throw a=wa,Hr(n,0),gr(n,l),zn(n,zt()),a;switch(n.finishedWork=f,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,kn,Xi);break;case 3:if(gr(n,l),(l&130023424)===l&&(i=lc+500-zt(),10<i)){if(ut(n,0)!==0)break;if(f=n.suspendedLanes,(f&l)!==l){Dn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=_u(Gr.bind(null,n,kn,Xi),i);break}Gr(n,kn,Xi);break;case 4:if(gr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,f=-1;0<l;){var T=31-J(l);p=1<<T,T=i[T],T>f&&(f=T),l&=~p}if(l=f,l=zt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*j0(l/1960))-l,10<l){n.timeoutHandle=_u(Gr.bind(null,n,kn,Xi),l);break}Gr(n,kn,Xi);break;case 5:Gr(n,kn,Xi);break;default:throw Error(t(329))}}}return zn(n,zt()),n.callbackNode===a?_p.bind(null,n):null}function fc(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=Ko(n,i),n!==2&&(i=kn,kn=a,i!==null&&dc(i)),n}function dc(n){kn===null?kn=n:kn.push.apply(kn,n)}function e_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],p=f.getSnapshot;f=f.value;try{if(!ci(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~oc,i&=~Vo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-J(i),l=1<<a;n[a]=-1,i&=~l}}function vp(n){if((Mt&6)!==0)throw Error(t(327));Es();var i=ut(n,0);if((i&1)===0)return zn(n,zt()),null;var a=Ko(n,i);if(n.tag!==0&&a===2){var l=Ht(n);l!==0&&(i=l,a=fc(n,l))}if(a===1)throw a=wa,Hr(n,0),gr(n,i),zn(n,zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,kn,Xi),zn(n,zt()),null}function hc(n,i){var a=Mt;Mt|=1;try{return n(i)}finally{Mt=a,Mt===0&&(ys=zt()+500,yo&&ur())}}function zr(n){pr!==null&&pr.tag===0&&(Mt&6)===0&&Es();var i=Mt;Mt|=1;var a=ai.transition,l=Ke;try{if(ai.transition=null,Ke=1,n)return n()}finally{Ke=l,ai.transition=a,Mt=i,(Mt&6)===0&&ur()}}function pc(){Zn=Ms.current,Bt(Ms)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,b0(a)),en!==null)for(a=en.return;a!==null;){var l=a;switch(Eu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&So();break;case 3:vs(),Bt(Fn),Bt(En),Fu();break;case 5:Iu(l);break;case 4:vs();break;case 13:Bt(Wt);break;case 19:Bt(Wt);break;case 10:Pu(l.type._context);break;case 22:case 23:pc()}a=a.return}if(hn=n,en=n=_r(n.current,null),xn=Zn=i,on=0,wa=null,oc=Vo=kr=0,kn=Aa=null,Fr!==null){for(i=0;i<Fr.length;i++)if(a=Fr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,p=a.pending;if(p!==null){var T=p.next;p.next=f,l.next=T}a.pending=l}Fr=null}return n}function xp(n,i){do{var a=en;try{if(Cu(),No.current=Fo,Do){for(var l=Xt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Do=!1}if(Br=0,dn=an=Xt=null,xa=!1,Sa=0,ac.current=null,a===null||a.return===null){on=1,wa=i,en=null;break}e:{var p=n,T=a.return,I=a,H=i;if(i=xn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,xe=I,Ee=xe.tag;if((xe.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ke=Wh(T);if(ke!==null){ke.flags&=-257,Xh(ke,T,I,p,i),ke.mode&1&&Vh(p,ue,i),i=ke,H=ue;var Ye=i.updateQueue;if(Ye===null){var qe=new Set;qe.add(H),i.updateQueue=qe}else Ye.add(H);break e}else{if((i&1)===0){Vh(p,ue,i),mc();break e}H=Error(t(426))}}else if(Gt&&I.mode&1){var Jt=Wh(T);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Xh(Jt,T,I,p,i),Au(xs(H,I));break e}}p=H=xs(H,I),on!==4&&(on=2),Aa===null?Aa=[p]:Aa.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var te=Hh(p,H,i);ph(p,te);break e;case 1:I=H;var G=p.type,ae=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(hr===null||!hr.has(ae)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=Gh(p,I,i);ph(p,Ae);break e}}p=p.return}while(p!==null)}yp(a)}catch(Ze){i=Ze,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function Sp(){var n=Go.current;return Go.current=Fo,n===null?Fo:n}function mc(){(on===0||on===3||on===2)&&(on=4),hn===null||(kr&268435455)===0&&(Vo&268435455)===0||gr(hn,xn)}function Ko(n,i){var a=Mt;Mt|=2;var l=Sp();(hn!==n||xn!==i)&&(Xi=null,Hr(n,i));do try{t_();break}catch(f){xp(n,f)}while(!0);if(Cu(),Mt=a,Go.current=l,en!==null)throw Error(t(261));return hn=null,xn=0,on}function t_(){for(;en!==null;)Mp(en)}function n_(){for(;en!==null&&!Lr();)Mp(en)}function Mp(n){var i=wp(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,i===null?yp(n):en=i,ac.current=null}function yp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$0(a,i,Zn),a!==null){en=a;return}}else{if(a=K0(a,i),a!==null){a.flags&=32767,en=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=n}while(i!==null);on===0&&(on=5)}function Gr(n,i,a){var l=Ke,f=ai.transition;try{ai.transition=null,Ke=1,i_(n,i,a,l)}finally{ai.transition=f,Ke=l}return null}function i_(n,i,a,l){do Es();while(pr!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Xe(n,p),n===hn&&(en=hn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xo||(Xo=!0,Ap(ts,function(){return Es(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=ai.transition,ai.transition=null;var T=Ke;Ke=1;var I=Mt;Mt|=4,ac.current=null,J0(n,a),dp(a,n),E0(mu),so=!!pu,mu=pu=null,n.current=a,Q0(a),$l(),Mt=I,Ke=T,ai.transition=p}else n.current=a;if(Xo&&(Xo=!1,pr=n,Yo=f),p=n.pendingLanes,p===0&&(hr=null),j(a.stateNode),zn(n,zt()),i!==null)for(l=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Wo)throw Wo=!1,n=uc,uc=null,n;return(Yo&1)!==0&&n.tag!==0&&Es(),p=n.pendingLanes,(p&1)!==0?n===cc?Ra++:(Ra=0,cc=n):Ra=0,ur(),null}function Es(){if(pr!==null){var n=Ti(Yo),i=ai.transition,a=Ke;try{if(ai.transition=null,Ke=16>n?16:n,pr===null)var l=!1;else{if(n=pr,pr=null,Yo=0,(Mt&6)!==0)throw Error(t(331));var f=Mt;for(Mt|=4,Ge=n.current;Ge!==null;){var p=Ge,T=p.child;if((Ge.flags&16)!==0){var I=p.deletions;if(I!==null){for(var H=0;H<I.length;H++){var ue=I[H];for(Ge=ue;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:Ta(8,xe,p)}var Ee=xe.child;if(Ee!==null)Ee.return=xe,Ge=Ee;else for(;Ge!==null;){xe=Ge;var ve=xe.sibling,ke=xe.return;if(op(xe),xe===ue){Ge=null;break}if(ve!==null){ve.return=ke,Ge=ve;break}Ge=ke}}}var Ye=p.alternate;if(Ye!==null){var qe=Ye.child;if(qe!==null){Ye.child=null;do{var Jt=qe.sibling;qe.sibling=null,qe=Jt}while(qe!==null)}}Ge=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,Ge=T;else e:for(;Ge!==null;){if(p=Ge,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ta(9,p,p.return)}var te=p.sibling;if(te!==null){te.return=p.return,Ge=te;break e}Ge=p.return}}var G=n.current;for(Ge=G;Ge!==null;){T=Ge;var ae=T.child;if((T.subtreeFlags&2064)!==0&&ae!==null)ae.return=T,Ge=ae;else e:for(T=G;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ho(9,I)}}catch(Ze){Kt(I,I.return,Ze)}if(I===T){Ge=null;break e}var Ae=I.sibling;if(Ae!==null){Ae.return=I.return,Ge=Ae;break e}Ge=I.return}}if(Mt=f,ur(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(k,n)}catch{}l=!0}return l}finally{Ke=a,ai.transition=i}}return!1}function Ep(n,i,a){i=xs(a,i),i=Hh(n,i,1),n=fr(n,i,1),i=Dn(),n!==null&&($t(n,1,i),zn(n,i))}function Kt(n,i,a){if(n.tag===3)Ep(n,n,a);else for(;i!==null;){if(i.tag===3){Ep(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hr===null||!hr.has(l))){n=xs(a,n),n=Gh(i,n,1),i=fr(i,n,1),n=Dn(),i!==null&&($t(i,1,n),zn(i,n));break}}i=i.return}}function r_(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),i=Dn(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(xn&a)===a&&(on===4||on===3&&(xn&130023424)===xn&&500>zt()-lc?Hr(n,0):oc|=a),zn(n,i)}function Tp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var a=Dn();n=Gi(n,i),n!==null&&($t(n,i,a),zn(n,a))}function s_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Tp(n,a)}function a_(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Tp(n,a)}var wp;wp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,q0(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Gt&&(i.flags&1048576)!==0&&rh(i,To,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ko(n,i),n=i.pendingProps;var f=fs(i,En.current);_s(i,a),f=ku(null,i,l,n,f,a);var p=zu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(l)?(p=!0,Mo(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nu(i),f.updater=Oo,i.stateNode=f,f._reactInternals=i,Yu(i,l,n,a),i=Zu(null,i,l,!0,p,a)):(i.tag=0,Gt&&p&&yu(i),Nn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(ko(n,i),n=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=l_(l),n=di(l,n),f){case 0:i=Ku(null,i,l,n,a);break e;case 1:i=Jh(null,i,l,n,a);break e;case 11:i=Yh(null,i,l,n,a);break e;case 14:i=qh(null,i,l,di(l.type,n),a);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:di(l,f),Ku(n,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:di(l,f),Jh(n,i,l,f,a);case 3:e:{if(Qh(i),n===null)throw Error(t(387));l=i.pendingProps,p=i.memoizedState,f=p.element,hh(n,i),bo(i,l,null,a);var T=i.memoizedState;if(l=T.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=xs(Error(t(423)),i),i=jh(n,i,l,a,f);break e}else if(l!==f){f=xs(Error(t(424)),i),i=jh(n,i,l,a,f);break e}else for(Kn=ar(i.stateNode.containerInfo.firstChild),$n=i,Gt=!0,fi=null,a=fh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),l===f){i=Wi(n,i,a);break e}Nn(n,i,l,a)}i=i.child}return i;case 5:return gh(i),n===null&&wu(i),l=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,T=f.children,gu(l,f)?T=null:p!==null&&gu(l,p)&&(i.flags|=32),Zh(n,i),Nn(n,i,T,a),i.child;case 6:return n===null&&wu(i),null;case 13:return ep(n,i,a);case 4:return Du(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=ms(i,null,l,a):Nn(n,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:di(l,f),Yh(n,i,l,f,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Ft(Ro,l._currentValue),l._currentValue=T,p!==null)if(ci(p.value,T)){if(p.children===f.children&&!Fn.current){i=Wi(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){T=p.child;for(var H=I.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Vi(-1,a&-a),H.tag=2;var ue=p.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),ue.pending=H}}p.lanes|=a,H=p.alternate,H!==null&&(H.lanes|=a),bu(p.return,a,i),I.lanes|=a;break}H=H.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),bu(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}Nn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,_s(i,a),f=ri(f),l=l(f),i.flags|=1,Nn(n,i,l,a),i.child;case 14:return l=i.type,f=di(l,i.pendingProps),f=di(l.type,f),qh(n,i,l,f,a);case 15:return $h(n,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:di(l,f),ko(n,i),i.tag=1,On(l)?(n=!0,Mo(i)):n=!1,_s(i,a),kh(i,l,f),Yu(i,l,f,a),Zu(null,i,l,!0,n,a);case 19:return np(n,i,a);case 22:return Kh(n,i,a)}throw Error(t(156,i.tag))};function Ap(n,i){return Zs(n,i)}function o_(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,i,a,l){return new o_(n,i,a,l)}function gc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l_(n){if(typeof n=="function")return gc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===re)return 14}return 2}function _r(n,i){var a=n.alternate;return a===null?(a=oi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Zo(n,i,a,l,f,p){var T=2;if(l=n,typeof n=="function")gc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case y:return Vr(a.children,f,p,i);case C:T=8,f|=8;break;case q:return n=oi(12,a,i,f|2),n.elementType=q,n.lanes=p,n;case oe:return n=oi(13,a,i,f),n.elementType=oe,n.lanes=p,n;case B:return n=oi(19,a,i,f),n.elementType=B,n.lanes=p,n;case X:return Jo(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:T=10;break e;case V:T=9;break e;case K:T=11;break e;case re:T=14;break e;case Z:T=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=oi(T,a,i,f),i.elementType=n,i.type=l,i.lanes=p,i}function Vr(n,i,a,l){return n=oi(7,n,l,i),n.lanes=a,n}function Jo(n,i,a,l){return n=oi(22,n,l,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function _c(n,i,a){return n=oi(6,n,null,i),n.lanes=a,n}function vc(n,i,a){return i=oi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function u_(n,i,a,l,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=At(0),this.expirationTimes=At(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xc(n,i,a,l,f,p,T,I,H){return n=new u_(n,i,a,I,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=oi(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(p),n}function c_(n,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:l==null?null:""+l,children:n,containerInfo:i,implementation:a}}function Rp(n){if(!n)return lr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(On(a))return th(n,a,i)}return i}function Cp(n,i,a,l,f,p,T,I,H){return n=xc(a,l,!0,n,f,p,T,I,H),n.context=Rp(null),a=n.current,l=Dn(),f=mr(a),p=Vi(l,f),p.callback=i??null,fr(a,p,f),n.current.lanes=f,$t(n,f,l),zn(n,l),n}function Qo(n,i,a,l){var f=i.current,p=Dn(),T=mr(f);return a=Rp(a),i.context===null?i.context=a:i.pendingContext=a,i=Vi(p,T),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=fr(f,i,T),n!==null&&(mi(n,f,T,p),Po(n,f,T)),T}function jo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Sc(n,i){Pp(n,i),(n=n.alternate)&&Pp(n,i)}function f_(){return null}var bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mc(n){this._internalRoot=n}el.prototype.render=Mc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qo(n,i,null,null)},el.prototype.unmount=Mc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){Qo(null,n,null,null)}),i[Bi]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=wi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,n),a===0&&gd(n)}};function yc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function d_(n,i,a,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var ue=jo(T);p.call(ue)}}var T=Cp(i,l,n,0,null,!1,!1,"",Lp);return n._reactRootContainer=T,n[Bi]=T.current,fa(n.nodeType===8?n.parentNode:n),zr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var ue=jo(H);I.call(ue)}}var H=xc(n,0,!1,null,null,!1,!1,"",Lp);return n._reactRootContainer=H,n[Bi]=H.current,fa(n.nodeType===8?n.parentNode:n),zr(function(){Qo(i,H,a,l)}),H}function nl(n,i,a,l,f){var p=a._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var I=f;f=function(){var H=jo(T);I.call(H)}}Qo(i,T,n,f)}else T=d_(a,i,n,f,l);return jo(T)}sn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=it(i.pendingLanes);a!==0&&(rn(i,a|1),zn(i,zt()),(Mt&6)===0&&(ys=zt()+500,ur()))}break;case 13:zr(function(){var l=Gi(n,1);if(l!==null){var f=Dn();mi(l,n,1,f)}}),Sc(n,1)}},tr=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=Dn();mi(i,n,134217728,a)}Sc(n,134217728)}},ui=function(n){if(n.tag===13){var i=mr(n),a=Gi(n,i);if(a!==null){var l=Dn();mi(a,n,i,l)}Sc(n,i)}},wi=function(){return Ke},pt=function(n,i){var a=Ke;try{return Ke=n,i()}finally{Ke=a}},de=function(n,i,a){switch(i){case"input":if(cn(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=xo(l);if(!f)throw Error(t(90));yt(l),cn(l,f)}}}break;case"textarea":W(n,a);break;case"select":i=a.value,i!=null&&nn(n,!!a.multiple,i,!1)}},Te=hc,Ce=zr;var h_={usingClientEntryPoint:!1,Events:[pa,us,xo,ce,Pe,hc]},Ca={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p_={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ks(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{k=il.inject(p_),se=il}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(i))throw Error(t(200));return c_(n,i,null,a)},Hn.createRoot=function(n,i){if(!yc(n))throw Error(t(299));var a=!1,l="",f=bp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xc(n,1,!1,null,null,a,!1,l,f),n[Bi]=i.current,fa(n.nodeType===8?n.parentNode:n),new Mc(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ks(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return zr(n)},Hn.hydrate=function(n,i,a){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!yc(n))throw Error(t(405));var l=a!=null&&a.hydratedSources||null,f=!1,p="",T=bp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Cp(i,null,n,1,a??null,f,!1,p,T),n[Bi]=i.current,fa(n),l)for(n=0;n<l.length;n++)a=l[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new el(i)},Hn.render=function(n,i,a){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},Hn.unstable_batchedUpdates=hc,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,l){if(!tl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,a,!1,l)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var kp;function T_(){if(kp)return wc.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wc.exports=E_(),wc.exports}var zp;function w_(){if(zp)return rl;zp=1;var s=T_();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var A_=w_();const R_="ws://127.0.0.1:8787";function C_(){const[s,e]=Lt.useState(null),[t,r]=Lt.useState(null),[o,u]=Lt.useState(!1),[c,d]=Lt.useState(""),m=Lt.useRef(null),h=Lt.useRef(null),v=Lt.useCallback(E=>{const R=new WebSocket(R_);return m.current=R,R.onopen=()=>{u(!0),E?.(R)},R.onclose=()=>u(!1),R.onmessage=_=>{const x=JSON.parse(_.data);x.type==="state"&&e(x.room),x.type==="joined"&&(r(x.seat),h.current=x.seat,localStorage.setItem("pc-session",JSON.stringify({code:x.code,token:x.token}))),x.type==="error"&&d(String(x.message))},R},[]);Lt.useEffect(()=>{let E=null;try{E=JSON.parse(localStorage.getItem("pc-session")||"null")}catch{}const R=v(_=>{E&&_.send(JSON.stringify({type:"resume",code:E.code,token:E.token}))});return()=>R.close()},[v]);const S=Lt.useCallback(E=>{m.current?.readyState===WebSocket.OPEN?m.current.send(JSON.stringify(E)):d("Backend offline — start the WebSocket server.")},[]),g=Lt.useCallback((E,R)=>{localStorage.removeItem("pc-session"),v(_=>_.send(JSON.stringify({type:"create",name:E,bestOf:R})))},[v]),M=Lt.useCallback((E,R)=>{localStorage.removeItem("pc-session"),v(_=>_.send(JSON.stringify({type:"join",code:E.toUpperCase(),name:R})))},[v]);return{room:s,seat:t??h.current,connected:o,error:c,create:g,join:M,send:S,setError:d}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="187",P_=0,Hp=1,b_=2,bl=1,L_=2,Ba=3,$r=0,Wn=1,Ji=2,Bs=0,Ha=1,Gp=2,Vp=3,Wp=4,N_=5,Os=100,D_=101,I_=102,U_=103,F_=104,O_=200,B_=201,k_=202,z_=203,Vm=204,Wm=205,H_=206,G_=207,V_=208,W_=209,X_=210,Y_=211,q_=212,$_=213,K_=214,rf=0,sf=1,af=2,Wa=3,of=4,lf=5,uf=6,cf=7,Xm=0,Z_=1,J_=2,ji=0,Ym=1,qm=2,$m=3,Jf=4,Km=5,Zm=6,Jm=7,Qm=300,zs=301,Xa=302,Cc=303,Pc=304,ff=1e3,Qi=1001,df=1002,Sn=1003,Q_=1004,sl=1005,Vn=1006,bc=1007,Ar=1008,ei=1009,jm=1010,eg=1011,Ya=1012,Qf=1013,Fi=1014,Si=1015,Oi=1016,jf=1017,ed=1018,Hs=1020,tg=35902,ng=35899,ig=1021,rg=1022,Di=1023,Cr=1026,Rr=1027,td=1028,nd=1029,Kr=1030,id=1031,rd=1033,Ll=33776,Nl=33777,Dl=33778,Il=33779,hf=35840,pf=35841,mf=35842,gf=35843,_f=36196,vf=37492,xf=37496,Sf=37488,Mf=37489,Ol=37490,yf=37491,Ef=37808,Tf=37809,wf=37810,Af=37811,Rf=37812,Cf=37813,Pf=37814,bf=37815,Lf=37816,Nf=37817,Df=37818,If=37819,Uf=37820,Ff=37821,Of=36492,Bf=36494,kf=36495,zf=36283,Hf=36284,Bl=36285,Gf=36286,j_=3200,Vf=0,ev=1,wr="",jn="srgb",kl="srgb-linear",zl="linear",Pt="srgb",Lc=7680,tv=519,nv=512,iv=513,rv=514,sg=515,sv=516,av=517,ag=518,og=519,ov=35044,Xp="300 es",Mi=2e3,qa=2001;function lv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uv(){const s=Hl("canvas");return s.style.display="block",s}const Yp={};function qp(...s){const e="THREE."+s.shift();console.log(e,...s)}function lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Rt(...s){s=lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ul(...s){const e=s.join(" ");e in Yp||(Yp[e]=!0,at(...s))}function cv(s,e,t){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:r()}}setTimeout(u,t)})}const fv={[rf]:rf,[af]:uf,[of]:of,[Wa]:lf,[sf]:sf,[uf]:af,[cf]:cf,[lf]:Wa};class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(t);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Wf=180/Math.PI;function Ka(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function dv(s,e){return(s%e+e)%e}function Dc(s,e,t){return(1-t)*s+t*e}function hv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pv(s,e){if(e.constructor===Float32Array)return s;const t=sd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function mv(s,e){if(e.constructor===Float32Array)return s;const t=sd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}class St{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,u,c,d){let m=r[o+0],h=r[o+1],v=r[o+2],S=r[o+3],g=u[c+0],M=u[c+1],E=u[c+2],R=u[c+3];if(S!==R||m!==g||h!==M||v!==E){let _=m*g+h*M+v*E+S*R;_<0&&(g=-g,M=-M,E=-E,R=-R,_=-_);let x=1-d;if(_<.9995){const P=Math.acos(_),O=Math.sin(P);x=Math.sin(x*P)/O,d=Math.sin(d*P)/O,m=m*x+g*d,h=h*x+M*d,v=v*x+E*d,S=S*x+R*d}else{m=m*x+g*d,h=h*x+M*d,v=v*x+E*d,S=S*x+R*d;const P=1/Math.sqrt(m*m+h*h+v*v+S*S);m*=P,h*=P,v*=P,S*=P}}e[t]=m,e[t+1]=h,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,u,c){const d=r[o],m=r[o+1],h=r[o+2],v=r[o+3],S=u[c],g=u[c+1],M=u[c+2],E=u[c+3];return e[t]=d*E+v*S+m*M-h*g,e[t+1]=m*E+v*g+h*S-d*M,e[t+2]=h*E+v*M+d*g-m*S,e[t+3]=v*E-d*S-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,m=Math.sin,h=d(r/2),v=d(o/2),S=d(u/2),g=m(r/2),M=m(o/2),E=m(u/2);switch(c){case"XYZ":this._x=g*v*S+h*M*E,this._y=h*M*S-g*v*E,this._z=h*v*E+g*M*S,this._w=h*v*S-g*M*E;break;case"YXZ":this._x=g*v*S+h*M*E,this._y=h*M*S-g*v*E,this._z=h*v*E-g*M*S,this._w=h*v*S+g*M*E;break;case"ZXY":this._x=g*v*S-h*M*E,this._y=h*M*S+g*v*E,this._z=h*v*E+g*M*S,this._w=h*v*S-g*M*E;break;case"ZYX":this._x=g*v*S-h*M*E,this._y=h*M*S+g*v*E,this._z=h*v*E-g*M*S,this._w=h*v*S+g*M*E;break;case"YZX":this._x=g*v*S+h*M*E,this._y=h*M*S+g*v*E,this._z=h*v*E-g*M*S,this._w=h*v*S-g*M*E;break;case"XZY":this._x=g*v*S-h*M*E,this._y=h*M*S-g*v*E,this._z=h*v*E+g*M*S,this._w=h*v*S+g*M*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],u=t[8],c=t[1],d=t[5],m=t[9],h=t[2],v=t[6],S=t[10],g=r+d+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-h)*M,this._z=(c-o)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(v-m)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+h)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(u-h)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(c-o)/M,this._x=(u+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,u=e._z,c=e._w,d=t._x,m=t._y,h=t._z,v=t._w;return this._x=r*v+c*d+o*h-u*m,this._y=o*v+c*m+u*d-r*h,this._z=u*v+c*h+r*m-o*d,this._w=c*v-r*d-o*m-u*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let m=1-t;if(d<.9995){const h=Math.acos(d),v=Math.sin(h);m=Math.sin(m*h)/v,t=Math.sin(t*h)/v,this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+u*t,this._w=this._w*m+c*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+u*t,this._w=this._w*m+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{static{this.prototype.isVector3=!0}constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[3]*r+u[6]*o,this.y=u[1]*t+u[4]*r+u[7]*o,this.z=u[2]*t+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*t+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*t+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*t+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*t+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,m=e.w,h=2*(c*o-d*r),v=2*(d*t-u*o),S=2*(u*r-c*t);return this.x=t+m*h+c*S-d*v,this.y=r+m*v+d*h-u*S,this.z=o+m*S+u*v-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o,this.y=u[1]*t+u[5]*r+u[9]*o,this.z=u[2]*t+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,u=e.z,c=t.x,d=t.y,m=t.z;return this.x=o*m-u*d,this.y=u*c-r*m,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new le,$p=new Ws;class lt{static{this.prototype.isMatrix3=!0}constructor(e,t,r,o,u,c,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,u,c,d,m,h)}set(e,t,r,o,u,c,d,m,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=u,v[5]=m,v[6]=r,v[7]=c,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,u=this.elements,c=r[0],d=r[3],m=r[6],h=r[1],v=r[4],S=r[7],g=r[2],M=r[5],E=r[8],R=o[0],_=o[3],x=o[6],P=o[1],O=o[4],b=o[7],U=o[2],D=o[5],y=o[8];return u[0]=c*R+d*P+m*U,u[3]=c*_+d*O+m*D,u[6]=c*x+d*b+m*y,u[1]=h*R+v*P+S*U,u[4]=h*_+v*O+S*D,u[7]=h*x+v*b+S*y,u[2]=g*R+M*P+E*U,u[5]=g*_+M*O+E*D,u[8]=g*x+M*b+E*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8];return t*c*v-t*d*h-r*u*v+r*d*m+o*u*h-o*c*m}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8],S=v*c-d*h,g=d*m-v*u,M=h*u-c*m,E=t*S+r*g+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=S*R,e[1]=(o*h-v*r)*R,e[2]=(d*r-o*c)*R,e[3]=g*R,e[4]=(v*t-o*m)*R,e[5]=(o*u-d*t)*R,e[6]=M*R,e[7]=(r*m-h*t)*R,e[8]=(c*t-r*u)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,u,c,d){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*c+h*d)+c+e,-o*h,o*m,-o*(-h*c+m*d)+d+t,0,0,1),this}scale(e,t){return Ul("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return Ul("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return Ul("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new lt,Kp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gv(){const s={enabled:!0,workingColorSpace:kl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Pt&&(o.r=er(o.r),o.g=er(o.g),o.b=er(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(o.r=ks(o.r),o.g=ks(o.g),o.b=ks(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===wr?zl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[u].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[kl]:{primaries:e,whitePoint:r,transfer:zl,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const gt=gv();function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class _v{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=Hl("canvas")),Ts.width=e.width,Ts.height=e.height;const o=Ts.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=er(u[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(er(t[r]/255)*255):t[r]=er(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vv=0;class ad{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(Fc(o[c].image)):u.push(Fc(o[c]))}else u=Fc(o);r.url=u}return t||(e.images[this.uuid]=r),r}}function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_v.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let xv=0;const Oc=new le;class Pn extends Jr{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,r=Qi,o=Qi,u=Vn,c=Ar,d=Di,m=ei,h=Pn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Ka(),this.name="",this.source=new ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Qm;Pn.DEFAULT_ANISOTROPY=1;class Qt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,u;const m=e.elements,h=m[0],v=m[4],S=m[8],g=m[1],M=m[5],E=m[9],R=m[2],_=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-R)<.01&&Math.abs(E-_)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+R)<.1&&Math.abs(E+_)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(h+1)/2,b=(M+1)/2,U=(x+1)/2,D=(v+g)/4,y=(S+R)/4,C=(E+_)/4;return O>b&&O>U?O<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(O),o=D/r,u=y/r):b>U?b<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(b),r=D/o,u=C/o):U<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(U),r=y/u,o=C/u),this.set(r,o,u,t),this}let P=Math.sqrt((_-E)*(_-E)+(S-R)*(S-R)+(g-v)*(g-v));return Math.abs(P)<.001&&(P=1),this.x=(_-E)/P,this.y=(S-R)/P,this.z=(g-v)/P,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends Jr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const o=r.count;for(let u=0;u<o;u++)this.textures[u]=new Pn({width:e,height:t,depth:r.depth}),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ad(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Sv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ug extends Pn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mv extends Pn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class It{static{this.prototype.isMatrix4=!0}constructor(e,t,r,o,u,c,d,m,h,v,S,g,M,E,R,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,u,c,d,m,h,v,S,g,M,E,R,_)}set(e,t,r,o,u,c,d,m,h,v,S,g,M,E,R,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=u,x[5]=c,x[9]=d,x[13]=m,x[2]=h,x[6]=v,x[10]=S,x[14]=g,x[3]=M,x[7]=E,x[11]=R,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ws.setFromMatrixColumn(e,0).length(),u=1/ws.setFromMatrixColumn(e,1).length(),c=1/ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*u,t[5]=r[5]*u,t[6]=r[6]*u,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const g=c*v,M=c*S,E=d*v,R=d*S;t[0]=m*v,t[4]=-m*S,t[8]=h,t[1]=M+E*h,t[5]=g-R*h,t[9]=-d*m,t[2]=R-g*h,t[6]=E+M*h,t[10]=c*m}else if(e.order==="YXZ"){const g=m*v,M=m*S,E=h*v,R=h*S;t[0]=g+R*d,t[4]=E*d-M,t[8]=c*h,t[1]=c*S,t[5]=c*v,t[9]=-d,t[2]=M*d-E,t[6]=R+g*d,t[10]=c*m}else if(e.order==="ZXY"){const g=m*v,M=m*S,E=h*v,R=h*S;t[0]=g-R*d,t[4]=-c*S,t[8]=E+M*d,t[1]=M+E*d,t[5]=c*v,t[9]=R-g*d,t[2]=-c*h,t[6]=d,t[10]=c*m}else if(e.order==="ZYX"){const g=c*v,M=c*S,E=d*v,R=d*S;t[0]=m*v,t[4]=E*h-M,t[8]=g*h+R,t[1]=m*S,t[5]=R*h+g,t[9]=M*h-E,t[2]=-h,t[6]=d*m,t[10]=c*m}else if(e.order==="YZX"){const g=c*m,M=c*h,E=d*m,R=d*h;t[0]=m*v,t[4]=R-g*S,t[8]=E*S+M,t[1]=S,t[5]=c*v,t[9]=-d*v,t[2]=-h*v,t[6]=M*S+E,t[10]=g-R*S}else if(e.order==="XZY"){const g=c*m,M=c*h,E=d*m,R=d*h;t[0]=m*v,t[4]=-S,t[8]=h*v,t[1]=g*S+R,t[5]=c*v,t[9]=M*S-E,t[2]=E*S-M,t[6]=d*v,t[10]=R*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yv,e,Ev)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),xr.crossVectors(r,Jn),xr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),xr.crossVectors(r,Jn)),xr.normalize(),al.crossVectors(Jn,xr),o[0]=xr.x,o[4]=al.x,o[8]=Jn.x,o[1]=xr.y,o[5]=al.y,o[9]=Jn.y,o[2]=xr.z,o[6]=al.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,u=this.elements,c=r[0],d=r[4],m=r[8],h=r[12],v=r[1],S=r[5],g=r[9],M=r[13],E=r[2],R=r[6],_=r[10],x=r[14],P=r[3],O=r[7],b=r[11],U=r[15],D=o[0],y=o[4],C=o[8],q=o[12],z=o[1],V=o[5],K=o[9],oe=o[13],B=o[2],re=o[6],Z=o[10],X=o[14],Q=o[3],Y=o[7],$=o[11],N=o[15];return u[0]=c*D+d*z+m*B+h*Q,u[4]=c*y+d*V+m*re+h*Y,u[8]=c*C+d*K+m*Z+h*$,u[12]=c*q+d*oe+m*X+h*N,u[1]=v*D+S*z+g*B+M*Q,u[5]=v*y+S*V+g*re+M*Y,u[9]=v*C+S*K+g*Z+M*$,u[13]=v*q+S*oe+g*X+M*N,u[2]=E*D+R*z+_*B+x*Q,u[6]=E*y+R*V+_*re+x*Y,u[10]=E*C+R*K+_*Z+x*$,u[14]=E*q+R*oe+_*X+x*N,u[3]=P*D+O*z+b*B+U*Q,u[7]=P*y+O*V+b*re+U*Y,u[11]=P*C+O*K+b*Z+U*$,u[15]=P*q+O*oe+b*X+U*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],m=e[9],h=e[13],v=e[2],S=e[6],g=e[10],M=e[14],E=e[3],R=e[7],_=e[11],x=e[15],P=m*M-h*g,O=d*M-h*S,b=d*g-m*S,U=c*M-h*v,D=c*g-m*v,y=c*S-d*v;return t*(R*P-_*O+x*b)-r*(E*P-_*U+x*D)+o*(E*O-R*U+x*y)-u*(E*b-R*D+_*y)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],u=e[1],c=e[5],d=e[9],m=e[2],h=e[6],v=e[10];return t*(c*v-d*h)-r*(u*v-d*m)+o*(u*h-c*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8],S=e[9],g=e[10],M=e[11],E=e[12],R=e[13],_=e[14],x=e[15],P=t*d-r*c,O=t*m-o*c,b=t*h-u*c,U=r*m-o*d,D=r*h-u*d,y=o*h-u*m,C=v*R-S*E,q=v*_-g*E,z=v*x-M*E,V=S*_-g*R,K=S*x-M*R,oe=g*x-M*_,B=P*oe-O*K+b*V+U*z-D*q+y*C;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/B;return e[0]=(d*oe-m*K+h*V)*re,e[1]=(o*K-r*oe-u*V)*re,e[2]=(R*y-_*D+x*U)*re,e[3]=(g*D-S*y-M*U)*re,e[4]=(m*z-c*oe-h*q)*re,e[5]=(t*oe-o*z+u*q)*re,e[6]=(_*b-E*y-x*O)*re,e[7]=(v*y-g*b+M*O)*re,e[8]=(c*K-d*z+h*C)*re,e[9]=(r*z-t*K-u*C)*re,e[10]=(E*D-R*b+x*P)*re,e[11]=(S*b-v*D-M*P)*re,e[12]=(d*q-c*V-m*C)*re,e[13]=(t*V-r*q+o*C)*re,e[14]=(R*O-E*U-_*P)*re,e[15]=(v*U-S*O+g*P)*re,this}scale(e){const t=this.elements,r=e.x,o=e.y,u=e.z;return t[0]*=r,t[4]*=o,t[8]*=u,t[1]*=r,t[5]*=o,t[9]*=u,t[2]*=r,t[6]*=o,t[10]*=u,t[3]*=r,t[7]*=o,t[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),u=1-r,c=e.x,d=e.y,m=e.z,h=u*c,v=u*d;return this.set(h*c+r,h*d-o*m,h*m+o*d,0,h*d+o*m,v*d+r,v*m-o*c,0,h*m-o*d,v*m+o*c,u*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,u=t._x,c=t._y,d=t._z,m=t._w,h=u+u,v=c+c,S=d+d,g=u*h,M=u*v,E=u*S,R=c*v,_=c*S,x=d*S,P=m*h,O=m*v,b=m*S,U=r.x,D=r.y,y=r.z;return o[0]=(1-(R+x))*U,o[1]=(M+b)*U,o[2]=(E-O)*U,o[3]=0,o[4]=(M-b)*D,o[5]=(1-(g+x))*D,o[6]=(_+P)*D,o[7]=0,o[8]=(E+O)*y,o[9]=(_-P)*y,o[10]=(1-(g+R))*y,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),t.identity(),this;let c=ws.set(o[0],o[1],o[2]).length();const d=ws.set(o[4],o[5],o[6]).length(),m=ws.set(o[8],o[9],o[10]).length();u<0&&(c=-c),gi.copy(this);const h=1/c,v=1/d,S=1/m;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=v,gi.elements[5]*=v,gi.elements[6]*=v,gi.elements[8]*=S,gi.elements[9]*=S,gi.elements[10]*=S,t.setFromRotationMatrix(gi),r.x=c,r.y=d,r.z=m,this}makePerspective(e,t,r,o,u,c,d=Mi,m=!1){const h=this.elements,v=2*u/(t-e),S=2*u/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let E,R;if(m)E=u/(c-u),R=c*u/(c-u);else if(d===Mi)E=-(c+u)/(c-u),R=-2*c*u/(c-u);else if(d===qa)E=-c/(c-u),R=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,u,c,d=Mi,m=!1){const h=this.elements,v=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let E,R;if(m)E=1/(c-u),R=c/(c-u);else if(d===Mi)E=-2/(c-u),R=-(c+u)/(c-u);else if(d===qa)E=-1/(c-u),R=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ws=new le,gi=new It,yv=new le(0,0,0),Ev=new le(1,1,1),xr=new le,al=new le,Jn=new le,Jp=new It,Qp=new Ws;class Pr{constructor(e=0,t=0,r=0,o=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],m=o[1],h=o[5],v=o[9],S=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_t(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tv=0;const jp=new le,As=new Ws,Yi=new It,ol=new le,ba=new le,wv=new le,Av=new Ws,em=new le(1,0,0),tm=new le(0,1,0),nm=new le(0,0,1),im={type:"added"},Rv={type:"removed"},Rs={type:"childadded",child:null},Bc={type:"childremoved",child:null};class gn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new le,t=new Pr,r=new Ws,o=new le(1,1,1);function u(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new It},normalMatrix:{value:new lt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,t){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ol.copy(e):ol.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ba,ol,this.up):Yi.lookAt(ol,ba,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),As.setFromRotationMatrix(Yi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(im),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rv),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(im),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=t-u[0]*t-u[4]*r-u[8]*o,u[13]+=r-u[1]*t-u[5]*r-u[9]*o,u[14]+=o-u[2]*t-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const S=m[h];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(u(e.materials,this.material[m]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(e.animations,m))}}if(t){const d=c(e.geometries),m=c(e.materials),h=c(e.textures),v=c(e.images),S=c(e.shapes),g=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(d){const m=[];for(const h in d){const v=d[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gn.DEFAULT_UP=new le(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ka extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,u=null,c=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const R of e.hand.values()){const _=t.getJointPose(R,r),x=this._getHandJoint(h,R);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const v=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=v.position.distanceTo(S.position),M=.02,E=.005;h.inputState.pinching&&g>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ka;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=gt.workingColorSpace){return this.r=e,this.g=t,this.b=r,gt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=gt.workingColorSpace){if(e=dv(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+t):r+t-r*t,c=2*r-u;this.r=zc(c,u,e+1/3),this.g=zc(c,u,e),this.b=zc(c,u,e-1/3)}return gt.colorSpaceToWorking(this,o),this}setStyle(e,t=jn){function r(u){u!==void 0&&parseFloat(u)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseFloat(u[1]))/100,Math.min(100,parseFloat(u[2]))/100,Math.min(100,parseFloat(u[3]))/100,t);break;case"hsl":case"hsla":if(u=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=fg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return gt.workingToColorSpace(Cn.copy(this),e),Math.round(_t(Cn.r*255,0,255))*65536+Math.round(_t(Cn.g*255,0,255))*256+Math.round(_t(Cn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,u=Cn.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let m,h;const v=(d+c)/2;if(d===c)m=0,h=0;else{const S=c-d;switch(h=v<=.5?S/(c+d):S/(2-c-d),c){case r:m=(o-u)/S+(o<u?6:0);break;case o:m=(u-r)/S+2;break;case u:m=(r-o)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=jn){gt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(ll);const r=Dc(Sr.h,ll.h,t),o=Dc(Sr.s,ll.s,t),u=Dc(Sr.l,ll.l,t);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*t+u[3]*r+u[6]*o,this.g=u[1]*t+u[4]*r+u[7]*o,this.b=u[2]*t+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new xt;xt.NAMES=fg;class od extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new le,qi=new le,Hc=new le,$i=new le,Cs=new le,Ps=new le,rm=new le,Gc=new le,Vc=new le,Wc=new le,Xc=new Qt,Yc=new Qt,qc=new Qt;class xi{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),_i.subVectors(e,t),o.cross(_i);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,t,r,o,u){_i.subVectors(o,t),qi.subVectors(r,t),Hc.subVectors(e,t);const c=_i.dot(_i),d=_i.dot(qi),m=_i.dot(Hc),h=qi.dot(qi),v=qi.dot(Hc),S=c*h-d*d;if(S===0)return u.set(0,0,0),null;const g=1/S,M=(h*m-d*v)*g,E=(c*v-d*m)*g;return u.set(1-M-E,E,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,o,u,c,d,m){return this.getBarycoord(e,t,r,o,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(c,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(e,t,r,o,u,c){return Xc.setScalar(0),Yc.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,r),qc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Xc,u.x),c.addScaledVector(Yc,u.y),c.addScaledVector(qc,u.z),c}static isFrontFacing(e,t,r,o){return _i.subVectors(r,t),qi.subVectors(e,t),_i.cross(qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),_i.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,u){return xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,u)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,u=this.c;let c,d;Cs.subVectors(o,r),Ps.subVectors(u,r),Gc.subVectors(e,r);const m=Cs.dot(Gc),h=Ps.dot(Gc);if(m<=0&&h<=0)return t.copy(r);Vc.subVectors(e,o);const v=Cs.dot(Vc),S=Ps.dot(Vc);if(v>=0&&S<=v)return t.copy(o);const g=m*S-v*h;if(g<=0&&m>=0&&v<=0&&m-v>0)return c=m/(m-v),t.copy(r).addScaledVector(Cs,c);Wc.subVectors(e,u);const M=Cs.dot(Wc),E=Ps.dot(Wc);if(E>=0&&M<=E)return t.copy(u);const R=M*h-m*E;if(R<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector(Ps,d);const _=v*E-M*S;if(_<=0&&S-v>=0&&M-E>=0)return rm.subVectors(u,o),d=(S-v)/(S-v+(M-E)),t.copy(o).addScaledVector(rm,d);const x=1/(_+R+g);return c=R*x,d=g*x,t.copy(r).addScaledVector(Cs,c).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qr{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,vi):vi.fromBufferAttribute(u,c),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),cl.subVectors(this.max,La),bs.subVectors(e.a,La),Ls.subVectors(e.b,La),Ns.subVectors(e.c,La),Mr.subVectors(Ls,bs),yr.subVectors(Ns,Ls),Wr.subVectors(bs,Ns);let t=[0,-Mr.z,Mr.y,0,-yr.z,yr.y,0,-Wr.z,Wr.y,Mr.z,0,-Mr.x,yr.z,0,-yr.x,Wr.z,0,-Wr.x,-Mr.y,Mr.x,0,-yr.y,yr.x,0,-Wr.y,Wr.x,0];return!$c(t,bs,Ls,Ns,cl)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,bs,Ls,Ns,cl))?!1:(fl.crossVectors(Mr,yr),t=[fl.x,fl.y,fl.z],$c(t,bs,Ls,Ns,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new le,new le,new le,new le,new le,new le,new le,new le],vi=new le,ul=new Qr,bs=new le,Ls=new le,Ns=new le,Mr=new le,yr=new le,Wr=new le,La=new le,cl=new le,fl=new le,Xr=new le;function $c(s,e,t,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){Xr.fromArray(s,u);const d=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),m=e.dot(Xr),h=t.dot(Xr),v=r.dot(Xr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>d)return!1}return!0}const tn=new le,dl=new St;let Pv=0;class Ui extends Jr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=ov,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?sd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,u){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),u=this._normalize(u)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pv(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):mv(e,this.array)}}class dg extends Ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class hg extends Ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class _n extends Ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}const bv=new Qr,Na=new le,Kc=new le;class Xs{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Kc)),this.expandByPoint(Na.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lv=0;const li=new It,Zc=new gn,Ds=new le,Qn=new Qr,Da=new Qr,mn=new le;class ti extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?hg:dg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new _n(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const u=e[o];t.setXYZ(o,u.x,u.y,u.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const u=t[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){const d=t[u];Da.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Qn.min,Da.min),Qn.expandByPoint(mn),mn.addVectors(Qn.max,Da.max),Qn.expandByPoint(mn)):(Qn.expandByPoint(Da.min),Qn.expandByPoint(Da.max))}Qn.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)mn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(mn));if(t)for(let u=0,c=t.length;u<c;u++){const d=t[u],m=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)mn.fromBufferAttribute(d,h),m&&(Ds.fromBufferAttribute(e,h),mn.add(Ds)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,u=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Ui(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],m=[],h=new Uint8Array(r.count);for(let q=0;q<r.count;q++)d[q]=new le,m[q]=new le;const v=new le,S=new le,g=new le,M=new St,E=new St,R=new St,_=new le,x=new le;function P(q,z,V){h[q]=h[z]=h[V]=1,v.fromBufferAttribute(r,q),S.fromBufferAttribute(r,z),g.fromBufferAttribute(r,V),M.fromBufferAttribute(u,q),E.fromBufferAttribute(u,z),R.fromBufferAttribute(u,V),S.sub(v),g.sub(v),E.sub(M),R.sub(M);const K=1/(E.x*R.y-R.x*E.y);isFinite(K)&&(_.copy(S).multiplyScalar(R.y).addScaledVector(g,-E.y).multiplyScalar(K),x.copy(g).multiplyScalar(E.x).addScaledVector(S,-R.x).multiplyScalar(K),d[q].add(_),d[z].add(_),d[V].add(_),m[q].add(x),m[z].add(x),m[V].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,z=O.length;q<z;++q){const V=O[q],K=V.start,oe=V.count;for(let B=K,re=K+oe;B<re;B+=3)P(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new le,U=new le,D=new le,y=new le;function C(q){D.fromBufferAttribute(o,q),y.copy(D);const z=d[q];b.copy(z),b.sub(D.multiplyScalar(D.dot(z))).normalize(),U.crossVectors(y,z);const K=U.dot(m[q])<0?-1:1;c.setXYZW(q,b.x,b.y,b.z,K)}for(let q=0,z=r.count;q<z;++q)h[q]&&C(q);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new le,u=new le,c=new le,d=new le,m=new le,h=new le,v=new le,S=new le;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),R=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,E),u.fromBufferAttribute(t,R),c.fromBufferAttribute(t,_),v.subVectors(c,u),S.subVectors(o,u),v.cross(S),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,_),d.add(v),m.add(v),h.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),u.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,u),S.subVectors(o,u),v.cross(S),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const h=d.array,v=d.itemSize,S=d.normalized,g=new h.constructor(m.length*v);let M=0,E=0;for(let R=0,_=m.length;R<_;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*v;for(let x=0;x<v;x++)g[E++]=h[M++]}return new Ui(g,v,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);t.setAttribute(d,h)}const u=this.morphAttributes;for(const d in u){const m=[],h=u[d];for(let v=0,S=h.length;v<S;v++){const g=h[v],M=e(g,r);m.push(M)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let S=0,g=h.length;S<g;S++){const M=h[S];v.push(M.toJSON(e.data))}v.length>0&&(o[m]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const u=e.morphAttributes;for(const h in u){const v=[],S=u[h];for(let g=0,M=S.length;g<M;g++)v.push(S[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,v=c.length;h<v;h++){const S=c[h];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new le,Nv=new le,Dv=new lt;class Tr{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Jc.subVectors(r,t).cross(Nv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Jc),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Dv.getNormalMatrix(e),o=this.coplanarPoint(Jc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Iv=0;class Ys extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=Ha,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vm,this.blendDst=Wm,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const m=u[d];delete m.metadata,c.push(m)}return c}if(t){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Tr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new St().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=t[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new le,Qc=new le,hl=new le,pl=new le;class pg{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Qc.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),pl.copy(this.origin).sub(Qc);const u=e.distanceTo(t)*.5,c=-this.direction.dot(hl),d=pl.dot(this.direction),m=-pl.dot(hl),h=pl.lengthSq(),v=Math.abs(1-c*c);let S,g,M,E;if(v>0)if(S=c*m-d,g=c*d-m,E=u*v,S>=0)if(g>=-E)if(g<=E){const R=1/v;S*=R,g*=R,M=S*(S+c*g+2*d)+g*(c*S+g+2*m)+h}else g=u,S=Math.max(0,-(c*g+d)),M=-S*S+g*(g+2*m)+h;else g=-u,S=Math.max(0,-(c*g+d)),M=-S*S+g*(g+2*m)+h;else g<=-E?(S=Math.max(0,-(-c*u+d)),g=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+g*(g+2*m)+h):g<=E?(S=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+h):(S=Math.max(0,-(c*u+d)),g=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+g*(g+2*m)+h);else g=c>0?-u:u,S=Math.max(0,-(c*g+d)),M=-S*S+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Qc).addScaledVector(hl,g),M}intersectSphere(e,t){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,m=r+c;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,u,c,d,m;const h=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),v>=0?(u=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(u=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),S>=0?(d=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(d=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,u){const c=this.origin,d=this.direction,m=d.x,h=d.y,v=d.z,S=e.x-c.x,g=e.y-c.y,M=e.z-c.z,E=t.x-c.x,R=t.y-c.y,_=t.z-c.z,x=r.x-c.x,P=r.y-c.y,O=r.z-c.z,b=Math.abs(m),U=Math.abs(h),D=Math.abs(v);let y,C,q,z,V,K,oe,B,re,Z,X,Q;if(b>=U&&b>=D?(q=m,K=S,re=E,Q=x,m>=0?(y=h,C=v,z=g,V=M,oe=R,B=_,Z=P,X=O):(y=v,C=h,z=M,V=g,oe=_,B=R,Z=O,X=P)):U>=D?(q=h,K=g,re=R,Q=P,h>=0?(y=v,C=m,z=M,V=S,oe=_,B=E,Z=O,X=x):(y=m,C=v,z=S,V=M,oe=E,B=_,Z=x,X=O)):(q=v,K=M,re=_,Q=O,v>=0?(y=m,C=h,z=S,V=g,oe=E,B=R,Z=x,X=P):(y=h,C=m,z=g,V=S,oe=R,B=E,Z=P,X=x)),q===0)return null;const Y=y/q,$=C/q,N=1/q,ne=z-Y*K,Le=V-$*K,ie=oe-Y*re,me=B-$*re,ye=Z-Y*Q,Ue=X-$*Q,_e=ye*me-Ue*ie,ze=ne*Ue-Le*ye,vt=ie*Le-me*ne;if(o){if(_e<0||ze<0||vt<0)return null}else if((_e<0||ze<0||vt<0)&&(_e>0||ze>0||vt>0))return null;const je=_e+ze+vt;if(je===0)return null;const yt=N*(_e*K+ze*re+vt*Q);return(je>0?yt<0:yt>0)?null:this.at(yt/je,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mg extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sm=new It,Yr=new pg,ml=new Xs,am=new le,gl=new le,_l=new le,vl=new le,jc=new le,xl=new le,om=new le,Sl=new le;class Xn extends gn{constructor(e=new ti,t=new mg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){xl.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const v=d[m],S=u[m];v!==0&&(jc.fromBufferAttribute(S,e),c?xl.addScaledVector(jc,v):xl.addScaledVector(jc.sub(t),v))}t.add(xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(u),Yr.copy(e.ray).recast(e.near),!(ml.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(ml,am)===null||Yr.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(sm.copy(u).invert(),Yr.copy(e.ray).applyMatrix4(sm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,r){let o;const u=this.geometry,c=this.material,d=u.index,m=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,R=g.length;E<R;E++){const _=g[E],x=c[_.materialIndex],P=Math.max(_.start,M.start),O=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let b=P,U=O;b<U;b+=3){const D=d.getX(b),y=d.getX(b+1),C=d.getX(b+2);o=Ml(this,x,e,r,h,v,S,D,y,C),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let _=E,x=R;_<x;_+=3){const P=d.getX(_),O=d.getX(_+1),b=d.getX(_+2);o=Ml(this,c,e,r,h,v,S,P,O,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(c))for(let E=0,R=g.length;E<R;E++){const _=g[E],x=c[_.materialIndex],P=Math.max(_.start,M.start),O=Math.min(m.count,Math.min(_.start+_.count,M.start+M.count));for(let b=P,U=O;b<U;b+=3){const D=b,y=b+1,C=b+2;o=Ml(this,x,e,r,h,v,S,D,y,C),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let _=E,x=R;_<x;_+=3){const P=_,O=_+1,b=_+2;o=Ml(this,c,e,r,h,v,S,P,O,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Uv(s,e,t,r,o,u,c,d){let m;if(e.side===Wn?m=r.intersectTriangle(c,u,o,!0,d):m=r.intersectTriangle(o,u,c,e.side===$r,d),m===null)return null;Sl.copy(d),Sl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Sl);return h<t.near||h>t.far?null:{distance:h,point:Sl.clone(),object:s}}function Ml(s,e,t,r,o,u,c,d,m,h){s.getVertexPosition(d,gl),s.getVertexPosition(m,_l),s.getVertexPosition(h,vl);const v=Uv(s,e,t,r,gl,_l,vl,om);if(v){const S=new le;xi.getBarycoord(om,gl,_l,vl,S),o&&(v.uv=xi.getInterpolatedAttribute(o,d,m,h,S,new St)),u&&(v.uv1=xi.getInterpolatedAttribute(u,d,m,h,S,new St)),c&&(v.normal=xi.getInterpolatedAttribute(c,d,m,h,S,new le),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:h,normal:new le,materialIndex:0};xi.getNormal(gl,_l,vl,g.normal),v.face=g,v.barycoord=S}return v}class gg extends Pn{constructor(e=null,t=1,r=1,o,u,c,d,m,h=Sn,v=Sn,S,g){super(null,c,d,m,h,v,o,u,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lm extends Ui{constructor(e,t,r,o=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new It,um=new It,yl=[],cm=new Qr,Fv=new It,Ia=new Xn,Ua=new Xs;class Ov extends Xn{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lm(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,Fv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Is),cm.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(cm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Is),Ua.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,o=this.morphTexture.source.data.data,u=r.length+1,c=e*u+1;for(let d=0;d<r.length;d++)r[d]=o[c+d]}raycast(e,t){const r=this.matrixWorld,o=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(r),e.ray.intersectsSphere(Ua)!==!1))for(let u=0;u<o;u++){this.getMatrixAt(u,Is),um.multiplyMatrices(r,Is),Ia.matrixWorld=um,Ia.raycast(e,yl);for(let c=0,d=yl.length;c<d;c++){const m=yl[c];m.instanceId=u,m.object=this,t.push(m)}yl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new gg(new Float32Array(o*this.count),o,this.count,td,Si));const u=this.morphTexture.source.data.data;let c=0;for(let h=0;h<r.length;h++)c+=r[h];const d=this.geometry.morphTargetsRelative?1:1-c,m=o*e;return u[m]=d,u.set(r,m+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qr=new Xs,Bv=new St(.5,.5),El=new le;class $a{constructor(e=new Tr,t=new Tr,r=new Tr,o=new Tr,u=new Tr,c=new Tr){this.planes=[e,t,r,o,u,c]}set(e,t,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Mi,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],m=u[2],h=u[3],v=u[4],S=u[5],g=u[6],M=u[7],E=u[8],R=u[9],_=u[10],x=u[11],P=u[12],O=u[13],b=u[14],U=u[15];if(o[0].setComponents(h-c,M-v,x-E,U-P).normalize(),o[1].setComponents(h+c,M+v,x+E,U+P).normalize(),o[2].setComponents(h+d,M+S,x+R,U+O).normalize(),o[3].setComponents(h-d,M-S,x-R,U-O).normalize(),r)o[4].setComponents(m,g,_,b).normalize(),o[5].setComponents(h-m,M-g,x-_,U-b).normalize();else if(o[4].setComponents(h-m,M-g,x-_,U-b).normalize(),t===Mi)o[5].setComponents(h+m,M+g,x+_,U+b).normalize();else if(t===qa)o[5].setComponents(m,g,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const t=Bv.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(El.x=o.normal.x>0?e.max.x:e.min.x,El.y=o.normal.y>0?e.max.y:e.min.y,El.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fm=new It;class ld{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const u=t[o];fm.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),r[o]===void 0&&(r[o]=new $a),r[o].setFromProjectionMatrix(fm,u.coordinateSystem,u.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new $a),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new ld().copy(this)}}class ud extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new It,Xf=new pg,Tl=new Xs,wl=new le;class _g extends gn{constructor(e=new ti,t=new ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=u,e.ray.intersectsSphere(Tl)===!1)return;dm.copy(o).invert(),Xf.copy(e.ray).applyMatrix4(dm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=r.index,S=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),M=Math.min(h.count,c.start+c.count);for(let E=g,R=M;E<R;E++){const _=h.getX(E);wl.fromBufferAttribute(S,_),hm(wl,_,m,o,e,t,this)}}else{const g=Math.max(0,c.start),M=Math.min(S.count,c.start+c.count);for(let E=g,R=M;E<R;E++)wl.fromBufferAttribute(S,E),hm(wl,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function hm(s,e,t,r,o,u,c){const d=Xf.distanceSqToPoint(s);if(d<t){const m=new le;Xf.closestPointToPoint(s,m),m.applyMatrix4(r);const h=o.ray.origin.distanceTo(m);if(h<o.near||h>o.far)return;u.push({distance:h,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class vg extends Pn{constructor(e=[],t=zs,r,o,u,c,d,m,h,v){super(e,t,r,o,u,c,d,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xg extends Pn{constructor(e,t,r,o,u,c,d,m,h){super(e,t,r,o,u,c,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends Pn{constructor(e,t,r=Fi,o,u,c,d=Sn,m=Sn,h,v=Cr,S=1){if(v!==Cr&&v!==Rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,u,c,d,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Sg extends Gs{constructor(e,t=Fi,r=zs,o,u,c=Sn,d=Sn,m,h=Cr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,u,c,d,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mg extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends ti{constructor(e=1,t=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const m=[],h=[],v=[],S=[];let g=0,M=0;E("z","y","x",-1,-1,r,t,e,c,u,0),E("z","y","x",1,-1,r,t,-e,c,u,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,u,4),E("x","y","z",-1,-1,e,t,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new _n(h,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(S,2));function E(R,_,x,P,O,b,U,D,y,C,q){const z=b/y,V=U/C,K=b/2,oe=U/2,B=D/2,re=y+1,Z=C+1;let X=0,Q=0;const Y=new le;for(let $=0;$<Z;$++){const N=$*V-oe;for(let ne=0;ne<re;ne++){const Le=ne*z-K;Y[R]=Le*P,Y[_]=N*O,Y[x]=B,h.push(Y.x,Y.y,Y.z),Y[R]=0,Y[_]=0,Y[x]=D>0?1:-1,v.push(Y.x,Y.y,Y.z),S.push(ne/y),S.push(1-$/C),X+=1}}for(let $=0;$<C;$++)for(let N=0;N<y;N++){const ne=g+N+re*$,Le=g+N+re*($+1),ie=g+(N+1)+re*($+1),me=g+(N+1)+re*$;m.push(ne,Le,me),m.push(Le,ie,me),Q+=6}d.addGroup(M,Q,q),M+=Q,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vl extends ti{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const u=[],c=[],d=[],m=[],h=new le,v=new St;c.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let S=0,g=3;S<=t;S++,g+=3){const M=r+S/t*o;h.x=e*Math.cos(M),h.y=e*Math.sin(M),c.push(h.x,h.y,h.z),d.push(0,0,1),v.x=(c[g]/e+1)/2,v.y=(c[g+1]/e+1)/2,m.push(v.x,v.y)}for(let S=1;S<=t;S++)u.push(S,S+1,0);this.setIndex(u),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wl extends ti{constructor(e=1,t=1,r=1,o=32,u=1,c=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:m};const h=this;o=Math.floor(o),u=Math.floor(u);const v=[],S=[],g=[],M=[];let E=0;const R=[],_=r/2;let x=0;P(),c===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new _n(S,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(M,2));function P(){const b=new le,U=new le;let D=0;const y=(t-e)/r;for(let C=0;C<=u;C++){const q=[],z=C/u,V=z*(t-e)+e;for(let K=0;K<=o;K++){const oe=K/o,B=oe*m+d,re=Math.sin(B),Z=Math.cos(B);U.x=V*re,U.y=-z*r+_,U.z=V*Z,S.push(U.x,U.y,U.z),b.set(re,y,Z).normalize(),g.push(b.x,b.y,b.z),M.push(oe,1-z),q.push(E++)}R.push(q)}for(let C=0;C<o;C++)for(let q=0;q<u;q++){const z=R[q][C],V=R[q+1][C],K=R[q+1][C+1],oe=R[q][C+1];(e>0||q!==0)&&(v.push(z,V,oe),D+=3),(t>0||q!==u-1)&&(v.push(V,K,oe),D+=3)}h.addGroup(x,D,0),x+=D}function O(b){const U=E,D=new St,y=new le;let C=0;const q=b===!0?e:t,z=b===!0?1:-1;for(let K=1;K<=o;K++)S.push(0,_*z,0),g.push(0,z,0),M.push(.5,.5),E++;const V=E;for(let K=0;K<=o;K++){const B=K/o*m+d,re=Math.cos(B),Z=Math.sin(B);y.x=q*Z,y.y=_*z,y.z=q*re,S.push(y.x,y.y,y.z),g.push(0,z,0),D.x=re*.5+.5,D.y=Z*.5*z+.5,M.push(D.x,D.y),E++}for(let K=0;K<o;K++){const oe=U+K,B=V+K;b===!0?v.push(B,B+1,oe):v.push(B+1,B,oe),C+=3}h.addGroup(x,C,b===!0?1:2),x+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends ti{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const u=e/2,c=t/2,d=Math.floor(r),m=Math.floor(o),h=d+1,v=m+1,S=e/d,g=t/m,M=[],E=[],R=[],_=[];for(let x=0;x<v;x++){const P=x*g-c;for(let O=0;O<h;O++){const b=O*S-u;E.push(b,-P,0),R.push(0,0,1),_.push(O/d),_.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const O=P+h*x,b=P+h*(x+1),U=P+1+h*(x+1),D=P+1+h*x;M.push(O,b,D),M.push(b,U,D)}this.setIndex(M),this.setAttribute("position",new _n(E,3)),this.setAttribute("normal",new _n(R,3)),this.setAttribute("uv",new _n(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}class cd extends ti{constructor(e=1,t=.4,r=12,o=48,u=Math.PI*2,c=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:u,thetaStart:c,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const m=[],h=[],v=[],S=[],g=new le,M=new le,E=new le;for(let R=0;R<=r;R++){const _=c+R/r*d;for(let x=0;x<=o;x++){const P=x/o*u;M.x=(e+t*Math.cos(_))*Math.cos(P),M.y=(e+t*Math.cos(_))*Math.sin(P),M.z=t*Math.sin(_),h.push(M.x,M.y,M.z),g.x=e*Math.cos(P),g.y=e*Math.sin(P),E.subVectors(M,g).normalize(),v.push(E.x,E.y,E.z),S.push(x/o),S.push(R/r)}}for(let R=1;R<=r;R++)for(let _=1;_<=o;_++){const x=(o+1)*R+_-1,P=(o+1)*(R-1)+_-1,O=(o+1)*(R-1)+_,b=(o+1)*R+_;m.push(x,P,b),m.push(P,O,b)}this.setIndex(m),this.setAttribute("position",new _n(h,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Vs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(pm(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(pm(o[0])){const u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[t][r]=u}else e[t][r]=o.slice();else e[t][r]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=Vs(s[t]);for(const o in r)e[o]=r[o]}return e}function pm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function kv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const zv={clone:Vs,merge:In};var Hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new St().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new It().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vv extends Zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ga extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vf,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wv extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xv extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fd extends gn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ef=new It,mm=new le,gm=new le;class Eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;mm.setFromMatrixPosition(e.matrixWorld),t.position.copy(mm),gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){ef.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ef,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,c=o?o.z/u.x:1,d=o?o.w/u.y:1,m=o?o.x/u.x:0,h=o?o.y/u.y:0;e.coordinateSystem===qa||e.reversedDepth?t.set(.5*c,0,0,.5*c+m,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+m,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Al=new le,Rl=new Ws,bi=new le;class Tg extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Rl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Al,Rl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Er=new le,_m=new St,vm=new St;class Gn extends Tg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,_m,vm),t.subVectors(vm,_m)}setViewOffset(e,t,r,o,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,h=c.fullHeight;u+=c.offsetX*o/m,t-=c.offsetY*r/h,o*=c.width/m,r*=c.height/h}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yv extends Eg{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Va extends fd{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Yv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class wg extends Tg{constructor(e=-1,t=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,c=u+h*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qv extends Eg{constructor(){super(new wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yf extends fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new qv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class dd extends fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Fs=1;class qf extends gn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(Us,Fs,e,t);o.layers=this.layers,this.add(o);const u=new Gn(Us,Fs,e,t);u.layers=this.layers,this.add(u);const c=new Gn(Us,Fs,e,t);c.layers=this.layers,this.add(c);const d=new Gn(Us,Fs,e,t);d.layers=this.layers,this.add(d);const m=new Gn(Us,Fs,e,t);m.layers=this.layers,this.add(m);const h=new Gn(Us,Fs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,u,c,d,m]=t;for(const h of t)this.remove(h);if(e===Mi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===qa)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,m,h,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class $v extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Ag{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xm(s,e,t,r){const o=Kv(r);switch(t){case ig:return s*e;case td:return s*e/o.components*o.byteLength;case nd:return s*e/o.components*o.byteLength;case Kr:return s*e*2/o.components*o.byteLength;case id:return s*e*2/o.components*o.byteLength;case rg:return s*e*3/o.components*o.byteLength;case Di:return s*e*4/o.components*o.byteLength;case rd:return s*e*4/o.components*o.byteLength;case Ll:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(s,16)*Math.max(e,8)/4;case hf:case mf:return Math.max(s,8)*Math.max(e,8)/2;case _f:case vf:case Sf:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xf:case Ol:case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Of:case Bf:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zf:case Hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bl:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(s){switch(s){case ei:case jm:return{byteLength:1,components:1};case Ya:case eg:case Oi:return{byteLength:2,components:1};case jf:case ed:return{byteLength:2,components:4};case Fi:case Qf:case Si:return{byteLength:4,components:1};case tg:case ng:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rg(){let s=null,e=!1,t=null,r=null;function o(u,c){r=s.requestAnimationFrame(o),t(u,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){s=u}}}function Zv(s){const e=new WeakMap;function t(d,m){const h=d.array,v=d.usage,S=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),d.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,h){const v=m.array,S=m.updateRanges;if(s.bindBuffer(h,d),S.length===0)s.bufferSubData(h,0,v);else{S.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<S.length;M++){const E=S[g],R=S[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,E=S.length;M<E;M++){const R=S[M];s.bufferSubData(h,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:u,update:c}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,fx=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,Mx=`vec3 transformedNormal = objectNormal;
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
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,$x=`uniform sampler2D dfgLUT;
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
}`,Kx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aS=`#if defined( USE_POINTS_UV )
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
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cS=`#if defined( USE_MORPHCOLORS )
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
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`#ifdef USE_MORPHTARGETS
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
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xS=`#ifdef USE_NORMALMAP
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
#endif`,SS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,US=`float getShadowMask() {
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
}`,FS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
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
#endif`,BS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JS=`uniform sampler2D t2D;
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`uniform float backgroundBlurriness;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
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
}`,iM=`#if DEPTH_PACKING == 3200
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
}`,rM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,pM=`#define MATCAP
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
}`,mM=`#define MATCAP
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
}`,gM=`#define NORMAL
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
}`,_M=`#define NORMAL
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
}`,vM=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,SM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,EM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Jv,alphahash_pars_fragment:Qv,alphamap_fragment:jv,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ax,begin_vertex:ox,beginnormal_vertex:lx,bsdfs:ux,iridescence_fragment:cx,bumpmap_pars_fragment:fx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:xx,common:Sx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:yx,displacementmap_vertex:Ex,emissivemap_fragment:Tx,emissivemap_pars_fragment:wx,colorspace_fragment:Ax,colorspace_pars_fragment:Rx,envmap_fragment:Cx,envmap_common_pars_fragment:Px,envmap_pars_fragment:bx,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Gx,envmap_vertex:Nx,fog_vertex:Dx,fog_pars_vertex:Ix,fog_fragment:Ux,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:zx,lights_pars_begin:Hx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:Yx,lights_physical_fragment:qx,lights_physical_pars_fragment:$x,lights_fragment_begin:Kx,lights_fragment_maps:Zx,lights_fragment_end:Jx,lightprobes_pars_fragment:Qx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:eS,logdepthbuf_pars_vertex:tS,logdepthbuf_vertex:nS,map_fragment:iS,map_pars_fragment:rS,map_particle_fragment:sS,map_particle_pars_fragment:aS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:lS,morphinstance_vertex:uS,morphcolor_vertex:cS,morphnormal_vertex:fS,morphtarget_pars_vertex:dS,morphtarget_vertex:hS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:_S,normal_vertex:vS,normalmap_pars_fragment:xS,clearcoat_normal_fragment_begin:SS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:yS,iridescence_pars_fragment:ES,opaque_fragment:TS,packing:wS,premultiplied_alpha_fragment:AS,project_vertex:RS,dithering_fragment:CS,dithering_pars_fragment:PS,roughnessmap_fragment:bS,roughnessmap_pars_fragment:LS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:DS,shadowmap_vertex:IS,shadowmask_pars_fragment:US,skinbase_vertex:FS,skinning_pars_vertex:OS,skinning_vertex:BS,skinnormal_vertex:kS,specularmap_fragment:zS,specularmap_pars_fragment:HS,tonemapping_fragment:GS,tonemapping_pars_fragment:VS,transmission_fragment:WS,transmission_pars_fragment:XS,uv_pars_fragment:YS,uv_pars_vertex:qS,uv_vertex:$S,worldpos_vertex:KS,background_vert:ZS,background_frag:JS,backgroundCube_vert:QS,backgroundCube_frag:jS,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distance_vert:rM,distance_frag:sM,equirect_vert:aM,equirect_frag:oM,linedashed_vert:lM,linedashed_frag:uM,meshbasic_vert:cM,meshbasic_frag:fM,meshlambert_vert:dM,meshlambert_frag:hM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:_M,meshphong_vert:vM,meshphong_frag:xM,meshphysical_vert:SM,meshphysical_frag:MM,meshtoon_vert:yM,meshtoon_frag:EM,points_vert:TM,points_frag:wM,shadow_vert:AM,shadow_frag:RM,sprite_vert:CM,sprite_frag:PM},Be={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:In([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:In([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:In([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:In([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new xt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:In([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:In([Be.points,Be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:In([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:In([Be.common,Be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:In([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:In([Be.sprite,Be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:In([Be.common,Be.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:In([Be.lights,Be.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Cl={r:0,b:0,g:0},bM=new It,Cg=new lt;Cg.set(-1,0,0,0,1,0,0,0,1);function LM(s,e,t,r,o,u){const c=new xt(0);let d=o===!0?0:1,m,h,v=null,S=0,g=null;function M(P){let O=P.isScene===!0?P.background:null;if(O&&O.isTexture){const b=P.backgroundBlurriness>0;O=e.get(O,b)}return O}function E(P){let O=!1;const b=M(P);b===null?_(c,d):b&&b.isColor&&(_(b,1),O=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,u),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(P,O){const b=M(O);b&&b.isCubeTexture?(h===void 0&&(h=new Xn(new Za(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:Vs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,D,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(O.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Cg),h.material.toneMapped=gt.getTransfer(b.colorSpace)!==Pt,(v!==b||S!==b.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=b,S=b.version,g=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new Xn(new Ja(2,2),new Zr({name:"BackgroundMaterial",uniforms:Vs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=gt.getTransfer(b.colorSpace)!==Pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||S!==b.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=b,S=b.version,g=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function _(P,O){P.getRGB(Cl,yg(s)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,O,u)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,O=1){c.set(P),d=O,_(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,_(c,d)},render:E,addToRenderList:R,dispose:x}}function NM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function d(V,K,oe,B,re){let Z=!1;const X=S(V,B,oe,K);u!==X&&(u=X,h(u.object)),Z=M(V,B,oe,re),Z&&E(V,B,oe,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,b(V,K,oe,B),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function S(V,K,oe,B){const re=B.wireframe===!0;let Z=r[K.id];Z===void 0&&(Z={},r[K.id]=Z);const X=V.isInstancedMesh===!0?V.id:0;let Q=Z[X];Q===void 0&&(Q={},Z[X]=Q);let Y=Q[oe.id];Y===void 0&&(Y={},Q[oe.id]=Y);let $=Y[re];return $===void 0&&($=g(m()),Y[re]=$),$}function g(V){const K=[],oe=[],B=[];for(let re=0;re<t;re++)K[re]=0,oe[re]=0,B[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:oe,attributeDivisors:B,object:V,attributes:{},index:null}}function M(V,K,oe,B){const re=u.attributes,Z=K.attributes;let X=0;const Q=oe.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const N=re[Y];let ne=Z[Y];if(ne===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(ne=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(ne=V.instanceColor)),N===void 0||N.attribute!==ne||ne&&N.data!==ne.data)return!0;X++}return u.attributesNum!==X||u.index!==B}function E(V,K,oe,B){const re={},Z=K.attributes;let X=0;const Q=oe.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let N=Z[Y];N===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const ne={};ne.attribute=N,N&&N.data&&(ne.data=N.data),re[Y]=ne,X++}u.attributes=re,u.attributesNum=X,u.index=B}function R(){const V=u.newAttributes;for(let K=0,oe=V.length;K<oe;K++)V[K]=0}function _(V){x(V,0)}function x(V,K){const oe=u.newAttributes,B=u.enabledAttributes,re=u.attributeDivisors;oe[V]=1,B[V]===0&&(s.enableVertexAttribArray(V),B[V]=1),re[V]!==K&&(s.vertexAttribDivisor(V,K),re[V]=K)}function P(){const V=u.newAttributes,K=u.enabledAttributes;for(let oe=0,B=K.length;oe<B;oe++)K[oe]!==V[oe]&&(s.disableVertexAttribArray(oe),K[oe]=0)}function O(V,K,oe,B,re,Z,X){X===!0?s.vertexAttribIPointer(V,K,oe,re,Z):s.vertexAttribPointer(V,K,oe,B,re,Z)}function b(V,K,oe,B){R();const re=B.attributes,Z=oe.getAttributes(),X=K.defaultAttributeValues;for(const Q in Z){const Y=Z[Q];if(Y.location>=0){let $=re[Q];if($===void 0&&(Q==="instanceMatrix"&&V.instanceMatrix&&($=V.instanceMatrix),Q==="instanceColor"&&V.instanceColor&&($=V.instanceColor)),$!==void 0){const N=$.normalized,ne=$.itemSize,Le=e.get($);if(Le===void 0)continue;const ie=Le.buffer,me=Le.type,ye=Le.bytesPerElement,Ue=me===s.INT||me===s.UNSIGNED_INT||$.gpuType===Qf;if($.isInterleavedBufferAttribute){const _e=$.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,vt=$.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let je=0;je<Y.locationSize;je++)x(Y.location+je,_e.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let je=0;je<Y.locationSize;je++)_(Y.location+je);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let je=0;je<Y.locationSize;je++)O(Y.location+je,ne/Y.locationSize,me,N,ze*ye,(vt+ne/Y.locationSize*je)*ye,Ue)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<Y.locationSize;_e++)x(Y.location+_e,$.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<Y.locationSize;_e++)_(Y.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let _e=0;_e<Y.locationSize;_e++)O(Y.location+_e,ne/Y.locationSize,me,N,ne*ye,ne/Y.locationSize*_e*ye,Ue)}}else if(X!==void 0){const N=X[Q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}P()}function U(){q();for(const V in r){const K=r[V];for(const oe in K){const B=K[oe];for(const re in B){const Z=B[re];for(const X in Z)v(Z[X].object),delete Z[X];delete B[re]}}delete r[V]}}function D(V){if(r[V.id]===void 0)return;const K=r[V.id];for(const oe in K){const B=K[oe];for(const re in B){const Z=B[re];for(const X in Z)v(Z[X].object),delete Z[X];delete B[re]}}delete r[V.id]}function y(V){for(const K in r){const oe=r[K];for(const B in oe){const re=oe[B];if(re[V.id]===void 0)continue;const Z=re[V.id];for(const X in Z)v(Z[X].object),delete Z[X];delete re[V.id]}}}function C(V){for(const K in r){const oe=r[K],B=V.isInstancedMesh===!0?V.id:0,re=oe[B];if(re!==void 0){for(const Z in re){const X=re[Z];for(const Q in X)v(X[Q].object),delete X[Q];delete re[Z]}delete oe[B],Object.keys(oe).length===0&&delete r[K]}}}function q(){z(),c=!0,u!==o&&(u=o,h(u.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:q,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:C,releaseStatesOfProgram:y,initAttributes:R,enableAttribute:_,disableUnusedAttributes:P}}function DM(s,e,t){let r;function o(m){r=m}function u(m,h){s.drawArrays(r,m,h),t.update(h,r,1)}function c(m,h,v){v!==0&&(s.drawArraysInstanced(r,m,h,v),t.update(h,r,v))}function d(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let g=0;for(let M=0;M<v;M++)g+=h[M];t.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function IM(s,e,t,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(y){return!(y!==Di&&r.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(y){const C=y===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==ei&&y!==Si&&!C&&r.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=m(h);v!==h&&(at("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:b,maxSamples:U,samples:D}}function UM(s){const e=this;let t=null,r=0,o=!1,u=!1;const c=new Tr,d=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,g){t=v(S,g,0)},this.setState=function(S,g,M){const E=S.clippingPlanes,R=S.clipIntersection,_=S.clipShadows,x=s.get(S);if(!o||E===null||E.length===0||u&&!_)u?v(null):h();else{const P=u?0:r,O=P*4;let b=x.clippingState||null;m.value=b,b=v(E,g,O,M);for(let U=0;U!==O;++U)b[U]=t[U];x.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function h(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,g,M,E){const R=S!==null?S.length:0;let _=null;if(R!==0){if(_=m.value,E!==!0||_===null){const x=M+R*4,P=g.matrixWorldInverse;d.getNormalMatrix(P),(_===null||_.length<x)&&(_=new Float32Array(x));for(let O=0,b=M;O!==R;++O,b+=4)c.copy(S[O]).applyMatrix4(P,d),c.normal.toArray(_,b),_[b+3]=c.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}class hd extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new vg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Za(5,5,5),u=new Zr({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Bs});u.uniforms.tEquirect.value=t;const c=new Xn(o,u),d=t.minFilter;return t.minFilter===Ar&&(t.minFilter=Vn),new qf(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(u)}}const Sm=256,FM=3,OM=20,Pg=256,bg=16,BM=3,kM=new le,zM=new xt;class Gl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qf(1,10,null),this._boxMesh=new Xn(new Za(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,u={}){const{size:c=256,position:d=kM}=u,m=this._renderer;this._setSize(c);const h=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const S=m.autoClear,g=m.autoClearColor,M=m.autoClearDepth,E=m.autoClearStencil,R=e.background;m.autoClear=!0,m.autoClearColor=!0,m.autoClearDepth=!0,m.autoClearStencil=!0,R===null&&(e.background=m.getClearColor(zM));const _=new qf(r,o,v);return _.position.copy(d),_.update(m,e),m.autoClear=S,m.autoClearColor=g,m.autoClearDepth=M,m.autoClearStencil=E,e.background=R,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sm,hv(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===Xa?this._setSize(e.image.length===0?Sm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Mm(e,!1,!1),r=Math.log2(e)-FM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Mm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,u=this._cubeCamera;o.material=r,u.renderTarget=e,u.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),u.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===Xa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ym()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=HM(),this._integrationMaterial=GM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const u=this._integrationMaterial.uniforms;u.envMap.value=this._sourceTarget.texture,u.sourceLod.value=Math.log2(t/bg);for(let c=0;c<=r;c++){const d=Gl.lodToRoughness(c,r);if(c>r-BM)u.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{const m=d>0?Math.log2(t)+.5*Math.log2(6/(Pg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=m,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=VM());const r=this._blurMaterial,o=r.uniforms,u=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=u.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(u,0,r)}}function Mm(s,e,t){return new hd(s,{minFilter:Ar,generateMipmaps:e,type:Oi,colorSpace:kl,depthBuffer:t})}function Qa(s,e,t){return new Zr({name:s,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:Wn,blending:Bs,depthTest:!1,depthWrite:!1})}function HM(){return Qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pg}u

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
	`)}function GM(){return Qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bg}},`

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
	`)}function VM(){return Qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${OM}
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
	`)}function ym(){return Qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Em(){return Qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function WM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Cc||M===Pc)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new hd(E.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",h),d(R.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const M=g.mapping,E=M===Cc||M===Pc,R=M===zs||M===Xa;if(E||R){let _=t.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Gl(s)),_=E?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const P=g.image;return E&&P&&P.height>0||R&&P&&m(P)?(r===null&&(r=new Gl(s)),_=E?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function d(g,M){return M===Cc?g.mapping=zs:M===Pc&&(g.mapping=Xa),g}function m(g){let M=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&M++;return M===E}function h(g){const M=g.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function XM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ul("WebGLRenderer: "+r+" extension not supported."),o}}}function YM(s,e,t,r){const o={},u=new WeakMap,c=new FinalizationRegistry(E=>delete o[E]);function d(E){m(E.target)}function m(E){E.index!==null&&e.remove(E.index);for(const _ in E.attributes)e.remove(E.attributes[_]);E.removeEventListener("dispose",d),delete o[E.id],c.unregister(E);const R=u.get(E);R&&(e.remove(R),u.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,R){return o[R.id]!==void 0||(R.addEventListener("dispose",d),o[R.id]=new WeakRef(R),c.register(R,R.id,R),t.memory.geometries++),R}function v(E){const R=E.attributes;for(const _ in R)e.update(R[_],s.ARRAY_BUFFER)}function S(E){const R=E.index,_=E.attributes.position;let x=0;if(_===void 0)return;const P=R!==null?R.array.length:_.array.length/3-1,O=_.count>=65535?hg:dg,b=new O(Math.ceil(P/3)*6,1),U=b.array;if(R!==null){const y=R.array;x=R.version;for(let C=0,q=0;C<P;C+=3){const z=y[C+0],V=y[C+1],K=y[C+2];U[q++]=z,U[q++]=V,U[q++]=V,U[q++]=K,U[q++]=K,U[q++]=z}}else{x=_.version;for(let y=0,C=0;y<P;y+=3){const q=y+0,z=y+1,V=y+2;U[C++]=q,U[C++]=z,U[C++]=z,U[C++]=V,U[C++]=V,U[C++]=q}}b.version=x;const D=u.get(E);D&&e.remove(D),u.set(E,b)}function g(E){const R=u.get(E);if(R){const _=E.index;_!==null&&R.version<_.version&&S(E)}else S(E);return u.get(E)}function M(){for(const E in o){const R=o[E].deref();R!==void 0&&m(R)}}return{get:h,update:v,getWireframeAttribute:g,dispose:M}}function qM(s,e,t){let r;function o(S){r=S}let u,c;function d(S){u=S.type,c=S.bytesPerElement}function m(S,g){s.drawElements(r,g,u,S*c),t.update(g,r,1)}function h(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,S*c,M),t.update(g,r,M))}function v(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,S,0,M);let R=0;for(let _=0;_<M;_++)R+=g[_];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function $M(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(u/3);break;case s.LINES:t.lines+=d*(u/2);break;case s.LINE_STRIP:t.lines+=d*(u-1);break;case s.LINE_LOOP:t.lines+=d*u;break;case s.POINTS:t.points+=d*u;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function KM(s,e,t){const r=new WeakMap,o=new Qt;function u(c,d,m){const h=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==S){let z=function(){C.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var M=z;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),R===!0&&(b=2),_===!0&&(b=3);let U=d.attributes.position.count*b,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const y=new Float32Array(U*D*4*S),C=new ug(y,U,D,S);C.type=Si,C.needsUpdate=!0;const q=b*4;for(let V=0;V<S;V++){const K=x[V],oe=P[V],B=O[V],re=U*D*4*V;for(let Z=0;Z<K.count;Z++){const X=Z*q;E===!0&&(o.fromBufferAttribute(K,Z),y[re+X+0]=o.x,y[re+X+1]=o.y,y[re+X+2]=o.z,y[re+X+3]=0),R===!0&&(o.fromBufferAttribute(oe,Z),y[re+X+4]=o.x,y[re+X+5]=o.y,y[re+X+6]=o.z,y[re+X+7]=0),_===!0&&(o.fromBufferAttribute(B,Z),y[re+X+8]=o.x,y[re+X+9]=o.y,y[re+X+10]=o.z,y[re+X+11]=B.itemSize===4?o.w:1)}}g={count:S,texture:C,size:new St(U,D)},r.set(d,g),d.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let _=0;_<h.length;_++)E+=h[_];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function ZM(s,e,t,r,o){let u=new WeakMap;function c(h){const v=o.render.frame,S=h.geometry,g=e.get(h,S);if(u.get(g)!==v&&(e.update(g),u.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==v&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),u.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;u.get(M)!==v&&(M.update(),u.set(M,v))}return g}function d(){u=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:d}}const JM={[Ym]:"LINEAR_TONE_MAPPING",[qm]:"REINHARD_TONE_MAPPING",[$m]:"CINEON_TONE_MAPPING",[Jf]:"ACES_FILMIC_TONE_MAPPING",[Zm]:"AGX_TONE_MAPPING",[Jm]:"NEUTRAL_TONE_MAPPING",[Km]:"CUSTOM_TONE_MAPPING"};function QM(s,e,t,r,o,u){const c=new Ii(e,t,{type:s,depthBuffer:o,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null,h=null;const v=new ti;v.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new _n([0,2,0,0,2,0],2));const S=new Vv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Xn(v,S),M=new wg(-1,1,1,-1,0,1);let E=null,R=null,_=!1,x,P=null,O=[],b=!1;this.setSize=function(U,D){c.setSize(U,D),d!==null&&d.setSize(U,D),m!==null&&m.setSize(U,D);for(let y=0;y<O.length;y++){const C=O[y];C.setSize&&C.setSize(U,D)}},this.setEffects=function(U){O=U,b=O.length>0&&O[0].isRenderPass===!0;const D=c.width,y=c.height;O.length>0&&d===null&&(d=new Ii(D,y,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),m=new Ii(D,y,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));const C=o===!0&&O.some(q=>q.needsDepthTexture===!0);C!==(c.depthTexture!==null)&&(C===!0&&h===null&&(h=new Gs(D,y),u===!0&&(h.format=Rr,h.type=Hs)),c.dispose(),c.depthTexture=C?h:null,c.resolveDepthBuffer=C,c.storeMultisampledDepthBuffer=C);for(let q=0;q<O.length;q++){const z=O[q];z.setSize&&z.setSize(D,y),C&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(h)}},this.begin=function(U,D){if(_||U.toneMapping===ji&&O.length===0)return!1;if(P=D,D!==null){const y=D.width,C=D.height;(c.width!==y||c.height!==C)&&this.setSize(y,C)}return b===!1&&U.setRenderTarget(c),x=U.toneMapping,U.toneMapping=ji,!0},this.hasRenderPass=function(){return b},this.end=function(U,D){U.toneMapping=x,_=!0;let y=c,C=d;for(let q=0;q<O.length;q++){const z=O[q];z.enabled!==!1&&(z.render(U,C,y,D),z.needsSwap!==!1&&(y=C,C=C===d?m:d))}if(E!==U.outputColorSpace||R!==U.toneMapping){E=U.outputColorSpace,R=U.toneMapping,S.defines={},gt.getTransfer(E)===Pt&&(S.defines.SRGB_TRANSFER="");const q=JM[R];q&&(S.defines[q]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=y.texture,U.setRenderTarget(P),U.render(g,M),P=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),v.dispose(),S.dispose()}}const Lg=new Pn,Ng=new Gs(1,1),Dg=new Sg(1),Ig=new ug,Ug=new Mv,Fg=new vg,Tm=[],wm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function qs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let u=Tm[o];if(u===void 0&&(u=new Float32Array(o),Tm[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(u,d)}return u}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Xl(s,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function jM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function iy(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),un(t,r)}}function ry(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),un(t,r)}}function sy(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),un(t,r)}}function ay(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function cy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function hy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function Yl(s){return s.version===0&&(s.compareFunction=og,s.needsUpdate=!0),s}function py(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?u=Yl(Ng):u=Lg,t.setTexture2D(e||u,o)}function my(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Ug,o)}function gy(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Yl(Dg):u=Fg,t.setTextureCube(e||u,o)}function _y(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ig,o)}function vy(s){switch(s){case 5126:return jM;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return ry;case 35676:return sy;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return uy;case 5125:return cy;case 36294:return fy;case 36295:return dy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return _y}}function xy(s,e){s.uniform1fv(this.addr,e)}function Sy(s,e){const t=qs(e,this.size,2);s.uniform2fv(this.addr,t)}function My(s,e){const t=qs(e,this.size,3);s.uniform3fv(this.addr,t)}function yy(s,e){const t=qs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ey(s,e){const t=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ty(s,e){const t=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wy(s,e){const t=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ay(s,e){s.uniform1iv(this.addr,e)}function Ry(s,e){s.uniform2iv(this.addr,e)}function Cy(s,e){s.uniform3iv(this.addr,e)}function Py(s,e){s.uniform4iv(this.addr,e)}function by(s,e){s.uniform1uiv(this.addr,e)}function Ly(s,e){s.uniform2uiv(this.addr,e)}function Ny(s,e){s.uniform3uiv(this.addr,e)}function Dy(s,e){s.uniform4uiv(this.addr,e)}function Iy(s,e,t){const r=this.cache,o=e.length,u=Xl(t,o);ln(r,u)||(s.uniform1iv(this.addr,u),un(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=Yl(Ng):c=Lg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,u[d])}function Uy(s,e,t){const r=this.cache,o=e.length,u=Xl(t,o);ln(r,u)||(s.uniform1iv(this.addr,u),un(r,u));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Ug,u[c])}function Fy(s,e,t){const r=this.cache,o=e.length,u=Xl(t,o);ln(r,u)||(s.uniform1iv(this.addr,u),un(r,u));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Yl(Dg):c=Fg;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||c,u[d])}function Oy(s,e,t){const r=this.cache,o=e.length,u=Xl(t,o);ln(r,u)||(s.uniform1iv(this.addr,u),un(r,u));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Ig,u[c])}function By(s){switch(s){case 5126:return xy;case 35664:return Sy;case 35665:return My;case 35666:return yy;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return by;case 36294:return Ly;case 36295:return Ny;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}class ky{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=vy(t.type)}}class zy{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=By(t.type)}}class Hy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,t[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function Gy(s,e,t){const r=s.name,o=r.length;for(tf.lastIndex=0;;){const u=tf.exec(r),c=tf.lastIndex;let d=u[1];const m=u[2]==="]",h=u[3];if(m&&(d=d|0),h===void 0||h==="["&&c+2===o){Pm(t,h===void 0?new ky(d,s,e):new zy(d,s,e));break}else{let S=t.map[d];S===void 0&&(S=new Hy(d),Pm(t,S)),t=S}}}class Fl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),m=e.getUniformLocation(t,d.name);Gy(d,m,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,t,r,o){const u=this.map[t];u!==void 0&&u.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let u=0,c=t.length;u!==c;++u){const d=t[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function bm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Vy=37297;let Wy=0;function Xy(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Lm=new lt;function Yy(s){gt._getMatrix(Lm,gt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(s)){case zl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+u+`

`+Xy(s.getShaderSource(e),d)}else return u}function qy(s,e){const t=Yy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const $y={[Ym]:"Linear",[qm]:"Reinhard",[$m]:"Cineon",[Jf]:"ACESFilmic",[Zm]:"AgX",[Jm]:"Neutral",[Km]:"Custom"};function Ky(s,e){const t=$y[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pl=new le;function Zy(){gt.getLuminanceCoefficients(Pl);const s=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function Qy(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jy(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),t[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function za(s){return s!==""}function Dm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(eE,tE)}function tE(s,e){const t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $f(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let u=parseInt(e);u<parseInt(t);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const rE={[bl]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[Xa]:"ENVMAP_MODE_REFRACTION"};function oE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":aE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lE={[Xm]:"ENVMAP_BLENDING_MULTIPLY",[Z_]:"ENVMAP_BLENDING_MIX",[J_]:"ENVMAP_BLENDING_ADD"};function uE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":lE[s.combine]||"ENVMAP_BLENDING_NONE"}function cE(s,e,t,r){const o=s.getContext(),u=t.defines;let c=t.vertexShader,d=t.fragmentShader;const m=sE(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=oE(t),S=uE(t),g=Jy(t),M=Qy(u),E=o.createProgram();let R,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(za).join(`
`),R.length>0&&(R+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(za).join(`
`),_.length>0&&(_+=`
`)):(R=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),_=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ft.tonemapping_pars_fragment:"",t.toneMapping!==ji?Ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,qy("linearToOutputTexel",t.outputColorSpace),Zy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),c=$f(c),c=Dm(c,t),c=Im(c,t),d=$f(d),d=Dm(d,t),d=Im(d,t),c=Um(c),d=Um(d),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,R=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,_=["#define varying in",t.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=x+R+c,O=x+_+d,b=bm(o,o.VERTEX_SHADER,P),U=bm(o,o.FRAGMENT_SHADER,O);o.attachShader(E,b),o.attachShader(E,U),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function D(z){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(E)||"",K=o.getShaderInfoLog(b)||"",oe=o.getShaderInfoLog(U)||"",B=V.trim(),re=K.trim(),Z=oe.trim();let X=!0,Q=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,b,U);else{const Y=Nm(o,b,"vertex"),$=Nm(o,U,"fragment");Rt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+B+`
`+Y+`
`+$)}else B!==""?at("WebGLProgram: Program Info Log:",B):(re===""||Z==="")&&(Q=!1);Q&&(z.diagnostics={runnable:X,programLog:B,vertexShader:{log:re,prefix:R},fragmentShader:{log:Z,prefix:_}})}o.deleteShader(b),o.deleteShader(U),y=new Fl(o,E),C=jy(o,E)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(E,Vy)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wy++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=U,this}let fE=0;class dE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hE(e),t.set(e,r)),r}}class hE{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}}function pE(s){return s===Kr||s===Ol||s===Bl}function mE(s,e,t,r,o,u){const c=new cg,d=new dE,m=new Set,h=[],v=new Map,S=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return m.add(y),y===0?"uv":`uv${y}`}function E(y,C,q,z,V,K){const oe=z.fog,B=V.geometry,re=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?z.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=e.get(y.envMap||re,Z),Q=g[y.type];let Y=r.precision;y.precision!==null&&(Y=r.getMaxPrecision(y.precision),Y!==y.precision&&at("WebGLProgram.getParameters:",y.precision,"not supported, using",Y,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,N=$!==void 0?$.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let Le,ie,me,ye;if(Q){const Oe=Ni[Q];Le=Oe.vertexShader,ie=Oe.fragmentShader}else{Le=y.vertexShader,ie=y.fragmentShader;const Oe=d.getVertexShaderStage(y),mt=d.getFragmentShaderStage(y);d.update(y,Oe,mt),me=Oe.id,ye=mt.id}const Ue=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ze=V.isInstancedMesh===!0,vt=V.isBatchedMesh===!0,je=!!y.map,yt=!!y.matcap,Et=!!X,ct=Et&&X.isPMREMTexture===!0,jt=!!y.aoMap,Yt=!!y.lightMap,cn=!!y.bumpMap&&y.wireframe===!1,Ut=!!y.normalMap,Un=!!y.displacementMap,kt=!!y.emissiveMap,nn=!!y.metalnessMap,Mn=!!y.roughnessMap,bn=y.anisotropy>0,W=y.clearcoat>0,Ln=y.diffuseRoughness>0,Nt=y.dispersion>0,bt=y.retroreflectivity>0,De=y.iridescence>0,qt=y.sheen>0,Qe=y.transmission>0,nt=bn&&!!y.anisotropyMap,L=W&&!!y.clearcoatMap,w=W&&!!y.clearcoatNormalMap,ee=W&&!!y.clearcoatRoughnessMap,Me=Ln&&!!y.diffuseRoughnessMap,pe=De&&!!y.iridescenceMap,Re=De&&!!y.iridescenceThicknessMap,be=qt&&!!y.sheenColorMap,fe=qt&&!!y.sheenRoughnessMap,de=!!y.specularMap,we=!!y.specularColorMap,F=!!y.specularIntensityMap,he=Qe&&!!y.transmissionMap,ce=Qe&&!!y.thicknessMap,Pe=!!y.gradientMap,Te=!!y.alphaMap,Ce=y.alphaTest>0,$e=!!y.alphaHash,ot=!!y.extensions;let Se=ji;y.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Je=ct?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,rt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:ie,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Y,batching:vt,batchingColor:vt&&V._colorsTexture!==null,instancing:ze,instancingColor:ze&&V.instanceColor!==null,instancingMorph:ze&&V.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:yt,envMap:Et,envMapMode:Et&&X.mapping,envMapPMREM:ct,envMapMaxLod:ct?Je.length-1:null,envMapSize:ct?Je[0].width:null,aoMap:jt,lightMap:Yt,bumpMap:cn,normalMap:Ut,displacementMap:Un,emissiveMap:kt,normalMapObjectSpace:Ut&&y.normalMapType===ev,normalMapTangentSpace:Ut&&y.normalMapType===Vf,packedNormalMap:Ut&&y.normalMapType===Vf&&pE(y.normalMap.format),metalnessMap:nn,roughnessMap:Mn,anisotropy:bn,anisotropyMap:nt,clearcoat:W,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:ee,diffuseRoughness:Ln,diffuseRoughnessMap:Me,dispersion:Nt,retroreflection:bt,iridescence:De,iridescenceMap:pe,iridescenceThicknessMap:Re,sheen:qt,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:de,specularColorMap:we,specularIntensityMap:F,transmission:Qe,transmissionMap:he,thicknessMap:ce,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===Ha&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ce,alphaHash:$e,combine:y.combine,mapUv:je&&M(y.map.channel),aoMapUv:jt&&M(y.aoMap.channel),lightMapUv:Yt&&M(y.lightMap.channel),bumpMapUv:cn&&M(y.bumpMap.channel),normalMapUv:Ut&&M(y.normalMap.channel),displacementMapUv:Un&&M(y.displacementMap.channel),emissiveMapUv:kt&&M(y.emissiveMap.channel),metalnessMapUv:nn&&M(y.metalnessMap.channel),roughnessMapUv:Mn&&M(y.roughnessMap.channel),anisotropyMapUv:nt&&M(y.anisotropyMap.channel),clearcoatMapUv:L&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&M(y.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&M(y.sheenRoughnessMap.channel),specularMapUv:de&&M(y.specularMap.channel),specularColorMapUv:we&&M(y.specularColorMap.channel),specularIntensityMapUv:F&&M(y.specularIntensityMap.channel),transmissionMapUv:he&&M(y.transmissionMap.channel),thicknessMapUv:ce&&M(y.thicknessMap.channel),alphaMapUv:Te&&M(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ut||bn),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(je||Te),fog:!!oe,useFog:y.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&Ut===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:K.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Pt,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ji,flipSided:y.side===Wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=m.has(1),rt.vertexUv2s=m.has(2),rt.vertexUv3s=m.has(3),m.clear(),rt}function R(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)C.push(q),C.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(_(C,y),x(C,y),C.push(s.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function _(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapPMREM),y.push(C.envMapMaxLod),y.push(C.envMapSize),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.diffuseRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.numLightProbeGrids),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function x(y,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.retroreflection&&c.enable(24),C.diffuseRoughness&&c.enable(25),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),C.packedNormalMap&&c.enable(22),C.vertexNormals&&c.enable(23),y.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),C.numLightProbeGrids>0&&c.enable(22),C.hasPositionAttribute&&c.enable(23),y.push(c.mask)}function P(y){const C=g[y.type];let q;if(C){const z=Ni[C];q=zv.clone(z.uniforms)}else q=y.uniforms;return q}function O(y,C){let q=v.get(C);return q!==void 0?++q.usedTimes:(q=new cE(s,C,y,o),h.push(q),v.set(C,q)),q}function b(y){if(--y.usedTimes===0){const C=h.indexOf(y);h[C]=h[h.length-1],h.pop(),v.delete(y.cacheKey),y.destroy()}}function U(y){d.remove(y)}function D(){d.dispose()}return{getParameters:E,getProgramCacheKey:R,getUniforms:P,acquireProgram:O,releaseProgram:b,releaseShaderCache:U,programs:h,dispose:D}}function gE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,m){s.get(c)[d]=m}function u(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:u}}function _E(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bm(){const s=[];let e=0;const t=[],r=[],o=[];function u(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,E,R,_,x){let P=s[e];return P===void 0?(P={id:g.id,object:g,geometry:M,material:E,materialVariant:c(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:x},s[e]=P):(P.id=g.id,P.object=g,P.geometry=M,P.material=E,P.materialVariant=c(g),P.groupOrder=R,P.renderOrder=g.renderOrder,P.z=_,P.group=x),e++,P}function m(g,M,E,R,_,x,P){P.reversedDepth===!0&&(_=-_);const O=d(g,M,E,R,_,x);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):t.push(O)}function h(g,M,E,R,_,x){const P=d(g,M,E,R,_,x);E.transmission>0?r.unshift(P):E.transparent===!0?o.unshift(P):t.unshift(P)}function v(g,M){t.length>1&&t.sort(g||_E),r.length>1&&r.sort(M||Om),o.length>1&&o.sort(M||Om)}function S(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:u,push:m,unshift:h,finish:S,sort:v}}function vE(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Bm,s.set(r,[c])):o>=u.length?(c=new Bm,u.push(c)):c=u[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function xE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new xt};break;case"SpotLight":t={position:new le,direction:new le,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=t,t}}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ME=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EE(s){const e=new xE,t=SE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const o=new le,u=new It,c=new It;function d(h){let v=0,S=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let M=0,E=0,R=0,_=0,x=0,P=0,O=0,b=0,U=0,D=0,y=0,C=0,q=0,z=0;h.sort(yE);for(let K=0,oe=h.length;K<oe;K++){const B=h[K],re=B.color,Z=B.intensity,X=B.distance;let Q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Kr?Q=B.shadow.map.texture:Q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=re.r*Z,S+=re.g*Z,g+=re.b*Z;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(B.sh.coefficients[Y],Z);z++}else if(B.isSunLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const $=B.shadow,N=t.get(B);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[E]=N,r.sunShadowMap[E]=Q;const ne=$.getViewportCount();for(let Le=0;Le<ne;Le++)r.sunShadowMatrix[R+Le]=$.getMatrix(Le),r.sunShadowCascade[R+Le]=$._cascadeData[Le];R+=ne,E++}r.sun[M]=Y,M++}else if(B.isDirectionalLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const $=B.shadow,N=t.get(B);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,r.directionalShadow[_]=N,r.directionalShadowMap[_]=Q,r.directionalShadowMatrix[_]=B.shadow.matrix,U++}r.directional[_]=Y,_++}else if(B.isSpotLight){const Y=e.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(re).multiplyScalar(Z),Y.distance=X,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,r.spot[P]=Y;const $=B.shadow;if(B.map&&(r.spotLightMap[C]=B.map,C++,$.updateMatrices(B),B.castShadow&&q++),r.spotLightMatrix[P]=$.matrix,B.castShadow){const N=t.get(B);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,r.spotShadow[P]=N,r.spotShadowMap[P]=Q,y++}P++}else if(B.isRectAreaLight){const Y=e.get(B);Y.color.copy(re).multiplyScalar(Z),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),r.rectArea[O]=Y,O++}else if(B.isPointLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const $=B.shadow,N=t.get(B);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,r.pointShadow[x]=N,r.pointShadowMap[x]=Q,r.pointShadowMatrix[x]=B.shadow.matrix,D++}r.point[x]=Y,x++}else if(B.isHemisphereLight){const Y=e.get(B);Y.skyColor.copy(B.color).multiplyScalar(Z),Y.groundColor.copy(B.groundColor).multiplyScalar(Z),r.hemi[b]=Y,b++}}O>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=g;const V=r.hash;(V.sunLength!==M||V.directionalLength!==_||V.pointLength!==x||V.spotLength!==P||V.rectAreaLength!==O||V.hemiLength!==b||V.numSunShadows!==E||V.numDirectionalShadows!==U||V.numPointShadows!==D||V.numSpotShadows!==y||V.numSpotMaps!==C||V.numLightProbes!==z)&&(r.sun.length=M,r.directional.length=_,r.spot.length=P,r.rectArea.length=O,r.point.length=x,r.hemi.length=b,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=y,r.spotShadowMap.length=y,r.spotLightMatrix.length=y+C-q,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=z,V.sunLength=M,V.directionalLength=_,V.pointLength=x,V.spotLength=P,V.rectAreaLength=O,V.hemiLength=b,V.numSunShadows=E,V.numDirectionalShadows=U,V.numPointShadows=D,V.numSpotShadows=y,V.numSpotMaps=C,V.numLightProbes=z,r.version=ME++)}function m(h,v){let S=0,g=0,M=0,E=0,R=0,_=0;const x=v.matrixWorldInverse;for(let P=0,O=h.length;P<O;P++){const b=h[P];if(b.isSunLight){const U=r.sun[S];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(x),S++}else if(b.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),g++}else if(b.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(x),E++}else if(b.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(x),c.identity(),u.copy(b.matrixWorld),u.premultiply(x),c.extractRotation(u),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),R++}else if(b.isPointLight){const U=r.point[M];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(x),M++}else if(b.isHemisphereLight){const U=r.hemi[_];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(x),_++}}}return{setup:d,setupView:m,state:r}}function km(s){const e=new EE(s),t=[],r=[],o=[];function u(S){v.camera=S,t.length=0,r.length=0,o.length=0}function c(S){S.isLightProbeGrid?o.push(S):t.push(S)}function d(S){r.push(S)}function m(){e.setup(t),o.sort((S,g)=>S.priority-g.priority||S.id-g.id)}function h(S){e.setupView(t,S)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:m,setupLightsView:h,pushLight:c,pushShadow:d}}function TE(s){let e=new WeakMap;function t(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new km(s),e.set(o,[d])):u>=c.length?(d=new km(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`,RE=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],CE=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],zm=new It,Fa=new le,nf=new le;function PE(s,e,t){let r=new $a;const o=new St,u=new St,c=new Qt,d=new Wv,m=new Xv,h={},v=t.maxTextureSize,S={[$r]:Wn,[Wn]:$r,[Ji]:Ji},g=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:wE,fragmentShader:AE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new ti;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Xn(E,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let x=this.type;this.render=function(D,y,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===L_&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bl);const q=s.getRenderTarget(),z=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Bs),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const oe=x!==this.type;oe&&y.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(re=>re.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,re=D.length;B<re;B++){const Z=D[B],X=Z.shadow;if(X===void 0){at("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const Q=X.getFrameExtents();o.multiply(Q),u.copy(X.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/Q.x),o.x=u.x*Q.x,X.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/Q.y),o.y=u.y*Q.y,X.mapSize.y=u.y));const Y=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||oe===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ba){if(Z.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ii(o.x,o.y,{format:Kr,type:Oi,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new Gs(o.x,o.y,Si),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=Cr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn}else Z.isPointLight?(X.map=new hd(o.x),X.map.depthTexture=new Sg(o.x,Fi)):(X.map=new Ii(o.x,o.y),X.map.depthTexture=new Gs(o.x,o.y,Fi)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=Cr,this.type===bl?(X.map.depthTexture.compareFunction=Y?ag:sg,X.map.depthTexture.minFilter=Vn,X.map.depthTexture.magFilter=Vn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==o.x||X.map.height!==o.y)&&X.map.setSize(o.x,o.y);const $=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,C);const N=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:C.layers;for(let ne=0;ne<$;ne++){const Le=X.getCamera(ne);if(Z.isPointLight){const ie=X.camera,me=X.matrix,ye=Z.distance||ie.far;ye!==ie.far&&(ie.far=ye,ie.updateProjectionMatrix()),Fa.setFromMatrixPosition(Z.matrixWorld),ie.position.copy(Fa),nf.copy(ie.position),nf.add(RE[ne]),ie.up.copy(CE[ne]),ie.lookAt(nf),ie.updateMatrixWorld(),me.makeTranslation(-Fa.x,-Fa.y,-Fa.z),zm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),X._frustum.setFromProjectionMatrix(zm,ie.coordinateSystem,ie.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(X.map),s.clear());const ie=X.getViewport(ne);c.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),K.viewport(c)}r=X.getFrustum(ne),b(y,C,Le,Z,N,this.type)}X.isPointLightShadow!==!0&&this.type===Ba&&P(X,C),X.needsUpdate=!1}x=this.type,_.needsUpdate=!1,s.setRenderTarget(q,z,V)};function P(D,y){const C=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ii(o.x,o.y,{format:Kr,type:Oi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(y,null,C,g,R,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(y,null,C,M,R,null)}function O(D,y,C,q){let z=null;const V=C.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)z=V;else if(z=C.isPointLight===!0?m:d,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const K=z.uuid,oe=y.uuid;let B=h[K];B===void 0&&(B={},h[K]=B);let re=B[oe];re===void 0&&(re=z.clone(),B[oe]=re,y.addEventListener("dispose",U)),z=re}if(z.visible=y.visible,z.wireframe=y.wireframe,q===Ba?z.side=y.shadowSide!==null?y.shadowSide:y.side:z.side=y.shadowSide!==null?y.shadowSide:S[y.side],z.alphaMap=y.alphaMap,z.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,z.map=y.map,z.clipShadows=y.clipShadows,z.clippingPlanes=y.clippingPlanes,z.clipIntersection=y.clipIntersection,z.displacementMap=y.displacementMap,z.displacementScale=y.displacementScale,z.displacementBias=y.displacementBias,z.wireframeLinewidth=y.wireframeLinewidth,z.linewidth=y.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const K=s.properties.get(z);K.light=C}return z}function b(D,y,C,q,z,V){if(D.visible===!1)return;if(D.layers.test(z)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===Ba)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld);const B=e.update(D),re=D.material;if(Array.isArray(re)){const Z=B.groups;for(let X=0,Q=Z.length;X<Q;X++){const Y=Z[X],$=re[Y.materialIndex];if($&&$.visible){const N=O(D,$,q,V);D.onBeforeShadow(s,D,y,C,B,N,Y),s.renderBufferDirect(C,null,B,N,D,Y),D.onAfterShadow(s,D,y,C,B,N,Y)}}}else if(re.visible){const Z=O(D,re,q,V);D.onBeforeShadow(s,D,y,C,B,Z,null),s.renderBufferDirect(C,null,B,Z,D,null),D.onAfterShadow(s,D,y,C,B,Z,null)}}const oe=D.children;for(let B=0,re=oe.length;B<re;B++)b(oe[B],y,C,q,z,V)}function U(D){D.target.removeEventListener("dispose",U);for(const C in h){const q=h[C],z=D.target.uuid;z in q&&(q[z].dispose(),delete q[z])}}}function bE(s,e){function t(){let F=!1;const he=new Qt;let ce=null;const Pe=new Qt(0,0,0,0);return{setMask:function(Te){ce!==Te&&!F&&(s.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){F=Te},setClear:function(Te,Ce,$e,ot,Se){Se===!0&&(Te*=ot,Ce*=ot,$e*=ot),he.set(Te,Ce,$e,ot),Pe.equals(he)===!1&&(s.clearColor(Te,Ce,$e,ot),Pe.copy(he))},reset:function(){F=!1,ce=null,Pe.set(-1,0,0,0)}}}function r(){let F=!1,he=!1,ce=null,Pe=null,Te=null;return{setReversed:function(Ce){if(he!==Ce){const $e=e.get("EXT_clip_control");Ce?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),he=Ce;const ot=Te;Te=null,this.setClear(ot)}},getReversed:function(){return he},setTest:function(Ce){Ce?_e(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(Ce){ce!==Ce&&!F&&(s.depthMask(Ce),ce=Ce)},setFunc:function(Ce){if(he&&(Ce=fv[Ce]),Pe!==Ce){switch(Ce){case rf:s.depthFunc(s.NEVER);break;case sf:s.depthFunc(s.ALWAYS);break;case af:s.depthFunc(s.LESS);break;case Wa:s.depthFunc(s.LEQUAL);break;case of:s.depthFunc(s.EQUAL);break;case lf:s.depthFunc(s.GEQUAL);break;case uf:s.depthFunc(s.GREATER);break;case cf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){Te!==Ce&&(Te=Ce,he&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){F=!1,ce=null,Pe=null,Te=null,he=!1}}}function o(){let F=!1,he=null,ce=null,Pe=null,Te=null,Ce=null,$e=null,ot=null,Se=null;return{setTest:function(Je){F||(Je?_e(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Je){he!==Je&&!F&&(s.stencilMask(Je),he=Je)},setFunc:function(Je,rt,Oe){(ce!==Je||Pe!==rt||Te!==Oe)&&(s.stencilFunc(Je,rt,Oe),ce=Je,Pe=rt,Te=Oe)},setOp:function(Je,rt,Oe){(Ce!==Je||$e!==rt||ot!==Oe)&&(s.stencilOp(Je,rt,Oe),Ce=Je,$e=rt,ot=Oe)},setLocked:function(Je){F=Je},setClear:function(Je){Se!==Je&&(s.clearStencil(Je),Se=Je)},reset:function(){F=!1,he=null,ce=null,Pe=null,Te=null,Ce=null,$e=null,ot=null,Se=null}}}const u=new t,c=new r,d=new o;let m={};const h=new WeakMap;let v={},S={},g={},M=new WeakMap,E=[],R=null,_=!1,x=null,P=null,O=null,b=null,U=null,D=null,y=null,C=new xt(0,0,0),q=0,z=!1,V=null,K=null,oe=null,B=null,re=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=Q>=2);let $=null,N={};const ne=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),ie=new Qt().fromArray(ne),me=new Qt().fromArray(Le);function ye(F,he,ce,Pe){const Te=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(F,Ce),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ce;$e++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(he+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Ce}const Ue={};Ue[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),c.setFunc(Wa),cn(!1),Ut(Hp),_e(s.CULL_FACE),jt(Bs);function _e(F){v[F]!==!0&&(s.enable(F),v[F]=!0)}function ze(F){v[F]!==!1&&(s.disable(F),v[F]=!1)}function vt(F,he){return g[F]!==he?(s.bindFramebuffer(F,he),g[F]=he,F===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=he),F===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=he),!0):!1}function je(F,he){let ce=E,Pe=!1;if(F){ce=M.get(he),ce===void 0&&(ce=[],M.set(he,ce));const Te=F.textures;if(ce.length!==Te.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,$e=Te.length;Ce<$e;Ce++)ce[Ce]=s.COLOR_ATTACHMENT0+Ce;ce.length=Te.length,Pe=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ce)}function yt(F){return R!==F?(s.useProgram(F),R=F,!0):!1}const Et={[Os]:s.FUNC_ADD,[D_]:s.FUNC_SUBTRACT,[I_]:s.FUNC_REVERSE_SUBTRACT};Et[U_]=s.MIN,Et[F_]=s.MAX;const ct={[O_]:s.ZERO,[B_]:s.ONE,[k_]:s.SRC_COLOR,[Vm]:s.SRC_ALPHA,[X_]:s.SRC_ALPHA_SATURATE,[V_]:s.DST_COLOR,[H_]:s.DST_ALPHA,[z_]:s.ONE_MINUS_SRC_COLOR,[Wm]:s.ONE_MINUS_SRC_ALPHA,[W_]:s.ONE_MINUS_DST_COLOR,[G_]:s.ONE_MINUS_DST_ALPHA,[Y_]:s.CONSTANT_COLOR,[q_]:s.ONE_MINUS_CONSTANT_COLOR,[$_]:s.CONSTANT_ALPHA,[K_]:s.ONE_MINUS_CONSTANT_ALPHA};function jt(F,he,ce,Pe,Te,Ce,$e,ot,Se,Je){if(F===Bs){_===!0&&(ze(s.BLEND),_=!1);return}if(_===!1&&(_e(s.BLEND),_=!0),F!==N_){if(F!==x||Je!==z){if((P!==Os||U!==Os)&&(s.blendEquation(s.FUNC_ADD),P=Os,U=Os),Je)switch(F){case Ha:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vp:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wp:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",F);break}O=null,b=null,D=null,y=null,C.set(0,0,0),q=0,x=F,z=Je}return}Te=Te||he,Ce=Ce||ce,$e=$e||Pe,(he!==P||Te!==U)&&(s.blendEquationSeparate(Et[he],Et[Te]),P=he,U=Te),(ce!==O||Pe!==b||Ce!==D||$e!==y)&&(s.blendFuncSeparate(ct[ce],ct[Pe],ct[Ce],ct[$e]),O=ce,b=Pe,D=Ce,y=$e),(ot.equals(C)===!1||Se!==q)&&(s.blendColor(ot.r,ot.g,ot.b,Se),C.copy(ot),q=Se),x=F,z=!1}function Yt(F,he){F.side===Ji?ze(s.CULL_FACE):_e(s.CULL_FACE);let ce=F.side===Wn;he&&(ce=!ce),cn(ce),F.blending===Ha&&F.transparent===!1?jt(Bs):jt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),u.setMask(F.colorWrite);const Pe=F.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function cn(F){V!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),V=F)}function Ut(F){F!==P_?(_e(s.CULL_FACE),F!==K&&(F===Hp?s.cullFace(s.BACK):F===b_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),K=F}function Un(F){F!==oe&&(X&&s.lineWidth(F),oe=F)}function kt(F,he,ce){F?(_e(s.POLYGON_OFFSET_FILL),(B!==he||re!==ce)&&(B=he,re=ce,c.getReversed()&&(he=-he,ce=-ce),s.polygonOffset(he,ce))):ze(s.POLYGON_OFFSET_FILL)}function nn(F){F?_e(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Mn(F){F===void 0&&(F=s.TEXTURE0+Z-1),$!==F&&(s.activeTexture(F),$=F)}function bn(F,he,ce){ce===void 0&&($===null?ce=s.TEXTURE0+Z-1:ce=$);let Pe=N[ce];Pe===void 0&&(Pe={type:void 0,texture:void 0},N[ce]=Pe),(Pe.type!==F||Pe.texture!==he)&&($!==ce&&(s.activeTexture(ce),$=ce),s.bindTexture(F,he||Ue[F]),Pe.type=F,Pe.texture=he)}function W(){const F=N[$];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ln(){try{s.compressedTexImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function Nt(){try{s.compressedTexImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function bt(){try{s.texSubImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function De(){try{s.texSubImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function qt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function nt(){try{s.texStorage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function L(){try{s.texStorage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function w(){try{s.texImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function ee(){try{s.texImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function Me(F){return S[F]!==void 0?S[F]:s.getParameter(F)}function pe(F,he){S[F]!==he&&(s.pixelStorei(F,he),S[F]=he)}function Re(F){ie.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function be(F){me.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),me.copy(F))}function fe(F,he){let ce=h.get(he);ce===void 0&&(ce=new WeakMap,h.set(he,ce));let Pe=ce.get(F);Pe===void 0&&(Pe=s.getUniformBlockIndex(he,F.name),s.uniformBlockBinding(he,Pe,Pe),ce.set(F,Pe))}function de(F,he,ce){const Te=h.get(he).get(F);m[Te]!==ce&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,ce),m[Te]=ce)}function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},$=null,N={},g={},m={},M=new WeakMap,E=[],R=null,_=!1,x=null,P=null,O=null,b=null,U=null,D=null,y=null,C=new xt(0,0,0),q=0,z=!1,V=null,K=null,oe=null,B=null,re=null,ie.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:_e,disable:ze,bindFramebuffer:vt,drawBuffers:je,useProgram:yt,setBlending:jt,setMaterial:Yt,setFlipSided:cn,setCullFace:Ut,setLineWidth:Un,setPolygonOffset:kt,setScissorTest:nn,activeTexture:Mn,bindTexture:bn,unbindTexture:W,compressedTexImage2D:Ln,compressedTexImage3D:Nt,texImage2D:w,texImage3D:ee,pixelStorei:pe,getParameter:Me,updateUBOMapping:fe,uniformBlockBinding:de,texStorage2D:nt,texStorage3D:L,texSubImage2D:bt,texSubImage3D:De,compressedTexSubImage2D:qt,compressedTexSubImage3D:Qe,scissor:Re,viewport:be,reset:we}}function LE(s,e,t,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,v=new WeakMap,S=new Set;let g;const M=new WeakMap,E=new Set,R=new FinalizationRegistry(L=>E.delete(L));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return _?new OffscreenCanvas(L,w):Hl("canvas")}function P(L,w,ee){let Me=1;const pe=nt(L);if((pe.width>ee||pe.height>ee)&&(Me=ee/Math.max(pe.width,pe.height)),Me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(Me*pe.width),be=Math.floor(Me*pe.height);g===void 0&&(g=x(Re,be));const fe=w?x(Re,be):g;return fe.width=Re,fe.height=be,fe.getContext("2d").drawImage(L,0,0,Re,be),at("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Re+"x"+be+")."),fe}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function O(L){return L.generateMipmaps}function b(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,w,ee,Me,pe,Re=!1){if(L!==null){if(s[L]!==void 0)return s[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be;Me&&(be=e.get("EXT_texture_norm16"),be||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=w;if(w===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8),ee===s.UNSIGNED_SHORT&&be&&(fe=be.R16_EXT),ee===s.SHORT&&be&&(fe=be.R16_SNORM_EXT)),w===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),w===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8),ee===s.UNSIGNED_SHORT&&be&&(fe=be.RG16_EXT),ee===s.SHORT&&be&&(fe=be.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),w===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),w===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),w===s.RGB&&(ee===s.UNSIGNED_SHORT&&be&&(fe=be.RGB16_EXT),ee===s.SHORT&&be&&(fe=be.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),w===s.RGBA){const de=Re?zl:gt.getTransfer(pe);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=de===Pt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&be&&(fe=be.RGBA16_EXT),ee===s.SHORT&&be&&(fe=be.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(L,w){let ee;return L?w===null||w===Fi||w===Hs?ee=s.DEPTH24_STENCIL8:w===Si?ee=s.DEPTH32F_STENCIL8:w===Ya&&(ee=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Fi||w===Hs?ee=s.DEPTH_COMPONENT24:w===Si?ee=s.DEPTH_COMPONENT32F:w===Ya&&(ee=s.DEPTH_COMPONENT16),ee}function C(L,w){return O(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Vn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function q(L){const w=new WeakRef(L);r.get(L).__ref=w,E.add(w),R.register(L,w,w)}function z(L){const w=r.get(L).__ref;w!==void 0&&(E.delete(w),R.unregister(w))}function V(L){oe(L.target)}function K(L){B(L.target)}function oe(L){L.removeEventListener("dispose",V),z(L),Z(L),L.isVideoTexture&&v.delete(L),L.isHTMLTexture&&S.delete(L)}function B(L){L.removeEventListener("dispose",K),z(L),Q(L)}function re(){for(const L of E){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?B(w):oe(w))}E.clear(),S.clear()}function Z(L){const w=r.get(L);if(w.__webglInit===void 0)return;const ee=L.source,Me=M.get(ee);if(Me){const pe=Me[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&X(L),Object.keys(Me).length===0&&M.delete(ee)}r.remove(L)}function X(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const ee=L.source,Me=M.get(ee);delete Me[w.__cacheKey],c.memory.textures--}function Q(L){const w=r.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const ee=L.depthTexture;if(ee&&ee.renderTarget===L&&oe(ee),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let Re=0;Re<w.__webglFramebuffer[pe].length;Re++)s.deleteFramebuffer(w.__webglFramebuffer[pe][Re]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Me=L.textures;for(let pe=0,Re=Me.length;pe<Re;pe++){const be=r.get(Me[pe]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),c.memory.textures--),r.remove(Me[pe])}r.remove(L)}let Y=0;function $(){Y=0}function N(){return Y}function ne(L){Y=L}function Le(){const L=Y;return L>=o.maxTextures&&at("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),Y+=1,L}function ie(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function me(L,w){const ee=r.get(L);if(L.isVideoTexture&&qt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ee.__version!==L.version){const Me=L.image;if(Me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(ee,L,w);return}}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+w)}function ye(L,w){const ee=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){Yt(ee,L,w);return}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+w)}function Ue(L,w){const ee=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){Yt(ee,L,w);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+w)}function _e(L,w){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){cn(ee,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+w)}const ze={[ff]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[df]:s.MIRRORED_REPEAT},vt={[Sn]:s.NEAREST,[Q_]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[bc]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},je={[nv]:s.NEVER,[og]:s.ALWAYS,[iv]:s.LESS,[sg]:s.LEQUAL,[rv]:s.EQUAL,[ag]:s.GEQUAL,[sv]:s.GREATER,[av]:s.NOTEQUAL};function yt(L,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Vn||w.magFilter===bc||w.magFilter===sl||w.magFilter===Ar||w.minFilter===Vn||w.minFilter===bc||w.minFilter===sl||w.minFilter===Ar)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ze[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ze[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ze[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,vt[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,vt[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,je[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==sl&&w.minFilter!==Ar||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Et(L,w){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",V),q(w));const Me=w.source;let pe=M.get(Me);pe===void 0&&(pe={},M.set(Me,pe));const Re=ie(w);if(Re!==L.__cacheKey){pe[Re]===void 0&&(pe[Re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),pe[Re].usedTimes++;const be=pe[L.__cacheKey];be!==void 0&&(pe[L.__cacheKey].usedTimes--,be.usedTimes===0&&X(w)),L.__cacheKey=Re,L.__webglTexture=pe[Re].texture}return ee}function ct(L,w,ee){return Math.floor(Math.floor(L/ee)/w)}function jt(L,w,ee,Me){const Re=L.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,ee,Me,w.data);else{Re.sort((F,he)=>F.start-he.start);let be=0;for(let F=1;F<Re.length;F++){const he=Re[be],ce=Re[F],Pe=he.start+he.count,Te=ct(ce.start,w.width,4),Ce=ct(he.start,w.width,4);ce.start<=Pe+1&&Te===Ce&&ct(ce.start+ce.count-1,w.width,4)===Te?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++be,Re[be]=ce)}Re.length=be+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let F=0,he=Re.length;F<he;F++){const ce=Re[F],Pe=Math.floor(ce.start/4),Te=Math.ceil(ce.count/4),Ce=Pe%w.width,$e=Math.floor(Pe/w.width),ot=Te,Se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(s.TEXTURE_2D,0,Ce,$e,ot,Se,ee,Me,w.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Yt(L,w,ee){let Me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Me=s.TEXTURE_3D);const pe=Et(L,w),Re=w.source;t.bindTexture(Me,L.__webglTexture,s.TEXTURE0+ee);const be=r.get(Re);if(Re.version!==be.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Se=gt.getPrimaries(gt.workingColorSpace),Je=w.colorSpace===wr?null:gt.getPrimaries(w.colorSpace),rt=w.colorSpace===wr||Se===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let de=P(w.image,!1,o.maxTextureSize);de=Qe(w,de);const we=u.convert(w.format,w.colorSpace),F=u.convert(w.type);let he=D(w.internalFormat,we,F,w.normalized,w.colorSpace,w.isVideoTexture);yt(Me,w);let ce;const Pe=w.mipmaps,Te=w.isVideoTexture!==!0,Ce=be.__version===void 0||pe===!0,$e=Re.dataReady,ot=C(w,de);if(w.isDepthTexture)he=y(w.format===Rr,w.type),Ce&&(Te?t.texStorage2D(s.TEXTURE_2D,1,he,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,we,F,null));else if(w.isDataTexture)if(Pe.length>0){Te&&Ce&&t.texStorage2D(s.TEXTURE_2D,ot,he,Pe[0].width,Pe[0].height);for(let Se=0,Je=Pe.length;Se<Je;Se++)ce=Pe[Se],Te?$e&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ce.width,ce.height,we,F,ce.data):t.texImage2D(s.TEXTURE_2D,Se,he,ce.width,ce.height,0,we,F,ce.data);w.generateMipmaps=!1}else Te?(Ce&&t.texStorage2D(s.TEXTURE_2D,ot,he,de.width,de.height),$e&&jt(w,de,we,F)):t.texImage2D(s.TEXTURE_2D,0,he,de.width,de.height,0,we,F,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Te&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ot,he,Pe[0].width,Pe[0].height,de.depth);for(let Se=0,Je=Pe.length;Se<Je;Se++)if(ce=Pe[Se],w.format!==Di)if(we!==null)if(Te){if($e)if(w.layerUpdates.size>0){const rt=xm(ce.width,ce.height,w.format,w.type);for(const Oe of w.layerUpdates){const mt=ce.data.subarray(Oe*rt/ce.data.BYTES_PER_ELEMENT,(Oe+1)*rt/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,Oe,ce.width,ce.height,1,we,mt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ce.width,ce.height,de.depth,we,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,he,ce.width,ce.height,de.depth,0,ce.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ce.width,ce.height,de.depth,we,F,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,he,ce.width,ce.height,de.depth,0,we,F,ce.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Te&&Ce&&t.texStorage2D(s.TEXTURE_2D,ot,he,Pe[0].width,Pe[0].height);for(let Se=0,Je=Pe.length;Se<Je;Se++)ce=Pe[Se],w.format!==Di?we!==null?Te?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,ce.width,ce.height,we,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,he,ce.width,ce.height,0,ce.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?$e&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,ce.width,ce.height,we,F,ce.data):t.texImage2D(s.TEXTURE_2D,Se,he,ce.width,ce.height,0,we,F,ce.data)}else if(w.isDataArrayTexture)if(Te){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ot,he,de.width,de.height,de.depth),$e)if(w.layerUpdates.size>0){const Se=xm(de.width,de.height,w.format,w.type);for(const Je of w.layerUpdates){const rt=de.data.subarray(Je*Se/de.data.BYTES_PER_ELEMENT,(Je+1)*Se/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Je,de.width,de.height,1,we,F,rt)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,F,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,de.width,de.height,de.depth,0,we,F,de.data);else if(w.isData3DTexture)Te?(Ce&&t.texStorage3D(s.TEXTURE_3D,ot,he,de.width,de.height,de.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,F,de.data)):t.texImage3D(s.TEXTURE_3D,0,he,de.width,de.height,de.depth,0,we,F,de.data);else if(w.isFramebufferTexture){if(Ce)if(Te)t.texStorage2D(s.TEXTURE_2D,ot,he,de.width,de.height);else{let Se=de.width,Je=de.height;for(let rt=0;rt<ot;rt++)t.texImage2D(s.TEXTURE_2D,rt,he,Se,Je,0,we,F,null),Se>>=1,Je>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const Se=s.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),de.parentNode!==Se){Se.appendChild(de),S.add(w),Se.onpaint=Je=>{const rt=Je.changedElements;for(const Oe of S)rt.includes(Oe.image)&&(Oe.needsUpdate=!0)},Se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const rt=s.RGBA,Oe=s.RGBA,mt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,rt,Oe,mt,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Te&&Ce){const Se=nt(Pe[0]);t.texStorage2D(s.TEXTURE_2D,ot,he,Se.width,Se.height)}for(let Se=0,Je=Pe.length;Se<Je;Se++)ce=Pe[Se],Te?$e&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,we,F,ce):t.texImage2D(s.TEXTURE_2D,Se,he,we,F,ce);w.generateMipmaps=!1}else if(Te){if(Ce){const Se=nt(de);t.texStorage2D(s.TEXTURE_2D,ot,he,Se.width,Se.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,F,de)}else t.texImage2D(s.TEXTURE_2D,0,he,we,F,de);O(w)&&w.mipmapsAutoUpdate===!0&&b(Me),be.__version=Re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function cn(L,w,ee){if(w.image.length!==6)return;const Me=Et(L,w),pe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const Re=r.get(pe);if(pe.version!==Re.__version||Me===!0){t.activeTexture(s.TEXTURE0+ee);const be=gt.getPrimaries(gt.workingColorSpace),fe=w.colorSpace===wr?null:gt.getPrimaries(w.colorSpace),de=w.colorSpace===wr||be===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,he=[];for(let Oe=0;Oe<6;Oe++)!we&&!F?he[Oe]=P(w.image[Oe],!0,o.maxCubemapSize):he[Oe]=F?w.image[Oe].image:w.image[Oe],he[Oe]=Qe(w,he[Oe]);const ce=he[0],Pe=u.convert(w.format,w.colorSpace),Te=u.convert(w.type);let Ce=D(w.internalFormat,Pe,Te,w.normalized,w.colorSpace);const $e=w.isVideoTexture!==!0,ot=Re.__version===void 0||Me===!0,Se=pe.dataReady;let Je=C(w,ce);yt(s.TEXTURE_CUBE_MAP,w);let rt;if(w.isDepthTexture){if(Ce=y(w.format===Rr,w.type),ot)if($e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ce,ce.width,ce.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,ce.width,ce.height,0,Pe,Te,null)}else if(we){$e&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,Ce,ce.width,ce.height);for(let Oe=0;Oe<6;Oe++){rt=he[Oe].mipmaps;for(let mt=0;mt<rt.length;mt++){const Vt=rt[mt];w.format!==Di?Pe!==null?$e?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt,0,0,Vt.width,Vt.height,Pe,Vt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt,Ce,Vt.width,Vt.height,0,Vt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt,0,0,Vt.width,Vt.height,Pe,Te,Vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt,Ce,Vt.width,Vt.height,0,Pe,Te,Vt.data)}}}else{if(rt=w.mipmaps,$e&&ot){rt.length>0&&Je++;const Oe=nt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,Ce,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(F){$e?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,he[Oe].width,he[Oe].height,Pe,Te,he[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,he[Oe].width,he[Oe].height,0,Pe,Te,he[Oe].data);for(let mt=0;mt<rt.length;mt++){const Yn=rt[mt].image[Oe].image;$e?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt+1,0,0,Yn.width,Yn.height,Pe,Te,Yn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt+1,Ce,Yn.width,Yn.height,0,Pe,Te,Yn.data)}}else{$e?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Pe,Te,he[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,Pe,Te,he[Oe]);for(let mt=0;mt<rt.length;mt++){const Vt=rt[mt];$e?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt+1,0,0,Pe,Te,Vt.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,mt+1,Ce,Pe,Te,Vt.image[Oe])}}}O(w)&&w.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),Re.__version=pe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ut(L,w,ee,Me,pe,Re){const be=u.convert(ee.format,ee.colorSpace),fe=u.convert(ee.type),de=D(ee.internalFormat,be,fe,ee.normalized,ee.colorSpace),we=r.get(w),F=r.get(ee);if(F.__renderTarget=w,!we.__hasExternalTextures){const he=Math.max(1,w.width>>Re),ce=Math.max(1,w.height>>Re);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Re,de,he,ce,w.depth,0,be,fe,null):t.texImage2D(pe,Re,de,he,ce,0,be,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),De(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,pe,F.__webglTexture,0,bt(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,pe,F.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Un(L,w,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const Me=w.depthTexture,pe=Me&&Me.isDepthTexture?Me.type:null,Re=y(w.stencilBuffer,pe),be=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(w),Re,w.width,w.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(w),Re,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Re,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,L)}else{const Me=w.textures;for(let pe=0;pe<Me.length;pe++){const Re=Me[pe],be=u.convert(Re.format,Re.colorSpace),fe=u.convert(Re.type),de=D(Re.internalFormat,be,fe,Re.normalized,Re.colorSpace);De(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(w),de,w.width,w.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(w),de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(L,w,ee){const Me=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(w.depthTexture);pe.__renderTarget=w;const Re=Me?w.depthTexture.image[0]:w.depthTexture.image;(!pe.__webglTexture||Re.width!==w.width||Re.height!==w.height)&&(Re.width=w.width,Re.height=w.height,w.depthTexture.needsUpdate=!0),Me?_e(w.depthTexture,0):me(w.depthTexture,0);const be=pe.__webglTexture,fe=bt(w),de=Me?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,we=w.depthTexture.format===Rr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Cr)De(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,de,be,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,we,de,be,0);else if(w.depthTexture.format===Rr)De(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,de,be,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,we,de,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nn(L){const w=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const Me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Me){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Me.removeEventListener("dispose",pe)};Me.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=Me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(ee)for(let Me=0;Me<6;Me++)kt(w.__webglFramebuffer[Me],L,Me);else L.texture.mipmaps.length>0?kt(w.__webglFramebuffer[0],L,0):kt(w.__webglFramebuffer,L,0);else if(ee){w.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Me]),w.__webglDepthbuffer[Me]===void 0)w.__webglDepthbuffer[Me]=s.createRenderbuffer(),Un(w.__webglDepthbuffer[Me],L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Re)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Un(w.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mn(L,w,ee){const Me=r.get(L);w!==void 0&&Ut(Me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&nn(L)}function bn(L){const w=L.texture,ee=r.get(L),Me=r.get(w);L.addEventListener("dispose",K),q(L);const pe=L.textures,Re=L.isWebGLCubeRenderTarget===!0,be=pe.length>1;if(be||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=w.version,c.memory.textures++),Re){ee.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps.length>0){ee.__webglFramebuffer[fe]=[];for(let de=0;de<w.mipmaps.length;de++)ee.__webglFramebuffer[fe][de]=s.createFramebuffer()}else ee.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)ee.__webglFramebuffer[fe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(be)for(let fe=0,de=pe.length;fe<de;fe++){const we=r.get(pe[fe]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&De(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let fe=0;fe<pe.length;fe++){const de=pe[fe];ee.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe]);const we=u.convert(de.format,de.colorSpace),F=u.convert(de.type),he=D(de.internalFormat,we,F,de.normalized,de.colorSpace,L.isXRRenderTarget===!0),ce=bt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,he,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Un(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),yt(s.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Ut(ee.__webglFramebuffer[fe][de],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Ut(ee.__webglFramebuffer[fe],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);O(w)?b(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(be){for(let fe=0,de=pe.length;fe<de;fe++){const we=pe[fe],F=r.get(we);let he=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,F.__webglTexture),yt(he,we),Ut(ee.__webglFramebuffer,L,we,s.COLOR_ATTACHMENT0+fe,he,0),O(we)&&b(he)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Me.__webglTexture),yt(fe,w),w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Ut(ee.__webglFramebuffer[de],L,w,s.COLOR_ATTACHMENT0,fe,de);else Ut(ee.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,fe,0);O(w)?b(fe):w.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&nn(L)}function W(L){const w=L.textures;for(let ee=0,Me=w.length;ee<Me;ee++){const pe=w[ee];if(O(pe)&&pe.mipmapsAutoUpdate===!0){const Re=U(L),be=r.get(pe).__webglTexture;t.bindTexture(Re,be),b(Re),t.unbindTexture()}}}const Ln=[];function Nt(L){if(L.samples>0){if(De(L)===!1){const w=L.textures,ee=L.width,Me=L.height;let pe=s.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(L),fe=w.length>1;if(fe)for(let we=0;we<w.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let we=0;we<w.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const F=r.get(w[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,ee,Me,0,0,ee,Me,pe,s.NEAREST),m===!0&&(Ln.length=0,Ln.push(s.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ln.push(Re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ln))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<w.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const F=r.get(w[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&m){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function bt(L){return Math.min(o.maxSamples,L.samples)}function De(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qt(L){const w=c.render.frame;v.get(L)!==w&&(v.set(L,w),L.update())}function Qe(L,w){const ee=L.colorSpace,Me=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==kl&&ee!==wr&&(gt.getTransfer(ee)===Pt?(Me!==Di||pe!==ei)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",ee)),w}function nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=Le,this.resetTextureUnits=$,this.getTextureUnits=N,this.setTextureUnits=ne,this.setTexture2D=me,this.setTexture2DArray=ye,this.setTexture3D=Ue,this.setTextureCube=_e,this.rebindTextures=Mn,this.setupRenderTarget=bn,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=nn,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=De,this.dispose=re}function NE(s,e){function t(r,o=wr){let u;const c=gt.getTransfer(o);if(r===ei)return s.UNSIGNED_BYTE;if(r===jf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ng)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===jm)return s.BYTE;if(r===eg)return s.SHORT;if(r===Ya)return s.UNSIGNED_SHORT;if(r===Qf)return s.INT;if(r===Fi)return s.UNSIGNED_INT;if(r===Si)return s.FLOAT;if(r===Oi)return s.HALF_FLOAT;if(r===ig)return s.ALPHA;if(r===rg)return s.RGB;if(r===Di)return s.RGBA;if(r===Cr)return s.DEPTH_COMPONENT;if(r===Rr)return s.DEPTH_STENCIL;if(r===td)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===Kr)return s.RG;if(r===id)return s.RG_INTEGER;if(r===rd)return s.RGBA_INTEGER;if(r===Ll||r===Nl||r===Dl||r===Il)if(c===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ll)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ll)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hf||r===pf||r===mf||r===gf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===hf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_f||r===vf||r===xf||r===Sf||r===Mf||r===Ol||r===yf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===_f||r===vf)return c===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===xf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sf)return u.COMPRESSED_R11_EAC;if(r===Mf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Ol)return u.COMPRESSED_RG11_EAC;if(r===yf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Nf||r===Df||r===If||r===Uf||r===Ff)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ef)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Af)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Df)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ff)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Of||r===Bf||r===kf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Of)return c===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zf||r===Hf||r===Bl||r===Gf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===zf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Hf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Mg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Zr({vertexShader:DE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Ja(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends Jr{constructor(e,t){super();const r=this;let o=null,u=1,c=null,d="local-floor",m=1,h=null,v=null,S=null,g=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",_=new UE,x={},P=t.getContextAttributes();let O=null,b=null;const U=[],D=[],y=new St;let C=null,q=null;const z=new Gn;z.viewport=new Qt;const V=new Gn;V.viewport=new Qt;const K=[z,V],oe=new $v;let B=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=U[ie];return me===void 0&&(me=new kc,U[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=U[ie];return me===void 0&&(me=new kc,U[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=U[ie];return me===void 0&&(me=new kc,U[ie]=me),me.getHandSpace()};function Z(ie){const me=D.indexOf(ie.inputSource);if(me===-1)return;const ye=U[me];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,h||c),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function X(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",X),o.removeEventListener("inputsourceschange",Q);for(let ie=0;ie<U.length;ie++){const me=D[ie];me!==null&&(D[ie]=null,U[ie].disconnect(me))}B=null,re=null,_.reset();for(const ie in x)delete x[ie];if(e.setRenderTarget(O),M=null,g=null,S=null,o=null,b=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),q!==null){const ie=q.camera;ie.fov=q.fov,ie.zoom=q.zoom,ie.updateProjectionMatrix(),q=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",X),o.addEventListener("inputsourceschange",Q),P.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ue=null,_e=null;P.depth&&(_e=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=P.stencil?Rr:Cr,Ue=P.stencil?Hs:Fi);const ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:u};S=this.getBinding(),g=S.createProjectionLayer(ze),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Ii(g.textureWidth,g.textureHeight,{format:Di,type:ei,depthTexture:new Gs(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Ii(M.framebufferWidth,M.framebufferHeight,{format:Di,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(m),h=null,c=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(ie){for(let me=0;me<ie.removed.length;me++){const ye=ie.removed[me],Ue=D.indexOf(ye);Ue>=0&&(D[Ue]=null,U[Ue].disconnect(ye))}for(let me=0;me<ie.added.length;me++){const ye=ie.added[me];let Ue=D.indexOf(ye);if(Ue===-1){for(let ze=0;ze<U.length;ze++)if(ze>=D.length){D.push(ye),Ue=ze;break}else if(D[ze]===null){D[ze]=ye,Ue=ze;break}if(Ue===-1)break}const _e=U[Ue];_e&&_e.connect(ye)}}function Y(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let me=ie.near,ye=ie.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),oe.near=V.near=z.near=me,oe.far=V.far=z.far=ye,(B!==oe.near||re!==oe.far)&&(o.updateRenderState({depthNear:oe.near,depthFar:oe.far}),B=oe.near,re=oe.far),oe.layers.mask=ie.layers.mask|6,z.layers.mask=oe.layers.mask&-5,V.layers.mask=oe.layers.mask&-3;const Ue=ie.parent,_e=oe.cameras;Y(oe,Ue);for(let ze=0;ze<_e.length;ze++)Y(_e[ze],Ue);oe.projectionMatrix.copy(z.projectionMatrix),oe.projectionMatrixInverse.copy(z.projectionMatrixInverse),q===null&&ie.isPerspectiveCamera&&(q={camera:ie,fov:ie.fov,zoom:ie.zoom}),$(ie,oe,Ue)};function $(ie,me,ye){ye===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Wf*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(oe)},this.getCameraTexture=function(ie){return x[ie]};let N=null;function ne(ie,me){if(v=me.getViewerPose(h||c),E=me,v!==null){const ye=v.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Ue=!1;ye.length!==oe.cameras.length&&(oe.cameras.length=0,Ue=!0);for(let je=0;je<ye.length;je++){const yt=ye[je];let Et=null;if(M!==null)Et=M.getViewport(yt);else{const jt=S.getViewSubImage(g,yt);Et=jt.viewport,je===0&&(e.setRenderTargetTextures(b,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(b))}let ct=K[je];ct===void 0&&(ct=new Gn,ct.layers.enable(je),ct.viewport=new Qt,K[je]=ct),ct.matrix.fromArray(yt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(yt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Et.x,Et.y,Et.width,Et.height),je===0&&(oe.matrix.copy(ct.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),Ue===!0&&oe.cameras.push(ct)}const _e=o.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const je=S.getDepthInformation(ye[0]);je&&je.isValid&&je.texture&&_.init(je,o.renderState)}if(_e&&_e.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let je=0;je<ye.length;je++){const yt=ye[je].camera;if(yt){let Et=x[yt];Et||(Et=new Mg,x[yt]=Et);const ct=S.getCameraImage(yt);Et.sourceTexture=ct}}}}for(let ye=0;ye<U.length;ye++){const Ue=D[ye],_e=U[ye];Ue!==null&&_e!==void 0&&_e.update(Ue,me,h||c)}N&&N(ie,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Le=new Rg;Le.setAnimationLoop(ne),this.setAnimationLoop=function(ie){N=ie},this.dispose=function(){}}}const OE=new It,Og=new lt;Og.set(-1,0,0,0,1,0,0,0,1);function BE(s,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function r(_,x){x.color.getRGB(_.fogColor.value,yg(s)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function o(_,x,P,O,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(_,x):x.isMeshLambertMaterial?(u(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(_,x),S(_,x)):x.isMeshPhongMaterial?(u(_,x),v(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(_,x),g(_,x),x.isMeshPhysicalMaterial&&M(_,x,b)):x.isMeshMatcapMaterial?(u(_,x),E(_,x)):x.isMeshDepthMaterial?u(_,x):x.isMeshDistanceMaterial?(u(_,x),R(_,x)):x.isMeshNormalMaterial?u(_,x):x.isLineBasicMaterial?(c(_,x),x.isLineDashedMaterial&&d(_,x)):x.isPointsMaterial?m(_,x,P,O):x.isSpriteMaterial?h(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Wn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Wn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const P=e.get(x),O=P.envMap,b=P.envMapRotation;O&&(_.envMap.value=O,_.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(b)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Og),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function c(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function d(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function m(_,x,P,O){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*P,_.scale.value=O*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function v(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function S(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function M(_,x,P){_.ior.value=x.ior,x.diffuseRoughness>0&&(_.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.retroreflectivity>0&&(_.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,x){x.matcap&&(_.matcap.value=x.matcap)}function R(_,x){const P=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kE(s,e,t,r){let o={},u={};function c(P,O){const b=O.program;r.uniformBlockBinding(P,b,o[P.id])}function d(P,O){let b=o[P.id];b===void 0&&(E(P),b=m(P),o[P.id]=b,P.addEventListener("dispose",_));const U=O.program;r.updateUBOMapping(P,U);const D=e.render.frame;u[P.id]!==D&&(h(P),u[P.id]=D)}function m(P){const O=s.createBuffer(),b=P.__size,U=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,b,U),s.bindBuffer(s.UNIFORM_BUFFER,null),O}function h(P){const O=o[P.id],b=P.uniforms,U=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let D=0,y=b.length;D<y;D++){const C=b[D];if(Array.isArray(C))for(let q=0,z=C.length;q<z;q++)v(C[q],D,q,U);else v(C,D,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(P,O,b,U){if(g(P,O,b,U)===!0){const D=P.__offset,y=P.value;if(Array.isArray(y)){let C=0;for(let q=0;q<y.length;q++){const z=y[q],V=R(z,!0);S(z,P.__data,C),C+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else S(y,P.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}function S(P,O,b){typeof P=="number"||typeof P=="boolean"?O[b]=P:P.isMatrix3?(O[b]=P.elements[0],O[b+1]=P.elements[1],O[b+2]=P.elements[2],O[b+3]=0,O[b+4]=P.elements[3],O[b+5]=P.elements[4],O[b+6]=P.elements[5],O[b+7]=0,O[b+8]=P.elements[6],O[b+9]=P.elements[7],O[b+10]=P.elements[8],O[b+11]=0):ArrayBuffer.isView(P)?O.set(P.subarray(0,O.length-b),b):P.toArray(O,b)}function g(P,O,b,U){const D=P.value,y=O+"_"+b;if(Array.isArray(D)){U[y]===void 0&&(U[y]=[]);const C=U[y];let q=!1;for(let z=0;z<D.length;z++)M(D[z],C,z)===!0&&(q=!0);return q}return M(D,U,y)}function M(P,O,b){if(O[b]===void 0)return typeof P=="number"||typeof P=="boolean"?O[b]=P:ArrayBuffer.isView(P)?O[b]=P.slice():O[b]=P.clone(),!0;{const U=O[b];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return O[b]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(U.equals(P)===!1)return U.copy(P),!0}}return!1}function E(P){const O=P.uniforms;let b=0;const U=16;for(let y=0,C=O.length;y<C;y++){const q=Array.isArray(O[y])?O[y]:[O[y]];for(let z=0,V=q.length;z<V;z++){const K=q[z],oe=Array.isArray(K.value)?K.value:[K.value],B=Array.isArray(O[y])||Array.isArray(K.value);let re=b;for(let X=0,Q=oe.length;X<Q;X++){const Y=oe[X],$=R(Y,B),N=b%U,ne=N%$.boundary,Le=N+ne;b+=ne,Le!==0&&U-Le<$.storage&&(b+=U-Le),X===0&&(re=b),b+=$.storage}const Z=K.type==="int"?Int32Array:K.type==="uint"?Uint32Array:Float32Array;K.__data=new Z((b-re)/Float32Array.BYTES_PER_ELEMENT),K.__offset=re}}const D=b%U;return D>0&&(b+=U-D),P.__size=b,P.__cache={},this}function R(P,O){const b={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(b.boundary=4,b.storage=4):P.isVector2?(b.boundary=8,b.storage=8):P.isVector3||P.isColor?(b.boundary=16,b.storage=12):P.isVector4?(b.boundary=16,b.storage=16):P.isMatrix3?(b.boundary=16,b.storage=48):P.isMatrix4?(b.boundary=16,b.storage=64):P.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(b.boundary=16,b.storage=P.byteLength):at("WebGLRenderer: Unsupported uniform value type.",P),O===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function _(P){const O=P.target;O.removeEventListener("dispose",_),s.deleteBuffer(o[O.id]),delete o[O.id],delete u[O.id]}function x(){for(const P in o)s.deleteBuffer(o[P]);o={},u={}}return{bind:c,update:d,dispose:x}}const zE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function HE(){return Li===null&&(Li=new gg(zE,16,16,Kr,Oi),Li.name="DFG_LUT",Li.minFilter=Vn,Li.magFilter=Vn,Li.wrapS=Qi,Li.wrapT=Qi,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class pd{constructor(e={}){const{canvas:t=uv(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ei}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const R=M,_=new Set([rd,id,nd]),x=new Set([ei,Fi,Ya,Hs,jf,ed]),P=new Uint32Array(4),O=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let U=null,D=null;const y=[],C=[];let q=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,K=null,oe=null,B=null,re=null;this._outputColorSpace=jn;let Z=0,X=0,Q=null,Y=-1,$=null;const N=new Qt,ne=new Qt;let Le=null;const ie=new xt(0);let me=0,ye=t.width,Ue=t.height,_e=1,ze=null,vt=null;const je=new Qt(0,0,ye,Ue),yt=new Qt(0,0,ye,Ue);let Et=!1;const ct=new $a,jt=new ld;let Yt=!1,cn=!1;const Ut=new It,Un=new le,kt=new Qt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mn=!1;function bn(){return Q===null?_e:1}let W=r;function Ln(A,k){return t.getContext(A,k)}let Nt,bt,De,qt,Qe,nt,L,w,ee,Me,pe,Re,be,fe,de,we,F,he,ce,Pe,Te,Ce,$e;try{const A={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),W===null){const k="webgl2";if(W=Ln(k,A),W===null)throw Ln(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(A){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Rt("WebGLRenderer: "+A.message),A}function ot(){Nt=new XM(W),Nt.init(),Te=new NE(W,Nt),bt=new IM(W,Nt,e,Te),De=new bE(W,Nt),bt.reversedDepthBuffer&&g&&De.buffers.depth.setReversed(!0),oe=W.createFramebuffer(),B=W.createFramebuffer(),re=W.createFramebuffer(),qt=new $M(W),Qe=new gE,nt=new LE(W,Nt,De,Qe,bt,Te,qt),L=new WM(z),w=new Zv(W),Ce=new NM(W,w),ee=new YM(W,w,qt,Ce),Me=new ZM(W,ee,w,Ce,qt),he=new KM(W,bt,nt),de=new UM(Qe),pe=new mE(z,L,Nt,bt,Ce,de),Re=new BE(z,Qe),be=new vE,fe=new TE(Nt),F=new LM(z,L,De,Me,E,m),we=new PE(z,Me,bt),$e=new kE(W,qt,bt,De),ce=new DM(W,Nt,qt),Pe=new qM(W,Nt,qt),qt.programs=pe.programs,z.capabilities=bt,z.extensions=Nt,z.properties=Qe,z.renderLists=be,z.shadowMap=we,z.state=De,z.info=qt}R!==ei&&(q=new QM(R,t.width,t.height,d,o,u));const Se=new FE(z,W);this.xr=Se,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(ye,Ue,!1))},this.getSize=function(A){return A.set(ye,Ue)},this.setSize=function(A,k,se=!0){if(Se.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=A,Ue=k,t.width=Math.floor(A*_e),t.height=Math.floor(k*_e),se===!0&&(t.style.width=A+"px",t.style.height=k+"px"),q!==null&&q.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ye*_e,Ue*_e).floor()},this.setDrawingBufferSize=function(A,k,se){ye=A,Ue=k,_e=se,t.width=Math.floor(A*se),t.height=Math.floor(k*se),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(R===ei){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,k,se,j){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,k,se,j),De.viewport(N.copy(je).multiplyScalar(bn()).round())},this.getScissor=function(A){return A.copy(yt)},this.setScissor=function(A,k,se,j){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,k,se,j),De.scissor(ne.copy(yt).multiplyScalar(bn()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){De.setScissorTest(Et=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,se=!0){let j=0;if(A){let J=!1;if(Q!==null){const Ie=Q.texture.format;J=_.has(Ie)}if(J){const Ie=Q.texture.type,He=x.has(Ie),Ne=F.getClearColor(),Fe=F.getClearAlpha(),Ve=Ne.r,it=Ne.g,ut=Ne.b;He?(P[0]=Ve,P[1]=it,P[2]=ut,P[3]=Fe,W.clearBufferuiv(W.COLOR,0,P)):(O[0]=Ve,O[1]=it,O[2]=ut,O[3]=Fe,W.clearBufferiv(W.COLOR,0,O))}else j|=W.COLOR_BUFFER_BIT}k&&(j|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),F.dispose(),be.dispose(),fe.dispose(),nt.dispose(),Qe.dispose(),L.dispose(),Me.dispose(),ee.dispose(),Ce.dispose(),$e.dispose(),pe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ja),Se.removeEventListener("sessionend",yi),Ei.stop()};function Je(A){A.preventDefault(),qp("WebGLRenderer: Context Lost."),V=!0}function rt(){qp("WebGLRenderer: Context Restored."),V=!1;const A=qt.autoReset,k=we.enabled,se=we.autoUpdate,j=we.needsUpdate,J=we.type;ot(),qt.autoReset=A,we.enabled=k,we.autoUpdate=se,we.needsUpdate=j,we.type=J}function Oe(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const k=A.target;k.removeEventListener("dispose",mt),Vt(k)}function Vt(A){Yn(A),Qe.remove(A)}function Yn(A){const k=Qe.get(A).programs;k!==void 0&&(k.forEach(function(se){pe.releaseProgram(se)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,se,j,J,Ie){k===null&&(k=nn);const He=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ne=Qs(A,k,se,j,J);De.setMaterial(j,He);let Fe=se.index,Ve=1;if(j.wireframe===!0){if(Fe=ee.getWireframeAttribute(se),Fe===void 0)return;Ve=2}const it=se.drawRange,ut=se.attributes.position;let We=it.start*Ve,dt=(it.start+it.count)*Ve;Ie!==null&&(We=Math.max(We,Ie.start*Ve),dt=Math.min(dt,(Ie.start+Ie.count)*Ve)),Fe!==null?(We=Math.max(We,0),dt=Math.min(dt,Fe.count)):ut!=null&&(We=Math.max(We,0),dt=Math.min(dt,ut.count));const Ht=dt-We;if(Ht<0||Ht===1/0)return;Ce.setup(J,j,Ne,se,Fe);let Ct,At=ce;if(Fe!==null&&(Ct=w.get(Fe),At=Pe,At.setIndex(Ct)),J.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*bn()),At.setMode(W.LINES)):At.setMode(W.TRIANGLES);else if(J.isLine){let $t=j.linewidth;$t===void 0&&($t=1),De.setLineWidth($t*bn()),J.isLineSegments?At.setMode(W.LINES):J.isLineLoop?At.setMode(W.LINE_LOOP):At.setMode(W.LINE_STRIP)}else J.isPoints?At.setMode(W.POINTS):J.isSprite&&At.setMode(W.TRIANGLES);if(J.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))At.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const $t=J._multiDrawStarts,Xe=J._multiDrawCounts,rn=J._multiDrawCount,Ke=Fe?w.get(Fe).bytesPerElement:1,Ti=Qe.get(j).currentProgram.getUniforms();for(let sn=0;sn<rn;sn++)Ti.setValue(W,"_gl_DrawID",sn),At.render($t[sn]/Ke,Xe[sn])}else if(J.isInstancedMesh)At.renderInstances(We,Ht,J.count);else if(se.isInstancedBufferGeometry){const $t=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xe=Math.min(se.instanceCount,$t);At.renderInstances(We,Ht,Xe)}else At.render(We,Ht)};function jr(A,k,se,j){K!==null&&A.isNodeMaterial&&K.setObject(j,A),Yt===!0&&de.setState(A,se,!1),A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Lr(A,k,j),A.side=$r,A.needsUpdate=!0,Lr(A,k,j),A.side=Ji):Lr(A,k,j)}this.compile=function(A,k,se=null){se===null&&(se=A),K!==null&&K.renderStart(A,k,se),D=fe.get(se),D.init(k),C.push(D),se.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),A!==se&&A.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),K!==null&&K.updateLights(D.state.lightsArray),cn=this.localClippingEnabled,Yt=de.init(this.clippingPlanes,cn),Yt===!0&&de.setGlobalState(this.clippingPlanes,k),K!==null&&we.render(D.state.shadowsArray,se,k);const j=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const Ne=Ie[He];jr(Ne,se,k,J),j.add(Ne)}else jr(Ie,se,k,J),j.add(Ie)}),D=C.pop(),K!==null&&K.renderEnd(),j},this.compileAsync=function(A,k,se=null){const j=this.compile(A,k,se);return new Promise(J=>{function Ie(){if(j.forEach(function(He){const Fe=Qe.get(He).currentProgram;(Fe===void 0||Fe.isReady())&&j.delete(He)}),j.size===0){J(A);return}setTimeout(Ie,10)}Nt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let $s=null;function ql(A){$s&&$s(A)}function ja(){Ei.stop()}function yi(){Ei.start()}const Ei=new Rg;Ei.setAnimationLoop(ql),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){$s=A,Se.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},Se.addEventListener("sessionstart",ja),Se.addEventListener("sessionend",yi),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(A,k);const se=Se.enabled===!0&&Se.isPresenting===!0,j=q!==null&&(Q===null||se)&&q.begin(z,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(k),k=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,k,Q),D=fe.get(A,C.length),D.init(k),D.state.textureUnits=nt.getTextureUnits(),C.push(D),Ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?jt.setFromArrayCamera(k):ct.setFromProjectionMatrix(Ut,Mi,k.reversedDepth),cn=this.localClippingEnabled,Yt=de.init(this.clippingPlanes,cn),U=be.get(A,y.length),U.init(),y.push(U),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){const He=z.xr.getDepthSensingMesh();He!==null&&es(He,k,-1/0,z.sortObjects)}es(A,k,0,z.sortObjects),U.finish(),K!==null&&K.updateLights(D.state.lightsArray),z.sortObjects===!0&&U.sort(ze,vt),Mn=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Mn&&F.addToRenderList(U,A),this.info.autoReset===!0&&this.info.reset(),Yt===!0&&de.beginShadows();const J=D.state.shadowsArray;if(we.render(J,A,k),Yt===!0&&de.endShadows(),(j&&q.hasRenderPass())===!1){const He=U.opaque,Ne=U.transmissive;if(D.setupLights(),k.isArrayCamera){const Fe=k.cameras;if(Ne.length>0)for(let Ve=0,it=Fe.length;Ve<it;Ve++){const ut=Fe[Ve];Ks(He,Ne,A,ut)}Mn&&F.render(A);for(let Ve=0,it=Fe.length;Ve<it;Ve++){const ut=Fe[Ve];eo(U,A,ut,ut.viewport)}}else Ne.length>0&&Ks(He,Ne,A,k),Mn&&F.render(A),eo(U,A,k)}Q!==null&&X===0&&(nt.updateMultisampleRenderTarget(Q),nt.updateRenderTargetMipmap(Q)),j&&q.end(z),A.isScene===!0&&A.onAfterRender(z,A,k),Ce.resetDefaultState(),Y=-1,$=null,C.pop(),C.length>0?(D=C[C.length-1],nt.setTextureUnits(D.state.textureUnits),Yt===!0&&de.setGlobalState(z.clippingPlanes,D.state.camera)):D=null,y.pop(),y.length>0?U=y[y.length-1]:U=null,K!==null&&K.renderEnd()};function es(A,k,se,j){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){const He=k.isArrayCamera?jt:ct;if(!A.frustumCulled||A.intersectsFrustum(He)){j&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const Ne=Me.update(A),Fe=A.material;Fe.visible&&U.push(A,Ne,Fe,se,kt.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){const He=k.isArrayCamera?jt:ct;if(!A.frustumCulled||A.intersectsFrustum(He)){const Ne=Me.update(A),Fe=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),kt.copy(Ne.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(Fe)){const Ve=Ne.groups;for(let it=0,ut=Ve.length;it<ut;it++){const We=Ve[it],dt=Fe[We.materialIndex];dt&&dt.visible&&U.push(A,Ne,dt,se,kt.z,We,k)}}else Fe.visible&&U.push(A,Ne,Fe,se,kt.z,null,k)}}}const Ie=A.children;for(let He=0,Ne=Ie.length;He<Ne;He++)es(Ie[He],k,se,j)}function eo(A,k,se,j){const{opaque:J,transmissive:Ie,transparent:He}=A;D.setupLightsView(se),Yt===!0&&de.setGlobalState(z.clippingPlanes,se),j&&De.viewport(N.copy(j)),J.length>0&&br(J,k,se),Ie.length>0&&br(Ie,k,se),He.length>0&&br(He,k,se),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ks(A,k,se,j){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[j.id]===void 0){const We=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[j.id]=new Ii(1,1,{generateMipmaps:!0,type:We?Oi:ei,minFilter:Ar,samples:Math.max(4,bt.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Ie=D.state.transmissionRenderTarget[j.id],He=j.viewport||N;Ie.setSize(He.z*z.transmissionResolutionScale,He.w*z.transmissionResolutionScale);const Ne=z.getRenderTarget(),Fe=z.getActiveCubeFace(),Ve=z.getActiveMipmapLevel();z.setRenderTarget(Ie),z.getClearColor(ie),me=z.getClearAlpha(),me<1&&z.setClearColor(16777215,.5),z.clear(),Mn&&F.render(se);const it=z.toneMapping;z.toneMapping=ji;const ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),D.setupLightsView(j),Yt===!0&&de.setGlobalState(z.clippingPlanes,j),br(A,se,j),nt.updateMultisampleRenderTarget(Ie),nt.updateRenderTargetMipmap(Ie),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let dt=0,Ht=k.length;dt<Ht;dt++){const Ct=k[dt],{object:At,geometry:$t,material:Xe,group:rn}=Ct;if(Xe.side===Ji&&At.layers.test(j.layers)){const Ke=Xe.side;Xe.side=Wn,Xe.needsUpdate=!0,Zs(At,se,j,$t,Xe,rn),Xe.side=Ke,Xe.needsUpdate=!0,We=!0}}We===!0&&(nt.updateMultisampleRenderTarget(Ie),nt.updateRenderTargetMipmap(Ie))}z.setRenderTarget(Ne,Fe,Ve),z.setClearColor(ie,me),ut!==void 0&&(j.viewport=ut),z.toneMapping=it}function br(A,k,se){const j=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Ie=A.length;J<Ie;J++){const He=A[J],{object:Ne,geometry:Fe,group:Ve}=He;let it=He.material;it.allowOverride===!0&&j!==null&&(it=j),Ne.layers.test(se.layers)&&Zs(Ne,k,se,Fe,it,Ve)}}function Zs(A,k,se,j,J,Ie){K!==null&&J.isNodeMaterial&&K.setObject(A,J),A.onBeforeRender(z,k,se,j,J,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(z,k,se,j,A,Ie),J.transparent===!0&&J.side===Ji&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,z.renderBufferDirect(se,k,j,J,A,Ie),J.side=$r,J.needsUpdate=!0,z.renderBufferDirect(se,k,j,J,A,Ie),J.side=Ji):z.renderBufferDirect(se,k,j,J,A,Ie),A.onAfterRender(z,k,se,j,J,Ie)}function Js(A){let k=0;for(const se of A)se.texture!==null&&k++;return k}function Lr(A,k,se){k.isScene!==!0&&(k=nn);const j=Qe.get(A),J=D.state.lights,Ie=D.state.shadowsArray,He=J.state.version,Ne=pe.getParameters(A,J.state,Ie,k,se,D.state.lightProbeGridArray),Fe=pe.getProgramCacheKey(Ne);let Ve=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;const it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=L.get(A.envMap||j.environment,it),j.envMapRotation=j.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",mt),Ve=new Map,j.programs=Ve,j.programVariants=new Map);let ut=Ve.get(Fe);if(ut!==void 0){if(j.currentProgram===ut&&j.lightsStateVersion===He)return to(A,Ne),ut}else Ne.uniforms=pe.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,se,Ne),A.onBeforeCompile(Ne,z),ut=pe.acquireProgram(Ne,Fe),Ve.set(Fe,ut),j.uniforms=Ne.uniforms;const We=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=de.uniform),to(A,Ne),j.needsLights=ts(A),j.lightsStateVersion=He,j.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.sunLights.value=J.state.sun,We.sunLightShadows.value=J.state.sunShadow,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.sunShadowMatrix.value=J.state.sunShadowMatrix,We.sunShadowCascade.value=J.state.sunShadowCascade,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix),j.numLightProbeGrids=Js(D.state.lightProbeGridArray),j.currentProgram=ut,j.uniformsList=null,ut}function $l(A,k,se,j,J){const Ie=Qe.get(A),He=Ie.currentProgram.id+","+j+","+J;let Ne=Ie.programVariants.get(He);return Ne===void 0?(Ne=Lr(A,k,se),Ie.programVariants.set(He,Ne)):(Ie.currentProgram=Ne,Ie.uniformsList=null,Ie.outputColorSpace=j,Ie.toneMapping=J),Ne}function zt(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Fl.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function to(A,k){const se=Qe.get(A);se.outputColorSpace=k.outputColorSpace,se.batching=k.batching,se.batchingColor=k.batchingColor,se.instancing=k.instancing,se.instancingColor=k.instancingColor,se.instancingMorph=k.instancingMorph,se.skinning=k.skinning,se.morphTargets=k.morphTargets,se.morphNormals=k.morphNormals,se.morphColors=k.morphColors,se.morphTargetsCount=k.morphTargetsCount,se.numClippingPlanes=k.numClippingPlanes,se.numIntersection=k.numClipIntersection,se.vertexAlphas=k.vertexAlphas,se.vertexTangents=k.vertexTangents,se.toneMapping=k.toneMapping}function Qs(A,k,se,j,J){k.isScene!==!0&&(k=nn),nt.resetTextureUnits();const Ie=k.fog,He=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,Ne=Q===null?z.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:gt.workingColorSpace,Fe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ve=L.get(j.envMap||He,Fe),it=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),We=!!se.morphAttributes.position,dt=!!se.morphAttributes.normal,Ht=!!se.morphAttributes.color;let Ct=ji;j.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ct=z.toneMapping);const At=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$t=At!==void 0?At.length:0,Xe=Qe.get(j),rn=D.state.lights;if(Yt===!0&&(cn===!0||A!==$)){const Tt=A===$&&j.id===Y;de.setState(j,A,Tt)}let Ke=!1,Ti=!1;j.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==rn.state.version||J.isBatchedMesh&&Xe.batching===!1||!J.isBatchedMesh&&Xe.batching===!0||J.isBatchedMesh&&Xe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Xe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||J.isInstancedMesh&&Xe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Xe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Xe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Xe.instancingMorph===!1&&J.morphTexture!==null||Xe.envMap!==Ve||j.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==ut||Xe.morphTargets!==We||Xe.morphNormals!==dt||Xe.morphColors!==Ht||Xe.morphTargetsCount!==$t||Xe.numLightProbeGrids!==Js(D.state.lightProbeGridArray)?Ke=!0:(Xe.outputColorSpace!==Ne||Xe.toneMapping!==Ct)&&(Ti=!0):(Ke=!0,Xe.__version=j.version);let sn=Xe.currentProgram;(Ke===!0||Ti===!0)&&(sn=Ti===!0?$l(j,k,J,Ne,Ct):Lr(j,k,J),K&&j.isNodeMaterial&&K.onUpdateProgram(j,sn,Xe));let tr=!1,ui=!1,wi=!1;const pt=sn.getUniforms(),Zt=Xe.uniforms;if(De.useProgram(sn.program)&&(tr=!0,ui=!0,wi=!0),j.id!==Y&&(Y=j.id,ui=!0),tr||$!==A){De.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pt.setValue(W,"projectionMatrix",A.projectionMatrix),pt.setValue(W,"viewMatrix",A.matrixWorldInverse);const Dt=pt.map.cameraPosition;Dt!==void 0&&Dt.setValue(W,Un.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&pt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,ui=!0,wi=!0)}if(Xe.needsLights&&(rn.state.sunShadowMap.length>0&&pt.setValue(W,"sunShadowMap",rn.state.sunShadowMap,nt),rn.state.directionalShadowMap.length>0&&pt.setValue(W,"directionalShadowMap",rn.state.directionalShadowMap,nt),rn.state.spotShadowMap.length>0&&pt.setValue(W,"spotShadowMap",rn.state.spotShadowMap,nt),rn.state.pointShadowMap.length>0&&pt.setValue(W,"pointShadowMap",rn.state.pointShadowMap,nt)),J.isSkinnedMesh){pt.setOptional(W,J,"bindMatrix"),pt.setOptional(W,J,"bindMatrixInverse");const Tt=J.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),pt.setValue(W,"boneTexture",Tt.boneTexture,nt))}J.isBatchedMesh&&(pt.setOptional(W,J,"batchingTexture"),pt.setValue(W,"batchingTexture",J._matricesTexture,nt),pt.setOptional(W,J,"batchingIdTexture"),pt.setValue(W,"batchingIdTexture",J._indirectTexture,nt),pt.setOptional(W,J,"batchingColorTexture"),J._colorsTexture!==null&&pt.setValue(W,"batchingColorTexture",J._colorsTexture,nt));const yn=se.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&he.update(J,se,sn),(ui||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,pt.setValue(W,"receiveShadow",J.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(Zt.envMapIntensity.value=k.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=HE()),ui){if(pt.setValue(W,"toneMappingExposure",z.toneMappingExposure),Xe.needsLights&&no(Zt,wi),Ie&&j.fog===!0&&Re.refreshFogUniforms(Zt,Ie),Re.refreshMaterialUniforms(Zt,j,_e,Ue,D.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const Tt=b;let Dt=0;for(const fn of D.state.lightProbeGridArray)fn.texture!==null&&(Tt.textures[Dt]=fn.texture,Tt.min[Dt]=fn.boundingBox.min,Tt.max[Dt]=fn.boundingBox.max,Tt.resolution[Dt]=fn.resolution,Dt++);for(const fn in Tt)Tt[fn].length=Dt;Zt.probesSH.value=Tt.textures,Zt.probesMin.value=Tt.min,Zt.probesMax.value=Tt.max,Zt.probesResolution.value=Tt.resolution}Fl.upload(W,zt(Xe),Zt,nt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fl.upload(W,zt(Xe),Zt,nt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(W,"center",J.center),pt.setValue(W,"modelViewMatrix",J.modelViewMatrix),pt.setValue(W,"normalMatrix",J.normalMatrix),pt.setValue(W,"modelMatrix",J.matrixWorld),j.uniformsGroups!==void 0){const Tt=j.uniformsGroups;for(let Dt=0,fn=Tt.length;Dt<fn;Dt++){const nr=Tt[Dt];$e.update(nr,sn),$e.bind(nr,sn)}}return sn}function no(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ts(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,k,se){const j=Qe.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Qe.get(A.texture).__webglTexture=k,Qe.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:se,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const se=Qe.get(A);se.__webglFramebuffer=k,se.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,se=0){Q=A,Z=k,X=se;let j=null,J=!1,Ie=!1;if(A){const Ne=Qe.get(A);if(Ne.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(W.FRAMEBUFFER,Ne.__webglFramebuffer),N.copy(A.viewport),ne.copy(A.scissor),Le=A.scissorTest,De.viewport(N),De.scissor(ne),De.setScissorTest(Le),Y=-1;return}else if(Ne.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(Ne.__hasExternalTextures)nt.rebindTextures(A,Qe.get(A.texture).__webglTexture,Qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(Ne.__boundDepthTexture!==it){if(it!==null&&Qe.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ie=!0);const Ve=Qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?j=Ve[k][se]:j=Ve[k],J=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?j=Qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[se]:j=Ve,N.copy(A.viewport),ne.copy(A.scissor),Le=A.scissorTest}else N.copy(je).multiplyScalar(_e).floor(),ne.copy(yt).multiplyScalar(_e).floor(),Le=Et;if(se!==0&&(j=oe),De.bindFramebuffer(W.FRAMEBUFFER,j)&&De.drawBuffers(A,j),De.viewport(N),De.scissor(ne),De.setScissorTest(Le),J){const Ne=Qe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,se)}else if(Ie){const Ne=k;for(let Fe=0;Fe<A.textures.length;Fe++){const Ve=Qe.get(A.textures[Fe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,se,Ne)}}else if(A!==null&&se!==0){const Ne=Qe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ne.__webglTexture,se)}Y=-1};function io(A){const k=Qe.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=bt.textureFormatReadable(A.format),k.__typeReadable=bt.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,se,j,J,Ie,He,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){De.bindFramebuffer(W.FRAMEBUFFER,Fe);try{const Ve=A.textures[Ne],it=Ve.format,ut=Ve.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne);const We=io(Ve);if(We.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-j&&se>=0&&se<=A.height-J&&W.readPixels(k,se,j,J,Te.convert(it),Te.convert(ut),Ie)}finally{const Ve=Q!==null?Qe.get(Q).__webglFramebuffer:null;De.bindFramebuffer(W.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,k,se,j,J,Ie,He,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(k>=0&&k<=A.width-j&&se>=0&&se<=A.height-J){De.bindFramebuffer(W.FRAMEBUFFER,Fe);const Ve=A.textures[Ne],it=Ve.format,ut=Ve.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne);const We=io(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,dt),W.bufferData(W.PIXEL_PACK_BUFFER,Ie.byteLength,W.STREAM_READ),W.readPixels(k,se,j,J,Te.convert(it),Te.convert(ut),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Ht=Q!==null?Qe.get(Q).__webglFramebuffer:null;De.bindFramebuffer(W.FRAMEBUFFER,Ht);const Ct=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await cv(W,Ct,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,dt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ie),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(dt),W.deleteSync(Ct),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,se=0){const j=Math.pow(2,-se),J=Math.floor(A.image.width*j),Ie=Math.floor(A.image.height*j),He=k!==null?k.x:0,Ne=k!==null?k.y:0;nt.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,He,Ne,J,Ie),De.unbindTexture()},this.copyTextureToTexture=function(A,k,se=null,j=null,J=0,Ie=0){let He,Ne,Fe,Ve,it,ut,We,dt,Ht;const Ct=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)He=se.max.x-se.min.x,Ne=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,it=se.min.y,ut=se.isBox3?se.min.z:0;else{const pt=Math.pow(2,-J);He=Math.floor(Ct.width*pt),Ne=Math.floor(Ct.height*pt),A.isDataArrayTexture?Fe=Ct.depth:A.isData3DTexture?Fe=Math.floor(Ct.depth*pt):Fe=1,Ve=0,it=0,ut=0}j!==null?(We=j.x,dt=j.y,Ht=j.z):(We=0,dt=0,Ht=0);const At=Te.convert(k.format),$t=Te.convert(k.type);let Xe;k.isData3DTexture?(nt.setTexture3D(k,0),Xe=W.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(nt.setTexture2DArray(k,0),Xe=W.TEXTURE_2D_ARRAY):(nt.setTexture2D(k,0),Xe=W.TEXTURE_2D),De.activeTexture(W.TEXTURE0),De.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),De.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),De.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment);const rn=De.getParameter(W.UNPACK_ROW_LENGTH),Ke=De.getParameter(W.UNPACK_IMAGE_HEIGHT),Ti=De.getParameter(W.UNPACK_SKIP_PIXELS),sn=De.getParameter(W.UNPACK_SKIP_ROWS),tr=De.getParameter(W.UNPACK_SKIP_IMAGES);De.pixelStorei(W.UNPACK_ROW_LENGTH,Ct.width),De.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ct.height),De.pixelStorei(W.UNPACK_SKIP_PIXELS,Ve),De.pixelStorei(W.UNPACK_SKIP_ROWS,it),De.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const ui=A.isDataArrayTexture||A.isData3DTexture,wi=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const pt=Qe.get(A),Zt=Qe.get(k),yn=Qe.get(pt.__renderTarget),Tt=Qe.get(Zt.__renderTarget);De.bindFramebuffer(W.READ_FRAMEBUFFER,yn.__webglFramebuffer),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Dt=0;Dt<Fe;Dt++)ui&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.get(A).__webglTexture,J,ut+Dt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.get(k).__webglTexture,Ie,Ht+Dt)),W.blitFramebuffer(Ve,it,Ve+He,it+Ne,We,dt,We+He,dt+Ne,W.DEPTH_BUFFER_BIT,W.NEAREST);De.bindFramebuffer(W.READ_FRAMEBUFFER,null),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Qe.has(A)){const pt=Qe.get(A),Zt=Qe.get(k);De.bindFramebuffer(W.READ_FRAMEBUFFER,B),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,re);for(let yn=0;yn<Fe;yn++)ui?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,pt.__webglTexture,J,ut+yn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,pt.__webglTexture,J),wi?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Zt.__webglTexture,Ie,Ht+yn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Zt.__webglTexture,Ie),J!==0?W.blitFramebuffer(Ve,it,Ve+He,it+Ne,We,dt,We+He,dt+Ne,W.COLOR_BUFFER_BIT,W.NEAREST):wi?W.copyTexSubImage3D(Xe,Ie,We,dt,Ht+yn,Ve,it,He,Ne):W.copyTexSubImage2D(Xe,Ie,We,dt,Ve,it,He,Ne);De.bindFramebuffer(W.READ_FRAMEBUFFER,null),De.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else wi?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Xe,Ie,We,dt,Ht,He,Ne,Fe,At,$t,Ct.data):k.isCompressedArrayTexture?W.compressedTexSubImage3D(Xe,Ie,We,dt,Ht,He,Ne,Fe,At,Ct.data):W.texSubImage3D(Xe,Ie,We,dt,Ht,He,Ne,Fe,At,$t,Ct):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ie,We,dt,He,Ne,At,$t,Ct.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ie,We,dt,Ct.width,Ct.height,At,Ct.data):W.texSubImage2D(W.TEXTURE_2D,Ie,We,dt,He,Ne,At,$t,Ct);De.pixelStorei(W.UNPACK_ROW_LENGTH,rn),De.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ke),De.pixelStorei(W.UNPACK_SKIP_PIXELS,Ti),De.pixelStorei(W.UNPACK_SKIP_ROWS,sn),De.pixelStorei(W.UNPACK_SKIP_IMAGES,tr),Ie===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&W.generateMipmap(Xe),De.unbindTexture()},this.initRenderTarget=function(A){Qe.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){Z=0,X=0,Q=null,De.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class GE{constructor(e,t,r){this.host=e,this.canvas=t;const o=document.createElement("canvas");o.width=600,o.height=400;const u=o.getContext("2d",{alpha:!1});this.texture=new xg(o),this.texture.colorSpace=jn;const c=S=>{u.clearRect(0,0,600,400),u.drawImage(r,S%4*444,Math.floor(S/4)*444,444,444,0,54,600,292),this.texture.needsUpdate=!0};c(0),this.renderer=new pd({canvas:t,alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7)),this.renderer.setClearColor(526612,0),this.renderer.toneMapping=Jf,this.geom=new Ja(4.95,3.3,40,24),this.base=this.geom.attributes.position.array.slice(),this.mesh=new Xn(this.geom,new mg({map:this.texture})),this.mesh.position.z=-.25,this.scene.add(this.mesh);const d=new Va(16760419,9,8);d.position.set(-2,1.4,2.2),this.scene.add(d);const m=new Va(16728755,6,7);m.position.set(2.1,-.7,1.8),this.scene.add(m);const h=new Va(5106431,5,7);h.position.set(-1.8,-1.2,1.6),this.scene.add(h),this.scene.add(new dd(16777215,.9)),this.onPointer=S=>{const g=e.getBoundingClientRect();this.px=((S.clientX-g.left)/g.width-.5)*2,this.py=((S.clientY-g.top)/g.height-.5)*2},e.addEventListener("pointermove",this.onPointer),e.addEventListener("pointerleave",()=>{this.px=this.py=0}),e.classList.add("three-ready"),this.resize(),new ResizeObserver(()=>this.resize()).observe(e);const v=()=>{this.raf=requestAnimationFrame(v);const S=Math.min(this.clock.getDelta(),.04);if(this.t+=S,!this.reduced){this.t-this.last>.145&&(this.frame=(this.frame+1)%8,c(this.frame),this.last=this.t);const g=Math.sin(this.t*1.55)*.035+this.px*.045,M=Math.sin(this.t*1.95+.5)*.022-this.py*.025;this.sv+=(g-this.sway)*15.5*S,this.sv*=Math.exp(-6.8*S),this.sway+=this.sv*S,this.nv+=(M-this.nod)*15.5*S,this.nv*=Math.exp(-6.8*S),this.nod+=this.nv*S,this.mesh.rotation.set(this.nod,0,this.sway),this.mesh.position.y=Math.sin(this.t*1.8)*.035+this.nod*.12,this.mesh.position.x=Math.sin(this.t*.76)*.025+this.px*.025;const E=this.geom.attributes.position;for(let R=0;R<E.count;R++){const _=this.base[R*3],x=this.base[R*3+1],P=Math.max(0,1-Math.abs(_)/2.5)*Math.max(.35,1-Math.abs(x)/1.7);E.setZ(R,this.base[R*3+2]+Math.sin(this.t*2+_*1.35+x*1.85)*.018*P)}E.needsUpdate=!0,this.geom.computeVertexNormals(),d.intensity=9+Math.sin(this.t*2.1)*1.4,m.intensity=6+Math.sin(this.t*2.8+1.2)*1.3,h.intensity=5+Math.cos(this.t*2.3)}this.renderer.render(this.scene,this.camera)};v()}renderer;scene=new od;camera=new Gn(36,1,.1,50);texture;geom;mesh;base;frame=0;last=0;t=0;raf=0;px=0;py=0;sway=0;sv=0;nod=0;nv=0;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;disc={x:0,y:0};onPointer;clock=new Ag;resize(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.position.z=e/t<1?5.8:5.15,this.camera.updateProjectionMatrix(),this.disc.x=e,this.disc.y=t}dispose(){cancelAnimationFrame(this.raf),this.host.removeEventListener("pointermove",this.onPointer),this.geom.dispose(),this.texture.dispose(),this.renderer.dispose()}}function VE(s,e){const t=document.createElement("canvas");t.width=t.height=512;const r=t.getContext("2d"),o=r.createRadialGradient(180,150,20,256,256,250);return o.addColorStop(0,"#fff4c8"),o.addColorStop(.5,"#e8b950"),o.addColorStop(1,"#8f5414"),r.fillStyle=o,r.fillRect(0,0,512,512),r.strokeStyle=e,r.lineWidth=10,r.beginPath(),r.arc(256,256,226,0,Math.PI*2),r.stroke(),r.setLineDash([12,12]),r.lineWidth=5,r.beginPath(),r.arc(256,256,196,0,Math.PI*2),r.stroke(),r.setLineDash([]),r.fillStyle="#4a2608",r.textAlign="center",r.textBaseline="middle",r.font="900 118px Georgia",r.fillText(e,256,205),r.font="900 62px monospace",r.fillText(s,256,320),r.font="700 22px monospace",r.fillText("POKE CASINO",256,386),new xg(t)}class WE{constructor(e){this.canvas=e,this.renderer=new pd({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),this.camera.position.set(0,1.2,7.5),this.camera.lookAt(0,0,0),this.scene.add(new dd(16777215,1.1));const t=new Yf(16768923,3.2);t.position.set(-3,5,5),this.scene.add(t);const r=new Yf(6743807,1.6);r.position.set(3,-2,-4),this.scene.add(r);const o=new Ga({color:15117620,metalness:.95,roughness:.22}),u=new Xn(new Wl(1.35,1.35,.16,64),o);u.rotation.z=Math.PI/2,this.coin.add(u);for(const[m,h,v]of[["HEADS","♠",.09],["TAILS","♦",-.09]]){const S=new Xn(new Vl(1.28,64),new Ga({map:VE(m,h),metalness:.55,roughness:.3}));S.position.z=v,v<0&&(S.rotation.y=Math.PI),this.coin.add(S)}this.scene.add(this.coin);const c=new ti;c.setAttribute("position",new Ui(new Float32Array(360),3)),this.particles=new _g(c,new ud({color:16766839,size:.12,transparent:!0,opacity:.9,depthWrite:!1})),this.scene.add(this.particles);const d=()=>{if(this.raf=requestAnimationFrame(d),this.t+=.016,this.flipping){const h=Math.min(1,(performance.now()-this.start)/1900),v=1-Math.pow(1-h,3);this.coin.rotation.y=this.startRotation+(this.target-this.startRotation)*v,this.coin.position.y=Math.sin(h*Math.PI)*2.3-Math.sin(h*Math.PI*3)*.18*(1-h),this.coin.rotation.z=Math.sin(h*Math.PI*2)*.22*(1-h),h>=1&&(this.flipping=!1,this.coin.position.y=0,this.burst(),this.resolve?.(),this.resolve=null)}else!this.flipping&&this.target&&(this.coin.rotation.z*=.9);const m=this.particles.geometry.attributes.position;for(let h=0;h<120;h++)this.pvel[h*3+1]!==0&&(this.pvel[h*3+1]-=.006,m.setXYZ(h,m.getX(h)+this.pvel[h*3],m.getY(h)+this.pvel[h*3+1],m.getZ(h)+this.pvel[h*3+2]));m.needsUpdate=!0,this.renderer.render(this.scene,this.camera)};d(),new ResizeObserver(()=>this.resize()).observe(e.parentElement||e),this.resize()}renderer;scene=new od;camera=new Gn(38,1,.1,50);coin=new ka;particles;pvel=new Float32Array(360);t=0;raf=0;flipping=!1;target=0;start=0;resolve=null;startRotation=0;resize(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}burst(){const e=this.particles.geometry.attributes.position;for(let t=0;t<120;t++){e.setXYZ(t,0,0,0);const r=Math.random()*Math.PI*2,o=.04+Math.random()*.1;this.pvel[t*3]=Math.cos(r)*o,this.pvel[t*3+1]=.05+Math.random()*.12,this.pvel[t*3+2]=Math.sin(r)*o}e.needsUpdate=!0}flip(e){this.startRotation=this.coin.rotation.y;const t=Math.round(this.startRotation/(Math.PI*2))*Math.PI*2;return this.target=t+Math.PI*2*5+(e==="tails"?Math.PI:0),this.target<=this.startRotation&&(this.target+=Math.PI*2),this.start=performance.now(),this.flipping=!0,new Promise(r=>{this.resolve=r})}dispose(){cancelAnimationFrame(this.raf),this.renderer.dispose()}}class XE{constructor(e){this.canvas=e,this.renderer=new pd({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),this.camera.position.set(0,7,12),this.camera.lookAt(0,0,-2),this.scene.add(new dd(16777215,.8));const t=new Yf(16765065,2);t.position.set(-5,9,6),this.scene.add(t);const r=new Va(16732078,6,22);r.position.set(7,2,-3),this.scene.add(r);const o=new Va(5106431,5,22);o.position.set(-7,2,-3),this.scene.add(o);const u=new Xn(new Vl(11,72),new Ga({color:678972,roughness:.92}));u.rotation.x=-Math.PI/2,this.scene.add(u);const c=new Xn(new cd(11,.35,12,80),new Ga({color:14066236,metalness:.9,roughness:.25}));c.rotation.x=Math.PI/2,this.scene.add(c);const d=new Wl(.3,.3,.08,24),m=new Ga({color:15118922,metalness:.7,roughness:.3});this.chips=new Ov(d,m,24);const h=new gn;for(let M=0;M<24;M++){const E=M*2.4,R=3+M%5*1.6;h.position.set(Math.cos(E)*R,.06+M%3*.08,Math.sin(E)*R-2),h.rotation.set(0,E,0),h.scale.setScalar(.7+M%4*.12),h.updateMatrix(),this.chips.setMatrixAt(M,h.matrix)}this.scene.add(this.chips);const v=new ti,S=new Float32Array(540);for(let M=0;M<180;M++)S[M*3]=(Math.random()-.5)*24,S[M*3+1]=Math.random()*7,S[M*3+2]=(Math.random()-.5)*18;v.setAttribute("position",new Ui(S,3)),this.dust=new _g(v,new ud({color:16769184,size:.05,transparent:!0,opacity:.55})),this.scene.add(this.dust);const g=()=>{this.raf=requestAnimationFrame(g);const M=this.clock.getElapsedTime();r.intensity=5.5+Math.sin(M*1.7)*1.2,o.intensity=4.5+Math.cos(M*1.3)*1,this.dust.rotation.y=M*.01,this.chips.rotation.y=Math.sin(M*.12)*.03,this.renderer.render(this.scene,this.camera)};g(),new ResizeObserver(()=>this.resize()).observe(e.parentElement||e),this.resize()}renderer;scene=new od;camera=new Gn(48,1,.1,100);chips;dust;raf=0;clock=new Ag;resize(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){cancelAnimationFrame(this.raf),this.renderer.dispose()}}function YE({p:s,spinning:e=!1,winner:t=!1}){const[r,o]=Lt.useState({x:0,y:0});return s?ge.jsx("div",{className:`card ${e?"spinning":""} ${t?"winner":""}`,onMouseMove:u=>{const c=u.currentTarget.getBoundingClientRect();o({x:((u.clientY-c.top)/c.height-.5)*-12,y:((u.clientX-c.left)/c.width-.5)*12})},onMouseLeave:()=>o({x:0,y:0}),style:{transform:`perspective(700px) rotateX(${r.x}deg) rotateY(${r.y}deg)`},title:s.quirk,children:ge.jsxs("div",{className:"card-inner",children:[ge.jsx("div",{className:"card-art",children:ge.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${s.id}.png`,alt:s.name,loading:"lazy"})}),ge.jsx("div",{className:"card-name",children:s.name}),ge.jsx("div",{className:"card-role",children:s.role}),ge.jsxs("div",{className:"card-ability",children:["ABILITY · ",s.ability]}),ge.jsxs("div",{className:"card-meta",children:[s.item," · ",s.tera," TERA"]})]})}):ge.jsxs("div",{className:"card card-empty",children:[ge.jsx("div",{className:"card-back",children:"?"}),ge.jsx("span",{className:"card-name",children:"AWAITING DEAL"})]})}function Oa(s){return s.map(e=>`${e.name} @ ${e.item}
Ability: ${e.ability}
Tera Type: ${e.tera}
EVs: ${e.evs}
${e.nature} Nature
${e.moves.map(t=>" - "+t).join(`
`)}`).join(`

`)}function qE(){return"https://play.pokemonshowdown.com/"}function $E(){return"https://psim.us/"}async function KE(s){try{return await navigator.clipboard.writeText(s),!0}catch{return!1}}const Hm=s=>`/pokemon-casino/assets/${s}`;function Gm({teams:s,titles:e}){return ge.jsx("div",{className:"teams",children:s.map((t,r)=>ge.jsxs("section",{className:"team",children:[ge.jsxs("header",{children:[ge.jsx("h3",{children:e[r]}),ge.jsxs("span",{children:[t.length,"/6"]})]}),ge.jsx("div",{className:"reels",children:Array.from({length:6},(o,u)=>ge.jsx(YE,{p:t[u]||null,winner:t.length===6},u))})]},r))})}function ZE(){const{room:s,seat:e,connected:t,error:r,create:o,join:u,send:c,setError:d}=C_(),[m,h]=Lt.useState("Player 1"),[v,S]=Lt.useState(()=>new URLSearchParams(location.search).get("room")||""),[g,M]=Lt.useState(3),[E,R]=Lt.useState(!1),[_,x]=Lt.useState(""),P=Lt.useRef(null),O=Lt.useRef(null),b=Lt.useRef(null),U=Lt.useRef(null),D=Lt.useRef(null),y=Lt.useRef(null),C=Lt.useRef("");Lt.useEffect(()=>{if(!P.current)return;const Z=new Image;return Z.onload=()=>{if(P.current)try{U.current=new GE(P.current.parentElement,P.current,Z)}catch(X){window.__DEALER_ERROR__=String(X)}},Z.src=Hm("dealer-atlas.webp"),()=>{U.current?.dispose(),U.current=null}},[!!s]),Lt.useEffect(()=>(O.current&&(D.current=new WE(O.current)),b.current&&(y.current=new XE(b.current)),()=>{D.current?.dispose(),y.current?.dispose(),D.current=null}),[!!s]);const q=s?`${s.code}-${s.games}`:"";Lt.useEffect(()=>{s?.result&&s.phase!=="calls"&&C.current!==q&&(C.current=q,D.current?.flip(s.result))},[s?.result,s?.phase,q]);const z=e!==null?s?.calls[e]:null,V=Z=>c({type:"call",side:Z}),K=s?s.history.map(Z=>`========== GAME ${Z.game} · PLAYER ${Z.winner+1} WON ==========

=== PLAYER 1 ===

${Oa(Z.teams[0])}

=== PLAYER 2 ===

${Oa(Z.teams[1])}`).join(`


`):"",oe=s&&s.teams[0].length===6?`${K}

=== CURRENT GAME ===

=== PLAYER 1 ===

${Oa(s.teams[0])}

=== PLAYER 2 ===

${Oa(s.teams[1])}`:K;if(!s)return ge.jsxs("div",{className:"lobby",children:[ge.jsx("canvas",{ref:b,className:"bg"}),ge.jsxs("div",{className:"lobby-card",children:[ge.jsx("div",{className:"eyebrow",children:"Las Vegas meets Kanto"}),ge.jsxs("h1",{children:["Pokémon ",ge.jsx("span",{children:"Battle Draft"})," Casino"]}),ge.jsx("p",{children:"Two players. One golden coin. Two cursed teams. Real Pokémon Showdown battles."}),ge.jsxs("label",{children:["Your name",ge.jsx("input",{value:m,onChange:Z=>h(Z.target.value),maxLength:24})]}),ge.jsxs("label",{children:["Format",ge.jsxs("select",{value:g,onChange:Z=>M(Number(Z.target.value)),children:[ge.jsx("option",{value:3,children:"Best of 3"}),ge.jsx("option",{value:5,children:"Best of 5"})]})]}),ge.jsx("div",{className:"row",children:ge.jsx("button",{className:"primary",onClick:()=>o(m,g),disabled:!t,children:"Create room"})}),ge.jsx("div",{className:"divider",children:"or join a friend"}),ge.jsxs("div",{className:"row",children:[ge.jsx("input",{placeholder:"ROOM CODE",value:v,onChange:Z=>S(Z.target.value.toUpperCase())}),ge.jsx("button",{onClick:()=>u(v,m),disabled:!t||!v,children:"Join"})]}),r&&ge.jsx("p",{className:"error",children:r}),ge.jsxs("small",{children:["Backend ",t?"connected":"offline"," · silent by design · no music or sound effects"]})]})]});const B=s.phase,re=B==="pick"&&e===s.tossWinner;return ge.jsxs("div",{className:"app",children:[ge.jsx("canvas",{ref:b,className:"bg"}),ge.jsxs("header",{className:"topbar",children:[ge.jsxs("div",{children:[ge.jsxs("span",{className:"eyebrow",children:["Room ",s.code]}),ge.jsxs("h1",{children:["POKÉMON ",ge.jsx("em",{children:"BATTLE DRAFT"})," CASINO"]})]}),ge.jsxs("div",{className:"topright",children:[ge.jsx("span",{className:t?"dot on":"dot"})," ",t?"LIVE":"OFFLINE",ge.jsx("button",{onClick:()=>{navigator.clipboard.writeText(`${location.origin}${location.pathname}?room=${s.code}`),x("Link copied")},children:"Share link"}),ge.jsx("button",{onClick:()=>c({type:"reset",bestOf:g}),children:"New series"})]})]}),ge.jsxs("div",{className:"stage",children:[ge.jsxs("div",{className:"dealer",children:[ge.jsx("canvas",{ref:P}),ge.jsx("img",{src:Hm("dealer-portrait.webp"),alt:"Casino dealer"}),ge.jsx("span",{className:"dealer-tag",children:"MIRAGE · HOUSE DEALER"})]}),ge.jsxs("div",{className:"table",children:[ge.jsxs("div",{className:"scorebar",children:[ge.jsxs("span",{children:["PLAYER 1 · ",s.players[0]?.name||"Waiting"]}),ge.jsx("strong",{children:s.wins[0]}),ge.jsx("i",{children:":"}),ge.jsx("strong",{children:s.wins[1]}),ge.jsxs("span",{children:[s.players[1]?.name||"Waiting"," · PLAYER 2"]})]}),ge.jsx("p",{className:"status",children:B==="calls"?`GAME ${s.games+1} / ${s.bestOf} · CALL HEADS OR TAILS`:B.toUpperCase()}),ge.jsxs("div",{className:"coinrow",children:[ge.jsx("div",{className:"coinstage",children:ge.jsx("canvas",{ref:O})}),ge.jsxs("div",{className:"calls",children:[[0,1].map(Z=>ge.jsxs("div",{className:"callgroup",children:[ge.jsxs("strong",{children:["PLAYER ",Z+1]}),["heads","tails"].map(X=>ge.jsx("button",{disabled:B!=="calls"||z===X||s.calls[1-Z]===X||e!==Z,className:z===X?"sel":"",onClick:()=>V(X),children:X.toUpperCase()},X)),ge.jsx("small",{children:s.calls[Z]?`LOCKED: ${s.calls[Z]}`:"no call"})]},Z)),ge.jsx("button",{className:"primary",disabled:B!=="calls"||!s.calls.every(Boolean)||!s.players[1],onClick:()=>c({type:"flip"}),children:"FLIP THE GOLDEN COIN"}),s.result&&ge.jsxs("p",{className:"result",children:[s.result.toUpperCase()," · PLAYER ",(s.tossWinner??0)+1," WINS THE TOSS"]})]})]}),ge.jsxs("div",{className:"phase-actions",children:[B==="spin"&&ge.jsx("button",{className:"primary",onClick:()=>c({type:"spin"}),children:"DEAL TWO TEAMS"}),B==="battle"&&ge.jsxs(ge.Fragment,{children:[ge.jsx("button",{onClick:()=>c({type:"result",winner:0}),children:"PLAYER 1 WON"}),ge.jsx("button",{onClick:()=>c({type:"result",winner:1}),children:"PLAYER 2 WON"})]}),B==="between"&&ge.jsx("button",{className:"primary",onClick:()=>c({type:"next"}),children:"NEXT GAME"}),B==="complete"&&ge.jsxs("p",{className:"jackpot",children:["JACKPOT · PLAYER ",(s.wins[0]>s.wins[1]?0:1)+1," TAKES THE SERIES ",s.wins[0],"–",s.wins[1]]})]})]})]}),B==="pick"&&re&&ge.jsxs("section",{className:"draft",children:[ge.jsx("h2",{children:"THE TOSS WINNER PICKS FIRST · CHOOSE YOUR SIX"}),ge.jsx("div",{className:"draft-grid",children:s.candidates?.map((Z,X)=>ge.jsxs("div",{children:[ge.jsx(Gm,{teams:[Z,[]],titles:[`TEAM ${X?"B":"A"}`,""]}),ge.jsxs("button",{className:"primary",onClick:()=>c({type:"pick",team:X}),children:["PICK TEAM ",X?"B":"A"]})]},X))})]}),s.teams[0].length===6&&ge.jsx(Gm,{teams:s.teams,titles:[`PLAYER 1 · ${s.players[0]?.name}`,`PLAYER 2 · ${s.players[1]?.name}`]}),ge.jsxs("section",{className:"showdown",children:[ge.jsx("h2",{children:"Showdown handoff"}),ge.jsx("p",{children:"Generate valid import text, copy a team, open Showdown and import it. A cross-origin iframe cannot be controlled from this page, so battles launch there — not here."}),ge.jsxs("div",{className:"row",children:[[0,1].map(Z=>s.teams[Z].length===6&&ge.jsxs("button",{disabled:!s.teams[Z].length,onClick:async()=>x(await KE(Oa(s.teams[Z]))?`Team ${Z+1} copied`:"Copy blocked — select manually"),children:["COPY P",Z+1," TEAM"]},Z)),ge.jsx("button",{onClick:()=>R(!0),children:"OPEN psim.us EMBED"}),ge.jsx("a",{className:"button",href:qE(),target:"_blank",rel:"noreferrer",children:"OPEN SHOWDOWN ↗"})]}),ge.jsx("textarea",{readOnly:!0,value:oe,placeholder:"Team archive appears here"}),_&&ge.jsx("small",{children:_})]}),E&&ge.jsx("div",{className:"modal",onClick:()=>R(!1),children:ge.jsxs("div",{className:"modal-inner",onClick:Z=>Z.stopPropagation(),children:[ge.jsxs("header",{children:[ge.jsx("strong",{children:"psim.us embedded client"}),ge.jsx("button",{onClick:()=>R(!1),children:"CLOSE"})]}),ge.jsx("p",{children:"Embedding is officially supported by Showdown servers, but this parent page cannot inject teams or start a battle inside the iframe."}),ge.jsx("iframe",{title:"Showdown",src:$E()})]})}),r&&ge.jsx("p",{className:"error",onClick:()=>d(""),children:r})]})}A_.createRoot(document.getElementById("root")).render(ge.jsx(S_.StrictMode,{children:ge.jsx(ZE,{})}));
