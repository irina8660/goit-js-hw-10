import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as d}from"./assets/vendor-BbbuE1sJ.js";const e={startButton:document.querySelector("[data-start]"),datetimePicker:document.querySelector("#datetime-picker")};e.startButton.disabled=!0;let i="";const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>new Date?(i=t[0],e.startButton.disabled=!1):(d.error({title:"Error",message:"Please choose a date in the future"}),e.startButton.disabled=!0)}};h(e.datetimePicker,y);function p(t){const c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%36e5/6e4),f=Math.floor(t%6e4/1e3);return{days:c,hours:l,minutes:m,seconds:f}}function r(t){return String(t).padStart(2,"0")}function s({days:t,hours:n,minutes:o,seconds:a}){document.querySelector("[data-days]").textContent=r(t),document.querySelector("[data-hours]").textContent=r(n),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(a)}let u;function S(){e.startButton.disabled=!0,e.datetimePicker.disabled=!0,u=setInterval(()=>{const n=i-new Date;if(n<=0){clearInterval(u),s({days:0,hours:0,minutes:0,seconds:0}),d.success({title:"Time's up!",message:"The countdown has ended!"}),e.datetimePicker.disabled=!1;return}const o=p(n);s(o)},1e3)}e.startButton.addEventListener("click",S);
//# sourceMappingURL=1-timer.js.map
