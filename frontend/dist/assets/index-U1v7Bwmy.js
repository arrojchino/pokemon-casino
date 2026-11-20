function LS(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in s)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(s,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function d0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cf={exports:{}},Za={},uf={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function DS(){if(Xm)return _t;Xm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(U,ne,Le){this.props=U,this.context=ne,this.refs=R,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=y.prototype;function b(U,ne,Le){this.props=U,this.context=ne,this.refs=R,this.updater=Le||S}var D=b.prototype=new x;D.constructor=b,E(D,y.prototype),D.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function L(U,ne,Le){var ie,ge={},Me=null,Ue=null;if(ne!=null)for(ie in ne.ref!==void 0&&(Ue=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)I.call(ne,ie)&&!M.hasOwnProperty(ie)&&(ge[ie]=ne[ie]);var _e=arguments.length-2;if(_e===1)ge.children=Le;else if(1<_e){for(var ze=Array(_e),Mt=0;Mt<_e;Mt++)ze[Mt]=arguments[Mt+2];ge.children=ze}if(U&&U.defaultProps)for(ie in _e=U.defaultProps,_e)ge[ie]===void 0&&(ge[ie]=_e[ie]);return{$$typeof:s,type:U,key:Me,ref:Ue,props:ge,_owner:P.current}}function V(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function F(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function W(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Le){return ne[Le]})}var j=/\/+/g;function oe(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?W(""+U.key):ne.toString(36)}function z(U,ne,Le,ie,ge){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var Ue=!1;if(U===null)Ue=!0;else switch(Me){case"string":case"number":Ue=!0;break;case"object":switch(U.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=U,ge=ge(Ue),U=ie===""?"."+oe(Ue,0):ie,A(ge)?(Le="",U!=null&&(Le=U.replace(j,"$&/")+"/"),z(ge,ne,Le,"",function(Mt){return Mt})):ge!=null&&(F(ge)&&(ge=V(ge,Le+(!ge.key||Ue&&Ue.key===ge.key?"":(""+ge.key).replace(j,"$&/")+"/")+U)),ne.push(ge)),1;if(Ue=0,ie=ie===""?".":ie+":",A(U))for(var _e=0;_e<U.length;_e++){Me=U[_e];var ze=ie+oe(Me,_e);Ue+=z(Me,ne,Le,ze,ge)}else if(ze=v(U),typeof ze=="function")for(U=ze.call(U),_e=0;!(Me=U.next()).done;)Me=Me.value,ze=ie+oe(Me,_e++),Ue+=z(Me,ne,Le,ze,ge);else if(Me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Ue}function re(U,ne,Le){if(U==null)return U;var ie=[],ge=0;return z(U,ie,"","",function(Me){return ne.call(Le,Me,ge++)}),ie}function ce(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Le){(U._status===0||U._status===-1)&&(U._status=1,U._result=Le)},function(Le){(U._status===0||U._status===-1)&&(U._status=2,U._result=Le)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},J={transition:null},B={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:J,ReactCurrentOwner:P};function $(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:re,forEach:function(U,ne,Le){re(U,function(){ne.apply(this,arguments)},Le)},count:function(U){var ne=0;return re(U,function(){ne++}),ne},toArray:function(U){return re(U,function(ne){return ne})||[]},only:function(U){if(!F(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=b,_t.StrictMode=i,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,_t.act=$,_t.cloneElement=function(U,ne,Le){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ie=E({},U.props),ge=U.key,Me=U.ref,Ue=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,Ue=P.current),ne.key!==void 0&&(ge=""+ne.key),U.type&&U.type.defaultProps)var _e=U.type.defaultProps;for(ze in ne)I.call(ne,ze)&&!M.hasOwnProperty(ze)&&(ie[ze]=ne[ze]===void 0&&_e!==void 0?_e[ze]:ne[ze])}var ze=arguments.length-2;if(ze===1)ie.children=Le;else if(1<ze){_e=Array(ze);for(var Mt=0;Mt<ze;Mt++)_e[Mt]=arguments[Mt+2];ie.children=_e}return{$$typeof:s,type:U.type,key:ge,ref:Me,props:ie,_owner:Ue}},_t.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},_t.createElement=L,_t.createFactory=function(U){var ne=L.bind(null,U);return ne.type=U,ne},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:f,render:U}},_t.isValidElement=F,_t.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ce}},_t.memo=function(U,ne){return{$$typeof:h,type:U,compare:ne===void 0?null:ne}},_t.startTransition=function(U){var ne=J.transition;J.transition={};try{U()}finally{J.transition=ne}},_t.unstable_act=$,_t.useCallback=function(U,ne){return Y.current.useCallback(U,ne)},_t.useContext=function(U){return Y.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},_t.useEffect=function(U,ne){return Y.current.useEffect(U,ne)},_t.useId=function(){return Y.current.useId()},_t.useImperativeHandle=function(U,ne,Le){return Y.current.useImperativeHandle(U,ne,Le)},_t.useInsertionEffect=function(U,ne){return Y.current.useInsertionEffect(U,ne)},_t.useLayoutEffect=function(U,ne){return Y.current.useLayoutEffect(U,ne)},_t.useMemo=function(U,ne){return Y.current.useMemo(U,ne)},_t.useReducer=function(U,ne,Le){return Y.current.useReducer(U,ne,Le)},_t.useRef=function(U){return Y.current.useRef(U)},_t.useState=function(U){return Y.current.useState(U)},_t.useSyncExternalStore=function(U,ne,Le){return Y.current.useSyncExternalStore(U,ne,Le)},_t.useTransition=function(){return Y.current.useTransition()},_t.version="18.3.1",_t}var $m;function Zd(){return $m||($m=1,uf.exports=DS()),uf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function IS(){if(qm)return Za;qm=1;var s=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)i.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:v,ref:S,props:g,_owner:a.current}}return Za.Fragment=t,Za.jsx=c,Za.jsxs=c,Za}var Ym;function NS(){return Ym||(Ym=1,cf.exports=IS()),cf.exports}var de=NS(),lt=Zd();const US=d0(lt);var wl={},ff={exports:{}},Zn={},df={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function OS(){return jm||(jm=1,(function(s){function e(J,B){var $=J.length;J.push(B);e:for(;0<$;){var U=$-1>>>1,ne=J[U];if(0<a(ne,B))J[U]=B,J[$]=ne,$=U;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var B=J[0],$=J.pop();if($!==B){J[0]=$;e:for(var U=0,ne=J.length,Le=ne>>>1;U<Le;){var ie=2*(U+1)-1,ge=J[ie],Me=ie+1,Ue=J[Me];if(0>a(ge,$))Me<ne&&0>a(Ue,ge)?(J[U]=Ue,J[Me]=$,U=Me):(J[U]=ge,J[ie]=$,U=ie);else if(Me<ne&&0>a(Ue,$))J[U]=Ue,J[Me]=$,U=Me;else break e}}return B}function a(J,B){var $=J.sortIndex-B.sortIndex;return $!==0?$:J.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,g=null,v=3,S=!1,E=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(J){for(var B=t(h);B!==null;){if(B.callback===null)i(h);else if(B.startTime<=J)i(h),B.sortIndex=B.expirationTime,e(d,B);else break;B=t(h)}}function A(J){if(R=!1,D(J),!E)if(t(d)!==null)E=!0,ce(I);else{var B=t(h);B!==null&&Y(A,B.startTime-J)}}function I(J,B){E=!1,R&&(R=!1,x(L),L=-1),S=!0;var $=v;try{for(D(B),g=t(d);g!==null&&(!(g.expirationTime>B)||J&&!W());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var ne=U(g.expirationTime<=B);B=s.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),D(B)}else i(d);g=t(d)}if(g!==null)var Le=!0;else{var ie=t(h);ie!==null&&Y(A,ie.startTime-B),Le=!1}return Le}finally{g=null,v=$,S=!1}}var P=!1,M=null,L=-1,V=5,F=-1;function W(){return!(s.unstable_now()-F<V)}function j(){if(M!==null){var J=s.unstable_now();F=J;var B=!0;try{B=M(!0,J)}finally{B?oe():(P=!1,M=null)}}else P=!1}var oe;if(typeof b=="function")oe=function(){b(j)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,re=z.port2;z.port1.onmessage=j,oe=function(){re.postMessage(null)}}else oe=function(){y(j,0)};function ce(J){M=J,P||(P=!0,oe())}function Y(J,B){L=y(function(){J(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ce(I))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(J){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var $=v;v=B;try{return J()}finally{v=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,B){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var $=v;v=J;try{return B()}finally{v=$}},s.unstable_scheduleCallback=function(J,B,$){var U=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?U+$:U):$=U,J){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=$+ne,J={id:m++,callback:B,priorityLevel:J,startTime:$,expirationTime:ne,sortIndex:-1},$>U?(J.sortIndex=$,e(h,J),t(d)===null&&J===t(h)&&(R?(x(L),L=-1):R=!0,Y(A,$-U))):(J.sortIndex=ne,e(d,J),E||S||(E=!0,ce(I))),J},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(J){var B=v;return function(){var $=v;v=B;try{return J.apply(this,arguments)}finally{v=$}}}})(hf)),hf}var Km;function FS(){return Km||(Km=1,df.exports=OS()),df.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function kS(){if(Jm)return Zn;Jm=1;var s=Zd(),e=FS();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(n,r,o,u,p,_,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new R(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,b);y[r]=new R(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,b);y[r]=new R(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,b);y[r]=new R(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,r,o,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,o,p,u)&&(o=null),u||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),W=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),J=Symbol.iterator;function B(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Le=!1;function ie(n,r){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var u=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){u=le}n.call(r.prototype)}else{try{throw Error()}catch(le){u=le}n()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var p=le.stack.split(`
`),_=u.stack.split(`
`),T=p.length-1,O=_.length-1;1<=T&&0<=O&&p[T]!==_[O];)O--;for(;1<=T&&0<=O;T--,O--)if(p[T]!==_[O]){if(T!==1||O!==1)do if(T--,O--,0>O||p[T]!==_[O]){var H=`
`+p[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=O);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function ge(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case P:return"Portal";case V:return"Profiler";case L:return"StrictMode";case oe:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case F:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case ce:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function Ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Mt(n){var r=ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,_=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function et(n){n._valueTracker||(n._valueTracker=Mt(n))}function Tt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,r){var o=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function tn(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=_e(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Yt(n,r){r=r.checked,r!=null&&D(n,"checked",r,!1)}function pn(n,r){Yt(n,r);var o=_e(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?$n(n,r.type,o):r.hasOwnProperty("defaultValue")&&$n(n,r.type,_e(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ut(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function $n(n,r,o){(r!=="number"||Ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var zt=Array.isArray;function on(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+_e(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Cn(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Fn(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(zt(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:_e(o)}}function q(n,r){var o=_e(r.value),u=_e(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function kn(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function It(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?It(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,jt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Qe(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(n){N.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),it[r]=it[n]})});function C(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||it.hasOwnProperty(n)&&it[n]?(""+r).trim():r+"px"}function ee(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=C(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var ye=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(n,r){if(r){if(ye[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ae(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function fe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var he=null,Ce=null,k=null;function pe(n){if(n=Fa(n)){if(typeof he!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Vo(r),he(n.stateNode,n.type,r))}}function ue(n){Ce?k?k.push(n):k=[n]:Ce=n}function be(){if(Ce){var n=Ce,r=k;if(k=Ce=null,pe(n),r)for(n=0;n<r.length;n++)pe(r[n])}}function Te(n,r){return n(r)}function we(){}var je=!1;function ut(n,r,o){if(je)return n(r,o);je=!0;try{return Te(n,r,o)}finally{je=!1,(Ce!==null||k!==null)&&(we(),be())}}function xe(n,r){var o=n.stateNode;if(o===null)return null;var u=Vo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Ze=!1;if(f)try{var st={};Object.defineProperty(st,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Ze=!1}function Fe(n,r,o,u,p,_,T,O,H){var le=Array.prototype.slice.call(arguments,3);try{r.apply(o,le)}catch(Se){this.onError(Se)}}var St=!1,Xt=null,ii=!1,gs=null,_a={onError:function(n){St=!0,Xt=n}};function Dc(n,r,o,u,p,_,T,O,H){St=!1,Xt=null,Fe.apply(_a,arguments)}function To(n,r,o,u,p,_,T,O,H){if(Dc.apply(this,arguments),St){if(St){var le=Xt;St=!1,Xt=null}else throw Error(t(198));ii||(ii=!0,gs=le)}}function Li(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Di(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _s(n){if(Li(n)!==n)throw Error(t(188))}function Co(n){var r=n.alternate;if(!r){if(r=Li(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===o)return _s(p),n;if(_===u)return _s(p),r;_=_.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=_;else{for(var T=!1,O=p.child;O;){if(O===o){T=!0,o=p,u=_;break}if(O===u){T=!0,u=p,o=_;break}O=O.sibling}if(!T){for(O=_.child;O;){if(O===o){T=!0,o=_,u=p;break}if(O===u){T=!0,u=_,o=p;break}O=O.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function va(n){return n=Co(n),n!==null?Hr(n):null}function Hr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Hr(n);if(r!==null)return r;n=n.sibling}return null}var Sa=e.unstable_scheduleCallback,xa=e.unstable_cancelCallback,Vr=e.unstable_shouldYield,Ic=e.unstable_requestPaint,Gt=e.unstable_now,Ro=e.unstable_getCurrentPriorityLevel,ya=e.unstable_ImmediatePriority,Ao=e.unstable_UserBlockingPriority,vs=e.unstable_NormalPriority,wo=e.unstable_LowPriority,w=e.unstable_IdlePriority,G=null,se=null;function Q(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(G,n,void 0,(n.current.flags&128)===128)}catch{}}var K=Math.clz32?Math.clz32:De,Ne=Math.log,Ge=Math.LN2;function De(n){return n>>>=0,n===0?32:31-(Ne(n)/Ge|0)|0}var Oe=64,Ve=4194304;function rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dt(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,T=o&268435455;if(T!==0){var O=T&~p;O!==0?u=rt(O):(_&=T,_!==0&&(u=rt(_)))}else T=o&~p,T!==0?u=rt(T):_!==0&&(u=rt(_));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-K(r),p=1<<o,u|=n[o],r&=~p;return u}function We(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-K(_),O=1<<T,H=p[T];H===-1?((O&o)===0||(O&u)!==0)&&(p[T]=We(O,r)):H<=r&&(n.expiredLanes|=O),_&=~O}}function Ht(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pt(){var n=Oe;return Oe<<=1,(Oe&4194240)===0&&(Oe=64),n}function bt(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Kt(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-K(r),n[r]=o}function Xe(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-K(o),_=1<<p;r[p]=0,u[p]=-1,n[p]=-1,o&=~_}}function ln(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-K(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}var Ke=0;function Ii(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cn,ur,xi,Ni,vt,Zt=!1,Rn=[],Rt=null,Nt=null,mn=null,fr=new Map,Ma=new Map,dr=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(n,r){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":fr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(r.pointerId)}}function Ea(n,r,o,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Fa(r),r!==null&&ur(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function ev(n,r,o,u,p){switch(r){case"focusin":return Rt=Ea(Rt,n,r,o,u,p),!0;case"dragenter":return Nt=Ea(Nt,n,r,o,u,p),!0;case"mouseover":return mn=Ea(mn,n,r,o,u,p),!0;case"pointerover":var _=p.pointerId;return fr.set(_,Ea(fr.get(_)||null,n,r,o,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Ma.set(_,Ea(Ma.get(_)||null,n,r,o,u,p)),!0}return!1}function bh(n){var r=Wr(n.target);if(r!==null){var o=Li(r);if(o!==null){if(r=o.tag,r===13){if(r=Di(o),r!==null){n.blockedOn=r,vt(n.priority,function(){xi(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Uc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pe=u,o.target.dispatchEvent(u),Pe=null}else return r=Fa(o),r!==null&&ur(r),n.blockedOn=o,!1;r.shift()}return!0}function Ph(n,r,o){bo(n)&&o.delete(r)}function tv(){Zt=!1,Rt!==null&&bo(Rt)&&(Rt=null),Nt!==null&&bo(Nt)&&(Nt=null),mn!==null&&bo(mn)&&(mn=null),fr.forEach(Ph),Ma.forEach(Ph)}function Ta(n,r){n.blockedOn===r&&(n.blockedOn=null,Zt||(Zt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Ca(n){function r(p){return Ta(p,n)}if(0<Rn.length){Ta(Rn[0],n);for(var o=1;o<Rn.length;o++){var u=Rn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Rt!==null&&Ta(Rt,n),Nt!==null&&Ta(Nt,n),mn!==null&&Ta(mn,n),fr.forEach(r),Ma.forEach(r),o=0;o<dr.length;o++)u=dr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)bh(o),o.blockedOn===null&&dr.shift()}var Ss=A.ReactCurrentBatchConfig,Po=!0;function nv(n,r,o,u){var p=Ke,_=Ss.transition;Ss.transition=null;try{Ke=1,Nc(n,r,o,u)}finally{Ke=p,Ss.transition=_}}function iv(n,r,o,u){var p=Ke,_=Ss.transition;Ss.transition=null;try{Ke=4,Nc(n,r,o,u)}finally{Ke=p,Ss.transition=_}}function Nc(n,r,o,u){if(Po){var p=Uc(n,r,o,u);if(p===null)Zc(n,r,u,Lo,o),wh(n,u);else if(ev(p,n,r,o,u))u.stopPropagation();else if(wh(n,u),r&4&&-1<Q_.indexOf(n)){for(;p!==null;){var _=Fa(p);if(_!==null&&cn(_),_=Uc(n,r,o,u),_===null&&Zc(n,r,u,Lo,o),_===p)break;p=_}p!==null&&u.stopPropagation()}else Zc(n,r,u,null,o)}}var Lo=null;function Uc(n,r,o,u){if(Lo=null,n=fe(u),n=Wr(n),n!==null)if(r=Li(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Di(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Lo=n,null}function Lh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ro()){case ya:return 1;case Ao:return 4;case vs:case wo:return 16;case w:return 536870912;default:return 16}default:return 16}}var hr=null,Oc=null,Do=null;function Dh(){if(Do)return Do;var n,r=Oc,o=r.length,u,p="value"in hr?hr.value:hr.textContent,_=p.length;for(n=0;n<o&&r[n]===p[n];n++);var T=o-n;for(u=1;u<=T&&r[o-u]===p[_-u];u++);return Do=p.slice(n,1<u?1-u:void 0)}function Io(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function Ih(){return!1}function ri(n){function r(o,u,p,_,T){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?No:Ih,this.isPropagationStopped=Ih,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),r}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=ri(xs),Ra=$({},xs,{view:0,detail:0}),rv=ri(Ra),kc,Bc,Aa,Uo=$({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(kc=n.screenX-Aa.screenX,Bc=n.screenY-Aa.screenY):Bc=kc=0,Aa=n),kc)},movementY:function(n){return"movementY"in n?n.movementY:Bc}}),Nh=ri(Uo),sv=$({},Uo,{dataTransfer:0}),av=ri(sv),ov=$({},Ra,{relatedTarget:0}),zc=ri(ov),lv=$({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=ri(lv),uv=$({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=ri(uv),dv=$({},xs,{data:0}),Uh=ri(dv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=mv[n])?!!r[n]:!1}function Gc(){return gv}var _v=$({},Ra,{key:function(n){if(n.key){var r=hv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(n){return n.type==="keypress"?Io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=ri(_v),Sv=$({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=ri(Sv),xv=$({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),yv=ri(xv),Mv=$({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=ri(Mv),Tv=$({},Uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=ri(Tv),Rv=[9,13,27,32],Hc=f&&"CompositionEvent"in window,wa=null;f&&"documentMode"in document&&(wa=document.documentMode);var Av=f&&"TextEvent"in window&&!wa,Fh=f&&(!Hc||wa&&8<wa&&11>=wa),kh=" ",Bh=!1;function zh(n,r){switch(n){case"keyup":return Rv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function wv(n,r){switch(n){case"compositionend":return Gh(r);case"keypress":return r.which!==32?null:(Bh=!0,kh);case"textInput":return n=r.data,n===kh&&Bh?null:n;default:return null}}function bv(n,r){if(ys)return n==="compositionend"||!Hc&&zh(n,r)?(n=Dh(),Do=Oc=hr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fh&&r.locale!=="ko"?null:r.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pv[n.type]:r==="textarea"}function Vh(n,r,o,u){ue(u),r=zo(r,"onChange"),0<r.length&&(o=new Fc("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var ba=null,Pa=null;function Lv(n){op(n,0)}function Oo(n){var r=Rs(n);if(Tt(r))return n}function Dv(n,r){if(n==="change")return r}var Wh=!1;if(f){var Vc;if(f){var Wc="oninput"in document;if(!Wc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Wc=typeof Xh.oninput=="function"}Vc=Wc}else Vc=!1;Wh=Vc&&(!document.documentMode||9<document.documentMode)}function $h(){ba&&(ba.detachEvent("onpropertychange",qh),Pa=ba=null)}function qh(n){if(n.propertyName==="value"&&Oo(Pa)){var r=[];Vh(r,Pa,n,fe(n)),ut(Lv,r)}}function Iv(n,r,o){n==="focusin"?($h(),ba=r,Pa=o,ba.attachEvent("onpropertychange",qh)):n==="focusout"&&$h()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oo(Pa)}function Uv(n,r){if(n==="click")return Oo(r)}function Ov(n,r){if(n==="input"||n==="change")return Oo(r)}function Fv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var yi=typeof Object.is=="function"?Object.is:Fv;function La(n,r){if(yi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!d.call(r,p)||!yi(n[p],r[p]))return!1}return!0}function Yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jh(n,r){var o=Yh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Yh(o)}}function Kh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jh(){for(var n=window,r=Ct();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ct(n.document)}return r}function Xc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function kv(n){var r=Jh(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Kh(o.ownerDocument.documentElement,o)){if(u!==null&&Xc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=jh(o,_);var T=jh(o,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bv=f&&"documentMode"in document&&11>=document.documentMode,Ms=null,$c=null,Da=null,qc=!1;function Zh(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qc||Ms==null||Ms!==Ct(u)||(u=Ms,"selectionStart"in u&&Xc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Da&&La(Da,u)||(Da=u,u=zo($c,"onSelect"),0<u.length&&(r=new Fc("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ms)))}function Fo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Es={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Yc={},Qh={};f&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function ko(n){if(Yc[n])return Yc[n];if(!Es[n])return n;var r=Es[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Qh)return Yc[n]=r[o];return n}var ep=ko("animationend"),tp=ko("animationiteration"),np=ko("animationstart"),ip=ko("transitionend"),rp=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){rp.set(n,r),l(r,[n])}for(var jc=0;jc<sp.length;jc++){var Kc=sp[jc],zv=Kc.toLowerCase(),Gv=Kc[0].toUpperCase()+Kc.slice(1);pr(zv,"on"+Gv)}pr(ep,"onAnimationEnd"),pr(tp,"onAnimationIteration"),pr(np,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(ip,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function ap(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,To(u,r,void 0,n),n.currentTarget=null}function op(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var _=void 0;if(r)for(var T=u.length-1;0<=T;T--){var O=u[T],H=O.instance,le=O.currentTarget;if(O=O.listener,H!==_&&p.isPropagationStopped())break e;ap(p,O,le),_=H}else for(T=0;T<u.length;T++){if(O=u[T],H=O.instance,le=O.currentTarget,O=O.listener,H!==_&&p.isPropagationStopped())break e;ap(p,O,le),_=H}}}if(ii)throw n=gs,ii=!1,gs=null,n}function Ft(n,r){var o=r[ru];o===void 0&&(o=r[ru]=new Set);var u=n+"__bubble";o.has(u)||(lp(r,n,2,!1),o.add(u))}function Jc(n,r,o){var u=0;r&&(u|=4),lp(o,n,u,r)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Na(n){if(!n[Bo]){n[Bo]=!0,i.forEach(function(o){o!=="selectionchange"&&(Hv.has(o)||Jc(o,!1,n),Jc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Bo]||(r[Bo]=!0,Jc("selectionchange",!1,r))}}function lp(n,r,o,u){switch(Lh(r)){case 1:var p=nv;break;case 4:p=iv;break;default:p=Nc}o=p.bind(null,r,o,n),p=void 0,!Ze||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Zc(n,r,o,u,p){var _=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;T=T.return}for(;O!==null;){if(T=Wr(O),T===null)return;if(H=T.tag,H===5||H===6){u=_=T;continue e}O=O.parentNode}}u=u.return}ut(function(){var le=_,Se=fe(o),Ee=[];e:{var ve=rp.get(n);if(ve!==void 0){var Be=Fc,$e=n;switch(n){case"keypress":if(Io(o)===0)break e;case"keydown":case"keyup":Be=vv;break;case"focusin":$e="focus",Be=zc;break;case"focusout":$e="blur",Be=zc;break;case"beforeblur":case"afterblur":Be=zc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=yv;break;case ep:case tp:case np:Be=cv;break;case ip:Be=Ev;break;case"scroll":Be=rv;break;case"wheel":Be=Cv;break;case"copy":case"cut":case"paste":Be=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Oh}var Ye=(r&4)!==0,Qt=!Ye&&n==="scroll",te=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var X=le,ae;X!==null;){ae=X;var Re=ae.stateNode;if(ae.tag===5&&Re!==null&&(ae=Re,te!==null&&(Re=xe(X,te),Re!=null&&Ye.push(Ua(X,Re,ae)))),Qt)break;X=X.return}0<Ye.length&&(ve=new Be(ve,$e,null,o,Se),Ee.push({event:ve,listeners:Ye}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",ve&&o!==Pe&&($e=o.relatedTarget||o.fromElement)&&(Wr($e)||$e[qi]))break e;if((Be||ve)&&(ve=Se.window===Se?Se:(ve=Se.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?($e=o.relatedTarget||o.toElement,Be=le,$e=$e?Wr($e):null,$e!==null&&(Qt=Li($e),$e!==Qt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Be=null,$e=le),Be!==$e)){if(Ye=Nh,Re="onMouseLeave",te="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Oh,Re="onPointerLeave",te="onPointerEnter",X="pointer"),Qt=Be==null?ve:Rs(Be),ae=$e==null?ve:Rs($e),ve=new Ye(Re,X+"leave",Be,o,Se),ve.target=Qt,ve.relatedTarget=ae,Re=null,Wr(Se)===le&&(Ye=new Ye(te,X+"enter",$e,o,Se),Ye.target=ae,Ye.relatedTarget=Qt,Re=Ye),Qt=Re,Be&&$e)t:{for(Ye=Be,te=$e,X=0,ae=Ye;ae;ae=Ts(ae))X++;for(ae=0,Re=te;Re;Re=Ts(Re))ae++;for(;0<X-ae;)Ye=Ts(Ye),X--;for(;0<ae-X;)te=Ts(te),ae--;for(;X--;){if(Ye===te||te!==null&&Ye===te.alternate)break t;Ye=Ts(Ye),te=Ts(te)}Ye=null}else Ye=null;Be!==null&&cp(Ee,ve,Be,Ye,!1),$e!==null&&Qt!==null&&cp(Ee,Qt,$e,Ye,!0)}}e:{if(ve=le?Rs(le):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Je=Dv;else if(Hh(ve))if(Wh)Je=Ov;else{Je=Nv;var tt=Iv}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=Uv);if(Je&&(Je=Je(n,le))){Vh(Ee,Je,o,Se);break e}tt&&tt(n,ve,le),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&$n(ve,"number",ve.value)}switch(tt=le?Rs(le):window,n){case"focusin":(Hh(tt)||tt.contentEditable==="true")&&(Ms=tt,$c=le,Da=null);break;case"focusout":Da=$c=Ms=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Zh(Ee,o,Se);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Zh(Ee,o,Se)}var nt;if(Hc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ys?zh(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(Fh&&o.locale!=="ko"&&(ys||at!=="onCompositionStart"?at==="onCompositionEnd"&&ys&&(nt=Dh()):(hr=Se,Oc="value"in hr?hr.value:hr.textContent,ys=!0)),tt=zo(le,at),0<tt.length&&(at=new Uh(at,n,null,o,Se),Ee.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Gh(o),nt!==null&&(at.data=nt)))),(nt=Av?wv(n,o):bv(n,o))&&(le=zo(le,"onBeforeInput"),0<le.length&&(Se=new Uh("onBeforeInput","beforeinput",null,o,Se),Ee.push({event:Se,listeners:le}),Se.data=nt))}op(Ee,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function zo(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=xe(n,o),_!=null&&u.unshift(Ua(n,_,p)),_=xe(n,r),_!=null&&u.push(Ua(n,_,p))),n=n.return}return u}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cp(n,r,o,u,p){for(var _=r._reactName,T=[];o!==null&&o!==u;){var O=o,H=O.alternate,le=O.stateNode;if(H!==null&&H===u)break;O.tag===5&&le!==null&&(O=le,p?(H=xe(o,_),H!=null&&T.unshift(Ua(o,H,O))):p||(H=xe(o,_),H!=null&&T.push(Ua(o,H,O)))),o=o.return}T.length!==0&&n.push({event:r,listeners:T})}var Vv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function up(n){return(typeof n=="string"?n:""+n).replace(Vv,`
`).replace(Wv,"")}function Go(n,r,o){if(r=up(r),up(n)!==r&&o)throw Error(t(425))}function Ho(){}var Qc=null,eu=null;function tu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(n){return fp.resolve(null).then(n).catch(qv)}:nu;function qv(n){setTimeout(function(){throw n})}function iu(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),Ca(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);Ca(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function dp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Cs,Oa="__reactProps$"+Cs,qi="__reactContainer$"+Cs,ru="__reactEvents$"+Cs,Yv="__reactListeners$"+Cs,jv="__reactHandles$"+Cs;function Wr(n){var r=n[Ui];if(r)return r;for(var o=n.parentNode;o;){if(r=o[qi]||o[Ui]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=dp(n);n!==null;){if(o=n[Ui])return o;n=dp(n)}return r}n=o,o=n.parentNode}return null}function Fa(n){return n=n[Ui]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[Oa]||null}var su=[],As=-1;function gr(n){return{current:n}}function kt(n){0>As||(n.current=su[As],su[As]=null,As--)}function Ot(n,r){As++,su[As]=n.current,n.current=r}var _r={},An=gr(_r),qn=gr(!1),Xr=_r;function ws(n,r){var o=n.type.contextTypes;if(!o)return _r;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in o)p[_]=r[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(n){return n=n.childContextTypes,n!=null}function Wo(){kt(qn),kt(An)}function hp(n,r,o){if(An.current!==_r)throw Error(t(168));Ot(An,r),Ot(qn,o)}function pp(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,Ue(n)||"Unknown",p));return $({},o,u)}function Xo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Xr=An.current,Ot(An,n),Ot(qn,qn.current),!0}function mp(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=pp(n,r,Xr),u.__reactInternalMemoizedMergedChildContext=n,kt(qn),kt(An),Ot(An,n)):kt(qn),Ot(qn,o)}var Yi=null,$o=!1,au=!1;function gp(n){Yi===null?Yi=[n]:Yi.push(n)}function Kv(n){$o=!0,gp(n)}function vr(){if(!au&&Yi!==null){au=!0;var n=0,r=Ke;try{var o=Yi;for(Ke=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Yi=null,$o=!1}catch(p){throw Yi!==null&&(Yi=Yi.slice(n+1)),Sa(ya,vr),p}finally{Ke=r,au=!1}}return null}var bs=[],Ps=0,qo=null,Yo=0,fi=[],di=0,$r=null,ji=1,Ki="";function qr(n,r){bs[Ps++]=Yo,bs[Ps++]=qo,qo=n,Yo=r}function _p(n,r,o){fi[di++]=ji,fi[di++]=Ki,fi[di++]=$r,$r=n;var u=ji;n=Ki;var p=32-K(u)-1;u&=~(1<<p),o+=1;var _=32-K(r)+p;if(30<_){var T=p-p%5;_=(u&(1<<T)-1).toString(32),u>>=T,p-=T,ji=1<<32-K(r)+p|o<<p|u,Ki=_+n}else ji=1<<_|o<<p|u,Ki=n}function ou(n){n.return!==null&&(qr(n,1),_p(n,1,0))}function lu(n){for(;n===qo;)qo=bs[--Ps],bs[Ps]=null,Yo=bs[--Ps],bs[Ps]=null;for(;n===$r;)$r=fi[--di],fi[di]=null,Ki=fi[--di],fi[di]=null,ji=fi[--di],fi[di]=null}var si=null,ai=null,Vt=!1,Mi=null;function vp(n,r){var o=gi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Sp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,si=n,ai=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,si=n,ai=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=$r!==null?{id:ji,overflow:Ki}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=gi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,si=n,ai=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Vt){var r=ai;if(r){var o=r;if(!Sp(n,r)){if(cu(n))throw Error(t(418));r=mr(o.nextSibling);var u=si;r&&Sp(n,r)?vp(u,o):(n.flags=n.flags&-4097|2,Vt=!1,si=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,si=n}}}function xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function jo(n){if(n!==si)return!1;if(!Vt)return xp(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!tu(n.type,n.memoizedProps)),r&&(r=ai)){if(cu(n))throw yp(),Error(t(418));for(;r;)vp(n,r),r=mr(r.nextSibling)}if(xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ai=mr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ai=null}}else ai=si?mr(n.stateNode.nextSibling):null;return!0}function yp(){for(var n=ai;n;)n=mr(n.nextSibling)}function Ls(){ai=si=null,Vt=!1}function fu(n){Mi===null?Mi=[n]:Mi.push(n)}var Jv=A.ReactCurrentBatchConfig;function ka(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(T){var O=p.refs;T===null?delete O[_]:O[_]=T},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ko(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Mp(n){var r=n._init;return r(n._payload)}function Ep(n){function r(te,X){if(n){var ae=te.deletions;ae===null?(te.deletions=[X],te.flags|=16):ae.push(X)}}function o(te,X){if(!n)return null;for(;X!==null;)r(te,X),X=X.sibling;return null}function u(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function p(te,X){return te=Rr(te,X),te.index=0,te.sibling=null,te}function _(te,X,ae){return te.index=ae,n?(ae=te.alternate,ae!==null?(ae=ae.index,ae<X?(te.flags|=2,X):ae):(te.flags|=2,X)):(te.flags|=1048576,X)}function T(te){return n&&te.alternate===null&&(te.flags|=2),te}function O(te,X,ae,Re){return X===null||X.tag!==6?(X=nf(ae,te.mode,Re),X.return=te,X):(X=p(X,ae),X.return=te,X)}function H(te,X,ae,Re){var Je=ae.type;return Je===M?Se(te,X,ae.props.children,Re,ae.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&Mp(Je)===X.type)?(Re=p(X,ae.props),Re.ref=ka(te,X,ae),Re.return=te,Re):(Re=xl(ae.type,ae.key,ae.props,null,te.mode,Re),Re.ref=ka(te,X,ae),Re.return=te,Re)}function le(te,X,ae,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=rf(ae,te.mode,Re),X.return=te,X):(X=p(X,ae.children||[]),X.return=te,X)}function Se(te,X,ae,Re,Je){return X===null||X.tag!==7?(X=ts(ae,te.mode,Re,Je),X.return=te,X):(X=p(X,ae),X.return=te,X)}function Ee(te,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=nf(""+X,te.mode,ae),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return ae=xl(X.type,X.key,X.props,null,te.mode,ae),ae.ref=ka(te,null,X),ae.return=te,ae;case P:return X=rf(X,te.mode,ae),X.return=te,X;case ce:var Re=X._init;return Ee(te,Re(X._payload),ae)}if(zt(X)||B(X))return X=ts(X,te.mode,ae,null),X.return=te,X;Ko(te,X)}return null}function ve(te,X,ae,Re){var Je=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Je!==null?null:O(te,X,""+ae,Re);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:return ae.key===Je?H(te,X,ae,Re):null;case P:return ae.key===Je?le(te,X,ae,Re):null;case ce:return Je=ae._init,ve(te,X,Je(ae._payload),Re)}if(zt(ae)||B(ae))return Je!==null?null:Se(te,X,ae,Re,null);Ko(te,ae)}return null}function Be(te,X,ae,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return te=te.get(ae)||null,O(X,te,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case I:return te=te.get(Re.key===null?ae:Re.key)||null,H(X,te,Re,Je);case P:return te=te.get(Re.key===null?ae:Re.key)||null,le(X,te,Re,Je);case ce:var tt=Re._init;return Be(te,X,ae,tt(Re._payload),Je)}if(zt(Re)||B(Re))return te=te.get(ae)||null,Se(X,te,Re,Je,null);Ko(X,Re)}return null}function $e(te,X,ae,Re){for(var Je=null,tt=null,nt=X,at=X=0,vn=null;nt!==null&&at<ae.length;at++){nt.index>at?(vn=nt,nt=null):vn=nt.sibling;var At=ve(te,nt,ae[at],Re);if(At===null){nt===null&&(nt=vn);break}n&&nt&&At.alternate===null&&r(te,nt),X=_(At,X,at),tt===null?Je=At:tt.sibling=At,tt=At,nt=vn}if(at===ae.length)return o(te,nt),Vt&&qr(te,at),Je;if(nt===null){for(;at<ae.length;at++)nt=Ee(te,ae[at],Re),nt!==null&&(X=_(nt,X,at),tt===null?Je=nt:tt.sibling=nt,tt=nt);return Vt&&qr(te,at),Je}for(nt=u(te,nt);at<ae.length;at++)vn=Be(nt,te,at,ae[at],Re),vn!==null&&(n&&vn.alternate!==null&&nt.delete(vn.key===null?at:vn.key),X=_(vn,X,at),tt===null?Je=vn:tt.sibling=vn,tt=vn);return n&&nt.forEach(function(Ar){return r(te,Ar)}),Vt&&qr(te,at),Je}function Ye(te,X,ae,Re){var Je=B(ae);if(typeof Je!="function")throw Error(t(150));if(ae=Je.call(ae),ae==null)throw Error(t(151));for(var tt=Je=null,nt=X,at=X=0,vn=null,At=ae.next();nt!==null&&!At.done;at++,At=ae.next()){nt.index>at?(vn=nt,nt=null):vn=nt.sibling;var Ar=ve(te,nt,At.value,Re);if(Ar===null){nt===null&&(nt=vn);break}n&&nt&&Ar.alternate===null&&r(te,nt),X=_(Ar,X,at),tt===null?Je=Ar:tt.sibling=Ar,tt=Ar,nt=vn}if(At.done)return o(te,nt),Vt&&qr(te,at),Je;if(nt===null){for(;!At.done;at++,At=ae.next())At=Ee(te,At.value,Re),At!==null&&(X=_(At,X,at),tt===null?Je=At:tt.sibling=At,tt=At);return Vt&&qr(te,at),Je}for(nt=u(te,nt);!At.done;at++,At=ae.next())At=Be(nt,te,at,At.value,Re),At!==null&&(n&&At.alternate!==null&&nt.delete(At.key===null?at:At.key),X=_(At,X,at),tt===null?Je=At:tt.sibling=At,tt=At);return n&&nt.forEach(function(PS){return r(te,PS)}),Vt&&qr(te,at),Je}function Qt(te,X,ae,Re){if(typeof ae=="object"&&ae!==null&&ae.type===M&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:e:{for(var Je=ae.key,tt=X;tt!==null;){if(tt.key===Je){if(Je=ae.type,Je===M){if(tt.tag===7){o(te,tt.sibling),X=p(tt,ae.props.children),X.return=te,te=X;break e}}else if(tt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&Mp(Je)===tt.type){o(te,tt.sibling),X=p(tt,ae.props),X.ref=ka(te,tt,ae),X.return=te,te=X;break e}o(te,tt);break}else r(te,tt);tt=tt.sibling}ae.type===M?(X=ts(ae.props.children,te.mode,Re,ae.key),X.return=te,te=X):(Re=xl(ae.type,ae.key,ae.props,null,te.mode,Re),Re.ref=ka(te,X,ae),Re.return=te,te=Re)}return T(te);case P:e:{for(tt=ae.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){o(te,X.sibling),X=p(X,ae.children||[]),X.return=te,te=X;break e}else{o(te,X);break}else r(te,X);X=X.sibling}X=rf(ae,te.mode,Re),X.return=te,te=X}return T(te);case ce:return tt=ae._init,Qt(te,X,tt(ae._payload),Re)}if(zt(ae))return $e(te,X,ae,Re);if(B(ae))return Ye(te,X,ae,Re);Ko(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(o(te,X.sibling),X=p(X,ae),X.return=te,te=X):(o(te,X),X=nf(ae,te.mode,Re),X.return=te,te=X),T(te)):o(te,X)}return Qt}var Ds=Ep(!0),Tp=Ep(!1),Jo=gr(null),Zo=null,Is=null,du=null;function hu(){du=Is=Zo=null}function pu(n){var r=Jo.current;kt(Jo),n._currentValue=r}function mu(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ns(n,r){Zo=n,du=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(jn=!0),n.firstContext=null)}function hi(n){var r=n._currentValue;if(du!==n)if(n={context:n,memoizedValue:r,next:null},Is===null){if(Zo===null)throw Error(t(308));Is=n,Zo.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return r}var Yr=null;function gu(n){Yr===null?Yr=[n]:Yr.push(n)}function Cp(n,r,o,u){var p=r.interleaved;return p===null?(o.next=o,gu(r)):(o.next=p.next,p.next=o),r.interleaved=o,Ji(n,u)}function Ji(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Sr=!1;function _u(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function xr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Ji(n,o)}return p=u.interleaved,p===null?(r.next=r,gu(u)):(r.next=p.next,p.next=r),u.interleaved=r,Ji(n,o)}function Qo(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ln(n,o)}}function Ap(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?p=_=T:_=_.next=T,o=o.next}while(o!==null);_===null?p=_=r:_=_.next=r}else p=_=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function el(n,r,o,u){var p=n.updateQueue;Sr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var H=O,le=H.next;H.next=null,T===null?_=le:T.next=le,T=H;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,O=Se.lastBaseUpdate,O!==T&&(O===null?Se.firstBaseUpdate=le:O.next=le,Se.lastBaseUpdate=H))}if(_!==null){var Ee=p.baseState;T=0,Se=le=H=null,O=_;do{var ve=O.lane,Be=O.eventTime;if((u&ve)===ve){Se!==null&&(Se=Se.next={eventTime:Be,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var $e=n,Ye=O;switch(ve=r,Be=o,Ye.tag){case 1:if($e=Ye.payload,typeof $e=="function"){Ee=$e.call(Be,Ee,ve);break e}Ee=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ye.payload,ve=typeof $e=="function"?$e.call(Be,Ee,ve):$e,ve==null)break e;Ee=$({},Ee,ve);break e;case 2:Sr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[O]:ve.push(O))}else Be={eventTime:Be,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Se===null?(le=Se=Be,H=Ee):Se=Se.next=Be,T|=ve;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(Se===null&&(H=Ee),p.baseState=H,p.firstBaseUpdate=le,p.lastBaseUpdate=Se,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);Jr|=T,n.lanes=T,n.memoizedState=Ee}}function wp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Ba={},Oi=gr(Ba),za=gr(Ba),Ga=gr(Ba);function jr(n){if(n===Ba)throw Error(t(174));return n}function vu(n,r){switch(Ot(Ga,r),Ot(za,n),Ot(Oi,Ba),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Dt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Dt(r,n)}kt(Oi),Ot(Oi,r)}function Us(){kt(Oi),kt(za),kt(Ga)}function bp(n){jr(Ga.current);var r=jr(Oi.current),o=Dt(r,n.type);r!==o&&(Ot(za,n),Ot(Oi,o))}function Su(n){za.current===n&&(kt(Oi),kt(za))}var $t=gr(0);function tl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var xu=[];function yu(){for(var n=0;n<xu.length;n++)xu[n]._workInProgressVersionPrimary=null;xu.length=0}var nl=A.ReactCurrentDispatcher,Mu=A.ReactCurrentBatchConfig,Kr=0,qt=null,un=null,gn=null,il=!1,Ha=!1,Va=0,Zv=0;function wn(){throw Error(t(321))}function Eu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!yi(n[o],r[o]))return!1;return!0}function Tu(n,r,o,u,p,_){if(Kr=_,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,nl.current=n===null||n.memoizedState===null?nS:iS,n=o(u,p),Ha){_=0;do{if(Ha=!1,Va=0,25<=_)throw Error(t(301));_+=1,gn=un=null,r.updateQueue=null,nl.current=rS,n=o(u,p)}while(Ha)}if(nl.current=al,r=un!==null&&un.next!==null,Kr=0,gn=un=qt=null,il=!1,r)throw Error(t(300));return n}function Cu(){var n=Va!==0;return Va=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?qt.memoizedState=gn=n:gn=gn.next=n,gn}function pi(){if(un===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=gn===null?qt.memoizedState:gn.next;if(r!==null)gn=r,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},gn===null?qt.memoizedState=gn=n:gn=gn.next=n}return gn}function Wa(n,r){return typeof r=="function"?r(n):r}function Ru(n){var r=pi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=un,p=u.baseQueue,_=o.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}u.baseQueue=p=_,o.pending=null}if(p!==null){_=p.next,u=u.baseState;var O=T=null,H=null,le=_;do{var Se=le.lane;if((Kr&Se)===Se)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:n(u,le.action);else{var Ee={lane:Se,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(O=H=Ee,T=u):H=H.next=Ee,qt.lanes|=Se,Jr|=Se}le=le.next}while(le!==null&&le!==_);H===null?T=u:H.next=O,yi(u,r.memoizedState)||(jn=!0),r.memoizedState=u,r.baseState=T,r.baseQueue=H,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do _=p.lane,qt.lanes|=_,Jr|=_,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Au(n){var r=pi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,_=r.memoizedState;if(p!==null){o.pending=null;var T=p=p.next;do _=n(_,T.action),T=T.next;while(T!==p);yi(_,r.memoizedState)||(jn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),o.lastRenderedState=_}return[_,u]}function Pp(){}function Lp(n,r){var o=qt,u=pi(),p=r(),_=!yi(u.memoizedState,p);if(_&&(u.memoizedState=p,jn=!0),u=u.queue,wu(Np.bind(null,o,u,n),[n]),u.getSnapshot!==r||_||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,Xa(9,Ip.bind(null,o,u,p,r),void 0,null),_n===null)throw Error(t(349));(Kr&30)!==0||Dp(o,r,p)}return p}function Dp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Ip(n,r,o,u){r.value=o,r.getSnapshot=u,Up(r)&&Op(n)}function Np(n,r,o){return o(function(){Up(r)&&Op(n)})}function Up(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!yi(n,o)}catch{return!0}}function Op(n){var r=Ji(n,1);r!==null&&Ri(r,n,1,-1)}function Fp(n){var r=Fi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},r.queue=n,n=n.dispatch=tS.bind(null,qt,n),[r.memoizedState,n]}function Xa(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function kp(){return pi().memoizedState}function rl(n,r,o,u){var p=Fi();qt.flags|=n,p.memoizedState=Xa(1|r,o,void 0,u===void 0?null:u)}function sl(n,r,o,u){var p=pi();u=u===void 0?null:u;var _=void 0;if(un!==null){var T=un.memoizedState;if(_=T.destroy,u!==null&&Eu(u,T.deps)){p.memoizedState=Xa(r,o,_,u);return}}qt.flags|=n,p.memoizedState=Xa(1|r,o,_,u)}function Bp(n,r){return rl(8390656,8,n,r)}function wu(n,r){return sl(2048,8,n,r)}function zp(n,r){return sl(4,2,n,r)}function Gp(n,r){return sl(4,4,n,r)}function Hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vp(n,r,o){return o=o!=null?o.concat([n]):null,sl(4,4,Hp.bind(null,r,n),o)}function bu(){}function Wp(n,r){var o=pi();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Eu(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Xp(n,r){var o=pi();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Eu(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function $p(n,r,o){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(yi(o,r)||(o=Pt(),qt.lanes|=o,Jr|=o,n.baseState=!0),r)}function Qv(n,r){var o=Ke;Ke=o!==0&&4>o?o:4,n(!0);var u=Mu.transition;Mu.transition={};try{n(!1),r()}finally{Ke=o,Mu.transition=u}}function qp(){return pi().memoizedState}function eS(n,r,o){var u=Tr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Yp(n))jp(r,o);else if(o=Cp(n,r,o,u),o!==null){var p=zn();Ri(o,n,u,p),Kp(o,r,u)}}function tS(n,r,o){var u=Tr(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Yp(n))jp(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,O=_(T,o);if(p.hasEagerState=!0,p.eagerState=O,yi(O,T)){var H=r.interleaved;H===null?(p.next=p,gu(r)):(p.next=H.next,H.next=p),r.interleaved=p;return}}catch{}finally{}o=Cp(n,r,p,u),o!==null&&(p=zn(),Ri(o,n,u,p),Kp(o,r,u))}}function Yp(n){var r=n.alternate;return n===qt||r!==null&&r===qt}function jp(n,r){Ha=il=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Kp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ln(n,o)}}var al={readContext:hi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},nS={readContext:hi,useCallback:function(n,r){return Fi().memoizedState=[n,r===void 0?null:r],n},useContext:hi,useEffect:Bp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,rl(4194308,4,Hp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return rl(4194308,4,n,r)},useInsertionEffect:function(n,r){return rl(4,2,n,r)},useMemo:function(n,r){var o=Fi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Fi();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=eS.bind(null,qt,n),[u.memoizedState,n]},useRef:function(n){var r=Fi();return n={current:n},r.memoizedState=n},useState:Fp,useDebugValue:bu,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=Fp(!1),r=n[0];return n=Qv.bind(null,n[1]),Fi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=qt,p=Fi();if(Vt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),_n===null)throw Error(t(349));(Kr&30)!==0||Dp(u,r,o)}p.memoizedState=o;var _={value:o,getSnapshot:r};return p.queue=_,Bp(Np.bind(null,u,_,n),[n]),u.flags|=2048,Xa(9,Ip.bind(null,u,_,o,r),void 0,null),o},useId:function(){var n=Fi(),r=_n.identifierPrefix;if(Vt){var o=Ki,u=ji;o=(u&~(1<<32-K(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Va++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Zv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},iS={readContext:hi,useCallback:Wp,useContext:hi,useEffect:wu,useImperativeHandle:Vp,useInsertionEffect:zp,useLayoutEffect:Gp,useMemo:Xp,useReducer:Ru,useRef:kp,useState:function(){return Ru(Wa)},useDebugValue:bu,useDeferredValue:function(n){var r=pi();return $p(r,un.memoizedState,n)},useTransition:function(){var n=Ru(Wa)[0],r=pi().memoizedState;return[n,r]},useMutableSource:Pp,useSyncExternalStore:Lp,useId:qp,unstable_isNewReconciler:!1},rS={readContext:hi,useCallback:Wp,useContext:hi,useEffect:wu,useImperativeHandle:Vp,useInsertionEffect:zp,useLayoutEffect:Gp,useMemo:Xp,useReducer:Au,useRef:kp,useState:function(){return Au(Wa)},useDebugValue:bu,useDeferredValue:function(n){var r=pi();return un===null?r.memoizedState=n:$p(r,un.memoizedState,n)},useTransition:function(){var n=Au(Wa)[0],r=pi().memoizedState;return[n,r]},useMutableSource:Pp,useSyncExternalStore:Lp,useId:qp,unstable_isNewReconciler:!1};function Ei(n,r){if(n&&n.defaultProps){r=$({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Pu(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:$({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ol={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=zn(),p=Tr(n),_=Zi(u,p);_.payload=r,o!=null&&(_.callback=o),r=xr(n,_,p),r!==null&&(Ri(r,n,p,u),Qo(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=zn(),p=Tr(n),_=Zi(u,p);_.tag=1,_.payload=r,o!=null&&(_.callback=o),r=xr(n,_,p),r!==null&&(Ri(r,n,p,u),Qo(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=zn(),u=Tr(n),p=Zi(o,u);p.tag=2,r!=null&&(p.callback=r),r=xr(n,p,u),r!==null&&(Ri(r,n,u,o),Qo(r,n,u))}};function Jp(n,r,o,u,p,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,T):r.prototype&&r.prototype.isPureReactComponent?!La(o,u)||!La(p,_):!0}function Zp(n,r,o){var u=!1,p=_r,_=r.contextType;return typeof _=="object"&&_!==null?_=hi(_):(p=Yn(r)?Xr:An.current,u=r.contextTypes,_=(u=u!=null)?ws(n,p):_r),r=new r(o,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ol,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Qp(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&ol.enqueueReplaceState(r,r.state,null)}function Lu(n,r,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},_u(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=hi(_):(_=Yn(r)?Xr:An.current,p.context=ws(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Pu(n,r,_,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&ol.enqueueReplaceState(p,p.state,null),el(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,r){try{var o="",u=r;do o+=ge(u),u=u.return;while(u);var p=o}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function Du(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Iu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var sS=typeof WeakMap=="function"?WeakMap:Map;function em(n,r,o){o=Zi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){pl||(pl=!0,Yu=u),Iu(n,r)},o}function tm(n,r,o){o=Zi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;o.payload=function(){return u(p)},o.callback=function(){Iu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){Iu(n,r),typeof u!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),o}function nm(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new sS;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(p.add(o),n=SS.bind(null,n,r,o),r.then(n,n))}function im(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function rm(n,r,o,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Zi(-1,1),r.tag=2,xr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var aS=A.ReactCurrentOwner,jn=!1;function Bn(n,r,o,u){r.child=n===null?Tp(r,null,o,u):Ds(r,n.child,o,u)}function sm(n,r,o,u,p){o=o.render;var _=r.ref;return Ns(r,p),u=Tu(n,r,o,u,_,p),o=Cu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Qi(n,r,p)):(Vt&&o&&ou(r),r.flags|=1,Bn(n,r,u,p),r.child)}function am(n,r,o,u,p){if(n===null){var _=o.type;return typeof _=="function"&&!tf(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=_,om(n,r,_,u,p)):(n=xl(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var T=_.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(T,u)&&n.ref===r.ref)return Qi(n,r,p)}return r.flags|=1,n=Rr(_,u),n.ref=r.ref,n.return=r,r.child=n}function om(n,r,o,u,p){if(n!==null){var _=n.memoizedProps;if(La(_,u)&&n.ref===r.ref)if(jn=!1,r.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(jn=!0);else return r.lanes=n.lanes,Qi(n,r,p)}return Nu(n,r,o,u,p)}function lm(n,r,o){var u=r.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(ks,oi),oi|=o;else{if((o&1073741824)===0)return n=_!==null?_.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(ks,oi),oi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:o,Ot(ks,oi),oi|=u}else _!==null?(u=_.baseLanes|o,r.memoizedState=null):u=o,Ot(ks,oi),oi|=u;return Bn(n,r,p,o),r.child}function cm(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Nu(n,r,o,u,p){var _=Yn(o)?Xr:An.current;return _=ws(r,_),Ns(r,p),o=Tu(n,r,o,u,_,p),u=Cu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Qi(n,r,p)):(Vt&&u&&ou(r),r.flags|=1,Bn(n,r,o,p),r.child)}function um(n,r,o,u,p){if(Yn(o)){var _=!0;Xo(r)}else _=!1;if(Ns(r,p),r.stateNode===null)cl(n,r),Zp(r,o,u),Lu(r,o,u,p),u=!0;else if(n===null){var T=r.stateNode,O=r.memoizedProps;T.props=O;var H=T.context,le=o.contextType;typeof le=="object"&&le!==null?le=hi(le):(le=Yn(o)?Xr:An.current,le=ws(r,le));var Se=o.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==u||H!==le)&&Qp(r,T,u,le),Sr=!1;var ve=r.memoizedState;T.state=ve,el(r,u,T,p),H=r.memoizedState,O!==u||ve!==H||qn.current||Sr?(typeof Se=="function"&&(Pu(r,o,Se,u),H=r.memoizedState),(O=Sr||Jp(r,o,O,u,ve,H,le))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),T.props=u,T.state=H,T.context=le,u=O):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{T=r.stateNode,Rp(n,r),O=r.memoizedProps,le=r.type===r.elementType?O:Ei(r.type,O),T.props=le,Ee=r.pendingProps,ve=T.context,H=o.contextType,typeof H=="object"&&H!==null?H=hi(H):(H=Yn(o)?Xr:An.current,H=ws(r,H));var Be=o.getDerivedStateFromProps;(Se=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Ee||ve!==H)&&Qp(r,T,u,H),Sr=!1,ve=r.memoizedState,T.state=ve,el(r,u,T,p);var $e=r.memoizedState;O!==Ee||ve!==$e||qn.current||Sr?(typeof Be=="function"&&(Pu(r,o,Be,u),$e=r.memoizedState),(le=Sr||Jp(r,o,le,u,ve,$e,H)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,$e,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,$e,H)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=$e),T.props=u,T.state=$e,T.context=H,u=le):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return Uu(n,r,o,u,_,p)}function Uu(n,r,o,u,p,_){cm(n,r);var T=(r.flags&128)!==0;if(!u&&!T)return p&&mp(r,o,!1),Qi(n,r,_);u=r.stateNode,aS.current=r;var O=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&T?(r.child=Ds(r,n.child,null,_),r.child=Ds(r,null,O,_)):Bn(n,r,O,_),r.memoizedState=u.state,p&&mp(r,o,!0),r.child}function fm(n){var r=n.stateNode;r.pendingContext?hp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&hp(n,r.context,!1),vu(n,r.containerInfo)}function dm(n,r,o,u,p){return Ls(),fu(p),r.flags|=256,Bn(n,r,o,u),r.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function hm(n,r,o){var u=r.pendingProps,p=$t.current,_=!1,T=(r.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ot($t,p&1),n===null)return uu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=u.children,n=u.fallback,_?(u=r.mode,_=r.child,T={mode:"hidden",children:T},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=yl(T,u,0,null),n=ts(n,u,o,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Fu(o),r.memoizedState=Ou,n):ku(r,T));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return oS(n,r,T,u,O,p,o);if(_){_=u.fallback,T=r.mode,p=n.child,O=p.sibling;var H={mode:"hidden",children:u.children};return(T&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=H,r.deletions=null):(u=Rr(p,H),u.subtreeFlags=p.subtreeFlags&14680064),O!==null?_=Rr(O,_):(_=ts(_,T,o,null),_.flags|=2),_.return=r,u.return=r,u.sibling=_,r.child=u,u=_,_=r.child,T=n.child.memoizedState,T=T===null?Fu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~o,r.memoizedState=Ou,u}return _=n.child,n=_.sibling,u=Rr(_,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function ku(n,r){return r=yl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ll(n,r,o,u){return u!==null&&fu(u),Ds(r,n.child,null,o),n=ku(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function oS(n,r,o,u,p,_,T){if(o)return r.flags&256?(r.flags&=-257,u=Du(Error(t(422))),ll(n,r,T,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=u.fallback,p=r.mode,u=yl({mode:"visible",children:u.children},p,0,null),_=ts(_,p,T,null),_.flags|=2,u.return=r,_.return=r,u.sibling=_,r.child=u,(r.mode&1)!==0&&Ds(r,n.child,null,T),r.child.memoizedState=Fu(T),r.memoizedState=Ou,_);if((r.mode&1)===0)return ll(n,r,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var O=u.dgst;return u=O,_=Error(t(419)),u=Du(_,u,void 0),ll(n,r,T,u)}if(O=(T&n.childLanes)!==0,jn||O){if(u=_n,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Ji(n,p),Ri(u,n,p,-1))}return ef(),u=Du(Error(t(421))),ll(n,r,T,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=xS.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,ai=mr(p.nextSibling),si=r,Vt=!0,Mi=null,n!==null&&(fi[di++]=ji,fi[di++]=Ki,fi[di++]=$r,ji=n.id,Ki=n.overflow,$r=r),r=ku(r,u.children),r.flags|=4096,r)}function pm(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),mu(n.return,r,o)}function Bu(n,r,o,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=o,_.tailMode=p)}function mm(n,r,o){var u=r.pendingProps,p=u.revealOrder,_=u.tail;if(Bn(n,r,u.children,o),u=$t.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pm(n,o,r);else if(n.tag===19)pm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ot($t,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&tl(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Bu(r,!1,p,o,_);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&tl(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Bu(r,!0,o,null,_);break;case"together":Bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function cl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Qi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Rr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Rr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function lS(n,r,o){switch(r.tag){case 3:fm(r),Ls();break;case 5:bp(r);break;case 1:Yn(r.type)&&Xo(r);break;case 4:vu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Ot(Jo,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ot($t,$t.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?hm(n,r,o):(Ot($t,$t.current&1),n=Qi(n,r,o),n!==null?n.sibling:null);Ot($t,$t.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return mm(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot($t,$t.current),u)break;return null;case 22:case 23:return r.lanes=0,lm(n,r,o)}return Qi(n,r,o)}var gm,zu,_m,vm;gm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zu=function(){},_m=function(n,r,o,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,jr(Oi.current);var _=null;switch(o){case"input":p=ht(n,p),u=ht(n,u),_=[];break;case"select":p=$({},p,{value:void 0}),u=$({},u,{value:void 0}),_=[];break;case"textarea":p=Cn(n,p),u=Cn(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ho)}me(o,u);var T;o=null;for(le in p)if(!u.hasOwnProperty(le)&&p.hasOwnProperty(le)&&p[le]!=null)if(le==="style"){var O=p[le];for(T in O)O.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?_||(_=[]):(_=_||[]).push(le,null));for(le in u){var H=u[le];if(O=p?.[le],u.hasOwnProperty(le)&&H!==O&&(H!=null||O!=null))if(le==="style")if(O){for(T in O)!O.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in H)H.hasOwnProperty(T)&&O[T]!==H[T]&&(o||(o={}),o[T]=H[T])}else o||(_||(_=[]),_.push(le,o)),o=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(_=_||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&Ft("scroll",n),_||O===H||(_=[])):(_=_||[]).push(le,H))}o&&(_=_||[]).push("style",o);var le=_;(r.updateQueue=le)&&(r.flags|=4)}},vm=function(n,r,o,u){o!==u&&(r.flags|=4)};function $a(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function bn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function cS(n,r,o){var u=r.pendingProps;switch(lu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(r),null;case 1:return Yn(r.type)&&Wo(),bn(r),null;case 3:return u=r.stateNode,Us(),kt(qn),kt(An),yu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(jo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mi!==null&&(Ju(Mi),Mi=null))),zu(n,r),bn(r),null;case 5:Su(r);var p=jr(Ga.current);if(o=r.type,n!==null&&r.stateNode!=null)_m(n,r,o,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return bn(r),null}if(n=jr(Oi.current),jo(r)){u=r.stateNode,o=r.type;var _=r.memoizedProps;switch(u[Ui]=r,u[Oa]=_,n=(r.mode&1)!==0,o){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(p=0;p<Ia.length;p++)Ft(Ia[p],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":tn(u,_),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",u);break;case"textarea":Fn(u,_),Ft("invalid",u)}me(o,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var O=_[T];T==="children"?typeof O=="string"?u.textContent!==O&&(_.suppressHydrationWarning!==!0&&Go(u.textContent,O,n),p=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Go(u.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Ft("scroll",u)}switch(o){case"input":et(u),Ut(u,_,!0);break;case"textarea":et(u),kn(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=Ho)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=It(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[Ui]=r,n[Oa]=u,gm(n,r,!1,!1),r.stateNode=n;e:{switch(T=Ae(o,u),o){case"dialog":Ft("cancel",n),Ft("close",n),p=u;break;case"iframe":case"object":case"embed":Ft("load",n),p=u;break;case"video":case"audio":for(p=0;p<Ia.length;p++)Ft(Ia[p],n);p=u;break;case"source":Ft("error",n),p=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),p=u;break;case"details":Ft("toggle",n),p=u;break;case"input":tn(n,u),p=ht(n,u),Ft("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=$({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":Fn(n,u),p=Cn(n,u),Ft("invalid",n);break;default:p=u}me(o,p),O=p;for(_ in O)if(O.hasOwnProperty(_)){var H=O[_];_==="style"?ee(n,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&jt(n,H)):_==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Qe(n,H):typeof H=="number"&&Qe(n,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Ft("scroll",n):H!=null&&D(n,_,H,T))}switch(o){case"input":et(n),Ut(n,u,!1);break;case"textarea":et(n),kn(n);break;case"option":u.value!=null&&n.setAttribute("value",""+_e(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?on(n,!!u.multiple,_,!1):u.defaultValue!=null&&on(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ho)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return bn(r),null;case 6:if(n&&r.stateNode!=null)vm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=jr(Ga.current),jr(Oi.current),jo(r)){if(u=r.stateNode,o=r.memoizedProps,u[Ui]=r,(_=u.nodeValue!==o)&&(n=si,n!==null))switch(n.tag){case 3:Go(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Go(u.nodeValue,o,(n.mode&1)!==0)}_&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ui]=r,r.stateNode=u}return bn(r),null;case 13:if(kt($t),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&ai!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yp(),Ls(),r.flags|=98560,_=!1;else if(_=jo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ui]=r}else Ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bn(r),_=!1}else Mi!==null&&(Ju(Mi),Mi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||($t.current&1)!==0?fn===0&&(fn=3):ef())),r.updateQueue!==null&&(r.flags|=4),bn(r),null);case 4:return Us(),zu(n,r),n===null&&Na(r.stateNode.containerInfo),bn(r),null;case 10:return pu(r.type._context),bn(r),null;case 17:return Yn(r.type)&&Wo(),bn(r),null;case 19:if(kt($t),_=r.memoizedState,_===null)return bn(r),null;if(u=(r.flags&128)!==0,T=_.rendering,T===null)if(u)$a(_,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=tl(n),T!==null){for(r.flags|=128,$a(_,!1),u=T.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)_=o,n=u,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ot($t,$t.current&1|2),r.child}n=n.sibling}_.tail!==null&&Gt()>Bs&&(r.flags|=128,u=!0,$a(_,!1),r.lanes=4194304)}else{if(!u)if(n=tl(T),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),$a(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Vt)return bn(r),null}else 2*Gt()-_.renderingStartTime>Bs&&o!==1073741824&&(r.flags|=128,u=!0,$a(_,!1),r.lanes=4194304);_.isBackwards?(T.sibling=r.child,r.child=T):(o=_.last,o!==null?o.sibling=T:r.child=T,_.last=T)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Gt(),r.sibling=null,o=$t.current,Ot($t,u?o&1|2:o&1),r):(bn(r),null);case 22:case 23:return Qu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(oi&1073741824)!==0&&(bn(r),r.subtreeFlags&6&&(r.flags|=8192)):bn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function uS(n,r){switch(lu(r),r.tag){case 1:return Yn(r.type)&&Wo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),kt(qn),kt(An),yu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Su(r),null;case 13:if(kt($t),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ls()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt($t),null;case 4:return Us(),null;case 10:return pu(r.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var ul=!1,Pn=!1,fS=typeof WeakSet=="function"?WeakSet:Set,He=null;function Fs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Jt(n,r,u)}else o.current=null}function Gu(n,r,o){try{o()}catch(u){Jt(n,r,u)}}var Sm=!1;function dS(n,r){if(Qc=Po,n=Jh(),Xc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var T=0,O=-1,H=-1,le=0,Se=0,Ee=n,ve=null;t:for(;;){for(var Be;Ee!==o||p!==0&&Ee.nodeType!==3||(O=T+p),Ee!==_||u!==0&&Ee.nodeType!==3||(H=T+u),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)ve=Ee,Ee=Be;for(;;){if(Ee===n)break t;if(ve===o&&++le===p&&(O=T),ve===_&&++Se===u&&(H=T),(Be=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Be}o=O===-1||H===-1?null:{start:O,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:n,selectionRange:o},Po=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var $e=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ye=$e.memoizedProps,Qt=$e.memoizedState,te=r.stateNode,X=te.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Ei(r.type,Ye),Qt);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=r.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Jt(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return $e=Sm,Sm=!1,$e}function qa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Gu(r,o,_)}p=p.next}while(p!==u)}}function fl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Hu(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function xm(n){var r=n.alternate;r!==null&&(n.alternate=null,xm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ui],delete r[Oa],delete r[ru],delete r[Yv],delete r[jv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ym(n){return n.tag===5||n.tag===3||n.tag===4}function Mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ho));else if(u!==4&&(n=n.child,n!==null))for(Vu(n,r,o),n=n.sibling;n!==null;)Vu(n,r,o),n=n.sibling}function Wu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Wu(n,r,o),n=n.sibling;n!==null;)Wu(n,r,o),n=n.sibling}var Mn=null,Ti=!1;function yr(n,r,o){for(o=o.child;o!==null;)Em(n,r,o),o=o.sibling}function Em(n,r,o){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(G,o)}catch{}switch(o.tag){case 5:Pn||Fs(o,r);case 6:var u=Mn,p=Ti;Mn=null,yr(n,r,o),Mn=u,Ti=p,Mn!==null&&(Ti?(n=Mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Mn.removeChild(o.stateNode));break;case 18:Mn!==null&&(Ti?(n=Mn,o=o.stateNode,n.nodeType===8?iu(n.parentNode,o):n.nodeType===1&&iu(n,o),Ca(n)):iu(Mn,o.stateNode));break;case 4:u=Mn,p=Ti,Mn=o.stateNode.containerInfo,Ti=!0,yr(n,r,o),Mn=u,Ti=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Gu(o,r,T),p=p.next}while(p!==u)}yr(n,r,o);break;case 1:if(!Pn&&(Fs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(O){Jt(o,r,O)}yr(n,r,o);break;case 21:yr(n,r,o);break;case 22:o.mode&1?(Pn=(u=Pn)||o.memoizedState!==null,yr(n,r,o),Pn=u):yr(n,r,o);break;default:yr(n,r,o)}}function Tm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new fS),r.forEach(function(u){var p=yS.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function Ci(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var _=n,T=r,O=T;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,Ti=!1;break e;case 3:Mn=O.stateNode.containerInfo,Ti=!0;break e;case 4:Mn=O.stateNode.containerInfo,Ti=!0;break e}O=O.return}if(Mn===null)throw Error(t(160));Em(_,T,p),Mn=null,Ti=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(le){Jt(p,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Cm(r,n),r=r.sibling}function Cm(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ci(r,n),ki(n),u&4){try{qa(3,n,n.return),fl(3,n)}catch(Ye){Jt(n,n.return,Ye)}try{qa(5,n,n.return)}catch(Ye){Jt(n,n.return,Ye)}}break;case 1:Ci(r,n),ki(n),u&512&&o!==null&&Fs(o,o.return);break;case 5:if(Ci(r,n),ki(n),u&512&&o!==null&&Fs(o,o.return),n.flags&32){var p=n.stateNode;try{Qe(p,"")}catch(Ye){Jt(n,n.return,Ye)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,T=o!==null?o.memoizedProps:_,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&Yt(p,_),Ae(O,T);var le=Ae(O,_);for(T=0;T<H.length;T+=2){var Se=H[T],Ee=H[T+1];Se==="style"?ee(p,Ee):Se==="dangerouslySetInnerHTML"?jt(p,Ee):Se==="children"?Qe(p,Ee):D(p,Se,Ee,le)}switch(O){case"input":pn(p,_);break;case"textarea":q(p,_);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Be=_.value;Be!=null?on(p,!!_.multiple,Be,!1):ve!==!!_.multiple&&(_.defaultValue!=null?on(p,!!_.multiple,_.defaultValue,!0):on(p,!!_.multiple,_.multiple?[]:"",!1))}p[Oa]=_}catch(Ye){Jt(n,n.return,Ye)}}break;case 6:if(Ci(r,n),ki(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Ye){Jt(n,n.return,Ye)}}break;case 3:if(Ci(r,n),ki(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ca(r.containerInfo)}catch(Ye){Jt(n,n.return,Ye)}break;case 4:Ci(r,n),ki(n);break;case 13:Ci(r,n),ki(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(qu=Gt())),u&4&&Tm(n);break;case 22:if(Se=o!==null&&o.memoizedState!==null,n.mode&1?(Pn=(le=Pn)||Se,Ci(r,n),Pn=le):Ci(r,n),ki(n),u&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!Se&&(n.mode&1)!==0)for(He=n,Se=n.child;Se!==null;){for(Ee=He=Se;He!==null;){switch(ve=He,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:qa(4,ve,ve.return);break;case 1:Fs(ve,ve.return);var $e=ve.stateNode;if(typeof $e.componentWillUnmount=="function"){u=ve,o=ve.return;try{r=u,$e.props=r.memoizedProps,$e.state=r.memoizedState,$e.componentWillUnmount()}catch(Ye){Jt(u,o,Ye)}}break;case 5:Fs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){wm(Ee);continue}}Be!==null?(Be.return=ve,He=Be):wm(Ee)}Se=Se.sibling}e:for(Se=null,Ee=n;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{p=Ee.stateNode,le?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=Ee.stateNode,H=Ee.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=C("display",T))}catch(Ye){Jt(n,n.return,Ye)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch(Ye){Jt(n,n.return,Ye)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ci(r,n),ki(n),u&4&&Tm(n);break;case 21:break;default:Ci(r,n),ki(n)}}function ki(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(ym(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Qe(p,""),u.flags&=-33);var _=Mm(n);Wu(n,_,p);break;case 3:case 4:var T=u.stateNode.containerInfo,O=Mm(n);Vu(n,O,T);break;default:throw Error(t(161))}}catch(H){Jt(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function hS(n,r,o){He=n,Rm(n)}function Rm(n,r,o){for(var u=(n.mode&1)!==0;He!==null;){var p=He,_=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||ul;if(!T){var O=p.alternate,H=O!==null&&O.memoizedState!==null||Pn;O=ul;var le=Pn;if(ul=T,(Pn=H)&&!le)for(He=p;He!==null;)T=He,H=T.child,T.tag===22&&T.memoizedState!==null?bm(p):H!==null?(H.return=T,He=H):bm(p);for(;_!==null;)He=_,Rm(_),_=_.sibling;He=p,ul=O,Pn=le}Am(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,He=_):Am(n)}}function Am(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||fl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pn)if(o===null)u.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:Ei(r.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&wp(r,_,u);break;case 3:var T=r.updateQueue;if(T!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}wp(r,T,o)}break;case 5:var O=r.stateNode;if(o===null&&r.flags&4){o=O;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var Se=le.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&Ca(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&Hu(r)}catch(ve){Jt(r,r.return,ve)}}if(r===n){He=null;break}if(o=r.sibling,o!==null){o.return=r.return,He=o;break}He=r.return}}function wm(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var o=r.sibling;if(o!==null){o.return=r.return,He=o;break}He=r.return}}function bm(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{fl(4,r)}catch(H){Jt(r,o,H)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(H){Jt(r,p,H)}}var _=r.return;try{Hu(r)}catch(H){Jt(r,_,H)}break;case 5:var T=r.return;try{Hu(r)}catch(H){Jt(r,T,H)}}}catch(H){Jt(r,r.return,H)}if(r===n){He=null;break}var O=r.sibling;if(O!==null){O.return=r.return,He=O;break}He=r.return}}var pS=Math.ceil,dl=A.ReactCurrentDispatcher,Xu=A.ReactCurrentOwner,mi=A.ReactCurrentBatchConfig,Et=0,_n=null,nn=null,En=0,oi=0,ks=gr(0),fn=0,Ya=null,Jr=0,hl=0,$u=0,ja=null,Kn=null,qu=0,Bs=1/0,er=null,pl=!1,Yu=null,Mr=null,ml=!1,Er=null,gl=0,Ka=0,ju=null,_l=-1,vl=0;function zn(){return(Et&6)!==0?Gt():_l!==-1?_l:_l=Gt()}function Tr(n){return(n.mode&1)===0?1:(Et&2)!==0&&En!==0?En&-En:Jv.transition!==null?(vl===0&&(vl=Pt()),vl):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:Lh(n.type)),n)}function Ri(n,r,o,u){if(50<Ka)throw Ka=0,ju=null,Error(t(185));Kt(n,o,u),((Et&2)===0||n!==_n)&&(n===_n&&((Et&2)===0&&(hl|=o),fn===4&&Cr(n,En)),Jn(n,u),o===1&&Et===0&&(r.mode&1)===0&&(Bs=Gt()+500,$o&&vr()))}function Jn(n,r){var o=n.callbackNode;gt(n,r);var u=dt(n,n===_n?En:0);if(u===0)o!==null&&xa(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&xa(o),r===1)n.tag===0?Kv(Lm.bind(null,n)):gp(Lm.bind(null,n)),$v(function(){(Et&6)===0&&vr()}),o=null;else{switch(Ii(u)){case 1:o=ya;break;case 4:o=Ao;break;case 16:o=vs;break;case 536870912:o=w;break;default:o=vs}o=Bm(o,Pm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Pm(n,r){if(_l=-1,vl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(zs()&&n.callbackNode!==o)return null;var u=dt(n,n===_n?En:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Sl(n,u);else{r=u;var p=Et;Et|=2;var _=Im();(_n!==n||En!==r)&&(er=null,Bs=Gt()+500,Qr(n,r));do try{_S();break}catch(O){Dm(n,O)}while(!0);hu(),dl.current=_,Et=p,nn!==null?r=0:(_n=null,En=0,r=fn)}if(r!==0){if(r===2&&(p=Ht(n),p!==0&&(u=p,r=Ku(n,p))),r===1)throw o=Ya,Qr(n,0),Cr(n,u),Jn(n,Gt()),o;if(r===6)Cr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!mS(p)&&(r=Sl(n,u),r===2&&(_=Ht(n),_!==0&&(u=_,r=Ku(n,_))),r===1))throw o=Ya,Qr(n,0),Cr(n,u),Jn(n,Gt()),o;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:es(n,Kn,er);break;case 3:if(Cr(n,u),(u&130023424)===u&&(r=qu+500-Gt(),10<r)){if(dt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=nu(es.bind(null,n,Kn,er),r);break}es(n,Kn,er);break;case 4:if(Cr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var T=31-K(u);_=1<<T,T=r[T],T>p&&(p=T),u&=~_}if(u=p,u=Gt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*pS(u/1960))-u,10<u){n.timeoutHandle=nu(es.bind(null,n,Kn,er),u);break}es(n,Kn,er);break;case 5:es(n,Kn,er);break;default:throw Error(t(329))}}}return Jn(n,Gt()),n.callbackNode===o?Pm.bind(null,n):null}function Ku(n,r){var o=ja;return n.current.memoizedState.isDehydrated&&(Qr(n,r).flags|=256),n=Sl(n,r),n!==2&&(r=Kn,Kn=o,r!==null&&Ju(r)),n}function Ju(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function mS(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],_=p.getSnapshot;p=p.value;try{if(!yi(_(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Cr(n,r){for(r&=~$u,r&=~hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-K(r),u=1<<o;n[o]=-1,r&=~u}}function Lm(n){if((Et&6)!==0)throw Error(t(327));zs();var r=dt(n,0);if((r&1)===0)return Jn(n,Gt()),null;var o=Sl(n,r);if(n.tag!==0&&o===2){var u=Ht(n);u!==0&&(r=u,o=Ku(n,u))}if(o===1)throw o=Ya,Qr(n,0),Cr(n,r),Jn(n,Gt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Kn,er),Jn(n,Gt()),null}function Zu(n,r){var o=Et;Et|=1;try{return n(r)}finally{Et=o,Et===0&&(Bs=Gt()+500,$o&&vr())}}function Zr(n){Er!==null&&Er.tag===0&&(Et&6)===0&&zs();var r=Et;Et|=1;var o=mi.transition,u=Ke;try{if(mi.transition=null,Ke=1,n)return n()}finally{Ke=u,mi.transition=o,Et=r,(Et&6)===0&&vr()}}function Qu(){oi=ks.current,kt(ks)}function Qr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Xv(o)),nn!==null)for(o=nn.return;o!==null;){var u=o;switch(lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wo();break;case 3:Us(),kt(qn),kt(An),yu();break;case 5:Su(u);break;case 4:Us();break;case 13:kt($t);break;case 19:kt($t);break;case 10:pu(u.type._context);break;case 22:case 23:Qu()}o=o.return}if(_n=n,nn=n=Rr(n.current,null),En=oi=r,fn=0,Ya=null,$u=hl=Jr=0,Kn=ja=null,Yr!==null){for(r=0;r<Yr.length;r++)if(o=Yr[r],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,_=o.pending;if(_!==null){var T=_.next;_.next=p,u.next=T}o.pending=u}Yr=null}return n}function Dm(n,r){do{var o=nn;try{if(hu(),nl.current=al,il){for(var u=qt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}il=!1}if(Kr=0,gn=un=qt=null,Ha=!1,Va=0,Xu.current=null,o===null||o.return===null){fn=1,Ya=r,nn=null;break}e:{var _=n,T=o.return,O=o,H=r;if(r=En,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,Se=O,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=Se.alternate;ve?(Se.updateQueue=ve.updateQueue,Se.memoizedState=ve.memoizedState,Se.lanes=ve.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Be=im(T);if(Be!==null){Be.flags&=-257,rm(Be,T,O,_,r),Be.mode&1&&nm(_,le,r),r=Be,H=le;var $e=r.updateQueue;if($e===null){var Ye=new Set;Ye.add(H),r.updateQueue=Ye}else $e.add(H);break e}else{if((r&1)===0){nm(_,le,r),ef();break e}H=Error(t(426))}}else if(Vt&&O.mode&1){var Qt=im(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),rm(Qt,T,O,_,r),fu(Os(H,O));break e}}_=H=Os(H,O),fn!==4&&(fn=2),ja===null?ja=[_]:ja.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var te=em(_,H,r);Ap(_,te);break e;case 1:O=H;var X=_.type,ae=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Mr===null||!Mr.has(ae)))){_.flags|=65536,r&=-r,_.lanes|=r;var Re=tm(_,O,r);Ap(_,Re);break e}}_=_.return}while(_!==null)}Um(o)}catch(Je){r=Je,nn===o&&o!==null&&(nn=o=o.return);continue}break}while(!0)}function Im(){var n=dl.current;return dl.current=al,n===null?al:n}function ef(){(fn===0||fn===3||fn===2)&&(fn=4),_n===null||(Jr&268435455)===0&&(hl&268435455)===0||Cr(_n,En)}function Sl(n,r){var o=Et;Et|=2;var u=Im();(_n!==n||En!==r)&&(er=null,Qr(n,r));do try{gS();break}catch(p){Dm(n,p)}while(!0);if(hu(),Et=o,dl.current=u,nn!==null)throw Error(t(261));return _n=null,En=0,fn}function gS(){for(;nn!==null;)Nm(nn)}function _S(){for(;nn!==null&&!Vr();)Nm(nn)}function Nm(n){var r=km(n.alternate,n,oi);n.memoizedProps=n.pendingProps,r===null?Um(n):nn=r,Xu.current=null}function Um(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=cS(o,r,oi),o!==null){nn=o;return}}else{if(o=uS(o,r),o!==null){o.flags&=32767,nn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);fn===0&&(fn=5)}function es(n,r,o){var u=Ke,p=mi.transition;try{mi.transition=null,Ke=1,vS(n,r,o,u)}finally{mi.transition=p,Ke=u}return null}function vS(n,r,o,u){do zs();while(Er!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(Xe(n,_),n===_n&&(nn=_n=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ml||(ml=!0,Bm(vs,function(){return zs(),null})),_=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||_){_=mi.transition,mi.transition=null;var T=Ke;Ke=1;var O=Et;Et|=4,Xu.current=null,dS(n,o),Cm(o,n),kv(eu),Po=!!Qc,eu=Qc=null,n.current=o,hS(o),Ic(),Et=O,Ke=T,mi.transition=_}else n.current=o;if(ml&&(ml=!1,Er=n,gl=p),_=n.pendingLanes,_===0&&(Mr=null),Q(o.stateNode),Jn(n,Gt()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(pl)throw pl=!1,n=Yu,Yu=null,n;return(gl&1)!==0&&n.tag!==0&&zs(),_=n.pendingLanes,(_&1)!==0?n===ju?Ka++:(Ka=0,ju=n):Ka=0,vr(),null}function zs(){if(Er!==null){var n=Ii(gl),r=mi.transition,o=Ke;try{if(mi.transition=null,Ke=16>n?16:n,Er===null)var u=!1;else{if(n=Er,Er=null,gl=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,He=n.current;He!==null;){var _=He,T=_.child;if((He.flags&16)!==0){var O=_.deletions;if(O!==null){for(var H=0;H<O.length;H++){var le=O[H];for(He=le;He!==null;){var Se=He;switch(Se.tag){case 0:case 11:case 15:qa(8,Se,_)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,He=Ee;else for(;He!==null;){Se=He;var ve=Se.sibling,Be=Se.return;if(xm(Se),Se===le){He=null;break}if(ve!==null){ve.return=Be,He=ve;break}He=Be}}}var $e=_.alternate;if($e!==null){var Ye=$e.child;if(Ye!==null){$e.child=null;do{var Qt=Ye.sibling;Ye.sibling=null,Ye=Qt}while(Ye!==null)}}He=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,He=T;else e:for(;He!==null;){if(_=He,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:qa(9,_,_.return)}var te=_.sibling;if(te!==null){te.return=_.return,He=te;break e}He=_.return}}var X=n.current;for(He=X;He!==null;){T=He;var ae=T.child;if((T.subtreeFlags&2064)!==0&&ae!==null)ae.return=T,He=ae;else e:for(T=X;He!==null;){if(O=He,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:fl(9,O)}}catch(Je){Jt(O,O.return,Je)}if(O===T){He=null;break e}var Re=O.sibling;if(Re!==null){Re.return=O.return,He=Re;break e}He=O.return}}if(Et=p,vr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(G,n)}catch{}u=!0}return u}finally{Ke=o,mi.transition=r}}return!1}function Om(n,r,o){r=Os(o,r),r=em(n,r,1),n=xr(n,r,1),r=zn(),n!==null&&(Kt(n,1,r),Jn(n,r))}function Jt(n,r,o){if(n.tag===3)Om(n,n,o);else for(;r!==null;){if(r.tag===3){Om(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mr===null||!Mr.has(u))){n=Os(o,n),n=tm(r,n,1),r=xr(r,n,1),n=zn(),r!==null&&(Kt(r,1,n),Jn(r,n));break}}r=r.return}}function SS(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=zn(),n.pingedLanes|=n.suspendedLanes&o,_n===n&&(En&o)===o&&(fn===4||fn===3&&(En&130023424)===En&&500>Gt()-qu?Qr(n,0):$u|=o),Jn(n,r)}function Fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ve,Ve<<=1,(Ve&130023424)===0&&(Ve=4194304)));var o=zn();n=Ji(n,r),n!==null&&(Kt(n,r,o),Jn(n,o))}function xS(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Fm(n,o)}function yS(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Fm(n,o)}var km;km=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)jn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return jn=!1,lS(n,r,o);jn=(n.flags&131072)!==0}else jn=!1,Vt&&(r.flags&1048576)!==0&&_p(r,Yo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;cl(n,r),n=r.pendingProps;var p=ws(r,An.current);Ns(r,o),p=Tu(null,r,u,n,p,o);var _=Cu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yn(u)?(_=!0,Xo(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,_u(r),p.updater=ol,r.stateNode=p,p._reactInternals=r,Lu(r,u,n,o),r=Uu(null,r,u,!0,_,o)):(r.tag=0,Vt&&_&&ou(r),Bn(null,r,p,o),r=r.child),r;case 16:u=r.elementType;e:{switch(cl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=ES(u),n=Ei(u,n),p){case 0:r=Nu(null,r,u,n,o);break e;case 1:r=um(null,r,u,n,o);break e;case 11:r=sm(null,r,u,n,o);break e;case 14:r=am(null,r,u,Ei(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),Nu(n,r,u,p,o);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),um(n,r,u,p,o);case 3:e:{if(fm(r),n===null)throw Error(t(387));u=r.pendingProps,_=r.memoizedState,p=_.element,Rp(n,r),el(r,u,null,o);var T=r.memoizedState;if(u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=Os(Error(t(423)),r),r=dm(n,r,u,o,p);break e}else if(u!==p){p=Os(Error(t(424)),r),r=dm(n,r,u,o,p);break e}else for(ai=mr(r.stateNode.containerInfo.firstChild),si=r,Vt=!0,Mi=null,o=Tp(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),u===p){r=Qi(n,r,o);break e}Bn(n,r,u,o)}r=r.child}return r;case 5:return bp(r),n===null&&uu(r),u=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,T=p.children,tu(u,p)?T=null:_!==null&&tu(u,_)&&(r.flags|=32),cm(n,r),Bn(n,r,T,o),r.child;case 6:return n===null&&uu(r),null;case 13:return hm(n,r,o);case 4:return vu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ds(r,null,u,o):Bn(n,r,u,o),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),sm(n,r,u,p,o);case 7:return Bn(n,r,r.pendingProps,o),r.child;case 8:return Bn(n,r,r.pendingProps.children,o),r.child;case 12:return Bn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,_=r.memoizedProps,T=p.value,Ot(Jo,u._currentValue),u._currentValue=T,_!==null)if(yi(_.value,T)){if(_.children===p.children&&!qn.current){r=Qi(n,r,o);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var O=_.dependencies;if(O!==null){T=_.child;for(var H=O.firstContext;H!==null;){if(H.context===u){if(_.tag===1){H=Zi(-1,o&-o),H.tag=2;var le=_.updateQueue;if(le!==null){le=le.shared;var Se=le.pending;Se===null?H.next=H:(H.next=Se.next,Se.next=H),le.pending=H}}_.lanes|=o,H=_.alternate,H!==null&&(H.lanes|=o),mu(_.return,o,r),O.lanes|=o;break}H=H.next}}else if(_.tag===10)T=_.type===r.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=o,O=T.alternate,O!==null&&(O.lanes|=o),mu(T,o,r),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===r){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Bn(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Ns(r,o),p=hi(p),u=u(p),r.flags|=1,Bn(n,r,u,o),r.child;case 14:return u=r.type,p=Ei(u,r.pendingProps),p=Ei(u.type,p),am(n,r,u,p,o);case 15:return om(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),cl(n,r),r.tag=1,Yn(u)?(n=!0,Xo(r)):n=!1,Ns(r,o),Zp(r,u,p),Lu(r,u,p,o),Uu(null,r,u,!0,n,o);case 19:return mm(n,r,o);case 22:return lm(n,r,o)}throw Error(t(156,r.tag))};function Bm(n,r){return Sa(n,r)}function MS(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,r,o,u){return new MS(n,r,o,u)}function tf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ES(n){if(typeof n=="function")return tf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===re)return 14}return 2}function Rr(n,r){var o=n.alternate;return o===null?(o=gi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function xl(n,r,o,u,p,_){var T=2;if(u=n,typeof n=="function")tf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case M:return ts(o.children,p,_,r);case L:T=8,p|=8;break;case V:return n=gi(12,o,r,p|2),n.elementType=V,n.lanes=_,n;case oe:return n=gi(13,o,r,p),n.elementType=oe,n.lanes=_,n;case z:return n=gi(19,o,r,p),n.elementType=z,n.lanes=_,n;case Y:return yl(o,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:T=10;break e;case W:T=9;break e;case j:T=11;break e;case re:T=14;break e;case ce:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gi(T,o,r,p),r.elementType=n,r.type=u,r.lanes=_,r}function ts(n,r,o,u){return n=gi(7,n,u,r),n.lanes=o,n}function yl(n,r,o,u){return n=gi(22,n,u,r),n.elementType=Y,n.lanes=o,n.stateNode={isHidden:!1},n}function nf(n,r,o){return n=gi(6,n,null,r),n.lanes=o,n}function rf(n,r,o){return r=gi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function TS(n,r,o,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bt(0),this.expirationTimes=bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function sf(n,r,o,u,p,_,T,O,H){return n=new TS(n,r,o,O,H),r===1?(r=1,_===!0&&(r|=8)):r=0,_=gi(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(_),n}function CS(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function zm(n){if(!n)return _r;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Yn(o))return pp(n,o,r)}return r}function Gm(n,r,o,u,p,_,T,O,H){return n=sf(o,u,!0,n,p,_,T,O,H),n.context=zm(null),o=n.current,u=zn(),p=Tr(o),_=Zi(u,p),_.callback=r??null,xr(o,_,p),n.current.lanes=p,Kt(n,p,u),Jn(n,u),n}function Ml(n,r,o,u){var p=r.current,_=zn(),T=Tr(p);return o=zm(o),r.context===null?r.context=o:r.pendingContext=o,r=Zi(_,T),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=xr(p,r,T),n!==null&&(Ri(n,p,T,_),Qo(n,p,T)),T}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function af(n,r){Hm(n,r),(n=n.alternate)&&Hm(n,r)}function RS(){return null}var Vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function of(n){this._internalRoot=n}Tl.prototype.render=of.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ml(n,r,null,null)},Tl.prototype.unmount=of.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Zr(function(){Ml(null,n,null,null)}),r[qi]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ni();n={blockedOn:null,target:n,priority:r};for(var o=0;o<dr.length&&r!==0&&r<dr[o].priority;o++);dr.splice(o,0,n),o===0&&bh(n)}};function lf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function AS(n,r,o,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var le=El(T);_.call(le)}}var T=Gm(r,u,n,0,null,!1,!1,"",Wm);return n._reactRootContainer=T,n[qi]=T.current,Na(n.nodeType===8?n.parentNode:n),Zr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var O=u;u=function(){var le=El(H);O.call(le)}}var H=sf(n,0,!1,null,null,!1,!1,"",Wm);return n._reactRootContainer=H,n[qi]=H.current,Na(n.nodeType===8?n.parentNode:n),Zr(function(){Ml(r,H,o,u)}),H}function Rl(n,r,o,u,p){var _=o._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var O=p;p=function(){var H=El(T);O.call(H)}}Ml(r,T,n,p)}else T=AS(o,r,n,p,u);return El(T)}cn=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=rt(r.pendingLanes);o!==0&&(ln(r,o|1),Jn(r,Gt()),(Et&6)===0&&(Bs=Gt()+500,vr()))}break;case 13:Zr(function(){var u=Ji(n,1);if(u!==null){var p=zn();Ri(u,n,1,p)}}),af(n,1)}},ur=function(n){if(n.tag===13){var r=Ji(n,134217728);if(r!==null){var o=zn();Ri(r,n,134217728,o)}af(n,134217728)}},xi=function(n){if(n.tag===13){var r=Tr(n),o=Ji(n,r);if(o!==null){var u=zn();Ri(o,n,r,u)}af(n,r)}},Ni=function(){return Ke},vt=function(n,r){var o=Ke;try{return Ke=n,r()}finally{Ke=o}},he=function(n,r,o){switch(r){case"input":if(pn(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=Vo(u);if(!p)throw Error(t(90));Tt(u),pn(u,p)}}}break;case"textarea":q(n,o);break;case"select":r=o.value,r!=null&&on(n,!!o.multiple,r,!1)}},Te=Zu,we=Zr;var wS={usingClientEntryPoint:!1,Events:[Fa,Rs,Vo,ue,be,Zu]},Ja={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=va(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{G=Al.inject(bS),se=Al}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS,Zn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(r))throw Error(t(200));return CS(n,r,null,o)},Zn.createRoot=function(n,r){if(!lf(n))throw Error(t(299));var o=!1,u="",p=Vm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=sf(n,1,!1,null,null,o,!1,u,p),n[qi]=r.current,Na(n.nodeType===8?n.parentNode:n),new of(r)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=va(r),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return Zr(n)},Zn.hydrate=function(n,r,o){if(!Cl(r))throw Error(t(200));return Rl(null,n,r,!0,o)},Zn.hydrateRoot=function(n,r,o){if(!lf(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,_="",T=Vm;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),r=Gm(r,null,n,1,o??null,p,!1,_,T),n[qi]=r.current,Na(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new Tl(r)},Zn.render=function(n,r,o){if(!Cl(r))throw Error(t(200));return Rl(null,n,r,!1,o)},Zn.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},Zn.unstable_batchedUpdates=Zu,Zn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,r,o,!1,u)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Zm;function BS(){if(Zm)return ff.exports;Zm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ff.exports=kS(),ff.exports}var Qm;function zS(){if(Qm)return wl;Qm=1;var s=BS();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var GS=zS();const h0=()=>{const s=new URLSearchParams(location.search).get("ws");return"".trim()||s||localStorage.getItem("pc-backend")||""},pf=h0();function HS(){const[s,e]=lt.useState(null),[t,i]=lt.useState(null),[a,l]=lt.useState(!1),[c,f]=lt.useState(""),d=lt.useRef(null),h=lt.useRef(null),m=lt.useCallback(E=>{const R=new WebSocket(pf);return d.current=R,R.onopen=()=>{l(!0),E?.(R)},R.onclose=()=>l(!1),R.onmessage=y=>{const x=JSON.parse(y.data);x.type==="state"&&e(x.room),x.type==="joined"&&(i(x.seat),h.current=x.seat,localStorage.setItem("pc-session",JSON.stringify({code:x.code,token:x.token}))),x.type==="error"&&f(String(x.message))},R},[]);lt.useEffect(()=>{if(!pf)return;let E=null;try{E=JSON.parse(localStorage.getItem("pc-session")||"null")}catch{}const R=m(y=>{E&&y.send(JSON.stringify({type:"resume",code:E.code,token:E.token}))});return()=>R.close()},[m]);const g=lt.useCallback(E=>{if(!pf){f("No backend configured");return}d.current?.readyState===WebSocket.OPEN?d.current.send(JSON.stringify(E)):f("Backend offline — start the WebSocket server.")},[]),v=lt.useCallback((E,R)=>{localStorage.removeItem("pc-session"),m(y=>y.send(JSON.stringify({type:"create",name:E,bestOf:R})))},[m]),S=lt.useCallback((E,R)=>{localStorage.removeItem("pc-session"),m(y=>y.send(JSON.stringify({type:"join",code:E.toUpperCase(),name:R})))},[m]);return{room:s,seat:t??h.current,connected:a,error:c,create:v,join:S,send:g,setError:f}}class VS{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return WS(e).buffer}}function WS(s){let e=0;for(const a of s)e+=a.byteLength;const t=new Uint8Array(e);let i=0;for(const a of s){const l=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);t.set(l,i),i+=a.byteLength}return t}function p0(s){return new XS(s).unpack()}function m0(s){const e=new $S,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class XS{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,a="",l,c;for(;i<e;)l=t[i],l<160?(c=l,i++):(l^192)<32?(c=(l&31)<<6|t[i+1]&63,i+=2):(l^224)<16?(c=(l&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(c=(l&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),a+=String.fromCodePoint(c);return this.index+=e,a}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const a=this.unpack();t[a]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,a=e&8388607|8388608;return(t===0?1:-1)*a*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,a=(e>>20&2047)-1023,c=(e&1048575|1048576)*2**(a-20)+t*2**(a-52);return(i===0?1:-1)*c}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class $S{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=a=>{if(a<t){const l=this.pack(e[a]);return l instanceof Promise?l.then(()=>i(a+1)):i(a+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),a=e/2**i-1,l=Math.floor(a*2**52),c=2**32,f=t<<31|i+1023<<20|l/c&1048575,d=l%c;this._bufferBuilder.append(203),this.pack_int32(f),this.pack_int32(d)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const a=l=>{if(l<t.length){const c=t[l];if(e.hasOwnProperty(c)){this.pack(c);const f=this.pack(e[c]);if(f instanceof Promise)return f.then(()=>a(l+1))}return a(l+1)}};return a(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new VS,this._textEncoder=new TextEncoder}}let g0=!0,_0=!0;function co(s,e,t){const i=s.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function us(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Qd("Unable to polyfill events");return}const a=s.RTCPeerConnection.prototype,l=a.addEventListener;a.addEventListener=function(f,d){if(f!==e)return l.apply(this,arguments);const h=m=>{const g=t(m);g&&(d.handleEvent?d.handleEvent(g):d(g))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(d,h),l.apply(this,[f,h])};const c=a.removeEventListener;a.removeEventListener=function(f,d){if(f!==e||!this._eventMap||!this._eventMap[e])return c.apply(this,arguments);if(!this._eventMap[e].has(d))return c.apply(this,arguments);const h=this._eventMap[e].get(d);return this._eventMap[e].delete(d),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,c.apply(this,[f,h])},Object.defineProperty(a,"on"+e,{get(){return this["_on"+e]},set(f){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),f&&this.addEventListener(e,this["_on"+e]=f)},enumerable:!0,configurable:!0})}function qS(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(g0=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function YS(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(_0=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Qd(){if(typeof window=="object"){if(g0)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function eh(s,e){_0&&console.warn(s+" is deprecated, please use "+e+" instead.")}function jS(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(a=>a.brand==="Chromium");if(i){const a=parseInt(i.version,10);if(a>=90)return{browser:"chrome",version:a}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(co(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(co(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(co(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=co(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function eg(s){return Object.prototype.toString.call(s)==="[object Object]"}function v0(s){return eg(s)?Object.keys(s).reduce(function(e,t){const i=eg(s[t]),a=i?v0(s[t]):s[t],l=i&&!Object.keys(a).length;return a===void 0||l?e:Object.assign(e,{[t]:a})},{}):s}function ed(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?ed(s,s.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(a=>{ed(s,s.get(a),t)})}))}function tg(s,e,t){const i=t?"outbound-rtp":"inbound-rtp",a=new Map;if(e===null)return a;const l=[];return s.forEach(c=>{c.type==="track"&&c.trackIdentifier===e.id&&l.push(c)}),l.forEach(c=>{s.forEach(f=>{f.type===i&&f.trackId===c.id&&ed(s,f,a)})}),a}const ng=Qd;function S0(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const i=function(f){if(typeof f!="object"||f.mandatory||f.optional)return f;const d={};return Object.keys(f).forEach(h=>{if(h==="require"||h==="advanced"||h==="mediaSource")return;const m=typeof f[h]=="object"?f[h]:{ideal:f[h]};m.exact!==void 0&&typeof m.exact=="number"&&(m.min=m.max=m.exact);const g=function(v,S){return v?v+S.charAt(0).toUpperCase()+S.slice(1):S==="deviceId"?"sourceId":S};if(m.ideal!==void 0){d.optional=d.optional||[];let v={};typeof m.ideal=="number"?(v[g("min",h)]=m.ideal,d.optional.push(v),v={},v[g("max",h)]=m.ideal,d.optional.push(v)):(v[g("",h)]=m.ideal,d.optional.push(v))}m.exact!==void 0&&typeof m.exact!="number"?(d.mandatory=d.mandatory||{},d.mandatory[g("",h)]=m.exact):["min","max"].forEach(v=>{m[v]!==void 0&&(d.mandatory=d.mandatory||{},d.mandatory[g(v,h)]=m[v])})}),f.advanced&&(d.optional=(d.optional||[]).concat(f.advanced)),d},a=function(f,d){if(e.version>=61)return d(f);if(f=JSON.parse(JSON.stringify(f)),f&&typeof f.audio=="object"){const h=function(m,g,v){g in m&&!(v in m)&&(m[v]=m[g],delete m[g])};f=JSON.parse(JSON.stringify(f)),h(f.audio,"autoGainControl","googAutoGainControl"),h(f.audio,"noiseSuppression","googNoiseSuppression"),f.audio=i(f.audio)}if(f&&typeof f.video=="object"){let h=f.video.facingMode;h=h&&(typeof h=="object"?h:{ideal:h});const m=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!m)){delete f.video.facingMode;let g;if(h.exact==="environment"||h.ideal==="environment"?g=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(g=["front"]),g)return t.mediaDevices.enumerateDevices().then(v=>{v=v.filter(E=>E.kind==="videoinput");let S=v.find(E=>g.some(R=>E.label.toLowerCase().includes(R)));return!S&&v.length&&g.includes("back")&&(S=v[v.length-1]),S&&(f.video.deviceId=h.exact?{exact:S.deviceId}:{ideal:S.deviceId}),f.video=i(f.video),ng("chrome: "+JSON.stringify(f)),d(f)})}f.video=i(f.video)}return ng("chrome: "+JSON.stringify(f)),d(f)},l=function(f){return e.version>=64?f:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[f.name]||f.name,message:f.message,constraint:f.constraint||f.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},c=function(f,d,h){a(f,m=>{t.webkitGetUserMedia(m,d,g=>{h&&h(l(g))})})};if(t.getUserMedia=c.bind(t),t.mediaDevices.getUserMedia){const f=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(d){return a(d,h=>f(h).then(m=>{if(h.audio&&!m.getAudioTracks().length||h.video&&!m.getVideoTracks().length)throw m.getTracks().forEach(g=>{g.stop()}),new DOMException("","NotFoundError");return m},m=>Promise.reject(l(m))))}}}function x0(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function y0(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=a=>{a.stream.addEventListener("addtrack",l=>{let c;s.RTCPeerConnection.prototype.getReceivers?c=this.getReceivers().find(d=>d.track&&d.track.id===l.track.id):c={track:l.track};const f=new Event("track");f.track=l.track,f.receiver=c,f.transceiver={receiver:c},f.streams=[a.stream],this.dispatchEvent(f)}),a.stream.getTracks().forEach(l=>{let c;s.RTCPeerConnection.prototype.getReceivers?c=this.getReceivers().find(d=>d.track&&d.track.id===l.id):c={track:l};const f=new Event("track");f.track=l,f.receiver=c,f.transceiver={receiver:c},f.streams=[a.stream],this.dispatchEvent(f)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else us(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function M0(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(a,l){return{track:l,get dtmf(){return this._dtmf===void 0&&(l.kind==="audio"?this._dtmf=a.createDTMFSender(l):this._dtmf=null),this._dtmf},_pc:a}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const a=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(f,d){let h=a.apply(this,arguments);return h||(h=e(this,f),this._senders.push(h)),h};const l=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(f){l.apply(this,arguments);const d=this._senders.indexOf(f);d!==-1&&this._senders.splice(d,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(l){this._senders=this._senders||[],t.apply(this,[l]),l.getTracks().forEach(c=>{this._senders.push(e(this,c))})};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(l){this._senders=this._senders||[],i.apply(this,[l]),l.getTracks().forEach(c=>{const f=this._senders.find(d=>d.track===c);f&&this._senders.splice(this._senders.indexOf(f),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(a=>a._pc=this),i},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function E0(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const i=s.RTCPeerConnection.prototype.getSenders;i&&(s.RTCPeerConnection.prototype.getSenders=function(){const c=i.apply(this,[]);return c.forEach(f=>f._pc=this),c});const a=s.RTCPeerConnection.prototype.addTrack;a&&(s.RTCPeerConnection.prototype.addTrack=function(){const c=a.apply(this,arguments);return c._pc=this,c}),s.RTCRtpSender.prototype.getStats=function(){const c=this;return this._pc.getStats().then(f=>tg(f,c.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const i=s.RTCPeerConnection.prototype.getReceivers;i&&(s.RTCPeerConnection.prototype.getReceivers=function(){const l=i.apply(this,[]);return l.forEach(c=>c._pc=this),l}),us(s,"track",a=>(a.receiver._pc=a.srcElement,a)),s.RTCRtpReceiver.prototype.getStats=function(){const l=this;return this._pc.getStats().then(c=>tg(c,l.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const a=arguments[0];let l,c,f;return this.getSenders().forEach(d=>{d.track===a&&(l?f=!0:l=d)}),this.getReceivers().forEach(d=>(d.track===a&&(c?f=!0:c=d),d.track===a)),f||l&&c?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):l?l.getStats():c?c.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function T0(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(c=>this._shimmedLocalStreams[c][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(c,f){if(!f)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const d=e.apply(this,arguments);return this._shimmedLocalStreams[f.id]?this._shimmedLocalStreams[f.id].indexOf(d)===-1&&this._shimmedLocalStreams[f.id].push(d):this._shimmedLocalStreams[f.id]=[f,d],d};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(c){this._shimmedLocalStreams=this._shimmedLocalStreams||{},c.getTracks().forEach(h=>{if(this.getSenders().find(g=>g.track===h))throw new DOMException("Track already exists.","InvalidAccessError")});const f=this.getSenders();t.apply(this,arguments);const d=this.getSenders().filter(h=>f.indexOf(h)===-1);this._shimmedLocalStreams[c.id]=[c].concat(d)};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[c.id],i.apply(this,arguments)};const a=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},c&&Object.keys(this._shimmedLocalStreams).forEach(f=>{const d=this._shimmedLocalStreams[f].indexOf(c);d!==-1&&this._shimmedLocalStreams[f].splice(d,1),this._shimmedLocalStreams[f].length===1&&delete this._shimmedLocalStreams[f]}),a.apply(this,arguments)}}function C0(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return T0(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const m=t.apply(this);return this._reverseStreams=this._reverseStreams||{},m.map(g=>this._reverseStreams[g.id])};const i=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(m){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},m.getTracks().forEach(g=>{if(this.getSenders().find(S=>S.track===g))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[m.id]){const g=new s.MediaStream(m.getTracks());this._streams[m.id]=g,this._reverseStreams[g.id]=m,m=g}i.apply(this,[m])};const a=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(m){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},a.apply(this,[this._streams[m.id]||m]),delete this._reverseStreams[this._streams[m.id]?this._streams[m.id].id:m.id],delete this._streams[m.id]},s.RTCPeerConnection.prototype.addTrack=function(m,g){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const v=[].slice.call(arguments,1);if(v.length!==1||!v[0].getTracks().find(R=>R===m))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(R=>R.track===m))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const E=this._streams[g.id];if(E)E.addTrack(m),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const R=new s.MediaStream([m]);this._streams[g.id]=R,this._reverseStreams[R.id]=g,this.addStream(R)}return this.getSenders().find(R=>R.track===m)};function l(h,m){let g=m.sdp;return Object.keys(h._reverseStreams||[]).forEach(v=>{const S=h._reverseStreams[v],E=h._streams[S.id];g=g.replace(new RegExp(E.id,"g"),S.id)}),new RTCSessionDescription({type:m.type,sdp:g})}function c(h,m){let g=m.sdp;return Object.keys(h._reverseStreams||[]).forEach(v=>{const S=h._reverseStreams[v],E=h._streams[S.id];g=g.replace(new RegExp(S.id,"g"),E.id)}),new RTCSessionDescription({type:m.type,sdp:g})}["createOffer","createAnswer"].forEach(function(h){const m=s.RTCPeerConnection.prototype[h],g={[h](){const v=arguments;return arguments.length&&typeof arguments[0]=="function"?m.apply(this,[E=>{const R=l(this,E);v[0].apply(null,[R])},E=>{v[1]&&v[1].apply(null,E)},arguments[2]]):m.apply(this,arguments).then(E=>l(this,E))}};s.RTCPeerConnection.prototype[h]=g[h]});const f=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?f.apply(this,arguments):(arguments[0]=c(this,arguments[0]),f.apply(this,arguments))};const d=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const h=d.get.apply(this);return h.type===""?h:l(this,h)}}),s.RTCPeerConnection.prototype.removeTrack=function(m){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!m._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(m._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let v;Object.keys(this._streams).forEach(S=>{this._streams[S].getTracks().find(R=>m.track===R)&&(v=this._streams[S])}),v&&(v.getTracks().length===1?this.removeStream(this._reverseStreams[v.id]):v.removeTrack(m.track),this.dispatchEvent(new Event("negotiationneeded")))}}function td(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],a={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=a[t]})}function R0(s,e){e.version>102||us(s,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const ig=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:R0,shimAddTrackRemoveTrack:C0,shimAddTrackRemoveTrackWithNative:T0,shimGetSendersWithDtmf:M0,shimGetUserMedia:S0,shimMediaStream:x0,shimOnTrack:y0,shimPeerConnection:td,shimSenderReceiverGetStats:E0},Symbol.toStringTag,{value:"Module"}));function A0(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const i=s&&s.MediaStreamTrack;if(t.getUserMedia=function(a,l,c){eh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(a).then(l,c)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const a=function(c,f,d){f in c&&!(d in c)&&(c[d]=c[f],delete c[f])},l=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(c){return typeof c=="object"&&typeof c.audio=="object"&&(c=JSON.parse(JSON.stringify(c)),a(c.audio,"autoGainControl","mozAutoGainControl"),a(c.audio,"noiseSuppression","mozNoiseSuppression")),l(c)},i&&i.prototype.getSettings){const c=i.prototype.getSettings;i.prototype.getSettings=function(){const f=c.apply(this,arguments);return a(f,"mozAutoGainControl","autoGainControl"),a(f,"mozNoiseSuppression","noiseSuppression"),f}}if(i&&i.prototype.applyConstraints){const c=i.prototype.applyConstraints;i.prototype.applyConstraints=function(f){return this.kind==="audio"&&typeof f=="object"&&(f=JSON.parse(JSON.stringify(f)),a(f,"autoGainControl","mozAutoGainControl"),a(f,"noiseSuppression","mozNoiseSuppression")),c.apply(this,[f])}}}}function KS(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const a=new DOMException("getDisplayMedia without video constraints is undefined");return a.name="NotFoundError",a.code=8,Promise.reject(a)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(i)}))}function w0(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function nd(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],a={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=a[t]}))}function b0(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[l,c,f]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[l||null]).then(d=>{if(e.version<53&&!c)try{d.forEach(h=>{h.type=t[h.type]||h.type})}catch(h){if(h.name!=="TypeError")throw h;d.forEach((m,g)=>{d.set(g,Object.assign({},m,{type:t[m.type]||m.type}))})}return d}).then(c,f)}}function P0(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const a=e.apply(this,[]);return a.forEach(l=>l._pc=this),a});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const a=t.apply(this,arguments);return a._pc=this,a}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function L0(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(a=>a._pc=this),i}),us(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function D0(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){eh("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function I0(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function N0(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let a=arguments[1]&&arguments[1].sendEncodings;a===void 0&&(a=[]),a=[...a];const l=a.length>0;l&&a.forEach(f=>{if("rid"in f&&!/^[a-z0-9]{0,16}$/i.test(f.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in f&&!(parseFloat(f.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in f&&!(parseFloat(f.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const c=t.apply(this,arguments);if(l){const{sender:f}=c,d=f.getParameters();(!("encodings"in d)||d.encodings.length===1&&Object.keys(d.encodings[0]).length===0)&&(d.encodings=a,f.sendEncodings=a,this.setParametersPromises.push(f.setParameters(d).then(()=>{delete f.sendEncodings}).catch(()=>{delete f.sendEncodings})))}return c})}function U0(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const a=t.apply(this,arguments);return"encodings"in a||(a.encodings=[].concat(this.sendEncodings||[{}])),a})}function O0(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function F0(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const rg=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:N0,shimCreateAnswer:F0,shimCreateOffer:O0,shimGetDisplayMedia:KS,shimGetParameters:U0,shimGetStats:b0,shimGetUserMedia:A0,shimOnTrack:w0,shimPeerConnection:nd,shimRTCDataChannel:I0,shimReceiverGetStats:L0,shimRemoveStream:D0,shimSenderGetStats:P0},Symbol.toStringTag,{value:"Module"}));function k0(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(a=>e.call(this,a,i)),i.getVideoTracks().forEach(a=>e.call(this,a,i))},s.RTCPeerConnection.prototype.addTrack=function(i,...a){return a&&a.forEach(l=>{this._localStreams?this._localStreams.includes(l)||this._localStreams.push(l):this._localStreams=[l]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const a=t.getTracks();this.getSenders().forEach(l=>{a.includes(l.track)&&this.removeTrack(l)})})}}function B0(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(a=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(a))return;this._remoteStreams.push(a);const l=new Event("addstream");l.stream=a,this.dispatchEvent(l)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(a){a.streams.forEach(l=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(l)>=0)return;i._remoteStreams.push(l);const c=new Event("addstream");c.stream=l,i.dispatchEvent(c)})}),e.apply(i,arguments)}}}function z0(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,a=e.setLocalDescription,l=e.setRemoteDescription,c=e.addIceCandidate;e.createOffer=function(h,m){const g=arguments.length>=2?arguments[2]:arguments[0],v=t.apply(this,[g]);return m?(v.then(h,m),Promise.resolve()):v},e.createAnswer=function(h,m){const g=arguments.length>=2?arguments[2]:arguments[0],v=i.apply(this,[g]);return m?(v.then(h,m),Promise.resolve()):v};let f=function(d,h,m){const g=a.apply(this,[d]);return m?(g.then(h,m),Promise.resolve()):g};e.setLocalDescription=f,f=function(d,h,m){const g=l.apply(this,[d]);return m?(g.then(h,m),Promise.resolve()):g},e.setRemoteDescription=f,f=function(d,h,m){const g=c.apply(this,[d]);return m?(g.then(h,m),Promise.resolve()):g},e.addIceCandidate=f}function G0(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=a=>i(H0(a))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,a,l){e.mediaDevices.getUserMedia(i).then(a,l)}.bind(e))}function H0(s){return s&&s.video!==void 0?Object.assign({},s,{video:v0(s.video)}):s}function V0(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(i,a){if(i&&i.iceServers){const l=[];for(let c=0;c<i.iceServers.length;c++){let f=i.iceServers[c];f.urls===void 0&&f.url?(eh("RTCIceServer.url","RTCIceServer.urls"),f=JSON.parse(JSON.stringify(f)),f.urls=f.url,delete f.url,l.push(f)):l.push(i.iceServers[c])}i.iceServers=l}return new e(i,a)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function W0(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function X0(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const a=this.getTransceivers().find(c=>c.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&a?a.direction==="sendrecv"?a.setDirection?a.setDirection("sendonly"):a.direction="sendonly":a.direction==="recvonly"&&(a.setDirection?a.setDirection("inactive"):a.direction="inactive"):i.offerToReceiveAudio===!0&&!a&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const l=this.getTransceivers().find(c=>c.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&l?l.direction==="sendrecv"?l.setDirection?l.setDirection("sendonly"):l.direction="sendonly":l.direction==="recvonly"&&(l.setDirection?l.setDirection("inactive"):l.direction="inactive"):i.offerToReceiveVideo===!0&&!l&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function $0(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const sg=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:$0,shimCallbacksAPI:z0,shimConstraints:H0,shimCreateOfferLegacy:X0,shimGetUserMedia:G0,shimLocalStreamsAPI:k0,shimRTCIceServerUrls:V0,shimRemoteStreamsAPI:B0,shimTrackEventTransceiver:W0},Symbol.toStringTag,{value:"Module"}));var mf={exports:{}},ag;function JS(){return ag||(ag=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
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
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},l=e.splitLines(t)[0].split(" ");i.profile=l[2];for(let f=3;f<l.length;f++){const d=l[f],h=e.matchPrefix(t,"a=rtpmap:"+d+" ")[0];if(h){const m=e.parseRtpMap(h),g=e.matchPrefix(t,"a=fmtp:"+d+" ");switch(m.parameters=g.length?e.parseFmtp(g[0]):{},m.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+d+" ").map(e.parseRtcpFb),i.codecs.push(m),m.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(m.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(f=>{i.headerExtensions.push(e.parseExtmap(f))});const c=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(f=>{c.forEach(d=>{f.rtcpFeedback.find(m=>m.type===d.type&&m.parameter===d.parameter)||f.rtcpFeedback.push(d)})}),i},e.writeRtpDescription=function(t,i){let a="";a+="m="+t+" ",a+=i.codecs.length>0?"9":"0",a+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",a+=i.codecs.map(c=>c.preferredPayloadType!==void 0?c.preferredPayloadType:c.payloadType).join(" ")+`\r
`,a+=`c=IN IP4 0.0.0.0\r
`,a+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(c=>{a+=e.writeRtpMap(c),a+=e.writeFmtp(c),a+=e.writeRtcpFb(c)});let l=0;return i.codecs.forEach(c=>{c.maxptime>l&&(l=c.maxptime)}),l>0&&(a+="a=maxptime:"+l+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(c=>{a+=e.writeExtmap(c)}),a},e.parseRtpEncodingParameters=function(t){const i=[],a=e.parseRtpParameters(t),l=a.fecMechanisms.indexOf("RED")!==-1,c=a.fecMechanisms.indexOf("ULPFEC")!==-1,f=e.matchPrefix(t,"a=ssrc:").map(v=>e.parseSsrcMedia(v)).filter(v=>v.attribute==="cname"),d=f.length>0&&f[0].ssrc;let h;const m=e.matchPrefix(t,"a=ssrc-group:FID").map(v=>v.substring(17).split(" ").map(E=>parseInt(E,10)));m.length>0&&m[0].length>1&&m[0][0]===d&&(h=m[0][1]),a.codecs.forEach(v=>{if(v.name.toUpperCase()==="RTX"&&v.parameters.apt){let S={ssrc:d,codecPayloadType:parseInt(v.parameters.apt,10)};d&&h&&(S.rtx={ssrc:h}),i.push(S),l&&(S=JSON.parse(JSON.stringify(S)),S.fec={ssrc:d,mechanism:c?"red+ulpfec":"red"},i.push(S))}}),i.length===0&&d&&i.push({ssrc:d});let g=e.matchPrefix(t,"b=");return g.length&&(g[0].indexOf("b=TIAS:")===0?g=parseInt(g[0].substring(7),10):g[0].indexOf("b=AS:")===0?g=parseInt(g[0].substring(5),10)*1e3*.95-2e3*8:g=void 0,i.forEach(v=>{v.maxBitrate=g})),i},e.parseRtcpParameters=function(t){const i={},a=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname")[0];a&&(i.cname=a.value,i.ssrc=a.ssrc);const l=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=l.length>0,i.compound=l.length===0;const c=e.matchPrefix(t,"a=rtcp-mux");return i.mux=c.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
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
`},e.getDirection=function(t,i){const a=e.splitLines(t);for(let l=0;l<a.length;l++)switch(a[l]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return a[l].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const a=e.splitLines(t)[0].substring(2).split(" ");return{kind:a[0],port:parseInt(a[1],10),protocol:a[2],fmt:a.slice(3).join(" ")}},e.parseOLine=function(t){const a=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:a[0],sessionId:a[1],sessionVersion:parseInt(a[2],10),netType:a[3],addressType:a[4],address:a[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let a=0;a<i.length;a++)if(i[a].length<2||i[a].charAt(1)!=="=")return!1;return!0},s.exports=e})(mf)),mf.exports}var q0=JS();const sa=d0(q0),ZS=LS({__proto__:null,default:sa},[q0]);function rc(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const a=new e(i),l=sa.parseCandidate(i.candidate);for(const c in l)c in a||Object.defineProperty(a,c,{value:l[c]});return a.toJSON=function(){return{candidate:a.candidate,sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,usernameFragment:a.usernameFragment}},a}return new e(i)},s.RTCIceCandidate.prototype=e.prototype,us(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function id(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||us(s,"icecandidate",e=>{if(e.candidate){const t=sa.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function sc(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(f){if(!f||!f.sdp)return!1;const d=sa.splitSections(f.sdp);return d.shift(),d.some(h=>{const m=sa.parseMLine(h);return m&&m.kind==="application"&&m.protocol.indexOf("SCTP")!==-1})},i=function(f){const d=f.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(d===null||d.length<2)return-1;const h=parseInt(d[1],10);return h!==h?-1:h},a=function(f){let d=65536;return e.browser==="firefox"&&(e.version<57?f===-1?d=16384:d=2147483637:e.version<60?d=e.version===57?65535:65536:d=2147483637),d},l=function(f,d){let h=65536;e.browser==="firefox"&&e.version===57&&(h=65535);const m=sa.matchPrefix(f.sdp,"a=max-message-size:");return m.length>0?h=parseInt(m[0].substring(19),10):e.browser==="firefox"&&d!==-1&&(h=2147483637),h},c=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:d}=this.getConfiguration();d==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const d=i(arguments[0]),h=a(d),m=l(arguments[0],d);let g;h===0&&m===0?g=Number.POSITIVE_INFINITY:h===0||m===0?g=Math.max(h,m):g=Math.min(h,m);const v={};Object.defineProperty(v,"maxMessageSize",{get(){return g}}),this._sctp=v}return c.apply(this,arguments)}}function ac(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(a,l){const c=a.send;a.send=function(){const d=arguments[0],h=d.length||d.size||d.byteLength;if(a.readyState==="open"&&l.sctp&&h>l.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+l.sctp.maxMessageSize+" bytes)");return c.apply(a,arguments)}}const i=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const l=i.apply(this,arguments);return t(l,this),l},us(s,"datachannel",a=>(t(a.channel,a.target),a))}function rd(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=a=>{const l=a.target;if(l._lastConnectionState!==l.connectionState){l._lastConnectionState=l.connectionState;const c=new Event("connectionstatechange",a);l.dispatchEvent(c)}return a},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function sd(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(a){if(a&&a.sdp&&a.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const l=a.sdp.split(`
`).filter(c=>c.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&a instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:a.type,sdp:l}):a.sdp=l}return t.apply(this,arguments)}}function oc(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function lc(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let a=arguments[0]||{};if(typeof a!="object"||a.type&&a.sdp)return t.apply(this,arguments);if(a={type:a.type,sdp:a.sdp},!a.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":a.type="offer";break;default:a.type="answer";break}return a.sdp||a.type!=="offer"&&a.type!=="answer"?t.apply(this,[a]):(a.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(c=>t.apply(this,[c]))})}const QS=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:sd,shimAddIceCandidateNullOrEmpty:oc,shimConnectionState:rd,shimMaxMessageSize:sc,shimParameterlessSetLocalDescription:lc,shimRTCIceCandidate:rc,shimRTCIceCandidateRelayProtocol:id,shimSendThrowTypeError:ac},Symbol.toStringTag,{value:"Module"}));function ex({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Qd,i=jS(s),a={browserDetails:i,commonShim:QS,extractVersion:co,disableLog:qS,disableWarnings:YS,sdp:ZS};switch(i.browser){case"chrome":if(!ig||!td||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),a;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),a;t("adapter.js shimming chrome."),a.browserShim=ig,oc(s,i),lc(s),S0(s,i),x0(s),td(s,i),y0(s,i),C0(s,i),M0(s),E0(s,i),R0(s,i),rc(s),id(s),rd(s),sc(s,i),ac(s,i),sd(s,i);break;case"firefox":if(!rg||!nd||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),a;t("adapter.js shimming firefox."),a.browserShim=rg,oc(s,i),lc(s),A0(s,i),nd(s,i),b0(s,i),w0(s),D0(s),P0(s),L0(s),I0(s),N0(s,i),U0(s,i),O0(s,i),F0(s,i),rc(s),rd(s),sc(s,i),ac(s,i);break;case"safari":if(!sg||!e.shimSafari)return t("Safari shim is not included in this adapter release."),a;t("adapter.js shimming safari."),a.browserShim=sg,oc(s,i),lc(s),V0(s),X0(s),z0(s),k0(s),B0(s),W0(s),G0(s),$0(s),rc(s),id(s),sc(s,i),ac(s,i),sd(s,i);break;default:t("Unsupported browser!");break}return a}const og=ex({window:typeof window>"u"?void 0:window});function fs(s,e,t,i){Object.defineProperty(s,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Y0{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,a=Math.ceil(i/this.chunkedMTU);let l=0,c=0;for(;c<i;){const f=Math.min(i,c+this.chunkedMTU),d=e.slice(c,f),h={__peerData:this._dataCount,n:l,data:d,total:a};t.push(h),c=f,l++}return this._dataCount++,t}}}function tx(s){let e=0;for(const a of s)e+=a.byteLength;const t=new Uint8Array(e);let i=0;for(const a of s)t.set(a,i),i+=a.byteLength;return t}const gf=og.default||og,Qa=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return gf.browserDetails.browser}getVersion(){return gf.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=gf.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},nx=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),j0=()=>Math.random().toString(36).slice(2),lg={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class ix extends Y0{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(a){a.target&&t(a.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=lg,this.browser=Qa.getBrowser(),this.browserVersion=Qa.getVersion(),this.pack=m0,this.unpack=p0,this.supports=(function(){const t={browser:Qa.isBrowserSupported(),webRTC:Qa.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(lg),t.audioVideo=!0;let a;try{a=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!a.ordered;try{a.binaryType="blob",t.binaryBlob=!Qa.isIOS}catch{}}catch{}finally{a&&a.close()}}catch{}finally{i&&i.close()}return t})(),this.validateId=nx,this.randomToken=j0}}const Qn=new ix,rx="PeerJS: ";class sx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[rx,...t];for(const a in i)i[a]instanceof Error&&(i[a]="("+i[a].name+") "+i[a].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var qe=new sx,th={},ax=Object.prototype.hasOwnProperty,Xn="~";function go(){}Object.create&&(go.prototype=Object.create(null),new go().__proto__||(Xn=!1));function ox(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function K0(s,e,t,i,a){if(typeof t!="function")throw new TypeError("The listener must be a function");var l=new ox(t,i||s,a),c=Xn?Xn+e:e;return s._events[c]?s._events[c].fn?s._events[c]=[s._events[c],l]:s._events[c].push(l):(s._events[c]=l,s._eventsCount++),s}function cc(s,e){--s._eventsCount===0?s._events=new go:delete s._events[e]}function Un(){this._events=new go,this._eventsCount=0}Un.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)ax.call(t,i)&&e.push(Xn?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Un.prototype.listeners=function(e){var t=Xn?Xn+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var a=0,l=i.length,c=new Array(l);a<l;a++)c[a]=i[a].fn;return c};Un.prototype.listenerCount=function(e){var t=Xn?Xn+e:e,i=this._events[t];return i?i.fn?1:i.length:0};Un.prototype.emit=function(e,t,i,a,l,c){var f=Xn?Xn+e:e;if(!this._events[f])return!1;var d=this._events[f],h=arguments.length,m,g;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,i),!0;case 4:return d.fn.call(d.context,t,i,a),!0;case 5:return d.fn.call(d.context,t,i,a,l),!0;case 6:return d.fn.call(d.context,t,i,a,l,c),!0}for(g=1,m=new Array(h-1);g<h;g++)m[g-1]=arguments[g];d.fn.apply(d.context,m)}else{var v=d.length,S;for(g=0;g<v;g++)switch(d[g].once&&this.removeListener(e,d[g].fn,void 0,!0),h){case 1:d[g].fn.call(d[g].context);break;case 2:d[g].fn.call(d[g].context,t);break;case 3:d[g].fn.call(d[g].context,t,i);break;case 4:d[g].fn.call(d[g].context,t,i,a);break;default:if(!m)for(S=1,m=new Array(h-1);S<h;S++)m[S-1]=arguments[S];d[g].fn.apply(d[g].context,m)}}return!0};Un.prototype.on=function(e,t,i){return K0(this,e,t,i,!1)};Un.prototype.once=function(e,t,i){return K0(this,e,t,i,!0)};Un.prototype.removeListener=function(e,t,i,a){var l=Xn?Xn+e:e;if(!this._events[l])return this;if(!t)return cc(this,l),this;var c=this._events[l];if(c.fn)c.fn===t&&(!a||c.once)&&(!i||c.context===i)&&cc(this,l);else{for(var f=0,d=[],h=c.length;f<h;f++)(c[f].fn!==t||a&&!c[f].once||i&&c[f].context!==i)&&d.push(c[f]);d.length?this._events[l]=d.length===1?d[0]:d:cc(this,l)}return this};Un.prototype.removeAllListeners=function(e){var t;return e?(t=Xn?Xn+e:e,this._events[t]&&cc(this,t)):(this._events=new go,this._eventsCount=0),this};Un.prototype.off=Un.prototype.removeListener;Un.prototype.addListener=Un.prototype.on;Un.prefixed=Xn;Un.EventEmitter=Un;th=Un;var ds={};fs(ds,"ConnectionType",()=>Br);fs(ds,"PeerErrorType",()=>an);fs(ds,"BaseConnectionErrorType",()=>ad);fs(ds,"DataConnectionErrorType",()=>nh);fs(ds,"SerializationType",()=>Ac);fs(ds,"SocketEventType",()=>Or);fs(ds,"ServerMessageType",()=>In);var Br=(function(s){return s.Data="data",s.Media="media",s})({}),an=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),ad=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),nh=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),Ac=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),Or=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),In=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const J0="1.5.5";class lx extends th.EventEmitter{constructor(e,t,i,a,l,c=5e3){super(),this.pingInterval=c,this._disconnected=!0,this._messagesQueue=[];const f=e?"wss://":"ws://";this._baseUrl=f+t+":"+i+a+"peerjs?key="+l}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+J0),this._disconnected=!1,this._socket.onmessage=a=>{let l;try{l=JSON.parse(a.data),qe.log("Server message received:",l)}catch{qe.log("Invalid server message",a.data);return}this.emit(Or.Message,l)},this._socket.onclose=a=>{this._disconnected||(qe.log("Socket closed.",a),this._cleanup(),this._disconnected=!0,this.emit(Or.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),qe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){qe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:In.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Or.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Z0{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Br.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,a={ordered:!!e.reliable},l=t.createDataChannel(i.label,a);i._initializeDataChannel(l),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){qe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,a=this.connection.type,l=this.connection.provider;qe.log("Listening for ICE candidates."),e.onicecandidate=c=>{!c.candidate||!c.candidate.candidate||(qe.log(`Received ICE candidates for ${t}:`,c.candidate),l.socket.send({type:In.Candidate,payload:{candidate:c.candidate,type:a,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":qe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(ad.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":qe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(ad.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":qe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},qe.log("Listening for data channel"),e.ondatachannel=c=>{qe.log("Received data channel");const f=c.channel;l.getConnection(t,i)._initializeDataChannel(f)},qe.log("Listening for remote stream"),e.ontrack=c=>{qe.log("Received remote stream");const f=c.streams[0],d=l.getConnection(t,i);if(d.type===Br.Media){const h=d;this._addStreamToMediaConnection(f,h)}}}cleanup(){qe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const a=this.connection.dataChannel;a&&(i=!!a.readyState&&a.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);qe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),qe.log("Set localDescription:",i,`for:${this.connection.peer}`);let a={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Br.Data){const l=this.connection;a={...a,label:l.label,reliable:l.reliable,serialization:l.serialization}}t.socket.send({type:In.Offer,payload:a,dst:this.connection.peer})}catch(a){a!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(an.WebRTC,a),qe.log("Failed to setLocalDescription, ",a))}}catch(i){t.emitError(an.WebRTC,i),qe.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();qe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),qe.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:In.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(a){t.emitError(an.WebRTC,a),qe.log("Failed to setLocalDescription, ",a)}}catch(i){t.emitError(an.WebRTC,i),qe.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,a=this.connection.provider;qe.log("Setting remote description",t);const l=this;try{await i.setRemoteDescription(t),qe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await l._makeAnswer()}catch(c){a.emitError(an.WebRTC,c),qe.log("Failed to setRemoteDescription, ",c)}}async handleCandidate(e){qe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),qe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(an.WebRTC,t),qe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(qe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return qe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){qe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Q0 extends th.EventEmitter{emitError(e,t){qe.error("Error:",t),this.emit("error",new cx(`${e}`,t))}}class cx extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class e_ extends Q0{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}class _c extends e_{static#e=this.ID_PREFIX="mc_";get type(){return Br.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||_c.ID_PREFIX+Qn.randomToken(),this._negotiator=new Z0(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{qe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{qe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){qe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case In.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case In.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:qe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){qe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const a of i)this.handleMessage(a);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class ux{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:a,path:l,key:c}=this._options,f=new URL(`${t}://${i}:${a}${l}${c}/${e}`);return f.searchParams.set("ts",`${Date.now()}${Math.random()}`),f.searchParams.set("version",J0),fetch(f.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){qe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Qn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Qn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw qe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class vc extends e_{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Br.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||vc.ID_PREFIX+j0(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Z0(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{qe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{qe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{qe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(nh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case In.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case In.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:qe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class ih extends vc{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>vc.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return qe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class _f extends ih{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Y0,this.serialization=Ac.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=p0(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const a=tx(i.data);this._handleDataMessage({data:a})}}_send(e,t){const i=m0(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);qe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class fx extends ih{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Ac.None}}class dx extends ih{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Qn.chunkedMTU){this.emitError(nh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=Ac.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class rh extends Q0{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:fx,json:dx,binary:_f,"binary-utf8":_f,default:_f},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Qn.CLOUD_HOST,port:Qn.CLOUD_PORT,path:"/",key:rh.DEFAULT_KEY,token:Qn.randomToken(),config:Qn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Qn.CLOUD_HOST?this._options.secure=Qn.isSecure():this._options.host==Qn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&qe.setLogFunction(this._options.logFunction),qe.logLevel=this._options.debug||0,this._api=new ux(t),this._socket=this._createServerConnection(),!Qn.supports.audioVideo&&!Qn.supports.data){this._delayedAbort(an.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Qn.validateId(i)){this._delayedAbort(an.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(a=>this._initialize(a)).catch(a=>this._abort(an.ServerError,a))}_createServerConnection(){const e=new lx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Or.Message,t=>{this._handleMessage(t)}),e.on(Or.Error,t=>{this._abort(an.SocketError,t)}),e.on(Or.Disconnected,()=>{this.disconnected||(this.emitError(an.Network,"Lost connection to server."),this.disconnect())}),e.on(Or.Close,()=>{this.disconnected||this._abort(an.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,a=e.src;switch(t){case In.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case In.Error:this._abort(an.ServerError,i.msg);break;case In.IdTaken:this._abort(an.UnavailableID,`ID "${this.id}" is taken`);break;case In.InvalidKey:this._abort(an.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case In.Leave:qe.log(`Received leave message from ${a}`),this._cleanupPeer(a),this._connections.delete(a);break;case In.Expire:this.emitError(an.PeerUnavailable,`Could not connect to peer ${a}`);break;case In.Offer:{const l=i.connectionId;let c=this.getConnection(a,l);if(c&&(c.close(),qe.warn(`Offer received for existing Connection ID:${l}`)),i.type===Br.Media){const d=new _c(a,this,{connectionId:l,_payload:i,metadata:i.metadata});c=d,this._addConnection(a,c),this.emit("call",d)}else if(i.type===Br.Data){const d=new this._serializers[i.serialization](a,this,{connectionId:l,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});c=d,this._addConnection(a,c),this.emit("connection",d)}else{qe.warn(`Received malformed connection type:${i.type}`);return}const f=this._getMessages(l);for(const d of f)c.handleMessage(d);break}default:{if(!i){qe.warn(`You received a malformed message from ${a} of type ${t}`);return}const l=i.connectionId,c=this.getConnection(a,l);c&&c.peerConnection?c.handleMessage(e):l?this._storeMessage(l,e):qe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){qe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(an.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){qe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(an.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){qe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const a=new _c(e,this,{...i,_stream:t});return this._addConnection(e,a),a}_addConnection(e,t){qe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const a of i)if(a.connectionId===t)return a;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){qe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(qe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;qe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)qe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)qe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(an.ServerError,t))}}var hx=rh;const cg=[{name:"Gholdengo",id:1e3,role:"Special setup",ability:"Good as Gold",item:"Air Balloon",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Fighting",moves:["Make It Rain","Shadow Ball","Nasty Plot","Recover"],quirk:"Air Balloon buys a turn to set up; then the golden tax collector arrives."},{name:"Great Tusk",id:984,role:"Spinner / breaker",ability:"Protosynthesis",item:"Booster Energy",nature:"Jolly",evs:"252 Atk / 4 Def / 252 Spe",tera:"Ground",moves:["Headlong Rush","Close Combat","Rapid Spin","Knock Off"],quirk:"A hazard remover that hits like it has a personal grudge."},{name:"Iron Valiant",id:1006,role:"Mixed attacker",ability:"Quark Drive",item:"Booster Energy",nature:"Naive",evs:"4 Atk / 252 SpA / 252 Spe",tera:"Ghost",moves:["Moonblast","Close Combat","Knock Off","Encore"],quirk:"Encore catches setup attempts; the rest is an extremely rude greeting."},{name:"Kingambit",id:983,role:"Late-game cleaner",ability:"Supreme Overlord",item:"Black Glasses",nature:"Adamant",evs:"252 HP / 252 Atk / 4 SpD",tera:"Dark",moves:["Kowtow Cleave","Sucker Punch","Iron Head","Swords Dance"],quirk:"The last Pokémon standing gets promoted to management."},{name:"Clodsire",id:980,role:"Special wall / rocks",ability:"Unaware",item:"Leftovers",nature:"Careful",evs:"252 HP / 4 Def / 252 SpD",tera:"Water",moves:["Earthquake","Toxic","Recover","Stealth Rock"],quirk:"Ignores your boosts, your plans, and probably your entire team."},{name:"Tinkaton",id:959,role:"Utility gremlin",ability:"Mold Breaker",item:"Air Balloon",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Fairy",moves:["Gigaton Hammer","Play Rough","Knock Off","Encore"],quirk:"Encore into Gigaton Hammer is a deeply personal problem."},{name:"Dondozo",id:977,role:"Physical wall",ability:"Unaware",item:"Leftovers",nature:"Impish",evs:"252 HP / 252 Def / 4 SpD",tera:"Dragon",moves:["Wave Crash","Body Press","Rest","Sleep Talk"],quirk:"A giant sleepy fish that refuses to respect your setup."},{name:"Annihilape",id:979,role:"Bulky setup",ability:"Defiant",item:"Leftovers",nature:"Careful",evs:"252 HP / 4 Atk / 252 SpD",tera:"Fire",moves:["Rage Fist","Drain Punch","Bulk Up","Taunt"],quirk:"Every hit makes the grudge worse. Taunt is just bad manners."},{name:"Meowscarada",id:908,role:"Fast pivot",ability:"Protean",item:"Heavy-Duty Boots",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Grass",moves:["Flower Trick","Knock Off","U-turn","Play Rough"],quirk:"A magician: the item disappears, then the Pokémon does too."},{name:"Skeledirge",id:911,role:"Unaware tank",ability:"Unaware",item:"Heavy-Duty Boots",nature:"Bold",evs:"252 HP / 252 Def / 4 SpA",tera:"Fairy",moves:["Torch Song","Shadow Ball","Slack Off","Will-O-Wisp"],quirk:"Torch Song snowballs while Unaware refuses to be impressed."},{name:"Quaquaval",id:914,role:"Momentum sweeper",ability:"Moxie",item:"Life Orb",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Water",moves:["Aqua Step","Close Combat","Ice Spinner","Rapid Spin"],quirk:"Dances faster, spins hazards away, and gets meaner after a KO."},{name:"Garganacl",id:934,role:"Salt / stall",ability:"Purifying Salt",item:"Leftovers",nature:"Careful",evs:"252 HP / 4 Def / 252 SpD",tera:"Fairy",moves:["Salt Cure","Recover","Stealth Rock","Protect"],quirk:"Protect lets Salt Cure collect rent while you do absolutely nothing."},{name:"Baxcalibur",id:998,role:"Setup breaker",ability:"Thermal Exchange",item:"Loaded Dice",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Ice",moves:["Glaive Rush","Icicle Spear","Earthquake","Dragon Dance"],quirk:"Loaded Dice turns the ice move into a very committed dice roll."},{name:"Dragapult",id:887,role:"Fast attacker",ability:"Infiltrator",item:"Life Orb",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Dragon",moves:["Dragon Darts","Phantom Force","U-turn","Dragon Dance"],quirk:"Phantom Force burns a turn; U-turn refuses to stay for the consequences."},{name:"Corviknight",id:823,role:"Defog / pivot",ability:"Pressure",item:"Rocky Helmet",nature:"Impish",evs:"252 HP / 168 Def / 88 SpD",tera:"Dragon",moves:["Brave Bird","U-turn","Roost","Defog"],quirk:"The helmet makes contact attackers pay a cover charge."},{name:"Rotom-Wash",id:479,role:"Bulky pivot",ability:"Levitate",item:"Sitrus Berry",nature:"Bold",evs:"248 HP / 8 SpA / 8 Spe",tera:"Grass",moves:["Hydro Pump","Volt Switch","Will-O-Wisp","Pain Split"],quirk:"Pain Split is the most passive-aggressive way to ask for HP."},{name:"Garchomp",id:445,role:"Rocks / attacker",ability:"Rough Skin",item:"Rocky Helmet",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Steel",moves:["Earthquake","Dragon Claw","Stealth Rock","Fire Fang"],quirk:"Rocky Helmet plus Rough Skin: touching the shark is a subscription fee."},{name:"Azumarill",id:184,role:"Belly Drum sweeper",ability:"Huge Power",item:"Sitrus Berry",nature:"Adamant",evs:"252 HP / 252 Atk / 4 SpD",tera:"Water",moves:["Belly Drum","Aqua Jet","Play Rough","Liquidation"],quirk:"One snack, one drum solo, then a tiny blue war crime."},{name:"Volcarona",id:637,role:"Quiver Dance sweeper",ability:"Flame Body",item:"Heavy-Duty Boots",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Ground",moves:["Fiery Dance","Bug Buzz","Giga Drain","Quiver Dance"],quirk:"A dance build with a Ground Tera surprise for would-be counters."},{name:"Breloom",id:286,role:"Sleep / priority",ability:"Technician",item:"Loaded Dice",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Rock",moves:["Spore","Bullet Seed","Mach Punch","Swords Dance"],quirk:"Puts something to sleep, then launches a suspicious number of seeds."},{name:"Gengar",id:94,role:"Special attacker",ability:"Cursed Body",item:"Focus Sash",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Ghost",moves:["Shadow Ball","Sludge Bomb","Focus Blast","Destiny Bond"],quirk:"Focus Sash plus Destiny Bond: a two-for-one deal, allegedly."},{name:"Serperior",id:497,role:"Contrary setup",ability:"Contrary",item:"Leftovers",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Fire",moves:["Leaf Storm","Glare","Leech Seed","Substitute"],quirk:"Leaf Storm boosts instead of dropping SpA; Glare makes the opponent sit down."},{name:"Grimmsnarl",id:861,role:"Prankster screens",ability:"Prankster",item:"Light Clay",nature:"Careful",evs:"252 HP / 4 Atk / 252 SpD",tera:"Ghost",moves:["Reflect","Light Screen","Spirit Break","Parting Shot"],quirk:"Eight turns of team support and a rude exit."},{name:"Hydreigon",id:635,role:"Choice attacker",ability:"Levitate",item:"Choice Scarf",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Steel",moves:["Draco Meteor","Dark Pulse","Flamethrower","U-turn"],quirk:"The scarf says “I’m leaving”; U-turn makes sure of it."},{name:"Maushold",id:925,role:"Tidy Up sweeper",ability:"Technician",item:"Wide Lens",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Normal",moves:["Population Bomb","Tidy Up","Encore","Low Kick"],quirk:"Wide Lens Population Bomb: the family comes together to ruin your day."},{name:"Ditto",id:132,role:"Imposter revenge",ability:"Imposter",item:"Choice Scarf",nature:"Relaxed",evs:"252 HP / 4 Def / 252 SpD",tera:"Ghost",moves:["Transform"],quirk:"Your opponent brought six Pokémon. Ditto brought a mirror."},{name:"Sneasler",id:903,role:"Unburden cleaner",ability:"Unburden",item:"White Herb",nature:"Adamant",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Flying",moves:["Close Combat","Dire Claw","Acrobatics","Swords Dance"],quirk:"White Herb patches the Close Combat drops, then Unburden turns on."},{name:"Toxapex",id:748,role:"Defensive utility",ability:"Regenerator",item:"Black Sludge",nature:"Bold",evs:"252 HP / 252 Def / 4 SpD",tera:"Dark",moves:["Baneful Bunker","Recover","Haze","Toxic Spikes"],quirk:"Bunker, recover, haze. It’s not a battle; it’s a waiting room."},{name:"Clefable",id:36,role:"Magic Guard utility",ability:"Magic Guard",item:"Life Orb",nature:"Bold",evs:"252 HP / 252 Def / 4 SpD",tera:"Water",moves:["Moonblast","Soft-Boiled","Thunder Wave","Knock Off"],quirk:"Life Orb with Magic Guard: all the menace, none of the chip damage."},{name:"Scizor",id:212,role:"Priority pivot",ability:"Technician",item:"Metal Coat",nature:"Adamant",evs:"248 HP / 252 Atk / 8 SpD",tera:"Steel",moves:["Bullet Punch","U-turn","Knock Off","Swords Dance"],quirk:"Metal Coat Bullet Punch is the Pokémon equivalent of a steel chair."},{name:"Iron Hands",id:992,role:"Bulky attacker",ability:"Quark Drive",item:"Assault Vest",nature:"Adamant",evs:"252 HP / 252 Atk / 4 SpD",tera:"Electric",moves:["Drain Punch","Wild Charge","Ice Punch","Volt Switch"],quirk:"Assault Vest with Volt Switch: it can leave, but it will make it awkward."},{name:"Sinistcha",id:1013,role:"Special sustain",ability:"Heatproof",item:"Leftovers",nature:"Bold",evs:"252 HP / 4 SpA / 252 Def",tera:"Water",moves:["Matcha Gotcha","Shadow Ball","Strength Sap","Calm Mind"],quirk:"Strength Sap steals the opponent’s gains and turns them into tea time."},{name:"Mimikyu",id:778,role:"Disguise setup",ability:"Disguise",item:"Life Orb",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Ghost",moves:["Play Rough","Shadow Sneak","Swords Dance","Drain Punch"],quirk:"One free disguise hit, then a very unfriendly drain punch."},{name:"Hatterene",id:858,role:"Magic Bounce setup",ability:"Magic Bounce",item:"Leftovers",nature:"Quiet",evs:"252 HP / 252 SpA / 4 SpD",tera:"Water",moves:["Psychic","Draining Kiss","Mystical Fire","Calm Mind"],quirk:"Bounces hazards back and calmly starts setting up."},{name:"Froslass",id:478,role:"Suicide lead",ability:"Cursed Body",item:"Focus Sash",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Ghost",moves:["Spikes","Taunt","Ice Beam","Destiny Bond"],quirk:"Gets hazards up, then offers a deeply cursed trade."},{name:"Pawmot",id:923,role:"Revival support",ability:"Natural Cure",item:"Leppa Berry",nature:"Jolly",evs:"252 Atk / 4 SpD / 252 Spe",tera:"Electric",moves:["Revival Blessing","Close Combat","Double Shock","Mach Punch"],quirk:"Leppa Berry is emergency battery backup for the revival service."},{name:"Kilowattrel",id:941,role:"Fast pivot",ability:"Volt Absorb",item:"Heavy-Duty Boots",nature:"Timid",evs:"4 Def / 252 SpA / 252 Spe",tera:"Flying",moves:["Thunderbolt","Hurricane","Volt Switch","Roost"],quirk:"Volt Absorb invites electric moves; the boots keep it airborne."},{name:"Sableye",id:302,role:"Prankster disruption",ability:"Prankster",item:"Rocky Helmet",nature:"Careful",evs:"252 HP / 4 Def / 252 SpD",tera:"Steel",moves:["Knock Off","Will-O-Wisp","Recover","Encore"],quirk:"Encore and Will-O-Wisp: the tiny gremlin is now your manager."}],bl=(s,e)=>e.some(t=>s.toLowerCase().includes(t)),px=s=>{const e=s.role.toLowerCase();return bl(e,["hazard","spikes","rocks","defog","spinner","suicide"])?"hazard":bl(e,["wall","tank","defensive","utility","support","screens","revival","disruption"])?"support":bl(e,["setup","sweeper","cleaner","breaker","dance","drum"])?"setup":bl(e,["pivot","attacker","revenge","priority"])?"attacker":"other"};function mx(s=Math.random){const e=i=>Math.floor(s()*i);for(let i=0;i<200;i++){const a=[...cg];for(let d=a.length-1;d>0;d--){const h=e(d+1);[a[d],a[h]]=[a[h],a[d]]}const l=a.slice(0,12),c={};if(l.forEach(d=>{const h=px(d);c[h]=(c[h]||0)+1}),(c.hazard||0)>=1&&(c.hazard||0)<=3&&(c.support||0)>=1&&(c.support||0)<=3&&(c.setup||0)>=1&&(c.setup||0)<=4&&(c.attacker||0)>=2&&new Set(l.map(d=>d.name)).size===12)return[l.slice(0,6),l.slice(6,12)]}const t=[...cg].sort(()=>s()-.5).slice(0,12);return[t.slice(0,6),t.slice(6,12)]}function eo(s){return s.map(e=>`${e.name} @ ${e.item}
Ability: ${e.ability}
Tera Type: ${e.tera}
EVs: ${e.evs}
${e.nature} Nature
${e.moves.map(t=>" - "+t).join(`
`)}`).join(`

`)}function gx(s,e){return!s[0]||!s[1]||s[0]===s[1]?null:s[0]===e?0:s[1]===e?1:null}const _x=s=>Math.floor(s/2)+1,ug=(s,e,t)=>({code:s,players:[{name:e,token:crypto.randomUUID()},null],bestOf:t,phase:"calls",calls:[null,null],result:null,tossWinner:null,candidates:null,teams:[[],[]],wins:[0,0],games:0,history:[]});function vx(){const[s,e]=lt.useState(null),[t,i]=lt.useState(null),[a,l]=lt.useState(!1),[c,f]=lt.useState(""),d=lt.useRef(null),h=lt.useRef([]),m=lt.useRef(null),g=lt.useRef(null),v=lt.useRef(!1),S=lt.useRef(null),E=lt.useCallback(()=>{const D=m.current;D&&(e({...D}),h.current.forEach(A=>{A.open&&A.send({type:"state",room:D})}))},[]),R=lt.useCallback((D,A=0)=>{const I=m.current;if(!I||!v.current)return;const P=JSON.parse(JSON.stringify(I));if(D.type==="join"&&!P.players[1])P.players[1]={name:String(D.name||"Player 2").slice(0,24),token:crypto.randomUUID()};else if(D.type==="call"&&P.phase==="calls"){const M=D.side==="heads"||D.side==="tails"?D.side:null;M&&P.calls[A]!==M&&(P.calls[A]=M)}else if(D.type==="flip"&&P.phase==="calls"&&P.calls.every(Boolean)&&P.players[1])P.result=(crypto.getRandomValues(new Uint8Array(1))[0]&1)===0?"heads":"tails",P.tossWinner=gx(P.calls,P.result),P.phase="spin";else if(D.type==="spin"&&P.phase==="spin"){const M=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;P.candidates=mx(M),P.phase="pick"}else if(D.type==="pick"&&P.phase==="pick"&&A===P.tossWinner&&P.candidates){const M=Number(D.team)===0?0:1;P.teams[A]=P.candidates[M].slice(),P.teams[1-A]=P.candidates[1-M].slice(),P.phase="battle"}else if(D.type==="result"&&P.phase==="battle"&&P.teams[0].length===6){const M=Number(D.winner)===0?0:1;P.games++,P.wins[M]++,P.history.push({game:P.games,winner:M,teams:[P.teams[0].slice(),P.teams[1].slice()]}),P.phase=P.wins[M]>=_x(P.bestOf)?"complete":"between"}else D.type==="next"&&P.phase==="between"?(P.phase="calls",P.calls=[null,null],P.result=null,P.tossWinner=null,P.candidates=null,P.teams=[[],[]]):D.type==="reset"&&(P.phase="calls",P.calls=[null,null],P.result=null,P.tossWinner=null,P.candidates=null,P.teams=[[],[]],P.wins=[0,0],P.games=0,P.history=[],P.bestOf=Number(D.bestOf)===5?5:3);m.current=P,E()},[E]);lt.useEffect(()=>{const D=new hx({debug:0});return d.current=D,D.on("open",()=>{l(!0);const A=S.current;if(A){if(S.current=null,A.kind==="create"){const I=ug(D.id,A.name,A.bestOf||3);m.current=I,v.current=!0,g.current=0,i(0),e(I),localStorage.setItem("pc-peer",JSON.stringify({code:D.id,name:A.name}))}else if(A.code){const I=D.connect(A.code);h.current.push(I),I.on("open",()=>{I.send({type:"join",name:A.name}),g.current=1,i(1)}),I.on("data",P=>{P?.type==="state"&&(m.current=P.room,e(P.room))}),I.on("error",()=>f("Peer connection failed"))}}}),D.on("connection",A=>{h.current.push(A),A.on("data",I=>{I?.type!=="state"&&R(I,1)}),A.on("open",()=>E())}),D.on("error",A=>f("Relay: "+String(A.message))),D.on("disconnected",()=>{f("Relay disconnected — retrying");try{D.reconnect()}catch{}}),()=>{h.current.forEach(A=>A.close()),D.destroy()}},[R,E]);const y=lt.useCallback((D,A)=>{if(localStorage.removeItem("pc-peer"),d.current?.open){const I=ug(d.current.id,D,A);m.current=I,v.current=!0,g.current=0,i(0),e(I),localStorage.setItem("pc-peer",JSON.stringify({code:d.current.id,name:D}))}else S.current={kind:"create",name:D,bestOf:A}},[]),x=lt.useCallback((D,A)=>{if(d.current?.open&&D){const I=d.current.connect(D);h.current.push(I),I.on("open",()=>{I.send({type:"join",name:A}),g.current=1,i(1)}),I.on("data",P=>{P?.type==="state"&&(m.current=P.room,e(P.room))}),I.on("error",()=>f("Peer connection failed"))}else S.current={kind:"join",name:A,code:D}},[]),b=lt.useCallback(D=>{v.current?R(D,0):h.current[0]?.open?h.current[0].send(D):f("Not connected to host")},[R]);return{room:s,seat:t??g.current,connected:a,error:c,create:y,join:x,send:b,setError:f,relay:"peerjs"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="187",Sx=0,fg=1,xx=2,uc=1,yx=2,uo=3,os=0,ni=1,ar=2,aa=0,ho=1,po=2,dg=3,hg=4,Mx=5,ia=100,Ex=101,Tx=102,Cx=103,Rx=104,Ax=200,wx=201,bx=202,Px=203,t_=204,n_=205,Lx=206,Dx=207,Ix=208,Nx=209,Ux=210,Ox=211,Fx=212,kx=213,Bx=214,od=0,ld=1,cd=2,_o=3,ud=4,fd=5,dd=6,hd=7,i_=0,zx=1,Gx=2,lr=0,r_=1,s_=2,a_=3,ah=4,o_=5,l_=6,c_=7,u_=300,ca=301,vo=302,vf=303,Sf=304,pd=1e3,or=1001,md=1002,Tn=1003,Hx=1004,Pl=1005,ti=1006,xf=1007,Fr=1008,ui=1009,f_=1010,d_=1011,So=1012,oh=1013,Xi=1014,Hi=1015,$i=1016,lh=1017,ch=1018,ua=1020,h_=35902,p_=35899,m_=1021,g_=1022,Vi=1023,zr=1026,kr=1027,__=1028,uh=1029,ls=1030,fh=1031,dh=1033,fc=33776,dc=33777,hc=33778,pc=33779,gd=35840,_d=35841,vd=35842,Sd=35843,xd=36196,yd=37492,Md=37496,Ed=37488,Td=37489,Sc=37490,Cd=37491,Rd=37808,Ad=37809,wd=37810,bd=37811,Pd=37812,Ld=37813,Dd=37814,Id=37815,Nd=37816,Ud=37817,Od=37818,Fd=37819,kd=37820,Bd=37821,zd=36492,Gd=36494,Hd=36495,Vd=36283,Wd=36284,xc=36285,Xd=36286,Vx=3200,$d=0,Wx=1,Ur="",Wn="srgb",yc="srgb-linear",Mc="linear",Lt="srgb",yf=7680,Xx=519,$x=512,qx=513,Yx=514,v_=515,jx=516,Kx=517,S_=518,x_=519,y_=35044,pg=35048,mg="300 es",Pi=2e3,xo=2001;function Jx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zx(){const s=Ec("canvas");return s.style.display="block",s}const gg={};function Tc(...s){const e="THREE."+s.shift();console.log(e,...s)}function M_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=M_(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=M_(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function mc(...s){const e=s.join(" ");e in gg||(gg[e]=!0,ot(...s))}function Qx(s,e,t){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const ey={[od]:od,[cd]:dd,[ud]:ud,[_o]:fd,[ld]:ld,[dd]:cd,[hd]:hd,[fd]:_o};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,qd=180/Math.PI;function ps(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function ty(s,e){return(s%e+e)%e}function Ef(s,e,t){return(1-t)*s+t*e}function ny(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function E_(s,e){if(e.constructor===Float32Array)return s;const t=wc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function T_(s,e){if(e.constructor===Float32Array)return s;const t=wc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}class ct{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ha{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,c,f){let d=i[a+0],h=i[a+1],m=i[a+2],g=i[a+3],v=l[c+0],S=l[c+1],E=l[c+2],R=l[c+3];if(g!==R||d!==v||h!==S||m!==E){let y=d*v+h*S+m*E+g*R;y<0&&(v=-v,S=-S,E=-E,R=-R,y=-y);let x=1-f;if(y<.9995){const b=Math.acos(y),D=Math.sin(b);x=Math.sin(x*b)/D,f=Math.sin(f*b)/D,d=d*x+v*f,h=h*x+S*f,m=m*x+E*f,g=g*x+R*f}else{d=d*x+v*f,h=h*x+S*f,m=m*x+E*f,g=g*x+R*f;const b=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=b,h*=b,m*=b,g*=b}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,a,l,c){const f=i[a],d=i[a+1],h=i[a+2],m=i[a+3],g=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*g+d*S-h*v,e[t+1]=d*E+m*v+h*g-f*S,e[t+2]=h*E+m*S+f*v-d*g,e[t+3]=m*E-f*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(a/2),g=f(l/2),v=d(i/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=v*m*g+h*S*E,this._y=h*S*g-v*m*E,this._z=h*m*E+v*S*g,this._w=h*m*g-v*S*E;break;case"YXZ":this._x=v*m*g+h*S*E,this._y=h*S*g-v*m*E,this._z=h*m*E-v*S*g,this._w=h*m*g+v*S*E;break;case"ZXY":this._x=v*m*g-h*S*E,this._y=h*S*g+v*m*E,this._z=h*m*E+v*S*g,this._w=h*m*g-v*S*E;break;case"ZYX":this._x=v*m*g-h*S*E,this._y=h*S*g+v*m*E,this._z=h*m*E-v*S*g,this._w=h*m*g+v*S*E;break;case"YZX":this._x=v*m*g+h*S*E,this._y=h*S*g+v*m*E,this._z=h*m*E-v*S*g,this._w=h*m*g-v*S*E;break;case"XZY":this._x=v*m*g-h*S*E,this._y=h*S*g-v*m*E,this._z=h*m*E+v*S*g,this._w=h*m*g+v*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=i+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(i>f&&i>g){const S=2*Math.sqrt(1+i-f-g);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(f>g){const S=2*Math.sqrt(1+f-i-g);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-i-f);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+c*f+a*h-l*d,this._y=a*m+c*d+l*f-i*h,this._z=l*m+c*h+i*d-a*f,this._w=c*m-i*f-a*d-l*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,a=-a,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_g.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*a-f*i),m=2*(f*t-l*a),g=2*(l*i-c*t);return this.x=t+d*h+c*g-f*m,this.y=i+d*m+f*h-l*g,this.z=a+d*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-i*d,this.z=i*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new Z,_g=new ha;class ft{static{this.prototype.isMatrix3=!0}constructor(e,t,i,a,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,d,h)}set(e,t,i,a,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[3],d=i[6],h=i[1],m=i[4],g=i[7],v=i[2],S=i[5],E=i[8],R=a[0],y=a[3],x=a[6],b=a[1],D=a[4],A=a[7],I=a[2],P=a[5],M=a[8];return l[0]=c*R+f*b+d*I,l[3]=c*y+f*D+d*P,l[6]=c*x+f*A+d*M,l[1]=h*R+m*b+g*I,l[4]=h*y+m*D+g*P,l[7]=h*x+m*A+g*M,l[2]=v*R+S*b+E*I,l[5]=v*y+S*D+E*P,l[8]=v*x+S*A+E*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-i*l*m+i*f*d+a*l*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*c-f*h,v=f*d-m*l,S=h*l-c*d,E=t*g+i*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(a*h-m*i)*R,e[2]=(f*i-a*c)*R,e[3]=v*R,e[4]=(m*t-a*d)*R,e[5]=(a*l-f*t)*R,e[6]=S*R,e[7]=(i*d-h*t)*R,e[8]=(c*t-i*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*c+h*f)+c+e,-a*h,a*d,-a*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return mc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cf.makeScale(e,t)),this}rotate(e){return mc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cf.makeRotation(-e)),this}translate(e,t){return mc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cf=new ft,vg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iy(){const s={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(a.r=cr(a.r),a.g=cr(a.g),a.b=cr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ur?Mc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[yc]:{primaries:e,whitePoint:i,transfer:Mc,toXYZ:vg,fromXYZ:Sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:vg,fromXYZ:Sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),s}const xt=iy();function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gs;class ry{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=Ec("canvas")),Gs.width=e.width,Gs.height=e.height;const a=Gs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ec("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=cr(l[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sy=0;class hh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Rf(a[c].image)):l.push(Rf(a[c]))}else l=Rf(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function Rf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ry.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let ay=0;const Af=new Z;class Nn extends hs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,i=or,a=or,l=ti,c=Fr,f=Vi,d=ui,h=Nn.DEFAULT_ANISOTROPY,m=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=ps(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Af).x}get height(){return this.source.getSize(Af).y}get depth(){return this.source.getSize(Af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=u_;Nn.DEFAULT_ANISOTROPY=1;class en{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],S=d[5],E=d[9],R=d[2],y=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+R)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,A=(S+1)/2,I=(x+1)/2,P=(m+v)/4,M=(g+R)/4,L=(E+y)/4;return D>A&&D>I?D<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(D),a=P/i,l=M/i):A>I?A<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),i=P/a,l=L/a):I<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),i=M/l,a=L/l),this.set(i,a,l,t),this}let b=Math.sqrt((y-E)*(y-E)+(g-R)*(g-R)+(v-m)*(v-m));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(g-R)/b,this.z=(v-m)/b,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oy extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=new Nn({width:e,height:t,depth:i.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends oy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class C_ extends Nn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ly extends Nn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Bt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,a,l,c,f,d,h,m,g,v,S,E,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,f,d,h,m,g,v,S,E,R,y)}set(e,t,i,a,l,c,f,d,h,m,g,v,S,E,R,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=h,x[6]=m,x[10]=g,x[14]=v,x[3]=S,x[7]=E,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*g,E=f*m,R=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=v-R*h,t[9]=-f*d,t[2]=R-v*h,t[6]=E+S*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,E=h*m,R=h*g;t[0]=v+R*f,t[4]=E*f-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=R+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,E=h*m,R=h*g;t[0]=v-R*f,t[4]=-c*g,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=R-v*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*m,S=c*g,E=f*m,R=f*g;t[0]=d*m,t[4]=E*h-S,t[8]=v*h+R,t[1]=d*g,t[5]=R*h+v,t[9]=S*h-E,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,S=c*h,E=f*d,R=f*h;t[0]=d*m,t[4]=R-v*g,t[8]=E*g+S,t[1]=g,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*g+E,t[10]=v-R*g}else if(e.order==="XZY"){const v=c*d,S=c*h,E=f*d,R=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+R,t[5]=c*m,t[9]=S*g-E,t[2]=E*g-S,t[6]=f*m,t[10]=R*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,uy)}lookAt(e,t,i){const a=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),wr.crossVectors(i,li),wr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),wr.crossVectors(i,li)),wr.normalize(),Ll.crossVectors(li,wr),a[0]=wr.x,a[4]=Ll.x,a[8]=li.x,a[1]=wr.y,a[5]=Ll.y,a[9]=li.y,a[2]=wr.z,a[6]=Ll.z,a[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],f=i[4],d=i[8],h=i[12],m=i[1],g=i[5],v=i[9],S=i[13],E=i[2],R=i[6],y=i[10],x=i[14],b=i[3],D=i[7],A=i[11],I=i[15],P=a[0],M=a[4],L=a[8],V=a[12],F=a[1],W=a[5],j=a[9],oe=a[13],z=a[2],re=a[6],ce=a[10],Y=a[14],J=a[3],B=a[7],$=a[11],U=a[15];return l[0]=c*P+f*F+d*z+h*J,l[4]=c*M+f*W+d*re+h*B,l[8]=c*L+f*j+d*ce+h*$,l[12]=c*V+f*oe+d*Y+h*U,l[1]=m*P+g*F+v*z+S*J,l[5]=m*M+g*W+v*re+S*B,l[9]=m*L+g*j+v*ce+S*$,l[13]=m*V+g*oe+v*Y+S*U,l[2]=E*P+R*F+y*z+x*J,l[6]=E*M+R*W+y*re+x*B,l[10]=E*L+R*j+y*ce+x*$,l[14]=E*V+R*oe+y*Y+x*U,l[3]=b*P+D*F+A*z+I*J,l[7]=b*M+D*W+A*re+I*B,l[11]=b*L+D*j+A*ce+I*$,l[15]=b*V+D*oe+A*Y+I*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],E=e[3],R=e[7],y=e[11],x=e[15],b=d*S-h*v,D=f*S-h*g,A=f*v-d*g,I=c*S-h*m,P=c*v-d*m,M=c*g-f*m;return t*(R*b-y*D+x*A)-i*(E*b-y*I+x*P)+a*(E*D-R*I+x*M)-l*(E*A-R*P+y*M)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[1],c=e[5],f=e[9],d=e[2],h=e[6],m=e[10];return t*(c*m-f*h)-i*(l*m-f*d)+a*(l*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],E=e[12],R=e[13],y=e[14],x=e[15],b=t*f-i*c,D=t*d-a*c,A=t*h-l*c,I=i*d-a*f,P=i*h-l*f,M=a*h-l*d,L=m*R-g*E,V=m*y-v*E,F=m*x-S*E,W=g*y-v*R,j=g*x-S*R,oe=v*x-S*y,z=b*oe-D*j+A*W+I*F-P*V+M*L;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/z;return e[0]=(f*oe-d*j+h*W)*re,e[1]=(a*j-i*oe-l*W)*re,e[2]=(R*M-y*P+x*I)*re,e[3]=(v*P-g*M-S*I)*re,e[4]=(d*F-c*oe-h*V)*re,e[5]=(t*oe-a*F+l*V)*re,e[6]=(y*A-E*M-x*D)*re,e[7]=(m*M-v*A+S*D)*re,e[8]=(c*j-f*F+h*L)*re,e[9]=(i*F-t*j-l*L)*re,e[10]=(E*P-R*A+x*b)*re,e[11]=(g*A-m*P-S*b)*re,e[12]=(f*V-c*W-d*L)*re,e[13]=(t*W-i*V+a*L)*re,e[14]=(R*D-E*I-y*b)*re,e[15]=(m*I-g*D+v*b)*re,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+i,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+i,m*d-a*c,0,h*d-a*f,m*d+a*c,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,g=f+f,v=l*h,S=l*m,E=l*g,R=c*m,y=c*g,x=f*g,b=d*h,D=d*m,A=d*g,I=i.x,P=i.y,M=i.z;return a[0]=(1-(R+x))*I,a[1]=(S+A)*I,a[2]=(E-D)*I,a[3]=0,a[4]=(S-A)*P,a[5]=(1-(v+x))*P,a[6]=(y+b)*P,a[7]=0,a[8]=(E+D)*M,a[9]=(y-b)*M,a[10]=(1-(v+R))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return i.set(1,1,1),t.identity(),this;let c=Hs.set(a[0],a[1],a[2]).length();const f=Hs.set(a[4],a[5],a[6]).length(),d=Hs.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Ai.copy(this);const h=1/c,m=1/f,g=1/d;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=m,Ai.elements[5]*=m,Ai.elements[6]*=m,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,t.setFromRotationMatrix(Ai),i.x=c,i.y=f,i.z=d,this}makePerspective(e,t,i,a,l,c,f=Pi,d=!1){const h=this.elements,m=2*l/(t-e),g=2*l/(i-a),v=(t+e)/(t-e),S=(i+a)/(i-a);let E,R;if(d)E=l/(c-l),R=c*l/(c-l);else if(f===Pi)E=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(f===xo)E=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,l,c,f=Pi,d=!1){const h=this.elements,m=2/(t-e),g=2/(i-a),v=-(t+e)/(t-e),S=-(i+a)/(i-a);let E,R;if(d)E=1/(c-l),R=c/(c-l);else if(f===Pi)E=-2/(c-l),R=-(c+l)/(c-l);else if(f===xo)E=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hs=new Z,Ai=new Bt,cy=new Z(0,0,0),uy=new Z(1,1,1),wr=new Z,Ll=new Z,li=new Z,xg=new Bt,yg=new ha;class Gr{constructor(e=0,t=0,i=0,a=Gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],h=a[5],m=a[9],g=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yg.setFromEuler(this),this.setFromQuaternion(yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gr.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fy=0;const Mg=new Z,Vs=new ha,tr=new Bt,Dl=new Z,to=new Z,dy=new Z,hy=new ha,Eg=new Z(1,0,0),Tg=new Z(0,1,0),Cg=new Z(0,0,1),Rg={type:"added"},py={type:"removed"},Ws={type:"childadded",child:null},wf={type:"childremoved",child:null};class yn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Z,t=new Gr,i=new ha,a=new Z(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ft}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,t){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dl.copy(e):Dl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(to,Dl,this.up):tr.lookAt(Dl,to,this.up),this.quaternion.setFromRotationMatrix(tr),a&&(tr.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(tr),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(py),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*i-l[8]*a,l[13]+=i-l[1]*t-l[5]*i-l[9]*a,l[14]+=a-l[2]*t-l[6]*i-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new Z(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ra extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,i),x=this._getHandJoint(h,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(my)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ra;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const A_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Pf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=xt.workingColorSpace){if(e=ty(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=Pf(c,l,e+1/3),this.g=Pf(c,l,e),this.b=Pf(c,l,e-1/3)}return xt.colorSpaceToWorking(this,a),this}setStyle(e,t=Wn){function i(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=A_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return xt.workingToColorSpace(Dn.copy(this),e),Math.round(yt(Dn.r*255,0,255))*65536+Math.round(yt(Dn.g*255,0,255))*256+Math.round(yt(Dn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,a=Dn.g,l=Dn.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case i:d=(a-l)/g+(a<l?6:0);break;case a:d=(l-i)/g+2;break;case l:d=(i-a)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Wn){xt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,a=Dn.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Il);const i=Ef(br.h,Il.h,t),a=Ef(br.s,Il.s,t),l=Ef(br.l,Il.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new mt;mt.NAMES=A_;class ph{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=t}clone(){return new ph(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mh extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentIntensity=1,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new Z,nr=new Z,Lf=new Z,ir=new Z,Xs=new Z,$s=new Z,Ag=new Z,Df=new Z,If=new Z,Nf=new Z,Uf=new en,Of=new en,Ff=new en;class vi{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),wi.subVectors(e,t),a.cross(wi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){wi.subVectors(a,t),nr.subVectors(i,t),Lf.subVectors(e,t);const c=wi.dot(wi),f=wi.dot(nr),d=wi.dot(Lf),h=nr.dot(nr),m=nr.dot(Lf),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-f*m)*v,E=(c*m-f*d)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,a,l,c,f,d){return this.getBarycoord(e,t,i,a,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ir.x),d.addScaledVector(c,ir.y),d.addScaledVector(f,ir.z),d)}static getInterpolatedAttribute(e,t,i,a,l,c){return Uf.setScalar(0),Of.setScalar(0),Ff.setScalar(0),Uf.fromBufferAttribute(e,t),Of.fromBufferAttribute(e,i),Ff.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Uf,l.x),c.addScaledVector(Of,l.y),c.addScaledVector(Ff,l.z),c}static isFrontFacing(e,t,i,a){return wi.subVectors(i,t),nr.subVectors(e,t),wi.cross(nr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),wi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let c,f;Xs.subVectors(a,i),$s.subVectors(l,i),Df.subVectors(e,i);const d=Xs.dot(Df),h=$s.dot(Df);if(d<=0&&h<=0)return t.copy(i);If.subVectors(e,a);const m=Xs.dot(If),g=$s.dot(If);if(m>=0&&g<=m)return t.copy(a);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0&&d-m>0)return c=d/(d-m),t.copy(i).addScaledVector(Xs,c);Nf.subVectors(e,l);const S=Xs.dot(Nf),E=$s.dot(Nf);if(E>=0&&S<=E)return t.copy(l);const R=S*h-d*E;if(R<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(i).addScaledVector($s,f);const y=m*E-S*g;if(y<=0&&g-m>=0&&S-E>=0)return Ag.subVectors(l,a),f=(g-m)/(g-m+(S-E)),t.copy(a).addScaledVector(Ag,f);const x=1/(y+R+v);return c=R*x,f=v*x,t.copy(i).addScaledVector(Xs,c).addScaledVector($s,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,bi):bi.fromBufferAttribute(l,c),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Ul.subVectors(this.max,no),qs.subVectors(e.a,no),Ys.subVectors(e.b,no),js.subVectors(e.c,no),Pr.subVectors(Ys,qs),Lr.subVectors(js,Ys),ns.subVectors(qs,js);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-ns.z,ns.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,ns.z,0,-ns.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-ns.y,ns.x,0];return!kf(t,qs,Ys,js,Ul)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,qs,Ys,js,Ul))?!1:(Ol.crossVectors(Pr,Lr),t=[Ol.x,Ol.y,Ol.z],kf(t,qs,Ys,js,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],bi=new Z,Nl=new Mo,qs=new Z,Ys=new Z,js=new Z,Pr=new Z,Lr=new Z,ns=new Z,no=new Z,Ul=new Z,Ol=new Z,is=new Z;function kf(s,e,t,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){is.fromArray(s,l);const f=a.x*Math.abs(is.x)+a.y*Math.abs(is.y)+a.z*Math.abs(is.z),d=e.dot(is),h=t.dot(is),m=i.dot(is);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const rn=new Z,Fl=new ct;let gy=0;class Si extends hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=y_,this.updateRanges=[],this.gpuType=Hi,this.version=0,this._normalizationScale=e!==void 0?wc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):E_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):T_(e,this.array)}}class w_ extends Si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class b_ extends Si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends Si{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _y=new Mo,io=new Z,Bf=new Z;class bc{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_y.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(io,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Bf)),this.expandByPoint(io.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vy=0;const _i=new Bt,zf=new yn,Ks=new Z,ci=new Mo,ro=new Mo,Sn=new Z;class On extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jx(e)?b_:w_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ft().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ro.setFromBufferAttribute(f),this.morphTargetsRelative?(Sn.addVectors(ci.min,ro.min),ci.expandByPoint(Sn),Sn.addVectors(ci.max,ro.max),ci.expandByPoint(Sn)):(ci.expandByPoint(ro.min),ci.expandByPoint(ro.max))}ci.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)Sn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(Sn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Sn.fromBufferAttribute(f,h),d&&(Ks.fromBufferAttribute(e,h),Sn.add(Ks)),a=Math.max(a,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Si(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const f=[],d=[],h=new Uint8Array(i.count);for(let V=0;V<i.count;V++)f[V]=new Z,d[V]=new Z;const m=new Z,g=new Z,v=new Z,S=new ct,E=new ct,R=new ct,y=new Z,x=new Z;function b(V,F,W){h[V]=h[F]=h[W]=1,m.fromBufferAttribute(i,V),g.fromBufferAttribute(i,F),v.fromBufferAttribute(i,W),S.fromBufferAttribute(l,V),E.fromBufferAttribute(l,F),R.fromBufferAttribute(l,W),g.sub(m),v.sub(m),E.sub(S),R.sub(S);const j=1/(E.x*R.y-R.x*E.y);isFinite(j)&&(y.copy(g).multiplyScalar(R.y).addScaledVector(v,-E.y).multiplyScalar(j),x.copy(v).multiplyScalar(E.x).addScaledVector(g,-R.x).multiplyScalar(j),f[V].add(y),f[F].add(y),f[W].add(y),d[V].add(x),d[F].add(x),d[W].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,F=D.length;V<F;++V){const W=D[V],j=W.start,oe=W.count;for(let z=j,re=j+oe;z<re;z+=3)b(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const A=new Z,I=new Z,P=new Z,M=new Z;function L(V){P.fromBufferAttribute(a,V),M.copy(P);const F=f[V];A.copy(F),A.sub(P.multiplyScalar(P.dot(F))).normalize(),I.crossVectors(M,F);const j=I.dot(d[V])<0?-1:1;c.setXYZW(V,A.x,A.y,A.z,j)}for(let V=0,F=i.count;V<F;++V)h[V]&&L(V);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const a=new Z,l=new Z,c=new Z,f=new Z,d=new Z,h=new Z,m=new Z,g=new Z;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,R),c.fromBufferAttribute(t,y),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),f.add(m),d.add(m),h.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(R,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let S=0,E=0;for(let R=0,y=d.length;R<y;R++){f.isInterleavedBufferAttribute?S=d[R]*f.data.stride+f.offset:S=d[R]*m;for(let x=0;x<m;x++)v[E++]=h[S++]}return new Si(v,m,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,i);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=y_,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=wg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[t]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=wg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function wg(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ps()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Gn=new Z;class Cc{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a,this._normalizationScale=e!==void 0?wc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),a=this._normalize(a),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new Si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):E_(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):T_(e,this.data.array)}}const Gf=new Z,xy=new Z,yy=new ft;class Nr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Gf.subVectors(i,t).cross(xy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Gf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yy.getNormalMatrix(e),a=this.coplanarPoint(Gf).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let My=0;class ms extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=ho,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=t_,this.blendDst=n_,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yf,this.stencilZFail=yf,this.stencilZPass=yf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Nr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P_ extends ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const so=new Z,Zs=new Z,Qs=new Z,ea=new ct,ao=new ct,L_=new Bt,kl=new Z,oo=new Z,Bl=new Z,bg=new ct,Hf=new ct,Pg=new ct;class Ey extends yn{constructor(e=new P_){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new On;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sy(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Cc(i,3,0,!1)),Js.setAttribute("uv",new Cc(i,2,3,!1))}this.geometry=Js,this.material=e,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),L_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Qs.z);const i=this.material.rotation;let a,l;i!==0&&(l=Math.cos(i),a=Math.sin(i));const c=this.center;zl(kl.set(-.5,-.5,0),Qs,c,Zs,a,l),zl(oo.set(.5,-.5,0),Qs,c,Zs,a,l),zl(Bl.set(.5,.5,0),Qs,c,Zs,a,l),bg.set(0,0),Hf.set(1,0),Pg.set(1,1);let f=e.ray.intersectTriangle(kl,oo,Bl,!1,so);if(f===null&&(zl(oo.set(-.5,.5,0),Qs,c,Zs,a,l),Hf.set(0,1),f=e.ray.intersectTriangle(kl,Bl,oo,!1,so),f===null))return;const d=e.ray.origin.distanceTo(so);d<e.near||d>e.far||t.push({distance:d,point:so.clone(),uv:vi.getInterpolation(so,kl,oo,Bl,bg,Hf,Pg,new ct),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function zl(s,e,t,i,a,l){ea.subVectors(s,t).addScalar(.5).multiply(i),a!==void 0?(ao.x=l*ea.x-a*ea.y,ao.y=a*ea.x+l*ea.y):ao.copy(ea),s.copy(e),s.x+=ao.x,s.y+=ao.y,s.applyMatrix4(L_)}const sr=new Z,Vf=new Z,Gl=new Z,Hl=new Z;class D_{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Vf.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),Hl.copy(this.origin).sub(Vf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Gl),f=Hl.dot(this.direction),d=-Hl.dot(Gl),h=Hl.lengthSq(),m=Math.abs(1-c*c);let g,v,S,E;if(m>0)if(g=c*d-f,v=c*f-d,E=l*m,g>=0)if(v>=-E)if(v<=E){const R=1/m;g*=R,v*=R,S=g*(g+c*v+2*f)+v*(c*g+v+2*d)+h}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Vf).addScaledVector(Gl,v),S}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),a=sr.dot(sr)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,i,a,l){const c=this.origin,f=this.direction,d=f.x,h=f.y,m=f.z,g=e.x-c.x,v=e.y-c.y,S=e.z-c.z,E=t.x-c.x,R=t.y-c.y,y=t.z-c.z,x=i.x-c.x,b=i.y-c.y,D=i.z-c.z,A=Math.abs(d),I=Math.abs(h),P=Math.abs(m);let M,L,V,F,W,j,oe,z,re,ce,Y,J;if(A>=I&&A>=P?(V=d,j=g,re=E,J=x,d>=0?(M=h,L=m,F=v,W=S,oe=R,z=y,ce=b,Y=D):(M=m,L=h,F=S,W=v,oe=y,z=R,ce=D,Y=b)):I>=P?(V=h,j=v,re=R,J=b,h>=0?(M=m,L=d,F=S,W=g,oe=y,z=E,ce=D,Y=x):(M=d,L=m,F=g,W=S,oe=E,z=y,ce=x,Y=D)):(V=m,j=S,re=y,J=D,m>=0?(M=d,L=h,F=g,W=v,oe=E,z=R,ce=x,Y=b):(M=h,L=d,F=v,W=g,oe=R,z=E,ce=b,Y=x)),V===0)return null;const B=M/V,$=L/V,U=1/V,ne=F-B*j,Le=W-$*j,ie=oe-B*re,ge=z-$*re,Me=ce-B*J,Ue=Y-$*J,_e=Me*ge-Ue*ie,ze=ne*Ue-Le*Me,Mt=ie*Le-ge*ne;if(a){if(_e<0||ze<0||Mt<0)return null}else if((_e<0||ze<0||Mt<0)&&(_e>0||ze>0||Mt>0))return null;const et=_e+ze+Mt;if(et===0)return null;const Tt=U*(_e*j+ze*re+Mt*J);return(et>0?Tt<0:Tt>0)?null:this.at(Tt/et,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class as extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lg=new Bt,rs=new D_,Vl=new bc,Dg=new Z,Wl=new Z,Xl=new Z,$l=new Z,Wf=new Z,ql=new Z,Ig=new Z,Yl=new Z;class xn extends yn{constructor(e=new On,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ql.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(Wf.fromBufferAttribute(g,e),c?ql.addScaledVector(Wf,m):ql.addScaledVector(Wf.sub(t),m))}t.add(ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(Vl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Vl,Dg)===null||rs.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Lg.copy(l).invert(),rs.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,R=v.length;E<R;E++){const y=v[E],x=c[y.materialIndex],b=Math.max(y.start,S.start),D=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let A=b,I=D;A<I;A+=3){const P=f.getX(A),M=f.getX(A+1),L=f.getX(A+2);a=jl(this,x,e,i,h,m,g,P,M,L),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=E,x=R;y<x;y+=3){const b=f.getX(y),D=f.getX(y+1),A=f.getX(y+2);a=jl(this,c,e,i,h,m,g,b,D,A),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,R=v.length;E<R;E++){const y=v[E],x=c[y.materialIndex],b=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let A=b,I=D;A<I;A+=3){const P=A,M=A+1,L=A+2;a=jl(this,x,e,i,h,m,g,P,M,L),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=E,x=R;y<x;y+=3){const b=y,D=y+1,A=y+2;a=jl(this,c,e,i,h,m,g,b,D,A),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Ty(s,e,t,i,a,l,c,f){let d;if(e.side===ni?d=i.intersectTriangle(c,l,a,!0,f):d=i.intersectTriangle(a,l,c,e.side===os,f),d===null)return null;Yl.copy(f),Yl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Yl);return h<t.near||h>t.far?null:{distance:h,point:Yl.clone(),object:s}}function jl(s,e,t,i,a,l,c,f,d,h){s.getVertexPosition(f,Wl),s.getVertexPosition(d,Xl),s.getVertexPosition(h,$l);const m=Ty(s,e,t,i,Wl,Xl,$l,Ig);if(m){const g=new Z;vi.getBarycoord(Ig,Wl,Xl,$l,g),a&&(m.uv=vi.getInterpolatedAttribute(a,f,d,h,g,new ct)),l&&(m.uv1=vi.getInterpolatedAttribute(l,f,d,h,g,new ct)),c&&(m.normal=vi.getInterpolatedAttribute(c,f,d,h,g,new Z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new Z,materialIndex:0};vi.getNormal(Wl,Xl,$l,v.normal),m.face=v,m.barycoord=g}return m}class Cy extends Nn{constructor(e=null,t=1,i=1,a,l,c,f,d,h=Tn,m=Tn,g,v){super(null,c,f,d,h,m,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ss=new bc,Ry=new ct(.5,.5),Kl=new Z;class yo{constructor(e=new Nr,t=new Nr,i=new Nr,a=new Nr,l=new Nr,c=new Nr){this.planes=[e,t,i,a,l,c]}set(e,t,i,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){const a=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],m=l[4],g=l[5],v=l[6],S=l[7],E=l[8],R=l[9],y=l[10],x=l[11],b=l[12],D=l[13],A=l[14],I=l[15];if(a[0].setComponents(h-c,S-m,x-E,I-b).normalize(),a[1].setComponents(h+c,S+m,x+E,I+b).normalize(),a[2].setComponents(h+f,S+g,x+R,I+D).normalize(),a[3].setComponents(h-f,S-g,x-R,I-D).normalize(),i)a[4].setComponents(d,v,y,A).normalize(),a[5].setComponents(h-d,S-v,x-y,I-A).normalize();else if(a[4].setComponents(h-d,S-v,x-y,I-A).normalize(),t===Pi)a[5].setComponents(h+d,S+v,x+y,I+A).normalize();else if(t===xo)a[5].setComponents(d,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=Ry.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Kl.x=a.normal.x>0?e.max.x:e.min.x,Kl.y=a.normal.y>0?e.max.y:e.min.y,Kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ng=new Bt;class gh{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let a=0;a<t.length;a++){const l=t[a];Ng.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),i[a]===void 0&&(i[a]=new yo),i[a].setFromProjectionMatrix(Ng,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new yo),t[a].copy(i[a]);return this._count=e._count,this}clone(){return new gh().copy(this)}}class _h extends ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ug=new Bt,Yd=new D_,Jl=new bc,Zl=new Z;class I_ extends yn{constructor(e=new On,t=new _h){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(a),Jl.radius+=l,e.ray.intersectsSphere(Jl)===!1)return;Ug.copy(a).invert(),Yd.copy(e.ray).applyMatrix4(Ug);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,g=i.attributes.position;if(h!==null){const v=Math.max(0,c.start),S=Math.min(h.count,c.start+c.count);for(let E=v,R=S;E<R;E++){const y=h.getX(E);Zl.fromBufferAttribute(g,y),Og(Zl,y,d,a,e,t,this)}}else{const v=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let E=v,R=S;E<R;E++)Zl.fromBufferAttribute(g,E),Og(Zl,E,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Og(s,e,t,i,a,l,c){const f=Yd.distanceSqToPoint(s);if(f<t){const d=new Z;Yd.closestPointToPoint(s,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class N_ extends Nn{constructor(e=[],t=ca,i,a,l,c,f,d,h,m){super(e,t,i,a,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vh extends Nn{constructor(e,t,i,a,l,c,f,d,h){super(e,t,i,a,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends Nn{constructor(e,t,i=Xi,a,l,c,f=Tn,d=Tn,h,m=zr,g=1){if(m!==zr&&m!==kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,a,l,c,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class U_ extends fa{constructor(e,t=Xi,i=ca,a,l,c=Tn,f=Tn,d,h=zr){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,i,a,l,c,f,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class O_ extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pa extends On{constructor(e=1,t=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,i,t,e,c,l,0),E("z","y","x",1,-1,i,t,-e,c,l,1),E("x","z","y",1,1,e,i,t,a,c,2),E("x","z","y",1,-1,e,i,-t,a,c,3),E("x","y","z",1,-1,e,t,i,a,l,4),E("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(d),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(m,3)),this.setAttribute("uv",new Wt(g,2));function E(R,y,x,b,D,A,I,P,M,L,V){const F=A/M,W=I/L,j=A/2,oe=I/2,z=P/2,re=M+1,ce=L+1;let Y=0,J=0;const B=new Z;for(let $=0;$<ce;$++){const U=$*W-oe;for(let ne=0;ne<re;ne++){const Le=ne*F-j;B[R]=Le*b,B[y]=U*D,B[x]=z,h.push(B.x,B.y,B.z),B[R]=0,B[y]=0,B[x]=P>0?1:-1,m.push(B.x,B.y,B.z),g.push(ne/M),g.push(1-$/L),Y+=1}}for(let $=0;$<L;$++)for(let U=0;U<M;U++){const ne=v+U+re*$,Le=v+U+re*($+1),ie=v+(U+1)+re*($+1),ge=v+(U+1)+re*$;d.push(ne,Le,ge),d.push(Le,ie,ge),J+=6}f.addGroup(S,J,V),S+=J,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sh extends On{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],d=[],h=new Z,m=new ct;c.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const S=i+g/t*a;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,d.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xh extends On{constructor(e=1,t=1,i=1,a=32,l=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d};const h=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],S=[];let E=0;const R=[],y=i/2;let x=0;b(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(m),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(S,2));function b(){const A=new Z,I=new Z;let P=0;const M=(t-e)/i;for(let L=0;L<=l;L++){const V=[],F=L/l,W=F*(t-e)+e;for(let j=0;j<=a;j++){const oe=j/a,z=oe*d+f,re=Math.sin(z),ce=Math.cos(z);I.x=W*re,I.y=-F*i+y,I.z=W*ce,g.push(I.x,I.y,I.z),A.set(re,M,ce).normalize(),v.push(A.x,A.y,A.z),S.push(oe,1-F),V.push(E++)}R.push(V)}for(let L=0;L<a;L++)for(let V=0;V<l;V++){const F=R[V][L],W=R[V+1][L],j=R[V+1][L+1],oe=R[V][L+1];(e>0||V!==0)&&(m.push(F,W,oe),P+=3),(t>0||V!==l-1)&&(m.push(W,j,oe),P+=3)}h.addGroup(x,P,0),x+=P}function D(A){const I=E,P=new ct,M=new Z;let L=0;const V=A===!0?e:t,F=A===!0?1:-1;for(let j=1;j<=a;j++)g.push(0,y*F,0),v.push(0,F,0),S.push(.5,.5),E++;const W=E;for(let j=0;j<=a;j++){const z=j/a*d+f,re=Math.cos(z),ce=Math.sin(z);M.x=V*ce,M.y=y*F,M.z=V*re,g.push(M.x,M.y,M.z),v.push(0,F,0),P.x=re*.5+.5,P.y=ce*.5*F+.5,S.push(P.x,P.y),E++}for(let j=0;j<a;j++){const oe=I+j,z=W+j;A===!0?m.push(z,z+1,oe):m.push(z+1,z,oe),L+=3}h.addGroup(x,L,A===!0?1:2),x+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yh extends On{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const l=[],c=[];f(a),h(i),m(),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(l.slice(),3)),this.setAttribute("uv",new Wt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const D=new Z,A=new Z,I=new Z;for(let P=0;P<t.length;P+=3)S(t[P+0],D),S(t[P+1],A),S(t[P+2],I),d(D,A,I,b)}function d(b,D,A,I){const P=I+1,M=[];for(let L=0;L<=P;L++){M[L]=[];const V=b.clone().lerp(A,L/P),F=D.clone().lerp(A,L/P),W=P-L;for(let j=0;j<=W;j++)j===0&&L===P?M[L][j]=V:M[L][j]=V.clone().lerp(F,j/W)}for(let L=0;L<P;L++)for(let V=0;V<2*(P-L)-1;V++){const F=Math.floor(V/2);V%2===0?(v(M[L][F+1]),v(M[L+1][F]),v(M[L][F])):(v(M[L][F+1]),v(M[L+1][F+1]),v(M[L+1][F]))}}function h(b){const D=new Z;for(let A=0;A<l.length;A+=3)D.x=l[A+0],D.y=l[A+1],D.z=l[A+2],D.normalize().multiplyScalar(b),l[A+0]=D.x,l[A+1]=D.y,l[A+2]=D.z}function m(){const b=new Z;for(let D=0;D<l.length;D+=3){b.x=l[D+0],b.y=l[D+1],b.z=l[D+2];const A=y(b)/2/Math.PI+.5,I=x(b)/Math.PI+.5;c.push(A,1-I)}E(),g()}function g(){for(let b=0;b<c.length;b+=6){const D=c[b+0],A=c[b+2],I=c[b+4],P=Math.max(D,A,I),M=Math.min(D,A,I);P>.9&&M<.1&&(D<.2&&(c[b+0]+=1),A<.2&&(c[b+2]+=1),I<.2&&(c[b+4]+=1))}}function v(b){l.push(b.x,b.y,b.z)}function S(b,D){const A=b*3;D.x=e[A+0],D.y=e[A+1],D.z=e[A+2]}function E(){const b=new Z,D=new Z,A=new Z,I=new Z,P=new ct,M=new ct,L=new ct;for(let V=0,F=0;V<l.length;V+=9,F+=6){b.set(l[V+0],l[V+1],l[V+2]),D.set(l[V+3],l[V+4],l[V+5]),A.set(l[V+6],l[V+7],l[V+8]),P.set(c[F+0],c[F+1]),M.set(c[F+2],c[F+3]),L.set(c[F+4],c[F+5]),I.copy(b).add(D).add(A).divideScalar(3);const W=y(I);R(P,F+0,b,W),R(M,F+2,D,W),R(L,F+4,A,W)}}function R(b,D,A,I){I<0&&b.x===1&&(c[D]=b.x-1),A.x===0&&A.z===0&&(c[D]=I/2/Math.PI+.5)}function y(b){return Math.atan2(b.z,-b.x)}function x(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.vertices,e.indices,e.radius,e.detail)}}class Mh extends yh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mh(e.radius,e.detail)}}class ma extends On{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(i),d=Math.floor(a),h=f+1,m=d+1,g=e/f,v=t/d,S=[],E=[],R=[],y=[];for(let x=0;x<m;x++){const b=x*v-c;for(let D=0;D<h;D++){const A=D*g-l;E.push(A,-b,0),R.push(0,0,1),y.push(D/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let b=0;b<f;b++){const D=b+h*x,A=b+h*(x+1),I=b+1+h*(x+1),P=b+1+h*x;S.push(D,A,P),S.push(A,I,P)}this.setIndex(S),this.setAttribute("position",new Wt(E,3)),this.setAttribute("normal",new Wt(R,3)),this.setAttribute("uv",new Wt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class Eh extends On{constructor(e=1,t=32,i=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+f,Math.PI);let h=0;const m=[],g=new Z,v=new Z,S=[],E=[],R=[],y=[];for(let x=0;x<=i;x++){const b=[],D=x/i,A=c+D*f,I=e*Math.cos(A),P=Math.sqrt(e*e-I*I);let M=0;x===0&&c===0?M=.5/t:x===i&&d===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const V=L/t,F=a+V*l;g.x=-P*Math.cos(F),g.y=I,g.z=P*Math.sin(F),E.push(g.x,g.y,g.z),v.copy(g).normalize(),R.push(v.x,v.y,v.z),y.push(V+M,1-D),b.push(h++)}m.push(b)}for(let x=0;x<i;x++)for(let b=0;b<t;b++){const D=m[x][b+1],A=m[x][b],I=m[x+1][b],P=m[x+1][b+1];(x!==0||c>0)&&S.push(D,A,P),(x!==i-1||d<Math.PI)&&S.push(A,I,P)}this.setIndex(S),this.setAttribute("position",new Wt(E,3)),this.setAttribute("normal",new Wt(R,3)),this.setAttribute("uv",new Wt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class la extends On{constructor(e=1,t=.4,i=12,a=48,l=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:l,thetaStart:c,thetaLength:f},i=Math.floor(i),a=Math.floor(a);const d=[],h=[],m=[],g=[],v=new Z,S=new Z,E=new Z;for(let R=0;R<=i;R++){const y=c+R/i*f;for(let x=0;x<=a;x++){const b=x/a*l;S.x=(e+t*Math.cos(y))*Math.cos(b),S.y=(e+t*Math.cos(y))*Math.sin(b),S.z=t*Math.sin(y),h.push(S.x,S.y,S.z),v.x=e*Math.cos(b),v.y=e*Math.sin(b),E.subVectors(S,v).normalize(),m.push(E.x,E.y,E.z),g.push(x/a),g.push(R/i)}}for(let R=1;R<=i;R++)for(let y=1;y<=a;y++){const x=(a+1)*R+y-1,b=(a+1)*(R-1)+y-1,D=(a+1)*(R-1)+y,A=(a+1)*R+y;d.push(x,b,A),d.push(b,D,A)}this.setIndex(d),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(m,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function da(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(Fg(a))a.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Fg(a[0])){const l=[];for(let c=0,f=a.length;c<f;c++)l[c]=a[c].clone();e[t][i]=l}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Hn(s){const e={};for(let t=0;t<s.length;t++){const i=da(s[t]);for(const a in i)e[a]=i[a]}return e}function Fg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ay(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function F_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const wy={clone:da,merge:Hn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=Ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new mt().setHex(a.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(a.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new en().fromArray(a.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ly extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jd extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dy extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Th extends yn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Xf=new Bt,kg=new Z,Bg=new Z;class k_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;kg.setFromMatrixPosition(e.matrixWorld),t.position.copy(kg),Bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Xf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,c=a?a.z/l.x:1,f=a?a.w/l.y:1,d=a?a.x/l.x:0,h=a?a.y/l.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*f,0,.5*f+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*f,0,.5*f+h,0,0,.5,.5,0,0,0,1),t.multiply(Xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new Z,ec=new ha,Bi=new Z;class B_ extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ql,ec,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new Z,zg=new ct,Gg=new ct;class ei extends B_{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,zg,Gg),t.subVectors(Gg,zg)}setViewOffset(e,t,i,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mf*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ny extends k_{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class mo extends Th{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Ny}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class z_ extends B_{constructor(e=-1,t=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uy extends k_{constructor(){super(new z_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends Th{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Uy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ch extends Th{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ta=-90,na=1;class Kd extends yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(ta,na,e,t);a.layers=this.layers,this.add(a);const l=new ei(ta,na,e,t);l.layers=this.layers,this.add(l);const c=new ei(ta,na,e,t);c.layers=this.layers,this.add(c);const f=new ei(ta,na,e,t);f.layers=this.layers,this.add(f);const d=new ei(ta,na,e,t);d.layers=this.layers,this.add(d);const h=new ei(ta,na,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.mipmapsAutoUpdate=R,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Oy extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class G_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hg(s,e,t,i){const a=Fy(i);switch(t){case m_:return s*e;case __:return s*e/a.components*a.byteLength;case uh:return s*e/a.components*a.byteLength;case ls:return s*e*2/a.components*a.byteLength;case fh:return s*e*2/a.components*a.byteLength;case g_:return s*e*3/a.components*a.byteLength;case Vi:return s*e*4/a.components*a.byteLength;case dh:return s*e*4/a.components*a.byteLength;case fc:case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(s,8)*Math.max(e,8)/2;case xd:case yd:case Ed:case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Md:case Sc:case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zd:case Gd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fy(s){switch(s){case ui:case f_:return{byteLength:1,components:1};case So:case d_:case $i:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Xi:case oh:case Hi:return{byteLength:4,components:1};case h_:case p_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H_(){let s=null,e=!1,t=null,i=null;function a(l,c){i=s.requestAnimationFrame(a),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ky(s){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,d,h){const m=d.array,g=d.updateRanges;if(s.bindBuffer(h,f),g.length===0)s.bufferSubData(h,0,m);else{g.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<g.length;S++){const E=g[v],R=g[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,g[v]=R)}g.length=v+1;for(let S=0,E=g.length;S<E;S++){const R=g[S];s.bufferSubData(h,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:c}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
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
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
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
#endif`,Qy=`#ifdef USE_BUMPMAP
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,OM=`uniform sampler2D dfgLUT;
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
}`,FM=`
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
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
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
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
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform float backgroundBlurriness;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
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
}`,XE=`#if DEPTH_PACKING == 3200
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
}`,$E=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
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
}`,JE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,rT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,dT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:By,alphahash_pars_fragment:zy,alphamap_fragment:Gy,alphamap_pars_fragment:Hy,alphatest_fragment:Vy,alphatest_pars_fragment:Wy,aomap_fragment:Xy,aomap_pars_fragment:$y,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:jy,beginnormal_vertex:Ky,bsdfs:Jy,iridescence_fragment:Zy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:rM,color_pars_fragment:sM,color_pars_vertex:aM,color_vertex:oM,common:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:dM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:_M,envmap_pars_fragment:vM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:PM,envmap_vertex:xM,fog_vertex:yM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:RM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:wM,lights_pars_begin:bM,lights_toon_fragment:LM,lights_toon_pars_fragment:DM,lights_phong_fragment:IM,lights_phong_pars_fragment:NM,lights_physical_fragment:UM,lights_physical_pars_fragment:OM,lights_fragment_begin:FM,lights_fragment_maps:kM,lights_fragment_end:BM,lightprobes_pars_fragment:zM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:WM,map_fragment:XM,map_pars_fragment:$M,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:KM,morphinstance_vertex:JM,morphcolor_vertex:ZM,morphnormal_vertex:QM,morphtarget_pars_vertex:eE,morphtarget_vertex:tE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:rE,normal_pars_vertex:sE,normal_vertex:aE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:dE,packing:hE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:yE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:CE,skinning_vertex:RE,skinnormal_vertex:AE,specularmap_fragment:wE,specularmap_pars_fragment:bE,tonemapping_fragment:PE,tonemapping_pars_fragment:LE,transmission_fragment:DE,transmission_pars_fragment:IE,uv_pars_fragment:NE,uv_pars_vertex:UE,uv_vertex:OE,worldpos_vertex:FE,background_vert:kE,background_frag:BE,backgroundCube_vert:zE,backgroundCube_frag:GE,cube_vert:HE,cube_frag:VE,depth_vert:WE,depth_frag:XE,distance_vert:$E,distance_frag:qE,equirect_vert:YE,equirect_frag:jE,linedashed_vert:KE,linedashed_frag:JE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:rT,meshnormal_frag:sT,meshphong_vert:aT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:dT,points_frag:hT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},ke={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([ke.points,ke.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([ke.common,ke.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([ke.sprite,ke.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Hn([ke.common,ke.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Hn([ke.lights,ke.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const tc={r:0,b:0,g:0},vT=new Bt,V_=new ft;V_.set(-1,0,0,0,1,0,0,0,1);function ST(s,e,t,i,a,l){const c=new mt(0);let f=a===!0?0:1,d,h,m=null,g=0,v=null;function S(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){const A=b.backgroundBlurriness>0;D=e.get(D,A)}return D}function E(b){let D=!1;const A=S(b);A===null?y(c,f):A&&A.isColor&&(y(A,1),D=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,D){const A=S(D);A&&A.isCubeTexture?(h===void 0&&(h=new xn(new pa(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:da(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(D.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(V_),h.material.toneMapped=xt.getTransfer(A.colorSpace)!==Lt,(m!==A||g!==A.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,m=A,g=A.version,v=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new xn(new ma(2,2),new cs({name:"BackgroundMaterial",uniforms:da(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=xt.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||g!==A.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,m=A,g=A.version,v=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function y(b,D){b.getRGB(tc,F_(s)),t.buffers.color.setClear(tc.r,tc.g,tc.b,D,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,D=1){c.set(b),f=D,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,y(c,f)},render:E,addToRenderList:R,dispose:x}}function xT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=v(null);let l=a,c=!1;function f(W,j,oe,z,re){let ce=!1;const Y=g(W,z,oe,j);l!==Y&&(l=Y,h(l.object)),ce=S(W,z,oe,re),ce&&E(W,z,oe,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,A(W,j,oe,z),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function d(){return s.createVertexArray()}function h(W){return s.bindVertexArray(W)}function m(W){return s.deleteVertexArray(W)}function g(W,j,oe,z){const re=z.wireframe===!0;let ce=i[j.id];ce===void 0&&(ce={},i[j.id]=ce);const Y=W.isInstancedMesh===!0?W.id:0;let J=ce[Y];J===void 0&&(J={},ce[Y]=J);let B=J[oe.id];B===void 0&&(B={},J[oe.id]=B);let $=B[re];return $===void 0&&($=v(d()),B[re]=$),$}function v(W){const j=[],oe=[],z=[];for(let re=0;re<t;re++)j[re]=0,oe[re]=0,z[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:oe,attributeDivisors:z,object:W,attributes:{},index:null}}function S(W,j,oe,z){const re=l.attributes,ce=j.attributes;let Y=0;const J=oe.getAttributes();for(const B in J)if(J[B].location>=0){const U=re[B];let ne=ce[B];if(ne===void 0&&(B==="instanceMatrix"&&W.instanceMatrix&&(ne=W.instanceMatrix),B==="instanceColor"&&W.instanceColor&&(ne=W.instanceColor)),U===void 0||U.attribute!==ne||ne&&U.data!==ne.data)return!0;Y++}return l.attributesNum!==Y||l.index!==z}function E(W,j,oe,z){const re={},ce=j.attributes;let Y=0;const J=oe.getAttributes();for(const B in J)if(J[B].location>=0){let U=ce[B];U===void 0&&(B==="instanceMatrix"&&W.instanceMatrix&&(U=W.instanceMatrix),B==="instanceColor"&&W.instanceColor&&(U=W.instanceColor));const ne={};ne.attribute=U,U&&U.data&&(ne.data=U.data),re[B]=ne,Y++}l.attributes=re,l.attributesNum=Y,l.index=z}function R(){const W=l.newAttributes;for(let j=0,oe=W.length;j<oe;j++)W[j]=0}function y(W){x(W,0)}function x(W,j){const oe=l.newAttributes,z=l.enabledAttributes,re=l.attributeDivisors;oe[W]=1,z[W]===0&&(s.enableVertexAttribArray(W),z[W]=1),re[W]!==j&&(s.vertexAttribDivisor(W,j),re[W]=j)}function b(){const W=l.newAttributes,j=l.enabledAttributes;for(let oe=0,z=j.length;oe<z;oe++)j[oe]!==W[oe]&&(s.disableVertexAttribArray(oe),j[oe]=0)}function D(W,j,oe,z,re,ce,Y){Y===!0?s.vertexAttribIPointer(W,j,oe,re,ce):s.vertexAttribPointer(W,j,oe,z,re,ce)}function A(W,j,oe,z){R();const re=z.attributes,ce=oe.getAttributes(),Y=j.defaultAttributeValues;for(const J in ce){const B=ce[J];if(B.location>=0){let $=re[J];if($===void 0&&(J==="instanceMatrix"&&W.instanceMatrix&&($=W.instanceMatrix),J==="instanceColor"&&W.instanceColor&&($=W.instanceColor)),$!==void 0){const U=$.normalized,ne=$.itemSize,Le=e.get($);if(Le===void 0)continue;const ie=Le.buffer,ge=Le.type,Me=Le.bytesPerElement,Ue=ge===s.INT||ge===s.UNSIGNED_INT||$.gpuType===oh;if($.isInterleavedBufferAttribute){const _e=$.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Mt=$.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)x(B.location+et,_e.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let et=0;et<B.locationSize;et++)y(B.location+et);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let et=0;et<B.locationSize;et++)D(B.location+et,ne/B.locationSize,ge,U,ze*Me,(Mt+ne/B.locationSize*et)*Me,Ue)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)x(B.location+_e,$.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<B.locationSize;_e++)y(B.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let _e=0;_e<B.locationSize;_e++)D(B.location+_e,ne/B.locationSize,ge,U,ne*Me,ne/B.locationSize*_e*Me,Ue)}}else if(Y!==void 0){const U=Y[J];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(B.location,U);break;case 3:s.vertexAttrib3fv(B.location,U);break;case 4:s.vertexAttrib4fv(B.location,U);break;default:s.vertexAttrib1fv(B.location,U)}}}}b()}function I(){V();for(const W in i){const j=i[W];for(const oe in j){const z=j[oe];for(const re in z){const ce=z[re];for(const Y in ce)m(ce[Y].object),delete ce[Y];delete z[re]}}delete i[W]}}function P(W){if(i[W.id]===void 0)return;const j=i[W.id];for(const oe in j){const z=j[oe];for(const re in z){const ce=z[re];for(const Y in ce)m(ce[Y].object),delete ce[Y];delete z[re]}}delete i[W.id]}function M(W){for(const j in i){const oe=i[j];for(const z in oe){const re=oe[z];if(re[W.id]===void 0)continue;const ce=re[W.id];for(const Y in ce)m(ce[Y].object),delete ce[Y];delete re[W.id]}}}function L(W){for(const j in i){const oe=i[j],z=W.isInstancedMesh===!0?W.id:0,re=oe[z];if(re!==void 0){for(const ce in re){const Y=re[ce];for(const J in Y)m(Y[J].object),delete Y[J];delete re[ce]}delete oe[z],Object.keys(oe).length===0&&delete i[j]}}}function V(){F(),c=!0,l!==a&&(l=a,h(l.object))}function F(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:L,releaseStatesOfProgram:M,initAttributes:R,enableAttribute:y,disableUnusedAttributes:b}}function yT(s,e,t){let i;function a(d){i=d}function l(d,h){s.drawArrays(i,d,h),t.update(h,i,1)}function c(d,h,m){m!==0&&(s.drawArraysInstanced(i,d,h,m),t.update(h,i,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,m);let v=0;for(let S=0;S<m;S++)v+=h[S];t.update(v,i,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function MT(s,e,t,i){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(M){return!(M!==Vi&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const L=M===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ui&&M!==Hi&&!L&&i.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(ot("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:A,maxSamples:I,samples:P}}function ET(s){const e=this;let t=null,i=0,a=!1,l=!1;const c=new Nr,f=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||i!==0||a;return a=v,i=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,x=s.get(g);if(!a||E===null||E.length===0||l&&!y)l?m(null):h();else{const b=l?0:i,D=b*4;let A=x.clippingState||null;d.value=A,A=m(E,v,D,S);for(let I=0;I!==D;++I)A[I]=t[I];x.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,v,S,E){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=d.value,E!==!0||y===null){const x=S+R*4,b=v.matrixWorldInverse;f.getNormalMatrix(b),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,A=S;D!==R;++D,A+=4)c.copy(g[D]).applyMatrix4(b,f),c.normal.toArray(y,A),y[A+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}class Rh extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new N_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new pa(5,5,5),l=new cs({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:aa});l.uniforms.tEquirect.value=t;const c=new xn(a,l),f=t.minFilter;return t.minFilter===Fr&&(t.minFilter=ti),new Kd(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(l)}}const Vg=256,TT=3,CT=20,W_=256,X_=16,RT=3,AT=new Z,wT=new mt;class Rc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kd(1,10,null),this._boxMesh=new xn(new pa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,a=100,l={}){const{size:c=256,position:f=AT}=l,d=this._renderer;this._setSize(c);const h=this._allocateTarget(),m=this._getSourceTarget(!0);t>0&&(m.texture.mipmapsAutoUpdate=!1);const g=d.autoClear,v=d.autoClearColor,S=d.autoClearDepth,E=d.autoClearStencil,R=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,R===null&&(e.background=d.getClearColor(wT));const y=new Kd(i,a,m);return y.position.copy(f),y.update(d,e),d.autoClear=g,d.autoClearColor=v,d.autoClearDepth=S,d.autoClearStencil=E,e.background=R,t>0&&(m.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Vg,ny(e))}_fromTexture(e,t){e.mapping===ca||e.mapping===vo?this._setSize(e.image.length===0?Vg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Wg(e,!1,!1),i=Math.log2(e)-TT;for(let a=0;a<=i;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Wg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const a=this._boxMesh,l=this._cubeCamera;a.material=i,l.renderTarget=e,l.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ca||e.mapping===vo?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=bT(),this._integrationMaterial=PT());const t=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/X_);for(let c=0;c<=i;c++){const f=Rc.lodToRoughness(c,i);if(c>i-RT)l.roughness.value=f,this._renderCube(e,c,this._integrationMaterial);else{const d=f>0?Math.log2(t)+.5*Math.log2(6/(W_*Math.pow(f,4)))+.5:0;a.roughness.value=f,a.lodBias.value=d,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=LT());const i=this._blurMaterial,a=i.uniforms,l=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=l.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(l,0,i)}}function Wg(s,e,t){return new Rh(s,{minFilter:Fr,generateMipmaps:e,type:$i,colorSpace:yc,depthBuffer:t})}function Eo(s,e,t){return new cs({name:s,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:ni,blending:aa,depthTest:!1,depthWrite:!1})}function bT(){return Eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${W_}u

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
	`)}function PT(){return Eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:X_}},`

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
	`)}function LT(){return Eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${CT}
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
	`)}function Xg(){return Eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $g(){return Eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function DT(s){let e=new WeakMap,t=new WeakMap,i=null;function a(v,S=!1){return v==null?null:S?c(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===vf||S===Sf)if(e.has(v)){const E=e.get(v).texture;return f(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const R=new Rh(E.height);return R.fromEquirectangularTexture(s,v),e.set(v,R),v.addEventListener("dispose",h),f(R.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const S=v.mapping,E=S===vf||S===Sf,R=S===ca||S===vo;if(E||R){let y=t.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return i===null&&(i=new Rc(s)),y=E?i.fromEquirectangular(v,y):i.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const b=v.image;return E&&b&&b.height>0||R&&b&&d(b)?(i===null&&(i=new Rc(s)),y=E?i.fromEquirectangular(v):i.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",m),y.texture):null}}}return v}function f(v,S){return S===vf?v.mapping=ca:S===Sf&&(v.mapping=vo),v}function d(v){let S=0;const E=6;for(let R=0;R<E;R++)v[R]!==void 0&&S++;return S===E}function h(v){const S=v.target;S.removeEventListener("dispose",h);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function m(v){const S=v.target;S.removeEventListener("dispose",m);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:g}}function IT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&mc("WebGLRenderer: "+i+" extension not supported."),a}}}function NT(s,e,t,i){const a={},l=new WeakMap,c=new FinalizationRegistry(E=>delete a[E]);function f(E){d(E.target)}function d(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",f),delete a[E.id],c.unregister(E);const R=l.get(E);R&&(e.remove(R),l.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function h(E,R){return a[R.id]!==void 0||(R.addEventListener("dispose",f),a[R.id]=new WeakRef(R),c.register(R,R.id,R),t.memory.geometries++),R}function m(E){const R=E.attributes;for(const y in R)e.update(R[y],s.ARRAY_BUFFER)}function g(E){const R=E.index,y=E.attributes.position;let x=0;if(y===void 0)return;const b=R!==null?R.array.length:y.array.length/3-1,D=y.count>=65535?b_:w_,A=new D(Math.ceil(b/3)*6,1),I=A.array;if(R!==null){const M=R.array;x=R.version;for(let L=0,V=0;L<b;L+=3){const F=M[L+0],W=M[L+1],j=M[L+2];I[V++]=F,I[V++]=W,I[V++]=W,I[V++]=j,I[V++]=j,I[V++]=F}}else{x=y.version;for(let M=0,L=0;M<b;M+=3){const V=M+0,F=M+1,W=M+2;I[L++]=V,I[L++]=F,I[L++]=F,I[L++]=W,I[L++]=W,I[L++]=V}}A.version=x;const P=l.get(E);P&&e.remove(P),l.set(E,A)}function v(E){const R=l.get(E);if(R){const y=E.index;y!==null&&R.version<y.version&&g(E)}else g(E);return l.get(E)}function S(){for(const E in a){const R=a[E].deref();R!==void 0&&d(R)}}return{get:h,update:m,getWireframeAttribute:v,dispose:S}}function UT(s,e,t){let i;function a(g){i=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function d(g,v){s.drawElements(i,v,l,g*c),t.update(v,i,1)}function h(g,v,S){S!==0&&(s.drawElementsInstanced(i,v,l,g*c,S),t.update(v,i,S))}function m(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,l,g,0,S);let R=0;for(let y=0;y<S;y++)R+=v[y];t.update(R,i,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function OT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function FT(s,e,t){const i=new WeakMap,a=new en;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==g){let F=function(){L.dispose(),i.delete(f),f.removeEventListener("dispose",F)};var S=F;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),R===!0&&(A=2),y===!0&&(A=3);let I=f.attributes.position.count*A,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const M=new Float32Array(I*P*4*g),L=new C_(M,I,P,g);L.type=Hi,L.needsUpdate=!0;const V=A*4;for(let W=0;W<g;W++){const j=x[W],oe=b[W],z=D[W],re=I*P*4*W;for(let ce=0;ce<j.count;ce++){const Y=ce*V;E===!0&&(a.fromBufferAttribute(j,ce),M[re+Y+0]=a.x,M[re+Y+1]=a.y,M[re+Y+2]=a.z,M[re+Y+3]=0),R===!0&&(a.fromBufferAttribute(oe,ce),M[re+Y+4]=a.x,M[re+Y+5]=a.y,M[re+Y+6]=a.z,M[re+Y+7]=0),y===!0&&(a.fromBufferAttribute(z,ce),M[re+Y+8]=a.x,M[re+Y+9]=a.y,M[re+Y+10]=a.z,M[re+Y+11]=z.itemSize===4?a.w:1)}}v={count:g,texture:L,size:new ct(I,P)},i.set(f,v),f.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const R=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",R),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function kT(s,e,t,i,a){let l=new WeakMap;function c(h){const m=a.render.frame,g=h.geometry,v=e.get(h,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const BT={[r_]:"LINEAR_TONE_MAPPING",[s_]:"REINHARD_TONE_MAPPING",[a_]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[l_]:"AGX_TONE_MAPPING",[c_]:"NEUTRAL_TONE_MAPPING",[o_]:"CUSTOM_TONE_MAPPING"};function zT(s,e,t,i,a,l){const c=new Wi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,d=null,h=null;const m=new On;m.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const g=new Ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new xn(m,g),S=new z_(-1,1,1,-1,0,1);let E=null,R=null,y=!1,x,b=null,D=[],A=!1;this.setSize=function(I,P){c.setSize(I,P),f!==null&&f.setSize(I,P),d!==null&&d.setSize(I,P);for(let M=0;M<D.length;M++){const L=D[M];L.setSize&&L.setSize(I,P)}},this.setEffects=function(I){D=I,A=D.length>0&&D[0].isRenderPass===!0;const P=c.width,M=c.height;D.length>0&&f===null&&(f=new Wi(P,M,{type:$i,depthBuffer:!1,stencilBuffer:!1}),d=new Wi(P,M,{type:$i,depthBuffer:!1,stencilBuffer:!1}));const L=a===!0&&D.some(V=>V.needsDepthTexture===!0);L!==(c.depthTexture!==null)&&(L===!0&&h===null&&(h=new fa(P,M),l===!0&&(h.format=kr,h.type=ua)),c.dispose(),c.depthTexture=L?h:null,c.resolveDepthBuffer=L,c.storeMultisampledDepthBuffer=L);for(let V=0;V<D.length;V++){const F=D[V];F.setSize&&F.setSize(P,M),L&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(h)}},this.begin=function(I,P){if(y||I.toneMapping===lr&&D.length===0)return!1;if(b=P,P!==null){const M=P.width,L=P.height;(c.width!==M||c.height!==L)&&this.setSize(M,L)}return A===!1&&I.setRenderTarget(c),x=I.toneMapping,I.toneMapping=lr,!0},this.hasRenderPass=function(){return A},this.end=function(I,P){I.toneMapping=x,y=!0;let M=c,L=f;for(let V=0;V<D.length;V++){const F=D[V];F.enabled!==!1&&(F.render(I,L,M,P),F.needsSwap!==!1&&(M=L,L=L===f?d:f))}if(E!==I.outputColorSpace||R!==I.toneMapping){E=I.outputColorSpace,R=I.toneMapping,g.defines={},xt.getTransfer(E)===Lt&&(g.defines.SRGB_TRANSFER="");const V=BT[R];V&&(g.defines[V]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=M.texture,I.setRenderTarget(b),I.render(v,S),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f!==null&&f.dispose(),d!==null&&d.dispose(),m.dispose(),g.dispose()}}const $_=new Nn,q_=new fa(1,1),Y_=new U_(1),j_=new C_,K_=new ly,J_=new N_,qg=[],Yg=[],jg=new Float32Array(16),Kg=new Float32Array(9),Jg=new Float32Array(4);function ga(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=qg[a];if(l===void 0&&(l=new Float32Array(a),qg[a]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Pc(s,e){let t=Yg[e];t===void 0&&(t=new Int32Array(e),Yg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function GT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function VT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function WT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function XT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;Jg.set(i),s.uniformMatrix2fv(this.addr,!1,Jg),hn(t,i)}}function $T(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;Kg.set(i),s.uniformMatrix3fv(this.addr,!1,Kg),hn(t,i)}}function qT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;jg.set(i),s.uniformMatrix4fv(this.addr,!1,jg),hn(t,i)}}function YT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function KT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function JT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function ZT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function QT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function Lc(s){return s.version===0&&(s.compareFunction=x_,s.needsUpdate=!0),s}function n1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?l=Lc(q_):l=$_,t.setTexture2D(e||l,a)}function i1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||K_,a)}function r1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Lc(Y_):l=J_,t.setTextureCube(e||l,a)}function s1(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||j_,a)}function a1(s){switch(s){case 5126:return GT;case 35664:return HT;case 35665:return VT;case 35666:return WT;case 35674:return XT;case 35675:return $T;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return KT;case 35669:case 35673:return JT;case 5125:return ZT;case 36294:return QT;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(s,e){s.uniform1fv(this.addr,e)}function l1(s,e){const t=ga(e,this.size,2);s.uniform2fv(this.addr,t)}function c1(s,e){const t=ga(e,this.size,3);s.uniform3fv(this.addr,t)}function u1(s,e){const t=ga(e,this.size,4);s.uniform4fv(this.addr,t)}function f1(s,e){const t=ga(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function d1(s,e){const t=ga(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function h1(s,e){const t=ga(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function p1(s,e){s.uniform1iv(this.addr,e)}function m1(s,e){s.uniform2iv(this.addr,e)}function g1(s,e){s.uniform3iv(this.addr,e)}function _1(s,e){s.uniform4iv(this.addr,e)}function v1(s,e){s.uniform1uiv(this.addr,e)}function S1(s,e){s.uniform2uiv(this.addr,e)}function x1(s,e){s.uniform3uiv(this.addr,e)}function y1(s,e){s.uniform4uiv(this.addr,e)}function M1(s,e,t){const i=this.cache,a=e.length,l=Pc(t,a);dn(i,l)||(s.uniform1iv(this.addr,l),hn(i,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Lc(q_):c=$_;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,l[f])}function E1(s,e,t){const i=this.cache,a=e.length,l=Pc(t,a);dn(i,l)||(s.uniform1iv(this.addr,l),hn(i,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||K_,l[c])}function T1(s,e,t){const i=this.cache,a=e.length,l=Pc(t,a);dn(i,l)||(s.uniform1iv(this.addr,l),hn(i,l));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Lc(Y_):c=J_;for(let f=0;f!==a;++f)t.setTextureCube(e[f]||c,l[f])}function C1(s,e,t){const i=this.cache,a=e.length,l=Pc(t,a);dn(i,l)||(s.uniform1iv(this.addr,l),hn(i,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||j_,l[c])}function R1(s){switch(s){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return S1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return C1}}class A1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a1(t.type)}}class w1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R1(t.type)}}class b1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],i)}}}const qf=/(\w+)(\])?(\[|\.)?/g;function Zg(s,e){s.seq.push(e),s.map[e.id]=e}function P1(s,e,t){const i=s.name,a=i.length;for(qf.lastIndex=0;;){const l=qf.exec(i),c=qf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===a){Zg(t,h===void 0?new A1(f,s,e):new w1(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new b1(f),Zg(t,g)),t=g}}}class gc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);P1(f,d,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Qg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const L1=37297;let D1=0;function I1(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const e0=new ft;function N1(s){xt._getMatrix(e0,xt.workingColorSpace,s);const e=`mat3( ${e0.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(s)){case Mc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function t0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+I1(s.getShaderSource(e),f)}else return l}function U1(s,e){const t=N1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const O1={[r_]:"Linear",[s_]:"Reinhard",[a_]:"Cineon",[ah]:"ACESFilmic",[l_]:"AgX",[c_]:"Neutral",[o_]:"Custom"};function F1(s,e){const t=O1[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new Z;function k1(){xt.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function z1(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G1(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function fo(s){return s!==""}function n0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function i0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(s){return s.replace(H1,V1)}function V1(s,e){const t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Jd(t)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(s){return s.replace(W1,X1)}function X1(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function s0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const $1={[uc]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function q1(s){return $1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y1={[vo]:"ENVMAP_MODE_REFRACTION"};function j1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Y1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K1={[i_]:"ENVMAP_BLENDING_MULTIPLY",[zx]:"ENVMAP_BLENDING_MIX",[Gx]:"ENVMAP_BLENDING_ADD"};function J1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":K1[s.combine]||"ENVMAP_BLENDING_NONE"}function Z1(s,e,t,i){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=q1(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",m=j1(t),g=J1(t),v=B1(t),S=z1(l),E=a.createProgram();let R,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(fo).join(`
`),R.length>0&&(R+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(fo).join(`
`),y.length>0&&(y+=`
`)):(R=[s0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),y=[s0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?pt.tonemapping_pars_fragment:"",t.toneMapping!==lr?F1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),k1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),c=Jd(c),c=n0(c,t),c=i0(c,t),f=Jd(f),f=n0(f,t),f=i0(f,t),c=r0(c),f=r0(f),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,R=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,y=["#define varying in",t.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=x+R+c,D=x+y+f,A=Qg(a,a.VERTEX_SHADER,b),I=Qg(a,a.FRAGMENT_SHADER,D);a.attachShader(E,A),a.attachShader(E,I),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function P(F){if(s.debug.checkShaderErrors){const W=a.getProgramInfoLog(E)||"",j=a.getShaderInfoLog(A)||"",oe=a.getShaderInfoLog(I)||"",z=W.trim(),re=j.trim(),ce=oe.trim();let Y=!0,J=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,A,I);else{const B=t0(a,A,"vertex"),$=t0(a,I,"fragment");wt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+B+`
`+$)}else z!==""?ot("WebGLProgram: Program Info Log:",z):(re===""||ce==="")&&(J=!1);J&&(F.diagnostics={runnable:Y,programLog:z,vertexShader:{log:re,prefix:R},fragmentShader:{log:ce,prefix:y}})}a.deleteShader(A),a.deleteShader(I),M=new gc(a,E),L=G1(a,E)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(E,L1)),V},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=I,this}let Q1=0;class eC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tC(e),t.set(e,i)),i}}class tC{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}}function nC(s){return s===ls||s===Sc||s===xc}function iC(s,e,t,i,a,l){const c=new R_,f=new eC,d=new Set,h=[],m=new Map,g=i.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return d.add(M),M===0?"uv":`uv${M}`}function E(M,L,V,F,W,j){const oe=F.fog,z=W.geometry,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,ce=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Y=e.get(M.envMap||re,ce),J=v[M.type];let B=i.precision;M.precision!==null&&(B=i.getMaxPrecision(M.precision),B!==M.precision&&ot("WebGLProgram.getParameters:",M.precision,"not supported, using",B,"instead."));const $=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,U=$!==void 0?$.length:0;let ne=0;z.morphAttributes.position!==void 0&&(ne=1),z.morphAttributes.normal!==void 0&&(ne=2),z.morphAttributes.color!==void 0&&(ne=3);let Le,ie,ge,Me;if(J){const Fe=Gi[J];Le=Fe.vertexShader,ie=Fe.fragmentShader}else{Le=M.vertexShader,ie=M.fragmentShader;const Fe=f.getVertexShaderStage(M),St=f.getFragmentShaderStage(M);f.update(M,Fe,St),ge=Fe.id,Me=St.id}const Ue=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,Mt=W.isBatchedMesh===!0,et=!!M.map,Tt=!!M.matcap,Ct=!!Y,ht=Ct&&Y.isPMREMTexture===!0,tn=!!M.aoMap,Yt=!!M.lightMap,pn=!!M.bumpMap&&M.wireframe===!1,Ut=!!M.normalMap,$n=!!M.displacementMap,zt=!!M.emissiveMap,on=!!M.metalnessMap,Cn=!!M.roughnessMap,Fn=M.anisotropy>0,q=M.clearcoat>0,kn=M.diffuseRoughness>0,It=M.dispersion>0,Dt=M.retroreflectivity>0,Ie=M.iridescence>0,jt=M.sheen>0,Qe=M.transmission>0,it=Fn&&!!M.anisotropyMap,N=q&&!!M.clearcoatMap,C=q&&!!M.clearcoatNormalMap,ee=q&&!!M.clearcoatRoughnessMap,ye=kn&&!!M.diffuseRoughnessMap,me=Ie&&!!M.iridescenceMap,Ae=Ie&&!!M.iridescenceThicknessMap,Pe=jt&&!!M.sheenColorMap,fe=jt&&!!M.sheenRoughnessMap,he=!!M.specularMap,Ce=!!M.specularColorMap,k=!!M.specularIntensityMap,pe=Qe&&!!M.transmissionMap,ue=Qe&&!!M.thicknessMap,be=!!M.gradientMap,Te=!!M.alphaMap,we=M.alphaTest>0,je=!!M.alphaHash,ut=!!M.extensions;let xe=lr;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Ze=ht?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,st={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Le,fragmentShader:ie,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:B,batching:Mt,batchingColor:Mt&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Tt,envMap:Ct,envMapMode:Ct&&Y.mapping,envMapPMREM:ht,envMapMaxLod:ht?Ze.length-1:null,envMapSize:ht?Ze[0].width:null,aoMap:tn,lightMap:Yt,bumpMap:pn,normalMap:Ut,displacementMap:$n,emissiveMap:zt,normalMapObjectSpace:Ut&&M.normalMapType===Wx,normalMapTangentSpace:Ut&&M.normalMapType===$d,packedNormalMap:Ut&&M.normalMapType===$d&&nC(M.normalMap.format),metalnessMap:on,roughnessMap:Cn,anisotropy:Fn,anisotropyMap:it,clearcoat:q,clearcoatMap:N,clearcoatNormalMap:C,clearcoatRoughnessMap:ee,diffuseRoughness:kn,diffuseRoughnessMap:ye,dispersion:It,retroreflection:Dt,iridescence:Ie,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:jt,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ce,specularIntensityMap:k,transmission:Qe,transmissionMap:pe,thicknessMap:ue,gradientMap:be,opaque:M.transparent===!1&&M.blending===ho&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:we,alphaHash:je,combine:M.combine,mapUv:et&&S(M.map.channel),aoMapUv:tn&&S(M.aoMap.channel),lightMapUv:Yt&&S(M.lightMap.channel),bumpMapUv:pn&&S(M.bumpMap.channel),normalMapUv:Ut&&S(M.normalMap.channel),displacementMapUv:$n&&S(M.displacementMap.channel),emissiveMapUv:zt&&S(M.emissiveMap.channel),metalnessMapUv:on&&S(M.metalnessMap.channel),roughnessMapUv:Cn&&S(M.roughnessMap.channel),anisotropyMapUv:it&&S(M.anisotropyMap.channel),clearcoatMapUv:N&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:C&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&S(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&S(M.diffuseRoughnessMap.channel),iridescenceMapUv:me&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&S(M.sheenRoughnessMap.channel),specularMapUv:he&&S(M.specularMap.channel),specularColorMapUv:Ce&&S(M.specularColorMap.channel),specularIntensityMapUv:k&&S(M.specularIntensityMap.channel),transmissionMapUv:pe&&S(M.transmissionMap.channel),thicknessMapUv:ue&&S(M.thicknessMap.channel),alphaMapUv:Te&&S(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ut||Fn),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(et||Te),fog:!!oe,useFog:M.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&Ut===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_e,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:j.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===Lt,decodeVideoTextureEmissive:zt&&M.emissiveMap.isVideoTexture===!0&&xt.getTransfer(M.emissiveMap.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ar,flipSided:M.side===ni,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ut&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&M.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=d.has(1),st.vertexUv2s=d.has(2),st.vertexUv3s=d.has(3),d.clear(),st}function R(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)L.push(V),L.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(y(L,M),x(L,M),L.push(s.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function y(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapPMREM),M.push(L.envMapMaxLod),M.push(L.envMapSize),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.diffuseRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.numSunLights),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numSunLightShadows),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.numLightProbeGrids),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function x(M,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.retroreflection&&c.enable(24),L.diffuseRoughness&&c.enable(25),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function b(M){const L=v[M.type];let V;if(L){const F=Gi[L];V=wy.clone(F.uniforms)}else V=M.uniforms;return V}function D(M,L){let V=m.get(L);return V!==void 0?++V.usedTimes:(V=new Z1(s,L,M,a),h.push(V),m.set(L,V)),V}function A(M){if(--M.usedTimes===0){const L=h.indexOf(M);h[L]=h[h.length-1],h.pop(),m.delete(M.cacheKey),M.destroy()}}function I(M){f.remove(M)}function P(){f.dispose()}return{getParameters:E,getProgramCacheKey:R,getUniforms:b,acquireProgram:D,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:P}}function rC(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function a(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:l}}function sC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function a0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function o0(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function c(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function f(v,S,E,R,y,x){let b=s[e];return b===void 0?(b={id:v.id,object:v,geometry:S,material:E,materialVariant:c(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:x},s[e]=b):(b.id=v.id,b.object=v,b.geometry=S,b.material=E,b.materialVariant=c(v),b.groupOrder=R,b.renderOrder=v.renderOrder,b.z=y,b.group=x),e++,b}function d(v,S,E,R,y,x,b){b.reversedDepth===!0&&(y=-y);const D=f(v,S,E,R,y,x);E.transmission>0?i.push(D):E.transparent===!0?a.push(D):t.push(D)}function h(v,S,E,R,y,x){const b=f(v,S,E,R,y,x);E.transmission>0?i.unshift(b):E.transparent===!0?a.unshift(b):t.unshift(b)}function m(v,S){t.length>1&&t.sort(v||sC),i.length>1&&i.sort(S||a0),a.length>1&&a.sort(S||a0)}function g(){for(let v=e,S=s.length;v<S;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:d,unshift:h,finish:g,sort:m}}function aC(){let s=new WeakMap;function e(i,a){const l=s.get(i);let c;return l===void 0?(c=new o0,s.set(i,[c])):a>=l.length?(c=new o0,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function oC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new mt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function lC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cC=0;function uC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fC(s){const e=new oC,t=lC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Z);const a=new Z,l=new Bt,c=new Bt;function f(h){let m=0,g=0,v=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let S=0,E=0,R=0,y=0,x=0,b=0,D=0,A=0,I=0,P=0,M=0,L=0,V=0,F=0;h.sort(uC);for(let j=0,oe=h.length;j<oe;j++){const z=h[j],re=z.color,ce=z.intensity,Y=z.distance;let J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ls?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=re.r*ce,g+=re.g*ce,v+=re.b*ce;else if(z.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(z.sh.coefficients[B],ce);F++}else if(z.isSunLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,U=t.get(z);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[E]=U,i.sunShadowMap[E]=J;const ne=$.getViewportCount();for(let Le=0;Le<ne;Le++)i.sunShadowMatrix[R+Le]=$.getMatrix(Le),i.sunShadowCascade[R+Le]=$._cascadeData[Le];R+=ne,E++}i.sun[S]=B,S++}else if(z.isDirectionalLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,U=t.get(z);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.directionalShadow[y]=U,i.directionalShadowMap[y]=J,i.directionalShadowMatrix[y]=z.shadow.matrix,I++}i.directional[y]=B,y++}else if(z.isSpotLight){const B=e.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(re).multiplyScalar(ce),B.distance=Y,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,i.spot[b]=B;const $=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,$.updateMatrices(z),z.castShadow&&V++),i.spotLightMatrix[b]=$.matrix,z.castShadow){const U=t.get(z);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.spotShadow[b]=U,i.spotShadowMap[b]=J,M++}b++}else if(z.isRectAreaLight){const B=e.get(z);B.color.copy(re).multiplyScalar(ce),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),i.rectArea[D]=B,D++}else if(z.isPointLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),B.distance=z.distance,B.decay=z.decay,z.castShadow){const $=z.shadow,U=t.get(z);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,U.shadowCameraNear=$.camera.near,U.shadowCameraFar=$.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=z.shadow.matrix,P++}i.point[x]=B,x++}else if(z.isHemisphereLight){const B=e.get(z);B.skyColor.copy(z.color).multiplyScalar(ce),B.groundColor.copy(z.groundColor).multiplyScalar(ce),i.hemi[A]=B,A++}}D>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const W=i.hash;(W.sunLength!==S||W.directionalLength!==y||W.pointLength!==x||W.spotLength!==b||W.rectAreaLength!==D||W.hemiLength!==A||W.numSunShadows!==E||W.numDirectionalShadows!==I||W.numPointShadows!==P||W.numSpotShadows!==M||W.numSpotMaps!==L||W.numLightProbes!==F)&&(i.sun.length=S,i.directional.length=y,i.spot.length=b,i.rectArea.length=D,i.point.length=x,i.hemi.length=A,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=R,i.sunShadowCascade.length=R,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=P,i.pointShadowMap.length=P,i.pointShadowMatrix.length=P,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+L-V,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=F,W.sunLength=S,W.directionalLength=y,W.pointLength=x,W.spotLength=b,W.rectAreaLength=D,W.hemiLength=A,W.numSunShadows=E,W.numDirectionalShadows=I,W.numPointShadows=P,W.numSpotShadows=M,W.numSpotMaps=L,W.numLightProbes=F,i.version=cC++)}function d(h,m){let g=0,v=0,S=0,E=0,R=0,y=0;const x=m.matrixWorldInverse;for(let b=0,D=h.length;b<D;b++){const A=h[b];if(A.isSunLight){const I=i.sun[g];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(x),g++}else if(A.isDirectionalLight){const I=i.directional[v];I.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(x),v++}else if(A.isSpotLight){const I=i.spot[E];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(x),I.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(x),E++}else if(A.isRectAreaLight){const I=i.rectArea[R];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(x),c.identity(),l.copy(A.matrixWorld),l.premultiply(x),c.extractRotation(l),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),R++}else if(A.isPointLight){const I=i.point[S];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(x),S++}else if(A.isHemisphereLight){const I=i.hemi[y];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(x),y++}}}return{setup:f,setupView:d,state:i}}function l0(s){const e=new fC(s),t=[],i=[],a=[];function l(g){m.camera=g,t.length=0,i.length=0,a.length=0}function c(g){g.isLightProbeGrid?a.push(g):t.push(g)}function f(g){i.push(g)}function d(){e.setup(t),a.sort((g,v)=>g.priority-v.priority||g.id-v.id)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:m,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:f}}function dC(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new l0(s),e.set(a,[f])):l>=c.length?(f=new l0(s),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const hC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
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
}`,mC=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],gC=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],c0=new Bt,lo=new Z,Yf=new Z;function _C(s,e,t){let i=new yo;const a=new ct,l=new ct,c=new en,f=new Dy,d=new Iy,h={},m=t.maxTextureSize,g={[os]:ni,[ni]:os,[ar]:ar},v=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:hC,fragmentShader:pC}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new xn(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let x=this.type;this.render=function(P,M,L){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===yx&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uc);const V=s.getRenderTarget(),F=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),j=s.state;j.setBlending(aa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const oe=x!==this.type;oe&&M.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(re=>re.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,re=P.length;z<re;z++){const ce=P[z],Y=ce.shadow;if(Y===void 0){ot("WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const J=Y.getFrameExtents();a.multiply(J),l.copy(Y.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/J.x),a.x=l.x*J.x,Y.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/J.y),a.y=l.y*J.y,Y.mapSize.y=l.y));const B=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=B,Y.map===null||oe===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===uo){if(ce.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Wi(a.x,a.y,{format:ls,type:$i,minFilter:ti,magFilter:ti,generateMipmaps:!1}),Y.map.texture.name=ce.name+".shadowMap",Y.map.depthTexture=new fa(a.x,a.y,Hi),Y.map.depthTexture.name=ce.name+".shadowMapDepth",Y.map.depthTexture.format=zr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn}else ce.isPointLight?(Y.map=new Rh(a.x),Y.map.depthTexture=new U_(a.x,Xi)):(Y.map=new Wi(a.x,a.y),Y.map.depthTexture=new fa(a.x,a.y,Xi)),Y.map.depthTexture.name=ce.name+".shadowMap",Y.map.depthTexture.format=zr,this.type===uc?(Y.map.depthTexture.compareFunction=B?S_:v_,Y.map.depthTexture.minFilter=ti,Y.map.depthTexture.magFilter=ti):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==a.x||Y.map.height!==a.y)&&Y.map.setSize(a.x,a.y);const $=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();ce.isPointLight!==!0&&Y.updateMatrices(ce,L);const U=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:L.layers;for(let ne=0;ne<$;ne++){const Le=Y.getCamera(ne);if(ce.isPointLight){const ie=Y.camera,ge=Y.matrix,Me=ce.distance||ie.far;Me!==ie.far&&(ie.far=Me,ie.updateProjectionMatrix()),lo.setFromMatrixPosition(ce.matrixWorld),ie.position.copy(lo),Yf.copy(ie.position),Yf.add(mC[ne]),ie.up.copy(gC[ne]),ie.lookAt(Yf),ie.updateMatrixWorld(),ge.makeTranslation(-lo.x,-lo.y,-lo.z),c0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(c0,ie.coordinateSystem,ie.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(Y.map),s.clear());const ie=Y.getViewport(ne);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),j.viewport(c)}i=Y.getFrustum(ne),A(M,L,Le,ce,U,this.type)}Y.isPointLightShadow!==!0&&this.type===uo&&b(Y,L),Y.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(V,F,W)};function b(P,M){const L=e.update(R);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null?P.mapPass=new Wi(a.x,a.y,{format:ls,type:$i}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value.set(P.map.width,P.map.height),v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(M,null,L,v,R,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value.set(P.map.width,P.map.height),S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(M,null,L,S,R,null)}function D(P,M,L,V){let F=null;const W=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(W!==void 0)F=W;else if(F=L.isPointLight===!0?d:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const j=F.uuid,oe=M.uuid;let z=h[j];z===void 0&&(z={},h[j]=z);let re=z[oe];re===void 0&&(re=F.clone(),z[oe]=re,M.addEventListener("dispose",I)),F=re}if(F.visible=M.visible,F.wireframe=M.wireframe,V===uo?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:g[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,L.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const j=s.properties.get(F);j.light=L}return F}function A(P,M,L,V,F,W){if(P.visible===!1)return;if(P.layers.test(F)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===uo)&&(!P.frustumCulled||P.intersectsFrustum(i))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const z=e.update(P),re=P.material;if(Array.isArray(re)){const ce=z.groups;for(let Y=0,J=ce.length;Y<J;Y++){const B=ce[Y],$=re[B.materialIndex];if($&&$.visible){const U=D(P,$,V,W);P.onBeforeShadow(s,P,M,L,z,U,B),s.renderBufferDirect(L,null,z,U,P,B),P.onAfterShadow(s,P,M,L,z,U,B)}}}else if(re.visible){const ce=D(P,re,V,W);P.onBeforeShadow(s,P,M,L,z,ce,null),s.renderBufferDirect(L,null,z,ce,P,null),P.onAfterShadow(s,P,M,L,z,ce,null)}}const oe=P.children;for(let z=0,re=oe.length;z<re;z++)A(oe[z],M,L,V,F,W)}function I(P){P.target.removeEventListener("dispose",I);for(const L in h){const V=h[L],F=P.target.uuid;F in V&&(V[F].dispose(),delete V[F])}}}function vC(s,e){function t(){let k=!1;const pe=new en;let ue=null;const be=new en(0,0,0,0);return{setMask:function(Te){ue!==Te&&!k&&(s.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){k=Te},setClear:function(Te,we,je,ut,xe){xe===!0&&(Te*=ut,we*=ut,je*=ut),pe.set(Te,we,je,ut),be.equals(pe)===!1&&(s.clearColor(Te,we,je,ut),be.copy(pe))},reset:function(){k=!1,ue=null,be.set(-1,0,0,0)}}}function i(){let k=!1,pe=!1,ue=null,be=null,Te=null;return{setReversed:function(we){if(pe!==we){const je=e.get("EXT_clip_control");we?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),pe=we;const ut=Te;Te=null,this.setClear(ut)}},getReversed:function(){return pe},setTest:function(we){we?_e(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(we){ue!==we&&!k&&(s.depthMask(we),ue=we)},setFunc:function(we){if(pe&&(we=ey[we]),be!==we){switch(we){case od:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case dd:s.depthFunc(s.GREATER);break;case hd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=we}},setLocked:function(we){k=we},setClear:function(we){Te!==we&&(Te=we,pe&&(we=1-we),s.clearDepth(we))},reset:function(){k=!1,ue=null,be=null,Te=null,pe=!1}}}function a(){let k=!1,pe=null,ue=null,be=null,Te=null,we=null,je=null,ut=null,xe=null;return{setTest:function(Ze){k||(Ze?_e(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Ze){pe!==Ze&&!k&&(s.stencilMask(Ze),pe=Ze)},setFunc:function(Ze,st,Fe){(ue!==Ze||be!==st||Te!==Fe)&&(s.stencilFunc(Ze,st,Fe),ue=Ze,be=st,Te=Fe)},setOp:function(Ze,st,Fe){(we!==Ze||je!==st||ut!==Fe)&&(s.stencilOp(Ze,st,Fe),we=Ze,je=st,ut=Fe)},setLocked:function(Ze){k=Ze},setClear:function(Ze){xe!==Ze&&(s.clearStencil(Ze),xe=Ze)},reset:function(){k=!1,pe=null,ue=null,be=null,Te=null,we=null,je=null,ut=null,xe=null}}}const l=new t,c=new i,f=new a;let d={};const h=new WeakMap;let m={},g={},v={},S=new WeakMap,E=[],R=null,y=!1,x=null,b=null,D=null,A=null,I=null,P=null,M=null,L=new mt(0,0,0),V=0,F=!1,W=null,j=null,oe=null,z=null,re=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=J>=2);let $=null,U={};const ne=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),ie=new en().fromArray(ne),ge=new en().fromArray(Le);function Me(k,pe,ue,be){const Te=new Uint8Array(4),we=s.createTexture();s.bindTexture(k,we),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<ue;je++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(pe+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return we}const Ue={};Ue[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),c.setFunc(_o),pn(!1),Ut(fg),_e(s.CULL_FACE),tn(aa);function _e(k){m[k]!==!0&&(s.enable(k),m[k]=!0)}function ze(k){m[k]!==!1&&(s.disable(k),m[k]=!1)}function Mt(k,pe){return v[k]!==pe?(s.bindFramebuffer(k,pe),v[k]=pe,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=pe),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function et(k,pe){let ue=E,be=!1;if(k){ue=S.get(pe),ue===void 0&&(ue=[],S.set(pe,ue));const Te=k.textures;if(ue.length!==Te.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let we=0,je=Te.length;we<je;we++)ue[we]=s.COLOR_ATTACHMENT0+we;ue.length=Te.length,be=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,be=!0);be&&s.drawBuffers(ue)}function Tt(k){return R!==k?(s.useProgram(k),R=k,!0):!1}const Ct={[ia]:s.FUNC_ADD,[Ex]:s.FUNC_SUBTRACT,[Tx]:s.FUNC_REVERSE_SUBTRACT};Ct[Cx]=s.MIN,Ct[Rx]=s.MAX;const ht={[Ax]:s.ZERO,[wx]:s.ONE,[bx]:s.SRC_COLOR,[t_]:s.SRC_ALPHA,[Ux]:s.SRC_ALPHA_SATURATE,[Ix]:s.DST_COLOR,[Lx]:s.DST_ALPHA,[Px]:s.ONE_MINUS_SRC_COLOR,[n_]:s.ONE_MINUS_SRC_ALPHA,[Nx]:s.ONE_MINUS_DST_COLOR,[Dx]:s.ONE_MINUS_DST_ALPHA,[Ox]:s.CONSTANT_COLOR,[Fx]:s.ONE_MINUS_CONSTANT_COLOR,[kx]:s.CONSTANT_ALPHA,[Bx]:s.ONE_MINUS_CONSTANT_ALPHA};function tn(k,pe,ue,be,Te,we,je,ut,xe,Ze){if(k===aa){y===!0&&(ze(s.BLEND),y=!1);return}if(y===!1&&(_e(s.BLEND),y=!0),k!==Mx){if(k!==x||Ze!==F){if((b!==ia||I!==ia)&&(s.blendEquation(s.FUNC_ADD),b=ia,I=ia),Ze)switch(k){case ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.ONE,s.ONE);break;case dg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",k);break}else switch(k){case ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dg:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",k);break}D=null,A=null,P=null,M=null,L.set(0,0,0),V=0,x=k,F=Ze}return}Te=Te||pe,we=we||ue,je=je||be,(pe!==b||Te!==I)&&(s.blendEquationSeparate(Ct[pe],Ct[Te]),b=pe,I=Te),(ue!==D||be!==A||we!==P||je!==M)&&(s.blendFuncSeparate(ht[ue],ht[be],ht[we],ht[je]),D=ue,A=be,P=we,M=je),(ut.equals(L)===!1||xe!==V)&&(s.blendColor(ut.r,ut.g,ut.b,xe),L.copy(ut),V=xe),x=k,F=!1}function Yt(k,pe){k.side===ar?ze(s.CULL_FACE):_e(s.CULL_FACE);let ue=k.side===ni;pe&&(ue=!ue),pn(ue),k.blending===ho&&k.transparent===!1?tn(aa):tn(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),l.setMask(k.colorWrite);const be=k.stencilWrite;f.setTest(be),be&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function pn(k){W!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),W=k)}function Ut(k){k!==Sx?(_e(s.CULL_FACE),k!==j&&(k===fg?s.cullFace(s.BACK):k===xx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),j=k}function $n(k){k!==oe&&(Y&&s.lineWidth(k),oe=k)}function zt(k,pe,ue){k?(_e(s.POLYGON_OFFSET_FILL),(z!==pe||re!==ue)&&(z=pe,re=ue,c.getReversed()&&(pe=-pe,ue=-ue),s.polygonOffset(pe,ue))):ze(s.POLYGON_OFFSET_FILL)}function on(k){k?_e(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Cn(k){k===void 0&&(k=s.TEXTURE0+ce-1),$!==k&&(s.activeTexture(k),$=k)}function Fn(k,pe,ue){ue===void 0&&($===null?ue=s.TEXTURE0+ce-1:ue=$);let be=U[ue];be===void 0&&(be={type:void 0,texture:void 0},U[ue]=be),(be.type!==k||be.texture!==pe)&&($!==ue&&(s.activeTexture(ue),$=ue),s.bindTexture(k,pe||Ue[k]),be.type=k,be.texture=pe)}function q(){const k=U[$];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function kn(){try{s.compressedTexImage2D(...arguments)}catch(k){wt("WebGLState:",k)}}function It(){try{s.compressedTexImage3D(...arguments)}catch(k){wt("WebGLState:",k)}}function Dt(){try{s.texSubImage2D(...arguments)}catch(k){wt("WebGLState:",k)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(k){wt("WebGLState:",k)}}function jt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){wt("WebGLState:",k)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){wt("WebGLState:",k)}}function it(){try{s.texStorage2D(...arguments)}catch(k){wt("WebGLState:",k)}}function N(){try{s.texStorage3D(...arguments)}catch(k){wt("WebGLState:",k)}}function C(){try{s.texImage2D(...arguments)}catch(k){wt("WebGLState:",k)}}function ee(){try{s.texImage3D(...arguments)}catch(k){wt("WebGLState:",k)}}function ye(k){return g[k]!==void 0?g[k]:s.getParameter(k)}function me(k,pe){g[k]!==pe&&(s.pixelStorei(k,pe),g[k]=pe)}function Ae(k){ie.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ie.copy(k))}function Pe(k){ge.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),ge.copy(k))}function fe(k,pe){let ue=h.get(pe);ue===void 0&&(ue=new WeakMap,h.set(pe,ue));let be=ue.get(k);be===void 0&&(be=s.getUniformBlockIndex(pe,k.name),s.uniformBlockBinding(pe,be,be),ue.set(k,be))}function he(k,pe,ue){const Te=h.get(pe).get(k);d[Te]!==ue&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,ue),d[Te]=ue)}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},g={},$=null,U={},v={},d={},S=new WeakMap,E=[],R=null,y=!1,x=null,b=null,D=null,A=null,I=null,P=null,M=null,L=new mt(0,0,0),V=0,F=!1,W=null,j=null,oe=null,z=null,re=null,ie.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:ze,bindFramebuffer:Mt,drawBuffers:et,useProgram:Tt,setBlending:tn,setMaterial:Yt,setFlipSided:pn,setCullFace:Ut,setLineWidth:$n,setPolygonOffset:zt,setScissorTest:on,activeTexture:Cn,bindTexture:Fn,unbindTexture:q,compressedTexImage2D:kn,compressedTexImage3D:It,texImage2D:C,texImage3D:ee,pixelStorei:me,getParameter:ye,updateUBOMapping:fe,uniformBlockBinding:he,texStorage2D:it,texStorage3D:N,texSubImage2D:Dt,texSubImage3D:Ie,compressedTexSubImage2D:jt,compressedTexSubImage3D:Qe,scissor:Ae,viewport:Pe,reset:Ce}}function SC(s,e,t,i,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,m=new WeakMap,g=new Set;let v;const S=new WeakMap,E=new Set,R=new FinalizationRegistry(N=>E.delete(N));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,C){return y?new OffscreenCanvas(N,C):Ec("canvas")}function b(N,C,ee){let ye=1;const me=it(N);if((me.width>ee||me.height>ee)&&(ye=ee/Math.max(me.width,me.height)),ye<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ae=Math.floor(ye*me.width),Pe=Math.floor(ye*me.height);v===void 0&&(v=x(Ae,Pe));const fe=C?x(Ae,Pe):v;return fe.width=Ae,fe.height=Pe,fe.getContext("2d").drawImage(N,0,0,Ae,Pe),ot("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ae+"x"+Pe+")."),fe}else return"data"in N&&ot("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function D(N){return N.generateMipmaps}function A(N){s.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,C,ee,ye,me,Ae=!1){if(N!==null){if(s[N]!==void 0)return s[N];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pe;ye&&(Pe=e.get("EXT_texture_norm16"),Pe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=C;if(C===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),C===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),C===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),C===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),C===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),C===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),C===s.RGB&&(ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),C===s.RGBA){const he=Ae?Mc:xt.getTransfer(me);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=he===Lt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(N,C){let ee;return N?C===null||C===Xi||C===ua?ee=s.DEPTH24_STENCIL8:C===Hi?ee=s.DEPTH32F_STENCIL8:C===So&&(ee=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Xi||C===ua?ee=s.DEPTH_COMPONENT24:C===Hi?ee=s.DEPTH_COMPONENT32F:C===So&&(ee=s.DEPTH_COMPONENT16),ee}function L(N,C){return D(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tn&&N.minFilter!==ti?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function V(N){const C=new WeakRef(N);i.get(N).__ref=C,E.add(C),R.register(N,C,C)}function F(N){const C=i.get(N).__ref;C!==void 0&&(E.delete(C),R.unregister(C))}function W(N){oe(N.target)}function j(N){z(N.target)}function oe(N){N.removeEventListener("dispose",W),F(N),ce(N),N.isVideoTexture&&m.delete(N),N.isHTMLTexture&&g.delete(N)}function z(N){N.removeEventListener("dispose",j),F(N),J(N)}function re(){for(const N of E){const C=N.deref();C!==void 0&&(C.isRenderTarget===!0?z(C):oe(C))}E.clear(),g.clear()}function ce(N){const C=i.get(N);if(C.__webglInit===void 0)return;const ee=N.source,ye=S.get(ee);if(ye){const me=ye[C.__cacheKey];me.usedTimes--,me.usedTimes===0&&Y(N),Object.keys(ye).length===0&&S.delete(ee)}i.remove(N)}function Y(N){const C=i.get(N);s.deleteTexture(C.__webglTexture);const ee=N.source,ye=S.get(ee);delete ye[C.__cacheKey],c.memory.textures--}function J(N){const C=i.get(N);C.__depthDisposeCallback&&C.__depthDisposeCallback();const ee=N.depthTexture;if(ee&&ee.renderTarget===N&&oe(ee),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let Ae=0;Ae<C.__webglFramebuffer[me].length;Ae++)s.deleteFramebuffer(C.__webglFramebuffer[me][Ae]);else s.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)s.deleteFramebuffer(C.__webglFramebuffer[me]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ye=N.textures;for(let me=0,Ae=ye.length;me<Ae;me++){const Pe=i.get(ye[me]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),c.memory.textures--),i.remove(ye[me])}i.remove(N)}let B=0;function $(){B=0}function U(){return B}function ne(N){B=N}function Le(){const N=B;return N>=a.maxTextures&&ot("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,N}function ie(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.mipmapsAutoUpdate),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function ge(N,C){const ee=i.get(N);if(N.isVideoTexture&&jt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const ye=N.image;if(ye===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(ee,N,C);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+C)}function Me(N,C){const ee=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Yt(ee,N,C);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+C)}function Ue(N,C){const ee=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Yt(ee,N,C);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+C)}function _e(N,C){const ee=i.get(N);if(N.version>0&&ee.__version!==N.version){pn(ee,N,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+C)}const ze={[pd]:s.REPEAT,[or]:s.CLAMP_TO_EDGE,[md]:s.MIRRORED_REPEAT},Mt={[Tn]:s.NEAREST,[Hx]:s.NEAREST_MIPMAP_NEAREST,[Pl]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[xf]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},et={[$x]:s.NEVER,[x_]:s.ALWAYS,[qx]:s.LESS,[v_]:s.LEQUAL,[Yx]:s.EQUAL,[S_]:s.GEQUAL,[jx]:s.GREATER,[Kx]:s.NOTEQUAL};function Tt(N,C){if(C.type===Hi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ti||C.magFilter===xf||C.magFilter===Pl||C.magFilter===Fr||C.minFilter===ti||C.minFilter===xf||C.minFilter===Pl||C.minFilter===Fr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ze[C.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ze[C.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ze[C.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Mt[C.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Mt[C.minFilter]),C.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,et[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Tn||C.minFilter!==Pl&&C.minFilter!==Fr||C.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ct(N,C){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",W),V(C));const ye=C.source;let me=S.get(ye);me===void 0&&(me={},S.set(ye,me));const Ae=ie(C);if(Ae!==N.__cacheKey){me[Ae]===void 0&&(me[Ae]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),me[Ae].usedTimes++;const Pe=me[N.__cacheKey];Pe!==void 0&&(me[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&Y(C)),N.__cacheKey=Ae,N.__webglTexture=me[Ae].texture}return ee}function ht(N,C,ee){return Math.floor(Math.floor(N/ee)/C)}function tn(N,C,ee,ye){const Ae=N.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,ee,ye,C.data);else{Ae.sort((k,pe)=>k.start-pe.start);let Pe=0;for(let k=1;k<Ae.length;k++){const pe=Ae[Pe],ue=Ae[k],be=pe.start+pe.count,Te=ht(ue.start,C.width,4),we=ht(pe.start,C.width,4);ue.start<=be+1&&Te===we&&ht(ue.start+ue.count-1,C.width,4)===Te?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++Pe,Ae[Pe]=ue)}Ae.length=Pe+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),he=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let k=0,pe=Ae.length;k<pe;k++){const ue=Ae[k],be=Math.floor(ue.start/4),Te=Math.ceil(ue.count/4),we=be%C.width,je=Math.floor(be/C.width),ut=Te,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,je),t.texSubImage2D(s.TEXTURE_2D,0,we,je,ut,xe,ee,ye,C.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function Yt(N,C,ee){let ye=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ye=s.TEXTURE_3D);const me=Ct(N,C),Ae=C.source;t.bindTexture(ye,N.__webglTexture,s.TEXTURE0+ee);const Pe=i.get(Ae);if(Ae.version!==Pe.__version||me===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const xe=xt.getPrimaries(xt.workingColorSpace),Ze=C.colorSpace===Ur?null:xt.getPrimaries(C.colorSpace),st=C.colorSpace===Ur||xe===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment);let he=b(C.image,!1,a.maxTextureSize);he=Qe(C,he);const Ce=l.convert(C.format,C.colorSpace),k=l.convert(C.type);let pe=P(C.internalFormat,Ce,k,C.normalized,C.colorSpace,C.isVideoTexture);Tt(ye,C);let ue;const be=C.mipmaps,Te=C.isVideoTexture!==!0,we=Pe.__version===void 0||me===!0,je=Ae.dataReady,ut=L(C,he);if(C.isDepthTexture)pe=M(C.format===kr,C.type),we&&(Te?t.texStorage2D(s.TEXTURE_2D,1,pe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,pe,he.width,he.height,0,Ce,k,null));else if(C.isDataTexture)if(be.length>0){Te&&we&&t.texStorage2D(s.TEXTURE_2D,ut,pe,be[0].width,be[0].height);for(let xe=0,Ze=be.length;xe<Ze;xe++)ue=be[xe],Te?je&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ue.width,ue.height,Ce,k,ue.data):t.texImage2D(s.TEXTURE_2D,xe,pe,ue.width,ue.height,0,Ce,k,ue.data);C.generateMipmaps=!1}else Te?(we&&t.texStorage2D(s.TEXTURE_2D,ut,pe,he.width,he.height),je&&tn(C,he,Ce,k)):t.texImage2D(s.TEXTURE_2D,0,pe,he.width,he.height,0,Ce,k,he.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Te&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,pe,be[0].width,be[0].height,he.depth);for(let xe=0,Ze=be.length;xe<Ze;xe++)if(ue=be[xe],C.format!==Vi)if(Ce!==null)if(Te){if(je)if(C.layerUpdates.size>0){const st=Hg(ue.width,ue.height,C.format,C.type);for(const Fe of C.layerUpdates){const St=ue.data.subarray(Fe*st/ue.data.BYTES_PER_ELEMENT,(Fe+1)*st/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Fe,ue.width,ue.height,1,Ce,St)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,ue.width,ue.height,he.depth,Ce,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,pe,ue.width,ue.height,he.depth,0,ue.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?je&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,ue.width,ue.height,he.depth,Ce,k,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,pe,ue.width,ue.height,he.depth,0,Ce,k,ue.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Te&&we&&t.texStorage2D(s.TEXTURE_2D,ut,pe,be[0].width,be[0].height);for(let xe=0,Ze=be.length;xe<Ze;xe++)ue=be[xe],C.format!==Vi?Ce!==null?Te?je&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,ue.width,ue.height,Ce,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,pe,ue.width,ue.height,0,ue.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?je&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ue.width,ue.height,Ce,k,ue.data):t.texImage2D(s.TEXTURE_2D,xe,pe,ue.width,ue.height,0,Ce,k,ue.data)}else if(C.isDataArrayTexture)if(Te){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,pe,he.width,he.height,he.depth),je)if(C.layerUpdates.size>0){const xe=Hg(he.width,he.height,C.format,C.type);for(const Ze of C.layerUpdates){const st=he.data.subarray(Ze*xe/he.data.BYTES_PER_ELEMENT,(Ze+1)*xe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ze,he.width,he.height,1,Ce,k,st)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,k,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,he.width,he.height,he.depth,0,Ce,k,he.data);else if(C.isData3DTexture)Te?(we&&t.texStorage3D(s.TEXTURE_3D,ut,pe,he.width,he.height,he.depth),je&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,k,he.data)):t.texImage3D(s.TEXTURE_3D,0,pe,he.width,he.height,he.depth,0,Ce,k,he.data);else if(C.isFramebufferTexture){if(we)if(Te)t.texStorage2D(s.TEXTURE_2D,ut,pe,he.width,he.height);else{let xe=he.width,Ze=he.height;for(let st=0;st<ut;st++)t.texImage2D(s.TEXTURE_2D,st,pe,xe,Ze,0,Ce,k,null),xe>>=1,Ze>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),he.parentNode!==xe){xe.appendChild(he),g.add(C),xe.onpaint=Ze=>{const st=Ze.changedElements;for(const Fe of g)st.includes(Fe.image)&&(Fe.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const st=s.RGBA,Fe=s.RGBA,St=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,st,Fe,St,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(be.length>0){if(Te&&we){const xe=it(be[0]);t.texStorage2D(s.TEXTURE_2D,ut,pe,xe.width,xe.height)}for(let xe=0,Ze=be.length;xe<Ze;xe++)ue=be[xe],Te?je&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce,k,ue):t.texImage2D(s.TEXTURE_2D,xe,pe,Ce,k,ue);C.generateMipmaps=!1}else if(Te){if(we){const xe=it(he);t.texStorage2D(s.TEXTURE_2D,ut,pe,xe.width,xe.height)}je&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,k,he)}else t.texImage2D(s.TEXTURE_2D,0,pe,Ce,k,he);D(C)&&C.mipmapsAutoUpdate===!0&&A(ye),Pe.__version=Ae.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function pn(N,C,ee){if(C.image.length!==6)return;const ye=Ct(N,C),me=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const Ae=i.get(me);if(me.version!==Ae.__version||ye===!0){t.activeTexture(s.TEXTURE0+ee);const Pe=xt.getPrimaries(xt.workingColorSpace),fe=C.colorSpace===Ur?null:xt.getPrimaries(C.colorSpace),he=C.colorSpace===Ur||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ce=C.isCompressedTexture||C.image[0].isCompressedTexture,k=C.image[0]&&C.image[0].isDataTexture,pe=[];for(let Fe=0;Fe<6;Fe++)!Ce&&!k?pe[Fe]=b(C.image[Fe],!0,a.maxCubemapSize):pe[Fe]=k?C.image[Fe].image:C.image[Fe],pe[Fe]=Qe(C,pe[Fe]);const ue=pe[0],be=l.convert(C.format,C.colorSpace),Te=l.convert(C.type);let we=P(C.internalFormat,be,Te,C.normalized,C.colorSpace);const je=C.isVideoTexture!==!0,ut=Ae.__version===void 0||ye===!0,xe=me.dataReady;let Ze=L(C,ue);Tt(s.TEXTURE_CUBE_MAP,C);let st;if(C.isDepthTexture){if(we=M(C.format===kr,C.type),ut)if(je)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,we,ue.width,ue.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,we,ue.width,ue.height,0,be,Te,null)}else if(Ce){je&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,we,ue.width,ue.height);for(let Fe=0;Fe<6;Fe++){st=pe[Fe].mipmaps;for(let St=0;St<st.length;St++){const Xt=st[St];C.format!==Vi?be!==null?je?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,0,0,Xt.width,Xt.height,be,Xt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,we,Xt.width,Xt.height,0,Xt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,0,0,Xt.width,Xt.height,be,Te,Xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St,we,Xt.width,Xt.height,0,be,Te,Xt.data)}}}else{if(st=C.mipmaps,je&&ut){st.length>0&&Ze++;const Fe=it(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,we,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(k){je?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,pe[Fe].width,pe[Fe].height,be,Te,pe[Fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,we,pe[Fe].width,pe[Fe].height,0,be,Te,pe[Fe].data);for(let St=0;St<st.length;St++){const ii=st[St].image[Fe].image;je?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,0,0,ii.width,ii.height,be,Te,ii.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,we,ii.width,ii.height,0,be,Te,ii.data)}}else{je?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,be,Te,pe[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,we,be,Te,pe[Fe]);for(let St=0;St<st.length;St++){const Xt=st[St];je?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,0,0,be,Te,Xt.image[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,St+1,we,be,Te,Xt.image[Fe])}}}D(C)&&C.mipmapsAutoUpdate===!0&&A(s.TEXTURE_CUBE_MAP),Ae.__version=me.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Ut(N,C,ee,ye,me,Ae){const Pe=l.convert(ee.format,ee.colorSpace),fe=l.convert(ee.type),he=P(ee.internalFormat,Pe,fe,ee.normalized,ee.colorSpace),Ce=i.get(C),k=i.get(ee);if(k.__renderTarget=C,!Ce.__hasExternalTextures){const pe=Math.max(1,C.width>>Ae),ue=Math.max(1,C.height>>Ae);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Ae,he,pe,ue,C.depth,0,Pe,fe,null):t.texImage2D(me,Ae,he,pe,ue,0,Pe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Ie(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,me,k.__webglTexture,0,Dt(C)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,me,k.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $n(N,C,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),C.depthBuffer){const ye=C.depthTexture,me=ye&&ye.isDepthTexture?ye.type:null,Ae=M(C.stencilBuffer,me),Pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(C),Ae,C.width,C.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(C),Ae,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,N)}else{const ye=C.textures;for(let me=0;me<ye.length;me++){const Ae=ye[me],Pe=l.convert(Ae.format,Ae.colorSpace),fe=l.convert(Ae.type),he=P(Ae.internalFormat,Pe,fe,Ae.normalized,Ae.colorSpace);Ie(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(C),he,C.width,C.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(C),he,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,he,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(N,C,ee){const ye=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=i.get(C.depthTexture);me.__renderTarget=C;const Ae=ye?C.depthTexture.image[0]:C.depthTexture.image;(!me.__webglTexture||Ae.width!==C.width||Ae.height!==C.height)&&(Ae.width=C.width,Ae.height=C.height,C.depthTexture.needsUpdate=!0),ye?_e(C.depthTexture,0):ge(C.depthTexture,0);const Pe=me.__webglTexture,fe=Dt(C),he=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,Ce=C.depthTexture.format===kr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===zr)Ie(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,he,Pe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,he,Pe,0);else if(C.depthTexture.format===kr)Ie(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,he,Pe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,he,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(N){const C=i.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const ye=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ye){const me=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ye.removeEventListener("dispose",me)};ye.addEventListener("dispose",me),C.__depthDisposeCallback=me}C.__boundDepthTexture=ye}if(N.depthTexture&&!C.__autoAllocateDepthBuffer)if(ee)for(let ye=0;ye<6;ye++)zt(C.__webglFramebuffer[ye],N,ye);else N.texture.mipmaps.length>0?zt(C.__webglFramebuffer[0],N,0):zt(C.__webglFramebuffer,N,0);else if(ee){C.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ye]),C.__webglDepthbuffer[ye]===void 0)C.__webglDepthbuffer[ye]=s.createRenderbuffer(),$n(C.__webglDepthbuffer[ye],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=C.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ae)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),$n(C.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ae)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Cn(N,C,ee){const ye=i.get(N);C!==void 0&&Ut(ye.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&on(N)}function Fn(N){const C=N.texture,ee=i.get(N),ye=i.get(C);N.addEventListener("dispose",j),V(N);const me=N.textures,Ae=N.isWebGLCubeRenderTarget===!0,Pe=me.length>1;if(Pe||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=C.version,c.memory.textures++),Ae){ee.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(C.mipmaps.length>0){ee.__webglFramebuffer[fe]=[];for(let he=0;he<C.mipmaps.length;he++)ee.__webglFramebuffer[fe][he]=s.createFramebuffer()}else ee.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(C.mipmaps.length>0){ee.__webglFramebuffer=[];for(let fe=0;fe<C.mipmaps.length;fe++)ee.__webglFramebuffer[fe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,he=me.length;fe<he;fe++){const Ce=i.get(me[fe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),c.memory.textures++)}if(N.samples>0&&Ie(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let fe=0;fe<me.length;fe++){const he=me[fe];ee.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe]);const Ce=l.convert(he.format,he.colorSpace),k=l.convert(he.type),pe=P(he.internalFormat,Ce,k,he.normalized,he.colorSpace,N.isXRRenderTarget===!0),ue=Dt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,pe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),$n(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,C);for(let fe=0;fe<6;fe++)if(C.mipmaps.length>0)for(let he=0;he<C.mipmaps.length;he++)Ut(ee.__webglFramebuffer[fe][he],N,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Ut(ee.__webglFramebuffer[fe],N,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);D(C)?A(s.TEXTURE_CUBE_MAP):C.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let fe=0,he=me.length;fe<he;fe++){const Ce=me[fe],k=i.get(Ce);let pe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,k.__webglTexture),Tt(pe,Ce),Ut(ee.__webglFramebuffer,N,Ce,s.COLOR_ATTACHMENT0+fe,pe,0),D(Ce)&&A(pe)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,ye.__webglTexture),Tt(fe,C),C.mipmaps.length>0)for(let he=0;he<C.mipmaps.length;he++)Ut(ee.__webglFramebuffer[he],N,C,s.COLOR_ATTACHMENT0,fe,he);else Ut(ee.__webglFramebuffer,N,C,s.COLOR_ATTACHMENT0,fe,0);D(C)?A(fe):C.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&on(N)}function q(N){const C=N.textures;for(let ee=0,ye=C.length;ee<ye;ee++){const me=C[ee];if(D(me)&&me.mipmapsAutoUpdate===!0){const Ae=I(N),Pe=i.get(me).__webglTexture;t.bindTexture(Ae,Pe),A(Ae),t.unbindTexture()}}}const kn=[];function It(N){if(N.samples>0){if(Ie(N)===!1){const C=N.textures,ee=N.width,ye=N.height;let me=s.COLOR_BUFFER_BIT;const Ae=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=i.get(N),fe=C.length>1;if(fe)for(let Ce=0;Ce<C.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<C.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const k=i.get(C[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,ee,ye,0,0,ee,ye,me,s.NEAREST),d===!0&&(kn.length=0,kn.push(s.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&kn.push(Ae),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<C.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const k=i.get(C[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&d){const C=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Dt(N){return Math.min(a.maxSamples,N.samples)}function Ie(N){const C=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function jt(N){const C=c.render.frame;m.get(N)!==C&&(m.set(N,C),N.update())}function Qe(N,C){const ee=N.colorSpace,ye=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==yc&&ee!==Ur&&(xt.getTransfer(ee)===Lt?(ye!==Vi||me!==ui)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",ee)),C}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Le,this.resetTextureUnits=$,this.getTextureUnits=U,this.setTextureUnits=ne,this.setTexture2D=ge,this.setTexture2DArray=Me,this.setTexture3D=Ue,this.setTextureCube=_e,this.rebindTextures=Cn,this.setupRenderTarget=Fn,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ie,this.dispose=re}function xC(s,e){function t(i,a=Ur){let l;const c=xt.getTransfer(a);if(i===ui)return s.UNSIGNED_BYTE;if(i===lh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return s.UNSIGNED_SHORT_5_5_5_1;if(i===h_)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===p_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===f_)return s.BYTE;if(i===d_)return s.SHORT;if(i===So)return s.UNSIGNED_SHORT;if(i===oh)return s.INT;if(i===Xi)return s.UNSIGNED_INT;if(i===Hi)return s.FLOAT;if(i===$i)return s.HALF_FLOAT;if(i===m_)return s.ALPHA;if(i===g_)return s.RGB;if(i===Vi)return s.RGBA;if(i===zr)return s.DEPTH_COMPONENT;if(i===kr)return s.DEPTH_STENCIL;if(i===__)return s.RED;if(i===uh)return s.RED_INTEGER;if(i===ls)return s.RG;if(i===fh)return s.RG_INTEGER;if(i===dh)return s.RGBA_INTEGER;if(i===fc||i===dc||i===hc||i===pc)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===fc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===fc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===_d||i===vd||i===Sd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===gd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xd||i===yd||i===Md||i===Ed||i===Td||i===Sc||i===Cd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===xd||i===yd)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Md)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ed)return l.COMPRESSED_R11_EAC;if(i===Td)return l.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return l.COMPRESSED_RG11_EAC;if(i===Cd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rd||i===Ad||i===wd||i===bd||i===Pd||i===Ld||i===Dd||i===Id||i===Nd||i===Ud||i===Od||i===Fd||i===kd||i===Bd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Rd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zd||i===Gd||i===Hd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===zd)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vd||i===Wd||i===xc||i===Xd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Vd)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const yC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
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

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new O_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:yC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends hs{constructor(e,t){super();const i=this;let a=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",y=new EC,x={},b=t.getContextAttributes();let D=null,A=null;const I=[],P=[],M=new ct;let L=null,V=null;const F=new ei;F.viewport=new en;const W=new ei;W.viewport=new en;const j=[F,W],oe=new Oy;let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ge=I[ie];return ge===void 0&&(ge=new bf,I[ie]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ie){let ge=I[ie];return ge===void 0&&(ge=new bf,I[ie]=ge),ge.getGripSpace()},this.getHand=function(ie){let ge=I[ie];return ge===void 0&&(ge=new bf,I[ie]=ge),ge.getHandSpace()};function ce(ie){const ge=P.indexOf(ie.inputSource);if(ge===-1)return;const Me=I[ge];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,h||c),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Y(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",J);for(let ie=0;ie<I.length;ie++){const ge=P[ie];ge!==null&&(P[ie]=null,I[ie].disconnect(ge))}z=null,re=null,y.reset();for(const ie in x)delete x[ie];if(e.setRenderTarget(D),S=null,v=null,g=null,a=null,A=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(M.width,M.height,!1),V!==null){const ie=V.camera;ie.fov=V.fov,ie.zoom=V.zoom,ie.updateProjectionMatrix(),V=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(M),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,_e=null;b.depth&&(_e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?kr:zr,Ue=b.stencil?ua:Xi);const ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(ze),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Wi(v.textureWidth,v.textureHeight,{format:Vi,type:ui,depthTexture:new fa(v.textureWidth,v.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Wi(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(f),Le.setContext(a),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(ie){for(let ge=0;ge<ie.removed.length;ge++){const Me=ie.removed[ge],Ue=P.indexOf(Me);Ue>=0&&(P[Ue]=null,I[Ue].disconnect(Me))}for(let ge=0;ge<ie.added.length;ge++){const Me=ie.added[ge];let Ue=P.indexOf(Me);if(Ue===-1){for(let ze=0;ze<I.length;ze++)if(ze>=P.length){P.push(Me),Ue=ze;break}else if(P[ze]===null){P[ze]=Me,Ue=ze;break}if(Ue===-1)break}const _e=I[Ue];_e&&_e.connect(Me)}}function B(ie,ge){ge===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ge.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let ge=ie.near,Me=ie.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),oe.near=W.near=F.near=ge,oe.far=W.far=F.far=Me,(z!==oe.near||re!==oe.far)&&(a.updateRenderState({depthNear:oe.near,depthFar:oe.far}),z=oe.near,re=oe.far),oe.layers.mask=ie.layers.mask|6,F.layers.mask=oe.layers.mask&-5,W.layers.mask=oe.layers.mask&-3;const Ue=ie.parent,_e=oe.cameras;B(oe,Ue);for(let ze=0;ze<_e.length;ze++)B(_e[ze],Ue);oe.projectionMatrix.copy(F.projectionMatrix),oe.projectionMatrixInverse.copy(F.projectionMatrixInverse),V===null&&ie.isPerspectiveCamera&&(V={camera:ie,fov:ie.fov,zoom:ie.zoom}),$(ie,oe,Ue)};function $(ie,ge,Me){Me===null?ie.matrix.copy(ge.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ge.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=qd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(ie){d=ie,v!==null&&(v.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(oe)},this.getCameraTexture=function(ie){return x[ie]};let U=null;function ne(ie,ge){if(m=ge.getViewerPose(h||c),E=ge,m!==null){const Me=m.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let Ue=!1;Me.length!==oe.cameras.length&&(oe.cameras.length=0,Ue=!0);for(let et=0;et<Me.length;et++){const Tt=Me[et];let Ct=null;if(S!==null)Ct=S.getViewport(Tt);else{const tn=g.getViewSubImage(v,Tt);Ct=tn.viewport,et===0&&(e.setRenderTargetTextures(A,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(A))}let ht=j[et];ht===void 0&&(ht=new ei,ht.layers.enable(et),ht.viewport=new en,j[et]=ht),ht.matrix.fromArray(Tt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),et===0&&(oe.matrix.copy(ht.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),Ue===!0&&oe.cameras.push(ht)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){g=i.getBinding();const et=g.getDepthInformation(Me[0]);et&&et.isValid&&et.texture&&y.init(et,a.renderState)}if(_e&&_e.includes("camera-access")&&R){e.state.unbindTexture(),g=i.getBinding();for(let et=0;et<Me.length;et++){const Tt=Me[et].camera;if(Tt){let Ct=x[Tt];Ct||(Ct=new O_,x[Tt]=Ct);const ht=g.getCameraImage(Tt);Ct.sourceTexture=ht}}}}for(let Me=0;Me<I.length;Me++){const Ue=P[Me],_e=I[Me];Ue!==null&&_e!==void 0&&_e.update(Ue,ge,h||c)}U&&U(ie,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Le=new H_;Le.setAnimationLoop(ne),this.setAnimationLoop=function(ie){U=ie},this.dispose=function(){}}}const CC=new Bt,Z_=new ft;Z_.set(-1,0,0,0,1,0,0,0,1);function RC(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,F_(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,b,D,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,A)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),R(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,b,D):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ni&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ni&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const b=e.get(x),D=b.envMap,A=b.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(CC.makeRotationFromEuler(A)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Z_),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,b,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*b,y.scale.value=D*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,b){y.ior.value=x.ior,x.diffuseRoughness>0&&(y.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const b=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function AC(s,e,t,i){let a={},l={};function c(b,D){const A=D.program;i.uniformBlockBinding(b,A,a[b.id])}function f(b,D){let A=a[b.id];A===void 0&&(E(b),A=d(b),a[b.id]=A,b.addEventListener("dispose",y));const I=D.program;i.updateUBOMapping(b,I);const P=e.render.frame;l[b.id]!==P&&(h(b),l[b.id]=P)}function d(b){const D=s.createBuffer(),A=b.__size,I=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,A,I),s.bindBuffer(s.UNIFORM_BUFFER,null),D}function h(b){const D=a[b.id],A=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let P=0,M=A.length;P<M;P++){const L=A[P];if(Array.isArray(L))for(let V=0,F=L.length;V<F;V++)m(L[V],P,V,I);else m(L,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,D,A,I){if(v(b,D,A,I)===!0){const P=b.__offset,M=b.value;if(Array.isArray(M)){let L=0;for(let V=0;V<M.length;V++){const F=M[V],W=R(F,!0);g(F,b.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else g(M,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,b.__data)}}function g(b,D,A){typeof b=="number"||typeof b=="boolean"?D[A]=b:b.isMatrix3?(D[A]=b.elements[0],D[A+1]=b.elements[1],D[A+2]=b.elements[2],D[A+3]=0,D[A+4]=b.elements[3],D[A+5]=b.elements[4],D[A+6]=b.elements[5],D[A+7]=0,D[A+8]=b.elements[6],D[A+9]=b.elements[7],D[A+10]=b.elements[8],D[A+11]=0):ArrayBuffer.isView(b)?D.set(b.subarray(0,D.length-A),A):b.toArray(D,A)}function v(b,D,A,I){const P=b.value,M=D+"_"+A;if(Array.isArray(P)){I[M]===void 0&&(I[M]=[]);const L=I[M];let V=!1;for(let F=0;F<P.length;F++)S(P[F],L,F)===!0&&(V=!0);return V}return S(P,I,M)}function S(b,D,A){if(D[A]===void 0)return typeof b=="number"||typeof b=="boolean"?D[A]=b:ArrayBuffer.isView(b)?D[A]=b.slice():D[A]=b.clone(),!0;{const I=D[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return D[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function E(b){const D=b.uniforms;let A=0;const I=16;for(let M=0,L=D.length;M<L;M++){const V=Array.isArray(D[M])?D[M]:[D[M]];for(let F=0,W=V.length;F<W;F++){const j=V[F],oe=Array.isArray(j.value)?j.value:[j.value],z=Array.isArray(D[M])||Array.isArray(j.value);let re=A;for(let Y=0,J=oe.length;Y<J;Y++){const B=oe[Y],$=R(B,z),U=A%I,ne=U%$.boundary,Le=U+ne;A+=ne,Le!==0&&I-Le<$.storage&&(A+=I-Le),Y===0&&(re=A),A+=$.storage}const ce=j.type==="int"?Int32Array:j.type==="uint"?Uint32Array:Float32Array;j.__data=new ce((A-re)/Float32Array.BYTES_PER_ELEMENT),j.__offset=re}}const P=A%I;return P>0&&(A+=I-P),b.__size=A,b.__cache={},this}function R(b,D){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=16,A.storage=48):b.isMatrix4?(A.boundary=16,A.storage=64):b.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",b),D===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function y(b){const D=b.target;D.removeEventListener("dispose",y),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function x(){for(const b in a)s.deleteBuffer(a[b]);a={},l={}}return{bind:c,update:f,dispose:x}}const wC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function bC(){return zi===null&&(zi=new Cy(wC,16,16,ls,$i),zi.name="DFG_LUT",zi.minFilter=ti,zi.magFilter=ti,zi.wrapS=or,zi.wrapT=or,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Ah{constructor(e={}){const{canvas:t=Zx(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=ui}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const R=S,y=new Set([dh,fh,uh]),x=new Set([ui,Xi,So,ua,lh,ch]),b=new Uint32Array(4),D=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const M=[],L=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let W=!1,j=null,oe=null,z=null,re=null;this._outputColorSpace=Wn;let ce=0,Y=0,J=null,B=-1,$=null;const U=new en,ne=new en;let Le=null;const ie=new mt(0);let ge=0,Me=t.width,Ue=t.height,_e=1,ze=null,Mt=null;const et=new en(0,0,Me,Ue),Tt=new en(0,0,Me,Ue);let Ct=!1;const ht=new yo,tn=new gh;let Yt=!1,pn=!1;const Ut=new Bt,$n=new Z,zt=new en,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Cn=!1;function Fn(){return J===null?_e:1}let q=i;function kn(w,G){return t.getContext(w,G)}let It,Dt,Ie,jt,Qe,it,N,C,ee,ye,me,Ae,Pe,fe,he,Ce,k,pe,ue,be,Te,we,je;try{const w={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sh}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),q===null){const G="webgl2";if(q=kn(G,w),q===null)throw kn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(w){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),wt("WebGLRenderer: "+w.message),w}function ut(){It=new IT(q),It.init(),Te=new xC(q,It),Dt=new MT(q,It,e,Te),Ie=new vC(q,It),Dt.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),oe=q.createFramebuffer(),z=q.createFramebuffer(),re=q.createFramebuffer(),jt=new OT(q),Qe=new rC,it=new SC(q,It,Ie,Qe,Dt,Te,jt),N=new DT(F),C=new ky(q),we=new xT(q,C),ee=new NT(q,C,jt,we),ye=new kT(q,ee,C,we,jt),pe=new FT(q,Dt,it),he=new ET(Qe),me=new iC(F,N,It,Dt,we,he),Ae=new RC(F,Qe),Pe=new aC,fe=new dC(It),k=new ST(F,N,Ie,ye,E,d),Ce=new _C(F,ye,Dt),je=new AC(q,jt,Dt,Ie),ue=new yT(q,It,jt),be=new UT(q,It,jt),jt.programs=me.programs,F.capabilities=Dt,F.extensions=It,F.properties=Qe,F.renderLists=Pe,F.shadowMap=Ce,F.state=Ie,F.info=jt}R!==ui&&(V=new zT(R,t.width,t.height,f,a,l));const xe=new TC(F,q);this.xr=xe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=It.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=It.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(Me,Ue,!1))},this.getSize=function(w){return w.set(Me,Ue)},this.setSize=function(w,G,se=!0){if(xe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,Ue=G,t.width=Math.floor(w*_e),t.height=Math.floor(G*_e),se===!0&&(t.style.width=w+"px",t.style.height=G+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Me*_e,Ue*_e).floor()},this.setDrawingBufferSize=function(w,G,se){Me=w,Ue=G,_e=se,t.width=Math.floor(w*se),t.height=Math.floor(G*se),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(R===ui){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,G,se,Q){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,G,se,Q),Ie.viewport(U.copy(et).multiplyScalar(Fn()).round())},this.getScissor=function(w){return w.copy(Tt)},this.setScissor=function(w,G,se,Q){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,G,se,Q),Ie.scissor(ne.copy(Tt).multiplyScalar(Fn()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){Ie.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){ze=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,se=!0){let Q=0;if(w){let K=!1;if(J!==null){const Ne=J.texture.format;K=y.has(Ne)}if(K){const Ne=J.texture.type,Ge=x.has(Ne),De=k.getClearColor(),Oe=k.getClearAlpha(),Ve=De.r,rt=De.g,dt=De.b;Ge?(b[0]=Ve,b[1]=rt,b[2]=dt,b[3]=Oe,q.clearBufferuiv(q.COLOR,0,b)):(D[0]=Ve,D[1]=rt,D[2]=dt,D[3]=Oe,q.clearBufferiv(q.COLOR,0,D))}else Q|=q.COLOR_BUFFER_BIT}G&&(Q|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),k.dispose(),Pe.dispose(),fe.dispose(),it.dispose(),Qe.dispose(),N.dispose(),ye.dispose(),ee.dispose(),we.dispose(),je.dispose(),me.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",To),xe.removeEventListener("sessionend",Li),Di.stop()};function Ze(w){w.preventDefault(),Tc("WebGLRenderer: Context Lost."),W=!0}function st(){Tc("WebGLRenderer: Context Restored."),W=!1;const w=jt.autoReset,G=Ce.enabled,se=Ce.autoUpdate,Q=Ce.needsUpdate,K=Ce.type;ut(),jt.autoReset=w,Ce.enabled=G,Ce.autoUpdate=se,Ce.needsUpdate=Q,Ce.type=K}function Fe(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){const G=w.target;G.removeEventListener("dispose",St),Xt(G)}function Xt(w){ii(w),Qe.remove(w)}function ii(w){const G=Qe.get(w).programs;G!==void 0&&(G.forEach(function(se){me.releaseProgram(se)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,se,Q,K,Ne){G===null&&(G=on);const Ge=K.isMesh&&K.matrixWorld.determinantAffine()<0,De=ya(w,G,se,Q,K);Ie.setMaterial(Q,Ge);let Oe=se.index,Ve=1;if(Q.wireframe===!0){if(Oe=ee.getWireframeAttribute(se),Oe===void 0)return;Ve=2}const rt=se.drawRange,dt=se.attributes.position;let We=rt.start*Ve,gt=(rt.start+rt.count)*Ve;Ne!==null&&(We=Math.max(We,Ne.start*Ve),gt=Math.min(gt,(Ne.start+Ne.count)*Ve)),Oe!==null?(We=Math.max(We,0),gt=Math.min(gt,Oe.count)):dt!=null&&(We=Math.max(We,0),gt=Math.min(gt,dt.count));const Ht=gt-We;if(Ht<0||Ht===1/0)return;we.setup(K,Q,De,se,Oe);let Pt,bt=ue;if(Oe!==null&&(Pt=C.get(Oe),bt=be,bt.setIndex(Pt)),K.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*Fn()),bt.setMode(q.LINES)):bt.setMode(q.TRIANGLES);else if(K.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Ie.setLineWidth(Kt*Fn()),K.isLineSegments?bt.setMode(q.LINES):K.isLineLoop?bt.setMode(q.LINE_LOOP):bt.setMode(q.LINE_STRIP)}else K.isPoints?bt.setMode(q.POINTS):K.isSprite&&bt.setMode(q.TRIANGLES);if(K.isBatchedMesh)if(It.get("WEBGL_multi_draw"))bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,Xe=K._multiDrawCounts,ln=K._multiDrawCount,Ke=Oe?C.get(Oe).bytesPerElement:1,Ii=Qe.get(Q).currentProgram.getUniforms();for(let cn=0;cn<ln;cn++)Ii.setValue(q,"_gl_DrawID",cn),bt.render(Kt[cn]/Ke,Xe[cn])}else if(K.isInstancedMesh)bt.renderInstances(We,Ht,K.count);else if(se.isInstancedBufferGeometry){const Kt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xe=Math.min(se.instanceCount,Kt);bt.renderInstances(We,Ht,Xe)}else bt.render(We,Ht)};function gs(w,G,se,Q){j!==null&&w.isNodeMaterial&&j.setObject(Q,w),Yt===!0&&he.setState(w,se,!1),w.transparent===!0&&w.side===ar&&w.forceSinglePass===!1?(w.side=ni,w.needsUpdate=!0,Vr(w,G,Q),w.side=os,w.needsUpdate=!0,Vr(w,G,Q),w.side=ar):Vr(w,G,Q)}this.compile=function(w,G,se=null){se===null&&(se=w),j!==null&&j.renderStart(w,G,se),P=fe.get(se),P.init(G),L.push(P),se.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),w!==se&&w.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),pn=this.localClippingEnabled,Yt=he.init(this.clippingPlanes,pn),Yt===!0&&he.setGlobalState(this.clippingPlanes,G),j!==null&&Ce.render(P.state.shadowsArray,se,G);const Q=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const De=Ne[Ge];gs(De,se,G,K),Q.add(De)}else gs(Ne,se,G,K),Q.add(Ne)}),P=L.pop(),j!==null&&j.renderEnd(),Q},this.compileAsync=function(w,G,se=null){const Q=this.compile(w,G,se);return new Promise(K=>{function Ne(){if(Q.forEach(function(Ge){const Oe=Qe.get(Ge).currentProgram;(Oe===void 0||Oe.isReady())&&Q.delete(Ge)}),Q.size===0){K(w);return}setTimeout(Ne,10)}It.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let _a=null;function Dc(w){_a&&_a(w)}function To(){Di.stop()}function Li(){Di.start()}const Di=new H_;Di.setAnimationLoop(Dc),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(w){_a=w,xe.setAnimationLoop(w),w===null?Di.stop():Di.start()},xe.addEventListener("sessionstart",To),xe.addEventListener("sessionend",Li),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;j!==null&&j.renderStart(w,G);const se=xe.enabled===!0&&xe.isPresenting===!0,Q=V!==null&&(J===null||se)&&V.begin(F,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(G),G=xe.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,G,J),P=fe.get(w,L.length),P.init(G),P.state.textureUnits=it.getTextureUnits(),L.push(P),Ut.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?tn.setFromArrayCamera(G):ht.setFromProjectionMatrix(Ut,Pi,G.reversedDepth),pn=this.localClippingEnabled,Yt=he.init(this.clippingPlanes,pn),I=Pe.get(w,M.length),I.init(),M.push(I),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){const Ge=F.xr.getDepthSensingMesh();Ge!==null&&_s(Ge,G,-1/0,F.sortObjects)}_s(w,G,0,F.sortObjects),I.finish(),j!==null&&j.updateLights(P.state.lightsArray),F.sortObjects===!0&&I.sort(ze,Mt),Cn=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Cn&&k.addToRenderList(I,w),this.info.autoReset===!0&&this.info.reset(),Yt===!0&&he.beginShadows();const K=P.state.shadowsArray;if(Ce.render(K,w,G),Yt===!0&&he.endShadows(),(Q&&V.hasRenderPass())===!1){const Ge=I.opaque,De=I.transmissive;if(P.setupLights(),G.isArrayCamera){const Oe=G.cameras;if(De.length>0)for(let Ve=0,rt=Oe.length;Ve<rt;Ve++){const dt=Oe[Ve];va(Ge,De,w,dt)}Cn&&k.render(w);for(let Ve=0,rt=Oe.length;Ve<rt;Ve++){const dt=Oe[Ve];Co(I,w,dt,dt.viewport)}}else De.length>0&&va(Ge,De,w,G),Cn&&k.render(w),Co(I,w,G)}J!==null&&Y===0&&(it.updateMultisampleRenderTarget(J),it.updateRenderTargetMipmap(J)),Q&&V.end(F),w.isScene===!0&&w.onAfterRender(F,w,G),we.resetDefaultState(),B=-1,$=null,L.pop(),L.length>0?(P=L[L.length-1],it.setTextureUnits(P.state.textureUnits),Yt===!0&&he.setGlobalState(F.clippingPlanes,P.state.camera)):P=null,M.pop(),M.length>0?I=M[M.length-1]:I=null,j!==null&&j.renderEnd()};function _s(w,G,se,Q){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){const Ge=G.isArrayCamera?tn:ht;if(!w.frustumCulled||w.intersectsFrustum(Ge)){Q&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ut);const De=ye.update(w),Oe=w.material;Oe.visible&&I.push(w,De,Oe,se,zt.z,null,G)}}else if(w.isMesh||w.isLine||w.isPoints){const Ge=G.isArrayCamera?tn:ht;if(!w.frustumCulled||w.intersectsFrustum(Ge)){const De=ye.update(w),Oe=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),zt.copy(De.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(Ut)),Array.isArray(Oe)){const Ve=De.groups;for(let rt=0,dt=Ve.length;rt<dt;rt++){const We=Ve[rt],gt=Oe[We.materialIndex];gt&&gt.visible&&I.push(w,De,gt,se,zt.z,We,G)}}else Oe.visible&&I.push(w,De,Oe,se,zt.z,null,G)}}}const Ne=w.children;for(let Ge=0,De=Ne.length;Ge<De;Ge++)_s(Ne[Ge],G,se,Q)}function Co(w,G,se,Q){const{opaque:K,transmissive:Ne,transparent:Ge}=w;P.setupLightsView(se),Yt===!0&&he.setGlobalState(F.clippingPlanes,se),Q&&Ie.viewport(U.copy(Q)),K.length>0&&Hr(K,G,se),Ne.length>0&&Hr(Ne,G,se),Ge.length>0&&Hr(Ge,G,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function va(w,G,se,Q){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Q.id]===void 0){const We=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Q.id]=new Wi(1,1,{generateMipmaps:!0,type:We?$i:ui,minFilter:Fr,samples:Math.max(4,Dt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[Q.id],Ge=Q.viewport||U;Ne.setSize(Ge.z*F.transmissionResolutionScale,Ge.w*F.transmissionResolutionScale);const De=F.getRenderTarget(),Oe=F.getActiveCubeFace(),Ve=F.getActiveMipmapLevel();F.setRenderTarget(Ne),F.getClearColor(ie),ge=F.getClearAlpha(),ge<1&&F.setClearColor(16777215,.5),F.clear(),Cn&&k.render(se);const rt=F.toneMapping;F.toneMapping=lr;const dt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),P.setupLightsView(Q),Yt===!0&&he.setGlobalState(F.clippingPlanes,Q),Hr(w,se,Q),it.updateMultisampleRenderTarget(Ne),it.updateRenderTargetMipmap(Ne),It.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let gt=0,Ht=G.length;gt<Ht;gt++){const Pt=G[gt],{object:bt,geometry:Kt,material:Xe,group:ln}=Pt;if(Xe.side===ar&&bt.layers.test(Q.layers)){const Ke=Xe.side;Xe.side=ni,Xe.needsUpdate=!0,Sa(bt,se,Q,Kt,Xe,ln),Xe.side=Ke,Xe.needsUpdate=!0,We=!0}}We===!0&&(it.updateMultisampleRenderTarget(Ne),it.updateRenderTargetMipmap(Ne))}F.setRenderTarget(De,Oe,Ve),F.setClearColor(ie,ge),dt!==void 0&&(Q.viewport=dt),F.toneMapping=rt}function Hr(w,G,se){const Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ne=w.length;K<Ne;K++){const Ge=w[K],{object:De,geometry:Oe,group:Ve}=Ge;let rt=Ge.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),De.layers.test(se.layers)&&Sa(De,G,se,Oe,rt,Ve)}}function Sa(w,G,se,Q,K,Ne){j!==null&&K.isNodeMaterial&&j.setObject(w,K),w.onBeforeRender(F,G,se,Q,K,Ne),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(F,G,se,Q,w,Ne),K.transparent===!0&&K.side===ar&&K.forceSinglePass===!1?(K.side=ni,K.needsUpdate=!0,F.renderBufferDirect(se,G,Q,K,w,Ne),K.side=os,K.needsUpdate=!0,F.renderBufferDirect(se,G,Q,K,w,Ne),K.side=ar):F.renderBufferDirect(se,G,Q,K,w,Ne),w.onAfterRender(F,G,se,Q,K,Ne)}function xa(w){let G=0;for(const se of w)se.texture!==null&&G++;return G}function Vr(w,G,se){G.isScene!==!0&&(G=on);const Q=Qe.get(w),K=P.state.lights,Ne=P.state.shadowsArray,Ge=K.state.version,De=me.getParameters(w,K.state,Ne,G,se,P.state.lightProbeGridArray),Oe=me.getProgramCacheKey(De);let Ve=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;const rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=N.get(w.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",St),Ve=new Map,Q.programs=Ve,Q.programVariants=new Map);let dt=Ve.get(Oe);if(dt!==void 0){if(Q.currentProgram===dt&&Q.lightsStateVersion===Ge)return Ro(w,De),dt}else De.uniforms=me.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,se,De),w.onBeforeCompile(De,F),dt=me.acquireProgram(De,Oe),Ve.set(Oe,dt),Q.uniforms=De.uniforms;const We=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=he.uniform),Ro(w,De),Q.needsLights=vs(w),Q.lightsStateVersion=Ge,Q.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.sunLights.value=K.state.sun,We.sunLightShadows.value=K.state.sunShadow,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.sunShadowMatrix.value=K.state.sunShadowMatrix,We.sunShadowCascade.value=K.state.sunShadowCascade,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.numLightProbeGrids=xa(P.state.lightProbeGridArray),Q.currentProgram=dt,Q.uniformsList=null,dt}function Ic(w,G,se,Q,K){const Ne=Qe.get(w),Ge=Ne.currentProgram.id+","+Q+","+K;let De=Ne.programVariants.get(Ge);return De===void 0?(De=Vr(w,G,se),Ne.programVariants.set(Ge,De)):(Ne.currentProgram=De,Ne.uniformsList=null,Ne.outputColorSpace=Q,Ne.toneMapping=K),De}function Gt(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=gc.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Ro(w,G){const se=Qe.get(w);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function ya(w,G,se,Q,K){G.isScene!==!0&&(G=on),it.resetTextureUnits();const Ne=G.fog,Ge=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,De=J===null?F.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:xt.workingColorSpace,Oe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ve=N.get(Q.envMap||Ge,Oe),rt=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,dt=!!se.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!se.morphAttributes.position,gt=!!se.morphAttributes.normal,Ht=!!se.morphAttributes.color;let Pt=lr;Q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pt=F.toneMapping);const bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Kt=bt!==void 0?bt.length:0,Xe=Qe.get(Q),ln=P.state.lights;if(Yt===!0&&(pn===!0||w!==$)){const Rt=w===$&&Q.id===B;he.setState(Q,w,Rt)}let Ke=!1,Ii=!1;Q.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==ln.state.version||K.isBatchedMesh&&Xe.batching===!1||!K.isBatchedMesh&&Xe.batching===!0||K.isBatchedMesh&&Xe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Xe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xe.instancingMorph===!1&&K.morphTexture!==null||Xe.envMap!==Ve||Q.fog===!0&&Xe.fog!==Ne||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==he.numPlanes||Xe.numIntersection!==he.numIntersection)||Xe.vertexAlphas!==rt||Xe.vertexTangents!==dt||Xe.morphTargets!==We||Xe.morphNormals!==gt||Xe.morphColors!==Ht||Xe.morphTargetsCount!==Kt||Xe.numLightProbeGrids!==xa(P.state.lightProbeGridArray)?Ke=!0:(Xe.outputColorSpace!==De||Xe.toneMapping!==Pt)&&(Ii=!0):(Ke=!0,Xe.__version=Q.version);let cn=Xe.currentProgram;(Ke===!0||Ii===!0)&&(cn=Ii===!0?Ic(Q,G,K,De,Pt):Vr(Q,G,K),j&&Q.isNodeMaterial&&j.onUpdateProgram(Q,cn,Xe));let ur=!1,xi=!1,Ni=!1;const vt=cn.getUniforms(),Zt=Xe.uniforms;if(Ie.useProgram(cn.program)&&(ur=!0,xi=!0,Ni=!0),Q.id!==B&&(B=Q.id,xi=!0),ur||$!==w){Ie.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(q,"projectionMatrix",w.projectionMatrix),vt.setValue(q,"viewMatrix",w.matrixWorldInverse);const Nt=vt.map.cameraPosition;Nt!==void 0&&Nt.setValue(q,$n.setFromMatrixPosition(w.matrixWorld)),Dt.logarithmicDepthBuffer&&vt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&vt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,xi=!0,Ni=!0)}if(Xe.needsLights&&(ln.state.sunShadowMap.length>0&&vt.setValue(q,"sunShadowMap",ln.state.sunShadowMap,it),ln.state.directionalShadowMap.length>0&&vt.setValue(q,"directionalShadowMap",ln.state.directionalShadowMap,it),ln.state.spotShadowMap.length>0&&vt.setValue(q,"spotShadowMap",ln.state.spotShadowMap,it),ln.state.pointShadowMap.length>0&&vt.setValue(q,"pointShadowMap",ln.state.pointShadowMap,it)),K.isSkinnedMesh){vt.setOptional(q,K,"bindMatrix"),vt.setOptional(q,K,"bindMatrixInverse");const Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),vt.setValue(q,"boneTexture",Rt.boneTexture,it))}K.isBatchedMesh&&(vt.setOptional(q,K,"batchingTexture"),vt.setValue(q,"batchingTexture",K._matricesTexture,it),vt.setOptional(q,K,"batchingIdTexture"),vt.setValue(q,"batchingIdTexture",K._indirectTexture,it),vt.setOptional(q,K,"batchingColorTexture"),K._colorsTexture!==null&&vt.setValue(q,"batchingColorTexture",K._colorsTexture,it));const Rn=se.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&pe.update(K,se,cn),(xi||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,vt.setValue(q,"receiveShadow",K.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(Zt.envMapIntensity.value=G.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=bC()),xi){if(vt.setValue(q,"toneMappingExposure",F.toneMappingExposure),Xe.needsLights&&Ao(Zt,Ni),Ne&&Q.fog===!0&&Ae.refreshFogUniforms(Zt,Ne),Ae.refreshMaterialUniforms(Zt,Q,_e,Ue,P.state.transmissionRenderTarget[w.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const Rt=A;let Nt=0;for(const mn of P.state.lightProbeGridArray)mn.texture!==null&&(Rt.textures[Nt]=mn.texture,Rt.min[Nt]=mn.boundingBox.min,Rt.max[Nt]=mn.boundingBox.max,Rt.resolution[Nt]=mn.resolution,Nt++);for(const mn in Rt)Rt[mn].length=Nt;Zt.probesSH.value=Rt.textures,Zt.probesMin.value=Rt.min,Zt.probesMax.value=Rt.max,Zt.probesResolution.value=Rt.resolution}gc.upload(q,Gt(Xe),Zt,it)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(gc.upload(q,Gt(Xe),Zt,it),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&vt.setValue(q,"center",K.center),vt.setValue(q,"modelViewMatrix",K.modelViewMatrix),vt.setValue(q,"normalMatrix",K.normalMatrix),vt.setValue(q,"modelMatrix",K.matrixWorld),Q.uniformsGroups!==void 0){const Rt=Q.uniformsGroups;for(let Nt=0,mn=Rt.length;Nt<mn;Nt++){const fr=Rt[Nt];je.update(fr,cn),je.bind(fr,cn)}}return cn}function Ao(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function vs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,G,se){const Q=Qe.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Qe.get(w.texture).__webglTexture=G,Qe.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:se,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const se=Qe.get(w);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,se=0){J=w,ce=G,Y=se;let Q=null,K=!1,Ne=!1;if(w){const De=Qe.get(w);if(De.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(q.FRAMEBUFFER,De.__webglFramebuffer),U.copy(w.viewport),ne.copy(w.scissor),Le=w.scissorTest,Ie.viewport(U),Ie.scissor(ne),Ie.setScissorTest(Le),B=-1;return}else if(De.__webglFramebuffer===void 0)it.setupRenderTarget(w);else if(De.__hasExternalTextures)it.rebindTextures(w,Qe.get(w.texture).__webglTexture,Qe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(De.__boundDepthTexture!==rt){if(rt!==null&&Qe.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ne=!0);const Ve=Qe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?Q=Ve[G][se]:Q=Ve[G],K=!0):w.samples>0&&it.useMultisampledRTT(w)===!1?Q=Qe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?Q=Ve[se]:Q=Ve,U.copy(w.viewport),ne.copy(w.scissor),Le=w.scissorTest}else U.copy(et).multiplyScalar(_e).floor(),ne.copy(Tt).multiplyScalar(_e).floor(),Le=Ct;if(se!==0&&(Q=oe),Ie.bindFramebuffer(q.FRAMEBUFFER,Q)&&Ie.drawBuffers(w,Q),Ie.viewport(U),Ie.scissor(ne),Ie.setScissorTest(Le),K){const De=Qe.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,se)}else if(Ne){const De=G;for(let Oe=0;Oe<w.textures.length;Oe++){const Ve=Qe.get(w.textures[Oe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Oe,Ve.__webglTexture,se,De)}}else if(w!==null&&se!==0){const De=Qe.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,De.__webglTexture,se)}B=-1};function wo(w){const G=Qe.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=Dt.textureFormatReadable(w.format),G.__typeReadable=Dt.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,se,Q,K,Ne,Ge,De=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Qe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Oe=Oe[Ge],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){Ie.bindFramebuffer(q.FRAMEBUFFER,Oe);try{const Ve=w.textures[De],rt=Ve.format,dt=Ve.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+De);const We=wo(Ve);if(We.__formatReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Q&&se>=0&&se<=w.height-K&&q.readPixels(G,se,Q,K,Te.convert(rt),Te.convert(dt),Ne)}finally{const Ve=J!==null?Qe.get(J).__webglFramebuffer:null;Ie.bindFramebuffer(q.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,G,se,Q,K,Ne,Ge,De=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Qe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Oe=Oe[Ge],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(G>=0&&G<=w.width-Q&&se>=0&&se<=w.height-K){Ie.bindFramebuffer(q.FRAMEBUFFER,Oe);const Ve=w.textures[De],rt=Ve.format,dt=Ve.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+De);const We=wo(Ve);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,gt),q.bufferData(q.PIXEL_PACK_BUFFER,Ne.byteLength,q.STREAM_READ),q.readPixels(G,se,Q,K,Te.convert(rt),Te.convert(dt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Ht=J!==null?Qe.get(J).__webglFramebuffer:null;Ie.bindFramebuffer(q.FRAMEBUFFER,Ht);const Pt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Qx(q,Pt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,gt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ne),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(gt),q.deleteSync(Pt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,se=0){const Q=Math.pow(2,-se),K=Math.floor(w.image.width*Q),Ne=Math.floor(w.image.height*Q),Ge=G!==null?G.x:0,De=G!==null?G.y:0;it.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,Ge,De,K,Ne),Ie.unbindTexture()},this.copyTextureToTexture=function(w,G,se=null,Q=null,K=0,Ne=0){let Ge,De,Oe,Ve,rt,dt,We,gt,Ht;const Pt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(se!==null)Ge=se.max.x-se.min.x,De=se.max.y-se.min.y,Oe=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,rt=se.min.y,dt=se.isBox3?se.min.z:0;else{const vt=Math.pow(2,-K);Ge=Math.floor(Pt.width*vt),De=Math.floor(Pt.height*vt),w.isDataArrayTexture?Oe=Pt.depth:w.isData3DTexture?Oe=Math.floor(Pt.depth*vt):Oe=1,Ve=0,rt=0,dt=0}Q!==null?(We=Q.x,gt=Q.y,Ht=Q.z):(We=0,gt=0,Ht=0);const bt=Te.convert(G.format),Kt=Te.convert(G.type);let Xe;G.isData3DTexture?(it.setTexture3D(G,0),Xe=q.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Xe=q.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Xe=q.TEXTURE_2D),Ie.activeTexture(q.TEXTURE0),Ie.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,G.flipY),Ie.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Ie.pixelStorei(q.UNPACK_ALIGNMENT,G.unpackAlignment);const ln=Ie.getParameter(q.UNPACK_ROW_LENGTH),Ke=Ie.getParameter(q.UNPACK_IMAGE_HEIGHT),Ii=Ie.getParameter(q.UNPACK_SKIP_PIXELS),cn=Ie.getParameter(q.UNPACK_SKIP_ROWS),ur=Ie.getParameter(q.UNPACK_SKIP_IMAGES);Ie.pixelStorei(q.UNPACK_ROW_LENGTH,Pt.width),Ie.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt.height),Ie.pixelStorei(q.UNPACK_SKIP_PIXELS,Ve),Ie.pixelStorei(q.UNPACK_SKIP_ROWS,rt),Ie.pixelStorei(q.UNPACK_SKIP_IMAGES,dt);const xi=w.isDataArrayTexture||w.isData3DTexture,Ni=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const vt=Qe.get(w),Zt=Qe.get(G),Rn=Qe.get(vt.__renderTarget),Rt=Qe.get(Zt.__renderTarget);Ie.bindFramebuffer(q.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ie.bindFramebuffer(q.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Nt=0;Nt<Oe;Nt++)xi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qe.get(w).__webglTexture,K,dt+Nt),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qe.get(G).__webglTexture,Ne,Ht+Nt)),q.blitFramebuffer(Ve,rt,Ve+Ge,rt+De,We,gt,We+Ge,gt+De,q.DEPTH_BUFFER_BIT,q.NEAREST);Ie.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Qe.has(w)){const vt=Qe.get(w),Zt=Qe.get(G);Ie.bindFramebuffer(q.READ_FRAMEBUFFER,z),Ie.bindFramebuffer(q.DRAW_FRAMEBUFFER,re);for(let Rn=0;Rn<Oe;Rn++)xi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,vt.__webglTexture,K,dt+Rn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,vt.__webglTexture,K),Ni?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Zt.__webglTexture,Ne,Ht+Rn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Zt.__webglTexture,Ne),K!==0?q.blitFramebuffer(Ve,rt,Ve+Ge,rt+De,We,gt,We+Ge,gt+De,q.COLOR_BUFFER_BIT,q.NEAREST):Ni?q.copyTexSubImage3D(Xe,Ne,We,gt,Ht+Rn,Ve,rt,Ge,De):q.copyTexSubImage2D(Xe,Ne,We,gt,Ve,rt,Ge,De);Ie.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ni?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(Xe,Ne,We,gt,Ht,Ge,De,Oe,bt,Kt,Pt.data):G.isCompressedArrayTexture?q.compressedTexSubImage3D(Xe,Ne,We,gt,Ht,Ge,De,Oe,bt,Pt.data):q.texSubImage3D(Xe,Ne,We,gt,Ht,Ge,De,Oe,bt,Kt,Pt):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ne,We,gt,Ge,De,bt,Kt,Pt.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ne,We,gt,Pt.width,Pt.height,bt,Pt.data):q.texSubImage2D(q.TEXTURE_2D,Ne,We,gt,Ge,De,bt,Kt,Pt);Ie.pixelStorei(q.UNPACK_ROW_LENGTH,ln),Ie.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ke),Ie.pixelStorei(q.UNPACK_SKIP_PIXELS,Ii),Ie.pixelStorei(q.UNPACK_SKIP_ROWS,cn),Ie.pixelStorei(q.UNPACK_SKIP_IMAGES,ur),Ne===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&q.generateMipmap(Xe),Ie.unbindTexture()},this.initRenderTarget=function(w){Qe.get(w).__webglFramebuffer===void 0&&it.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?it.setTextureCube(w,0):w.isData3DTexture?it.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?it.setTexture2DArray(w,0):it.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){ce=0,Y=0,J=null,Ie.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}class PC{constructor(e,t,i){this.host=e,this.canvas=t;const a=document.createElement("canvas");a.width=600,a.height=400;const l=a.getContext("2d",{alpha:!1});this.texture=new vh(a),this.texture.colorSpace=Wn;const c=g=>{l.clearRect(0,0,600,400),l.drawImage(i,g%4*444,Math.floor(g/4)*444+74,444,296,0,0,600,400),this.texture.needsUpdate=!0};c(0),this.renderer=new Ah({canvas:t,alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7)),this.renderer.setClearColor(526612,0),this.renderer.toneMapping=ah,this.geom=new ma(4.95,3.3,40,24),this.base=this.geom.attributes.position.array.slice(),this.mesh=new xn(this.geom,new as({map:this.texture})),this.mesh.position.z=-.25,this.scene.add(this.mesh);const f=new mo(10771711,9,8);f.position.set(-2,1.4,2.2),this.scene.add(f);const d=new mo(16723555,7,7);d.position.set(2.1,-.7,1.8),this.scene.add(d);const h=new mo(9071615,6,7);h.position.set(-1.8,-1.2,1.6),this.scene.add(h),this.scene.add(new Ch(16777215,.9)),this.onPointer=g=>{const v=e.getBoundingClientRect();this.px=((g.clientX-v.left)/v.width-.5)*2,this.py=((g.clientY-v.top)/v.height-.5)*2},e.addEventListener("pointermove",this.onPointer),e.addEventListener("pointerleave",()=>{this.px=this.py=0}),e.classList.add("three-ready"),this.resize(),new ResizeObserver(()=>this.resize()).observe(e);const m=()=>{this.raf=requestAnimationFrame(m);const g=Math.min(this.clock.getDelta(),.04);if(this.t+=g,!this.reduced){this.t-this.last>.145&&(this.frame=(this.frame+1)%8,c(this.frame),this.last=this.t);const v=Math.sin(this.t*1.55)*.035+this.px*.045,S=Math.sin(this.t*1.95+.5)*.022-this.py*.025;this.sv+=(v-this.sway)*15.5*g,this.sv*=Math.exp(-6.8*g),this.sway+=this.sv*g,this.nv+=(S-this.nod)*15.5*g,this.nv*=Math.exp(-6.8*g),this.nod+=this.nv*g,this.mesh.rotation.set(this.nod,0,this.sway),this.mesh.position.y=Math.sin(this.t*1.8)*.035+this.nod*.12,this.mesh.position.x=Math.sin(this.t*.76)*.025+this.px*.025;const E=this.geom.attributes.position;for(let R=0;R<E.count;R++){const y=this.base[R*3],x=this.base[R*3+1],b=Math.max(0,1-Math.abs(y)/2.5)*Math.max(.35,1-Math.abs(x)/1.7);E.setZ(R,this.base[R*3+2]+Math.sin(this.t*2+y*1.35+x*1.85)*.018*b)}E.needsUpdate=!0,this.geom.computeVertexNormals(),f.intensity=9+Math.sin(this.t*2.1)*1.4,d.intensity=6+Math.sin(this.t*2.8+1.2)*1.3,h.intensity=5+Math.cos(this.t*2.3)}this.renderer.render(this.scene,this.camera)};m()}renderer;scene=new mh;camera=new ei(36,1,.1,50);texture;geom;mesh;base;frame=0;last=0;t=0;raf=0;px=0;py=0;sway=0;sv=0;nod=0;nv=0;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;disc={x:0,y:0};onPointer;clock=new G_;resize(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.position.z=e/t<1?5.8:5.15,this.camera.updateProjectionMatrix(),this.disc.x=e,this.disc.y=t}dispose(){cancelAnimationFrame(this.raf),this.host.removeEventListener("pointermove",this.onPointer),this.geom.dispose(),this.texture.dispose(),this.renderer.dispose()}}const Vn=Math.PI*2,jf=10771711,Kf=16723555,ic=1.25,Jf=.18,LC=1.55,Ir=96,sn=512;function u0(s,e,t){const i=sn/2,a=e==="heads"?"#a45cff":"#ff2e63",l=e==="heads"?"#ff2e63":"#a45cff";if(s.save(),t)s.fillStyle="#000000",s.fillRect(0,0,sn,sn);else{const g=s.createRadialGradient(i-90,i-110,12,i,i,sn*.72);g.addColorStop(0,"#2a2540"),g.addColorStop(.42,"#131122"),g.addColorStop(1,"#040308"),s.fillStyle=g,s.fillRect(0,0,sn,sn),s.globalAlpha=.16;const v=s.createLinearGradient(0,0,sn,sn);v.addColorStop(0,"#8f7fc0"),v.addColorStop(.5,"#000000"),v.addColorStop(1,"#5a2b6e"),s.fillStyle=v,s.fillRect(0,0,sn,sn),s.globalAlpha=1}s.lineCap="round",s.lineJoin="round";const c=(g,v)=>{s.shadowColor=g,s.shadowBlur=t?v:v*.45};if(!t){const g=s.createLinearGradient(0,i-sn/2,0,i+sn/2);g.addColorStop(0,"#6b6880"),g.addColorStop(.5,"#1c1a28"),g.addColorStop(1,"#4b4760"),s.strokeStyle=g,s.lineWidth=24,s.beginPath(),s.arc(i,i,sn*.457,0,Vn),s.stroke(),s.strokeStyle="#0a0810",s.lineWidth=3,s.beginPath(),s.arc(i,i,sn*.475,0,Vn),s.stroke()}c(a,22),s.strokeStyle=a,s.lineWidth=t?5:3,s.beginPath(),s.arc(i,i,sn*.395,0,Vn),s.stroke(),c(l,16),s.strokeStyle=l,s.lineWidth=t?4:2,s.setLineDash([5,15]),s.beginPath(),s.arc(i,i,sn*.35,0,Vn),s.stroke(),s.setLineDash([]);for(let g=0;g<24;g++){const v=g/24*Vn-Math.PI/2,S=g%2?a:l;c(S,14),s.strokeStyle=S,s.lineWidth=g%3===0?5:2.5;const E=sn*.405,R=sn*(g%3===0?.445:.43);s.beginPath(),s.moveTo(i+Math.cos(v)*E,i+Math.sin(v)*E),s.lineTo(i+Math.cos(v)*R,i+Math.sin(v)*R),s.stroke()}s.shadowBlur=0,c(a,t?26:12),s.fillStyle=a,s.save(),s.translate(i,i-104),s.rotate(-.35),s.beginPath(),s.arc(0,0,44,Math.PI*.38,Math.PI*1.62,!1),s.arc(44*.46,0,44*.94,Math.PI*1.62,Math.PI*.38,!0),s.closePath(),s.fill(),s.restore();const f=i,d=i+118,h=30;c(l,t?24:10),s.strokeStyle=l,s.lineWidth=t?4:2.5;for(const g of[1,-1]){s.beginPath();for(let v=0;v<3;v++){const S=-Math.PI/2+g*v*Vn/3,E=f+Math.cos(S)*h,R=d+Math.sin(S)*h;v===0?s.moveTo(E,R):s.lineTo(E,R)}s.closePath(),s.stroke()}s.beginPath(),s.arc(f,d,h*.2,0,Vn),s.fillStyle=l,s.fill(),s.shadowBlur=0;const m=e.toUpperCase();if(s.textAlign="center",s.textBaseline="middle",s.font='900 86px Georgia, "Times New Roman", serif',c(a,t?18:24),s.lineWidth=t?5:8,s.strokeStyle=t?a:"#07050c",s.strokeText(m,i,i+8),t)s.globalAlpha=.5,s.fillStyle=a,s.fillText(m,i,i+8),s.globalAlpha=1;else{s.shadowBlur=0;const g=s.createLinearGradient(0,i-40,0,i+55);g.addColorStop(0,"#ffffff"),g.addColorStop(.5,e==="heads"?"#e7d6ff":"#ffdbe4"),g.addColorStop(1,a),s.fillStyle=g,s.fillText(m,i,i+8)}s.shadowBlur=t?10:6,s.shadowColor=l,s.font="700 20px Georgia, serif",s.fillStyle=t?l:"#b9a9c9",s.fillText("· C V R S E D ·",i,i+168),s.restore()}function Zf(s){const e=new vh(s);return e.colorSpace=Wn,e.anisotropy=4,e}class DC{constructor(e){this.canvas=e,this.renderer=new Ah({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setClearColor(0,0),this.camera.position.set(0,1.2,7.5),this.camera.lookAt(0,0,0),this.scene.add(new Ch(10127049,.55));const t=new $f(14271743,2.4);t.position.set(-3,4,6),this.scene.add(t);const i=new $f(Kf,1.5);i.position.set(4,-2,-5),this.scene.add(i);const a=new $f(jf,.8);a.position.set(2,3,-4),this.scene.add(a);const l=document.createElement("canvas");l.width=l.height=256;const c=l.getContext("2d"),f=c.createRadialGradient(128,128,8,128,128,128);f.addColorStop(0,"rgba(164,92,255,0.55)"),f.addColorStop(.45,"rgba(120,40,180,0.18)"),f.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=f,c.fillRect(0,0,256,256);const d=this.track(new as({map:this.track(Zf(l)),transparent:!0,depthWrite:!1,blending:po,opacity:.5})),h=new xn(this.track(new ma(4.4,4.4)),d);h.position.z=-.75,this.scene.add(h);const m=this.track(new jd({color:657682,metalness:.88,roughness:.28,emissive:1444388,emissiveIntensity:.35})),g=new xn(this.track(new xh(ic,ic,Jf,64)),m);g.rotation.x=Math.PI/2,this.coin.add(g);for(const E of["heads","tails"]){const R=document.createElement("canvas");R.width=R.height=sn,u0(R.getContext("2d"),E,!1);const y=document.createElement("canvas");y.width=y.height=sn,u0(y.getContext("2d"),E,!0);const x=this.track(new jd({map:this.track(Zf(R)),emissiveMap:this.track(Zf(y)),emissive:16777215,emissiveIntensity:E==="heads"?1.05:1.15,metalness:.55,roughness:.35})),b=new xn(this.track(new Sh(ic-.04,64)),x);b.position.z=E==="heads"?Jf/2+.001:-.091,E==="tails"&&(b.rotation.y=Math.PI),this.coin.add(b)}for(const[E,R]of[[Jf/2+.004,jf],[-.094,Kf]]){const y=this.track(new as({color:R,transparent:!0,opacity:.85,blending:po,depthWrite:!1})),x=new xn(this.track(new la(ic-.005,.014,6,64)),y);x.position.z=E,this.coin.add(x)}this.scene.add(this.coin),this.pGeo=this.track(new On),this.pPos=new Si(new Float32Array(Ir*3),3),this.pCol=new Si(new Float32Array(Ir*4),4),this.pPos.setUsage(pg),this.pCol.setUsage(pg),this.pGeo.setAttribute("position",this.pPos),this.pGeo.setAttribute("color",this.pCol);const v=this.track(new _h({size:.085,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1,blending:po})),S=new I_(this.pGeo,v);S.frustumCulled=!1,this.scene.add(S),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.canvas.parentElement||this.canvas),this.resize(),this.last=performance.now(),this.raf=requestAnimationFrame(this.loop)}renderer;scene=new mh;camera=new ei(38,1,.1,60);coin=new ra;disposables=[];pGeo;pPos;pCol;vel=new Float32Array(Ir*3);life=new Float32Array(Ir);maxLife=new Float32Array(Ir);pCursor=0;raf=0;last=0;idle=0;landedYaw=0;flipping=!1;fStart=0;fDur=1750;fFrom=0;fTo=0;resolve=null;ro;track(e){return this.disposables.push(e),e}reducedMotion(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}loop=()=>{this.raf=requestAnimationFrame(this.loop);const e=performance.now();let t=(e-this.last)/1e3;this.last=e,(!Number.isFinite(t)||t<0)&&(t=0),t=Math.min(t,.05),this.idle+=t;const i=this.reducedMotion()?.3:1;if(this.flipping){const a=Math.min(1,(e-this.fStart)/this.fDur),l=1-Math.pow(1-a,2.2),c=Math.max(0,(a-.82)/.18),f=Math.sin(c*Vn)*.018*(1-c)*(1-c);this.coin.rotation.y=this.fFrom+(this.fTo-this.fFrom)*(l+f);const d=Math.sin(Math.PI*Math.min(1,a/.92))*LC,h=a>.9?Math.sin((a-.9)/.1*Math.PI)*.14:0;this.coin.position.y=d-h*.1,this.coin.rotation.z=Math.sin(a*Vn*2)*.11*(1-a)*i,this.coin.scale.set(1+h*.35,1-h,1+h*.35),a>=1&&this.completeFlip()}else this.coin.rotation.y=this.landedYaw+Math.sin(this.idle*.9)*.1*i,this.coin.position.y=Math.sin(this.idle*1.35)*.045*i,this.coin.rotation.z=Math.sin(this.idle*.6)*.045*i,this.coin.scale.set(1,1,1);this.updateParticles(t),this.renderer.render(this.scene,this.camera)};completeFlip(){this.coin.rotation.y=this.fTo,this.coin.position.y=0,this.coin.rotation.z=0,this.coin.scale.set(1,1,1),this.landedYaw=this.fTo,this.idle=0,this.flipping=!1,this.burst();const e=this.resolve;this.resolve=null,e?.()}burst(){const e=new mt(jf),t=new mt(Kf);for(let i=0;i<Ir;i++){const a=this.pCursor%Ir;this.pCursor++;const l=Math.random()*Vn,c=Math.random()*.35;this.pPos.setXYZ(a,Math.cos(l)*c,.12,Math.sin(l)*c);const f=.9+Math.random()*1.5;this.vel[a*3]=Math.cos(l)*f,this.vel[a*3+1]=1.3+Math.random()*1.9,this.vel[a*3+2]=Math.sin(l)*f;const d=.55+Math.random()*.6;this.life[a]=d,this.maxLife[a]=d;const h=Math.random()<.5?e:t;this.pCol.setXYZW(a,h.r,h.g,h.b,1)}this.pPos.needsUpdate=!0,this.pCol.needsUpdate=!0}updateParticles(e){let t=!1;for(let i=0;i<Ir;i++){if(this.life[i]<=0){this.pCol.getW(i)!==0&&(this.pCol.setW(i,0),t=!0);continue}if(this.life[i]-=e,this.life[i]<=0){this.pCol.setW(i,0),t=!0;continue}this.vel[i*3+1]-=3.6*e,this.pPos.setXYZ(i,this.pPos.getX(i)+this.vel[i*3]*e,this.pPos.getY(i)+this.vel[i*3+1]*e,this.pPos.getZ(i)+this.vel[i*3+2]*e);const a=this.life[i]/this.maxLife[i];this.pCol.setW(i,a*a),t=!0}t&&(this.pPos.needsUpdate=!0,this.pCol.needsUpdate=!0)}resize(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}flip(e){if(this.resolve){const f=this.resolve;this.resolve=null,f()}this.flipping=!1;const t=this.reducedMotion();this.fDur=t?650:1750;const i=t?3:5,a=e==="tails"?Math.PI:0,l=this.coin.rotation.y,c=Math.floor((l-a)/Vn)*Vn+a;return this.fFrom=l,this.fTo=c+i*Vn,this.fTo-l<Vn&&(this.fTo+=Vn),this.fStart=performance.now(),this.flipping=!0,this.idle=0,new Promise(f=>{this.resolve=f})}dispose(){if(cancelAnimationFrame(this.raf),this.ro.disconnect(),this.resolve){const e=this.resolve;this.resolve=null,e()}for(const e of this.disposables)e.dispose();this.renderer.dispose()}}class IC{constructor(e){this.canvas=e,this.renderer=new Ah({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.4)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Wn,this.camera.position.set(0,3.4,15),this.camera.lookAt(0,2.2,-8),this.scene.fog=new ph(722452,.022),this.scene.add(new Ch(9137077,1.15)),this.violet=new mo(10771711,55,55,2),this.violet.position.set(-8,8,-6),this.scene.add(this.violet),this.crimson=new mo(16723555,38,46,2),this.crimson.position.set(9,3,-9),this.scene.add(this.crimson);const t=new xn(new Eh(4.2,32,24),new as({color:14207487,fog:!1}));t.position.set(-9,14,-34),this.scene.add(t);const i=document.createElement("canvas");i.width=i.height=256;const a=i.getContext("2d"),l=a.createRadialGradient(128,128,12,128,128,128);l.addColorStop(0,"rgba(205,175,255,.75)"),l.addColorStop(.4,"rgba(150,90,255,.24)"),l.addColorStop(1,"rgba(90,40,160,0)"),a.fillStyle=l,a.fillRect(0,0,256,256);const c=new Ey(new P_({map:new vh(i),transparent:!0,depthWrite:!1,fog:!1}));c.position.copy(t.position),c.scale.setScalar(26),this.scene.add(c);const f=new jd({color:1774128,emissive:4399723,emissiveIntensity:.5,roughness:.85,metalness:.1}),d=new la(4.4,.26,6,20,Math.PI/2);for(let D=0;D<7;D++){const A=-6-D*5.2,I=1+D*.13,P=new xn(d,f);P.position.set(-4.4*I,3.2,A),P.scale.setScalar(I),P.rotation.z=-Math.PI/4;const M=P.clone();M.position.x=4.4*I,M.rotation.z=Math.PI*.75,this.scene.add(P,M);for(const L of[-8.8*I,8.8*I]){const V=new xn(new pa(.42,8,.42),f);V.position.set(L,-.6,A),this.scene.add(V)}}this.sigil=new ra;const h=new as({color:10771711,transparent:!0,opacity:.32,depthWrite:!1}),m=new xn(new la(3.4,.035,6,72),h),g=new xn(new la(2.65,.025,6,72),h.clone());g.material.color.setHex(16723555),g.rotation.x=.7;const v=new xn(new Mh(.8,0),new as({color:13081855,wireframe:!0,transparent:!0,opacity:.38}));this.sigil.add(m,g,v),this.sigil.position.set(10,7,-16),this.scene.add(this.sigil);const S=170;this.ashBase=new Float32Array(S*3);const E=new Float32Array(S*3),R=new mt(10771711),y=new mt(16732029);for(let D=0;D<S;D++){this.ashBase[D*3]=(Math.random()-.5)*46,this.ashBase[D*3+1]=Math.random()*22-2,this.ashBase[D*3+2]=(Math.random()-.5)*34-6;const A=Math.random()>.72?y:R;E[D*3]=A.r,E[D*3+1]=A.g,E[D*3+2]=A.b}const x=new On;x.setAttribute("position",new Si(this.ashBase.slice(),3)),x.setAttribute("color",new Si(E,3)),this.ash=new I_(x,new _h({size:.085,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,sizeAttenuation:!0})),this.scene.add(this.ash);const b=()=>{this.raf=requestAnimationFrame(b);const D=this.clock.getElapsedTime();if(!this.reduced){this.violet.intensity=50+Math.sin(D*.7)*9,this.crimson.intensity=35+Math.cos(D*.9)*7,this.sigil.rotation.y=D*.12,this.sigil.rotation.z=Math.sin(D*.35)*.12;const A=this.ash.geometry.attributes.position;for(let I=0;I<S;I++){const P=this.ashBase[I*3+1]+D*(.24+I%5*.05)%24;A.setY(I,P>20?P-24:P),A.setX(I,this.ashBase[I*3]+Math.sin(D*.3+I)*.35)}A.needsUpdate=!0}this.renderer.render(this.scene,this.camera)};b(),new ResizeObserver(()=>this.resize()).observe(e.parentElement||e),this.resize()}renderer;scene=new mh;camera=new ei(50,1,.1,120);ash;ashBase;sigil;violet;crimson;raf=0;clock=new G_;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;resize(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){cancelAnimationFrame(this.raf),this.scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(a=>a.dispose()):i?.dispose()}),this.renderer.dispose()}}function NC({p:s,spinning:e=!1,winner:t=!1}){const[i,a]=lt.useState({x:0,y:0});return s?de.jsx("div",{className:`card ${e?"spinning":""} ${t?"winner":""}`,onMouseMove:l=>{const c=l.currentTarget.getBoundingClientRect();a({x:((l.clientY-c.top)/c.height-.5)*-12,y:((l.clientX-c.left)/c.width-.5)*12})},onMouseLeave:()=>a({x:0,y:0}),style:{transform:`perspective(700px) rotateX(${i.x}deg) rotateY(${i.y}deg)`},title:s.quirk,children:de.jsxs("div",{className:"card-inner",children:[de.jsx("div",{className:"card-art",children:de.jsx("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${s.id}.png`,alt:s.name,loading:"lazy"})}),de.jsx("div",{className:"card-name",children:s.name}),de.jsx("div",{className:"card-role",children:s.role}),de.jsxs("div",{className:"card-ability",children:["ABILITY · ",s.ability]}),de.jsxs("div",{className:"card-meta",children:[s.item," · ",s.tera," TERA"]})]})}):de.jsxs("div",{className:"card card-empty",children:[de.jsx("div",{className:"card-back",children:"?"}),de.jsx("span",{className:"card-name",children:"AWAITING DEAL"})]})}function UC(){return"https://play.pokemonshowdown.com/"}async function OC(s){try{return await navigator.clipboard.writeText(s),!0}catch{return!1}}const Qf=s=>`/pokemon-casino/assets/${s}`,FC=[{img:"goth-a.webp",name:"MORTA",role:"coin keeper"},{img:"goth-b.webp",name:"VESPER",role:"team reader"},{img:"goth-c.webp",name:"NOX",role:"last word"}];function f0({teams:s,titles:e}){return de.jsx("div",{className:"teams",children:s.map((t,i)=>de.jsxs("section",{className:"team",children:[de.jsxs("header",{children:[de.jsx("h3",{children:e[i]}),de.jsxs("span",{children:[t.length,"/6"]})]}),de.jsx("div",{className:"reels",children:Array.from({length:6},(a,l)=>de.jsx(NC,{p:t[l]||null,winner:t.length===6},l))})]},i))})}function kC(){const s=HS(),e=vx(),t=!!h0(),{room:i,seat:a,connected:l,error:c,create:f,join:d,send:h,setError:m}=t?s:e,[g,v]=lt.useState("Nightwalker"),[S,E]=lt.useState("Nightwalker II"),[R,y]=lt.useState(()=>new URLSearchParams(location.search).get("room")||""),[x,b]=lt.useState(3),[D,A]=lt.useState(""),I=lt.useRef(null),P=lt.useRef(null),M=lt.useRef(null),L=lt.useRef(null),V=lt.useRef(null),F=lt.useRef(null),W=lt.useRef("");lt.useEffect(()=>{if(!I.current||!i)return;let B=!0;const $=new Image;return $.onload=()=>{if(!(!B||!I.current||L.current))try{L.current=new PC(I.current.parentElement,I.current,$)}catch(U){window.__DEALER_ERROR__=String(U)}},$.src=Qf("goth-atlas.webp"),()=>{B=!1,L.current?.dispose(),L.current=null}},[!!i]),lt.useEffect(()=>(M.current&&(F.current=new IC(M.current)),P.current&&(V.current=new DC(P.current)),()=>{V.current?.dispose(),F.current?.dispose(),V.current=null,F.current=null}),[!!i]),lt.useEffect(()=>{if(!i?.result||i.phase==="calls")return;const B=`${i.code}:${i.games}:${i.result}`;W.current!==B&&(W.current=B,V.current?.flip(i.result))},[i?.result,i?.phase,i?.code,i?.games]);const j=a!==null?i?.calls[a]:null,oe=B=>h({type:"call",side:B}),z=()=>{const B=`${location.origin}${location.pathname}?room=${i?.code||""}`;navigator.clipboard.writeText(B).then(()=>A("Ritual link copied"),()=>A("Copy blocked — select the link manually"))},re=i?i.history.map(B=>`========== GAME ${B.game} · PLAYER ${B.winner+1} WON ==========

=== PLAYER 1 ===

${eo(B.teams[0])}

=== PLAYER 2 ===

${eo(B.teams[1])}`).join(`


`):"",ce=i&&i.teams[0].length===6?`${re}

=== CURRENT GAME ===

=== PLAYER 1 ===

${eo(i.teams[0])}

=== PLAYER 2 ===

${eo(i.teams[1])}`:re;if(!i)return de.jsxs("div",{className:"lobby",children:[de.jsx("canvas",{ref:M,className:"bg"}),de.jsxs("div",{className:"lobby-shell",children:[de.jsxs("section",{className:"hero-copy",children:[de.jsx("div",{className:"eyebrow",children:"No fate. No favors. No mercy."}),de.jsxs("h1",{children:["HEX",de.jsx("span",{children:"DRAFT"})]}),de.jsx("p",{className:"hero-lede",children:"Two players. One cursed coin. Two damned teams. Real Pokémon Showdown battles, decided by a toss and settled in the arena."}),de.jsxs("div",{className:"hero-rule",children:[de.jsx("span",{children:"01 / CALL"}),de.jsx("span",{children:"02 / CAST"}),de.jsx("span",{children:"03 / BATTLE"})]}),de.jsx("div",{className:"coven",children:FC.map(B=>de.jsxs("figure",{children:[de.jsx("img",{src:Qf(B.img),alt:`${B.name}, ${B.role}`}),de.jsxs("figcaption",{children:[de.jsx("b",{children:B.name}),de.jsx("small",{children:B.role})]})]},B.name))})]}),de.jsxs("section",{className:"lobby-card",children:[de.jsx("div",{className:"card-eyebrow",children:"Enter the circle"}),de.jsx("h2",{children:"Open a ritual"}),de.jsx("p",{children:"Share a link with one friend. The coin decides who picks first; the rest is on you."}),de.jsxs("label",{children:["Your name",de.jsx("input",{value:g,onChange:B=>v(B.target.value),maxLength:24})]}),de.jsxs("label",{children:["Format",de.jsxs("select",{value:x,onChange:B=>b(Number(B.target.value)),children:[de.jsx("option",{value:3,children:"Best of 3"}),de.jsx("option",{value:5,children:"Best of 5"})]})]}),de.jsx("div",{className:"row",children:de.jsx("button",{className:"primary",onClick:()=>f(g,x),disabled:!l,children:"Create room"})}),de.jsx("div",{className:"divider",children:"or join a friend"}),de.jsxs("div",{className:"row",children:[de.jsx("input",{placeholder:"YOUR NAME",value:S,onChange:B=>E(B.target.value),maxLength:24}),de.jsx("input",{placeholder:"ROOM CODE",value:R,onChange:B=>y(B.target.value)}),de.jsx("button",{onClick:()=>d(R,S),disabled:!l||!R,children:"Join"})]}),c&&de.jsx("p",{className:"error",children:c}),de.jsxs("small",{children:[t?"Backend":"Peer relay"," ",l?"connected":"offline"," · no account · no music"]})]})]})]});const Y=i.phase,J=Y==="pick"&&a===i.tossWinner;return de.jsxs("div",{className:"app",children:[de.jsx("canvas",{ref:M,className:"bg"}),de.jsxs("header",{className:"topbar",children:[de.jsxs("div",{children:[de.jsxs("span",{className:"eyebrow",children:["Ritual ",i.code]}),de.jsxs("h1",{children:["HEX",de.jsx("em",{children:"DRAFT"})]})]}),de.jsxs("div",{className:"topright",children:[de.jsx("span",{className:l?"dot on":"dot"})," ",l?"LIVE":"OFFLINE",de.jsx("button",{onClick:z,children:"Share link"}),de.jsx("button",{onClick:()=>h({type:"reset",bestOf:x}),children:"New ritual"}),D&&de.jsx("small",{className:"toast",children:D})]})]}),de.jsxs("div",{className:"stage",children:[de.jsxs("div",{className:"oracle",children:[de.jsx("canvas",{ref:I}),de.jsx("img",{src:Qf("goth-dealer.webp"),alt:"The oracle"}),de.jsx("span",{className:"oracle-tag",children:"THE ORACLE · COIN KEEPER"})]}),de.jsxs("div",{className:"table",children:[de.jsxs("div",{className:"scorebar",children:[de.jsxs("span",{children:["PLAYER 1 · ",i.players[0]?.name||"Waiting"]}),de.jsx("strong",{children:i.wins[0]}),de.jsx("i",{children:":"}),de.jsx("strong",{children:i.wins[1]}),de.jsxs("span",{children:[i.players[1]?.name||"Waiting"," · PLAYER 2"]})]}),de.jsx("p",{className:"status",children:Y==="calls"?`GAME ${i.games+1} / ${i.bestOf} · CHOOSE YOUR SIDE`:Y.toUpperCase()}),de.jsxs("div",{className:"coinrow",children:[de.jsx("div",{className:"coinstage",children:de.jsx("canvas",{ref:P})}),de.jsxs("div",{className:"calls",children:[[0,1].map(B=>de.jsxs("div",{className:"callgroup",children:[de.jsxs("strong",{children:["PLAYER ",B+1]}),["heads","tails"].map($=>de.jsx("button",{disabled:Y!=="calls"||j===$||i.calls[1-B]===$||a!==B,className:j===$?"sel":"",onClick:()=>oe($),children:$.toUpperCase()},$)),de.jsx("small",{children:i.calls[B]?`BOUND: ${i.calls[B]}`:"unclaimed"})]},B)),de.jsx("button",{className:"primary",disabled:Y!=="calls"||!i.calls.every(Boolean)||!i.players[1],onClick:()=>h({type:"flip"}),children:"Cast the coin"}),i.result&&de.jsxs("p",{className:"result",children:[i.result.toUpperCase()," · PLAYER ",(i.tossWinner??0)+1," claims the first pick"]})]})]}),de.jsxs("div",{className:"phase-actions",children:[Y==="spin"&&de.jsx("button",{className:"primary",onClick:()=>h({type:"spin"}),children:"Draw two teams"}),Y==="battle"&&de.jsxs(de.Fragment,{children:[de.jsx("button",{onClick:()=>h({type:"result",winner:0}),children:"PLAYER 1 WON"}),de.jsx("button",{onClick:()=>h({type:"result",winner:1}),children:"PLAYER 2 WON"})]}),Y==="between"&&de.jsx("button",{className:"primary",onClick:()=>h({type:"next"}),children:"Next game"}),Y==="complete"&&de.jsxs("p",{className:"ritual-win",children:["RITUAL COMPLETE · PLAYER ",(i.wins[0]>i.wins[1]?0:1)+1," WINS ",i.wins[0],"–",i.wins[1]]})]})]})]}),Y==="pick"&&J&&de.jsxs("section",{className:"draft",children:[de.jsx("h2",{children:"THE FIRST PICK IS YOURS · CHOOSE SIX"}),de.jsx("div",{className:"draft-grid",children:i.candidates?.map((B,$)=>de.jsxs("div",{children:[de.jsx(f0,{teams:[B,[]],titles:[`TEAM ${$?"B":"A"}`,""]}),de.jsxs("button",{className:"primary",onClick:()=>h({type:"pick",team:$}),children:["PICK TEAM ",$?"B":"A"]})]},$))})]}),i.teams[0].length===6&&de.jsx(f0,{teams:i.teams,titles:[`PLAYER 1 · ${i.players[0]?.name}`,`PLAYER 2 · ${i.players[1]?.name}`]}),de.jsxs("section",{className:"showdown",children:[de.jsxs("div",{className:"handoff-head",children:[de.jsx("div",{className:"eyebrow",children:"04 / The handoff"}),de.jsx("h2",{children:"Take the fight to Showdown"}),de.jsx("p",{children:"Showdown deliberately refuses to run inside an iframe — it prints IN FRAME and sends you to the real site. Nothing we can do from here changes that, so we hand you the team and open a proper tab."})]}),de.jsxs("ol",{className:"steps",children:[de.jsxs("li",{children:[de.jsx("b",{children:"01"}),de.jsx("span",{children:"Copy your team below."})]}),de.jsxs("li",{children:[de.jsx("b",{children:"02"}),de.jsx("span",{children:"Open Team Builder → Import/Export → paste → Import."})]}),de.jsxs("li",{children:[de.jsx("b",{children:"03"}),de.jsx("span",{children:"Challenge the other player in gen9ou. Report the winner here."})]})]}),de.jsxs("div",{className:"row",children:[[0,1].map(B=>i.teams[B].length===6&&de.jsxs("button",{disabled:!i.teams[B].length,onClick:async()=>A(await OC(eo(i.teams[B]))?`Team ${B+1} copied`:"Copy blocked — select manually"),children:["COPY P",B+1," TEAM"]},B)),de.jsx("button",{className:"primary",onClick:()=>window.open(`${UC()}teambuilder`,"_blank","noopener"),children:"OPEN SHOWDOWN ↗"}),de.jsx("button",{onClick:z,children:"COPY RITUAL LINK"})]}),de.jsx("textarea",{readOnly:!0,value:ce,placeholder:"Team archive appears here"}),D&&de.jsx("small",{children:D})]}),c&&de.jsx("p",{className:"error",onClick:()=>m(""),children:c})]})}GS.createRoot(document.getElementById("root")).render(de.jsx(US.StrictMode,{children:de.jsx(kC,{})}));
