const key='the_n_discount_v1';
const r=document.getElementById('result');
const b=document.getElementById('drawBtn');
function show(v){
 b.style.display='none';
 r.innerHTML=`<h2>🎉 مبروك!</h2><div style="font-size:42px;color:#d4af37">${v}</div><p>تم حفظ خصمك لهذا الجهاز.</p>`;
}
const saved=localStorage.getItem(key);
if(saved){show(saved);}
else{
 b.onclick=()=>{
  const d=Math.random()<0.5?'15%':'20%';
  localStorage.setItem(key,d);
  show(d);
 };
}