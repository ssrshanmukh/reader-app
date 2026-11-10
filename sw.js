const C='sbs-v8';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'])))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!=='sbs-inbox').map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{
const r=e.request,u=new URL(r.url);
if(r.method==='POST'&&u.origin===location.origin&&u.pathname.endsWith('/share-target')){
e.respondWith((async()=>{try{const fd=await r.formData(),c=await caches.open('sbs-inbox');let i=0;
for(const f of fd.getAll('zips')){if(!f||!f.name)continue;await c.put('/inbox/'+Date.now()+'-'+(i++),new Response(f,{headers:{'x-name':encodeURIComponent(f.name)}}))}}catch(err){}
return Response.redirect('./?inbox=1',303)})());return}
if(r.method!=='GET'||u.origin!==location.origin)return;
e.respondWith(fetch(r).then(res=>{if(res.ok){const k=res.clone();caches.open(C).then(c=>c.put(r,k))}return res}).catch(()=>caches.match(r,{ignoreSearch:true}).then(x=>x||caches.match('index.html'))))});
