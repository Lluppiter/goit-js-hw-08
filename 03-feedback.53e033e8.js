!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(O,t),s?p(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=b();if(S(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function T(e){return u=void 0,m&&o?p(e):(o=i=void 0,f)}function w(){var e=b(),n=S(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(d)return u=setTimeout(O,t),p(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=h(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},w.flush=function(){return void 0===u?f:T(b())},w}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=f.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");j.addEventListener("input",n((function(e){e.preventDefault();try{var t=e.currentTarget.elements,n=t.email,o=t.message,r={email:n.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}catch(e){}}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),null!==localStorage.getItem("feedback-form-state")&&console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),j.reset()}));var S=localStorage.getItem("feedback-form-state"),O=JSON.parse(S);try{j.email.value=O.email,j.message.value=O.message}catch(e){console.log("form not completed")}}();
//# sourceMappingURL=03-feedback.53e033e8.js.map
