/*! For license information please see 573.c33d5bbd27113c87e206.js.LICENSE.txt */
(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[573],{7410:function(e,t){var n,r;void 0===(r="function"==typeof(n=function(e,t){"use strict";var n,r,o="function"==typeof Map?new Map:(n=[],r=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return r[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),r.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),r.splice(t,1))}}),i=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){i=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function u(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!o.has(e)){var t=null,n=null,r=null,u=function(){e.clientWidth!==n&&f()},a=function(t){window.removeEventListener("resize",u,!1),e.removeEventListener("input",f,!1),e.removeEventListener("keyup",f,!1),e.removeEventListener("autosize:destroy",a,!1),e.removeEventListener("autosize:update",f,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),o.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",a,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",f,!1),window.addEventListener("resize",u,!1),e.addEventListener("input",f,!1),e.addEventListener("autosize:update",f,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",o.set(e,{destroy:a,update:f}),"vertical"===(l=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===l.resize&&(e.style.resize="horizontal"),t="content-box"===l.boxSizing?-(parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)):parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),isNaN(t)&&(t=0),f()}var l;function s(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function c(){if(0!==e.scrollHeight){var r=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,r.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function f(){c();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),o="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(o<t?"hidden"===n.overflowY&&(s("scroll"),c(),o="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(s("hidden"),c(),o="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),r!==o){r=o;var u=i("autosize:resized");try{e.dispatchEvent(u)}catch(e){}}}}function a(e){var t=o.get(e);t&&t.destroy()}function l(e){var t=o.get(e);t&&t.update()}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((s=function(e){return e}).destroy=function(e){return e},s.update=function(e){return e}):((s=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return u(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],a),e},s.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=s,e.exports=t.default})?n.apply(t,[e,t]):n)||(e.exports=r)},1101:(e,t,n)=>{"use strict";n.d(t,{Qp:()=>d,tG:()=>h});var r=!1;if("undefined"!=typeof window){var o={get passive(){r=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),u=[],a=!1,l=-1,s=void 0,c=void 0,f=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},p=function(e){var t=e||window.event;return!!f(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},d=function(e,t){if(e){if(!u.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};u=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(u),[n]),i?(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-l;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?p(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",p,r?{passive:!1}:void 0),a=!0)):function(e){if(void 0===c){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(c=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},h=function(e){e?(u=u.filter((function(t){return t.targetElement!==e})),i?(e.ontouchstart=null,e.ontouchmove=null,a&&0===u.length&&(document.removeEventListener("touchmove",p,r?{passive:!1}:void 0),a=!1)):u.length||(void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},9867:e=>{e.exports=function(e,t,n){return((n=window.getComputedStyle)?n(e):e.currentStyle)[t.replace(/-(\w)/gi,(function(e,t){return t.toUpperCase()}))]}},1572:(e,t,n)=>{"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?document.body:n,o=document.createElement("textarea"),i=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var u=document.getSelection(),a=!1;u.rangeCount>0&&(a=u.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(e){}return o.remove(),a&&(u.removeAllRanges(),u.addRange(a)),i&&i.focus(),l}n.d(t,{Z:()=>r})},8634:(e,t,n)=>{"use strict";function r(e){return Array.isArray(e)?e:String(e).split(/[eE]/)}function o(e){var t=r(e);if(!function(e){var t=r(e);return!Number.isNaN(Number(t[1]))}(t))return t[0];var n="-"===t[0][0]?"-":"",o=t[0].replace(/^-/,"").split("."),i=o[0],u=o[1]||"",a=Number(t[1]);if(0===a)return"".concat(n+i,".").concat(u);if(a<0){var l=i.length+a;if(l>0){var s=i.substr(0,l),c=i.substr(l);return"".concat(n+s,".").concat(c).concat(u)}var f="0.";for(a=l;a;)f+="0",a+=1;return n+f+i+u}var p=u.length-a;if(p>0){var d=u.substr(a),h=u.substr(0,a);return"".concat(n+i+h,".").concat(d)}for(var _=-p,v="";_;)v+="0",_-=1;return n+i+u+v}n.d(t,{Z:()=>o})},9113:(e,t,n)=>{var r=n(9867);e.exports=function(e){var t=r(e,"line-height"),n=parseFloat(t,10);if(t===n+""){var o=e.style.lineHeight;e.style.lineHeight=t+"em",t=r(e,"line-height"),n=parseFloat(t,10),o?e.style.lineHeight=o:delete e.style.lineHeight}if(-1!==t.indexOf("pt")?(n*=4,n/=3):-1!==t.indexOf("mm")?(n*=96,n/=25.4):-1!==t.indexOf("cm")?(n*=96,n/=2.54):-1!==t.indexOf("in")?n*=96:-1!==t.indexOf("pc")&&(n*=16),n=Math.round(n),"normal"===t){var i=e.nodeName,u=document.createElement(i);u.innerHTML="&nbsp;","TEXTAREA"===i.toUpperCase()&&u.setAttribute("rows","1");var a=r(e,"font-size");u.style.fontSize=a,u.style.padding="0px",u.style.border="0px";var l=document.body;l.appendChild(u),n=u.offsetHeight,l.removeChild(u)}return n}},260:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useCallback:()=>r.useCallback,useContext:()=>r.useContext,useDebugValue:()=>r.useDebugValue,useEffect:()=>r.useEffect,useErrorBoundary:()=>r.useErrorBoundary,useImperativeHandle:()=>r.useImperativeHandle,useLayoutEffect:()=>r.useLayoutEffect,useMemo:()=>r.useMemo,useReducer:()=>r.useReducer,useRef:()=>r.useRef,useState:()=>r.useState,createElement:()=>o.createElement,createContext:()=>o.createContext,createRef:()=>o.createRef,Fragment:()=>o.Fragment,Component:()=>o.Component,default:()=>ee,version:()=>$,Children:()=>h,render:()=>T,hydrate:()=>A,unmountComponentAtNode:()=>q,createPortal:()=>x,createFactory:()=>X,cloneElement:()=>G,isValidElement:()=>Z,findDOMNode:()=>Q,PureComponent:()=>l,memo:()=>s,forwardRef:()=>p,unstable_batchedUpdates:()=>J,StrictMode:()=>K,Suspense:()=>y,SuspenseList:()=>b,lazy:()=>g,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>W,unstable_ImmediatePriority:()=>F,unstable_UserBlockingPriority:()=>U,unstable_NormalPriority:()=>V,unstable_LowPriority:()=>j,unstable_IdlePriority:()=>D,unstable_runWithPriority:()=>B,unstable_now:()=>Y});var r=n(6059),o=n(2972);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function l(e){this.props=e}function s(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:a(this.props,e)}function r(t){return this.shouldComponentUpdate=n,(0,o.createElement)(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(l.prototype=new o.Component).isPureReactComponent=!0,l.prototype.shouldComponentUpdate=function(e,t){return a(this.props,e)||a(this.state,t)};var c=o.options.__b;o.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),c&&c(e)};var f="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function p(e){function t(t,n){var r=u({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=i(n)||"current"in n)?n:null)}return t.$$typeof=f,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var d=function(e,t){return null==e?null:(0,o.toChildArray)((0,o.toChildArray)(e).map(t))},h={map:d,forEach:d,count:function(e){return e?(0,o.toChildArray)(e).length:0},only:function(e){var t=(0,o.toChildArray)(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:o.toChildArray},_=o.options.__e;o.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);_(e,t,n)};var v=o.options.unmount;function y(){this.__u=0,this.t=null,this.__b=null}function m(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function g(e){var t,n,r;function i(i){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return(0,o.createElement)(n,i)}return i.displayName="Lazy",i.__f=!0,i}function b(){this.u=null,this.o=null}o.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),v&&v(e)},(y.prototype=new o.Component).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=m(r.__v),i=!1,u=function(){i||(i=!0,n.__R=null,o?o(a):a())};n.__R=u;var a=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h;r.__u++||l||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(u,u)},y.prototype.componentWillUnmount=function(){this.t=[]},y.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=u({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&(0,o.createElement)(o.Fragment,null,e.fallback);return i&&(i.__h=null),[(0,o.createElement)(o.Fragment,null,t.__e?null:e.children),i]};var w=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function E(e){return this.getChildContext=function(){return e.context},e.children}function C(e){var t=this,n=e.i;t.componentWillUnmount=function(){(0,o.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),(0,o.render)((0,o.createElement)(E,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function x(e,t){return(0,o.createElement)(C,{__v:e,i:t})}(b.prototype=new o.Component).__e=function(e){var t=this,n=m(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),w(t,e,r)):o()};n?n(i):i()}},b.prototype.render=function(e){this.u=null,this.o=new Map;var t=(0,o.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},b.prototype.componentDidUpdate=b.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){w(e,n,t)}))};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,S=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,O=function(e){return("undefined"!=typeof Symbol&&"symbol"==i(Symbol())?/fil|che|rad/i:/fil|che|ra/i).test(e)};function T(e,t,n){return null==t.__k&&(t.textContent=""),(0,o.render)(e,t),"function"==typeof n&&n(),e?e.__c:null}function A(e,t,n){return(0,o.hydrate)(e,t),"function"==typeof n&&n(),e?e.__c:null}o.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(o.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var k=o.options.event;function P(){}function N(){return this.cancelBubble}function z(){return this.defaultPrevented}o.options.event=function(e){return k&&(e=k(e)),e.persist=P,e.isPropagationStopped=N,e.isDefaultPrevented=z,e.nativeEvent=e};var L,M={configurable:!0,get:function(){return this.class}},I=o.options.vnode;o.options.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){for(var i in r={},n){var u=n[i];"value"===i&&"defaultValue"in n&&null==u||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===u?u="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!O(n.type)?i="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():S.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[i]=u)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,o.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=(0,o.toChildArray)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r}t&&n.class!=n.className&&(M.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",M)),e.$$typeof=R,I&&I(e)};var H=o.options.__r;o.options.__r=function(e){H&&H(e),L=e.__c};var W={ReactCurrentDispatcher:{current:{readContext:function(e){return L.__n[e.__c].props.value}}}},F=1,U=2,V=3,j=4,D=5;function B(e,t){return t()}var Y="object"==("undefined"==typeof performance?"undefined":i(performance))&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},$="16.8.0";function X(e){return o.createElement.bind(null,e)}function Z(e){return!!e&&e.$$typeof===R}function G(e){return Z(e)?o.cloneElement.apply(null,arguments):e}function q(e){return!!e.__k&&((0,o.render)(null,e),!0)}function Q(e){return e&&(e.base||1===e.nodeType&&e)||null}var J=function(e,t){return e(t)},K=o.Fragment;const ee={useState:r.useState,useReducer:r.useReducer,useEffect:r.useEffect,useLayoutEffect:r.useLayoutEffect,useRef:r.useRef,useImperativeHandle:r.useImperativeHandle,useMemo:r.useMemo,useCallback:r.useCallback,useContext:r.useContext,useDebugValue:r.useDebugValue,version:"16.8.0",Children:h,render:T,hydrate:A,unmountComponentAtNode:q,createPortal:x,createElement:o.createElement,createContext:o.createContext,createFactory:X,cloneElement:G,createRef:o.createRef,Fragment:o.Fragment,isValidElement:Z,findDOMNode:Q,Component:o.Component,PureComponent:l,memo:s,forwardRef:p,unstable_batchedUpdates:J,StrictMode:o.Fragment,Suspense:y,SuspenseList:b,lazy:g,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:W}},1245:(e,t,n)=>{"use strict";var r=n(1132);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},6838:(e,t,n)=>{e.exports=n(1245)()},1132:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7539:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.__esModule=!0;var a=n(260),l=n(6838),s=n(7410),c=n(9113),f="autosize:resized",p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={lineHeight:null},t.textarea=null,t.onResize=function(e){t.props.onResize&&t.props.onResize(e)},t.updateLineHeight=function(){t.textarea&&t.setState({lineHeight:c(t.textarea)})},t.onChange=function(e){var n=t.props.onChange;t.currentValue=e.currentTarget.value,n&&n(e)},t}return o(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.maxRows,r=t.async;"number"==typeof n&&this.updateLineHeight(),"number"==typeof n||r?setTimeout((function(){return e.textarea&&s(e.textarea)})):this.textarea&&s(this.textarea),this.textarea&&this.textarea.addEventListener(f,this.onResize)},t.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener(f,this.onResize),s.destroy(this.textarea))},t.prototype.render=function(){var e=this,t=this.props,n=(t.onResize,t.maxRows),r=(t.onChange,t.style),o=(t.innerRef,t.children),l=u(t,["onResize","maxRows","onChange","style","innerRef","children"]),s=this.state.lineHeight,c=n&&s?s*n:null;return a.createElement("textarea",i({},l,{onChange:this.onChange,style:c?i({},r,{maxHeight:c}):r,ref:function(t){e.textarea=t,"function"==typeof e.props.innerRef?e.props.innerRef(t):e.props.innerRef&&(e.props.innerRef.current=t)}}),o)},t.prototype.componentDidUpdate=function(){this.textarea&&s.update(this.textarea)},t.defaultProps={rows:1,async:!1},t.propTypes={rows:l.number,maxRows:l.number,onResize:l.func,innerRef:l.any,async:l.bool},t}(a.Component);t.TextareaAutosize=a.forwardRef((function(e,t){return a.createElement(p,i({},e,{innerRef:t}))}))},9026:(e,t,n)=>{"use strict";var r=n(7539);t.Z=r.TextareaAutosize},1559:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,o.useState)(e),a=u(r,2),l=a[0],s=a[1],c=(0,i.default)((function(e){return s(e)}),t,[e],n),f=u(c,2),p=f[0],d=f[1];return(0,o.useEffect)((function(){l!==e&&p(e)})),[l,d]};var r,o=n(6059),i=(r=n(6275))&&r.__esModule?r:{default:r};function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},6275:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=i.maxWait,a=(0,r.useRef)(null),l=(0,r.useRef)([]),s=(0,r.useRef)(null),c=(0,r.useRef)(!1),f=(0,r.useCallback)(e,n),p=(0,r.useCallback)((function(){clearTimeout(s.current),clearTimeout(a.current),a.current=null,l.current=[],s.current=null}),[s.current,a.current]);(0,r.useEffect)((function(){return function(){c.current=!0}}),[]);var d=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];l.current=n,clearTimeout(s.current),s.current=setTimeout((function(){c.current||f.apply(void 0,n),p()}),t),u&&!a.current&&(a.current=setTimeout((function(){c.current||f.apply(void 0,o(l.current)),p()}),u))},h=function(){s.current&&(f.apply(void 0,o(l.current)),p())};return[d,p,h]};var r=n(6059);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}},6938:(e,t,n)=>{"use strict";Object.defineProperty(t,"y1",{enumerable:!0,get:function(){return r.default}});o(n(1559));var r=o(n(6275));function o(e){return e&&e.__esModule?e:{default:e}}},1457:(e,t,n)=>{"use strict";n.d(t,{YD:()=>l});var r=n(260);const o=new Map,i=new WeakMap;let u=0;function a(e,t,n={},r){if(void 0===window.IntersectionObserver&&void 0!==r){const o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:a,observer:l,elements:s}=function(e){let t=function(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(i.has(n)||(u+=1,i.set(n,u.toString())),i.get(n)):"0"):e[t]}`;var n})).toString()}(e),n=o.get(t);if(!n){const r=new Map;let i;const u=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:u,elements:r},o.set(t,n)}return n}(n);let c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),l.unobserve(e)),0===s.size&&(l.disconnect(),o.delete(a))}}function l({threshold:e,delay:t,trackVisibility:n,rootMargin:o,root:i,triggerOnce:u,skip:l,initialInView:s,fallbackInView:c,onChange:f}={}){var p;const[d,h]=r.useState(null),_=r.useRef(),[v,y]=r.useState({inView:!!s,entry:void 0});_.current=f,r.useEffect((()=>{if(l||!d)return;let r;return r=a(d,((e,t)=>{y({inView:e,entry:t}),_.current&&_.current(e,t),t.isIntersecting&&u&&r&&(r(),r=void 0)}),{root:i,rootMargin:o,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,i,o,u,l,n,c,t]);const m=null==(p=v.entry)?void 0:p.target,g=r.useRef();d||!m||u||l||g.current===m||(g.current=m,y({inView:!!s,entry:void 0}));const b=[h,v.inView,v.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}r.Component}}]);