const json=async(r:Response)=>{const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'Request failed');return d};
export const api={
 get:(u:string)=>fetch('/api'+u).then(json),
 post:(u:string,b:any)=>fetch('/api'+u,{method:'POST',headers:{'Content-Type':'application/json',...(token()?{Authorization:`Bearer ${token()}`}:{})},body:JSON.stringify(b)}).then(json),
 put:(u:string,b:any)=>fetch('/api'+u,{method:'PUT',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token()}`},body:JSON.stringify(b)}).then(json),
 del:(u:string)=>fetch('/api'+u,{method:'DELETE',headers:{Authorization:`Bearer ${token()}`}}).then(r=>r.status===204?null:json(r)),
 upload:(u:string,form:FormData)=>fetch('/api'+u,{method:'POST',headers:{Authorization:`Bearer ${token()}`},body:form}).then(json)
};
export const token=()=>localStorage.getItem('gallery_admin_token'); export const setToken=(t:string)=>localStorage.setItem('gallery_admin_token',t); export const clearToken=()=>localStorage.removeItem('gallery_admin_token');
