
const $=id=>document.getElementById(id),S=window.SITE,esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const here=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('on')});
if($('axes'))$('axes').innerHTML=AXES.map((a,i)=>`<article class="card" id="ax${i+1}"><h3><span>${i+1}.</span>${a[0]}</h3><p>${a[1]}</p><ul>${a[2].map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
if($('chips'))$('chips').innerHTML=AXES.map((a,i)=>`<a href="program.html#ax${i+1}">${i+1}. ${a[0]}</a>`).join('');
const fd=d=>{try{return new Date(d).toLocaleDateString('ar-DZ',{year:'numeric',month:'long',day:'numeric'})}catch(e){return d}};
const items=n=>[...S.news].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n||99).map(x=>`<article class="ni">${x.image?`<img src="${esc(x.image)}" alt="${esc(x.title)}" loading="lazy">`:'<span></span>'}<div><time datetime="${esc(x.date)}">${fd(x.date)}</time><h3>${esc(x.title)}</h3><p>${esc(x.body)}</p></div></article>`).join('')||'<div class="empty">لا توجد منشورات بعد. ستظهر هنا أخبار الحملة والأنشطة واللقاءات.</div>';
if($('latest'))$('latest').innerHTML=items(3);
if($('newslist'))$('newslist').innerHTML=items();
if($('galgrid'))$('galgrid').innerHTML=S.gallery.map(g=>`<figure data-t="${esc(g.type)}"><a href="${esc(g.src)}" target="_blank" rel="noopener"><img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"></a><figcaption>${esc(g.cap)} — ${esc(g.type)}</figcaption></figure>`).join('');
const cf=$('cf');if(cf)cf.addEventListener('submit',async e=>{e.preventDefault();const f=cf,st=$('st');if(f.website.value)return;
 if(S.formAction){try{const r=await fetch(S.formAction,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});st.textContent=r.ok?'تم إرسال رسالتك. شكراً لك.':'تعذر الإرسال، حاول لاحقاً.';if(r.ok)f.reset()}catch(_){st.textContent='تعذر الإرسال، حاول لاحقاً.'}return}
 if(!S.email){st.textContent='خدمة المراسلة غير مفعّلة بعد.';return}
 location.href='mailto:'+S.email+'?subject='+encodeURIComponent(f.s.value)+'&body='+encodeURIComponent(f.m.value+'\n\n'+f.n.value+(f.e.value?' — '+f.e.value:''));});
