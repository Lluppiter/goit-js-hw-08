var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,f,u,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,f=setTimeout(T,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=r}function T(){var e=m();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-u);return v?d(n,r-(e-c)):n}(e))}function w(e){return f=void 0,y&&o?b(e):(o=i=void 0,a)}function O(){var e=m(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(v)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},O.flush=function(){return void 0===f?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("submit",t((e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget,o={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(o)),console.log(o),y.reset()}),500));const b=localStorage.getItem("feedback-form-state"),h=JSON.parse(b);try{y.email.value=h.email,y.message.value=h.message}catch(e){console.log("form not completed")}
//# sourceMappingURL=03-feedback.0fcfdf45.js.map
