const myModule=(()=>{"use strict";let e=e=>4*e,t=e=>e*e,l=document.getElementById("btnpcu"),n=document.getElementById("btnacu"),d=document.getElementById("btnpt"),i=document.getElementById("btnat"),c=document.getElementById("btndci"),r=document.getElementById("btnaci"),u=document.getElementById("btnpci");l.addEventListener("click",()=>{let t=Number(document.getElementById("sidec").value),l=`El perimetro del cuadrado es: ${e(t)} cm`;document.getElementById("result").innerText=l}),n.addEventListener("click",function(){let e=Number(document.getElementById("sidec").value),l=`El \xe1rea del cuadrado es: ${t(e)} cm`;document.getElementById("result").innerText=l}),d.addEventListener("click",function(e,t,l){let n=Number((e=document.getElementById("side1")).value),d=Number((t=document.getElementById("side2")).value),i=Number((l=document.getElementById("side3")).value),c=`El perimetro del triangulo es: ${n+d+i} cm`;document.getElementById("result").innerText=c}),i.addEventListener("click",function(e,t){e=document.getElementById("side4"),t=document.getElementById("side5");let l=Number(e.value),n=Number(t.value),d=`El \xe1rea del triangulo es: ${l*n/2} cm<sup>2</sup>`;document.getElementById("result").innerHTML=d}),u.addEventListener("click",function(e){let t=Number((e=document.getElementById("radioc")).value),l=`El perimetro del circulo es: ${2*Math.PI*t} cm`;document.getElementById("result").innerText=l}),r.addEventListener("click",function(e){let t=Number((e=document.getElementById("radioc")).value),l=`El \xe1rea del circulo es: ${Math.PI*Math.pow(t,2)} cm<sup>2</sup>`;document.getElementById("result").innerHTML=l}),c.addEventListener("click",function(e){let t=Number((e=document.getElementById("radioc")).value),l=`El di\xe1metro del circulo es: ${2*t} cm<sup>2</sup>`;document.getElementById("result").innerHTML=l})})();