import{h as Ze,u as m,g as C,r as I,i as et,k as tt,l as nt,N as ot,m as rt,c as Ne,n as at,j as s,O as it,a as st,s as lt,o as ct,p as ut,q as ft}from"./index-63796294.js";import{a as dt}from"./selectors-d9aac75d.js";import{s as R}from"./sprite-923fa693.js";const pt=t=>t.favorites.favoritesCampers,ht=t=>t.filter.location,mt=t=>t.filter.equipment,vt=t=>t.filter.type,po=Ze([dt,ht,mt,vt],(t,e,n,r)=>{const i=e.toLowerCase().trim().split(",").map(c=>c.trim()),[d,y]=i;let a=t;return n&&(a=a.filter(c=>c.details&&(c.details[n]||c.details[n]===void 0))),r&&(a=a.filter(c=>c.form===r)),a.filter(c=>{const[g,u]=c.location.toLowerCase().split(", ");return(!d||u.includes(d))&&(!y||g.includes(y))})});m.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-top: 100px;
  margin-right: 64px;
  padding: 24;
  gap: 32px;
  margin-bottom: 80px;
`;const yt=m.div`
  display: flex;
  height: 358px;
  width: 860px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  margin-top: 50px;
`;m.div``;const gt=m.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  overflow: hidden;
  margin: 24px;
  object-fit: cover;
  object-position: 70%;
`,xt=m.div`
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 526px;
  margin: 24px 24px 24px 0;
`,bt=m.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,wt=m.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 125%;
  color: ${C.colorBlack};
  margin: 0;
`,Ot=m.h2`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  color: ${C.colorBlack};
  margin: 0;
`,_t=m.div`
  display: flex;
`,Ct=m.p`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  margin: 8px 16px 0 0;
`,Et=m.p`
  display: flex;
  align-items: center;
  margin: 8px 0 0 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${C.colorGrey};
`,St=m.p`
  margin: 24px 0 0 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${C.colorGrey};
`,Mt=m.ul`
  display: flex;
  flex-wrap: wrap;
  width: 526px;
  gap: 8px;
  margin-top: 24px;
`,B=m.li`
  display: flex;
  background-color: ${C.colorWhiteGrey};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
  padding: 12px 18px;
`;m.span`
  display: inline-block;
  width: auto;
`;const Rt=m.button`
  display: flex;
  background-color: ${C.colorRed};
  color: ${C.colorWhite};
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  padding: 0;
  line-height: 150%;
  letter-spacing: -0.01em;
  margin-top: 24px;
  border: none;
`;m.button`
  background-color: ${C.colorRed};
  color: ${C.colorWhite};
  width: auto;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
`;var me={exports:{}},q={},Pe={exports:{}},Tt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kt=Tt,Nt=kt;function je(){}function De(){}De.resetWarningCache=je;var Pt=function(){function t(r,i,d,y,a,x){if(x!==Nt){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:De,resetWarningCache:je};return n.PropTypes=n,n};Pe.exports=Pt();var Le=Pe.exports,ve={exports:{}},j={},ye={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function d(u,v){return v.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function y(u){var v=u.offsetWidth<=0&&u.offsetHeight<=0;if(v&&!u.innerHTML)return!0;try{var b=window.getComputedStyle(u),_=b.getPropertyValue("display");return v?_!==r&&d(u,b):_===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(u){for(var v=u,b=u.getRootNode&&u.getRootNode();v&&v!==document.body;){if(b&&v===b&&(v=b.host.parentNode),y(v))return!1;v=v.parentNode}return!0}function x(u,v){var b=u.nodeName.toLowerCase(),_=i.test(b)&&!u.disabled||b==="a"&&u.href||v;return _&&a(u)}function c(u){var v=u.getAttribute("tabindex");v===null&&(v=void 0);var b=isNaN(v);return(b||v>=0)&&x(u,!b)}function g(u){var v=[].slice.call(u.querySelectorAll("*"),0).reduce(function(b,_){return b.concat(_.shadowRoot?g(_.shadowRoot):[_])},[]);return v.filter(c)}t.exports=e.default})(ye,ye.exports);var Ae=ye.exports;Object.defineProperty(j,"__esModule",{value:!0});j.resetState=At;j.log=Ft;j.handleBlur=J;j.handleFocus=X;j.markForFocusLater=It;j.returnFocus=Ut;j.popWithoutFocus=Wt;j.setupScopedFocus=$t;j.teardownScopedFocus=Ht;var jt=Ae,Dt=Lt(jt);function Lt(t){return t&&t.__esModule?t:{default:t}}var K=[],z=null,ge=!1;function At(){K=[]}function Ft(){}function J(){ge=!0}function X(){if(ge){if(ge=!1,!z)return;setTimeout(function(){if(!z.contains(document.activeElement)){var t=(0,Dt.default)(z)[0]||z;t.focus()}},0)}}function It(){K.push(document.activeElement)}function Ut(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{K.length!==0&&(e=K.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Wt(){K.length>0&&K.pop()}function $t(t){z=t,window.addEventListener?(window.addEventListener("blur",J,!1),document.addEventListener("focus",X,!0)):(window.attachEvent("onBlur",J),document.attachEvent("onFocus",X))}function Ht(){z=null,window.addEventListener?(window.removeEventListener("blur",J),document.removeEventListener("focus",X)):(window.detachEvent("onBlur",J),document.detachEvent("onFocus",X))}var xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var n=Ae,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?d(a.activeElement.shadowRoot):a.activeElement}function y(a,x){var c=(0,r.default)(a);if(!c.length){x.preventDefault();return}var g=void 0,u=x.shiftKey,v=c[0],b=c[c.length-1],_=d();if(a===_){if(!u)return;g=b}if(b===_&&!u&&(g=v),v===_&&u&&(g=b),g){x.preventDefault(),g.focus();return}var k=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=k!=null&&k[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var A=c.indexOf(_);if(A>-1&&(A+=u?-1:1),g=c[A],typeof g>"u"){x.preventDefault(),g=u?b:v,g.focus();return}x.preventDefault(),g.focus()}}t.exports=e.default})(xe,xe.exports);var qt=xe.exports,D={},Bt=function(){},zt=Bt,P={},Fe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(Fe);var Kt=Fe.exports;Object.defineProperty(P,"__esModule",{value:!0});P.canUseDOM=P.SafeNodeList=P.SafeHTMLCollection=void 0;var Yt=Kt,Vt=Gt(Yt);function Gt(t){return t&&t.__esModule?t:{default:t}}var ce=Vt.default,Qt=ce.canUseDOM?window.HTMLElement:{};P.SafeHTMLCollection=ce.canUseDOM?window.HTMLCollection:{};P.SafeNodeList=ce.canUseDOM?window.NodeList:{};P.canUseDOM=ce.canUseDOM;P.default=Qt;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=tn;D.log=nn;D.assertNodeList=Ie;D.setElement=on;D.validateElement=be;D.hide=rn;D.show=an;D.documentNotReadyOrSSRTesting=sn;var Jt=zt,Xt=en(Jt),Zt=P;function en(t){return t&&t.__esModule?t:{default:t}}var T=null;function tn(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(t){return t.removeAttribute("aria-hidden")})),T=null}function nn(){}function Ie(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function on(t){var e=t;if(typeof e=="string"&&Zt.canUseDOM){var n=document.querySelectorAll(e);Ie(n,e),e=n}return T=e||T,T}function be(t){var e=t||T;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Xt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function rn(t){var e=!0,n=!1,r=void 0;try{for(var i=be(t)[Symbol.iterator](),d;!(e=(d=i.next()).done);e=!0){var y=d.value;y.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function an(t){var e=!0,n=!1,r=void 0;try{for(var i=be(t)[Symbol.iterator](),d;!(e=(d=i.next()).done);e=!0){var y=d.value;y.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function sn(){T=null}var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.resetState=ln;Y.log=cn;var G={},Q={};function Oe(t,e){t.classList.remove(e)}function ln(){var t=document.getElementsByTagName("html")[0];for(var e in G)Oe(t,G[e]);var n=document.body;for(var r in Q)Oe(n,Q[r]);G={},Q={}}function cn(){}var un=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},fn=function(e,n){return e[n]&&(e[n]-=1),n},dn=function(e,n,r){r.forEach(function(i){un(n,i),e.add(i)})},pn=function(e,n,r){r.forEach(function(i){fn(n,i),n[i]===0&&e.remove(i)})};Y.add=function(e,n){return dn(e.classList,e.nodeName.toLowerCase()=="html"?G:Q,n.split(" "))};Y.remove=function(e,n){return pn(e.classList,e.nodeName.toLowerCase()=="html"?G:Q,n.split(" "))};var V={};Object.defineProperty(V,"__esModule",{value:!0});V.log=mn;V.resetState=vn;function hn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ue=function t(){var e=this;hn(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ie=new Ue;function mn(){console.log("portalOpenInstances ----------"),console.log(ie.openInstances.length),ie.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function vn(){ie=new Ue}V.default=ie;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=bn;we.log=wn;var yn=V,gn=xn(yn);function xn(t){return t&&t.__esModule?t:{default:t}}var S=void 0,N=void 0,H=[];function bn(){for(var t=[S,N],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}S=N=null,H=[]}function wn(){console.log("bodyTrap ----------"),console.log(H.length);for(var t=[S,N],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function _e(){H.length!==0&&H[H.length-1].focusContent()}function On(t,e){!S&&!N&&(S=document.createElement("div"),S.setAttribute("data-react-modal-body-trap",""),S.style.position="absolute",S.style.opacity="0",S.setAttribute("tabindex","0"),S.addEventListener("focus",_e),N=S.cloneNode(),N.addEventListener("focus",_e)),H=e,H.length>0?(document.body.firstChild!==S&&document.body.insertBefore(S,document.body.firstChild),document.body.lastChild!==N&&document.body.appendChild(N)):(S.parentElement&&S.parentElement.removeChild(S),N.parentElement&&N.parentElement.removeChild(N))}gn.default.subscribe(On);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(h){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(h[o]=w[o])}return h},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},i=function(){function h(p,w){for(var o=0;o<w.length;o++){var l=w[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}return function(p,w,o){return w&&h(p.prototype,w),o&&h(p,o),p}}(),d=I,y=Le,a=ne(y),x=j,c=fe(x),g=qt,u=ne(g),v=D,b=fe(v),_=Y,k=fe(_),L=P,A=ne(L),ue=V,te=ne(ue);function fe(h){if(h&&h.__esModule)return h;var p={};if(h!=null)for(var w in h)Object.prototype.hasOwnProperty.call(h,w)&&(p[w]=h[w]);return p.default=h,p}function ne(h){return h&&h.__esModule?h:{default:h}}function ze(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function Ke(h,p){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:h}function Ye(h,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);h.prototype=Object.create(p&&p.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(h,p):h.__proto__=p)}var de={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ve=function(p){return p.code==="Tab"||p.keyCode===9},Ge=function(p){return p.code==="Escape"||p.keyCode===27},oe=0,pe=function(h){Ye(p,h);function p(w){ze(this,p);var o=Ke(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return o.setOverlayRef=function(l){o.overlay=l,o.props.overlayRef&&o.props.overlayRef(l)},o.setContentRef=function(l){o.content=l,o.props.contentRef&&o.props.contentRef(l)},o.afterClose=function(){var l=o.props,E=l.appElement,M=l.ariaHideApp,O=l.htmlOpenClassName,U=l.bodyOpenClassName,W=l.parentSelector,re=W&&W().ownerDocument||document;U&&k.remove(re.body,U),O&&k.remove(re.getElementsByTagName("html")[0],O),M&&oe>0&&(oe-=1,oe===0&&b.show(E)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(c.returnFocus(o.props.preventScroll),c.teardownScopedFocus()):c.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),te.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(c.setupScopedFocus(o.node),c.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var l=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:l},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(l){Ve(l)&&(0,u.default)(o.content,l),o.props.shouldCloseOnEsc&&Ge(l)&&(l.stopPropagation(),o.requestClose(l))},o.handleOverlayOnClick=function(l){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(l):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(l){!o.props.shouldCloseOnOverlayClick&&l.target==o.overlay&&l.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(l){return o.ownerHandlesClose()&&o.props.onRequestClose(l)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(l,E){var M=(typeof E>"u"?"undefined":r(E))==="object"?E:{base:de[l],afterOpen:de[l]+"--after-open",beforeClose:de[l]+"--before-close"},O=M.base;return o.state.afterOpen&&(O=O+" "+M.afterOpen),o.state.beforeClose&&(O=O+" "+M.beforeClose),typeof E=="string"&&E?O+" "+E:O},o.attributesFromObject=function(l,E){return Object.keys(E).reduce(function(M,O){return M[l+"-"+O]=E[O],M},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return i(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,l){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,l=o.appElement,E=o.ariaHideApp,M=o.htmlOpenClassName,O=o.bodyOpenClassName,U=o.parentSelector,W=U&&U().ownerDocument||document;O&&k.add(W.body,O),M&&k.add(W.getElementsByTagName("html")[0],M),E&&(oe+=1,b.hide(l)),te.default.register(this)}},{key:"render",value:function(){var o=this.props,l=o.id,E=o.className,M=o.overlayClassName,O=o.defaultStyles,U=o.children,W=E?{}:O.content,re=M?{}:O.overlay;if(this.shouldBeClosed())return null;var Qe={ref:this.setOverlayRef,className:this.buildClassName("overlay",M),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Je=n({id:l,ref:this.setContentRef,style:n({},W,this.props.style.content),className:this.buildClassName("content",E),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Xe=this.props.contentElement(Je,U);return this.props.overlayElement(Qe,Xe)}}]),p}(d.Component);pe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},pe.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(A.default),a.default.instanceOf(L.SafeHTMLCollection),a.default.instanceOf(L.SafeNodeList),a.default.arrayOf(a.default.instanceOf(A.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=pe,t.exports=e.default})(ve,ve.exports);var _n=ve.exports;function We(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function $e(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function He(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}We.__suppressDeprecationWarning=!0;$e.__suppressDeprecationWarning=!0;He.__suppressDeprecationWarning=!0;function Cn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var d=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=We,e.componentWillReceiveProps=$e),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=He;var a=e.componentDidUpdate;e.componentDidUpdate=function(c,g,u){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;a.call(this,c,g,v)}}return t}const En=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Cn},Symbol.toStringTag,{value:"Module"})),Sn=et(En);Object.defineProperty(q,"__esModule",{value:!0});q.bodyOpenClassName=q.portalClassName=void 0;var Ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mn=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),qe=I,se=Z(qe),Rn=tt,le=Z(Rn),Tn=Le,f=Z(Tn),kn=_n,Ee=Z(kn),Nn=D,Pn=Dn(Nn),F=P,Se=Z(F),jn=Sn;function Dn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function Z(t){return t&&t.__esModule?t:{default:t}}function Ln(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Me(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function An(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Fn=q.portalClassName="ReactModalPortal",In=q.bodyOpenClassName="ReactModal__Body--open",$=F.canUseDOM&&le.default.createPortal!==void 0,Re=function(e){return document.createElement(e)},Te=function(){return $?le.default.createPortal:le.default.unstable_renderSubtreeIntoContainer};function ae(t){return t()}var ee=function(t){An(e,t);function e(){var n,r,i,d;Ln(this,e);for(var y=arguments.length,a=Array(y),x=0;x<y;x++)a[x]=arguments[x];return d=(r=(i=Me(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!$&&le.default.unmountComponentAtNode(i.node);var c=ae(i.props.parentSelector);c&&c.contains(i.node)?c.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(c){i.portal=c},i.renderPortal=function(c){var g=Te(),u=g(i,se.default.createElement(Ee.default,Ce({defaultStyles:e.defaultStyles},c)),i.node);i.portalRef(u)},r),Me(i,d)}return Mn(e,[{key:"componentDidMount",value:function(){if(F.canUseDOM){$||(this.node=Re("div")),this.node.className=this.props.portalClassName;var r=ae(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=ae(r.parentSelector),d=ae(this.props.parentSelector);return{prevParent:i,nextParent:d}}},{key:"componentDidUpdate",value:function(r,i,d){if(F.canUseDOM){var y=this.props,a=y.isOpen,x=y.portalClassName;r.portalClassName!==x&&(this.node.className=x);var c=d.prevParent,g=d.nextParent;g!==c&&(c.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!a)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),d=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);d?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-i)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!$)return null;!this.node&&$&&(this.node=Re("div"));var r=Te();return r(se.default.createElement(Ee.default,Ce({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Pn.setElement(r)}}]),e}(qe.Component);ee.propTypes={isOpen:f.default.bool.isRequired,style:f.default.shape({content:f.default.object,overlay:f.default.object}),portalClassName:f.default.string,bodyOpenClassName:f.default.string,htmlOpenClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),overlayClassName:f.default.oneOfType([f.default.string,f.default.shape({base:f.default.string.isRequired,afterOpen:f.default.string.isRequired,beforeClose:f.default.string.isRequired})]),appElement:f.default.oneOfType([f.default.instanceOf(Se.default),f.default.instanceOf(F.SafeHTMLCollection),f.default.instanceOf(F.SafeNodeList),f.default.arrayOf(f.default.instanceOf(Se.default))]),onAfterOpen:f.default.func,onRequestClose:f.default.func,closeTimeoutMS:f.default.number,ariaHideApp:f.default.bool,shouldFocusAfterRender:f.default.bool,shouldCloseOnOverlayClick:f.default.bool,shouldReturnFocusAfterClose:f.default.bool,preventScroll:f.default.bool,parentSelector:f.default.func,aria:f.default.object,data:f.default.object,role:f.default.string,contentLabel:f.default.string,shouldCloseOnEsc:f.default.bool,overlayRef:f.default.func,contentRef:f.default.func,id:f.default.string,overlayElement:f.default.func,contentElement:f.default.func};ee.defaultProps={isOpen:!1,portalClassName:Fn,bodyOpenClassName:In,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return se.default.createElement("div",e,n)},contentElement:function(e,n){return se.default.createElement("div",e,n)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,jn.polyfill)(ee);q.default=ee;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=q,r=i(n);function i(d){return d&&d.__esModule?d:{default:d}}e.default=r.default,t.exports=e.default})(me,me.exports);var Un=me.exports;const Be=nt(Un),Wn=m.div`
  overflow-y: auto;
  height: 100%;
  padding-right: 16px;
  &::-webkit-scrollbar {
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 264px;
    background: transparent;
  }
`,$n=m.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`,Hn=m.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,qn=m.svg`
  cursor: pointer;
  width: 32px;
  height: 32px;
  stroke: ${C.darkText};
`,Bn=m.svg`
  width: 16px;
  height: 16px;
  fill: ${C.rating};
`,zn=m.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,Kn=m.svg`
  width: 14px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${C.darkText};
`,Yn=m.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Vn=m.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 16px;
`,Gn=m.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,he=m.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,Qn=m.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`,Jn=m.p`
  margin-top: 24px;
  color: ${C.lightText};
`,ke=m(ot)`
  color: ${C.darkText};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &.active {
    &::after {
      position: absolute;
      content: "";
      background-color: ${C.btn};
      height: 5px;
      width: 100%;
      bottom: -26px;
    }
  }
`,Xn=m.div`
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`,Zn={overlay:{backgroundColor:"rgba(17, 18, 19, 0.4)"},content:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#fff",borderRadius:"20px",padding:"40px 16px 40px 40px",width:"982px",height:"720px",overflowY:"hidden"}},eo=({isOpen:t,onRequestClose:e,camperInfo:n,pathForModal:r})=>{const{camperId:i}=rt(),d=Ne();I.useEffect(()=>{d(at(i))},[]);const{name:y,price:a,rating:x,location:c,description:g,gallery:u,reviews:v}=n;return s.jsx("div",{children:s.jsx(Be,{isOpen:t,onRequestClose:e,style:Zn,children:s.jsxs(Wn,{children:[s.jsxs("div",{children:[s.jsxs($n,{children:[s.jsx(Hn,{children:y}),s.jsx(qn,{onClick:()=>e(),children:s.jsx("use",{href:`${R}#icon-close`})})]}),s.jsxs(Vn,{children:[s.jsxs(zn,{children:[s.jsx(Bn,{children:s.jsx("use",{href:R+"#icon-star"})}),x," (",v.length," Reviews)"]}),s.jsxs(Yn,{children:[s.jsx(Kn,{children:s.jsx("use",{href:R+"#icon-location"})}),c.split(", ").reverse().join(", ")]})]}),s.jsxs(Gn,{children:["€",a,".00"]}),s.jsxs(Qn,{children:[s.jsx(he,{src:u[0],alt:y}),s.jsx(he,{src:u[1],alt:y}),s.jsx(he,{src:u[2],alt:y})]}),s.jsx(Jn,{children:g})]}),s.jsxs(Xn,{children:[s.jsx(ke,{to:`/${r}/${n._id}/features`,children:"Features"}),s.jsx(ke,{to:`/${r}/${n._id}/reviews`,children:"Reviews"})]}),s.jsx(I.Suspense,{children:s.jsx(it,{})})]})})})};Be.setAppElement("#root");const to=eo,no=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 28px;
  border: none;
  background: none;
  padding: 0;
`,oo=m.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke-width: 2.3px;
  transform: translateY(-50%);
  top: 50%;
  left: 11%;
`,ro=m.use`
  width: 24px;
  height: 24px;
`,ao=({item:t})=>{const[e,n]=I.useState(!1),r=Ne(),i=st(pt);I.useEffect(()=>{n(i.includes(t._id))},[t._id,i]);const d=()=>{const y=e?i.filter(a=>a!==t._id):[...new Set([...i,t._id])];localStorage.setItem(lt,JSON.stringify(y)),r(e?ct(t._id):ut(t._id)),n(!e)};return s.jsx(no,{onClick:d,children:s.jsx(oo,{children:s.jsx(ro,{href:R+"#icon-heart-null",style:{fill:e?"#E44848":"transparent",stroke:e?"#E44848":"#101828"}})})})};function io({camper:t,pathForModal:e}){const{_id:n,name:r,price:i,rating:d,location:y,adults:a,engine:x,transmission:c,description:g,details:u,gallery:v,reviews:b}=t,_=ft(),[k,L]=I.useState(!1),A=()=>{L(!0),document.body.style.overflow="hidden";const te=`/${e}/${n}`;_(te)},ue=()=>{L(!1),document.body.style.overflow="visible"};return s.jsxs(s.Fragment,{children:[s.jsxs(yt,{children:[s.jsx(gt,{src:v[0],alt:r}),s.jsxs(xt,{children:[s.jsxs(bt,{children:[s.jsx(wt,{children:r}),s.jsxs(Ot,{children:["€ ",i,".00",s.jsx(ao,{item:t})]})]}),s.jsxs(_t,{children:[s.jsxs(Ct,{children:[s.jsx("svg",{style:{width:"16px",height:"16px",marginRight:"4px",stroke:"black",fill:"white"},children:s.jsx("use",{href:R+"#icon-star"})}),d," (",b.length," Reviews)"]}),s.jsxs(Et,{children:[s.jsx("svg",{style:{width:"16px",height:"16px",marginRight:"4px",stroke:"black",fill:"white"},children:s.jsx("use",{href:R+"#icon-location"})}),y]})]}),s.jsx(St,{children:g.slice(0,60)+"..."}),s.jsxs(Mt,{children:[s.jsxs(B,{children:[s.jsx("svg",{style:{width:"20px",height:"20px",marginRight:"8px",fill:"black"},children:s.jsx("use",{href:R+"#icon-adults"})}),a," adults"]}),s.jsxs(B,{children:[s.jsx("svg",{style:{width:"20px",height:"20px",marginRight:"8px",stroke:"black",fill:"white"},children:s.jsx("use",{href:R+"#icon-automatic"})}),c]}),s.jsxs(B,{children:[s.jsx("svg",{style:{width:"20px",height:"20px",marginRight:"8px",fill:"black"},children:s.jsx("use",{href:R+"#icon-petrol"})}),x]}),u.kitchen&&s.jsxs(B,{children:[s.jsx("svg",{style:{width:"20px",height:"20px",marginRight:"8px",stroke:"black",fill:"white"},children:s.jsx("use",{href:R+"#icon-kitchen"})}),"Kitchen"]}),s.jsxs(B,{children:[s.jsx("svg",{style:{width:"20px",height:"20px",marginRight:"8px",stroke:"black",fill:"white"},children:s.jsx("use",{href:R+"#icon-beds"})}),u.beds," beds"]}),u.airConditioner&&s.jsxs(B,{children:[s.jsx("svg",{style:{width:"20px",height:"20px",marginRight:"8px",stroke:"black",fill:"white"},children:s.jsx("use",{href:R+"#icon-air-conditioner"})}),"AC"]})]}),s.jsx(Rt,{type:"submit",onClick:()=>A(),children:"Show more"})]})]},n),k&&s.jsx(to,{camperInfo:t,isOpen:k,onRequestClose:ue,pathForModal:e})]})}const so=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
`,lo=m.button`
  background-color: ${C.colorRed};
  color: ${C.colorWhite};
  width: 100%;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
`;function ho({campers:t,pathForModal:e}){const[n,r]=I.useState(4),i=t.slice(0,n),d=()=>{r(n+4)};return s.jsxs(so,{children:[s.jsx("ul",{children:i.map(y=>s.jsx(io,{camper:y,pathForModal:e},y._id))}),n<t.length&&s.jsx(lo,{onClick:d,children:"Load more..."})]})}export{ho as C,po as a,ht as b,pt as s};
