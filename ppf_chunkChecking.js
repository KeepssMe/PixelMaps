(()=>{const n=([n,t,e])=>[.1*n,.1*t,.1*e],t=(...n)=>postMessage(n);self.onmessage=e=>{switch(e.data[0]){case 0:((n,e,o)=>{const s=new Uint8ClampedArray(n.byteLength>>2),c=[];c.length=s.length;const r=new Map;e.forEach((([n,t,e],s)=>{s>=o&&r.set(n<<16|t<<8|e,s)}));const a=(n,t,s)=>{const c=n<<16|t<<8|s;let a=r.get(c);return void 0===a&&(a=e.map(((e,c)=>{if(!(c<o))return[Math.sqrt((n-e[0])**2+(t-e[1])**2+(s-e[2])**2),c]})).filter((n=>n)).sort(((n,t)=>n[0]-t[0]))[0][1],r.set(c,a)),a};for(let t=0;t<s.length;t++){const e=t<<2;255===n[e+3]?(c[t]=!0,s[t]=a(n[e],n[e+1],n[e+2])):c[t]=!1}t(c,s)})(e.data[1],e.data[2],e.data[3]);break;case 1:((e,o,s,c,r)=>{const a=new Uint8ClampedArray(o.byteLength<<2),i=new Map;c.forEach((([n,t,e],o)=>{o>=r&&i.set(n<<16|t<<8|e,o)}));const l=c.map((([n,t,e])=>i.get(n<<16|t<<8|e)));for(let t=0;t<o.length;t++){if(!e[t])continue;const r=s[t],[i,f,p]=o[t]===l[r]?n(c[r]):(c[r],[255,0,0]),w=t<<2;a[w]=i,a[w+1]=f,a[w+2]=p,a[w+3]=255}t(a)})(e.data[1],e.data[2],e.data[3],e.data[4],e.data[5]);break;case 2:((e,o,s,c)=>{const r=new Uint8ClampedArray(e.byteLength),a=new Uint8ClampedArray(e.byteLength>>2),i=[];i.length=a.length;const l=new Map;s.forEach((([n,t,e],o)=>{o>=c&&l.set(n<<16|t<<8|e,o)}));const f=s.map((([n,t,e])=>l.get(n<<16|t<<8|e))),p=(n,t,e)=>{const o=n<<16|t<<8|e;let r=l.get(o);return void 0===r&&(r=s.map(((o,s)=>{if(!(s<c))return[Math.sqrt((n-o[0])**2+(t-o[1])**2+(e-o[2])**2),s]})).filter((n=>n)).sort(((n,t)=>n[0]-t[0]))[0][1],l.set(o,r)),r};for(let t=0;t<a.length;t++){const c=t<<2;if(255!==e[c+3]){i[t]=!1;continue}i[t]=!0,a[t]=p(e[c],e[c+1],e[c+2]);const l=o[t],[w,d,u]=a[t]===f[l]?n(s[l]):(s[l],[255,0,0]);r[c]=w,r[c+1]=d,r[c+2]=u,r[c+3]=255}t(i,a,r)})(e.data[1],e.data[2],e.data[3],e.data[4])}}})();