var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a("kEUo3");const l=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),i="feedback-form-state";l.addEventListener("input",(0,o.throttle)((e=>{const t={email:n.value,message:u.value};localStorage.setItem(i,JSON.stringify(t))}),500)),l.addEventListener("submit",(e=>{if(e.preventDefault(),""===n.value||""===u.value)return alert("Заповніть всі поля!");console.log({email:n.value,message:u.value}),l.reset(),localStorage.removeItem(i)}));const s=(e=>{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)})(i);s&&(n.value=s.email,u.value=s.message);
//# sourceMappingURL=03-feedback.3893d4a9.js.map