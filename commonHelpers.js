import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as S,i as f}from"./assets/vendor-77e16229.js";const m=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]");let o,n,r,a=!1,s;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(n=e[0],!n){t.disabled=!0,a=!1,o&&clearInterval(o);return}n<s?(t.disabled=!0,f.error({title:"Error",message:"Please choose a date in the future"}),h({days:0,hours:0,minutes:0,seconds:0}),a=!1):(t.disabled=!1,clearInterval(o),y(n.getTime()-s.getTime()),a=!1)}};s=new Date;S("#datetime-picker",v);t.addEventListener("click",w);function l(){if(s=new Date,r<=0)clearInterval(o),t.disabled=!0,m.disabled=!1;else{const{days:e,hours:d,minutes:u,seconds:i}=y(r);h({days:e,hours:d,minutes:u,seconds:i})}r=r-1e3}t.disabled=!0;function w(){if(!n){f.error({title:"Error",message:"Please choose a date in the future"});return}a||(r=n.getTime()-s.getTime(),a=!0),l(),t.disabled=!0,m.disabled=!0,clearInterval(o),o=setInterval(l,1e3)}function h({days:e,hours:d,minutes:u,seconds:i}){document.querySelector("[data-days]").textContent=c(e),document.querySelector("[data-hours]").textContent=c(d),document.querySelector("[data-minutes]").textContent=c(u),document.querySelector("[data-seconds]").textContent=c(i)}function c(e){return e.toString().padStart(2,"0")}function y(e){const b=Math.floor(e/864e5),g=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),I=Math.floor(e%864e5%36e5%6e4/1e3);return{days:b,hours:g,minutes:p,seconds:I}}
//# sourceMappingURL=commonHelpers.js.map
