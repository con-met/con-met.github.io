(self.webpackChunkconnessioni_metropolitane=self.webpackChunkconnessioni_metropolitane||[]).push([[485],{7757:function(t,e,r){t.exports=r(5666)},7198:function(t,e,r){"use strict";var n=r(7294),o=r(1246),a=r(5610),i=r(3039),c=r(5360),l=(0,i.loadStripe)("pk_live_51JSoCCJMzgZXrTSfThco77AU3gAgoJSXJdClY0msBR7Z3r3E7v38j1O17u0cDC9vwAbfdvS522hISYXEQ5n7ccn400AT2T3NaN");e.Z=function(t){t.hero;var e=t.children;return n.createElement("div",null,n.createElement(o.Z,{hero:!0}),n.createElement("main",null,n.createElement(c.Elements,{stripe:l},e),";"),n.createElement(a.Z,null))}},2089:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(7294),o=r(7198);function a(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}var i=r(7757),c=r.n(i),l=r(9573),s=r(5360),u=function(){var t=(0,s.useStripe)(),e=(0,s.useElements)(),r=function(){var t,e=(t=c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,l,"next",t)}function l(t){a(i,n,o,c,l,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();return n.createElement("section",{id:"service",className:"relative services-area py-120"},n.createElement("div",{className:"container"},n.createElement("div",{className:"flex"},n.createElement("div",{className:"w-full mx-4 lg:w-1/2"},n.createElement("div",{className:"pb-10 section-title"},n.createElement("h4",{className:"title"},"Vuoi pagare la tua fattura?"),n.createElement("p",{className:"text"},"Utilizza la form per effettuare il pagamento.")))),n.createElement("div",{className:"flex"},n.createElement("div",{className:"w-full lg:w-2/3"},n.createElement("div",{className:"row"},n.createElement("div",{className:"w-full "},n.createElement("div",{className:"block mx-4 services-content sm:flex"},n.createElement("div",{className:"services-icon"},n.createElement("i",{className:"lni-bolt"})),n.createElement("div",{className:"mb-8 ml-0 services-content media-body sm:ml-3"},n.createElement("h4",{className:"services-title"},"Pagamento"),n.createElement("p",{className:"text"},"Short description for the ones who look for something new."),n.createElement("form",{id:"payment-form",onSubmit:r},n.createElement(s.PaymentElement,{id:"card-element"}),n.createElement("button",{disabled:!t||!e,id:"submit"},n.createElement("span",{id:"button-text"},"Pay ",1," €")))))))))),n.createElement("div",{className:"services-image"},n.createElement("div",{className:"image"},n.createElement("img",{src:l.Z,alt:"Services"}))))},f=function(t){t.hero;return n.createElement(o.Z,null,n.createElement(u,null))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",m="executing",p="completed",v={};function d(){}function y(){}function g(){}var w={};l(w,a,(function(){return this}));var E=Object.getPrototypeOf,b=E&&E(E(O([])));b&&b!==r&&n.call(b,a)&&(w=b);var x=g.prototype=d.prototype=Object.create(w);function N(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=g,l(x,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},N(L.prototype),l(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},9573:function(t,e,r){"use strict";e.Z=r.p+"static/services-37f6559cfbd43ac0d712d7f2566c2a40.png"}}]);
//# sourceMappingURL=component---src-pages-payment-js-3e299f5fafad49a9266a.js.map