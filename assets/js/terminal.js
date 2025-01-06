document.addEventListener("DOMContentLoaded",function(){function e(){const e=document.createElement("div");e.classList.add("terminal-input");const n=document.createElement("span");n.classList.add("user"),n.textContent="H4r1@kali:~$";const o=document.createElement("input");o.type="text",o.id="command-line",o.autofocus=!0,o.autocomplete="off",e.appendChild(n),e.appendChild(o),i.appendChild(e),o.focus(),o.addEventListener("keydown",function(n){if("Enter"===n.key){t(o.value.trim(),e),o.disabled=!0}})}function t(t){let n,o=document.createElement("div");if(r[t]){if("clear"===t)return i.innerText="",void e();n=r[t]}else n=`Command not found: ${t}`;o.innerText=n,i.appendChild(o),i.scrollTop=i.scrollHeight,e()}const n=document.getElementById("terminal"),o=document.getElementById("terminal-header"),i=document.getElementById("terminal-body");if(!n||!o||!i)return void console.error("Required elements are missing from the DOM.");let d=!1,s=0,a=0;o.addEventListener("mousedown",e=>{d=!0,s=e.clientX-n.offsetLeft,a=e.clientY-n.offsetTop,n.style.cursor="grabbing"}),document.addEventListener("mouseup",()=>{d=!1,n.style.cursor="default"}),document.addEventListener("mousemove",e=>{if(d){let t=e.clientX-s,o=e.clientY-a;const i=window.innerWidth,d=window.innerHeight;t<0&&(t=0),o<0&&(o=0),t+n.offsetWidth>i&&(t=i-n.offsetWidth),o+n.offsetHeight>d&&(o=d-n.offsetHeight),n.style.left=`${t}px`,n.style.top=`${o}px`}});const r={whoami:'I am the shadow in the digital abyss, a nameless specter in the underground. A hacker, not by title, but by instinct\u2014driven by the thirst to break, to breach, and to understand what others fear to touch. I am a "newbie" by choice, for in the darkness, there is always more to learn. Web technologies, the veins of the digital world, are my playground, and the underground is where I sharpen my skills.\n\n My mission is not to destroy, but to protect, to expose vulnerabilities before they can be exploited. I am the chaos in the system, the glitch in the matrix, the one who watches and waits.\n    ',help:"Available commands: whoami, help, clear",clear:"clear"};e()});