var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var i,o,a,r,f,u,l=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,l=t,r=e.apply(a,n)}function j(e){return l=e,f=setTimeout(S,t),c?y(e):r}function O(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=a}function S(){var e=d();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return g?m(n,a-(e-l)):n}(e))}function h(e){return f=void 0,b&&i?y(e):(i=o=void 0,r)}function w(){var e=d(),n=O(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(g)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),r}return t=p(t)||0,v(n)&&(c=!!n.leading,a=(g="maxWait"in n)?s(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},w.flush=function(){return void 0===f?r:h(d())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||a.test(e)?r(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form button");({email:email,message:message}=b.elements);(()=>{let e=localStorage.getItem("feedback-form-state");null!==e?(email.value=JSON.parse(e).email,message.value=JSON.parse(e).message):console.log("no data in storage")})();const j={email:email,message:message};b.addEventListener("input",t((e=>{j.email=email.value,j.message=message.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("click",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),email.value="",message.value="",console.log(j)}));
//# sourceMappingURL=03-feedback.35078615.js.map