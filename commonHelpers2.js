import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const n=document.querySelector("form"),r=document.querySelector('input[name="delay"]'),u=document.querySelectorAll('input[name="state"]'),m=document.querySelector('button[type="reset"]');n.addEventListener("submit",function(o){if(o.preventDefault(),!r.checkValidity()||!i()){s.error({title:"Error",message:"Please fill in all fields",position:"topRight"});return}const e=parseInt(r.value,10),l=i();new Promise((t,a)=>{setTimeout(()=>{l==="fulfilled"?t(e):a(e)},e)}).then(t=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{s.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})}),c()});m.addEventListener("click",c);function i(){let o="";return u.forEach(e=>{e.checked&&(o=e.value)}),o}function c(){n.reset()}
//# sourceMappingURL=commonHelpers2.js.map